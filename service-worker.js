// Service worker disabled — unregisters itself on any browser that has it cached.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => {
  self.registration.unregister().then(() => {
    self.clients.matchAll({ type: 'window' }).then((clients) => {
      clients.forEach((client) => client.navigate(client.url));
    });
  });
});
