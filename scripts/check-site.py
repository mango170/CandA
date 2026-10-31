"""Static route, metadata, content and accessibility checks. No submissions or external requests."""
from pathlib import Path
from bs4 import BeautifulSoup as BS
from urllib.parse import urlsplit,unquote
import json,xml.etree.ElementTree as ET
P=Path(__file__).resolve().parents[1]/'public'
errors=[]; pages={};routes={'/':'index.html'}
for line in (P/'_redirects').read_text().splitlines():
 parts=line.split()
 if len(parts)>=3 and parts[2]=='200':routes[parts[0]]=parts[1].lstrip('/')
for f in P.glob('*.html'):pages[f.name]=BS(f.read_text(),'html.parser')
titles=[];descs=[];canon=[]
for name,s in pages.items():
 def check(ok,msg):
  if not ok: errors.append(name+': '+msg)
 check(len(s.select('h1'))==1,'one H1');check(bool(s.main),'main landmark')
 c=s.select_one('link[rel=canonical]');check(bool(c),'canonical')
 if name not in ['404.html','thank-you.html']:
  titles.append(s.title.get_text());descs.append(s.select_one('meta[name=description]')['content']);canon.append(c['href'])
 for node in s.select('script[type="application/ld+json"]'):
  try:json.loads(node.string)
  except Exception:errors.append(name+': invalid JSON-LD')
 for a in s.select('[href],[src]'):
  val=a.get('href') or a.get('src');u=urlsplit(val)
  if u.scheme or u.netloc or not val or val.startswith('data:'):continue
  path=unquote(u.path)
  target=routes.get(path,path.lstrip('/')) if path else name
  if not target:target='index.html'
  check((P/target).is_file(),'missing target '+val)
  if u.fragment and target in pages:check(bool(pages[target].find(id=unquote(u.fragment))),'missing fragment '+val)
 for img in s.select('img'):check(img.has_attr('alt'),'image alt')
 for field in s.select('input:not([type=hidden]),select,textarea'):
  check(bool(field.get('aria-label') or s.find('label',attrs={'for':field.get('id')})),'field label')
 check('abhisheksachdeva.ca@gmail.com' not in str(s),'old email')
 check(not any(t in str(s).lower() for t in ['sri ganganagar','rajasthan','streetaddress','addresslocality']),'local business location')
 if name.startswith('india'):
  text=s.main.get_text(' ',strip=True).lower()
  check(not any(t in text for t in ['audit','attestation','certification','assurance']),'excluded India offering')
  data=s.select_one('script[type="application/ld+json"]').string.lower()
  check('model review & audit' not in data,'international catalogue in India schema')
for vals,label in [(titles,'titles'),(descs,'descriptions'),(canon,'canonicals')]:
 if len(vals)!=len(set(vals)):errors.append('duplicate '+label)
xml=ET.parse(P/'sitemap.xml');urls={x.text for x in xml.findall('.//{*}loc')}
if urls!=set(canon):errors.append('sitemap completeness')
for u in urls:
 path=u.replace('https://candaadvisory.com','') or '/'
 if path not in routes:errors.append('no clean route '+path)
 if u not in (P/'llms.txt').read_text():errors.append('missing llms link '+u)
print(f'Checked {len(pages)} HTML pages, {len(urls)} indexable canonicals, routes, fragments, labels, JSON-LD and India scope.')
if errors:print('\n'.join(errors));raise SystemExit(1)
print('PASS')
