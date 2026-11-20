const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const ctx={window:{}};vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root,'assets/media-index.js'),'utf8'),ctx);
const media=ctx.window.ARCHIVE_MEDIA;
media.unavailable=JSON.parse(fs.readFileSync(path.join(root,'tools/media-cache-failed.json'),'utf8')).map(x=>x.url);
const groups=new Map();
const walk=directory=>{
  for(const entry of fs.readdirSync(directory,{withFileTypes:true})){
    const filename=path.join(directory,entry.name);
    if(entry.isDirectory()){walk(filename);continue}
    if(!/\.(?:png|jpe?g|gif|webp)$/i.test(filename))continue;
    const key=crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex');
    if(!groups.has(key))groups.set(key,[]);
    groups.get(key).push(path.relative(root,filename).replaceAll('\\','/'));
  }
};
walk(path.join(root,'assets/img'));
media.identity={};
for(const [key,files] of groups)if(files.length>1)for(const file of files)media.identity[file]=key;
fs.writeFileSync(path.join(root,'assets/media-index.js'),'window.ARCHIVE_MEDIA = '+JSON.stringify(media)+';\n');
console.log('Cached:',Object.keys(media.local).length,'unavailable:',media.unavailable.length,'duplicate image files indexed:',Object.keys(media.identity).length);
