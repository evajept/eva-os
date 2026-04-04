import React, { useState, useEffect, useRef } from "react";
import { osLoad, osSave } from "./storage.js";
const L={bg:"#ffffff",bgH:"#f7f7f5",bgS:"#f7f7f5",bgCode:"#f7f6f3",tx:"#1a1a1a",txS:"#4a4a4a",txT:"#7a7a7a",bdr:"#e9e9e7",bdrH:"#d3d3d0",blue:"#2eaadc",blueBg:"#d3e5ef",red:"#e03e3e",redBg:"#fbe4e4",green:"#0f7b6c",greenBg:"#dbeddb",yellow:"#dfab01",yellowBg:"#fdecc8",purple:"#6940a5",purpleBg:"#e8deee",orange:"#d9730d",orangeBg:"#fadec9",pink:"#ad1a72",pinkBg:"#f4dfeb",brown:"#9f6b53",brownBg:"#e9e5e3",gold:"#9a7b2e",goldBg:"#faf5e8",bloodRed:"#8b2020",bloodRedBg:"#fdf5f5",ocean:"#2a5a8a",oceanBg:"#f0f5fa",pisces:"#5a3a8a",piscesBg:"#f5f0fa",virgo:"#2a6a3a",virgoBg:"#f0faf2",aries:"#b83a1a",ariesBg:"#fdf2ee",scorpio:"#6a1a2a",scorpioBg:"#faf0f2",aquarius:"#1a5a7a",aquariusBg:"#eef5fa"};
const D={bg:"#191919",bgH:"#222222",bgS:"#222222",bgCode:"#252525",tx:"#e0e0e0",txS:"#a0a0a0",txT:"#686868",bdr:"#333333",bdrH:"#444444",blue:"#4db8e8",blueBg:"#1a2e3a",red:"#f06060",redBg:"#3a1a1a",green:"#2eb89a",greenBg:"#1a2e28",yellow:"#f0c030",yellowBg:"#3a3018",purple:"#9070d0",purpleBg:"#2a2040",orange:"#f0a040",orangeBg:"#3a2818",pink:"#d060a0",pinkBg:"#3a1a2e",brown:"#c09070",brownBg:"#2e2828",gold:"#d0a840",goldBg:"#2e2818",bloodRed:"#d04040",bloodRedBg:"#2e1818",ocean:"#50a0d0",oceanBg:"#182838",pisces:"#9070c0",piscesBg:"#282040",virgo:"#50b070",virgoBg:"#183020",aries:"#e06040",ariesBg:"#302018",scorpio:"#c05060",scorpioBg:"#2e1820",aquarius:"#40a0c0",aquariusBg:"#182830"};
const ThemeCtx=({children})=>{const[dark,setDark]=useState(false);useEffect(()=>{(async()=>{try{const r=await osLoad("theme-mode","light");if(r==="dark")setDark(true);}catch(e){}})();},[]);const toggle=()=>{const n=!dark;setDark(n);(async()=>{try{await osSave("theme-mode",n?"dark":"light");}catch(e){}})();};return children({dark,toggle,C:dark?D:L});};
let C=L;
const F={serif:'"Crimson Pro","Georgia",serif',sans:'"Karla","system-ui",sans-serif',mono:'"SFMono-Regular","Menlo","Consolas",monospace'};
function useIV(t=0.1){const r=useRef(null);const[v,setV]=useState(false);useEffect(()=>{const e=r.current;if(!e)return;const o=new IntersectionObserver(([x])=>{if(x.isIntersecting){setV(true);o.disconnect();}},{threshold:t});o.observe(e);return()=>o.disconnect();},[t]);return[r,v];}
function Fade({children,delay=0}){const[r,v]=useIV();return(<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(12px)",transition:`opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`}}>{children}</div>);}
const Dv=()=><div style={{height:1,background:C.bdr,margin:"4px 0"}}/>;
const Tag=({children,color})=>{const m={blue:{bg:C.blueBg,c:C.blue},green:{bg:C.greenBg,c:C.green},red:{bg:C.redBg,c:C.red},yellow:{bg:C.yellowBg,c:"#856d0a"},purple:{bg:C.purpleBg,c:C.purple},orange:{bg:C.orangeBg,c:C.orange}};const s=m[color]||{bg:C.bgS,c:C.tx};return(<span style={{display:"inline-flex",padding:"2px 8px",borderRadius:3,fontSize:12,fontFamily:F.sans,fontWeight:500,background:s.bg,color:s.c,lineHeight:"20px",whiteSpace:"nowrap"}}>{children}</span>);};
const H1=({children,style:sx})=><h1 style={{fontFamily:F.serif,fontSize:28,fontWeight:700,color:C.tx,margin:"0 0 8px",lineHeight:1.2,...sx}}>{children}</h1>;
const H2=({children,style:sx})=><h2 style={{fontFamily:F.serif,fontSize:20,fontWeight:600,color:C.tx,margin:"24px 0 8px",...sx}}>{children}</h2>;
const H3=({children,style:sx})=><h3 style={{fontFamily:F.serif,fontSize:16,fontWeight:600,color:C.tx,margin:"16px 0 6px",...sx}}>{children}</h3>;
const P=({children,style:sx})=><p style={{fontFamily:F.sans,fontSize:15,color:C.tx,lineHeight:1.65,margin:"0 0 8px",...sx}}>{children}</p>;
const Ps=({children,style:sx})=><p style={{fontFamily:F.sans,fontSize:14,color:C.txS,lineHeight:1.65,margin:"0 0 12px",...sx}}>{children}</p>;
const Pill=({children,color,bg})=><span style={{display:"inline-flex",padding:"2px 8px",borderRadius:12,fontSize:12,fontFamily:F.sans,fontWeight:500,background:bg||C.bgS,color:color||C.txS,lineHeight:"18px",whiteSpace:"nowrap"}}>{children}</span>;
const Call=({children,emoji,bg})=><div style={{padding:"12px 16px",background:bg||C.yellowBg,borderRadius:4,fontFamily:F.sans,fontSize:14,lineHeight:1.6,color:C.tx,display:"flex",gap:10,alignItems:"flex-start"}}><span style={{fontSize:16,flexShrink:0}}>{emoji}</span><div>{children}</div></div>;
const Cd=({children,bg,accent})=><div style={{padding:"12px 14px",background:bg||C.bgS,borderRadius:4,borderLeft:`3px solid ${accent||C.bdr}`}}>{children}</div>;
const HL=({children,color})=><span style={{background:color?undefined:C.yellowBg,color:color||C.tx,padding:"0 3px",borderRadius:2}}>{children}</span>;
function ABar({value}){return(<div style={{display:"flex",alignItems:"center",gap:5}}><div style={{flex:1,height:5,background:C.bgS,borderRadius:3,overflow:"hidden"}}><div style={{width:`${(value/10)*100}%`,height:"100%",background:value>=8?C.green:value>=6?C.orange:C.red,borderRadius:3}}/></div><span style={{fontSize:12,fontWeight:600,color:value>=8?C.green:value>=6?C.orange:C.red,fontFamily:F.mono,minWidth:16,textAlign:"right"}}>{value}</span></div>);}
function Collapse({title,icon,color,open:dO,children}){const[o,setO]=useState(dO||false);return(<div style={{marginBottom:6}}><div onClick={()=>setO(!o)} style={{padding:"12px 0",cursor:"pointer",display:"flex",alignItems:"center",gap:10}}><span style={{fontSize:15,width:22,textAlign:"center",flexShrink:0}}>{icon}</span><span style={{fontFamily:F.sans,fontSize:15,fontWeight:600,color:C.tx,flex:1}}>{title}</span><span style={{fontSize:11,color:C.txT,transform:o?"rotate(90deg)":"rotate(0)",transition:"transform 0.15s"}}>&#9654;</span></div>{o&&<div style={{paddingTop:8}}>{children}</div>}</div>);}
const osTa=({value,onChange,placeholder,rows})=><textarea value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} rows={rows||3} style={{border:`1px solid ${C.bdr}`,borderRadius:4,padding:"10px 12px",fontSize:14,color:C.tx,background:C.bgS,outline:"none",fontFamily:F.sans,width:"100%",boxSizing:"border-box",resize:"vertical",lineHeight:1.6}}/>;
const osBtn=({children,onClick,variant,style:sx,disabled})=>{const s={primary:{background:C.green,color:"#fff"},ghost:{background:"transparent",color:C.green,border:`1px solid ${C.green}`},danger:{background:C.red,color:"#fff"}};return(<button onClick={onClick} disabled={disabled} style={{padding:"9px 18px",borderRadius:4,border:"none",cursor:disabled?"not-allowed":"pointer",fontSize:13,fontWeight:600,fontFamily:F.sans,opacity:disabled?0.6:1,...(s[variant||"primary"]||s.primary),...sx}}>{children}</button>);};
const MONTHS_LIST=["January","February","March","April","May","June","July","August","September","October","November","December"];

// ══════════════════════════════════════════════════════════════
// NEW ENHANCED HABITS TRACKER
// ══════════════════════════════════════════════════════════════

const HABIT_SECTIONS = [
  { key: "essentials", label: "Essentials", items: [
    { id: "sleep", label: "Sleep", type: "cycle", values: ["-","4","5","6","7","8","9+"], colors: {"-":"none","4":"bad","5":"warn","6":"val","7":"good","8":"good","9+":"good"} },
    { id: "move", label: "Move body", type: "cycle", values: ["-","W","Y","G","P","D","R","N"], colors: {"-":"none","N":"warn"}, defaultColor: "val" },
    { id: "water", label: "Water (L)", type: "cycle", values: ["-","1","1.5","2","2+"], colors: {"-":"none","1":"warn","1.5":"val","2":"good","2+":"good"} },
    { id: "food", label: "Food", type: "cycle", values: ["-","P","B","C","S","X"], colors: {"-":"none","P":"good","B":"good","C":"warn","S":"bad","X":"warn"} },
    { id: "meditation", label: "Morning meditation", type: "check" },
    { id: "statecheck", label: "State check, plan, act", type: "check" },
    { id: "work", label: "Work", type: "check" },
    { id: "selfcare", label: "Self-care", type: "check" },
  ]},
  { key: "supplements", label: "Supplements", items: [
    { id: "selen", label: "Selenomethionine", type: "check" },
    { id: "d3k2", label: "D3 + K2", type: "check" },
    { id: "magnesium", label: "Magnesium", type: "check" },
    { id: "myoinositol", label: "Myo-inositol", type: "check" },
    { id: "berberine", label: "Berberine", type: "check" },
  ]},
  { key: "practices", label: "Practices", items: [
    { id: "gratitude", label: "Night gratitude", type: "check" },
    { id: "skincare", label: "Skincare / grooming", type: "check" },
    { id: "posture", label: "Posture work", type: "check" },
    { id: "nosugar", label: "Non-sugar day", type: "check" },
    { id: "homereset", label: "Home reset", type: "check" },
    { id: "create", label: "Create, learn, apply", type: "check" },
    { id: "connect", label: "Connect meaningfully", type: "check" },
  ]},
  { key: "checkin", label: "Check-in", items: [
    { id: "mood", label: "Mood", type: "cycle", values: ["-","1","2","3","4","5"], colors: {"-":"none","1":"good","2":"good","3":"val","4":"warn","5":"bad"} },
    { id: "daytype", label: "Day type", type: "cycle", values: ["-","B","M","W","F","R","X"], colors: {"-":"none"}, defaultColor: "val" },
    { id: "period", label: "Period", type: "check" },
  ]},
];

const MARCH_SEED = {"1_work":true,"2_work":true,"3_work":true,"4_work":true,"5_work":true,"6_work":true,"7_work":true,"8_work":true,"9_work":true,"10_work":true,"11_work":true,"12_work":true,"13_work":true,"14_work":true,"15_work":true,"16_work":true,"17_work":true,"18_work":true,"19_work":true,"20_work":true,"21_work":true,"22_work":true,"23_work":true,"24_work":true,"25_work":true,"1_create":true,"2_create":true,"3_create":true,"4_create":true,"5_create":true,"6_create":true,"7_create":true,"8_create":true,"9_create":true,"10_create":true,"11_create":true,"12_create":true,"13_create":true,"14_create":true,"15_create":true,"16_create":true,"17_create":true,"18_create":true,"19_create":true,"20_create":true,"21_create":true,"22_create":true,"23_create":true,"24_create":true,"25_create":true,"1_daytype":"B","2_daytype":"B","3_daytype":"B","4_daytype":"B","5_daytype":"B","6_daytype":"B","7_daytype":"B","8_daytype":"B","9_daytype":"B","10_daytype":"B","11_daytype":"B","12_daytype":"B","13_daytype":"B","14_daytype":"B","15_daytype":"B","16_daytype":"B","17_daytype":"B","18_daytype":"B","19_daytype":"B","20_daytype":"B","21_daytype":"X","22_daytype":"B","23_daytype":"B","24_daytype":"B","25_daytype":"B","9_sleep":"6","10_sleep":"6","11_sleep":"6","12_sleep":"6","13_sleep":"7","14_sleep":"7","15_sleep":"7","16_sleep":"7","17_sleep":"7","18_sleep":"7","19_sleep":"6","20_sleep":"6","21_sleep":"6","22_sleep":"6","23_sleep":"6","24_sleep":"6","25_sleep":"6","13_connect":true,"20_connect":true,"21_connect":true,"22_connect":true,"23_connect":true,"24_connect":true,"25_connect":true,"18_selfcare":true,"19_selfcare":true,"22_selfcare":true,"23_selfcare":true,"13_statecheck":true,"14_statecheck":true,"15_statecheck":true,"16_statecheck":true,"17_statecheck":true,"18_statecheck":true,"19_statecheck":true,"20_statecheck":true,"21_statecheck":true,"22_statecheck":true,"23_statecheck":true,"24_statecheck":true,"25_statecheck":true,"18_mood":"1","19_mood":"2","20_mood":"2","21_mood":"2","22_mood":"2","23_mood":"1","24_mood":"2","25_mood":"2","1_meditation":true,"1_selfcare":true,"2_selfcare":true,"1_statecheck":true};

// ══════════════════════════════════════════════════════════════
// NEW: PROMPT TEMPLATES - Few-shot + Chain-of-thought
// ══════════════════════════════════════════════════════════════

const FEW_SHOT_EXAMPLE = `Here is an example of a good response:
{"reasoning":"Sleep averaged 6.8h which is borderline. Berberine compliance is 0% while glucose was 105 last blood work, creating a direct risk. Work at 100% with declining sleep suggests unsustainable pace. Bright spots: state check consistency at 100% and daily creative work show strong routine.","overall_score":6,"sleep_avg":6.8,"sleep_trend":"declining","water_avg":1.5,"supplement_compliance":"20%","top_pattern":"High work output masking declining recovery metrics","concern":"Zero berberine compliance with elevated glucose is the exact pattern that led to the 211 spike","recommendation":"Take berberine with lunch today. Non-negotiable. Set a phone alarm.","wins":["State check streak shows strong self-awareness","Creative work every single day"],"flags":["Berberine compliance at 0%"],"weekly_summary":"A productive but unsustainable week. Work intensity stayed at 100% while sleep declined from 7h to 6.2h. Supplement protocol is barely active, with berberine completely missing despite elevated glucose.","trend_insight":"Sleep dropped 0.8h from last week while work stayed constant, suggesting the system is borrowing from recovery to fuel output."}`;

const PROMPT_V1 = (data) => `You are Evalynn's Health Officer, a sharp, direct health analyst who tracks trends and gives proactive warnings. No em-dashes in your response.

${FEW_SHOT_EXAMPLE}

Now analyze this week's actual data:

${JSON.stringify(data, null, 2)}

The "trends" object shows this week vs last week comparisons. The "proactive_alerts" are rule-based warnings already detected. The "career_context" shows work intensity for cross-referencing with health data.

First, reason through the data step by step in a "reasoning" field. Then give your scores and summary.

Respond ONLY with a JSON object (no markdown, no backticks), with this exact structure:
{
  "reasoning": "<your step-by-step analysis of the data before scoring>",
  "overall_score": <number 1-10>,
  "sleep_avg": <number or null>,
  "sleep_trend": "<improving/declining/stable>",
  "water_avg": <number or null>,
  "supplement_compliance": "<percentage string>",
  "top_pattern": "<one sentence - the most important pattern you see>",
  "concern": "<one sentence - the biggest concern, or 'None'>",
  "recommendation": "<one specific actionable recommendation>",
  "wins": ["<win 1>", "<win 2>"],
  "flags": ["<flag 1>"],
  "weekly_summary": "<2-3 sentence overall summary>",
  "trend_insight": "<one sentence comparing this week to last week>"
}`;

// Prompt V2 for A/B testing - more aggressive, clinical tone
const PROMPT_V2 = (data) => `You are a clinical health data analyst. Evaluate this patient's weekly data with zero sugar-coating. Flag every risk. No em-dashes.

${JSON.stringify(data, null, 2)}

Respond ONLY with JSON (no markdown, no backticks):
{
  "reasoning": "<clinical assessment of the data>",
  "overall_score": <number 1-10>,
  "sleep_avg": <number or null>,
  "sleep_trend": "<improving/declining/stable>",
  "water_avg": <number or null>,
  "supplement_compliance": "<percentage string>",
  "top_pattern": "<one sentence>",
  "concern": "<one sentence or 'None'>",
  "recommendation": "<one specific action>",
  "wins": ["<win 1>", "<win 2>"],
  "flags": ["<flag 1>"],
  "weekly_summary": "<2-3 sentences>",
  "trend_insight": "<one sentence>"
}`;

// ══════════════════════════════════════════════════════════════
// NEW: TOOL DEFINITIONS for Claude
// ══════════════════════════════════════════════════════════════

const HEALTH_TOOLS = [
  {
    name: "read_habits",
    description: "Read habit tracking data for a given month. Returns all habit entries (sleep, water, food, supplements, mood, etc.) for that month.",
    input_schema: {
      type: "object",
      properties: {
        month: { type: "string", description: "Month in YYYY-MM format, e.g. 2026-04" }
      },
      required: ["month"]
    }
  },
  {
    name: "read_blood_work",
    description: "Read blood work lab results. Returns all recorded blood marker entries with dates and values.",
    input_schema: {
      type: "object",
      properties: {}
    }
  },
  {
    name: "read_body_metrics",
    description: "Read body measurement entries (weight, waist, etc). Returns all recorded measurements with dates.",
    input_schema: {
      type: "object",
      properties: {}
    }
  },
  {
    name: "search_habit_history",
    description: "Search habit data across multiple months to find patterns. Use this to compare current trends with historical data or find when specific conditions occurred (e.g. 'weeks where sleep was under 6 AND work was over 90%').",
    input_schema: {
      type: "object",
      properties: {
        months: { type: "array", items: { type: "string" }, description: "List of months to search in YYYY-MM format" },
        query_description: { type: "string", description: "What pattern you are looking for" }
      },
      required: ["months"]
    }
  }
];

// ══════════════════════════════════════════════════════════════
// EXISTING: HABITS TAB (unchanged from your current code)
// ══════════════════════════════════════════════════════════════

function HabitsTab(){
  const[viewDate,setViewDate]=useState(new Date().toISOString().slice(0,7));
  const[data,setData]=useState({});
  const[loaded,setLoaded]=useState(false);
  const[canSave,setCanSave]=useState(false);
  const getDays=(ym)=>{const[y,m]=ym.split("-").map(Number);return new Date(y,m,0).getDate();};


  useEffect(()=>{(async()=>{
    const stored = await osLoad("habits2_"+viewDate,{});
    // If March 2026, merge seed (stored data takes priority)
    if (viewDate === "2026-03") {
      const merged = { ...MARCH_SEED };
      Object.keys(stored).forEach(k => { if (stored[k] !== undefined && stored[k] !== false && stored[k] !== "-") merged[k] = stored[k]; });
      setData(merged);
    } else {
      setData(stored);
    }
    setLoaded(true);
  })();},[viewDate]);
  useEffect(()=>{if(!loaded)return;osSave("habits2_"+viewDate,data);},[data,viewDate,loaded]);

  const days=getDays(viewDate);
  const toggleCheck=(day,id)=>{const k=`${day}_${id}`;setData(p=>({...p,[k]:!p[k]}));};
  const cycleValue=(day,item)=>{const k=`${day}_${item.id}`;const cur=data[k]||item.values[0];const idx=item.values.indexOf(cur);const next=item.values[(idx+1)%item.values.length];setData(p=>({...p,[k]:next}));};
  const getCycleValue=(day,item)=>data[`${day}_${item.id}`]||item.values[0];
  const getCheck=(day,id)=>!!data[`${day}_${id}`];

  const checkScore=(id)=>{let c=0;for(let d=1;d<=days;d++)if(data[`${d}_${id}`])c++;return c;};
  const checkPct=(id)=>{const s=checkScore(id);return s>0?Math.round((s/days)*100):0;};
  const cycleAvg=(item)=>{let sum=0,count=0;for(let d=1;d<=days;d++){const v=data[`${d}_${item.id}`];if(v&&v!=="-"){const n=parseFloat(v.replace("+",""));if(!isNaN(n)){sum+=n;count++;}}}return count>0?(sum/count).toFixed(1):"-";};
  const cyclePct=(item)=>{let filled=0;for(let d=1;d<=days;d++){const v=data[`${d}_${item.id}`];if(v&&v!=="-"&&v!==item.values[0])filled++;}return filled>0?Math.round((filled/days)*100)+"%":"0%";};

  const getStat=(item)=>{
    if(item.type==="check"){const p=checkPct(item.id);return{val:p+"%",color:p>=80?C.green:p>=50?C.orange:C.red};}
    if(item.id==="sleep"||item.id==="water"||item.id==="mood"){
      const avg=cycleAvg(item);let color=C.txS;
      if(avg!=="-"){const n=parseFloat(avg);
        if(item.id==="sleep")color=n>=7?C.green:n>=6?C.orange:C.red;
        if(item.id==="water")color=n>=1.5?C.green:n>=1?C.orange:C.red;
        if(item.id==="mood")color=n<=2?C.green:n<=3?C.orange:C.red;
      }return{val:avg,color};
    }
    if(item.id==="daytype"||item.id==="period")return{val:"-",color:C.txT};
    return{val:cyclePct(item),color:C.txS};
  };

  const cellColor=(item,val)=>{
    if(!val||val==="-"||val===item.values[0])return"none";
    const c=item.colors?.[val];if(c)return c;return item.defaultColor||"val";
  };

  const allItems=HABIT_SECTIONS.flatMap(s=>s.items);
  const checkItems=allItems.filter(i=>i.type==="check");
  const totalChecks=checkItems.reduce((s,i)=>s+checkScore(i.id),0);
  const totalPossible=checkItems.length*days;
  const overallPct=totalPossible>0?Math.round((totalChecks/totalPossible)*100):0;

  const colorMap={
    none:{bg:C.bgS,tx:C.txT},
    val:{bg:C.blueBg,tx:C.blue},
    good:{bg:C.greenBg,tx:C.green},
    warn:{bg:C.yellowBg,tx:"#856d0a"},
    bad:{bg:C.redBg,tx:C.red},
  };
  const cellS={width:17,height:17,borderRadius:3,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:8,fontWeight:600,cursor:"pointer",userSelect:"none",fontFamily:F.mono,flexShrink:0};
  const chkS={...cellS,width:15,height:15};

  const seedMarch = () => {
    if (viewDate !== "2026-03") { alert("Switch to March 2026 first"); return; }
    const seed = {};
    for (let d = 1; d <= 25; d++) seed[`${d}_work`] = true;
    for (let d = 1; d <= 25; d++) seed[`${d}_create`] = true;
    for (let d = 1; d <= 25; d++) seed[`${d}_daytype`] = d === 21 ? "X" : "B";
    for (let d = 9; d <= 12; d++) seed[`${d}_sleep`] = "6";
    for (let d = 13; d <= 17; d++) seed[`${d}_sleep`] = "7";
    seed["18_sleep"] = "7";
    for (let d = 19; d <= 25; d++) seed[`${d}_sleep`] = "6";
    seed["13_connect"] = true;
    seed["20_connect"] = true;
    seed["21_connect"] = true;
    seed["22_connect"] = true;
    seed["23_connect"] = true;
    seed["24_connect"] = true;
    seed["25_connect"] = true;
    seed["18_selfcare"] = true;
    seed["19_selfcare"] = true;
    seed["22_selfcare"] = true;
    seed["23_selfcare"] = true;
    for (let d = 13; d <= 25; d++) seed[`${d}_statecheck`] = true;
    seed["18_mood"] = "1";
    seed["19_mood"] = "2";
    seed["20_mood"] = "2";
    seed["21_mood"] = "2";
    seed["22_mood"] = "2";
    seed["23_mood"] = "1";
    seed["24_mood"] = "2";
    seed["25_mood"] = "2";
    setData(p => {
      const merged = { ...seed };
      Object.keys(p).forEach(k => { if (p[k] !== undefined && p[k] !== false && p[k] !== "-") merged[k] = p[k]; });
      return merged;
    });
  };

  return(<div><H1>Habits</H1>
    <div style={{display:"flex",gap:14,alignItems:"center",marginBottom:16}}>
      <input type="month" value={viewDate} onChange={e=>{setViewDate(e.target.value);setLoaded(false);}} style={{border:`1px solid ${C.bdr}`,borderRadius:4,padding:"8px 12px",fontSize:14,color:C.tx,background:C.bgS,outline:"none",fontFamily:F.sans}}/>
      <div style={{fontSize:20,fontWeight:700,color:overallPct>=70?C.green:overallPct>=40?C.orange:C.red}}>{overallPct}%</div>
    </div>
    <div style={{border:`1px solid ${C.bdr}`,borderRadius:4,overflow:"hidden"}}>
      <div style={{overflowX:"auto"}}>
        <table style={{borderCollapse:"collapse",width:"100%",minWidth:700}}>
          <thead><tr>
            <th style={{textAlign:"left",fontSize:11,color:C.txS,padding:"8px 8px",minWidth:160}}>Habit</th>
            {Array.from({length:days},(_,i)=><th key={i+1} style={{fontSize:9,color:C.txT,padding:"3px 1px",minWidth:17,textAlign:"center"}}>{i+1}</th>)}
            <th style={{fontSize:11,color:C.txS,padding:"4px 8px",textAlign:"right",minWidth:36}}>%</th>
          </tr></thead>
          <tbody>
            {HABIT_SECTIONS.map(section=>(<React.Fragment key={section.key}>
              <tr><td colSpan={days+2} style={{padding:"6px 8px",fontSize:11,fontWeight:600,color:C.txT,background:C.bgS,borderBottom:`1px solid ${C.bdr}`,borderTop:`1px solid ${C.bdr}`,textTransform:"uppercase",letterSpacing:"0.04em"}}>{section.label}</td></tr>
              {section.items.map(item=>{const stat=getStat(item);return(
                <tr key={item.id} style={{borderBottom:`1px solid ${C.bdr}`}}>
                  <td style={{padding:"5px 8px",fontSize:12,color:C.tx,whiteSpace:"nowrap"}}>{item.label}</td>
                  {Array.from({length:days},(_,i)=>{const day=i+1;
                    if(item.type==="check"){const done=getCheck(day,item.id);return(
                      <td key={day} style={{padding:"2px 1px",textAlign:"center"}}><div onClick={()=>toggleCheck(day,item.id)} style={{...chkS,background:done?C.green:C.bgS,border:done?"none":`1px solid ${C.bdr}`,margin:"0 auto"}}/></td>);}
                    const val=getCycleValue(day,item);const cKey=cellColor(item,val);const cm=colorMap[cKey]||colorMap.none;
                    return(<td key={day} style={{padding:"2px 1px",textAlign:"center"}}><div onClick={()=>cycleValue(day,item)} style={{...cellS,background:cm.bg,color:cm.tx,margin:"0 auto"}}>{val==="-"?"\u00B7":val}</div></td>);
                  })}
                  <td style={{padding:"4px 8px",textAlign:"right",fontSize:12,fontWeight:600,color:stat.color}}>{stat.val}</td>
                </tr>);})}
            </React.Fragment>))}
          </tbody>
        </table>
      </div>
    </div>
    <div style={{display:"flex",gap:16,flexWrap:"wrap",marginTop:10,padding:"8px 0",fontSize:10,color:C.txT}}>
      <span>Sleep: hours (4-9+)</span>
      <span>Move: W=Walk Y=Yoga G=Gym P=Pilates D=Dance R=Run N=None</span>
      <span>Water: liters</span>
      <span>Food: P=Protein B=Balanced C=Carbs S=Sugar X=Skip</span>
      <span>Mood: 1=calm...5=dysregulated</span>
      <span>Day: B=Build M=Music W=Write F=reFl R=Rest X=miXed</span>
    </div>
  </div>);}

// ══════════════════════════════════════════════════════════════
// EXISTING: METRICS TAB (unchanged)
// ══════════════════════════════════════════════════════════════

const BLOOD_MARKERS = [
  { id: "glucose", label: "Fasting glucose", unit: "mg/dL", target: "under 100", range: "70-100", good: (v) => v <= 100, warn: (v) => v <= 110 },
  { id: "hba1c", label: "HbA1c", unit: "%", target: "under 5.7", range: "4.0-5.6", good: (v) => v <= 5.7, warn: (v) => v <= 6.0 },
  { id: "tsh", label: "TSH", unit: "mIU/L", target: "1.0-2.5", range: "0.4-4.0", good: (v) => v >= 0.4 && v <= 4.0, warn: (v) => v <= 5.0 },
  { id: "ft4", label: "Free T4", unit: "ng/dL", target: "1.0-1.5", range: "0.8-1.8", good: (v) => v >= 0.8 && v <= 1.8, warn: () => true },
  { id: "ft3", label: "Free T3", unit: "pg/mL", target: "2.5-3.5", range: "2.3-4.2", good: (v) => v >= 2.3 && v <= 4.2, warn: () => true },
  { id: "vitd", label: "Vitamin D", unit: "ng/mL", target: "40-60", range: "30-100", good: (v) => v >= 30, warn: (v) => v >= 20 },
  { id: "alt", label: "ALT", unit: "U/L", target: "under 33", range: "7-56", good: (v) => v <= 33, warn: (v) => v <= 56 },
  { id: "ast", label: "AST", unit: "U/L", target: "under 32", range: "10-40", good: (v) => v <= 32, warn: (v) => v <= 40 },
  { id: "tg", label: "Triglycerides", unit: "mg/dL", target: "under 150", range: "under 150", good: (v) => v <= 150, warn: (v) => v <= 200 },
  { id: "chol", label: "Total cholesterol", unit: "mg/dL", target: "under 200", range: "under 200", good: (v) => v <= 200, warn: (v) => v <= 240 },
  { id: "hdl", label: "HDL", unit: "mg/dL", target: "above 50", range: "40-60+", good: (v) => v >= 50, warn: (v) => v >= 40 },
  { id: "ldl", label: "LDL", unit: "mg/dL", target: "under 100", range: "under 100", good: (v) => v <= 100, warn: (v) => v <= 130 },
];

const BODY_METRICS = [
  { id: "weight", label: "Weight", unit: "kg" },
  { id: "waist", label: "Waist", unit: "cm" },
  { id: "hips", label: "Hips", unit: "cm" },
  { id: "bust", label: "Bust", unit: "cm" },
  { id: "arms", label: "Arms", unit: "cm" },
  { id: "thighs", label: "Thighs", unit: "cm" },
  { id: "neck", label: "Neck", unit: "cm" },
  { id: "shoulders", label: "Shoulders", unit: "cm" },
  { id: "bodyfat", label: "Body fat", unit: "%" },
];

const SUPPLEMENTS = [
  { name: "Selenomethionine", dose: "200 mcg", time: "Morning", why: "Thyroid (TSH)" },
  { name: "Vitamin D3 + K2", dose: "5,000 IU", time: "Morning", why: "Vit D level" },
  { name: "Magnesium glycinate", dose: "400 mg", time: "Evening", why: "Sleep, muscle" },
  { name: "Myo-inositol", dose: "2 g", time: "Morning", why: "Insulin sensitivity" },
  { name: "Berberine", dose: "500 mg", time: "With meal", why: "Glucose (HbA1c)" },
];

const CONDITIONS = [
  { id: "lsil", label: "LSIL", target: "Negative" },
  { id: "gallstone", label: "Gallstone", target: "No pain" },
  { id: "gut", label: "Gut health", target: "Good" },
  { id: "teeth", label: "Teeth (Kilbon)", target: "Aligned" },
];
const COND_STATUSES = ["monitoring", "good", "concern", "in progress", "resolved"];
const COND_COLORS = { monitoring: { bg: C.yellowBg, c: "#856d0a" }, good: { bg: C.greenBg, c: C.green }, concern: { bg: C.redBg, c: C.red }, "in progress": { bg: C.blueBg, c: C.blue }, resolved: { bg: C.greenBg, c: C.green } };

function MetricsTab() {
  const [data, setData] = useState({ entries: [], bodyEntries: [], targets: {}, conditions: {} });
  const [loaded, setLoaded] = useState(false);
  const [canSave, setCanSave] = useState(false);

  useEffect(() => { (async () => {
    const d = await osLoad("metrics_v1", { entries: [], bodyEntries: [], targets: {}, conditions: {} });
    setData(d);
    setLoaded(true);
    setTimeout(() => setCanSave(true), 500);
  })(); }, []);

  useEffect(() => {
    if (!loaded || !canSave) return;
    osSave("metrics_v1", data);
  }, [data, loaded, canSave]);

  const set = (field, val) => setData((p) => ({ ...p, [field]: val }));
  const addEntry = () => { const entry = { id: Date.now(), date: new Date().toISOString().slice(0, 10), values: {}, notes: "" }; set("entries", [entry, ...(data.entries || [])]); };
  const updateEntry = (id, field, val) => set("entries", (data.entries || []).map((e) => e.id === id ? { ...e, [field]: val } : e));
  const updateEntryValue = (id, marker, val) => set("entries", (data.entries || []).map((e) => e.id === id ? { ...e, values: { ...e.values, [marker]: parseFloat(val) || "" } } : e));
  const deleteEntry = (id) => set("entries", (data.entries || []).filter((e) => e.id !== id));
  const addBodyEntry = () => { const entry = { id: Date.now(), date: new Date().toISOString().slice(0, 10), values: {} }; set("bodyEntries", [entry, ...(data.bodyEntries || [])]); };
  const updateBodyEntry = (id, field, val) => set("bodyEntries", (data.bodyEntries || []).map((e) => e.id === id ? { ...e, [field]: val } : e));
  const updateBodyValue = (id, metric, val) => set("bodyEntries", (data.bodyEntries || []).map((e) => e.id === id ? { ...e, values: { ...e.values, [metric]: parseFloat(val) || "" } } : e));
  const deleteBodyEntry = (id) => set("bodyEntries", (data.bodyEntries || []).filter((e) => e.id !== id));
  const setTarget = (id, val) => set("targets", { ...(data.targets || {}), [id]: val });
  const cycleCondition = (id) => { const cur = (data.conditions || {})[id] || "monitoring"; const idx = COND_STATUSES.indexOf(cur); const next = COND_STATUSES[(idx + 1) % COND_STATUSES.length]; set("conditions", { ...(data.conditions || {}), [id]: next }); };

  const entries = data.entries || [];
  const bodyEntries = data.bodyEntries || [];
  const latest = entries[0];

  const getMarkerColor = (marker, val) => { if (!val && val !== 0) return C.txT; if (marker.good(val)) return C.green; if (marker.warn(val)) return "#856d0a"; return C.red; };

  const inp = { border: `1px solid ${C.bdr}`, borderRadius: 3, padding: "4px 6px", fontFamily: F.sans, fontSize: 12, color: C.tx, background: "transparent", outline: "none", textAlign: "right", width: 70 };
  const lineS = { display: "flex", alignItems: "center", padding: "6px 0", borderBottom: `1px solid ${C.bdr}`, gap: 10 };

  return (<div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
      {[
        { l: "Weight", v: bodyEntries[0]?.values?.weight ? bodyEntries[0].values.weight + " kg" : "-", c: C.tx, sub: "Target: " + (data.targets?.weight || "50") + " kg" },
        { l: "Fasting glucose", v: latest?.values?.glucose ? latest.values.glucose + "" : "-", c: latest?.values?.glucose ? getMarkerColor(BLOOD_MARKERS[0], latest.values.glucose) : C.txT, sub: "Target: under 100" },
        { l: "TSH", v: latest?.values?.tsh ? latest.values.tsh + "" : "-", c: latest?.values?.tsh ? getMarkerColor(BLOOD_MARKERS[2], latest.values.tsh) : C.txT, sub: "Range: 0.4-4.0" },
        { l: "Last blood work", v: latest?.date ? new Date(latest.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "None", c: C.txS, sub: entries.length + " entries" },
      ].map((g, i) => (<div key={i} style={{ background: C.bgS, borderRadius: 4, padding: "10px 12px" }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 3 }}>{g.l}</div>
        <div style={{ fontSize: 18, fontWeight: 500, color: g.c }}>{g.v}</div>
        <div style={{ fontSize: 10, color: C.txT, marginTop: 2 }}>{g.sub}</div>
      </div>))}
    </div>
    <div style={{ background: C.bgS, padding: "10px 16px", borderBottom: `1px solid ${C.bdr}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: C.tx }}>Blood markers</span>
      {osBtn({ children: "+ Add blood work", onClick: addEntry, style: { padding: "5px 12px", fontSize: 11 } })}
    </div>
    {entries.length === 0 ? (<div style={{ padding: "20px 16px", fontSize: 13, color: C.txT }}>No blood work entries yet. Click "+ Add blood work" to record your first test results.</div>) : (<div>
      {entries.map((entry, ei) => (<div key={entry.id} style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 16px", background: ei === 0 ? C.bgS : "transparent", borderBottom: `1px solid ${C.bdr}` }}>
          <input type="date" value={entry.date} onChange={(e) => updateEntry(entry.id, "date", e.target.value)} style={{ ...inp, width: 130, textAlign: "left" }} />
          {ei === 0 && <span style={{ fontSize: 10, fontWeight: 600, padding: "1px 6px", borderRadius: 8, background: C.greenBg, color: C.green }}>latest</span>}
          <span style={{ marginLeft: "auto", fontSize: 11, color: C.txT, cursor: "pointer" }} onClick={() => { if (confirm("Delete this entry?")) deleteEntry(entry.id); }}>delete</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          {BLOOD_MARKERS.map((m) => { const val = entry.values?.[m.id]; const color = val ? getMarkerColor(m, val) : C.txT; return (
            <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 16px", borderBottom: `1px solid ${C.bdr}` }}>
              <span style={{ fontSize: 12, color: C.txS, flex: 1 }}>{m.label} <span style={{ fontSize: 10, color: C.txT }}>{m.unit}</span></span>
              <input type="number" step="0.1" value={val || ""} onChange={(e) => updateEntryValue(entry.id, m.id, e.target.value)} placeholder="-" style={{ ...inp, width: 60, color }} />
              <div style={{ width: 6, height: 6, borderRadius: 3, background: val ? color : C.bgS, flexShrink: 0 }} />
            </div>); })}
        </div>
      </div>))}
    </div>)}
    <div style={{ height: 20 }} />
    <div style={{ background: C.bgS, padding: "10px 16px", borderBottom: `1px solid ${C.bdr}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: C.tx }}>Body measurements</span>
      {osBtn({ children: "+ Add measurement", onClick: addBodyEntry, style: { padding: "5px 12px", fontSize: 11 } })}
    </div>
    {bodyEntries.length === 0 ? (<div style={{ padding: "20px 16px", fontSize: 13, color: C.txT }}>No measurements yet. Click "+ Add measurement" to start tracking.</div>) : (<div>
      {bodyEntries.map((entry, ei) => (<div key={entry.id} style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 16px", background: ei === 0 ? C.bgS : "transparent", borderBottom: `1px solid ${C.bdr}` }}>
          <input type="date" value={entry.date} onChange={(e) => updateBodyEntry(entry.id, "date", e.target.value)} style={{ ...inp, width: 130, textAlign: "left" }} />
          {ei === 0 && <span style={{ fontSize: 10, fontWeight: 600, padding: "1px 6px", borderRadius: 8, background: C.greenBg, color: C.green }}>latest</span>}
          <span style={{ marginLeft: "auto", fontSize: 11, color: C.txT, cursor: "pointer" }} onClick={() => { if (confirm("Delete?")) deleteBodyEntry(entry.id); }}>delete</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
          {BODY_METRICS.map((m) => (<div key={m.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 16px", borderBottom: `1px solid ${C.bdr}` }}>
            <span style={{ fontSize: 12, color: C.txS, flex: 1 }}>{m.label} <span style={{ fontSize: 10, color: C.txT }}>{m.unit}</span></span>
            <input type="number" step="0.1" value={entry.values?.[m.id] || ""} onChange={(e) => updateBodyValue(entry.id, m.id, e.target.value)} placeholder="-" style={{ ...inp, width: 55 }} />
          </div>))}
        </div>
      </div>))}
    </div>)}
    <div style={{ height: 20 }} />
    <div style={{ background: C.bgS, padding: "10px 16px", borderBottom: `1px solid ${C.bdr}` }}><span style={{ fontSize: 14, fontWeight: 600, color: C.tx }}>Supplement protocol</span></div>
    {SUPPLEMENTS.map((s, i) => (<div key={i} style={lineS}>
      <span style={{ fontSize: 13, color: C.tx, flex: 1, paddingLeft: 16 }}>{s.name}</span>
      <span style={{ fontSize: 12, color: C.txS, width: 80 }}>{s.dose}</span>
      <span style={{ fontSize: 11, color: C.txT, width: 70 }}>{s.time}</span>
      <span style={{ fontSize: 11, color: C.txT, width: 110, textAlign: "right", paddingRight: 16 }}>{s.why}</span>
    </div>))}
    <div style={{ height: 20 }} />
    <div style={{ background: C.bgS, padding: "10px 16px", borderBottom: `1px solid ${C.bdr}` }}><span style={{ fontSize: 14, fontWeight: 600, color: C.tx }}>Health conditions</span></div>
    {CONDITIONS.map((c) => { const status = (data.conditions || {})[c.id] || "monitoring"; const sc = COND_COLORS[status] || COND_COLORS.monitoring; return (
      <div key={c.id} style={lineS}>
        <span style={{ fontSize: 13, color: C.tx, flex: 1, paddingLeft: 16 }}>{c.label}</span>
        <span onClick={() => cycleCondition(c.id)} style={{ fontSize: 10, fontWeight: 500, padding: "2px 10px", borderRadius: 10, background: sc.bg, color: sc.c, cursor: "pointer", userSelect: "none" }}>{status}</span>
        <span style={{ fontSize: 12, color: C.txT, width: 80, textAlign: "right", paddingRight: 16 }}>{c.target}</span>
      </div>); })}
  </div>);
}

// ══════════════════════════════════════════════════════════════
// EXISTING: PROTOCOL TAB (unchanged)
// ══════════════════════════════════════════════════════════════

const PROTOCOL_DATA = [
  { name: "Selenomethionine", dose: "200 mcg", timing: "Morning, with food", target: "TSH, Free T3/T4", what: "Organic form of selenium. Essential for thyroid hormone conversion (T4 to T3). Selenomethionine is better absorbed than other forms. Supports glutathione production (antioxidant defense).", why: "Your thyroid needs selenium to convert inactive T4 into active T3. Without enough selenium, TSH rises as the thyroid works harder. Also supports immune function and reduces thyroid antibodies.", watch: "TSH trending down toward 1.0-2.5 range. Free T3 staying in 2.5-3.5 range. If TSH drops below 0.4, may be overstimulating - reduce dose.", interactions: "Take separately from Vitamin C (reduces absorption). Space 2+ hours from thyroid medication if applicable. Safe with D3+K2 and magnesium.", adjust: "If TSH normalizes (1.0-2.5) for 6+ months, can reduce to 100 mcg maintenance. If no improvement after 3 months, check thyroid antibodies (TPO, TG).", color: C.purple },
  { name: "Vitamin D3 + K2", dose: "5,000 IU D3 + 100-200 mcg K2 (MK-7)", timing: "Morning, with fat-containing food", target: "Vitamin D level", what: "D3 (cholecalciferol) is the bioactive form of Vitamin D. K2 (MK-7) directs calcium to bones instead of arteries. They work as a pair - D3 without K2 can cause calcium buildup in wrong places.", why: "Your Vitamin D was 22 ng/mL (deficient). Target is 40-60 ng/mL. D3 supports immune function, mood regulation, bone density, and insulin sensitivity. K2 ensures the calcium D3 mobilizes goes to bones, not arteries.", watch: "Vitamin D level moving toward 40-60 ng/mL. Takes 2-3 months to see change. If level exceeds 80, reduce dose. Monitor calcium levels if taking long-term.", interactions: "Take WITH fat (avocado, nuts, eggs) for absorption. Safe with all your other supplements. Magnesium helps D3 activation - good that you take both.", adjust: "Once Vitamin D reaches 40-60, can reduce to 2,000 IU maintenance. In Bangkok with sun exposure, may need less. Retest every 3-6 months.", color: C.gold },
  { name: "Magnesium glycinate", dose: "400 mg", timing: "Evening, 1-2 hours before bed", target: "Sleep quality, muscle relaxation, stress", what: "Glycinate form is the most bioavailable and least likely to cause GI issues. Magnesium is involved in 300+ enzymatic reactions. Most people are deficient without knowing it.", why: "Supports sleep quality (calms nervous system), muscle relaxation (reduces tension, cramps), stress response (lowers cortisol), and blood sugar regulation (improves insulin sensitivity). Your Virgo Moon needs the calming effect.", watch: "Sleep quality improvement. Muscle tension reduction. May notice calmer evening state. If stools become loose, reduce dose to 200 mg.", interactions: "Space 2+ hours from calcium supplements (they compete for absorption). Safe with all your other supplements. Actually enhances D3 activation.", adjust: "400 mg is a good maintenance dose. Can increase to 600 mg during high-stress periods. If sleep is consistently good and no muscle tension, can try 200 mg.", color: C.blue },
  { name: "Myo-inositol", dose: "2 g (2,000 mg)", timing: "Morning, can be with or without food", target: "Insulin sensitivity, metabolic health", what: "A naturally occurring sugar alcohol that acts as an insulin sensitizer. Works similarly to metformin but gentler. Also supports ovarian function and mood regulation (serotonin signaling).", why: "Improves insulin sensitivity which directly impacts fasting glucose and HbA1c. Works synergistically with berberine for metabolic optimization. Also supports mood stability through serotonin pathway - relevant for your NS regulation work.", watch: "Fasting glucose trending down. HbA1c improving. May notice more stable energy throughout the day (fewer sugar crashes). Mood stability.", interactions: "Safe with all your supplements. Works synergistically with berberine (different mechanisms, amplified effect). Can take same time as D3.", adjust: "Can increase to 4 g if glucose response is insufficient after 2 months. Standard therapeutic range is 2-4 g. If GI discomfort, split into 1 g morning + 1 g evening.", color: C.green },
  { name: "Berberine", dose: "500 mg", timing: "With a meal (ideally lunch or dinner with protein)", target: "Fasting glucose, HbA1c, triglycerides", what: "Plant alkaloid with metformin-like effects. Activates AMPK (master metabolic switch). Lowers blood sugar, reduces triglycerides, improves cholesterol. Also has antimicrobial properties for gut health.", why: "Your primary glucose management tool. Directly lowers fasting glucose and HbA1c. Also reduces triglycerides (relevant for metabolic syndrome prevention). The gut health benefit supports your gut health goal.", watch: "Fasting glucose under 100. HbA1c under 5.7. Triglycerides under 150. If glucose drops below 70, you're over-responding - reduce dose. Monitor ALT/AST (berberine is processed by liver).", interactions: "MUST take with food (causes nausea on empty stomach). Space 2+ hours from any prescription medications (berberine affects drug metabolism via CYP enzymes). Works synergistically with myo-inositol.", adjust: "Can increase to 500 mg 2x/day if glucose response insufficient. Never exceed 1,500 mg/day. Cycle 8 weeks on, 2 weeks off to prevent tolerance. If ALT/AST rise, pause and retest.", color: C.orange },
];

function ProtocolTab() {
  const lineS = { display: "flex", alignItems: "flex-start", padding: "6px 0", borderBottom: `1px solid ${C.bdr}`, gap: 10 };
  const labelS = { fontSize: 11, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", minWidth: 80, paddingTop: 2, flexShrink: 0 };

  return (<div>
    <Ps style={{ marginBottom: 16 }}>Reference guide for your supplement stack. What each does, why you take it, what to watch, when to adjust.</Ps>
    <div style={{ background: C.bgS, padding: "10px 16px", borderBottom: `1px solid ${C.bdr}` }}><span style={{ fontSize: 14, fontWeight: 600, color: C.tx }}>Daily stack</span></div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
      {PROTOCOL_DATA.map((s, i) => (<div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderBottom: `1px solid ${C.bdr}` }}>
        <div style={{ width: 6, height: 6, borderRadius: 3, background: s.color, flexShrink: 0 }} />
        <span style={{ fontSize: 13, fontWeight: 500, color: C.tx, flex: 1 }}>{s.name}</span>
        <span style={{ fontSize: 11, color: C.txS }}>{s.dose}</span>
        <span style={{ fontSize: 11, color: C.txT }}>{s.timing.split(",")[0]}</span>
      </div>))}
    </div>
    <div style={{ height: 20 }} />
    {PROTOCOL_DATA.map((s, i) => (<div key={i} style={{ marginBottom: 16 }}>
      <div style={{ background: C.bgS, padding: "12px 16px", borderBottom: `1px solid ${C.bdr}`, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 8, height: 8, borderRadius: 4, background: s.color, flexShrink: 0 }} />
        <span style={{ fontSize: 15, fontWeight: 600, color: C.tx }}>{s.name}</span>
        <span style={{ fontSize: 12, color: C.txS, marginLeft: "auto" }}>{s.dose} - {s.timing}</span>
      </div>
      <div style={{ padding: "10px 16px" }}>
        <div style={lineS}><span style={labelS}>Target</span><span style={{ fontSize: 13, color: s.color, fontWeight: 500 }}>{s.target}</span></div>
        <div style={lineS}><span style={labelS}>What</span><span style={{ fontSize: 13, color: C.tx, lineHeight: 1.6 }}>{s.what}</span></div>
        <div style={lineS}><span style={labelS}>Why you</span><span style={{ fontSize: 13, color: C.tx, lineHeight: 1.6 }}>{s.why}</span></div>
        <div style={lineS}><span style={labelS}>Watch for</span><span style={{ fontSize: 13, color: C.tx, lineHeight: 1.6 }}>{s.watch}</span></div>
        <div style={lineS}><span style={labelS}>Interactions</span><span style={{ fontSize: 13, color: C.tx, lineHeight: 1.6 }}>{s.interactions}</span></div>
        <div style={{ ...lineS, borderBottom: "none" }}><span style={labelS}>Adjust</span><span style={{ fontSize: 13, color: C.tx, lineHeight: 1.6 }}>{s.adjust}</span></div>
      </div>
    </div>))}
    <div style={{ background: C.bgS, padding: "12px 16px", borderRadius: 4, marginTop: 8 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: C.tx, marginBottom: 6 }}>General guidelines</div>
      <div style={{ fontSize: 12, color: C.txS, lineHeight: 1.7 }}>
        Retest blood markers every 3 months minimum. Morning supplements (selenomethionine, D3+K2, myo-inositol) can be taken together with breakfast. Berberine strictly with a full meal. Magnesium in the evening for sleep benefit. If starting any prescription medication, review all interactions - berberine especially affects drug metabolism. Track compliance in your habit tracker - the Health Officer needs this data to correlate supplement consistency with marker changes.
      </div>
    </div>
  </div>);
}

// ══════════════════════════════════════════════════════════════
// NEW: ENHANCED HEALTH OFFICER TAB
// (Replaces old HealthOfficerTab with streaming, tool use, A/B, chat)
// ══════════════════════════════════════════════════════════════

function HealthOfficerTab() {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const [rawJSON, setRawJSON] = useState(null);
  const [showRaw, setShowRaw] = useState(false);
  const [showReasoning, setShowReasoning] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [alerts, setAlerts] = useState([]);
  const [trends, setTrends] = useState(null);
  const [history, setHistory] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [streamText, setStreamText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [abResult, setAbResult] = useState(null);
  const [abLoading, setAbLoading] = useState(false);
  const [mode, setMode] = useState("standard");
  const [toolLog, setToolLog] = useState([]);

  useEffect(() => {
    (async () => {
      const saved = await osLoad("health-officer-history", []);
      setHistory(saved);
      if (saved.length > 0) {
        const latest = saved[0];
        setAnalysis(latest.analysis);
        setAlerts(latest.alerts || []);
        setRawJSON(latest.rawJSON || null);
      }
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    osSave("health-officer-history", history);
  }, [history, loaded]);

  const deleteHistoryEntry = (idx) => {
    setHistory(p => {
      const next = p.filter((_, i) => i !== idx);
      if (idx === 0 && analysis) {
        setAnalysis(next.length > 0 ? next[0].analysis : null);
        setAlerts(next.length > 0 ? next[0].alerts || [] : []);
        setRawJSON(next.length > 0 ? next[0].rawJSON || null : null);
      }
      return next;
    });
  };

  const rateAnalysis = async (idx, rating) => {
    setHistory(p => p.map((h, i) => i === idx ? { ...h, rating } : h));
  };

  const loadAllData = async () => {
    const today = new Date();
    const ym = today.toISOString().slice(0, 7);
    const day = today.getDate();

    let raw = await osLoad("habits2_" + ym, {});
    if (ym === "2026-03" && MARCH_SEED) {
      const merged = { ...MARCH_SEED };
      Object.keys(raw).forEach(k => { if (raw[k] !== undefined && raw[k] !== false && raw[k] !== "-") merged[k] = raw[k]; });
      raw = merged;
    }
    if (Object.keys(raw).length === 0) return null;

    const metrics = await osLoad("metrics_v1", { entries: [], bodyEntries: [], conditions: {} });

    const startDay = Math.max(1, day - 6);
    const days7 = {};
    for (let d = startDay; d <= day; d++) {
      const dayData = {};
      HABIT_SECTIONS.forEach(section => {
        section.items.forEach(item => {
          const k = `${d}_${item.id}`;
          if (raw[k] !== undefined) {
            dayData[item.label] = item.type === "check" ? (raw[k] ? "done" : "skipped") : raw[k];
          }
        });
      });
      if (Object.keys(dayData).length > 0) days7["Day " + d] = dayData;
    }

    const prevStart = Math.max(1, startDay - 7);
    const prevEnd = startDay - 1;
    const daysPrev = {};
    for (let d = prevStart; d <= prevEnd; d++) {
      const dayData = {};
      HABIT_SECTIONS.forEach(section => {
        section.items.forEach(item => {
          const k = `${d}_${item.id}`;
          if (raw[k] !== undefined) {
            dayData[item.label] = item.type === "check" ? (raw[k] ? "done" : "skipped") : raw[k];
          }
        });
      });
      if (Object.keys(dayData).length > 0) daysPrev["Day " + d] = dayData;
    }

    const calcAvg = (data, label) => { let sum = 0, count = 0; Object.values(data).forEach(d => { const v = parseFloat((d[label] || "").replace("+", "")); if (!isNaN(v)) { sum += v; count++; } }); return count > 0 ? (sum / count).toFixed(1) : null; };
    const countDone = (data, label) => { let done = 0, total = 0; Object.values(data).forEach(d => { if (d[label] !== undefined) { total++; if (d[label] === "done") done++; } }); return total > 0 ? Math.round((done / total) * 100) : null; };

    const sleepThis = calcAvg(days7, "Sleep");
    const sleepPrev = calcAvg(daysPrev, "Sleep");
    const waterThis = calcAvg(days7, "Water (L)");
    const waterPrev = calcAvg(daysPrev, "Water (L)");
    const suppNames = ["Selenomethionine", "D3 + K2", "Magnesium", "Myo-inositol", "Berberine"];
    const suppThis = suppNames.map(s => countDone(days7, s)).filter(v => v !== null);
    const suppAvgThis = suppThis.length > 0 ? Math.round(suppThis.reduce((a, b) => a + b, 0) / suppThis.length) : null;
    const workThis = countDone(days7, "Work");
    const workPrev = countDone(daysPrev, "Work");

    const trendData = {
      sleep: { current: sleepThis, previous: sleepPrev, trend: sleepThis && sleepPrev ? (parseFloat(sleepThis) > parseFloat(sleepPrev) ? "improving" : parseFloat(sleepThis) < parseFloat(sleepPrev) ? "declining" : "stable") : "no data" },
      water: { current: waterThis, previous: waterPrev },
      supplements: { current: suppAvgThis ? suppAvgThis + "%" : null },
      work: { current: workThis ? workThis + "%" : null, previous: workPrev ? workPrev + "%" : null },
    };
    setTrends(trendData);

    const newAlerts = [];
    if (sleepThis && parseFloat(sleepThis) < 6) newAlerts.push({ type: "danger", text: "Sleep average below 6 hours" });
    if (waterThis && parseFloat(waterThis) < 1.5) newAlerts.push({ type: "warning", text: "Water intake below 1.5L" });
    if (workThis && workThis > 90 && sleepThis && parseFloat(sleepThis) < 7) newAlerts.push({ type: "warning", text: "High work (" + workThis + "%) with low sleep - burnout risk" });
    setAlerts(newAlerts);

    return {
      this_week: days7, previous_week: daysPrev, trends: trendData,
      latest_blood_work: metrics.entries?.[0] || null, latest_body: metrics.bodyEntries?.[0] || null,
      conditions: metrics.conditions || {}, proactive_alerts: newAlerts.map(a => a.text),
      career_context: workThis ? "Work intensity: " + workThis + "%" : null,
    };
  };

  const handleToolCall = async (toolName, toolInput) => {
    switch (toolName) {
      case "read_habits": { const month = toolInput.month; let data = await osLoad("habits2_" + month, {}); if (month === "2026-03") { const merged = { ...MARCH_SEED }; Object.keys(data).forEach(k => { if (data[k] !== undefined && data[k] !== false && data[k] !== "-") merged[k] = data[k]; }); data = merged; } return JSON.stringify(data); }
      case "read_blood_work": { const metrics = await osLoad("metrics_v1", { entries: [] }); return JSON.stringify(metrics.entries || []); }
      case "read_body_metrics": { const metrics = await osLoad("metrics_v1", { bodyEntries: [] }); return JSON.stringify(metrics.bodyEntries || []); }
      case "search_habit_history": { const results = {}; for (const month of (toolInput.months || [])) { let data = await osLoad("habits2_" + month, {}); if (month === "2026-03") { const merged = { ...MARCH_SEED }; Object.keys(data).forEach(k => { if (data[k] !== undefined && data[k] !== false && data[k] !== "-") merged[k] = data[k]; }); data = merged; } results[month] = data; } return JSON.stringify(results); }
      default: return JSON.stringify({ error: "Unknown tool" });
    }
  };

  const runStandard = async () => {
    setLoading(true); setError(null); setAnalysis(null); setRawJSON(null);
    const data = await loadAllData();
    if (!data?.this_week || Object.keys(data.this_week).length === 0) { setError("No habit data this month. Log some habits first."); setLoading(false); return; }
    try {
      const response = await fetch("/api/analyze", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 2000, messages: [{ role: "user", content: PROMPT_V1(data) }] }) });
      const result = await response.json();
      const text = result.content?.find(b => b.type === "text")?.text || "";
      const clean = text.replace(/```json/g, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(clean);
      setRawJSON(clean); setAnalysis(parsed); saveToHistory(parsed, clean, alerts);
    } catch (err) { setError("Analysis failed: " + err.message); }
    setLoading(false);
  };

  const runStreaming = async () => {
    setIsStreaming(true); setStreamText(""); setError(null); setAnalysis(null);
    const data = await loadAllData();
    if (!data?.this_week || Object.keys(data.this_week).length === 0) { setError("No habit data this month."); setIsStreaming(false); return; }
    try {
      const response = await fetch("/api/analyze-stream", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 2000, messages: [{ role: "user", content: PROMPT_V1(data) }] }) });
      const reader = response.body.getReader(); const decoder = new TextDecoder(); let fullText = "";
      while (true) {
        const { done, value } = await reader.read(); if (done) break;
        const chunk = decoder.decode(value, { stream: true }); const lines = chunk.split("\n");
        for (const line of lines) { if (line.startsWith("data: ")) { const jsonStr = line.slice(6); if (jsonStr === "[DONE]") continue; try { const event = JSON.parse(jsonStr); if (event.type === "content_block_delta" && event.delta?.text) { fullText += event.delta.text; setStreamText(fullText); } } catch (e) {} } }
      }
      const clean = fullText.replace(/```json/g, "").replace(/```/g, "").trim();
      try { const parsed = JSON.parse(clean); setAnalysis(parsed); setRawJSON(clean); saveToHistory(parsed, clean, alerts); } catch (e) { setError("Could not parse streamed response as JSON"); }
    } catch (err) { setError("Streaming failed: " + err.message); }
    setIsStreaming(false);
  };

  const runToolUse = async () => {
    setLoading(true); setError(null); setAnalysis(null); setToolLog([]);
    const today = new Date(); const ym = today.toISOString().slice(0, 7);
    let messages = [{ role: "user", content: `You are Evalynn's Health Officer. Today is ${today.toISOString().slice(0, 10)}. The current month is ${ym}.\n\nUse the available tools to read this week's habit data, blood work, and body metrics. Then analyze everything and provide a health report.\n\nAfter gathering data, respond with ONLY a JSON object (no markdown):\n{"reasoning":"...","overall_score":<1-10>,"sleep_avg":<number>,"sleep_trend":"...","water_avg":<number>,"supplement_compliance":"...","top_pattern":"...","concern":"...","recommendation":"...","wins":["..."],"flags":["..."],"weekly_summary":"...","trend_insight":"..."}` }];
    const maxIterations = 5; let iteration = 0;
    try {
      while (iteration < maxIterations) {
        iteration++;
        const response = await fetch("/api/analyze", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 2000, messages, tools: HEALTH_TOOLS }) });
        const result = await response.json();
        const toolUseBlocks = (result.content || []).filter(b => b.type === "tool_use");
        const textBlocks = (result.content || []).filter(b => b.type === "text");
        if (toolUseBlocks.length === 0) {
          const text = textBlocks.map(b => b.text).join(""); const clean = text.replace(/```json/g, "").replace(/```/g, "").trim();
          const parsed = JSON.parse(clean); setAnalysis(parsed); setRawJSON(clean); saveToHistory(parsed, clean, alerts, "tool-use"); break;
        }
        messages.push({ role: "assistant", content: result.content });
        const toolResults = [];
        for (const toolCall of toolUseBlocks) {
          setToolLog(p => [...p, { tool: toolCall.name, input: toolCall.input }]);
          const toolResult = await handleToolCall(toolCall.name, toolCall.input);
          toolResults.push({ type: "tool_result", tool_use_id: toolCall.id, content: toolResult });
        }
        messages.push({ role: "user", content: toolResults });
      }
    } catch (err) { setError("Tool use failed: " + err.message); }
    setLoading(false);
  };

  const runAB = async () => {
    setAbLoading(true); setAbResult(null); setError(null);
    const data = await loadAllData();
    if (!data?.this_week || Object.keys(data.this_week).length === 0) { setError("No habit data this month."); setAbLoading(false); return; }
    try {
      const response = await fetch("/api/analyze-ab", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 2000, promptA: [{ role: "user", content: PROMPT_V1(data) }], promptB: [{ role: "user", content: PROMPT_V2(data) }] }) });
      const result = await response.json();
      const parseResult = (r) => { const text = r.content?.find(b => b.type === "text")?.text || ""; const clean = text.replace(/```json/g, "").replace(/```/g, "").trim(); return JSON.parse(clean); };
      setAbResult({ a: parseResult(result.resultA), b: parseResult(result.resultB) });
    } catch (err) { setError("A/B comparison failed: " + err.message); }
    setAbLoading(false);
  };

  const sendChat = async () => {
    if (!chatInput.trim() || chatLoading) return;
    const userMsg = chatInput.trim(); setChatInput(""); setChatMessages(p => [...p, { role: "user", text: userMsg }]); setChatLoading(true);
    const apiMessages = [];
    if (analysis) { apiMessages.push({ role: "user", content: `Here is the latest health analysis: ${JSON.stringify(analysis)}. I may ask follow-up questions about it.` }); apiMessages.push({ role: "assistant", content: "I have the analysis ready. What would you like to know?" }); }
    chatMessages.forEach(m => { apiMessages.push({ role: m.role === "user" ? "user" : "assistant", content: m.text }); });
    apiMessages.push({ role: "user", content: userMsg });
    try {
      const response = await fetch("/api/analyze", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: "You are Evalynn's Health Officer. Answer follow-up questions about her health data. Be direct and concise. No em-dashes.", messages: apiMessages }) });
      const result = await response.json(); const text = result.content?.find(b => b.type === "text")?.text || "No response";
      setChatMessages(p => [...p, { role: "assistant", text }]);
    } catch (err) { setChatMessages(p => [...p, { role: "assistant", text: "Error: " + err.message }]); }
    setChatLoading(false);
  };

  const sendSlackAlert = async () => {
    if (!analysis) return;
    try {
      const emoji = analysis.overall_score >= 8 ? "+" : analysis.overall_score >= 5 ? "!" : "X";
      const text = `[${emoji}] Health Report (Score: ${analysis.overall_score}/10)\nSleep: ${analysis.sleep_avg || "-"}h | Supplements: ${analysis.supplement_compliance || "-"}\nConcern: ${analysis.concern}\nAction: ${analysis.recommendation}`;
      await fetch("/api/slack-notify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text }) });
      alert("Sent to Slack!");
    } catch (err) { alert("Slack failed: " + err.message); }
  };

  const saveToHistory = (parsed, raw, alerts, source = "manual") => {
    const entry = { timestamp: new Date().toISOString(), analysis: parsed, alerts: alerts || [], rawJSON: raw, source, rating: null };
    setHistory(p => [entry, ...p].slice(0, 20));
  };

  const runAnalysis = () => {
    if (mode === "standard") runStandard();
    else if (mode === "stream") runStreaming();
    else if (mode === "tools") runToolUse();
    else if (mode === "ab") runAB();
  };

  const scoreColor = (s) => s >= 8 ? C.green : s >= 5 ? C.orange : C.red;
  const trendArrow = (t) => t === "improving" ? "\u2191" : t === "declining" ? "\u2193" : "\u2192";
  const trendColor = (t) => t === "improving" ? C.green : t === "declining" ? C.red : C.txT;

  return (<div>
    <Ps>Your Health Officer with chain-of-thought reasoning, streaming, tool use, A/B testing, multi-turn chat, and Slack alerts.</Ps>

    <div style={{ display: "flex", gap: 0, borderBottom: `1px solid ${C.bdr}`, marginBottom: 16 }}>
      {[{ k: "standard", l: "Standard" }, { k: "stream", l: "Streaming" }, { k: "tools", l: "Tool use" }, { k: "ab", l: "A/B test" }].map(t => (
        <button key={t.k} onClick={() => setMode(t.k)} style={{ padding: "7px 14px", border: "none", background: "none", fontFamily: F.sans, fontSize: 13, fontWeight: mode === t.k ? 600 : 400, color: mode === t.k ? C.tx : C.txT, cursor: "pointer", borderBottom: mode === t.k ? `2px solid ${C.green}` : "2px solid transparent", marginBottom: -1 }}>{t.l}</button>
      ))}
    </div>

    <div style={{ fontSize: 12, color: C.txT, marginBottom: 12, fontFamily: F.sans }}>
      {mode === "standard" && "Chain-of-thought + few-shot examples. Claude reasons through data before scoring."}
      {mode === "stream" && "Same analysis but words appear live as Claude generates them."}
      {mode === "tools" && "Claude decides what data to fetch using tools. It requests habits, blood work, and metrics autonomously."}
      {mode === "ab" && "Runs the same data through two different prompts (Health Officer vs Clinical Analyst) side by side."}
    </div>

    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
      {osBtn({ children: loading || isStreaming || abLoading ? "Analyzing..." : "Run analysis", onClick: runAnalysis, disabled: loading || isStreaming || abLoading })}
      {analysis && osBtn({ children: "Send to Slack", onClick: sendSlackAlert, variant: "ghost", style: { padding: "9px 14px" } })}
    </div>

    {alerts.length > 0 && (<div style={{ marginBottom: 16 }}>
      {alerts.map((a, i) => (<div key={i} style={{ padding: "8px 12px", marginBottom: 4, borderRadius: 4, fontSize: 13, background: a.type === "danger" ? C.redBg : C.yellowBg, color: a.type === "danger" ? C.red : "#856d0a", display: "flex", gap: 8, alignItems: "center" }}><span style={{ fontSize: 14, flexShrink: 0 }}>{a.type === "danger" ? "\u26A0" : "\u25CF"}</span>{a.text}</div>))}
    </div>)}

    {error && <div style={{ padding: "12px 16px", background: C.redBg, borderRadius: 4, marginBottom: 16, fontSize: 13, color: C.red }}>{error}</div>}

    {isStreaming && streamText && (<pre style={{ padding: "14px 16px", background: C.bgS, borderRadius: 4, fontSize: 12, color: C.txS, fontFamily: F.mono, whiteSpace: "pre-wrap", lineHeight: 1.6, marginBottom: 16, overflow: "auto", maxHeight: 300 }}>{streamText}<span style={{ animation: "blink 1s infinite" }}>|</span></pre>)}

    {toolLog.length > 0 && (<div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 10, fontWeight: 600, color: C.purple, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6, fontFamily: F.sans }}>Tool calls</div>
      {toolLog.map((t, i) => (<div key={i} style={{ padding: "6px 10px", marginBottom: 3, borderRadius: 4, fontSize: 12, background: C.purpleBg, color: C.purple, fontFamily: F.mono }}>{t.tool}({JSON.stringify(t.input)})</div>))}
    </div>)}

    {abResult && (<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
      {[{ label: "A: Health Officer", data: abResult.a, color: C.green }, { label: "B: Clinical Analyst", data: abResult.b, color: C.purple }].map(({ label, data: d, color }) => (
        <div key={label} style={{ border: `1px solid ${C.bdr}`, borderRadius: 6, padding: "12px 14px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color, marginBottom: 8, fontFamily: F.sans }}>{label}</div>
          <div style={{ fontSize: 22, fontWeight: 500, color: scoreColor(d.overall_score), marginBottom: 6 }}>{d.overall_score}/10</div>
          <div style={{ fontSize: 12, color: C.txS, marginBottom: 4, lineHeight: 1.5 }}>{d.top_pattern}</div>
          <div style={{ fontSize: 12, color: C.red, marginBottom: 4, lineHeight: 1.5 }}>{d.concern}</div>
          <div style={{ fontSize: 12, color: C.green, fontWeight: 500, lineHeight: 1.5 }}>{d.recommendation}</div>
          {d.reasoning && (<div style={{ fontSize: 11, color: C.txT, marginTop: 8, lineHeight: 1.5, fontStyle: "italic" }}>{d.reasoning.slice(0, 200)}...</div>)}
        </div>
      ))}
    </div>)}

    {analysis && (<div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
        {[{ l: "Overall", v: analysis.overall_score + "/10", c: scoreColor(analysis.overall_score) }, { l: "Sleep avg", v: (analysis.sleep_avg || "-") + "h", c: analysis.sleep_avg >= 7 ? C.green : C.orange, extra: analysis.sleep_trend }, { l: "Water avg", v: (analysis.water_avg || "-") + "L", c: (analysis.water_avg || 0) >= 1.5 ? C.green : C.orange }, { l: "Supplements", v: analysis.supplement_compliance || "-", c: C.tx }].map((g, i) => (
          <div key={i} style={{ background: C.bgS, borderRadius: 4, padding: "10px 12px" }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 3 }}>{g.l}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}><span style={{ fontSize: 22, fontWeight: 500, color: g.c }}>{g.v}</span>{g.extra && <span style={{ fontSize: 14, color: trendColor(g.extra) }}>{trendArrow(g.extra)}</span>}</div>
          </div>
        ))}
      </div>

      {analysis.reasoning && (<div style={{ marginBottom: 16 }}>
        <div onClick={() => setShowReasoning(!showReasoning)} style={{ fontSize: 11, color: C.purple, cursor: "pointer", fontFamily: F.sans, fontWeight: 600, padding: "6px 0" }}>{showReasoning ? "Hide" : "Show"} Health Officer's reasoning</div>
        {showReasoning && (<div style={{ padding: "12px 16px", background: C.purpleBg, borderRadius: 4, fontSize: 13, color: C.tx, lineHeight: 1.6, fontStyle: "italic" }}>{analysis.reasoning}</div>)}
      </div>)}

      {analysis.weekly_summary && (<div style={{ padding: "12px 16px", background: C.blueBg, borderRadius: 4, marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: C.blue, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 4 }}>Weekly summary</div>
        <div style={{ fontSize: 14, color: C.tx, lineHeight: 1.6 }}>{analysis.weekly_summary}</div>
        {analysis.trend_insight && <div style={{ fontSize: 12, color: C.txS, marginTop: 6, fontStyle: "italic" }}>{analysis.trend_insight}</div>}
      </div>)}

      {[{ label: "Top pattern", value: analysis.top_pattern, color: C.txT }, { label: "Concern", value: analysis.concern, color: C.red }, { label: "Action", value: analysis.recommendation, color: C.green }].map((row, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: `1px solid ${C.bdr}` }}>
          <span style={{ fontSize: 10, fontWeight: 600, color: row.color, textTransform: "uppercase", letterSpacing: "0.04em", minWidth: 100, paddingTop: 2, flexShrink: 0, fontFamily: F.sans }}>{row.label}</span>
          <span style={{ fontSize: 14, color: row.label === "Concern" && row.value === "None" ? C.green : C.tx, lineHeight: 1.5, fontWeight: row.label === "Action" ? 500 : 400 }}>{row.value}</span>
        </div>
      ))}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 12 }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, color: C.green, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6, fontFamily: F.sans }}>Wins</div>
          {(analysis.wins || []).map((w, i) => <div key={i} style={{ fontSize: 13, color: C.tx, padding: "4px 0", borderBottom: `1px solid ${C.bdr}` }}>{w}</div>)}
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600, color: C.red, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6, fontFamily: F.sans }}>Flags</div>
          {(analysis.flags || []).length > 0 ? (analysis.flags || []).map((f, i) => <div key={i} style={{ fontSize: 13, color: C.red, padding: "4px 0", borderBottom: `1px solid ${C.bdr}` }}>{f}</div>) : <div style={{ fontSize: 13, color: C.txT }}>None</div>}
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <span onClick={() => setShowRaw(!showRaw)} style={{ fontSize: 11, color: C.txT, cursor: "pointer" }}>{showRaw ? "Hide" : "Show"} raw API response</span>
        {showRaw && rawJSON && <pre style={{ marginTop: 8, padding: "12px 14px", background: C.bgS, borderRadius: 4, fontSize: 11, color: C.txS, fontFamily: F.mono, whiteSpace: "pre-wrap", lineHeight: 1.6, overflow: "auto" }}>{rawJSON}</pre>}
      </div>
    </div>)}

    <div style={{ marginTop: 24, borderTop: `1px solid ${C.bdr}`, paddingTop: 16 }}>
      <div style={{ fontSize: 10, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8, fontFamily: F.sans }}>Chat with Health Officer</div>
      <div style={{ maxHeight: 300, overflowY: "auto", marginBottom: 10 }}>
        {chatMessages.map((m, i) => (<div key={i} style={{ padding: "8px 12px", marginBottom: 4, borderRadius: 6, fontSize: 13, lineHeight: 1.6, background: m.role === "user" ? C.bgS : C.greenBg, color: C.tx, fontFamily: F.sans }}><span style={{ fontSize: 10, fontWeight: 600, color: m.role === "user" ? C.txT : C.green, marginRight: 6 }}>{m.role === "user" ? "You" : "Health Officer"}</span>{m.text}</div>))}
        {chatLoading && <div style={{ fontSize: 12, color: C.txT, padding: "8px 12px" }}>Thinking...</div>}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendChat()} placeholder="Ask a follow-up question..." style={{ flex: 1, border: `1px solid ${C.bdr}`, borderRadius: 4, padding: "8px 12px", fontSize: 13, color: C.tx, background: C.bgS, outline: "none", fontFamily: F.sans }} />
        {osBtn({ children: "Send", onClick: sendChat, disabled: chatLoading || !chatInput.trim(), style: { padding: "8px 14px" } })}
      </div>
    </div>

    {history.length > 0 && (<div style={{ marginTop: 24 }}>
      <div style={{ fontSize: 10, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8, fontFamily: F.sans }}>Previous analyses</div>
      {history.map((h, i) => {
        const d = new Date(h.timestamp); const label = d.toLocaleDateString("en-US", { month: "short", day: "numeric" }) + " " + d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
        return (<div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: `1px solid ${C.bdr}` }}>
          <span onClick={() => { setAnalysis(h.analysis); setAlerts(h.alerts || []); setRawJSON(h.rawJSON || null); }} style={{ fontSize: 13, color: C.blue, cursor: "pointer", flex: 1 }}>{label}</span>
          {h.source && <span style={{ fontSize: 9, color: C.txT, padding: "1px 6px", borderRadius: 6, background: C.bgS }}>{h.source}</span>}
          <span style={{ fontSize: 14, fontWeight: 600, color: scoreColor(h.analysis.overall_score) }}>{h.analysis.overall_score}/10</span>
          <span onClick={() => rateAnalysis(i, "up")} style={{ fontSize: 14, cursor: "pointer", opacity: h.rating === "up" ? 1 : 0.3 }}>&#x1F44D;</span>
          <span onClick={() => rateAnalysis(i, "down")} style={{ fontSize: 14, cursor: "pointer", opacity: h.rating === "down" ? 1 : 0.3 }}>&#x1F44E;</span>
          <span onClick={() => deleteHistoryEntry(i)} style={{ fontSize: 11, color: C.txT, cursor: "pointer", padding: "2px 6px" }}>x</span>
        </div>);
      })}
    </div>)}

    <div style={{ marginTop: 24, padding: "12px 16px", background: C.bgS, borderRadius: 4 }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6, fontFamily: F.sans }}>CCA skills practiced in this tab</div>
      <div style={{ fontSize: 12, color: C.txS, lineHeight: 1.8, fontFamily: F.sans }}>
        API basics (s1) - messages, model, max_tokens.
        Prompt engineering (s3) - few-shot example, chain-of-thought reasoning field, role assignment.
        Prompt evaluation (s2) - thumbs up/down ratings, A/B prompt comparison.
        Error handling (s4) - retry with backoff.
        Tool use (s6) - Claude calls read_habits, read_blood_work, search_habit_history.
        RAG (s5) - search_habit_history searches across months for patterns.
        Features (s7) - streaming responses, structured JSON output.
        Agents (s9) - multi-turn chat, proactive alerts, cron auto-report, Slack notifications.
        MCP prep (s8) - tool definitions follow MCP-compatible schema.
      </div>
    </div>
  </div>);
}

// ══════════════════════════════════════════════════════════════
// BODY PAGE - wraps Habits + Metrics + Protocol + Health Officer
// ══════════════════════════════════════════════════════════════

function BodyPage() {
  const [tab, setTab] = useState("habits");
  const tabs = [
    { k: "habits", l: "Habits" },
    { k: "metrics", l: "Metrics" },
    { k: "protocol", l: "Protocol" },
    { k: "officer", l: "Health Officer" },
  ];
  return (<div>
    <H1 style={{ fontSize: 28, margin: "0 0 4px" }}>Body</H1>
    <div style={{ display: "flex", gap: 0, borderBottom: `1px solid ${C.bdr}`, marginBottom: 20 }}>
      {tabs.map((t, i) => (
        <button key={t.k} onClick={() => setTab(t.k)} style={{
          padding: `8px 16px 8px ${i === 0 ? 0 : 16}px`, border: "none", background: "none",
          fontFamily: F.sans, fontSize: 14, fontWeight: tab === t.k ? 600 : 400,
          color: tab === t.k ? C.tx : C.txT, cursor: "pointer",
          borderBottom: tab === t.k ? `2px solid ${C.tx}` : "2px solid transparent", marginBottom: -1,
        }}>{t.l}</button>
      ))}
    </div>
    {tab === "habits" && <HabitsTab />}
    {tab === "metrics" && <MetricsTab />}
    {tab === "protocol" && <ProtocolTab />}
    {tab === "officer" && <HealthOfficerTab />}
  </div>);
}

export default function App() {
  return (<div style={{ minHeight: "100vh", background: "#fff", color: "#1a1a1a", fontFamily: '"Karla","system-ui",sans-serif', padding: "32px 48px" }}>
    <BodyPage />
  </div>);
}
