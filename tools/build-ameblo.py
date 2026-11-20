# 把 tools/ameblo-raw/*.html（Internet Archive 存档）整理成 data/ameblo.js
import os, re, json, hashlib, glob
from bs4 import BeautifulSoup, NavigableString, Tag
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, 'tools', 'ameblo-raw')
IMG = os.path.join(ROOT, 'assets', 'img', 'blog')
IMRE = re.compile(r'https?://stat\.ameba\.jp/user_images/\d{8}/\d+/keisuke-higashi-we/[^"\'\s<>?]+\.(?:jpg|jpeg|png|gif)', re.I)

def local(u):
    m = IMRE.search(u or '')
    if not m: return None
    plain = re.sub(r'^https:', 'http:', m.group(0))
    ext = os.path.splitext(plain)[1].lower().replace('.jpeg', '.jpg')
    name = hashlib.sha1(plain.encode('utf-8')).hexdigest()[:16] + ext
    return 'assets/img/blog/' + name if os.path.exists(os.path.join(IMG, name)) else None

def parse(path):
    id_ = os.path.basename(path)[:-5]
    html = open(path, encoding='utf-8', errors='replace').read()
    d = BeautifulSoup(html, 'html.parser')
    t = d.select_one('.skinArticleTitle, [data-uranus-component=entryTitle], .entry-title') or d.select_one('h1 a[href*="entry-%s"]' % id_)
    title = t.get_text(strip=True) if t else re.sub(r'[｜|].*$', '', d.title.get_text() if d.title else '').strip()
    tm = d.select_one('time, .articleTime, [data-uranus-component=entryDate]')
    m = re.search(r'20\d\d[-./]\d\d[-./]\d\d(?: \d\d:\d\d(?::\d\d)?)?', tm.get_text() if tm else '')
    date = m.group(0) if m else ''
    if not date:
        m = re.search(r'"datePublished"\s*:\s*"([^"]+)"', html)
        date = m.group(1)[:19].replace('T', ' ') if m else ''
    date = date.replace('/', '-').replace('.', '-')
    body = d.select_one('[data-uranus-component=entryBody], #entryBody, .articleText')
    blocks, buf, seen = [], [''], set()
    def flush():
        s = re.sub(r'[ \t\u00a0]+', ' ', buf[0]); s = re.sub(r' *\n *', '\n', s); s = re.sub(r'\n+', lambda m: '\n' if len(m.group(0)) <= 3 else '\n\n', s).strip()
        if s: blocks.append({'t': s})
        buf[0] = ''
    def walk(n):
        for c in n.children:
            if isinstance(c, NavigableString):
                if c.__class__.__name__ in ('Comment', 'Script'): continue
                buf[0] += str(c)
            elif isinstance(c, Tag):
                if c.name in ('script', 'style', 'iframe', 'noscript'): continue
                if c.name == 'img':
                    src = c.get('src') or ''
                    if 'user_images' in src:
                        p = local(src); flush()
                        if p and p not in seen: seen.add(p); blocks.append({'img': p})
                        elif not p: blocks.append({'lost': 1})
                    elif c.get('alt'): buf[0] += c['alt']
                elif c.name == 'br': buf[0] += '\n'
                else:
                    blk = c.name in ('p', 'div', 'li', 'h1', 'h2', 'h3', 'h4', 'h5')
                    if blk: buf[0] += '\n'
                    walk(c)
                    if blk: buf[0] += '\n'
    if body: walk(body); flush()
    # 合并连续的“图片没存下来”
    out = []
    for b in blocks:
        if 'lost' in b and out and 'lost' in out[-1]: out[-1]['lost'] += 1
        else: out.append(b)
    return {'id': id_, 'date': date[:16], 'title': title, 'blocks': out}

entries = [parse(p) for p in sorted(glob.glob(os.path.join(RAW, '*.html')))]
entries = [e for e in entries if e['blocks'] or e['title']]
entries.sort(key=lambda e: e['date'])
known = json.load(open(os.path.join(ROOT, 'tools', 'ameblo-missing.json'), encoding='utf-8'))
have = {e['id'] for e in entries}
missing = [m for m in known if m['id'] not in have]
# 只存到标题的：按文章编号在前后两篇之间插值估算日期，放进时间线
from datetime import datetime
pts = sorted((int(e['id']), datetime.strptime(e['date'][:16].replace('T', ' '), '%Y-%m-%d %H:%M').timestamp()) for e in entries if e['date'])
def guess(i):
    i = int(i); lo = max([p for p in pts if p[0] <= i], default=pts[0]); hi = min([p for p in pts if p[0] >= i], default=pts[-1])
    t = lo[1] if hi[0] == lo[0] else lo[1] + (hi[1] - lo[1]) * (i - lo[0]) / (hi[0] - lo[0])
    return datetime.fromtimestamp(t).strftime('%Y-%m-%d')
for m in missing:
    if not m['title']: continue
    entries.append({'id': m['id'], 'date': guess(m['id']), 'approx': True, 'title': m['title'], 'blocks': []})
entries.sort(key=lambda e: e['date'])
missing = [m for m in missing if not m['title']]
data = {'source': 'https://ameblo.jp/keisuke-higashi-we/', 'note': '东启介Ameba官方博客（2013年12月—2020年10月停止更新），原博客已删除，内容由 Internet Archive 存档整理。', 'entries': entries, 'missing': missing}
open(os.path.join(ROOT, 'data', 'ameblo.js'), 'w', encoding='utf-8').write('window.AMEBLO = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n')
imgs = sum(1 for e in entries for b in e['blocks'] if 'img' in b); lost = sum(b.get('lost', 0) for e in entries for b in e['blocks'])
print('entries', len(entries), 'images', imgs, 'lost', lost, 'missing', len(missing))
