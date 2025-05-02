self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('basquete-cache-v1').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './manifest.json',
          './style.css',       // se houver
          './script.js',       // se houver
          './icon-192.png',    // ícone
          './icon-512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });