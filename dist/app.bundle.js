!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!P[e]||!m[e])return;for(var n in m[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(w[n]=t[n]);0==--y&&0===g&&O()}(e,n),t&&t(e,n)};var n,r=!0,o="9a890fdb12405e187b52",i=1e4,c={},a=[],s=[];function d(e){var t=D[e];if(!t)return _;var r=function(r){return t.hot.active?(D[r]?-1===D[r].parents.indexOf(e)&&D[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),_(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return _[e]},set:function(t){_[e]=t}}};for(var i in _)Object.prototype.hasOwnProperty.call(_,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===p&&h("prepare"),g++,_.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===p&&(x[e]||I(e),0===g&&0===y&&O())}},r.t=function(e,t){return 1&t&&(e=r(e)),_.t(e,-2&t)},r}function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:M,apply:k,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:c[e]};return n=void 0,t}var u=[],p="idle";function h(e){p=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var f,w,v,y=0,g=0,x={},m={},P={};function b(e){return+e+""===e?+e:e}function M(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,h("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=_.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;m={},x={},P=e.c,v=e.h,h("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});w={};return I(0),"prepare"===p&&0===g&&0===y&&O(),t});var t}function I(e){P[e]?(m[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=_.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):x[e]=!0}function O(){h("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return k(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in w)Object.prototype.hasOwnProperty.call(w,n)&&t.push(b(n));e.resolve(t)}}function k(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,i,s,d;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((s=D[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var a=0;a<s.parents.length;a++){var d=s.parents[a],l=D[d];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([d]),moduleId:i,parentId:d};-1===t.indexOf(d)&&(l.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),u(n[d],[i])):(delete n[d],t.push(d),r.push({chain:c.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var f={},y=[],g={},x=function(){console.warn("[HMR] unexpected require("+M.moduleId+") to disposed module")};for(var m in w)if(Object.prototype.hasOwnProperty.call(w,m)){var M;d=b(m);var I=!1,O=!1,k=!1,E="";switch((M=w[m]?l(d):{type:"disposed",moduleId:m}).chain&&(E="\nUpdate propagation: "+M.chain.join(" -> ")),M.type){case"self-declined":t.onDeclined&&t.onDeclined(M),t.ignoreDeclined||(I=new Error("Aborted because of self decline: "+M.moduleId+E));break;case"declined":t.onDeclined&&t.onDeclined(M),t.ignoreDeclined||(I=new Error("Aborted because of declined dependency: "+M.moduleId+" in "+M.parentId+E));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(M),t.ignoreUnaccepted||(I=new Error("Aborted because "+d+" is not accepted"+E));break;case"accepted":t.onAccepted&&t.onAccepted(M),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(M),k=!0;break;default:throw new Error("Unexception type "+M.type)}if(I)return h("abort"),Promise.reject(I);if(O)for(d in g[d]=w[d],u(y,M.outdatedModules),M.outdatedDependencies)Object.prototype.hasOwnProperty.call(M.outdatedDependencies,d)&&(f[d]||(f[d]=[]),u(f[d],M.outdatedDependencies[d]));k&&(u(y,[M.moduleId]),g[d]=x)}var X,j=[];for(r=0;r<y.length;r++)d=y[r],D[d]&&D[d].hot._selfAccepted&&j.push({module:d,errorHandler:D[d].hot._selfAccepted});h("dispose"),Object.keys(P).forEach(function(e){!1===P[e]&&function(e){delete installedChunks[e]}(e)});for(var Y,C,T=y.slice();T.length>0;)if(d=T.pop(),s=D[d]){var H={},A=s.hot._disposeHandlers;for(i=0;i<A.length;i++)(n=A[i])(H);for(c[d]=H,s.hot.active=!1,delete D[d],delete f[d],i=0;i<s.children.length;i++){var S=D[s.children[i]];S&&((X=S.parents.indexOf(d))>=0&&S.parents.splice(X,1))}}for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(s=D[d]))for(C=f[d],i=0;i<C.length;i++)Y=C[i],(X=s.children.indexOf(Y))>=0&&s.children.splice(X,1);for(d in h("apply"),o=v,g)Object.prototype.hasOwnProperty.call(g,d)&&(e[d]=g[d]);var N=null;for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(s=D[d])){C=f[d];var B=[];for(r=0;r<C.length;r++)if(Y=C[r],n=s.hot._acceptedDependencies[Y]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:C[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<j.length;r++){var U=j[r];d=U.module,a=[d];try{_(d)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||N||(N=e)}}return N?(h("fail"),Promise.reject(N)):(h("idle"),new Promise(function(e){e(y)}))}var D={};function _(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:l(t),parents:(s=a,a=[],s),children:[]};return e[t].call(n.exports,n,n.exports,d(t)),n.l=!0,n.exports}_.m=e,_.c=D,_.d=function(e,t,n){_.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,t){if(1&t&&(e=_(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(_.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)_.d(n,r,function(t){return e[t]}.bind(null,r));return n},_.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(t,"a",t),t},_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_.p="",_.h=function(){return o},d(1)(_.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);class r{constructor(e){this.tickDelay=e||100,this.functions=[],this.interval,this.startPipeline()}startPipeline(){const e=this;this.interval=setInterval(()=>{for(let t of e.functions)t.stopCondition()&&this.functions.splice(this.functions.indexOf(t)),t.execute(),t.currentIteration++},this.tickDelay)}add(e,t=-2,n=function(){return this.currentIteration>=t}){this.functions.push({execute:e,iterations:t,currentIteration:0,stopCondition:n})}stopPipeline(){clearInterval(this.interval)}setTickDelay(e){this.stopPipeline(),this.tickDelay=e,this.startPipeline()}}class o{constructor(e,t){this.X=e,this.Y=t}}class i{constructor(e,t,n,i,c=document.getElementsByTagName("body")[0]){this.canvas=document.createElement("canvas"),this.canvas.width=n,this.canvas.height=i,this.canvas.classList.add(t),this.canvas.id=e,this.center=new o(n/2,i/2),c.appendChild(this.canvas),this.getContext(),this.setStyle(),this.pipeline=new r(17)}setStyle(){this.context.strokeStyle="rgba(255,255,255,1.0)",this.context.globalAlpha=1,this.context.lineWidth=4}setColor(e){e()}getContext(e="2d"){this.context=this.canvas.getContext(e)}moveTo(e){this.context.moveTo(e.X,e.Y)}lineTo(e){this.context.lineTo(e.X,e.Y)}clear(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}}class c{constructor(e,t){this.startPoint=e,this.endPoint=t}}class a{constructor(e,t,n){this.startPoint=t,this.endPoint=n,this.context=e}draw(){this.context.lineWidth=4,this.context.beginPath(),this.context.moveTo(this.startPoint.X,this.startPoint.Y),this.context.lineTo(this.endPoint.X,this.endPoint.Y),this.context.stroke()}GetLineArray(e){const t=[];for(let n=0;n<e.length;n++)t.push(new c(e[n],e[n+1]))}}new a;class s{constructor(e,t,n){this.startValue=e,this.iterator=this.startValue,this.limitator=t,this.customIncrement=n||1}peek(){return this.iterator}get(){return this.customIncrement>0?this.iterator>this.limitator&&(this.iterator=this.startValue):this.iterator<this.limitator&&(this.iterator=this.startValue),this.iterator=this.iterator+this.customIncrement,this.iterator}}async function d(e,t,n){e.strokeStyle=`rgba(${t},${n})`}function l(e,t){e.lineWidth=t}function u(e,t,n){const r=[],o=document.getElementsByClassName("wrapper")[0],c=new i("fan","regular-canvas",1e3,1e3,o),l=new s(1,200,1);c.context.translate(c.center.X,c.center.Y),d(c.context,"255,255,255",.01),c.pipeline.setTickDelay(5),c.pipeline.add(()=>{const o=new a(c.context,{X:0,Y:0},{X:l.peek(),Y:l.get()});r.length>=3&&new a(c.context,r[0],{X:(l.peek()+200)*Math.cos(Math.PI/e),Y:l.get()*t}).draw(),200==l.peek()&&(c.context.rotate(Math.PI/n),r.push(o.endPoint))},0,()=>!1)}class p{constructor(e,t,n,r,o,i){this.x=t,this.y=n,this.radius=r,this.iterator=o,this.additionalFunc=i,this.currentPoint,this.context=e}draw(){this.iterator.peek()>=2*Math.PI||(this.context.beginPath(),this.additionalFunc&&this.additionalFunc(),this.context.arc(this.x,this.y,this.radius,this.iterator.get(),this.iterator.get()),this.currentPoint=this.iterator.peek(),this.context.stroke())}getCurrentPoint(){const e=this.currentPoint;return{X:this.x+this.radius*Math.cos(e),Y:this.y+this.radius*Math.sin(e)}}}var h=new class{constructor(){}spinAroundCenter(e,t,n,r=1){let i=t.X+(r*(e.X-t.X)*Math.cos(n)-(e.Y-t.Y)*Math.sin(n)),c=t.Y+(r*(e.Y-t.Y)*Math.cos(n)+(e.X-t.X)*Math.sin(n));return new o(i,c)}spinAroundSelf(e,t){let n=e.X*Math.cos(t)-e.Y*Math.sin(t),r=e.Y*Math.cos(t)+e.X*Math.sin(t);return new o(n,r)}};class f{constructor(e,t){this.center=e,this.radius=t,this.cornerPoint=new o(e.X-t,e.Y-t),this.currentPoint=this.cornerPoint}}!function(){const e=document.getElementsByClassName("wrapper")[0],t=new i("spin","regular-canvas",1e3,800,e),n=new s(Math.PI/100,2*Math.PI,Math.PI/100);t.pipeline.add(()=>{t.clear();let e=n.get();const r=[new f(new o(750,200),50),new f(new o(500,200),50),new f(new o(500,400),50),new f(new o(500,600),50),new f(new o(250,600),50),new f(new o(500,600),50),new f(new o(500,400),50),new f(new o(750,400),50),new f(new o(750,600),50),new f(new o(750,400),50),new f(new o(500,400),50),new f(new o(250,400),50),new f(new o(250,200),50)];t.context.beginPath(),r.map(n=>{t.context.beginPath(),t.moveTo(n.center),n.currentPoint=h.spinAroundCenter(n.currentPoint,n.center,e),t.lineTo(n.currentPoint),t.context.stroke()});for(let e=0;e<r.length;e++)0==e?(t.context.beginPath(),t.moveTo(r[0].currentPoint)):e==r.length?t.lineTo(r[0].currentPoint):t.lineTo(r[e].currentPoint),t.context.stroke();for(let e=0;e<r.length;e++)0==e?(t.context.beginPath(),t.moveTo(r[0].center)):e==r.length?t.lineTo(r[0].center):t.lineTo(r[e].center),t.context.stroke()},10,e=>!1)}(),u(1,1,12),u(2,1,3),u(2,1,8),function(){const e=[],t=document.getElementsByClassName("wrapper")[0],n=new i("fan","regular-canvas",1e3,800,t),r=new s(1,200,1);n.context.translate(n.center.X,n.center.Y),d(n.context,"255,255,255",.01),n.pipeline.setTickDelay(5),n.pipeline.add(()=>{const t=new a(n.context,{X:0,Y:0},{X:r.peek(),Y:r.get()});e.length>=3&&new a(n.context,e[0],{X:(r.peek()+200)*Math.cos(Math.PI/4),Y:r.get()}).draw(),200==r.peek()&&(n.context.rotate(Math.PI/12),e.push(t.endPoint))},0,()=>!1)}(),function(){const e=[],t=document.getElementsByClassName("wrapper")[0],n=new i("tubes","regular-canvas",1e3,600,t);for(let t=1;t<3;t++)e.push(new p(n.context,40*t*t,40*t*t,10*t+5,new s(Math.PI/300,2*Math.PI,Math.PI/300),()=>{d(n.context,"255,255,255",1)}));n.context.translate(n.center.X,n.center.Y);for(let t=0;t<1;t++){const r=new s(.3,.01,-.01);n.pipeline.add(e[t].draw.bind(e[t]),0,()=>!1),n.pipeline.add(e[t+1].draw.bind(e[t+1]),-2,()=>!1),n.pipeline.add(()=>{l(n.context,10),d(n.context,"255,255,255",r.get()),new a(n.context,e[t].getCurrentPoint(),{X:200,Y:200}).draw(),n.context.rotate(Math.PI/4)},0,()=>!1)}}(),function(){const e=[],t=document.getElementsByClassName("wrapper")[0],n=new i("third","regular-canvas",1e3,600,t);n.context.translate(n.center.X,n.center.Y);for(let t=1;t<3;t++)e.push(new p(n.context,40*t*t,40*t*t,10*t+5,new s(.03*Math.PI,2*Math.PI,Math.PI/300),()=>{d(n.context,"255,255,255",1)}));for(let t=0;t<1;t++){const r=new s(.3,.01,-.01);n.pipeline.add(e[t].draw.bind(e[t]),0,()=>!1),n.pipeline.add(e[t+1].draw.bind(e[t+1]),0,()=>!1),n.pipeline.add(()=>{d(n.context,"255,255,255",r.get()),new a(n.context,e[t].getCurrentPoint(),e[t+1].getCurrentPoint()).draw(),n.context.rotate(Math.PI/4)},0,()=>!1)}}(),function(){const e=document.getElementsByClassName("wrapper")[0],t=new i("fan","regular-canvas",1e3,600,e),n=[];for(let e=1;e<3;e++)n.push(new p(t.context,40*e*e,40*e*e,10*e+5,new s(.03*Math.PI,2*Math.PI,Math.PI/300),()=>{d(t.context,"255,255,255",1)}));t.context.translate(t.center.X,t.center.Y);for(let e=0;e<1;e++){const r=new s(.3,.01,-.01);t.pipeline.add(n[e].draw.bind(n[e]),0,()=>!1),t.pipeline.add(n[e+1].draw.bind(n[e+1]),0,()=>!1),t.pipeline.add(()=>{d(t.context,"255,255,255",r.get()),new a(t.context,n[e].getCurrentPoint(),n[e+1].getCurrentPoint()).draw(),t.context.rotate(Math.PI/12)},0,()=>!1)}}()}]);