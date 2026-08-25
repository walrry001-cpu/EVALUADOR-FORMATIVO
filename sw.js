// Service worker del Evaluador Formativo - 5.° E
// Cachea el "cascarón" de la app para que funcione sin internet.
// Las librerías externas (jsPDF, pdf.js) y la descarga de PDF
// siguen necesitando conexión la primera vez que se usan.
//
// IMPORTANTE: la página principal (index.html) usa estrategia
// "red primero, caché como respaldo": cada vez que hay internet,
// se revisa GitHub por una versión más nueva antes de mostrar algo.
// Así, cualquier cambio futuro al index.html (nuevos estudiantes,
// mejoras, etc.) se refleja de inmediato sin quedar "pegado" a una
// copia vieja guardada en el celular. Si no hay internet, se usa la
// última copia guardada para que la app siga funcionando offline.

const CACHE_NAME = 'evaluador-formativo-v2';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './favicon.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

function esPaginaPrincipal(request){
  if (request.mode === 'navigate') return true;
  const url = new URL(request.url);
  return url.pathname.endsWith('/index.html') || url.pathname.endsWith('/');
}

self.addEventListener('fetch', (event) => {
  // Solo intervenimos peticiones GET dentro del propio dominio.
  if (event.request.method !== 'GET') return;

  // Página principal: red primero (para tomar cambios nuevos de
  // inmediato), y solo si falla la red se usa la copia guardada.
  if (esPaginaPrincipal(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Resto de archivos (íconos, manifest, etc.): caché primero,
  // ya que rara vez cambian y así se ahorra datos.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          if (response.ok && event.request.url.startsWith(self.location.origin)) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
    })
  );
});
