importScripts(
  'https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js'
)

firebase.initializeApp({
  apiKey: 'AIzaSyCgKWEY2alGlmbbTU_zfydx-Jy-_HSMoo4',
  authDomain: 'pinchat-me.firebaseapp.com',
  databaseURL: 'https://pinchat-me.firebaseio.com',
  projectId: 'pinchat-me',
  storageBucket: 'pinchat-me.appspot.com',
  messagingSenderId: '83845336238',
  appId: '1:83845336238:web:3ff0ef49789044ae1ef13f',
  measurementId: 'G-RSX512HZZD'
})
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil(
    clients
      .matchAll({
        type: 'window'
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) return client.focus()
        }
        try {
          const { room } = JSON.parse(
            event.notification.data.FCM_MSG.data.payload
          )
          return clients.openWindow(`/?roomId=${room}`)
        } catch (e) {
          return clients.openWindow('/')
        }
      })
  )
})
const isSupported = firebase.messaging.isSupported()
if (isSupported) {
  const messaging = firebase.messaging()
  messaging.onBackgroundMessage(({ notification: { title, body, image } }) => {
    console.log('Background message received. ', title, body, image)
  })
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('../firebase-messaging-sw.js')
    .then(function (registration) {
      console.log('Registration successful, scope is:', registration.scope)
    })
    .catch(function (err) {
      console.log('Service worker registration failed, error:', err)
    })
}
