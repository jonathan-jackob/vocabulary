if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>i(e,o),f={module:{uri:o},exports:c,require:t};s[o]=Promise.all(r.map((e=>f[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-72a0cab9.js",revision:null},{url:"assets/index-a2f31c11.css",revision:null},{url:"index.html",revision:"77a81cc3ffad86c19e0244cebe1533df"},{url:"registerSW.js",revision:"9696c861b73f67252b99f6ed711bf27a"},{url:"logo_192.jpg",revision:"dc8add3d2c8c1ea9e9ab67b4e363743c"},{url:"logo_256.jpg",revision:"3843326fa9f82e31338c42ddfcfc9302"},{url:"logo_512.jpg",revision:"fae1063e572f4164537fb880e1f8d817"},{url:"manifest.webmanifest",revision:"7c5ae54a2ddac2cc85e3bd638b145cf6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
