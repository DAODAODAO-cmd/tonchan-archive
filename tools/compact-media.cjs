// Reuse existing image files; remove only redundant copies generated in img/cached.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),cache=path.join(root,'assets/img/cached');
const ctx={window:{}};vm.createContext(ctx);
for(const name of ['data/archive.js','assets/media-index.js'])vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),ctx);
const A=ctx.window.ARCHIVE,media=ctx.window.ARCHIVE_MEDIA;
for(const video of A.videos){
  const original=video.asset&&A.assets[video.asset];
  if(video.thumbnail&&original?.startsWith('assets/')&&fs.existsSync(path.join(root,original)))media.local[video.thumbnail]=original;
}
const hashes=new Map();
const hash=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const walk=directory=>{for(const item of fs.readdirSync(directory,{withFileTypes:true})){
  const file=path.join(directory,item.name);if(file===cache)continue;
  if(item.isDirectory())walk(file);else if(/\.(?:jpe?g|png|gif|webp)$/i.test(file))hashes.set(hash(file),path.relative(root,file).replaceAll('\\','/'));
}};
walk(path.join(root,'assets/img'));
for(const [url,relative] of Object.entries(media.local)){
  if(!relative.startsWith('assets/img/cached/'))continue;
  const file=path.resolve(root,relative);
  if(!file.startsWith(cache+path.sep)||!fs.existsSync(file))throw Error('Unexpected cached image path');
  const key=hash(file);if(hashes.has(key))media.local[url]=hashes.get(key);else hashes.set(key,relative);
}
const needed=new Set(Object.values(media.local));let removed=0;
for(const item of fs.readdirSync(cache,{withFileTypes:true})){
  if(!item.isFile())continue;
  const file=path.resolve(cache,item.name),relative=path.relative(root,file).replaceAll('\\','/');
  if(!file.startsWith(cache+path.sep))throw Error('Unexpected cache path');
  if(!needed.has(relative)){fs.unlinkSync(file);removed++}
}
media.unavailable=(media.unavailable||[]).filter(url=>!media.local[url]);
fs.writeFileSync(path.join(root,'assets/media-index.js'),'window.ARCHIVE_MEDIA = '+JSON.stringify(media)+';\n');
const failed=JSON.parse(fs.readFileSync(path.join(root,'tools/media-cache-failed.json'),'utf8')).filter(x=>!media.local[x.url]);
fs.writeFileSync(path.join(root,'tools/media-cache-failed.json'),JSON.stringify(failed,null,2)+'\n');
console.log('Removed redundant generated copies:',removed,'original files untouched.');
