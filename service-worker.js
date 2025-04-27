self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('baby-tracker-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './app.js',
        'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
