// Service worker: guarda la app y las librerías para usarla sin internet.
const CACHE = 'evaluador-formativo-v2';
const LOCAL = ['./','index.html','manifest.json','favicon.ico','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png','icons/favicon-32.png','icons/favicon-16.png'];
const CDN = [
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(async c=>{
    await c.addAll(LOCAL);
    for(const u of CDN){ try{ await c.add(u); }catch(_){} }
  }).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(
    caches.match(e.request).then(hit=>{
      const red = fetch(e.request).then(r=>{
        if(r && (r.ok || r.type==='opaque')){ const cp=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cp)); }
        return r;
      }).catch(()=>hit);
      return hit || red;
    })
  );
});
