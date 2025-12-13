import{$b as Z1,Aa as _,Ba as _1,Db as $1,Ha as s2,Ia as U1,Ob as _2,P as A,Pb as X1,Q as d,Qa as B2,R as p2,Ra as u2,Rb as C2,Sa as q1,T as c2,U as u,V as R,Va as j1,Vb as x,X as T1,Xa as e2,Xb as K1,_b as $,a as J,ac as Q1,b as R2,ba as g,cb as W1,da as F2,la as E1,lc as J1,ma as I2,mc as c3,na as P1,nc as l3,oa as l2,pa as H2,pb as G1,pc as s3,qa as O2,ra as V,sa as Y,sb as V1,ta as D1,tb as Y1,ua as R1,va as F1,wa as I1,xa as H1,ya as O1,za as B1}from"./chunk-KAIPE7XC.js";var g2=new c2(""),G2=(()=>{class c{_zone;_plugins;_eventNameToPlugin=new Map;constructor(l,s){this._zone=s,l.forEach(a=>{a.manager=this}),this._plugins=l.slice().reverse()}addEventListener(l,s,a,n){return this._findPluginFor(s).addEventListener(l,s,a,n)}getZone(){return this._zone}_findPluginFor(l){let s=this._eventNameToPlugin.get(l);if(s)return s;if(s=this._plugins.find(n=>n.supports(l)),!s)throw new A(5101,!1);return this._eventNameToPlugin.set(l,s),s}static \u0275fac=function(s){return new(s||c)(u(g2),u(e2))};static \u0275prov=d({token:c,factory:c.\u0275fac})}return c})(),a2=class{_doc;constructor(e){this._doc=e}manager},d2="ng-app-id";function e3(c){for(let e of c)e.remove()}function a3(c,e){let l=e.createElement("style");return l.textContent=c,l}function y4(c,e,l,s){let a=c.head?.querySelectorAll(`style[${d2}="${e}"],link[${d2}="${e}"]`);if(a)for(let n of a)n.removeAttribute(d2),n instanceof HTMLLinkElement?s.set(n.href.slice(n.href.lastIndexOf("/")+1),{usage:0,elements:[n]}):n.textContent&&l.set(n.textContent,{usage:0,elements:[n]})}function q2(c,e){let l=e.createElement("link");return l.setAttribute("rel","stylesheet"),l.setAttribute("href",c),l}var V2=(()=>{class c{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(l,s,a,n={}){this.doc=l,this.appId=s,this.nonce=a,this.isServer=s3(n),y4(l,s,this.inline,this.external),this.hosts.add(l.head)}addStyles(l,s){for(let a of l)this.addUsage(a,this.inline,a3);s?.forEach(a=>this.addUsage(a,this.external,q2))}removeStyles(l,s){for(let a of l)this.removeUsage(a,this.inline);s?.forEach(a=>this.removeUsage(a,this.external))}addUsage(l,s,a){let n=s.get(l);n?n.usage++:s.set(l,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(l,this.doc)))})}removeUsage(l,s){let a=s.get(l);a&&(a.usage--,a.usage<=0&&(e3(a.elements),s.delete(l)))}ngOnDestroy(){for(let[,{elements:l}]of[...this.inline,...this.external])e3(l);this.hosts.clear()}addHost(l){this.hosts.add(l);for(let[s,{elements:a}]of this.inline)a.push(this.addElement(l,a3(s,this.doc)));for(let[s,{elements:a}]of this.external)a.push(this.addElement(l,q2(s,this.doc)))}removeHost(l){this.hosts.delete(l)}addElement(l,s){return this.nonce&&s.setAttribute("nonce",this.nonce),this.isServer&&s.setAttribute(d2,this.appId),l.appendChild(s)}static \u0275fac=function(s){return new(s||c)(u(g),u(I2),u(H2,8),u(l2))};static \u0275prov=d({token:c,factory:c.\u0275fac})}return c})(),U2={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Y2=/%COMP%/g;var o3="%COMP%",w4=`_nghost-${o3}`,k4=`_ngcontent-${o3}`,v4=!0,A4=new c2("",{providedIn:"root",factory:()=>v4});function T4(c){return k4.replace(Y2,c)}function E4(c){return w4.replace(Y2,c)}function i3(c,e){return e.map(l=>l.replace(Y2,c))}var $2=(()=>{class c{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(l,s,a,n,o,i,f,r=null,m=null){this.eventManager=l,this.sharedStylesHost=s,this.appId=a,this.removeStylesOnCompDestroy=n,this.doc=o,this.platformId=i,this.ngZone=f,this.nonce=r,this.tracingService=m,this.platformIsServer=!1,this.defaultRenderer=new n2(l,o,f,this.platformIsServer,this.tracingService)}createRenderer(l,s){if(!l||!s)return this.defaultRenderer;let a=this.getOrCreateRenderer(l,s);return a instanceof h2?a.applyToHost(l):a instanceof o2&&a.applyStyles(),a}getOrCreateRenderer(l,s){let a=this.rendererByCompId,n=a.get(s.id);if(!n){let o=this.doc,i=this.ngZone,f=this.eventManager,r=this.sharedStylesHost,m=this.removeStylesOnCompDestroy,M=this.platformIsServer,L=this.tracingService;switch(s.encapsulation){case O2.Emulated:n=new h2(f,r,s,this.appId,m,o,i,M,L);break;case O2.ShadowDom:return new j2(f,r,l,s,o,i,this.nonce,M,L);default:n=new o2(f,r,s,m,o,i,M,L);break}a.set(s.id,n)}return n}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(l){this.rendererByCompId.delete(l)}static \u0275fac=function(s){return new(s||c)(u(G2),u(V2),u(I2),u(A4),u(g),u(l2),u(e2),u(H2),u(j1,8))};static \u0275prov=d({token:c,factory:c.\u0275fac})}return c})(),n2=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,l,s,a,n){this.eventManager=e,this.doc=l,this.ngZone=s,this.platformIsServer=a,this.tracingService=n}destroy(){}destroyNode=null;createElement(e,l){return l?this.doc.createElementNS(U2[l]||l,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,l){(n3(e)?e.content:e).appendChild(l)}insertBefore(e,l,s){e&&(n3(e)?e.content:e).insertBefore(l,s)}removeChild(e,l){l.remove()}selectRootElement(e,l){let s=typeof e=="string"?this.doc.querySelector(e):e;if(!s)throw new A(-5104,!1);return l||(s.textContent=""),s}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,l,s,a){if(a){l=a+":"+l;let n=U2[a];n?e.setAttributeNS(n,l,s):e.setAttribute(l,s)}else e.setAttribute(l,s)}removeAttribute(e,l,s){if(s){let a=U2[s];a?e.removeAttributeNS(a,l):e.removeAttribute(`${s}:${l}`)}else e.removeAttribute(l)}addClass(e,l){e.classList.add(l)}removeClass(e,l){e.classList.remove(l)}setStyle(e,l,s,a){a&(s2.DashCase|s2.Important)?e.style.setProperty(l,s,a&s2.Important?"important":""):e.style[l]=s}removeStyle(e,l,s){s&s2.DashCase?e.style.removeProperty(l):e.style[l]=""}setProperty(e,l,s){e!=null&&(e[l]=s)}setValue(e,l){e.nodeValue=l}listen(e,l,s,a){if(typeof e=="string"&&(e=$().getGlobalEventTarget(this.doc,e),!e))throw new A(5102,!1);let n=this.decoratePreventDefault(s);return this.tracingService?.wrapEventListener&&(n=this.tracingService.wrapEventListener(e,l,n)),this.eventManager.addEventListener(e,l,n,a)}decoratePreventDefault(e){return l=>{if(l==="__ngUnwrap__")return e;e(l)===!1&&l.preventDefault()}}};function n3(c){return c.tagName==="TEMPLATE"&&c.content!==void 0}var j2=class extends n2{sharedStylesHost;hostEl;shadowRoot;constructor(e,l,s,a,n,o,i,f,r){super(e,n,o,f,r),this.sharedStylesHost=l,this.hostEl=s,this.shadowRoot=s.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let m=a.styles;m=i3(a.id,m);for(let L of m){let C=document.createElement("style");i&&C.setAttribute("nonce",i),C.textContent=L,this.shadowRoot.appendChild(C)}let M=a.getExternalStyles?.();if(M)for(let L of M){let C=q2(L,n);i&&C.setAttribute("nonce",i),this.shadowRoot.appendChild(C)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,l){return super.appendChild(this.nodeOrShadowRoot(e),l)}insertBefore(e,l,s){return super.insertBefore(this.nodeOrShadowRoot(e),l,s)}removeChild(e,l){return super.removeChild(null,l)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},o2=class extends n2{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,l,s,a,n,o,i,f,r){super(e,n,o,i,f),this.sharedStylesHost=l,this.removeStylesOnCompDestroy=a;let m=s.styles;this.styles=r?i3(r,m):m,this.styleUrls=s.getExternalStyles?.(r)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},h2=class extends o2{contentAttr;hostAttr;constructor(e,l,s,a,n,o,i,f,r){let m=a+"-"+s.id;super(e,l,s,n,o,i,f,r,m),this.contentAttr=T4(m),this.hostAttr=E4(m)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,l){let s=super.createElement(e,l);return super.setAttribute(s,this.contentAttr,""),s}};var x2=class c extends Q1{supportsDOMEvents=!0;static makeCurrent(){Z1(new c)}onAndCancel(e,l,s,a){return e.addEventListener(l,s,a),()=>{e.removeEventListener(l,s,a)}}dispatchEvent(e,l){e.dispatchEvent(l)}remove(e){e.remove()}createElement(e,l){return l=l||this.getDefaultDocument(),l.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,l){return l==="window"?window:l==="document"?e:l==="body"?e.body:null}getBaseHref(e){let l=D4();return l==null?null:R4(l)}resetBaseElement(){i2=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return J1(document.cookie,e)}},i2=null;function D4(){return i2=i2||document.head.querySelector("base"),i2?i2.getAttribute("href"):null}function R4(c){return new URL(c,document.baseURI).pathname}var F4=(()=>{class c{build(){return new XMLHttpRequest}static \u0275fac=function(s){return new(s||c)};static \u0275prov=d({token:c,factory:c.\u0275fac})}return c})(),r3=(()=>{class c extends a2{constructor(l){super(l)}supports(l){return!0}addEventListener(l,s,a,n){return l.addEventListener(s,a,n),()=>this.removeEventListener(l,s,a,n)}removeEventListener(l,s,a,n){return l.removeEventListener(s,a,n)}static \u0275fac=function(s){return new(s||c)(u(g))};static \u0275prov=d({token:c,factory:c.\u0275fac})}return c})(),t3=["alt","control","meta","shift"],I4={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},H4={alt:c=>c.altKey,control:c=>c.ctrlKey,meta:c=>c.metaKey,shift:c=>c.shiftKey},f3=(()=>{class c extends a2{constructor(l){super(l)}supports(l){return c.parseEventName(l)!=null}addEventListener(l,s,a,n){let o=c.parseEventName(s),i=c.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>$().onAndCancel(l,o.domEventName,i,n))}static parseEventName(l){let s=l.toLowerCase().split("."),a=s.shift();if(s.length===0||!(a==="keydown"||a==="keyup"))return null;let n=c._normalizeKey(s.pop()),o="",i=s.indexOf("code");if(i>-1&&(s.splice(i,1),o="code."),t3.forEach(r=>{let m=s.indexOf(r);m>-1&&(s.splice(m,1),o+=r+".")}),o+=n,s.length!=0||n.length===0)return null;let f={};return f.domEventName=a,f.fullKey=o,f}static matchEventFullKeyCode(l,s){let a=I4[l.key]||l.key,n="";return s.indexOf("code.")>-1&&(a=l.code,n="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),t3.forEach(o=>{if(o!==a){let i=H4[o];i(l)&&(n+=o+".")}}),n+=a,n===s)}static eventCallback(l,s,a){return n=>{c.matchEventFullKeyCode(n,l)&&a.runGuarded(()=>s(n))}}static _normalizeKey(l){return l==="esc"?"escape":l}static \u0275fac=function(s){return new(s||c)(u(g))};static \u0275prov=d({token:c,factory:c.\u0275fac})}return c})();function O4(c,e){return K1(J({rootComponent:c},B4(e)))}function B4(c){return{appProviders:[...W4,...c?.providers??[]],platformProviders:j4}}function _4(){x2.makeCurrent()}function U4(){return new F2}function q4(){return E1(document),document}var j4=[{provide:l2,useValue:l3},{provide:P1,useValue:_4,multi:!0},{provide:g,useFactory:q4}];var W4=[{provide:T1,useValue:"root"},{provide:F2,useFactory:U4},{provide:g2,useClass:r3,multi:!0,deps:[g]},{provide:g2,useClass:f3,multi:!0,deps:[g]},$2,V2,G2,{provide:U1,useExisting:$2},{provide:c3,useClass:F4},[]];var l5=(()=>{class c{_doc;_dom;constructor(l){this._doc=l,this._dom=$()}addTag(l,s=!1){return l?this._getOrCreateElement(l,s):null}addTags(l,s=!1){return l?l.reduce((a,n)=>(n&&a.push(this._getOrCreateElement(n,s)),a),[]):[]}getTag(l){return l&&this._doc.querySelector(`meta[${l}]`)||null}getTags(l){if(!l)return[];let s=this._doc.querySelectorAll(`meta[${l}]`);return s?[].slice.call(s):[]}updateTag(l,s){if(!l)return null;s=s||this._parseSelector(l);let a=this.getTag(s);return a?this._setMetaElementAttributes(l,a):this._getOrCreateElement(l,!0)}removeTag(l){this.removeTagElement(this.getTag(l))}removeTagElement(l){l&&this._dom.remove(l)}_getOrCreateElement(l,s=!1){if(!s){let o=this._parseSelector(l),i=this.getTags(o).filter(f=>this._containsAttributes(l,f))[0];if(i!==void 0)return i}let a=this._dom.createElement("meta");return this._setMetaElementAttributes(l,a),this._doc.getElementsByTagName("head")[0].appendChild(a),a}_setMetaElementAttributes(l,s){return Object.keys(l).forEach(a=>s.setAttribute(this._getMetaKeyMap(a),l[a])),s}_parseSelector(l){let s=l.name?"name":"property";return`${s}="${l[s]}"`}_containsAttributes(l,s){return Object.keys(l).every(a=>s.getAttribute(this._getMetaKeyMap(a))===l[a])}_getMetaKeyMap(l){return V4[l]||l}static \u0275fac=function(s){return new(s||c)(u(g))};static \u0275prov=d({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),V4={httpEquiv:"http-equiv"},s5=(()=>{class c{_doc;constructor(l){this._doc=l}getTitle(){return this._doc.title}setTitle(l){this._doc.title=l||""}static \u0275fac=function(s){return new(s||c)(u(g))};static \u0275prov=d({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var X2=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275prov=d({token:c,factory:function(s){let a=null;return s?a=new(s||c):a=u(Y4),a},providedIn:"root"})}return c})(),Y4=(()=>{class c extends X2{_doc;constructor(l){super(),this._doc=l}sanitize(l,s){if(s==null)return null;switch(l){case _.NONE:return s;case _.HTML:return Y(s,"HTML")?V(s):B1(this._doc,String(s)).toString();case _.STYLE:return Y(s,"Style")?V(s):s;case _.SCRIPT:if(Y(s,"Script"))return V(s);throw new A(5200,!1);case _.URL:return Y(s,"URL")?V(s):O1(String(s));case _.RESOURCE_URL:if(Y(s,"ResourceURL"))return V(s);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(l){return D1(l)}bypassSecurityTrustStyle(l){return R1(l)}bypassSecurityTrustScript(l){return F1(l)}bypassSecurityTrustUrl(l){return I1(l)}bypassSecurityTrustResourceUrl(l){return H1(l)}static \u0275fac=function(s){return new(s||c)(u(g))};static \u0275prov=d({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function $4(c,e,l){return(e=K4(e))in c?Object.defineProperty(c,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[e]=l,c}function m3(c,e){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),l.push.apply(l,s)}return l}function t(c){for(var e=1;e<arguments.length;e++){var l=arguments[e]!=null?arguments[e]:{};e%2?m3(Object(l),!0).forEach(function(s){$4(c,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):m3(Object(l)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(l,s))})}return c}function X4(c,e){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var s=l.call(c,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(c)}function K4(c){var e=X4(c,"string");return typeof e=="symbol"?e:e+""}var z3=()=>{},d1={},O3={},B3=null,_3={mark:z3,measure:z3};try{typeof window<"u"&&(d1=window),typeof document<"u"&&(O3=document),typeof MutationObserver<"u"&&(B3=MutationObserver),typeof performance<"u"&&(_3=performance)}catch{}var{userAgent:L3=""}=d1.navigator||{},I=d1,p=O3,M3=B3,N2=_3,n5=!!I.document,P=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",U3=~L3.indexOf("MSIE")||~L3.indexOf("Trident/"),Z4=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Q4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,q3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},J4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],h="classic",v2="duotone",c0="sharp",l0="sharp-duotone",W3=[h,v2,c0,l0],s0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},e0={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},a0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),n0={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},o0=["fak","fa-kit","fakd","fa-kit-duotone"],p3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},i0=["kit"],t0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},r0=["fak","fakd"],f0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},u3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},b2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},m0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],z0=["fak","fa-kit","fakd","fa-kit-duotone"],L0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},M0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},p0={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},l1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},u0=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],s1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...m0,...u0],C0=["solid","regular","light","thin","duotone","brands"],G3=[1,2,3,4,5,6,7,8,9,10],d0=G3.concat([11,12,13,14,15,16,17,18,19,20]),h0=[...Object.keys(p0),...C0,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",b2.GROUP,b2.SWAP_OPACITY,b2.PRIMARY,b2.SECONDARY].concat(G3.map(c=>"".concat(c,"x"))).concat(d0.map(c=>"w-".concat(c))),g0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},T="___FONT_AWESOME___",e1=16,V3="fa",Y3="svg-inline--fa",q="data-fa-i2svg",a1="data-fa-pseudo-element",x0="data-fa-pseudo-element-pending",h1="data-prefix",g1="data-icon",C3="fontawesome-i2svg",N0="async",b0=["HTML","HEAD","STYLE","SCRIPT"],$3=(()=>{try{return!0}catch{return!1}})();function L2(c){return new Proxy(c,{get(e,l){return l in e?e[l]:e[h]}})}var X3=t({},q3);X3[h]=t(t(t(t({},{"fa-duotone":"duotone"}),q3[h]),p3.kit),p3["kit-duotone"]);var S0=L2(X3),n1=t({},n0);n1[h]=t(t(t(t({},{duotone:"fad"}),n1[h]),u3.kit),u3["kit-duotone"]);var d3=L2(n1),o1=t({},l1);o1[h]=t(t({},o1[h]),f0.kit);var x1=L2(o1),i1=t({},M0);i1[h]=t(t({},i1[h]),t0.kit);var o5=L2(i1),y0=Z4,K3="fa-layers-text",w0=Q4,k0=t({},s0),i5=L2(k0),v0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K2=J4,A0=[...i0,...h0],r2=I.FontAwesomeConfig||{};function T0(c){var e=p.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function E0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[l,s]=e,a=E0(T0(l));a!=null&&(r2[s]=a)});var Z3={styleDefault:"solid",familyDefault:h,cssPrefix:V3,replacementClass:Y3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};r2.familyPrefix&&(r2.cssPrefix=r2.familyPrefix);var Z=t(t({},Z3),r2);Z.autoReplaceSvg||(Z.observeMutations=!1);var z={};Object.keys(Z3).forEach(c=>{Object.defineProperty(z,c,{enumerable:!0,set:function(e){Z[c]=e,f2.forEach(l=>l(z))},get:function(){return Z[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(c){Z.cssPrefix=c,f2.forEach(e=>e(z))},get:function(){return Z.cssPrefix}});I.FontAwesomeConfig=z;var f2=[];function P0(c){return f2.push(c),()=>{f2.splice(f2.indexOf(c),1)}}var F=e1,w={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function D0(c){if(!c||!P)return;let e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;let l=p.head.childNodes,s=null;for(let a=l.length-1;a>-1;a--){let n=l[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=n)}return p.head.insertBefore(e,s),c}var R0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function m2(){let c=12,e="";for(;c-- >0;)e+=R0[Math.random()*62|0];return e}function Q(c){let e=[];for(let l=(c||[]).length>>>0;l--;)e[l]=c[l];return e}function N1(c){return c.classList?Q(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function Q3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function F0(c){return Object.keys(c||{}).reduce((e,l)=>e+"".concat(l,'="').concat(Q3(c[l]),'" '),"").trim()}function A2(c){return Object.keys(c||{}).reduce((e,l)=>e+"".concat(l,": ").concat(c[l].trim(),";"),"")}function b1(c){return c.size!==w.size||c.x!==w.x||c.y!==w.y||c.rotate!==w.rotate||c.flipX||c.flipY}function I0(c){let{transform:e,containerWidth:l,iconWidth:s}=c,a={transform:"translate(".concat(l/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(n," ").concat(o," ").concat(i)},r={transform:"translate(".concat(s/2*-1," -256)")};return{outer:a,inner:f,path:r}}function H0(c){let{transform:e,width:l=e1,height:s=e1,startCentered:a=!1}=c,n="";return a&&U3?n+="translate(".concat(e.x/F-l/2,"em, ").concat(e.y/F-s/2,"em) "):a?n+="translate(calc(-50% + ".concat(e.x/F,"em), calc(-50% + ").concat(e.y/F,"em)) "):n+="translate(".concat(e.x/F,"em, ").concat(e.y/F,"em) "),n+="scale(".concat(e.size/F*(e.flipX?-1:1),", ").concat(e.size/F*(e.flipY?-1:1),") "),n+="rotate(".concat(e.rotate,"deg) "),n}var O0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
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
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
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
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
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
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
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

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
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
}`;function J3(){let c=V3,e=Y3,l=z.cssPrefix,s=z.replacementClass,a=O0;if(l!==c||s!==e){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");a=a.replace(n,".".concat(l,"-")).replace(o,"--".concat(l,"-")).replace(i,".".concat(s))}return a}var h3=!1;function Z2(){z.autoAddCss&&!h3&&(D0(J3()),h3=!0)}var B0={mixout(){return{dom:{css:J3,insertCss:Z2}}},hooks(){return{beforeDOMElementCreation(){Z2()},beforeI2svg(){Z2()}}}},E=I||{};E[T]||(E[T]={});E[T].styles||(E[T].styles={});E[T].hooks||(E[T].hooks={});E[T].shims||(E[T].shims=[]);var k=E[T],c4=[],l4=function(){p.removeEventListener("DOMContentLoaded",l4),w2=1,c4.map(c=>c())},w2=!1;P&&(w2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),w2||p.addEventListener("DOMContentLoaded",l4));function _0(c){P&&(w2?setTimeout(c,0):c4.push(c))}function M2(c){let{tag:e,attributes:l={},children:s=[]}=c;return typeof c=="string"?Q3(c):"<".concat(e," ").concat(F0(l),">").concat(s.map(M2).join(""),"</").concat(e,">")}function g3(c,e,l){if(c&&c[e]&&c[e][l])return{prefix:e,iconName:l,icon:c[e][l]}}var U0=function(e,l){return function(s,a,n,o){return e.call(l,s,a,n,o)}},Q2=function(e,l,s,a){var n=Object.keys(e),o=n.length,i=a!==void 0?U0(l,a):l,f,r,m;for(s===void 0?(f=1,m=e[n[0]]):(f=0,m=s);f<o;f++)r=n[f],m=i(m,e[r],r,e);return m};function q0(c){let e=[],l=0,s=c.length;for(;l<s;){let a=c.charCodeAt(l++);if(a>=55296&&a<=56319&&l<s){let n=c.charCodeAt(l++);(n&64512)==56320?e.push(((a&1023)<<10)+(n&1023)+65536):(e.push(a),l--)}else e.push(a)}return e}function t1(c){let e=q0(c);return e.length===1?e[0].toString(16):null}function j0(c,e){let l=c.length,s=c.charCodeAt(e),a;return s>=55296&&s<=56319&&l>e+1&&(a=c.charCodeAt(e+1),a>=56320&&a<=57343)?(s-55296)*1024+a-56320+65536:s}function x3(c){return Object.keys(c).reduce((e,l)=>{let s=c[l];return!!s.icon?e[s.iconName]=s.icon:e[l]=s,e},{})}function r1(c,e){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:s=!1}=l,a=x3(e);typeof k.hooks.addPack=="function"&&!s?k.hooks.addPack(c,x3(e)):k.styles[c]=t(t({},k.styles[c]||{}),a),c==="fas"&&r1("fa",e)}var{styles:z2,shims:W0}=k,s4=Object.keys(x1),G0=s4.reduce((c,e)=>(c[e]=Object.keys(x1[e]),c),{}),S1=null,e4={},a4={},n4={},o4={},i4={};function V0(c){return~A0.indexOf(c)}function Y0(c,e){let l=e.split("-"),s=l[0],a=l.slice(1).join("-");return s===c&&a!==""&&!V0(a)?a:null}var t4=()=>{let c=s=>Q2(z2,(a,n,o)=>(a[o]=Q2(n,s,{}),a),{});e4=c((s,a,n)=>(a[3]&&(s[a[3]]=n),a[2]&&a[2].filter(i=>typeof i=="number").forEach(i=>{s[i.toString(16)]=n}),s)),a4=c((s,a,n)=>(s[n]=n,a[2]&&a[2].filter(i=>typeof i=="string").forEach(i=>{s[i]=n}),s)),i4=c((s,a,n)=>{let o=a[2];return s[n]=n,o.forEach(i=>{s[i]=n}),s});let e="far"in z2||z.autoFetchSvg,l=Q2(W0,(s,a)=>{let n=a[0],o=a[1],i=a[2];return o==="far"&&!e&&(o="fas"),typeof n=="string"&&(s.names[n]={prefix:o,iconName:i}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:o,iconName:i}),s},{names:{},unicodes:{}});n4=l.names,o4=l.unicodes,S1=T2(z.styleDefault,{family:z.familyDefault})};P0(c=>{S1=T2(c.styleDefault,{family:z.familyDefault})});t4();function y1(c,e){return(e4[c]||{})[e]}function $0(c,e){return(a4[c]||{})[e]}function U(c,e){return(i4[c]||{})[e]}function r4(c){return n4[c]||{prefix:null,iconName:null}}function X0(c){let e=o4[c],l=y1("fas",c);return e||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function H(){return S1}var f4=()=>({prefix:null,iconName:null,rest:[]});function K0(c){let e=h,l=s4.reduce((s,a)=>(s[a]="".concat(z.cssPrefix,"-").concat(a),s),{});return W3.forEach(s=>{(c.includes(l[s])||c.some(a=>G0[s].includes(a)))&&(e=s)}),e}function T2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:l=h}=e,s=S0[l][c];if(l===v2&&!c)return"fad";let a=d3[l][c]||d3[l][s],n=c in k.styles?c:null;return a||n||null}function Z0(c){let e=[],l=null;return c.forEach(s=>{let a=Y0(z.cssPrefix,s);a?l=a:s&&e.push(s)}),{iconName:l,rest:e}}function N3(c){return c.sort().filter((e,l,s)=>s.indexOf(e)===l)}function E2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:l=!1}=e,s=null,a=s1.concat(z0),n=N3(c.filter(M=>a.includes(M))),o=N3(c.filter(M=>!s1.includes(M))),i=n.filter(M=>(s=M,!j3.includes(M))),[f=null]=i,r=K0(n),m=t(t({},Z0(o)),{},{prefix:T2(f,{family:r})});return t(t(t({},m),l6({values:c,family:r,styles:z2,config:z,canonical:m,givenPrefix:s})),Q0(l,s,m))}function Q0(c,e,l){let{prefix:s,iconName:a}=l;if(c||!s||!a)return{prefix:s,iconName:a};let n=e==="fa"?r4(a):{},o=U(s,a);return a=n.iconName||o||a,s=n.prefix||s,s==="far"&&!z2.far&&z2.fas&&!z.autoFetchSvg&&(s="fas"),{prefix:s,iconName:a}}var J0=W3.filter(c=>c!==h||c!==v2),c6=Object.keys(l1).filter(c=>c!==h).map(c=>Object.keys(l1[c])).flat();function l6(c){let{values:e,family:l,canonical:s,givenPrefix:a="",styles:n={},config:o={}}=c,i=l===v2,f=e.includes("fa-duotone")||e.includes("fad"),r=o.familyDefault==="duotone",m=s.prefix==="fad"||s.prefix==="fa-duotone";if(!i&&(f||r||m)&&(s.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),!s.prefix&&J0.includes(l)&&(Object.keys(n).find(L=>c6.includes(L))||o.autoFetchSvg)){let L=a0.get(l).defaultShortPrefixId;s.prefix=L,s.iconName=U(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||a==="fa")&&(s.prefix=H()||"fas"),s}var f1=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,l=new Array(e),s=0;s<e;s++)l[s]=arguments[s];let a=l.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]=t(t({},this.definitions[n]||{}),a[n]),r1(n,a[n]);let o=x1[h][n];o&&r1(o,a[n]),t4()})}reset(){this.definitions={}}_pullDefinitions(e,l){let s=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(s).map(a=>{let{prefix:n,iconName:o,icon:i}=s[a],f=i[2];e[n]||(e[n]={}),f.length>0&&f.forEach(r=>{typeof r=="string"&&(e[n][r]=i)}),e[n][o]=i}),e}},b3=[],X={},K={},s6=Object.keys(K);function e6(c,e){let{mixoutsTo:l}=e;return b3=c,X={},Object.keys(K).forEach(s=>{s6.indexOf(s)===-1&&delete K[s]}),b3.forEach(s=>{let a=s.mixout?s.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(l[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(o=>{l[n]||(l[n]={}),l[n][o]=a[n][o]})}),s.hooks){let n=s.hooks();Object.keys(n).forEach(o=>{X[o]||(X[o]=[]),X[o].push(n[o])})}s.provides&&s.provides(K)}),l}function m1(c,e){for(var l=arguments.length,s=new Array(l>2?l-2:0),a=2;a<l;a++)s[a-2]=arguments[a];return(X[c]||[]).forEach(o=>{e=o.apply(null,[e,...s])}),e}function j(c){for(var e=arguments.length,l=new Array(e>1?e-1:0),s=1;s<e;s++)l[s-1]=arguments[s];(X[c]||[]).forEach(n=>{n.apply(null,l)})}function O(){let c=arguments[0],e=Array.prototype.slice.call(arguments,1);return K[c]?K[c].apply(null,e):void 0}function z1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c,l=c.prefix||H();if(e)return e=U(l,e)||e,g3(m4.definitions,l,e)||g3(k.styles,l,e)}var m4=new f1,a6=()=>{z.autoReplaceSvg=!1,z.observeMutations=!1,j("noAuto")},n6={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P?(j("beforeI2svg",c),O("pseudoElements2svg",c),O("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=c;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,_0(()=>{i6({autoReplaceSvgRoot:e}),j("watch",c)})}},o6={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:U(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],l=T2(c[0]);return{prefix:l,iconName:U(l,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(z.cssPrefix,"-"))>-1||c.match(y0))){let e=E2(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||H(),iconName:U(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){let e=H();return{prefix:e,iconName:U(e,c)||c}}}},b={noAuto:a6,config:z,dom:n6,parse:o6,library:m4,findIconDefinition:z1,toHtml:M2},i6=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=p}=c;(Object.keys(k.styles).length>0||z.autoFetchSvg)&&P&&z.autoReplaceSvg&&b.dom.i2svg({node:e})};function P2(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(l=>M2(l))}}),Object.defineProperty(c,"node",{get:function(){if(!P)return;let l=p.createElement("div");return l.innerHTML=c.html,l.children}}),c}function t6(c){let{children:e,main:l,mask:s,attributes:a,styles:n,transform:o}=c;if(b1(o)&&l.found&&!s.found){let{width:i,height:f}=l,r={x:i/f/2,y:.5};a.style=A2(t(t({},n),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function r6(c){let{prefix:e,iconName:l,children:s,attributes:a,symbol:n}=c,o=n===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(l):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},a),{},{id:o}),children:s}]}]}function w1(c){let{icons:{main:e,mask:l},prefix:s,iconName:a,transform:n,symbol:o,title:i,maskId:f,titleId:r,extra:m,watchable:M=!1}=c,{width:L,height:C}=l.found?l:e,D=r0.includes(s),B=[z.replacementClass,a?"".concat(z.cssPrefix,"-").concat(a):""].filter(G=>m.classes.indexOf(G)===-1).filter(G=>G!==""||!!G).concat(m.classes).join(" "),S={children:[],attributes:t(t({},m.attributes),{},{"data-prefix":s,"data-icon":a,class:B,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(C)})},v=D&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/C*16*.0625,"em")}:{};M&&(S.attributes[q]=""),i&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(r||m2())},children:[i]}),delete S.attributes.title);let N=t(t({},S),{},{prefix:s,iconName:a,main:e,mask:l,maskId:f,transform:n,symbol:o,styles:t(t({},v),m.styles)}),{children:y,attributes:W}=l.found&&e.found?O("generateAbstractMask",N)||{children:[],attributes:{}}:O("generateAbstractIcon",N)||{children:[],attributes:{}};return N.children=y,N.attributes=W,o?r6(N):t6(N)}function S3(c){let{content:e,width:l,height:s,transform:a,title:n,extra:o,watchable:i=!1}=c,f=t(t(t({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});i&&(f[q]="");let r=t({},o.styles);b1(a)&&(r.transform=H0({transform:a,startCentered:!0,width:l,height:s}),r["-webkit-transform"]=r.transform);let m=A2(r);m.length>0&&(f.style=m);let M=[];return M.push({tag:"span",attributes:f,children:[e]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function f6(c){let{content:e,title:l,extra:s}=c,a=t(t(t({},s.attributes),l?{title:l}:{}),{},{class:s.classes.join(" ")}),n=A2(s.styles);n.length>0&&(a.style=n);let o=[];return o.push({tag:"span",attributes:a,children:[e]}),l&&o.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),o}var{styles:J2}=k;function L1(c){let e=c[0],l=c[1],[s]=c.slice(4),a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(K2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(K2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(K2.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:l,icon:a}}var m6={found:!1,width:512,height:512};function z6(c,e){!$3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function M1(c,e){let l=e;return e==="fa"&&z.styleDefault!==null&&(e=H()),new Promise((s,a)=>{if(l==="fa"){let n=r4(c)||{};c=n.iconName||c,e=n.prefix||e}if(c&&e&&J2[e]&&J2[e][c]){let n=J2[e][c];return s(L1(n))}z6(c,e),s(t(t({},m6),{},{icon:z.showMissingIcons&&c?O("missingIconAbstract")||{}:{}}))})}var y3=()=>{},p1=z.measurePerformance&&N2&&N2.mark&&N2.measure?N2:{mark:y3,measure:y3},t2='FA "6.7.2"',L6=c=>(p1.mark("".concat(t2," ").concat(c," begins")),()=>z4(c)),z4=c=>{p1.mark("".concat(t2," ").concat(c," ends")),p1.measure("".concat(t2," ").concat(c),"".concat(t2," ").concat(c," begins"),"".concat(t2," ").concat(c," ends"))},k1={begin:L6,end:z4},S2=()=>{};function w3(c){return typeof(c.getAttribute?c.getAttribute(q):null)=="string"}function M6(c){let e=c.getAttribute?c.getAttribute(h1):null,l=c.getAttribute?c.getAttribute(g1):null;return e&&l}function p6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function u6(){return z.autoReplaceSvg===!0?y2.replace:y2[z.autoReplaceSvg]||y2.replace}function C6(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function d6(c){return p.createElement(c)}function L4(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:l=c.tag==="svg"?C6:d6}=e;if(typeof c=="string")return p.createTextNode(c);let s=l(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){s.appendChild(L4(n,{ceFn:l}))}),s}function h6(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var y2={replace:function(c){let e=c[0];if(e.parentNode)if(c[1].forEach(l=>{e.parentNode.insertBefore(L4(l),e)}),e.getAttribute(q)===null&&z.keepOriginalSource){let l=p.createComment(h6(e));e.parentNode.replaceChild(l,e)}else e.remove()},nest:function(c){let e=c[0],l=c[1];if(~N1(e).indexOf(z.replacementClass))return y2.replace(c);let s=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){let n=l[0].attributes.class.split(" ").reduce((o,i)=>(i===z.replacementClass||i.match(s)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});l[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}let a=l.map(n=>M2(n)).join(`
`);e.setAttribute(q,""),e.innerHTML=a}};function k3(c){c()}function M4(c,e){let l=typeof e=="function"?e:S2;if(c.length===0)l();else{let s=k3;z.mutateApproach===N0&&(s=I.requestAnimationFrame||k3),s(()=>{let a=u6(),n=k1.begin("mutate");c.map(a),n(),l()})}}var v1=!1;function p4(){v1=!0}function u1(){v1=!1}var k2=null;function v3(c){if(!M3||!z.observeMutations)return;let{treeCallback:e=S2,nodeCallback:l=S2,pseudoElementsCallback:s=S2,observeMutationsRoot:a=p}=c;k2=new M3(n=>{if(v1)return;let o=H();Q(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!w3(i.addedNodes[0])&&(z.searchPseudoElements&&s(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&z.searchPseudoElements&&s(i.target.parentNode),i.type==="attributes"&&w3(i.target)&&~v0.indexOf(i.attributeName))if(i.attributeName==="class"&&M6(i.target)){let{prefix:f,iconName:r}=E2(N1(i.target));i.target.setAttribute(h1,f||o),r&&i.target.setAttribute(g1,r)}else p6(i.target)&&l(i.target)})}),P&&k2.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function g6(){k2&&k2.disconnect()}function x6(c){let e=c.getAttribute("style"),l=[];return e&&(l=e.split(";").reduce((s,a)=>{let n=a.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(s[o]=i.join(":").trim()),s},{})),l}function N6(c){let e=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",a=E2(N1(c));return a.prefix||(a.prefix=H()),e&&l&&(a.prefix=e,a.iconName=l),a.iconName&&a.prefix||(a.prefix&&s.length>0&&(a.iconName=$0(a.prefix,c.innerText)||y1(a.prefix,t1(c.innerText))),!a.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function b6(c){let e=Q(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),l=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return z.autoA11y&&(l?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(s||m2()):(e["aria-hidden"]="true",e.focusable="false")),e}function S6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:w,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function A3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:l,prefix:s,rest:a}=N6(c),n=b6(c),o=m1("parseNodeAttributes",{},c),i=e.styleParser?x6(c):[];return t({iconName:l,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:w,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:i,attributes:n}},o)}var{styles:y6}=k;function u4(c){let e=z.autoReplaceSvg==="nest"?A3(c,{styleParser:!1}):A3(c);return~e.extra.classes.indexOf(K3)?O("generateLayersText",c,e):O("generateSvgReplacementMutation",c,e)}function w6(){return[...o0,...s1]}function T3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P)return Promise.resolve();let l=p.documentElement.classList,s=m=>l.add("".concat(C3,"-").concat(m)),a=m=>l.remove("".concat(C3,"-").concat(m)),n=z.autoFetchSvg?w6():j3.concat(Object.keys(y6));n.includes("fa")||n.push("fa");let o=[".".concat(K3,":not([").concat(q,"])")].concat(n.map(m=>".".concat(m,":not([").concat(q,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=Q(c.querySelectorAll(o))}catch{}if(i.length>0)s("pending"),a("complete");else return Promise.resolve();let f=k1.begin("onTree"),r=i.reduce((m,M)=>{try{let L=u4(M);L&&m.push(L)}catch(L){$3||L.name==="MissingIcon"&&console.error(L)}return m},[]);return new Promise((m,M)=>{Promise.all(r).then(L=>{M4(L,()=>{s("active"),s("complete"),a("pending"),typeof e=="function"&&e(),f(),m()})}).catch(L=>{f(),M(L)})})}function k6(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;u4(c).then(l=>{l&&M4([l],e)})}function v6(c){return function(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:z1(e||{}),{mask:a}=l;return a&&(a=(a||{}).icon?a:z1(a||{})),c(s,t(t({},l),{},{mask:a}))}}var A6=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=w,symbol:s=!1,mask:a=null,maskId:n=null,title:o=null,titleId:i=null,classes:f=[],attributes:r={},styles:m={}}=e;if(!c)return;let{prefix:M,iconName:L,icon:C}=c;return P2(t({type:"icon"},c),()=>(j("beforeDOMElementCreation",{iconDefinition:c,params:e}),z.autoA11y&&(o?r["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(i||m2()):(r["aria-hidden"]="true",r.focusable="false")),w1({icons:{main:L1(C),mask:a?L1(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:L,transform:t(t({},w),l),symbol:s,title:o,maskId:n,titleId:i,extra:{attributes:r,styles:m,classes:f}})))},T6={mixout(){return{icon:v6(A6)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=T3,c.nodeCallback=k6,c}}},provides(c){c.i2svg=function(e){let{node:l=p,callback:s=()=>{}}=e;return T3(l,s)},c.generateSvgReplacementMutation=function(e,l){let{iconName:s,title:a,titleId:n,prefix:o,transform:i,symbol:f,mask:r,maskId:m,extra:M}=l;return new Promise((L,C)=>{Promise.all([M1(s,o),r.iconName?M1(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(D=>{let[B,S]=D;L([e,w1({icons:{main:B,mask:S},prefix:o,iconName:s,transform:i,symbol:f,maskId:m,title:a,titleId:n,extra:M,watchable:!0})])}).catch(C)})},c.generateAbstractIcon=function(e){let{children:l,attributes:s,main:a,transform:n,styles:o}=e,i=A2(o);i.length>0&&(s.style=i);let f;return b1(n)&&(f=O("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),l.push(f||a.icon),{children:l,attributes:s}}}},E6={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:l=[]}=e;return P2({type:"layer"},()=>{j("beforeDOMElementCreation",{assembler:c,params:e});let s=[];return c(a=>{Array.isArray(a)?a.map(n=>{s=s.concat(n.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers"),...l].join(" ")},children:s}]})}}}},P6={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:l=null,classes:s=[],attributes:a={},styles:n={}}=e;return P2({type:"counter",content:c},()=>(j("beforeDOMElementCreation",{content:c,params:e}),f6({content:c.toString(),title:l,extra:{attributes:a,styles:n,classes:["".concat(z.cssPrefix,"-layers-counter"),...s]}})))}}}},D6={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=w,title:s=null,classes:a=[],attributes:n={},styles:o={}}=e;return P2({type:"text",content:c},()=>(j("beforeDOMElementCreation",{content:c,params:e}),S3({content:c,transform:t(t({},w),l),title:s,extra:{attributes:n,styles:o,classes:["".concat(z.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(e,l){let{title:s,transform:a,extra:n}=l,o=null,i=null;if(U3){let f=parseInt(getComputedStyle(e).fontSize,10),r=e.getBoundingClientRect();o=r.width/f,i=r.height/f}return z.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,S3({content:e.innerHTML,width:o,height:i,transform:a,title:s,extra:n,watchable:!0})])}}},R6=new RegExp('"',"ug"),E3=[1105920,1112319],P3=t(t(t(t({},{FontAwesome:{normal:"fas",400:"fas"}}),e0),g0),L0),C1=Object.keys(P3).reduce((c,e)=>(c[e.toLowerCase()]=P3[e],c),{}),F6=Object.keys(C1).reduce((c,e)=>{let l=C1[e];return c[e]=l[900]||[...Object.entries(l)][0][1],c},{});function I6(c){let e=c.replace(R6,""),l=j0(e,0),s=l>=E3[0]&&l<=E3[1],a=e.length===2?e[0]===e[1]:!1;return{value:t1(a?e[0]:e),isSecondary:s||a}}function H6(c,e){let l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),a=isNaN(s)?"normal":s;return(C1[l]||{})[a]||F6[l]}function D3(c,e){let l="".concat(x0).concat(e.replace(":","-"));return new Promise((s,a)=>{if(c.getAttribute(l)!==null)return s();let o=Q(c.children).filter(L=>L.getAttribute(a1)===e)[0],i=I.getComputedStyle(c,e),f=i.getPropertyValue("font-family"),r=f.match(w0),m=i.getPropertyValue("font-weight"),M=i.getPropertyValue("content");if(o&&!r)return c.removeChild(o),s();if(r&&M!=="none"&&M!==""){let L=i.getPropertyValue("content"),C=H6(f,m),{value:D,isSecondary:B}=I6(L),S=r[0].startsWith("FontAwesome"),v=y1(C,D),N=v;if(S){let y=X0(D);y.iconName&&y.prefix&&(v=y.iconName,C=y.prefix)}if(v&&!B&&(!o||o.getAttribute(h1)!==C||o.getAttribute(g1)!==N)){c.setAttribute(l,N),o&&c.removeChild(o);let y=S6(),{extra:W}=y;W.attributes[a1]=e,M1(v,C).then(G=>{let b4=w1(t(t({},y),{},{icons:{main:G,mask:f4()},prefix:C,iconName:N,extra:W,watchable:!0})),D2=p.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(D2,c.firstChild):c.appendChild(D2),D2.outerHTML=b4.map(S4=>M2(S4)).join(`
`),c.removeAttribute(l),s()}).catch(a)}else s()}else s()})}function O6(c){return Promise.all([D3(c,"::before"),D3(c,"::after")])}function B6(c){return c.parentNode!==document.head&&!~b0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(a1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function R3(c){if(P)return new Promise((e,l)=>{let s=Q(c.querySelectorAll("*")).filter(B6).map(O6),a=k1.begin("searchPseudoElements");p4(),Promise.all(s).then(()=>{a(),u1(),e()}).catch(()=>{a(),u1(),l()})})}var _6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=R3,c}}},provides(c){c.pseudoElements2svg=function(e){let{node:l=p}=e;z.searchPseudoElements&&R3(l)}}},F3=!1,U6={mixout(){return{dom:{unwatch(){p4(),F3=!0}}}},hooks(){return{bootstrap(){v3(m1("mutationObserverCallbacks",{}))},noAuto(){g6()},watch(c){let{observeMutationsRoot:e}=c;F3?u1():v3(m1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},I3=c=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((l,s)=>{let a=s.toLowerCase().split("-"),n=a[0],o=a.slice(1).join("-");if(n&&o==="h")return l.flipX=!0,l;if(n&&o==="v")return l.flipY=!0,l;if(o=parseFloat(o),isNaN(o))return l;switch(n){case"grow":l.size=l.size+o;break;case"shrink":l.size=l.size-o;break;case"left":l.x=l.x-o;break;case"right":l.x=l.x+o;break;case"up":l.y=l.y-o;break;case"down":l.y=l.y+o;break;case"rotate":l.rotate=l.rotate+o;break}return l},e)},q6={mixout(){return{parse:{transform:c=>I3(c)}}},hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-transform");return l&&(c.transform=I3(l)),c}}},provides(c){c.generateAbstractTransformGrouping=function(e){let{main:l,transform:s,containerWidth:a,iconWidth:n}=e,o={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(s.x*32,", ").concat(s.y*32,") "),f="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),r="rotate(".concat(s.rotate," 0 0)"),m={transform:"".concat(i," ").concat(f," ").concat(r)},M={transform:"translate(".concat(n/2*-1," -256)")},L={outer:o,inner:m,path:M};return{tag:"g",attributes:t({},L.outer),children:[{tag:"g",attributes:t({},L.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:t(t({},l.icon.attributes),L.path)}]}]}}}},c1={x:0,y:0,width:"100%",height:"100%"};function H3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function j6(c){return c.tag==="g"?c.children:[c]}var W6={hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-mask"),s=l?E2(l.split(" ").map(a=>a.trim())):f4();return s.prefix||(s.prefix=H()),c.mask=s,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(e){let{children:l,attributes:s,main:a,mask:n,maskId:o,transform:i}=e,{width:f,icon:r}=a,{width:m,icon:M}=n,L=I0({transform:i,containerWidth:m,iconWidth:f}),C={tag:"rect",attributes:t(t({},c1),{},{fill:"white"})},D=r.children?{children:r.children.map(H3)}:{},B={tag:"g",attributes:t({},L.inner),children:[H3(t({tag:r.tag,attributes:t(t({},r.attributes),L.path)},D))]},S={tag:"g",attributes:t({},L.outer),children:[B]},v="mask-".concat(o||m2()),N="clip-".concat(o||m2()),y={tag:"mask",attributes:t(t({},c1),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,S]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:j6(M)},y]};return l.push(W,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(v,")")},c1)}),{children:l,attributes:s}}}},G6={provides(c){let e=!1;I.matchMedia&&(e=I.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let l=[],s={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:t(t({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=t(t({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:t(t({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:t(t({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),l.push(o),l.push({tag:"path",attributes:t(t({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||l.push({tag:"path",attributes:t(t({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},V6={hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-symbol"),s=l===null?!1:l===""?!0:l;return c.symbol=s,c}}}},Y6=[B0,T6,E6,P6,D6,_6,U6,q6,W6,G6,V6];e6(Y6,{mixoutsTo:b});var t5=b.noAuto,C4=b.config,r5=b.library,d4=b.dom,h4=b.parse,f5=b.findIconDefinition,m5=b.toHtml,g4=b.icon,z5=b.layer,$6=b.text,X6=b.counter;var K6=["*"],Z6=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(l){C4.autoAddCss=l,this._autoAddCss=l}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(s){return new(s||c)};static \u0275prov=d({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),Q6=(()=>{class c{definitions={};addIcons(...l){for(let s of l){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let a of s.icon[2])typeof a=="string"&&(this.definitions[s.prefix][a]=s)}}addIconPacks(...l){for(let s of l){let a=Object.keys(s).map(n=>s[n]);this.addIcons(...a)}}getIconDefinition(l,s){return l in this.definitions&&s in this.definitions[l]?this.definitions[l][s]:null}static \u0275fac=function(s){return new(s||c)};static \u0275prov=d({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),J6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},c8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},N4=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),l8=c=>{let e=N4(c.rotate),l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:e,"fa-rotate-by":c.rotate!=null&&!e,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(s=>l[s]?s:null).filter(s=>s!=null)},A1=new WeakSet,x4="fa-auto-css";function s8(c,e){if(!e.autoAddCss||A1.has(c))return;if(c.getElementById(x4)!=null){e.autoAddCss=!1,A1.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",x4),l.innerHTML=d4.css();let s=c.head.childNodes,a=null;for(let n=s.length-1;n>-1;n--){let o=s[n],i=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}c.head.insertBefore(l,a),e.autoAddCss=!1,A1.add(c)}var e8=c=>c.prefix!==void 0&&c.iconName!==void 0,a8=(c,e)=>e8(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},n8=(()=>{class c{stackItemSize=C2("1x");size=C2();_effect=X1(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(s){return new(s||c)};static \u0275dir=q1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),o8=(()=>{class c{size=C2();classes=_2(()=>{let l=this.size(),s=l?{[`fa-${l}`]:!0}:{};return R2(J({},s),{"fa-stack":!0})});static \u0275fac=function(s){return new(s||c)};static \u0275cmp=B2({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(s,a){s&2&&$1(a.classes())},inputs:{size:[1,"size"]},ngContentSelectors:K6,decls:1,vars:0,template:function(s,a){s&1&&(V1(),Y1(0))},encapsulation:2,changeDetection:0})}return c})(),S5=(()=>{class c{icon=x.required();title=x();animation=x();mask=x();flip=x();size=x();pull=x();border=x();inverse=x();symbol=x();rotate=x();fixedWidth=x();transform=x();a11yRole=x();renderedIconHTML=_2(()=>{let l=this.icon();if(l==null&&this.config.fallbackIcon==null)return c8(),"";let s=this.findIconDefinition(l??this.config.fallbackIcon);if(!s)return"";let a=this.buildParams();s8(this.document,this.config);let n=g4(s,a);return this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))});document=R(g);sanitizer=R(X2);config=R(Z6);iconLibrary=R(Q6);stackItem=R(n8,{optional:!0});stack=R(o8,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}findIconDefinition(l){let s=a8(l,this.config.defaultPrefix);if("icon"in s)return s;let a=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return a??(J6(s),null)}buildParams(){let l=this.fixedWidth(),s={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof l=="boolean"?l:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},a=this.transform(),n=typeof a=="string"?h4.transform(a):a,o=this.mask(),i=o!=null?this.findIconDefinition(o):null,f={},r=this.a11yRole();r!=null&&(f.role=r);let m={};return s.rotate!=null&&!N4(s.rotate)&&(m["--fa-rotate-angle"]=`${s.rotate}`),{title:this.title(),transform:n,classes:l8(s),mask:i??void 0,symbol:this.symbol(),attributes:f,styles:m}}static \u0275fac=function(s){return new(s||c)};static \u0275cmp=B2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,a){s&2&&(G1("innerHTML",a.renderedIconHTML(),_1),W1("title",a.title()))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(s,a){},encapsulation:2,changeDetection:0})}return c})();var y5=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275mod=u2({type:c});static \u0275inj=p2({})}return c})();var v5={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]};var A5={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]};var T5={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};var E5={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};var P5={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"]};var D5={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var R5={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var F5={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]};var I5={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var H5={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};var O5={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};export{O4 as a,l5 as b,s5 as c,X2 as d,S5 as e,y5 as f,v5 as g,A5 as h,T5 as i,E5 as j,P5 as k,D5 as l,R5 as m,F5 as n,I5 as o,H5 as p,O5 as q};
