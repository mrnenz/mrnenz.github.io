self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/src/css/app.css',
          '/src/js/app.js',
          '/manifest.json',
          '/favicon.ico',
          '/src/icons/icon-72x72.png',
          '/src/icons/icon-96x96.png',
          '/src/icons/icon-128x128.png',
          '/src/icons/icon-144x144.png',
          '/src/icons/icon-152x152.png',
          '/src/icons/icon-192x192.png',
          '/src/icons/icon-384x384.png',
          '/src/icons/icon-512x512.png'
        ])
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});
