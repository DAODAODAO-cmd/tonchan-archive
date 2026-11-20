// Run with: node tools/check-mobile.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const data = { window: {} };
vm.createContext(data);
vm.runInContext(read('data/archive.js'), data);
vm.runInContext(read('data/hub.js'), data);
vm.runInContext(read('assets/media-index.js'), data);
vm.runInContext(read('assets/media.js'), data);
for (const file of ['index.html', 'list.html', 'detail.html']) {
  for (const match of read(file).matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    new vm.Script(match[1], { filename: file });
  }
}
for (const file of ['assets/detail.js', 'assets/navigation.js', 'assets/media.js', 'assets/media-index.js', 'assets/browse-state.js']) new vm.Script(read(file), { filename: file });
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const render = (id, kind = 'id') => {
  const output = { innerHTML: '' };
  vm.runInNewContext(read('assets/detail.js'), {
    window: data.window, URL, URLSearchParams,
    location: { search: '?' + kind + '=' + encodeURIComponent(id) },
    document: { documentElement: { dataset: {} }, getElementById: name => name === 'detail' ? output : {}, referrer: '' },
    history: { length: 1 }
  });
  return output.innerHTML;
};
for (const event of data.window.ARCHIVE.events) {
  const html = render(event.id);
  assert(html.includes(`<h1>${escape(event.title)}</h1>`), event.id + ': title missing');
  if (event.note) assert(html.includes(escape(event.note)), event.id + ': note missing');
  for (const image of event.images || []) {
    const url = (image.asset && data.window.ARCHIVE.assets[image.asset]) || image.url;
    const displayed = data.window.archiveMediaUrl(url);
    const equivalents = Object.entries(data.window.ARCHIVE_MEDIA.identity).filter(([,key]) => key === data.window.ARCHIVE_MEDIA.identity[displayed]).map(([file]) => file);
    if (url) assert(html.includes(escape(displayed)) || equivalents.some(file => html.includes(escape(file))), event.id + ': image missing');
    if (image.source) assert(html.includes(escape(image.source)), event.id + ': image source missing');
  }
  assert(!html.includes('href="undefined"'), event.id + ': invalid link');
}
assert(render('missing-record').includes('暂未找到这份资料'));
assert(render('e78').includes(escape(data.window.HUB.now[0].note)));
assert(render('e77').includes(escape(data.window.HUB.now[1].note)));
const goods=[...data.window.HUB.goods,...data.window.HUB.pastGoods];
for(const item of goods){
  const html=render((item.date||'')+'|'+item.title,'goods');
  assert(html.includes(escape(item.title)), item.title+': goods detail missing');
  for(const point of item.points||[])assert(html.includes(escape(point)),item.title+': goods description missing');
  for(const image of item.items||[])if(image.href)assert(html.includes(escape(image.href)),item.title+': item source missing');
}
for(const news of data.window.HUB.news){
  const html=render(news.date+'|'+news.title,'news');
  assert(html.includes(escape(news.title))&&html.includes(escape(news.text)),news.title+': news missing');
}
assert(!data.window.HUB.goods.some(g=>g.title==='WE官方生写真〈2026年11月〉'));
assert(data.window.HUB.pastGoods.some(g=>g.title==='WE官方生写真〈2026年11月〉'&&g.status==='预约已结束'));
console.log(`Passed: scripts parse; ${data.window.ARCHIVE.events.length} archive details, ${goods.length} goods details, ${data.window.HUB.news.length} news details preserve existing content; missing-record fallback; ended monthly set archived.`);
