_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/Qh9":function(n,t,e){"use strict";e.r(t);var r=e("o0o1"),u=e.n(r),a=e("HaE+"),o=e("q1tI"),i=e.n(o),s=e("nOHt"),c=e("ds/u"),l=e("vcXL"),p=e.n(l),f=e("8Kt/"),d=e.n(f),h=i.a.createElement,w=Object(s.withRouter)((function(n){return h(c.a,null,h(d.a,null,h("title",null,"Detail ",n.user.nama)),h("h2",null,n.user.nama),h("p",null,"Arti: ",n.user.arti),h("p",null,"Asma: ",n.user.asma),h("p",null,"Ayat: ",n.user.ayat),h("p",null,"Tipe: ",n.user.type),h("a",null,"Audio: ",n.user.audio),h("p",null,"Keterangan: ",n.user.keterangan))}));w.getInitialProps=function(){var n=Object(a.a)(u.a.mark((function n(t){var e,r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query.nomor,n.next=3,p()("https://api.npoint.io/99c279bb173a6e28359c/data/".concat(e));case 3:return r=n.sent,n.next=6,r.json();case 6:return a=n.sent,console.log("total data"+a.length),n.abrupt("return",{user:a});case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t.default=w},"HaE+":function(n,t,e){"use strict";function r(n,t,e,r,u,a,o){try{var i=n[a](o),s=i.value}catch(c){return void e(c)}i.done?t(s):Promise.resolve(s).then(r,u)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(u,a){var o=n.apply(t,e);function i(n){r(o,u,a,i,s,"next",n)}function s(n){r(o,u,a,i,s,"throw",n)}i(void 0)}))}}e.d(t,"a",(function(){return u}))},dC4X:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/single",function(){return e("/Qh9")}])},vcXL:function(n,t,e){"use strict";var r=self.fetch.bind(self);n.exports=r,n.exports.default=n.exports}},[["dC4X",0,2,1,3]]]);