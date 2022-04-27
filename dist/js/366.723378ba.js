"use strict";(self["webpackChunkcsa_auth"]=self["webpackChunkcsa_auth"]||[]).push([[366],{759:function(e,t,r){r.r(t),r.d(t,{NIL:function(){return q},parse:function(){return w},stringify:function(){return g},v1:function(){return y},v3:function(){return T},v4:function(){return K},v5:function(){return Z},validate:function(){return l},version:function(){return Y}});r(1703),r(8675),r(3462);var n,i=new Uint8Array(16);function o(){if(!n&&(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(i)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function s(e){return"string"===typeof e&&a.test(e)}for(var l=s,c=[],u=0;u<256;++u)c.push((u+256).toString(16).substr(1));function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!l(r))throw TypeError("Stringified UUID is invalid");return r}var d,p,g=h,f=0,v=0;function m(e,t,r){var n=t&&r||0,i=t||new Array(16);e=e||{};var a=e.node||d,s=void 0!==e.clockseq?e.clockseq:p;if(null==a||null==s){var l=e.random||(e.rng||o)();null==a&&(a=d=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==s&&(s=p=16383&(l[6]<<8|l[7]))}var c=void 0!==e.msecs?e.msecs:Date.now(),u=void 0!==e.nsecs?e.nsecs:v+1,h=c-f+(u-v)/1e4;if(h<0&&void 0===e.clockseq&&(s=s+1&16383),(h<0||c>f)&&void 0===e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");f=c,v=u,p=s,c+=122192928e5;var m=(1e4*(268435455&c)+u)%4294967296;i[n++]=m>>>24&255,i[n++]=m>>>16&255,i[n++]=m>>>8&255,i[n++]=255&m;var y=c/4294967296*1e4&268435455;i[n++]=y>>>8&255,i[n++]=255&y,i[n++]=y>>>24&15|16,i[n++]=y>>>16&255,i[n++]=s>>>8|128,i[n++]=255&s;for(var b=0;b<6;++b)i[n+b]=a[b];return t||g(i)}var y=m;function b(e){if(!l(e))throw TypeError("Invalid UUID");var t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r}var w=b;function I(e){e=unescape(encodeURIComponent(e));for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}var C="6ba7b810-9dad-11d1-80b4-00c04fd430c8",A="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function k(e,t,r){function n(e,n,i,o){if("string"===typeof e&&(e=I(e)),"string"===typeof n&&(n=w(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var a=new Uint8Array(16+e.length);if(a.set(n),a.set(e,n.length),a=r(a),a[6]=15&a[6]|t,a[8]=63&a[8]|128,i){o=o||0;for(var s=0;s<16;++s)i[o+s]=a[s];return i}return g(a)}try{n.name=e}catch(i){}return n.DNS=C,n.URL=A,n}function E(e){if("string"===typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return S(R(_(e),8*e.length))}function S(e){for(var t=[],r=32*e.length,n="0123456789abcdef",i=0;i<r;i+=8){var o=e[i>>5]>>>i%32&255,a=parseInt(n.charAt(o>>>4&15)+n.charAt(15&o),16);t.push(a)}return t}function U(e){return 14+(e+64>>>9<<4)+1}function R(e,t){e[t>>5]|=128<<t%32,e[U(t)-1]=t;for(var r=1732584193,n=-271733879,i=-1732584194,o=271733878,a=0;a<e.length;a+=16){var s=r,l=n,c=i,u=o;r=D(r,n,i,o,e[a],7,-680876936),o=D(o,r,n,i,e[a+1],12,-389564586),i=D(i,o,r,n,e[a+2],17,606105819),n=D(n,i,o,r,e[a+3],22,-1044525330),r=D(r,n,i,o,e[a+4],7,-176418897),o=D(o,r,n,i,e[a+5],12,1200080426),i=D(i,o,r,n,e[a+6],17,-1473231341),n=D(n,i,o,r,e[a+7],22,-45705983),r=D(r,n,i,o,e[a+8],7,1770035416),o=D(o,r,n,i,e[a+9],12,-1958414417),i=D(i,o,r,n,e[a+10],17,-42063),n=D(n,i,o,r,e[a+11],22,-1990404162),r=D(r,n,i,o,e[a+12],7,1804603682),o=D(o,r,n,i,e[a+13],12,-40341101),i=D(i,o,r,n,e[a+14],17,-1502002290),n=D(n,i,o,r,e[a+15],22,1236535329),r=F(r,n,i,o,e[a+1],5,-165796510),o=F(o,r,n,i,e[a+6],9,-1069501632),i=F(i,o,r,n,e[a+11],14,643717713),n=F(n,i,o,r,e[a],20,-373897302),r=F(r,n,i,o,e[a+5],5,-701558691),o=F(o,r,n,i,e[a+10],9,38016083),i=F(i,o,r,n,e[a+15],14,-660478335),n=F(n,i,o,r,e[a+4],20,-405537848),r=F(r,n,i,o,e[a+9],5,568446438),o=F(o,r,n,i,e[a+14],9,-1019803690),i=F(i,o,r,n,e[a+3],14,-187363961),n=F(n,i,o,r,e[a+8],20,1163531501),r=F(r,n,i,o,e[a+13],5,-1444681467),o=F(o,r,n,i,e[a+2],9,-51403784),i=F(i,o,r,n,e[a+7],14,1735328473),n=F(n,i,o,r,e[a+12],20,-1926607734),r=j(r,n,i,o,e[a+5],4,-378558),o=j(o,r,n,i,e[a+8],11,-2022574463),i=j(i,o,r,n,e[a+11],16,1839030562),n=j(n,i,o,r,e[a+14],23,-35309556),r=j(r,n,i,o,e[a+1],4,-1530992060),o=j(o,r,n,i,e[a+4],11,1272893353),i=j(i,o,r,n,e[a+7],16,-155497632),n=j(n,i,o,r,e[a+10],23,-1094730640),r=j(r,n,i,o,e[a+13],4,681279174),o=j(o,r,n,i,e[a],11,-358537222),i=j(i,o,r,n,e[a+3],16,-722521979),n=j(n,i,o,r,e[a+6],23,76029189),r=j(r,n,i,o,e[a+9],4,-640364487),o=j(o,r,n,i,e[a+12],11,-421815835),i=j(i,o,r,n,e[a+15],16,530742520),n=j(n,i,o,r,e[a+2],23,-995338651),r=x(r,n,i,o,e[a],6,-198630844),o=x(o,r,n,i,e[a+7],10,1126891415),i=x(i,o,r,n,e[a+14],15,-1416354905),n=x(n,i,o,r,e[a+5],21,-57434055),r=x(r,n,i,o,e[a+12],6,1700485571),o=x(o,r,n,i,e[a+3],10,-1894986606),i=x(i,o,r,n,e[a+10],15,-1051523),n=x(n,i,o,r,e[a+1],21,-2054922799),r=x(r,n,i,o,e[a+8],6,1873313359),o=x(o,r,n,i,e[a+15],10,-30611744),i=x(i,o,r,n,e[a+6],15,-1560198380),n=x(n,i,o,r,e[a+13],21,1309151649),r=x(r,n,i,o,e[a+4],6,-145523070),o=x(o,r,n,i,e[a+11],10,-1120210379),i=x(i,o,r,n,e[a+2],15,718787259),n=x(n,i,o,r,e[a+9],21,-343485551),r=L(r,s),n=L(n,l),i=L(i,c),o=L(o,u)}return[r,n,i,o]}function _(e){if(0===e.length)return[];for(var t=8*e.length,r=new Uint32Array(U(t)),n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}function L(e,t){var r=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(r>>16);return n<<16|65535&r}function P(e,t){return e<<t|e>>>32-t}function O(e,t,r,n,i,o){return L(P(L(L(t,e),L(n,o)),i),r)}function D(e,t,r,n,i,o,a){return O(t&r|~t&n,e,t,i,o,a)}function F(e,t,r,n,i,o,a){return O(t&n|r&~n,e,t,i,o,a)}function j(e,t,r,n,i,o,a){return O(t^r^n,e,t,i,o,a)}function x(e,t,r,n,i,o,a){return O(r^(t|~n),e,t,i,o,a)}var $=E,M=k("v3",48,$),T=M;function N(e,t,r){e=e||{};var n=e.random||(e.rng||o)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var i=0;i<16;++i)t[r+i]=n[i];return t}return g(n)}var K=N;function B(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:return t^r^n;case 2:return t&r^t&n^r&n;case 3:return t^r^n}}function G(e,t){return e<<t|e>>>32-t}function H(e){var t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"===typeof e){var n=unescape(encodeURIComponent(e));e=[];for(var i=0;i<n.length;++i)e.push(n.charCodeAt(i))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var o=e.length/4+2,a=Math.ceil(o/16),s=new Array(a),l=0;l<a;++l){for(var c=new Uint32Array(16),u=0;u<16;++u)c[u]=e[64*l+4*u]<<24|e[64*l+4*u+1]<<16|e[64*l+4*u+2]<<8|e[64*l+4*u+3];s[l]=c}s[a-1][14]=8*(e.length-1)/Math.pow(2,32),s[a-1][14]=Math.floor(s[a-1][14]),s[a-1][15]=8*(e.length-1)&4294967295;for(var h=0;h<a;++h){for(var d=new Uint32Array(80),p=0;p<16;++p)d[p]=s[h][p];for(var g=16;g<80;++g)d[g]=G(d[g-3]^d[g-8]^d[g-14]^d[g-16],1);for(var f=r[0],v=r[1],m=r[2],y=r[3],b=r[4],w=0;w<80;++w){var I=Math.floor(w/20),C=G(f,5)+B(I,v,m,y)+b+t[I]+d[w]>>>0;b=y,y=m,m=G(v,30)>>>0,v=f,f=C}r[0]=r[0]+f>>>0,r[1]=r[1]+v>>>0,r[2]=r[2]+m>>>0,r[3]=r[3]+y>>>0,r[4]=r[4]+b>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}var z=H,V=k("v5",80,z),Z=V,q="00000000-0000-0000-0000-000000000000";function J(e){if(!l(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}var Y=J},2366:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var n=r(3396),i=r(7139);const o={class:"post"},a=(0,n._)("h1",null,"Add a new post",-1),s=(0,n._)("h2",{id:"txtName"},null,-1),l={id:"form"},c=(0,n.uE)('<div><label for="name" class="form-label">Post name</label><br><input type="text" name="name" id="name" placeholder="Give your post a name"><br><label for="desc" class="form-label">Description</label><br><textarea name="desc" id="desc" placeholder="Add a descreption"></textarea><br></div><label for="cameraFileInput"><span class="btn btn-primary">Open camera</span><input style="display:none;" id="cameraFileInput" type="file" accept="image/*" capture="environment"></label><br><img id="pictureFromCamera" width="800" height="500"><br>',5),u=(0,n._)("h1",null,"Your location: ",-1),h={ref:"mapDiv",style:{witdth:"100%",height:"40vh","margin-left":"20%","margin-right":"20%"}},d=(0,n._)("div",null,[(0,n._)("h3",{id:"location"})],-1);function p(e,t,r,p,g,f){return(0,n.wg)(),(0,n.iD)("div",o,[a,s,(0,n._)("div",null,[(0,n._)("form",l,[c,(0,n._)("div",null,[u,(0,n._)("p",null,(0,i.zw)(p.currPos.lat.toFixed(2))+" latitude, "+(0,i.zw)(p.currPos.lng.toFixed(2))+" longitude",1)]),(0,n._)("div",h,null,512),d,(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>f.openCamera&&f.openCamera(...e)),type:"button",id:"add"},"Submit")])])])}var g=r(6056),f=r(4870);function v(){const e=(0,f.iH)({latitude:50,longitude:19}),t="navigator"in window&&"geolocation"in navigator;let r=null;return(0,n.bv)((()=>{t&&(r=navigator.geolocation.watchPosition((t=>e.value=t.coords)))})),(0,n.Ah)((()=>{r&&navigator.geolocation.clearWatch(r)})),{coords:e,isSuported:t}}function m(e){return new Promise((t=>setTimeout(t,e)))}r(1703);var y=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,i,o;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(i=n;0!==i--;)if(!e(t[i],r[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(r).length)return!1;for(i=n;0!==i--;)if(!Object.prototype.hasOwnProperty.call(r,o[i]))return!1;for(i=n;0!==i--;){var a=o[i];if(!e(t[a],r[a]))return!1}return!0}return t!==t&&r!==r};const b="__googleMapsScriptId";var w;(function(e){e[e["INITIALIZED"]=0]="INITIALIZED",e[e["LOADING"]=1]="LOADING",e[e["SUCCESS"]=2]="SUCCESS",e[e["FAILURE"]=3]="FAILURE"})(w||(w={}));class I{constructor({apiKey:e,authReferrerPolicy:t,channel:r,client:n,id:i=b,language:o,libraries:a=[],mapIds:s,nonce:l,region:c,retries:u=3,url:h="https://maps.googleapis.com/maps/api/js",version:d}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=r,this.client=n,this.id=i||b,this.language=o,this.libraries=a,this.mapIds=s,this.nonce=l,this.region=c,this.retries=u,this.url=h,this.version=d,I.instance){if(!y(this.options,I.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(I.instance.options)}`);return I.instance}I.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?w.FAILURE:this.done?w.SUCCESS:this.loading?w.LOADING:w.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise(((e,t)=>{this.loadCallback((r=>{r?t(r.error):e(window.google)}))}))}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((e=>{e(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}var C=r(7924),A=r(2087);const k="AIzaSyDyqHkcm_TuRmnxsHJ9k6GHRbGa1Tt0zpA";var E={name:"App",setup(){const{coords:e}=v(),t=(0,n.Fl)((()=>({lat:e.value.latitude,lng:e.value.longitude}))),r=new I({apiKey:k}),i=(0,f.iH)(null);return(0,n.bv)((async()=>{await r.load();while(50==t.value.lat&&19==t.value.lng)window.console.log("Awaiting Coords"),await m(500);window.console.log("Centering Lat: "+t.value.lat),window.console.log("Centering Lng: "+t.value.lng);const e=new google.maps.Map(i.value,{center:t.value,zoom:18});new google.maps.Marker({position:t.value,map:e,title:"You are here!"})})),{currPos:t,mapDiv:i}},mounted(){},methods:{submit(){const e=document.getElementById("desc").value,t="",r=document.getElementById("name").value,n=g.I8.currentUser.uid,i=this.currPos.lat.toFixed(4)+", "+this.currPos.lng.toFixed(4),o=g.I8.currentUser.email,a=o.substring(0,o.indexOf("@")),s={post_name:r,description:e,location:i,uid:n,username:a,path:t};g.db.collection("posts").add(s).then((()=>{window.console.log("Post added!")})),C.Z.push("/")},openCamera(){this.submit(),document.getElementById("cameraFileInput").addEventListener("change",(function(){var e=new FileReader;console.log("1"),e.addEventListener("load",(function(e){document.getElementById("pictureFromCamera").src=e.target.result;const t=e.target.result;window.console.log("this is a base64 var: "+t);var n=r(759),i=n.v4();console.log("2"),console.log(i);const o="cars/"+i+".jpg";g.db.collection("posts").where("path","==","").update({path:o});const a=(0,g.iH)(g.tO,o);(0,A.sf)(a,t,"data_url").then((e=>{console.log("The photo has been sent in path cars/"+i+".jpg")}))})),e.readAsDataURL(this.files[0])}))}}},S=r(89);const U=(0,S.Z)(E,[["render",p]]);var R=U}}]);
//# sourceMappingURL=366.723378ba.js.map