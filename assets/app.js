// awesome-free-electronics: reads every CSV in data/categories and renders the index.
// Add a resource by adding a row (website,name,tags,description) to a CSV. Daily finds go in
// daily_additions.csv with a tag "added YYYY-MM-DD"; they are filed into a section by their tags
// and listed under "Recently added".
(() => {
const REPO = "https://github.com/manepalliteja37/awesome-free-electronics";
// key, title, resistor colour (colour code 0-9, then gold)
const SECTIONS = [
  ["basics_analog",     "Basics & Analog",               "#1b1b1b"],
  ["digital_fpga_vlsi", "Digital, FPGA & VLSI",          "#7b4a2a"],
  ["pcb",               "PCB Design",                    "#c0392b"],
  ["embedded_iot",      "Embedded & IoT",                "#e07b1a"],
  ["robotics_plc",      "Robotics, PLC & Drones",        "#e3b505"],
  ["rf_dsp",            "RF, SDR & DSP",                 "#2e8b57"],
  ["power_energy_test", "Power, Solar & Test",           "#2763c4"],
  ["other_fields",      "Semiconductors, Audio, Bio & TinyML", "#7a4fc0"],
  ["calculators",       "Calculators & Reference",       "#8a8a8a"],
  ["community_assets",  "Community Projects & Free Assets", "#f2f2f2"],
  ["community_ai",      "Channels, Courses, Blogs & AI Tools", "#b8902f"],
];
const DAILY = "daily_additions";
const TYPES = ["tool","simulator","calculator","course","youtube","blog","book","pbl-project","ai-built-tool","library","reference","community","3d-models"];
const TYPE_LABEL = {"pbl-project":"project","ai-built-tool":"ai-built","3d-models":"3d-models","youtube":"youtube"};
const NEW_DAYS = 7, LOG_DAYS = 3;

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm = u => u.toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\/+$/,"");
const host = u => { try { const x = new URL(u); return (x.hostname.replace(/^www\./,"") + x.pathname).replace(/\/+$/,""); } catch { return u; } };
const fmtDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});

function parseCSV(t){
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
    [/rf |sdr|dsp|antenna|radio/, "rf_dsp"],
    [/power|solar|battery|ev |test-measurement|oscilloscope/, "power_energy_test"],
    [/robot|plc|drone|ros|motor/, "robotics_plc"],
    [/embedded|iot|arduino|esp32|stm32|rtos|firmware|microcontroller/, "embedded_iot"],
    [/analog|basics|spice|circuit|op-amp/, "basics_analog"],
    [/semiconductor|audio|biomedical|tinyml|automotive|optoelectronics|mems/, "other_fields"],
    [/3d-models|community|assets/, "community_assets"],
  ];
  for (const [re,k] of rules) if (re.test(t)) return k;
  return "community_ai";
}

let all = [];
const state = { q:"", type:"", tag:"", oss:false };

async function load(){
  const keys = [DAILY, ...SECTIONS.map(s=>s[0])];
  const texts = await Promise.all(keys.map(k => fetch(`data/categories/${k}.csv`).then(r=>r.ok?r.text():"").catch(()=>"")));
  const byUrl = new Map(), daily = [];
  texts.forEach((txt,i)=>{
    if (!txt) return;
    const key = keys[i];
    for (const r of parseCSV(txt)){
      if (!r.website) continue;
      const tags = r.tags.split(/[;,]/).map(s=>s.trim()).filter(Boolean);
      const at = tags.find(t=>/^added \d{4}-\d{2}-\d{2}$/.test(t));
      const added = at ? at.slice(6) : null;
      const clean = tags.filter(t=>t!==at && t!=="free");
      const k = norm(r.website);
      if (byUrl.has(k)){ const o = byUrl.get(k); if (added && !o.added) o.added = added; continue; }
      const sec = key===DAILY ? sectionFor(clean) : key;
      const item = { url:r.website, name:r.name, desc:r.description, tags:clean, added, sec,
        prop: clean.some(t=>/proprietary/.test(t)),
        hay: (r.name+" "+r.description+" "+clean.join(" ")+" "+r.website).toLowerCase() };
      byUrl.set(k,item);
    }
  });
  all = [...byUrl.values()];
  const newest = all.reduce((m,x)=>x.added && x.added>m ? x.added : m, "");
  const cutoff = newest ? Date.parse(newest) - (NEW_DAYS-1)*864e5 : 0;
  all.forEach(x => x.isNew = !!x.added && Date.parse(x.added) >= cutoff);
  $("#mTotal").textContent = all.length.toLocaleString("en-IN");
  $("#mSections").textContent = SECTIONS.length;
  $("#mUpdated").textContent = newest ? fmtDate(newest) : "–";
  readURL(); buildSide(); buildLog(); bind(); render();
}

function readURL(){
  const p = new URLSearchParams(location.search);
  state.q = p.get("q")||""; state.type = p.get("type")||""; state.tag = p.get("tag")||""; state.oss = p.get("oss")==="1";
  $("#q").value = state.q; $("#ossOnly").checked = state.oss;
}
function writeURL(){
  const p = new URLSearchParams();
  if (state.q) p.set("q",state.q); if (state.type) p.set("type",state.type);
  if (state.tag) p.set("tag",state.tag); if (state.oss) p.set("oss","1");
  const s = p.toString();
  history.replaceState(null,"",location.pathname + (s?"?"+s:"") + location.hash);
}

function buildSide(){
  const counts = {}; all.forEach(x=>counts[x.sec]=(counts[x.sec]||0)+1);
  $("#toc").innerHTML = SECTIONS.map(([k,t,c],i)=>
    `<li><a href="#s-${k}" data-sec="${k}"><span class="no">${String(i+1).padStart(2,"0")}</span><span class="band" style="background:${c}"></span><span>${esc(t)}</span><span class="n">${counts[k]||0}</span></a></li>`).join("");
  const tc = {}; all.forEach(x=>x.tags.forEach(t=>{ if (TYPES.includes(t)) tc[t]=(tc[t]||0)+1; }));
  $("#types").innerHTML = TYPES.filter(t=>tc[t]>=3).sort((a,b)=>tc[b]-tc[a]).map(t=>
    `<button type="button" data-type="${t}" aria-pressed="false">${esc(TYPE_LABEL[t]||t)}<span class="c">${tc[t]}</span></button>`).join("");
  if (matchMedia("(max-width:900px)").matches) $("#filters").open = false;
}

function buildLog(){
  const days = {};
  all.filter(x=>x.added).forEach(x=>(days[x.added] ||= []).push(x));
  const dates = Object.keys(days).sort().reverse();
  if (!dates.length){ $("#changelog").remove(); return; }
  const secName = k => (SECTIONS.find(s=>s[0]===k)||[,""])[1];
  const dayHTML = d => `<div class="day"><div class="day-h"><b>${fmtDate(d)}</b>+${days[d].length} added</div><ul>${
    days[d].map(x=>`<li><a href="${esc(x.url)}" rel="noopener">${esc(x.name)}</a> <span>· ${esc(secName(x.sec))}</span></li>`).join("")}</ul></div>`;
  const log = $("#log");
  log.innerHTML = dates.slice(0,LOG_DAYS).map(dayHTML).join("");
  if (dates.length > LOG_DAYS){
    const b = document.createElement("button"); b.className="more-log"; b.type="button";
    b.textContent = `Show ${dates.length-LOG_DAYS} earlier day${dates.length-LOG_DAYS>1?"s":""}`;
    b.onclick = () => { log.innerHTML = dates.map(dayHTML).join(""); };
    log.after(b);
  }
}

function bind(){
  let to;
  $("#q").addEventListener("input", e => { clearTimeout(to); to = setTimeout(()=>{ state.q = e.target.value.trim(); render(); }, 120); });
  $("#types").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; state.type = state.type===b.dataset.type ? "" : b.dataset.type; render(); });
  $("#ossOnly").addEventListener("change", e => { state.oss = e.target.checked; render(); });
  $("#results").addEventListener("click", e => { const b = e.target.closest("[data-tag]"); if (!b) return; state.tag = b.dataset.tag; render(); $("#main").scrollIntoView({block:"start"}); });
  $("#active").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return;
    const k = b.dataset.k; if (k==="all"){ state.q=""; state.type=""; state.tag=""; state.oss=false; $("#q").value=""; $("#ossOnly").checked=false; }
    else { state[k] = k==="oss" ? false : ""; if (k==="q") $("#q").value=""; if (k==="oss") $("#ossOnly").checked=false; }
    render(); });
  document.addEventListener("keydown", e => {
    if (e.key==="/" && !/input|textarea|select/i.test(document.activeElement.tagName)){ e.preventDefault(); $("#q").focus(); }
    if (e.key==="Escape" && document.activeElement===$("#q")){ $("#q").value=""; state.q=""; render(); }
  });
}

function hl(text, q){
  if (!q) return esc(text);
  const words = q.toLowerCase().split(/\s+/).filter(w=>w.length>1).map(w=>w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
  if (!words.length) return esc(text);
  return String(text).split(new RegExp("("+words.join("|")+")","gi")).map((part,i)=> i%2 ? `<mark>${esc(part)}</mark>` : esc(part)).join("");
}

function entry(x, q){
  const shown = x.tags.filter(t=>!/proprietary|^open-source$/.test(t)).slice(0,5);
  return `<li class="entry">
    <div class="e-head"><a class="e-name" href="${esc(x.url)}" rel="noopener">${hl(x.name,q)}</a><span class="e-host">${esc(host(x.url))}</span>${x.isNew?`<span class="flag new" title="Added ${esc(x.added)}">new</span>`:""}${x.prop?`<span class="flag prop" title="Free to use, but not open-source">closed-source</span>`:""}</div>
    <p class="e-desc">${hl(x.desc,q)}</p>
    <p class="e-tags">${shown.map(t=>`<button type="button" data-tag="${esc(t)}">#${esc(t)}</button>`).join("")}</p>
  </li>`;
}

function render(){
  writeURL();
  const words = state.q.toLowerCase().split(/\s+/).filter(Boolean);
  const list = all.filter(x =>
    (!state.type || x.tags.includes(state.type)) &&
    (!state.tag || x.tags.includes(state.tag)) &&
    (!state.oss || !x.prop) &&
    words.every(w => x.hay.includes(w)));
  const filtering = !!(state.q || state.type || state.tag || state.oss);

  document.querySelectorAll("#types button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.type===state.type));
  const chips = [];
  if (state.q) chips.push(["q",`“${state.q}”`]);
  if (state.type) chips.push(["type",`type: ${TYPE_LABEL[state.type]||state.type}`]);
  if (state.tag) chips.push(["tag",`#${state.tag}`]);
  if (state.oss) chips.push(["oss","open-source only"]);
  $("#active").innerHTML = chips.map(([k,l])=>`<button type="button" data-k="${k}" aria-label="Remove filter ${esc(l)}">${esc(l)} ×</button>`).join("") +
    (chips.length>1 ? `<button type="button" class="clear" data-k="all">Clear all</button>` : "");
  $("#count").textContent = filtering ? `${list.length} of ${all.length} entries` : `${all.length} entries`;
  const cl = $("#changelog"); if (cl) cl.hidden = filtering;

  const groups = {}; list.forEach(x=>(groups[x.sec] ||= []).push(x));
  $("#results").innerHTML = SECTIONS.map(([k,t,c],i)=>{
    const g = groups[k]; if (!g) return "";
    return `<section class="sec" id="s-${k}" aria-labelledby="h-${k}">
      <div class="sec-head"><h2 id="h-${k}"><span class="no">${String(i+1).padStart(2,"0")}</span><span class="band" style="background:${c}"></span>${esc(t)}</h2>
      <span class="n">${g.length}</span><a class="sec-edit" href="${REPO}/blob/main/data/categories/${k}.csv" rel="noopener">Edit on GitHub ↗</a></div>
      <ul class="list">${g.map(x=>entry(x,state.q)).join("")}</ul></section>`;
  }).join("");
  $("#empty").hidden = list.length > 0;
  document.querySelectorAll("#toc li").forEach(li=>{ const k = li.firstChild.dataset.sec; li.hidden = filtering && !groups[k]; li.querySelector(".n").textContent = (groups[k]||[]).length; });
  observe();
}

let io;
function observe(){
  if (io) io.disconnect();
  const links = new Map([...document.querySelectorAll("#toc a")].map(a=>[a.dataset.sec,a]));
  io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting){
      links.forEach(a=>a.removeAttribute("aria-current"));
      const a = links.get(e.target.id.slice(2)); if (a){ a.setAttribute("aria-current","true"); if (matchMedia("(max-width:900px)").matches) a.scrollIntoView({inline:"center",block:"nearest"}); }
    }});
  }, { rootMargin:"-120px 0px -70% 0px" });
  document.querySelectorAll(".sec").forEach(s=>io.observe(s));
}

load();
})();
