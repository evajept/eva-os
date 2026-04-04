import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  // Verify this is a cron call (Vercel sends this header)
  const authHeader = req.headers['authorization'];
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

  if (!ANTHROPIC_API_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
    return res.status(500).json({ error: 'Missing environment variables' });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  try {
    // Load current month habits
    const today = new Date();
    const ym = today.toISOString().slice(0, 7);
    const day = today.getDate();

    const { data: habitsRow } = await supabase
      .from('kv_store')
      .select('value')
      .eq('key', 'habits2_' + ym)
      .single();

    const habits = habitsRow ? JSON.parse(habitsRow.value) : {};

    // Load metrics
    const { data: metricsRow } = await supabase
      .from('kv_store')
      .select('value')
      .eq('key', 'metrics_v1')
      .single();

    const metrics = metricsRow ? JSON.parse(metricsRow.value) : { entries: [], bodyEntries: [], conditions: {} };

    // Build last 7 days summary
    const startDay = Math.max(1, day - 6);
    const summary = {};
    const habitKeys = ['sleep', 'move', 'water', 'food', 'meditation', 'statecheck', 'work', 'selfcare',
      'selen', 'd3k2', 'magnesium', 'myoinositol', 'berberine',
      'gratitude', 'skincare', 'posture', 'nosugar', 'homereset', 'create', 'connect', 'mood', 'daytype'];

    for (let d = startDay; d <= day; d++) {
      const dayData = {};
      habitKeys.forEach(k => {
        const val = habits[d + '_' + k];
        if (val !== undefined) dayData[k] = val;
      });
      if (Object.keys(dayData).length > 0) summary['Day ' + d] = dayData;
    }

    if (Object.keys(summary).length === 0) {
      return res.status(200).json({ message: 'No habit data this week, skipping report' });
    }

    // Call Claude for analysis
    const prompt = `You are Evalynn's Health Officer generating a weekly auto-report. Be sharp and direct. No em-dashes.

This week's habit data:
${JSON.stringify(summary, null, 2)}

Latest blood work: ${metrics.entries?.[0] ? JSON.stringify(metrics.entries[0]) : 'None'}
Health conditions: ${JSON.stringify(metrics.conditions || {})}

Respond ONLY with JSON (no markdown, no backticks):
{
  "overall_score": <1-10>,
  "sleep_avg": <number or null>,
  "top_concern": "<one sentence>",
  "top_win": "<one sentence>",
  "action": "<one specific recommendation>",
  "weekly_summary": "<2-3 sentence summary>"
}`;

    const claudeResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const claudeData = await claudeResponse.json();
    const text = claudeData.content?.find(b => b.type === 'text')?.text || '';
    const clean = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const analysis = JSON.parse(clean);

    // Save to history
    const { data: historyRow } = await supabase
      .from('kv_store')
      .select('value')
      .eq('key', 'health-officer-history')
      .single();

    const history = historyRow ? JSON.parse(historyRow.value) : [];
    const entry = {
      timestamp: new Date().toISOString(),
      analysis,
      alerts: [],
      rawJSON: clean,
      source: 'cron-auto',
    };
    const updatedHistory = [entry, ...history].slice(0, 20);

    await supabase.from('kv_store').upsert({
      key: 'health-officer-history',
      value: JSON.stringify(updatedHistory),
      updated_at: new Date().toISOString(),
    }, { onConflict: 'key' });

    // Send to Slack if configured
    if (SLACK_WEBHOOK_URL) {
      const emoji = analysis.overall_score >= 8 ? ':white_check_mark:' : analysis.overall_score >= 5 ? ':warning:' : ':red_circle:';
      const slackText = `${emoji} *Weekly Health Report* (Score: ${analysis.overall_score}/10)\n\n` +
        `*Sleep:* ${analysis.sleep_avg || '-'}h avg\n` +
        `*Win:* ${analysis.top_win}\n` +
        `*Concern:* ${analysis.top_concern}\n` +
        `*Action:* ${analysis.action}\n\n` +
        `${analysis.weekly_summary}`;

      await fetch(SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: slackText }),
      });
    }

    return res.status(200).json({ ok: true, analysis, sentToSlack: !!SLACK_WEBHOOK_URL });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
