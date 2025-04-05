self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker active.");
});

self.addEventListener("fetch", (event) => {
  // No caching for now (live updates always)
});
