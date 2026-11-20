// usage: node tools/.addbro.js 2022.05=cd:1301507635 2024.01=goodsGame:2110645xxx
const fs=require('fs'),crypto=require('crypto');
let p='data/archive.js',s=fs.readFileSync(p,'utf8'),i=s.indexOf('window.ARCHIVE');global.window={};eval(s);const A=window.ARCHIVE;
let p2='data/hub.js',s2=fs.readFileSync(p2,'utf8'),i2=s2.indexOf('window.HUB');eval(s2);const H=window.HUB;const g=H.pastGoods.find(x=>x.id==='we_bromide_all');
let man=fs.readFileSync('tools/image-manifest.tsv','utf8').trim().split('\n');
for(const a of process.argv.slice(2)){const [t,v]=a.split('=');const [cat,id]=v.split(':');const U='https://7net.omni7.jp/on/demandware.static/-/Sites-'+cat+'-m-catalog/ja_JP/033131/'+id+'.jpg';
 const e=A.events.find(x=>x.id==='bro_'+t.replace('.',''));if(e&&!e.images.some(m=>m.url===U))e.images.unshift({url:U,caption:'7net 官方商品图',source:'ワタナベ商店（7net）'});
 if(!g.items.some(x=>x.t===t))g.items.push({t,img:U,href:U});
 const h=crypto.createHash('sha1').update(U).digest('hex').slice(0,16);if(!man.some(l=>l.startsWith(U+'\t')))man.push(U+'\tassets/img/ext/'+h+'.jpg');console.log('added',t,!!e)}
g.items.sort((a,b)=>b.t.localeCompare(a.t));g.points[0]='7net官方商品图，每月一张四张合拍，共'+g.items.length+'个月';
fs.writeFileSync(p,s.slice(0,i)+'window.ARCHIVE = '+JSON.stringify(A,null,1)+';\n');fs.writeFileSync(p2,s2.slice(0,i2)+'window.HUB = '+JSON.stringify(H,null,1)+';\n');fs.writeFileSync('tools/image-manifest.tsv',man.join('\n')+'\n');
