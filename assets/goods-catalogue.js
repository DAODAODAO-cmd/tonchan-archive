// Detailed catalogue views use the same goods record and keep its original pictures.
(() => {
  const key=new URLSearchParams(location.search).get('goods');
  if(!key)return;
  const goods=[...window.HUB.goods,...window.HUB.pastGoods].find(g=>(g.date||'')+'|'+g.title===key&&g.catalogue);
  if(!goods)return;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const image=u=>window.archiveMediaUrl(u);
  const external=(u,t)=>`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(t)}</a>`;
  const items=goods.items.filter(item=>!item.hiddenFromCharacterCatalogue);
  const groups=['全部',...new Set(items.map(i=>i.group).filter(Boolean))];
  const product=item=>`<figure class="product-card" data-product-group="${esc(item.group||'')}">${item.img?`<a class="picture" href="${esc(image(item.img))}" target="_blank" rel="noopener noreferrer"><img src="${esc(image(item.img))}" alt="${esc(item.t)}" loading="lazy"></a>`:'<div class="product-pending">官方图片待公开</div>'}<figcaption><span class="product-group">${esc(item.group||'')}</span><b>${esc(item.t)}</b>${item.price?'<span class="product-price">'+esc(item.price)+'</span>':''}<details><summary>商品规格与图片</summary><p>${esc(item.note||'')}</p>${item.contents?'<ul>'+item.contents.map(t=>'<li>'+esc(t)+'</li>').join('')+'</ul>':''}${(item.extraImages||[]).map(i=>`<a class="picture extra-picture" href="${esc(image(i.img))}" target="_blank" rel="noopener noreferrer"><img src="${esc(image(i.img))}" alt="${esc(i.t)}" loading="lazy"></a><small>${esc(i.t)}</small>`).join('')}</details></figcaption></figure>`;
  document.getElementById('detail').innerHTML=`<article class="intro"><div class="meta">公演周边</div><h1>${esc(goods.title)}</h1><p>${esc(goods.scope||'')}</p><p class="meta">${items.length} 类商品，点图片可查看大图；价格为官网公开标价。</p><ul>${goods.points.map(p=>'<li>'+esc(p)+'</li>').join('')}</ul></article><section class="block"><h2>单品与套组</h2><nav class="catalogue-filters" id="catalogueFilters" aria-label="周边类别">${groups.map((t,k)=>`<button type="button" data-product-filter="${esc(t)}" aria-pressed="${k===0}">${esc(t)}</button>`).join('')}</nav><div class="product-grid">${items.map(product).join('')}</div></section>`;
  document.getElementById('catalogueFilters').onclick=event=>{
    const button=event.target.closest('[data-product-filter]');if(!button)return;
    for(const b of document.querySelectorAll('[data-product-filter]'))b.setAttribute('aria-pressed',String(b===button));
    for(const card of document.querySelectorAll('[data-product-group]'))card.hidden=button.dataset.productFilter!=='全部'&&card.dataset.productGroup!==button.dataset.productFilter;
  };
})();
