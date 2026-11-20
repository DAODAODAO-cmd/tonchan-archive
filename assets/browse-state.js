// Restore filters and position when returning from a detail page.
(() => {
  const page=document.documentElement.dataset.page;
  if(!['hub','list'].includes(page))return;
  const key='tonchan-browse:'+location.pathname+location.search;
  let returning=false;
  try{returning=new URL(document.referrer).pathname.endsWith('/detail.html')}catch{}
  returning ||= performance.getEntriesByType('navigation')[0]?.type==='back_forward';
  try{if(sessionStorage.getItem('tonchan-restore')===location.href){returning=true;sessionStorage.removeItem('tonchan-restore')}}catch{}
  let saved;
  try{saved=returning?JSON.parse(sessionStorage.getItem(key)||'null'):null}catch{}
  if(saved){
    if(page==='list'){
      filt=saved.query||'';$('q').value=filt;vt=saved.vt||'全部';vp=saved.vp||'全平台';window.ac=saved.ac||'';
      draw();window.sbf=saved.sbf||'全部';draw();
    }else{
      if(saved.curG&&groups.some(x=>x.k===saved.curG)){curG=saved.curG;drawWorks()}
      if(saved.curV&&Object.hasOwn(VT,saved.curV)){curV=saved.curV;curP=saved.curP||'全平台';drawVids()}
      if(saved.gt&&GT.includes(saved.gt)){gt=saved.gt;gexp=!!saved.gexp;drawGoods()}
      if(saved.pf){pf=saved.pf;drawPast()}
      const roleButton=[...document.querySelectorAll('#roleChips button')].find(b=>b.dataset.f===saved.role);
      if(roleButton)roleButton.click();
      if(saved.roleExpanded&&!document.getElementById('roleMore').hidden)document.getElementById('roleMore').click();
    }
    if(!location.hash)requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo({top:saved.y||0,behavior:'instant'})));
  }
  addEventListener('pagehide',()=>{
    const state=page==='list'?{query:filt,vt,vp,ac:window.ac,sbf:window.sbf}:{curG,curV,curP,gt,gexp,pf,role:document.querySelector('#roleChips .on')?.dataset.f,roleExpanded:document.getElementById('roleMore').textContent==='收起'};
    state.y=scrollY;
    try{sessionStorage.setItem(key,JSON.stringify(state))}catch{}
  });
})();
