// Firebase Messaging Service Worker — IPF Filadélfia Conecta
// Arquivo: firebase-messaging-sw.js (deve ser servido na raiz do domínio)
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAz8bWXxXmAmowcTRc_jOLclEB4LMIPEmQ",
  authDomain: "filadelfia-conecta.firebaseapp.com",
  projectId: "filadelfia-conecta",
  storageBucket: "filadelfia-conecta.firebasestorage.app",
  messagingSenderId: "805912319328",
  appId: "1:805912319328:web:7a1401be7e60c53a413a05"
});

const messaging = firebase.messaging();

// Handler de mensagens em background
messaging.onBackgroundMessage(function(payload) {
  const notif = payload.notification || {};
  const data  = payload.data || {};

  const title = notif.title || data.titulo || 'Igreja Presbiteriana Filadélfia';
  const body  = notif.body  || data.corpo  || '';
  const icon  = notif.icon  || '/icon-192.png';
  const badge = '/icon-192.png';
  const tag   = data.categoria || 'geral';

  const categoriaIcons = {
    avisos: '📢', eventos: '📅', cultos: '⛪',
    devocionais: '📖', comunicados: '📣', live: '📺'
  };
  const tagIcon = categoriaIcons[tag] || '✝';

  self.registration.showNotification(tagIcon + ' ' + title, {
    body: body,
    icon: icon,
    badge: badge,
    tag: tag,
    data: payload.data || {},
    actions: data.link ? [{ action: 'open', title: 'Abrir' }] : [],
    vibrate: [200, 100, 200],
    requireInteraction: false
  });
});

// Clique na notificação
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const data = event.notification.data || {};
  const url  = data.link || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(cList) {
      for (const c of cList) {
        if (c.url.includes(self.location.origin) && 'focus' in c) {
          return c.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
