/* One navigation for every page; archive records stay in their original data files. */
(() => {
  const paths={home:'index.html',now:'index.html?view=now',works:'index.html?view=works',goods:'index.html?view=goods',videos:'index.html?view=videos',about:'index.html?view=about'};
  const labels={home:'首页',now:'近况',works:'作品',goods:'图片与周边',videos:'视频',about:'个人资料'};
  const root=document.documentElement;
  const page=root.dataset.page;
  const params=new URLSearchParams(location.search);
  let current=page==='hub'?root.dataset.view:page==='detail'?(root.dataset.detailGroup||'works'):({schedule:'now',news:'now',stage:'works',screen:'works',live:'works',goods:'goods',audio:'goods',mag:'goods',photo:'goods',videos:'videos'}[params.get('g')]||'more');
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  document.querySelectorAll('.tabbar,.sheet').forEach(el=>el.remove());
  const top=document.querySelector('.nav .pills');
  if(top)top.innerHTML=Object.entries(paths).map(([k,u])=>`<a href="${u}"${current===k?' aria-current="page"':''}>${labels[k]}</a>`).join('')+'<a href="list.html?g=all">演艺年表</a>';
  const icons={home:'<path d="M3 11 12 4l9 7M6 9v11h12V9M10 20v-6h4v6"/>',now:'<rect x="4" y="5" width="16" height="15" rx="3"/><path d="M8 3v4M16 3v4M4 11h16"/>',works:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',goods:'<path d="M5 8h14l1 12H4zM9 8V6a3 3 0 0 1 6 0v2"/>',more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>'};
  const nav=document.createElement('nav');nav.className='mobile-nav';nav.setAttribute('aria-label','主要导航');
  nav.innerHTML=['home','now','works','goods','more'].map(k=>k==='more'?`<button type="button" aria-label="更多资料入口" aria-haspopup="dialog" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true">${icons[k]}</svg><span>更多</span></button>`:`<a href="${paths[k]}"${current===k?' aria-current="page"':''}><svg viewBox="0 0 24 24" aria-hidden="true">${icons[k]}</svg><span>${k==='goods'?'收藏':labels[k]}</span></a>`).join('');
  document.body.append(nav);
  const dialog=document.createElement('dialog');dialog.className='archive-menu';dialog.setAttribute('aria-labelledby','archive-menu-title');
  dialog.innerHTML='<h2 id="archive-menu-title">探索档案</h2><div class="menu-links">'+[['音像资料','list.html?g=audio'],['视频资料',paths.videos],['个人资料',paths.about],['演艺年表','list.html?g=all'],['完整日程','list.html?g=schedule'],['杂志档案','list.html?g=mag'],['写真与出版','list.html?g=photo'],['采访与连载','list.html?g=int'],['广播与节目','list.html?g=radio']].map(([t,u])=>`<a href="${u}">${t}</a>`).join('')+'</div><button type="button">关闭</button>';
  document.body.append(dialog);
  const more=nav.querySelector('button');
  more.onclick=()=>{dialog.showModal();more.setAttribute('aria-expanded','true')};
  dialog.querySelector('button').onclick=()=>dialog.close();
  dialog.addEventListener('close',()=>{more.setAttribute('aria-expanded','false');more.focus()});
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
  if(page==='hub'){
    const view=root.dataset.view;
    if(view!=='home'&&view!=='all'){
      const heading=document.createElement('div');heading.className='wrap view-heading';
      heading.innerHTML=`<h1>${esc(labels[view]||'档案')}</h1><p>${esc({works:'作品资料与角色造型，从这里开始找。',goods:'现有周边、商品套图与过往收藏。',now:'查近期安排，或切换查看新公布的消息。',videos:'按类型与平台浏览视频资料。',about:'基本资料、经历与官方渠道。'}[view])}</p>`;
      if(view==='now')heading.innerHTML+='<nav class="near-tabs" aria-label="近况浏览方式">'+[['schedule','近况与日程'],['news','消息更新']].map(([k,t])=>`<a href="index.html?view=now&tab=${k}"${(params.get('tab')==='news'?'news':'schedule')===k?' aria-current="page"':''}>${t}</a>`).join('')+'</nav>';
      if(view==='works')heading.innerHTML+='<nav class="near-tabs" aria-label="作品浏览方式">'+[['works','作品档案'],['roles','角色图鉴'],['cards','海报角色卡']].map(([k,t])=>`<a href="index.html?view=works&mode=${k}"${root.dataset.mode===k?' aria-current="page"':''}>${t}</a>`).join('')+'</nav>';
      if(view==='goods')heading.innerHTML+='<nav class="near-tabs" aria-label="收藏分类"><a href="index.html?view=goods" aria-current="page">周边图鉴</a><a href="list.html?g=audio">音像资料</a></nav>';
      document.querySelector('main').prepend(heading);
    }
    document.querySelector('.logo').href='index.html';
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      const hash=a.getAttribute('href'),id=hash.slice(1);
      const target={now:'now',upcoming:'now',news:'now',works:'works',roles:'works',goods:'goods',videos:'videos',about:'about',profile:'about',says:'about',links:'about'}[id];
      if(target&&view!==target&&view!=='all')a.href=paths[target]+hash;
    });
  }
  // Old record bookmarks continue to work. New cards use the same stable record ID.
  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href]');if(!a)return;
    const remember=()=>{
      const destination=new URL(a.href,location.href);
      if(destination.origin===location.origin&&destination.pathname.endsWith('/detail.html')){
        try{sessionStorage.setItem('tonchan-detail-return:'+destination.href,location.href)}catch{}
      }
    };
    remember();
    if(page==='detail')return;
    if(a.closest('#newsList,.news')){
      const n=window.HUB?.news.find(n=>n.title===a.textContent.trim());
      if(n){a.href='detail.html?news='+encodeURIComponent(n.date+'|'+n.title);a.removeAttribute('target');remember();return}
    }
    const u=new URL(a.href,location.href);
    if(u.origin===location.origin&&u.pathname.endsWith('/list.html')&&u.hash){
      let id;try{id=decodeURIComponent(u.hash.slice(1))}catch{return}
      if(window.ARCHIVE?.events.some(x=>x.id===id)){
        a.href='detail.html?id='+encodeURIComponent(id);a.removeAttribute('target');
        remember();
      }
    }
  },true);
})();
