const V='kt-202610271809',M='kt-media-1',PRE=["./","index.html","tfonts.css","fonts.css","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png"],MED=/\/(audio\d?\.(js|bin)|k4\.(js|bin)|badges\.js|music\/[^/]+\.js|natsnd\/[^/]+\.(webm|mp3))$/;
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(PRE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V&&k!==M).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(/\/music\/[^/]+\.(webm|mp3)$/.test(u.pathname)||r.cache==='no-store'||/supabase\.co$/.test(u.hostname)||r.headers.has('authorization'))return;
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(x=>{const y=x.clone();caches.open(V).then(c=>c.put('index.html',y));return x}).catch(()=>caches.match('index.html')));return}
 if(u.origin===location.origin&&MED.test(u.pathname)){e.respondWith(caches.open(M).then(c=>c.match(r,{ignoreSearch:true}).then(h=>h||fetch(r).then(x=>{if(x.ok)c.put(r,x.clone());return x}))));return}
 if(u.origin!==location.origin){e.respondWith(caches.match(r).then(h=>h||fetch(r).then(x=>{if(x.ok){const y=x.clone();caches.open(V).then(c=>c.put(r,y))}return x})));return}
 e.respondWith(caches.match(r).then(h=>{const n=fetch(r).then(x=>{if(x.ok){const y=x.clone();caches.open(V).then(c=>c.put(r,y))}return x}).catch(()=>h);return h||n}))});
