// Awesome Free Electronics: loads every CSV in data/categories and renders a searchable library.
// To add resources, add rows to a CSV (website,name,tags,description). New finds go in daily_additions.csv
// with a tag like "added 2026-10-27" so they show in "Latest finds".
const CATS=[
 ["daily_additions","Latest Additions"],
 ["basics_analog","Basics & Analog"],
 ["digital_fpga_vlsi","Digital, FPGA & VLSI"],
 ["pcb","PCB Design"],
 ["embedded_iot","Embedded & IoT"],
 ["robotics_plc","Robotics, PLC & Drones"],
 ["rf_dsp","RF, SDR & DSP"],
 ["power_energy_test","Power, Solar & Test"],
 ["other_fields","Semis, Audio, Bio, TinyML"],
 ["calculators","Calculators"],
 ["community_assets","Community & Free Assets"],
 ["community_ai","Channels, Blogs & AI Tools"],
];
const NEW_DAYS=7, PAGE=60;
const $=s=>document.querySelector(s);
let all=[],state={q:"",cat:"",tag:"",newOnly:false,shown:PAGE};

function parseCSV(t){const rows=[];let r=[],f="",q=false;
 for(let i=0;i<t.length;i++){const c=t[i];
  if(q){if(c=='"'){if(t[i+1]=='"'){f+='"';i++}else q=false}else f+=c}
  else if(c=='"')q=true;else if(c==','){r.push(f);f=""}
  else if(c=='\n'||c=='\r'){if(c=='\r'&&t[i+1]=='\n')i++;r.push(f);rows.push(r);r=[];f=""}
  else f+=c}
 if(f||r.length){r.push(f);rows.push(r)}
 const h=rows.shift().map(x=>x.trim().toLowerCase());
 return rows.filter(x=>x.length>1).map(x=>Object.fromEntries(h.map((k,i)=>[k,(x[i]||"").trim()])))}
const norm=u=>u.toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\/$/,"");
const host=u=>{try{return new URL(u).hostname.replace(/^www\./,"")}catch{return u}};
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

async function load(){
 const res=await Promise.all(CATS.map(([k])=>fetch(`data/categories/${k}.csv`).then(r=>r.ok?r.text():"").catch(()=>"")));
 const seen=new Map();
 res.forEach((txt,i)=>{if(!txt)return;
  for(const r of parseCSV(txt)){if(!r.website)continue;const key=norm(r.website);
   const tags=r.tags.split(/[;,]/).map(s=>s.trim()).filter(Boolean);
   const addedTag=tags.find(t=>/^added \d{4}-\d{2}-\d{2}$/.test(t));
   const added=addedTag?addedTag.slice(6):null;
   const clean=tags.filter(t=>t!==addedTag);
   if(seen.has(key)){const o=seen.get(key);if(added&&!o.added)o.added=added;continue}
   const item={url:r.website,name:r.name,desc:r.description,tags:clean,added,cat:CATS[i][1],catKey:CATS[i][0]};
   if(i===0)item.cat=guessCat(clean);
   seen.set(key,item)}});
 all=[...seen.values()];
 const cutoff=Date.now()-NEW_DAYS*864e5;
 all.forEach(x=>x.isNew=x.added&&Date.parse(x.added)>=cutoff);
 initUI();render();renderNew()}

function guessCat(tags){const t=tags.join(" ");
 const m=[["fpga|vlsi|digital|verilog","Digital, FPGA & VLSI"],["pcb|kicad","PCB Design"],["embedded|iot|arduino|esp32|microcontroller","Embedded & IoT"],["robot|plc|drone|ros","Robotics, PLC & Drones"],["rf|sdr|dsp|antenna","RF, SDR & DSP"],["power|solar|battery|test","Power, Solar & Test"],["calculator","Calculators"],["analog|basics|circuit","Basics & Analog"]];
 for(const [re,c] of m)if(new RegExp(re).test(t))return c;return "Channels, Blogs & AI Tools"}

function initUI(){
 const counts={};all.forEach(x=>counts[x.cat]=(counts[x.cat]||0)+1);
 const cats=CATS.slice(1).map(c=>c[1]).filter(c=>counts[c]);
 $("#statTotal").textContent=all.length;$("#statCats").textContent=cats.length;
 $("#statNew").textContent=all.filter(x=>x.isNew).length;
 const chips=$("#chips");
 const mk=(label,val,n)=>{const b=document.createElement("button");b.className="chip";b.dataset.v=val;b.innerHTML=`${esc(label)}<small>${n}</small>`;b.onclick=()=>{state.cat=val;state.newOnly=false;state.shown=PAGE;render()};return b};
 chips.append(mk("All","",all.length));cats.forEach(c=>chips.append(mk(c,c,counts[c])));
 const tc={};all.forEach(x=>x.tags.forEach(t=>tc[t]=(tc[t]||0)+1));
 Object.entries(tc).filter(([,n])=>n>=4).sort((a,b)=>b[1]-a[1]).forEach(([t,n])=>{const o=new Option(`${t} (${n})`,t);$("#tagSel").add(o)});
 $("#tagSel").onchange=e=>{state.tag=e.target.value;state.shown=PAGE;render()};
 let to;$("#q").oninput=e=>{clearTimeout(to);to=setTimeout(()=>{state.q=e.target.value.trim().toLowerCase();state.shown=PAGE;render()},120)};
 $("#more").onclick=()=>{state.shown+=PAGE;render()};
 $("#showAllNew").onclick=()=>{state.newOnly=true;state.cat="";state.shown=PAGE;render();$("#grid").scrollIntoView()};
 $("#grid").addEventListener("click",tagClick);$("#newRow").addEventListener("click",tagClick)}
function tagClick(e){const t=e.target.closest(".tag");if(!t)return;e.preventDefault();state.tag=t.dataset.t;$("#tagSel").value=state.tag;state.shown=PAGE;render()}

function card(x){
 const tags=x.tags.slice(0,5).map(t=>`<span class="tag${/proprietary/.test(t)?" prop":""}" data-t="${esc(t)}">${esc(t)}</span>`).join("");
 return `<a class="card" href="${esc(x.url)}" target="_blank" rel="noopener">
  ${x.isNew?'<span class="badge">NEW</span>':""}
  <div class="top"><img loading="lazy" alt="" src="https://icons.duckduckgo.com/ip3/${esc(host(x.url))}.ico" onerror="this.style.visibility='hidden'">
  <div style="min-width:0"><h3>${esc(x.name)}</h3><div class="dom">${esc(host(x.url))}</div></div></div>
  <span class="cat">${esc(x.cat)}</span><p>${esc(x.desc)}</p><div class="tags">${tags}</div></a>`}

function render(){
 document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("on",!state.newOnly&&c.dataset.v===state.cat));
 const q=state.q;
 let list=all.filter(x=>(!state.cat||x.cat===state.cat)&&(!state.tag||x.tags.includes(state.tag))&&(!state.newOnly||x.isNew)
  &&(!q||(x.name+" "+x.desc+" "+x.tags.join(" ")+" "+x.url).toLowerCase().includes(q)));
 if(state.newOnly||!state.cat)list.sort((a,b)=>(b.added||"").localeCompare(a.added||""));
 $("#count").textContent=`${list.length} resource${list.length==1?"":"s"}${state.newOnly?" added in the last "+NEW_DAYS+" days":""}${state.tag?" · tag: "+state.tag:""}`;
 $("#grid").innerHTML=list.slice(0,state.shown).map(card).join("")||'<div class="empty">Nothing matches yet. Try another word.</div>';
 $("#more").hidden=list.length<=state.shown}

function renderNew(){const n=all.filter(x=>x.added).sort((a,b)=>b.added.localeCompare(a.added)).slice(0,12);
 if(!n.length)return;$("#new").hidden=false;$("#newRow").innerHTML=n.map(card).join("")}

load();
