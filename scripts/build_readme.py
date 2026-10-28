"""Regenerate README.md and data/all_resources.csv from data/categories/*.csv.
Run from the repo root:  python scripts/build_readme.py"""
import csv, glob, os, re
from datetime import date
CATS = [
 ("basics_analog","Basics & Analog Electronics","🔌"),
 ("digital_fpga_vlsi","Digital Electronics, FPGA & VLSI","🧮"),
 ("pcb","PCB Design","🟩"),
 ("embedded_iot","Embedded Systems & IoT","📟"),
 ("robotics_plc","Robotics, PLC, Drones & Motor Control","🤖"),
 ("rf_dsp","RF, SDR, Antennas & DSP","📡"),
 ("power_energy_test","Power Electronics, Solar, Batteries & Test Equipment","🔋"),
 ("other_fields","Semiconductors, Audio, Automotive, Biomedical, TinyML & More","🧪"),
 ("calculators","Calculators & Reference Tools","🧾"),
 ("community_assets","PCB Community Projects & Free Assets","🗂️"),
 ("community_ai","YouTube, Blogs, Courses, Communities & AI-Built Tools","📺"),
 ("daily_additions","Latest Additions","🆕"),
]
def norm(u): return re.sub(r'^(https?://)?(www\.)?','',u.strip().lower()).rstrip('/')
def esc(s): return s.replace('|','\\|').replace('\n',' ').strip()
def slug(t): return re.sub(r'[^a-z0-9 -]','',t.lower()).replace(' ','-')
seen=set(); sections=[]; allrows=[]
for key,title,emoji in CATS:
    p=f'data/categories/{key}.csv'
    if not os.path.exists(p): continue
    rows=[]
    for r in csv.DictReader(open(p,encoding='utf-8')):
        u=(r.get('website') or '').strip()
        if not u or norm(u) in seen: continue
        seen.add(norm(u))
        rows.append(r); allrows.append({**r,'category':title})
    if rows: sections.append((title,emoji,rows))
n=len(allrows)
out=[]
out.append('# Awesome Free Electronics ⚡\n')
out.append(f'![Resources](https://img.shields.io/badge/resources-{n}-blue) ![License: CC0](https://img.shields.io/badge/license-CC0-green) ![Free](https://img.shields.io/badge/100%25-free%20%26%20open--source-brightgreen)\n')
out.append('A curated list of **free and open-source** electronics tools, simulators, calculators, blogs, YouTube channels, courses, free assets and project-based-learning (PBL) projects, from basic electronics to analog, digital, PCB design, embedded systems, IoT, VLSI, FPGA, robotics, PLC, RF, power electronics and more.\n')
out.append('> **Rule:** no freemium and no paid tiers. Tools that are free forever but closed-source are tagged `free (proprietary)`.\n')
out.append('## Contents\n')
for title,emoji,rows in sections:
    out.append(f'- [{emoji} {title}](#{slug(title)}) ({len(rows)})')
out.append('- [Contributing](#contributing)\n- [License](#license)\n')
for title,emoji,rows in sections:
    out.append(f'\n## {title}\n')
    out.append('| Name | Description | Tags |\n|---|---|---|')
    for r in rows:
        tags=' '.join(f'`{t.strip()}`' for t in r['tags'].split(';') if t.strip())
        out.append(f"| [{esc(r['name'])}]({r['website'].strip()}) | {esc(r['description'])} | {tags} |")
    out.append('\n<sub>[⬆ back to top](#contents)</sub>')
out.append('\n## Contributing\n\nFound a great free or open-source electronics resource? See [CONTRIBUTING.md](CONTRIBUTING.md).\n')
out.append('## License\n\n[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)\n\nThis list is released under CC0 1.0. Each linked resource keeps its own licence.\n')
out.append(f'\n<sub>Last generated {date.today().isoformat()}.</sub>\n')
open('README.md','w',encoding='utf-8').write('\n'.join(out))
with open('data/all_resources.csv','w',newline='',encoding='utf-8') as f:
    w=csv.DictWriter(f,fieldnames=['website','name','tags','description','category']); w.writeheader()
    for r in allrows: w.writerow({k:r.get(k,'') for k in w.fieldnames})
print(f'README.md built with {n} resources')
