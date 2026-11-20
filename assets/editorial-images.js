// Editorial pages show documented Higashi/role photos and one poster.
// Untagged article pictures remain in the original archive instead of being guessed.
(() => {
  const A=window.ARCHIVE;
  const url=image=>window.archiveMediaUrl((image.asset&&A.assets[image.asset])||image.url||'');
  const identity=image=>window.ARCHIVE_MEDIA?.identity?.[url(image)]||url(image);
  const unique=images=>{const seen=new Set();return images.filter(image=>{const key=identity(image);if(!key||seen.has(key))return false;seen.add(key);return true})};
  const isPoster=image=>/海报|主视觉|宣传单|フライヤー|チラシ|封面|ビジュアル/i.test(image.caption||'')&&!/角色视觉|角色照|キャラクター/.test(image.caption||'');
  const isPerson=(event,image)=>{
    if(image.hasHigashi===false||image.subject==='other')return false;
    if(image.hasHigashi===true||image.subject==='higashi')return true;
    if(event.cardPhoto&&url(image)===window.archiveMediaUrl(event.cardPhoto))return true;
    const caption=image.caption||'';
    if(/本人拍摄|这期聊的作品/.test(caption))return false;
    if(/东启介|東\s?啓介|本人(?:写真|肖像|自拍|造型)|自拍|本人发的生写真/.test(caption))return true;
    const roles=[event.roleName,...String(event.role||'').split(/[（），,／/、]/)].filter(s=>s&&s.length>1&&!/本人|主演|嘉宾|出演|配音|主持|待确认/.test(s));
    return roles.some(role=>caption.includes(role));
  };
  const forEvent=event=>{
    const original=event.images||[];
    // Product/record editions keep their complete existing image collections.
    if(event.category==='周边'||window.ARCHIVE_AUDIO?.isEvent(event))return unique(original);
    const photos=original.filter(image=>!isPoster(image)&&isPerson(event,image));
    if(event.cardPhoto)photos.unshift({url:event.cardPhoto,caption:event.roleName||event.role||'东启介角色造型',pos:event.cardPhotoPos,hasHigashi:true});
    const poster=event.cardPoster?{url:event.cardPoster,caption:'作品海报'}:original.find(isPoster);
    return unique([...photos,...(poster?[poster]:[])]);
  };
  window.ARCHIVE_PICTURES={forEvent,isPoster,isPerson,url};
})();
