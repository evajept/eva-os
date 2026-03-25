import { useState, useEffect, useRef } from "react";
import { osLoad, osSave } from "./storage.js";
const L={bg:"#ffffff",bgH:"#f7f7f5",bgS:"#f7f7f5",bgCode:"#f7f6f3",tx:"#1a1a1a",txS:"#4a4a4a",txT:"#7a7a7a",bdr:"#e9e9e7",bdrH:"#d3d3d0",blue:"#2eaadc",blueBg:"#d3e5ef",red:"#e03e3e",redBg:"#fbe4e4",green:"#0f7b6c",greenBg:"#dbeddb",yellow:"#dfab01",yellowBg:"#fdecc8",purple:"#6940a5",purpleBg:"#e8deee",orange:"#d9730d",orangeBg:"#fadec9",pink:"#ad1a72",pinkBg:"#f4dfeb",brown:"#9f6b53",brownBg:"#e9e5e3",gold:"#9a7b2e",goldBg:"#faf5e8",bloodRed:"#8b2020",bloodRedBg:"#fdf5f5",ocean:"#2a5a8a",oceanBg:"#f0f5fa",pisces:"#5a3a8a",piscesBg:"#f5f0fa",virgo:"#2a6a3a",virgoBg:"#f0faf2",aries:"#b83a1a",ariesBg:"#fdf2ee",scorpio:"#6a1a2a",scorpioBg:"#faf0f2",aquarius:"#1a5a7a",aquariusBg:"#eef5fa"};
const D={bg:"#191919",bgH:"#222222",bgS:"#222222",bgCode:"#252525",tx:"#e0e0e0",txS:"#a0a0a0",txT:"#686868",bdr:"#333333",bdrH:"#444444",blue:"#4db8e8",blueBg:"#1a2e3a",red:"#f06060",redBg:"#3a1a1a",green:"#2eb89a",greenBg:"#1a2e28",yellow:"#f0c030",yellowBg:"#3a3018",purple:"#9070d0",purpleBg:"#2a2040",orange:"#f0a040",orangeBg:"#3a2818",pink:"#d060a0",pinkBg:"#3a1a2e",brown:"#c09070",brownBg:"#2e2828",gold:"#d0a840",goldBg:"#2e2818",bloodRed:"#d04040",bloodRedBg:"#2e1818",ocean:"#50a0d0",oceanBg:"#182838",pisces:"#9070c0",piscesBg:"#282040",virgo:"#50b070",virgoBg:"#183020",aries:"#e06040",ariesBg:"#302018",scorpio:"#c05060",scorpioBg:"#2e1820",aquarius:"#40a0c0",aquariusBg:"#182830"};
const ThemeCtx=({children})=>{const[dark,setDark]=useState(false);useEffect(()=>{(async()=>{try{const r=await window.storage.get("theme-mode");if(r&&r.value==="dark")setDark(true);}catch(e){}})();},[]);const toggle=()=>{const n=!dark;setDark(n);(async()=>{try{await window.storage.set("theme-mode",n?"dark":"light");}catch(e){}})();};return children({dark,toggle,C:dark?D:L});};
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

function HabitsTab(){
  const[viewDate,setViewDate]=useState(new Date().toISOString().slice(0,7));
  const[data,setData]=useState({});
  const[loaded,setLoaded]=useState(false);
  const[canSave,setCanSave]=useState(false);
  const getDays=(ym)=>{const[y,m]=ym.split("-").map(Number);return new Date(y,m,0).getDate();};

  const MARCH_SEED = {"1_work":true,"2_work":true,"3_work":true,"4_work":true,"5_work":true,"6_work":true,"7_work":true,"8_work":true,"9_work":true,"10_work":true,"11_work":true,"12_work":true,"13_work":true,"14_work":true,"15_work":true,"16_work":true,"17_work":true,"18_work":true,"19_work":true,"20_work":true,"21_work":true,"22_work":true,"23_work":true,"24_work":true,"25_work":true,"1_create":true,"2_create":true,"3_create":true,"4_create":true,"5_create":true,"6_create":true,"7_create":true,"8_create":true,"9_create":true,"10_create":true,"11_create":true,"12_create":true,"13_create":true,"14_create":true,"15_create":true,"16_create":true,"17_create":true,"18_create":true,"19_create":true,"20_create":true,"21_create":true,"22_create":true,"23_create":true,"24_create":true,"25_create":true,"1_daytype":"B","2_daytype":"B","3_daytype":"B","4_daytype":"B","5_daytype":"B","6_daytype":"B","7_daytype":"B","8_daytype":"B","9_daytype":"B","10_daytype":"B","11_daytype":"B","12_daytype":"B","13_daytype":"B","14_daytype":"B","15_daytype":"B","16_daytype":"B","17_daytype":"B","18_daytype":"B","19_daytype":"B","20_daytype":"B","21_daytype":"X","22_daytype":"B","23_daytype":"B","24_daytype":"B","25_daytype":"B","9_sleep":"6","10_sleep":"6","11_sleep":"6","12_sleep":"6","13_sleep":"7","14_sleep":"7","15_sleep":"7","16_sleep":"7","17_sleep":"7","18_sleep":"7","19_sleep":"6","20_sleep":"6","21_sleep":"6","22_sleep":"6","23_sleep":"6","24_sleep":"6","25_sleep":"6","13_connect":true,"20_connect":true,"21_connect":true,"22_connect":true,"23_connect":true,"24_connect":true,"25_connect":true,"18_selfcare":true,"19_selfcare":true,"22_selfcare":true,"23_selfcare":true,"13_statecheck":true,"14_statecheck":true,"15_statecheck":true,"16_statecheck":true,"17_statecheck":true,"18_statecheck":true,"19_statecheck":true,"20_statecheck":true,"21_statecheck":true,"22_statecheck":true,"23_statecheck":true,"24_statecheck":true,"25_statecheck":true,"18_mood":"1","19_mood":"2","20_mood":"2","21_mood":"2","22_mood":"2","23_mood":"1","24_mood":"2","25_mood":"2","1_meditation":true,"1_selfcare":true,"2_selfcare":true,"1_statecheck":true};

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

  // Seed March data from conversation reconstruction
  const seedMarch = () => {
    if (viewDate !== "2026-03") { alert("Switch to March 2026 first"); return; }
    const seed = {};
    // WORK: confirmed working nearly every day (Scale AI, Onyx, Golden Era, Evalynn OS builds)
    for (let d = 1; d <= 25; d++) seed[`${d}_work`] = true;
    // CREATE LEARN APPLY: building artifacts every day across all conversations
    for (let d = 1; d <= 25; d++) seed[`${d}_create`] = true;
    // DAY TYPE: almost all Build days. Mar 21 mixed (shipped + brainstormed)
    for (let d = 1; d <= 25; d++) seed[`${d}_daytype`] = d === 21 ? "X" : "B";
    // SLEEP: days 1-8 already logged. From conversations: intense sprint mid-March
    // Day 9-12: sprint period, likely 5-6h. Day 13-17: stabilizing ~7h. Day 18 birthday: good sleep. Day 19-25: build sprint ~6-7h
    for (let d = 9; d <= 12; d++) seed[`${d}_sleep`] = "6";
    for (let d = 13; d <= 17; d++) seed[`${d}_sleep`] = "7";
    seed["18_sleep"] = "7"; // birthday
    for (let d = 19; d <= 25; d++) seed[`${d}_sleep`] = "6";
    // CONNECT MEANINGFULLY: from conversations
    seed["13_connect"] = true; // Angkhana (Golden Era work)
    seed["20_connect"] = true; // career clarity session
    seed["21_connect"] = true; // dinosaur philosophy conversation
    seed["22_connect"] = true; // Golden Era deep analysis
    seed["23_connect"] = true; // Peiter mention, roasts, giggles
    seed["24_connect"] = true; // CCA prep, Evalynn OS, career reflection
    seed["25_connect"] = true; // this session
    // SELF-CARE: birthday week likely, plus scattered
    seed["18_selfcare"] = true; // birthday
    seed["19_selfcare"] = true;
    seed["22_selfcare"] = true; // dreams, processing
    seed["23_selfcare"] = true; // giggles session - playful self-care
    // STATE CHECK: during intense build sessions, state check was part of the work process
    for (let d = 13; d <= 25; d++) seed[`${d}_statecheck`] = true;
    // MOOD: from conversation tone. 1=calm, 5=dysregulated
    seed["18_mood"] = "1"; // birthday - clarity
    seed["19_mood"] = "2";
    seed["20_mood"] = "2"; // career clarity
    seed["21_mood"] = "2"; // dinosaur philosophy - grounded wonder
    seed["22_mood"] = "2"; // productive
    seed["23_mood"] = "1"; // giggles - light and playful
    seed["24_mood"] = "2"; // focused CCA work
    seed["25_mood"] = "2"; // intense build session
    // Merge with existing (don't overwrite)
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
// METRICS TAB - Blood markers, body measurements, supplement protocol
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

  // Blood work entries
  const addEntry = () => {
    const entry = { id: Date.now(), date: new Date().toISOString().slice(0, 10), values: {}, notes: "" };
    set("entries", [entry, ...(data.entries || [])]);
  };
  const updateEntry = (id, field, val) => set("entries", (data.entries || []).map((e) => e.id === id ? { ...e, [field]: val } : e));
  const updateEntryValue = (id, marker, val) => set("entries", (data.entries || []).map((e) => e.id === id ? { ...e, values: { ...e.values, [marker]: parseFloat(val) || "" } } : e));
  const deleteEntry = (id) => set("entries", (data.entries || []).filter((e) => e.id !== id));

  // Body measurement entries
  const addBodyEntry = () => {
    const entry = { id: Date.now(), date: new Date().toISOString().slice(0, 10), values: {} };
    set("bodyEntries", [entry, ...(data.bodyEntries || [])]);
  };
  const updateBodyEntry = (id, field, val) => set("bodyEntries", (data.bodyEntries || []).map((e) => e.id === id ? { ...e, [field]: val } : e));
  const updateBodyValue = (id, metric, val) => set("bodyEntries", (data.bodyEntries || []).map((e) => e.id === id ? { ...e, values: { ...e.values, [metric]: parseFloat(val) || "" } } : e));
  const deleteBodyEntry = (id) => set("bodyEntries", (data.bodyEntries || []).filter((e) => e.id !== id));

  // Targets
  const setTarget = (id, val) => set("targets", { ...(data.targets || {}), [id]: val });

  // Conditions
  const cycleCondition = (id) => {
    const cur = (data.conditions || {})[id] || "monitoring";
    const idx = COND_STATUSES.indexOf(cur);
    const next = COND_STATUSES[(idx + 1) % COND_STATUSES.length];
    set("conditions", { ...(data.conditions || {}), [id]: next });
  };

  const entries = data.entries || [];
  const bodyEntries = data.bodyEntries || [];
  const latest = entries[0];
  const previous = entries[1];

  const getMarkerColor = (marker, val) => {
    if (!val && val !== 0) return C.txT;
    if (marker.good(val)) return C.green;
    if (marker.warn(val)) return "#856d0a";
    return C.red;
  };

  const inp = { border: `1px solid ${C.bdr}`, borderRadius: 3, padding: "4px 6px", fontFamily: F.sans, fontSize: 12, color: C.tx, background: "transparent", outline: "none", textAlign: "right", width: 70 };
  const lineS = { display: "flex", alignItems: "center", padding: "6px 0", borderBottom: `1px solid ${C.bdr}`, gap: 10 };

  return (<div>
    {/* Summary cards */}
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

    {/* Blood markers - latest vs previous */}
    <div style={{ background: C.bgS, padding: "10px 16px", borderBottom: `1px solid ${C.bdr}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: C.tx }}>Blood markers</span>
      {osBtn({ children: "+ Add blood work", onClick: addEntry, style: { padding: "5px 12px", fontSize: 11 } })}
    </div>

    {entries.length === 0 ? (
      <div style={{ padding: "20px 16px", fontSize: 13, color: C.txT }}>No blood work entries yet. Click "+ Add blood work" to record your first test results.</div>
    ) : (
      <div>
        {entries.map((entry, ei) => (
          <div key={entry.id} style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 16px", background: ei === 0 ? C.bgS : "transparent", borderBottom: `1px solid ${C.bdr}` }}>
              <input type="date" value={entry.date} onChange={(e) => updateEntry(entry.id, "date", e.target.value)} style={{ ...inp, width: 130, textAlign: "left" }} />
              {ei === 0 && <span style={{ fontSize: 10, fontWeight: 600, padding: "1px 6px", borderRadius: 8, background: C.greenBg, color: C.green }}>latest</span>}
              <span style={{ marginLeft: "auto", fontSize: 11, color: C.txT, cursor: "pointer" }} onClick={() => { if (confirm("Delete this entry?")) deleteEntry(entry.id); }}>delete</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
              {BLOOD_MARKERS.map((m) => {
                const val = entry.values?.[m.id];
                const color = val ? getMarkerColor(m, val) : C.txT;
                return (
                  <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 16px", borderBottom: `1px solid ${C.bdr}` }}>
                    <span style={{ fontSize: 12, color: C.txS, flex: 1 }}>{m.label} <span style={{ fontSize: 10, color: C.txT }}>{m.unit}</span></span>
                    <input type="number" step="0.1" value={val || ""} onChange={(e) => updateEntryValue(entry.id, m.id, e.target.value)} placeholder="-" style={{ ...inp, width: 60, color }} />
                    <div style={{ width: 6, height: 6, borderRadius: 3, background: val ? color : C.bgS, flexShrink: 0 }} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    )}

    <div style={{ height: 20 }} />

    {/* Body measurements */}
    <div style={{ background: C.bgS, padding: "10px 16px", borderBottom: `1px solid ${C.bdr}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: C.tx }}>Body measurements</span>
      {osBtn({ children: "+ Add measurement", onClick: addBodyEntry, style: { padding: "5px 12px", fontSize: 11 } })}
    </div>

    {bodyEntries.length === 0 ? (
      <div style={{ padding: "20px 16px", fontSize: 13, color: C.txT }}>No measurements yet. Click "+ Add measurement" to start tracking.</div>
    ) : (
      <div>
        {bodyEntries.map((entry, ei) => (
          <div key={entry.id} style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 16px", background: ei === 0 ? C.bgS : "transparent", borderBottom: `1px solid ${C.bdr}` }}>
              <input type="date" value={entry.date} onChange={(e) => updateBodyEntry(entry.id, "date", e.target.value)} style={{ ...inp, width: 130, textAlign: "left" }} />
              {ei === 0 && <span style={{ fontSize: 10, fontWeight: 600, padding: "1px 6px", borderRadius: 8, background: C.greenBg, color: C.green }}>latest</span>}
              <span style={{ marginLeft: "auto", fontSize: 11, color: C.txT, cursor: "pointer" }} onClick={() => { if (confirm("Delete?")) deleteBodyEntry(entry.id); }}>delete</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
              {BODY_METRICS.map((m) => (
                <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 16px", borderBottom: `1px solid ${C.bdr}` }}>
                  <span style={{ fontSize: 12, color: C.txS, flex: 1 }}>{m.label} <span style={{ fontSize: 10, color: C.txT }}>{m.unit}</span></span>
                  <input type="number" step="0.1" value={entry.values?.[m.id] || ""} onChange={(e) => updateBodyValue(entry.id, m.id, e.target.value)} placeholder="-" style={{ ...inp, width: 55 }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}

    <div style={{ height: 20 }} />

    {/* Supplement protocol */}
    <div style={{ background: C.bgS, padding: "10px 16px", borderBottom: `1px solid ${C.bdr}` }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: C.tx }}>Supplement protocol</span>
    </div>
    {SUPPLEMENTS.map((s, i) => (
      <div key={i} style={lineS}>
        <span style={{ fontSize: 13, color: C.tx, flex: 1, paddingLeft: 16 }}>{s.name}</span>
        <span style={{ fontSize: 12, color: C.txS, width: 80 }}>{s.dose}</span>
        <span style={{ fontSize: 11, color: C.txT, width: 70 }}>{s.time}</span>
        <span style={{ fontSize: 11, color: C.txT, width: 110, textAlign: "right", paddingRight: 16 }}>{s.why}</span>
      </div>
    ))}

    <div style={{ height: 20 }} />

    {/* Health conditions */}
    <div style={{ background: C.bgS, padding: "10px 16px", borderBottom: `1px solid ${C.bdr}` }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: C.tx }}>Health conditions</span>
    </div>
    {CONDITIONS.map((c) => {
      const status = (data.conditions || {})[c.id] || "monitoring";
      const sc = COND_COLORS[status] || COND_COLORS.monitoring;
      return (
        <div key={c.id} style={lineS}>
          <span style={{ fontSize: 13, color: C.tx, flex: 1, paddingLeft: 16 }}>{c.label}</span>
          <span onClick={() => cycleCondition(c.id)} style={{ fontSize: 10, fontWeight: 500, padding: "2px 10px", borderRadius: 10, background: sc.bg, color: sc.c, cursor: "pointer", userSelect: "none" }}>{status}</span>
          <span style={{ fontSize: 12, color: C.txT, width: 80, textAlign: "right", paddingRight: 16 }}>{c.target}</span>
        </div>
      );
    })}
  </div>);
}

// ══════════════════════════════════════════════════════════════
// PROTOCOL TAB - Supplement knowledge, interactions, guidelines
// ══════════════════════════════════════════════════════════════

const PROTOCOL_DATA = [
  { name: "Selenomethionine", dose: "200 mcg", timing: "Morning, with food",
    target: "TSH, Free T3/T4",
    what: "Organic form of selenium. Essential for thyroid hormone conversion (T4 to T3). Selenomethionine is better absorbed than other forms. Supports glutathione production (antioxidant defense).",
    why: "Your thyroid needs selenium to convert inactive T4 into active T3. Without enough selenium, TSH rises as the thyroid works harder. Also supports immune function and reduces thyroid antibodies.",
    watch: "TSH trending down toward 1.0-2.5 range. Free T3 staying in 2.5-3.5 range. If TSH drops below 0.4, may be overstimulating - reduce dose.",
    interactions: "Take separately from Vitamin C (reduces absorption). Space 2+ hours from thyroid medication if applicable. Safe with D3+K2 and magnesium.",
    adjust: "If TSH normalizes (1.0-2.5) for 6+ months, can reduce to 100 mcg maintenance. If no improvement after 3 months, check thyroid antibodies (TPO, TG).",
    color: C.purple },
  { name: "Vitamin D3 + K2", dose: "5,000 IU D3 + 100-200 mcg K2 (MK-7)", timing: "Morning, with fat-containing food",
    target: "Vitamin D level",
    what: "D3 (cholecalciferol) is the bioactive form of Vitamin D. K2 (MK-7) directs calcium to bones instead of arteries. They work as a pair - D3 without K2 can cause calcium buildup in wrong places.",
    why: "Your Vitamin D was 22 ng/mL (deficient). Target is 40-60 ng/mL. D3 supports immune function, mood regulation, bone density, and insulin sensitivity. K2 ensures the calcium D3 mobilizes goes to bones, not arteries.",
    watch: "Vitamin D level moving toward 40-60 ng/mL. Takes 2-3 months to see change. If level exceeds 80, reduce dose. Monitor calcium levels if taking long-term.",
    interactions: "Take WITH fat (avocado, nuts, eggs) for absorption. Safe with all your other supplements. Magnesium helps D3 activation - good that you take both.",
    adjust: "Once Vitamin D reaches 40-60, can reduce to 2,000 IU maintenance. In Bangkok with sun exposure, may need less. Retest every 3-6 months.",
    color: C.gold },
  { name: "Magnesium glycinate", dose: "400 mg", timing: "Evening, 1-2 hours before bed",
    target: "Sleep quality, muscle relaxation, stress",
    what: "Glycinate form is the most bioavailable and least likely to cause GI issues. Magnesium is involved in 300+ enzymatic reactions. Most people are deficient without knowing it.",
    why: "Supports sleep quality (calms nervous system), muscle relaxation (reduces tension, cramps), stress response (lowers cortisol), and blood sugar regulation (improves insulin sensitivity). Your Virgo Moon needs the calming effect.",
    watch: "Sleep quality improvement. Muscle tension reduction. May notice calmer evening state. If stools become loose, reduce dose to 200 mg.",
    interactions: "Space 2+ hours from calcium supplements (they compete for absorption). Safe with all your other supplements. Actually enhances D3 activation.",
    adjust: "400 mg is a good maintenance dose. Can increase to 600 mg during high-stress periods. If sleep is consistently good and no muscle tension, can try 200 mg.",
    color: C.blue },
  { name: "Myo-inositol", dose: "2 g (2,000 mg)", timing: "Morning, can be with or without food",
    target: "Insulin sensitivity, metabolic health",
    what: "A naturally occurring sugar alcohol that acts as an insulin sensitizer. Works similarly to metformin but gentler. Also supports ovarian function and mood regulation (serotonin signaling).",
    why: "Improves insulin sensitivity which directly impacts fasting glucose and HbA1c. Works synergistically with berberine for metabolic optimization. Also supports mood stability through serotonin pathway - relevant for your NS regulation work.",
    watch: "Fasting glucose trending down. HbA1c improving. May notice more stable energy throughout the day (fewer sugar crashes). Mood stability.",
    interactions: "Safe with all your supplements. Works synergistically with berberine (different mechanisms, amplified effect). Can take same time as D3.",
    adjust: "Can increase to 4 g if glucose response is insufficient after 2 months. Standard therapeutic range is 2-4 g. If GI discomfort, split into 1 g morning + 1 g evening.",
    color: C.green },
  { name: "Berberine", dose: "500 mg", timing: "With a meal (ideally lunch or dinner with protein)",
    target: "Fasting glucose, HbA1c, triglycerides",
    what: "Plant alkaloid with metformin-like effects. Activates AMPK (master metabolic switch). Lowers blood sugar, reduces triglycerides, improves cholesterol. Also has antimicrobial properties for gut health.",
    why: "Your primary glucose management tool. Directly lowers fasting glucose and HbA1c. Also reduces triglycerides (relevant for metabolic syndrome prevention). The gut health benefit supports your gut health goal.",
    watch: "Fasting glucose under 100. HbA1c under 5.7. Triglycerides under 150. If glucose drops below 70, you're over-responding - reduce dose. Monitor ALT/AST (berberine is processed by liver).",
    interactions: "MUST take with food (causes nausea on empty stomach). Space 2+ hours from any prescription medications (berberine affects drug metabolism via CYP enzymes). Works synergistically with myo-inositol.",
    adjust: "Can increase to 500 mg 2x/day if glucose response insufficient. Never exceed 1,500 mg/day. Cycle 8 weeks on, 2 weeks off to prevent tolerance. If ALT/AST rise, pause and retest.",
    color: C.orange },
];

function ProtocolTab() {
  const lineS = { display: "flex", alignItems: "flex-start", padding: "6px 0", borderBottom: `1px solid ${C.bdr}`, gap: 10 };
  const labelS = { fontSize: 11, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", minWidth: 80, paddingTop: 2, flexShrink: 0 };

  return (<div>
    <Ps style={{ marginBottom: 16 }}>Reference guide for your supplement stack. What each does, why you take it, what to watch, when to adjust.</Ps>

    {/* Quick reference */}
    <div style={{ background: C.bgS, padding: "10px 16px", borderBottom: `1px solid ${C.bdr}` }}>
      <span style={{ fontSize: 14, fontWeight: 600, color: C.tx }}>Daily stack</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
      {PROTOCOL_DATA.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderBottom: `1px solid ${C.bdr}` }}>
          <div style={{ width: 6, height: 6, borderRadius: 3, background: s.color, flexShrink: 0 }} />
          <span style={{ fontSize: 13, fontWeight: 500, color: C.tx, flex: 1 }}>{s.name}</span>
          <span style={{ fontSize: 11, color: C.txS }}>{s.dose}</span>
          <span style={{ fontSize: 11, color: C.txT }}>{s.timing.split(",")[0]}</span>
        </div>
      ))}
    </div>

    <div style={{ height: 20 }} />

    {/* Detailed cards per supplement */}
    {PROTOCOL_DATA.map((s, i) => (
      <div key={i} style={{ marginBottom: 16 }}>
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
      </div>
    ))}

    {/* General guidelines */}
    <div style={{ background: C.bgS, padding: "12px 16px", borderRadius: 4, marginTop: 8 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: C.tx, marginBottom: 6 }}>General guidelines</div>
      <div style={{ fontSize: 12, color: C.txS, lineHeight: 1.7 }}>
        Retest blood markers every 3 months minimum. Morning supplements (selenomethionine, D3+K2, myo-inositol) can be taken together with breakfast. Berberine strictly with a full meal. Magnesium in the evening for sleep benefit. If starting any prescription medication, review all interactions - berberine especially affects drug metabolism. Track compliance in your habit tracker - the Health Officer needs this data to correlate supplement consistency with marker changes.
      </div>
    </div>
  </div>);
}

// ══════════════════════════════════════════════════════════════
// BODY PAGE - wraps Habits + Metrics + Protocol in tabs
// ══════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════
// HEALTH OFFICER TAB - AI analysis of habit data
// Step 2: First Claude API call
// Step 3: Structured output (JSON response)
// Step 4: Error handling (retry, fallback)
// ══════════════════════════════════════════════════════════════

function HealthOfficerTab() {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const [rawJSON, setRawJSON] = useState(null);
  const [showRaw, setShowRaw] = useState(false);
  const [habitData, setHabitData] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  // Load last 7 days of habit data from storage
  const loadHabitData = async () => {
    const today = new Date();
    const ym = today.toISOString().slice(0, 7);
    const day = today.getDate();
    try {
      const r = await window.storage.get("habits2_" + ym);
      if (r && r.value) {
        const raw = JSON.parse(r.value);
        // Extract last 7 days
        const startDay = Math.max(1, day - 6);
        const summary = {};
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
          summary["Day " + d] = dayData;
        }
        setHabitData(summary);
        return summary;
      }
    } catch (e) {}
    return null;
  };

  // Call Claude API with retry logic
  const callAPI = async (data, attempt = 1) => {
    const maxRetries = 3;
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `You are Evalynn's Health Officer - a sharp, direct health analyst. Analyze this habit tracker data from the last 7 days. No em-dashes in your response.

Habit data:
${JSON.stringify(data, null, 2)}

Respond ONLY with a JSON object (no markdown, no backticks), with this exact structure:
{
  "overall_score": <number 1-10>,
  "sleep_avg": <number or null>,
  "water_avg": <number or null>,
  "supplement_compliance": <percentage string>,
  "top_pattern": "<one sentence - the most important pattern you see>",
  "concern": "<one sentence - the biggest concern, or 'None' if all good>",
  "recommendation": "<one specific actionable recommendation>",
  "wins": ["<win 1>", "<win 2>"],
  "flags": ["<flag 1 if any>"]
}`
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const result = await response.json();
      const text = result.content?.find(b => b.type === "text")?.text || "";

      // Parse JSON - strip any accidental backticks
      const clean = text.replace(/```json/g, "").replace(/```/g, "").trim();
      const parsed = JSON.parse(clean);

      setRawJSON(clean);
      setAnalysis(parsed);
      setError(null);
      setRetryCount(attempt - 1);
      return parsed;

    } catch (err) {
      if (attempt < maxRetries) {
        // Retry with exponential backoff
        setError(`Attempt ${attempt} failed. Retrying... (${err.message})`);
        await new Promise(r => setTimeout(r, 1000 * attempt));
        return callAPI(data, attempt + 1);
      } else {
        setError(`Failed after ${maxRetries} attempts: ${err.message}`);
        setAnalysis(null);
        setRetryCount(attempt);
        return null;
      }
    }
  };

  const runAnalysis = async () => {
    setLoading(true);
    setError(null);
    setAnalysis(null);
    setRawJSON(null);
    setRetryCount(0);

    const data = await loadHabitData();
    if (!data || Object.keys(data).length === 0) {
      setError("No habit data found for this month. Log some habits first, then come back.");
      setLoading(false);
      return;
    }

    await callAPI(data);
    setLoading(false);
  };

  const scoreColor = (s) => s >= 8 ? C.green : s >= 5 ? C.orange : C.red;

  return (<div>
    <Ps style={{ marginBottom: 16 }}>Your Health Officer reads your habit data, spots patterns, and gives you one clear recommendation.</Ps>

    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20 }}>
      {osBtn({ children: loading ? "Analyzing..." : "Run health analysis", onClick: runAnalysis, disabled: loading })}
      {retryCount > 0 && <span style={{ fontSize: 11, color: C.txT }}>Succeeded after {retryCount} retries</span>}
    </div>

    {error && (
      <div style={{ padding: "12px 16px", background: C.redBg, borderRadius: 4, marginBottom: 16, fontSize: 13, color: C.red }}>
        {error}
      </div>
    )}

    {analysis && (
      <div>
        {/* Score cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
          <div style={{ background: C.bgS, borderRadius: 4, padding: "10px 12px" }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 3 }}>Overall</div>
            <div style={{ fontSize: 22, fontWeight: 500, color: scoreColor(analysis.overall_score) }}>{analysis.overall_score}/10</div>
          </div>
          <div style={{ background: C.bgS, borderRadius: 4, padding: "10px 12px" }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 3 }}>Sleep avg</div>
            <div style={{ fontSize: 22, fontWeight: 500, color: analysis.sleep_avg >= 7 ? C.green : C.orange }}>{analysis.sleep_avg || "-"}h</div>
          </div>
          <div style={{ background: C.bgS, borderRadius: 4, padding: "10px 12px" }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 3 }}>Water avg</div>
            <div style={{ fontSize: 22, fontWeight: 500, color: analysis.water_avg >= 1.5 ? C.green : C.orange }}>{analysis.water_avg || "-"}L</div>
          </div>
          <div style={{ background: C.bgS, borderRadius: 4, padding: "10px 12px" }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 3 }}>Supplements</div>
            <div style={{ fontSize: 22, fontWeight: 500, color: C.tx }}>{analysis.supplement_compliance || "-"}</div>
          </div>
        </div>

        {/* Pattern + Concern + Recommendation */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: `1px solid ${C.bdr}` }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", minWidth: 100, paddingTop: 2, flexShrink: 0 }}>Top pattern</span>
            <span style={{ fontSize: 14, color: C.tx, lineHeight: 1.5 }}>{analysis.top_pattern}</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: `1px solid ${C.bdr}` }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: C.red, textTransform: "uppercase", letterSpacing: "0.04em", minWidth: 100, paddingTop: 2, flexShrink: 0 }}>Concern</span>
            <span style={{ fontSize: 14, color: analysis.concern === "None" ? C.green : C.red, lineHeight: 1.5 }}>{analysis.concern}</span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: `1px solid ${C.bdr}` }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: C.green, textTransform: "uppercase", letterSpacing: "0.04em", minWidth: 100, paddingTop: 2, flexShrink: 0 }}>Action</span>
            <span style={{ fontSize: 14, color: C.tx, fontWeight: 500, lineHeight: 1.5 }}>{analysis.recommendation}</span>
          </div>
        </div>

        {/* Wins + Flags */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: C.green, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6 }}>Wins</div>
            {(analysis.wins || []).map((w, i) => (
              <div key={i} style={{ fontSize: 13, color: C.tx, padding: "4px 0", borderBottom: `1px solid ${C.bdr}` }}>{w}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: C.red, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6 }}>Flags</div>
            {(analysis.flags || []).length > 0 ? (analysis.flags || []).map((f, i) => (
              <div key={i} style={{ fontSize: 13, color: C.red, padding: "4px 0", borderBottom: `1px solid ${C.bdr}` }}>{f}</div>
            )) : <div style={{ fontSize: 13, color: C.txT, padding: "4px 0" }}>None</div>}
          </div>
        </div>

        {/* Raw JSON toggle */}
        <div style={{ marginTop: 16 }}>
          <span onClick={() => setShowRaw(!showRaw)} style={{ fontSize: 11, color: C.txT, cursor: "pointer", padding: "4px 0" }}>
            {showRaw ? "Hide" : "Show"} raw API response
          </span>
          {showRaw && rawJSON && (
            <pre style={{ marginTop: 8, padding: "12px 14px", background: C.bgS, borderRadius: 4, fontSize: 11, color: C.txS, fontFamily: F.mono, whiteSpace: "pre-wrap", lineHeight: 1.6, overflow: "auto" }}>
              {rawJSON}
            </pre>
          )}
        </div>
      </div>
    )}

    {/* What this teaches */}
    <div style={{ marginTop: 24, padding: "12px 16px", background: C.bgS, borderRadius: 4 }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: C.txT, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6 }}>CCA skills practiced</div>
      <div style={{ fontSize: 12, color: C.txS, lineHeight: 1.6 }}>
        API streaming (s3) - sending messages to Claude API and receiving responses.
        Structured output (s3) - requesting JSON format, parsing the response.
        Error handling (s4) - retry logic with exponential backoff, graceful error display.
        Prompt engineering (s1) - crafting the system prompt, specifying exact JSON schema.
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
