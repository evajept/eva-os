export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' });
  }

  const { promptA, promptB, model, max_tokens } = req.body;

  const callClaude = async (messages) => {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({ model, max_tokens, messages }),
    });
    return response.json();
  };

  try {
    const [resultA, resultB] = await Promise.all([
      callClaude(promptA),
      callClaude(promptB),
    ]);

    return res.status(200).json({ resultA, resultB });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
