const CACHE_NAME = 'boardgame-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// 安装并缓存资源
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 离线拦截请求
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});