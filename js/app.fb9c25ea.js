(()=>{"use strict";var e={4812:(e,t,r)=>{r(71),r(5363);var o=r(8880),a=r(9592),n=r(3673);const i={id:"q-app"};function l(e,t,r,o,a,l){const s=(0,n.up)("router-view"),c=(0,n.up)("ModalTotal");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(s),(0,n.Wm)(c,{ref:"modalTotal"},null,512)])}var s=r(8825),c=r(52),d=r(2323);const u=(0,n._)("b",{class:"q-mt-sm"},"Sua cestinha",-1),p=(0,n._)("b",{style:{"font-size":"16px"}},"Total",-1),f={style:{"font-size":"16px"}};function h(e,t,r,o,a,i){const l=(0,n.up)("q-avatar"),s=(0,n.up)("q-card-section"),c=(0,n.up)("q-card"),h=(0,n.up)("q-dialog");return(0,n.wg)(),(0,n.j4)(h,{ref:"activeTotal","full-width":""},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,{class:"column items-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{icon:"shopping_cart",color:o.isDarkActive?"dark":"white","text-color":o.isDarkActive?"white":"dark"},null,8,["color","text-color"]),u])),_:1}),(0,n.Wm)(s,{class:"row justify-around"},{default:(0,n.w5)((()=>[p,(0,n._)("b",f,(0,d.zw)(o.total),1)])),_:1})])),_:1})])),_:1},512)}var v=r(1959);const m={setup(){const e=(0,v.iH)(!0),t=(0,v.iH)(0),r=(0,c.P)(),o=(0,v.iH)(r.darkMode),a=r=>{e.value.show(),t.value=r},n=()=>{e.value.hide()};return{total:t,activeTotal:e,isDarkActive:o,show:a,hide:n}}};var g=r(4260),b=r(6778),y=r(151),w=r(5589),Z=r(5096),P=r(7518),k=r.n(P);const Q=(0,g.Z)(m,[["render",h]]),O=Q;k()(m,"components",{QDialog:b.Z,QCard:y.Z,QCardSection:w.Z,QAvatar:Z.Z});const A=(0,n.aZ)({name:"App",components:{ModalTotal:O},setup(){const e=(0,n.FN)(),t=(0,s.Z)(),{darkMode:r}=(0,c.P)();return(0,n.m0)((()=>{t.dark.set(r)})),(0,n.JJ)("$root",e.root),(0,n.bv)((()=>{t.addressbarColor.set("#021354")})),{}}}),C=(0,g.Z)(A,[["render",l]]),_=C;var j=r(4584),S=r(3340),T=r(9582);const x=[{path:"/",component:()=>Promise.all([r.e(736),r.e(887)]).then(r.bind(r,887)),children:[{path:"/",component:()=>r.e(309).then(r.bind(r,309)),name:"Home"},{path:"/:category",component:()=>Promise.all([r.e(736),r.e(8)]).then(r.bind(r,2008)),name:"criar_conta"},{path:"/lista",component:()=>Promise.all([r.e(736),r.e(542)]).then(r.bind(r,6542)),name:"lista"},{path:"/editar/:id",component:()=>Promise.all([r.e(736),r.e(8)]).then(r.bind(r,2008)),name:"editar"},{path:"/config",component:()=>Promise.all([r.e(736),r.e(274)]).then(r.bind(r,1274)),name:"config"}]},{path:"/:catchAll(.*)*",component:()=>r.e(337).then(r.bind(r,6337))}],D=x,E=(0,S.BC)((function(){const e=T.PO;return(0,T.p7)({scrollBehavior:()=>({left:0,top:0}),routes:D,history:e("/")})}));async function B(e,t){const o="function"===typeof j["default"]?await(0,j["default"])({}):j["default"],{storeKey:n}=await Promise.resolve().then(r.bind(r,4584)),i="function"===typeof E?await E({store:o}):E;o.$router=i;const l=e(_);return l.use(a.Z,t),{app:l,store:o,storeKey:n,router:i}}var M=r(9719),N=r(9214),q=r(3812),L=r(2901),I=r(2652),z=r(4379),W=r(9570),H=r(3747),$=r(8240),F=r(4554),K=r(7011),J=r(3414),R=r(2035),U=r(2350),G=r(4842),V=r(4027),X=r(7704),Y=r(5869),ee=r(9721),te=r(643),re=r(3944),oe=r(8886),ae=r(6489),ne=r(677),ie=r(4434),le=r(1039),se=r(8757),ce=r(6395),de=r(2139);const ue={config:{},lang:M.Z,components:{QLayout:N.Z,QHeader:q.Z,QDrawer:L.Z,QPageContainer:I.Z,QPage:z.Z,QToolbar:W.Z,QToolbarTitle:H.Z,QBtn:$.Z,QIcon:F.Z,QList:K.Z,QItem:J.Z,QItemSection:R.Z,QItemLabel:U.Z,QInput:G.Z,QAvatar:Z.Z,QImg:V.Z,QScrollArea:X.Z,QSeparator:Y.Z,QBadge:ee.Z,QDate:te.Z,QPopupProxy:re.Z,QToggle:oe.Z},directives:{Ripple:ae.Z,ClosePopup:ne.Z},plugins:{Notify:ie.Z,AddressbarColor:le.Z,Dialog:se.Z,LocalStorage:ce.Z,BottomSheet:de.Z}};var pe=r(1413);(0,pe.z)("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(e){ie.Z.create({message:"Nova Atualização Disponível!",icon:"cloud_download",closeBtn:"Atualizar",timeout:1e4,onDismiss(){location.reload(!0)}})},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(736).then(r.t.bind(r,9501,23));const fe="/";async function he({app:e,router:t,store:r,storeKey:o},a){let n=!1;const i=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},l=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let d=0;!1===n&&d<a.length;d++)try{await a[d]({app:e,router:t,store:r,ssrContext:null,redirect:l,urlPath:s,publicPath:fe})}catch(c){return c&&c.url?void l(c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&(e.use(t),e.use(r,o),e.mount("#q-app"))}B(o.ri,ue).then((e=>Promise.all([Promise.resolve().then(r.bind(r,5474)),Promise.resolve().then(r.bind(r,5965))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));he(e,r)}))))},5965:(e,t,r)=>{r.r(t),r.d(t,{addressbarColor:()=>n,default:()=>i});var o=r(3340),a=r(1039);const n=a.Z.set("#021354"),i=(0,o.xr)((({app:e})=>{e.config.globalProperties.$addressbarColor=n}))},5474:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>l});var o=r(3340),a=r(8522),n=r.n(a);const i=n().create({baseURL:"http://localhost:3333",headers:{"Access-Control-Allow-Origin":"*"}});i.interceptors.request.use((async e=>{try{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e}catch(t){console.log(t)}}));const l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=i}))},4584:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var o=r(3340),a=r(321);const n=(0,o.h)((()=>{const e=(0,a.WB)();return e}))},52:(e,t,r)=>{r.d(t,{P:()=>a});var o=r(321);const a=(0,o.Q_)("config",{state:()=>({darkMode:!1}),actions:{setDarkmode(e){this.darkMode=e}},getters:{}})}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.m=e,(()=>{var e=[];r.O=(t,o,a,n)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,a,n]=e[d],l=!0,s=0;s<o.length;s++)(!1&n||i>=n)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,n<i&&(i=n));if(l){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[o,a,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var n=Object.create(null);r.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>o[e]));return i["default"]=()=>o,r.d(n,i),n}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{8:"65787c08",274:"34b17377",309:"298a88dd",337:"2c687054",542:"75e9d660",887:"c6b71ab1"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{8:"0f03c600",143:"3dfebe1c",274:"247e25f3",309:"976eeba3",542:"3d57b29a",736:"7257974c",887:"344e18d1"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="intervals:";r.l=(o,a,n,i)=>{if(e[o])e[o].push(a);else{var l,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+n){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+n),l.src=o),e[o]=[a];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var n=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=n,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var a=r[o],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],n=a.getAttribute("data-href");if(n===e||n===t)return a}},o=o=>new Promise(((a,n)=>{var i=r.miniCssF(o),l=r.p+i;if(t(i,l))return a();e(o,l,a,n)})),a={143:0};r.f.miniCss=(e,t)=>{var r={8:1,274:1,309:1,542:1,887:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var n=new Promise(((r,o)=>a=e[t]=[r,o]));o.push(a[2]=n);var i=r.p+r.u(t),l=new Error,s=o=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[i,l,s]=o,c=0;if(i.some((t=>0!==e[t]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(s)var d=s(r)}for(t&&t(o);c<i.length;c++)n=i[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},o=self["webpackChunkintervals"]=self["webpackChunkintervals"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(4812)));o=r.O(o)})();