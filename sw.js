// Service Worker — sem cache, sempre busca rede
const CACHE_NAME = 'ipf-v5-nocache';

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(key) {
        console.log('SW: deletando cache', key);
        return caches.delete(key);
      }));
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Sempre busca da rede, sem cache
self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request.clone()).catch(function() {
      return new Response('Offline - reabra quando tiver conexao', {
        status: 503,
        headers: {'Content-Type': 'text/plain; charset=utf-8'}
      });
    })
  );
});
