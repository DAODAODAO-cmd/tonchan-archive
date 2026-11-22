// Prefer same-site image copies while keeping original source URLs in the data.
(() => {
  const local=window.ARCHIVE_MEDIA?.local||{};
  const unavailable=new Set(window.ARCHIVE_MEDIA?.unavailable||[]);
  window.archiveMediaUrl=url=>local[url]||(unavailable.has(url)?'assets/image-unavailable.svg':url)||'';
  window.archiveNewsUrl=news=>{
    // 有对应的编年条目就直接进条目详情；没有就直接打开原消息，不再多套一层消息页
    const E=window.ARCHIVE?.events||[];
    const record=E.find(e=>news.url&&e.url===news.url)||E.find(e=>e.date===news.date&&e.title===news.title);
    return record?'detail.html?id='+encodeURIComponent(record.id):(news.url||'detail.html?news='+encodeURIComponent(news.date+'|'+news.title));
  };
  const visit=value=>{
    if(!value||typeof value!=='object')return;
    if(value.thumbnail&&window.ARCHIVE_MEDIA?.previewLabels?.[value.thumbnail])value.previewLabel=window.ARCHIVE_MEDIA.previewLabels[value.thumbnail];
    for(const [key,item] of Object.entries(value)){
      if(['image','image2','img','thumbnail','cardPhoto','cardPoster'].includes(key)&&typeof item==='string')value[key]=window.archiveMediaUrl(item);
      else if(item&&typeof item==='object')visit(item);
    }
  };
  visit(window.HUB);visit(window.ARCHIVE);
  if(window.ARCHIVE?.assets)for(const [key,url] of Object.entries(window.ARCHIVE.assets))window.ARCHIVE.assets[key]=window.archiveMediaUrl(url);
})();
