// Prefer same-site image copies while keeping original source URLs in the data.
(() => {
  const local=window.ARCHIVE_MEDIA?.local||{};
  const unavailable=new Set(window.ARCHIVE_MEDIA?.unavailable||[]);
  window.archiveMediaUrl=url=>local[url]||(unavailable.has(url)?'assets/image-unavailable.svg':url)||'';
  window.archiveNewsUrl=news=>{
    if(window.HUB?.news.some(n=>n.date===news.date&&n.title===news.title))return 'detail.html?news='+encodeURIComponent(news.date+'|'+news.title);
    const record=window.ARCHIVE?.events.find(e=>e.date===news.date&&e.title===news.title);
    return record?'detail.html?id='+encodeURIComponent(record.id):news.url;
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
