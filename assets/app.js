// awesome-free-electronics: static, client-rendered directory.
// Data source of truth: data/categories/*.csv (website,name,tags,description).
// Daily finds live in daily_additions.csv with an "added YYYY-MM-DD" tag and are filed into a
// category by their tags. No backend, no tracking: just fetch the CSVs and render.
(() => {
"use strict";
const REPO = "https://github.com/manepalliteja37/awesome-free-electronics";

const CATS = [
  {key:"basics_analog", name:"Basics & Analog", icon:"wave", h:212, s:75, desc:"Circuit fundamentals, components, op-amps, filters and analog simulation."},
  {key:"digital_fpga_vlsi", name:"Digital, FPGA & VLSI", icon:"chip", h:22, s:85, desc:"Logic design, Verilog and VHDL, FPGA toolchains and open-source chip design."},
  {key:"pcb", name:"PCB Design", icon:"board", h:145, s:60, desc:"Schematic capture, board layout, Gerber viewers, footprints and manufacturing prep."},
  {key:"embedded_iot", name:"Embedded & IoT", icon:"cpu", h:48, s:85, desc:"Microcontrollers, Arduino, ESP32, STM32, RTOS, firmware and connected devices."},
  {key:"robotics_plc", name:"Robotics, PLC & Drones", icon:"robot", h:355, s:70, desc:"Robot software, motor control, industrial PLC programming and drone flight stacks."},
  {key:"rf_dsp", name:"RF, SDR & DSP", icon:"antenna", h:180, s:65, desc:"Antennas, software-defined radio, wireless protocols and signal processing."},
  {key:"power_energy_test", name:"Power, Solar & Test", icon:"bolt", h:235, s:70, desc:"Converters, batteries, solar and EV systems, plus test and measurement tools."},
  {key:"other_fields", name:"Semiconductors, Audio, Bio & TinyML", icon:"atom", h:282, s:60, desc:"Device physics, audio electronics, biomedical circuits and machine learning on microcontrollers."},
  {key:"calculators", name:"Calculators & Reference", icon:"calc", h:205, s:32, desc:"Resistor, LED, filter, trace-width and other calculators, plus quick-reference sheets."},
  {key:"community_assets", name:"Community Projects & Free Assets", icon:"box", h:328, s:65, desc:"Open hardware projects, 3D models, symbol libraries and community hubs."},
  {key:"community_ai", name:"Channels, Courses, Blogs & AI Tools", icon:"play", h:72, s:55, desc:"YouTube channels, free courses, in-depth blogs and AI-built learning tools."},
];
const CAT = Object.fromEntries(CATS.map(c => [c.key, c]));
const DAILY = "daily_additions";

// tag -> resource type, in priority order
const TYPE_MAP = [["simulator","Simulator"],["calculator","Calculator"],["ai-built-tool","AI tool"],["course","Course"],
  ["youtube","Video channel"],["video","Video channel"],["book","Book"],["blog","Blog"],["pbl-project","Project"],["projects","Project"],["project","Project"],
  ["3d-models","Free assets"],["library","Library"],["reference","Reference"],["community","Community"],["tool","Software"]];
const CONTENT_TYPES = ["Course","Video channel","Book","Blog","Reference","Community"];
const LIC = {oss:"Open source", closed:"Free, closed-source", content:"Free learning content", free:"Free to use"};

const has = (x, arr) => arr.some(t => x.tags.includes(t));
const GOALS = [
  {key:"basics", title:"Learn electronics basics", text:"Understand components, circuits, voltage and current.", icon:"book", h:212,
    test:x => has(x,["basics","beginner","fundamentals"]) || (x.cat==="basics_analog" && CONTENT_TYPES.includes(x.type))},
  {key:"simulate", title:"Simulate a circuit", text:"Test circuits without buying a single component.", icon:"scope", h:265,
    test:x => has(x,["simulator","spice"]) || /simulat/.test(x.tagsL)},
  {key:"pcb", title:"Design a PCB", text:"Draw schematics, lay out boards and export manufacturing files.", icon:"board", h:145,
    test:x => x.cat==="pcb" || has(x,["pcb"])},
  {key:"arduino", title:"Build Arduino projects", text:"Microcontrollers, sensors and DIY builds.", icon:"cpu", h:185,
    test:x => /\b(arduino|esp32|esp8266|microcontrollers?|avr|attiny|rp2040)\b/.test(x.hay)},
  {key:"embedded", title:"Learn embedded systems", text:"Firmware, RTOS, debuggers and development tools.", icon:"wifi", h:48,
    test:x => x.cat==="embedded_iot" || has(x,["embedded","firmware","rtos"])},
  {key:"fpga", title:"Explore FPGA and digital logic", text:"Digital design, HDL and programmable logic.", icon:"chip", h:22,
    test:x => x.cat==="digital_fpga_vlsi" || has(x,["fpga","vlsi","verilog","vhdl","digital-electronics"])},
  {key:"robots", title:"Build robots", text:"Robotics, automation, PLCs, drones and motor control.", icon:"robot", h:355,
    test:x => x.cat==="robotics_plc" || has(x,["robotics","drone","plc","ros","motor-control"])},
  {key:"rf", title:"Work with RF and wireless", text:"Antennas, SDR, LoRa and wireless communication.", icon:"antenna", h:165,
    test:x => x.cat==="rf_dsp" || has(x,["rf","sdr","lora","antenna","wireless"])},
  {key:"calc", title:"Find electronics calculators", text:"Resistor values, LED current, filters and more.", icon:"calc", h:200,
    test:x => x.type==="Calculator" || x.cat==="calculators"},
  {key:"learn", title:"Learn from videos and courses", text:"Free courses, YouTube channels, books and deep blogs.", icon:"play", h:72,
    test:x => ["Course","Video channel","Blog","Book"].includes(x.type)},
  {key:"power", title:"Explore power electronics", text:"Converters, solar, batteries and power systems.", icon:"bolt", h:235,
    test:x => x.cat==="power_energy_test" || has(x,["power-electronics","solar","battery"])},
  {key:"ai", title:"Discover AI electronics tools", text:"AI-built and AI-assisted tools for learning and design.", icon:"spark", h:295,
    test:x => has(x,["ai-built-tool","ai","llm","machine-learning"]) || /\bai\b/.test(x.tagsL)},
];
const GOAL = Object.fromEntries(GOALS.map(g => [g.key, g]));
const POPULAR = ["KiCad","Arduino","circuit simulator","LED resistor","Verilog","oscilloscope","LoRa","solar"];
const PICKS = ["falstad","kicad","ngspice","wokwi","logisim","verilator","gnu radio","freecodecamp","qucs","digital","fritzing","openscad"];
const TOPIC_PHRASES = ["circuit simulator","online circuit simulator","led resistor calculator","pcb design","arduino tutorial","arduino simulator",
  "verilog simulator","fpga toolchain","oscilloscope software","free electronics course","op-amp","555 timer","smith chart","lora","esp32","stm32","solar","battery management","motor control","spice"];

// "Good for" lines are derived only from each resource's curated tags (never invented)
const GOOD_FOR = [["beginner","Beginners getting started"],["basics","Learning the fundamentals"],["simulator","Simulating circuits before you build them"],
  ["spice","SPICE analysis: DC, AC and transient"],["schematic","Drawing schematics"],["layout","Laying out circuit boards"],["pcb","PCB design and manufacturing prep"],
  ["gerber","Viewing or exporting Gerber files"],["eda","Schematic capture and board layout (EDA)"],["cad","Mechanical and electronics CAD"],["library","Ready-made component libraries"],["footprints","Component footprints"],["calculator","Quick component and circuit calculations"],["resistor","Working out resistor values"],
  ["filter","Designing filters"],["op-amp","Op-amp circuits"],["verilog","Writing and simulating Verilog"],["vhdl","Writing and simulating VHDL"],
  ["fpga","FPGA development"],["vlsi","Chip (VLSI) design"],["asic","ASIC design flows"],["arduino","Arduino projects"],["esp32","ESP32 projects"],
  ["stm32","STM32 development"],["rtos","Real-time firmware (RTOS)"],["embedded","Embedded systems work"],["firmware","Writing firmware"],["python","Electronics with Python"],["rust","Embedded Rust"],["communication","Communication systems"],["semiconductor","Semiconductor devices"],["audio","Audio electronics"],["iot","IoT and connected devices"],
  ["robotics","Robotics projects"],["plc","PLC and industrial automation"],["drone","Drones and flight controllers"],["motor-control","Motor control"],
  ["sdr","Software-defined radio experiments"],["rf","RF design"],["antenna","Antenna design"],["dsp","Signal processing"],["oscilloscope","Viewing and measuring signals"],
  ["test-measurement","Test and measurement"],["power-electronics","Power electronics"],["solar","Solar and renewable energy"],["battery","Battery systems"],
  ["3d-models","Free 3D models for boards and enclosures"],["ai-built-tool","AI-assisted learning or design"],["course","Structured lessons you can follow"],
  ["youtube","Learning by watching video tutorials"],["blog","In-depth written tutorials"],["book","Reading a free textbook"],["pbl-project","Hands-on project-based learning"],
  ["browser","Working without installing anything"],["open-hardware","Studying real open hardware designs"]];
const goodFor = x => { const out = GOOD_FOR.filter(([t]) => x.tags.includes(t)).map(g=>g[1]); if (x.web && !out.includes(GOOD_FOR.find(g=>g[0]==="browser")[1])) out.push("Working without installing anything"); return out.slice(0,6); };

// natural-language search: stop words and synonyms
const STOP = new Set("a an the i im i'm to how can could do does want wanna would like find get for of with my me and or in on is are was be using use some best good great free from scratch learn learning about what which where who tool tools resource resources make build building need help please any that this it you your".split(" "));
const SYN = {
  simulate:["simulator","simulation","spice"], simulator:["simulator","simulation","spice"], simulation:["simulator","spice"], sim:["simulator"],
  test:["simulator","test-measurement","testing"], online:["browser","web","online"], browser:["browser","web","online"], web:["browser","web"],
  pcb:["pcb","circuit board","kicad","gerber"], board:["pcb","circuit board"], gerber:["gerber","pcb"], schematic:["schematic","eda","kicad"], eda:["eda","pcb","schematic"],
  resistor:["resistor","resistance"], led:["led","resistor"], calculate:["calculator"], calculator:["calculator"], calc:["calculator"], formula:["calculator","reference"],
  course:["course","mooc","lecture"], class:["course","lecture"], video:["youtube","video","channel"], youtube:["youtube","video"], tutorial:["tutorial","course","blog","youtube"],
  book:["book","textbook"], blog:["blog","handbook"],
  arduino:["arduino","avr","atmega"], microcontroller:["microcontroller","arduino","esp32","stm32","mcu","embedded"], mcu:["microcontroller","mcu","embedded"],
  embedded:["embedded","firmware","microcontroller","rtos"], firmware:["firmware","embedded"], rtos:["rtos","freertos","zephyr"],
  verilog:["verilog","systemverilog","hdl"], vhdl:["vhdl","hdl"], hdl:["hdl","verilog","vhdl"], fpga:["fpga","verilog","vhdl","yosys"],
  vlsi:["vlsi","asic","chip design"], asic:["asic","vlsi"], chip:["chip","asic","vlsi","ic"], logic:["logic","digital"], digital:["digital","logic"],
  oscilloscope:["oscilloscope","scope","test-measurement"], scope:["oscilloscope"], multimeter:["multimeter","test-measurement"], measure:["test-measurement","oscilloscope"],
  "op-amp":["op-amp","opamp","operational amplifier"], opamp:["op-amp","opamp"], amplifier:["amplifier","op-amp"], filter:["filter"],
  robot:["robot","robotics","ros"], robotics:["robotics","robot","ros"], drone:["drone","uav","quadcopter","px4","ardupilot"], plc:["plc","ladder","iec 61131"],
  motor:["motor","motor-control"], wireless:["wireless","rf","lora","bluetooth","wifi","sdr","zigbee"], rf:["rf","radio"], antenna:["antenna","rf"],
  sdr:["sdr","software defined radio","gnu radio"], radio:["radio","sdr","rf"], lora:["lora","lorawan"], dsp:["dsp","signal processing"],
  solar:["solar","pv","renewable"], battery:["battery","bms"], power:["power","converter","smps"], ev:["ev","electric vehicle"],
  ai:["ai","ai-built-tool","machine learning","llm"], ml:["machine learning","tinyml"], tinyml:["tinyml","machine learning"],
  iot:["iot","esp32","mqtt"], esp32:["esp32","esp8266"], raspberry:["raspberry pi","raspberry"], spice:["spice","ngspice","ltspice"],
  "3d":["3d","3d-models","step"], beginner:["beginner","basics","fundamentals"], basics:["basics","beginner","fundamentals"],
  circuit:["circuit"], semiconductor:["semiconductor","device"], audio:["audio","amplifier"], project:["project","pbl-project"], projects:["project","pbl-project"],
};

// ---------- utils ----------
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const icon = (n, cls="") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const ico = (n, h, cls="", sat=60) => `<span class="ico ${cls}" style="--h:${h};--s:${sat}%">${icon(n)}</span>`;
const cico = (c, cls="") => ico(c.icon, c.h, cls, c.s);
const hostname = u => { try { return new URL(u).hostname.replace(/^www\./,""); } catch { return ""; } };
const fav = (x, cls="") => { const c = CAT[x.cat], hn = hostname(x.url);
  return `<span class="ico fav ${cls}" style="--h:${c.h};--s:${c.s}%">${icon(c.icon)}${hn?`<img src="https://icons.duckduckgo.com/ip3/${esc(hn)}.ico" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.remove()">`:""}</span>`; };
const catStyle = c => `--h:${c.h};--s:${c.s}%`;
const host = u => { try { const x = new URL(u); return (x.hostname.replace(/^www\./,"") + x.pathname).replace(/\/+$/,""); } catch { return u; } };
const normUrl = u => u.toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\/+$/,"");
const fmtDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});
const slug = s => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,60) || "item";
const plural = (n, w) => `${n.toLocaleString("en-IN")} ${w}${n===1?"":"s"}`;
const debounce = (f, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => f(...a), ms); }; };
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const EXT = (name) => `target="_blank" rel="noopener" aria-label="Open ${esc(name)} website (opens in a new tab)"`;

function parseCSV(t){
  t = t.replace(/^\uFEFF/, "");
  const rows=[]; let r=[], f="", q=false;
  for (let i=0;i<t.length;i++){ const c=t[i];
    if (q){ if (c=='"'){ if (t[i+1]=='"'){ f+='"'; i++; } else q=false; } else f+=c; }
    else if (c=='"') q=true;
    else if (c==','){ r.push(f); f=""; }
    else if (c=='\n'||c=='\r'){ if (c=='\r'&&t[i+1]=='\n') i++; r.push(f); rows.push(r); r=[]; f=""; }
    else f+=c;
  }
  if (f||r.length){ r.push(f); rows.push(r); }
  const h = (rows.shift()||[]).map(x=>x.trim().toLowerCase());
  return rows.filter(x=>x.length>1).map(x=>Object.fromEntries(h.map((k,i)=>[k,(x[i]||"").trim()])));
}

function sectionFor(tags){
  const t = " " + tags.join(" ") + " ";
  const rules = [
    [/calculator|smith|k-map/, "calculators"],
    [/ pcb|kicad|open-hardware|gerber/, "pcb"],
    [/fpga|vlsi|verilog|vhdl|digital|asic|risc-v|computer-architecture/, "digital_fpga_vlsi"],
    [/ rf |sdr|dsp|antenna|radio/, "rf_dsp"],
    [/power|solar|battery| ev |test-measurement|oscilloscope/, "power_energy_test"],
    [/robot|plc|drone| ros |motor/, "robotics_plc"],
    [/embedded|iot|arduino|esp32|stm32|rtos|firmware|microcontroller/, "embedded_iot"],
    [/analog|basics|spice|circuit|op-amp/, "basics_analog"],
    [/semiconductor|audio|biomedical|tinyml|automotive|optoelectronics|mems/, "other_fields"],
    [/3d-models|community|assets/, "community_assets"],
  ];
  for (const [re,k] of rules) if (re.test(t)) return k;
  return "community_ai";
}

// ---------- data ----------
let DATA = [], BYID = {}, NEWEST = "", TOPICS = [];

const CACHE_KEY = "afe-data-v1";
// Live data comes straight from GitHub, so daily data commits need no Netlify deploy.
// The copy bundled with the site is the fallback if GitHub is unreachable.
const REPO_RAW = "https://raw.githubusercontent.com/manepalliteja37/awesome-free-electronics/main/";
async function fetchJSON(url){
  const r = await fetch(url, {cache:"no-cache"});
  if (!r.ok) throw new Error(r.status);
  const j = await r.json();
  if (!j || !j.files) throw new Error("bad data");
  return { v: j.v, files: j.files };
}
async function fetchTexts(){
  const keys = [...CATS.map(c=>c.key), DAILY];
  try {
    return await fetchJSON(REPO_RAW + "data/resources.json");
  } catch (e0) {}
  try {
    return await fetchJSON("data/resources.json");
  } catch (e) {
    const get = (k, tries=3) => fetch(`data/categories/${k}.csv`).then(r => { if (!r.ok) throw new Error(r.status); return r.text(); })
      .catch(err => tries > 1 ? new Promise(res => setTimeout(res, 400)).then(() => get(k, tries-1)) : "");
    const texts = await Promise.all(keys.map(k => get(k)));
    const files = {}; keys.forEach((k,i) => files[k] = texts[i]);
    return { v: "csv", files };
  }
}
function readCache(){ try { const c = JSON.parse(localStorage.getItem(CACHE_KEY)); return c && c.files ? c : null; } catch { return null; } }
function writeCache(d){ try { localStorage.setItem(CACHE_KEY, JSON.stringify(d)); } catch {} }
let DATA_V = "";
async function load(){
  const cached = readCache();
  const meta = document.querySelector('meta[name="data-version"]');
  const pageV = meta ? meta.content : "";
  if (cached){
    build(cached.files); DATA_V = cached.v;
    {   // always refresh quietly in the background (live data lives on GitHub)
      fetchTexts().then(d => { if (d.v !== DATA_V){ if (d.v !== "csv") writeCache(d); build(d.files); DATA_V = d.v; route(); } }).catch(()=>{});
    }
    return;
  }
  const d = await fetchTexts();
  if (d.v !== "csv") writeCache(d);
  build(d.files); DATA_V = d.v;
}
function build(files){
  const keys = [...CATS.map(c=>c.key), DAILY];
  const texts = keys.map(k => files[k] || "");
  for (const k in BYID) delete BYID[k];
  const byUrl = new Map(), ids = new Set();
  let order = 0;
  texts.forEach((txt,i)=>{
    const key = keys[i];
    for (const r of (txt ? parseCSV(txt) : [])){
      if (!r.website || !r.name) continue;
      const raw = (r.tags||"").split(/[;,]/).map(s=>s.trim()).filter(Boolean);
      const at = raw.find(t=>/^added \d{4}-\d{2}-\d{2}$/.test(t));
      const added = at ? at.slice(6) : null;
      const tags = raw.filter(t=>t!==at && t!=="free").map(t=>t.toLowerCase());
      const k = normUrl(r.website);
      if (byUrl.has(k)){ const o = byUrl.get(k); if (added && !o.added) o.added = added; continue; }
      const cat = key===DAILY ? sectionFor(tags) : key;
      const tm = TYPE_MAP.find(([t]) => tags.includes(t));
      const type = tm ? tm[1] : "Resource";
      const desc = r.description || "";
      const lic = tags.some(t=>/proprietary/.test(t)) ? "closed"
        : (tags.includes("open-source") || tags.includes("open-hardware")) ? "oss"
        : CONTENT_TYPES.includes(type) ? "content" : "free";
      const web = !CONTENT_TYPES.includes(type) && (tags.some(t=>/^(browser|web|online|web-app|webapp)$/.test(t)) || /\b(in-browser|browser-based|web-based|in the browser|in your browser|runs in (?:a |the |any )?browser|web app)\b/i.test(desc));
      let id = slug(r.name); while (ids.has(id)) id += "-x"; ids.add(id);
      const x = { id, url:r.website, name:r.name, desc, tags, added, cat, type, lic, web,
        level: tags.includes("beginner") ? "Beginner" : null, order: order++,
        nameL: r.name.toLowerCase(), descL: desc.toLowerCase(), tagsL: tags.join(" | "), catL: CAT[cat].name.toLowerCase() };
      x.hay = `${x.nameL} ${x.descL} ${x.tagsL} ${x.catL} ${k}`;
      byUrl.set(k, x);
    }
  });
  DATA = [...byUrl.values()];
  DATA.forEach(x => BYID[x.id] = x);
  NEWEST = DATA.reduce((m,x)=>x.added && x.added>m ? x.added : m, "");
  const cut = NEWEST ? Date.parse(NEWEST) - 6*864e5 : Infinity;
  DATA.forEach(x => x.isNew = !!x.added && Date.parse(x.added) >= cut);
  const tc = {}; DATA.forEach(x=>x.tags.forEach(t=>{ if (!/proprietary|^open-source$|^tool$/.test(t)) tc[t]=(tc[t]||0)+1; }));
  TOPICS = [...new Set([...TOPIC_PHRASES, ...Object.keys(tc).filter(t=>tc[t]>=3).sort((a,b)=>tc[b]-tc[a])])];
}

// ---------- search ----------
function prep(q){
  let s = q.toLowerCase().replace(/op\s+amps?/g,"op-amp").replace(/circuit boards?/g,"pcb").replace(/printed circuit/g,"pcb")
    .replace(/[?!.,"']/g," ").trim();
  let words = s.split(/\s+/).filter(Boolean);
  let meaningful = words.filter(w => !STOP.has(w));
  if (!meaningful.length) meaningful = words;
  const groups = meaningful.map(w => {
    let base = SYN[w] ? w : (w.length>3 && w.endsWith("s") && SYN[w.slice(0,-1)]) ? w.slice(0,-1) : w;
    const terms = [w, ...(base!==w ? [base] : []), ...(SYN[base]||[])];
    return [...new Set(terms)].map(t => ({t, re: t.length<=3 ? new RegExp(`(^|[^a-z0-9])${reEsc(t)}([^a-z0-9]|$)`) : null, orig: t===w || t===base}));
  });
  return {groups, phrase: s, hl: [...new Set(groups.flat().filter(g=>g.t.length>=2 && (g.orig || g.t.length>=3)).map(g=>g.t))]};
}
const hit = (hay, g) => g.re ? g.re.test(hay) : hay.includes(g.t);
function score(x, P){
  let total = 0, matched = 0;
  for (const grp of P.groups){
    let best = 0;
    for (const g of grp){
      let s = 0;
      if (hit(x.nameL, g)) s = x.nameL.startsWith(g.t) ? 14 : 10;
      else if (x.tags.includes(g.t)) s = 7;
      else if (hit(x.tagsL, g)) s = 5;
      else if (hit(x.catL, g)) s = 3;
      else if (hit(x.descL, g)) s = 2;
      if (!g.orig) s *= .7;
      if (s > best) best = s;
    }
    if (best) { matched++; total += best; }
  }
  const need = Math.max(1, Math.ceil(P.groups.length * .5));
  if (matched < need) return 0;
  if (P.phrase.length > 2 && x.nameL.includes(P.phrase)) total += 25;
  return total * (matched / P.groups.length);
}
function hl(text, P){
  const s = String(text ?? "");
  if (!P || !P.hl.length) return esc(s);
  const re = new RegExp("(" + P.hl.sort((a,b)=>b.length-a.length).map(reEsc).join("|") + ")", "gi");
  return s.split(re).map((p,i)=> i%2 ? `<mark>${esc(p)}</mark>` : esc(p)).join("");
}

// ---------- shared renderers ----------
function labels(x, showCat){
  let h = `<span class="lbl">${esc(x.type)}</span>`;
  h += `<span class="lbl ${x.lic==="oss"?"oss":x.lic==="closed"?"closed":""}" title="${x.lic==="closed"?"Free to use, but the source code isn't open":""}">${LIC[x.lic]}</span>`;
  if (x.web) h += `<span class="lbl">Runs in browser</span>`;
  if (x.isNew) h += `<span class="lbl new" title="Added ${esc(x.added)}">New</span>`;
  if (showCat) h += `<a class="lbl cat-l" style="${catStyle(CAT[x.cat])}" href="#/c/${x.cat}">${esc(CAT[x.cat].name)}</a>`;
  return h;
}
const SKIP_TAGS = /proprietary|^open-source$|^tool$|^simulator$|^calculator$|^course$|^youtube$|^blog$|^book$|^pbl-project$|^ai-built-tool$|^library$|^reference$|^community$/;
const tagBtns = (x, n=4) => x.tags.filter(t=>!SKIP_TAGS.test(t)).slice(0,n).map(t=>`<button type="button" class="tag" data-tag="${esc(t)}">#${esc(t)}</button>`).join("");
function card(x){
  const c = CAT[x.cat];
  return `<article class="rcard">
    <div class="rc-top">${fav(x,"sm")}<div class="rc-title"><h3><a href="#/r/${x.id}" data-detail="${x.id}">${esc(x.name)}</a></h3><span class="host">${esc(host(x.url))}</span></div>
    <a class="ext" href="${esc(x.url)}" ${EXT(x.name)}>${icon("ext")}</a></div>
    <p class="rdesc">${esc(x.desc)}</p>
    <div class="labels">${labels(x,true)}</div>
    <div class="tags">${tagBtns(x)}</div></article>`;
}
function row(x, P, showCat){
  const c = CAT[x.cat];
  return `<li class="rrow">${fav(x,"sm")}<div class="body">
    <div class="head"><h3><a href="#/r/${x.id}" data-detail="${x.id}">${hl(x.name,P)}</a></h3><span class="host">${esc(host(x.url))}</span></div>
    <p class="rdesc">${hl(x.desc,P)}</p>
    <div class="labels">${labels(x,showCat)}</div>
    <div class="tags">${tagBtns(x)}</div></div>
    <div class="row-act"><a class="ext" href="${esc(x.url)}" ${EXT(x.name)}>${icon("ext")}</a><a class="dbtn" href="#/r/${x.id}" data-detail="${x.id}">Details</a></li>`;
}
function dayGroups(limitDays){
  const days = {}; DATA.filter(x=>x.added).forEach(x=>(days[x.added] ||= []).push(x));
  const dates = Object.keys(days).sort().reverse();
  return {days, dates: limitDays ? dates.slice(0,limitDays) : dates, total: dates.length};
}
function recentHTML(limitDays, perDay){
  const {days, dates} = dayGroups(limitDays);
  if (!dates.length) return `<p class="muted">Nothing added yet.</p>`;
  return `<div class="recent">${dates.map(d=>{
    const list = perDay ? days[d].slice(0,perDay) : days[d];
    return `<div class="rday"><div class="rday-h"><b>${fmtDate(d)}</b>${plural(days[d].length,"resource")} added</div><ul>${
      list.map(x=>`<li><a href="#/r/${x.id}" data-detail="${x.id}">${esc(x.name)}</a><span class="c" style="${catStyle(CAT[x.cat])}">${esc(CAT[x.cat].name)}</span><p>${esc(x.desc)}</p></li>`).join("")}${
      perDay && days[d].length>perDay ? `<li><a class="link-more" href="#/recent">+${days[d].length-perDay} more from this day</a></li>` : ""}</ul></div>`;
  }).join("")}</div>`;
}
const popularHTML = (label="Popular searches:") => `<div class="popular"><span>${label}</span>${POPULAR.map(p=>`<a class="chip" href="#/explore?q=${encodeURIComponent(p)}">${esc(p)}</a>`).join("")}</div>`;
function downloadHTML(h="h2"){
  return `<div class="dl"><div>
    <${h}>Take the whole list with you</${h}>
    <p>Download all ${DATA.length.toLocaleString("en-IN")} resources for offline browsing, research or your own projects. Columns: website, name, tags, description, category.</p>
    <ul><li>${icon("check")}All 11 categories in one file</li><li>${icon("check")}Updated as new resources are added</li><li>${icon("check")}CC0: use it however you like</li></ul>
  </div><div class="dl-actions">
    <a class="btn btn-primary" href="${REPO_RAW}data/all_resources.csv" download>${icon("download")}<span>Download CSV<small>${DATA.length} entries</small></span></a>
    <a class="btn" href="${REPO_RAW}data/Electronics_Resources.xlsx" download>${icon("download")}<span>Download Excel (XLSX)<small>One sheet per category</small></span></a>
    <a class="btn" href="${REPO}" target="_blank" rel="noopener">${icon("github")}<span>View source on GitHub<small>Opens in a new tab</small></span></a>
    <a class="btn" href="${REPO}/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">${icon("plus")}<span>Contribute a resource<small>Opens in a new tab</small></span></a>
  </div></div>`;
}

// ---------- search combobox ----------
let sbCount = 0;
function searchBox({value="", placeholder, small=false, label="Search resources"}){
  const id = "sb" + (++sbCount);
  return `<div class="search ${small?"search-sm":""}" data-sb="${id}">
    <label class="vh" for="${id}">${esc(label)}</label>
    <div class="search-box">${icon("search")}
      <input id="${id}" type="search" value="${esc(value)}" placeholder="${esc(placeholder)}" autocomplete="off" spellcheck="false"
        role="combobox" aria-expanded="false" aria-controls="${id}-list" aria-autocomplete="list">
      <button type="button" class="search-clear" aria-label="Clear search" ${value?"":"hidden"}>${icon("x")}</button>
      ${small?"":`<button type="button" class="btn btn-primary sb-go">Search</button>`}
    </div>
    <ul class="suggest" id="${id}-list" role="listbox" aria-label="Suggestions" hidden></ul></div>`;
}
function suggestions(q){
  const ql = q.toLowerCase().trim(); if (ql.length < 2) return [];
  const topics = TOPICS.filter(t => t.includes(ql) && t !== ql).sort((a,b)=>(b.startsWith(ql)-a.startsWith(ql))||a.length-b.length).slice(0,5);
  const names = DATA.filter(x => x.nameL.includes(ql)).sort((a,b)=>(b.nameL.startsWith(ql)-a.nameL.startsWith(ql))||a.name.length-b.name.length).slice(0,5);
  return [{kind:"search", label:q.trim()}, ...topics.map(t=>({kind:"topic",label:t})), ...names.map(x=>({kind:"res",label:x.name,id:x.id,cat:CAT[x.cat].name}))];
}
function bindSearch(root, {onSubmit, onInput}){
  const input = $("input", root), list = $(".suggest", root), clear = $(".search-clear", root), go = $(".sb-go", root);
  let items = [], active = -1;
  const close = () => { list.hidden = true; input.setAttribute("aria-expanded","false"); input.removeAttribute("aria-activedescendant"); active = -1; };
  const choose = it => {
    close();
    if (!it) return onSubmit(input.value.trim());
    if (it.kind==="res") return void (location.hash = "#/r/" + it.id);
    input.value = it.label; clear.hidden = !input.value; onSubmit(it.label);
  };
  const paint = () => {
    items = suggestions(input.value);
    if (!items.length){ close(); return; }
    let h = "", i = 0;
    for (const it of items){
      if (it.kind==="topic" && (i===1)) h += `<li class="s-head" role="presentation">Topics</li>`;
      if (it.kind==="res" && (i===0 || items[i-1].kind!=="res")) h += `<li class="s-head" role="presentation">Resources</li>`;
      const lid = `${input.id}-o${i}`;
      h += `<li id="${lid}" role="option" data-i="${i}" aria-selected="false">${icon(it.kind==="res"?"arrow":"search")}<span>${it.kind==="search"?`Search for “${esc(it.label)}”`:esc(it.label)}</span>${it.kind==="res"?`<span class="s-kind">${esc(it.cat)}</span>`:""}</li>`;
      i++;
    }
    list.innerHTML = h; list.hidden = false; input.setAttribute("aria-expanded","true"); active = -1;
  };
  const setActive = n => {
    const opts = $$("[role=option]", list); if (!opts.length) return;
    active = (n + opts.length) % opts.length;
    opts.forEach((o,i)=>o.setAttribute("aria-selected", i===active));
    input.setAttribute("aria-activedescendant", opts[active].id); opts[active].scrollIntoView({block:"nearest"});
  };
  const live = onInput ? debounce(v => onInput(v), 140) : null;
  input.addEventListener("input", () => { clear.hidden = !input.value; paint(); live && live(input.value.trim()); });
  input.addEventListener("keydown", e => {
    if (e.key==="ArrowDown"){ e.preventDefault(); if (list.hidden) paint(); setActive(active+1); }
    else if (e.key==="ArrowUp"){ e.preventDefault(); setActive(active-1); }
    else if (e.key==="Enter"){ e.preventDefault(); choose(active>=0 ? items[active] : null); }
    else if (e.key==="Escape"){ if (!list.hidden) close(); else if (input.value){ input.value=""; clear.hidden=true; live && live(""); } }
  });
  input.addEventListener("blur", () => setTimeout(close, 150));
  list.addEventListener("mousedown", e => e.preventDefault());
  list.addEventListener("click", e => { const li = e.target.closest("[role=option]"); if (li) choose(items[+li.dataset.i]); });
  clear.addEventListener("click", () => { input.value=""; clear.hidden=true; close(); input.focus(); onInput ? onInput("") : null; });
  go && go.addEventListener("click", () => choose(null));
  return input;
}

// ---------- views ----------
const view = () => $("#view");
function setTitle(t){ document.title = t ? `${t} · awesome-free-electronics` : "awesome-free-electronics: discover the best free electronics resources"; }

function viewHome(){
  setTitle("");
  const picks = []; for (const p of PICKS){ const x = DATA.find(d => d.nameL.startsWith(p) && !picks.includes(d)); if (x) picks.push(x); if (picks.length===6) break; }
  const counts = {}; DATA.forEach(x=>counts[x.cat]=(counts[x.cat]||0)+1);
  view().innerHTML = `
  <section class="hero"><div class="wrap">
    <h1 tabindex="-1">Discover the best <em>free electronics</em> resources</h1>
    <p class="lede">Free tools, simulators, calculators, tutorials, courses and projects for learning electronics and building real circuits. From your first LED to PCB design, FPGA development, robotics and embedded systems.</p>
    <ul class="trust">
      <li>${icon("check")}<span><b>${DATA.length.toLocaleString("en-IN")}</b> curated resources</span></li>
      <li>${icon("check")}<span><b>11</b> categories</span></li>
      <li>${icon("check")}<span>Free to use, no paywalls</span></li>
      <li>${icon("check")}<span>Updated regularly${NEWEST?`, last on ${fmtDate(NEWEST)}`:""}</span></li>
    </ul>
    ${searchBox({placeholder:"What do you want to learn or build? Try Arduino, PCB design, or circuit simulation…", label:"What do you want to learn or build?"})}
    ${popularHTML()}
  </div></section>

  <section class="section" aria-labelledby="goals-h"><div class="wrap">
    <div class="sec-h"><div><h2 id="goals-h">Start with your goal</h2><p>No need to know the jargon. Pick what you want to do.</p></div></div>
    <div class="goals">${GOALS.map(g=>{ const n = DATA.filter(g.test).length;
      return `<a class="goal" href="#/explore?goal=${g.key}" style="--h:${g.h};--s:65%">${ico(g.icon,g.h,"",65)}<div><h3>${esc(g.title)}</h3><p>${esc(g.text)}</p><span class="count mono">${n} resources</span></div></a>`; }).join("")}</div>
  </div></section>

  <section class="section" aria-labelledby="cat-h"><div class="wrap">
    <div class="sec-h"><div><h2 id="cat-h">Browse by category</h2><p>The full collection, organised the way engineers think about it.</p></div><a class="link-more" href="#/categories">All categories ${icon("arrow")}</a></div>
    <div class="cats">${CATS.map(c=>`<a class="cat" href="#/c/${c.key}" style="${catStyle(c)}">${cico(c)}<h3>${esc(c.name)}</h3><span class="count mono">${counts[c.key]||0} resources</span></a>`).join("")}</div>
  </div></section>

  ${picks.length ? `<section class="section" aria-labelledby="picks-h"><div class="wrap">
    <div class="sec-h"><div><h2 id="picks-h">Good places to start</h2><p>Editor's picks of widely used, well-maintained projects. A starting point, not a ranking.</p></div><a class="link-more" href="#/explore">Explore all ${icon("arrow")}</a></div>
    <div class="rgrid">${picks.map(card).join("")}</div>
  </div></section>` : ""}

  <section class="section" aria-labelledby="recent-h"><div class="wrap">
    <div class="sec-h"><div><h2 id="recent-h">Recently added</h2><p>New finds land here most days.</p></div><a class="link-more" href="#/recent">View all ${icon("arrow")}</a></div>
    ${recentHTML(2, 4)}
  </div></section>

  <section class="section" id="download" aria-label="Download the collection"><div class="wrap">${downloadHTML()}</div></section>`;
  bindSearch($(".hero .search"), {onSubmit: q => { location.hash = "#/explore" + (q ? "?q=" + encodeURIComponent(q) : ""); }});
}

function viewCategories(){
  setTitle("Categories");
  const counts = {}; DATA.forEach(x=>counts[x.cat]=(counts[x.cat]||0)+1);
  view().innerHTML = `<div class="wrap page-top">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">›</span><span aria-current="page">Categories</span></nav>
    <div class="page-head"><div><h1 tabindex="-1">All categories</h1><p>Eleven categories covering ${DATA.length.toLocaleString("en-IN")} free resources. Not sure where to look? <a href="#/">Start with your goal</a> instead.</p></div></div>
    <div class="cats cats-lg">${CATS.map(c=>`<a class="cat" href="#/c/${c.key}" style="${catStyle(c)}">${cico(c)}<h3>${esc(c.name)}</h3><p>${esc(c.desc)}</p><span class="count mono">${counts[c.key]||0} resources</span></a>`).join("")}</div>
  </div>`;
}

function viewRecent(){
  setTitle("Recently added");
  const {total} = dayGroups();
  view().innerHTML = `<div class="wrap page-top">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">›</span><span aria-current="page">Recently added</span></nav>
    <div class="page-head"><div><h1 tabindex="-1">Recently added</h1><p>Every resource added since daily updates began, newest first, across ${plural(total,"day")}. The full change log is on <a href="${REPO}/commits/main" target="_blank" rel="noopener">GitHub<span class="vh"> (opens in a new tab)</span></a>.</p></div></div>
    ${recentHTML(0,0)}
  </div>`;
}

function viewDownload(){
  setTitle("Download data");
  view().innerHTML = `<div class="wrap page-top">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">›</span><span aria-current="page">Download data</span></nav>
    <div class="page-head"><div><h1 tabindex="-1">Download the collection</h1><p>The directory is plain data, so it's yours to filter in a spreadsheet, import into a notebook or build on.</p></div></div>
    ${downloadHTML("h2")}
  </div>`;
}

function relatedOf(x){
  return DATA.filter(o => o!==x && o.cat===x.cat).map(o => [o, o.tags.filter(t=>x.tags.includes(t) && !SKIP_TAGS.test(t)).length]).filter(p=>p[1]>0)
    .sort((a,b)=>b[1]-a[1]).slice(0,4).map(p=>p[0]);
}
function detailBody(x, inDialog){
  const c = CAT[x.cat], gf = goodFor(x), rel = relatedOf(x), H = inDialog ? "h2" : "h1";
  return `<div class="d-head">${fav(x,"lg")}<div class="d-title"><${H} ${inDialog?'id="dlg-title"':'tabindex="-1"'}>${esc(x.name)}</${H}><a class="host" href="${esc(x.url)}" target="_blank" rel="noopener">${esc(host(x.url))}<span class="vh"> (opens in a new tab)</span></a>
      <div class="labels">${labels(x,true)}</div></div>
      <a class="btn btn-primary d-open" href="${esc(x.url)}" target="_blank" rel="noopener">Open website ${icon("ext")}<span class="vh"> (opens in a new tab)</span></a></div>
    <p class="d-desc">${esc(x.desc)}</p>
    ${gf.length ? `<h3 class="d-sub">Good for</h3><ul class="goodfor">${gf.map(t=>`<li>${icon("check")}${esc(t)}</li>`).join("")}</ul>` : ""}
    <h3 class="d-sub">At a glance</h3>
    <dl class="facts">
      <div><dt>Type</dt><dd>${esc(x.type)}</dd></div>
      <div><dt>Category</dt><dd><a href="#/c/${c.key}">${esc(c.name)}</a></dd></div>
      <div><dt>Licence</dt><dd>${LIC[x.lic]}</dd></div>
      <div><dt>Access</dt><dd>${x.web ? "Runs in the browser" : "See the project's site"}</dd></div>
      ${x.level ? `<div><dt>Level</dt><dd>${x.level}</dd></div>` : ""}
      ${x.added ? `<div><dt>Added</dt><dd>${fmtDate(x.added)}</dd></div>` : ""}
    </dl>
    <div class="tags">${x.tags.filter(t=>!/proprietary/.test(t)).map(t=>`<button type="button" class="tag" data-tag="${esc(t)}">#${esc(t)}</button>`).join("")}</div>
    ${rel.length ? `<h3 class="d-sub">Similar in ${esc(c.name)}</h3><ul class="mini">${rel.map(o=>`<li><a href="#/r/${o.id}" data-detail="${o.id}">${fav(o,"sm")}<span><b>${esc(o.name)}</b><span>${esc(o.desc)}</span></span></a></li>`).join("")}</ul>` : ""}
    <p class="d-note">From the curated list. Something wrong or out of date? <a href="${REPO}/issues/new?title=${encodeURIComponent("Fix: " + x.name)}" target="_blank" rel="noopener">Report it on GitHub<span class="vh"> (opens in a new tab)</span></a>.</p>`;
}
function viewDetail(id){
  const x = BYID[id];
  if (!x){ return viewNotFound(); }
  const c = CAT[x.cat];
  setTitle(x.name);
  view().innerHTML = `<div class="wrap page-top">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">›</span><a href="#/c/${c.key}">${esc(c.name)}</a><span aria-hidden="true">›</span><span aria-current="page">${esc(x.name)}</span></nav>
    <a class="back" href="#/c/${c.key}">${icon("back")} Back to ${esc(c.name)}</a>
    <article class="dcard detail-page" style="${catStyle(c)}">${detailBody(x,false)}</article></div>`;
}

// details card (dialog) opened from any list
let dlg;
function openDetail(id){
  const x = BYID[id]; if (!x) return;
  if (!dlg){
    dlg = document.createElement("dialog"); dlg.className = "dlg"; dlg.setAttribute("aria-labelledby","dlg-title");
    document.body.appendChild(dlg);
    dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
  }
  dlg.style.cssText = catStyle(CAT[x.cat]);
  dlg.innerHTML = `<div class="dlg-in"><div class="dlg-bar"><a class="dlg-full" href="#/r/${x.id}">Open as page</a><button type="button" class="icon-btn" data-dlg-close aria-label="Close details">${icon("x")}</button></div>${detailBody(x,true)}</div>`;
  $("[data-dlg-close]", dlg).onclick = () => dlg.close();
  if (!dlg.open) dlg.showModal();
  dlg.scrollTop = 0; $(".dlg-in", dlg).scrollTop = 0;
}

function viewNotFound(){
  setTitle("Not found");
  view().innerHTML = `<div class="wrap page-top"><div class="empty" style="margin-top:40px"><h1 tabindex="-1" style="font-size:22px">That page isn't here</h1><p>It may have been renamed. Try searching instead.</p><a class="btn btn-primary" href="#/explore">Explore resources</a></div></div>`;
}

// ---------- listing (explore + category) ----------
const FACETS = [
  {key:"type", label:"Resource type", get:x=>x.type, multi:true},
  {key:"lic", label:"Licence", get:x=>x.lic, names:LIC, multi:true},
  {key:"web", label:"Access", get:x=>x.web?"browser":null, names:{browser:"Runs in the browser"}},
  {key:"level", label:"Level", get:x=>x.level, names:{Beginner:"Beginner-friendly"}},
  {key:"cat", label:"Category", get:x=>x.cat, names:Object.fromEntries(CATS.map(c=>[c.key,c.name])), multi:true, exploreOnly:true, advanced:true},
];
const PAGE = 24;

function viewListing(catKey, params){
  const c = catKey ? CAT[catKey] : null;
  if (catKey && !c) return viewNotFound();
  const hashBase = c ? `#/c/${c.key}` : "#/explore";
  const S = { q: params.get("q")||"", tag: params.get("tag")||"", goal: GOAL[params.get("goal")] ? params.get("goal") : "", sort: params.get("sort")||"", shown: PAGE, sel:{} };
  FACETS.forEach(f => { const v = params.get(f.key); S.sel[f.key] = v ? new Set(v.split(",")) : new Set(); });
  const scope = c ? DATA.filter(x=>x.cat===c.key) : DATA;
  const facets = FACETS.filter(f => !(c && f.exploreOnly));
  const g = S.goal ? GOAL[S.goal] : null;
  const title = c ? c.name : g ? g.title : "Explore resources";
  setTitle(title);
  const topicChips = c ? (() => { const tc={}; scope.forEach(x=>x.tags.forEach(t=>{ if(!SKIP_TAGS.test(t) && t!==c.key) tc[t]=(tc[t]||0)+1; }));
    return Object.keys(tc).filter(t=>tc[t]>=3).sort((a,b)=>tc[b]-tc[a]).slice(0,10); })() : [];

  view().innerHTML = `<div class="wrap page-top">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a><span aria-hidden="true">›</span>${c?`<a href="#/categories">Categories</a><span aria-hidden="true">›</span>`:""}<span aria-current="page">${esc(title)}</span></nav>
    <div class="page-head ${c?"tinted":""}" ${c?`style="${catStyle(c)}"`:""}>${c?cico(c):g?ico(g.icon,g.h):""}<div><h1 tabindex="-1">${esc(title)}</h1>
      <p>${c ? esc(c.desc) + ` <span class="mono muted">${scope.length} resources</span>` : g ? esc(g.text) : "Search and filter the whole collection. Plain-English questions work too, like “test a circuit online” or “calculate a resistor for an LED”."}</p></div></div>
    ${topicChips.length ? `<div class="topics" aria-label="Popular topics in this category">${topicChips.map(t=>`<button type="button" class="chip" data-tag="${esc(t)}">${esc(t)}</button>`).join("")}</div>` : ""}
    <div class="listing">
      <aside class="filters" id="filters" aria-label="Filters">
        <div class="drawer-head"><h2>Filters</h2><button type="button" class="icon-btn" data-close aria-label="Close filters">${icon("x")}</button></div>
        <h2>Filters</h2>
        <div id="fgroups"></div>
        <div class="drawer-foot"><button type="button" class="btn btn-primary" data-close>Show results</button></div>
      </aside>
      <div>
        <div class="toolbar">
          ${searchBox({value:S.q, small:true, placeholder: c ? `Search within ${c.name}…` : "Search tools, topics or questions…", label: c ? `Search within ${c.name}` : "Search all resources"})}
          <button type="button" class="btn filter-btn" id="filterBtn" aria-controls="filters" aria-expanded="false">${icon("filter")} Filters <span id="fcount"></span></button>
          <label class="sort">Sort <select id="sort" aria-label="Sort results"></select></label>
        </div>
        <div class="resline" id="resline" aria-live="polite"></div>
        <div id="results"></div>
        <div class="more-wrap" id="more"></div>
      </div>
    </div></div>`;

  const root = view().firstElementChild;
  const input = bindSearch($(".toolbar .search"), {
    onSubmit: q => { S.q = q; S.shown = PAGE; update(); },
    onInput: q => { S.q = q; S.shown = PAGE; update(); }
  });
  if (params.get("focus")) setTimeout(() => input.focus(), 50);

  const fEl = $("#filters"), fBtn = $("#filterBtn");
  let scrim = null;
  const openDrawer = open => {
    fEl.classList.toggle("open", open); fBtn.setAttribute("aria-expanded", open);
    if (open){ scrim = document.createElement("div"); scrim.className="scrim"; scrim.onclick = () => openDrawer(false); document.body.appendChild(scrim); $("[data-close]", fEl).focus(); }
    else if (scrim){ scrim.remove(); scrim = null; }
  };
  fBtn.onclick = () => openDrawer(true);
  $$("[data-close]", fEl).forEach(b => b.onclick = () => { openDrawer(false); fBtn.focus(); });
  fEl.addEventListener("keydown", e => { if (e.key==="Escape" && fEl.classList.contains("open")){ openDrawer(false); fBtn.focus(); } });
  let showAdvanced = false;
  fEl.addEventListener("change", e => {
    const i = e.target; if (!i.dataset.f) return;
    const set = S.sel[i.dataset.f]; const f = FACETS.find(f=>f.key===i.dataset.f);
    if (!f.multi) set.clear();
    i.checked ? set.add(i.value) : set.delete(i.value);
    S.shown = PAGE; update();
  });
  fEl.addEventListener("click", e => { if (e.target.closest(".fmore")){ showAdvanced = !showAdvanced; paintFacets(lastBase); } });
  $("#sort").onchange = e => { S.sort = e.target.value; S.shown = PAGE; update(); };
  root.addEventListener("click", e => {
    const t = e.target.closest("[data-tag]"); if (t){ S.tag = t.dataset.tag; S.shown = PAGE; update(); $("#resline").scrollIntoView({block:"center"}); return; }
    const a = e.target.closest("[data-rm]"); if (a){ const k = a.dataset.rm, v = a.dataset.v;
      if (k==="q"){ S.q=""; input.value=""; $(".search-clear", input.parentNode).hidden = true; }
      else if (k==="tag") S.tag=""; else if (k==="goal") { location.hash = "#/explore"; return; }
      else if (k==="all"){ S.q=""; S.tag=""; input.value=""; $(".search-clear", input.parentNode).hidden = true; FACETS.forEach(f=>S.sel[f.key].clear()); }
      else S.sel[k].delete(v);
      S.shown = PAGE; update(); }
    if (e.target.closest("#moreBtn")){ S.shown += PAGE; update(true); }
  });

  let lastBase = [];
  function passes(x, except){
    for (const f of facets){ if (f.key===except) continue; const set = S.sel[f.key]; if (set.size && !set.has(String(f.get(x)))) return false; }
    return true;
  }
  function paintFacets(baseList){
    let h = "";
    for (const f of facets){
      if (f.advanced && !showAdvanced && !S.sel[f.key].size) continue;
      const counts = {}; baseList.forEach(x=>{ if (passes(x,f.key)){ const v = f.get(x); if (v!=null) counts[v]=(counts[v]||0)+1; } });
      const allVals = [...new Set(scope.map(f.get).filter(v=>v!=null))];
      if (!allVals.length) continue;
      const vals = f.key==="cat" ? CATS.map(c=>c.key).filter(k=>allVals.includes(k)) : allVals.sort((a,b)=>(counts[b]||0)-(counts[a]||0));
      h += `<fieldset class="fgroup"><legend>${f.label}</legend>${vals.map(v=>{ const n = counts[v]||0, on = S.sel[f.key].has(String(v));
        return `<label class="fopt ${n||on?"":"zero"}"><input type="checkbox" data-f="${f.key}" value="${esc(v)}" ${on?"checked":""}><span>${esc(f.names?.[v]||v)}</span><span class="n mono"><span class="vh">, </span>${n}<span class="vh"> resources</span></span></label>`; }).join("")}</fieldset>`;
    }
    if (facets.some(f=>f.advanced)) h += `<button type="button" class="fmore">${showAdvanced ? "Fewer filters" : "More filters (category)"}</button>`;
    $("#fgroups").innerHTML = h;
  }
  function update(keepScroll){
    // base: scope + goal + tag + query
    let P = S.q ? prep(S.q) : null;
    let base = scope;
    if (g) base = base.filter(g.test);
    if (S.tag) base = base.filter(x=>x.tags.includes(S.tag));
    let scored = base.map(x => [x, P ? score(x,P) : 1]).filter(p=>p[1]>0);
    lastBase = scored.map(p=>p[0]);
    const scoreOf = new Map(scored);
    let list = lastBase.filter(x=>passes(x,null));
    // sort
    const sortOpts = [[ "", S.q ? "Relevance" : "Curated order" ], ["name","Name (A–Z)"], ["recent","Recently added"], ...(c ? [] : [["cat","Category"]])];
    if (!sortOpts.some(o=>o[0]===S.sort)) S.sort = "";
    $("#sort").innerHTML = sortOpts.map(([v,l])=>`<option value="${v}" ${v===S.sort?"selected":""}>${l}</option>`).join("");
    const catIdx = Object.fromEntries(CATS.map((c,i)=>[c.key,i]));
    const cmp = {
      "": S.q ? (a,b)=>scoreOf.get(b)-scoreOf.get(a)||a.name.length-b.name.length||a.order-b.order : (a,b)=>a.order-b.order,
      name: (a,b)=>a.name.localeCompare(b.name,"en",{sensitivity:"base"}),
      recent: (a,b)=>(b.added||"").localeCompare(a.added||"")||a.order-b.order,
      cat: (a,b)=>catIdx[a.cat]-catIdx[b.cat]||a.order-b.order,
    }[S.sort];
    list = [...list].sort(cmp);
    paintFacets(lastBase);
    // chips
    const chips = [];
    if (g) chips.push(["goal","",`Goal: ${g.title}`]);
    if (S.q) chips.push(["q","",`“${S.q}”`]);
    if (S.tag) chips.push(["tag","",`#${S.tag}`]);
    facets.forEach(f => S.sel[f.key].forEach(v => chips.push([f.key, v, f.names?.[v]||v])));
    const nf = facets.reduce((n,f)=>n+S.sel[f.key].size,0);
    $("#fcount").textContent = nf ? `(${nf})` : "";
    $("#resline").innerHTML = `<p class="rescount"><b>${list.length.toLocaleString("en-IN")}</b> ${list.length===1?"resource":"resources"}${chips.length?" for":""}</p>` +
      chips.map(([k,v,l])=>`<button type="button" class="achip" data-rm="${k}" data-v="${esc(v)}" aria-label="Remove ${esc(l)}">${esc(l)}${icon("x")}</button>`).join("") +
      (chips.length>1 ? `<button type="button" class="aclear" data-rm="all">Clear all</button>` : "");
    // results
    if (!list.length){
      $("#results").innerHTML = `<div class="empty"><h2>No matches${S.q?` for “${esc(S.q)}”`:""}</h2><p>Try fewer words, a broader term, or remove a filter. These usually help:</p>${popularHTML("Try:")}
        <p style="margin-top:16px">Still missing? <a href="${REPO}/issues/new?title=${encodeURIComponent("Suggest: " + (S.q||"a resource"))}" target="_blank" rel="noopener">Suggest a resource<span class="vh"> (opens in a new tab)</span></a></p></div>`;
      $("#more").innerHTML = "";
    } else {
      const showCat = !c;
      $("#results").innerHTML = `<ul class="rlist">${list.slice(0,S.shown).map(x=>row(x,P,showCat)).join("")}</ul>`;
      const left = list.length - S.shown;
      $("#more").innerHTML = left > 0 ? `<button type="button" class="btn" id="moreBtn">Show ${Math.min(PAGE,left)} more <span class="muted">(${left} left)</span></button>` : "";
    }
    // url
    const p = new URLSearchParams();
    if (S.goal) p.set("goal", S.goal); if (S.q) p.set("q", S.q); if (S.tag) p.set("tag", S.tag); if (S.sort) p.set("sort", S.sort);
    facets.forEach(f => { if (S.sel[f.key].size) p.set(f.key, [...S.sel[f.key]].join(",")); });
    const s = p.toString();
    history.replaceState(null, "", location.pathname + location.search + hashBase + (s ? "?" + s : ""));
  }
  update();
}

// ---------- router ----------
let first = true;
function route(){
  const h = location.hash.slice(1) || "/";
  const [path, qs] = h.split("?");
  const params = new URLSearchParams(qs || "");
  const parts = path.split("/").filter(Boolean);
  const top = parts[0] || "home";
  $("#nav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded","false");
  $$(".scrim").forEach(s=>s.remove());
  $$("#nav [data-nav]").forEach(a => a.toggleAttribute("aria-current", false));
  const navKey = top==="c" ? "categories" : top==="r" ? "" : top;
  const cur = $(`#nav [data-nav="${navKey}"]`); if (cur) cur.setAttribute("aria-current","page");
  if (top==="home") viewHome();
  else if (top==="explore") viewListing(null, params);
  else if (top==="categories") viewCategories();
  else if (top==="c") viewListing(parts[1], params);
  else if (top==="r") viewDetail(decodeURIComponent(parts[1]||""));
  else if (top==="recent") viewRecent();
  else if (top==="download") viewDownload();
  else viewNotFound();
  if (!first){ window.scrollTo(0,0); if (!params.get("focus")){ const h1 = $("#view h1"); h1 && h1.focus({preventScroll:true}); } }
  first = false;
}

// home/detail: tag click goes to explore
document.addEventListener("click", e => {
  const d = e.target.closest("a[data-detail]");
  if (d && !(e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1)){ e.preventDefault(); openDetail(d.dataset.detail); return; }
  const t = e.target.closest("[data-tag]");
  const inDlg = dlg && dlg.contains(t);
  if (t && (inDlg || !$(".listing"))){ if (inDlg) dlg.close(); location.hash = "#/explore?tag=" + encodeURIComponent(t.dataset.tag); }
});
window.addEventListener("hashchange", () => { if (dlg && dlg.open) dlg.close(); });

// theme
function applyThemeBtn(){
  const dark = document.documentElement.dataset.theme !== "light";
  const b = $("#themeBtn"); b.innerHTML = icon(dark ? "sun" : "moon");
  b.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  $('meta[name="theme-color"]').setAttribute("content", dark ? "#0f1115" : "#f6f7f9");
}
$("#themeBtn").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next; try { localStorage.setItem("afe-theme", next); } catch {}
  applyThemeBtn();
});
$("#menuBtn").addEventListener("click", () => {
  const open = !$("#nav").classList.contains("open");
  $("#nav").classList.toggle("open", open); $("#menuBtn").setAttribute("aria-expanded", open);
});
document.addEventListener("keydown", e => {
  if (e.key==="/" && !/input|textarea|select/i.test(document.activeElement.tagName)){ const i = $("#view .search input"); if (i){ e.preventDefault(); i.focus(); } }
  if (e.key==="Escape" && $("#nav").classList.contains("open")){ $("#nav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded","false"); $("#menuBtn").focus(); }
});
applyThemeBtn();

load().then(() => { window.addEventListener("hashchange", route); route(); })
  .catch(err => { view().innerHTML = `<div class="wrap loading">Couldn't load the resource list. <a href="data/all_resources.csv">Download the CSV</a> instead.</div>`; console.error(err); });
})();
