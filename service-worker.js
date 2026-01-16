/* ===============================
   Portalhoki77 Service Worker
   SAFEST VERSION (PRODUCTION)
================================ */

const CACHE_NAME = 'portalhoki77-core-v1';
const BASE_PATH = '/site';

// ===============================
// INSTALL — cache CORE ONLY
// ===============================
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([
        `${BASE_PATH}/`,
        `${BASE_PATH}/index.html`,
        `${BASE_PATH}/style.css`,
        `${BASE_PATH}/manifest.json`,
        `${BASE_PATH}/favicon.ico`,
      ])
    )
  );
});

// ===============================
// ACTIVATE — clean old cache
// ===============================
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => key !== CACHE_NAME && caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ===============================
// FETCH — smart & safe
// ===============================
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // HTML & CSS → network first
  if (
    event.request.destination === 'document' ||
    event.request.destination === 'style'
  ) {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match(`${BASE_PATH}/index.html`)
      )
    );
    return;
  }

  // Images (including OG image) → runtime cache
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(event.request).then((cached) =>
          cached ||
          fetch(event.request).then((response) => {
            cache.put(event.request, response.clone());
            return response;
          })
        )
      )
    );
    return;
  }

  event.respondWith(fetch(event.request));
});
