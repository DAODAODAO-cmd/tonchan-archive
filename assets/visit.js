/* 访问统计：只记国家/城市、页面、来源、设备，不存 IP。一天内同一浏览器每页只记一次。 */
(function(){
  var URL_='https://kgifcpdajnyhxxmenazz.supabase.co', KEY='sb_publishable_Bvg4r_n3JiokW3cY3NDo3A_9M2CNfaU';
  if(!KEY) return;
  try{
    var page=location.pathname.split('/').pop()||'index.html';
    var day=new Date().toISOString().slice(0,10), mark='tc_v_'+page+'_'+day;
    if(localStorage.getItem(mark)) return;
    localStorage.setItem(mark,'1');
  }catch(e){}
  var ref=''; try{ ref=document.referrer?new URL(document.referrer).hostname:''; }catch(e){}
  if(ref===location.hostname) ref='';
  var dev=/Mobi|Android|iPhone/i.test(navigator.userAgent)?'手机':(/iPad|Tablet/i.test(navigator.userAgent)?'平板':'电脑');
  function send(country,city){
    fetch(URL_+'/rest/v1/visits',{method:'POST',headers:{'apikey':KEY,'Content-Type':'application/json','Prefer':'return=minimal'},
      body:JSON.stringify({country:country||null,city:city||null,page:page,referrer:ref||null,device:dev}),keepalive:true}).catch(function(){});
  }
  fetch('https://ipapi.co/json/').then(function(r){return r.json()}).then(function(j){send(j.country_name,j.city)}).catch(function(){send(null,null)});
})();
