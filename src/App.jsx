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
// GOALS TAB (from draft, storage shifted to osLoad/osSave)
// ══════════════════════════════════════════════════════════════

const LIFE_GOALS=[
  {n:1,title:"Stay balanced and graceful",short:"Balanced",cat:"core"},
  {n:2,title:"Stay sovereign & regulated",short:"Sovereign",cat:"core"},
  {n:3,title:"Live well",short:"Live well",cat:"core"},
  {n:4,title:"Earn B1,000,000-12,000,000",short:"Earn B1-12M",cat:"career"},
  {n:5,title:"Grow aligned & reciprocal connections",short:"Connections",cat:"core"},
  {n:12,title:"Work on my own terms",short:"Own terms",cat:"core"},
  {n:6,title:"Sell Life OS planner",short:"Life OS",cat:"project"},
  {n:7,title:"Workation Dharamshala India",short:"Dharamshala",cat:"experience"},
  {n:8,title:"Kilbon",short:"Kilbon",cat:"experience"},
  {n:9,title:"Nervous System Reset Program",short:"NS Reset",cat:"experience"},
  {n:10,title:"Finish Sean & Dasha",short:"Sean & Dasha",cat:"project"},
  {n:11,title:"Regulate with Me Youtube Channel",short:"Vagal Tone",cat:"project"},
];
const STATUS_CFG={"not started":{bg:C.redBg,c:C.red},building:{bg:C.yellowBg,c:"#856d0a"},"in motion":{bg:C.orangeBg,c:C.orange},ramping:{bg:C.blueBg,c:C.blue},living:{bg:C.greenBg,c:C.green},achieved:{bg:C.greenBg,c:C.green},paused:{bg:C.bgS,c:C.txS},someday:{bg:C.bgS,c:C.txT}};
const STATUS_OPTS=["not started","building","in motion","ramping","living","achieved","paused","someday"];
const GOAL_SEED={
1:{status:"building",
vision:"รู้สึกถึงพลังชีวิต มีพลังใจสมดุล อารมณ์ลื่นไหล ไม่ติดค้าง\nสบายใจและมั่นใจในรูปร่างและรูปลักษณ์ตัวเอง\nค่าตรวจสุขภาพดี: น้ำตาล ความดัน ไขมันปกติ\nค่าไทรอยด์อยู่ในเกณฑ์ปลอดภัย\nเนื้องอกอยู่ในระดับที่ไม่เป็นปัญหา\nภูมิคุ้มกันแข็งแรง ขับถ่ายดี สบายท้อง\nไม่มีอาการนิ่ว การมองเห็นปกติ\nหุ่นดี หน้าท้องแบนราบ กินไม่อ้วน\nสบายหลัง ตัวตรง อกยืด คอระหง เดินตรง สง่า\nหน้าสวย เรียว กรามชัด จมูกสันคม ผิวเนียนสดใส\nฟังเรียงตัวสวย ยิ้มสวย ไม่ผุ\nผมสวย หนา ไม่ร่วงเยอะ\nแต่งตัวมั่นใจ ใส่บิกินี่สวย ไร้ขน",
why:"ร่างกายที่แข็งแรงส่งเสริมความรู้สึกปลอดภัย ใช้ชีวิตได้เต็มที่ มีพลังทำตามเป้าหมาย รู้สึกเติมเต็ม ความกลัวไม่ครอบงำ ฟังเสียงหัวใจตัวเองชัด รักได้อย่างสมดุล ตั้งหลักได้ สื่อสารชัดเจน ผ่อนคลาย ไม่แบกความกดดันเกินจำเป็น แสดงตัวตนจริงในความสัมพันธ์ได้",
assess:[{metric:"Health check",target:"Normal sugar"},{metric:"Weight/BMI/Fat",target:"54 -> 50"},{metric:"Teeth",target:"Aligned"},{metric:"Self-pictures",target:"Radiant"},{metric:"LSIL",target:"Negative"},{metric:"Gallstone",target:"No pain"},{metric:"Gut health",target:"Good"}],
actions:[{id:101,text:"Book annual health check-up",prio:"P0",date:"",done:false},{id:102,text:"Measure weight, body",prio:"P0",date:"",done:false},{id:103,text:"Complete learning/skill list + summary",prio:"P0",date:"",done:false},{id:104,text:"What vitamins + probiotics to take",prio:"P0",date:"",done:false},{id:105,text:"Define nutrition plan",prio:"P0",date:"",done:false},{id:106,text:"Plan and prepare for actions",prio:"P0",date:"",done:false},{id:107,text:"Set realistic goals",prio:"P0",date:"Dec 25",done:true},{id:108,text:"Define habits",prio:"P0",date:"Dec 25",done:true},{id:109,text:"Define Health-NS Protocol",prio:"P0",date:"Dec 25",done:true}],
practices:[{id:111,text:"Sleep 7 hours",freq:"daily"},{id:112,text:"Move body",freq:"daily"},{id:113,text:"Water 1.5-2L",freq:"daily"},{id:114,text:"Vitamins + probiotics",freq:"daily"},{id:115,text:"Eat protein, fat, low-carb",freq:"5/w"},{id:116,text:"Skincare / grooming",freq:"5/w"},{id:117,text:"Posture work",freq:"1/w"},{id:118,text:"Non-sugar day",freq:"1/w"}],
learning:[{id:121,text:"Nervous system regulation",done:true},{id:122,text:"Somatic awareness",done:true},{id:123,text:"Emotional processing",done:true},{id:124,text:"Gut health foundations",done:true},{id:125,text:"Strength training basics",done:true},{id:126,text:"My body",done:true},{id:127,text:"Posture & breath mechanics",done:true},{id:128,text:"Anti-inflammatory nutrition",done:true},{id:129,text:"Lymphatic health - Dtox",done:true},{id:130,text:"Hormone balance 101",done:true},{id:131,text:"Circadian rhythm & sleep",done:true},{id:132,text:"Skin & body care fundamentals",done:true},{id:133,text:"Graceful postures",done:true}]},
2:{status:"building",
vision:"เลือกตัวเองก่อนเสมอ อยากได้อะไรจากคนอื่น ให้สิ่งนั้นกับตัวเองก่อน\nรู้สึกเป็นอิสระ เป็นตัวเอง รู้สึกปลอดภัย\nคุณค่าตัวเองไม่ขึ้นลงตามใคร นับถือตัวเอง มั่นใจ\nไม่วิ่งไล่ ยึดติด รักษาขอบเขตในความสัมพันธ์\nอยู่กับความไม่สบายได้โดยไม่หนี ยอมรับความผิดหวังได้\nตัดสินใจด้วยความชัดเจน ไม่ใช่เพราะกลัวหรือกดดัน\nตอบสนองจากสติ ไม่ใช่ปฏิกิริยาอัตโนมัติ\nฟื้นตัวจากความเครียดได้เร็ว ทำสิ่งที่ต้องทำ ไม่จมดิ่งนาน\nเดินสู่เป้าหมายได้ต่อเนื่อง\nสื่อสารตรงไปตรงมา ชัดเจน สุภาพ แม้เป็นเรื่องยาก\nเผชิญกับความขัดแย้งอย่างสง่างาม\nแก้ปัญหาเก่ง เร็ว ตัดสินใจถูก ลงมือทำทันที",
why:"จิตใจและอารมณ์ที่มั่นคง ทำให้เลือกสิ่งต่าง ๆ ได้สอดคล้องกับตัวตนที่แท้จริง คิด ตัดสินใจได้เฉียบคมและชัดเจน กระจ่างเรื่องความรัก เรียนรู้จากประสบการณ์ชีวิต และใช้ชีวิตได้อย่างสมบูรณ์",
assess:[{metric:"Sovereign Matrix",target:"1.88 -> 2.2"},{metric:"Cause-Effect Report",target:"Behavior shifted"}],
actions:[{id:201,text:"Define goals / actions / practices",prio:"P0",date:"Jan 2",done:true},{id:202,text:"Define - Who I truly am",prio:"P0",date:"Jan 2",done:true},{id:203,text:"Final Evalynn OS Book",prio:"P0",date:"",done:false},{id:204,text:"Complete learning/skill list + summary",prio:"P0",date:"",done:false},{id:205,text:"Come up with voice journal framework",prio:"P0",date:"",done:false},{id:206,text:"Identity matrix assessment Q1",prio:"P2",date:"",done:false},{id:207,text:"Identity matrix assessment Q2",prio:"P2",date:"",done:false},{id:208,text:"Identity matrix assessment Q3",prio:"P2",date:"",done:false},{id:209,text:"Identity matrix assessment Q4",prio:"P2",date:"",done:false},{id:210,text:"Final Identity Matrix",prio:"P0",date:"Dec 1",done:true},{id:211,text:"Assess Identity Score 2025",prio:"P0",date:"Dec 1",done:true},{id:212,text:"Draft Evalynn OS Book",prio:"P0",date:"Dec 1",done:true}],
practices:[{id:221,text:"Morning manifest-meditation",freq:"daily"},{id:222,text:"State check, day plan, act",freq:"daily"},{id:223,text:"Night gratitude",freq:"daily"}],
learning:[{id:231,text:"Nervous system",done:true},{id:232,text:"Body awareness",done:true},{id:233,text:"Emotional processing",done:true},{id:234,text:"Triggers & patterns",done:true},{id:235,text:"Regulated clarity",done:true},{id:236,text:"Grounded presence",done:true},{id:237,text:"Conflict competence",done:true},{id:238,text:"Trustworthy presence",done:true},{id:239,text:"Identity alignment",done:true},{id:240,text:"Stable self-esteem",done:true},{id:241,text:"Powerful execution",done:true},{id:242,text:"Cause and effect",done:true},{id:243,text:"Boundary and self-respect",done:true}]},
3:{status:"building",
vision:"ตื่นมารู้สึกได้พักผ่อน ไม่เร่งรีบ เวลายามเช้าเรียบง่าย ชิล\nเอ็นจอยชีวิตประจำวันที่สมดุลระหว่างแบบแผนและยืดหยุ่น\nเรียนรู้และฝึกสกิลที่สนใจและเป็นประโยชน์\nอยู่ที่ปลอดภัย สะอาด เรียบร้อย ชีวิตสบาย สะดวก คุณภาพชีวิตดี\nมีอิสระเลือกทำสิ่งที่ต้องการ ไปที่ที่อยากไป เจอคนที่อยากเจอ\nนั่งสมาธิ breathwork icebath ออนเซ็น นั่งชิวพักผ่อน ฟังเพลง\nคุยกับตัวเอง เขียนไดอารี่ สะท้อนตัวเอง inner work\nนวด ครอบแก้ว อบสมุนไพร อาบน้ำอุ่น ซาวน่า\nเสริมสวย ทำคิ้ว ทำผม ขัดผิว ทำเล็บ\nโยคะ พิลาทีส บาร์เล่ต์ เต้น มวย เล่นเวท ชี่กง ไทชิ ปั่นจักรยาน เดินเล่น\nดูหนัง อ่านหนังสือ สัมผัสธรรมชาติ เที่ยว ผจญภัย ปั้นเซรามิก วาดรูป\nแต่งตัวดูดี ใส่สบาย รู้สึกมั่นใจแบบผ่อนคลาย\nปรับกิจกรรม ความหนักเบา ตามพลังงาน\nพักหรือรีเซ็ตเมื่อรู้สึกเหนื่อย",
why:"การตั้งใจใช้ชีวิตให้ดีทำให้รู้สึกชีวิตมีความหมาย เติมเต็ม มีพลังทำสิ่งตามเป้าหมายและสิ่งที่เป็นประโยชน์",
assess:[{metric:"Habit tracker",target:"On momentum"},{metric:"Energy stability",target:"Yes"},{metric:"Nourishment moments",target:"2-3/month"},{metric:"Clutter & chaos level",target:"Yes"}],
actions:[{id:301,text:"Refresh home environment",prio:"P0",date:"Jan 10",done:true},{id:302,text:"Complete learning/skill list + summary",prio:"P0",date:"",done:false},{id:303,text:"Plan personal retreat / workation",prio:"P1",date:"",done:false},{id:304,text:"Define joy lists",prio:"P1",date:"",done:false},{id:305,text:"Reflect - Review - Recalibrate (monthly)",prio:"P2",date:"",done:false},{id:306,text:"Define habits",prio:"P0",date:"Dec 25",done:true},{id:307,text:"Add alignment signals in reflection",prio:"P0",date:"Dec 1",done:true}],
practices:[{id:311,text:"Self-care",freq:"daily"},{id:312,text:"Home reset",freq:"1/w"}],
learning:[{id:321,text:"Restorative rhythm",done:true},{id:322,text:"Nourishing environment",done:true},{id:323,text:"Meaningful practice flow",done:true},{id:324,text:"Emotional & mental unwind",done:true},{id:325,text:"Embodied enjoyment",done:true},{id:326,text:"Frictionless learning",done:true},{id:327,text:"Live well protocol",done:true},{id:328,text:"Adaptive habit formation",done:true}]},
4:{status:"in motion",
vision:"Active และ passive income เดือนละ 84,000-1,000,000 บาท\nทั้งปีทำรายได้ 1,000,000-12,000,000 บาท\nเงินเก็บเดือนละ 10,000-730,000 บาท\nมีเงินสำรอง 100,000-300,000 บาท\nพอร์ตลงทุนเติบโตอย่างน้อย 10% ต่อปี\nใช้เงินได้อย่างสบายใจ คล่องตัว\nมีระบบทำรายได้ เก็บเงิน ออมเงิน ลงทุนโดยไม่รู้สึกฝืน\nมีแผนรายได้ รายจ่าย เก็บเงิน ลงทุน ระยะสั้น-ยาวที่ชัดเจน",
why:"ความมั่งคั่งทำให้รู้สึกปลอดภัย มั่นคง ดูแลและพึ่งพาตัวเองได้ ใช้ชีวิตสบาย คล่องตัว เต็มที่ พัฒนาตัวเอง เปิดกว้างชีวิต ช่วยเหลือครอบครัวได้ เลือกเส้นทางชีวิตอย่างอิสระ ต่อยอดอนาคตได้",
assess:[{metric:"Finance report",target:"On budget"},{metric:"Digital product ROI",target:"60,000/year"}],
actions:[{id:401,text:"Complete learning/skill list + summary",prio:"P1",date:"",done:false},{id:402,text:"Launch Life OS digital product",prio:"P1",date:"",done:false},{id:403,text:"Get clarity 2025 income/expense/debt",prio:"P0",date:"Dec 31",done:true},{id:404,text:"Finance sheet 2026 - Design",prio:"P0",date:"Jan 24",done:true},{id:405,text:"Finance sheet 2026 - Automate",prio:"P0",date:"Jan 24",done:true},{id:406,text:"Finance sheet 2026 - Final",prio:"P0",date:"Jan 24",done:true},{id:407,text:"Build system - Review, Reflect, Protocol",prio:"P0",date:"Jan 24",done:true},{id:408,text:"Final flexible strategy for 2026",prio:"P0",date:"Dec 6",done:true},{id:409,text:"Adaptive finance plan",prio:"P0",date:"Dec 6",done:true},{id:410,text:"Define income stream: Active+Passive",prio:"P0",date:"Dec 6",done:true},{id:411,text:"Review & reflect finance 2025",prio:"P0",date:"Dec 6",done:true},{id:412,text:"Explore income stream and strategy",prio:"P0",date:"Dec 7",done:true},{id:413,text:"Draft Eva Finance Instruction",prio:"P0",date:"Dec 6",done:true},{id:414,text:"Final Eva Finance Instruction",prio:"P0",date:"Dec 8",done:true},{id:415,text:"List active + passive income potential",prio:"P0",date:"Dec 6",done:true},{id:416,text:"Investment 2025 review",prio:"P0",date:"Dec 7",done:true},{id:417,text:"Investment 2026 plan",prio:"P0",date:"Dec 7",done:true}],
practices:[{id:421,text:"Work",freq:"daily"},{id:422,text:"Create, learn, apply, decide",freq:"daily"}],
learning:[{id:431,text:"Money psychology",done:true},{id:432,text:"Money manifestation",done:true},{id:433,text:"Long term investment",done:false},{id:434,text:"Swing trading basics",done:false},{id:435,text:"Option basics",done:false},{id:436,text:"Advanced Nasdaq reading",done:false},{id:437,text:"Digital products design/setup/scale",done:false},{id:438,text:"Marketing + storytelling",done:false},{id:439,text:"Paid acquisition for digital products",done:false},{id:440,text:"High-ticket offer creation",done:false},{id:441,text:"Networking",done:false},{id:442,text:"Portfolio building",done:false},{id:443,text:"Automation",done:false},{id:444,text:"Agency model",done:false},{id:445,text:"Team building",done:false},{id:446,text:"Systems building",done:false},{id:447,text:"AI project management refinement",done:false}]},
5:{status:"building",
vision:"เป็นตัวเองได้ สบายใจ รู้สึกถึงคุณค่า เติบโตทางใจ จากทุกความสัมพันธ์\nรู้สึกอุ่นใจ ปลอดภัย แสดงความรักและหวังดีกับคนในครอบครัว\nใช้เวลาคุณภาพกับเพื่อน ๆ ตามขอบเขตและระดับความสนิทที่เหมาะสม\nทำงานเป็นทีมกับเพื่อนร่วมงานได้อย่างดี สื่อสารชัด มีเน็ตเวิร์คที่มีคุณภาพ\nโสดอย่างมีความสุข รักและเห็นคุณค่าตัวเอง เปิดรับความสัมพันธ์ที่ดี\nมีคนรักที่ไปด้วยกันได้ ไว้ใจได้ ใจดี ฉลาด ฐานะมั่นคง เป็นผู้ใหญ่ ดูแลตัวเอง",
why:"ความสัมพันธ์ที่ดีกับคนรอบตัว รู้ว่ามีคนอยู่ข้าง ๆ เสมอ ส่งเสริมความมั่นคงทางใจ รู้สึกชีวิตมีความหมายและมีคุณค่า สบายใจ มีกำลังใจ",
assess:[{metric:"Emotional ease",target:"Yes"},{metric:"Meaningful interactions",target:"2-3/month"},{metric:"Boundary health check",target:"Yes"},{metric:"Communication capacity",target:"Yes"},{metric:"Emotional stability in connection",target:"Yes"}],
actions:[{id:501,text:"Practice communication capacity",prio:"P1",date:"",done:false},{id:502,text:"Define connection principles",prio:"P0",date:"Jan 24",done:true},{id:503,text:"Complete learning/skill list + summary",prio:"P0",date:"Jan 24",done:true}],
practices:[{id:511,text:"Connect meaningfully",freq:"1/w"}],
learning:[{id:521,text:"Relational self-worth",done:true},{id:522,text:"Pacing & emotional safety",done:true},{id:523,text:"Authentic expression",done:true},{id:524,text:"Reading people",done:true},{id:525,text:"Relational leadership",done:true},{id:526,text:"Attraction discernment",done:true},{id:527,text:"Attachment style",done:true},{id:528,text:"Trust & protection",done:true},{id:529,text:"Connection depth",done:true},{id:530,text:"Context application",done:true}]},
6:{status:"not started",vision:"การใช้แพลนเนอร์ทำให้ทำตามเป้าหมายได้สำเร็จ\nแชร์แพลนเนอร์แล้วช่วยพัฒนาให้ชีวิตคนอื่นดีขึ้น\nขายแพลนเนอร์ได้",why:"การมีเครื่องมีอที่ช่วยให้ทำตามเป้าหมายได้สำเร็จ ทำให้รู้สึกภูมิใจ เป็นประโยชน์ และมีคุณค่า",assess:[{metric:"Test and see that it works",target:""}],actions:[{id:601,text:"Create contact AltSpace 45 days before",prio:"P0",date:"",done:false}],practices:[],learning:[]},
7:{status:"someday",vision:"ได้ทำงานในที่ที่เห็นวิวภูเขาหิมาลัย\nได้ใช้ชีวิตเรียบง่าย สนุก\nได้รู้จักเพื่อนใหม่ ๆ",why:"การเปิดหูเปิดตา เปลี่ยนบรรยากาศ อยู่ในที่ใหม่ เจอเพื่อนใหม่ ๆ ทำให้รู้สึกตื่นตัว และมีความสุข",assess:[{metric:"Accommodation available",target:""},{metric:"Allocate budget",target:"THB 500,000"},{metric:"Stable income stream",target:"THB 160,000"}],actions:[{id:701,text:"Define when conditions unlocked",prio:"P0",date:"",done:false},{id:702,text:"Use Apply for VISA",prio:"P0",date:"",done:false},{id:703,text:"Refine",prio:"P0",date:"",done:false},{id:704,text:"Test",prio:"P0",date:"",done:false},{id:705,text:"Launch",prio:"P0",date:"",done:false},{id:706,text:"Scale AI travel request",prio:"P0",date:"",done:false},{id:707,text:"Book flight",prio:"P0",date:"",done:false},{id:708,text:"Book accommodation",prio:"P0",date:"",done:false},{id:709,text:"Book airport pick-up",prio:"P0",date:"",done:false}],practices:[],learning:[]},
8:{status:"in motion",vision:"ได้จัดฟัน Kilbon พบหมอทุก 3 สัปดาห์",why:"เพื่อให้ฟันเรียงตัวสวย โครงหน้าสมดุล",assess:[{metric:"Stay in Thailand 2 years",target:""},{metric:"A sense of safety",target:""}],actions:[{id:801,text:"Check-in Feb 1",prio:"P0",date:"Feb 1",done:true}],practices:[],learning:[]},
9:{status:"someday",vision:"ได้ปลดปล่อยและเรียนรู้การจัดการระบบความคิด ความรู้สึก",why:"การรีเซ็ทตัวเอง ทำให้ใช้ชีวิตได้ลื่นไหล การปลดปล่อยตัวเอง การรู้จักตัวเอง และการมีสกิลจัดการตัวเอง ทำให้ใช้ชีวิตได้ดีขึ้น ทำตามสิ่งที่สอดคล้องเป้าหมายได้ดีขึ้น",assess:[{metric:"Budget A - EMDR Bangkok",target:"THB 15,000"},{metric:"Budget B - Wellness Bali",target:"THB 50,000"},{metric:"Budget C - Psilocybin Netherlands",target:"THB 300,000"},{metric:"Budget D - Vipassana Retreat",target:"THB 30,000"}],actions:[{id:901,text:"Define when conditions unlocked",prio:"P0",date:"",done:false},{id:902,text:"Vipassana Meditation Retreat",prio:"P0",date:"Dec 20",done:true},{id:903,text:"Get insurance",prio:"P0",date:"",done:false},{id:904,text:"Prepare for moving",prio:"P0",date:"",done:false}],practices:[],learning:[{id:911,text:"Vipassana: Awareness, Suffering, Attachment",done:true}]},
10:{status:"not started",vision:"เขียนแก้จบ\nอ่านแล้วรู้สึกอินกับเรื่องที่แต่ง\nมีคนที่อ่านแล้วชอบ",why:"ฉันเกิดมาเพื่อเขียนเรื่องราวที่ขับเคลื่อนความรู้สึกและจิตใจคนอ่าน",assess:[],actions:[{id:1001,text:"Define when conditions unlocked",prio:"P0",date:"",done:false}],practices:[],learning:[]},
11:{status:"not started",vision:"สร้างช่อง\nมีคนติดตาม 100K\nได้รายได้อย่างน้อยเดือนละ 2,000K",why:"อยากช่วยให้คนอื่นจัดการสภาวะจิตใจตัวเอง ใช้ชีวิตต่อตามความตั้งใจ",assess:[],actions:[{id:1101,text:"Choose name",prio:"P0",date:"",done:false},{id:1102,text:"Create channel",prio:"P0",date:"",done:false},{id:1103,text:"Set up branding in Canva",prio:"P0",date:"",done:false},{id:1104,text:"Sign up Suno Pro",prio:"P0",date:"",done:false},{id:1105,text:"Generate first 5 tracks",prio:"P0",date:"",done:false},{id:1106,text:"Install Audacity + CapCut",prio:"P0",date:"",done:false},{id:1107,text:"Practice extending tracks",prio:"P0",date:"",done:false},{id:1108,text:"Record voice intros for first 3 videos",prio:"P0",date:"",done:false},{id:1109,text:"Upload Video #1-5",prio:"P0",date:"",done:false},{id:1110,text:"Sign up DistroKid",prio:"P0",date:"",done:false},{id:1111,text:"Create Track 1: Coming home to Safety",prio:"P0",date:"",done:false},{id:1112,text:"Create Track 2: Softening the Fight Response",prio:"P0",date:"",done:false}],practices:[],learning:[]},
12:{status:"not started",vision:"",why:"",assess:[],actions:[],practices:[],learning:[]}};

function GoalCard({g,isOpen,onToggle,data}){
  const d=data||{};
  const status=d.status||"not started";
  const sc=STATUS_CFG[status]||STATUS_CFG["not started"];
  return(<div onClick={onToggle} style={{padding:"12px 14px",marginBottom:4,cursor:"pointer",borderRadius:4,background:isOpen?sc.bg:sc.bg,border:isOpen?`1.5px solid ${sc.c}40`:"1.5px solid transparent",transition:"all 0.15s"}}>
    <div style={{fontFamily:F.sans,fontSize:14,fontWeight:isOpen?600:500,color:C.tx}}>{g.title}</div>
    <div style={{fontSize:10,color:sc.c,fontWeight:500,marginTop:3}}>{status}</div>
  </div>);
}
function GoalDetail({g,data,setData}){
  const[showCtx,setShowCtx]=useState(false);const[showDoneA,setShowDoneA]=useState(true);const[showDoneL,setShowDoneL]=useState(true);
  const d=data||{vision:"",why:"",assess:[],actions:[],practices:[],learning:[],status:"seeding"};
  const set=(field,val)=>setData({...d,[field]:val});
  const actions=d.actions||[];const practices=d.practices||[];const learning=d.learning||[];
  const doneActions=actions.filter(a=>a.done);const todoActions=actions.filter(a=>!a.done).sort((a,b)=>{const ord={P0:0,P1:1,P2:2};return(ord[a.prio]??1)-(ord[b.prio]??1);});
  const LEARN_STATUS=["done","applied","integrated"];
  const doneLearning=learning.filter(l=>l.done||l.status);const todoLearning=learning.filter(l=>!l.done&&!l.status);
  const totalDone=doneActions.length+doneLearning.length;const totalAll=actions.length+learning.length;
  const addAction=()=>set("actions",[...actions,{id:Date.now(),text:"",prio:"P0",date:"",done:false}]);
  const addPractice=()=>set("practices",[...practices,{id:Date.now(),text:"",freq:"daily"}]);
  const addLearning=()=>set("learning",[...learning,{id:Date.now(),text:"",done:false}]);
  const updAction=(id,f,v)=>set("actions",actions.map(a=>a.id===id?{...a,[f]:v}:a));
  const updPractice=(id,f,v)=>set("practices",practices.map(p=>p.id===id?{...p,[f]:v}:p));
  const updLearning=(id,f,v)=>set("learning",learning.map(l=>l.id===id?{...l,[f]:v}:l));
  const rmPractice=(id)=>set("practices",practices.filter(p=>p.id!==id));
  const rmLearning=(id)=>set("learning",learning.filter(l=>l.id!==id));
  const addAssess=()=>set("assess",[...(d.assess||[]),{metric:"",target:""}]);
  const PRIO_LIST=["P0","P1","P2"];
  const prioColors={P0:{bg:C.redBg,c:C.red},P1:{bg:C.yellowBg,c:"#856d0a"},P2:{bg:C.bgS,c:C.txS}};
  const cyclePrio=(id,cur)=>{const c=cur==="P0"?"P0":cur;const idx=PRIO_LIST.indexOf(c);const next=PRIO_LIST[(idx+1)%PRIO_LIST.length];updAction(id,"prio",next);};
  const cycleLearnStatus=(id,cur)=>{const idx=LEARN_STATUS.indexOf(cur||"done");const next=LEARN_STATUS[(idx+1)%LEARN_STATUS.length];updLearning(id,"status",next);updLearning(id,"done",true);};
  const learnStatusCfg={done:{bg:C.yellowBg,c:"#856d0a"},applied:{bg:C.blueBg,c:C.blue},integrated:{bg:C.greenBg,c:C.green}};
  const statusOpts=STATUS_OPTS;const stCfg=STATUS_CFG;
  const lineS={padding:"5px 0",borderBottom:`1px solid ${C.bdr}`,display:"flex",alignItems:"center",gap:8};
  const txtS={fontSize:13,color:C.tx,flex:1,background:"transparent",border:"none",outline:"none",fontFamily:F.sans,padding:0,minWidth:0};
  const secHdr=(label,onAdd)=>(<div style={{fontSize:10,fontWeight:600,color:C.txT,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.04em",display:"flex",justifyContent:"space-between",alignItems:"center"}}><span>{label}</span><span onClick={onAdd} style={{cursor:"pointer",fontSize:14,fontWeight:400,color:C.txT}}>+</span></div>);
  const chipS=(bg,c)=>({fontSize:9,fontWeight:600,padding:"1px 6px",borderRadius:8,background:bg,color:c,cursor:"pointer",flexShrink:0,userSelect:"none"});
  const chkBox=<svg width="7" height="5" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  const inp4={border:`1px solid ${C.bdr}`,borderRadius:3,padding:"4px 6px",fontFamily:F.sans,fontSize:12,color:C.tx,background:"transparent",outline:"none",boxSizing:"border-box"};
  const displayPrio=(p)=>p==="P0"?"P0":p;
  const prioColor=(p)=>prioColors[p==="P0"?"P0":p]||prioColors.P0;
  return(<div style={{marginTop:8,paddingTop:16}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
      <span style={{fontFamily:F.serif,fontSize:18,fontWeight:600}}>{g.title}</span>
      <div style={{display:"flex",gap:8,alignItems:"center"}}>
        {totalAll>0&&<span style={{fontSize:11,color:C.txT}}>{totalDone}/{totalAll} done</span>}
        <select value={d.status||"not started"} onChange={e=>set("status",e.target.value)} style={{padding:"3px 8px",borderRadius:12,fontSize:11,fontWeight:600,border:`1px solid ${C.bdr}`,background:(stCfg[d.status||"not started"]||stCfg["not started"]).bg,color:(stCfg[d.status||"not started"]||stCfg["not started"]).c,cursor:"pointer",outline:"none",fontFamily:F.sans}}>{statusOpts.map(s=><option key={s} value={s}>{s}</option>)}</select>
        <span onClick={()=>setShowCtx(!showCtx)} style={{fontSize:11,color:C.txT,cursor:"pointer",padding:"3px 8px",border:`1px solid ${C.bdr}`,borderRadius:4}}>{showCtx?"hide context":"context"}</span>
      </div>
    </div>
    {showCtx&&<div style={{background:C.bgS,borderRadius:4,padding:"12px 16px",marginBottom:16}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:20}}>
        <div>
          <div style={{fontSize:10,fontWeight:600,color:C.txT,marginBottom:4,textTransform:"uppercase",letterSpacing:"0.04em"}}>Vision</div>
          <textarea value={d.vision||""} onChange={e=>set("vision",e.target.value)} rows={3} placeholder="How does accomplishing this look like?" style={{...inp4,width:"100%",fontSize:12,resize:"vertical",lineHeight:1.5}}/>
          <div style={{fontSize:10,fontWeight:600,color:C.txT,marginBottom:4,marginTop:10,textTransform:"uppercase",letterSpacing:"0.04em"}}>Why</div>
          <textarea value={d.why||""} onChange={e=>set("why",e.target.value)} rows={2} placeholder="Why does this matter?" style={{...inp4,width:"100%",fontSize:12,resize:"vertical",lineHeight:1.5}}/>
        </div>
        <div>
          <div style={{fontSize:10,fontWeight:600,color:C.txT,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.04em",display:"flex",justifyContent:"space-between"}}><span>Assess</span><span onClick={addAssess} style={{cursor:"pointer",fontSize:12,fontWeight:400}}>+</span></div>
          {(d.assess||[]).map((a,i)=>(<div key={i} style={{padding:"4px 0",borderBottom:`1px solid ${C.bdr}`,display:"flex",alignItems:"center",gap:8}}>
            <input value={a.metric} onChange={e=>{const u=[...(d.assess||[])];u[i]={...u[i],metric:e.target.value};set("assess",u);}} style={{...txtS,fontSize:12,fontWeight:500}} placeholder="Metric"/>
            <input value={a.target} onChange={e=>{const u=[...(d.assess||[])];u[i]={...u[i],target:e.target.value};set("assess",u);}} style={{...txtS,fontSize:12,color:C.txS,textAlign:"right",flex:"0 0 auto",width:100}} placeholder="Target"/>
          </div>))}
        </div>
        <div>
          <div style={{fontSize:10,fontWeight:600,color:C.txT,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.04em",display:"flex",justifyContent:"space-between"}}><span>Practices</span><span onClick={addPractice} style={{cursor:"pointer",fontSize:12,fontWeight:400}}>+</span></div>
          {practices.map((p,i)=>(<div key={p.id} style={{padding:"4px 0",borderBottom:`1px solid ${C.bdr}`,display:"flex",alignItems:"center",gap:8}}>
            <input value={p.text} onChange={e=>updPractice(p.id,"text",e.target.value)} style={{...txtS,fontSize:12}} placeholder="Practice..."/>
            <span onClick={()=>{const freqs=["daily","5/w","3/w","1/w","1/m"];const idx=freqs.indexOf(p.freq);updPractice(p.id,"freq",freqs[(idx+1)%freqs.length]);}} style={{fontSize:11,color:C.txT,cursor:"pointer",flexShrink:0}}>{p.freq||"daily"}</span>
            <span onClick={()=>rmPractice(p.id)} style={{cursor:"pointer",fontSize:11,color:C.txT,flexShrink:0}}>x</span>
          </div>))}
        </div>
      </div>
    </div>}
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,alignItems:"start"}}>
      <div>
        {secHdr("Actions",addAction)}
        {todoActions.map(a=>(<div key={a.id} style={lineS}>
          <span onClick={()=>cyclePrio(a.id,a.prio)} style={chipS(prioColor(a.prio).bg,prioColor(a.prio).c)}>{displayPrio(a.prio)}</span>
          <input value={a.text} onChange={e=>updAction(a.id,"text",e.target.value)} style={txtS} placeholder="Action..."/>
          <div onClick={()=>updAction(a.id,"done",true)} style={{width:13,height:13,borderRadius:3,border:`1.5px solid ${C.bdrH}`,cursor:"pointer",flexShrink:0}}/>
        </div>))}
        {doneActions.length>0&&<div style={{background:C.bgS,borderRadius:4,padding:"6px 10px",marginTop:4}}>
          <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",cursor:"pointer",padding:"2px 0"}} onClick={()=>setShowDoneA(!showDoneA)}>
            <span style={{fontSize:8,color:C.txT,transform:showDoneA?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.15s",lineHeight:1}}>{"\u25BC"}</span>
          </div>
          {showDoneA&&doneActions.map((a,i)=>(<div key={a.id} style={{padding:"4px 0",display:"flex",alignItems:"center",gap:6,borderBottom:i<doneActions.length-1?`1px solid ${C.bdr}`:"none"}}>
            <div onClick={()=>updAction(a.id,"done",false)} style={{width:13,height:13,borderRadius:3,background:C.green,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0}}>{chkBox}</div>
            <span style={{fontSize:12,color:C.txT,textDecoration:"line-through",flex:1}}>{a.text}</span>
            {a.date&&<span style={{fontSize:10,color:C.txT,flexShrink:0}}>{a.date}</span>}
          </div>))}
        </div>}
      </div>
      <div>
        {secHdr("Learning",addLearning)}
        {todoLearning.map(l=>(<div key={l.id} style={lineS}>
          <input value={l.text} onChange={e=>updLearning(l.id,"text",e.target.value)} style={txtS} placeholder="Skill..."/>
          <span onClick={()=>rmLearning(l.id)} style={{cursor:"pointer",fontSize:11,color:C.txT,flexShrink:0}}>x</span>
        </div>))}
        {doneLearning.length>0&&<div style={{background:C.bgS,borderRadius:4,padding:"6px 10px",marginTop:4}}>
          <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",cursor:"pointer",padding:"2px 0"}} onClick={()=>setShowDoneL(!showDoneL)}>
            <span style={{fontSize:8,color:C.txT,transform:showDoneL?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.15s",lineHeight:1}}>{"\u25BC"}</span>
          </div>
          {showDoneL&&doneLearning.map((l,i)=>{const st=l.status||"done";const sc=learnStatusCfg[st]||learnStatusCfg.done;return(<div key={l.id} style={{padding:"4px 0",display:"flex",alignItems:"center",gap:6,borderBottom:i<doneLearning.length-1?`1px solid ${C.bdr}`:"none"}}>
            <span style={{fontSize:12,color:C.txT,flex:1}}>{l.text}</span>
            <span onClick={()=>cycleLearnStatus(l.id,st)} style={chipS(sc.bg,sc.c)}>{st}</span>
          </div>);})}
        </div>}
      </div>
    </div>
  </div>);
}
function GoalsTab(){
  const[data,setData]=useState({});const[loaded,setLoaded]=useState(false);const[activeGoal,setActiveGoal]=useState(null);const[view,setView]=useState("goals");
  useEffect(()=>{(async()=>{const d=await osLoad("goals-v2",{});const seeded=d._seeded_v3;if(!seeded){const s={_seeded_v3:true};Object.entries(GOAL_SEED).forEach(([k,v])=>{s[k]=v;});setData(s);osSave("goals-v2",s);}else{setData(d);}setLoaded(true);})();},[]);
  useEffect(()=>{if(!loaded)return;osSave("goals-v2",data);},[data,loaded]);
  const cores=LIFE_GOALS.filter(g=>g.cat==="core"||g.cat==="career");
  const projects=LIFE_GOALS.filter(g=>g.cat==="project");
  const experiences=LIFE_GOALS.filter(g=>g.cat==="experience");
  const allGoals=[...cores,...projects,...experiences];
  const activeG=LIFE_GOALS.find(g=>g.n===activeGoal);
  const activeIdx=allGoals.findIndex(g=>g.n===activeGoal);
  const catColor={core:C.purple,career:C.purple,project:C.gold,experience:C.ocean};
  const catLabel={core:"Core",career:"Core",project:"Project",experience:"Experience"};
  const prevG=activeIdx>0?allGoals[activeIdx-1]:null;
  const nextG=activeIdx<allGoals.length-1?allGoals[activeIdx+1]:null;
  const openGoal=(n)=>{setActiveGoal(n);setView("plans");};
  const backToGrid=()=>{setActiveGoal(null);setView("goals");};
  const addGoal=(cat)=>{const maxN=Math.max(...LIFE_GOALS.map(g=>g.n),0);const newG={n:maxN+100+Math.floor(Math.random()*900),title:"New goal",short:"New",cat};LIFE_GOALS.push(newG);setData(p=>({...p}));};
  const firstGoal=allGoals[0];

  const hdr=<div style={{marginBottom:12}}>
    <H1 style={{margin:"0 0 8px"}}>2026 Goals</H1>
    <div style={{display:"flex",gap:0,borderBottom:`1px solid ${C.bdr}`}}>{[{k:"goals",l:"Goals"},{k:"plans",l:"Plans"}].map((t,i)=>(<button key={t.k} onClick={()=>{setView(t.k);if(t.k==="goals")setActiveGoal(null);if(t.k==="plans"&&!activeGoal&&firstGoal)setActiveGoal(firstGoal.n);}} style={{padding:`6px 14px 6px ${i===0?0:14}px`,border:"none",background:"none",fontFamily:F.sans,fontSize:13,fontWeight:view===t.k?600:400,color:view===t.k?C.tx:C.txT,cursor:"pointer",borderBottom:view===t.k?`2px solid ${C.tx}`:"2px solid transparent",marginBottom:-1}}>{t.l}</button>))}</div>
  </div>;

  const planGoal=activeG||(firstGoal?LIFE_GOALS.find(g=>g.n===firstGoal.n):null);

  if(view==="plans"&&planGoal){
    return(<div>{hdr}
    <div style={{display:"flex",alignItems:"center",gap:0,padding:"6px 0",marginBottom:8,overflowX:"auto",flexWrap:"nowrap",borderBottom:`1px solid ${C.bdr}`}}>
      {[{goals:cores,color:C.purple},{goals:projects,color:C.gold},{goals:experiences,color:C.ocean}].map((grp,gi)=>(<div key={gi} style={{display:"flex",alignItems:"center",gap:0,flexShrink:0}}>
        {gi>0&&<span style={{fontSize:11,fontWeight:700,color:C.tx,padding:"0 3px",flexShrink:0}}>/</span>}
        {grp.goals.map((g,i)=>(<span key={g.n} style={{display:"flex",alignItems:"center",flexShrink:0}}>
          {i>0&&<span style={{fontSize:11,color:C.txT,padding:"0 1px",flexShrink:0}}>/</span>}
          <span onClick={()=>setActiveGoal(g.n)} style={{fontSize:12,fontWeight:planGoal.n===g.n?600:400,color:planGoal.n===g.n?C.tx:C.txT,cursor:"pointer",padding:"3px 6px",whiteSpace:"nowrap",borderBottom:planGoal.n===g.n?`2px solid ${grp.color}`:"2px solid transparent",marginBottom:-1}}>{g.short}</span>
        </span>))}
      </div>))}</div>
    <GoalDetail g={planGoal} data={data[planGoal.n]} setData={v=>setData(p=>({...p,[planGoal.n]:v}))}/>
  </div>);}

  return(<div>{hdr}
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,borderBottom:`1px solid ${C.bdr}`,marginBottom:12}}>{[{l:"Core",color:C.purple,cat:"core"},{l:"Project",color:C.gold,cat:"project"},{l:"Experience",color:C.ocean,cat:"experience"}].map(c=>(<div key={c.l} style={{display:"flex",alignItems:"center",gap:0}}><span style={{padding:"6px 0",fontFamily:F.sans,fontSize:13,fontWeight:600,color:c.color}}>{c.l}</span><span onClick={()=>addGoal(c.cat)} style={{cursor:"pointer",fontSize:14,color:c.color,padding:"6px 6px"}}>+</span></div>))}</div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,alignItems:"start"}}>
      <div>{cores.map(g=>(<GoalCard key={g.n} g={g} data={data[g.n]} isOpen={false} onToggle={()=>openGoal(g.n)}/>))}</div>
      <div>{projects.map(g=>(<GoalCard key={g.n} g={g} data={data[g.n]} isOpen={false} onToggle={()=>openGoal(g.n)}/>))}</div>
      <div>{experiences.map(g=>(<GoalCard key={g.n} g={g} data={data[g.n]} isOpen={false} onToggle={()=>openGoal(g.n)}/>))}</div>
    </div>
  </div>);
}


// ══════════════════════════════════════════════════════════════
// HABITS TAB (existing, unchanged)
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

function HabitsTab(){
  const[viewDate,setViewDate]=useState(new Date().toISOString().slice(0,7));
  const[data,setData]=useState({});
  const[loaded,setLoaded]=useState(false);
  const getDays=(ym)=>{const[y,m]=ym.split("-").map(Number);return new Date(y,m,0).getDate();};

  useEffect(()=>{(async()=>{
    const stored = await osLoad("habits2_"+viewDate,{});
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
// METRICS TAB (existing, unchanged)
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
// PROTOCOL TAB (existing, unchanged)
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
// HEALTH OFFICER TAB (existing, unchanged)
// ══════════════════════════════════════════════════════════════

function HealthOfficerTab() {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const [rawJSON, setRawJSON] = useState(null);
  const [showRaw, setShowRaw] = useState(false);
  const [showReasoning, setShowReasoning] = useState(false);
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


// ══════════════════════════════════════════════════════════════
// WORK TAB - Career Compass, Learning Plan, Income Tracker
// ══════════════════════════════════════════════════════════════

function CompassCareer(){
  const lineR={display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:`1px solid ${C.bdr}`,fontSize:14};
  return(<div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:20}}>
      <div style={{background:C.bgS,borderRadius:4,padding:"12px 14px"}}>
        <div style={{fontSize:10,fontWeight:600,color:C.txT,textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:6}}>Now</div>
        <div style={{fontSize:13,fontWeight:600,color:C.tx,marginBottom:6}}>AI Data Ops Professional</div>
        {["Team lead","Annotator","QA","Transcriber","Translator"].map((r,i)=>(<div key={i} style={{fontSize:12,color:C.txS,padding:"2px 0"}}>{r}</div>))}
        <div style={{borderTop:`1px solid ${C.bdr}`,marginTop:6,paddingTop:6}}>
          {["Starter writer","Starter content creator"].map((r,i)=>(<div key={i} style={{fontSize:12,color:C.txS,padding:"2px 0"}}>{r}</div>))}
        </div>
        <div style={{borderTop:`1px solid ${C.bdr}`,marginTop:6,paddingTop:6}}>
          <div style={{fontSize:12,color:C.orange,fontWeight:500,padding:"2px 0"}}>Handshake AI - SPA i18n (in progress)</div>
        </div>
      </div>
      <div style={{background:C.orangeBg,borderRadius:4,padding:"12px 14px"}}>
        <div style={{fontSize:10,fontWeight:600,color:C.orange,textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:6}}>Building</div>
        {["Claude CCA learning","Claude CCA certification","Portfolio","Update CV + LinkedIn","Writing skills","Content creation skills","Trading / stock skills","Product design / UX","Personal brand / online presence","Networking / community"].map((r,i)=>(<div key={i} style={{fontSize:12,color:C.tx,padding:"2px 0"}}>{r}</div>))}
      </div>
      <div style={{background:C.greenBg,borderRadius:4,padding:"12px 14px"}}>
        <div style={{fontSize:10,fontWeight:600,color:C.green,textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:6}}>Goal</div>
        {["Implementation Specialist","Human Data Manager","AI Data Annotation Team Lead","Strategic Project Associate","Investor / Trader","Writer","Creator","Founder"].map((r,i)=>(<div key={i} style={{fontSize:12,color:C.tx,padding:"2px 0",fontWeight:i>=4?600:400}}>{r}</div>))}
      </div>
    </div>
    <H3 style={{margin:"0 0 10px"}}>Growth Timelines</H3>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0,marginBottom:6}}>
      {[{t:"Y1",p:"Specialist",ps:"$80-120K",f:"Side projects",fs:"First users",c:"First content",cs:"Writing + channel",v:"Learning",vs:"Paper trading"},{t:"Y2",p:"Senior Lead",ps:"$120-160K",f:"First revenue",fs:"$1-5K/mo",c:"Audience building",cs:"Consistent output",v:"Active trading",vs:"Small portfolio"},{t:"Y3-4",p:"Architect",ps:"$160-250K",f:"Product-market fit",fs:"$5-15K/mo",c:"Monetize",cs:"Paid content",v:"Growing portfolio",vs:"Passive income"},{t:"Y5+",p:"Director",ps:"$200-350K+",f:"Independence",fs:"Replaces salary",c:"Brand",cs:"Multiple formats",v:"Financial freedom",vs:"Compounding"}].map((y,i)=>(<div key={i} style={{padding:"14px 16px",borderBottom:`1px solid ${C.bdr}`,borderLeft:i>0?`1px solid ${C.bdr}`:"none"}}>
        <div style={{fontSize:12,fontWeight:600,color:C.txT,marginBottom:6}}>{y.t}</div>
        <div style={{fontSize:14,fontWeight:600,color:C.purple,marginBottom:2}}>{y.p}</div>
        <div style={{fontSize:13,color:C.txS,marginBottom:6}}>{y.ps}</div>
        <div style={{fontSize:14,fontWeight:600,color:C.gold,marginBottom:2}}>{y.f}</div>
        <div style={{fontSize:13,color:C.txS,marginBottom:6}}>{y.fs}</div>
        <div style={{fontSize:14,fontWeight:600,color:C.orange,marginBottom:2}}>{y.c}</div>
        <div style={{fontSize:13,color:C.txS,marginBottom:6}}>{y.cs}</div>
        <div style={{fontSize:14,fontWeight:600,color:C.blue,marginBottom:2}}>{y.v}</div>
        <div style={{fontSize:13,color:C.txS}}>{y.vs}</div>
      </div>))}
    </div>
    <div style={{display:"flex",gap:12,marginBottom:20}}>
      <span style={{fontSize:10,display:"flex",alignItems:"center",gap:4,color:C.txT}}><span style={{width:8,height:3,background:C.purple,borderRadius:1,display:"inline-block"}}/>Professional</span>
      <span style={{fontSize:10,display:"flex",alignItems:"center",gap:4,color:C.txT}}><span style={{width:8,height:3,background:C.gold,borderRadius:1,display:"inline-block"}}/>Founder</span>
      <span style={{fontSize:10,display:"flex",alignItems:"center",gap:4,color:C.txT}}><span style={{width:8,height:3,background:C.orange,borderRadius:1,display:"inline-block"}}/>Creative</span>
      <span style={{fontSize:10,display:"flex",alignItems:"center",gap:4,color:C.txT}}><span style={{width:8,height:3,background:C.blue,borderRadius:1,display:"inline-block"}}/>Investor</span>
    </div>
    <H3 style={{margin:"0 0 10px"}}>Two paths</H3>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
      <div style={{border:`1px solid ${C.bdr}`,borderRadius:4,padding:20}}>
        <Tag color="purple">START HERE</Tag>
        <div style={{fontFamily:F.sans,fontSize:18,fontWeight:600,color:C.tx,margin:"8px 0 4px"}}>AI Implementation Specialist</div>
        <Ps style={{marginBottom:10}}>The funding path</Ps>
        <div style={lineR}><span style={{color:C.txS}}>Salary</span><span style={{fontWeight:500}}>$80-190K</span></div>
        <div style={lineR}><span style={{color:C.txS}}>Alignment</span><span style={{fontWeight:500,color:C.orange}}>6.2/10</span></div>
        <div style={lineR}><span style={{color:C.txS}}>Why</span><span style={{fontWeight:500}}>Funds the founder path</span></div>
        <div style={{...lineR,borderBottom:"none"}}><span style={{color:C.txS}}>Tension</span><span style={{fontWeight:500}}>Tuesdays aren't yours yet</span></div>
        <Ps style={{marginTop:10,paddingTop:10,borderTop:`1px solid ${C.bdr}`,marginBottom:0}}>Immediate income. Real experience. Credibility. Every project feeds product ideas.</Ps>
      </div>
      <div style={{border:`1px solid ${C.bdr}`,borderRadius:4,padding:20}}>
        <Tag color="yellow">DESTINATION</Tag>
        <div style={{fontFamily:F.sans,fontSize:18,fontWeight:600,color:C.tx,margin:"8px 0 4px"}}>Independent Creator / Founder</div>
        <Ps style={{marginBottom:10}}>The destination</Ps>
        <div style={lineR}><span style={{color:C.txS}}>Salary</span><span style={{fontWeight:500,color:C.green}}>Uncapped</span></div>
        <div style={lineR}><span style={{color:C.txS}}>Alignment</span><span style={{fontWeight:500,color:C.green}}>9.8/10</span></div>
        <div style={lineR}><span style={{color:C.txS}}>Why</span><span style={{fontWeight:500}}>Full agency, the actual life</span></div>
        <div style={{...lineR,borderBottom:"none"}}><span style={{color:C.txS}}>Tension</span><span style={{fontWeight:500}}>No salary until you build it</span></div>
        <Ps style={{marginTop:10,paddingTop:10,borderTop:`1px solid ${C.bdr}`,marginBottom:0}}>Evalynn OS, Vagal Tone, Golden Era. Specialist work feeds ideas. They reinforce each other.</Ps>
      </div>
    </div>
  </div>);
}

const GP_PHASES=[
  {id:"p1",ph:"Phase 1",title:"Foundation Sprint",wk:"Week 1-3",color:"red",desc:"Learn API + Claude Code by rebuilding Evalynn OS.",
    actions:[{id:"a1",text:"Set up project. Install Claude Code",date:"",done:false,notes:""},{id:"a2",text:"First API call - hello world",date:"",done:false,notes:""},{id:"a3",text:"Rebuild Health module - streaming, structured output",date:"",done:false,notes:""},{id:"a4",text:"Claude Code as dev tool. CLAUDE.md. Slash commands",date:"",done:false,notes:""},{id:"a5",text:"JSON schemas. Error handling. Retry patterns",date:"",done:false,notes:""}],
    skills:[{id:"s1",text:"Prompt engineering fundamentals",done:false},{id:"s2",text:"Claude Code configuration",done:false},{id:"s3",text:"API streaming & structured output",done:false},{id:"s4",text:"Error handling & retry patterns",done:false}],
    courses:["Building with Claude API (8.1 hrs)","Claude Code in Action (~3 hrs)"],dom:["Prompt Engineering (20%)","Claude Code Config (20%)"],ms:"Working app on Claude API, built with Claude Code."},
  {id:"p2",ph:"Phase 2",title:"Integration Sprint",wk:"Week 4-6",color:"orange",desc:"Wire app to real data through MCP. Add tool use.",
    actions:[{id:"b1",text:"MCP server to Google Sheets",date:"",done:false,notes:""},{id:"b2",text:"Tool use - live data, calculations",date:"",done:false,notes:""},{id:"b3",text:"Evalynn OS rules as Agent Skills",date:"",done:false,notes:""},{id:"b4",text:"End-to-end testing",date:"",done:false,notes:""}],
    skills:[{id:"s5",text:"MCP server setup & connection",done:false},{id:"s6",text:"Tool use design patterns",done:false},{id:"s7",text:"Agent Skills configuration",done:false}],
    courses:["Intro to MCP (~2 hrs)","Agent Skills (~2 hrs)","GitHub: Tool Use (Self-paced)"],dom:["Tool Design & MCP (18%)"],ms:"Live MCP connections, tool calling, Skills."},
  {id:"p3",ph:"Phase 3",title:"Architecture Sprint",wk:"Week 7-9",color:"green",desc:"Multi-agent orchestration. Highest CCA weight.",
    actions:[{id:"c1",text:"Sub-agents: Health, Finance, Reflection, Habits",date:"",done:false,notes:""},{id:"c2",text:"Hub-and-spoke coordinator. Handoffs",date:"",done:false,notes:""},{id:"c3",text:"HITL checkpoints. Graceful degradation",date:"",done:false,notes:""}],
    skills:[{id:"s8",text:"Multi-agent orchestration",done:false},{id:"s9",text:"Sub-agent delegation patterns",done:false},{id:"s10",text:"Human-in-the-loop design",done:false},{id:"s11",text:"Context management & reliability",done:false}],
    courses:["MCP Advanced (~3 hrs)","Sub-agents (~2 hrs)"],dom:["Agentic Architecture (27%)","Context & Reliability (15%)"],ms:"Multi-agent system. All 5 CCA domains covered."},
  {id:"p4",ph:"Phase 4",title:"Cert + Portfolio",wk:"Week 10-12",color:"purple",desc:"Polish, anti-patterns, take the CCA.",
    actions:[{id:"d1",text:"Polish app. README. Deploy",date:"",done:false,notes:""},{id:"d2",text:"Record demo video",date:"",done:false,notes:""},{id:"d3",text:"Anti-patterns and exam scenarios",date:"",done:false,notes:""},{id:"d4",text:"Take the CCA exam",date:"",done:false,notes:""}],
    skills:[{id:"s12",text:"Enterprise deployment patterns",done:false},{id:"s13",text:"Anti-pattern recognition",done:false},{id:"s14",text:"Portfolio presentation",done:false}],
    courses:["Enterprise Adoption (~2 hrs)","Train-the-Trainer (~2 hrs)","CCA Prep (~5 hrs)"],dom:["All 5 domains - review"],ms:"CCA certified. Portfolio deployed."},
];

function LearningPlan(){const[exp,setExp]=useState("p1");
  const[startDate,setStartDate]=useState(null);const[lpLoaded,setLpLoaded]=useState(false);
  const[gpData,setGpData]=useState({});
  useEffect(()=>{(async()=>{const sd=await osLoad("growth-path-start",null);if(sd)setStartDate(sd);const gd=await osLoad("growth-path-data",{});setGpData(gd);setLpLoaded(true);})();},[]);
  useEffect(()=>{if(!lpLoaded)return;osSave("growth-path-start",startDate);osSave("growth-path-data",gpData);},[startDate,gpData,lpLoaded]);
  const phaseWeeks=[0,3,6,9];
  const getDateRange=(phIdx)=>{if(!startDate)return null;const sd=new Date(startDate);const ws=new Date(sd);ws.setDate(ws.getDate()+phaseWeeks[phIdx]*7);const we=new Date(ws);we.setDate(we.getDate()+20);const fmt=(d)=>d.toLocaleDateString("en-US",{month:"short",day:"numeric"});return fmt(ws)+" - "+fmt(we);};
  const getPhaseData=(phId)=>gpData[phId]||{};
  const setPhaseField=(phId,field,val)=>setGpData(p=>({...p,[phId]:{...p[phId],[field]:val}}));
  const getActions=(ph)=>{const pd=getPhaseData(ph.id);return pd.actions||ph.actions;};
  const getSkills=(ph)=>{const pd=getPhaseData(ph.id);return pd.skills||ph.skills;};
  const updAction=(phId,aId,field,val)=>{const ph=GP_PHASES.find(p=>p.id===phId);const cur=getPhaseData(phId).actions||ph.actions;const upd=cur.map(a=>a.id===aId?{...a,[field]:val}:a);setPhaseField(phId,"actions",upd);};
  const updSkill=(phId,sId,field,val)=>{const ph=GP_PHASES.find(p=>p.id===phId);const cur=getPhaseData(phId).skills||ph.skills;const upd=cur.map(s=>s.id===sId?{...s,[field]:val}:s);setPhaseField(phId,"skills",upd);};
  const lineS={padding:"5px 0",borderBottom:`1px solid ${C.bdr}`,display:"flex",alignItems:"center",gap:8};
  const txtS={fontSize:13,color:C.tx,flex:1,background:"transparent",border:"none",outline:"none",fontFamily:F.sans,padding:0,minWidth:0};
  const chkBox=<svg width="7" height="5" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  const totalActions=GP_PHASES.reduce((s,ph)=>s+getActions(ph).length,0);
  const doneActions=GP_PHASES.reduce((s,ph)=>s+getActions(ph).filter(a=>a.done).length,0);
  return(<div>
    <Ps style={{marginBottom:16,color:C.txS}}>Becoming an AI Implementation Specialist</Ps>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:20}}>
      {[{l:"CCA Certification",v:doneActions+"/"+totalActions+" steps",c:doneActions===totalActions?C.green:C.orange},{l:"Product",v:"Evalynn OS v2 or Golden Era v2",c:C.txS},{l:"Portfolio",v:"App + README + Demo video",c:C.txS}].map((g,i)=>(<div key={i} style={{background:C.bgS,borderRadius:4,padding:"10px 12px"}}><div style={{fontSize:10,fontWeight:600,color:C.txT,textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:3}}>{g.l}</div><div style={{fontSize:13,fontWeight:500,color:g.c}}>{g.v}</div></div>))}
    </div>
    <div style={{display:"flex",justifyContent:"flex-end",marginBottom:16}}>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <span style={{fontSize:11,color:C.txS}}>Start date</span>
        <input type="date" value={startDate||""} onChange={e=>setStartDate(e.target.value)} style={{border:`1px solid ${C.bdr}`,borderRadius:3,padding:"4px 8px",fontFamily:F.sans,fontSize:12,color:C.tx,background:"transparent",outline:"none"}}/>
      </div>
    </div>
    {GP_PHASES.map((ph,phIdx)=>{const isO=exp===ph.id;const clr=C[ph.color];const acts=getActions(ph);const skls=getSkills(ph);const dr=getDateRange(phIdx);const doneA=acts.filter(a=>a.done).length;const doneS=skls.filter(s=>s.done).length;return(<div key={ph.id} style={{marginBottom:4,border:`1px solid ${isO?clr+"40":C.bdr}`,borderRadius:4,background:isO?C.bg:C.bgS}}>
      <div onClick={()=>setExp(isO?null:ph.id)} style={{padding:"12px 16px",cursor:"pointer"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
          <Tag color={ph.color}>{ph.ph}</Tag>
          <span style={{fontFamily:F.mono,fontSize:12,color:C.txS}}>{ph.wk}{dr&&<span style={{marginLeft:6,fontSize:11,color:C.txT}}>{dr}</span>}</span>
          <span style={{marginLeft:"auto",fontSize:11,color:C.txT}}>{doneA}/{acts.length} steps, {doneS}/{skls.length} skills</span>
        </div>
        <P style={{fontWeight:600,marginBottom:3}}>{ph.title}</P>
        <Ps style={{marginBottom:6}}>{ph.desc}</Ps>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{ph.courses.map((c,i)=>(<Pill key={i} color={C.blue} bg={C.blueBg}>{c}</Pill>))}</div>
      </div>
      {isO&&<div onClick={e=>e.stopPropagation()} style={{padding:"0 16px 14px",borderTop:`1px solid ${C.bdr}`,paddingTop:12}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,alignItems:"start"}}>
          <div>
            <div style={{fontSize:10,fontWeight:600,color:C.txT,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.04em"}}>Actions</div>
            {acts.map(a=>(<div key={a.id} style={lineS}>
              {a.done?<div onClick={()=>updAction(ph.id,a.id,"done",false)} style={{width:13,height:13,borderRadius:3,background:C.green,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0}}>{chkBox}</div>
              :<div onClick={()=>updAction(ph.id,a.id,"done",true)} style={{width:13,height:13,borderRadius:3,border:`1.5px solid ${C.bdrH}`,cursor:"pointer",flexShrink:0}}/>}
              <span style={{...txtS,textDecoration:a.done?"line-through":"none",color:a.done?C.txT:C.tx}}>{a.text}</span>
              <input value={a.notes||""} onChange={e=>updAction(ph.id,a.id,"notes",e.target.value)} style={{fontSize:11,color:C.txS,background:"transparent",border:"none",outline:"none",fontFamily:F.sans,width:80,textAlign:"right",flexShrink:0}} placeholder="notes"/>
            </div>))}
          </div>
          <div>
            <div style={{fontSize:10,fontWeight:600,color:C.txT,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.04em"}}>Skills to build</div>
            {skls.map(s=>(<div key={s.id} style={lineS}>
              {s.done?<div onClick={()=>updSkill(ph.id,s.id,"done",false)} style={{width:13,height:13,borderRadius:3,background:C.green,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0}}>{chkBox}</div>
              :<div onClick={()=>updSkill(ph.id,s.id,"done",true)} style={{width:13,height:13,borderRadius:3,border:`1.5px solid ${C.bdrH}`,cursor:"pointer",flexShrink:0}}/>}
              <span style={{...txtS,textDecoration:s.done?"line-through":"none",color:s.done?C.txT:C.tx}}>{s.text}</span>
            </div>))}
            <div style={{marginTop:12}}>
              <div style={{fontSize:10,fontWeight:600,color:C.txT,marginBottom:4,textTransform:"uppercase",letterSpacing:"0.04em"}}>CCA domains</div>
              {ph.dom.map((d,i)=><div key={i} style={{fontSize:12,color:C.purple,padding:"2px 0"}}>{d}</div>)}
              <div style={{fontSize:10,fontWeight:600,color:C.txT,marginBottom:4,marginTop:8,textTransform:"uppercase",letterSpacing:"0.04em"}}>Milestone</div>
              <div style={{fontSize:12,color:clr}}>{ph.ms}</div>
            </div>
          </div>
        </div>
      </div>}
    </div>);})}
  </div>);}

function IncomeTracker(){
  const defaultStreams=[{name:"Outlier (Scale AI)",rate:17.04,hrs:5,status:"Drying up",stability:"red",earned:0},{name:"Onyx / Micro1",rate:52,hrs:7,status:"Uncertain batches",stability:"orange",earned:0},{name:"Turing (Google)",rate:15,hrs:0,status:"No Thai work yet",stability:"orange",earned:0},{name:"Handshake AI",rate:0,hrs:0,status:"Call with Jad scheduled",stability:"yellow",earned:0},{name:"Deeptune (via Marc)",rate:25,hrs:0,status:"Onboarding 2-3 weeks",stability:"orange",earned:0},{name:"Aligner",rate:17,hrs:0,status:"Stuck in review",stability:"red",earned:0}];
  const defaultMoves=[{action:"Handshake AI - Book 15 min call with Jad",status:"working"},{action:"Handshake AI - Prepare for call: align experience to JD",status:"wait"},{action:"Deeptune - Onboarding in 2-3 weeks via Marc",status:"wait"},{action:"Onyx / Micro1 - Watch for batch announcement this week",status:"wait"},{action:"Turing - No Thai work yet, monitor",status:"wait"},{action:"CCA courses during low-income window",status:"working"}];
  const[streams,setStreams]=useState(defaultStreams);const[target,setTarget]=useState(2500);const[moves,setMoves]=useState(defaultMoves);const[loaded,setLoaded]=useState(false);
  useEffect(()=>{(async()=>{const d=await osLoad("income-tracker",null);if(d){if(d.streams)setStreams(d.streams);if(d.target)setTarget(d.target);if(d.moves)setMoves(d.moves);}setLoaded(true);})();},[]);
  useEffect(()=>{if(!loaded)return;osSave("income-tracker",{streams,target,moves});},[streams,target,moves,loaded]);
  const updateStream=(i,field,val)=>setStreams(p=>p.map((s,j)=>j===i?{...s,[field]:val}:s));
  const addStream=()=>setStreams(p=>[...p,{name:"New source",rate:0,hrs:0,status:"",stability:"orange",earned:0}]);
  const removeStream=(i)=>setStreams(p=>p.filter((_,j)=>j!==i));
  const cycleStability=(i)=>{const order=["green","yellow","orange","red"];setStreams(p=>p.map((s,j)=>{if(j!==i)return s;const cur=order.indexOf(s.stability);const next=order[(cur+1)%4];return{...s,stability:next};}));};
  const addMove=()=>setMoves(p=>[...p,{action:"",status:"wait"}]);
  const updateMove=(i,field,val)=>setMoves(p=>p.map((m,j)=>j===i?{...m,[field]:val}:m));
  const removeMove=(i)=>setMoves(p=>p.filter((_,j)=>j!==i));
  const MOVE_STATUS=["wait","working","testing","drop"];
  const moveStatusCfg={wait:{bg:C.bgS,c:C.txS},working:{bg:C.yellowBg,c:"#856d0a"},testing:{bg:C.blueBg,c:C.blue},drop:{bg:C.bgS,c:C.txT}};
  const cycleMoveStatus=(i,cur)=>{const idx=MOVE_STATUS.indexOf(cur||"wait");const next=MOVE_STATUS[(idx+1)%MOVE_STATUS.length];updateMove(i,"status",next);};
  const totalEst=streams.reduce((s,r)=>s+r.rate*r.hrs*4,0);const totalEarned=streams.reduce((s,r)=>s+r.earned,0);
  const stabColors={green:{bg:C.greenBg,tx:C.green,label:"Green"},yellow:{bg:C.yellowBg,tx:"#856d0a",label:"Yellow"},orange:{bg:C.orangeBg,tx:C.orange,label:"Orange"},red:{bg:C.redBg,tx:C.red,label:"Red"}};
  const txtS={fontSize:13,color:C.tx,flex:1,background:"transparent",border:"none",outline:"none",fontFamily:F.sans,padding:0,minWidth:0};
  const lineS={padding:"6px 0",borderBottom:`1px solid ${C.bdr}`,display:"flex",alignItems:"center",gap:8};
  const numIn={...txtS,width:50,textAlign:"right"};
  return(<div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:20}}>
      <div style={{background:C.bgS,borderRadius:4,padding:14}}><div style={{fontFamily:F.sans,fontSize:11,color:C.txS,marginBottom:4}}>Monthly target</div><div style={{display:"flex",alignItems:"baseline",gap:4}}><span style={{fontSize:11,color:C.txS}}>$</span><input type="number" value={target} onChange={e=>setTarget(parseFloat(e.target.value)||0)} style={{fontSize:20,fontWeight:500,width:100,border:"none",padding:0,background:"transparent",outline:"none",fontFamily:F.sans,color:C.tx}}/></div><div style={{fontFamily:F.sans,fontSize:11,color:C.txT,marginTop:2}}>{(target*31).toLocaleString()} THB</div></div>
      <div style={{background:C.bgS,borderRadius:4,padding:14}}><div style={{fontFamily:F.sans,fontSize:11,color:C.txS,marginBottom:4}}>Estimated monthly</div><div style={{fontSize:20,fontWeight:500,color:totalEst>=target?C.green:C.orange}}>${Math.round(totalEst).toLocaleString()}</div><div style={{fontFamily:F.sans,fontSize:11,color:C.txT,marginTop:2}}>{Math.round(totalEst*31).toLocaleString()} THB</div></div>
      <div style={{background:C.bgS,borderRadius:4,padding:14}}><div style={{fontFamily:F.sans,fontSize:11,color:C.txS,marginBottom:4}}>Earned this month</div><div style={{fontSize:20,fontWeight:500,color:C.green}}>${Math.round(totalEarned).toLocaleString()}</div><div style={{fontFamily:F.sans,fontSize:11,color:C.txT,marginTop:2}}>{Math.round(totalEarned*31).toLocaleString()} THB</div></div>
    </div>
    <div style={{fontSize:10,fontWeight:600,color:C.txT,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.04em",display:"flex",justifyContent:"space-between"}}><span>Income streams</span><span onClick={addStream} style={{cursor:"pointer",fontSize:14,fontWeight:400}}>+</span></div>
    {streams.map((s,i)=>{const est=Math.round(s.rate*s.hrs*4);const sc=stabColors[s.stability]||stabColors.orange;return(
      <div key={i} style={lineS}>
        <input value={s.name} onChange={e=>updateStream(i,"name",e.target.value)} style={{...txtS,fontWeight:500,flex:2}} placeholder="Source"/>
        <span style={{fontSize:11,color:C.txT,flexShrink:0}}>$</span>
        <input type="number" value={s.rate} onChange={e=>updateStream(i,"rate",parseFloat(e.target.value)||0)} style={numIn} step="0.01"/>
        <span style={{fontSize:11,color:C.txT,flexShrink:0}}>/hr</span>
        <input type="number" value={s.hrs} onChange={e=>updateStream(i,"hrs",parseFloat(e.target.value)||0)} style={{...numIn,width:30}}/>
        <span style={{fontSize:11,color:C.txT,flexShrink:0}}>h/w</span>
        <span onClick={()=>cycleStability(i)} style={{fontSize:9,fontWeight:600,padding:"1px 6px",borderRadius:8,background:sc.bg,color:sc.tx,cursor:"pointer",flexShrink:0}}>{sc.label}</span>
        <input value={s.status} onChange={e=>updateStream(i,"status",e.target.value)} style={{...txtS,fontSize:11,color:C.txS,flex:1}} placeholder="Status"/>
        <span style={{fontSize:12,fontWeight:500,color:est>0?C.tx:C.txT,flexShrink:0,minWidth:50,textAlign:"right"}}>${est.toLocaleString()}</span>
        <span onClick={()=>{if(confirm("Remove "+s.name+"?"))removeStream(i);}} style={{cursor:"pointer",fontSize:11,color:C.txT,flexShrink:0}}>x</span>
      </div>);})}
    <div style={{marginTop:24}}>
      <div style={{fontSize:10,fontWeight:600,color:C.txT,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.04em",display:"flex",justifyContent:"space-between"}}><span>Next moves</span><span onClick={addMove} style={{cursor:"pointer",fontSize:14,fontWeight:400}}>+</span></div>
      {moves.map((m,i)=>{const ms=moveStatusCfg[m.status]||moveStatusCfg.wait;return(
        <div key={i} style={lineS}>
          <span onClick={()=>cycleMoveStatus(i,m.status)} style={{fontSize:9,fontWeight:600,padding:"1px 6px",borderRadius:8,background:ms.bg,color:ms.c,cursor:"pointer",flexShrink:0,userSelect:"none",minWidth:40,textAlign:"center"}}>{m.status||"wait"}</span>
          <input value={m.action} onChange={e=>updateMove(i,"action",e.target.value)} style={txtS} placeholder="What's the next move?"/>
          <span onClick={()=>removeMove(i)} style={{cursor:"pointer",fontSize:11,color:C.txT,flexShrink:0}}>x</span>
        </div>);})}
    </div>
  </div>);
}

function WorkTab(){
  const[view,setView]=useState("income");
  const tabs=[{k:"income",l:"Income Stream"},{k:"learn",l:"Growth Path"},{k:"career",l:"Career Compass"}];
  return(<div>
    <H1 style={{margin:"0 0 8px"}}>Work</H1>
    <div style={{display:"flex",gap:0,borderBottom:`1px solid ${C.bdr}`,marginBottom:20}}>{tabs.map((t,i)=>(<button key={t.k} onClick={()=>setView(t.k)} style={{padding:`6px 14px 6px ${i===0?0:14}px`,border:"none",background:"none",fontFamily:F.sans,fontSize:13,fontWeight:view===t.k?600:400,color:view===t.k?C.tx:C.txT,cursor:"pointer",borderBottom:view===t.k?`2px solid ${C.tx}`:"2px solid transparent",marginBottom:-1}}>{t.l}</button>))}</div>
    {view==="career"&&<CompassCareer/>}
    {view==="income"&&<IncomeTracker/>}
    {view==="learn"&&<LearningPlan/>}
  </div>);
}

// ══════════════════════════════════════════════════════════════
// MY UNIVERSE - Who I Am, Life Compass, 2026 Calendar (FULL)
// ══════════════════════════════════════════════════════════════

function WhoIAm(){
  const planets=[{p:"Sun",s:"Pisces",d:"28°06'",h:"6th",n:"Final degrees",c:C.pisces},{p:"Moon",s:"Virgo",d:"23°58'",h:"1st",n:"Conj Asc. Opp Pluto",c:C.virgo},{p:"Mercury",s:"Aries",d:"11°10'",h:"7th",n:"RETROGRADE",c:C.aries},{p:"Venus",s:"Pisces",d:"5°30'",h:"6th",n:"EXALTED",c:C.pisces},{p:"Mars",s:"Aquarius",d:"22°33'",h:"5th",n:"Creative warrior",c:C.aquarius},{p:"Jupiter",s:"Virgo",d:"7°21'",h:"12th",n:"Rx. Guardian angel",c:C.virgo},{p:"Saturn",s:"Aquarius",d:"14°41'",h:"5th",n:"Discipline",c:C.aquarius},{p:"Pluto",s:"Scorpio",d:"22°48'",h:"3rd",n:"Rx. X-ray",c:C.scorpio},{p:"N.Node",s:"Capricorn",d:"6°02'",h:"4th",n:"Foundations",c:C.txS},{p:"Chiron",s:"Leo",d:"3°31'",h:"11th",n:"Visibility",c:C.gold}];
  const rules=[{n:"01",t:"Work the Virgo Moon First",d:"When regulated, everything functions.",c:C.virgo,bg:C.virgoBg},{n:"02",t:"Honor Venus Without Losing Yourself",d:"Is love mutual? Is giving reciprocated?",c:C.pisces,bg:C.piscesBg},{n:"03",t:"24-Hour Rule",d:"Impulse to speak? Wait 24 hours.",c:C.aries,bg:C.ariesBg},{n:"04",t:"Create Daily",d:"Four 5th house planets demand daily output.",c:C.aquarius,bg:C.aquariusBg},{n:"05",t:"Solitude Is Not Isolation",d:"12th Jupiter: solitude is a business asset.",c:C.virgo,bg:C.virgoBg},{n:"06",t:"Sprint-and-Rest",d:"Mars-Saturn: bursts then crashes. Stop pathologizing rest.",c:C.aquarius,bg:C.aquariusBg},{n:"07",t:"Tell the Truth Faster",d:"Pluto 3rd: suppressed truth = toxicity.",c:C.scorpio,bg:C.scorpioBg}];
  const Voice=({pl,q,color,bg})=><Cd accent={color} bg={bg}><div style={{fontFamily:F.mono,fontSize:11,color,fontWeight:700,marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em"}}>{pl}</div><div style={{fontFamily:F.serif,fontSize:17,color:C.tx,fontStyle:"italic",lineHeight:1.7}}>"{q}"</div></Cd>;
  return(<div><H1 style={{fontSize:30}}>Who I Am</H1><Ps style={{marginBottom:20}}>Sun Pisces - Moon Virgo - Rising Virgo - March 18, 1992</Ps>
    <Collapse title="Natal Chart" icon="\u2605" color={C.gold} open={true}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(120px,1fr))",gap:8,marginBottom:16}}>{[{l:"Sun",v:"Pisces 28\u00B0",c:C.pisces,bg:C.piscesBg},{l:"Moon",v:"Virgo 23\u00B0",c:C.virgo,bg:C.virgoBg},{l:"Rising",v:"Virgo 27\u00B0",c:C.virgo,bg:C.virgoBg},{l:"MC",v:"Gemini 27\u00B0",c:C.ocean,bg:C.oceanBg}].map(b=>(<div key={b.l} style={{background:b.bg,borderRadius:3,padding:"8px 14px"}}><div style={{fontFamily:F.mono,fontSize:10,color:b.c,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:3}}>{b.l}</div><div style={{fontFamily:F.sans,fontSize:14,fontWeight:600,color:C.tx}}>{b.v}</div></div>))}</div><div style={{border:`1px solid ${C.bdr}`,borderRadius:4,overflow:"hidden"}}><table style={{width:"100%",borderCollapse:"collapse",fontFamily:F.sans,fontSize:13}}><thead><tr style={{background:C.bgS}}>{["Planet","Sign","Deg","H","Notes"].map(h=><th key={h} style={{textAlign:"left",padding:"6px 10px",fontWeight:500,fontSize:11,color:C.txS,borderBottom:`1px solid ${C.bdr}`,textTransform:"uppercase",letterSpacing:"0.04em"}}>{h}</th>)}</tr></thead><tbody>{planets.map((p,i)=><tr key={p.p} style={{borderBottom:i<planets.length-1?`1px solid ${C.bdr}`:"none"}}><td style={{padding:"8px 10px",fontWeight:600,color:p.c}}>{p.p}</td><td style={{padding:"8px 10px"}}>{p.s}</td><td style={{padding:"8px 10px",fontFamily:F.mono,fontSize:12,color:C.txS}}>{p.d}</td><td style={{padding:"8px 10px",fontFamily:F.mono,fontSize:12,color:C.txT}}>{p.h}</td><td style={{padding:"8px 10px",color:C.txS}}>{p.n}</td></tr>)}</tbody></table></div></Collapse>
    <Collapse title="Planetary Signatures" icon="\u263D" color={C.pisces}><H3 color={C.bloodRed}>Moon Opposite Pluto (1\u00B010')</H3><Cd accent={C.bloodRed} bg={C.bloodRedBg}><Ps>Tightest aspect. X-ray perception, obsessive depth. All-or-nothing bonding, hypervigilance, extraordinary resilience. Evalynn OS is Moon-Pluto through Virgo.</Ps></Cd><H3 color={C.pisces}>Venus in Pisces: Exalted</H3><Cd accent={C.pisces} bg={C.piscesBg}><Ps style={{marginBottom:0}}>Most romantic Venus. Growth: boundless love WITH discernment.</Ps></Cd><H3 color={C.aquarius}>5th House Stellium</H3><Cd accent={C.aquarius} bg={C.aquariusBg}><Ps style={{marginBottom:0}}>Mars+Saturn+Uranus+Neptune. Creative expression is not optional.</Ps></Cd></Collapse>
    <Collapse title="Soulmate Blueprint" icon="\u2640" color={C.pisces}><Cd accent={C.pisces} bg={C.piscesBg}><Ps style={{marginBottom:0}}>A deep soul with built structure who can swim in your ocean. Deep-set dark eyes. Angular jaw. Quiet magnetism. <HL color={C.aries}>Southern European or Latin American.</HL> Not fireworks - <HL>Recognition.</HL> "There you are." Jupiter Return 2027-28.</Ps></Cd></Collapse>
    <Collapse title="Seven Operating Rules" icon="\u2699" color={C.virgo}>{rules.map(r=>(<Cd key={r.n} accent={r.c} bg={r.bg}><div style={{display:"flex",gap:12}}><div style={{fontFamily:F.serif,fontSize:22,color:r.c,fontWeight:700,opacity:0.3,minWidth:24}}>{r.n}</div><div><P style={{fontWeight:600,marginBottom:3}}>{r.t}</P><Ps style={{marginBottom:0}}>{r.d}</Ps></div></div></Cd>))}</Collapse>
    <Collapse title="Planetary Voices" icon="\uD83D\uDD2E" color={C.bloodRed}><Voice pl="SATURN" q="Learn it yourself or I'll teach you." color={C.txS} bg={C.bgS}/><Voice pl="PLUTO" q="Be real with me or I will make you don't be anything at all." color={C.bloodRed} bg={C.bloodRedBg}/><Voice pl="MOON IN VIRGO" q="Check the body. Am I fed? Am I rested? Is the space clean?" color={C.virgo} bg={C.virgoBg}/><Voice pl="VENUS IN PISCES" q="I love without condition. But seeing the divine doesn't mean ignoring the human." color={C.pisces} bg={C.piscesBg}/><Voice pl="RAHU" q="I'm hungry. Always. Not for food: for DEPTH. That's quality control." color={C.bloodRed} bg={C.bloodRedBg}/></Collapse>
    <Collapse title="Crystal Kit" icon="\uD83D\uDC8E" color={C.gold}>{[{n:"Hessonite Garnet",p:"RAHU",d:"Calms hunger.",c:C.bloodRed,bg:C.bloodRedBg,t:"red"},{n:"Amethyst",p:"MOON-PLUTO",d:"Emotional transmutation.",c:C.pisces,bg:C.piscesBg,t:"purple"},{n:"Aquamarine",p:"VENUS",d:"Truth in love.",c:C.ocean,bg:C.oceanBg,t:"blue"},{n:"Carnelian",p:"MARS",d:"Creative fire.",c:C.aries,bg:C.ariesBg,t:"orange"},{n:"Labradorite",p:"ALL",d:"The unifier. Literally you.",c:C.gold,bg:C.goldBg,t:"yellow"}].map(s=>(<Cd key={s.n} accent={s.c} bg={s.bg}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><P style={{fontWeight:600,marginBottom:0}}>{s.n}</P><div style={{fontFamily:F.mono,fontSize:10,color:s.c}}>{s.p}</div></div><Tag color={s.t}>{s.n.split(" ")[0]}</Tag></div><Ps style={{marginTop:6,marginBottom:0}}>{s.d}</Ps></Cd>))}</Collapse>
  </div>);}

function LifeCompass(){
  const[ld,setLd]=useState(false);useEffect(()=>{setTimeout(()=>setLd(true),300);},[]);
  const modes=[{state:"When I have cognitive energy",activity:"I build",examples:"Golden Era, health trackers, Evalynn OS, apps that solve real problems"},{state:"When I need something that flows",activity:"I make music",examples:"Vagal Tone, ambient soundscapes, nervous system regulation through sound"},{state:"When I'm feeling creative and emotional",activity:"I write stories",examples:"The Muffin Diaries - processing love and loss through Muffin's voice"},{state:"When I need answers and clarity",activity:"I work on Evalynn OS",examples:"Turning my struggles, my direct experience, into frameworks that could help others too"}];
  const projects=["Golden Era - Helping Angkhana track her metabolic health - practical tools for real transformation","Vagal Tone - Nervous system regulation through ambient sound - bringing people into calm","The Muffin Diaries - Processing love and loss through Muffin's voice - stories that remind people who they are","Evalynn OS - A self-regulation framework born from lived experience - turning struggle into structure","Health Tracker - Personal wellness data made visible and actionable - quality of life, measured","Music & Songwriting - Songs that move people emotionally - Marco, Walter, Mountains, the unnamed ones"];
  const framework=[{label:"The foundation",text:"A life structure that protects my autonomy, health, and pace. Slow mornings, movement, nature, connection. Non-negotiable."},{label:"The work",text:"A rotation of creative and building projects - all circling the same core purpose. Some days writing. Some days building an app. Some days making music. Some days just thinking deeply. The rotation IS the method."},{label:"The income reality",text:"AI ops work may still be part of the picture for now - not as my identity, but as a tool that buys time and freedom to build the things that matter. It funds the life. It doesn't define it."},{label:"The purpose",text:"Everything I build, create, or design serves one function: helping people - including myself - come back to themselves. That's the through-line. That's the answer when someone asks what I do."}];
  const st={sec:{marginBottom:48},lbl:{fontFamily:F.mono,fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:C.txT,marginBottom:16},hd:{fontFamily:F.serif,fontSize:28,fontWeight:700,color:C.tx,lineHeight:1.3,marginBottom:20,letterSpacing:"-0.01em"},p:{fontFamily:F.sans,fontSize:15,color:C.tx,lineHeight:1.8,marginBottom:16},ps:{fontFamily:F.sans,fontSize:15,color:C.txS,lineHeight:1.8,marginBottom:16},sep:{height:1,background:C.bdr,margin:"48px 0"}};
  return(<div style={{}}>
    <div style={{padding:"60px 0 48px"}}><div style={{opacity:ld?1:0,transition:"all 1s ease 0.3s"}}><p style={st.lbl}>A personal reflection - March 2026</p></div><div style={{opacity:ld?1:0,transition:"all 1s ease 0.6s"}}><h1 style={{fontFamily:F.serif,fontSize:"clamp(28px,5vw,42px)",fontWeight:700,color:C.tx,lineHeight:1.25,marginBottom:20,letterSpacing:"-0.02em",fontStyle:"italic"}}>I build tools, stories, and experiences that help people come back to themselves.</h1></div><div style={{opacity:ld?1:0,transition:"all 1s ease 0.9s"}}><p style={st.ps}>This document is not a plan. It's a compass. Written to remember what I know about myself when the noise gets loud.</p></div></div>
    <div style={st.sep}/>
    <div style={st.sec}><p style={st.lbl}>The honest truth</p><p style={st.p}>I'm good at what I do in AI operations. I can lead teams, navigate chaos, adapt to anything. I've done it for 2.5 years across 30+ projects.</p><p style={st.p}>But being good at something doesn't mean it's where I belong.</p><p style={st.ps}>The AI industry treats people as disposable. Contractors get ramped up and dumped. The pace prioritizes technology advancement over human wellbeing. I've been shaping myself to fit environments that don't protect me - pitching my adaptability as a strength when what I was really saying was: "I'm ready to be discarded gracefully."</p><p style={st.ps}>I don't want to trade my wellbeing for someone else's success and then be dumped later. I don't want to be shaped by others, boxed by others, or made to trade who I am for what the market needs this quarter. I want to do things according to my wellbeing, my state, my own rhythm.</p></div>
    <div style={st.sep}/>
    <div style={st.sec}><p style={st.lbl}>What I actually want</p><h2 style={st.hd}>If everything paid the same, what would I choose?</h2><p style={st.p}><strong>Build things that solve people's problems</strong> - tools, systems, experiences that help people achieve a better quality of life.</p><p style={st.p}><strong>Create things that move people emotionally</strong> - music that calms, stories that remind people who they are, experiences that bring people into a state of being regulated, present, and themselves.</p><p style={st.ps}>These aren't two separate things. They're one purpose expressed in different ways: helping people - including myself - come back to themselves.</p></div>
    <div style={st.sep}/>
    <div style={st.sec}><p style={st.lbl}>How I actually work</p><h2 style={st.hd}>The rotation is the method.</h2><p style={st.ps}>I don't work in sequence. I work in rotation - moving between projects based on my energy, my mood, my bandwidth. This isn't a flaw. This is my operating system working exactly as designed.</p>{modes.map((m,i)=>(<div key={i} style={{marginBottom:20,paddingBottom:20,borderBottom:i<modes.length-1?`1px solid ${C.bdr}`:"none"}}><p style={{fontFamily:F.sans,fontSize:13,color:C.txT,marginBottom:2}}>{m.state}</p><p style={{fontFamily:F.serif,fontSize:22,color:C.tx,fontWeight:600,marginBottom:4}}>{m.activity}</p><p style={{fontFamily:F.sans,fontSize:14,color:C.txS,lineHeight:1.6,marginBottom:0}}>{m.examples}</p></div>))}<p style={{fontFamily:F.serif,fontSize:18,color:C.tx,lineHeight:1.7,fontStyle:"italic",marginBottom:8}}>"I don't want to think anymore that I'm supposed to finish one project, one by one. I want to do things according to my wellbeing, to my state."</p><p style={{fontFamily:F.mono,fontSize:10,color:C.txT}}>- Evalynn, March 2026</p></div>
    <div style={st.sep}/>
    <div style={st.sec}><p style={st.lbl}>The through-line</p><h2 style={st.hd}>These aren't side projects. They're the signal.</h2><p style={st.ps}>Every project I naturally gravitate toward is about the same thing. They look different on the surface - an app, an album, a book, a framework. But underneath, they all serve one purpose.</p>{projects.map((p,i)=>(<p key={i} style={{fontFamily:F.sans,fontSize:14,color:C.tx,lineHeight:1.6,padding:"8px 0",borderBottom:i<projects.length-1?`1px solid ${C.bdr}`:"none"}}>{p}</p>))}<div style={{marginTop:32,padding:"24px 0",borderTop:`1px solid ${C.bdr}`}}><p style={{fontFamily:F.serif,fontSize:24,color:C.tx,fontWeight:700,fontStyle:"italic",lineHeight:1.4}}>Helping people - including myself - come back to themselves.</p></div></div>
    <div style={st.sep}/>
    <div style={st.sec}><p style={st.lbl}>The life I want to build</p><h2 style={st.hd}>A regular Tuesday</h2><p style={st.ps}>I don't want every Tuesday to be the same. I want the freedom to decide what each one holds. Maybe one Tuesday is a meaningful conversation with a friend. Maybe another is sitting in front of a cafe near the beach, just watching nature and reflecting. Maybe I'm learning kung fu, or a new modality of yoga, or arguing with old philosophers about consciousness.</p><p style={st.ps}>The Tuesday I want is the Tuesday where I have my own agency and freedom to decide what to do, to learn, to experience, to work - without external force dictating it.</p><p style={{fontFamily:F.mono,fontSize:11,color:C.txT,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:12,marginTop:28}}>The daily foundation</p>{["Slow mornings","Healthy food","Movement - whatever form feels right that day","Connection with people I care about","Time for my own reflections","Freedom to follow my energy into whatever project calls"].map((item,i)=>(<p key={i} style={{fontFamily:F.sans,fontSize:15,color:C.tx,padding:"8px 0",borderBottom:i<5?`1px solid ${C.bdr}`:"none"}}>{item}</p>))}<p style={{...st.p,marginTop:28}}><strong>The people I help:</strong> People who feel lost, stuck, unclear. People who need structure to find their way out of their problems, or toward their goals. People who need someone to help them see what they can't see alone.</p><p style={st.p}><strong>How I want to feel:</strong> Not waiting for someone to validate that my work is good. I want to feel it myself first - a deep, internal knowing that what I built genuinely helps. That's why I keep refining, redesigning, reworking. I'm not being perfectionist. I'm trying to reach the point where I know in my bones that it's true.</p></div>
    <div style={st.sep}/>
    <div style={st.sec}><p style={st.lbl}>The framework</p><h2 style={st.hd}>How the pieces fit together</h2>{framework.map((item,i)=>(<div key={i} style={{marginBottom:24,paddingBottom:24,borderBottom:i<3?`1px solid ${C.bdr}`:"none"}}><p style={{fontFamily:F.mono,fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",color:C.txT,marginBottom:6}}>{item.label}</p><p style={st.p}>{item.text}</p></div>))}</div>
    <div style={st.sep}/>
    <div style={st.sec}><p style={st.lbl}>Career & Wealth in the Stars</p><h2 style={st.hd}>MC Gemini - 6th House Sun - 5th House Stellium</h2><p style={st.ps}>MC 27 Gemini ruled by Mercury Rx in Aries. Communication, data, bold initiative. Work IS identity (6th house Sun). Creative output as career engine (5th stellium). Hidden blessings through solitude (12th Jupiter).</p><p style={{...st.p,marginTop:24}}><strong>Phase 2: Building (2026-28) - NOW</strong></p><p style={st.ps}>Apr 19-20: Triple conjunction. Contract or partnership formalization. Apr 25: Uranus enters Gemini/MC. 7-year career revolution. Jun-Jul: Jupiter in Leo (11th). Network expansion. 2027-28: Jupiter Return. Maximum expansion and income leap.</p><p style={{...st.p,marginTop:16}}><strong>Phase 3: Pluto (2029-32)</strong></p><p style={st.ps}>Creative earning ceiling destroyed and rebuilt higher.</p><p style={{...st.p,marginTop:16}}><strong>Phase 4: Liberation (2033-40)</strong></p><p style={st.ps}>Most dramatic financial transformation of the lifetime.</p></div>
    <div style={st.sep}/>
    <div style={st.sec}><p style={st.lbl}>March 25, 2026 - I am more than good enough</p><h2 style={st.hd}>I can achieve anything. I can do anything. When I know myself, when I know how I want to move forward.</h2>
    <p style={st.p}>I'm good at steep learning curves. I trust my past difficulty. Before, I put myself in positions where I could barely function - I'd push through and then collapse on my couch afterward. But over time, I learned to trust the process, even when I'm really bad at something in the beginning. It taught me that I can be actually really good at something at the end, if I put in enough bandwidth, enough strategy, and keep improving.</p>
    <p style={st.ps}>In the past, I used to get fired from work. I was fired three times. A childcare job - I was so anxious and panicked I couldn't do it. A student consultant role while studying abroad. A waitressing job. Three times I was fired because I was bad at my job. And there was one more job where I fired myself after three days because I knew I wasn't good enough.</p>
    <p style={st.ps}>A colleague at one of those jobs once said something like I was really slow. And I was so proud that I've come this far from that - because at the time, I didn't believe the interpretation of those circumstances. I didn't let it define me. I kept going. And then I achieved things I never expected. I work with top companies - Scale AI, Google, Meta - as a team lead, in a position others would take years to reach.</p>
    <p style={{...st.p,fontWeight:600}}>I'm more than good enough. I know that now.</p>
    <p style={st.p}>Looking back at my journey - after I quit my corporate path, I started as a yoga teacher. I just jumped in and practiced and did it. I taught yoga for two years. In parallel, I started my own business. I had loyal customers. I got my products showcased in a luxury building in Thailand. That chapter ended, but it proved something to me.</p>
    <p style={st.p}>For the next journey - I'm already in the field of data annotation. I'm getting familiar with AI. I've been building things. I've been solving real problems and implementing them, living them. Evalynn OS, Golden Era - they need refinement, but I'm already in it.</p>
    <p style={st.p}>I can be an AI agent architect. I can be an AI implementation lead. I believe in myself. I am good. I'm more than good enough. This is my soul. This is who I am. I have insight into how to build a product, instinctively. And if I get to put my hands into it - to experience it, to fail, to do the trial and error - I can master it.</p>
    <p style={st.ps}>In the past, there were moments I didn't even believe I could achieve what I've achieved. But I made it, every single time. And now I see it clearly - by my guts, by my soul, by my brain, in my bones. I am more than good enough.</p>
    <p style={st.p}>And if I get to work with people, if people use my products - they will appreciate them. They will be grateful for what helps them define themselves, solve their problems. It has value. And I know in my bones that it's going to happen.</p>
    <p style={{fontFamily:F.serif,fontSize:18,color:C.tx,lineHeight:1.7,fontStyle:"italic",marginBottom:8}}>I will keep going. And I will keep refining what I want to do and what I can do in the future.</p>
    </div>
    <div style={st.sep}/>
    <div style={{padding:"48px 0 80px"}}><p style={{fontFamily:F.serif,fontSize:"clamp(22px,4vw,30px)",color:C.tx,fontWeight:700,fontStyle:"italic",lineHeight:1.4,marginBottom:24}}>My thing is the space where wellness, creativity, and technology overlap.</p><p style={{fontFamily:F.sans,fontSize:15,color:C.txS,lineHeight:1.7,marginBottom:28}}>This document is a living thing. It will change as I change. But the core won't move. The core is: I help people come back to themselves. Everything else is just the form it takes on any given Tuesday.</p><p style={{fontFamily:F.mono,fontSize:11,color:C.txT,letterSpacing:"0.1em"}}>Evalynn Jetipa</p><p style={{fontFamily:F.mono,fontSize:10,color:C.txT,marginTop:4}}>Bangkok, March 2026</p></div>
  </div>);}

function Year2026({month}){
  const mo=month||"mar";
  const TH=({children})=><th style={{textAlign:"left",padding:"8px 10px",fontWeight:500,fontSize:11,color:C.txS,borderBottom:`1px solid ${C.bdr}`}}>{children}</th>;
  const Row=({dy,hidden,onToggle,checked,onCheck,notes,onNotes,extraGame,onExtraGame,extraActual,onExtraActual})=>{const hasA=dy.actual&&dy.actual.length>0;const bg=dy.lv==="m"?C.goldBg:dy.lv==="s"?C.bgS:"transparent";
    const baseGameItems=dy.game?dy.game.split("\n").filter(l=>l.length>0):[];
    const extraGameItems=extraGame?extraGame.split("\n").filter(l=>l.length>0):[];
    const allGameItems=[...baseGameItems,...extraGameItems.map(t=>"+ "+t)];
    const checkedItems=allGameItems.map((text,j)=>({text:text.startsWith("+ ")?text.slice(2):text,idx:j})).filter(r=>checked[r.idx]);
    const uncheckedItems=allGameItems.map((text,j)=>({text:text.startsWith("+ ")?text.slice(2):text,idx:j})).filter(r=>!checked[r.idx]);
    const actualLines=hasA?dy.actual.split("\n"):[];
    const ta={width:"100%",marginTop:6,padding:"4px 6px",border:`1px solid ${C.bdr}`,borderRadius:3,fontFamily:F.sans,fontSize:11,color:C.tx,background:"transparent",resize:"vertical",outline:"none",boxSizing:"border-box",minHeight:28};
    return(<>
    <tr style={{borderBottom:hidden?`1px solid ${C.bdr}`:"none",background:hidden?C.bgS:bg,verticalAlign:"top",opacity:hidden?0.5:1,transition:"opacity 0.15s"}}>
      <td onClick={onToggle} style={{padding:hidden?"6px 10px":"8px 10px",borderRight:`1px solid ${C.bdr}`,width:110,minWidth:110,cursor:"pointer"}}>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          <span style={{fontSize:10,color:C.txT,transition:"transform 0.15s",transform:hidden?"rotate(0)":"rotate(90deg)"}}>{"\u25B6"}</span>
          <div>
            <div style={{fontFamily:F.sans,fontSize:13,fontWeight:600,color:C.tx}}>{dy.d} <span style={{fontWeight:400,color:C.txT,fontSize:11}}>{dy.day||""}</span></div>
            {!hidden&&<div style={{fontFamily:F.sans,fontSize:11.5,color:C.txS,lineHeight:1.4,marginTop:2}}>{dy.t}</div>}
            {!hidden&&dy.lv==="m"&&<div style={{marginTop:4}}><Tag color="yellow">major</Tag></div>}
            {!hidden&&dy.lv==="s"&&<div style={{marginTop:4}}><Tag color="blue">key</Tag></div>}
          </div>
        </div>
        {hidden&&<span style={{fontFamily:F.sans,fontSize:11,color:C.txT,marginLeft:16}}>{dy.t}</span>}
      </td>
      {hidden?<td colSpan={3} style={{padding:"6px 10px",fontSize:12,color:C.txT}}></td>:<>
        <td style={{padding:"8px 10px",borderRight:`1px solid ${C.bdr}`,fontSize:12,color:C.txS,lineHeight:1.65}}>{dy.pred}</td>
        <td style={{padding:"8px 10px",borderRight:`1px solid ${C.bdr}`,background:allGameItems.length>0?C.yellowBg:"transparent"}}>
          {uncheckedItems.length>0?uncheckedItems.map(r=>(
            <div key={r.idx} onClick={(e)=>{e.stopPropagation();onCheck(r.idx);}} style={{display:"flex",alignItems:"flex-start",gap:6,fontSize:12,color:C.tx,lineHeight:1.6,marginBottom:4,cursor:"pointer"}}>
              <div style={{width:14,height:14,borderRadius:3,border:`1.5px solid ${C.bdrH}`,background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}></div>
              <span>{r.text}</span>
            </div>
          )):<span style={{fontSize:12,color:C.txT}}>{allGameItems.length>0?"All done":"\u2014"}</span>}
          <textarea onClick={e=>e.stopPropagation()} value={extraGame||""} onChange={e=>onExtraGame(e.target.value)} placeholder="+ Add task..." rows={1} style={ta} onFocus={e=>{e.target.style.borderColor=C.blue;if(!e.target.value)e.target.rows=2;}} onBlur={e=>{e.target.style.borderColor=C.bdr;if(!e.target.value)e.target.rows=1;}}/>
        </td>
        <td style={{padding:"8px 10px",background:(hasA||checkedItems.length>0||extraActual||notes)?C.greenBg:""}}>
          {actualLines.map((l,j)=><div key={"a"+j} style={{fontSize:12,color:C.tx,lineHeight:1.6,marginBottom:1}}>{l}</div>)}
          {checkedItems.map((r)=>{const clean=r.text.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{FE00}-\u{FEFF}\u{1FA00}-\u{1FAFF}]/gu,"").trim();return(
            <div key={"c"+r.idx} onClick={(e)=>{e.stopPropagation();onCheck(r.idx);}} style={{fontSize:12,color:C.tx,lineHeight:1.6,marginBottom:1,cursor:"pointer"}}>- {clean}</div>
          );})}
          <textarea onClick={e=>e.stopPropagation()} value={extraActual||""} onChange={e=>onExtraActual(e.target.value)} placeholder="+ Add what happened..." rows={extraActual&&extraActual.trim()?Math.max(2,extraActual.split("\n").length):1} style={ta} onFocus={e=>{e.target.style.borderColor=C.blue;if(!e.target.value)e.target.rows=3;}} onBlur={e=>{e.target.style.borderColor=C.bdr;if(!e.target.value)e.target.rows=1;}}/>
        </td>
      </>}
    </tr>
    {!hidden&&<tr style={{borderBottom:`1px solid ${C.bdr}`}}><td colSpan={4} style={{height:0}}></td></tr>}
  </>);};
  const Tbl=({rows,intro,storageKey})=>{const[hiddenRows,setHiddenRows]=useState({});const[checkedMap,setCheckedMap]=useState({});const[notesMap,setNotesMap]=useState({});const[extraGameMap,setExtraGameMap]=useState({});const[extraActualMap,setExtraActualMap]=useState({});const[loaded,setLoaded]=useState(false);const[hideAll,setHideAll]=useState(false);
    useEffect(()=>{(async()=>{const d=await osLoad("cal-state-"+storageKey,{});setHiddenRows(d.hidden||{});setCheckedMap(d.checked||{});setNotesMap(d.notes||{});setExtraGameMap(d.extraGame||{});setExtraActualMap(d.extraActual||{});setLoaded(true);})();},[storageKey]);
    useEffect(()=>{if(!loaded)return;osSave("cal-state-"+storageKey,{hidden:hiddenRows,checked:checkedMap,notes:notesMap,extraGame:extraGameMap,extraActual:extraActualMap});},[hiddenRows,checkedMap,notesMap,extraGameMap,extraActualMap,loaded,storageKey]);
    const toggleHide=(i)=>setHiddenRows(p=>{const n={...p};if(n[i])delete n[i];else n[i]=true;return n;});
    const toggleCheck=(rowIdx,itemIdx)=>setCheckedMap(p=>{const k=rowIdx+"-"+itemIdx;const n={...p};if(n[k])delete n[k];else n[k]=true;return n;});
    const getChecked=(rowIdx)=>{const c={};Object.keys(checkedMap).forEach(k=>{const[r,j]=k.split("-");if(parseInt(r)===rowIdx)c[parseInt(j)]=true;});return c;};
    const setNotes=(rowIdx,val)=>setNotesMap(p=>({...p,[rowIdx]:val}));
    const setExtraGame=(rowIdx,val)=>setExtraGameMap(p=>({...p,[rowIdx]:val}));
    const setExtraActual=(rowIdx,val)=>setExtraActualMap(p=>({...p,[rowIdx]:val}));
    const toggleAll=()=>{if(hideAll){setHiddenRows({});setHideAll(false);}else{const h={};rows.forEach((_,i)=>{h[i]=true;});setHiddenRows(h);setHideAll(true);}};
    const visible=rows.map((dy,i)=>({dy,i,hidden:!!hiddenRows[i]})).filter(r=>!r.hidden);
    const hiddenList=rows.map((dy,i)=>({dy,i,hidden:!!hiddenRows[i]})).filter(r=>r.hidden);
    return(<div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14}}>
      <Ps style={{marginBottom:0,flex:1}}>{intro}</Ps>
      <button onClick={toggleAll} style={{border:`1px solid ${C.bdr}`,background:C.bgS,borderRadius:3,padding:"4px 12px",fontFamily:F.sans,fontSize:12,color:C.txS,cursor:"pointer",whiteSpace:"nowrap",marginLeft:12}}>{hideAll?"Expand all":"Collapse all"}</button>
    </div>
    <div style={{border:`1px solid ${C.bdr}`,borderRadius:4,overflow:"hidden"}}>
      <table style={{width:"100%",borderCollapse:"collapse",fontFamily:F.sans,fontSize:13,tableLayout:"fixed"}}>
        <colgroup><col style={{width:"15%"}}/><col style={{width:"30%"}}/><col style={{width:"27.5%"}}/><col style={{width:"27.5%"}}/></colgroup>
        <thead><tr style={{background:C.bgS}}><TH>Date</TH><TH>Prediction</TH><TH>Game plan</TH><TH>What happened</TH></tr></thead>
        <tbody>
          {visible.map(r=><Row key={r.i} dy={r.dy} hidden={false} onToggle={()=>toggleHide(r.i)} checked={getChecked(r.i)} onCheck={(j)=>toggleCheck(r.i,j)} notes={notesMap[r.i]||""} onNotes={(v)=>setNotes(r.i,v)} extraGame={extraGameMap[r.i]||""} onExtraGame={(v)=>setExtraGame(r.i,v)} extraActual={extraActualMap[r.i]||""} onExtraActual={(v)=>setExtraActual(r.i,v)}/>)}
          {hiddenList.length>0&&<tr><td colSpan={4} style={{padding:"6px 10px",background:C.bgS,fontSize:11,color:C.txT,borderBottom:`1px solid ${C.bdr}`}}>Hidden ({hiddenList.length})</td></tr>}
          {hiddenList.map(r=><Row key={r.i} dy={r.dy} hidden={true} onToggle={()=>toggleHide(r.i)} checked={getChecked(r.i)} onCheck={(j)=>toggleCheck(r.i,j)} notes={notesMap[r.i]||""} onNotes={(v)=>setNotes(r.i,v)} extraGame={extraGameMap[r.i]||""} onExtraGame={(v)=>setExtraGame(r.i,v)} extraActual={extraActualMap[r.i]||""} onExtraActual={(v)=>setExtraActual(r.i,v)}/>)}
        </tbody>
      </table>
    </div></div>);};
  const march=[
    {d:"Mar 1",day:"Sun",t:"The calm before the wave",lv:"n",pred:"Mercury Rx in Pisces, mid-transit. Eclipse two days away. System already feeling the pull. Dreams may be vivid. Body may feel heavy or floaty. This is the undertow before the wave breaks. Rest.",game:"",actual:"- Deep in Golden Era dev\n- Iterating Angkhana's dashboard\n- Building Evalynn OS Dashboard"},
    {d:"Mar 2",day:"Mon",t:"The warrior enters your ocean",lv:"s",pred:"Mars enters Pisces - your Sun sign, your 6th house. Fire inside water. Action driven by intuition. Mars approaching natal Venus at 5° Pisces = desire activating. Surge of creative-sexual-emotional energy without a clear target. Let it move through the body. Write. Create. Don't direct it at a person.",game:"",actual:"- High creative energy\n- Golden Era mobile views\n- Started Evalynn OS v2 features"},
    {d:"Mar 3",day:"Tue",t:"Total lunar eclipse in Virgo 12°54'",lv:"m",pred:"Blood Moon total lunar eclipse on your Ascendant sign. Moon at 23° Virgo, Ascendant at 27° - eclipse activating 1st house directly. South Node eclipse = release. Karmic purging. Opposes all Pisces planets. The axis: 1st house (self) vs 6th/7th (work/partnerships). The question: who are you when you stop serving everyone else? Expect emotional intensity, body sensations, vivid dreams. Don't make decisions. Just feel. Culmination of the Virgo-Pisces eclipse series running since 2024.",game:"",actual:"- Intense building sprint\n- Evalynn OS expanding rapidly\n- Processing through creation"},
    {d:"Mar 4-5",day:"Wed-Thu",t:"Eclipse aftermath",lv:"n",pred:"Integration days. Body processing what the eclipse moved. Keep routine simple. Eat warm food. Hydrate. Virgo Moon needs order after the chaos. Clean your space. Organize something small. This grounds the energy.",game:"",actual:"- Continued iterating Evalynn OS\n- Added v1/v2 toggle system\n- Grounding through building"},
    {d:"Mar 6",day:"Fri",t:"Venus enters Aries",lv:"s",pred:"Venus moves into Aries, entering your 7th house of partnerships. Direct, initiating, unafraid. Venus now transiting the house where natal Mercury Rx sits (11° Aries). Love and communication in partnerships activate simultaneously. An old conversation may need revisiting. Or you finally say something you've been holding back.",game:"",actual:"- Evalynn OS major feature push\n- Dashboard v2, life goals, cause-effect\n- Systems-level life design emerging"},
    {d:"Mar 7",day:"Sat",t:"Mercury cazimi",lv:"s",pred:"Mercury Rx meets the Sun at 16°52' Pisces. Cazimi = retrograde planet 'in the heart of the Sun' - extraordinary clarity inside the confusion. One insight arrives that reframes everything since Mercury went Rx on Feb 25. May come through a dream, conversation, body sensation, or sudden knowing. Pay attention. Write it down immediately.",game:"",actual:"- Shift to systems-level design\n- Evalynn OS becoming actual OS\n- Insight: building is the method"},
    {d:"Mar 8",day:"Sun",t:"Mercury trine Jupiter",lv:"n",pred:"Insight from yesterday expands. Mercury in Pisces trines Jupiter in Cancer. 6th house (work/health) connects harmoniously to career sector. Professional insight may arrive through intuition rather than planning. Trust what feels right even if it doesn't make logical sense yet.",game:"",actual:"- Building momentum\n- Professional patterns via personal projects"},
    {d:"Mar 9-10",day:"Mon-Tue",t:"Jupiter stations direct",lv:"s",pred:"Jupiter stations direct at 15° Cancer after being Rx since November 2025. Whatever professional expansion, network growth, or opportunity was stalled since November now begins moving forward. Like taking the parking brake off. May not feel it immediately, but opportunities start flowing toward you again.",game:"",actual:"- Onyx project active\n- Cheat sheet iterations\n- Building across multiple projects"},
    {d:"Mar 11-12",day:"Wed-Thu",t:"Quiet building",lv:"n",pred:"Mercury Rx continues but Jupiter is now direct. Communication still foggy but fortune is moving. Don't force anything. Let things come to you. 12th house Jupiter works best when you're receptive, not pushing.",game:"",actual:"- Steady rhythm\n- Multiple artifacts in parallel\n- Productive solitude with Claude"},
    {d:"Mar 13",day:"Fri",t:"Mars conjunct North Node 8°55' Pisces",lv:"s",pred:"Mars meets the North Node of destiny in your Sun sign, in your 6th house. Fated action point. Something you do today - a decision, a task, a creative act - aligns with your karmic direction. May feel small in the moment. It isn't. North Node = destiny. Mars = initiative. Together in Pisces in 6th house: fated action related to work, health, or daily service.",game:"",actual:"- Angkhana Day 15: TG 702 to 231 (-67%)\n- Updated Golden Era with real data\n- Planning app as product\n- Literal fated action: health+service+work"},
    {d:"Mar 14-16",day:"Sat-Mon",t:"The deep processing",lv:"n",pred:"Mercury Rx approaching Mars in Pisces. Old thoughts cycling back. Relationship patterns may replay in your mind. Mercury Rx in 6th house revisiting everything about how you work, serve, and give. Let the review happen. Don't act on old patterns - observe them. Virgo Moon is the observer here.",game:"",actual:"- Golden Era testing\n- Pancreatitis research\n- Building Onyx cheat sheet (Word doc)"},
    {d:"Mar 17",day:"Tue",t:"Mercury Rx conjunct North Node",lv:"s",pred:"Fated message or realization about your karmic path. Mercury (communication) meets North Node (destiny) while retrograde (reviewing). Something you already know but haven't fully articulated becomes clear. A conversation from the past may return with new meaning. A document, message, or idea you abandoned may reveal its purpose.",game:"",actual:"- Eva Finance Review: full life audit\n- Onyx $52/hr as primary lever\n- 'Income Sprint Month' crystallized\n- Cheat sheet finalized"},
    {d:"Mar 18",day:"Wed",t:"Birthday - New Moon in Pisces",lv:"m",pred:"Everything converging. New Moon falls near natal Sun at 28°. A New Moon on your birthday means your Solar Return chart is a New Moon chart - the most powerful possible birthday for new beginnings. Five planets in Pisces: Mercury, Mars, North Node, Sun, Moon. Your Sun sign is flooded. Venus at 15° Aries squares Jupiter at 15° Cancer - love and ambition in dialogue. Set your intentions for the entire year. What you plant today grows for the next 12 months.",game:"",actual:"- Created Life Compass\n- Through-line: 'helping people come back to themselves'\n- Defined rotation, framework, foundation\n- 'Wellness, creativity, technology'\n- Intentions planted as predicted"},
    {d:"Mar 19",day:"Thu",t:"Integration",lv:"n",pred:"Day after birthday. Seeds are planted. Let them settle into the soil. Don't dig them up to check if they're growing.",game:"",actual:"- Started CCA exploration\n- Career clarity emerging\n- Mapping learning paths"},
    {d:"Mar 20",day:"Fri",t:"Mercury direct + Sun enters Aries",lv:"m",pred:"Two major shifts in one day. Mercury stations direct at 8°29' Pisces - the fog lifts. Communication clears. Everything confused or delayed since Feb 25 begins resolving. Sun enters Aries - the astrological New Year. Entire zodiac resets. Sun enters your 7th house. For the next month, your identity is illuminated through partnerships. Who you are becomes visible through who you're with.",game:"",actual:"- Full career roadmap crystallized\n- Decided: Specialist + Founder\n- Rejected Evangelist/Consulting\n- CCA 12-week plan designed\n- Dual-path clarity"},
    {d:"Mar 21",day:"Sat",t:"Dreams meet growth",lv:"n",pred:"Mars at 15° Pisces trines Jupiter at 15° Cancer. Beautiful flowing energy between action and expansion through water signs. 6th house (work/health) in harmonious dialogue with career sector. Don't overthink - water signs want you to feel your way forward.",game:"",actual:"- Shipped Golden Era as usable app\n- First deployed product\n- Brainstormed generalizing for users\n- TG protocol: 231 to 140 plan"},
    {d:"Mar 22",day:"Sun",t:"Neptune cazimi + Mercury conjunct North Node",lv:"s",pred:"Neptune meets the Sun at 1°50' Aries. Neptune's fog burns away for one day - you see your dreams with total clarity. What do you actually want? Not what you should want. What your soul craves. The answer arrives like a photograph developing. Also: Mercury (now direct) conjuncts the North Node. The fated message from Mar 17 completes. What was unclear during Rx now makes sense.",game:"",actual:"- Career clarity confirmed\n- Learning plan finalized\n- Life Compass + career + astrology unified\n- Full picture visible"},
    {d:"Mar 23",day:"Mon",t:"Building energy",lv:"n",pred:"Sun in early Aries moving toward Saturn. The dreams from the Neptune cazimi now need structure. What form will they take? Your 7th house is asking you to build something real.",game:"",actual:"- Applied Deeptune through Marc\n- Disputed Onyx score\n- Transitioned to QMA at Outlier\n- Onboarded Turing\n- Met Peiter for accountability\n- New book idea\n- Reality: income fragmented across 5 streams, none stable yet. Deeptune is the most aligned opportunity."},
    {d:"Mar 24",day:"Tue",t:"Building energy",lv:"n",pred:"Continued structuring energy. Sun approaching Saturn. The 7th house push continues - build something real with someone, or formalize what you're building alone.",game:"\uD83C\uDFAF Set CCA start date. Enroll in API course\n\uD83D\uDCC1 Create Evalynn OS v2 project folder\n\uD83D\uDCDD Write 3 intentions: Specialist / Founder / CCA",actual:""},
    {d:"Mar 25",day:"Wed",t:"Saturn cazimi",lv:"m",pred:"Sun meets Saturn at 4°43' Aries in your 7th house. The reality check day. Saturn says: 'Nice dreams. Now show me the blueprint.' Whatever intentions you set on your birthday, whatever clarity from Mar 22 - Saturn demands a plan. Not someday. Now. First step. Concrete. In your 7th house specifically: a partnership reality check. What are your actual standards? What are you willing to build? This may feel heavy. It's not punishment. It's foundation. Saturn only builds what lasts.",game:"\uD83D\uDCCB Print Learning Plan. Set Week 1. Block calendar\n\uD83D\uDCBC Update LinkedIn: AI Implementation\n\uD83C\uDFD7\uFE0F Foundation day - formalize decision",actual:""},
    {d:"Mar 26-27",day:"Thu-Fri",t:"Grounding",lv:"n",pred:"Post-Saturn cazimi integration. The plan is forming. Structure taking shape. Virgo Moon in its element - organizing, systematizing, making the vision practical.",game:"\u25B6\uFE0F Start API course. First module\n\uD83D\uDD27 One API call for Evalynn OS v2\n\uD83D\uDCD0 Project structure, CLAUDE.md, learning log",actual:""},
    {d:"Mar 28",day:"Sat",t:"Saturn sextile Pluto (exact)",lv:"s",pred:"Saturn at 5°09' Aries sextiles Pluto at 5°09' Aquarius. Exact aspect. Harmonious connection between partnership sector (7th) and creative sector (5th). Whatever structure Saturn is building in your relationship world is now empowered by Pluto's transformative force in your creative world. The creative projects and the partnership foundations are not separate tracks. Building one builds the other.",game:"\u270D\uFE0F Write Golden Era case study: TG -67%\n\uD83D\uDCA1 Frame as portfolio piece\n\uD83D\uDD17 Shipped product = Specialist evidence",actual:""},
    {d:"Mar 29-30",day:"Sun-Mon",t:"Venus enters Taurus",lv:"n",pred:"Venus enters its home sign. Grounded, sensual, stable. After the fire of Aries Venus, this is an exhale. Body wants comfort. Good food. Soft textures. Your post-eclipse, post-birthday, post-Mercury-Rx system needs nourishment. This is not laziness. This is Venus saying: you just went through a cosmic car wash. Now rest in something beautiful.",game:"\uD83E\uDDD8 Rest. No screens for hours\n\uD83D\uDC86 Massage. Good food. Slow morning\n\uD83C\uDF3F You shipped, chose, planned. Nourish",actual:""},
    {d:"Mar 31",day:"Tue",t:"New ground",lv:"n",pred:"Month ends with all planets direct, Sun in Aries, Venus in Taurus, Mars in Pisces, Jupiter direct and moving forward. You are standing on completely different ground than where you started. The eclipse purged. The birthday planted seeds. Mercury cleared. Saturn gave structure. Pluto gave power. Ready for April.",game:"\uD83D\uDD0D How does Specialist+Founder feel in body?\n\uD83D\uDCCA 4-5 days into API course\n\uD83D\uDE80 Standing on different ground",actual:""},
  ];
  const april=[
    {d:"Apr 1-2",day:"Wed-Thu",t:"Full Moon in Libra",lv:"s",pred:"Full Moon at 12° Libra illuminates your 2nd house of income, values, and self-worth. Opposite Sun in Aries (7th). The tension: what you value vs what partnerships demand. Financial or value-based culmination. Something about how you earn or what you're worth becomes visible.",game:"\uD83D\uDCB0 Review finances. What's your real hourly rate across all work?\n\uD83D\uDCCA Update income tracking spreadsheet",actual:""},
    {d:"Apr 3-5",day:"Fri-Sun",t:"Mars enters Aries",lv:"s",pred:"Mars enters Aries - your 7th house. Mars is domicile here, at full strength. Direct, assertive, initiating energy in partnerships and collaborations. Mars will transit over natal Mercury Rx at 11° Aries later this month. Say what you mean. Be direct. Mars in 7th doesn't do subtlety.",game:"\uD83E\uDD1D Reach out to one potential collaborator\n\uD83D\uDCAC If there's an unsaid conversation, say it now",actual:""},
    {d:"Apr 6-8",day:"Mon-Wed",t:"Mercury enters Taurus",lv:"n",pred:"Mercury moves into your 8th house. Thinking turns to shared resources, deeper investments, transformation. Good for financial planning, research, anything requiring depth over speed. Taurus Mercury is slow and thorough - matches your sprint-and-rest pattern.",game:"\uD83D\uDCD2 Deep work: financial planning or research sprint\n\uD83E\uDDE0 Good week for CCA study - deep focus mode",actual:""},
    {d:"Apr 9-11",day:"Thu-Sat",t:"Venus trine Pluto",lv:"n",pred:"Venus in Taurus (8th) trines Pluto in Aquarius (5th). Harmonious depth. Creative projects carry emotional power. Financial opportunities through transformation. Intimacy, creative depth, and hidden resources align.",game:"\uD83C\uDFA8 Pour energy into creative projects\n\uD83D\uDC8E Trust the pull toward something deeper",actual:""},
    {d:"Apr 12",day:"Sun",t:"Mars conjunct Neptune 2°39' Aries",lv:"s",pred:"Mars meets Neptune in your 7th house. Action meets dreams in partnerships. Can be deeply inspired action or confused action with no direction. If motivated toward something spiritually aligned, move. If foggy about what you want from someone, wait. Mars-Neptune in 7th can idealize others. Check with Virgo Moon before acting.",game:"\uD83E\uDDD8 Body check before any big decision\n\uD83D\uDCDD Journal: what am I projecting vs what's real?",actual:""},
    {d:"Apr 13",day:"Mon",t:"Venus sextile Jupiter",lv:"n",pred:"Venus at 16° Taurus sextiles Jupiter at 16° Cancer. 8th house (depth) harmonizes with career sector. Financial opportunity through professional connections. Generosity flows both ways. Good day for money conversations or collaboration proposals.",game:"\uD83D\uDCBC Send that proposal or pitch\n\uD83D\uDD17 Follow up on any professional lead",actual:""},
    {d:"Apr 16",day:"Thu",t:"Chiron cazimi 26° Aries",lv:"s",pred:"Sun meets Chiron at 26° Aries in your 7th house. Clarity about your deepest wound in relationships. Not to reopen it - to see it clearly, maybe for the first time. This degree is close to your Ascendant axis. Identity and partnership wounds illuminated simultaneously.",game:"\uD83D\uDCDD Write down: what pattern in relationships am I ready to name?\n\uD83E\uDE9E Honest reflection, not fixing",actual:""},
    {d:"Apr 17",day:"Fri",t:"New Moon in Aries 27°",lv:"m",pred:"New Moon at 27° Aries - almost exactly opposite your Ascendant at 27° Virgo. Partnership new moon landing directly on your Descendant. New beginnings in relationships, collaborations, or how you show up with others. Set intentions about what you want from partnership - romantic, creative, professional. What you plant here grows over the next 6 months.",game:"\uD83C\uDF19 Set partnership intentions for the next 6 months\n\uD83D\uDCDD What do I want from collaboration? Write it down\n\uD83C\uDFAF CCA Week 3 checkpoint - on track?",actual:""},
    {d:"Apr 19",day:"Sun",t:"Mars conjunct Saturn 7°51' Aries",lv:"m",pred:"Mars meets Saturn in your 7th house. Disciplined action. Delayed gratification. If you've been impulsive in any partnership, Saturn says: stop, plan, build properly. If avoiding a hard conversation, Mars-Saturn forces it. Close to the North Node degree activated in March - the karmic thread continues. Whatever fated action from Mar 13 now requires commitment.",game:"\uD83D\uDCCB Make one hard decision you've been delaying\n\uD83C\uDFD7\uFE0F Commit to something concrete in a collaboration\n\u26A1 The fated thread from Mar 13 - where does it lead?",actual:""},
    {d:"Apr 20",day:"Mon",t:"Triple conjunction: Mercury-Saturn-Mars",lv:"s",pred:"Mercury meets Saturn at 7°55', then Mars at 8°36' Aries. All in your 7th house. Communication gets real. Contracts, agreements, formal declarations. If you need to sign, negotiate, or make something official - this is the day. Say it clearly, mean it, commit. Sun enters Taurus - focus shifts to your 8th house. Deeper waters.",game:"\uD83D\uDCDD Sign, send, or formalize something\n\uD83D\uDCBC Any contract or agreement - today is the day\n\uD83D\uDD27 CCA coursework: formalize your project structure",actual:""},
    {d:"Apr 21-24",day:"Tue-Fri",t:"Settling into Taurus season",lv:"n",pred:"Sun now in your 8th house. Next month is about transformation, shared resources, psychological depth. Energy shifts from visible (partnerships) to invisible (inner work). Good for research, deep learning, financial restructuring.",game:"\uD83D\uDCDA Deep CCA study block\n\uD83D\uDD0D Research sprint on something you've been curious about\n\uD83D\uDC86 Slow down - 8th house rewards depth over speed",actual:""},
    {d:"Apr 25",day:"Sat",t:"Uranus enters Gemini",lv:"m",pred:"The biggest transit of the year for your career. Uranus enters Gemini - landing on your MC at 27° Gemini over coming years. Begins a 7-year revolution of your career, public role, and reputation. MC in Gemini ruled by natal Mercury Rx in Aries - the revolution connects to communication, data, technology, bold initiative. Your AI work, writing, building - all about to get shaken up and upgraded. Don't cling to the current form. The form changes. The purpose stays.",game:"\uD83D\uDE80 Notice what surprises you today. That's the signal.\n\uD83D\uDCDD Write: what career form am I holding onto that's already outdated?\n\uD83C\uDF0A This is the start of 7 years. No rush. Just notice.",actual:""},
    {d:"Apr 26-28",day:"Sun-Tue",t:"Post-Uranus integration",lv:"n",pred:"Career thoughts may feel electric, chaotic, full of possibility. Don't try to plan yet. Let the new energy settle. Uranus needs time to show you what it's going to do. Your MC ruler (Mercury) is activated by everything in Aries.",game:"\uD83E\uDDD8 Don't plan. Just notice what keeps coming back.\n\uD83D\uDCD3 Journal the ideas - don't filter yet",actual:""},
    {d:"Apr 29",day:"Wed",t:"Venus square lunar nodes",lv:"s",pred:"Venus at 7° Gemini squares the nodes at 7° Pisces/Virgo. Crossroads in values, relationships, or creativity. The nodes are on your 1st/6th house axis - identity vs service. Do you value yourself enough to stop over-giving? Venus square the nodes forces a choice: stay in the comfortable pattern, or choose growth.",game:"\uD83E\uDE9E Ask: where am I over-giving right now?\n\u2702\uFE0F Cut one thing that drains without returning",actual:""},
    {d:"Apr 30",day:"Thu",t:"Mercury enters Gemini",lv:"n",pred:"Mercury enters your 10th house (career). Sharp thinking about professional direction. Good for writing, pitching, communicating career vision. Mercury in Gemini is domicile - fast, articulate, versatile. Your MC ruler coming home.",game:"\uD83D\uDCBC Update portfolio or professional bio\n\u270D\uFE0F Write about what you're building",actual:""},
  ];
  const may=[
    {d:"May 1",day:"Fri",t:"Full Moon in Scorpio 11°",lv:"m",pred:"Full Moon at 11° Scorpio illuminates your 3rd house - communication, learning, daily environment. Scorpio Full Moon here is intense: something hidden in your immediate world comes to light. Natal Pluto at 22° Scorpio in the 3rd means this Full Moon activates Pluto's house. Deep truths surfacing in how you communicate or what you're learning. The 3rd house is also writing - creative breakthrough or emotional release through words is possible.",game:"\uD83D\uDCDD Write something raw and honest today\n\uD83D\uDD2E What truth have you been avoiding saying?\n\uD83D\uDCD6 Muffin Diaries or personal writing - let it pour",actual:""},
    {d:"May 2-4",day:"Sat-Mon",t:"Sun trine Pluto",lv:"n",pred:"Sun in Taurus (8th) trines natal Pluto in Scorpio (3rd). Empowering flow between transformation and communication. Research, deep writing, investigative work all favored. Whatever surfaced at the Full Moon now has power behind it.",game:"\uD83D\uDCDA Use this energy for CCA deep study\n\u270D\uFE0F Write the Golden Era case study if not done\n\uD83D\uDD2C Research sprint - go deep on one topic",actual:""},
    {d:"May 5-7",day:"Tue-Thu",t:"Mars in late Aries",lv:"n",pred:"Mars moving through late Aries, about to enter Taurus. Last push of Mars energy in your 7th house. If there's something left unsaid or undone in a partnership or collaboration, do it now. Once Mars leaves Aries, the assertive window in relationships closes for two years.",game:"\uD83D\uDCAC Last chance energy: say what needs saying\n\uD83E\uDD1D Close any open loops with collaborators",actual:""},
    {d:"May 8-10",day:"Fri-Sun",t:"Mars enters Taurus",lv:"s",pred:"Mars enters Taurus - your 8th house. Slower, more deliberate action around shared finances, investments, deep transformation. Mars in Taurus is stubborn and persistent. Good for sustained effort on anything requiring depth. Financial restructuring, research sprints, psychological work. Also activates themes of desire - what you want that you haven't been willing to name.",game:"\uD83D\uDC22 Shift to slow-and-steady mode\n\uD83D\uDCB0 Financial review: where is money leaking?\n\uD83C\uDFAF CCA Phase 2 should be underway - check milestones",actual:""},
    {d:"May 11-13",day:"Mon-Wed",t:"Venus enters Gemini",lv:"s",pred:"Venus enters Gemini - your 10th house, landing on your MC. Charm, beauty, and likability in your career sector. People notice you. Professional connections feel easy. Good for networking, updating profiles, making yourself visible. Venus on MC is one of the best transits for career attractiveness. Since Uranus just entered Gemini too, Venus here gives the career revolution a graceful quality.",game:"\uD83D\uDC85 Update LinkedIn, portfolio, all public-facing profiles\n\uD83E\uDD1D Network - reach out to 2-3 people you admire\n\uD83D\uDCF8 If you need a new headshot, this is the time",actual:""},
    {d:"May 14",day:"Thu",t:"Mercury cazimi 23° Taurus",lv:"s",pred:"Mercury meets the Sun at 23° Taurus in your 8th house. Moment of clarity about something hidden - finances, psychological patterns, shared resources, or a secret. Mercury cazimi cuts through noise. One clear insight about the deeper structure of your life. Could be a financial revelation, therapeutic breakthrough, or understanding a power dynamic.",game:"\uD83D\uDCDD Write down whatever becomes clear today\n\uD83D\uDCA1 The insight might be small. It isn't.",actual:""},
    {d:"May 15-16",day:"Fri-Sat",t:"Sun enters Gemini",lv:"m",pred:"Sun enters Gemini - approaching your MC. The next month illuminates higher learning, philosophy, and career. Pluto at 5° Aquarius semi-sextiles the Node at 5° Pisces - subtle but persistent: your creative transformation (5th house) is nudging your karmic direction (6th house). Keep building. The nudge is real.",game:"\u2600\uFE0F Career season begins. What do you want to be known for?\n\uD83D\uDCDA CCA study intensifies - Sun illuminating your professional house",actual:""},
    {d:"May 19",day:"Tue",t:"Mercury square lunar nodes",lv:"n",pred:"Mercury at 4° Gemini squares the nodes at 4° Pisces/Virgo. Communication crossroads related to your 1st/6th house axis. What you're saying or thinking about your identity vs your service. Natal Mercury is Rx - process internally first. Give yourself 24 hours before responding to anything provocative.",game:"\u23F8\uFE0F 24-hour rule activated. Don't react today.\n\uD83D\uDCD3 Journal instead of sending that message",actual:""},
    {d:"May 20-21",day:"Wed-Thu",t:"Sun conjunct Uranus 1° Gemini",lv:"m",pred:"Sun meets Uranus at 1° Gemini. First Sun-Uranus conjunction in Gemini in 84 years. Happening in your 9th/10th house zone near your MC. Sudden insight, opportunity, or disruption related to career direction or life philosophy. For someone about to take the CCA and shift career direction, this transit could bring the exact catalyst you didn't see coming. Stay open. Say yes to the weird thing.",game:"\uD83C\uDFB2 Say yes to something unexpected\n\uD83D\uDC40 The opportunity might not look like an opportunity\n\uD83D\uDE80 Career-defining moment possible. Stay alert.",actual:""},
    {d:"May 22",day:"Fri",t:"Uranus cazimi 1°30' Gemini",lv:"m",pred:"Exact Uranus cazimi. Sun illuminates Uranus completely. One day of total clarity about what revolution means for your career and life direction. Uranus cazimi in Gemini on your MC axis: the career you're building isn't the one you thought you'd have. And that's exactly right. The new direction crystallizes - not the old plan upgraded, but something genuinely new.",game:"\uD83D\uDCDD Write down: what career am I actually building?\n\uD83D\uDD2E This is the clearest you'll see the next 7 years\n\uD83D\uDC8E Name it. Even if it scares you.",actual:""},
    {d:"May 25",day:"Mon",t:"Mars square Pluto",lv:"s",pred:"Mars at 5° Taurus squares Pluto at 5° Aquarius. 8th house (Mars) creates tension with 5th house (Pluto). Action around finances/transformation clashes with creative power. Can feel like a power struggle - with someone over resources, or internally between security and creative risk. Natal Mars at 22° Aquarius and Saturn at 14° - this activates your 5th house themes. Channel into creative work rather than conflict.",game:"\uD83C\uDFA8 Channel frustration into creation\n\u26A0\uFE0F Don't pick fights over money today\n\uD83D\uDD25 Physical movement helps: gym, walk, anything",actual:""},
    {d:"May 27-28",day:"Wed-Thu",t:"Mercury enters Cancer",lv:"n",pred:"Mercury enters Cancer - your 10th/11th house area. Emotional intelligence in career communications. Good for connecting with professional network from genuine care rather than strategy. Jupiter still in Cancer - Mercury meets expansion in your career sector. Big ideas, big conversations.",game:"\uD83D\uDCAC Have one meaningful career conversation\n\uD83D\uDCE7 Write to someone in your network with genuine warmth",actual:""},
    {d:"May 29-31",day:"Fri-Sun",t:"New Moon in Gemini 8°",lv:"m",pred:"New Moon at 8° Gemini in your 9th/10th house area. New beginnings in career, public visibility, higher learning. With Uranus also in Gemini, this seeds something revolutionary in your professional life. Set intentions about the career you want 6 months from now. The CCA, the specialist path, the founder path - whatever you're building, this gives it fresh start. Uranus nearby means the form may surprise you.",game:"\uD83C\uDF19 Set career intentions for the next 6 months\n\uD83D\uDCCB CCA exam should be approaching - set the date\n\uD83D\uDE80 What do you want your professional life to look like by December?",actual:""},
  ];

  return(<div>
    <H1>2026</H1>
    <Collapse title="2025 was demolition. 2026 is architecture." icon="☉" color={C.gold} open={false}>
    <P style={{fontFamily:F.serif,fontSize:18,lineHeight:1.7,marginBottom:20}}>The structures that couldn't hold your weight anymore - the roles that treated you as disposable, the patterns that kept you small, the identity built around serving others at the cost of yourself - they all came down. Not gently. Saturn in Pisces on your Sun made sure of that. 2026 is architecture. Not rebuilding what was. Building what should have been there all along.</P>
    <H3 color={C.bloodRed} style={{marginTop:20}}>Act one: the ending (Jan-Mar)</H3>
    <Ps>Saturn finishes its transit through Pisces and re-enters Aries on Feb 13 - lifting the pressure that's been on your Sun since 2023. The Virgo lunar eclipse on Mar 3 releases whatever identity you've been carrying that no longer fits. Your birthday New Moon on Mar 18 is the most powerful intention-setting day of your year - five planets in your Sun sign, Solar Return chart seeded with fresh lunar energy. By month's end, Mercury goes direct, Saturn gives you a blueprint, and you're standing on completely new ground.</Ps>
    <H3 color={C.ocean} style={{marginTop:16}}>Act two: the activation (Apr-Jul)</H3>
    <Ps>This is where everything you planted in March starts growing. Mars-Saturn conjunction in your 7th house (Apr 19) demands commitment - no more exploring, time to build. Uranus enters Gemini on your MC on Apr 25, beginning a 7-year revolution of your career and public identity. The first Sun-Uranus cazimi in Gemini in 84 years (May 22) crystallizes what that revolution looks like for you specifically. Venus on your MC in May makes you visible and attractive professionally. Jupiter enters Leo on Jun 29, exploding your 11th house network. The CCA certification, the specialist role, the founder path - this is the act where they become real.</Ps>
    <H3 color={C.bloodRed} style={{marginTop:16}}>Act three: the transformation (Jul-Dec)</H3>
    <Ps style={{marginBottom:0}}>Jupiter opposes Pluto on Jul 20 - peak week of the year. Career expansion meets creative transformation in a direct confrontation. Whatever you've been building quietly in Acts 1-2 now becomes visible, powerful, and potentially overwhelming. Mercury retrogrades through Cancer (Jun 29 - Jul 23) force you to revisit career conversations. Venus retrograde through Scorpio and Libra (Oct 3 - Nov 13) on your natal Pluto is the final pattern release - the last relationship dynamic that needs to die so the new one can arrive. By December, you're not the same person who started the year.</Ps>
    </Collapse>
    {mo==="mar"&&<Tbl storageKey="mar" rows={march} intro="Mercury is retrograde in Pisces the entire month until March 20. This Rx is in your Sun sign, in your 6th and 7th houses. The whole month is about revisiting, processing, and completing old cycles. Nothing is meant to launch yet. Everything is meant to clarify."/>}
    {mo==="apr"&&<Tbl storageKey="apr" rows={april} intro="Sun moves through your 7th house (Aries) then 8th house (Taurus). Mars conjuncts Neptune and Saturn in Aries - your partnership house is on fire with forced clarity. April 25: Uranus enters Gemini on your MC. The 7-year career revolution begins. This is the month decisions become commitments."/>}
    {mo==="may"&&<Tbl storageKey="may" rows={may} intro="Sun transits your 8th house (Taurus) then approaches your MC in Gemini. The first Sun-Uranus cazimi in Gemini in 84 years happens on May 22 - career crystallization. Venus enters Gemini on your MC mid-month, making you professionally magnetic. This is the month the new career direction becomes visible to others, not just to you."/>}
  </div>);}

function UniversePage(){
  const[tab,setTab]=useState("y2026");
  const[sub2,setSub2]=useState("mar");
  const tabs=[{k:"y2026",l:"2026 Calendar"},{k:"compass",l:"Life Compass"},{k:"who",l:"Who I Am"}];
  return(<div>
    <H1 style={{fontSize:28,margin:"0 0 4px"}}>My Universe</H1>
    <div style={{display:"flex",gap:0,borderBottom:`1px solid ${C.bdr}`,marginBottom:20}}>
      {tabs.map((t,i)=>(<button key={t.k} onClick={()=>setTab(t.k)} style={{padding:`8px 16px 8px ${i===0?0:16}px`,border:"none",background:"none",fontFamily:F.sans,fontSize:14,fontWeight:tab===t.k?600:400,color:tab===t.k?C.tx:C.txT,cursor:"pointer",borderBottom:tab===t.k?`2px solid ${C.tx}`:"2px solid transparent",marginBottom:-1}}>{t.l}</button>))}
    </div>
    {tab==="y2026"&&<div>
      <div style={{display:"flex",gap:0,marginBottom:16}}>{[{k:"mar",l:"March"},{k:"apr",l:"April"},{k:"may",l:"May"}].map((m,i)=>(<button key={m.k} onClick={()=>setSub2(m.k)} style={{padding:"5px 12px",border:"none",background:sub2===m.k?C.bgS:"transparent",borderRadius:4,fontFamily:F.sans,fontSize:13,fontWeight:sub2===m.k?600:400,color:sub2===m.k?C.tx:C.txT,cursor:"pointer"}}>{m.l}</button>))}</div>
      <Year2026 month={sub2}/>
    </div>}
    {tab==="compass"&&<LifeCompass/>}
    {tab==="who"&&<WhoIAm/>}
  </div>);
}


// ══════════════════════════════════════════════════════════════
// MAIN APP - Left sidebar with all tabs
// ══════════════════════════════════════════════════════════════

const NAV_ITEMS = [
  { k: "goals", l: "Goals" },
  { k: "body", l: "Body" },
  { k: "work", l: "Work" },
  { k: "universe", l: "My Universe" },
];

export default function App() {
  return <ThemeCtx>{({ dark, toggle, C: theme }) => <AppInner dark={dark} toggle={toggle} theme={theme} />}</ThemeCtx>;
}

function AppInner({ dark, toggle, theme }) {
  C = theme;
  const fontLink = "https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Karla:wght@400;500;600;700&display=swap";
  const [pg, setPg] = useState("goals");

  const goTo = (k) => { setPg(k); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.tx, display: "flex" }}>
      <link href={fontLink} rel="stylesheet" />

      {/* LEFT SIDEBAR */}
      <nav style={{
        width: 200, minWidth: 200, background: C.bgS, borderRight: `1px solid ${C.bdr}`,
        padding: "20px 0", position: "sticky", top: 0, height: "100vh", overflowY: "auto", flexShrink: 0
      }}>
        <div style={{
          padding: "12px 20px 20px", fontFamily: F.serif, fontSize: 18, fontWeight: 700, color: C.tx,
          borderBottom: `1px solid ${C.bdr}`, marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <span>Evalynn</span>
          <div onClick={toggle} style={{
            width: 32, height: 18, borderRadius: 9, background: dark ? C.txT : C.bdrH,
            cursor: "pointer", position: "relative", transition: "background 0.2s"
          }}>
            <div style={{
              width: 14, height: 14, borderRadius: "50%", background: dark ? "#e0e0e0" : "#ffffff",
              position: "absolute", top: 2, left: dark ? 16 : 2, transition: "left 0.2s",
              boxShadow: "0 1px 2px rgba(0,0,0,0.2)"
            }} />
          </div>
        </div>

        {NAV_ITEMS.map(item => {
          const isActive = pg === item.k;
          return (
            <button key={item.k} onClick={() => goTo(item.k)} style={{
              display: "block", width: "100%", padding: "10px 20px", border: "none",
              background: isActive ? C.bg : "transparent",
              borderLeft: isActive ? `3px solid ${C.tx}` : "3px solid transparent",
              fontFamily: F.sans, fontSize: 14, fontWeight: isActive ? 600 : 400,
              color: isActive ? C.tx : C.txS, cursor: "pointer", textAlign: "left",
              transition: "all 0.1s"
            }}>
              {item.l}
            </button>
          );
        })}
      </nav>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, overflowY: "auto", padding: "32px 48px 60px" }}>
        {pg === "goals" && <GoalsTab />}
        {pg === "body" && <BodyPage />}
        {pg === "work" && <WorkTab />}
        {pg === "universe" && <UniversePage />}
      </main>
    </div>
  );
}
