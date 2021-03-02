
self.addEventListener('push', event => {
  let pushMsg = event.data.json();
  var actionTitle = { ...pushMsg.data.action }
  event.waitUntil(
    self.registration.showNotification(pushMsg.data.title, {
      body: pushMsg.data.body,
      icon: pushMsg.data.icon,
      actions: [
        {
          action: 'open',
          title: actionTitle[0]
        },
        {
          action: 'close',
          title: actionTitle[1]
        }
      ],
      data: pushMsg.data.redirectUrl,
      vibrate: pushMsg.data.vibrate
    })
  )

})


self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  if (event.action == 'open') {
    event.waitUntil(
      clients.openWindow(event.notification.data)
    );
  } else {
    event.notification.close();
  }
})



