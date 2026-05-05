import{$b as M3,Aa as a3,Ba as n3,Ca as $,Da as o3,Ib as p3,Ja as s2,Ka as t3,L as T,La as J2,Ma as i3,N as b,O as p2,Oa as r3,Q as R,R as C,S as v,T as V2,Tb as N2,U as X1,Va as K2,Wa as x2,Wb as y2,Xa as f3,_ as k,_b as w,a as H,ac as h3,b as G2,bb as m3,c as G1,ca as M2,cb as Q2,cc as C3,da as X2,db as z3,fc as Q,ga as Y1,gc as g3,hc as x3,k as V1,la as J1,ma as Y2,na as K1,oa as h2,pa as C2,qa as Q1,sa as g2,sc as N3,ta as J,tb as u3,tc as y3,ua as K,uc as b3,va as Z1,wa as c3,xa as e3,xb as d3,ya as l3,yb as L3,za as s3}from"./chunk-NZNB5LAZ.js";var a2=class{_doc;constructor(l){this._doc=l}manager},b2=(()=>{class c extends a2{constructor(e){super(e)}supports(e){return!0}addEventListener(e,s,a,n){return e.addEventListener(s,a,n),()=>this.removeEventListener(e,s,a,n)}removeEventListener(e,s,a,n){return e.removeEventListener(s,a,n)}static \u0275fac=function(s){return new(s||c)(C(k))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),S2=new R(""),s1=(()=>{class c{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,s){this._zone=s,e.forEach(o=>{o.manager=this});let a=e.filter(o=>!(o instanceof b2));this._plugins=a.slice().reverse();let n=e.find(o=>o instanceof b2);n&&this._plugins.push(n)}addEventListener(e,s,a,n){return this._findPluginFor(s).addEventListener(e,s,a,n)}getZone(){return this._zone}_findPluginFor(e){let s=this._eventNameToPlugin.get(e);if(s)return s;if(s=this._plugins.find(n=>n.supports(e)),!s)throw new T(5101,!1);return this._eventNameToPlugin.set(e,s),s}static \u0275fac=function(s){return new(s||c)(C(S2),C(M2))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),Z2="ng-app-id";function v3(c){for(let l of c)l.remove()}function w3(c,l){let e=l.createElement("style");return e.textContent=c,e}function A0(c,l,e,s){let a=c.head?.querySelectorAll(`style[${Z2}="${l}"],link[${Z2}="${l}"]`);if(a)for(let n of a)n.removeAttribute(Z2),n instanceof HTMLLinkElement?s.set(n.href.slice(n.href.lastIndexOf("/")+1),{usage:0,elements:[n]}):n.textContent&&e.set(n.textContent,{usage:0,elements:[n]})}function e1(c,l){let e=l.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",c),e}var a1=(()=>{class c{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,s,a,n={}){this.doc=e,this.appId=s,this.nonce=a,A0(e,s,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,s){for(let a of e)this.addUsage(a,this.inline,w3);s?.forEach(a=>this.addUsage(a,this.external,e1))}removeStyles(e,s){for(let a of e)this.removeUsage(a,this.inline);s?.forEach(a=>this.removeUsage(a,this.external))}addUsage(e,s,a){let n=s.get(e);n?n.usage++:s.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(e,this.doc)))})}removeUsage(e,s){let a=s.get(e);a&&(a.usage--,a.usage<=0&&(v3(a.elements),s.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])v3(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[s,{elements:a}]of this.inline)a.push(this.addElement(e,w3(s,this.doc)));for(let[s,{elements:a}]of this.external)a.push(this.addElement(e,e1(s,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,s){return this.nonce&&s.setAttribute("nonce",this.nonce),e.appendChild(s)}static \u0275fac=function(s){return new(s||c)(C(k),C(Y2),C(C2,8),C(h2))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),c1={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},n1=/%COMP%/g;var k3="%COMP%",T0=`_nghost-${k3}`,E0=`_ngcontent-${k3}`,P0=!0,D0=new R("",{factory:()=>P0});function R0(c){return E0.replace(n1,c)}function I0(c){return T0.replace(n1,c)}function A3(c,l){return l.map(e=>e.replace(n1,c))}var o1=(()=>{class c{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,s,a,n,o,t,i=null,r=null){this.eventManager=e,this.sharedStylesHost=s,this.appId=a,this.removeStylesOnCompDestroy=n,this.doc=o,this.ngZone=t,this.nonce=i,this.tracingService=r,this.defaultRenderer=new n2(e,o,t,this.tracingService)}createRenderer(e,s){if(!e||!s)return this.defaultRenderer;let a=this.getOrCreateRenderer(e,s);return a instanceof w2?a.applyToHost(e):a instanceof o2&&a.applyStyles(),a}getOrCreateRenderer(e,s){let a=this.rendererByCompId,n=a.get(s.id);if(!n){let o=this.doc,t=this.ngZone,i=this.eventManager,r=this.sharedStylesHost,z=this.removeStylesOnCompDestroy,m=this.tracingService;switch(s.encapsulation){case g2.Emulated:n=new w2(i,r,s,this.appId,z,o,t,m);break;case g2.ShadowDom:return new v2(i,e,s,o,t,this.nonce,m,r);case g2.ExperimentalIsolatedShadowDom:return new v2(i,e,s,o,t,this.nonce,m);default:n=new o2(i,r,s,z,o,t,m);break}a.set(s.id,n)}return n}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(s){return new(s||c)(C(s1),C(a1),C(Y2),C(D0),C(k),C(M2),C(C2),C(J2,8))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),n2=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(l,e,s,a){this.eventManager=l,this.doc=e,this.ngZone=s,this.tracingService=a}destroy(){}destroyNode=null;createElement(l,e){return e?this.doc.createElementNS(c1[e]||e,l):this.doc.createElement(l)}createComment(l){return this.doc.createComment(l)}createText(l){return this.doc.createTextNode(l)}appendChild(l,e){(S3(l)?l.content:l).appendChild(e)}insertBefore(l,e,s){l&&(S3(l)?l.content:l).insertBefore(e,s)}removeChild(l,e){e.remove()}selectRootElement(l,e){let s=typeof l=="string"?this.doc.querySelector(l):l;if(!s)throw new T(-5104,!1);return e||(s.textContent=""),s}parentNode(l){return l.parentNode}nextSibling(l){return l.nextSibling}setAttribute(l,e,s,a){if(a){e=a+":"+e;let n=c1[a];n?l.setAttributeNS(n,e,s):l.setAttribute(e,s)}else l.setAttribute(e,s)}removeAttribute(l,e,s){if(s){let a=c1[s];a?l.removeAttributeNS(a,e):l.removeAttribute(`${s}:${e}`)}else l.removeAttribute(e)}addClass(l,e){l.classList.add(e)}removeClass(l,e){l.classList.remove(e)}setStyle(l,e,s,a){a&(s2.DashCase|s2.Important)?l.style.setProperty(e,s,a&s2.Important?"important":""):l.style[e]=s}removeStyle(l,e,s){s&s2.DashCase?l.style.removeProperty(e):l.style[e]=""}setProperty(l,e,s){l!=null&&(l[e]=s)}setValue(l,e){l.nodeValue=e}listen(l,e,s,a){if(typeof l=="string"&&(l=Q().getGlobalEventTarget(this.doc,l),!l))throw new T(5102,!1);let n=this.decoratePreventDefault(s);return this.tracingService?.wrapEventListener&&(n=this.tracingService.wrapEventListener(l,e,n)),this.eventManager.addEventListener(l,e,n,a)}decoratePreventDefault(l){return e=>{if(e==="__ngUnwrap__")return l;l(e)===!1&&e.preventDefault()}}};function S3(c){return c.tagName==="TEMPLATE"&&c.content!==void 0}var v2=class extends n2{hostEl;sharedStylesHost;shadowRoot;constructor(l,e,s,a,n,o,t,i){super(l,a,n,t),this.hostEl=e,this.sharedStylesHost=i,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let r=s.styles;r=A3(s.id,r);for(let m of r){let L=document.createElement("style");o&&L.setAttribute("nonce",o),L.textContent=m,this.shadowRoot.appendChild(L)}let z=s.getExternalStyles?.();if(z)for(let m of z){let L=e1(m,a);o&&L.setAttribute("nonce",o),this.shadowRoot.appendChild(L)}}nodeOrShadowRoot(l){return l===this.hostEl?this.shadowRoot:l}appendChild(l,e){return super.appendChild(this.nodeOrShadowRoot(l),e)}insertBefore(l,e,s){return super.insertBefore(this.nodeOrShadowRoot(l),e,s)}removeChild(l,e){return super.removeChild(null,e)}parentNode(l){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(l)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},o2=class extends n2{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(l,e,s,a,n,o,t,i){super(l,n,o,t),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=a;let r=s.styles;this.styles=i?A3(i,r):r,this.styleUrls=s.getExternalStyles?.(i)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&t3.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},w2=class extends o2{contentAttr;hostAttr;constructor(l,e,s,a,n,o,t,i){let r=a+"-"+s.id;super(l,e,s,n,o,t,i,r),this.contentAttr=R0(r),this.hostAttr=I0(r)}applyToHost(l){this.applyStyles(),this.setAttribute(l,this.hostAttr,"")}createElement(l,e){let s=super.createElement(l,e);return super.setAttribute(s,this.contentAttr,""),s}};var k2=class c extends x3{supportsDOMEvents=!0;static makeCurrent(){g3(new c)}onAndCancel(l,e,s,a){return l.addEventListener(e,s,a),()=>{l.removeEventListener(e,s,a)}}dispatchEvent(l,e){l.dispatchEvent(e)}remove(l){l.remove()}createElement(l,e){return e=e||this.getDefaultDocument(),e.createElement(l)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(l){return l.nodeType===Node.ELEMENT_NODE}isShadowRoot(l){return l instanceof DocumentFragment}getGlobalEventTarget(l,e){return e==="window"?window:e==="document"?l:e==="body"?l.body:null}getBaseHref(l){let e=O0();return e==null?null:_0(e)}resetBaseElement(){t2=null}getUserAgent(){return window.navigator.userAgent}getCookie(l){return N3(document.cookie,l)}},t2=null;function O0(){return t2=t2||document.head.querySelector("base"),t2?t2.getAttribute("href"):null}function _0(c){return new URL(c,document.baseURI).pathname}var B0=(()=>{class c{build(){return new XMLHttpRequest}static \u0275fac=function(s){return new(s||c)};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),T3=["alt","control","meta","shift"],H0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},U0={alt:c=>c.altKey,control:c=>c.ctrlKey,meta:c=>c.metaKey,shift:c=>c.shiftKey},E3=(()=>{class c extends a2{constructor(e){super(e)}supports(e){return c.parseEventName(e)!=null}addEventListener(e,s,a,n){let o=c.parseEventName(s),t=c.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Q().onAndCancel(e,o.domEventName,t,n))}static parseEventName(e){let s=e.toLowerCase().split("."),a=s.shift();if(s.length===0||!(a==="keydown"||a==="keyup"))return null;let n=c._normalizeKey(s.pop()),o="",t=s.indexOf("code");if(t>-1&&(s.splice(t,1),o="code."),T3.forEach(r=>{let z=s.indexOf(r);z>-1&&(s.splice(z,1),o+=r+".")}),o+=n,s.length!=0||n.length===0)return null;let i={};return i.domEventName=a,i.fullKey=o,i}static matchEventFullKeyCode(e,s){let a=H0[e.key]||e.key,n="";return s.indexOf("code.")>-1&&(a=e.code,n="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),T3.forEach(o=>{if(o!==a){let t=U0[o];t(e)&&(n+=o+".")}}),n+=a,n===s)}static eventCallback(e,s,a){return n=>{c.matchEventFullKeyCode(n,e)&&a.runGuarded(()=>s(n))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(s){return new(s||c)(C(k))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})();async function j0(c,l,e){let s=H({rootComponent:c},W0(l,e));return C3(s)}function W0(c,l){return{platformRef:l?.platformRef,appProviders:[...X0,...c?.providers??[]],platformProviders:V0}}function q0(){k2.makeCurrent()}function $0(){return new X2}function G0(){return J1(document),document}var V0=[{provide:h2,useValue:b3},{provide:K1,useValue:q0,multi:!0},{provide:k,useFactory:G0}];var X0=[{provide:X1,useValue:"root"},{provide:X2,useFactory:$0},{provide:S2,useClass:b2,multi:!0},{provide:S2,useClass:E3,multi:!0},o1,a1,s1,{provide:r3,useExisting:o1},{provide:y3,useClass:B0},[]];var i2=class c{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(l){l?typeof l=="string"?this.lazyInit=()=>{this.headers=new Map,l.split(`
`).forEach(e=>{let s=e.indexOf(":");if(s>0){let a=e.slice(0,s),n=e.slice(s+1).trim();this.addHeaderEntry(a,n)}})}:typeof Headers<"u"&&l instanceof Headers?(this.headers=new Map,l.forEach((e,s)=>{this.addHeaderEntry(s,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(l).forEach(([e,s])=>{this.setHeaderEntries(e,s)})}:this.headers=new Map}has(l){return this.init(),this.headers.has(l.toLowerCase())}get(l){this.init();let e=this.headers.get(l.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(l){return this.init(),this.headers.get(l.toLowerCase())||null}append(l,e){return this.clone({name:l,value:e,op:"a"})}set(l,e){return this.clone({name:l,value:e,op:"s"})}delete(l,e){return this.clone({name:l,value:e,op:"d"})}maybeSetNormalizedName(l,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,l)}init(){this.lazyInit&&(this.lazyInit instanceof c?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(l=>this.applyUpdate(l)),this.lazyUpdate=null))}copyFrom(l){l.init(),Array.from(l.headers.keys()).forEach(e=>{this.headers.set(e,l.headers.get(e)),this.normalizedNames.set(e,l.normalizedNames.get(e))})}clone(l){let e=new c;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof c?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([l]),e}applyUpdate(l){let e=l.name.toLowerCase();switch(l.op){case"a":case"s":let s=l.value;if(typeof s=="string"&&(s=[s]),s.length===0)return;this.maybeSetNormalizedName(l.name,e);let a=(l.op==="a"?this.headers.get(e):void 0)||[];a.push(...s),this.headers.set(e,a);break;case"d":let n=l.value;if(!n)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(t=>n.indexOf(t)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}addHeaderEntry(l,e){let s=l.toLowerCase();this.maybeSetNormalizedName(l,s),this.headers.has(s)?this.headers.get(s).push(e):this.headers.set(s,[e])}setHeaderEntries(l,e){let s=(Array.isArray(e)?e:[e]).map(n=>n.toString()),a=l.toLowerCase();this.headers.set(a,s),this.maybeSetNormalizedName(l,a)}forEach(l){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>l(this.normalizedNames.get(e),this.headers.get(e)))}};var Y0="text/plain",J0="application/json",gc=`${J0}, ${Y0}, */*`;var i1=(function(c){return c[c.Sent=0]="Sent",c[c.UploadProgress=1]="UploadProgress",c[c.ResponseHeader=2]="ResponseHeader",c[c.DownloadProgress=3]="DownloadProgress",c[c.Response=4]="Response",c[c.User=5]="User",c})(i1||{}),t1=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(l,e=200,s="OK"){this.headers=l.headers||new i2,this.status=l.status!==void 0?l.status:e,this.statusText=l.statusText||s,this.url=l.url||null,this.redirected=l.redirected,this.responseType=l.responseType,this.ok=this.status>=200&&this.status<300}};var A2=class c extends t1{body;constructor(l={}){super(l),this.body=l.body!==void 0?l.body:null}type=i1.Response;clone(l={}){return new c({body:l.body!==void 0?l.body:this.body,headers:l.headers||this.headers,status:l.status!==void 0?l.status:this.status,statusText:l.statusText||this.statusText,url:l.url||this.url||void 0,redirected:l.redirected??this.redirected,responseType:l.responseType??this.responseType})}};var D3=new R("");var K0=new R(""),Q0="b",Z0="h",c6="s",e6="st",l6="u",s6="rt",r1=new R(""),a6=["GET","HEAD"];function O3(c,l){let o=l,{isCacheActive:e}=o,s=G1(o,["isCacheActive"]),{transferCache:a,method:n}=c;return!(!e||a===!1||n==="POST"&&!s.includePostRequests&&!a||n!=="POST"&&!a6.includes(n)||!s.includeRequestsWithAuthHeaders&&t6(c)||s.filter?.(c)===!1)}function _3(c,l){let{includeHeaders:e}=c,s=e;return typeof l=="object"&&l.includeHeaders&&(s=l.includeHeaders),s}function n6(c,l,e,s){let{transferCache:a}=c;if(!O3(c,l))return null;if(s)throw new T(2803,!1);let n=c.url,o=B3(c,n),t=e.get(o,null),i=_3(l,a);if(t){let{[Q0]:r,[s6]:z,[Z0]:m,[c6]:L,[e6]:p,[l6]:g}=t,M=r;switch(z){case"arraybuffer":M=I3(r);break;case"blob":M=new Blob([I3(r)]);break}let x=new i2(m);return new A2({body:M,headers:x,status:L,statusText:p,url:g})}return null}function o6(c,l){let e=v(r1),s=v(Q1),a=v(K0,{optional:!0}),n=n6(c,e,s,a);if(n)return V1(n);let{transferCache:o}=c,t=_3(e,o),i=c.url,r=B3(c,i);return O3(c,e),l(c)}function t6(c){return c.headers.has("authorization")||c.headers.has("proxy-authorization")}function R3(c){return[...c.keys()].sort().map(l=>`${l}=${c.getAll(l)}`).join("&")}function B3(c,l){let{params:e,method:s,responseType:a}=c,n=R3(e),o=c.serializeBody();o instanceof URLSearchParams?o=R3(o):typeof o!="string"&&(o="");let t=[s,a,l,o,n].join("|"),i=i6(t);return i}function i6(c){let l=0;for(let e of c)l=Math.imul(31,l)+e.charCodeAt(0)<<0;return l+=2147483648,l.toString()}function I3(c){let l=atob(c);return Uint8Array.from(l,s=>s.charCodeAt(0)).buffer}function H3(c){return[{provide:r1,useFactory:()=>(i3("NgHttpTransferCache"),H({isCacheActive:!0},c))},{provide:D3,useValue:o6,multi:!0},{provide:m3,multi:!0,useFactory:()=>{let l=v(Q2),e=v(r1);return()=>{l.whenStable().then(()=>{e.isCacheActive=!1})}}}]}var o9=(()=>{class c{_doc;_dom;constructor(e){this._doc=e,this._dom=Q()}addTag(e,s=!1){return e?this._getOrCreateElement(e,s):null}addTags(e,s=!1){return e?e.reduce((a,n)=>(n&&a.push(this._getOrCreateElement(n,s)),a),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];let s=this._doc.querySelectorAll(`meta[${e}]`);return s?[].slice.call(s):[]}updateTag(e,s){if(!e)return null;s=s||this._parseSelector(e);let a=this.getTag(s);return a?this._setMetaElementAttributes(e,a):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,s=!1){if(!s){let o=this._parseSelector(e),t=this.getTags(o).filter(i=>this._containsAttributes(e,i))[0];if(t!==void 0)return t}let a=this._dom.createElement("meta");return this._setMetaElementAttributes(e,a),this._doc.getElementsByTagName("head")[0].appendChild(a),a}_setMetaElementAttributes(e,s){return Object.keys(e).forEach(a=>s.setAttribute(this._getMetaKeyMap(a),e[a])),s}_parseSelector(e){let s=e.name?"name":"property";return`${s}="${e[s]}"`}_containsAttributes(e,s){return Object.keys(e).every(a=>s.getAttribute(this._getMetaKeyMap(a))===e[a])}_getMetaKeyMap(e){return r6[e]||e}static \u0275fac=function(s){return new(s||c)(C(k))};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),r6={httpEquiv:"http-equiv"},t9=(()=>{class c{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(s){return new(s||c)(C(k))};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var f1=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275prov=b({token:c,factory:function(s){let a=null;return s?a=new(s||c):a=C(f6),a},providedIn:"root"})}return c})(),f6=(()=>{class c extends f1{_doc;constructor(e){super(),this._doc=e}sanitize(e,s){if(s==null)return null;switch(e){case $.NONE:return s;case $.HTML:return K(s,"HTML")?J(s):n3(this._doc,String(s)).toString();case $.STYLE:return K(s,"Style")?J(s):s;case $.SCRIPT:if(K(s,"Script"))return J(s);throw new T(5200,!1);case $.URL:return K(s,"URL")?J(s):a3(String(s));case $.RESOURCE_URL:if(K(s,"ResourceURL"))return J(s);throw new T(5201,!1);default:throw new T(5202,!1)}}bypassSecurityTrustHtml(e){return Z1(e)}bypassSecurityTrustStyle(e){return c3(e)}bypassSecurityTrustScript(e){return e3(e)}bypassSecurityTrustUrl(e){return l3(e)}bypassSecurityTrustResourceUrl(e){return s3(e)}static \u0275fac=function(s){return new(s||c)(C(k))};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),T2=(function(c){return c[c.NoHttpTransferCache=0]="NoHttpTransferCache",c[c.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",c[c.I18nSupport=2]="I18nSupport",c[c.EventReplay=3]="EventReplay",c[c.IncrementalHydration=4]="IncrementalHydration",c})(T2||{});function m6(c,l=[],e={}){return{\u0275kind:c,\u0275providers:l}}function i9(){return m6(T2.EventReplay,M3())}function r9(...c){let l=[],e=new Set;for(let{\u0275providers:a,\u0275kind:n}of c)e.add(n),a.length&&l.push(a);let s=e.has(T2.HttpTransferCacheOptions);return V2([[],[],h3(),e.has(T2.NoHttpTransferCache)||s?[]:H3({}),l])}function h1(c,l){(l==null||l>c.length)&&(l=c.length);for(var e=0,s=Array(l);e<l;e++)s[e]=c[e];return s}function z6(c){if(Array.isArray(c))return c}function u6(c){if(Array.isArray(c))return h1(c)}function d6(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function U3(c,l){for(var e=0;e<l.length;e++){var s=l[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,C4(s.key),s)}}function L6(c,l,e){return l&&U3(c.prototype,l),e&&U3(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function D2(c,l){var e=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!e){if(Array.isArray(c)||(e=D1(c))||l&&c&&typeof c.length=="number"){e&&(c=e);var s=0,a=function(){};return{s:a,n:function(){return s>=c.length?{done:!0}:{done:!1,value:c[s++]}},e:function(i){throw i},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n,o=!0,t=!1;return{s:function(){e=e.call(c)},n:function(){var i=e.next();return o=i.done,i},e:function(i){t=!0,n=i},f:function(){try{o||e.return==null||e.return()}finally{if(t)throw n}}}}function d(c,l,e){return(l=C4(l))in c?Object.defineProperty(c,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[l]=e,c}function p6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function M6(c,l){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s,a,n,o,t=[],i=!0,r=!1;try{if(n=(e=e.call(c)).next,l===0){if(Object(e)!==e)return;i=!1}else for(;!(i=(s=n.call(e)).done)&&(t.push(s.value),t.length!==l);i=!0);}catch(z){r=!0,a=z}finally{try{if(!i&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(r)throw a}}return t}}function h6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j3(c,l){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);l&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),e.push.apply(e,s)}return e}function f(c){for(var l=1;l<arguments.length;l++){var e=arguments[l]!=null?arguments[l]:{};l%2?j3(Object(e),!0).forEach(function(s){d(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):j3(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function B2(c,l){return z6(c)||M6(c,l)||D1(c,l)||h6()}function D(c){return u6(c)||p6(c)||D1(c)||C6()}function g6(c,l){if(typeof c!="object"||!c)return c;var e=c[Symbol.toPrimitive];if(e!==void 0){var s=e.call(c,l||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function C4(c){var l=g6(c,"string");return typeof l=="symbol"?l:l+""}function F2(c){"@babel/helpers - typeof";return F2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},F2(c)}function D1(c,l){if(c){if(typeof c=="string")return h1(c,l);var e={}.toString.call(c).slice(8,-1);return e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set"?Array.from(c):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h1(c,l):void 0}}var W3=function(){},R1={},g4={},x4=null,N4={mark:W3,measure:W3};try{typeof window<"u"&&(R1=window),typeof document<"u"&&(g4=document),typeof MutationObserver<"u"&&(x4=MutationObserver),typeof performance<"u"&&(N4=performance)}catch{}var x6=R1.navigator||{},q3=x6.userAgent,$3=q3===void 0?"":q3,j=R1,h=g4,G3=x4,E2=N4,z9=!!j.document,B=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",y4=~$3.indexOf("MSIE")||~$3.indexOf("Trident/"),m1,N6=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,y6=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,b4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},b6={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},v4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],y="classic",u2="duotone",w4="sharp",S4="sharp-duotone",k4="chisel",A4="etch",T4="graphite",E4="jelly",P4="jelly-duo",D4="jelly-fill",R4="notdog",I4="notdog-duo",F4="slab",O4="slab-press",_4="thumbprint",B4="utility",H4="utility-duo",U4="utility-fill",j4="whiteboard",v6="Classic",w6="Duotone",S6="Sharp",k6="Sharp Duotone",A6="Chisel",T6="Etch",E6="Graphite",P6="Jelly",D6="Jelly Duo",R6="Jelly Fill",I6="Notdog",F6="Notdog Duo",O6="Slab",_6="Slab Press",B6="Thumbprint",H6="Utility",U6="Utility Duo",j6="Utility Fill",W6="Whiteboard",W4=[y,u2,w4,S4,k4,A4,T4,E4,P4,D4,R4,I4,F4,O4,_4,B4,H4,U4,j4],u9=(m1={},d(d(d(d(d(d(d(d(d(d(m1,y,v6),u2,w6),w4,S6),S4,k6),k4,A6),A4,T6),T4,E6),E4,P6),P4,D6),D4,R6),d(d(d(d(d(d(d(d(d(m1,R4,I6),I4,F6),F4,O6),O4,_6),_4,B6),B4,H6),H4,U6),U4,j6),j4,W6)),q6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},$6={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},G6=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),V6={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},q4=["fak","fa-kit","fakd","fa-kit-duotone"],V3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},X6=["kit"],Y6="kit",J6="kit-duotone",K6="Kit",Q6="Kit Duotone",d9=d(d({},Y6,K6),J6,Q6),Z6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},c8={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},e8={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},X3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},z1,P2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l8=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],s8="classic",a8="duotone",n8="sharp",o8="sharp-duotone",t8="chisel",i8="etch",r8="graphite",f8="jelly",m8="jelly-duo",z8="jelly-fill",u8="notdog",d8="notdog-duo",L8="slab",p8="slab-press",M8="thumbprint",h8="utility",C8="utility-duo",g8="utility-fill",x8="whiteboard",N8="Classic",y8="Duotone",b8="Sharp",v8="Sharp Duotone",w8="Chisel",S8="Etch",k8="Graphite",A8="Jelly",T8="Jelly Duo",E8="Jelly Fill",P8="Notdog",D8="Notdog Duo",R8="Slab",I8="Slab Press",F8="Thumbprint",O8="Utility",_8="Utility Duo",B8="Utility Fill",H8="Whiteboard",L9=(z1={},d(d(d(d(d(d(d(d(d(d(z1,s8,N8),a8,y8),n8,b8),o8,v8),t8,w8),i8,S8),r8,k8),f8,A8),m8,T8),z8,E8),d(d(d(d(d(d(d(d(d(z1,u8,P8),d8,D8),L8,R8),p8,I8),M8,F8),h8,O8),C8,_8),g8,B8),x8,H8)),U8="kit",j8="kit-duotone",W8="Kit",q8="Kit Duotone",p9=d(d({},U8,W8),j8,q8),$8={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},G8={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},C1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},V8=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],$4=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(l8,V8),X8=["solid","regular","light","thin","duotone","brands","semibold"],G4=[1,2,3,4,5,6,7,8,9,10],Y8=G4.concat([11,12,13,14,15,16,17,18,19,20]),J8=["aw","fw","pull-left","pull-right"],K8=[].concat(D(Object.keys(G8)),X8,J8,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",P2.GROUP,P2.SWAP_OPACITY,P2.PRIMARY,P2.SECONDARY]).concat(G4.map(function(c){return"".concat(c,"x")})).concat(Y8.map(function(c){return"w-".concat(c)})),Q8={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},O="___FONT_AWESOME___",g1=16,V4="fa",X4="svg-inline--fa",V="data-fa-i2svg",x1="data-fa-pseudo-element",Z8="data-fa-pseudo-element-pending",I1="data-prefix",F1="data-icon",Y3="fontawesome-i2svg",c5="async",e5=["HTML","HEAD","STYLE","SCRIPT"],Y4=["::before","::after",":before",":after"],J4=(function(){try{return!0}catch{return!1}})();function d2(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[y]}})}var K4=f({},b4);K4[y]=f(f(f(f({},{"fa-duotone":"duotone"}),b4[y]),V3.kit),V3["kit-duotone"]);var l5=d2(K4),N1=f({},V6);N1[y]=f(f(f(f({},{duotone:"fad"}),N1[y]),X3.kit),X3["kit-duotone"]);var J3=d2(N1),y1=f({},C1);y1[y]=f(f({},y1[y]),e8.kit);var O1=d2(y1),b1=f({},$8);b1[y]=f(f({},b1[y]),Z6.kit);var M9=d2(b1),s5=N6,Q4="fa-layers-text",a5=y6,n5=f({},q6),h9=d2(n5),o5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],u1=b6,t5=[].concat(D(X6),D(K8)),f2=j.FontAwesomeConfig||{};function i5(c){var l=h.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function r5(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}h&&typeof h.querySelector=="function"&&(K3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],K3.forEach(function(c){var l=B2(c,2),e=l[0],s=l[1],a=r5(i5(e));a!=null&&(f2[s]=a)}));var K3,Z4={styleDefault:"solid",familyDefault:y,cssPrefix:V4,replacementClass:X4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};f2.familyPrefix&&(f2.cssPrefix=f2.familyPrefix);var e2=f(f({},Z4),f2);e2.autoReplaceSvg||(e2.observeMutations=!1);var u={};Object.keys(Z4).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(e){e2[c]=e,m2.forEach(function(s){return s(u)})},get:function(){return e2[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(l){e2.cssPrefix=l,m2.forEach(function(e){return e(u)})},get:function(){return e2.cssPrefix}});j.FontAwesomeConfig=u;var m2=[];function f5(c){return m2.push(c),function(){m2.splice(m2.indexOf(c),1)}}var U=g1,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function m5(c){if(!(!c||!B)){var l=h.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;for(var e=h.head.childNodes,s=null,a=e.length-1;a>-1;a--){var n=e[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=n)}return h.head.insertBefore(l,s),c}}var z5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Q3(){for(var c=12,l="";c-- >0;)l+=z5[Math.random()*62|0];return l}function l2(c){for(var l=[],e=(c||[]).length>>>0;e--;)l[e]=c[e];return l}function _1(c){return c.classList?l2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(l){return l})}function c0(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u5(c){return Object.keys(c||{}).reduce(function(l,e){return l+"".concat(e,'="').concat(c0(c[e]),'" ')},"").trim()}function H2(c){return Object.keys(c||{}).reduce(function(l,e){return l+"".concat(e,": ").concat(c[e].trim(),";")},"")}function B1(c){return c.size!==I.size||c.x!==I.x||c.y!==I.y||c.rotate!==I.rotate||c.flipX||c.flipY}function d5(c){var l=c.transform,e=c.containerWidth,s=c.iconWidth,a={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),t="rotate(".concat(l.rotate," 0 0)"),i={transform:"".concat(n," ").concat(o," ").concat(t)},r={transform:"translate(".concat(s/2*-1," -256)")};return{outer:a,inner:i,path:r}}function L5(c){var l=c.transform,e=c.width,s=e===void 0?g1:e,a=c.height,n=a===void 0?g1:a,o=c.startCentered,t=o===void 0?!1:o,i="";return t&&y4?i+="translate(".concat(l.x/U-s/2,"em, ").concat(l.y/U-n/2,"em) "):t?i+="translate(calc(-50% + ".concat(l.x/U,"em), calc(-50% + ").concat(l.y/U,"em)) "):i+="translate(".concat(l.x/U,"em, ").concat(l.y/U,"em) "),i+="scale(".concat(l.size/U*(l.flipX?-1:1),", ").concat(l.size/U*(l.flipY?-1:1),") "),i+="rotate(".concat(l.rotate,"deg) "),i}var p5=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
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
}`;function e0(){var c=V4,l=X4,e=u.cssPrefix,s=u.replacementClass,a=p5;if(e!==c||s!==l){var n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(l),"g");a=a.replace(n,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(t,".".concat(s))}return a}var Z3=!1;function d1(){u.autoAddCss&&!Z3&&(m5(e0()),Z3=!0)}var M5={mixout:function(){return{dom:{css:e0,insertCss:d1}}},hooks:function(){return{beforeDOMElementCreation:function(){d1()},beforeI2svg:function(){d1()}}}},_=j||{};_[O]||(_[O]={});_[O].styles||(_[O].styles={});_[O].hooks||(_[O].hooks={});_[O].shims||(_[O].shims=[]);var P=_[O],l0=[],s0=function(){h.removeEventListener("DOMContentLoaded",s0),O2=1,l0.map(function(l){return l()})},O2=!1;B&&(O2=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),O2||h.addEventListener("DOMContentLoaded",s0));function h5(c){B&&(O2?setTimeout(c,0):l0.push(c))}function L2(c){var l=c.tag,e=c.attributes,s=e===void 0?{}:e,a=c.children,n=a===void 0?[]:a;return typeof c=="string"?c0(c):"<".concat(l," ").concat(u5(s),">").concat(n.map(L2).join(""),"</").concat(l,">")}function c4(c,l,e){if(c&&c[l]&&c[l][e])return{prefix:l,iconName:e,icon:c[l][e]}}var C5=function(l,e){return function(s,a,n,o){return l.call(e,s,a,n,o)}},L1=function(l,e,s,a){var n=Object.keys(l),o=n.length,t=a!==void 0?C5(e,a):e,i,r,z;for(s===void 0?(i=1,z=l[n[0]]):(i=0,z=s);i<o;i++)r=n[i],z=t(z,l[r],r,l);return z};function a0(c){return D(c).length!==1?null:c.codePointAt(0).toString(16)}function e4(c){return Object.keys(c).reduce(function(l,e){var s=c[e],a=!!s.icon;return a?l[s.iconName]=s.icon:l[e]=s,l},{})}function v1(c,l){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,a=s===void 0?!1:s,n=e4(l);typeof P.hooks.addPack=="function"&&!a?P.hooks.addPack(c,e4(l)):P.styles[c]=f(f({},P.styles[c]||{}),n),c==="fas"&&v1("fa",l)}var z2=P.styles,g5=P.shims,n0=Object.keys(O1),x5=n0.reduce(function(c,l){return c[l]=Object.keys(O1[l]),c},{}),H1=null,o0={},t0={},i0={},r0={},f0={};function N5(c){return~t5.indexOf(c)}function y5(c,l){var e=l.split("-"),s=e[0],a=e.slice(1).join("-");return s===c&&a!==""&&!N5(a)?a:null}var m0=function(){var l=function(n){return L1(z2,function(o,t,i){return o[i]=L1(t,n,{}),o},{})};o0=l(function(a,n,o){if(n[3]&&(a[n[3]]=o),n[2]){var t=n[2].filter(function(i){return typeof i=="number"});t.forEach(function(i){a[i.toString(16)]=o})}return a}),t0=l(function(a,n,o){if(a[o]=o,n[2]){var t=n[2].filter(function(i){return typeof i=="string"});t.forEach(function(i){a[i]=o})}return a}),f0=l(function(a,n,o){var t=n[2];return a[o]=o,t.forEach(function(i){a[i]=o}),a});var e="far"in z2||u.autoFetchSvg,s=L1(g5,function(a,n){var o=n[0],t=n[1],i=n[2];return t==="far"&&!e&&(t="fas"),typeof o=="string"&&(a.names[o]={prefix:t,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:t,iconName:i}),a},{names:{},unicodes:{}});i0=s.names,r0=s.unicodes,H1=U2(u.styleDefault,{family:u.familyDefault})};f5(function(c){H1=U2(c.styleDefault,{family:u.familyDefault})});m0();function U1(c,l){return(o0[c]||{})[l]}function b5(c,l){return(t0[c]||{})[l]}function G(c,l){return(f0[c]||{})[l]}function z0(c){return i0[c]||{prefix:null,iconName:null}}function v5(c){var l=r0[c],e=U1("fas",c);return l||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function W(){return H1}var u0=function(){return{prefix:null,iconName:null,rest:[]}};function w5(c){var l=y,e=n0.reduce(function(s,a){return s[a]="".concat(u.cssPrefix,"-").concat(a),s},{});return W4.forEach(function(s){(c.includes(e[s])||c.some(function(a){return x5[s].includes(a)}))&&(l=s)}),l}function U2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=l.family,s=e===void 0?y:e,a=l5[s][c];if(s===u2&&!c)return"fad";var n=J3[s][c]||J3[s][a],o=c in P.styles?c:null,t=n||o||null;return t}function S5(c){var l=[],e=null;return c.forEach(function(s){var a=y5(u.cssPrefix,s);a?e=a:s&&l.push(s)}),{iconName:e,rest:l}}function l4(c){return c.sort().filter(function(l,e,s){return s.indexOf(l)===e})}var s4=$4.concat(q4);function j2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=l.skipLookups,s=e===void 0?!1:e,a=null,n=l4(c.filter(function(p){return s4.includes(p)})),o=l4(c.filter(function(p){return!s4.includes(p)})),t=n.filter(function(p){return a=p,!v4.includes(p)}),i=B2(t,1),r=i[0],z=r===void 0?null:r,m=w5(n),L=f(f({},S5(o)),{},{prefix:U2(z,{family:m})});return f(f(f({},L),E5({values:c,family:m,styles:z2,config:u,canonical:L,givenPrefix:a})),k5(s,a,L))}function k5(c,l,e){var s=e.prefix,a=e.iconName;if(c||!s||!a)return{prefix:s,iconName:a};var n=l==="fa"?z0(a):{},o=G(s,a);return a=n.iconName||o||a,s=n.prefix||s,s==="far"&&!z2.far&&z2.fas&&!u.autoFetchSvg&&(s="fas"),{prefix:s,iconName:a}}var A5=W4.filter(function(c){return c!==y||c!==u2}),T5=Object.keys(C1).filter(function(c){return c!==y}).map(function(c){return Object.keys(C1[c])}).flat();function E5(c){var l=c.values,e=c.family,s=c.canonical,a=c.givenPrefix,n=a===void 0?"":a,o=c.styles,t=o===void 0?{}:o,i=c.config,r=i===void 0?{}:i,z=e===u2,m=l.includes("fa-duotone")||l.includes("fad"),L=r.familyDefault==="duotone",p=s.prefix==="fad"||s.prefix==="fa-duotone";if(!z&&(m||L||p)&&(s.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(s.prefix="fab"),!s.prefix&&A5.includes(e)){var g=Object.keys(t).find(function(x){return T5.includes(x)});if(g||r.autoFetchSvg){var M=G6.get(e).defaultShortPrefixId;s.prefix=M,s.iconName=G(s.prefix,s.iconName)||s.iconName}}return(s.prefix==="fa"||n==="fa")&&(s.prefix=W()||"fas"),s}var P5=(function(){function c(){d6(this,c),this.definitions={}}return L6(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(t){e.definitions[t]=f(f({},e.definitions[t]||{}),o[t]),v1(t,o[t]);var i=O1[y][t];i&&v1(i,o[t]),m0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(function(n){var o=a[n],t=o.prefix,i=o.iconName,r=o.icon,z=r[2];e[t]||(e[t]={}),z.length>0&&z.forEach(function(m){typeof m=="string"&&(e[t][m]=r)}),e[t][i]=r}),e}}])})(),a4=[],Z={},c2={},D5=Object.keys(c2);function R5(c,l){var e=l.mixoutsTo;return a4=c,Z={},Object.keys(c2).forEach(function(s){D5.indexOf(s)===-1&&delete c2[s]}),a4.forEach(function(s){var a=s.mixout?s.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(e[o]=a[o]),F2(a[o])==="object"&&Object.keys(a[o]).forEach(function(t){e[o]||(e[o]={}),e[o][t]=a[o][t]})}),s.hooks){var n=s.hooks();Object.keys(n).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(n[o])})}s.provides&&s.provides(c2)}),e}function w1(c,l){for(var e=arguments.length,s=new Array(e>2?e-2:0),a=2;a<e;a++)s[a-2]=arguments[a];var n=Z[c]||[];return n.forEach(function(o){l=o.apply(null,[l].concat(s))}),l}function X(c){for(var l=arguments.length,e=new Array(l>1?l-1:0),s=1;s<l;s++)e[s-1]=arguments[s];var a=Z[c]||[];a.forEach(function(n){n.apply(null,e)})}function q(){var c=arguments[0],l=Array.prototype.slice.call(arguments,1);return c2[c]?c2[c].apply(null,l):void 0}function S1(c){c.prefix==="fa"&&(c.prefix="fas");var l=c.iconName,e=c.prefix||W();if(l)return l=G(e,l)||l,c4(d0.definitions,e,l)||c4(P.styles,e,l)}var d0=new P5,I5=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,X("noAuto")},F5={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(X("beforeI2svg",l),q("pseudoElements2svg",l),q("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=l.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,h5(function(){_5({autoReplaceSvgRoot:e}),X("watch",l)})}},O5={icon:function(l){if(l===null)return null;if(F2(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:G(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var e=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],s=U2(l[0]);return{prefix:s,iconName:G(s,e)||e}}if(typeof l=="string"&&(l.indexOf("".concat(u.cssPrefix,"-"))>-1||l.match(s5))){var a=j2(l.split(" "),{skipLookups:!0});return{prefix:a.prefix||W(),iconName:G(a.prefix,a.iconName)||a.iconName}}if(typeof l=="string"){var n=W();return{prefix:n,iconName:G(n,l)||l}}}},A={noAuto:I5,config:u,dom:F5,parse:O5,library:d0,findIconDefinition:S1,toHtml:L2},_5=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=l.autoReplaceSvgRoot,s=e===void 0?h:e;(Object.keys(P.styles).length>0||u.autoFetchSvg)&&B&&u.autoReplaceSvg&&A.dom.i2svg({node:s})};function W2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return L2(s)})}}),Object.defineProperty(c,"node",{get:function(){if(B){var s=h.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function B5(c){var l=c.children,e=c.main,s=c.mask,a=c.attributes,n=c.styles,o=c.transform;if(B1(o)&&e.found&&!s.found){var t=e.width,i=e.height,r={x:t/i/2,y:.5};a.style=H2(f(f({},n),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:l}]}function H5(c){var l=c.prefix,e=c.iconName,s=c.children,a=c.attributes,n=c.symbol,o=n===!0?"".concat(l,"-").concat(u.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},a),{},{id:o}),children:s}]}]}function U5(c){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(e){return e in c})}function j1(c){var l=c.icons,e=l.main,s=l.mask,a=c.prefix,n=c.iconName,o=c.transform,t=c.symbol,i=c.maskId,r=c.extra,z=c.watchable,m=z===void 0?!1:z,L=s.found?s:e,p=L.width,g=L.height,M=[u.replacementClass,n?"".concat(u.cssPrefix,"-").concat(n):""].filter(function(F){return r.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(r.classes).join(" "),x={children:[],attributes:f(f({},r.attributes),{},{"data-prefix":a,"data-icon":n,class:M,role:r.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(g)})};!U5(r.attributes)&&!r.attributes["aria-hidden"]&&(x.attributes["aria-hidden"]="true"),m&&(x.attributes[V]="");var N=f(f({},x),{},{prefix:a,iconName:n,main:e,mask:s,maskId:i,transform:o,symbol:t,styles:f({},r.styles)}),S=s.found&&e.found?q("generateAbstractMask",N)||{children:[],attributes:{}}:q("generateAbstractIcon",N)||{children:[],attributes:{}},E=S.children,Y=S.attributes;return N.children=E,N.attributes=Y,t?H5(N):B5(N)}function n4(c){var l=c.content,e=c.width,s=c.height,a=c.transform,n=c.extra,o=c.watchable,t=o===void 0?!1:o,i=f(f({},n.attributes),{},{class:n.classes.join(" ")});t&&(i[V]="");var r=f({},n.styles);B1(a)&&(r.transform=L5({transform:a,startCentered:!0,width:e,height:s}),r["-webkit-transform"]=r.transform);var z=H2(r);z.length>0&&(i.style=z);var m=[];return m.push({tag:"span",attributes:i,children:[l]}),m}function j5(c){var l=c.content,e=c.extra,s=f(f({},e.attributes),{},{class:e.classes.join(" ")}),a=H2(e.styles);a.length>0&&(s.style=a);var n=[];return n.push({tag:"span",attributes:s,children:[l]}),n}var p1=P.styles;function k1(c){var l=c[0],e=c[1],s=c.slice(4),a=B2(s,1),n=a[0],o=null;return Array.isArray(n)?o={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(u1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(u1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(u1.PRIMARY),fill:"currentColor",d:n[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:l,height:e,icon:o}}var W5={found:!1,width:512,height:512};function q5(c,l){!J4&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function A1(c,l){var e=l;return l==="fa"&&u.styleDefault!==null&&(l=W()),new Promise(function(s,a){if(e==="fa"){var n=z0(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&p1[l]&&p1[l][c]){var o=p1[l][c];return s(k1(o))}q5(c,l),s(f(f({},W5),{},{icon:u.showMissingIcons&&c?q("missingIconAbstract")||{}:{}}))})}var o4=function(){},T1=u.measurePerformance&&E2&&E2.mark&&E2.measure?E2:{mark:o4,measure:o4},r2='FA "7.2.0"',$5=function(l){return T1.mark("".concat(r2," ").concat(l," begins")),function(){return L0(l)}},L0=function(l){T1.mark("".concat(r2," ").concat(l," ends")),T1.measure("".concat(r2," ").concat(l),"".concat(r2," ").concat(l," begins"),"".concat(r2," ").concat(l," ends"))},W1={begin:$5,end:L0},R2=function(){};function t4(c){var l=c.getAttribute?c.getAttribute(V):null;return typeof l=="string"}function G5(c){var l=c.getAttribute?c.getAttribute(I1):null,e=c.getAttribute?c.getAttribute(F1):null;return l&&e}function V5(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function X5(){if(u.autoReplaceSvg===!0)return I2.replace;var c=I2[u.autoReplaceSvg];return c||I2.replace}function Y5(c){return h.createElementNS("http://www.w3.org/2000/svg",c)}function J5(c){return h.createElement(c)}function p0(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=l.ceFn,s=e===void 0?c.tag==="svg"?Y5:J5:e;if(typeof c=="string")return h.createTextNode(c);var a=s(c.tag);Object.keys(c.attributes||[]).forEach(function(o){a.setAttribute(o,c.attributes[o])});var n=c.children||[];return n.forEach(function(o){a.appendChild(p0(o,{ceFn:s}))}),a}function K5(c){var l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var I2={replace:function(l){var e=l[0];if(e.parentNode)if(l[1].forEach(function(a){e.parentNode.insertBefore(p0(a),e)}),e.getAttribute(V)===null&&u.keepOriginalSource){var s=h.createComment(K5(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(l){var e=l[0],s=l[1];if(~_1(e).indexOf(u.replacementClass))return I2.replace(l);var a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var n=s[0].attributes.class.split(" ").reduce(function(t,i){return i===u.replacementClass||i.match(a)?t.toSvg.push(i):t.toNode.push(i),t},{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var o=s.map(function(t){return L2(t)}).join(`
`);e.setAttribute(V,""),e.innerHTML=o}};function i4(c){c()}function M0(c,l){var e=typeof l=="function"?l:R2;if(c.length===0)e();else{var s=i4;u.mutateApproach===c5&&(s=j.requestAnimationFrame||i4),s(function(){var a=X5(),n=W1.begin("mutate");c.map(a),n(),e()})}}var q1=!1;function h0(){q1=!0}function E1(){q1=!1}var _2=null;function r4(c){if(G3&&u.observeMutations){var l=c.treeCallback,e=l===void 0?R2:l,s=c.nodeCallback,a=s===void 0?R2:s,n=c.pseudoElementsCallback,o=n===void 0?R2:n,t=c.observeMutationsRoot,i=t===void 0?h:t;_2=new G3(function(r){if(!q1){var z=W();l2(r).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!t4(m.addedNodes[0])&&(u.searchPseudoElements&&o(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&u.searchPseudoElements&&o([m.target],!0),m.type==="attributes"&&t4(m.target)&&~o5.indexOf(m.attributeName))if(m.attributeName==="class"&&G5(m.target)){var L=j2(_1(m.target)),p=L.prefix,g=L.iconName;m.target.setAttribute(I1,p||z),g&&m.target.setAttribute(F1,g)}else V5(m.target)&&a(m.target)})}}),B&&_2.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Q5(){_2&&_2.disconnect()}function Z5(c){var l=c.getAttribute("style"),e=[];return l&&(e=l.split(";").reduce(function(s,a){var n=a.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(s[o]=t.join(":").trim()),s},{})),e}function c7(c){var l=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",a=j2(_1(c));return a.prefix||(a.prefix=W()),l&&e&&(a.prefix=l,a.iconName=e),a.iconName&&a.prefix||(a.prefix&&s.length>0&&(a.iconName=b5(a.prefix,c.innerText)||U1(a.prefix,a0(c.innerText))),!a.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function e7(c){var l=l2(c.attributes).reduce(function(e,s){return e.name!=="class"&&e.name!=="style"&&(e[s.name]=s.value),e},{});return l}function l7(){return{iconName:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function f4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=c7(c),s=e.iconName,a=e.prefix,n=e.rest,o=e7(c),t=w1("parseNodeAttributes",{},c),i=l.styleParser?Z5(c):[];return f({iconName:s,prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:i,attributes:o}},t)}var s7=P.styles;function C0(c){var l=u.autoReplaceSvg==="nest"?f4(c,{styleParser:!1}):f4(c);return~l.extra.classes.indexOf(Q4)?q("generateLayersText",c,l):q("generateSvgReplacementMutation",c,l)}function a7(){return[].concat(D(q4),D($4))}function m4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var e=h.documentElement.classList,s=function(m){return e.add("".concat(Y3,"-").concat(m))},a=function(m){return e.remove("".concat(Y3,"-").concat(m))},n=u.autoFetchSvg?a7():v4.concat(Object.keys(s7));n.includes("fa")||n.push("fa");var o=[".".concat(Q4,":not([").concat(V,"])")].concat(n.map(function(z){return".".concat(z,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var t=[];try{t=l2(c.querySelectorAll(o))}catch{}if(t.length>0)s("pending"),a("complete");else return Promise.resolve();var i=W1.begin("onTree"),r=t.reduce(function(z,m){try{var L=C0(m);L&&z.push(L)}catch(p){J4||p.name==="MissingIcon"&&console.error(p)}return z},[]);return new Promise(function(z,m){Promise.all(r).then(function(L){M0(L,function(){s("active"),s("complete"),a("pending"),typeof l=="function"&&l(),i(),z()})}).catch(function(L){i(),m(L)})})}function n7(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;C0(c).then(function(e){e&&M0([e],l)})}function o7(c){return function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(l||{}).icon?l:S1(l||{}),a=e.mask;return a&&(a=(a||{}).icon?a:S1(a||{})),c(s,f(f({},e),{},{mask:a}))}}var t7=function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,a=s===void 0?I:s,n=e.symbol,o=n===void 0?!1:n,t=e.mask,i=t===void 0?null:t,r=e.maskId,z=r===void 0?null:r,m=e.classes,L=m===void 0?[]:m,p=e.attributes,g=p===void 0?{}:p,M=e.styles,x=M===void 0?{}:M;if(l){var N=l.prefix,S=l.iconName,E=l.icon;return W2(f({type:"icon"},l),function(){return X("beforeDOMElementCreation",{iconDefinition:l,params:e}),j1({icons:{main:k1(E),mask:i?k1(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:S,transform:f(f({},I),a),symbol:o,maskId:z,extra:{attributes:g,styles:x,classes:L}})})}},i7={mixout:function(){return{icon:o7(t7)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=m4,e.nodeCallback=n7,e}}},provides:function(l){l.i2svg=function(e){var s=e.node,a=s===void 0?h:s,n=e.callback,o=n===void 0?function(){}:n;return m4(a,o)},l.generateSvgReplacementMutation=function(e,s){var a=s.iconName,n=s.prefix,o=s.transform,t=s.symbol,i=s.mask,r=s.maskId,z=s.extra;return new Promise(function(m,L){Promise.all([A1(a,n),i.iconName?A1(i.iconName,i.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var g=B2(p,2),M=g[0],x=g[1];m([e,j1({icons:{main:M,mask:x},prefix:n,iconName:a,transform:o,symbol:t,maskId:r,extra:z,watchable:!0})])}).catch(L)})},l.generateAbstractIcon=function(e){var s=e.children,a=e.attributes,n=e.main,o=e.transform,t=e.styles,i=H2(t);i.length>0&&(a.style=i);var r;return B1(o)&&(r=q("generateAbstractTransformGrouping",{main:n,transform:o,containerWidth:n.width,iconWidth:n.width})),s.push(r||n.icon),{children:s,attributes:a}}}},r7={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.classes,n=a===void 0?[]:a;return W2({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:e,params:s});var o=[];return e(function(t){Array.isArray(t)?t.map(function(i){o=o.concat(i.abstract)}):o=o.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(D(n)).join(" ")},children:o}]})}}}},f7={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.title,n=a===void 0?null:a,o=s.classes,t=o===void 0?[]:o,i=s.attributes,r=i===void 0?{}:i,z=s.styles,m=z===void 0?{}:z;return W2({type:"counter",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:s}),j5({content:e.toString(),title:n,extra:{attributes:r,styles:m,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(D(t))}})})}}}},m7={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=s.transform,n=a===void 0?I:a,o=s.classes,t=o===void 0?[]:o,i=s.attributes,r=i===void 0?{}:i,z=s.styles,m=z===void 0?{}:z;return W2({type:"text",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:s}),n4({content:e,transform:f(f({},I),n),extra:{attributes:r,styles:m,classes:["".concat(u.cssPrefix,"-layers-text")].concat(D(t))}})})}}},provides:function(l){l.generateLayersText=function(e,s){var a=s.transform,n=s.extra,o=null,t=null;if(y4){var i=parseInt(getComputedStyle(e).fontSize,10),r=e.getBoundingClientRect();o=r.width/i,t=r.height/i}return Promise.resolve([e,n4({content:e.innerHTML,width:o,height:t,transform:a,extra:n,watchable:!0})])}}},g0=new RegExp('"',"ug"),z4=[1105920,1112319],u4=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),$6),Q8),c8),P1=Object.keys(u4).reduce(function(c,l){return c[l.toLowerCase()]=u4[l],c},{}),z7=Object.keys(P1).reduce(function(c,l){var e=P1[l];return c[l]=e[900]||D(Object.entries(e))[0][1],c},{});function u7(c){var l=c.replace(g0,"");return a0(D(l)[0]||"")}function d7(c){var l=c.getPropertyValue("font-feature-settings").includes("ss01"),e=c.getPropertyValue("content"),s=e.replace(g0,""),a=s.codePointAt(0),n=a>=z4[0]&&a<=z4[1],o=s.length===2?s[0]===s[1]:!1;return n||o||l}function L7(c,l){var e=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(l),a=isNaN(s)?"normal":s;return(P1[e]||{})[a]||z7[e]}function d4(c,l){var e="".concat(Z8).concat(l.replace(":","-"));return new Promise(function(s,a){if(c.getAttribute(e)!==null)return s();var n=l2(c.children),o=n.filter(function(q2){return q2.getAttribute(x1)===l})[0],t=j.getComputedStyle(c,l),i=t.getPropertyValue("font-family"),r=i.match(a5),z=t.getPropertyValue("font-weight"),m=t.getPropertyValue("content");if(o&&!r)return c.removeChild(o),s();if(r&&m!=="none"&&m!==""){var L=t.getPropertyValue("content"),p=L7(i,z),g=u7(L),M=r[0].startsWith("FontAwesome"),x=d7(t),N=U1(p,g),S=N;if(M){var E=v5(g);E.iconName&&E.prefix&&(N=E.iconName,p=E.prefix)}if(N&&!x&&(!o||o.getAttribute(I1)!==p||o.getAttribute(F1)!==S)){c.setAttribute(e,S),o&&c.removeChild(o);var Y=l7(),F=Y.extra;F.attributes[x1]=l,A1(N,p).then(function(q2){var S0=j1(f(f({},Y),{},{icons:{main:q2,mask:u0()},prefix:p,iconName:S,extra:F,watchable:!0})),$2=h.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore($2,c.firstChild):c.appendChild($2),$2.outerHTML=S0.map(function(k0){return L2(k0)}).join(`
`),c.removeAttribute(e),s()}).catch(a)}else s()}else s()})}function p7(c){return Promise.all([d4(c,"::before"),d4(c,"::after")])}function M7(c){return c.parentNode!==document.head&&!~e5.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(x1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var h7=function(l){return!!l&&Y4.some(function(e){return l.includes(e)})},C7=function(l){if(!l)return[];var e=new Set,s=l.split(/,(?![^()]*\))/).map(function(i){return i.trim()});s=s.flatMap(function(i){return i.includes("(")?i:i.split(",").map(function(r){return r.trim()})});var a=D2(s),n;try{for(a.s();!(n=a.n()).done;){var o=n.value;if(h7(o)){var t=Y4.reduce(function(i,r){return i.replace(r,"")},o);t!==""&&t!=="*"&&e.add(t)}}}catch(i){a.e(i)}finally{a.f()}return e};function L4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(B){var e;if(l)e=c;else if(u.searchPseudoElementsFullScan)e=c.querySelectorAll("*");else{var s=new Set,a=D2(document.styleSheets),n;try{for(a.s();!(n=a.n()).done;){var o=n.value;try{var t=D2(o.cssRules),i;try{for(t.s();!(i=t.n()).done;){var r=i.value,z=C7(r.selectorText),m=D2(z),L;try{for(m.s();!(L=m.n()).done;){var p=L.value;s.add(p)}}catch(M){m.e(M)}finally{m.f()}}}catch(M){t.e(M)}finally{t.f()}}catch(M){u.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(M.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(M){a.e(M)}finally{a.f()}if(!s.size)return;var g=Array.from(s).join(", ");try{e=c.querySelectorAll(g)}catch{}}return new Promise(function(M,x){var N=l2(e).filter(M7).map(p7),S=W1.begin("searchPseudoElements");h0(),Promise.all(N).then(function(){S(),E1(),M()}).catch(function(){S(),E1(),x()})})}}var g7={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=L4,e}}},provides:function(l){l.pseudoElements2svg=function(e){var s=e.node,a=s===void 0?h:s;u.searchPseudoElements&&L4(a)}}},p4=!1,x7={mixout:function(){return{dom:{unwatch:function(){h0(),p4=!0}}}},hooks:function(){return{bootstrap:function(){r4(w1("mutationObserverCallbacks",{}))},noAuto:function(){Q5()},watch:function(e){var s=e.observeMutationsRoot;p4?E1():r4(w1("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},M4=function(l){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(s,a){var n=a.toLowerCase().split("-"),o=n[0],t=n.slice(1).join("-");if(o&&t==="h")return s.flipX=!0,s;if(o&&t==="v")return s.flipY=!0,s;if(t=parseFloat(t),isNaN(t))return s;switch(o){case"grow":s.size=s.size+t;break;case"shrink":s.size=s.size-t;break;case"left":s.x=s.x-t;break;case"right":s.x=s.x+t;break;case"up":s.y=s.y-t;break;case"down":s.y=s.y+t;break;case"rotate":s.rotate=s.rotate+t;break}return s},e)},N7={mixout:function(){return{parse:{transform:function(e){return M4(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var a=s.getAttribute("data-fa-transform");return a&&(e.transform=M4(a)),e}}},provides:function(l){l.generateAbstractTransformGrouping=function(e){var s=e.main,a=e.transform,n=e.containerWidth,o=e.iconWidth,t={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),r="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),z="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(i," ").concat(r," ").concat(z)},L={transform:"translate(".concat(o/2*-1," -256)")},p={outer:t,inner:m,path:L};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:f(f({},s.icon.attributes),p.path)}]}]}}}},M1={x:0,y:0,width:"100%",height:"100%"};function h4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function y7(c){return c.tag==="g"?c.children:[c]}var b7={hooks:function(){return{parseNodeAttributes:function(e,s){var a=s.getAttribute("data-fa-mask"),n=a?j2(a.split(" ").map(function(o){return o.trim()})):u0();return n.prefix||(n.prefix=W()),e.mask=n,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(l){l.generateAbstractMask=function(e){var s=e.children,a=e.attributes,n=e.main,o=e.mask,t=e.maskId,i=e.transform,r=n.width,z=n.icon,m=o.width,L=o.icon,p=d5({transform:i,containerWidth:m,iconWidth:r}),g={tag:"rect",attributes:f(f({},M1),{},{fill:"white"})},M=z.children?{children:z.children.map(h4)}:{},x={tag:"g",attributes:f({},p.inner),children:[h4(f({tag:z.tag,attributes:f(f({},z.attributes),p.path)},M))]},N={tag:"g",attributes:f({},p.outer),children:[x]},S="mask-".concat(t||Q3()),E="clip-".concat(t||Q3()),Y={tag:"mask",attributes:f(f({},M1),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,N]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:y7(L)},Y]};return s.push(F,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(S,")")},M1)}),{children:s,attributes:a}}}},v7={provides:function(l){var e=!1;j.matchMedia&&(e=j.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var s=[],a={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:f(f({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},n),{},{attributeName:"opacity"}),t={tag:"circle",attributes:f(f({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||t.children.push({tag:"animate",attributes:f(f({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),s.push(t),s.push({tag:"path",attributes:f(f({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:f(f({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},w7={hooks:function(){return{parseNodeAttributes:function(e,s){var a=s.getAttribute("data-fa-symbol"),n=a===null?!1:a===""?!0:a;return e.symbol=n,e}}}},S7=[M5,i7,r7,f7,m7,g7,x7,N7,b7,v7,w7];R5(S7,{mixoutsTo:A});var C9=A.noAuto,x0=A.config,g9=A.library,N0=A.dom,y0=A.parse,x9=A.findIconDefinition,N9=A.toHtml,b0=A.icon,y9=A.layer,k7=A.text,A7=A.counter;var T7=["*"],E7=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(e){x0.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(s){return new(s||c)};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),P7=(()=>{class c{definitions={};addIcons(...e){for(let s of e){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let a of s.icon[2])typeof a=="string"&&(this.definitions[s.prefix][a]=s)}}addIconPacks(...e){for(let s of e){let a=Object.keys(s).map(n=>s[n]);this.addIcons(...a)}}getIconDefinition(e,s){return e in this.definitions&&s in this.definitions[e]?this.definitions[e][s]:null}static \u0275fac=function(s){return new(s||c)};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),D7=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},R7=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},w0=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),I7=c=>{let l=w0(c.rotate),e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:l,"fa-rotate-by":c.rotate!=null&&!l,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(s=>e[s]?s:null).filter(s=>s!=null)},$1=new WeakSet,v0="fa-auto-css";function F7(c,l){if(!l.autoAddCss||$1.has(c))return;if(c.getElementById(v0)!=null){l.autoAddCss=!1,$1.add(c);return}let e=c.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",v0),e.innerHTML=N0.css();let s=c.head.childNodes,a=null;for(let n=s.length-1;n>-1;n--){let o=s[n],t=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(a=o)}c.head.insertBefore(e,a),l.autoAddCss=!1,$1.add(c)}var O7=c=>c.prefix!==void 0&&c.iconName!==void 0,_7=(c,l)=>O7(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},B7=(()=>{class c{stackItemSize=y2("1x");size=y2();_effect=Y1(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(s){return new(s||c)};static \u0275dir=f3({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),H7=(()=>{class c{size=y2();classes=N2(()=>{let e=this.size(),s=e?{[`fa-${e}`]:!0}:{};return G2(H({},s),{"fa-stack":!0})});static \u0275fac=function(s){return new(s||c)};static \u0275cmp=K2({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(s,a){s&2&&p3(a.classes())},inputs:{size:[1,"size"]},ngContentSelectors:T7,decls:1,vars:0,template:function(s,a){s&1&&(d3(),L3(0))},encapsulation:2,changeDetection:0})}return c})(),I9=(()=>{class c{icon=w();title=w();animation=w();mask=w();flip=w();size=w();pull=w();border=w();inverse=w();symbol=w();rotate=w();fixedWidth=w();transform=w();a11yRole=w();renderedIconHTML=N2(()=>{let e=this.icon()??this.config.fallbackIcon;if(!e)return R7(),"";let s=this.findIconDefinition(e);if(!s)return"";let a=this.buildParams();F7(this.document,this.config);let n=b0(s,a);return this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))});document=v(k);sanitizer=v(f1);config=v(E7);iconLibrary=v(P7);stackItem=v(B7,{optional:!0});stack=v(H7,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(e){let s=_7(e,this.config.defaultPrefix);if("icon"in s)return s;let a=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return a??(D7(s),null)}buildParams(){let e=this.fixedWidth(),s={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof e=="boolean"?e:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},a=this.transform(),n=typeof a=="string"?y0.transform(a):a,o=this.mask(),t=o!=null?this.findIconDefinition(o):null,i={},r=this.a11yRole();r!=null&&(i.role=r);let z={};return s.rotate!=null&&!w0(s.rotate)&&(z["--fa-rotate-angle"]=`${s.rotate}`),{title:this.title(),transform:n,classes:I7(s),mask:t??void 0,symbol:this.symbol(),attributes:i,styles:z}}static \u0275fac=function(s){return new(s||c)};static \u0275cmp=K2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,a){s&2&&(u3("innerHTML",a.renderedIconHTML(),o3),z3("title",a.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(s,a){},encapsulation:2,changeDetection:0})}return c})();var F9=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275mod=x2({type:c});static \u0275inj=p2({})}return c})();var B9={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]};var H9={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]};var U9={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};var j9={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]};var W9={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"]};var q9={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var $9={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};var G9={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]};var V9={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};var X9={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};var Y9={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};export{j0 as a,o9 as b,t9 as c,i9 as d,r9 as e,I9 as f,F9 as g,B9 as h,H9 as i,U9 as j,j9 as k,W9 as l,q9 as m,$9 as n,G9 as o,V9 as p,X9 as q,Y9 as r};
