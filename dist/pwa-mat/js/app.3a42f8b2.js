(function(e){function n(n){for(var r,o,u=n[0],c=n[1],s=n[2],l=0,p=[];l<u.length;l++)o=u[l],a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(p.length)p.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={13:0},a={13:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{1:"bffa6b8c",2:"303bde2f",3:"d803699e",4:"9e9e2480",5:"26f3918c",6:"cc36a90d",7:"03642f58",8:"ea7742f6",9:"5c4433da",10:"12f33e97",11:"324627c9",12:"4206d56f"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={3:1,12:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r=e+"."+{1:"31d6cfe0",2:"31d6cfe0",3:"410508a1",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"d7d9e3fe"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===o))return n()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],s=u.getAttribute("data-href");if(s===r||s===o)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var r=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,t(a)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(function(n,t){r=a[e]=[n,t]});n.push(r[2]=i);var s=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var p=setTimeout(function(){f({type:"timeout",target:l})},12e4);function f(n){l.onerror=l.onload=null,clearTimeout(p);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,t[1](i)}a[e]=void 0}}l.onerror=l.onload=f,s.appendChild(l)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var p=0;p<s.length;p++)n(s[p]);var f=l;i.push([7,0]),t()})({7:function(e,n,t){e.exports=t("JJXq")},Hl11:function(e,n,t){},JJXq:function(e,n,t){"use strict";t.r(n);var r=t("MVZn"),o=t.n(r),a=t("uEjO"),i=t("UzXO"),u=t("Kw5r"),c=t("4IOb");u["a"].use(c["T"],{cfg:{},i18n:a["a"],iconSet:i["a"],components:{QBtnGroup:c["d"],QCollapsible:c["m"],QTd:c["M"],QChip:c["l"],QTr:c["Q"],QTh:c["N"],QCheckbox:c["k"],QTable:c["K"],QEditor:c["n"],QPopover:c["C"],QStepper:c["G"],QStep:c["F"],QStepperNavigation:c["H"],QInnerLoading:c["q"],QCardSeparator:c["i"],QTab:c["I"],QTabs:c["L"],QRouteTab:c["D"],QTabPane:c["J"],QBtn:c["c"],QCard:c["e"],QCardActions:c["f"],QCardMain:c["g"],QCardMedia:c["h"],QCardTitle:c["j"],QField:c["o"],QIcon:c["p"],QInput:c["r"],QItem:c["s"],QItemMain:c["t"],QItemSide:c["u"],QLayout:c["v"],QLayoutDrawer:c["w"],QLayoutHeader:c["x"],QList:c["y"],QListHeader:c["z"],QPage:c["A"],QPageContainer:c["B"],QSpinner:c["E"],QToolbar:c["O"],QToolbarTitle:c["P"]},directives:{Ripple:c["R"]},plugins:{Notify:c["b"],Dialog:c["a"]}});var s=t("lIOY");Object(s["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},cached:function(e){console.log("Content has been cached for offline use.")},updated:function(e){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("QBu7"),t("flf9"),t("WQIU"),t("uK2o"),t("Hl11"),t("fm0S");var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},p=[];l._withStripped=!0;var f={name:"App"},d=f,h=(t("ZL7j"),t("KHd+")),m=Object(h["a"])(d,l,p,!1,null,null,null),g=m.exports,v=t("jE9Z"),b=[{path:"/arts",redirect:"arts/home",component:function(){return t.e(12).then(t.bind(null,"UC+0"))},children:[{path:"home",name:"Home",component:function(){return t.e(11).then(t.bind(null,"XS8q"))}},{path:"japao",name:"Japão",component:function(){return t.e(10).then(t.bind(null,"boco"))}},{path:"sign-in",name:"signIn",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"2/Ft"))}},{path:"brasil",name:"Brasil",component:function(){return t.e(8).then(t.bind(null,"qzKq"))}},{path:"europa",name:"Europa",component:function(){return t.e(7).then(t.bind(null,"pNjm"))}},{path:"register",name:"Register",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"iHEO"))}},{path:"florida",name:"Flórida",component:function(){return t.e(5).then(t.bind(null,"H0kp"))}},{path:"artRequest",name:"Pedidos de artes",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"/aoo"))}}]},{path:"/",component:function(){return t.e(3).then(t.bind(null,"ez0Y"))},meta:{authRequired:!0},children:[{path:"",name:"dashboard",component:function(){return t.e(2).then(t.bind(null,"kmF/"))}}]},{path:"*",component:function(){return t.e(1).then(t.bind(null,"7l0S"))}}];u["a"].use(v["a"]);var w=new v["a"]({mode:"history",base:"/",scrollBehavior:function(){return{y:0}},routes:b}),E=w,Q=t("L2JU"),y=(t("ls82"),t("yXPU")),S=t.n(y),R=t("iqUP"),T=t.n(R),x={namespaced:!0,state:{user:{}},getters:{user:function(e){return e.user},isAuthenticated:function(e){return!!e.user}},mutations:{SET_USER:function(e,n){e.user=n},RESET_USER:function(e){e.user=null}},actions:{signIn:function(){var e=S()(regeneratorRuntime.mark(function e(n,t){var r,o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=n.commit,o=t.email,a=t.password,e.next=5,T.a.auth().signInWithEmailAndPassword(o,a).then(function(e){r("SET_USER",e)}).catch(function(e){throw e});case 5:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}(),register:function(){var e=S()(regeneratorRuntime.mark(function e(n,t){var r,o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=n.commit,o=t.email,a=t.password,e.next=5,T.a.auth().createUserWithEmailAndPassword(o,a).then(function(e){r("SET_USER",e)}).catch(function(e){throw e});case 5:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}(),signOut:function(){var e=S()(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.commit,e.next=3,T.a.auth().signOut().then(function(){t("SET_USER",{})});case 3:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()}},q=(t("rGqo"),t("Wcq6")),P=t.n(q),k={namespaced:!0,state:{requests:[]},getters:{},mutations:{SET_REQUESTS:function(e,n){e.requests=n}},actions:{finish:function(){var e=S()(regeneratorRuntime.mark(function e(n,t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n.commit,r=P.a.firestore(),e.next=4,r.collection("request").doc(t.id).update({finish:!0}).then(function(){console.log("Atualizado com sucesso")}).catch(function(e){console.error(e)});case 4:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}(),saveRequest:function(){var e=S()(regeneratorRuntime.mark(function e(n,t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n.commit,r=P.a.firestore(),e.next=4,r.collection("request").add(t).then().catch(function(e){console.error("Erro ao salvar: ",e)});case 4:case"end":return e.stop()}},e,this)}));return function(n,t){return e.apply(this,arguments)}}(),getAllRequests:function(){var e=S()(regeneratorRuntime.mark(function e(n){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.commit,r=P.a.firestore(),e.next=4,r.collection("request").orderBy("protocolo","desc").limit(50).onSnapshot(function(e){var n=[];e.forEach(function(e){n.push(e.data()),n[n.length-1].id=e.id}),t("SET_REQUESTS",n)},function(e){console.error(e)});case 4:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()}};u["a"].use(Q["a"]);var I=new Q["a"].Store({modules:{request:k,auth:x}}),U=I,j=function(e){e.app;var n=e.router;e.Vue,e.store;n.beforeEach(function(e,n,t){var r=e.matched.some(function(e){return e.meta.authRequired}),o=null!==P.a.auth().currentUser;r?o?t():t({name:"signIn"}):t()})},A=t("vDqi"),C=t.n(A),O=function(e){var n=e.Vue;n.prototype.$axios=C.a},L=(t("5x/H"),t("LV1y")),_=t.n(L),B=function(e){var n=e.Vue;P.a.initializeApp(_.a),P.a.firestore().settings({timestampsInSnapshots:!0}),P.a.firestore().enablePersistence().then(function(){console.log("Tentando ativar persistência...")}).catch(function(e){switch(e){case"failed-precondition":console.error("Mais de uma aba aberta");break;case"unimplemented":console.error("Navegador não suporta persistência de dados");break}}),n.prototype.$firebase=P.a},V=t("Hc5T"),H=t.n(V),N=function(e){var n=e.Vue;n.use(H.a)},M=t("OmDE"),z=t.n(M),J=function(e){var n=e.Vue;n.use(z.a)},D=t("r4iy"),K=function(e){var n=e.Vue;n.use(D["a"])},F=(t("pIFo"),function(e){var n=e.app,t=e.router,r=e.Vue,o=e.store;T.a.auth().onAuthStateChanged(function(e){e?(o.commit("auth/SET_USER",e),t.replace({name:"dashboard"}),new r(n)):(o.commit("auth/RESET_USER"),t.replace({name:"signIn"}),new r(n))})}),W=t("/jzl"),X=t.n(W);u["a"].config.productionTip=!0;var Z=o()({el:"#q-app",router:E,store:U},g),G=[];G.push(j),G.push(O),G.push(B),G.push(N),G.push(J),G.push(K),G.forEach(function(e){return e({app:Z,router:E,store:U,Vue:u["a"]})}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){X.a.attach(document.body)},!1),F({app:Z,router:E,store:U,Vue:u["a"]})},LV1y:function(e,n){e.exports={apiKey:"AIzaSyBIRB4K99ZcHp9W27-UxiM1db5uNQVnmTE",authDomain:"unet-83ce3.firebaseapp.com",databaseURL:"https://unet-83ce3.firebaseio.com",projectId:"unet-83ce3",storageBucket:"unet-83ce3.appspot.com",messagingSenderId:"11741101720"}},ZL7j:function(e,n,t){"use strict";var r=t("usnz"),o=t.n(r);o.a},fm0S:function(e,n,t){},usnz:function(e,n,t){}});