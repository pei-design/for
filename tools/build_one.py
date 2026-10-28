# Build one creator page: python3 tools/build_one.py tools/sites/<slug>.json
# Output: <slug>/index.html at repo root (assets shared in /assets).
import sys,json,os,html,re
BASE='https://pei-design.github.io/for'
here=os.path.dirname(os.path.abspath(__file__)); root=os.path.dirname(here)
css=open(os.path.join(here,'site.css'),encoding='utf8').read(); js=open(os.path.join(here,'site.js'),encoding='utf8').read()
js=js.replace('src="img/','src="../assets/img/').replace("'img/","'../assets/img/").replace("'audio/","'../assets/audio/")
d=json.load(open(sys.argv[1],encoding='utf8')); d=d.get('site',d)
slug=d.get('slug','')
if not re.fullmatch(r'[a-z0-9][a-z0-9-]{1,60}',slug) or slug in ('assets','tools'): sys.exit('bad slug: '+slug)
for k in ('creator_name','hero','c1','c2','c3','c4','c5','c6','reply'):
  if k not in d: sys.exit('missing field: '+k)
h=d['hero']; t='給 '+d['creator_name']+' 的一頁｜Angel\'s Liquid'; desc=(h.get('sub') or '')[:110]
data=json.dumps(d,ensure_ascii=False).replace('</','<\\/')
page=f'''<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="robots" content="noindex,nofollow">
<title>{html.escape(t)}</title><meta name="description" content="{html.escape(desc)}">
<meta property="og:title" content="{html.escape(t)}"><meta property="og:description" content="{html.escape(desc)}"><meta property="og:image" content="{BASE}/assets/img/group.jpg"><meta property="og:url" content="{BASE}/{slug}/"><meta name="theme-color" content="#D12A3B">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700;900&family=Noto+Sans+TC:wght@400;500;700&display=swap">
<style>{css}</style></head><body><div id="app"></div>
<script>{js}
(function(){{var d={data};var app=document.getElementById('app');app.innerHTML=renderSite(d);bindSite(app,d,window,{{autoMusic:true}});}})();
</script></body></html>'''
os.makedirs(os.path.join(root,slug),exist_ok=True)
open(os.path.join(root,slug,'index.html'),'w',encoding='utf8').write(page)
print(BASE+'/'+slug+'/')
