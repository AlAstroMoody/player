if(!self.define){let e,i={};const f=(f,a)=>(f=new URL(f+".js",a).href,i[f]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=i,document.head.appendChild(e)}else e=f,importScripts(f),i()})).then((()=>{let e=i[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(a,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const n=e=>f(e,c),s={module:{uri:c},exports:r,require:n};i[c]=Promise.all(a.map((e=>s[e]||n(e)))).then((e=>(o(...e),r)))}}define(["./workbox-32a34f02"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-1adb14a7.js",revision:null},{url:"assets/index-6f0b570c.css",revision:null},{url:"favicon/android-chrome-192x192.png",revision:"460b4e0970a5259eccad73efe6eccc49"},{url:"favicon/android-chrome-512x512.png",revision:"36cd8f076ba2f5e222bce1cfda833aec"},{url:"favicon/apple-touch-icon.png",revision:"6efe42da81d09c21586ba0c23f77f529"},{url:"favicon/favicon-16x16.png",revision:"0cad6a02cf45da47ec8799b8c7064b60"},{url:"favicon/favicon-32x32.png",revision:"6027f74b1896e8bf309571bc4fcd03ae"},{url:"favicon/favicon.ico",revision:"1619305febbf097dfa79effe947ddfbb"},{url:"favicon/maskable_icon.png",revision:"6b19e7175a4d8f8bec0f27ddcb42c9f9"},{url:"favicon/mstile-150x150.png",revision:"a5776b746261096fc7d3417f7459da50"},{url:"favicon/safari-pinned-tab.svg",revision:"4dce172a354ee2243e2f01fe4a0f9489"},{url:"favicon/screenshot.webp",revision:"3574339f301a3c72471a2baf585446f4"},{url:"fonts/Cyberpunk.woff2",revision:"921c9d071aa16e5d7e5ed2af89ba40d1"},{url:"fonts/ProximaNova-Bold.woff2",revision:"f9520e546971cad19ec79a957ef3113f"},{url:"fonts/ProximaNova-Regular.woff2",revision:"429b5a15b085cc9c786761d4e3f83d3d"},{url:"fonts/ProximaNova-Semibold.woff2",revision:"a470a8aceba6efaab716134e15ede464"},{url:"images/flame-left-mobile.webp",revision:"439f7ae8bff20ed064502cf0e2897a03"},{url:"images/flame-left.webp",revision:"0c8d113bf990c75579e59fbc770f9cce"},{url:"images/flame-right-mobile.webp",revision:"cc107e0a2b40fe8bbbbb6d2162776ca0"},{url:"images/flame-right.webp",revision:"ea0f4c9caa6106635da7024e7625cee7"},{url:"images/taylor.webp",revision:"4f5e406d4e5d5def3e322f848d9ca9b3"},{url:"index.html",revision:"39d433892f7c1cc73ea1d6cdf214d68b"},{url:"registerSW.js",revision:"31d618e57c087b948401a5f1c925652b"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"manifest.webmanifest",revision:"5e287704471f1a9ef056df44ee9df94b"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
