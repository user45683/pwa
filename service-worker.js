

const cacheName = "pwa";
const filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
];

// Listen for install event, set callback
self.addEventListener('install', function(event) {
	event.waitUntil(caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener('activate', function(event) {event.respondWith(caches.match(e.request).then(function(response) {return response || fetch(event.request);
    })
  );
});
