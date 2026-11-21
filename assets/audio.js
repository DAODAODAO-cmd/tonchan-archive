// Audio shelves reference the original records; versions and images stay intact.
(() => {
  const A=window.ARCHIVE,H=window.HUB;
  const isEvent=e=>e.category==='写真／出版'&&/(?:blu[ -]?ray|DVD|\bCD\b|原声|OST|单曲|歌曲|アルバム|シングル|サントラ)/i.test([e.title,e.japanese].join(' '));
  const isGoods=g=>/(?:影像|\bCD\b|DVD|blu[ -]?ray)/i.test(g.cat||'')||/(?:DVD|blu[ -]?ray|\bCD\b)/i.test(g.title);
  // Explicit associations only: these records describe the same release or its formats.
  const associations={
    '刀舞《陽伝》Blu-ray / DVD':['add_hiden_bd'],
    '舞台《刀剑乱舞》虚传 燃烧的本能寺':['ost_kyoden'],
    '舞台《刀剑乱舞》义传 黎明的独眼龙':['ost_giden'],
    '舞台《刀剑乱舞》悲传 结之目的不如归':['ost_hiden'],
    'JBB《JBB Concert 2024 in Tokyo》':['nat_jbb_cd25'],
    '妖～AYAKASHI～ 出道单曲《憑き夜に踊れ》':['ayakashi15'],
    '1st DVD《東啓介、南へ行く。》':['e_dvd1','dvd_minami']
  };
  const linked=new Set(),entries=[];
  for(const goods of [...H.goods,...H.pastGoods].filter(isGoods)){
    const events=(associations[goods.title]||(goods.event?[goods.event]:[])).map(id=>A.events.find(e=>e.id===id)).filter(Boolean);
    events.forEach(e=>linked.add(e.id));
    const formats=[];
    if(/CD/i.test(goods.cat||''))formats.push('cd');
    if(/影像|DVD|blu[ -]?ray/i.test((goods.cat||'')+' '+goods.title))formats.push('disc');
    entries.push({id:'goods:'+(goods.date||'')+'|'+goods.title,title:goods.title,date:goods.date||'',formats,sources:[{kind:'goods',record:goods},...events.map(record=>({kind:'event',record}))]});
  }
  for(const event of A.events.filter(isEvent)){
    if(linked.has(event.id))continue;
    const format=/数字|デジタル|歌曲.*公开/.test(event.title+' '+event.japanese)?'digital':/DVD|blu[ -]?ray/i.test(event.title+' '+event.japanese)?'disc':'cd';
    entries.push({id:'event:'+event.id,title:event.title,date:event.date,formats:[format],sources:[{kind:'event',record:event}]});
  }
  const imageUrl=i=>window.archiveMediaUrl((i.asset&&A.assets[i.asset])||i.url||i.img||'');
  const pictures=entry=>{
    const images=[];
    for(const source of entry.sources){
      const r=source.record;
      if(source.kind==='goods'){
        for(const item of r.items||[])images.push({url:item.img,caption:item.t,source:item.href});
        if(r.image)images.push({url:r.image,caption:r.title,source:r.url});
      }else images.push(...(r.images||[]));
    }
    const seen=new Set();
    return images.filter(i=>{const url=imageUrl(i),key=window.ARCHIVE_MEDIA?.identity?.[url]||url;if(!url||seen.has(key))return false;seen.add(key);return true});
  };
  window.ARCHIVE_AUDIO={entries:entries.sort((a,b)=>b.date.localeCompare(a.date)),isEvent,isGoods,pictures,imageUrl,labels:{cd:'音乐 CD',disc:'DVD / Blu-ray',digital:'数字发行'},url:entry=>'detail.html?audio='+encodeURIComponent(entry.id)};
})();
