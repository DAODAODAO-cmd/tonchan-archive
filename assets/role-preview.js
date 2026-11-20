// A single original poster/role card, fitted to a phone screenshot.
(() => {
  const strip=document.getElementById('roleStrip');
  if(!strip)return;
  const cards=[...strip.querySelectorAll('.rl')];
  const button=document.createElement('button');button.type='button';button.className='role-capture';button.textContent='单张截图';
  document.querySelector('#roles .rnav').prepend(button);
  const dialog=document.createElement('dialog');dialog.className='role-preview';dialog.setAttribute('aria-label','角色卡截图查看');
  dialog.innerHTML='<div class="role-preview-top"><span>完整角色卡</span><button type="button" data-close>关闭</button></div><div class="role-preview-card"></div><div class="role-preview-controls"><button type="button" data-prev>上一张</button><span aria-live="polite"></span><button type="button" data-next>下一张</button></div>';
  document.body.append(dialog);let index=0;
  const fit=container=>{
    for(const name of container.querySelectorAll('.rl-nm')){
      const height=name.clientHeight-16;
      if(height<=0)continue;
      for(const word of name.querySelectorAll('b'))word.style.fontSize=Math.max(10,Math.min(28,Math.floor(height/(word.textContent.length*1.03))))+'px';
      const small=name.querySelector('small');
      if(small){small.style.whiteSpace='';small.style.fontSize='';let size=parseFloat(getComputedStyle(small).fontSize)||8;
        while(size>5.5&&small.scrollHeight>name.clientHeight-8){size-=.5;small.style.fontSize=size+'px'}
        if(small.scrollHeight>name.clientHeight-8)small.style.whiteSpace='normal';}
    }
    for(const work of container.querySelectorAll('.rl-wk b')){work.style.fontSize='';let size=parseFloat(getComputedStyle(work).fontSize)||12;
      while(size>9&&(work.scrollHeight>work.parentNode.clientHeight||work.scrollWidth>work.parentNode.clientWidth)){size-=.5;work.style.fontSize=size+'px'}}
  };
  const show=()=>{
    const copy=cards[index].cloneNode(true);copy.removeAttribute('href');copy.tabIndex=-1;copy.classList.add('fit-role');
    dialog.querySelector('.role-preview-card').replaceChildren(copy);
    dialog.querySelector('[aria-live]').textContent=(index+1)+' / '+cards.length;
    requestAnimationFrame(()=>fit(dialog));
  };
  button.onclick=()=>{
    const x=strip.scrollLeft;
    index=Math.max(0,cards.findIndex(card=>card.offsetLeft>=x));
    dialog.showModal();show();
  };
  dialog.querySelector('[data-close]').onclick=()=>dialog.close();
  dialog.querySelector('[data-prev]').onclick=()=>{index=(index+cards.length-1)%cards.length;show()};
  dialog.querySelector('[data-next]').onclick=()=>{index=(index+1)%cards.length;show()};
  dialog.addEventListener('close',()=>button.focus());
  const resize=new ResizeObserver(()=>{if(matchMedia('(max-width:720px)').matches)fit(strip);if(dialog.open)fit(dialog)});
  resize.observe(strip);resize.observe(dialog);
})();
