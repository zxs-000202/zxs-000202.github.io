/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e0dc68fa513627192bffeb32656204ab"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.cfdc75b2.js",
    "revision": "1523ab2e9237d015413223374b0b45be"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.8de5ed19.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.fd6a517a.js",
    "revision": "9b90ef0f71190ca8f76b01c7fe6d870f"
  },
  {
    "url": "assets/js/16.1f0e2f0a.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.42482b2c.js",
    "revision": "75746639d352033c7a1a9a7ae69b7bb7"
  },
  {
    "url": "assets/js/18.1ea1d894.js",
    "revision": "0ce5adb05e88c5cc6415e2b04c81844f"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.1b68a984.js",
    "revision": "8606d2b9734b455d1b52c96d044a5fc5"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "8dc2405a568cbc24d425f6b3688be1f9"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c2a0861959e60680909b97fc36687198"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1d75630203494badcf13ec82ab325846"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "10ee69863bb664b74f41097148ab5e52"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d5f09918aadf38f26a04bae1cbbd9c0b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b79fd5de7bbad21b88b2df24ba3cb9b5"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "f8f960dbd9d2483f7b818763031037b9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "22ef905d49757e5f2f3d9f04fba2643f"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "7ea7d05624efb0a612fda47c0ca5bf96"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "cadb20ad90dfdaa912e01ba4e6ff6005"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b85010bfe8878226c23826750ecc3883"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8bb489f9eda91f79688f2eaae05b0a2e"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ba605303427c3cc518802064222dcfce"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "b85bf3050fecb7242ad83b8f26559e87"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "3f254df1998477a709057c686913b69b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d50ae9ea5528717e2b0d51ffe3aefa86"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "175d50008da4b0727a68d5038b065057"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "cafcfe2aebdb2c4738e6966093b1c486"
  },
  {
    "url": "timeline/index.html",
    "revision": "feef98e5c104ef1586c2e8241c5e33ff"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "724d87706d823d32f37fa23564a061fc"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "c457176f9f4d7497fe3d502783bc900b"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "69e988c7bfddb8a07f9f6dec342c1d56"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "02af39bf61ab344c983524e147ff6ca9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6b1d96cbfd6b3492c8fb92e9b9ec12bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
