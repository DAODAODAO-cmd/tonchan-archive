(() => {
  const id=new URLSearchParams(location.search).get('audio');
  if(!id)return;
  const shelf=window.ARCHIVE_AUDIO,entry=shelf.entries.find(e=>e.id===id);
  if(!entry)return;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const photos=shelf.pictures(entry);
  document.documentElement.dataset.detailGroup='goods';
  document.title=entry.title+' · 音像资料';
  document.getElementById('detail').innerHTML=`<article class="intro"><div class="meta">音像 · ${entry.formats.map(k=>esc(shelf.labels[k])).join(' / ')}</div><h1>${esc(entry.title)}</h1><p>不同格式、版本和已有图片在下方分别查看。</p><div class="links"><a href="list.html?g=audio">浏览全部音像</a></div></article><section class="block"><h2>版本与发行资料</h2>${entry.sources.map((source,index)=>{
    const r=source.record,goods=source.kind==='goods';
    const url=goods?'detail.html?goods='+encodeURIComponent((r.date||'')+'|'+r.title):'detail.html?id='+encodeURIComponent(r.id);
    const body=`<article class="release-version"><h3>${esc(r.title)}</h3><p class="meta">${esc(r.dateKind||'记录日期')} ${esc(r.date||'')}${r.cat?' · '+esc(r.cat):''}</p>${r.japanese?'<p class="meta">'+esc(r.japanese)+'</p>':''}${r.price||r.publisher?'<p>'+esc([r.price,r.publisher].filter(Boolean).join(' · '))+'</p>':''}${r.note?'<p class="note">'+esc(r.note)+'</p>':''}${(r.points||[]).length?'<ul>'+r.points.map(p=>'<li>'+esc(p)+'</li>').join('')+'</ul>':''}<a href="${url}">查看这条完整记录</a></article>`;
    return index>0&&r.date===entry.sources[0].record.date?'<details class="release-version"><summary>补充资料 · '+esc(r.title)+'</summary>'+body+'</details>':body;
  }).join('')}</section>${photos.length?'<section class="block"><h2>封面与版本图片 · '+photos.length+' 张</h2><p class="meta">点开图片可查看大图。</p><div class="gallery">'+photos.map(i=>`<figure><a class="picture" href="${esc(shelf.imageUrl(i))}" target="_blank" rel="noopener noreferrer"><img src="${esc(shelf.imageUrl(i))}" alt="${esc(i.caption||entry.title)}" loading="lazy"></a><figcaption>${esc(i.caption||'封面与版本图')}</figcaption></figure>`).join('')+'</div></section>':''}<section class="block"><details><summary>资料与图片来源</summary><ul class="records">${entry.sources.filter(s=>s.record.url).map(s=>`<li><a href="${esc(s.record.url)}" target="_blank" rel="noopener noreferrer">${esc(s.record.title)}</a></li>`).join('')}${photos.filter(i=>i.source).map(i=>`<li>${esc(i.caption||'图片资料')} · ${/^https?:\/\//i.test(i.source)?'<a href="'+esc(i.source)+'" target="_blank" rel="noopener noreferrer">图片来源</a>':esc(i.source)}</li>`).join('')}</ul></details></section>`;
})();
