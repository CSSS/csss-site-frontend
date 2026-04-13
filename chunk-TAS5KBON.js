import{Aa as V1,Ba as W,Ca as Y1,Hb as e3,Ia as e2,Ja as X1,K as F,Ka as K1,M as b,N as M2,Na as J1,P as s2,Q as h,R as O,Rb as G2,T as H1,Tb as h2,Ua as $2,Va as C2,Wa as Q1,Xb as y,Z as w,Zb as a3,a as l2,ac as K,b as _2,ba as U2,bc as n3,ca as j2,cb as Z1,cc as o3,fa as O1,la as B1,ma as W2,na as _1,nc as i3,oa as p2,oc as t3,pa as q2,pc as r3,ra as d2,sa as Y,sb as c3,ta as X,ua as U1,va as j1,wa as W1,wb as l3,xa as q1,xb as s3,ya as $1,za as G1}from"./chunk-TGG233IQ.js";var a2=class{_doc;constructor(e){this._doc=e}manager},g2=(()=>{class c extends a2{constructor(l){super(l)}supports(l){return!0}addEventListener(l,s,a,n){return l.addEventListener(s,a,n),()=>this.removeEventListener(l,s,a,n)}removeEventListener(l,s,a,n){return l.removeEventListener(s,a,n)}static \u0275fac=function(s){return new(s||c)(h(w))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),b2=new s2(""),J2=(()=>{class c{_zone;_plugins;_eventNameToPlugin=new Map;constructor(l,s){this._zone=s,l.forEach(o=>{o.manager=this});let a=l.filter(o=>!(o instanceof g2));this._plugins=a.slice().reverse();let n=l.find(o=>o instanceof g2);n&&this._plugins.push(n)}addEventListener(l,s,a,n){return this._findPluginFor(s).addEventListener(l,s,a,n)}getZone(){return this._zone}_findPluginFor(l){let s=this._eventNameToPlugin.get(l);if(s)return s;if(s=this._plugins.find(n=>n.supports(l)),!s)throw new F(5101,!1);return this._eventNameToPlugin.set(l,s),s}static \u0275fac=function(s){return new(s||c)(h(b2),h(U2))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),V2="ng-app-id";function f3(c){for(let e of c)e.remove()}function m3(c,e){let l=e.createElement("style");return l.textContent=c,l}function a0(c,e,l,s){let a=c.head?.querySelectorAll(`style[${V2}="${e}"],link[${V2}="${e}"]`);if(a)for(let n of a)n.removeAttribute(V2),n instanceof HTMLLinkElement?s.set(n.href.slice(n.href.lastIndexOf("/")+1),{usage:0,elements:[n]}):n.textContent&&l.set(n.textContent,{usage:0,elements:[n]})}function X2(c,e){let l=e.createElement("link");return l.setAttribute("rel","stylesheet"),l.setAttribute("href",c),l}var Q2=(()=>{class c{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(l,s,a,n={}){this.doc=l,this.appId=s,this.nonce=a,a0(l,s,this.inline,this.external),this.hosts.add(l.head)}addStyles(l,s){for(let a of l)this.addUsage(a,this.inline,m3);s?.forEach(a=>this.addUsage(a,this.external,X2))}removeStyles(l,s){for(let a of l)this.removeUsage(a,this.inline);s?.forEach(a=>this.removeUsage(a,this.external))}addUsage(l,s,a){let n=s.get(l);n?n.usage++:s.set(l,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(l,this.doc)))})}removeUsage(l,s){let a=s.get(l);a&&(a.usage--,a.usage<=0&&(f3(a.elements),s.delete(l)))}ngOnDestroy(){for(let[,{elements:l}]of[...this.inline,...this.external])f3(l);this.hosts.clear()}addHost(l){this.hosts.add(l);for(let[s,{elements:a}]of this.inline)a.push(this.addElement(l,m3(s,this.doc)));for(let[s,{elements:a}]of this.external)a.push(this.addElement(l,X2(s,this.doc)))}removeHost(l){this.hosts.delete(l)}addElement(l,s){return this.nonce&&s.setAttribute("nonce",this.nonce),l.appendChild(s)}static \u0275fac=function(s){return new(s||c)(h(w),h(W2),h(q2,8),h(p2))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),Y2={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Z2=/%COMP%/g;var L3="%COMP%",n0=`_nghost-${L3}`,o0=`_ngcontent-${L3}`,i0=!0,t0=new s2("",{factory:()=>i0});function r0(c){return o0.replace(Z2,c)}function f0(c){return n0.replace(Z2,c)}function u3(c,e){return e.map(l=>l.replace(Z2,c))}var c1=(()=>{class c{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(l,s,a,n,o,i,t=null,r=null){this.eventManager=l,this.sharedStylesHost=s,this.appId=a,this.removeStylesOnCompDestroy=n,this.doc=o,this.ngZone=i,this.nonce=t,this.tracingService=r,this.defaultRenderer=new n2(l,o,i,this.tracingService)}createRenderer(l,s){if(!l||!s)return this.defaultRenderer;let a=this.getOrCreateRenderer(l,s);return a instanceof N2?a.applyToHost(l):a instanceof o2&&a.applyStyles(),a}getOrCreateRenderer(l,s){let a=this.rendererByCompId,n=a.get(s.id);if(!n){let o=this.doc,i=this.ngZone,t=this.eventManager,r=this.sharedStylesHost,z=this.removeStylesOnCompDestroy,m=this.tracingService;switch(s.encapsulation){case d2.Emulated:n=new N2(t,r,s,this.appId,z,o,i,m);break;case d2.ShadowDom:return new x2(t,l,s,o,i,this.nonce,m,r);case d2.ExperimentalIsolatedShadowDom:return new x2(t,l,s,o,i,this.nonce,m);default:n=new o2(t,r,s,z,o,i,m);break}a.set(s.id,n)}return n}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(l){this.rendererByCompId.delete(l)}static \u0275fac=function(s){return new(s||c)(h(J2),h(Q2),h(W2),h(t0),h(w),h(U2),h(q2),h(K1,8))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),n2=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,l,s,a){this.eventManager=e,this.doc=l,this.ngZone=s,this.tracingService=a}destroy(){}destroyNode=null;createElement(e,l){return l?this.doc.createElementNS(Y2[l]||l,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,l){(z3(e)?e.content:e).appendChild(l)}insertBefore(e,l,s){e&&(z3(e)?e.content:e).insertBefore(l,s)}removeChild(e,l){l.remove()}selectRootElement(e,l){let s=typeof e=="string"?this.doc.querySelector(e):e;if(!s)throw new F(-5104,!1);return l||(s.textContent=""),s}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,l,s,a){if(a){l=a+":"+l;let n=Y2[a];n?e.setAttributeNS(n,l,s):e.setAttribute(l,s)}else e.setAttribute(l,s)}removeAttribute(e,l,s){if(s){let a=Y2[s];a?e.removeAttributeNS(a,l):e.removeAttribute(`${s}:${l}`)}else e.removeAttribute(l)}addClass(e,l){e.classList.add(l)}removeClass(e,l){e.classList.remove(l)}setStyle(e,l,s,a){a&(e2.DashCase|e2.Important)?e.style.setProperty(l,s,a&e2.Important?"important":""):e.style[l]=s}removeStyle(e,l,s){s&e2.DashCase?e.style.removeProperty(l):e.style[l]=""}setProperty(e,l,s){e!=null&&(e[l]=s)}setValue(e,l){e.nodeValue=l}listen(e,l,s,a){if(typeof e=="string"&&(e=K().getGlobalEventTarget(this.doc,e),!e))throw new F(5102,!1);let n=this.decoratePreventDefault(s);return this.tracingService?.wrapEventListener&&(n=this.tracingService.wrapEventListener(e,l,n)),this.eventManager.addEventListener(e,l,n,a)}decoratePreventDefault(e){return l=>{if(l==="__ngUnwrap__")return e;e(l)===!1&&l.preventDefault()}}};function z3(c){return c.tagName==="TEMPLATE"&&c.content!==void 0}var x2=class extends n2{hostEl;sharedStylesHost;shadowRoot;constructor(e,l,s,a,n,o,i,t){super(e,a,n,i),this.hostEl=l,this.sharedStylesHost=t,this.shadowRoot=l.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let r=s.styles;r=u3(s.id,r);for(let m of r){let M=document.createElement("style");o&&M.setAttribute("nonce",o),M.textContent=m,this.shadowRoot.appendChild(M)}let z=s.getExternalStyles?.();if(z)for(let m of z){let M=X2(m,a);o&&M.setAttribute("nonce",o),this.shadowRoot.appendChild(M)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,l){return super.appendChild(this.nodeOrShadowRoot(e),l)}insertBefore(e,l,s){return super.insertBefore(this.nodeOrShadowRoot(e),l,s)}removeChild(e,l){return super.removeChild(null,l)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},o2=class extends n2{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,l,s,a,n,o,i,t){super(e,n,o,i),this.sharedStylesHost=l,this.removeStylesOnCompDestroy=a;let r=s.styles;this.styles=t?u3(t,r):r,this.styleUrls=s.getExternalStyles?.(t)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&X1.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},N2=class extends o2{contentAttr;hostAttr;constructor(e,l,s,a,n,o,i,t){let r=a+"-"+s.id;super(e,l,s,n,o,i,t,r),this.contentAttr=r0(r),this.hostAttr=f0(r)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,l){let s=super.createElement(e,l);return super.setAttribute(s,this.contentAttr,""),s}};var v2=class c extends o3{supportsDOMEvents=!0;static makeCurrent(){n3(new c)}onAndCancel(e,l,s,a){return e.addEventListener(l,s,a),()=>{e.removeEventListener(l,s,a)}}dispatchEvent(e,l){e.dispatchEvent(l)}remove(e){e.remove()}createElement(e,l){return l=l||this.getDefaultDocument(),l.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,l){return l==="window"?window:l==="document"?e:l==="body"?e.body:null}getBaseHref(e){let l=z0();return l==null?null:L0(l)}resetBaseElement(){i2=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return i3(document.cookie,e)}},i2=null;function z0(){return i2=i2||document.head.querySelector("base"),i2?i2.getAttribute("href"):null}function L0(c){return new URL(c,document.baseURI).pathname}var u0=(()=>{class c{build(){return new XMLHttpRequest}static \u0275fac=function(s){return new(s||c)};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),M3=["alt","control","meta","shift"],M0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},p0={alt:c=>c.altKey,control:c=>c.ctrlKey,meta:c=>c.metaKey,shift:c=>c.shiftKey},p3=(()=>{class c extends a2{constructor(l){super(l)}supports(l){return c.parseEventName(l)!=null}addEventListener(l,s,a,n){let o=c.parseEventName(s),i=c.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>K().onAndCancel(l,o.domEventName,i,n))}static parseEventName(l){let s=l.toLowerCase().split("."),a=s.shift();if(s.length===0||!(a==="keydown"||a==="keyup"))return null;let n=c._normalizeKey(s.pop()),o="",i=s.indexOf("code");if(i>-1&&(s.splice(i,1),o="code."),M3.forEach(r=>{let z=s.indexOf(r);z>-1&&(s.splice(z,1),o+=r+".")}),o+=n,s.length!=0||n.length===0)return null;let t={};return t.domEventName=a,t.fullKey=o,t}static matchEventFullKeyCode(l,s){let a=M0[l.key]||l.key,n="";return s.indexOf("code.")>-1&&(a=l.code,n="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),M3.forEach(o=>{if(o!==a){let i=p0[o];i(l)&&(n+=o+".")}}),n+=a,n===s)}static eventCallback(l,s,a){return n=>{c.matchEventFullKeyCode(n,l)&&a.runGuarded(()=>s(n))}}static _normalizeKey(l){return l==="esc"?"escape":l}static \u0275fac=function(s){return new(s||c)(h(w))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})();function d0(c,e,l){let s=l2({rootComponent:c,platformRef:l?.platformRef},C0(e));return a3(s)}function C0(c){return{appProviders:[...b0,...c?.providers??[]],platformProviders:N0}}function h0(){v2.makeCurrent()}function g0(){return new j2}function x0(){return B1(document),document}var N0=[{provide:p2,useValue:r3},{provide:_1,useValue:h0,multi:!0},{provide:w,useFactory:x0}];var b0=[{provide:H1,useValue:"root"},{provide:j2,useFactory:g0},{provide:b2,useClass:g2,multi:!0},{provide:b2,useClass:p3,multi:!0},c1,Q2,J2,{provide:J1,useExisting:c1},{provide:t3,useClass:u0},[]];var V7=(()=>{class c{_doc;_dom;constructor(l){this._doc=l,this._dom=K()}addTag(l,s=!1){return l?this._getOrCreateElement(l,s):null}addTags(l,s=!1){return l?l.reduce((a,n)=>(n&&a.push(this._getOrCreateElement(n,s)),a),[]):[]}getTag(l){return l&&this._doc.querySelector(`meta[${l}]`)||null}getTags(l){if(!l)return[];let s=this._doc.querySelectorAll(`meta[${l}]`);return s?[].slice.call(s):[]}updateTag(l,s){if(!l)return null;s=s||this._parseSelector(l);let a=this.getTag(s);return a?this._setMetaElementAttributes(l,a):this._getOrCreateElement(l,!0)}removeTag(l){this.removeTagElement(this.getTag(l))}removeTagElement(l){l&&this._dom.remove(l)}_getOrCreateElement(l,s=!1){if(!s){let o=this._parseSelector(l),i=this.getTags(o).filter(t=>this._containsAttributes(l,t))[0];if(i!==void 0)return i}let a=this._dom.createElement("meta");return this._setMetaElementAttributes(l,a),this._doc.getElementsByTagName("head")[0].appendChild(a),a}_setMetaElementAttributes(l,s){return Object.keys(l).forEach(a=>s.setAttribute(this._getMetaKeyMap(a),l[a])),s}_parseSelector(l){let s=l.name?"name":"property";return`${s}="${l[s]}"`}_containsAttributes(l,s){return Object.keys(l).every(a=>s.getAttribute(this._getMetaKeyMap(a))===l[a])}_getMetaKeyMap(l){return y0[l]||l}static \u0275fac=function(s){return new(s||c)(h(w))};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),y0={httpEquiv:"http-equiv"},Y7=(()=>{class c{_doc;constructor(l){this._doc=l}getTitle(){return this._doc.title}setTitle(l){this._doc.title=l||""}static \u0275fac=function(s){return new(s||c)(h(w))};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var l1=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275prov=b({token:c,factory:function(s){let a=null;return s?a=new(s||c):a=h(S0),a},providedIn:"root"})}return c})(),S0=(()=>{class c extends l1{_doc;constructor(l){super(),this._doc=l}sanitize(l,s){if(s==null)return null;switch(l){case W.NONE:return s;case W.HTML:return X(s,"HTML")?Y(s):V1(this._doc,String(s)).toString();case W.STYLE:return X(s,"Style")?Y(s):s;case W.SCRIPT:if(X(s,"Script"))return Y(s);throw new F(5200,!1);case W.URL:return X(s,"URL")?Y(s):G1(String(s));case W.RESOURCE_URL:if(X(s,"ResourceURL"))return Y(s);throw new F(5201,!1);default:throw new F(5202,!1)}}bypassSecurityTrustHtml(l){return U1(l)}bypassSecurityTrustStyle(l){return j1(l)}bypassSecurityTrustScript(l){return W1(l)}bypassSecurityTrustUrl(l){return q1(l)}bypassSecurityTrustResourceUrl(l){return $1(l)}static \u0275fac=function(s){return new(s||c)(h(w))};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function r1(c,e){(e==null||e>c.length)&&(e=c.length);for(var l=0,s=Array(e);l<e;l++)s[l]=c[l];return s}function w0(c){if(Array.isArray(c))return c}function k0(c){if(Array.isArray(c))return r1(c)}function A0(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function d3(c,e){for(var l=0;l<e.length;l++){var s=e[l];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,X3(s.key),s)}}function T0(c,e,l){return e&&d3(c.prototype,e),l&&d3(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c}function w2(c,e){var l=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!l){if(Array.isArray(c)||(l=v1(c))||e&&c&&typeof c.length=="number"){l&&(c=l);var s=0,a=function(){};return{s:a,n:function(){return s>=c.length?{done:!0}:{done:!1,value:c[s++]}},e:function(t){throw t},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n,o=!0,i=!1;return{s:function(){l=l.call(c)},n:function(){var t=l.next();return o=t.done,t},e:function(t){i=!0,n=t},f:function(){try{o||l.return==null||l.return()}finally{if(i)throw n}}}}function u(c,e,l){return(e=X3(e))in c?Object.defineProperty(c,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[e]=l,c}function D0(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function E0(c,e){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var s,a,n,o,i=[],t=!0,r=!1;try{if(n=(l=l.call(c)).next,e===0){if(Object(l)!==l)return;t=!1}else for(;!(t=(s=n.call(l)).done)&&(i.push(s.value),i.length!==e);t=!0);}catch(z){r=!0,a=z}finally{try{if(!t&&l.return!=null&&(o=l.return(),Object(o)!==o))return}finally{if(r)throw a}}return i}}function P0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C3(c,e){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),l.push.apply(l,s)}return l}function f(c){for(var e=1;e<arguments.length;e++){var l=arguments[e]!=null?arguments[e]:{};e%2?C3(Object(l),!0).forEach(function(s){u(c,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):C3(Object(l)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(l,s))})}return c}function P2(c,e){return w0(c)||E0(c,e)||v1(c,e)||P0()}function D(c){return k0(c)||D0(c)||v1(c)||F0()}function R0(c,e){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var s=l.call(c,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(c)}function X3(c){var e=R0(c,"string");return typeof e=="symbol"?e:e+""}function T2(c){"@babel/helpers - typeof";return T2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T2(c)}function v1(c,e){if(c){if(typeof c=="string")return r1(c,e);var l={}.toString.call(c).slice(8,-1);return l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set"?Array.from(c):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?r1(c,e):void 0}}var h3=function(){},y1={},K3={},J3=null,Q3={mark:h3,measure:h3};try{typeof window<"u"&&(y1=window),typeof document<"u"&&(K3=document),typeof MutationObserver<"u"&&(J3=MutationObserver),typeof performance<"u"&&(Q3=performance)}catch{}var I0=y1.navigator||{},g3=I0.userAgent,x3=g3===void 0?"":g3,_=y1,d=K3,N3=J3,y2=Q3,J7=!!_.document,H=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",Z3=~x3.indexOf("MSIE")||~x3.indexOf("Trident/"),s1,H0=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,O0=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,c4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},B0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],N="classic",z2="duotone",s4="sharp",e4="sharp-duotone",a4="chisel",n4="etch",o4="jelly",i4="jelly-duo",t4="jelly-fill",r4="notdog",f4="notdog-duo",m4="slab",z4="slab-press",L4="thumbprint",u4="utility",M4="utility-duo",p4="utility-fill",d4="whiteboard",_0="Classic",U0="Duotone",j0="Sharp",W0="Sharp Duotone",q0="Chisel",$0="Etch",G0="Jelly",V0="Jelly Duo",Y0="Jelly Fill",X0="Notdog",K0="Notdog Duo",J0="Slab",Q0="Slab Press",Z0="Thumbprint",c6="Utility",l6="Utility Duo",s6="Utility Fill",e6="Whiteboard",C4=[N,z2,s4,e4,a4,n4,o4,i4,t4,r4,f4,m4,z4,L4,u4,M4,p4,d4],Q7=(s1={},u(u(u(u(u(u(u(u(u(u(s1,N,_0),z2,U0),s4,j0),e4,W0),a4,q0),n4,$0),o4,G0),i4,V0),t4,Y0),r4,X0),u(u(u(u(u(u(u(u(s1,f4,K0),m4,J0),z4,Q0),L4,Z0),u4,c6),M4,l6),p4,s6),d4,e6)),a6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},n6={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},o6=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),i6={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},h4=["fak","fa-kit","fakd","fa-kit-duotone"],b3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},t6=["kit"],r6="kit",f6="kit-duotone",m6="Kit",z6="Kit Duotone",Z7=u(u({},r6,m6),f6,z6),L6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},u6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},M6={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},v3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},e1,S2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},p6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],d6="classic",C6="duotone",h6="sharp",g6="sharp-duotone",x6="chisel",N6="etch",b6="jelly",v6="jelly-duo",y6="jelly-fill",S6="notdog",w6="notdog-duo",k6="slab",A6="slab-press",T6="thumbprint",D6="utility",E6="utility-duo",P6="utility-fill",F6="whiteboard",R6="Classic",I6="Duotone",H6="Sharp",O6="Sharp Duotone",B6="Chisel",_6="Etch",U6="Jelly",j6="Jelly Duo",W6="Jelly Fill",q6="Notdog",$6="Notdog Duo",G6="Slab",V6="Slab Press",Y6="Thumbprint",X6="Utility",K6="Utility Duo",J6="Utility Fill",Q6="Whiteboard",cc=(e1={},u(u(u(u(u(u(u(u(u(u(e1,d6,R6),C6,I6),h6,H6),g6,O6),x6,B6),N6,_6),b6,U6),v6,j6),y6,W6),S6,q6),u(u(u(u(u(u(u(u(e1,w6,$6),k6,G6),A6,V6),T6,Y6),D6,X6),E6,K6),P6,J6),F6,Q6)),Z6="kit",c8="kit-duotone",l8="Kit",s8="Kit Duotone",lc=u(u({},Z6,l8),c8,s8),e8={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},a8={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},f1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},n8=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],g4=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(p6,n8),o8=["solid","regular","light","thin","duotone","brands","semibold"],x4=[1,2,3,4,5,6,7,8,9,10],i8=x4.concat([11,12,13,14,15,16,17,18,19,20]),t8=["aw","fw","pull-left","pull-right"],r8=[].concat(D(Object.keys(a8)),o8,t8,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",S2.GROUP,S2.SWAP_OPACITY,S2.PRIMARY,S2.SECONDARY]).concat(x4.map(function(c){return"".concat(c,"x")})).concat(i8.map(function(c){return"w-".concat(c)})),f8={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},R="___FONT_AWESOME___",m1=16,N4="fa",b4="svg-inline--fa",$="data-fa-i2svg",z1="data-fa-pseudo-element",m8="data-fa-pseudo-element-pending",S1="data-prefix",w1="data-icon",y3="fontawesome-i2svg",z8="async",L8=["HTML","HEAD","STYLE","SCRIPT"],v4=["::before","::after",":before",":after"],y4=(function(){try{return!0}catch{return!1}})();function L2(c){return new Proxy(c,{get:function(l,s){return s in l?l[s]:l[N]}})}var S4=f({},c4);S4[N]=f(f(f(f({},{"fa-duotone":"duotone"}),c4[N]),b3.kit),b3["kit-duotone"]);var u8=L2(S4),L1=f({},i6);L1[N]=f(f(f(f({},{duotone:"fad"}),L1[N]),v3.kit),v3["kit-duotone"]);var S3=L2(L1),u1=f({},f1);u1[N]=f(f({},u1[N]),M6.kit);var k1=L2(u1),M1=f({},e8);M1[N]=f(f({},M1[N]),L6.kit);var sc=L2(M1),M8=H0,w4="fa-layers-text",p8=O0,d8=f({},a6),ec=L2(d8),C8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],a1=B0,h8=[].concat(D(t6),D(r8)),r2=_.FontAwesomeConfig||{};function g8(c){var e=d.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function x8(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}d&&typeof d.querySelector=="function"&&(w3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],w3.forEach(function(c){var e=P2(c,2),l=e[0],s=e[1],a=x8(g8(l));a!=null&&(r2[s]=a)}));var w3,k4={styleDefault:"solid",familyDefault:N,cssPrefix:N4,replacementClass:b4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};r2.familyPrefix&&(r2.cssPrefix=r2.familyPrefix);var Z=f(f({},k4),r2);Z.autoReplaceSvg||(Z.observeMutations=!1);var L={};Object.keys(k4).forEach(function(c){Object.defineProperty(L,c,{enumerable:!0,set:function(l){Z[c]=l,f2.forEach(function(s){return s(L)})},get:function(){return Z[c]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){Z.cssPrefix=e,f2.forEach(function(l){return l(L)})},get:function(){return Z.cssPrefix}});_.FontAwesomeConfig=L;var f2=[];function N8(c){return f2.push(c),function(){f2.splice(f2.indexOf(c),1)}}var B=m1,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function b8(c){if(!(!c||!H)){var e=d.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var l=d.head.childNodes,s=null,a=l.length-1;a>-1;a--){var n=l[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=n)}return d.head.insertBefore(e,s),c}}var v8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function k3(){for(var c=12,e="";c-- >0;)e+=v8[Math.random()*62|0];return e}function c2(c){for(var e=[],l=(c||[]).length>>>0;l--;)e[l]=c[l];return e}function A1(c){return c.classList?c2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function A4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function y8(c){return Object.keys(c||{}).reduce(function(e,l){return e+"".concat(l,'="').concat(A4(c[l]),'" ')},"").trim()}function F2(c){return Object.keys(c||{}).reduce(function(e,l){return e+"".concat(l,": ").concat(c[l].trim(),";")},"")}function T1(c){return c.size!==E.size||c.x!==E.x||c.y!==E.y||c.rotate!==E.rotate||c.flipX||c.flipY}function S8(c){var e=c.transform,l=c.containerWidth,s=c.iconWidth,a={transform:"translate(".concat(l/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),t={transform:"".concat(n," ").concat(o," ").concat(i)},r={transform:"translate(".concat(s/2*-1," -256)")};return{outer:a,inner:t,path:r}}function w8(c){var e=c.transform,l=c.width,s=l===void 0?m1:l,a=c.height,n=a===void 0?m1:a,o=c.startCentered,i=o===void 0?!1:o,t="";return i&&Z3?t+="translate(".concat(e.x/B-s/2,"em, ").concat(e.y/B-n/2,"em) "):i?t+="translate(calc(-50% + ".concat(e.x/B,"em), calc(-50% + ").concat(e.y/B,"em)) "):t+="translate(".concat(e.x/B,"em, ").concat(e.y/B,"em) "),t+="scale(".concat(e.size/B*(e.flipX?-1:1),", ").concat(e.size/B*(e.flipY?-1:1),") "),t+="rotate(".concat(e.rotate,"deg) "),t}var k8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function T4(){var c=N4,e=b4,l=L.cssPrefix,s=L.replacementClass,a=k8;if(l!==c||s!==e){var n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");a=a.replace(n,".".concat(l,"-")).replace(o,"--".concat(l,"-")).replace(i,".".concat(s))}return a}var A3=!1;function n1(){L.autoAddCss&&!A3&&(b8(T4()),A3=!0)}var A8={mixout:function(){return{dom:{css:T4,insertCss:n1}}},hooks:function(){return{beforeDOMElementCreation:function(){n1()},beforeI2svg:function(){n1()}}}},I=_||{};I[R]||(I[R]={});I[R].styles||(I[R].styles={});I[R].hooks||(I[R].hooks={});I[R].shims||(I[R].shims=[]);var T=I[R],D4=[],E4=function(){d.removeEventListener("DOMContentLoaded",E4),D2=1,D4.map(function(e){return e()})},D2=!1;H&&(D2=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),D2||d.addEventListener("DOMContentLoaded",E4));function T8(c){H&&(D2?setTimeout(c,0):D4.push(c))}function u2(c){var e=c.tag,l=c.attributes,s=l===void 0?{}:l,a=c.children,n=a===void 0?[]:a;return typeof c=="string"?A4(c):"<".concat(e," ").concat(y8(s),">").concat(n.map(u2).join(""),"</").concat(e,">")}function T3(c,e,l){if(c&&c[e]&&c[e][l])return{prefix:e,iconName:l,icon:c[e][l]}}var D8=function(e,l){return function(s,a,n,o){return e.call(l,s,a,n,o)}},o1=function(e,l,s,a){var n=Object.keys(e),o=n.length,i=a!==void 0?D8(l,a):l,t,r,z;for(s===void 0?(t=1,z=e[n[0]]):(t=0,z=s);t<o;t++)r=n[t],z=i(z,e[r],r,e);return z};function P4(c){return D(c).length!==1?null:c.codePointAt(0).toString(16)}function D3(c){return Object.keys(c).reduce(function(e,l){var s=c[l],a=!!s.icon;return a?e[s.iconName]=s.icon:e[l]=s,e},{})}function p1(c,e){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=l.skipHooks,a=s===void 0?!1:s,n=D3(e);typeof T.hooks.addPack=="function"&&!a?T.hooks.addPack(c,D3(e)):T.styles[c]=f(f({},T.styles[c]||{}),n),c==="fas"&&p1("fa",e)}var m2=T.styles,E8=T.shims,F4=Object.keys(k1),P8=F4.reduce(function(c,e){return c[e]=Object.keys(k1[e]),c},{}),D1=null,R4={},I4={},H4={},O4={},B4={};function F8(c){return~h8.indexOf(c)}function R8(c,e){var l=e.split("-"),s=l[0],a=l.slice(1).join("-");return s===c&&a!==""&&!F8(a)?a:null}var _4=function(){var e=function(n){return o1(m2,function(o,i,t){return o[t]=o1(i,n,{}),o},{})};R4=e(function(a,n,o){if(n[3]&&(a[n[3]]=o),n[2]){var i=n[2].filter(function(t){return typeof t=="number"});i.forEach(function(t){a[t.toString(16)]=o})}return a}),I4=e(function(a,n,o){if(a[o]=o,n[2]){var i=n[2].filter(function(t){return typeof t=="string"});i.forEach(function(t){a[t]=o})}return a}),B4=e(function(a,n,o){var i=n[2];return a[o]=o,i.forEach(function(t){a[t]=o}),a});var l="far"in m2||L.autoFetchSvg,s=o1(E8,function(a,n){var o=n[0],i=n[1],t=n[2];return i==="far"&&!l&&(i="fas"),typeof o=="string"&&(a.names[o]={prefix:i,iconName:t}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:i,iconName:t}),a},{names:{},unicodes:{}});H4=s.names,O4=s.unicodes,D1=R2(L.styleDefault,{family:L.familyDefault})};N8(function(c){D1=R2(c.styleDefault,{family:L.familyDefault})});_4();function E1(c,e){return(R4[c]||{})[e]}function I8(c,e){return(I4[c]||{})[e]}function q(c,e){return(B4[c]||{})[e]}function U4(c){return H4[c]||{prefix:null,iconName:null}}function H8(c){var e=O4[c],l=E1("fas",c);return e||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function U(){return D1}var j4=function(){return{prefix:null,iconName:null,rest:[]}};function O8(c){var e=N,l=F4.reduce(function(s,a){return s[a]="".concat(L.cssPrefix,"-").concat(a),s},{});return C4.forEach(function(s){(c.includes(l[s])||c.some(function(a){return P8[s].includes(a)}))&&(e=s)}),e}function R2(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=e.family,s=l===void 0?N:l,a=u8[s][c];if(s===z2&&!c)return"fad";var n=S3[s][c]||S3[s][a],o=c in T.styles?c:null,i=n||o||null;return i}function B8(c){var e=[],l=null;return c.forEach(function(s){var a=R8(L.cssPrefix,s);a?l=a:s&&e.push(s)}),{iconName:l,rest:e}}function E3(c){return c.sort().filter(function(e,l,s){return s.indexOf(e)===l})}var P3=g4.concat(h4);function I2(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=e.skipLookups,s=l===void 0?!1:l,a=null,n=E3(c.filter(function(p){return P3.includes(p)})),o=E3(c.filter(function(p){return!P3.includes(p)})),i=n.filter(function(p){return a=p,!l4.includes(p)}),t=P2(i,1),r=t[0],z=r===void 0?null:r,m=O8(n),M=f(f({},B8(o)),{},{prefix:R2(z,{family:m})});return f(f(f({},M),W8({values:c,family:m,styles:m2,config:L,canonical:M,givenPrefix:a})),_8(s,a,M))}function _8(c,e,l){var s=l.prefix,a=l.iconName;if(c||!s||!a)return{prefix:s,iconName:a};var n=e==="fa"?U4(a):{},o=q(s,a);return a=n.iconName||o||a,s=n.prefix||s,s==="far"&&!m2.far&&m2.fas&&!L.autoFetchSvg&&(s="fas"),{prefix:s,iconName:a}}var U8=C4.filter(function(c){return c!==N||c!==z2}),j8=Object.keys(f1).filter(function(c){return c!==N}).map(function(c){return Object.keys(f1[c])}).flat();function W8(c){var e=c.values,l=c.family,s=c.canonical,a=c.givenPrefix,n=a===void 0?"":a,o=c.styles,i=o===void 0?{}:o,t=c.config,r=t===void 0?{}:t,z=l===z2,m=e.includes("fa-duotone")||e.includes("fad"),M=r.familyDefault==="duotone",p=s.prefix==="fad"||s.prefix==="fa-duotone";if(!z&&(m||M||p)&&(s.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),!s.prefix&&U8.includes(l)){var g=Object.keys(i).find(function(v){return j8.includes(v)});if(g||r.autoFetchSvg){var C=o6.get(l).defaultShortPrefixId;s.prefix=C,s.iconName=q(s.prefix,s.iconName)||s.iconName}}return(s.prefix==="fa"||n==="fa")&&(s.prefix=U()||"fas"),s}var q8=(function(){function c(){A0(this,c),this.definitions={}}return T0(c,[{key:"add",value:function(){for(var l=this,s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(i){l.definitions[i]=f(f({},l.definitions[i]||{}),o[i]),p1(i,o[i]);var t=k1[N][i];t&&p1(t,o[i]),_4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,s){var a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(function(n){var o=a[n],i=o.prefix,t=o.iconName,r=o.icon,z=r[2];l[i]||(l[i]={}),z.length>0&&z.forEach(function(m){typeof m=="string"&&(l[i][m]=r)}),l[i][t]=r}),l}}])})(),F3=[],J={},Q={},$8=Object.keys(Q);function G8(c,e){var l=e.mixoutsTo;return F3=c,J={},Object.keys(Q).forEach(function(s){$8.indexOf(s)===-1&&delete Q[s]}),F3.forEach(function(s){var a=s.mixout?s.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(l[o]=a[o]),T2(a[o])==="object"&&Object.keys(a[o]).forEach(function(i){l[o]||(l[o]={}),l[o][i]=a[o][i]})}),s.hooks){var n=s.hooks();Object.keys(n).forEach(function(o){J[o]||(J[o]=[]),J[o].push(n[o])})}s.provides&&s.provides(Q)}),l}function d1(c,e){for(var l=arguments.length,s=new Array(l>2?l-2:0),a=2;a<l;a++)s[a-2]=arguments[a];var n=J[c]||[];return n.forEach(function(o){e=o.apply(null,[e].concat(s))}),e}function G(c){for(var e=arguments.length,l=new Array(e>1?e-1:0),s=1;s<e;s++)l[s-1]=arguments[s];var a=J[c]||[];a.forEach(function(n){n.apply(null,l)})}function j(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return Q[c]?Q[c].apply(null,e):void 0}function C1(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,l=c.prefix||U();if(e)return e=q(l,e)||e,T3(W4.definitions,l,e)||T3(T.styles,l,e)}var W4=new q8,V8=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,G("noAuto")},Y8={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return H?(G("beforeI2svg",e),j("pseudoElements2svg",e),j("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=e.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,T8(function(){K8({autoReplaceSvgRoot:l}),G("watch",e)})}},X8={icon:function(e){if(e===null)return null;if(T2(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var l=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],s=R2(e[0]);return{prefix:s,iconName:q(s,l)||l}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match(M8))){var a=I2(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||U(),iconName:q(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var n=U();return{prefix:n,iconName:q(n,e)||e}}}},k={noAuto:V8,config:L,dom:Y8,parse:X8,library:W4,findIconDefinition:C1,toHtml:u2},K8=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=e.autoReplaceSvgRoot,s=l===void 0?d:l;(Object.keys(T.styles).length>0||L.autoFetchSvg)&&H&&L.autoReplaceSvg&&k.dom.i2svg({node:s})};function H2(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return u2(s)})}}),Object.defineProperty(c,"node",{get:function(){if(H){var s=d.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function J8(c){var e=c.children,l=c.main,s=c.mask,a=c.attributes,n=c.styles,o=c.transform;if(T1(o)&&l.found&&!s.found){var i=l.width,t=l.height,r={x:i/t/2,y:.5};a.style=F2(f(f({},n),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Q8(c){var e=c.prefix,l=c.iconName,s=c.children,a=c.attributes,n=c.symbol,o=n===!0?"".concat(e,"-").concat(L.cssPrefix,"-").concat(l):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},a),{},{id:o}),children:s}]}]}function Z8(c){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(l){return l in c})}function P1(c){var e=c.icons,l=e.main,s=e.mask,a=c.prefix,n=c.iconName,o=c.transform,i=c.symbol,t=c.maskId,r=c.extra,z=c.watchable,m=z===void 0?!1:z,M=s.found?s:l,p=M.width,g=M.height,C=[L.replacementClass,n?"".concat(L.cssPrefix,"-").concat(n):""].filter(function(P){return r.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(r.classes).join(" "),v={children:[],attributes:f(f({},r.attributes),{},{"data-prefix":a,"data-icon":n,class:C,role:r.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(g)})};!Z8(r.attributes)&&!r.attributes["aria-hidden"]&&(v.attributes["aria-hidden"]="true"),m&&(v.attributes[$]="");var x=f(f({},v),{},{prefix:a,iconName:n,main:l,mask:s,maskId:t,transform:o,symbol:i,styles:f({},r.styles)}),S=s.found&&l.found?j("generateAbstractMask",x)||{children:[],attributes:{}}:j("generateAbstractIcon",x)||{children:[],attributes:{}},A=S.children,V=S.attributes;return x.children=A,x.attributes=V,i?Q8(x):J8(x)}function R3(c){var e=c.content,l=c.width,s=c.height,a=c.transform,n=c.extra,o=c.watchable,i=o===void 0?!1:o,t=f(f({},n.attributes),{},{class:n.classes.join(" ")});i&&(t[$]="");var r=f({},n.styles);T1(a)&&(r.transform=w8({transform:a,startCentered:!0,width:l,height:s}),r["-webkit-transform"]=r.transform);var z=F2(r);z.length>0&&(t.style=z);var m=[];return m.push({tag:"span",attributes:t,children:[e]}),m}function c5(c){var e=c.content,l=c.extra,s=f(f({},l.attributes),{},{class:l.classes.join(" ")}),a=F2(l.styles);a.length>0&&(s.style=a);var n=[];return n.push({tag:"span",attributes:s,children:[e]}),n}var i1=T.styles;function h1(c){var e=c[0],l=c[1],s=c.slice(4),a=P2(s,1),n=a[0],o=null;return Array.isArray(n)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(a1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(a1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(a1.PRIMARY),fill:"currentColor",d:n[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:l,icon:o}}var l5={found:!1,width:512,height:512};function s5(c,e){!y4&&!L.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function g1(c,e){var l=e;return e==="fa"&&L.styleDefault!==null&&(e=U()),new Promise(function(s,a){if(l==="fa"){var n=U4(c)||{};c=n.iconName||c,e=n.prefix||e}if(c&&e&&i1[e]&&i1[e][c]){var o=i1[e][c];return s(h1(o))}s5(c,e),s(f(f({},l5),{},{icon:L.showMissingIcons&&c?j("missingIconAbstract")||{}:{}}))})}var I3=function(){},x1=L.measurePerformance&&y2&&y2.mark&&y2.measure?y2:{mark:I3,measure:I3},t2='FA "7.1.0"',e5=function(e){return x1.mark("".concat(t2," ").concat(e," begins")),function(){return q4(e)}},q4=function(e){x1.mark("".concat(t2," ").concat(e," ends")),x1.measure("".concat(t2," ").concat(e),"".concat(t2," ").concat(e," begins"),"".concat(t2," ").concat(e," ends"))},F1={begin:e5,end:q4},k2=function(){};function H3(c){var e=c.getAttribute?c.getAttribute($):null;return typeof e=="string"}function a5(c){var e=c.getAttribute?c.getAttribute(S1):null,l=c.getAttribute?c.getAttribute(w1):null;return e&&l}function n5(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(L.replacementClass)}function o5(){if(L.autoReplaceSvg===!0)return A2.replace;var c=A2[L.autoReplaceSvg];return c||A2.replace}function i5(c){return d.createElementNS("http://www.w3.org/2000/svg",c)}function t5(c){return d.createElement(c)}function $4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=e.ceFn,s=l===void 0?c.tag==="svg"?i5:t5:l;if(typeof c=="string")return d.createTextNode(c);var a=s(c.tag);Object.keys(c.attributes||[]).forEach(function(o){a.setAttribute(o,c.attributes[o])});var n=c.children||[];return n.forEach(function(o){a.appendChild($4(o,{ceFn:s}))}),a}function r5(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var A2={replace:function(e){var l=e[0];if(l.parentNode)if(e[1].forEach(function(a){l.parentNode.insertBefore($4(a),l)}),l.getAttribute($)===null&&L.keepOriginalSource){var s=d.createComment(r5(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(e){var l=e[0],s=e[1];if(~A1(l).indexOf(L.replacementClass))return A2.replace(e);var a=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var n=s[0].attributes.class.split(" ").reduce(function(i,t){return t===L.replacementClass||t.match(a)?i.toSvg.push(t):i.toNode.push(t),i},{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}var o=s.map(function(i){return u2(i)}).join(`
`);l.setAttribute($,""),l.innerHTML=o}};function O3(c){c()}function G4(c,e){var l=typeof e=="function"?e:k2;if(c.length===0)l();else{var s=O3;L.mutateApproach===z8&&(s=_.requestAnimationFrame||O3),s(function(){var a=o5(),n=F1.begin("mutate");c.map(a),n(),l()})}}var R1=!1;function V4(){R1=!0}function N1(){R1=!1}var E2=null;function B3(c){if(N3&&L.observeMutations){var e=c.treeCallback,l=e===void 0?k2:e,s=c.nodeCallback,a=s===void 0?k2:s,n=c.pseudoElementsCallback,o=n===void 0?k2:n,i=c.observeMutationsRoot,t=i===void 0?d:i;E2=new N3(function(r){if(!R1){var z=U();c2(r).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!H3(m.addedNodes[0])&&(L.searchPseudoElements&&o(m.target),l(m.target)),m.type==="attributes"&&m.target.parentNode&&L.searchPseudoElements&&o([m.target],!0),m.type==="attributes"&&H3(m.target)&&~C8.indexOf(m.attributeName))if(m.attributeName==="class"&&a5(m.target)){var M=I2(A1(m.target)),p=M.prefix,g=M.iconName;m.target.setAttribute(S1,p||z),g&&m.target.setAttribute(w1,g)}else n5(m.target)&&a(m.target)})}}),H&&E2.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function f5(){E2&&E2.disconnect()}function m5(c){var e=c.getAttribute("style"),l=[];return e&&(l=e.split(";").reduce(function(s,a){var n=a.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(s[o]=i.join(":").trim()),s},{})),l}function z5(c){var e=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",a=I2(A1(c));return a.prefix||(a.prefix=U()),e&&l&&(a.prefix=e,a.iconName=l),a.iconName&&a.prefix||(a.prefix&&s.length>0&&(a.iconName=I8(a.prefix,c.innerText)||E1(a.prefix,P4(c.innerText))),!a.iconName&&L.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function L5(c){var e=c2(c.attributes).reduce(function(l,s){return l.name!=="class"&&l.name!=="style"&&(l[s.name]=s.value),l},{});return e}function u5(){return{iconName:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=z5(c),s=l.iconName,a=l.prefix,n=l.rest,o=L5(c),i=d1("parseNodeAttributes",{},c),t=e.styleParser?m5(c):[];return f({iconName:s,prefix:a,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:t,attributes:o}},i)}var M5=T.styles;function Y4(c){var e=L.autoReplaceSvg==="nest"?_3(c,{styleParser:!1}):_3(c);return~e.extra.classes.indexOf(w4)?j("generateLayersText",c,e):j("generateSvgReplacementMutation",c,e)}function p5(){return[].concat(D(h4),D(g4))}function U3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!H)return Promise.resolve();var l=d.documentElement.classList,s=function(m){return l.add("".concat(y3,"-").concat(m))},a=function(m){return l.remove("".concat(y3,"-").concat(m))},n=L.autoFetchSvg?p5():l4.concat(Object.keys(M5));n.includes("fa")||n.push("fa");var o=[".".concat(w4,":not([").concat($,"])")].concat(n.map(function(z){return".".concat(z,":not([").concat($,"])")})).join(", ");if(o.length===0)return Promise.resolve();var i=[];try{i=c2(c.querySelectorAll(o))}catch{}if(i.length>0)s("pending"),a("complete");else return Promise.resolve();var t=F1.begin("onTree"),r=i.reduce(function(z,m){try{var M=Y4(m);M&&z.push(M)}catch(p){y4||p.name==="MissingIcon"&&console.error(p)}return z},[]);return new Promise(function(z,m){Promise.all(r).then(function(M){G4(M,function(){s("active"),s("complete"),a("pending"),typeof e=="function"&&e(),t(),z()})}).catch(function(M){t(),m(M)})})}function d5(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Y4(c).then(function(l){l&&G4([l],e)})}function C5(c){return function(e){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:C1(e||{}),a=l.mask;return a&&(a=(a||{}).icon?a:C1(a||{})),c(s,f(f({},l),{},{mask:a}))}}var h5=function(e){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=l.transform,a=s===void 0?E:s,n=l.symbol,o=n===void 0?!1:n,i=l.mask,t=i===void 0?null:i,r=l.maskId,z=r===void 0?null:r,m=l.classes,M=m===void 0?[]:m,p=l.attributes,g=p===void 0?{}:p,C=l.styles,v=C===void 0?{}:C;if(e){var x=e.prefix,S=e.iconName,A=e.icon;return H2(f({type:"icon"},e),function(){return G("beforeDOMElementCreation",{iconDefinition:e,params:l}),P1({icons:{main:h1(A),mask:t?h1(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:S,transform:f(f({},E),a),symbol:o,maskId:z,extra:{attributes:g,styles:v,classes:M}})})}},g5={mixout:function(){return{icon:C5(h5)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=U3,l.nodeCallback=d5,l}}},provides:function(e){e.i2svg=function(l){var s=l.node,a=s===void 0?d:s,n=l.callback,o=n===void 0?function(){}:n;return U3(a,o)},e.generateSvgReplacementMutation=function(l,s){var a=s.iconName,n=s.prefix,o=s.transform,i=s.symbol,t=s.mask,r=s.maskId,z=s.extra;return new Promise(function(m,M){Promise.all([g1(a,n),t.iconName?g1(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var g=P2(p,2),C=g[0],v=g[1];m([l,P1({icons:{main:C,mask:v},prefix:n,iconName:a,transform:o,symbol:i,maskId:r,extra:z,watchable:!0})])}).catch(M)})},e.generateAbstractIcon=function(l){var s=l.children,a=l.attributes,n=l.main,o=l.transform,i=l.styles,t=F2(i);t.length>0&&(a.style=t);var r;return T1(o)&&(r=j("generateAbstractTransformGrouping",{main:n,transform:o,containerWidth:n.width,iconWidth:n.width})),s.push(r||n.icon),{children:s,attributes:a}}}},x5={mixout:function(){return{layer:function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.classes,n=a===void 0?[]:a;return H2({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:l,params:s});var o=[];return l(function(i){Array.isArray(i)?i.map(function(t){o=o.concat(t.abstract)}):o=o.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(D(n)).join(" ")},children:o}]})}}}},N5={mixout:function(){return{counter:function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.title,n=a===void 0?null:a,o=s.classes,i=o===void 0?[]:o,t=s.attributes,r=t===void 0?{}:t,z=s.styles,m=z===void 0?{}:z;return H2({type:"counter",content:l},function(){return G("beforeDOMElementCreation",{content:l,params:s}),c5({content:l.toString(),title:n,extra:{attributes:r,styles:m,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(D(i))}})})}}}},b5={mixout:function(){return{text:function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.transform,n=a===void 0?E:a,o=s.classes,i=o===void 0?[]:o,t=s.attributes,r=t===void 0?{}:t,z=s.styles,m=z===void 0?{}:z;return H2({type:"text",content:l},function(){return G("beforeDOMElementCreation",{content:l,params:s}),R3({content:l,transform:f(f({},E),n),extra:{attributes:r,styles:m,classes:["".concat(L.cssPrefix,"-layers-text")].concat(D(i))}})})}}},provides:function(e){e.generateLayersText=function(l,s){var a=s.transform,n=s.extra,o=null,i=null;if(Z3){var t=parseInt(getComputedStyle(l).fontSize,10),r=l.getBoundingClientRect();o=r.width/t,i=r.height/t}return Promise.resolve([l,R3({content:l.innerHTML,width:o,height:i,transform:a,extra:n,watchable:!0})])}}},X4=new RegExp('"',"ug"),j3=[1105920,1112319],W3=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),n6),f8),u6),b1=Object.keys(W3).reduce(function(c,e){return c[e.toLowerCase()]=W3[e],c},{}),v5=Object.keys(b1).reduce(function(c,e){var l=b1[e];return c[e]=l[900]||D(Object.entries(l))[0][1],c},{});function y5(c){var e=c.replace(X4,"");return P4(D(e)[0]||"")}function S5(c){var e=c.getPropertyValue("font-feature-settings").includes("ss01"),l=c.getPropertyValue("content"),s=l.replace(X4,""),a=s.codePointAt(0),n=a>=j3[0]&&a<=j3[1],o=s.length===2?s[0]===s[1]:!1;return n||o||e}function w5(c,e){var l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),a=isNaN(s)?"normal":s;return(b1[l]||{})[a]||v5[l]}function q3(c,e){var l="".concat(m8).concat(e.replace(":","-"));return new Promise(function(s,a){if(c.getAttribute(l)!==null)return s();var n=c2(c.children),o=n.filter(function(O2){return O2.getAttribute(z1)===e})[0],i=_.getComputedStyle(c,e),t=i.getPropertyValue("font-family"),r=t.match(p8),z=i.getPropertyValue("font-weight"),m=i.getPropertyValue("content");if(o&&!r)return c.removeChild(o),s();if(r&&m!=="none"&&m!==""){var M=i.getPropertyValue("content"),p=w5(t,z),g=y5(M),C=r[0].startsWith("FontAwesome"),v=S5(i),x=E1(p,g),S=x;if(C){var A=H8(g);A.iconName&&A.prefix&&(x=A.iconName,p=A.prefix)}if(x&&!v&&(!o||o.getAttribute(S1)!==p||o.getAttribute(w1)!==S)){c.setAttribute(l,S),o&&c.removeChild(o);var V=u5(),P=V.extra;P.attributes[z1]=e,g1(x,p).then(function(O2){var s0=P1(f(f({},V),{},{icons:{main:O2,mask:j4()},prefix:p,iconName:S,extra:P,watchable:!0})),B2=d.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(B2,c.firstChild):c.appendChild(B2),B2.outerHTML=s0.map(function(e0){return u2(e0)}).join(`
`),c.removeAttribute(l),s()}).catch(a)}else s()}else s()})}function k5(c){return Promise.all([q3(c,"::before"),q3(c,"::after")])}function A5(c){return c.parentNode!==document.head&&!~L8.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(z1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var T5=function(e){return!!e&&v4.some(function(l){return e.includes(l)})},D5=function(e){if(!e)return[];var l=new Set,s=e.split(/,(?![^()]*\))/).map(function(t){return t.trim()});s=s.flatMap(function(t){return t.includes("(")?t:t.split(",").map(function(r){return r.trim()})});var a=w2(s),n;try{for(a.s();!(n=a.n()).done;){var o=n.value;if(T5(o)){var i=v4.reduce(function(t,r){return t.replace(r,"")},o);i!==""&&i!=="*"&&l.add(i)}}}catch(t){a.e(t)}finally{a.f()}return l};function $3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(H){var l;if(e)l=c;else if(L.searchPseudoElementsFullScan)l=c.querySelectorAll("*");else{var s=new Set,a=w2(document.styleSheets),n;try{for(a.s();!(n=a.n()).done;){var o=n.value;try{var i=w2(o.cssRules),t;try{for(i.s();!(t=i.n()).done;){var r=t.value,z=D5(r.selectorText),m=w2(z),M;try{for(m.s();!(M=m.n()).done;){var p=M.value;s.add(p)}}catch(C){m.e(C)}finally{m.f()}}}catch(C){i.e(C)}finally{i.f()}}catch(C){L.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(C.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(C){a.e(C)}finally{a.f()}if(!s.size)return;var g=Array.from(s).join(", ");try{l=c.querySelectorAll(g)}catch{}}return new Promise(function(C,v){var x=c2(l).filter(A5).map(k5),S=F1.begin("searchPseudoElements");V4(),Promise.all(x).then(function(){S(),N1(),C()}).catch(function(){S(),N1(),v()})})}}var E5={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=$3,l}}},provides:function(e){e.pseudoElements2svg=function(l){var s=l.node,a=s===void 0?d:s;L.searchPseudoElements&&$3(a)}}},G3=!1,P5={mixout:function(){return{dom:{unwatch:function(){V4(),G3=!0}}}},hooks:function(){return{bootstrap:function(){B3(d1("mutationObserverCallbacks",{}))},noAuto:function(){f5()},watch:function(l){var s=l.observeMutationsRoot;G3?N1():B3(d1("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},V3=function(e){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(s,a){var n=a.toLowerCase().split("-"),o=n[0],i=n.slice(1).join("-");if(o&&i==="h")return s.flipX=!0,s;if(o&&i==="v")return s.flipY=!0,s;if(i=parseFloat(i),isNaN(i))return s;switch(o){case"grow":s.size=s.size+i;break;case"shrink":s.size=s.size-i;break;case"left":s.x=s.x-i;break;case"right":s.x=s.x+i;break;case"up":s.y=s.y-i;break;case"down":s.y=s.y+i;break;case"rotate":s.rotate=s.rotate+i;break}return s},l)},F5={mixout:function(){return{parse:{transform:function(l){return V3(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,s){var a=s.getAttribute("data-fa-transform");return a&&(l.transform=V3(a)),l}}},provides:function(e){e.generateAbstractTransformGrouping=function(l){var s=l.main,a=l.transform,n=l.containerWidth,o=l.iconWidth,i={transform:"translate(".concat(n/2," 256)")},t="translate(".concat(a.x*32,", ").concat(a.y*32,") "),r="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),z="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(t," ").concat(r," ").concat(z)},M={transform:"translate(".concat(o/2*-1," -256)")},p={outer:i,inner:m,path:M};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:f(f({},s.icon.attributes),p.path)}]}]}}}},t1={x:0,y:0,width:"100%",height:"100%"};function Y3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function R5(c){return c.tag==="g"?c.children:[c]}var I5={hooks:function(){return{parseNodeAttributes:function(l,s){var a=s.getAttribute("data-fa-mask"),n=a?I2(a.split(" ").map(function(o){return o.trim()})):j4();return n.prefix||(n.prefix=U()),l.mask=n,l.maskId=s.getAttribute("data-fa-mask-id"),l}}},provides:function(e){e.generateAbstractMask=function(l){var s=l.children,a=l.attributes,n=l.main,o=l.mask,i=l.maskId,t=l.transform,r=n.width,z=n.icon,m=o.width,M=o.icon,p=S8({transform:t,containerWidth:m,iconWidth:r}),g={tag:"rect",attributes:f(f({},t1),{},{fill:"white"})},C=z.children?{children:z.children.map(Y3)}:{},v={tag:"g",attributes:f({},p.inner),children:[Y3(f({tag:z.tag,attributes:f(f({},z.attributes),p.path)},C))]},x={tag:"g",attributes:f({},p.outer),children:[v]},S="mask-".concat(i||k3()),A="clip-".concat(i||k3()),V={tag:"mask",attributes:f(f({},t1),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,x]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:R5(M)},V]};return s.push(P,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(S,")")},t1)}),{children:s,attributes:a}}}},H5={provides:function(e){var l=!1;_.matchMedia&&(l=_.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var s=[],a={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:f(f({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},n),{},{attributeName:"opacity"}),i={tag:"circle",attributes:f(f({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||i.children.push({tag:"animate",attributes:f(f({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),s.push(i),s.push({tag:"path",attributes:f(f({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:f(f({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},O5={hooks:function(){return{parseNodeAttributes:function(l,s){var a=s.getAttribute("data-fa-symbol"),n=a===null?!1:a===""?!0:a;return l.symbol=n,l}}}},B5=[A8,g5,x5,N5,b5,E5,P5,F5,I5,H5,O5];G8(B5,{mixoutsTo:k});var ac=k.noAuto,K4=k.config,nc=k.library,J4=k.dom,Q4=k.parse,oc=k.findIconDefinition,ic=k.toHtml,Z4=k.icon,tc=k.layer,_5=k.text,U5=k.counter;var j5=["*"],W5=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(l){K4.autoAddCss=l,this._autoAddCss=l}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(s){return new(s||c)};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),q5=(()=>{class c{definitions={};addIcons(...l){for(let s of l){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let a of s.icon[2])typeof a=="string"&&(this.definitions[s.prefix][a]=s)}}addIconPacks(...l){for(let s of l){let a=Object.keys(s).map(n=>s[n]);this.addIcons(...a)}}getIconDefinition(l,s){return l in this.definitions&&s in this.definitions[l]?this.definitions[l][s]:null}static \u0275fac=function(s){return new(s||c)};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),$5=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},G5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},l0=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),V5=c=>{let e=l0(c.rotate),l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:e,"fa-rotate-by":c.rotate!=null&&!e,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(s=>l[s]?s:null).filter(s=>s!=null)},I1=new WeakSet,c0="fa-auto-css";function Y5(c,e){if(!e.autoAddCss||I1.has(c))return;if(c.getElementById(c0)!=null){e.autoAddCss=!1,I1.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",c0),l.innerHTML=J4.css();let s=c.head.childNodes,a=null;for(let n=s.length-1;n>-1;n--){let o=s[n],i=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}c.head.insertBefore(l,a),e.autoAddCss=!1,I1.add(c)}var X5=c=>c.prefix!==void 0&&c.iconName!==void 0,K5=(c,e)=>X5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},J5=(()=>{class c{stackItemSize=h2("1x");size=h2();_effect=O1(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(s){return new(s||c)};static \u0275dir=Q1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),Q5=(()=>{class c{size=h2();classes=G2(()=>{let l=this.size(),s=l?{[`fa-${l}`]:!0}:{};return _2(l2({},s),{"fa-stack":!0})});static \u0275fac=function(s){return new(s||c)};static \u0275cmp=$2({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(s,a){s&2&&e3(a.classes())},inputs:{size:[1,"size"]},ngContentSelectors:j5,decls:1,vars:0,template:function(s,a){s&1&&(l3(),s3(0))},encapsulation:2,changeDetection:0})}return c})(),gc=(()=>{class c{icon=y();title=y();animation=y();mask=y();flip=y();size=y();pull=y();border=y();inverse=y();symbol=y();rotate=y();fixedWidth=y();transform=y();a11yRole=y();renderedIconHTML=G2(()=>{let l=this.icon()??this.config.fallbackIcon;if(!l)return G5(),"";let s=this.findIconDefinition(l);if(!s)return"";let a=this.buildParams();Y5(this.document,this.config);let n=Z4(s,a);return this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))});document=O(w);sanitizer=O(l1);config=O(W5);iconLibrary=O(q5);stackItem=O(J5,{optional:!0});stack=O(Q5,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(l){let s=K5(l,this.config.defaultPrefix);if("icon"in s)return s;let a=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return a??($5(s),null)}buildParams(){let l=this.fixedWidth(),s={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof l=="boolean"?l:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},a=this.transform(),n=typeof a=="string"?Q4.transform(a):a,o=this.mask(),i=o!=null?this.findIconDefinition(o):null,t={},r=this.a11yRole();r!=null&&(t.role=r);let z={};return s.rotate!=null&&!l0(s.rotate)&&(z["--fa-rotate-angle"]=`${s.rotate}`),{title:this.title(),transform:n,classes:V5(s),mask:i??void 0,symbol:this.symbol(),attributes:t,styles:z}}static \u0275fac=function(s){return new(s||c)};static \u0275cmp=$2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,a){s&2&&(c3("innerHTML",a.renderedIconHTML(),Y1),Z1("title",a.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(s,a){},encapsulation:2,changeDetection:0})}return c})();var xc=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275mod=C2({type:c});static \u0275inj=M2({})}return c})();var vc={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]};var yc={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]};var Sc={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};var wc={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};var kc={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"]};var Ac={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var Tc={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var Dc={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]};var Ec={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var Pc={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};var Fc={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};export{d0 as a,V7 as b,Y7 as c,l1 as d,gc as e,xc as f,vc as g,yc as h,Sc as i,wc as j,kc as k,Ac as l,Tc as m,Dc as n,Ec as o,Pc as p,Fc as q};
