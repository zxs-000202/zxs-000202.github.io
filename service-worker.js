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
    "revision": "43c99a8b878609280de9fd2d38884bda"
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
    "url": "assets/js/12.3e13c370.js",
    "revision": "9eadd58d925ae4924dce61e1811b9ae0"
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
    "url": "assets/js/16.8c417bdc.js",
    "revision": "77d86646973db802dec199f749183516"
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
    "url": "assets/js/app.2db8a629.js",
    "revision": "26a794caf2c05495c51ecb5cbc71b88a"
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
    "revision": "f86b075d1076b2498a60e1ef69d7eff4"
  },
  {
    "url": "categories/java/index.html",
    "revision": "092d9674b71042a3c3a8560d69d4fd1e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "5965be9dd6837c6a7342ab1f86e7f4cc"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d3b3f2d1d9b09c1c099df0f87652e885"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "05dada85076569aa42e204fd8bc1f39d"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "2e2241c26fc2c7231bc020e17813d185"
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
    "revision": "47519faabf2cdae56adf19c74c12aa49"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ad85ea666708de579a5a14cedd2c6a63"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "251343f7640c83b6442e5026e9c11c0d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f617ca5bac4913d6fed99c9555a2d00c"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a7a0ed850685d40376a30a6ec5239bc4"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "425939203bd9b4ea4bf13992459e1bb5"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "81de27e02945a21789f5e6a332bc1bc1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "55b812254353b714bdeedc4ed84c3bde"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "288fddd78b15cce93926d76f1eab9e07"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "50612dc977faafa208a1b812c35de5cc"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "52185aa697944fb99c237b843a4b1087"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "464f8ee8c28e85d862619952932c1ac8"
  },
  {
    "url": "timeline/index.html",
    "revision": "3adab792f6fc092295d4de83cbcac523"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f4543942ba49c6fb113f8ed7361ba572"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "d5ae3bd11ce2f3f2d06683ccf367f457"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "4f8acd08f1118c75e403b39aa59c9a61"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "b22cdd521d900b3c9d3e0532e47429c5"
  },
  {
    "url": "生活分享/life.html",
    "revision": "0f1c23c1efbda793fbfd17993739fad6"
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
