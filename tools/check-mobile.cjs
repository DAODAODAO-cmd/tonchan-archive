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
vm.runInContext(read('assets/audio.js'), data);
vm.runInContext(read('assets/goods-sales.js'), data);
vm.runInContext(read('assets/editorial-images.js'), data);
for (const file of ['index.html', 'list.html', 'detail.html']) {
  for (const match of read(file).matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    new vm.Script(match[1], { filename: file });
  }
}
for (const file of ['assets/detail.js', 'assets/navigation.js', 'assets/media.js', 'assets/media-index.js', 'assets/browse-state.js', 'assets/audio.js', 'assets/audio-detail.js', 'assets/goods-catalogue.js', 'assets/role-preview.js']) new vm.Script(read(file), { filename: file });
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const render = (id, kind = 'id') => {
  const output = { innerHTML: '' };
  const context={
    window: data.window, URL, URLSearchParams,
    location: { search: '?' + kind + '=' + encodeURIComponent(id) },
    document: { documentElement: { dataset: {} }, getElementById: name => name === 'detail' ? output : {}, referrer: '' },
    history: { length: 1 }
  };
  vm.runInNewContext(read('assets/detail.js'), context);
  vm.runInNewContext(read('assets/goods-catalogue.js'), context);
  vm.runInNewContext(read('assets/audio-detail.js'), context);
  return output.innerHTML;
};
for (const event of data.window.ARCHIVE.events) {
  const html = render(event.id);
  assert(html.includes(`<h1>${escape(event.title)}</h1>`), event.id + ': title missing');
  if (event.note) assert(html.includes(escape(event.note)), event.id + ': note missing');
  const pictures=data.window.ARCHIVE_PICTURES;
  const selected=pictures.forEvent(event);
  for(const image of selected) assert(html.includes('src="'+escape(pictures.url(image))+'"'),event.id+': selected image missing');
  const exempt=event.category==='周边'||data.window.ARCHIVE_AUDIO.isEvent(event);
  if(!exempt){
    assert(selected.filter(pictures.isPoster).length<=1,event.id+': multiple posters');
    for(const image of selected.filter(i=>!pictures.isPoster(i))) assert(pictures.isPerson(event,image),event.id+': unconfirmed photo');
  }
  for (const image of event.images || []) {
    if (image.source) assert(html.includes(escape(image.source)), event.id + ': image source missing');
    if (image.url) assert(html.includes(escape(image.url)), event.id + ': original reference missing');
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
  for(const image of item.items||[])if(image.href&&!image.hiddenFromCharacterCatalogue)assert(html.includes(escape(image.href)),item.title+': item source missing');
}
for(const news of data.window.HUB.news){
  const html=render(news.date+'|'+news.title,'news');
  assert(html.includes(escape(news.title))&&html.includes(escape(news.text)),news.title+': news missing');
}
assert(!data.window.HUB.goods.some(g=>g.title==='WE官方生写真〈2026年11月〉'));
assert(data.window.HUB.pastGoods.some(g=>g.title==='WE官方生写真〈2026年11月〉'&&g.status==='预约已结束'));
assert(data.window.HUB.pastGoods.some(g=>g.title==='WE官方生写真〈2026年11月〉'&&g.parentCollection));
const hiden=goods.find(g=>g.title==='刀舞《陽伝》公演周边');
const hidenHTML=render(hiden.date+'|'+hiden.title,'goods');
assert.equal(hiden.items.length,20);
assert.equal(hiden.items.filter(i=>!i.hiddenFromCharacterCatalogue).length,16);
for(const item of hiden.items){
  if(item.hiddenFromCharacterCatalogue)continue;
  assert(hidenHTML.includes(escape(item.t)),item.t+': catalogue product missing');
  if(item.img)assert(hidenHTML.includes(escape(data.window.archiveMediaUrl(item.img))),item.t+': original product image missing');
  for(const image of item.extraImages||[])assert(hidenHTML.includes(escape(image.img)),item.t+': additional image missing');
}
assert(hidenHTML.includes('官方图片待公开'));
assert(!hidenHTML.includes('src=""'));
const shelf=data.window.ARCHIVE_AUDIO;
for(const entry of shelf.entries){
  assert(entry.formats.length>0,entry.title+': audio format missing');
  const html=render(entry.id,'audio');
  for(const source of entry.sources){
    const r=source.record;
    assert(html.includes(escape(r.title)),entry.title+': source record missing');
    if(r.note)assert(html.includes(escape(r.note)),entry.title+': source note missing');
    for(const point of r.points||[])assert(html.includes(escape(point)),entry.title+': edition detail missing');
  }
  for(const image of shelf.pictures(entry))assert(html.includes(escape(shelf.imageUrl(image))),entry.title+': audio image missing');
}
for(const record of data.window.ARCHIVE.events.filter(shelf.isEvent))assert(shelf.entries.some(e=>e.sources.some(s=>s.record.id===record.id)),record.id+': audio record excluded');
for(const record of goods.filter(shelf.isGoods))assert(shelf.entries.some(e=>e.sources.some(s=>s.record===record)),record.title+': audio product excluded');
console.log(`Audio shelf passed: ${shelf.entries.length} groups, all source records, version descriptions and images retained.`);
console.log(`Passed: scripts parse; ${data.window.ARCHIVE.events.length} archive details, ${goods.length} goods details, ${data.window.HUB.news.length} news details preserve existing content; missing-record fallback; ended monthly set archived.`);

const sales=data.window.ARCHIVE_SALES;
for(const [item,expected] of [[{date:'2010-01-01'},'unknown'],[{date:'2099-01-01'},'unknown'],[{status:'已售罄'},'soldout'],[{status:'部分售罄'},'partial'],[{status:'在售'},'available'],[{status:'预售'},'presale'],[{orderEnd:'2026-11-15'},'order_closed'],[{status:'已结束（完全受注生产）'},'order_closed'],[{status:'已结束'},'closed']]) assert.equal(sales.key(item,'2026-11-20'),expected);
assert(!sales.records().some(g=>g.parentCollection));
assert(sales.records().find(g=>g.title==='WE官方生写真 历月一览')._saleKeys.includes('closed'));
assert(!read('index.html').includes('过往周边'));
const picturePolicy=data.window.ARCHIVE_PICTURES;
const fixture={role:'测试角色',images:[{url:'assets/a.jpg',caption:'东启介剧照'},{url:'assets/b.jpg',caption:'其他演员'},{url:'assets/c.jpg',caption:'作品海报'},{url:'assets/d.jpg',caption:'第二张海报'},{url:'assets/e.jpg',caption:'本人拍摄：风景'}]};
assert.deepEqual(Array.from(picturePolicy.forEvent(fixture),i=>i.url),['assets/a.jpg','assets/c.jpg']);
console.log('Sales filters passed; editorial images include confirmed subject photos and at most one poster; original references retained.');

assert.deepEqual(Object.keys(sales.labels),['available','closed']);
for(const g of sales.records())assert(['available','closed'].includes(g._saleKey));
assert.equal(sales.group({saleReview:{state:'unknown'}}),'closed');
assert.equal(sales.group({status:'部分售罄'}),'available');
assert.equal(sales.group({status:'预约中'}),'available');
assert.equal(sales.group({status:'售罄'}),'closed');
assert.equal(sales.records().filter(g=>g.saleReview).length,27);
assert(sales.records().some(g=>g.title.includes('崎山亮二')&&g._saleKey==='available'));
assert.equal(sales.records().filter(g=>g.saleReview?.state==='available').length,4);
assert.equal(sales.records().filter(g=>g.saleReview?.state==='unknown').length,23);
console.log('Two-state sales filters and 27 official-source reviews passed.');
