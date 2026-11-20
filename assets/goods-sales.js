// Sales state is separate from work/category and never inferred from release year.
(() => {
  const labels={available:'在售',closed:'已结束'};
  const today=()=>new Date(Date.now()+9*3600e3).toISOString().slice(0,10);
  const key=(goods,date=today())=>{
    if(goods.saleReview)return goods.saleReview.state==='available'?'available':'unknown';
    const explicit=String(goods.saleStatus||goods.status||'').trim();
    if(/部分.*售罄|一部.*完売/.test(explicit))return 'partial';
    if(/售罄|完售|完売/.test(explicit))return 'soldout';
    if(/(?:预约|受注|预订).*(?:结束|截止|終了)|(?:结束|截止|終了).*(?:预约|受注|预订)/.test(explicit))return 'order_closed';
    if(/已结束|販売終了|销售结束/.test(explicit))return 'closed';
    if(/在售|销售中|贩售中|販売中/.test(explicit))return 'available';
    if(goods.orderEnd&&/^\d{4}-\d{2}-\d{2}$/.test(goods.orderEnd)&&goods.orderEnd<date)return 'order_closed';
    if(/预售|预约中|预订中|受注中|予約受付中/.test(explicit))return 'presale';
    return 'unknown';
  };
  const all=()=>[...window.HUB.goods,...window.HUB.pastGoods];
  const group=(goods,date=today())=>['available','presale','partial'].includes(key(goods,date))?'available':'closed';
  // A collection stays available if any explicitly linked edition is still offered.
  const statusKeys=goods=>[group(goods),...all().filter(child=>child.parentCollection===goods.title).map(child=>group(child))];
  const collectionGroup=goods=>statusKeys(goods).includes('available')?'available':'closed';
  const records=()=>all().filter(g=>!window.ARCHIVE_AUDIO.isGoods(g)&&!g.parentCollection).map(g=>{const state=collectionGroup(g);return {...g,_saleKey:state,_saleLabel:labels[state],_saleKeys:[state]}});
  window.ARCHIVE_SALES={labels,key,group,collectionGroup,statusKeys,records};
})();
