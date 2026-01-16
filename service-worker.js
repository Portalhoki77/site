/* ===============================
   Portalhoki77 Service Worker
   FIXED for GitHub Pages (/site)
================================ */

const CACHE_NAME = 'portalhoki77-v2';
const BASE_PATH = '/site';

const ASSETS_TO_CACHE = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/style.css`,
  `${BASE_PATH}/manifest.json`,
  `${BASE_PATH}/favicon.ico`,

  // cache folder image (file harus dipanggil langsung)
  `${BASE_PATH}/img/logo.png`,
  `${BASE_PATH}/img/banner.webp`,
];

// ===============================
// INSTALL
// ===============================
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// ===============================
// ACTIVATE
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
// FETCH
// ===============================
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
          return response;
        })
        .catch(() => caches.match(`${BASE_PATH}/index.html`));
    })
  );
});
