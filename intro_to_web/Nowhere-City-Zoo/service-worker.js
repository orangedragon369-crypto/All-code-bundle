const CACHE_NAME = 'my-simple-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // '/about.html',
  // '/contact.html',
  '/css/style.css',
  '/javascript/script.js',
  '/manifest.json',
  "service-worker.js",
  '/images/icon-192.png',
  '/images/icon-512.png',
];

// Install event: Cache the defined files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: Serve cached content when available, otherwise fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // No cache hit - fetch from network
        return fetch(event.request);
      })
  );
});

// Activate event: Clean up old caches (optional, but recommended for updates)
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});