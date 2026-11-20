"""Cache remaining public image URLs without changing the original archive data."""
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
import hashlib
import json
import urllib.request

ROOT = Path(__file__).resolve().parent.parent
urls = json.loads((ROOT / 'tools/media-download.json').read_text(encoding='utf-8'))
target = ROOT / 'assets/img/cached'
target.mkdir(exist_ok=True)
index_file = ROOT / 'assets/media-index.js'
media = {'local': {}, 'identity': {}}
if index_file.exists():
    media = json.loads(index_file.read_text(encoding='utf-8').removeprefix('window.ARCHIVE_MEDIA = ').rstrip(';\n'))

def download(url):
    existing = media.get('local', {}).get(url)
    if existing and (ROOT / existing).exists():
        return url, existing, None
    request = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(request, timeout=18) as response:
            data = response.read()
        if data.startswith(b'\xff\xd8\xff'):
            extension = '.jpg'
        elif data.startswith(b'\x89PNG\r\n\x1a\n'):
            extension = '.png'
        elif data.startswith((b'GIF87a', b'GIF89a')):
            extension = '.gif'
        elif data.startswith(b'RIFF') and data[8:12] == b'WEBP':
            extension = '.webp'
        else:
            return url, None, 'not a supported image'
        relative = 'assets/img/cached/' + hashlib.sha256(url.encode()).hexdigest()[:20] + extension
        (ROOT / relative).write_bytes(data)
        return url, relative, None
    except Exception as error:
        return url, None, str(error)

local, failed = {}, []
with ThreadPoolExecutor(max_workers=12) as pool:
    futures = [pool.submit(download, url) for url in urls]
    for future in as_completed(futures):
        url, relative, error = future.result()
        if relative:
            local[url] = relative
        else:
            failed.append({'url': url, 'reason': error})

media['local'] = dict(sorted(local.items()))
media['unavailable'] = [item['url'] for item in failed]
index_file.write_text('window.ARCHIVE_MEDIA = ' + json.dumps(media, ensure_ascii=False, separators=(',', ':')) + ';\n', encoding='utf-8')
(ROOT / 'tools/media-cache-failed.json').write_text(json.dumps(failed, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Cached {len(local)} images; unavailable {len(failed)}.', flush=True)
