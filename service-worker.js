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
    "revision": "1e675a6a8122dca422ee47988a405dd1"
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
    "url": "assets/js/12.bd626a2b.js",
    "revision": "09f4af06baaf275b5ac2d6cae2b0c79d"
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
    "url": "assets/js/15.980eb426.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
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
    "url": "assets/js/app.92671a08.js",
    "revision": "9f1e2d30e9f857ff31dcd9984515e43c"
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
    "revision": "085274061b8464397bbb660af17196c2"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d262de0fc2d90e7869611168ec3ac729"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "886732039f225ea1067f6011d024de8c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c0c16ebc7ab8c315355143a1ba32e0d7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "57a55098993cec244a49c3ba43607ae7"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f08a888db697707d4581dd0fc88d28e8"
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
    "revision": "3bd241912336c02c6f7d69122be0b6da"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a9a03ab19d387e5d1a5741656115e822"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "d713e8a71f1f982e8189645df8a22bc5"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "82e324219a319d76d658db04da0e493a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3b2662d7113066ca39285a1851b16ee8"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "59c8104033d45cd31be7679be048678b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "bed354f1d1a98024abd803998aee09fb"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6548c14f70c6fd79df835c8e38165089"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4893df5e7181d739d3e9ca3a1b09d02f"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8ba49cf41c331e729f6f921772980d41"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "b2c4f27c019f3bb69ca90e1b94ba665a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f8d1168cd9025cad11925cd02a3a9417"
  },
  {
    "url": "timeline/index.html",
    "revision": "e3aa413118b744d4e4f6885d6ade3798"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "eac823944be7bc2d97d778fac0a819df"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "d58022390ea308524fe7dd915cd169af"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "86f991b24a82de072755281f33be3bbc"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "38d939369c5648813ab9dec69853f4e4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "325aef8bae6a96e6966d9b186c5dceca"
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
