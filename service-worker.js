

const cacheName = "pwa";
const filesToCache = [
  '/pwa',
  '/pwa/index.html',
  '/pwa/css/style.css',
  '/pwa/js/main.js'
];

// Listen for install event, set callback
self.addEventListener('install', function(e) {
	e.waitUntil(caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener('activate', function(e) {e.respondWith(caches.match(e.request).then(function(response) {return response || fetch(e.request);
    })
  );
});
