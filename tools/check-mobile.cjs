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
for (const file of ['index.html', 'list.html', 'detail.html']) {
  for (const match of read(file).matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    new vm.Script(match[1], { filename: file });
  }
}
for (const file of ['assets/detail.js', 'assets/navigation.js']) new vm.Script(read(file), { filename: file });
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const render = id => {
  const output = { innerHTML: '' };
  vm.runInNewContext(read('assets/detail.js'), {
    window: data.window, URL, URLSearchParams,
    location: { search: '?id=' + encodeURIComponent(id) },
    document: { getElementById: name => name === 'detail' ? output : {}, referrer: '' },
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
    if (url) assert(html.includes(escape(url)), event.id + ': image missing');
    if (image.source) assert(html.includes(escape(image.source)), event.id + ': image source missing');
  }
  assert(!html.includes('href="undefined"'), event.id + ': invalid link');
}
assert(render('missing-record').includes('暂未找到这份资料'));
assert(render('e78').includes(escape(data.window.HUB.now[0].note)));
assert(render('e77').includes(escape(data.window.HUB.now[1].note)));
console.log(`Passed: scripts parse; ${data.window.ARCHIVE.events.length} detail records preserve titles, notes, images and image sources; missing-record fallback.`);
