const CACHE_NAME = 'waddle-v2';
const FILES_TO_CACHE = ['./',
  './index.html',
  './static/Waddle/toolBox.xml',
  './static/Waddle/workspace.xml',
  './static/Waddle/tutorials/hello.waddle',
  './static/Waddle/tutorials/hyperlink.waddle',
  './static/Waddle/tutorials/invisiblewidget.waddle',
  './static/Waddle/tutorials/visiblewidget.waddle'
];

// Install SW
self.addEventListener('install', e => {
  console.log('[Service Worker] Install');
  // 添加预缓存文件
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      self.skipWaiting();  // 如果检测到新的service worker文件，就会立即替换掉旧的
      return cache.addAll(FILES_TO_CACHE);
    }),
  );
});

self.addEventListener('fetch', function (e) {
    // 如果有cache则直接返回，否则通过fetch请求
    e.respondWith(
        caches.match(e.request).then(function (cache) {
            return cache || fetch(e.request);
        }).catch(function (err) {
            console.log(err);
            //return fetch(e.request);
        })
    );
});