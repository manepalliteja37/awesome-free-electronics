"""Bundle every data/categories/*.csv into data/resources.json (one request for the site),
and stamp asset/data versions into index.html so browsers can cache aggressively."""
import os, glob, json, hashlib, re
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
files = {os.path.splitext(os.path.basename(p))[0]: open(p, encoding="utf-8-sig").read() for p in sorted(glob.glob("data/categories/*.csv"))}
v = hashlib.sha1(json.dumps(files, sort_keys=True).encode()).hexdigest()[:10]
open("data/resources.json", "w", encoding="utf-8").write(json.dumps({"v": v, "files": files}, ensure_ascii=False, separators=(",", ":")))
h = lambda p: hashlib.sha1(open(p, "rb").read()).hexdigest()[:10]
idx = open("index.html", encoding="utf-8").read()
idx = re.sub(r'assets/style\.css(\?v=\w+)?', f'assets/style.css?v={h("assets/style.css")}', idx)
idx = re.sub(r'assets/app\.js(\?v=\w+)?', f'assets/app.js?v={h("assets/app.js")}', idx)
idx = re.sub(r'<meta name="data-version" content="\w*">', f'<meta name="data-version" content="{v}">', idx)
open("index.html", "w", encoding="utf-8").write(idx)
print("resources.json", v, len(files), "files")
