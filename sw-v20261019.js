// Service worker v20261019 — red primero (siempre intenta la versión más nueva) y caché solo como respaldo sin internet.
const CACHE = 'evaluador-formativo-v20261019';
self.addEventListener('install', e=>{ self.skipWaiting(); });
self.addEventListener('activate', e=>{
  e.waitUntil((async()=>{
    const ks = await caches.keys();
    await Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', e=>{
  if(e.request.method !== 'GET') return;
  e.respondWith((async()=>{
    try{
      const res = await fetch(e.request, {cache:'no-store'});
      if(res && res.ok && new URL(e.request.url).origin === location.origin){
        const c = await caches.open(CACHE); c.put(e.request, res.clone());
      }
      return res;
    }catch(err){
      const hit = await caches.match(e.request);
      if(hit) return hit;
      throw err;
    }
  })());
});
