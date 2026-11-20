(() => {
  'use strict';
  const A=window.ARCHIVE,H=window.HUB;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const mediaUrl=u=>window.archiveMediaUrl?window.archiveMediaUrl(u):(window.ARCHIVE_MEDIA?.local?.[u]||u||'');
  const imageUrl=i=>mediaUrl((i.asset&&A.assets[i.asset])||i.url||'');
  const link=(url,label)=>/^(?:https?:\/\/|assets\/|(?:index|list|archive|detail)\.html)/i.test(url||'')?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>${window.ARCHIVE_MEDIA?.videoNotices?.[url]?'<small class="meta"> '+esc(window.ARCHIVE_MEDIA.videoNotices[url])+'</small>':''}`:esc(url?`${label}：${url}`:label);
  const recordUrl=e=>'detail.html?id='+encodeURIComponent(e.id);
  const params=new URLSearchParams(location.search);
  const e=A.events.find(x=>x.id===params.get('id'));
  document.getElementById('back').onclick=()=>{
    let previous;try{previous=new URL(sessionStorage.getItem('tonchan-detail-return:'+location.href)||document.referrer)}catch{}
    if(previous?.origin===location.origin&&/\/(?:index|list|detail|archive)\.html$/.test(previous.pathname)){
      try{sessionStorage.setItem('tonchan-restore',previous.href)}catch{}
      if(history.length>1)history.back();else location.href=previous.href;
    }else location.href=params.has('audio')?'list.html?g=audio':params.has('goods')?'index.html?view=goods':'list.html?g=all';
  };
  if(!e){
    const goods=[...(H.goods||[]),...(H.pastGoods||[])].find(g=>(g.date||'')+'|'+g.title===params.get('goods'));
    if(goods){
      document.documentElement.dataset.detailGroup='goods';
      document.title=goods.title+' · 东启介档案';
      const pictures=[...(goods.image?[{img:goods.image,t:goods.title}]:[]),...(goods.items||[])];
      const seen=new Set();const gallery=pictures.filter(i=>{const u=mediaUrl(i.img),key=window.ARCHIVE_MEDIA?.identity?.[u]||u;if(!key||seen.has(key))return false;seen.add(key);return true});
      const coverage=(goods.items||[]).length?`已收录 ${goods.items.length} 张商品图，点开可查看大图。`:gallery.length?'目前仅收录主图，暂无独立单品图。':'暂未收录图片，已有文字资料保留。';
      document.getElementById('detail').innerHTML=`<article class="intro"><div class="meta">${esc(goods.dateKind||'收录日期')} ${esc(goods.date||'')} · ${esc(goods.status||'')}</div><h1>${esc(goods.title)}</h1><p>${esc([goods.price,goods.publisher].filter(Boolean).join(' · '))}</p><p class="meta">${coverage}</p>${(goods.points||[]).length?'<ul>'+goods.points.map(p=>`<li>${esc(p)}</li>`).join('')+'</ul>':''}</article>${gallery.length?'<section class="block"><h2>套图与单品</h2><div class="gallery">'+gallery.map(i=>`<figure><a class="picture" href="${esc(mediaUrl(i.img))}" target="_blank" rel="noopener noreferrer"><img src="${esc(mediaUrl(i.img))}" alt="${esc(i.t||goods.title)}" loading="lazy"></a>${i.t&&i.t!==goods.title?'<figcaption>'+esc(i.t)+'</figcaption>':''}</figure>`).join('')+'</div></section>':''}<section class="block"><details><summary>资料说明与来源</summary><div class="links">${goods.url?link(goods.url,'商品资料来源'):''}${(goods.items||[]).filter(i=>i.href).map(i=>link(i.href,i.t||'单品来源')).join('')}</div></details></section>`;
      return;
    }
    const news=H.news.find(n=>n.date+'|'+n.title===params.get('news'));
    if(news){
      document.title=news.title+' · 东启介档案';
      const related=A.events.filter(x=>x.url&&x.url===news.url);
      document.getElementById('detail').innerHTML=`<article class="intro"><div class="meta">${esc(news.date)} · ${esc(news.tag)}</div><h1>${esc(news.title)}</h1><p class="note">${esc(news.text)}</p><div class="links">${link(news.url,'查看消息来源')}</div></article>${related.length?'<section class="block"><h2>相关资料</h2><ul class="records">'+related.map(x=>`<li><a href="${recordUrl(x)}">${esc(x.title)}</a></li>`).join('')+'</ul></section>':''}`;
      return;
    }
    document.getElementById('detail').innerHTML='<section class="intro"><h1>暂未找到这份资料</h1><p>可以回到演艺年表继续查找。</p><a href="list.html?g=all">浏览演艺年表</a></section>';return;
  }
  document.title=e.title+' · 东启介档案';
  const audioEntry=window.ARCHIVE_AUDIO?.entries.find(entry=>entry.sources.some(source=>source.kind==='event'&&source.record.id===e.id));
  if(audioEntry)document.documentElement.dataset.detailGroup='goods';
  const now={e78:H.now[0],e77:H.now[1]}[e.id];
  const images=[...(e.images||[])];
  if(e.cardPoster)images.push({url:e.cardPoster,caption:'作品海报'});
  if(e.cardPhoto)images.push({url:e.cardPhoto,caption:'角色造型'});
  if(now){if(now.image)images.push({url:now.image,caption:now.imageNote});if(now.image2)images.push({url:now.image2,caption:'角色造型'})}
  const seen=new Set();const photos=images.filter(i=>{const u=imageUrl(i),key=window.ARCHIVE_MEDIA?.identity?.[u]||u;if(!u||seen.has(key))return false;seen.add(key);return true});
  const videos=[...(e.videos||[]),...A.videos.filter(v=>v.rel===e.id||Array.isArray(v.rel)&&v.rel.includes(e.id))];
  const videoSeen=new Set();const uniqueVideos=videos.filter(v=>v.url&&!videoSeen.has(v.url)&&videoSeen.add(v.url));
  // Only explicit shared work keys are used; no title guesses or invented associations.
  const related=e.key?A.events.filter(x=>x.id!==e.id&&x.key===e.key):[];
  const section=(title,body)=>`<section class="block"><h2>${title}</h2>${body}</section>`;
  let html=`<article class="intro"><div class="meta">${esc(e.category)} · ${esc(e.date)}${e.end?' — '+esc(e.end):''}</div><h1>${esc(e.title)}</h1>${e.japanese?`<p class="meta">${esc(e.japanese)}</p>`:''}${e.role?`<p class="role">${e.role==='本人'?'出演：':'饰演：'}${esc(e.role)}</p>`:''}${e.crew?`<p>${esc(e.crew)}</p>`:''}${e.note?`<p class="note">${esc(e.note)}</p>`:''}<div class="links">${e.url?link(e.url,'原始来源'):''}<a href="list.html?g=all#${encodeURIComponent(e.id)}">在演艺年表中查看</a></div></article>`;
  if(now)html+=section('近况与公演信息',`<ul>${now.lines.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>${now.note?`<p class="note">${esc(now.note)}</p>`:''}<div class="links">${now.links.map(([t,u])=>link(u,t)).join('')}</div>`);
  if(photos.length)html+=section(`图片资料 · ${photos.length} 张`,'<p class="meta">点开图片可查看原图。</p><div class="gallery">'+photos.map(i=>`<figure><a class="picture" href="${esc(imageUrl(i))}" target="_blank" rel="noopener noreferrer"><img src="${esc(imageUrl(i))}" alt="${esc(i.caption||e.title)}" loading="lazy"></a></figure>`).join('')+'</div>');
  if(uniqueVideos.length)html+=section('相关视频','<ul class="records">'+uniqueVideos.map(v=>`<li>${link(v.url,v.title||'查看视频')}</li>`).join('')+'</ul>');
  if(e.biliLinks?.length)html+=section('B站视频','<ul class="records">'+e.biliLinks.map(v=>`<li>${link(v.url,v.title||'在B站查看')}</li>`).join('')+'</ul>');
  if(e.biliSearch?.length)html+=section('B站检索','<ul class="records">'+e.biliSearch.map(v=>`<li>${link(v.url,v.title||'在B站搜索')}</li>`).join('')+'</ul>');
  if(e.playlistLinks?.length)html+=section('相关播放列表','<ul class="records">'+e.playlistLinks.map(v=>`<li>${link(v.url||v[1],v.title||v.label||v[0]||'播放列表')}</li>`).join('')+'</ul>');
  if(related.length)html+=section('同系列记录','<ul class="records">'+related.map(x=>`<li><a href="${recordUrl(x)}"><span class="meta">${esc(x.date)} · ${esc(x.category)}</span><br>${esc(x.title)}</a></li>`).join('')+'</ul>');
  html+='<section class="block"><details><summary>资料说明与图片来源</summary>'+`<dl>${[['时间说明',e.dateKind],['核对状态',e.status],['补充记录',e.origin]].filter(([,v])=>v).map(([k,v])=>`<dt>${k}</dt><dd>${esc(v)}</dd>`).join('')}</dl>${e.pending?'<p class="meta">这条资料仍有待核对的信息，请结合原始来源查看。</p>':''}`+'<ul class="records">'+images.map(i=>`<li>${esc(i.caption||'图片资料')}${i.source?' · '+link(i.source,'来源'):''}${i.url?' · '+link(i.url,'原图来源'):''}${window.ARCHIVE_MEDIA?.sources?.[i.url]?' · '+link(window.ARCHIVE_MEDIA.sources[i.url],'补图来源'):''}</li>`).join('')+'</ul></details></section>';
  if(audioEntry)html='<div class="links" style="margin-bottom:18px"><a href="'+esc(window.ARCHIVE_AUDIO.url(audioEntry))+'">查看音像版本与图片</a></div>'+html;
  document.getElementById('detail').innerHTML=html;
})();
