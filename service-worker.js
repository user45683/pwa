


self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pwa').then((cache) => cache.addAll([
  '/pwa',
  '/pwa/index.html',
  '/pwa/css/style.css',
  '/pwa/js/main.js'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
