self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('gotas-cache').then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'styles.css',
                'script.js',
                'alarma.mp3'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
