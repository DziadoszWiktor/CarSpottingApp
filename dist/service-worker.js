if(!self.define){let i,r={};const e=(e,n)=>(e=new URL(e+".js",n).href,r[e]||new Promise((r=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=r,document.head.appendChild(i)}else i=e,importScripts(e),r()})).then((()=>{let i=r[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(n,s)=>{const t=i||("document"in self?document.currentScript.src:"")||location.href;if(r[t])return;let p={};const o=i=>e(i,t),l={module:{uri:t},exports:p,require:o};r[t]=Promise.all(n.map((i=>l[i]||o(i)))).then((i=>(s(...i),p)))}}define(["./workbox-2d118ab0"],(function(i){"use strict";i.setCacheNameDetails({prefix:"csa-auth"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/CarSpottingApp/css/938.175356a7.css",revision:null},{url:"/CarSpottingApp/css/app.63ada22e.css",revision:null},{url:"/CarSpottingApp/css/style.css",revision:"a4fb12dd09cb1af2cd4c0d1d5e15427f"},{url:"/CarSpottingApp/img/header-transparent2-small.png",revision:"7a562054ad3fa9eeb6bd040820e7ff1c"},{url:"/CarSpottingApp/img/header1.png",revision:"dc21f50db3fff59e2e4793d4fa814d12"},{url:"/CarSpottingApp/img/heart-empty.png",revision:"24557560d54230dc3ed9f3f9e981595d"},{url:"/CarSpottingApp/img/heart-filled.png",revision:"dde5a35bd1652428aed64e183ef22755"},{url:"/CarSpottingApp/img/icon1.png",revision:"9053f6bb0e177890822fba68697e8820"},{url:"/CarSpottingApp/index.html",revision:"f2b4a31086adf9d161e614bcb9431388"},{url:"/CarSpottingApp/js/167.08c3de5c.js",revision:null},{url:"/CarSpottingApp/js/366.723378ba.js",revision:null},{url:"/CarSpottingApp/js/529.52e8d669.js",revision:null},{url:"/CarSpottingApp/js/662.4e6074ac.js",revision:null},{url:"/CarSpottingApp/js/735.0267f2c0.js",revision:null},{url:"/CarSpottingApp/js/876.0c9315d6.js",revision:null},{url:"/CarSpottingApp/js/916.ad54c82b.js",revision:null},{url:"/CarSpottingApp/js/938.17c3b1ba.js",revision:null},{url:"/CarSpottingApp/js/app.b3b9b1cc.js",revision:null},{url:"/CarSpottingApp/js/chunk-vendors.df968d50.js",revision:null},{url:"/CarSpottingApp/manifest.json",revision:"ddf5454a5d1675a5c6863aea58016af8"},{url:"/CarSpottingApp/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
