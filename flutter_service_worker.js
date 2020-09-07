'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/objects/74/50077786afea9d347a4bf5cea1bbd5297a8732": "4c06d40660cd7868870230aa990c2424",
".git/objects/06/d99d3cad3b45a4a30908f255620a49599f3c82": "c80772205dff64bc9d045854bf7c4437",
".git/objects/0a/831035344b1db117171b462466c61c84b27bb4": "9dcd3fe8141a0c00fd65369f02d75839",
".git/objects/0c/cc62aa2f81f0bbc3d6ee6d14c1f9ff407f4fb7": "211f6e6e0a1d76f4e013da14c185c72a",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1a/e762be2d0167e646579e7d70bceea028e017e8": "b9b694540f8d228ff2c57eda98572a52",
".git/objects/1e/bdf545b55ac3aa15a4a60d1f5917d557f36d6c": "5eab0552797d85afbce48ae1b0834b2f",
".git/objects/29/39a22199f02c5cccf7c7026b750744dcb721da": "f3edb249e7da4687f27cb773247d12a3",
".git/objects/2c/0a68ceb1cca4311bea3a8e80e57a05edbb2f7e": "c2163ae8f61d7acc4d3a8d956d960098",
".git/objects/2f/64044d0d1d9e46a8c83ac2801dfaff940065af": "97f498e3b3db17ec17dda259a6bf5a83",
".git/objects/37/8b303e9715b9642f82895765e2693f96e4fd4e": "40cdc5f5d7bb794444de1c74acaed87e",
".git/objects/39/6680c0706bf1f9914c2113987ab53d630db2e2": "eb5bbd8ffe96c0fffabced10088ec614",
".git/objects/3b/191ec95049a8f1cb690a682931ba8952a6a9b5": "cca6d4bcc597001fa1f2209f21964891",
".git/objects/3b/d651ed9b1ff5a09ff6366bdb31afabd0f72ee2": "bf70f71e4ded08cdf30567a610233f33",
".git/objects/3d/865adfef610bf4a754b0346ea6991fdc60384c": "e6fdbbce2ef3ea39f500e2a9d50340d7",
".git/objects/3d/bf1505cffc421d84d28c0b774e8b8ef7edbf6e": "5f0d78b7c0ec77c5c8b1ec565cfa7c78",
".git/objects/41/637057096de6a63783474578401634b2c3648b": "5fa59ecbc04c76397339ac4c7af863bc",
".git/objects/46/fbc7f3b02e25a3dce183f17dae37b385358676": "90b28845320e3c10f3637e3c0a29438a",
".git/objects/52/dbf2c61545f9dcc30ace9175ac95d746733e5e": "b204b5dffd2f6555ad87d03a9f806bb5",
".git/objects/5a/46984825da04de89154dad200642f920d5ec2e": "73670146a8588888f573f21c76eef336",
".git/objects/5b/e8f3e90e8c6c82c7d219eb27f5f32e5d77ee97": "e95fa9936cd87196671f96834b70167f",
".git/objects/65/532c5b0c6762bd80702a4a210031751f14c7d5": "4df62d4cb1536d8438e010c5927e6edc",
".git/objects/6a/206f20c99248ac4e80ac35e5151157fd7f9c98": "0ee1b6bff9d0142fb538a95c1491f475",
".git/objects/6c/eb63578abecd90d08b448def191d163e2655d4": "9e4c24a332ebb0ea400d8eeb9a287eb4",
".git/objects/70/eeb41920301404dd443c7c7d68b29617fda0f6": "4518241919f543af23da9b34fc225a4f",
".git/objects/78/aefe91bc4ae6fc580ce322dd192a9a2b0f96e1": "b4f09214225656a0311657c56e969ffe",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/82/abe47d0b9bf17e67fd7207d3465eb73e250cd8": "18fcbfd673d9ef9b37599a9ee3207020",
".git/objects/89/fd0c18aada694d80ed1ba8a129676126d90fae": "d5693344aaedbcf48aade07de2a5e039",
".git/objects/8c/d6a09fe8c35361362f521a2d78435d2a60145a": "9cda7d597abe5a4056928bb834d28cde",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/97/1f60f65e42a0e7fdfc134f5dc4e36037578220": "ce766e391a7663657423c884b4edf3ed",
".git/objects/97/9c1765f56752019e59b1be64cb62b4fa57e7ec": "c6e708bd4abf617530e7f8fa7cf41971",
".git/objects/a0/fd3d56c0175bc58cfefa47a4c15bb04df5f251": "739654b29e46a665e4e5cac66f3c4e0a",
".git/objects/a8/fb37e010fa04d477e68eb4e0d8f172a2c7cbcc": "c0ae5aa8aff12e1cba4f0cc67faf457a",
".git/objects/ab/40acce511a9f42ac3c504ac7d5f16f59facb0d": "8d880b65b99538ef8972fc2efd708155",
".git/objects/b1/e44666ea44de1ccf60f689dc12320d28a8d094": "ddad22dfe0495735c27bd441167f44fd",
".git/objects/b4/796249a33d487501c01640d2aa9c4f17f61d10": "14b4f29383c986ceaa648d83355f14d8",
".git/objects/bc/9655cb73ef590ae5d987e847d6ac978a9a2d5a": "d08b083135bb57ab2066ad810bed1c29",
".git/objects/be/78aef65d2991e3f7e1f3bc24f8497bc35705de": "d1f296393978689bbefc97a173d51d3b",
".git/objects/c8/6d5c23030a2dffdab7a2d24c8593c60601de0b": "d07aa41c8cef2e8346fead0053ab040d",
".git/objects/cf/20090fb87541b51a7dbc5bedd8196467efc0b9": "356375ada5806ae727c3ab32b941c111",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/df/1e90a9313c0ecef898a751c36dece05e9e8aaf": "d2a125abb697b6d4194568f17c610d10",
".git/objects/e3/fe32203205ecedecf939f9036f46864f3d5e95": "d37aec4f8c7dfdea001c2b40b44f355c",
".git/objects/e7/38f4bfd3c406f2d19d953fffb09c0f4fd58871": "fd697acb1d0c325a7f17b270be40e697",
".git/objects/ee/c19f5ade4361d0e4a0214bf5446a8faad698f1": "6e8a61ab96b3413c8c510700f9908b25",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"assets/AssetManifest.json": "3556699b1e9ebcee12c4e8a72009a2e4",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/3600338.jpg": "d111373260e22a26fc2ce1cdba832ddb",
"assets/images/5e81d3125836db0451c3427e_pack-grid-thumbnail.png": "120e14b90368e781691bb3862612501c",
"assets/images/body-temperature-check-before-entry-non-contact-vector-30707739.jpg": "634c8f8c2458da2f8c9182aa910e4f64",
"assets/images/fd895c44fac980a805aebcfbf6f597fe.gif": "e227cab90338f4ea69c84197d8da5e16",
"assets/images/home.gif": "e09b8b84825c201fa07b7a88f1ee290d",
"assets/images/HomeOption1.png": "159cce13c6d78cbff64040be55a97f1d",
"assets/images/HomeOption2.png": "de184fa34afb534a31c4fb7271f2c025",
"assets/images/images%2520(1).jpeg": "a4715ae77ef13d7a7fd09c6a81606cd3",
"assets/images/images%2520(3).jpeg": "366aa00582dcff2a5151fedfa123b92e",
"assets/images/images%2520(4).jpeg": "56feea1939b4b380bfc122766bae116e",
"assets/images/prevention/Ellipse%25209%2520(1).png": "0bbac477b468b94bcc6240087d680a17",
"assets/images/prevention/Handwashing.png": "7f06803a98837ad72f48579e5df70e38",
"assets/images/prevention/Requirements/gloves.png": "d9755f9c8497f642df114d5e2e983de2",
"assets/images/prevention/Requirements/Mask.png": "7e8ce2138c484e72a0e19c9d1502b608",
"assets/images/prevention/Requirements/sanitizer.png": "501e8dbdfe9aa384f9b074a8a95c8d2e",
"assets/images/prevention/Requirements/Soap.png": "33a54f62c82edc266b2a30dfd0e997e7",
"assets/images/prevention/SocialDistance.png": "754253f89adf99667fe524dfc96bebee",
"assets/images/prevention/SocialDistance2.png": "e0c0a3b854c747cfe5a32784edb80342",
"assets/images/prevention/SocialDistancing3.png": "8cbc32be3ffeb1b47d91676c5ec32497",
"assets/images/symtops/Breathing.jpg": "cfef7e490378a8df3931b3271d4c896b",
"assets/images/symtops/DifficultyInBreathing.png": "375dbd8d876f122b4eee69de181a3463",
"assets/images/symtops/Fever.png": "79a7aaf5a07cb8abfb8c0529864ea92c",
"assets/images/symtops/Fever2.png": "beb7c23aa27b3ede51ca5bfec256a4b5",
"assets/images/symtops/profilepicture.jpg": "d97f3dd8aa98ee46e250468a0c38f364",
"assets/images/symtops/Tiredness.png": "449082d815f29bc4ed5050738be8f421",
"assets/images/symtops/Tiredness2.png": "d5b09dca247f2e0c33cac8cabaed35b2",
"assets/images/Test/Test.png": "234708d83d2b568ae801a173009dfbd8",
"assets/images/Test/travel.png": "7a4f097c932a3127a1a8da8a384eac36",
"assets/NOTICES": "de5d04d3b4303020982b8d32dc3c8edd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f556c98bda8646ee41897128b0a70727",
"/": "f556c98bda8646ee41897128b0a70727",
"main.dart.js": "cd236d99d1804efc44057533d6f3f80a",
"manifest.json": "0b8d1d768737878b8031a139fe180edf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
