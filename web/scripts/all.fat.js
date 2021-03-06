/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssgradients-geolocation-input-inputtypes-prefixes-setclasses-teststyles !*/
!function(e,t,n){function a(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,l;for(var r in f)if(f.hasOwnProperty(r)){if(e=[],t=f[r],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=a(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],l=s.split("."),1===l.length?Modernizr[l[0]]=i:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=i),d.push((i?"":"no-")+l.join("-"))}}function o(e){var t=u.className,n=Modernizr._config.classPrefix||"";if(m&&(t=t.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),m?u.className.baseVal=t:u.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):m?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=s(m?"svg":"body"),e.fake=!0),e}function r(e,n,a,i){var o,r,d,f,c="modernizr",p=s("div"),m=l();if(parseInt(a,10))for(;a--;)d=s("div"),d.id=i?i[a]:c+(a+1),p.appendChild(d);return o=s("style"),o.type="text/css",o.id="s"+c,(m.fake?m:p).appendChild(o),m.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=c,m.fake&&(m.style.background="",m.style.overflow="hidden",f=u.style.overflow,u.style.overflow="hidden",u.appendChild(m)),r=n(p,e),m.fake?(m.parentNode.removeChild(m),u.style.overflow=f,u.offsetHeight):p.parentNode.removeChild(p),!!r}var d=[],f=[],c={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){f.push({name:e,fn:t,options:n})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr,Modernizr.addTest("geolocation","geolocation"in navigator);var p=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];c._prefixes=p;var u=t.documentElement,m="svg"===u.nodeName.toLowerCase();Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",a="",i=0,o=p.length-1;o>i;i++)e=0===i?"to ":"",a+=t+p[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(a+=t+"-webkit-"+n);var l=s("a"),r=l.style;return r.cssText=a,(""+r.backgroundImage).indexOf("gradient")>-1});var g=s("input"),h="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),v={};Modernizr.input=function(t){for(var n=0,a=t.length;a>n;n++)v[t[n]]=!!(t[n]in g);return v.list&&(v.list=!(!s("datalist")||!e.HTMLDataListElement)),v}(h);var y="search tel url email datetime date month week time datetime-local number range color".split(" "),w={};Modernizr.inputtypes=function(e){for(var a,i,o,s=e.length,l="1)",r=0;s>r;r++)g.setAttribute("type",a=e[r]),o="text"!==g.type&&"style"in g,o&&(g.value=l,g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&g.style.WebkitAppearance!==n?(u.appendChild(g),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(g,null).WebkitAppearance&&0!==g.offsetHeight,u.removeChild(g)):/^(search|tel)$/.test(a)||(o=/^(url|email)$/.test(a)?g.checkValidity&&g.checkValidity()===!1:g.value!=l)),w[e[r]]=!!o;return w}(y);c.testStyles=r;i(),o(d),delete c.addTest,delete c.addAsyncTest;for(var b=0;b<Modernizr._q.length;b++)Modernizr._q[b]();e.Modernizr=Modernizr}(window,document);/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/*! jQuery UI - v1.12.1 - 2018-09-30
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,a)}function a(){t.datepicker._isDisabledDatepicker(p.inline?p.dpDiv.parent()[0]:p.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function o(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.1";var l=0,h=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(o){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,a,o,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],a=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new a(t,e)},t.extend(a,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),o=new i,o.options=t.widget.extend({},o.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,a=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=a,e}}(),void 0):(r[e]=s,void 0)}),a.prototype=t.widget.extend(o,{widgetEventPrefix:n?o.widgetEventPrefix||e:e},r,{constructor:a,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,a,i._proto)}),delete n._childConstructors):i._childConstructors.push(a),t.widget.bridge(e,a),a},t.widget.extend=function(e){for(var i,s,n=h.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var a="string"==typeof n,o=h.call(arguments,1),r=this;return a?this.length||"instance"!==n?this.each(function(){var i,a=t.data(this,s);return"instance"===n?(r=a,!1):a?t.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):r=void 0:(o.length&&(n=t.widget.extend.apply(null,[n].concat(o))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,a,o=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(o={},s=e.split("."),e=s.shift(),s.length){for(n=o[e]=t.widget.extend({},this.options[e]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];o[e]=i}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,a){var o,r;for(r=0;i.length>r;r++)o=n.classesElementLookup[i[r]]||t(),o=e.add?t(t.unique(o.get().concat(e.element.get()))):t(o.not(e.element).get()),n.classesElementLookup[i[r]]=o,s.push(i[r]),a&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,a={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return a.element.toggleClass(this._classes(a),s),this},_on:function(e,i,s){var n,a=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,o){function r(){return e||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+a.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,a,o=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(t.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),o=!t.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){t(this)[e](),a&&a.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,a=Math.max,o=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return t("body").append(s),e=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,a=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:a?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),k=(n.collision||"flip").split(" "),w={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),w[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(w.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),D=h+d+i(this,"marginRight")+y.width,x=c+_+i(this,"marginBottom")+y.height,C=t.extend({},m),I=e(w.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?C.left-=h:"center"===n.my[0]&&(C.left-=h/2),"bottom"===n.my[1]?C.top-=c:"center"===n.my[1]&&(C.top-=c/2),C.left+=I[0],C.top+=I[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[k[e]]&&t.ui.position[k[e]][i](C,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:x,offset:[u[0]+I[0],u[1]+I[1]],my:n.my,at:n.at,within:b,elem:l})}),n.using&&(r=function(t){var e=g.left-C.left,i=e+p-h,s=g.top-C.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:C.left,top:C.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};h>p&&p>o(e+i)&&(u.horizontal="center"),c>f&&f>o(s+r)&&(u.vertical="middle"),u.important=a(o(e),o(i))>a(o(s),o(r))?"horizontal":"vertical",n.using.call(this,t,u)}),l.offset(t.extend(C,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-o-n;e.collisionWidth>o?l>0&&0>=h?(i=t.left+l+e.collisionWidth-o-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+o-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-o-n;e.collisionHeight>o?l>0&&0>=h?(i=t.top+l+e.collisionHeight-o-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+o-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-a,(0>i||o(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>o(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-a,(0>s||o(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>o(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.focusable=function(i,s){var n,a,o,r,l,h=i.nodeName.toLowerCase();return"area"===h?(n=i.parentNode,a=n.name,i.href&&a&&"map"===n.nodeName.toLowerCase()?(o=t("img[usemap='#"+a+"']"),o.length>0&&o.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(h)?(r=!i.disabled,r&&(l=t(i).closest("fieldset")[0],l&&(r=!l.disabled))):r="a"===h?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,a){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),a&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?o["inner"+i].call(this):this.each(function(){t(this).css(a,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?o["outer"+i].call(this,e):this.each(function(){t(this).css(a,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,a;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),a=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(a.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var c=!1;t(document).on("mouseup",function(){c=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!c){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),c=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,c=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,a=t.ui[e].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,a=t.plugins[e];if(a&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)t.options[a[n][0]]&&a[n][1].apply(t.element,i)}},t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(a).width()-this.helperProportions.width-this.margins.left,(t(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(l=this.originalPageX),"x"===o.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&t.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},e.target=a.currentItem[0],a._mouseCapture(e,!0),a._mouseStart(e,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",e),s.dropped=a.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(e),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",e,a._uiHash(a)),a._mouseStop(e,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-e.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-e.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?a=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(a=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?a=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(a=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,a,o,r,l,h,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)l=s.snapElements[d].left-s.margins.left,h=l+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,l-g>_||m>h+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),a=g>=Math.abs(u-v),o=g>=Math.abs(l-_),r=g>=Math.abs(h-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),a=g>=Math.abs(u-b),o=g>=Math.abs(l-m),r=g>=Math.abs(h-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||a||o||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,a=s.options,o=t.makeArray(t(a.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(t(o[0]).css("zIndex"),10)||0,t(o).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+o.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&u(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var u=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var a=(e.positionAbs||e.position.absolute).left+e.margins.left,o=(e.positionAbs||e.position.absolute).top+e.margins.top,r=a+e.helperProportions.width,l=o+e.helperProportions.height,h=i.offset.left,c=i.offset.top,u=h+i.proportions().width,d=c+i.proportions().height;switch(s){case"fit":return a>=h&&u>=r&&o>=c&&d>=l;case"intersect":return a+e.helperProportions.width/2>h&&u>r-e.helperProportions.width/2&&o+e.helperProportions.height/2>c&&d>l-e.helperProportions.height/2;case"pointer":return t(n.pageY,c,i.proportions().height)&&t(n.pageX,h,i.proportions().width);case"touch":return(o>=c&&d>=o||l>=c&&d>=l||c>o&&l>d)&&(a>=h&&u>=a||r>=h&&u>=r||h>a&&r>u);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,a=t.ui.ddmanager.droppables[e.options.scope]||[],o=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||e&&!a[s].accept.call(a[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue t}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&u(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=u(e,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===n}),a.length&&(s=t(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,a,o=this.options,r=this;if(this.handles=o.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,a=t("<div>"),this._addClass(a,"ui-resizable-handle "+n),a.css({zIndex:o.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(a);this._renderAxis=function(e){var i,s,n,a;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,a),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=a&&a[1]?a[1]:"se")}),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=t(a.containment).scrollLeft()||0,s+=t(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,a=this.axis,o=e.pageX-n.left||0,r=e.pageY-n.top||0,l=this._change[a];return this._updatePrevProperties(),l?(i=l.apply(this,[e,o,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,a,o,r,l,h=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,a=s?0:c.sizeDiff.width,o={width:c.helper.width()-a,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,l=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,h.animate||this.element.css(t.extend(o,{top:l,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!h.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||t)&&(e=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,e>a.minWidth&&(a.minWidth=e),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,a=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,o=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,h=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return a&&(t.width=e.minWidth),o&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),a&&h&&(t.left=r-e.minWidth),s&&h&&(t.left=r-e.maxWidth),o&&c&&(t.top=l-e.minHeight),n&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,l={width:i.size.width-r,height:i.size.height-o},h=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,c&&h?{top:c,left:h}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,a,o,r,l=t(this).resizable("instance"),h=l.options,c=l.element,u=h.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(l.containerElement=t(d),/document/.test(u)||u===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=l._num(e.css("padding"+s))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=l.containerOffset,n=l.containerSize.height,a=l.containerSize.width,o=l._hasScroll(d,"left")?d.scrollWidth:a,r=l._hasScroll(d)?d.scrollHeight:n,l.parentData={element:d,left:s.left,top:s.top,width:o,height:r}))},resize:function(e){var i,s,n,a,o=t(this).resizable("instance"),r=o.options,l=o.containerOffset,h=o.position,c=o._aspectRatio||e.shiftKey,u={top:0,left:0},d=o.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=l),h.left<(o._helper?l.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-u.left),c&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?l.left:0),h.top<(o._helper?l.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top),c&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?l.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-u.left:o.offset.left-l.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-u.top:o.offset.top-l.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,c&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,c&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,a=e.containerElement,o=t(e.helper),r=o.offset(),l=o.outerWidth()-e.sizeDiff.width,h=o.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(a.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h}),e._helper&&!i.animate&&/static/.test(a.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};
t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},a=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(a,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,h=l[0]||1,c=l[1]||1,u=Math.round((n.width-a.width)/h)*h,d=Math.round((n.height-a.height)/c)*c,p=a.width+u,f=a.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=l,_&&(p+=h),v&&(f+=c),g&&(p-=h),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-u):((0>=f-c||0>=p-h)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=o.top-d):(f=c-e.height,i.size.height=f,i.position.top=o.top+a.height-f),p-h>0?(i.size.width=p,i.position.left=o.left-u):(p=h-e.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),t.ui.resizable,t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),s=i.offset(),n={left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,right:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(s.$element,"ui-selected"),s.selected=!1,i._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=e.pageX,l=e.pageY;return a>r&&(i=r,r=a,a=i),o>l&&(i=l,l=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:l-o}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),h=!1,c={};i&&i.element!==s.element[0]&&(c.left=i.left+s.elementPos.left,c.right=i.right+s.elementPos.left,c.top=i.top+s.elementPos.top,c.bottom=i.bottom+s.elementPos.top,"touch"===n.tolerance?h=!(c.left>r||a>c.right||c.top>l||o>c.bottom):"fit"===n.tolerance&&(h=c.left>a&&r>c.right&&c.top>o&&l>c.bottom),h?(i.selected&&(s._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(s._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(s._addClass(i.$element,"ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,s._addClass(i.$element,"ui-selected"),i.selected=!0):(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=!1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,a.widgetName+"-item")===a?(s=t(this),!1):void 0}),t.data(e.target,a.widgetName+"-item")===a&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=t("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:e.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:e.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(e.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),e.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=t.left,o=a+t.width,r=t.top,l=r+t.height,h=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+h>r&&l>s+h,d="y"===this.options.axis||e+c>a&&o>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&l>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),a=s&&n;return a?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,a,o,r=[],l=[],h=this._connectWith();if(h&&e)for(s=h.length-1;s>=0;s--)for(a=t(h[s],this.document[0]),n=a.length-1;n>=0;n--)o=t.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&l.push([t.isFunction(o.options.items)?o.options.items.call(o.element):t(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(l.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=l.length-1;s>=0;s--)l[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,a,o,r,l,h,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(u.push([t.isFunction(a.options.items)?a.options.items.call(a.element[0],e,{item:this.currentItem}):t(a.options.items,a.element),a]),this.containers.push(a));for(i=u.length-1;i>=0;i--)for(o=u[i][1],r=u[i][0],s=0,h=r.length;h>s;s++)l=t(r[s]),l.data(this.widgetName+"-item",o),c.push({item:l,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,n,a,o,r,l,h,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,c=d.floating||this._isFloating(this.currentItem),o=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(l=this.items[s].item.offset()[o],h=!1,e[u]-l>this.items[s][r]/2&&(h=!0),n>Math.abs(e[u]-l)&&(n=Math.abs(e[u]-l),a=this.items[s],this.direction=h?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(e,a,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,a=e.pageX,o=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))
},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),a=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(t(e.target).attr("tabIndex",-1),t(a).attr("tabIndex",0),t(a).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,a=this.active,o=t(e.currentTarget),r=o[0]===a[0],l=r&&n.collapsible,h=l?t():o.next(),c=a.next(),u={oldHeader:a,oldPanel:c,newHeader:l?t():o,newPanel:h};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=l?!1:this.headers.index(o),this.active=r?t():o,this._toggle(u),this._removeClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=a.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(o,"ui-accordion-header-collapsed")._addClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=o.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(o.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,a,o=this,r=0,l=t.css("box-sizing"),h=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=h&&c.down||c,d=function(){o._toggleComplete(i)};return"number"==typeof u&&(a=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,a=a||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:a,easing:n,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(this.showProps,{duration:a,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===l&&(r+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}}),void 0):e.animate(this.hideProps,a,n,d):t.animate(this.showProps,a,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,a,o=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:o=!1,s=this.previousFilter||"",a=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,a,o=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);o._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);o._isDivider(e)&&o._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),a=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(a,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a||!o&&this._isContentEditable(this.element),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var a=t.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:e=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case a.UP:e=!0,this._keyEvent("previous",n);break;case a.DOWN:e=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var d=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(s,n){var a,o={};return n?"controlgroupLabel"===s?(a=e.element.find(n),a.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(a,null,"ui-widget ui-widget-content ui-state-default"),i=i.concat(a.get()),void 0):(t.fn[s]&&(o=e["_"+s+"Options"]?e["_"+s+"Options"]("middle"):{classes:{}},e.element.find(n).each(function(){var n=t(this),a=n[s]("instance"),r=t.widget.extend({},o);if("button"!==s||!n.parent(".ui-spinner").length){a||(a=n[s]()[s]("instance")),a&&(r.classes=e._resolveClassesValues(r.classes,a)),n[s](r);var l=n[s]("widget");t.data(l[0],"ui-controlgroup-data",a?a:n[s]("instance")),i.push(l[0])}})),void 0):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),s=i.data("ui-controlgroup-data");s&&s[e]&&s[e]()})},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var s={};return t.each(e,function(n){var a=i.options.classes[n]||"";a=t.trim(a.replace(d,"")),s[n]=(a+" "+e[n]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?(this._callChildMethod(e?"disable":"enable"),void 0):(this.refresh(),void 0)},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,s){var n=e[s]().data("ui-controlgroup-data");if(n&&i["_"+n.widgetName+"Options"]){var a=i["_"+n.widgetName+"Options"](1===e.length?"only":s);a.classes=i._resolveClassesValues(a.classes,n),n.element[n.widgetName](a)}else i._updateCornerClass(e[s](),s)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,n=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(n.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(n.disabled=e),n},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e,void 0):(this.refresh(),void 0)):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)
},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var s="iconPosition"!==e,n=s?this.options.iconPosition:i,a="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(n),a?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?(this._super("showLabel",e),void 0):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var p;t.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return o(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,a;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),a=this._newInst(t(e),n),a.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,a):n&&this._inlineDatepicker(e,a)},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=t("<span class='"+this._appendClass+"'>"+o+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(a?t("<img/>").attr({src:a,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,a=new Date(2009,11,20),o=this._get(t,"dateFormat");o.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},a.setMonth(e(this._get(t,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(e(this._get(t,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),t.input.attr("size",this._formatDate(t,a).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,a){var r,l,h,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),o(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(l=document.documentElement.clientWidth,h=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,h/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),p===n&&(p=null))},_enableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,a,r,l,h=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):h?"all"===i?t.extend({},h.settings):this._get(h,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),h&&(this._curInst===h&&this._hideDatepicker(),a=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(h,"min"),l=this._getMinMaxDate(h,"max"),o(h.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(h.settings.minDate=this._formatDate(h,r)),null!==l&&void 0!==n.dateFormat&&void 0===n.maxDate&&(h.settings.maxDate=this._formatDate(h,l)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),h),this._autoSize(h),this._setDate(h,a),this._updateAlternate(h),this._updateDatepicker(h)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,a=t.datepicker._getInst(e.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),o=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",a.dpDiv),n[0]&&t.datepicker._selectDay(e.target,a.selectedMonth,a.selectedYear,n[0]),i=t.datepicker._get(a,"onSelect"),i?(s=t.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),o=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),o=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),o=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),o=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),o=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),o=e.ctrlKey||e.metaKey;break;default:o=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):o=!1;o&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var s,n,a,r,l,h,c;s=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),a=n?n.apply(e,[e,s]):{},a!==!1&&(o(s.settings,a),s.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),l={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),l=t.datepicker._checkOffset(s,l,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),s.inline||(h=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?s.dpDiv.show(h,t.datepicker._get(s,"showOptions"),c):s.dpDiv[h||"show"](h?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))}},_updateDatepicker:function(e){this.maxRows=4,p=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],o=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&a.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",o*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),a=e.dpDiv.outerHeight(),o=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),h=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-o:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>l&&l>n?Math.abs(i.left+n-l):0),i.top-=Math.min(i.top,i.top+a>h&&h>a?Math.abs(a+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,a,o=this._curInst;!o||e&&o!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[i]||t.effects[i])?o.dpDiv.hide(i,t.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(e,i,s,n){var a,o=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=t("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(e,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,a=this._get(e,"altField");a&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(a).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,l=0,h=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},k=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(l).match(a);if(!o)throw"Missing number at position "+l;return l+=o[0].length,parseInt(o[0],10)},w=function(e,s,n){var a=-1,o=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(o,function(t,e){var s=e[1];return i.substr(l,s.length).toLowerCase()===s.toLowerCase()?(a=e[0],l+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+l},D=function(){if(i.charAt(l)!==e.charAt(n))throw"Unexpected literal at position "+l;l++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?D():b=!1;else switch(e.charAt(n)){case"d":_=k("d");break;case"D":w("D",u,d);break;case"o":v=k("o");break;case"m":m=k("m");break;case"M":m=w("M",p,f);break;case"y":g=k("y");break;case"@":r=new Date(k("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((k("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?D():b=!0;break;default:D()}if(i.length>l&&(o=i.substr(l),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(a=this._getDaysInMonth(g,m-1),a>=_)break;m++,_-=a}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,l=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},h=function(t,e,i){var s=""+e;if(l(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return l(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||l("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=h("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,a);break;case"o":u+=h("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),o,r);break;case"y":u+=l("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),a=n,o=this._getFormatConfig(t);try{a=this.parseDate(i,s,o)||n}catch(r){s=e?"":s}t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),t.currentDay=s?a.getDate():0,t.currentMonth=s?a.getMonth():0,t.currentYear=s?a.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},a=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),l=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=l.exec(i);h;){switch(h[2]||"d"){case"d":case"D":r+=parseInt(h[1],10);break;case"w":case"W":r+=7*parseInt(h[1],10);break;case"m":case"M":o+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(a,o))}h=l.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,a=t.selectedYear,o=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=o.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=o.getMonth(),t.drawYear=t.selectedYear=t.currentYear=o.getFullYear(),n===t.selectedMonth&&a===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,a,o,r,l,h,c,u,d,p,f,g,m,_,v,b,y,k,w,D,x,C,I,M,T,P,S,A,N,O,H,z,F,E,W,Y,R=new Date,L=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),B=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),K=this._get(t,"hideIfNoPrevNext"),q=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),$=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),J=this._getMinMaxDate(t,"min"),Q=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),Q)for(e=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth()-U[0]*U[1]+1,Q.getDate())),e=J&&J>e?J:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-$,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>":K?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=q?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+$,1)),this._getFormatConfig(t)):n,a=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>":K?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>",o=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:L,o=q?this.formatDate(o,r,this._getFormatConfig(t)):o,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",h=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(B?l:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(B?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",w=0;U[0]>w;w++){for(D="",this.maxRows=4,x=0;U[1]>x;x++){if(C=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",M="",X){if(M+="<div class='ui-datepicker-group",U[1]>1)switch(x){case 0:M+=" ui-datepicker-group-first",I=" ui-corner-"+(B?"right":"left");
break;case U[1]-1:M+=" ui-datepicker-group-last",I=" ui-corner-"+(B?"left":"right");break;default:M+=" ui-datepicker-group-middle",I=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===w?B?a:s:"")+(/all|right/.test(I)&&0===w?B?s:a:"")+this._generateMonthYearHeader(t,Z,te,J,Q,w>0||x>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",T=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",k=0;7>k;k++)P=(k+c)%7,T+="<th scope='col'"+((k+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[P]+"'>"+p[P]+"</span></th>";for(M+=T+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),A=(this._getFirstDayOfMonth(te,Z)-c+7)%7,N=Math.ceil((A+S)/7),O=X?this.maxRows>N?this.maxRows:N:N,this.maxRows=O,H=this._daylightSavingAdjust(new Date(te,Z,1-A)),z=0;O>z;z++){for(M+="<tr>",F=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",k=0;7>k;k++)E=m?m.apply(t.input?t.input[0]:null,[H]):[!0,""],W=H.getMonth()!==Z,Y=W&&!v||!E[0]||J&&J>H||Q&&H>Q,F+="<td class='"+((k+c+6)%7>=5?" ui-datepicker-week-end":"")+(W?" ui-datepicker-other-month":"")+(H.getTime()===C.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===H.getTime()&&b.getTime()===C.getTime()?" "+this._dayOverClass:"")+(Y?" "+this._unselectableClass+" ui-state-disabled":"")+(W&&!_?"":" "+E[1]+(H.getTime()===G.getTime()?" "+this._currentClass:"")+(H.getTime()===L.getTime()?" ui-datepicker-today":""))+"'"+(W&&!_||!E[2]?"":" title='"+E[2].replace(/'/g,"&#39;")+"'")+(Y?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(W&&!_?"&#xa0;":Y?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===L.getTime()?" ui-state-highlight":"")+(H.getTime()===G.getTime()?" ui-state-active":"")+(W?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);M+=F+"</tr>"}Z++,Z>11&&(Z=0,te++),M+="</tbody></table>"+(X?"</div>"+(U[0]>0&&x===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),D+=M}y+=D}return y+=h,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,a,o,r){var l,h,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(a||!m)y+="<span class='ui-datepicker-month'>"+o[e]+"</span>";else{for(l=s&&s.getFullYear()===i,h=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!l||c>=s.getMonth())&&(!h||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!a&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",a||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!a&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),a=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),o=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,a)));t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),a=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(t,a)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),a=this._getMinMaxDate(t,"max"),o=null,r=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!a||e.getTime()<=a.getTime())&&(!o||e.getFullYear()>=o)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new s,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),a=Math.max.apply(null,n);return a>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",a+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.trigger("focus")}),e.preventDefault()):(this._delay(function(){s.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,a;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,a={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel,icons:s.icons,text:s.text},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,delete s.icons,"boolean"==typeof s.text&&delete s.text,t("<button></button>",s).button(a).appendTo(e.uiButtonSet).on("click",function(){n.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,a){var o=a.offset.left-i.document.scrollLeft(),r=a.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(a))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,a){var o=i.uiDialog.offset(),r=o.left-i.document.scrollLeft(),l=o.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(l>=0?"+":"")+l,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(a))}}).css("position",a)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,i){var s,n,a=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=a.is(":data(ui-draggable)"),s&&!i&&a.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(n=a.is(":data(ui-resizable)"),n&&!i&&a.resizable("destroy"),n&&"string"==typeof i&&a.resizable("option","handles",i),n||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),void 0)},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,s=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(s).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var s=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger("focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var s=this,n="";t.each(i,function(i,a){var o;a.optgroup!==n&&(o=t("<li>",{text:a.optgroup}),s._addClass(o,"ui-selectmenu-optgroup","ui-menu-divider"+(a.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),o.appendTo(e),n=a.optgroup),s._renderItemData(e,a)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var s=t("<li>"),n=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(s,null,"ui-state-disabled"),this._setText(n,i.label),s.append(n).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),n+=":not(.ui-state-disabled)"),s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0),s.length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return t===!1?(this.button.css("width",""),void 0):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t),void 0)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,s=[];e.each(function(e,n){s.push(i._parseOption(t(n),e))}),this.items=s},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),a="<span tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)
},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,l,h,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,this._addClass(a,null,"ui-state-active"),a.trigger("focus"),l=a.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-a.width()/2,top:e.pageY-l.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,a=this.value(),o=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),a=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),o[e]=i),i!==a&&(s=this._trigger("slide",t,this._uiHash(e,i,o)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),c["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](c,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](c,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:100-i+"%"},r.animate),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,a,o=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,o),i===!1))return}switch(a=this.options.step,s=n=this._hasMultipleValues()?this.values(o):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(e,o,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);null!=n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var e=this.element[0]===t.ui.safeActiveElement(this.document[0]);e||(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,s,n;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,this.element.val(this._format(i)),void 0):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(s=this.buttons.first().find(".ui-icon"),this._removeClass(s,null,this.options.icons.up),this._addClass(s,null,e.up),n=this.buttons.last().find(".ui-icon"),this._removeClass(n,null,this.options.icons.down),this._addClass(n,null,e.down)),this._super(t,e),void 0)},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null===t?!1:t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(r(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.uiBackCompat!==!1&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,s;i=e.href.replace(t,""),s=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return e.hash.length>1&&i===s}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each(function(i,n){return t(n).attr("aria-controls")===s?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=i?!1:0)),!i&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e),void 0)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,s){var n,a,o,r=t(s).uniqueId().attr("id"),l=t(s).closest("li"),h=l.attr("aria-controls");e._isLocal(s)?(n=s.hash,o=n.substring(1),a=e.element.find(e._sanitizeSelector(n))):(o=l.attr("aria-controls")||t({}).uniqueId()[0].id,n="#"+o,a=e.element.find(n),a.length||(a=e._createPanel(o),a.insertAfter(e.panels[i-1]||e.tablist)),a.attr("aria-live","polite")),a.length&&(e.panels=e.panels.add(a)),h&&l.data("ui-tabs-aria-controls",h),l.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,s,n;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),n=0;s=this.tabs[n];n++)i=t(s),e===!0||-1!==t.inArray(n,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,e===!0)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,l=r?t():this._getPanelForTab(a),h=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:h,newTab:r?t():a,newPanel:l};e.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?t():a,this.xhr&&this.xhr.abort(),h.length||l.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),l.length&&this.load(this.tabs.index(a),e),this._toggle(e,c))},_toggle:function(e,i){function s(){a.running=!1,a._trigger("activate",e,i)}function n(){a._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){a._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o},l=function(t,e){"abort"===e&&s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),o.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr};this._isLocal(a[0])||(this.xhr=t.ajax(this._ajaxSettings(a,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(n,"ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(t,e,n){setTimeout(function(){o.html(t),s._trigger("load",i,r),l(n,e)},1)}).fail(function(t,e){setTimeout(function(){l(t,e)},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,a){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:a},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),t.uiBackCompat!==!1&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var s=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s.element[0],e.close(n,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(e,s),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,a=e?e.type:null;return"string"==typeof s||s.nodeType||s.jquery?this._open(e,t,s):(i=s.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=a),this._open(e,t,i))})}),i&&this._open(e,t,i),void 0)},_open:function(e,i,s){function n(t){h.of=t,o.is(":hidden")||o.position(h)}var a,o,r,l,h=t.extend({},this.options.position);if(s){if(a=this._find(i))return a.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),a=this._tooltip(i),o=a.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),l=t("<div>").html(o.find(".ui-tooltip-content").html()),l.removeAttr("name").find("[name]").removeAttr("name"),l.removeAttr("id").find("[id]").removeAttr("id"),l.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:n}),n(e)):o.position(t.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){o.is(":visible")&&(n(h.of),clearInterval(r))},t.fx.interval)),this._trigger("open",e,{tooltip:o})}},_registerCloseHandlers:function(e,i){var s={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(s.mouseleave="close"),e&&"focusin"!==e.type||(s.focusout="close"),this._on(!0,i,s)},close:function(e){var i,s=this,n=t(e?e.currentTarget:this.element),a=this._find(n);return a?(i=a.tooltip,a.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),a.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]
}),a.closing=!0,this._trigger("close",e,{tooltip:i}),a.hiding||(a.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),s=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(s,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur"),a=s.element;n.target=n.currentTarget=a[0],e.close(n,!0),t("#"+i).remove(),a.data("ui-tooltip-title")&&(a.attr("title")||a.attr("title",a.data("ui-tooltip-title")),a.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),t.uiBackCompat!==!1&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip;var f="ui-effects-",g="ui-effects-style",m="ui-effects-animated",_=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=h(),n=s._rgba=[];return i=i.toLowerCase(),f(l,function(t,a){var o,r=a.re.exec(i),l=r&&a.parse(r),h=a.space||"rgba";return l?(o=s[h](l),s[c[h].cache]=o[c[h].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=h.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=t.extend(h.prototype,{parse:function(n,o,r,l){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,l],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof h?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=h(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=h(t),n=s._space(),a=c[n],o=0===this.alpha()?h("transparent"):this,r=o[a.cache]||a.to(o._rgba),l=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],h=s[a],c=u[n.type]||{};null!==h&&(null===o?l[a]=h:(c.mod&&(h-o>c.mod/2?o+=c.mod:o-h>c.mod/2&&(o-=c.mod)),l[a]=i((h-o)*e+o,n)))}),this[n](l)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=h(e)._rgba;return h(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),l=Math.min(s,n,a),h=r-l,c=r+l,u=.5*c;return e=l===r?0:s===r?60*(n-a)/h+360:n===r?60*(a-s)/h+120:60*(s-n)/h+240,i=0===h?0:.5>=u?h/c:h/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,l=n.to,c=n.from;h.fn[s]=function(s){if(l&&!this[o]&&(this[o]=l(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=h(c(d)),n[o]=d,n):h(d)},f(a,function(e,i){h.fn[e]||(h.fn[e]=function(n){var a,o=t.type(n),l="alpha"===e?this._hsla?"hsla":"rgba":s,h=this[l](),c=h[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),h[i.idx]=n,this[l](h)))})})}),h.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=h(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(l){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=h(e.elem,i),e.end=h(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},h.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(_),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(e,i){var s,a,o={};for(s in i)a=i[s],e[s]!==a&&(n[s]||(t.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(_.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,a,o,r){var l=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",h=l.children?o.find("*").addBack():o;h=h.map(function(){var i=t(this);return{el:i,start:e(this)}}),a=function(){t.each(s,function(t,e){n[e]&&o[e+"Class"](n[e])})},a(),h=h.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),h=h.map(function(){var e=this,i=t.Deferred(),s=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,h.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,a)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}function s(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,a=n.exec(t)||["",0,i,s,0];return{top:parseFloat(a[1])||0,right:"auto"===a[2]?i:parseFloat(a[2]),bottom:"auto"===a[3]?s:parseFloat(a[3]),left:parseFloat(a[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(m)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,e){for(var i=0,s=e.length;s>i;i++)null!==e[i]&&t.data(f+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,s=0,n=e.length;n>s;s++)null!==e[s]&&(i=t.data(f+e[s]),t.css(e[s],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).trigger("focus"),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(g,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(g)||"",t.removeData(g)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(e){var i,s=e.css("position"),n=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(s)&&(s="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(f+"placeholder",i)),e.css({position:s,left:n.left,top:n.top}),i},removePlaceholder:function(t){var e=f+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(m),t.effects.cleanUp(r),"hide"===s.mode&&r.hide(),o()}function o(){t.isFunction(l)&&l.call(r[0]),t.isFunction(e)&&e()}var r=t(this);s.mode=c.shift(),t.uiBackCompat===!1||a?"none"===s.mode?(r[h](),o()):n.call(r[0],s,i):(r.is(":hidden")?"hide"===h:"show"===h)?(r[h](),o()):n.call(r[0],s,o)}var s=e.apply(this,arguments),n=t.effects.effect[s.effect],a=n.mode,o=s.queue,r=o||"fx",l=s.complete,h=s.mode,c=[],u=function(e){var i=t(this),s=t.effects.mode(i,h)||a;i.data(m,!0),c.push(s),a&&("show"===s||s===a&&"hide"===s)&&i.show(),a&&"none"===s||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!n?h?this[h](s.duration,l):this.each(function(){l&&l.call(this)}):o===!1?this.each(u).each(i):this.queue(r,u).queue(r,i)},show:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||"boolean"==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer:function(e,i){var s=t(this),n=t(e.to),a="fixed"===n.css("position"),o=t("body"),r=a?o.scrollTop():0,l=a?o.scrollLeft():0,h=n.offset(),c={top:h.top-r,left:h.left-l,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-l,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();var v=t.effects;t.effects.define("blind","hide",function(e,i){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=t(this),a=e.direction||"up",o=n.cssClip(),r={clip:t.extend({},o)},l=t.effects.createPlaceholder(n);r.clip[s[a][0]]=r.clip[s[a][1]],"show"===e.mode&&(n.cssClip(r.clip),l&&l.css(t.effects.clipToBox(r)),r.clip=o),l&&l.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var s,n,a,o=t(this),r=e.mode,l="hide"===r,h="show"===r,c=e.direction||"up",u=e.distance,d=e.times||5,p=2*d+(h||l?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",_="up"===c||"left"===c,v=0,b=o.queue().length;for(t.effects.createPlaceholder(o),a=o.css(m),u||(u=o["top"===m?"outerHeight":"outerWidth"]()/3),h&&(n={opacity:1},n[m]=a,o.css("opacity",0).css(m,_?2*-u:2*u).animate(n,f,g)),l&&(u/=Math.pow(2,d-1)),n={},n[m]=a;d>v;v++)s={},s[m]=(_?"-=":"+=")+u,o.animate(s,f,g).animate(n,f,g),u=l?2*u:u/2;l&&(s={opacity:0},s[m]=(_?"-=":"+=")+u,o.animate(s,f,g)),o.queue(i),t.effects.unshift(o,b,p+1)}),t.effects.define("clip","hide",function(e,i){var s,n={},a=t(this),o=e.direction||"vertical",r="both"===o,l=r||"horizontal"===o,h=r||"vertical"===o;s=a.cssClip(),n.clip={top:h?(s.bottom-s.top)/2:s.top,right:l?(s.right-s.left)/2:s.right,bottom:h?(s.bottom-s.top)/2:s.bottom,left:l?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(a),"show"===e.mode&&(a.cssClip(n.clip),n.clip=s),a.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var s,n=t(this),a=e.mode,o="show"===a,r=e.direction||"left",l="up"===r||"down"===r?"top":"left",h="up"===r||"left"===r?"-=":"+=",c="+="===h?"-=":"+=",u={opacity:0};t.effects.createPlaceholder(n),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,u[l]=h+s,o&&(n.css(u),u[l]=c+s,u.opacity=1),n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),i()}var a,o,r,l,h,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),_=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/u),b=[];for(a=0;u>a;a++)for(l=m.top+a*v,c=a-(u-1)/2,o=0;d>o;o++)r=m.left+o*_,h=o-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*_,top:-a*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:_,height:v,left:r+(g?h*_:0),top:l+(g?c*v:0),opacity:g?0:1}).animate({left:r+(g?0:h*_),top:l+(g?0:c*v),opacity:g?1:0},e.duration||500,e.easing,s)}),t.effects.define("fade","toggle",function(e,i){var s="show"===e.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var s=t(this),n=e.mode,a="show"===n,o="hide"===n,r=e.size||15,l=/([0-9]+)%/.exec(r),h=!!e.horizFirst,c=h?["right","bottom"]:["bottom","right"],u=e.duration/2,d=t.effects.createPlaceholder(s),p=s.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],_=s.queue().length;l&&(r=parseInt(l[1],10)/100*m[o?0:1]),f.clip[c[0]]=r,g.clip[c[0]]=r,g.clip[c[1]]=0,a&&(s.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),s.queue(function(i){d&&d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i()}).animate(f,u,e.easing).animate(g,u,e.easing).queue(i),t.effects.unshift(s,_,4)}),t.effects.define("highlight","show",function(e,i){var s=t(this),n={backgroundColor:s.css("backgroundColor")};"hide"===e.mode&&(n.opacity=0),t.effects.saveStyle(s),s.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var s,n,a,o=t(this),r=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,u="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=o.css("position"),g=o.position(),m=t.effects.scaledDimensions(o),_=e.from||m,v=e.to||t.effects.scaledDimensions(o,0);t.effects.createPlaceholder(o),"show"===c&&(a=_,_=v,v=a),n={from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:v.width/m.width}},("box"===d||"both"===d)&&(n.from.y!==n.to.y&&(_=t.effects.setTransition(o,l,n.from.y,_),v=t.effects.setTransition(o,l,n.to.y,v)),n.from.x!==n.to.x&&(_=t.effects.setTransition(o,h,n.from.x,_),v=t.effects.setTransition(o,h,n.to.x,v))),("content"===d||"both"===d)&&n.from.y!==n.to.y&&(_=t.effects.setTransition(o,r,n.from.y,_),v=t.effects.setTransition(o,r,n.to.y,v)),p&&(s=t.effects.getBaseline(p,m),_.top=(m.outerHeight-_.outerHeight)*s.y+g.top,_.left=(m.outerWidth-_.outerWidth)*s.x+g.left,v.top=(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=(m.outerWidth-v.outerWidth)*s.x+g.left),o.css(_),("content"===d||"both"===d)&&(l=l.concat(["marginTop","marginBottom"]).concat(r),h=h.concat(["marginLeft","marginRight"]),o.find("*[width]").each(function(){var i=t(this),s=t.effects.scaledDimensions(i),a={height:s.height*n.from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth:s.outerWidth*n.from.x},o={height:s.height*n.to.y,width:s.width*n.to.x,outerHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!==n.to.y&&(a=t.effects.setTransition(i,l,n.from.y,a),o=t.effects.setTransition(i,l,n.to.y,o)),n.from.x!==n.to.x&&(a=t.effects.setTransition(i,h,n.from.x,a),o=t.effects.setTransition(i,h,n.to.x,o)),u&&t.effects.saveStyle(i),i.css(a),i.animate(o,e.duration,e.easing,function(){u&&t.effects.restoreStyle(i)})})),o.animate(v,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=o.offset();0===v.opacity&&o.css("opacity",_.opacity),u||(o.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(o)),i()}})}),t.effects.define("scale",function(e,i){var s=t(this),n=e.mode,a=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==n?0:100),o=t.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDimensions(s,a,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(o.from.opacity=1,o.to.opacity=0),t.effects.effect.size.call(this,o,i)}),t.effects.define("puff","hide",function(e,i){var s=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,s,i)}),t.effects.define("pulsate","show",function(e,i){var s=t(this),n=e.mode,a="show"===n,o="hide"===n,r=a||o,l=2*(e.times||5)+(r?1:0),h=e.duration/l,c=0,u=1,d=s.queue().length;for((a||!s.is(":visible"))&&(s.css("opacity",0).show(),c=1);l>u;u++)s.animate({opacity:c},h,e.easing),c=1-c;s.animate({opacity:c},h,e.easing),s.queue(i),t.effects.unshift(s,d,l+1)}),t.effects.define("shake",function(e,i){var s=1,n=t(this),a=e.direction||"left",o=e.distance||20,r=e.times||3,l=2*r+1,h=Math.round(e.duration/l),c="up"===a||"down"===a?"top":"left",u="up"===a||"left"===a,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[c]=(u?"-=":"+=")+o,p[c]=(u?"+=":"-=")+2*o,f[c]=(u?"-=":"+=")+2*o,n.animate(d,h,e.easing);r>s;s++)n.animate(p,h,e.easing).animate(f,h,e.easing);n.animate(p,h,e.easing).animate(d,h/2,e.easing).queue(i),t.effects.unshift(n,g,l+1)}),t.effects.define("slide","show",function(e,i){var s,n,a=t(this),o={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,l=e.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,u=e.distance||a["top"===h?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(a),s=a.cssClip(),n=a.position()[h],d[h]=(c?-1:1)*u+n,d.clip=a.cssClip(),d.clip[o[l][1]]=d.clip[o[l][0]],"show"===r&&(a.cssClip(d.clip),a.css(h,d[h]),d.clip=s,d[h]=n),a.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});var v;t.uiBackCompat!==!1&&(v=t.effects.define("transfer",function(e,i){t(this).transfer(e,i)}))});/*!
 * jQuery Form Plugin
 * version: 2.69 (06-APR-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function(e) {
			e.preventDefault(); // <-- important
			$(this).ajaxSubmit({
				target: '#output'
			});
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	if (typeof options == 'function') {
		options = { success: options };
	}

	var action = this.attr('action');
	var url = (typeof action === 'string') ? $.trim(action) : '';
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
	}
	url = url || window.location.href || '';

	options = $.extend(true, {
		url:  url,
		success: $.ajaxSettings.success,
		type: this[0].getAttribute('method') || 'GET', // IE7 massage (see issue 57)
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	}, options);

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

	var n,v,a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
		for (n in options.data) {
			if(options.data[n] instanceof Array) {
				for (var k in options.data[n]) {
					a.push( { name: n, value: options.data[n][k] } );
				}
			}
			else {
				v = options.data[n];
				v = $.isFunction(v) ? v() : v; // if value is fn, invoke it
				a.push( { name: n, value: v } );
			}
		}
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a);

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else {
		options.data = q; // data is the query string for 'post'
	}

	var $form = this, callbacks = [];
	if (options.resetForm) {
		callbacks.push(function() { $form.resetForm(); });
	}
	if (options.clearForm) {
		callbacks.push(function() { $form.clearForm(); });
	}

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			var fn = options.replaceTarget ? 'replaceWith' : 'html';
			$(options.target)[fn](data).each(oldSuccess, arguments);
		});
	}
	else if (options.success) {
		callbacks.push(options.success);
	}

	options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
		var context = options.context || options;   // jQuery 1.4+ supports scope context 
		for (var i=0, max=callbacks.length; i < max; i++) {
			callbacks[i].apply(context, [data, status, xhr || $form, $form]);
		}
	};

	// are there files to upload?
	var fileInputs = $('input:file', this).length > 0;
	var mp = 'multipart/form-data';
	var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
	// 06-NOV-09: now defaulting to iframe mode if file input is detected
   if (options.iframe !== false && (fileInputs || options.iframe || multipart)) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive) {
		   $.get(options.closeKeepAlive, fileUpload);
		}
	   else {
		   fileUpload();
		}
   }
   else {
		$.ajax(options);
   }

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload() {
		var form = $form[0];

		if ($(':input[name=submit],:input[id=submit]', form).length) {
			// if there is an input with a name or id of 'submit' then we won't be
			// able to invoke the submit fn on the form (at least not x-browser)
			alert('Error: Form elements must not have name or id of "submit".');
			return;
		}
		
		var s = $.extend(true, {}, $.ajaxSettings, options);
		s.context = s.context || s;
		var id = 'jqFormIO' + (new Date().getTime()), fn = '_'+id;
		var $io = $('<iframe id="' + id + '" name="' + id + '" src="'+ s.iframeSrc +'" />');
		var io = $io[0];

		$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

		var xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function() {
				log('aborting upload...');
				var e = 'aborted';
				this.aborted = 1;
				$io.attr('src', s.iframeSrc); // abort op in progress
				xhr.error = e;
				s.error && s.error.call(s.context, xhr, 'error', e);
				g && $.event.trigger("ajaxError", [xhr, s, e]);
				s.complete && s.complete.call(s.context, xhr, 'error');
			}
		};

		var g = s.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) {
			$.event.trigger("ajaxStart");
		}
		if (g) {
			$.event.trigger("ajaxSend", [xhr, s]);
		}

		if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
			if (s.global) { 
				$.active--;
			}
			return;
		}
		if (xhr.aborted) {
			return;
		}

		var timedOut = 0;

		// add submitting element to data if we know it
		var sub = form.clk;
		if (sub) {
			var n = sub.name;
			if (n && !sub.disabled) {
				s.extraData = s.extraData || {};
				s.extraData[n] = sub.value;
				if (sub.type == "image") {
					s.extraData[n+'.x'] = form.clk_x;
					s.extraData[n+'.y'] = form.clk_y;
				}
			}
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		function doSubmit() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST') {
				form.setAttribute('method', 'POST');
			}
			if (form.getAttribute('action') != s.url) {
				form.setAttribute('action', s.url);
			}

			// ie borks in some cases when setting encoding
			if (! s.skipEncodingOverride) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (s.timeout) {
				setTimeout(function() { timedOut = true; cb(); }, s.timeout);
			}

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (s.extraData) {
					for (var n in s.extraData) {
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" value="'+s.extraData[n]+'" />')
								.appendTo(form)[0]);
					}
				}

				// add iframe to doc and submit the form
				$io.appendTo('body');
                io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				if(t) {
					form.setAttribute('target', t);
				} else {
					$form.removeAttr('target');
				}
				$(extraInputs).remove();
			}
		}

		if (s.forceSync) {
			doSubmit();
		}
		else {
			setTimeout(doSubmit, 10); // this lets dom updates render
		}
	
		var data, doc, domCheckCount = 50;

		function cb() {
			if (xhr.aborted) {
				return;
			}
			
			var doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
			if (!doc || doc.location.href == s.iframeSrc) {
				// response not received yet
				if (!timedOut)
					return;
			}
            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

			var ok = true;
			try {
				if (timedOut) {
					throw 'timeout';
				}

				var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && window.opera && (doc.body == null || doc.body.innerHTML == '')) {
					if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						log('requeing onLoad callback, DOM not available');
						setTimeout(cb, 250);
						return;
					}
					// let this fall through because server response could be an empty document
					//log('Could not access iframe DOM after mutiple tries.');
					//throw 'DOMException: not available';
				}

				//log('response detected');
				xhr.responseText = doc.body ? doc.body.innerHTML : doc.documentElement ? doc.documentElement.innerHTML : null; 
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': s.dataType};
					return headers[header];
				};

				var scr = /(json|script)/.test(s.dataType);
				if (scr || s.textarea) {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta) {
						xhr.responseText = ta.value;
					}
					else if (scr) {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						var b = doc.getElementsByTagName('body')[0];
						if (pre) {
							xhr.responseText = pre.textContent;
						}
						else if (b) {
							xhr.responseText = b.innerHTML;
						}
					}			  
				}
				else if (s.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}
				
				data = httpData(xhr, s.dataType, s);
			}
			catch(e){
				log('error caught:',e);
				ok = false;
				xhr.error = e;
				s.error && s.error.call(s.context, xhr, 'error', e);
				g && $.event.trigger("ajaxError", [xhr, s, e]);
			}
			
			if (xhr.aborted) {
				log('upload aborted');
				ok = false;
			}

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (ok) {
				s.success && s.success.call(s.context, data, 'success', xhr);
				g && $.event.trigger("ajaxSuccess", [xhr, s]);
			}
			
			g && $.event.trigger("ajaxComplete", [xhr, s]);

			if (g && ! --$.active) {
				$.event.trigger("ajaxStop");
			}
			
			s.complete && s.complete.call(s.context, xhr, ok ? 'success' : 'error');

			// clean up
			setTimeout(function() {
				$io.removeData('form-plugin-onload');
				$io.remove();
				xhr.responseXML = null;
			}, 100);
		}

		var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else {
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			}
			return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
		};
		var parseJSON = $.parseJSON || function(s) {
			return window['eval']('(' + s + ')');
		};
		
		var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4
			var ct = xhr.getResponseHeader('content-type') || '',
				xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
				data = xml ? xhr.responseXML : xhr.responseText;

			if (xml && data.documentElement.nodeName === 'parsererror') {
				$.error && $.error('parsererror');
			}
			if (s && s.dataFilter) {
				data = s.dataFilter(data, type);
			}
			if (typeof data === 'string') {
				if (type === 'json' || !type && ct.indexOf('json') >= 0) {
					data = parseJSON(data);
				} else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
					$.globalEval(data);
				}
			}
			return data;
		};
	}
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	// in jQuery 1.3+ we can fix mistakes with the ready state
	if (this.length === 0) {
		var o = { s: this.selector, c: this.context };
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing ajaxForm');
			$(function() {
				$(o.s,o.c).ajaxForm(options);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}
	
	return this.ajaxFormUnbind().bind('submit.form-plugin', function(e) {
		if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
			e.preventDefault();
			$(this).ajaxSubmit(options);
		}
	}).bind('click.form-plugin', function(e) {
		var target = e.target;
		var $el = $(target);
		if (!($el.is(":submit,input:image"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest(':submit');
			if (t.length == 0) {
				return;
			}
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length === 0) {
		return a;
	}

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) {
		return a;
	}
	
	var i,j,n,v,el,max,jmax;
	for(i=0, max=els.length; i < max; i++) {
		el = els[i];
		n = el.name;
		if (!n) {
			continue;
		}

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(j=0, jmax=v.length; j < jmax; j++) {
				a.push({name: n, value: v[j]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: n, value: v});
		}
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0];
		n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) {
			return;
		}
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++) {
				a.push({name: n, value: v[i]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: this.name, value: v});
		}
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
			continue;
		}
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (successful === undefined) {
		successful = true;
	}

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1)) {
			return null;
	}

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) {
			return null;
		}
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) { // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				}
				if (one) {
					return v;
				}
				a.push(v);
			}
		}
		return a;
	}
	return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea') {
			this.value = '';
		}
		else if (t == 'checkbox' || t == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
			this.reset();
		}
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b === undefined) {
		b = true;
	}
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select === undefined) {
		select = true;
	}
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio') {
			this.checked = select;
		}
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
	if ($.fn.ajaxSubmit.debug) {
		var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
		if (window.console && window.console.log) {
			window.console.log(msg);
		}
		else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	}
};

})(jQuery);
var ntLookupKey = 113;
var mobilemode = false;

(function( $, undefined ) {

// var equates and global variables here/

var tAccordion = 1;
var tTab       = 2;
var tPlain     = 3;
var tRound     = 4;
var tTabXP     = 5;
var tNone      = 6;
var tWizard    = 7;
var tCarousel  = 8;
var tTaskPanel = 9;
$.widget("ui.ntform", {
   // default options
        options: {
			defaultButton: '',
			tabType: 0,
			popup:0,
			parent:'',
			procedure: '',
			action: '',
			actionCancel: '',
			actionTarget: '',
			addSec: '',
			confirmDelete:0,
			confirmDeleteMessage:'Are you sure you want to delete this record?',
			yesDeleteText:'Yes, Delete',
			noDeleteText:'No',
			confirmCancel: 0,
			confirmCancelMessage:'Are you sure you want to cancel?',
			yesCancelText:'Yes, Cancel',
			noCancelText:'No',
			confirmText:'Confirm',
			actionCancelTarget: '' ,
			urlExt:'',
			focus: 1,
			dirty:0,
			localStorage:0
		},
		status: {
			lastChangeValue:'',
			disableSave:{}
		},	
		//------------------------------------------------------
		_create: function() {
			if (this.options.urlExt==''){try{this.options.urlExt=ntdExt} catch(e){};}			
			this.ready();
			if (this.options.focus){
				this.firstFocus();
			}
		},
		//------------------------------------------------------
		ready: function() {
			var _this=this;
			if (this.options.popup==1){
				try{
					if ($("#popup_" + this.options.procedure + "_div").dialog("option","title")==''){
						$("#popup_" + this.options.procedure + "_div").dialog("option","title",this.options.title);
					}	
				} catch (e) {};	
			}	
			this._bindEvents(this);
		},
		//------------------------------------------------------
		resize: function(){
			$('[data-widget="ntmap"]').ntmap('resize');
			if (this.options.localStorage){
				$('#'+this.options.id).ntformls("resize");
			}
		},
		//------------------------------------------------------
		_bindEvents: function(){
			var _this = this;
			$(this.element).find('input').not('.nt-locator')
				.off('keypress.ntform').on('keypress.ntform',function(e){return _this._onKeyPress(this,e);})
				.off('keydown.ntform').on('keydown.ntform',function(e){return _this._onKeyDown(this,e);})
				.off('focus.ntform').on('focus.ntform',function(e){return _this.focus(this);})
				.off('blur.ntform').on('blur.ntform',function(e){return _this.blur(this);})
				.off('valuechanged.ntform').on('valuechanged.ntform',function(e){return _this.valueChanged(this,false,e);});

			$(this.element).find('[data-nt-lof="true"]')
				.off('click.ntform').on('click.ntform',function(e){return _this.clickLookup(this);})
				
			$(this.element).find('textarea').not('.nt-locator').off('blur.ntform').on('blur.ntform',function(e){return _this.blur(this);});
			
			$(this.element).find('[data-formproc="'+_this.options.procedure+'"]').each(function(i,elem){
					switch($(elem).attr('data-do')){
					case 'imm':
						$(elem).off('change.ntform').on('change.ntform',function(e){return _this.changeField(this,e);});
						$(elem).off('sendchange.ntform').on('sendchange.ntform',function(e){return _this.sendChange(this,true,e);});
						break;
					case 'imb': // blur, not change, 'cause month et al send change on each keystroke
						$(elem).off('blur.ntform').on('blur.ntform',function(e){return _this.changeField(this,e);});
						$(elem).off('sendchange.ntform').on('sendchange.ntform',function(e){return _this.sendChange(this,true,e);});
						break;
					case 'ivs':	// immediate key press
						$(elem).off('input.ntform').on('input.ntform',function(e){return _this.changeField(this,e);})						
						break;
					case 'onclick':	
						$(elem).off('click.ntform').on('click.ntform',function(e){return _this.changeField(this,e);});
						break;
					case 'server':
						$(elem).off('click.ntform').on('click.ntform',function(e){return _this.pressButton(this);});
						break;
					}
			});
			$(this.element).find('[data-do="save"]').off('click.ntform').on('click.ntform',function(e){return _this.saveButton(this,e);});
			$(this.element).find('[data-do="deletef"]').off('click.ntform').on('click.ntform',function(e){return _this.deleteButton(this,e);});
			$(this.element).find('[data-do="cancel"]').off('click.ntform').on('click.ntform',function(e){return _this.cancelButton(this,e);});
			$(this.element).find('[data-do="swa"]')
					.addClass('nt-right ui-state-default ui-corner-all ui-button')
					.hover(function(){
						$(this).addClass('ui-state-hover');
					}, function(){
						$(this).removeClass('ui-state-hover');
					})
					.off('click.ntform').on('click.ntform',function(e){return _this.callSecwin(this,e);});
		},
		//------------------------------------------------------
		_onKeyPress: function(elem,e) {
			switch (e.which) {
				case 13:{ // enter
					if (e.isDefaultPrevented()){
						return false;
					}	
					return(this._onEnter(elem,e));
				}
				case 9:{ // tab
					if (e.isDefaultPrevented()){
						return false;
					}	
					return(this._onTab(elem,e));									
				}
			}
		},
//------------------------------------------------------
		clickLookup: function(elem,e) {
			$("#"+elem.id).next(':button').each(
				function(i,v){
					$(this).click();
					return false;
				}
			)
		},
//------------------------------------------------------
		_onKeyDown: function(elem,e) {
			if ((e.which == 191) && (e.shiftKey == true)){
				e.which = ntLookupKey;
			}
			switch (e.which) {
				case 8:{ // explicity handle backspace on readonly fields for benefit of IE.
					if ($(elem).attr('readonly') == 'readonly'){
						return false;
					}
					break;
				}
				//case 191:  // ?
				case ntLookupKey: {// F2 by default
					$("#"+elem.id+".hasDatepicker").each(
						function(i,v){
							e.preventDefault();
							$(elem).datepicker("show");
							return false;
						}
					);
					$("#"+elem.id).next(':button').each(
						function(i,v){
							$(this).click();
							return false;
						}
					)
				}
			}
			return true;
		},
		//------------------------------------------------------
		_onEnter: function(elem,e) {
			var _this = this;
			$(this.element).find('[data-nt-default="1"]').each(function(){
				$(this).click();
				e.preventDefault();
				return false;
			})
			this.nextFocus(elem);
			return true;
		},
		//------------------------------------------------------
		_onTab: function(elem,e) {
			this.nextFocus(elem);
			return true;
		},
		//------------------------------------------------------
		gotoTab: function(index){
			switch (this.options.tabType){
			case tNone:
				break;
			case tPlain:
			case tRound:
				$([document.documentElement, document.body]).animate({
					scrollTop: $('#tab_' + this.options.procedure + index + '_div').offset().top
				}, 500);
				break;
			case tWizard:
				$('#tab_' + this.options.procedure + '_div').ntwiz("option", "active", index);	
				break;
			case tTaskPanel:
				$([document.documentElement, document.body]).animate({
					scrollTop: $('#tab_' + this.options.procedure + index + '_taskpanel_div').offset().top
				}, 500);
				$('#tab_' + this.options.procedure + index + '_taskpanel_div').accordion("option", "active", 0);
				break;
			case tAccordion:
				$('#tab_' + this.options.procedure + '_div').accordion("option", "active", index);
				break;
			case tCarousel:
				$('#tab_' + this.options.procedure + '_div').slick("slickGoTo", index);
				break;
			case tTab:	
				$('#tab_' + this.options.procedure + '_div').tabs("option", "active", index);			
				break;
			}
		},
		//------------------------------------------------------
		setTabHeadingIcon: function(index,icon){
			const regex1 = /ui-icon-(.*)/; // to get the name of the existing ui-icon
			switch (this.options.tabType){
			case tNone:
				break;
			case tPlain:
				var c = $('#tab_' + this.options.procedure + index + '_div > fieldset > legend').find('span').eq(0).attr('class').match(regex1)[1]
				$('#tab_' + this.options.procedure + index + '_div > fieldset > legend').find('span').eq(0).removeClass('ui-icon-' + c).addClass('ui-icon-' + icon)
				break;
			case tRound:
				var c = $('#tab_' + this.options.procedure + index + '_div > h3').find('span').eq(0).attr('class').match(regex1)[1]
				$('#tab_' + this.options.procedure + index + '_div > h3').find('span').eq(0).removeClass('ui-icon-' + c).addClass('ui-icon-' + icon)
				break;
			case tWizard:
				$('#tab_' + this.options.procedure + '_div').ntwiz("setTabHeadingIcon",index,icon);
				break;
			case tAccordion:
				var c = $('#tab_' + this.options.procedure + '_div > h3').eq(index).find('div > span').eq(0).attr('class').match(regex1)[1]
				$('#tab_' + this.options.procedure + '_div > h3').eq(index).find('div > span').eq(0).removeClass('ui-icon-' + c).addClass('ui-icon-' + icon)
				break;
			case tCarousel:
				break;
			case tTaskPanel:
				var c = $('#tab_' + this.options.procedure + index + '_taskpanel_div > h3 > div').find('span').eq(0).attr('class').match(regex1)[1]
				$('#tab_' + this.options.procedure + index + '_taskpanel_div > h3 > div').find('span').eq(0).removeClass('ui-icon-' + c).addClass('ui-icon-' + icon)
				break;
			case tTab:		
				var c = $('#tab_' + this.options.procedure + '_div > ul').find('li').eq(index).find('span').eq(0).attr('class').match(regex1)[1]
				$('#tab_' + this.options.procedure + '_div > ul').find('li').eq(index).find('span').eq(0).removeClass('ui-icon-' + c).addClass('ui-icon-' + icon)
				break;
			}		
		},
		//------------------------------------------------------
		setTabHeadingText: function(index,heading){
			switch (this.options.tabType){
			case tNone:
				break;
			case tPlain:
				$('#tab_' + this.options.procedure + index + '_div > fieldset > legend > div').text(heading);
				break;
			case tRound:
				$('#tab_' + this.options.procedure + index + '_div > h3 > div').text(heading);
				break;
			case tWizard:
				$('#tab_' + this.options.procedure + '_div').ntwiz("setTabHeadingText",index,heading);
				break;
			case tAccordion:
				$('#tab_' + this.options.procedure + '_div > h3').eq(index).find('div > div').text(heading);		
				break;
			case tCarousel:
				$('#tab_' + this.options.procedure + index + '_div > h3 > div').text(heading);
				break;
			case tTaskPanel:
				$('#tab_' + this.options.procedure + index + '_taskpanel_div > h3 > div > div').text(heading);		
				break;
			case tTab:		
				$('#tab_' + this.options.procedure + '_div > ul').find('li').eq(index).find('div').text(heading);		
				break;				
			}
		},
		//------------------------------------------------------
		hideTab: function(index){
			var id='';
			switch (this.options.tabType){
			case tNone:
			case tPlain:
			case tRound:
				$('#tab_' + this.options.procedure + index + '_div').hide();
				break;
			case tWizard:
				$('#tab_' + this.options.procedure + '_div').ntwiz("option","hideTab",index);
				break;
			case tAccordion:
				$('#tab_' + this.options.procedure + '_div').find('h3').eq(index).hide();
				$('#tab_' + this.options.procedure + '_div').find('h3').eq(index).next().hide();
				break;
			case tCarousel:
				// not supported
				break;
			case tTaskPanel:
				$('#tab_' + this.options.procedure + index + '_taskpanel_div').hide();
				break;
			case tTab:
				$('#tab_' + this.options.procedure + '_div > ul').find('li').eq(index).hide();
				break;
			}
		},
		//------------------------------------------------------
		showTab: function(index){
			var id='';
			switch (this.options.tabType){
			case tNone:
			case tPlain:
			case tRound:
				$('#tab_' + this.options.procedure + index + '_div').show();
				break;
			case tWizard:
				$('#tab_' + this.options.procedure + '_div').ntwiz("option","unhideTab",index);
				break;
			case tAccordion:
				$('#tab_' + this.options.procedure + '_div').find('h3').eq(index).show();
				if ($('#tab_' + this.options.procedure + '_div').accordion('option','active') == index){
					$('#tab_' + this.options.procedure + '_div').find('h3').eq(index).next().show();
				}
				break;
			case tCarousel:
				// not supported
				break;
			case tTaskPanel:
				$('#tab_' + this.options.procedure + index + '_taskpanel_div').show();
				break;				
			case tTab:
				$('#tab_' + this.options.procedure + '_div > ul').find('li').eq(index).show();
				break;
			}
		},
		//------------------------------------------------------
		firstFocus: function(){
			var e;
			var t = 4000000000;
			$(this.element).find(' :input').not('[readonly],[disabled],[type="hidden"]').each(function(){
				tx = $(this).offset().top;
				if (tx < t && tx != 0){
					e = this;
					t = tx;
				}
			})
			$(e).focus();
		},

		//------------------------------------------------------
		_calcURL : function(elem){
			var url = $(elem).attr('id');
			if (!url){
				url = $(elem).attr('name');
			} else {
				if ($(elem).attr('type') == 'radio'){
					url = url.slice(0,url.lastIndexOf('_'));
				}
			}
			var f = $(elem).attr('data-formproc');
			if (!f){
				f = this.options.procedure;
			}
			return f +'_' + url + '_value';
		},

		//------------------------------------------------------
		focus : function(elem,e,i){			
			switch (elem.type){
			case 'text':
			case 'number':
			case 'email':
			case 'url':
			case 'range':
				if ($(elem).attr("data-noFocus") == "true"){
					$(elem).attr("data-noFocus","false");
				} else {	
					try{ $('#osk').ntosk('getFocus',elem);} catch(e) {};	
				}	
				try{$('#osk').ntosk('show');} catch(e) {};	
			}
			try{$('#osk').ntosk('mdstatus',0)} catch(e){};	
		},
		//------------------------------------------------------
		blur: function(elem) {
			try{
				$('#osk').ntosk('startHide');	
				if ($('#osk').ntosk('mdstatus')==0){
					this.sendChange(elem,false);					
				}
				$('#osk').ntosk('mdstatus',0)
			} catch(e) {};	
			return this;
		},
		
		//------------------------------------------------------
		valueChanged : function(elem,focus){			
			var _this=this;
			if ($(elem).attr('data-do') == 'ivs'){
				_this.sendChange(elem,focus);
			}
			try {
				$(elem).autocomplete("search");
			} catch(e) {};
			return this;
		},
		//------------------------------------------------------
		sendChange : function(elem,focus){
			if ( this.getValue(elem) != this.status.lastChangeValue){
				this.changeField(elem);				
			}
			try{ $('#osk').ntosk('startHide'); } catch(e) {};	
			if (focus){
				this.nextFocus(elem);
			}	
		},
		//------------------------------------------------------
		changeField : function(elem){
			var _this=this;
			var formstate=$(elem).closest('form').find('[name="FormState"]').val();
			if ($(elem).attr("data-ac") == "open"){ // dont do anything if auto-complete is open
				return this;
			}
			if ($(elem).attr("data-wait") == "true"){ // dont do anything on-screen-keyboard was clicked.
				return this;
			}
					// in most cases want to send the id first, not the name. The id is unique to the field on
					// the form, hence has a unique validate:: routine. For radios we have to tweak the id to remove
					// the unique suffix.
			var url = this._calcURL(elem);
			this.status.lastChangeValue = this.getValue(elem);
			if (this.options.localStorage){ // got value
				$('#'+this.options.id).ntformls("onChangeField",elem);
			} else {
				$.post(url+this.options.urlExt,
					'_popup_='+this.options.popup+'&_event_=accepted&value='+this.status.lastChangeValue+'&_ajax_=1&_rnd_='+Math.random()+'&formstate=' + formstate+'&_parentProc_=' + this.options.parent,
					function(data){_this._onAjaxComplete(data);});
			}		
			this.options.dirty = true;
			return this;
		},

		//------------------------------------------------------
		getValue: function(elem){
			  // moved outside the widget so it can be used by ntformls
			var ans ='';
			ans = getFormFieldValue(elem);
			// if called as a post, do not encode & and %. If called from EIP then do.
			ans = encodeURI(ans);
			ans = ans.replace(/&/g,"%26");
			ans = ans.replace(/#/g,"%23");
			ans = ans.replace(/\+/g,"%2B");
			ans = ans.replace(/%0D%0A/g,"%0A");
			ans = ans.replace(/%0D/g,"%0A");
			ans = ans.replace(/%0A/g,"%0D%0A");			
			return ans;
		},
		//------------------------------------------------------
		hideMessage: function() {
			var fn = '#'+this.options.procedure;
			fn = fn.toLowerCase();
			$(fn + '_alert_div').addClass('nt-hidden');
			return this;
		},
		//------------------------------------------------------
		showMessage: function(message) {
			var fn = '#'+this.options.procedure;
			fn = fn.toLowerCase();
			$(fn + '_alert_div').empty().append(message).removeClass('nt-hidden');
			return this;
		},		
		//------------------------------------------------------
		hideField: function(fieldname) {
			var fn = '#'+this.options.procedure + '_' + fieldname;
			fn = fn.toLowerCase();
			$(fn + '_prompt_div').addClass('nt-hidden');			
			$(fn + '_value_div').addClass('nt-hidden');
			$(fn + '_comment_div').addClass('nt-hidden');
			return this;
		},
		//------------------------------------------------------
		showField: function(fieldname) {
			var fn = '#'+this.options.procedure + '_' + fieldname;
			fn = fn.toLowerCase();
			$(fn + '_prompt_div').removeClass('nt-hidden');
			$(fn + '_value_div').removeClass('nt-hidden');
			$(fn + '_comment_div').removeClass('nt-hidden');
			return this;
		},
		//------------------------------------------------------
		disableSave: function(context) {
			if (context){
				this.status.disableSave[context] = 1;
			}
			id = $(this.element).find('[data-do="save"]').attr("id");
			try{$('#'+id).prop("disabled",true).button( "refresh" );} catch (e) {};
			return this;
		},
		//------------------------------------------------------
		enableSave: function(context) {
			var all=0;
			if (context){
				this.status.disableSave[context] = 0;			
				$.each(this.status.disableSave, function( key, value ){
					all += value;
				});
			}	
			if (all == 0){
				id = $(this.element).find('[data-do="save"]').attr("id");
				try{$('#'+id).prop("disabled",false).button( "refresh" );} catch (e) {};
			}	
			return this;
		},
		//------------------------------------------------------
		show: function() {
			$('#' + this.options.procedure + '_div').show();
			return this;
		},
		//------------------------------------------------------
		hide: function() {
			$('#' + this.options.procedure + '_div').hide();
			return this;
		},
		//------------------------------------------------------
		onOpen: function() {
			this.hide();
		},
        //------------------------------------------------------
		_onAjaxComplete: function(data) {
			xmlProcess(data);
			this.ready();
			return this;
		},

		//------------------------------------------------------
		setTimer : function(fld,t) {
			if (this.options.localStorage){
			} else {
				setTimeout("$('#"+$(this.element).attr('id')+"').ntform('server','"+this.options.procedure + '_' + fld + '_value'+"','_event_=timer');",t);
			}	
			return this;
		},
        //------------------------------------------------------
		nextFocus : function(elem) {
			var nf = $(elem).attr('data-nextfocus');
			if (nf){
				$('#'+nf).focus();
			} else {
				var fields = $(elem).parents('form:eq(0),body').find('button,input,textarea,select').not(':hidden');
				var index = fields.index(elem);
				if ( index > -1 && ( index + 1 ) < fields.length ) {
					fields.eq(index + 1).focus();
				} else {
					fields.first().focus();
				}
			}
			return this;
		},

		//------------------------------------------------------
		// want to do an ajax call from the form, but with all the form fields included.
        pressButton : function(elem){
			var _this=this;
			var urlA= this.options.procedure+'_' + $(elem).attr('name') + '_value' + ntdExt;
			try{$(elem).attr("disabled","disabled").button( "refresh" );} catch (e) {};
			this.removePlaceHolder();
			// save TinyMCE fields
			try{
				tinyMCE.triggerSave(true,true);
			} catch(e){};
			if(this.options.localStorage){
			} else {
				if(!$(elem).closest("form").attr('method')){
					this.server(urlA,'_event_=accepted','value='+$(elem).attr("value"))
				} else {
					//$(elem).closest("form").ajaxSubmit(options); // this line seems to fail in Chrome 83.0.4103.61, https only, form with upload file control. 
					var form = $(elem).closest("form")
					var formdata = form.serialize() + '&_event_=accepted&value=' + $(elem).attr("value") + '_ajax_=1&_parentProc_=' + this.options.parent + '&_rnd_=' + Math.random();
					$.ajax({
					   type: "POST",
					   url: urlA,
					   data: formdata, // serializes the form's elements. Does not serialize File Upload fields.
					   success: function(data){_this._onAjaxComplete(data)}
					 });
				}	
			}	
			this.nextFocus(elem);
			return this;
        },
        //------------------------------------------------------
        clickSave : function(){
			$(this.element).find('[data-do="save"]').click();		
        },
        //------------------------------------------------------
        saveButton : function(elem,event){
			$(elem).closest("form").find('.slick-cloned').remove() // work-around :: do not want to include carousel cloned elements in the post.
			// Save ACE fields
			$(this.element).find('[data-edit="aceeditor"]').each(function(i,elem){
				var id = $(elem).attr('data-field');
				var eid = window[id + "_ace"]; 
				$('#' + id).val(eid.getValue());
			})
			// Save CKEditor fields fields
			$(this.element).find('[data-edit="ckeditor4"]').each(function(i,elem){
				var id = $(elem).attr('id');
				CKEDITOR.instances[id].updateElement();				
			})			
			// continue
			if (this.options.popup){
				ntd.save(event);
			} else {
				if (this.options.action && this.options.action != ''){
					$(elem).closest("form").attr("action",this.options.action).attr("target",this.options.actionTarget);
				}
				// set all buttons disabled, if target of button is same frame.
				t = $(elem).closest("form").attr("target");
				if (t == "" || t == "_self" || t == "_top"){
					$(':button').attr('disabled', 'disabled');
				}
				$(elem).closest("form").append('<input type="hidden" name="_buttontext_" value="'+$(event.target).closest("button").val()+'" />');
				$(elem).closest("form").append('<input type="hidden" name="_refresh_" value="saved" />');
				$(elem).closest("form").append('<input type="hidden" name="pressedButton" value="save_btn" />');
				$("#_webkit_").val(Math.random());
				this.removePlaceHolder();
				$(elem).closest("form").submit();
			}
        },
        //------------------------------------------------------
        deleteButton : function(elem,event){
			var _this=this;
			if (this.options.confirmDelete) {
				//ntConfirm(this.options.confirmDeleteMessage,this.options.confirmText,this.options.yesDeleteText,this.options.noDeleteText,this.deletenow,elem,event,this);
				$('body').append('<div id="message_confirm" title="'+_this.options.confirmText+'" class="nt-flex">' + 
				'<div><div class="ui-icons-error ui-icon ui-error-icon ui-icon-alert nt-left nt-margin-right-1"></div></div>' +
				'<div>' +  this.options.confirmDeleteMessage + '</div></div>');
				$( "#message_confirm" ).dialog({
					resizable: false,
					modal: true,
					buttons: [{
						text: _this.options.yesDeleteText,
						icon: 'ui-icon-trash',
						class:'nt-deleteb-button',
						click : function() {    
							$( this ).dialog( "close" );
							$( "#message_confirm" ).remove();
							_this.deletenow(elem,event,_this);
						}
					}, {

						icon: 'ui-icon-cancel',
						text: _this.options.noDeleteText,
						click: function() {
							$( this ).dialog( "close" );
							$( "#message_confirm" ).remove();
							return _this;
						}
					}]	
				});
			} else {
				this.deletenow(elem,event,this);
			}
        },
        //------------------------------------------------------
        deletenow : function(elem,event,_this){
			if (_this.options.popup){
				ntd.deletef(event);
			} else {
				if (_this.options.action && _this.options.action != ''){
					$(elem).closest("form").attr("action",_this.options.action).attr("target",_this.options.actionTarget);
				}
				// set all buttons disabled, if target of button is same frame.
				t = $(elem).closest("form").attr("target");
				if (t == "" || t == "_self" || t == "_top"){
					$(':button').attr('disabled', 'disabled');
				}
				$(elem).closest("form").append('<input type="hidden" name="_buttontext_" value="'+$(event.target).closest("button").val()+'" />');
				$(elem).closest("form").append('<input type="hidden" name="_refresh_" value="saved" />');
				$(elem).closest("form").append('<input type="hidden" name="pressedButton" value="deletef_btn" />');
				$("#_webkit_").val(Math.random());
				_this.removePlaceHolder();
				$(elem).closest("form").submit();
			}    
        },		
        //------------------------------------------------------
		cancelButton : function(elem,event){
			if (this.options.confirmCancel && this.options.dirty) {
				ntConfirm(this.options.confirmCancelMessage,this.options.confirmText,this.options.yesCancelText,this.options.noCancelText,this.cancelNow,elem,event,this);
			} else {
				this.cancelNow(elem,event,this);
			}
        },		
        //------------------------------------------------------
		cancelNow : function(elem,event,_this){
			if (_this.options.popup){
				ntd.cancel(event);
			} else {
				if (_this.options.actionCancel && _this.options.actionCancel != ''){
				  $(elem).closest("form").attr("action",_this.options.actionCancel).attr("target",_this.options.actionCancelTarget);
				}
				// set all buttons disabled, if target of button is same frame.
				t = $(elem).closest("form").attr("target");
				if (t == "" || t == "_self" || t == "_top"){
					$(':button').attr('disabled', 'disabled');
				}
				$(elem).closest("form").append('<input type="hidden" name="_buttontext_" value="'+$(event.target).closest("button").val()+'" />')
				$(elem).closest("form").append('<input type="hidden" name="pressedButton" value="cancel_btn" />')
				$("#_webkit_").val(Math.random());
				_this.removePlaceHolder();
				$(elem).closest("form").submit();
			}
		},
        //------------------------------------------------------
        callSecwin : function(elem,event){
			ntd.push('secwinwebuseraccess','','header',1,2,null,'','','_screen_=' + this.options.addsec);
			return this;
        },

        //------------------------------------------------------
		removePlaceHolder : function (){
			$('[placeholder]').each(function(i) {
				var e = $(this);
				if (e.val() === e.attr('placeholder')){
					e.val("");
				}
			});
		},
        //------------------------------------------------------
		server : function(url) {      // send async request to server procedure
			var parms='';
			var _this=this;
			for(var d = 1; d < arguments.length; d++){
				parms += arguments[d] + '&';
			}
			if (parms==''){
				parms +=  '&'
			}
			parms +=  '_ajax_=1' + '&_parentProc_=' + this.options.parent + '&_rnd_=' + Math.random();
			if (this.options.localStorage){
			} else {
				$.get(url+this.options.urlExt,parms,function(data){_this._onAjaxComplete(data);});
			}	
			return this;
		},

		//------------------------------------------------------
		destroy: function() {
			$.Widget.prototype.destroy.apply(this, arguments); // default destroy
			// now do other stuff particular to this widget
		}
 });

$.extend( $.ui.ntform, {
        version: "@VERSION"
});

})( jQuery );
// // ---------------------------------------------------------------------------------------
// // add functionality to "slider" so it has refresh method. 
// // this refreshes the value, and slider, without issuing a change event.
// // called from nt-websockets when updating a value pushed from the server
// // ---------------------------------------------------------------------------------------
 $.widget("ui.ntslider", $.extend({}, $.ui.slider.prototype, {
	//----------------------------------------------------------------------------
	refresh: function(){
		// currently only supports a single-value slider.
		this.options.value = this._trimAlignValue( $('#' +this.options.id).val() );
		this._refreshValue()
	}
 }));
 $.ui.ntslider.defaults = $.extend({}, $.ui.slider.defaults);
 
	//----------------------------------------------------------------------------

// // ---------------------------------------------------------------------------------------
// // add functionality to "checkbox" checkboxradio so it has an "on" and "off" text, and icon option.
// // updated in NT 11 to support jQuery UI 1.12
// // ---------------------------------------------------------------------------------------
 $.widget("ui.checkboxbutton", $.extend({}, $.ui.checkboxradio.prototype, {
	//----------------------------------------------------------------------------
	_init: function(){
		var _this=this;		
		this.element.data('checkboxradio', this.element.data('checkboxbutton'));
		this._setLabelState(); 
		this._updateLabel();		
		$(this.element).on('click',function(e){ _this._clicked()});
		$(this.element).on('change',function(e){ _this.refresh()});
		var i = $.ui.checkboxradio.prototype._init.apply(this, arguments);
		return i;
	},
	//----------------------------------------------------------------------------
	refresh: function(force){
		if (force ==0){
			$(this.element).prop("checked",false);
		} else if (force ==1){
			$(this.element).prop("checked",true);
		} else if (this.element.is( ":checked" )==false){
			$(this.element).prop("checked",false);
		} else if (this.element.is( ":checked" )==true){
			$(this.element).prop("checked",true);
		}
		this._setLabelState();
		var i = $.ui.checkboxradio.prototype.refresh.apply(this, arguments);
		return i;
	 },
	//----------------------------------------------------------------------------
	_setLabelState: function(){
		if($(this.element).prop("checked")){
			this.options.label = this.options.trueText;			
		} else {
			this.options.label = this.options.falseText;
		}	
		this._removeClass( this.icon, null, "ui-state-hover")// fixes bug in jquery theme. 		
	},
	//----------------------------------------------------------------------------
	_clicked: function(){
		this._setLabelState()
		this.refresh();
	},	
	//----------------------------------------------------------------------------
	_updateIcon: function( checked ) {
		var toAdd = "ui-icon ui-icon-background ";
		if (this.options.icon) {
			if (!this.icon) {
				this.icon = $( "<span>" );
				this.iconSpace = $( "<span> </span>" );
				this._addClass( this.iconSpace, "ui-checkboxradio-icon-space" );
			}
			toAdd += checked ? this.options.trueIcon + " ui-state-checked" : this.options.falseIcon; 
			this._removeClass( this.icon, null, checked ? this.options.falseIcon : this.options.trueIcon ); 
			this._removeClass( this.icon, null, "ui-state-hover")
			if(checked == false && this.options.falseIcon.toLowerCase() != 'blank'){
				this._removeClass( this.icon, null, "ui-icon-blank" ); // jquery adds this to false checkboxes.
			}
			this._addClass( this.icon, "ui-checkboxradio-icon", toAdd );
			if ( !checked ) {
				this._removeClass( this.icon, null, this.options.trueIcon + " ui-state-checked" );
			}
			this.icon.prependTo( this.label ).after( this.iconSpace );
		} else if ( this.icon !== undefined ) {
			this.icon.remove();
			this.iconSpace.remove();
			delete this.icon;
		}
	}	
 }));
 $.ui.checkboxbutton.defaults = $.extend({}, $.ui.checkboxradio.defaults);

//------------------------------------------------------
function changeAce(id){
	var eid = window[id + "_ace"]; 
	$('#' + id).val(eid.getValue());
	$('#' + id).change()
}

// Generic funtion to get the value of a form field. Can't be inside the widget because it's hard to get return values.
//------------------------------------------------------
function getFormFieldValue(elem,value){
	var ans ='';
	var typ = elem.type;
	var i = 0;
	if (typ == undefined){		
		if (elem.length){
			elem = elem[0]
			typ = elem.type;
		} else {
			return value;
		}	
		
	}
	switch (typ){
	case "radio":
		ans = $(elem).val();
		break;
	case "checkbox":
		if (elem.checked){
			ans = $(elem).attr("data-true");
			if(ans===undefined){
				ans = elem.value;
			}
		} else {
			ans = $(elem).attr("data-false");
			if(ans===undefined){
				ans = 0;
			}			
		}
		break;
	case "select-multiple":
		for(i = 0; i < elem.length; i++) {
			if(elem.options[i].selected) {
				ans = ans + ';|;' + elem.options[i].value;
			}
		}
		break;
	case "file":
		var files = elem.files;
		try {
			for (i=0;i<files.length;i++){
				ans = ans + ';|;' + files[i].name;
			}
		} catch (err){
			ans = elem.value;
		}
		break;
	case "text":
		var id = $(elem).attr('id')+'_slider';
		if ($('#'+id).attr('id')){
			var values = $('#'+id).slider("values");
			for(i=0;i < values.length;i++){
				ans = ans + values[i] + ';';
			}					
			break;
		} // deliberatly drop down to default if it's not a slider.				
	default:
		if ($(elem).data('luv')){
			ans = $(elem).data('luv');
		} else {
			ans = elem.value; // value not encoded automatically in IE when doing an Ajax Get.
		}
	}
	return ans;
}
 ///////////////////////////////////////////////////////
//
//   jQuery Plugin for NetTalk Menu
//   Part of NetTalk by CapeSoft
//   (c) 2018
//
///////////////////////////////////////////////////////

(function( $, undefined ) {

$.widget( "ui.ntmenu", {
        options: {
			id: '',          
			ul:'',			// id of first UL for the menu
			burger:'',     // id of hamburger
			viewOnly:0
		},
		state: {
			menuOpen:0,
			mobile:0
		},

		//------------------------------------------------------
        _create: function() {
			var _this=this;
        },

		//------------------------------------------------------
        _init: function() {
			var _this=this;
			$('#' + this.options.ul).menuex(this.options);
			$('#' + this.options.burger).on('click.mn').on('click.mn',function(e){_this.burgerClick();});
            $('#' + this.options.ul).find('> li > ul').addClass('ui-corner-all ui-widget ui-widget-content')       //bj
			$('#' + this.options.ul).addClass('ui-widget');
			$('#' + this.options.ul).children('li').children('a').addClass('ui-widget ui-state-default');						
			$('#' + this.options.ul).hover(function(){return false;},function () {
				$('#' + _this.options.ul).menuex("collapseAll", null, true);
			});			
        },
		//------------------------------------------------------
        burgerClick: function() {
			this.state.mobile = true
			if (this.state.menuOpen==0){
				this.openMenu()
			} else {
				this.closeMenu()
			}
        },
		//------------------------------------------------------
        openMenu: function() {
			$('#' + this.options.ul).show();
			this.state.menuOpen=1
        },
		//------------------------------------------------------
        closeMenu: function() {
			if(this.state.mobile){
				$('#' + this.options.ul).hide();
				this.state.menuOpen=0
			}	
		}
//------------------------------------------------------
});

$.extend( $.ui.ntmenu, {
        version: "@VERSION"
});

})( jQuery );

// derive from ui.menu with options to overide child menu icon and position.
$.widget( "ui.menuex", $.ui.menu, {
	collapseAll: function(event,all){
		if (all){
			$('#' + this.options.ul).ntmenu("closeMenu");
		}
        return this._super(event, all);	// Invoke the parent widget's collapseAll().
	},
	// nt adds ability to override position based on data-pos attribute. 
	_open: function( submenu ) {
		switch($(this.active).attr('data-pos')){  // nt
		case "right":
			var position = $.extend( {
				of: this.active
			}, { my: "right top", at: "left+0 top+0"} ); // i know, this is weird
			break
		case "down":
		default:
			var rad = getPixels(getCss('--menu-radius',submenu[0].id))
			var position = $.extend( {
				of: this.active
			}, { my: "left top", at: "left+"+rad+" bottom-1"} );
			break;
		}									// nt end

		clearTimeout( this.timer );
		this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
			.hide()
			.attr( "aria-hidden", "true" );

		submenu
			.show()
			.removeAttr( "aria-hidden" )
			.attr( "aria-expanded", "true" )
			.position( position );
	},
	refresh: function() {  // nt adds ability to override sub-menu icon based on data-icon attribute
		var menus, items, newSubmenus, newItems, newWrappers,
			that = this,
			icon = this.options.icons.submenu,														
			submenus = this.element.find( this.options.menus );

		this._toggleClass( "ui-menu-icons", null, !!this.element.find( ".ui-icon" ).length );

		// Initialize nested menus
		newSubmenus = submenus.filter( ":not(.ui-menu)" )
			.hide()
			.attr( {
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			} )
			.each( function() {
				var menu = $( this ),
					item = menu.prev(),
					submenuCaret = $( "<span>" ).data( "ui-menu-submenu-caret", true );

				if($(this).attr('data-icon')){					// nt 
					that._addClass( submenuCaret, "ui-menu-icon", "ui-icon " + "ui-icon-" + $(this).attr('data-icon') ); //nt
				} else {					
					that._addClass( submenuCaret, "ui-menu-icon", "ui-icon " + icon ); // jq
				}	
				item
					.attr( "aria-haspopup", "true" )
					.prepend( submenuCaret );
				menu.attr( "aria-labelledby", item.attr( "id" ) );
			} );

		this._addClass( newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front" );

		menus = submenus.add( this.element );
		items = menus.find( this.options.items );

		// Initialize menu-items containing spaces and/or dashes only as dividers
		items.not( ".ui-menu-item" ).each( function() {
			var item = $( this );
			if ( that._isDivider( item ) ) {
				that._addClass( item, "ui-menu-divider", "ui-widget-content" );
			}
		} );

		// Don't refresh list items that are already adapted
		newItems = items.not( ".ui-menu-item, .ui-menu-divider" );
		newWrappers = newItems.children()
			.not( ".ui-menu" )
				.uniqueId()
				.attr( {
					tabIndex: -1,
					role: this._itemRole()
				} );
		this._addClass( newItems, "ui-menu-item" )
			._addClass( newWrappers, "ui-menu-item-wrapper" );

		// Add aria-disabled attribute to any disabled menu item
		items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

		// If the active item has been removed, blur the menu
		if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
			this.blur();
		}
	}
		
});		
///////////////////////////////////////////////////////
// end ntmenu
///////////////////////////////////////////////////////


///////////////////////////////////////////////////////
//   
//   jQuery Plugin to turn form into wizard.
//   Part of NetTalk by CapeSoft 
//   (c) 2021
//
///////////////////////////////////////////////////////

(function( $, undefined ) {

$.widget( "ui.ntwiz", {
	options: {
		procedure: '',
		validateOnNext: 0,
		active: 0,
		maxTab: 0,
		wizTabs: [],
		minHeight: 0,    
		popup: 0,
		saveOk: 0,
		hidePreviousButton: 0,
		disablePreviousButton: 0,
		ntform: '',
		breadcrumbsId: '',
		pointOfNoReturn: 0,
		hidden: []
	},

//------------------------------------------------------
	_create: function() {           
	  var _this = this;
		this.element.addClass( "ui-widget ui-widget-content ui-corner-all" );
		if (this.options.validateOnNext == 0){	
			$('[data-do="wiznext"]').off('click.wiz').on('click.wiz',function(e){
					_this.next();
				});
		} else {
			$('[data-do="wiznext"]').off('click.wiz').on('click.wiz',function(e){
					_this.tryNext();
				});
		}		
		$('[data-do="wizprev"]').off('click.wiz').on('click.wiz',function(e){
			_this.previous();
			});
		$('[data-tab]').off('click.wiz').on('click.wiz',function(e){
				_this.crumbClick(this);
			});
		this.options.wizTabs = this.element.find('.nt-tab-inner');
		this.options.maxTab=this.options.wizTabs.length-1;
		if (this.options.minHeight){
			var max = this.options.minHeight;
			this.element.find('[data-tabid]').each(function(){
				$(this).show()
				max = Math.max( max, $(this).height() );
				$(this).hide()
			})
			this.element.find('[data-tabid]').height(max);
		}
	},

//------------------------------------------------------
	_init: function() {
		this.active(this.active());
	},	

//------------------------------------------------------
	destroy: function() {
		this.element.removeClass( "ui-widget ui-widget-content ui-corner-all" );
		$.Widget.prototype.destroy.apply( this, arguments );
	},

//------------------------------------------------------
// shortcut to // .option("active", //
	active: function(newValue){ 
		if ( newValue === undefined ) {
			return this.options.active;
		}
		if (this.options.hidden[newValue] != 1){
			this._setOption( "active", newValue );
		}
		return this;
	},

//------------------------------------------------------
	gotoId: function(tabId){ // uses data-tabid attribute, not tab number.
		for(var i=0; i < this.options.wizTabs.length ; i++){
			if ($(this.options.wizTabs[i]).attr('data-tabid') == tabId){
				this.active(i)
				break;
			}
		}	
	},
//------------------------------------------------------
	setTabHeadingIcon: function(index,icon){
		const regex1 = /ui-icon-(.*)/; // to get the name of the existing ui-icon	
		var c = $('#tab_' + this.options.procedure + index + '_div > h3').find('span').eq(0).attr('class').match(regex1)[1]
		$('#tab_' + this.options.procedure + index + '_div > h3').find('span').eq(0).removeClass('ui-icon-' + c).addClass('ui-icon-' + icon)	
	},
//------------------------------------------------------
	setTabHeadingText: function(index,heading){
		$('#tab_' + this.options.procedure + index + '_div > h3 > div').text(heading);
		$('#'+ this.options.breadcrumbsId).find('li:eq('+index+') > a').text(heading);
	},
//------------------------------------------------------
	_setOption: function( key, value ) {
		switch (key){
		case "active":
			$(this.options.wizTabs[this.options.active]).hide();
			this.options.active = value;                        
			$(this.options.wizTabs[this.options.active]).show();
			this.setButtons();
			$(this.options.wizTabs[this.options.active]).find(':input:enabled:visible:first').focus();
			if(this.options.breadcrumbsId){
				$('#'+ this.options.breadcrumbsId).find('li').removeClass('nt-active-crumb');
				$('#'+ this.options.breadcrumbsId).find('li:eq('+this.options.active+')').addClass('nt-active-crumb');
			}
			break;
		case "maxTab":	
			this.options.maxTab = value;
			break;
		case "hideTab":
			this.options.hidden[value] = 1;
			if(this.options.breadcrumbsId){
				$('#'+ this.options.breadcrumbsId).find('li:eq('+value+')').addClass('nt-hidden');
			}
			if(this.options.active==value){
				if(this.next()==false) { 
					this.previous()
				}	
			}
			break;
		case "unhideTab":
			this.options.hidden[value] = 0;
			if(this.options.breadcrumbsId){
				$('#'+ this.options.breadcrumbsId).find('li:eq('+value+')').removeClass('nt-hidden');
			}
			break;
		case "saveOk":		
		  this.options.saveOk = value;  
		  this.setButtons();
		  break;
		} 
		$.Widget.prototype._setOption.apply( this, arguments );
	},

//------------------------------------------------------
	crumbClick: function(elem){
		var tab = $(elem).attr('data-tab');
		if (tab && tab >= 0){
			if (tab < this.options.active && (this.options.disablePreviousButton || tab < this.options.pointOfNoReturn)){
			} else {			
				this.active(tab)
			}	
		}	
	},
//------------------------------------------------------
	setButtons: function(){
		if (this.options.hidePreviousButton){
			$('[name="wizprevious_btn"]').hide();
		} else {
			if (this.active() == 0 || this.options.disablePreviousButton || this.active() <= this.options.pointOfNoReturn){  
				$('[data-do="wizprev"]').button( "option", "disabled", true ).removeClass('ui-state-focus ui-state-hover');
			} else {
				$('[data-do="wizprev"]').button( "option", "disabled", false ).removeClass('ui-state-focus ui-state-hover');
			}
		}
		if (this.active() == this.options.maxTab) {
			$('[data-do="wiznext"]').button( "option", "disabled", true ).removeClass('ui-state-focus ui-state-hover');
		} else {
			$('[data-do="wiznext"]').button( "option", "disabled", false ).removeClass('ui-state-focus ui-state-hover');		
		}
		if (this.options.saveOk != -1 && (this.active() == this.options.maxTab || this.options.saveOk == 1)){
			if (this.options.ntform){
				$(this.options.ntform).ntform('enableSave','wiz');
			} else {
				try{
					$('[name="save_btn"]').button( "option", "disabled", false ).removeClass('ui-state-focus ui-state-hover');
				} catch(e) {
					$('[name="save_btn"]').removeClass('ui-state-focus ui-state-hover');
				}
			}
		}  else {          			
			if (this.options.ntform){
				$(this.options.ntform).ntform('disableSave','wiz');
			} else {
				try{
					$('[name="save_btn"]').button( "option", "disabled", true ).removeClass('ui-state-focus ui-state-hover');
				} catch(e) {
					$('[name="save_btn"]').removeClass('ui-state-focus ui-state-hover');
				}
			}
		} 
		return this;
	},
//------------------------------------------------------  
	noReturn: function() {  
		this.options.pointOfNoReturn = this.active()
	},
//------------------------------------------------------  
	tryNext: function() {  
		var parms = '_ajax_=1&_popup_=' + this.options.popup;
		var _this=this;
		$.get(this.options.procedure + '_nexttab_' + $(this.options.wizTabs[this.options.active]).attr('data-tabid'),parms,function(data){_this._onAjaxComplete(data);});
	},
//------------------------------------------------------  
	tabChanged: function (){
		var parms = '_ajax_=1&_popup_=' + this.options.popup + '&_tab_=' + this.options.active + '&_tabid_=' + $(this.options.wizTabs[this.options.active]).attr('data-tabid');
		var _this=this;
		$.get(this.options.procedure+'_tabchanged',parms,function(data){_this._onAjaxComplete(data);});
	},

//------------------------------------------------------  
	_onAjaxComplete: function(data) {
		xmlProcess(data);

		if (this.options.ntform){
			$(this.options.ntform).ntform('ready');
		}	
		return this;

	},
//------------------------------------------------------  
	next: function() {  
		for(var n = this.active()- -1; n <= this.options.maxTab; n++){
			if (this.options.hidden[n] != 1){
				this.active(n);
				this.tabChanged();
				return true;
			}
		}
		return false;
	},
//------------------------------------------------------   
	previous: function() {
		if (this.options.hidePreviousButton || this.options.disablePreviousButton){
			return this;
		}
		for(var n = this.active()-1; n >= 0; n--){
			if (this.options.hidden[n] != 1){
				this.active(n);
				this.tabChanged();
				return true;
			} 
		}
		return false;
  },
//------------------------------------------------------   
	hideNext: function() {  
		$('[data-do="wiznext"]').hide();	
	},
//------------------------------------------------------   
	showNext: function() {  
		$('[data-do="wiznext"]').show();	
	},
//------------------------------------------------------   
	hidePrevious: function() {  
		$('[data-do="wizprev"]').hide();
	},
//------------------------------------------------------   
	showPrevious: function() {  
		$('[data-do="wizprev"]').show();
	}
//------------------------------------------------------
});

$.extend( $.ui.ntwiz, {
	version: "@VERSION"
});

})( jQuery );

///////////////////////////////////////////////////////
// end ntwiz
///////////////////////////////////////////////////////
/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2006 John Resig, Yehuda Katz, Jrn Zaefferer, Paul McLanahan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.metadata.js 4187 2007-12-16 17:15:27Z joern.zaefferer $
 *
 */

/**
 * Sets the type of metadata to use. Metadata is encoded in JSON, and each property
 * in the JSON will become a property of the element itself.
 *
 * There are three supported types of metadata storage:
 *
 *   attr:  Inside an attribute. The name parameter indicates *which* attribute.
 *          
 *   class: Inside the class attribute, wrapped in curly braces: { }
 *   
 *   elem:  Inside a child element (e.g. a script tag). The
 *          name parameter indicates *which* element.
 *          
 * The metadata for an element is loaded the first time the element is accessed via jQuery.
 *
 * As a result, you can define the metadata type, use $(expr) to load the metadata into the elements
 * matched by expr, then redefine the metadata type and run another $(expr) for other elements.
 * 
 * @name $.metadata.setType
 *
 * @example <p id="one" class="some_class {item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("class")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from the class attribute
 * 
 * @example <p id="one" class="some_class" data="{item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("attr", "data")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a "data" attribute
 * 
 * @example <p id="one" class="some_class"><script>{item_id: 1, item_label: 'Label'}</script>This is a p</p>
 * @before $.metadata.setType("elem", "script")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a nested script element
 * 
 * @param String type The encoding type
 * @param String name The name of the attribute to be used to get metadata (optional)
 * @cat Plugins/Metadata
 * @descr Sets the type of encoding to be used when loading metadata for the first time
 * @type undefined
 * @see metadata()
 */

(function($) {

$.extend({
	metadata : {
		defaults : {
			type: 'class',
			name: 'metadata',
			cre: /({.*})/,
			single: 'metadata'
		},
		setType: function( type, name ){
			this.defaults.type = type;
			this.defaults.name = name;
		},
		get: function( elem, opts ){
			var settings = $.extend({},this.defaults,opts);
			// check for empty string in single property
			if ( !settings.single.length ) settings.single = 'metadata';
			
			var data = $.data(elem, settings.single);
			// returned cached data if it already exists
			if ( data ) return data;
			
			data = "{}";
			
			if ( settings.type == "class" ) {
				var m = settings.cre.exec( elem.className );
				if ( m )
					data = m[1];
			} else if ( settings.type == "elem" ) {
				if( !elem.getElementsByTagName )
					return undefined;
				var e = elem.getElementsByTagName(settings.name);
				if ( e.length )
					data = $.trim(e[0].innerHTML);
			} else if ( elem.getAttribute != undefined ) {
				var attr = elem.getAttribute( settings.name );
				if ( attr )
					data = attr;
			}
			
			if ( data.indexOf( '{' ) <0 )
			data = "{" + data + "}";
			
			data = eval("(" + data + ")");
			
			$.data( elem, settings.single, data );
			return data;
		}
	}
});

/**
 * Returns the metadata object for the first member of the jQuery object.
 *
 * @name metadata
 * @descr Returns element's metadata object
 * @param Object opts An object contianing settings to override the defaults
 * @type jQuery
 * @cat Plugins/Metadata
 */
$.fn.metadata = function( opts ){
	return $.metadata.get( this[0], opts );
};

})(jQuery);/**
 *
 * Color picker
 * Original Author: Stefan Petre www.eyecon.ro
 * Modified, and extended, for use with NetTalk
 * 
 * Dual licensed under the MIT and GPL licenses
 * Some updates to support nt 
 * 
 */
jQuery.extend(jQuery.expr[':'], {
    focus: function(element) { 
        return element == document.activeElement; 
    }
});
 
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="ui-widget ui-widget-content ui-corner-bottom colorpicker">' + // nt
			          '<div class="ui-widget-header ui-corner-all colorpicker_header">Select Color</div>' +
			          '<div class="colorpicker_color">' +
			            '<div>' +
			              '<div>' +
			              '</div>' +
			            '</div>' +
			          '</div>' +
			          '<div class="colorpicker_hue">' +
			            '<div>' +
			            '</div>' +
			          '</div>' +
			          '<div class="colorpicker_new_color">' +
			          '</div>' +
			          '<div class="colorpicker_current_color">' +
			          '</div>' +
			          '<div>' +
			            '<div class="colorpicker_hex colorpicker_field">' +
			              '<div class="colorpicker_prompt colorpicker_hex_prompt">Hex #</div>' +
			              '<input type="text" maxlength="6" class="nt-entry ui-corner-all" style="width:5em" />' +
			            '</div>' +
			          '</div>' +  
			          '<div class="colorpicker_rgb">' + 
			            '<div class="colorpicker_rgb_r colorpicker_field">' +
			              '<div class="colorpicker_prompt">Red</div>' +
			              '<input type="number" maxlength="3" min="0" max="255" class="nt-entry ui-corner-all" style="width:4em" />' +
			              '<spaner></spaner>' +
			            '</div>' +
			            '<div class="colorpicker_rgb_g colorpicker_field">' +
			              '<div class="colorpicker_prompt">Green</div>' +
			              '<input type="number" maxlength="3" min="0" max="255" class="nt-entry ui-corner-all" style="width:4em" />' +
			              '<spaner></spaner>' +
			            '</div>' +
			            '<div class="colorpicker_rgb_b colorpicker_field">' +
			              '<div class="colorpicker_prompt">Blue</div>' +
			              '<input type="number" maxlength="3" min="0" max="255" class="nt-entry ui-corner-all" style="width:4em" />' +
			              '<spaner></spaner>' +
			            '</div>' +
			          '</div>' +  
			          '<div class="colorpicker_hsb">' + 
			            '<div class="colorpicker_hsb_h colorpicker_field">' +
			              '<div class="colorpicker_prompt">Hue</div>' +
			              '<input type="number" maxlength="3" min="0" max="360" class="nt-entry ui-corner-all" style="width:4em" />' +
			              '<spaner></spaner>' +
			            '</div>' +
			            '<div class="colorpicker_hsb_s colorpicker_field">' +
			              '<div class="colorpicker_prompt">Sat</div>' +
			              '<input type="number" maxlength="3" min="0" max="100" class="nt-entry ui-corner-all" style="width:4em" />' +
			              '<spaner></spaner>' +
			            '</div>' +
			            '<div class="colorpicker_hsb_b colorpicker_field">' +
			              '<div class="colorpicker_prompt">Bright</div>' +
			              '<input type="number" maxlength="3" min="0" max="100" class="nt-entry ui-corner-all" style="width:4em" />' +
			              '<spaner></spaner>' +
			            '</div>' +
			          '</div>' +  
			          '<div class="colorpicker_submit">' +
									'<button type="button" class="nt-save-button ui-button ui-widget ui-state-default ui-button-text-only ui-button-text ui-corner-all" role="button" aria-disabled="false">' +
										'<span class="ui-button-text">OK</span>' +
									'</button>' +
			          '</div>' +
			          '<div class="colorpicker_cancel">' +
									'<button id="cpcb" type="button" class="nt-cancel-button ui-button ui-widget ui-state-default ui-button-text-only ui-button-text ui-corner-all" role="button" aria-disabled="false">' +
										'<span class="ui-button-text">Cancel</span>' +
									'</button>' +
			          '</div>' +
			      '</div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				showIcon: true,
				showField: true,
				color: 'ff0000',
				livePreview: true,
				liveField: '',
				liveScope: 'color',
				liveGradients: true,
				forceLookup:false,
				dataField: '',
				closeOnSubmit: true,
				
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
        var v = parseInt($("input:focus").val());
        var min = parseInt($("input:focus").attr("min"));
        var max = parseInt($("input:focus").attr("max"));
        if (v == 'Nan'){
					v = 0;
        }
				switch(pressedKey){
					case 36: // home
						v = min;
						$("input:focus").val(v);
						break;

					case 107: // grey +
					case 38: // up arrow
						v = v + 1;
						if (v > max){v = max;}
						$("input:focus").val(v);
						break;
					case 33: // page up	
						v = v + 10;
						if (v > max){v = max;}
						$("input:focus").val(v);
						break;
					case 109: // grey -
					case 40: // down arrow
						v = v - 1;
						if (v < min){	v = min;}
						$("input:focus").val(v);
						break;
					case 34: // page down
						v = v - 10;
						if (v < min){	v = min;}
						$("input:focus").val(v);
						break;
					case 35: // end
						v = max;
						$("input:focus").val(v);
						break;
						
					default:
						if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
							return false;
						}
				}	
				var cal = $(this).parent().parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				if (this.parentNode==undefined){
					return;
				}			
				var cal = $(this).parent().parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				if (cal.data('colorpicker').liveField != ''){
					$(cal.data('colorpicker').liveField).css(cal.data('colorpicker').liveScope,'#' + HSBToHex(col));
					if (cal.data('colorpicker').liveScope == 'background-color'){
						applyGradients(cal);
					}	
				};
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent().parent();
				//cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				//$(this).parent().parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				//$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().parent().data('colorpicker').livePreview					
				};
				$(document).on('mouseup', current, upIncrement);
				$(document).on('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).off('mouseup', upIncrement);
				$(document).off('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).on('mouseup', current, upHue);
				$(document).on('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).off('mouseup', upHue);
				$(document).off('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).on('mouseup', current, upSelector);
				$(document).on('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).off('mouseup', upSelector);
				$(document).off('mousemove', moveSelector);
				return false;
			},
			enterButton = function (ev) {
				$(this).find('button').addClass('ui-state-focus');
			},
			leaveButton = function (ev) {
				$(this).find('button').removeClass('ui-state-focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				$(cal.data('colorpicker').dataField).val('#' + HSBToHex(col));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
				if (cal.data('colorpicker').closeOnSubmit == true){
					//$(cal.data('colorpicker').el).ColorPickerHide();
					hide(ev);
				}
				$(cal.data('colorpicker').dataField).change()
			},
			clickCancel = function (ev) {
				hide(ev);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				//if (cal.data('colorpicker').dataField != ''){
					$(this).ColorPickerSetColor($(cal.data('colorpicker').dataField).val());
				//}

				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				if (pos.top == 0 && pos.left == 0){
					pos = $(this).next('img').offset()
				}
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).on('mousedown', {cal: cal}, maybehide);
				return false;
			},
			maybehide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					hide(ev);
				}
			},
			hide = function(ev){
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
						if (ev.data.cal.data('colorpicker').liveField != ''){
							$(ev.data.cal.data('colorpicker').liveField).css(ev.data.cal.data('colorpicker').liveScope,'#' + HSBToHex(ev.data.cal.data('colorpicker').origColor) );
							if (ev.data.cal.data('colorpicker').liveScope == 'background-color'){
								applyGradients(ev.data.cal);
							}	
						};
					}
					$(document).off('mousedown', maybehide);			
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			// bj start bruce
			RGBStringToHex = function (rgbString){
				var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/); // parts now should be ["rgb(0, 70, 255", "0", "70", "255"]
				delete (parts[0]);
				for (var i = 1; i <= 3; ++i) {
					parts[i] = parseInt(parts[i]).toString(16);
					if (parts[i].length == 1) parts[i] = '0' + parts[i];
				}
				return('#' + parts.join('')); // "0070ff"
			}, // bj end bruce
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			applyGradients = function(cal){
				if (cal.data('colorpicker').liveGradients == true){
					var col = $(cal.data('colorpicker').liveField).css('background-color');
					if (col != 'transparent'){
						if (Modernizr.cssgradients ==  false){
							if (window.ActiveXObject) {  //for IE
								$(cal.data('colorpicker').liveField).each(function(){
									this.style.filter = '"filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='+col+', endColorstr=#FFFFFFFF)"';
								});	
							}
						} else {
							$(cal.data('colorpicker').liveField).css('background','-webkit-gradient(linear, 0 0, 0 100%, from('+col+'), to(#FFFFFF))'); 
							if ($(cal.data('colorpicker').liveField).css('background') == ''){
								$(cal.data('colorpicker').liveField).css('background','-moz-linear-gradient(center bottom, #FFFFFF 0%, '+col+' 75%)');
							}	
						}	
					}	
				}	
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				if (cal.data('colorpicker').liveField != ''){
					$(cal.data('colorpicker').liveField).css(cal.data('colorpicker').liveScope,'#' + HSBToHex(col));
					if (cal.data('colorpicker').liveScope == 'background-color'){
						applyGradients(cal);
					}	
				};
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'colorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.dataField = '#' + $(this).attr("id");
						if (opt.showIcon == true){
							var _this = '#' + $(this).attr("id");
							//$(this).after('<img id="'+ $(this).attr("id") +'_button" class="colorpicker_lookup" src="/styles/images/colorpicker_lookup.png"/>');
							//$(this).next('img').on('click', function(){ $(_this).trigger('click');});
							$(this).after('<button type="button" name="lookup_btn" id="'+ $(this).attr("id") +'_button" value="" ' + // nt
							              'class="nt-flex nt-small-button nt-button nt-lookup-button ui-button ui-corner-all ui-widget ui-button-icon-only" ' +
										  'title="Click here to select a color"><span class="ui-button-icon ui-icon ui-icon-help"></span>' + 
										  '<span class="ui-button-icon-space"> </span>&nbsp;</button>')
							$(this).next('button').on('click', function(){ $(_this).trigger('click');});	//dblclick
						}
						if (opt.showField == false) {
							$(this).addClass('nt-hidden');
						}
						
						options.fields = cal
											.find('input')
												.on('keyup', keyDown)
												.on('change', change)
												.on('blur', blur)
												.on('focus', focus);
						cal
							.find('span').on('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').on('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').on('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').on('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.on('mouseenter', enterButton)
							.on('mouseleave', leaveButton)
							.on('click', {cal: cal}, clickSubmit);
						cal.find('div.colorpicker_cancel')
							.on('mouseenter', enterButton)
							.on('mouseleave', leaveButton)
							.on('click', {cal: cal}, clickCancel);							
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							if(options.forceLookup){
								$(this).on(options.eventName, show);
							} else {
								$(this).on('click', show); //dblclick
							}
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide(); // jQuery method, not local method.
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
				  // bj start bruce
				  if (col.substr(0,3) == 'rgb'){
						col = RGBStringToHex(col);
					}
					// bj end bruce 
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery);
/*
ntdialog object is a stack to manage popup dialogs
a single var called ntd is created for each page at the end of the declaration.
*/
function ntdialog(){
this.level=-1;
this.luf=new Array();
this.sf=new Array();
this.dlg=new Array();
this.pmt=new Array();
this.open=new Array();
this.action=new Array();
this.calledfrom=new Array();
this.grandparent=new Array();
this.row=new Array();
this.other=new Array();
this.autosave=new Array();
this.oncomplete=new Array();
this.viewstate=new Array();
this.equate=new Array();
this.saved=new Array();
this.deleted=new Array();
this.parent=new Array();
this.browseid=new Array();
}
// ----
ntdialog.prototype.push = function (dlg,luf,pmt,run,action,sf,calledfrom,row,other,autosave,oncomplete,grandparent,viewstate,equate,par,browseid){

 this.level += 1;
 this.dlg[this.level] = dlg.toLowerCase();
 this.luf[this.level] = luf;//lookupfield
 this.sf[this.level] = sf;//sortfield
 this.pmt[this.level] = pmt;//title
 this.row[this.level] = row;//row id
 this.other[this.level] = other;//other parameters
 this.autosave[this.level] = autosave;
 this.saved[this.level] = 0;
 this.deleted[this.level] = 0;
 this.open[this.level] = 0;
 if (action == null){
   this.action[this.level] = 0;
 } else {
   this.action[this.level] = action;
 }
 if (oncomplete){
   this.oncomplete[this.level] = oncomplete;
 } else {
   this.oncomplete[this.level] = '';
 }

 if (viewstate){
   this.viewstate[this.level] = viewstate;
 } else {
   this.viewstate[this.level] = '';
 }

 if (equate){
   this.equate[this.level] = equate;
 } else {
   this.equate[this.level] = '';
 }

 this.calledfrom[this.level] = calledfrom;
 this.parent[this.level] = par;
 this.grandparent[this.level] = grandparent;
 this.browseid[this.level] = browseid;
 if (run == 1){
   this.run();
 }
}
// ----
ntdialog.prototype.current = function (){
  return this.dlg[this.level];
}
// ----
ntdialog.prototype.setRow = function (rowId){  
	this.row[this.level] = rowId;
}
// ----
ntdialog.prototype.getRow = function (){  
	return this.row[this.level];
}
// ----
ntdialog.prototype.run = function (){  
	var lvl = this.level;
	var _this = this;
	var _id = '#popup_'+this.dlg[this.level].toLowerCase()+'_div';
	var _lsid = '#'+this.dlg[this.level].toLowerCase()+'_div';
	//console.log('ntd Run id=' + _id + ' ntdLocalStorage=' + ntdLocalStorage + '  this.action[this.level]=' + this.action[this.level] + ' this.level=' + this.level + ' this.autosave=' + this.autosave[this.level])
	if (this.level>-1){
		if (this.autosave[this.level] != 1){
			if (!ntdLocalStorage){
				SetSessionValue('popup_'+this.dlg[this.level],1);                       
			}	
			//console.log('ntd confirmation dialog open')
			if (this.pmt[this.level]) {
				var t = $(_id).dialog( "option", "title")
				var part = t.substring(
					t.indexOf("'nt-dialog-title-text'>") + 22, 
					t.indexOf("</div>"));
				if (part){
					t.replace('>' + part + '<',this.pmt[this.level])
					$(_id).dialog( "option", "title", t );
				} else {
					$(_id).dialog( "option", "title", this.pmt[this.level] );
				}
			}	
			$(_id).dialog('open');
			try{$('#'+this.dlg[this.level] + '_frm').ntform('hide');} catch(e) {}			
			try{$('#'+this.dlg[this.level] + '_div').ntform('hide');} catch(e) {}
		}
		switch (this.action[this.level]){
		case 1: //insert
			if (ntdLocalStorage){
				try{$('#'+this.dlg[this.level] + '_frm').ntformls("populate",this.action[this.level]);} catch(e) {}
				try{$('#'+this.dlg[this.level] + '_div').ntformls("populate",this.action[this.level]);} catch(e) {}
			} else {
				$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&pressedButton=insert_btn&_popup_=1&_bidv_='+this.row[this.level] + '&_calledfrom_=' + this.calledfrom[this.level] + '&' + this.other[this.level],function(data){xmlProcess(data);firstFocus(_id);});
			}	
			break;
		case 2: //change
			if (ntdLocalStorage){
				try{$('#'+this.dlg[this.level] + '_frm').ntformls("populate",this.action[this.level],this.row[this.level]);} catch(e) {}	
				try{$('#'+this.dlg[this.level] + '_div').ntformls("populate",this.action[this.level],this.row[this.level]);} catch(e) {}	
			} else {
				if (this.autosave[this.level] != 1){
					$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&pressedButton=change_btn&_popup_=1&_bidv_='+this.row[this.level] + '&_calledfrom_=' + this.calledfrom[this.level] + '&' + this.other[this.level],function(data){xmlProcess(data);firstFocus(_id);});
				} else {
					$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&pressedButton=change_btn&_popup_=1&_bidv_='+this.row[this.level] + '&_calledfrom_=' + this.calledfrom[this.level] + '&_auto_='+this.calledfrom[this.level]+'&_parentProc_=' + this.parent[this.level] + '&' + this.other[this.level],function(data){xmlProcess(data);firstFocus(_id);});
				}
			}	

			break;
//   	case 3: //delete
//    	$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&pressedButton=delete_btn&_popup_=1&_bidv_='+this.row[this.level],function(data){xmlProcess(data);firstFocus(_id);});
//    	break;
		case 4: // copy
			if (ntdLocalStorage){
				try{$('#'+this.dlg[this.level] + '_frm').ntformls("populate",this.action[this.level]);} catch(e) {}	
				try{$('#'+this.dlg[this.level] + '_div').ntformls("populate",this.action[this.level]);} catch(e) {}	
			} else {
				$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&pressedButton=copy_btn&_popup_=1&_bidv_='+this.row[this.level] + '&_calledfrom_=' + this.calledfrom[this.level] + '&' + this.other[this.level],function(data){xmlProcess(data);firstFocus(_id);});
			}	
			break;
		case 5: // view
			if (ntdLocalStorage){
				try{$('#'+this.dlg[this.level] + '_frm').ntformls("populate",this.action[this.level]);} catch(e) {}		
				try{$('#'+this.dlg[this.level] + '_div').ntformls("populate",this.action[this.level]);} catch(e) {}		
			} else {
				$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&pressedButton=view_btn&_popup_=1&_bidv_='+this.row[this.level] + '&_calledfrom_=' + this.calledfrom[this.level] + '&' + this.other[this.level],function(data){xmlProcess(data);firstFocus(_id);});
			}	
			break;
		case 6: //lookup
			if (ntdLocalStorage){
				//trick 'cause we don't know if the lookup is a form, or a browse.
				$(_lsid).ntbrowsels("populate");	
				break;
				
			} else {
				$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&Lookup_btn=1&_refresh_=sort&_popup_=1&LookupField='+this.luf[this.level]+'&_sort_='+this.sf[this.level] + '&_title_=' + this.pmt[this.level] + '&_calledfrom_=' + this.calledfrom[this.level] + '&' + this.other[this.level] + '&'+this.luf[this.level]+'='+$('#'+ntd.getluf()).val(),function(data){xmlProcess(data);firstFocus(_id);});
			}	
			break;
//		case 7: //zoom in
//			$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&_zoom_=1&_popup_=1&_date_=' + this.row[this.level],function(data){xmlProcess(data);firstFocus(_id); _this.oncomplete[lvl]();});
//			break;
		case 100: // browse
			//console.log('ntd ls browse ntdLocalStorage=' + ntdLocalStorage + '  id=' + _lsid)
			if (ntdLocalStorage){
				$(_lsid).ntbrowsels("populate");	
				break;
			}	
		case 101: // form
			if (ntdLocalStorage){
				try {$('#'+this.dlg[this.level] + '_frm').ntformls("populate",this.action[this.level]);} catch(e) {}
				try {$('#'+this.dlg[this.level] + '_div').ntformls("populate",this.action[this.level]);} catch(e) {}
				break;
			}
		default:
			if (ntdLocalStorage){// forms with no action
				try { $('#'+this.dlg[this.level] + '_div').ntformls("populate");} catch(e) {}
				try { $('#'+this.dlg[this.level] + '_frm').ntformls("populate");} catch(e) {}
				try { $('#'+this.dlg[this.level] + '_div').ntbrowsels("populate");} catch(e) {}					
			} else {
				$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&_popup_=1&_bidv_='+this.row[this.level] + '&_calledfrom_=' + this.calledfrom[this.level] + '&' + this.other[this.level],function(data){xmlProcess(data);firstFocus(_id);});	
			}
		}
		if (this.autosave[this.level] != 1){
			this.open[this.level]=1;
		}
		try { $('#'+this.dlg[this.level] + '_frm').ntform('resize');} catch(e) {}
		try { $('#'+this.dlg[this.level] + '_div').ntform('resize');} catch(e) {}
	}
}
// ----
ntdialog.prototype.pop = function (dlg){
	try{
		tinyMCE.triggerSave(true,true);
	} catch (e) { //alert('tinyMCE. Save failed. ' + e.message);
	}		
	var par='';
	var rid='';
	var prid='';
	if (this.level > -1){
		if(!ntdLocalStorage){
			SetSessionValue('popup_'+this.dlg[this.level],0)
		}	
		if (ntdFrontLoaded != 1){
			if (dlg != undefined){
				$(dlg).html('');
			} else {
				$('#'+ntd.getdlg().toLowerCase()+'_div').html('');
			}
		}	
		this.open[this.level]=0;
		if (this.saved[this.level]){
			var svd = "&_refresh_=saved"
		} else if (this.deleted[this.level]){	
			var svd = "&_refresh_=saved"
		} else {
			var svd = "&_refresh_=cancelled"
		}		
		if (this.browseid[this.level]){
			if (!ntdLocalStorage){
				$(this.browseid[this.level]).ntbrowse("disable");
			}	
			rid = $(this.browseid[this.level]).ntbrowse('option','randomid');
			prid = '&_parentrid_=' + $(this.browseid[this.level]).ntbrowse('option','parentrid');
		}	
		// moved here from ntd.close
		if (ntdLocalStorage){
			var id = this.dlg[this.level];	
			if (this.calledfrom[this.level] != null){
				id = this.calledfrom[this.level];
			}		
			// forms can be _frm (if there's a <form> tag) or _div (if there isn't). Won't be both though.
			try{$('#'+this.dlg[this.level] + '_frm').ntformls("close",this.action[this.level],this.browseid[this.level],this.row[this.level],id);}catch (e){}
			try{$('#'+this.dlg[this.level] + '_div').ntformls("close",this.action[this.level],this.browseid[this.level],this.row[this.level],id);}catch (e){}
		}
		// end
		this.level -= 1;
		if (this.parent[this.level+1] && this.parent[this.level+1] != ''){
			par = '&_parentProc_='+this.parent[this.level+1]
		}		
		if (this.level > -1){
			if (this.open[this.level] == 0){
				this.run();
			} else {			  
				if(ntdLocalStorage){
					try{$('#'+this.dlg[this.level] + '_frm').ntformls("gotFocusBack",this.action[this.level+1],this.browseid[this.level+1],this.row[this.level+1],id);}catch (e){}
					try{$('#'+this.dlg[this.level] + '_div').ntformls("gotFocusBack",this.action[this.level+1],this.browseid[this.level+1],this.row[this.level+1],id);}catch (e){}			
				} else {
					$.get(this.dlg[this.level]+ntdExt,'_ajax_=1&_event_=gainfocus&_popup_=1&_bidv_=' + this.row[this.level+1]+'&viewstate='+this.viewstate[this.level+1]+'&_equate_='+this.equate[this.level+1]+'&_action_=' + this.action[this.level+1]+'&_from_='+ this.dlg[this.level+1]+'&_calledfrom_=' + this.calledfrom[this.level+1] + svd + '&' + this.other[this.level+1] + par + '&_rid_=' + rid + prid,function(data){xmlProcess(data);});
				}	
			} 
		} else if (this.calledfrom[0]){
				if(ntdLocalStorage){
					try{$('#'+this.calledfrom[0] + '_frm').ntformls("gotFocusBack",this.action[this.level+1],this.browseid[this.level+1],this.row[this.level+1],id);}catch (e){}
					try{$('#'+this.calledfrom[0] + '_div').ntformls("gotFocusBack",this.action[this.level+1],this.browseid[this.level+1],this.row[this.level+1],id);}catch (e){}				
				} else {
					$.get(this.calledfrom[0]+ntdExt,'_ajax_=1&_event_=gainfocus&_popup_=0&_bidv_=' + this.row[this.level+1]+'&viewstate='+this.viewstate[this.level+1]+'&_equate_='+this.equate[this.level+1]+'&_action_=' + this.action[this.level+1]+'&_from_='+ this.dlg[this.level+1]+'&_calledfrom_=' + this.calledfrom[this.level+1] + svd + '&' + this.other[this.level+1] + par + '&_rid_=' + rid + prid,function(data){xmlProcess(data);});
				}
		}
	}
}
// ----
ntdialog.prototype.getluf = function (){
  if (this.level > -1){
    return this.luf[this.level];
  } else {
    return '';
  }
}
// ----
ntdialog.prototype.getdlg = function (){
  if (this.level > -1){
    return this.dlg[this.level];
  } else {
    return '';
  }
}
// ----
ntdialog.prototype.close = function (){
	//console.log('closing')
	$('#popup_'+ntd.getdlg().toLowerCase()+'_div').dialog('close'); // close does a ntd.pop
}
// ----
ntdialog.prototype.cancel = function (){
	var id = this.dlg[this.level];
	if (this.calledfrom[this.level] != null){
		id = this.calledfrom[this.level];
	}
	if (ntdLocalStorage){
		this.close()
	} else {
		var options = { 
			url: id,
			dataType: 'xml',
			success:    function(data) { 
				xmlProcess(data); 
			},
			url: this.dlg[this.level] + '_xxx_cancelled' + ntdExt,
			data: {	pressedButton: 'cancel_btn', _popup_: 1,_ajax_: 1, _grandparent_: this.grandparent[this.level]}
		}; 
		try{$("#"+this.dlg[this.level]+"_frm").ajaxSubmit(options);} catch(e) {}
		try{$("#"+this.dlg[this.level]+"_div").ajaxSubmit(options);} catch(e) {}
	}	
}
// ----
ntdialog.prototype.save = function (event){
	//console.log('ntd.save level=' + this.level + ' row=' + this.row[this.level])
	this.saved[this.level] = 1;
	// save TinyMCE fields
	try{
		tinyMCE.triggerSave(true,true);		      
		$('.nt-tinymce').each(function(index){      
				try{				  
					tinyMCE.execCommand('mceRemoveControl',true,$(this).attr('id'));
				} catch (e) { 
				}						
			});	
	} catch (e) {}
	// continue
	var id = this.dlg[this.level];	
	if (this.calledfrom[this.level] != null){
		id = this.calledfrom[this.level];
	}
	if (ntdLocalStorage){
		if (this.action[this.level] == 1) {
			this.row[this.level] = '';
		} 
		// forms can be _frm (if there's a <form> tag) or _div (if there isn't). Won't be both though.

		try{$('#'+this.dlg[this.level] + '_frm').ntformls("save",this.action[this.level],this.browseid[this.level],this.row[this.level],id);} catch (e){} 
		try{$('#'+this.dlg[this.level] + '_div').ntformls("save",this.action[this.level],this.browseid[this.level],this.row[this.level],id);} catch (e){}
		this.close()
	} else {
		var form = $("#"+this.dlg[this.level]+"_frm")[0];
		var formdata = new FormData(form);  
		formdata.append('pressedButton','save_btn')
		formdata.append('_popup_',1)
		formdata.append('_ajax_',1)
		formdata.append('_grandparent_',this.grandparent[this.level])
		formdata.append('_buttontext_',$(event.target).text())
		$.ajax({
           type: "POST",
		   processData: false,
           contentType: false,
           url: this.dlg[this.level] + '_xxx_validate' + ntdExt,
           data: formdata, 
           success: function(data){xmlProcess(data);}
         });

//		28 may 2020. The code below uses the jquery.form.js extension. Seems to be broken in Chrome 83. https://github.com/jquery-form/form
		// var options = {
			// url: id,
			// dataType: 'xml',
			// success:    function(data) { 
				// xmlProcess(data); 
			// },
			// url: this.dlg[this.level] + '_xxx_validate' + ntdExt,
			// data: {	pressedButton: 'save_btn', _popup_: 1,_ajax_: 1, _grandparent_: this.grandparent[this.level], _buttontext_: $(event.target).text()}
		// }; 
		// $("#"+this.dlg[this.level]+"_frm").ajaxSubmit(options);
		// use the line below instead when debugging, as it's visible in firebug.
		//$.post(id+ntdExt,'pressedButton=save_btn&_popup_=1&'+ $("#"+this.dlg[this.level]+"_frm").serialize(),function(data){xmlProcess(data);});
	}	
}
// ----
ntdialog.prototype.deleteb = function (id,br,ff,par){
	$.post(br+ntdExt,'pressedButton=deleteb_btn&_popup_=1&_fromForm_='+ ff + '&_bidv_=' + id + '&_ajax_=1&_parentProc_' + par,function(data){xmlProcess(data);});
}
// ----
ntdialog.prototype.deletef = function (){
	this.deleted[this.level] = 1;
	var id = this.dlg[this.level];
	if (this.calledfrom[this.level] != null){
		id = this.calledfrom[this.level];//.id;
	}
	$.post(this.dlg[this.level] + '_xxx_delete' + ntdExt,'pressedButton=deletef_btn&_popup_=1&_ajax_=1&'+ $("#"+this.dlg[this.level]+"_frm").serialize(),function(data){xmlProcess(data);});
	this.action[this.level] = 3; // delete
	$('#popup_'+ntd.getdlg().toLowerCase()+'_div').dialog('close'); // close does a ntd.pop
}
// ----
// jQuery UI changed _title method to not allow HTML. This override reverts it so HTML in the Dialog title is allowed.
$.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
    _title: function(title) {
        if (!this.options.title ) {
            title.html("&#160;");
        } else {
            title.html(this.options.title);
        }
    }
}));
// ----
var ntd = new ntdialog();
var ntdExt = '';
var ntdFrontLoaded=0;
var ntdLocalStorage=0;/*
 * jQuery Media Plugin for converting elements into rich media content.
 *
 *     Updated for NetTalk by Bruce Johnson to set the default for unknown extensions, and no extensions, to be HTML
 *
 * Examples and documentation at: http://malsup.com/jquery/media/
 * Copyright (c) 2007-2010 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @author: M. Alsup
 * @version: 0.99 (05-JUN-2013)
 * @requires jQuery v1.1.2 or later
 * $Id: jquery.media.js 2460 2007-07-23 02:53:15Z malsup $
 *
 * Supported Media Players:
 *	- Flash
 *	- Quicktime
 *	- Real Player
 *	- Silverlight
 *	- Windows Media Player
 *	- iframe
 *
 * Supported Media Formats:
 *	 Any types supported by the above players, such as:
 *	 Video: asf, avi, flv, mov, mpg, mpeg, mp4, qt, smil, swf, wmv, 3g2, 3gp
 *	 Audio: aif, aac, au, gsm, mid, midi, mov, mp3, m4a, snd, rm, wav, wma
 *	 Other: bmp, html, pdf, psd, qif, qtif, qti, tif, tiff, xaml
 *
 * Thanks to Mark Hicken and Brent Pedersen for helping me debug this on the Mac!
 * Thanks to Dan Rossi for numerous bug reports and code bits!
 * Thanks to Skye Giordano for several great suggestions!
 * Thanks to Richard Connamacher for excellent improvements to the non-IE behavior!
 */
/*global SWFObject alert Sys */
/*jshint forin:false */
;(function($) {
"use strict";	

var mode = document.documentMode || 0;
var msie = /MSIE/.test(navigator.userAgent);
var lameIE = msie && (/MSIE (6|7|8)\.0/.test(navigator.userAgent) || mode < 9);

/**
 * Chainable method for converting elements into rich media.
 *
 * @param options
 * @param callback fn invoked for each matched element before conversion
 * @param callback fn invoked for each matched element after conversion
 */
$.fn.media = function(options, f1, f2) {
	if (options == 'undo') {
		return this.each(function() {
			var $this = $(this);
			var html = $this.data('media.origHTML');
			if (html)
				$this.replaceWith(html);
		});
	}
	
	return this.each(function() {
		if (typeof options == 'function') {
			f2 = f1;
			f1 = options;
			options = {};
		}
		var o = getSettings(this, options);
		// pre-conversion callback, passes original element and fully populated options
		if (typeof f1 == 'function') f1(this, o);

		var r = getTypesRegExp();
		if (o.src!='0' && o.src!='unknown'){			
			var m = r.exec(o.src.toLowerCase()) || [".html", "html"]; // Bruce set the default to HTML here.
		} else {	
			var m = r.exec(o.src.toLowerCase()) || [];
		}	
		var fn;

		if (o.type)
			m[0] = o.type;
		else
			m.shift();
		for (var i=0; i < m.length; i++) {
			fn = m[i].toLowerCase();
			if (isDigit(fn[0])) fn = 'fn' + fn; // fns can't begin with numbers
			if (!$.fn.media[fn])
				continue;  // unrecognized media type
			// normalize autoplay settings
			var player = $.fn.media[fn+'_player'];
			if (!o.params) o.params = {};
			if (player) {
				var num = player.autoplayAttr == 'autostart';
				o.params[player.autoplayAttr || 'autoplay'] = num ? (o.autoplay ? 1 : 0) : o.autoplay ? true : false;
			}
			var $div = $.fn.media[fn](this, o);

			$div.css('backgroundColor', o.bgColor).width(o.width);
			
			if (o.canUndo) {
				var $temp = $('<div></div>').append(this);
				$div.data('media.origHTML', $temp.html()); // store original markup
			}
			
			// post-conversion callback, passes original element, new div element and fully populated options
			if (typeof f2 == 'function') f2(this, $div[0], o, player.name);
			break;
		}
	});
};

/**
 * Non-chainable method for adding or changing file format / player mapping
 * @name mapFormat
 * @param String format File format extension (ie: mov, wav, mp3)
 * @param String player Player name to use for the format (one of: flash, quicktime, realplayer, winmedia, silverlight or iframe
 */
$.fn.media.mapFormat = function(format, player) {
	if (!format || !player || !$.fn.media.defaults.players[player]) return; // invalid
	format = format.toLowerCase();
	if (isDigit(format[0])) format = 'fn' + format;
	$.fn.media[format] = $.fn.media[player];
	$.fn.media[format+'_player'] = $.fn.media.defaults.players[player];
};

// global defautls; override as needed
$.fn.media.defaults = {
	standards:  true,       // use object tags only (no embeds for non-IE browsers)
	canUndo:    true,       // tells plugin to store the original markup so it can be reverted via: $(sel).mediaUndo()
	width:		400,
	height:		400,
	autoplay:	0,			// normalized cross-player setting
	bgColor:	'#ffffff',	// background color
	params:		{ wmode: 'transparent'},	// added to object element as param elements; added to embed element as attrs
	attrs:		{},			// added to object and embed elements as attrs
	flvKeyName: 'file',		// key used for object src param (thanks to Andrea Ercolino)
	flashvars:	{},			// added to flash content as flashvars param/attr
	flashVersion:	'7',	// required flash version
	expressInstaller: null,	// src for express installer

	// default flash video and mp3 player (@see: http://jeroenwijering.com/?item=Flash_Media_Player)
	flvPlayer:	 'mediaplayer.swf',
	mp3Player:	 'mediaplayer.swf',

	// @see http://msdn2.microsoft.com/en-us/library/bb412401.aspx
	silverlight: {
		inplaceInstallPrompt: 'true', // display in-place install prompt?
		isWindowless:		  'true', // windowless mode (false for wrapping markup)
		framerate:			  '24',	  // maximum framerate
		version:			  '0.9',  // Silverlight version
		onError:			  null,	  // onError callback
		onLoad:			      null,   // onLoad callback
		initParams:			  null,	  // object init params
		userContext:		  null	  // callback arg passed to the load callback
	}
};

// Media Players; think twice before overriding
$.fn.media.defaults.players = {
	flash: {
		name:		 'flash',
		title:		 'Flash',
		types:		 'flv,mp3,swf',
		mimetype:	 'application/x-shockwave-flash',
		pluginspage: 'http://www.adobe.com/go/getflashplayer',
		ieAttrs: {
			classid:  'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000',
			type:	  'application/x-oleobject',
			codebase: 'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + $.fn.media.defaults.flashVersion
		}
	},
	quicktime: {
		name:		 'quicktime',
		title:		 'QuickTime',
		mimetype:	 'video/quicktime',
		pluginspage: 'http://www.apple.com/quicktime/download/',
		types:		 'aif,aiff,aac,au,bmp,gsm,mov,mid,midi,mpg,mpeg,mp4,m4a,psd,qt,qtif,qif,qti,snd,tif,tiff,wav,3g2,3gp',
		ieAttrs: {
			classid:  'clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B',
			codebase: 'http://www.apple.com/qtactivex/qtplugin.cab'
		}
	},
	realplayer: {
		name:		  'real',
		title:		  'RealPlayer',
		types:		  'ra,ram,rm,rpm,rv,smi,smil',
		mimetype:	  'audio/x-pn-realaudio-plugin',
		pluginspage:  'http://www.real.com/player/',
		autoplayAttr: 'autostart',
		ieAttrs: {
			classid: 'clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA'
		}
	},
	winmedia: {
		name:		  'winmedia',
		title:		  'Windows Media',
		types:		  'asx,asf,avi,wma,wmv',
		mimetype:	  isFirefoxWMPPluginInstalled() ? 'application/x-ms-wmp' : 'application/x-mplayer2',
		pluginspage:  'http://www.microsoft.com/Windows/MediaPlayer/',
		autoplayAttr: 'autostart',
		oUrl:		  'url',
		ieAttrs: {
			classid:  'clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6',
			type:	  'application/x-oleobject'
		}
	},
	// special cases
	img: {
		name:  'img',
		title: 'Image',
		types: 'gif,png,jpg'
	},
	iframe: {					// if the SRC does not have an extension then it will default to HTML in an iFrame (Bruce)
		name:  'iframe',
		types: 'html,pdf'   
	},
	silverlight: {
		name:  'silverlight',
		types: 'xaml'
	}
};

//
//	everything below here is private
//


// detection script for FF WMP plugin (http://www.therossman.org/experiments/wmp_play.html)
// (hat tip to Mark Ross for this script)
function isFirefoxWMPPluginInstalled() {
	var plugs = navigator.plugins || [];
	for (var i = 0; i < plugs.length; i++) {
		var plugin = plugs[i];
		if (plugin['filename'] == 'np-mswmp.dll')
			return true;
	}
	return false;
}

var counter = 1;

for (var player in $.fn.media.defaults.players) {
	var types = $.fn.media.defaults.players[player].types;
	$.each(types.split(','), function(i,o) {
		if (isDigit(o[0])) o = 'fn' + o;
		$.fn.media[o] = $.fn.media[player] = getGenerator(player);
		$.fn.media[o+'_player'] = $.fn.media.defaults.players[player];
	});
}

function getTypesRegExp() {
	var types = '';
	for (var player in $.fn.media.defaults.players) {
		if (types.length) types += ',';
		types += $.fn.media.defaults.players[player].types;
	}
	return new RegExp('\\.(' + types.replace(/,/ig,'|') + ')\\b');
}

function getGenerator(player) {
	return function(el, options) {
		return generate(el, options, player);
	};
}

function isDigit(c) {
	return '0123456789'.indexOf(c) > -1;
}

// flatten all possible options: global defaults, meta, option obj
function getSettings(el, options) {
	options = options || {};
	var a, n;
	var $el = $(el);
	var cls = el.className || '';
	// support metadata plugin (v1.0 and v2.0)
	var meta = $.metadata ? $el.metadata() : $.meta ? $el.data() : {};
	meta = meta || {};
	var w = meta.width  || parseInt(((cls.match(/\bw:(\d+)/)||[])[1]||0),10) || parseInt(((cls.match(/\bwidth:(\d+)/)||[])[1]||0),10);
	var h = meta.height || parseInt(((cls.match(/\bh:(\d+)/)||[])[1]||0),10) || parseInt(((cls.match(/\bheight:(\d+)/)||[])[1]||0),10);

	if (w) meta.width = w;
	if (h) meta.height = h;
	if (cls) meta.cls = cls;
	
	// crank html5 style data attributes
	var dataName = 'data-';
    for (var i=0; i < el.attributes.length; i++) {
        a = el.attributes[i], n = $.trim(a.name);
        var index = n.indexOf(dataName);
        if (index === 0) {
			n = n.substring(dataName.length);
			meta[n] = a.value;
        }
    }

	a = $.fn.media.defaults;
	var b = options;
	var c = meta;

	var p = { params: { bgColor: options.bgColor || $.fn.media.defaults.bgColor } };
	var opts = $.extend({}, a, b, c);
	$.each(['attrs','params','flashvars','silverlight'], function(i,o) {
		opts[o] = $.extend({}, p[o] || {}, a[o] || {}, b[o] || {}, c[o] || {});
	});

	if (typeof opts.caption == 'undefined') opts.caption = $el.text();

	// make sure we have a source!
	opts.src = opts.src || $el.attr('href') || $el.attr('src') || 'unknown';
	return opts;
}

//
//	Flash Player
//

// generate flash using SWFObject library if possible
$.fn.media.swf = function(el, opts) {
	var f, p;
	if (!window.SWFObject && !window.swfobject) {
		// roll our own
		if (opts.flashvars) {
			var a = [];
			for (f in opts.flashvars)
				a.push(f + '=' + opts.flashvars[f]);
			if (!opts.params) opts.params = {};
			opts.params.flashvars = a.join('&');
		}
		return generate(el, opts, 'flash');
	}

	var id = el.id ? (' id="'+el.id+'"') : '';
	var cls = opts.cls ? (' class="' + opts.cls + '"') : '';
	var $div = $('<div' + id + cls + '>');

	// swfobject v2+
	if (window.swfobject) {
		$(el).after($div).appendTo($div);
		if (!el.id) el.id = 'movie_player_' + counter++;

		// replace el with swfobject content
		window.swfobject.embedSWF(opts.src, el.id, opts.width, opts.height, opts.flashVersion,
			opts.expressInstaller, opts.flashvars, opts.params, opts.attrs);
	}
	// swfobject < v2
	else {
		$(el).after($div).remove();
		var so = new SWFObject(opts.src, 'movie_player_' + counter++, opts.width, opts.height, opts.flashVersion, opts.bgColor);
		if (opts.expressInstaller) so.useExpressInstall(opts.expressInstaller);

		for (p in opts.params)
			if (p != 'bgColor') so.addParam(p, opts.params[p]);
		for (f in opts.flashvars)
			so.addVariable(f, opts.flashvars[f]);
		so.write($div[0]);
	}

	if (opts.caption) $('<div>').appendTo($div).html(opts.caption);
	return $div;
};

// map flv and mp3 files to the swf player by default
$.fn.media.flv = $.fn.media.mp3 = function(el, opts) {
	var src = opts.src;
	var player = /\.mp3\b/i.test(src) ? opts.mp3Player : opts.flvPlayer;
	var key = opts.flvKeyName;
	src = encodeURIComponent(src);
	opts.src = player;
	opts.src = opts.src + '?'+key+'=' + (src);
	var srcObj = {};
	srcObj[key] = src;
	opts.flashvars = $.extend({}, srcObj, opts.flashvars );
	return $.fn.media.swf(el, opts);
};

//
//	Silverlight
//
$.fn.media.xaml = function(el, opts) {
	if (!window.Sys || !window.Sys.Silverlight) {
		if ($.fn.media.xaml.warning) return;
		$.fn.media.xaml.warning = 1;
		alert('You must include the Silverlight.js script.');
		return;
	}

	var props = {
		width: opts.width,
		height: opts.height,
		background: opts.bgColor,
		inplaceInstallPrompt: opts.silverlight.inplaceInstallPrompt,
		isWindowless: opts.silverlight.isWindowless,
		framerate: opts.silverlight.framerate,
		version: opts.silverlight.version
	};
	var events = {
		onError: opts.silverlight.onError,
		onLoad: opts.silverlight.onLoad
	};

	var id1 = el.id ? (' id="'+el.id+'"') : '';
	var id2 = opts.id || 'AG' + counter++;
	// convert element to div
	var cls = opts.cls ? (' class="' + opts.cls + '"') : '';
	var $div = $('<div' + id1 + cls + '>');
	$(el).after($div).remove();

	Sys.Silverlight.createObjectEx({
		source: opts.src,
		initParams: opts.silverlight.initParams,
		userContext: opts.silverlight.userContext,
		id: id2,
		parentElement: $div[0],
		properties: props,
		events: events
	});

	if (opts.caption) $('<div>').appendTo($div).html(opts.caption);
	return $div;
};

//
// generate object/embed markup
//
function generate(el, opts, player) {
	var $el = $(el);
	var o = $.fn.media.defaults.players[player];
	var a, key, v;

	if (player == 'iframe') {
		o = $('<iframe' + ' width="' + opts.width + '" height="' + opts.height + '" >');
		o.attr('src', opts.src);
		o.css('backgroundColor', o.bgColor);
	}
	else if (player == 'img') {
		o = $('<img>');
		o.attr('src', opts.src);
		if (opts.width)
			o.attr('width', opts.width);
		if (opts.height)
			o.attr('height', opts.height);
		o.css('backgroundColor', o.bgColor);
	}
	else if (lameIE) {
		a = ['<object width="' + opts.width + '" height="' + opts.height + '" '];
		for (key in opts.attrs)
			a.push(key + '="'+opts.attrs[key]+'" ');
		for (key in o.ieAttrs || {}) {
			v = o.ieAttrs[key];
			if (key == 'codebase' && window.location.protocol == 'https:')
				v = v.replace('http','https');
			a.push(key + '="'+v+'" ');
		}
		a.push('></ob'+'ject'+'>');
		var p = ['<param name="' + (o.oUrl || 'src') +'" value="' + opts.src + '">'];
		for (key in opts.params)
			p.push('<param name="'+ key +'" value="' + opts.params[key] + '">');
		o = document.createElement(a.join(''));
		for (var i=0; i < p.length; i++)
			o.appendChild(document.createElement(p[i]));
	}
	else if (opts.standards) {
		// Rewritten to be standards compliant by Richard Connamacher
		a = ['<object type="' + o.mimetype +'" width="' + opts.width + '" height="' + opts.height +'"'];
		if (opts.src) a.push(' data="' + opts.src + '" ');
		if (msie) {
			for (key in o.ieAttrs || {}) {
				v = o.ieAttrs[key];
				if (key == 'codebase' && window.location.protocol == 'https:')
					v = v.replace('http','https');
				a.push(key + '="'+v+'" ');
			}
		}
		a.push('>');
		a.push('<param name="' + (o.oUrl || 'src') +'" value="' + opts.src + '">');
		for (key in opts.params) {
			if (key == 'wmode' && player != 'flash') // FF3/Quicktime borks on wmode
				continue;
			a.push('<param name="'+ key +'" value="' + opts.params[key] + '">');
		}
		// Alternate HTML
		a.push('<div><p><strong>'+o.title+' Required</strong></p><p>'+o.title+' is required to view this media. <a href="'+o.pluginspage+'">Download Here</a>.</p></div>');
		a.push('</ob'+'ject'+'>');
	}
	 else {
	        a = ['<embed width="' + opts.width + '" height="' + opts.height + '" style="display:block"'];
	        if (opts.src) a.push(' src="' + opts.src + '" ');
	        for (key in opts.attrs)
	            a.push(key + '="'+opts.attrs[key]+'" ');
	        for (key in o.eAttrs || {})
	            a.push(key + '="'+o.eAttrs[key]+'" ');
	        for (key in opts.params) {
	            if (key == 'wmode' && player != 'flash') // FF3/Quicktime borks on wmode
					continue;
	            a.push(key + '="'+opts.params[key]+'" ');
	        }
	        a.push('></em'+'bed'+'>');
	    }	
	// convert element to div
	var id = el.id ? (' id="'+el.id+'"') : '';
	var cls = opts.cls ? (' class="' + opts.cls + '"') : '';
	var $div = $('<div' + id + cls + '>');
	$el.after($div).remove();
	if (lameIE || player == 'iframe' || player == 'img')
		$div.append(o);
	else
		$div.html(a.join(''));
	
	if (opts.caption) 
		$('<div>').appendTo($div).html(opts.caption);
	return $div;
}


})(jQuery);;var NetTalkVersion=12.34
// ---------------------------------------------
var sessionManagerId='';
var cnt=0;
var tcnt=0;
var fcnt='';
var icnt='';
var ntMultiTab=false;

function initTabID(){
	ntMultiTab=true;
	var newId=false;
	var ce=false;
	if (!sessionStorage.id || localStorage.newIdRequired == 1){
		localStorage.newIdRequired = 0;
		sessionStorage.id = Math.random().toString(36).substr(5);		
		newId = true;
	} else {
		if (document.cookie.indexOf('x-TabID=') < 0){
			newId = true;
		}	
	}

	// for ajax calls no cookie is used - rather the x-TabID header is set to the current session storage ID.
	$.ajaxSetup({
		headers: { 'x-TabID': sessionStorage.id }
	});	
	
	if (newId){
		if (localStorage.fromTabId){
			$.get('NewTabID'+ntdExt,'_ajax_=1&x-FromTabID=' + localStorage.fromTabId,function(data){xmlProcess(data);});	
		} else {
			$.get('NewTabID'+ntdExt,'_ajax_=1',function(data){xmlProcess(data);});			
		}	
	}	
	
	// can't change headers for a non-ajax request. 
	// these cookies are "fleeting" so clear them away.
	document.cookie = 'x-TabID=; expires=Thu, 01-Jan-70 00:00:01 GMT;';	
	document.cookie = 'x-FromTabID=; expires=Thu, 01-Jan-70 00:00:01 GMT;';	
	localStorage.fromTabId = '';
	
	// mouse could be left, right or middle... so set FromTabId preemptivly.
	$('a').mousedown(function (event) { 
		localStorage.fromTabId = sessionStorage.id;
	}); 
	// a Ctrl-Click, or right-click/new tab or whatever does NOT go through this code. which is why FromTabID is set on MouseDown
	$('a').click(function (event) {		
		if (event.metaKey || event.ctrlKey || $(this).attr('target') == '_blank'){ 	// going to a new tab
		} else {  																	// normal click, so want TabID Cookie
			setTabIdCookie()
		}		
	});  
	initTabIDButtons();
};

function initTabIDButtons(){	
	// set anything that has a data-tabid attribute
	$('[data-tabid]').keydown(function(event){initTabIDWorker();}).mousedown(function (event) {initTabIDWorker();}); 
	// setting on button click appears to be too late, so set on button down.
	$('button').mousedown(function (event) {initTabIDWorker();}).keydown(function(event){initTabIDWorker();});  
	$('input[type="submit"]').mousedown(function (event) {initTabIDWorker();}).keydown(function(event){initTabIDWorker();});  
	$('input[type="button"]').mousedown(function (event) {initTabIDWorker();}).keydown(function(event){initTabIDWorker();});  
	$('input[type="image"]').mousedown(function (event) {initTabIDWorker();}).keydown(function(event){initTabIDWorker();});  
	$('input[type="reset"]').mousedown(function (event) {initTabIDWorker();}).keydown(function(event){initTabIDWorker();});  
};

function initTabIDWorker(){
	var t= $(this).attr('target');
	var oc = $(this).attr('onclick');
	if (oc){
		oc = oc.indexOf("'_blank'");
	} else {
		oc = -1;
	}
	if (t == '_blank' || oc >= 0){
		localStorage.fromTabId = sessionStorage.id;
		localStorage.newIdRequired = 1;
	} else {
		setTabIdCookie();
	}		
};

function setTabIdCookie(){
	if (location.protocol === 'https:') {
		document.cookie = 'x-TabID=' + sessionStorage.id + '; secure';
	} else {
		document.cookie = 'x-TabID=' + sessionStorage.id + ';';
	}  
}

function getTabId(){
  return(sessionStorage.id)
}

function countDown(){
  hh = parseInt( cnt / 3600 );
  mm = parseInt( cnt / 60 ) % 60;
  ss = cnt % 60;
  if(hh){
    var t = ' ' + hh + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
  }	else {
    var t = ' ' + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
  }
  jQuery('#' + icnt).html(t);
  cnt -= 1;
  if (cnt ==0){
    window.open(fcnt,'_top');
  } else {
        setTimeout("countDown();",1000);
  }
};

function resetCountDown(){
	cnt = tcnt;
	if (sessionManagerId) {
		$(sessionManagerId).ntsessionmanager("resetCountDown")
	}
}

function startCountDown(t,f,i){
  if (t){
        tcnt = t;
    }
    if (f){
        fcnt = f;
    }
    if (i){
        icnt = i;
    }
    cnt = tcnt;
  countDown();
};

function versionCheck(v){
  var s = v + '';
  s = s.replace('.','');
  v = Number(v);
  if (v != NetTalkVersion){
    $('#_ver' + s).html('UPDATE OF WEB FOLDER REQUIRED - Try pressing Ctrl-F5. Server is on version ' + v + ' but web folder is on version ' +  NetTalkVersion);
	//window.location.reload(true);  // what happens if the server folder has not been updated though?
  } else {
        $('#_ver' + s).hide();
    }
}

function showInfo(m,t,d){
  if (!d){
    d = 'alert_div';
  }
  $('#'+d).html(m).hide().fadeIn(1000);
  if (t){
    setTimeout("hideInfo('"+d+"');",t);
  }
}
    
function hideInfo(d){    
  if (!d){
    d = 'alert_div';
  }
  $('#'+d).show().fadeOut(1000,function(){$('#'+d).html('')});
}  

function getScreenSize(force){
	if (force==true || sessionStorage._ScreenWidth_ != $(window).width() || sessionStorage._ScreenHeight_ != $(window).height()){
		sessionStorage._ScreenWidth_ = $(window).width();
		sessionStorage._ScreenHeight_ = $(window).height();
		$.get('SetSessionValue'+ntdExt,'_ScreenWidth_=' + $(window).width() + '&_ScreenHeight_=' + $(window).height() + '&_ajax_=1',function(data){xmlProcess(data);});
	}	
}

// ---------------------------------------------
// functions to handle busy graphic
var busyCounter=0;
$(document).ready(function() {
	busyCounter = 0;
	$("#_busy").hide(); 
	$(document).on("ajaxSend",function(event){
		$("#_busy").css('left',event.pageX).css('right',event.pageY);
		$("#_busy").show();
		busyCounter += 1;
		if (window.attachEvent && !window.addEventListener) { // detects IE8 and below
			$('input:radio, input:checkbox').off('click.iefix');
		};
	});
	$(document).on("ajaxComplete",function(){;
		if (busyCounter){busyCounter -= 1;}
		if (busyCounter ==0){ $("#_busy").hide(); };
		if (window.attachEvent && !window.addEventListener) { // detects IE8 and below
			$('input:radio, input:checkbox').on('click.iefix',function () {
				this.blur();
				this.focus();
			});
		}
	});
});
// ---------------------------------------------
function ntConfirm(m,t,b1,b2,f,p1,p2,p3){
	if (mobilemode){
		f(p1,p2,p3);
		return;
	}
	setTimeout(function(){
        var a = jQuery(":focus").attr('id');
		$("#message_alert").remove();
        if (t){
			$('body').append('<div id="message_alert" title="' + t + '">' + m + '</div>');
		} else {	
			$('body').append('<div id="message_alert" title="Alert">' + m + '</div>');
		}	
		$("#message_alert").dialog({
			resizable: false,
			modal: true,
			buttons: [	{			
				text: b1,
				click: function() {
					$(this).dialog("close");
					$("#message_alert").remove();
					f(p1,p2,p3);
				} }, {
				text: b2,
				click: function() {
					$(this).dialog("close");
					$("#message_alert").remove();					
				} } 				
			],
			open: function() {
				 $(this).parent().find('button:nth-child(1)').focus(); 
			},
			close: function() {
				 $('#' + a).focus();  
			}
		});		
    }, 1);
};
// ---------------------------------------------
function ntAlert(message,title,timer,oktext,css){
	if(!oktext){oktext = 'OK'}
	if(!title){title = 'Alert'}
	if(css){
		var cssDialog = 'nt-' + css + '-dialog'
		var cssButton = 'nt-' + css + '-button'
	}
	setTimeout(function() {
        var a = jQuery(":focus").attr('id');
		$("#message_alert").remove();
		$('body').append('<div id="message_alert" title="' + title + '">' + message + '</div>');
		$("#message_alert").dialog({
			classes: {"ui-dialog": cssDialog},
			resizable: false,
			modal: true,
			width: "500px",
			buttons: [{
				text: oktext,
				class: "ui-button " + cssButton,
				click: function() {
					$(this).dialog("close");
					$("#message_alert").remove();
				}
			}],
			open: function() {
				 $(this).parent().find('button:nth-child(1)').focus(); 
			},
			close: function() {
				 $('#' + a).focus();  
			}
		});
		if (timer){
			setTimeout(function() { $("#message_alert").dialog("close"); }, timer);
		}
    }, 1);
}
// ---------------------------------------------
var hadfocus='';
var setfocus='';
function afterSv(){
  GreenAll();
}

var tables = [];
function GreenAll(){
  for(var e = 0; e < tables.length; e++){
     tables[e].table=document.getElementById(tables[e].tid); // necessary after ajax call
     if (tables[e].table != null){
       tables[e].parseCell();
       tables[e].applyGreenBar();
     }
     tables[e].makeResizable();
     tables[e].prepColumns();
     tables[e].bind();
     //tables[e].restoreFocus();
  }
}
// -----------------------------------------------------------------------------------
// AutoTab support
// If an entry field has data-nt-autotab=1", then when the maxlength is reached focus
// automatically moves to the next field.
// -----------------------------------------------------------------------------------
jQuery.fn.focusNextInputField = function() { // this function from http://jqueryminute.com/, thanks to jdSharp.
    return this.each(function() {
        var fields = $(this).parents('form:eq(0),body').find('button,input,textarea,select').not('[readonly]');
        var index = fields.index( this );
        if ( index > -1 && ( index + 1 ) < fields.length ) {
            fields.eq( index + 1 ).focus();
        }
        return false;
    });
};

jQuery(document).ready( function(){
    jQuery("body").on("[data-nt-autotab=1]","keyup",function(e) {
        if ($(this).val().length == $(this).attr("maxlength")){
            if((e.which >= 32) && (e.which <= 122)){
                jQuery(':focus').focusNextInputField();
            }
        }
    });
});


// recursive function to find the first checkbox which is "inside" c.
function getCheckbox(c){
 if (c.type == 'checkbox'){
  return c;
 }
 if (c.firstChild != null){
  a = getCheckbox(c.firstChild);
  if (a != null){
  return a;
  }
 }
 while (c.nextSibling != null){
  a = getCheckbox(c.nextSibling);
  if (a != null){
   return a;
  }
 }
 return null;
}

function dsb(event,f,b,n,prid,prv){
 var i=0;
 if (n=='deleteb_btn'){
  if(confirm('Are you sure you want to delete this record?')==false){
   return false;
  }
 }
 // dont send files if form is cancelled.
 if (n=='cancel_btn'){
                jQuery(':file').remove();
 }
 // set all buttons disabled, if target of button is same frame.
 if (f.target == "" || f.target == "_self"){
         jQuery(':button').attr('disabled', 'disabled');
 }
 for (var e=0 ; e < f.elements.length; e++) {
   if (f.elements[e].name == prid){
    f.elements[e].value = prv;
    i = 1;
   }
 }
 var bid = document.createElement('INPUT');
 bid.type = 'hidden';
 bid.name = '_buttontext_';
 bid.value = $(event.target).closest("button").val();
 f.appendChild(bid);

 jQuery("#_webkit_").val(Math.random());
 if ((i==0) && (prid != '')){
  var rid = document.createElement('INPUT');
  rid.type = 'hidden';
  rid.name = prid;
  rid.value = prv;
  f.appendChild(rid);
 }
 var pb = document.createElement('INPUT');
 pb.type = 'hidden';
 pb.name = 'pressedButton';
 pb.value = n;
 f.appendChild(pb);
 osf(f);
 f.submit();
}

function osf(f){
    if(f.target=='' || f.target=='_self' || f.target=='_top') {
        for (var e=0 ; e < f.elements.length; e++) {
            if(f.elements[e].type=='button'){
                f.elements[e].disabled = true;
            }
        }
    }
}

function ml(ta,ml,e){
	var k;
	if(window.event){ // IE
		k = e.keyCode
	} else if(e.which){ // Netscape/Firefox/Opera/Safari
		k = e.which
	};
	switch(k){
	case 8: // backspace
	case null:
	case undefined:  // del
	case 120: // ctrl-x
		return true		
	case 118: // ctrl-v
		break;
	}	  
	if (k > 60000){
		return true;
	}
	return (ta.value.length <= ml);
}

function firstFocus(id){
  var e;
  var t = 4000000000;
    jQuery(id + ' :input').not('[readonly],[disabled],[type="hidden"]').each(function(){
      tx = $(this).offset().top
      if (tx+1 < t && tx != 0){  // +1 to handle lookup buttons that are 1 pixel higher than the textarea field.
        e = this;
        t = tx;
      }
    })
    $(e).focus();
}

function nextFocus(f,pname,skipone){
  var i = 0;
  var j = 0;
  if (skipone==2){ // pname is specified control to get focus
    for (var e=0 ; e < f.elements.length; e++) {
      if(f.elements[e].name==pname){
  try{
    f.elements[e].focus();
  } catch (e) {
  }
  break;
      }
    }
  } else {
    for (var e=0 ; e < f.elements.length; e++) {
      if (i==1){
  if ((f.elements[e].type == "text") || (f.elements[e].type == "textarea") || (f.elements[e].type == "checkbox") || (f.elements[e].type == "radio") || (f.elements[e].type == "select-one")){
    //|| (f.elements[e].type == "button")
    if(f.elements[e].readOnly != true){
      if((skipone==1) && (j==0)){
        j = 1;
      } else {
        try{
    f.elements[e].focus();
        } catch (e) {
        }
        break;
      }
    }
  }
      }
      else{
  if(pname==''){
    if(f.elements[e].readOnly != true){
      try{
        f.elements[e].focus();
      } catch (e) {
      }
      break;
    }
  } else {
    if(f.elements[e].name==pname){
      i = 1;
    }
  }
      }
    }
  }
}


function removeElement(fn,dn){
 var f=document.getElementById(fn);
 var dv=document.getElementById(dn);
 var a;
 var b;
 if (dv != null){
  var divs = dv.getElementsByTagName('DIV');
  for(var e = divs.length-1; e>=0 ; e--){
   if ((divs[e].id != dn) && (divs[e].id != '')){
    removeElement(fn,divs[e].id);
   }
  }
  if (f != null){
   for(var e = f.elements.length-1; e>=0 ; e--) {
    a = f.elements[e].parentNode.id;
    b = dv.id
    if (a==b){
     try{
      dv.removeChild(f.elements[e]);
     } catch (e) {
     }
    }
   }
  }
 }
}

function FieldValue(f,e){
  var ans ='';
  var typ = f.type;
  var i = 0;
  var j = 0;
  if (typ == undefined){
    typ = f[0].type;
  }
  switch (typ){
  case "radio":
    j = f.length;
    for(i = 0; i < j; i++) {
      if(f[i].checked) {
  ans = f[i].value;
  break;
      }
    }
    break;
  case "checkbox":
		if (f.checked){
			ans = $(f).attr("data-true");
			if(ans===undefined){
				ans = f.value;
			}
		} else {
			ans = $(f).attr("data-false");
			if(ans===undefined){
				ans = 0;
			}			
		}
    break;
  case "select-multiple":
    j = f.length;
    for(i = 0; i < j; i++) {
      if(f.options[i].selected) {
        ans = ans + ';|;' + f.options[i].value;
    }
    }
    break;
  default:
    if ($(f).data('luv')){
      ans = $(f).data('luv');
    } else {
      ans = f.value;
    }
  }
  // if called as a post, do not encode & and %. If called from EIP then do.
  if ((ans != undefined) && ((e == 0) || (e == undefined))){
                ans = ans.replace(/%/g,"%25");
                ans = ans.replace(/&/g,"%26");
                ans = ans.replace(/#/g,"%23");
				ans = ans.replace(/\+/g,"%2B");
        }
  return ans
}

function SetSessionValue(name,value){
	$.get('SetSessionValue'+ntdExt,name+'='+value+'&_ajax_=1',function(data){xmlProcess(data);});
}

function TabChanged(url,value){
	$.get(url+ntdExt,'_tab_='+value+'&_ajax_=1',function(data){xmlProcess(data);});
}

function aGet(url,parms){
	$.get(url+ntdExt,parms+'&_ajax_=1&_cb_='+url,function(data){xmlProcess(data);ntWidth();});
}

function GetTab(name){
	$.get(name+ntdExt,'_ajax_=1',function(data){xmlProcess(data);});
}

function xmlProcess(data,processString){
	if ((typeof(data) == 'string') && (processString != true)) {
		$('html').trigger("ajaxComplete");
		return;
	}
	$('response',data).each(function(i){
		var elem = $("response",data).get(i); // returns Element object
		var type = $(elem).attr("type");

		if (window.ActiveXObject) {  //for IE
			var s = elem.xml;           // IE 9 doesn't get this
			if (s == undefined){
				var s = (new XMLSerializer()).serializeToString(elem); // but IE9 can do this, which IE7/8 can't
			}
		} else { // code for Mozilla, Firefox, Opera, etc.
			var s = (new XMLSerializer()).serializeToString(elem);
		}
		if (s){
			s = s.substring(s.indexOf('>')+1,s.lastIndexOf('<'));
			if (type=='element'){
				d = $(elem).attr("id");
				$("#"+d).replaceWith(s);
				try{$("#"+d).page().removeClass("ui-page").css('border',0);} catch(e){};
			} else if (type=='script'){
				s = s.replace(/&quot;/g,'"');
				s = s.replace(/&amp;/g,"&");
				s = s.replace(/&lt;/g,"<");
				s = s.replace(/&gt;/g,">");
				s = s.replace(/&apos;/g,"'");
				try{
				eval(s);
				} catch (err){
					try{
					} catch (err){}
				}
			}
		}
	});
	afterSv();
	if (ntMultiTab){
		initTabIDButtons();
	}
    gradient();
    resetCountDown();
}

// SetServer
function sv(id,name,ev,val,par,sil){
	hadfocus = id;
	if(par==undefined){
		$.get(name+ntdExt,{_event_: ev,value: val,_ajax_:1, _rnd_: Math.random()},function(data){xmlProcess(data);});
	}else{
		var parms='';
		for(var d = 2; d < arguments.length; d++){
			parms += arguments[d] + '&';
		}
		parms += '_ajax_=1&_rnd_=' + Math.random();
		$.get(name+ntdExt,parms,function(data){xmlProcess(data);});
	}
}

//Set timer
function SetTimer(name,t,par,sil){
	if(par==undefined)  {par='fred=1'};
	if(sil==undefined)  {sil='fred=2'};
	setTimeout("sv('','"+name+"','','','"+par+"','"+sil+"');",t);
};

// SelectDate and ResetAfterDate called by Date Lookup button
var cr1;
var cs;
var ct;
var cb1;
var cb2;
// SelectDate
function sd(f,e,p,r,b1,b2){
 ct = document.forms[f].elements[e];
 switch (p){
 case "@D6":
 case "@D06":
  var c = new calendar6(ct);
  break;
 case "@D2":
 case "@D02":
  var c = new calendar2(ct);
  break;
 }
 c.popup();
 if (arguments.length == 4){
  cr1 = r;
  cs = 1;
 }
 if (arguments.length == 6){
  cr1 = r;
  cs = 2;
  cb1 = b1;
  cb2 = b2;
 }
}

// jQuery Default Settings
jQuery.datepicker.setDefaults({
   closeText: 'Cancel',
   dateFormat: 'm/dd/yy',
   showButtonPanel: true,
   showOn: 'nothing',
   buttonImageOnly: true,
   buttonImage: '/styles/images/calendar.gif',
   buttonText: 'Calendar',
   constrainInput: false
});
function bubbleStyle(div,attr,col){
    if ((attr=='background-color') && (col != 'transparent')){
		$("#"+div).parent().css('background-color',col);
        $("#"+div).css('background-color','transparent');
        $("#"+div).parent('[class~="nt-grad"]').each(function(){
			if (Modernizr.cssgradients ==  false){
				if (window.ActiveXObject) {  //for IE
					var ua = navigator.userAgent;
					var re  = new RegExp("MSIE ([0-8]{1,}[\.0-8]{0,})");
					if (re.exec(ua) != null){
						$("#"+div).parent().each(function(){
							this.style.filter = '"filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='+col+', endColorstr=#FFFFFFFF)"';
						});
					}
				}
			} else {

				$(this).css('background','linear-gradient(to top, #FFFFFF 0%, '+col+' 75%)');
				//$("#"+div).parent().css('background','-webkit-gradient(linear, 0 0, 0 100%, from('+col+'), to(#FFFFFF))');
				//if ($("#"+div).parent().css('background') == ''){
				//	$("#"+div).parent().css('background','-moz-linear-gradient(center bottom, #FFFFFF 0%, '+col+' 75%)');
				//}


			}
		});
    }
}

function gradient(){
	$('.nt-grad').each(function(){
		var col = $(this).css('background-color');
		if ((col != 'transparent') && (col != 'rgba(0, 0, 0, 0)')){
			if (Modernizr.cssgradients ==  false){
				if (window.ActiveXObject) {  //for IE
					var ua = navigator.userAgent;
					var re  = new RegExp("MSIE ([0-8]{1,}[\.0-8]{0,})");
					if (re.exec(ua) != null){
						this.style.filter = '"filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='+col+', endColorstr=#FFFFFFFF)"';
					}
				}
			} else {
				$(this).css('background','linear-gradient(to top, #FFFFFF 0%, '+col+' 75%)');			
				//$(this).css('background','-webkit-gradient(linear, 0 0, 0 100%, from('+col+'), to(#FFFFFF))');
				//if ($(this).css('background') == ''){
				//	$(this).css('background','-moz-linear-gradient(center bottom, #FFFFFF 0%, '+col+' 75%)');
				//}
			}
        }
	});
}

// ---------------------------------------------
function browseCssSupport(){
// $('body').prepend('<div id="_ntbc_" class="nt-browse-colors"></div>');
}

// ---------------------------------------------
// run html5 support scripts when page opens
jQuery(document).on('ready', function(event) {
	gradient();
    browseCssSupport();
});
// ---------------------------------------------
// IE checkbox / radio fix for IE <= 8
// http://norman.walsh.name/2009/03/24/jQueryIE
$(function () {
	if (window.attachEvent && !window.addEventListener) { // detects IE8 and below
        $('input:radio, input:checkbox').on('click.iefix',function () {
            this.blur();
            this.focus();
        });
    }
});


// ---------------------------------------------
//  Extension of jQueryUi dialog to add a call to SetAccess
// ---------------------------------------------
(function(jQuery){
    var _init = jQuery.ui.dialog.prototype._init;

    //Custom Dialog Init
    jQuery.ui.dialog.prototype._init = function() {
        _init.apply(this, arguments);
        var _this=this;
    if ((this.options.addsec != '') && (this.options.addsec != undefined)){
            tb = this.uiDialogTitlebar;
            tb.append('<a href="#" id="dialog-access" class="ui-dialog-titlebar-close dialog-access ui-dialog-titlebar-access ui-corner-all nt-dialog-titlebar-secwin"><span class="ui-icon ui-icon-key nt-sec-icon-key"></span></a>');
            //Secwin Button
            jQuery('.dialog-access', tb).hover(function(){
                jQuery(this).addClass('ui-state-hover');
            }, function(){
                jQuery(this).removeClass('ui-state-hover');
            }).click(function(){
                ntd.push('secwinwebuseraccess','','header',1,2,null,'','','_screen_=' + _this.options.addsec);
                return false;
            });
        }
    };

})(jQuery);


function swpf(id,addsec){
	$('#form-access-'+id).prepend('<a href="#" id="a-form-access-'+id+'" class="nt-form-page-access ui-widget-header ui-corner-all"><span class="ui-icon ui-icon-key"></span></a>');
	$('#a-form-access-'+id).hover(function(){
		$(this).addClass('ui-state-hover');
	}, function(){
		$(this).removeClass('ui-state-hover');
	}).click(function(){
		ntd.push('secwinwebuseraccess','','header',1,2,null,'','','_screen_=' + addsec);
		return false;
	});
}

function primeLocation(pLat,pLong,pAlt,pAcc,pAltAcc,pHeading,pSpeed,pDiv){
	if (pDiv){
		$(pDiv).html('Getting position')
	}
	var watchId = navigator.geolocation.watchPosition(
		function(pos){ // location found
			navigator.geolocation.clearWatch(watchId);
			$(pLat).val(pos.coords.latitude);
			$(pLong).val(pos.coords.longitude);
			$(pAlt).val(pos.coords.altitude);
			$(pAcc).val(pos.coords.accuracy);
			$(pAltAcc).val(pos.coords.altitudeAccuracy);
			$(pHeading).val(pos.coords.heading);
			$(pSpeed).val(pos.coords.speed);
			if (pDiv){
				$(pDiv).html('Position:' + pos.coords.latitude.toString().substring(0,7) +',' + pos.coords.longitude.toString().substring(0,7))
			}
			
		},
		function(err){ // location not found
			switch(err.code){
				case err.PERMISSION_DENIED: 
					//debug('Device Location: Permission Denied')
					$(pDiv).html('Location: Permission Denied')
					break;
				
				case err.POSITION_UNAVAILABLE: 
					//debug('Device Location: Position Unavailable')
					$(pDiv).html('Location: Permission Unavailable')
					break;
					
				case err.TIMEOUT: 
					//debug('Device Location: Timeout')
					$(pDiv).html('Location: Permission Timeout')
					break;
					
				default: 
					//debug('Device Location: Unknown Error: ' + err.code)
					$(pDiv).html('Location: Unknown Error: ' + err.code)
				break;
			}
		},
		{ enableHighAccuracy: false, timeout: 30000,maximumAge: 300000 }		
		);


	navigator.geolocation.getCurrentPosition(
		function(pos){ // location found
			//debug('location found ' + pos.coords.latitude +  ',' + pos.coords.longitude + ' pDiv=' + pDiv)
			$(pLat).val(pos.coords.latitude);
			$(pLong).val(pos.coords.longitude);
			$(pAlt).val(pos.coords.altitude);
			$(pAcc).val(pos.coords.accuracy);
			$(pAltAcc).val(pos.coords.altitudeAccuracy);
			$(pHeading).val(pos.coords.heading);
			$(pSpeed).val(pos.coords.speed);
			if (pDiv){
				$(pDiv).html('Position:' + pos.coords.latitude.toString().substring(0,7) +',' + pos.coords.longitude.toString().substring(0,7))
			}
		},
		function(err){ // location not found
			switch(err.code){
				case err.PERMISSION_DENIED: 
					//debug('Device Location: Permission Denied')
					$(pDiv).html('Location: Permission Denied')
					break;
				
				case err.POSITION_UNAVAILABLE: 
					//debug('Device Location: Position Unavailable')
					$(pDiv).html('Location: Position Unavailable')
					break;
					
				case err.TIMEOUT: 
					//debug('Device Location: Timeout')
					$(pDiv).html('Location: Timeout')
					break;
					
				default: 
					//debug('Device Location: Unknown Error: ' + err.code)
					$(pDiv).html('Location: Unknown Error: ' + err.code)
				break;
			}

		},
		{ enableHighAccuracy: false, timeout: 30000,maximumAge: 300000 }		
		);
}

function getLocation(){
	navigator.geolocation.getCurrentPosition(sendLocation,noSendLocation);
}

function sendLocation(pos){
	$.get('SetSessionValue'+ntdExt,'_Latitude_=' + pos.coords.latitude +
                               '&_Longitude_=' + pos.coords.longitude +
                               '&_Altitude_=' + pos.coords.altitude +
                               '&_Accuracy_=' + pos.coords.accuracy +
                               '&_AltitudeAccuracy_=' + pos.coords.altitudeAccuracy +
                               '&_Heading_=' + pos.coords.heading +
                               '&_Speed_=' + pos.coords.speed +
                               '&_LocationUnixTime_=' + parseInt(pos.timestamp/1000) +
                               '&_LocationDate_=' + parseInt(pos.timestamp / 86400000 + 61730) +
                               '&_LocationTime_=' + parseInt((pos.timestamp % 86400000) / 10) +
                               '&_LocationError_=' +
                               '&_ajax_=1'
         ,function(data){xmlProcess(data);});
}

function noSendLocation(err){
	switch(err.code){
		case err.PERMISSION_DENIED: 
			SetSessionValue('_LocationError_',err.code + '_permission_denied');
			debug('Location: Permission Denied')
			break;
		
		case err.POSITION_UNAVAILABLE: 
			SetSessionValue('_LocationError_',err.code + '_position_unavailable');
			debug('Location: Position Unavailable')
			break;
			
		case err.TIMEOUT: 
			SetSessionValue('_LocationError_',err.code + '_timeout');
			debug('Location: Timeout')
			break;
			
		default: 
			SetSessionValue('_LocationError_',err.code + '_unknown');
			debug('Location: Unknown Error: ' + err.code)
			break;
	}
};

function ntPlay(soundfile){
	var audio = document.createElement('audio');
	audio.src=soundfile;
	audio.play();
	audio.onended = function(){
		audio.remove(); //remove after playing to clean the Dom
	};
};

function ntWidth(){
	$('#body_div').css('min-width',$('#contentbody_div').outerWidth(true) + $('.nt-menuleft:first').outerWidth(true) +20);
}

//------------------------------------------------------------------------------
function consoleLog(s){
  //$('#consolelog').append(s + '<br/>')
}
//------------------------------------------------------------------------------
// returns date in Clarion Date format. Default is local time (of the browser), pass 1 in parameter to get utc time.
function clarionToday(utc){ 
  time = Date.now()/10;
  if (!utc){
    d = new Date();
    time -= d.getTimezoneOffset()*6000
  } 
  return (parseInt(time / 8640000) + 61730)	  
}
//------------------------------------------------------------------------------
// returns local date/time in unix millisecond format.
function localTime(){ 
  time = Date.now();
  d = new Date();
  time -= d.getTimezoneOffset()*60000
  return (time)	  
}
//------------------------------------------------------------------------------
// returns time in Clarion time format. Default is local time (of the browser), pass 1 in parameter to get utc time.
function clarionClock(utc){
  time = Date.now()/10;
  if (!utc){
    d = new Date();
    time -= d.getTimezoneOffset()*6000
  }  
  return (parseInt(1+(time % 8640000)))
}
//------------------------------------------------------------------------------
function today(pic){
	var p=0;
	var td = new Date(); // primed with current date and time utc
	return formatDate(td,pic);
}
//------------------------------------------------------------------------------
function clock(pic){
	var td = new Date();
	return formatTime(td,pic);
}	
//------------------------------------------------------------------------------
function formatDate(value,pic){
	const shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const longMonthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
	var zero=false;
	var separatorChar = '/';
	var p=0;
	if (typeof(value)=='number'){
		if(value < 100000){// clarion date value
			value = new Date(ClarionToUnixDate(value,localTime())*1000);
		} else {
			value = new Date(value);		
		} 
	}
	if (typeof(value)=='object'){
		var dd = value.getDate();
		var mm = value.getMonth()+1; //January is 0!
		var yyyy = value.getFullYear();
	}
	if (!pic){
		p = 1;
	} else { // default to mm/dd/yyyy
		if (pic.charAt(0) == '@'){
			pic = pic.substring(1) // remove leading @
		}
		if (pic.charAt(0) == 'D' || pic.charAt(0) == 'd'){
			pic = pic.substring(1) // remove leading D or d
		}
		if (pic.charAt(0) == '0'){
			zero = true;
		}
		p = parseInt(pic);
		if ( p < 1){ p = 1};
	}	
	switch(p){
	case 1: // mm/dd/yyyy
		yyyy = yyyy % 100
		// drop down to 2 and keep going
	case 2: 
		if (zero){
			if(mm<10) { mm='0'+mm} 			
		}
		if(dd<10) {	dd='0'+dd} 
		value = mm + separatorChar + dd + separatorChar + yyyy;
		break;
	case 3:
		value = shortMonthNames[mm-1] + ' ' + dd  + ', ' + yyyy
		break;
	case 4: 
		value = longMonthNames[mm-1] + ' ' + dd  + ', ' + yyyy
		break;
	case 5: 
		yyyy = yyyy % 100
	case 6: 
		if (zero){
			if(dd<10) {	dd='0'+dd} 
		}
		if(mm<10) { mm='0'+mm} 			
		value = dd + separatorChar + mm + separatorChar + yyyy;
		break;
	case 7: 
		yyyy = yyyy % 100
	case 8: 
		if (zero){
			if(dd<10) {	dd='0'+dd} 
		}	
		value =  dd + ' ' + shortMonthNames[mm-1] + ' ' + yyyy
		break;
	case 9: 
		yyyy = yyyy % 100
	case 10: 
		if(dd<10) {	dd='0'+dd} 
		if(mm<10) { mm='0'+mm} 			
		value = yyyy + separatorChar + mm + separatorChar + dd;
		break;
	case 11: 
		yyyy = yyyy % 100
	case 12: 
		if(dd<10) {	dd='0'+dd} 
		if(mm<10) { mm='0'+mm} 
		value = yyyy+mm+dd
		break;
	case 13: 
		yyyy = yyyy % 100
	case 14: 
		if (zero){
			if(mm<10) { mm='0'+mm} 			
		}	
		value = mm + separatorChar + yyyy
		break;
	case 15: 
		yyyy = yyyy % 100
	case 16: 
		if(mm<10) { mm='0'+mm}
		value = yyyy + separatorChar + mm
		break;
	default:
		if(dd<10) {	dd='0'+dd} 
		if(mm<10) { mm='0'+mm} 
		value = mm + separatorChar + dd + separatorChar + yyyy;
		break;
	}
	return value;
}
//------------------------------------------------------------------------------
function formatTime(value,pic){
	var zero=false;
	var p=0;
	if (typeof(value)=='number'){ 
		if (value < 8640010){ // clarion time value
			var hh = parseInt(value / 360000) 
			var mm = parseInt(value % 360000 / 6000) 
			var ss = parseInt(value % 6000)
		} else {
			value = new Date(value);
			var hh = value.getHours();  
			var mm = value.getMinutes();
			var ss = value.getSeconds(); 
		}
	} else if (typeof(value)=='object'){		
		var hh = value.getHours();  
		var mm = value.getMinutes();
		var ss = value.getSeconds(); 
	} else {
		return value;
	}	
	if(ss<10) {	ss = '0'+ss} 
	if(mm<10) { mm = '0'+mm} 
	if (!pic){
		p = 1; // default to @t1
	} else { 
		if (pic.charAt(0) == '@'){
			pic = pic.substring(1) // remove leading @
		}
		if (pic.charAt(0) == 'T' || pic.charAt(0) == 't'){
			pic = pic.substring(1) // remove leading D or d
		}
		if (pic.charAt(0) == '0'){
			zero = true;
		}
		p = parseInt(pic);
		if ( p < 1){ p = 1};
	}	
	if (zero){
		if(hh<10) {	hh='0'+hh} 
	}	
	switch(p){
	case 1: // hh:mm
		value = hh+':'+mm;
		break;
	case 2: // hhmm
		value = hh+''+mm
		break;
	case 3: // hh:mm xm
		if (hh>=12){
			if (hh>12) hh -= 12;
			value = hh+':'+mm + ' pm';
		} else {
			value = hh+':'+mm + ' am';
		}
		break;
	case 4: // hh:mm:ss
		value = hh+':'+mm+':'+ss;
		break;
	case 5: // hhmmss
		value = hh+''+mm+''+ss;
		break;
	case 6: // hh:mm:ss xm
		if (hh>=12){
			if (hh>12) hh -= 12;
			value = hh+':'+mm +':'+ss + ' pm';
		} else {
			value = hh+':'+mm +':'+ss+ ' am';
		}
		break;
	}
	return value;	
}
//------------------------------------------------------------------------------
function formatDateTime(value,pic){ 
	var pics = pic.split('@')
	return formatDate(value,pics[1]) + ' ' + formatTime(value,pics[2])
}
//------------------------------------------------------------------------------
function format(value,pic){
	if(typeof(value)=='string'){
		return value
	}	
	if (pic.charAt(0) == '@'){
		pic = pic.substring(1) // remove leading @
	}
	if (pic.charAt(0) == 'D' || pic.charAt(0) == 'd'){
		return formatDate(value,pic)
	}
	if (pic.charAt(0) == 'T' || pic.charAt(0) == 't'){
		return formatTime(value,pic)
	}
	if (pic.charAt(0) == 'U' || pic.charAt(0) == 'u'){
		return formatDateTime(value,pic)
	}
	return value
}
//------------------------------------------------------------------------------
function ClarionToUnixDate(pDate,pTime){
	var r=0;
	if (pDate > 61730){ // 61730 = date(1,1,1970)
		r = ((pDate-61730)*86400) -(-pTime / 100) //  ! 86400 = seconds in 1 day
	} else {
		r = pTime / 100 // convert to seconds
	}	
  return parseInt(r)
}
//------------------------------------------------------------------------------
function GetUserTimeOffset(){
	date = new Date();
	SetSessionValue('_UserTimeOffset_',date.getTimezoneOffset()) 
};

function debug(text){
	$("#debug").append(text + '<br/>') ;
	console.log(text);
}

function getUTCTime(){
 var t = new Date().getTime();
 return t;
}
function onlyDigits(text){
	if(text){
		text.replace(/[^0-9]/g, '');
	}
	return text;	
}
function autoHeightText(textarea){
	var text = $('#' + textarea).val();
    var matches = text.match(/\n/g); // // look for any "\n" occurences
    var breaks = matches ? matches.length : 2;
	$('#' + textarea).attr('rows',breaks + 2);
}
;
function makeUrlData(fields){
	var ans = ''
	$.each(fields,function(index,value){
	  ans = ans + '&' + encodeURIComponent($($('#'+value)).attr('data-do')) +'=' + encodeURIComponent($('#'+value).val())
	})
	ans = ans.substr(1) // removes the leading &
	return(ans)
}
function textToTextarea(text,textarea){
	text = text.replace(/&/g, "&amp;");
	text = text.replace(/</g, "&lt;");
	text = text.replace(/>/g, "&gt;");
	text = text.replace(/'/g, "&apos;");
	text = text.replace(/"/g, "&quot;");
	$('#' + textarea).html(text);
	autoHeightText(textarea);	
}
function toggleButton(elem,divId){
	$('#' + divId).toggle();
	if ($('#' + divId).is(':visible')){
		$(elem).html('-');
	} else {
		$(elem).html('+');
	}
}
function setCss(customProperty,value){
	document.documentElement.style.setProperty(customProperty,value);
	return 0;
}
function getCss(customProperty){
	return getComputedStyle(document.documentElement).getPropertyValue(customProperty)
}
// converts css value, like 2em or 15px into (integer) pixels.
function getPixels(val,elemId){
	if (val.indexOf('px')>0){
		return parseInt(val)
	} else if (val.indexOf('rem')>0){
		return parseFloat(getComputedStyle(document.documentElement).fontSize)
	} else if (val.indexOf('em')>0){ 
		var elem = document.getElementById(elemId);
		if (!elem){
			elem = document.documentElement
		}	
		return parseFloat(getComputedStyle(elem).fontSize) * parseInt(val);
	}
	return parseInt(val)
}

function reloadStylesheets() {
    var queryString = '?c=' + new Date().getTime();
    $('link[rel="stylesheet"]').each(function () {
        this.href = this.href.replace(/\?.*|$/, queryString);
    });
	return 0;
} 

function fullscreen(elem) {
	if (!elem){
		elem = document.querySelector("body");
	}	
	elem.requestFullscreen().catch(err => {
		console.log('Error attempting to enable full-screen mode: ');
	});
}

function notfullscreen() {
	document.exitFullscreen();
}

function toggleFullscreen(elem) {
	if (!document.fullscreenElement) {
		fullscreen(elem)  
	} else {
		notfullscreen()
	}
}
;
// the code below is necessary because the XMLSerializer in xmlProcess contracts empty nodes to the <span/> form, which
// jquery 3.5.0 does not like. Working to remove the call to XMLSerializer is desired.
var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
jQuery.htmlPrefilter = function( html ) {
	return html.replace( rxhtmlTag, "<$1></$2>" );
};
///////////////////////////////////////////////////////
//   
//   jQuery UI Plugin for Session Manager
//   Part of NetTalk by CapeSoft 
//   (c) 2021 
//
///////////////////////////////////////////////////////

(function( $, undefined ) {

$.widget( "ui.ntsessionmanager", {
	options: {
		divId: '',	
		homePage: '/',
		showCountdown: true,
		prompt: 'Session Expires In:',
		promptCss: 'nt-session-prompt',
		sessionTimeout: 15 * 60, // seconds - server-side timeout
		warn: true,
		warningTime: 30, // seconds
		messageTitle: 'Warning',
		messageText: 'Your Session is about to expire.',
		okButtonText: 'Extend Session',
		okButtonCss: 'nt-session-okbutton',
		cancelButtonText: 'End Session',
		canceButtonCss: 'nt-session-cancelbutton'		
	},
	state: {
		warnOpen: false,
		timeLeft: 15 * 60, // seconds // time when the server-side will expire		
		touchCycles: 0 // keep the server alive from the client for this many cycles.
	},
	//------------------------------------------------------
	_create: function() {      
	},
	//------------------------------------------------------
	_init: function() {
		sessionManagerId = '#' + this.options.divId; // external variable declared in netweb.js 
		this.startCountDown();
	},
	// ---------------------------------------------
	startCountDown(){
		if (this.options.showCountdown){
			$('#' + this.options.divId).html('<div id="' + this.options.divId + '_prompt" class = "' + this.options.promptCss + '">' + this.options.prompt + '</div><div id="' + this.options.divId + '_timer" ></div>')
		}
		this.resetCountDown()
		this.countDown();
	},	
	// ---------------------------------------------
	resetCountDown(){
		this.state.timeLeft = this.options.sessionTimeout;
	},
	// ---------------------------------------------
	setTimeOut(newtimeout){
		if (newtimeout > this.state.timeLeft){
			this.touchSession()
		}
		this.state.touchCycles = 0;
		if (newtimeout > this.options.sessionTimeout){
			this.state.touchCycles = Math.floor((newtimeout-1) / this.options.sessionTimeout)
		}
		this.state.timeLeft = newtimeout - (this.state.touchCycles * this.options.sessionTimeout)
	},
	// ---------------------------------------------
	touchSession(){
		SetSessionValue('_touch_',1);
		this.resetCountDown();
	},
	// ---------------------------------------------
	endSession(homePage){
		var date = new Date();
		date.setTime(date.getTime() + (1 * 100));
		document.cookie = 'logout_btn=true; expires=' + date.toGMTString();
		if (!homePage){
			homePage = this.options.homePage
		} 
		if (!homePage){
			homePage = '/'
		}  
		window.open(homePage,'_top');
	},
	// ---------------------------------------------
	countDown(){
		var showtime = (this.state.touchCycles * this.options.sessionTimeout) + this.state.timeLeft
		var hh = parseInt( showtime / 3600 );
		var mm = parseInt( showtime / 60 ) % 60;
		var ss = showtime % 60;
		if (hh || mm > 5 ){
			var t = ' ' + hh + ":" + (mm < 10 ? "0" + mm : mm);
		} else {
			var t = ' ' + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
		}	
		$('#' + this.options.divId + '_timer').html(t);
		this.state.timeLeft -= 1;
		if (this.state.touchCycles > 0 && (this.state.timeLeft < this.options.warningTime || this.state.timeLeft < 5)){
			this.state.touchCycles -= 1
			this.touchSession()
		} else {
			if (this.options.warn && this.state.warnOpen == false && this.state.timeLeft < this.options.warningTime){
				this.confirm();
			}
		}
		if (this.state.timeLeft == 0){
			this.endSession()
		} else {
			setTimeout("$('#"+this.options.divId+"').ntsessionmanager('countDown');",1000);			
		}
	},
	// ---------------------------------------------
	confirm(){		
		var _this = this;
		_this.state.warnOpen = true
		setTimeout(function(){
			var a = $(":focus").attr('id');
			$("#message_alert").remove();
			$('body').append('<div id="message_alert">' + _this.options.messageText + '</div>');
			$("#message_alert").dialog({
				title: '<span style="margin-left:1em;margin-right:1em;" class=" ui-icon ui-icon-info ui-icons-warning"></span>' + _this.options.messageTitle,
				resizable: false,
				modal: true,
				width: 500,
				classes: {"ui-dialog": "nt-warning-dialog no-close"},
				buttons: [	{			
					text: $("<textarea/>").html(_this.options.okButtonText).text(),
					class: "ui-button nt-button nt-save-button",
					click: function() {
						$(this).dialog("close");
						$("#message_alert").remove();
						_this.touchSession();
					} }, {
					text: $("<textarea/>").html(_this.options.cancelButtonText).text(),
					class: "ui-button nt-button nt-delete-button",
					click: function() {
						$(this).dialog("close");
						$("#message_alert").remove();					
						_this.endSession(_this.options.homePage);
					} } 				
				],
				open: function() {
					$(this).parent().find('button:nth-child(1)').focus(); 
				},
				close: function() {
					$('#' + a).focus();
					_this.state.warnOpen = false
				}
			});	
			setTimeout(function() { $("#message_alert").dialog("close"); }, (_this.options.warningTime) * 1000);
		}, 1);
	}	
//------------------------------------------------------
});

$.extend( $.ui.ntsessionmanager, {
	version: "@VERSION"
});

})( jQuery );
///////////////////////////////////////////////////////
//
//   jQuery Plugin for NetTalk Browse
//   Part of NetTalk by CapeSoft
//   (c) 2020
//
///////////////////////////////////////////////////////

(function( $, undefined ) {

$.widget( "ui.ntbrowse", {
        options: {
			id: '',               // contains div name (minus the _div part)
			tableId: '',			
			mobile:0,
			randomid: '',
			procedure: '',            // server procedure
			title: '',            // title for dialog
			parent: '',           // parent procedure which is including this browse
			parentrid: '',        // rid of parent procedure if it is a browse
			form: '',             // url of the form procedure
			formInsert: '',
			formCopy: '',
			formChange: '',
			formView: '',
			formDelete: '',
			formpopup: 1,         // is the form procedure opened as a popup?
			popup: 0,             // is the browse on a popup window
			bgOne:'nt-browse-gb1',                  // first color used in greeen-barring
			bgTwo:'nt-browse-gb2',                  // second color used in green-barring
			bgOver:'nt-browse-mouseover',                   // color for row currently under mouse
			bgSelect:'nt-browse-selected',                  // highlight color - shows selected record
			rowsHigh:1,
			column:0,
			highlightSelected:1,
			greenbar:1,
			mouseover:1,
			rowSelected:1,
			resizable:0,
			value: '',
			selectAction: '',
			cancelAction: '',
			closeAction: '',
			lookupField: '',
			confirmDelete:1,
			confirmDeleteMessage:'Are you sure you want to delete this record?',
			deleteText:'Delete',
			cancelText:'No',
			confirmText:'Confirm',				
			expand: 'circle-arrow-s',
			contract: 'circle-arrow-n',
			addsec:'',    				// secwin access rights procedure name
			urlExt:'',
			json:0,
			localStorage:0,
			locateTimeGap:750,     // minimum time elapsed after typing before immediate locator kicks in.
			timer:0,				// live refresh via timer
			timerRefresh:'',
			wsLive:0,             // live refresh via web sockets
			wsTables:[],          // array of table names to monitor
			wsRefresh:'current',
			rubberband:0,
			hideRubberbandOnMouseUp:0,
			rubberbandMinColumn:0,
			rubberbandMaxColumn:0,
			viewOnly:0,
			eip:'eip',
			onCloseButton:function(){}, 
			onCancelButton:function(){},
			onSelectButton:function(selId){},			
			onBrowseRefresh:function(){}
		},
		state: {
			locatorTime:0, // time of last change to the locator, for immediate locating.
			locatorTimerActive:0, // a locator timer is currently active
			exportProgress:'',
			exportButton:'',
			rubberband:0,	// 0= off, 1=mouse down, 2=mouse moved sufficiently

			rubberStartCell:0,
			rubberStartX:0, // x pos of mouse when mouse down
			rubberStartY:0, // y pos of mouse when mouse down
			outofsight:0,  // band is "visible" but off the top of the visible part of the page



			rubberbandOn:0, // band is visible 
			mouseCol:0, // column the mouse is currently over
			mouseElem:0, // cell the mouse is currently over
			locatorValue:'',
			locatorId:'',
			nav:0, // gotopage has been called, so don't call it again.
			blurring:0
		},


		//------------------------------------------------------
        _create: function() {
			var _this=this;
			this.options.divId = '#' + this.options.id + '_div';
			$(this.options.divId).addClass("exists");
			if (this.options.urlExt==''){try{this.options.urlExt=ntdExt} catch(e){};}
			this.ready();			
			if (this.options.timer >0){
				this.timerStart(this.options.timer);
			}
			if (this.options.rubberband){
				$(this.options.divId).append('<div id="' + this.options.id + '_rubberband" class="nt-browse-rubberband"></div>')
				$('#' + this.options.id + '_rubberband').hide();
			}	
        },

		//------------------------------------------------------
        _init: function() {
			if (this.options.wsLive){
				for (var i = 0; i < this.options.wsTables.length; i++) {
					nts.watch(this.options.id,"","table","",this.options.wsTables[i],this.liveUpdate,this)
				}	
			}  		
        },
		//------------------------------------------------------
        liveUpdate: function(json,_this) {
			if (_this.options.wsRefresh != 'disabled'){
				_this.server(_this.options.procedure,'_refresh_='+_this.options.wsRefresh + '&_netrefresh_=1')		
			}
        },

		//------------------------------------------------------
		ready: function(selectedRowId) {
			this._makeResizable();
			this._bindEvents();
			this.refresh(selectedRowId);
			if (this.options.popup==1){
				try{
					$("#popup_" + this.options.procedure + "_div").dialog("option","title",this.options.title);
				} catch (e) {};	
			}					
        },

		//------------------------------------------------------
        destroy: function() {
			$.Widget.prototype.destroy.apply( this, arguments );
        },

		//------------------------------------------------------
		// called on window unload event
        destructor: function() {
			var parms = '_rid_=' + this.options.randomid + '&_event_=clearbrowse';
			return this;
        },

		//------------------------------------------------------
        _bindEvents : function() {
			var _this = this;
			$(this.element).find('[data-elem="browse-table"]').off('scroll.tbl').on('scroll.tbl',function(e){_this.scrollTable(e);});
			//$(this.element).off('scroll.tbl','[data-elem="browse-table"]').on('scroll.tbl','[data-elem="browse-table"]',function(e){_this.scrollTable(e);});
			$(this.element).off('focus.bt','[data-do="lo"]').on('focus.bt','[data-do="lo"]',function(e){_this.locateFocus(this);});
			$(this.element).off('blur.bt','[data-do="lo"]').on('blur.bt','[data-do="lo"]',function(e){_this.locateBlur(this);});
			$(this.element).off('asifBlur.bt','[data-do="lo"]').on('asifBlur.bt','[data-do="lo"]',function(e){_this.locateAsifBlur(this,e);});
			$(this.element).off('change.bt','[data-do="lo"]').on('change.bt','[data-do="lo"]',function(e){_this.locate(this,e);});
			$(this.element).off('input.bt','[data-do="lo"]').on('input.bt','[data-do="lo"]',function(e){_this.locate(this,e);});
			$(this.element).off('keyup.bt','[data-do="lo"]').on('keyup.bt','[data-do="lo"]',function(e){_this.KeyPressLoc(this,e);}); // only for IE8/IE9
			$(this.element).off('valuechanged.bt','[data-do="lo"]').on('valuechanged.bt','[data-do="lo"]',function(e){_this.locateChanged(this);});
			$(this.element).off('change.bt','[data-do="'+this.options.eip+'"]').on('change.bt','[data-do="'+this.options.eip+'"]',function(e){_this.eip(this);});
			$(this.element).off('click.bt','[data-do="cv"]').on('click.bt','[data-do="cv"]',function(e){_this.toggleRowStatus(this);});
			$(this.element).off('click.bt','[data-do="bserver"]').on('click.bt','[data-do="bserver"]',function(e){_this.bbutton(this);});
			$(this.element).off('click.bt','[data-do="other"]').on('click.bt','[data-do="other"]',function(e){_this.eip(this);});
			$(this.element).off('click.bt','[data-do="sh"]').on('click.bt','[data-do="sh"]',function(ev){_this.sort(this,ev);});
			$(this.element).off('click.bt','[data-do="clo"]').on('click.bt','[data-do="clo"]',function(e){_this.clearLocator();});
			$(this.element).off('click.bt','[data-do="insert"]').on('click.bt','[data-do="insert"]',function(e){_this.edit(this,1,'insert');});
			$(this.element).off('click.bt','[data-do="copy"]').on('click.bt','[data-do="copy"]',function(e){_this.edit(this,4,'copy');});
			$(this.element).off('click.bt','[data-do="change"]').on('click.bt','[data-do="change"]',function(e){_this.edit(this,2,'change');});
			$(this.element).off('click.bt','[data-do="view"]').on('click.bt','[data-do="view"]',function(e){_this.edit(this,5,'view');});
			$(this.element).off('click.bt','[data-do="deleteb"]').on('click.bt','[data-do="deleteb"]',function(e){_this.deleteb(this);});
			$(this.element).off('click.bt','[data-do="browsecancel"]').on('click.bt','[data-do="browsecancel"]',function(e){_this.cancel();});
			$(this.element).off('click.bt','[data-do="close"]').on('click.bt','[data-do="close"]',function(e){_this.close();});
			$(this.element).off('click.bt','[data-do="select"]').on('click.bt','[data-do="select"]',function(e){_this.select(this);});
			$(this.element).off('click.bt','[data-do="first"]').on('click.bt','[data-do="first"]',function(e){_this.nav('','first');});
			$(this.element).off('click.bt','[data-do="previous"]').on('click.bt','[data-do="previous"]',function(e){_this.nav('','previous');});
			$(this.element).off('click.bt','[data-do="next"]').on('click.bt','[data-do="next"]',function(e){_this.nav('','next');});
			$(this.element).off('click.bt','[data-do="last"]').on('click.bt','[data-do="last"]',function(e){_this.nav('','last');});
			$(this.element).off('click.bt','[data-do="export"]').on('click.bt','[data-do="export"]',function(e){_this.exportTo('excel',this);});
			if (this.options.rubberband){
				$(this.element).off('mousedown.tbl','[data-elem="browse-table"]').on('mousedown.tbl','[data-elem="browse-table"]',function(e){_this.mouseDownTable(e);});
				$(this.element).off('mousemove.tbl','[data-elem="browse-table"]').on('mousemove.tbl','[data-elem="browse-table"]',function(e){_this.mouseMoveTable(e);});			
				$(this.element).off('mouseup.tbl','[data-elem="browse-table"]').on('mouseup.tbl','[data-elem="browse-table"]',function(e){_this.mouseUpTable(e);});
				$(this.element).off('mousedown.cll','[data-elem="browse-cell"]').on('mousedown.cll','[data-elem="browse-cell"]',function(e){_this.mouseDownCell(e,this);});
				$(this.element).off('mousemove.cll','[data-col]').on('mousemove.cll','[data-col]',function(e){_this.mouseMoveCell(e,this);});
				$(this.element).off('mouseup.cll','[data-elem="browse-cell"]').on('mouseup.cll','[data-elem="browse-cell"]',function(e){_this.mouseUpCell(e,this);});
				$(this.element).off('mousedown.rbr','#' + this.options.id + '_rubberband').on('mousedown.rbr','#' + this.options.id + '_rubberband',function(e){_this.mouseDownCell(e);_this.mouseDownTable(e);});
				$(this.element).off('mousemove.rbr','#' + this.options.id + '_rubberband').on('mousemove.rbr','#' + this.options.id + '_rubberband',function(e){_this.mouseMoveTable(e);});
			}
			return this;
        },

		//------------------------------------------------------
        refresh : function(selectedRowId) {
			this._prepColumns();
			this.setvalue(selectedRowId);
			this.options.table=document.getElementById(this.options.tableId);
			if (this.options.value){
				this.options.rowSelected = $('[data-nt-id="' + this.options.value + '"]').closest('[data-elem="browse-row"]').prevAll().length;
				this.options.rowSelected = parseInt(this.options.rowSelected/this.options.rowsHigh) * this.options.rowsHigh;
			} else {
				this.options.rowSelected = -1
			}	
		
			this._applyGreenBar();
			this._preContractVertically();
			
			var _this = this;			
			if (this.options.table){
				$('#' + this.options.tableId).find('[data-elem="browse-row"]')
					.off('mouseover.bt mouseout.bt click.bt dblclick.bt')
					.on('mouseover.bt',function(ev){_this._onMouseIn(this,ev);})
					.on('mouseout.bt',function(ev){_this._onMouseOut(this,ev);})
					.on('dblclick.bt',function(ev){_this._onDoubleClick(this,ev);})
					.on('click.bt',function(ev){_this.clickRow(this,ev);});
				$('#' + this.options.tableId + ' input')
					.off('keydown.bt focus.bt')
					.on('keydown.bt',function(e){_this._keydown(this,e);})
					.on('focus.bt',function(e){_this._setColumn(this,e);});
				
				$('#locator1' + _this.options.id + ',' + '#locator2' + _this.options.id)
					.off('keypress.bt')
					.off('keydown.bt')
					.off('keyup.bt')
					//.on('keypress.bt',function(e){return _this._keyPressLoc(this,e);})
					//.on('keyup.bt',function(e){return _this._keyUpLoc(this,e);})
					.on('keydown.bt',function(e){return _this._keyDownPaging(this,e);});
			}
			this.options.onBrowseRefresh();

			return this;
        },

		//------------------------------------------------------
        activeTab: function( newValue ) {
			if ( newValue === undefined ) {
					return this.options.activeTab;
			}
			this._setOption( "activeTab", newValue );
			return this;
        },

		//------------------------------------------------------
        _setOption: function( opt, value ) {
			switch (opt){
			case "bgOver":
					this.options.bgOver = value;
					break;
			case "bgSelect":
					this.options.bgSelect = value;
					break;
			case "bgOne":
					this.options.bgOne = value;
					break;
			case "bgTwo":
					this.options.bgTwo = value;
					break;
			}
			$.Widget.prototype._setOption.apply( this, arguments );
        },

		//------------------------------------------------------
		colorBlock : function(block,what) {  // sets the color of a multi-row block.
			if ((this.options.greenbar == 0) && (this.options.mouseover==0) && (this.options.highlightSelected==0)){
				return 0;
			}

			var _this=this;
			var col=this.options.bgOne;
			var i = parseInt(block*this.options.rowsHigh);
			if (i > $('#' + this.options.tableId).find('[data-elem="browse-body"]').children().length){
				return 1;
			}
			if (this.options.mouseover==1 && what==1){
					col=this.options.bgOver;
			} else if(this.options.highlightSelected==1 && this.options.rowSelected==i){
					col=this.options.bgSelect;
			} else if (this.options.greenbar==1){
					col=(block%2==0) ?  this.options.bgOne :  this.options.bgTwo;
			}
			var counter=0;
			$('#' + this.options.tableId).find('[data-elem="browse-row"]')
				.slice(i,i+_this.options.rowsHigh).each(function(){
					$(this).removeClass('nt-browse-only-line nt-browse-first-line nt-browse-middle-line nt-browse-last-line')
					if (counter==0 && _this.options.rowsHigh == 1){
						$(this).addClass('nt-browse-only-line')
					} else if (counter==0){	
						$(this).addClass('nt-browse-first-line')					
					} else if (counter==_this.options.rowsHigh-1){
						$(this).addClass('nt-browse-last-line')
					} else {
						$(this).addClass('nt-browse-middle-line')
					}
					counter ++;
					$(this).removeClass(_this.options.bgOne + ' ' + _this.options.bgTwo + ' ' + _this.options.bgOver + ' ' + _this.options.bgSelect).
					addClass(col);
			});
			return 0;
		},

		//------------------------------------------------------
		_colorRow : function(row,what) {  // draws a whole block, based on a row index
			this.colorBlock(parseInt(row / this.options.rowsHigh),what);
		},

		//------------------------------------------------------
		_onMouseIn : function(row,ev) {
			if ($(ev.currentTarget).parent().is("tbody")) {
				this._colorRow(row.sectionRowIndex,1); // row selection index is base 0
			} else {
				var i =  $(row).index()
				this._colorRow(i,1); // 1 = mouse in
			}
			ev.stopPropagation()
			return this;
		},

		//------------------------------------------------------
		_onMouseOut : function(row,ev) {
			if ($(ev.currentTarget).parent().is("tbody")) {
				this._colorRow(row.sectionRowIndex);
			} else {
				var i =  $(row).index()
				this._colorRow(i,0); // 0 = natural state
			}
			ev.stopPropagation()
			return this;
		},

		//------------------------------------------------------
		_onDoubleClick : function(elem,ev) {
		var recordId = $(elem).closest('[data-nt-id]').attr('data-nt-id');
		var dataDo = $(elem).closest('[data-do]').attr('data-do');
		if ((recordId) && (dataDo) && this.state.nav == false){
			switch (dataDo){
			case "ds":
				if(ntd.getluf()){
					this.select(this);
					break
				}
			case "dc":
				if (this.options.viewOnly){
					this.edit(this,5,'view');  
				} else {
					this.edit(this,2,'change');  
				}
				break
			case "dv":
				this.edit(this,5,'view');  
				break
			}
		}
		return this;
		},
		//------------------------------------------------------
		clickRow : function(row,ev) {
			var cell = $(ev.target).get(0); // This is the element clicked on
			var recordId = $(cell).closest('[data-nt-id]').attr('data-nt-id');
			
			if ($(cell).attr('data-elem') != 'browse-cell'){		// anything except something inside the cell.						
				cell = $(cell).closest('[data-elem="browse-cell"]')
			}
			var sri = $(row).index()
			var cn = $(cell).attr('data-col')
			if (!cn){
			  cn = $(cell).index() + 1; 			// column number // base 1
			}  
			var i = this.options.rowSelected; // this.rowSelected holds the index of the first row in the selcted block.// row selected is base 0
			this.options.rowSelected = parseInt(sri/this.options.rowsHigh) * this.options.rowsHigh; 
			this._colorRow(i);
			this._colorRow(sri);
			this.setvalue(recordId);
			if (this.options.localStorage){
				$(this.options.divId).ntbrowsels("clickRow",row,ev);
			} else {
				this.server('_event_=rowclicked','_bidv_='+recordId + '&_column_=' + cn);
			}	
			this.setvalue(recordId);
			if (this.state.nav==false){
				switch ($(row).attr('data-do')){
				case "ss":
					if(ntd.getluf() || this.options.lookupField){
						this.select();
						break;
					}
				case "sc":
					if (this.options.viewOnly){
						this.edit(this,5,'view');  
					} else {
						this.edit(this,2,'change');  
					}
					break;
				}
			}
			return this;
		},

		//------------------------------------------------------
		_applyGreenBar : function() {
			if (this.options.table == null){
				return;
			}
			if (!$('#' + this.options.tableId).find('[data-elem="browse-body"]')){
				return;
			}	
			if ((this.options.greenbar == 0) && (this.options.highlightSelected == 0) && (this.options.mouseover == 0)){
				return;
			}
			var b = 0;
			while(this.colorBlock(b) == 0){
				b++;
			}	
			return this;
		},

		//------------------------------------------------------
		_makeResizable : function() {
			if(this.options.resizable == 1){
				var _this = this;
				$('#' + _this.options.id.toLowerCase() + '_table_resize_div')
					.resizable({minwidth: _this.options.minwidth,minheight: _this.options.minheight,stop: function(event,ui){_this.resized();}});
			}
			return this;
		},

		//------------------------------------------------------
		resized : function() {
			this.server('_event_=resized&_width_=' + $(id).width() + '&_height_=' + $('#'+this.options.id.toLowerCase()+'_table_div').height());
			return this;
		},

		//------------------------------------------------------
		_restoreFocus : function() {
			if (this.options.column != 0) {
				if (this.options.table.nodeName=='TABLE'){
					$('#' + this.options.tableId + ' tbody > tr:first').children('td:eq('+this.options.column+')').find(':input:first').focus();
				}	
			}
			return this;
		},

		//------------------------------------------------------
		_setColumn : function(inp,e) {
			this.options.column = $(inp).closest('[data-elem="browse-cell"]').prevAll().length;
			return this;
		},

		//------------------------------------------------------
		_keyDownPaging : function(inp,e) {    // handle paging keys in EIP and locator fields
			if ((e.which == 191) && (e.shiftKey == true)){ // 191=?
				e.which = ntLookupKey;
			}

			switch(e.which){
				case 13: {
					$(inp).change();
					e.preventDefault();
					return false;
				}

				case $.ui.keyCode.PAGE_UP: {
					this.nav(inp.id,'previous');
					return false;
				}

				case $.ui.keyCode.PAGE_DOWN: {
					this.nav(inp.id,'next');
					return false;
				}

				case $.ui.keyCode.HOME: {
					if (e.ctrlKey==true){
						this.nav(inp.id,'first');
						return false;
					}
				}

				case $.ui.keyCode.END: {
					if (e.ctrlKey==true){
						this.nav(inp.id,'last');
						return false;
					}
				}

				//case 191:  // ?
				case ntLookupKey: {// F2 by default
					$("#"+inp.id+".hasDatepicker").each(
						function(i,v){
							e.preventDefault();
							$(inp).datepicker("show");
							return false;
						}
					);


					$("#"+inp.id).next(':button').each(
						function(i,v){
							$(this).click();
							return false;
						}
					)
				}
				return true;
			}
			return this;
		},

		//------------------------------------------------------
		// IE 8 does not support INPUT event. IE 9 handles INPUT event in a buggy way. // http://help.dottoro.com/ljhxklln.php
		// This method handles some of those cases
		KeyPressLoc : function(elem,ev) {      // Handle enter key in locator fields
			if (navigator.userAgent.indexOf('MSIE 8') > -1){
				$(elem).trigger('input');
			} else if (navigator.userAgent.indexOf('MSIE 9') > -1){
				switch(ev.which){
					case 8: // backspace
					case 46: // del key
					case 86: // ctrl-v
					case 88: // ctrl-x
						$(elem).trigger('input');
				}
			}
		},
		//------------------------------------------------------
		_keydown : function(inp,e) {  // bind up and down arrow keys in EIP in browse
			switch(e.which){
				case $.ui.keyCode.DOWN: {
					this._setColumn(inp,e);
					$(inp).closest('[data-elem="browse-row"]').nextAll(':eq(0)').children('[data-elem="browse-cell"]:eq('+this.options.column+')').find(':input:first').focus();
					e.which = 0;
					return false;
				}
				case $.ui.keyCode.UP: {
					this._setColumn(inp,e);
					$(inp).closest('[data-elem="browse-row"]').prevAll(':eq(0)').children('[data-elem="browse-cell"]:eq('+this.options.column+')').find(':input:first').focus();
					e.which = 0;
					return false;
				}
			}
			return this._keyDownPaging(inp,e);
		},

		//------------------------------------------------------
		_preContractVertically : function() {
			var _this=this;
			$(this.options.divId).find('[data-nt-ctd="true"]').each(function(i,elem){
				_this.setRowStatus(elem,true);
			});
			$(this.options.divId).find('[data-nt-ctd="false"]').each(function(i,elem){
				_this.setRowStatus(elem,false);
			});
			return this;
        },
		//------------------------------------------------------
		toggleRowStatus : function(elem) {
			//var l = this.options.rowsHigh-1;
			var tr = $(elem).closest('[data-elem="browse-row"]');
			if ($(elem).attr('data-nt-ctd')=='true'){
				var state=false;
			} else {
				var state=true;
			}	
			this.setRowStatus(elem,state);
			this.server('_event_=expcon','_bidv_='+ $(tr).attr('data-nt-id') +'_status_=' + state);
			
        },
		//------------------------------------------------------
		setRowStatus : function(elem,state) { // if state is true then row much be contracted (ie minimised).

			var exp = 'ui-icon-' + this.options.expand;
			var con = 'ui-icon-' + this.options.contract;
			var l = this.options.rowsHigh-1;
			if (state){ 
				$(elem).removeClass(con).addClass(exp).attr('data-nt-ctd','true').closest('[data-elem="browse-row"]').children('[data-elem="browse-cell"]').each(function(){
					$(this).attr('rowspanwas',$(this).attr('rowspan'));
					$(this).attr('rowspan',1)
				});
				$(elem).closest('[data-elem="browse-row"]').nextAll(':lt('+l+')').hide();
			} else {
				$(elem).removeClass(exp).addClass(con).attr('data-nt-ctd','false').closest('[data-elem="browse-row"]').children('[data-elem="browse-cell"]').each(function(){
					$(this).attr('rowspan',$(this).attr('rowspanwas'));
				});
				$(elem).closest('[data-elem="browse-row"]').nextAll(':lt('+l+')').show();
			}
			return this;
		},
//------------------------------------------------------
		_prepColumns : function() {
			var _this=this;
			if ((this.options.addsec != '') && (this.options.addsec != undefined)){
				var k = $('#'+_this.options.id.toLowerCase()+'_table_div').find('[data-key]').attr('data-key');
				if (k == undefined){
					$('#'+_this.options.id.toLowerCase()+'_table_div').find('th:last').find('div:first').append('<div class="nt-right" data-key="true"><a href="#" id="' + _this.options.id.toLowerCase() + '-browse-access" class="nt-browse-titlebar-access"><span class="ui-icon ui-icon-key"></span></a></div>');
					//Secwin Button
					$('#' + _this.options.id.toLowerCase() + '-browse-access').hover(function(){
						$(this).addClass('ui-state-hover');
					}, function(){
						$(this).removeClass('ui-state-hover');
					}).click(function(){
						ntd.push('secwinwebuseraccess','','header',1,2,null,'','','_screen_=' + _this.options.addsec);
						return false;
					});
				}
			}
			return this;
		},

        //------------------------------------------------------
        // needs refactor
		ec : function(hcb) {          // checkbox on top of column to set checkbox in whole column.
			for(var i=0;i<this.options.table.tHead.rows[0].cells.length;i++){
				if (this.options.table.tHead.rows[0].cells[i] == hcb.parentNode){
					var c = i;
				}
			}
			this.quiet = 1;
			for(i=0;i<this.options.table.tBodies[0].rows.length;i++){
				var o = this.options.table.tBodies[0].rows[i].cells[c].firstChild;
				cb = getCheckbox(o);
				if (cb != null){
					cb.checked = hcb.checked;
					cb.onclick();
				}
			}
			this.quiet = 0;
			return this;
		},

        //------------------------------------------------------
        disableButton : function(elem){
			try{$(elem).prop("disabled",true).removeClass('ui-state-focus').button( "refresh" );} catch (e) {};
        },
        //------------------------------------------------------
        enableButton : function(elem){
			try{$(elem).prop("disabled",false).removeClass('ui-state-focus').button("refresh");} catch (e) {};
        },
		
        //------------------------------------------------------		
        bbutton : function(elem){
			$(elem).attr("data-wait","wait")
			this.disableButton(elem);
			this.eip(elem);
        },
        //------------------------------------------------------
		eip : function(elem) {
			var n = $(elem).attr("name");
			var vl= $(elem).data('luv')
			if (vl==undefined){
				vl=FieldValue(elem);
			}
			if (this.options.localStorage){
				$(this.options.divId).ntbrowsels("clickButton",$(elem).closest('[data-nt-id]').attr('data-nt-id'),$(elem).closest('[data-nt-col]').attr('data-nt-col'));
			} else {			
				this.server('_event_=eipaccepted&_action_=2&_eipclm_='+ n.replace(/__/g,":"),'_bidv_=' + $(elem).closest('[data-nt-id]').attr('data-nt-id'),'value='+vl);
			}

			return this;
		},

        //------------------------------------------------------
		setvalue : function(v) {
			if (v && (v != null) && (v != '')){
				this.options.value = v;
			}
			return this;
		},
        //------------------------------------------------------
		// replace the innerHTML of the whole cell (inside data-elem=browse-cell).
		// rowId is either the data-nt-id or the browse-row-number (1 based)
		getRow : function(rowId) {			
			if (Number.isInteger(rowId)){
				var elem = $("[data-elem=browse-row]").eq(rowId-1)
			} else {
				var elem = $("[data-nt-id=" + rowId + "]")
			}	
			return elem
		},
        //------------------------------------------------------
		// replace the innerHTML of the whole cell (inside data-elem=browse-cell).
		// rowId is either the data-nt-id or the browse-row-number (1 based)
		// column is 1 based 
		setCellHtml : function(rowId,column,value) {			
			var elem = this.getRow(rowId)
			$(elem).find("[data-col=" + column + "]").html(value);
			return this;
		},
        //------------------------------------------------------
		// add the css to the cell div
		// rowId is either the data-nt-id or the browse-row-number (1 based)
		// column is 1 based 
		addCellClass : function(rowId,column,css) {
			var elem = this.getRow(rowId)
			$(elem).find("[data-col=" + column + "]").addClass(css);
			return this;
		},		
        //------------------------------------------------------
		// add the css to the cell div
		// rowId is either the data-nt-id or the browse-row-number (1 based)
		// column is 1 based 
		removeCellClass : function(rowId,column,css) {
			var elem = this.getRow(rowId)
			$(elem).find("[data-col=" + column + "]").removeClass(css);
			return this;
		},				
        //------------------------------------------------------
		// replace the content of the nth div in the cell (inside data-elem=browse-cell > nth div).
		// rowId is either the data-nt-id or the browse-row-number (1 based)
		// column is 1 based 
		// divIndex is 1 based
		setCellDivHtml : function(rowId,column,divIndex,value) {
			var elem = this.getRow(rowId)
			$(elem).find("[data-col=" + column + "]").children().eq(divIndex-1).html(value);
			return this;
		},
        //------------------------------------------------------
		// add the css to the cell div
		// rowId is either the data-nt-id or the browse-row-number (1 based)
		// column is 1 based 
		// divIndex is 1 based
		addCellDivClass : function(rowId,column,divIndex,css) {
			var elem = this.getRow(rowId)
			$(elem).find("[data-col=" + column + "]").children().eq(divIndex-1).addClass(css);
			return this;
		},		
        //------------------------------------------------------
		// add the css to the cell div
		// rowId is either the data-nt-id or the browse-row-number (1 based)
		// column is 1 based 
		// divIndex is 1 based
		removeCellDivClass : function(rowId,column,divIndex,css) {
			var elem = this.getRow(rowId)
			$(elem).find("[data-col=" + column + "]").children().eq(divIndex-1).removeClass(css);
			return this;
		},		
		//------------------------------------------------------
		mouseDownCell : function(event,elem){
			var col = $(elem).attr('data-col')
			if (this.options.rubberbandMinColumn == 0 || col >= this.options.rubberbandMinColumn){
				if (this.options.rubberbandMaxColumn == 0 || col <= this.options.rubberbandMaxColumn){
					this.state.rubberbandOn = 1
					this.state.rubberStartCell = elem
					this.state.rubberEndCell = 0
					this.state.rubberStartX = event.pageX
					this.state.rubberStartY = event.pageY
				}
			}
		},
		//------------------------------------------------------
		mouseDownTable : function(event){			
			if (this.state.rubberbandOn == 1){

				var coords = {top:-10,left:-10};
				$('#' + this.options.id + '_rubberband').offset(coords);
				$('#' + this.options.id + '_rubberband').width(0);
				$('#' + this.options.id + '_rubberband').height(0); 
				this.state.rubberband = 1 // mouse down
			}	

			event.stopPropagation();
			event.preventDefault();
			event.cancelBubble=true;
			event.returnValue=false;
			return false;
		},
		//------------------------------------------------------
		scrollTable : function(event){		
			if (this.state.rubberbandOn == 1){
				this.calcRubberband(event);
			}	
		},
		//------------------------------------------------------
		mouseUpCell : function(event,elem){			
			this.state.rubberEndCell = this.state.mouseElem


		},
		//------------------------------------------------------
		mouseUpTable : function(event){						
			if (this.state.rubberband == 2){
				this.calcRubberband(event)
				this.selectRange()
			}				
			this.state.rubberband = 0 // mouse up
			this.unSelect();
			if (this.options.hideRubberbandOnMouseUp){
				this.hideRubberband()
			}	
		},
		//------------------------------------------------------
		mouseMoveCell : function(event,elem){	
			this.state.mouseCol = $(elem).attr('data-col')
			if (this.state.mouseCol){
				if (this.options.rubberbandMinColumn == 0 || this.state.mouseCol >= this.options.rubberbandMinColumn){
					if (this.options.rubberbandMaxColumn == 0 || this.state.mouseCol <= this.options.rubberbandMaxColumn){				
						this.state.mouseElem = elem;
					}
				}

			}	
		},
		//------------------------------------------------------
		mouseMoveTable : function(event){	
			if (this.state.rubberband == 1){
				if ((Math.abs(this.state.rubberStartX - event.pageX) > 10) || (Math.abs(this.state.rubberStartY - event.pageY) > 10)){
					this.state.rubberband = 2 // moved sufficently, so now active
					this.showRubberband();
				}	
			}
			if (this.state.rubberband == 2){
				if (this.state.mouseCol){
					if (this.options.rubberbandMinColumn == 0 || this.state.mouseCol >= this.options.rubberbandMinColumn){
						if (this.options.rubberbandMaxColumn == 0 || this.state.mouseCol <= this.options.rubberbandMaxColumn){
							this.calcRubberband(event);
						}	
					}
				}				
			}	
		},		
		//------------------------------------------------------

		showRubberband : function(){			
			$('#' + this.options.id + '_rubberband').show()
			this.state.rubberbandOn = 1
		},
		//------------------------------------------------------
		hideRubberband : function(){			
			$('#' + this.options.id + '_rubberband').hide()
			this.state.rubberbandOn = 0
		},
		//------------------------------------------------------
		selectRange : function() {
			if ($(this.state.rubberStartCell).closest('[data-nt-id]').index() <= $(this.state.rubberEndCell).closest('[data-nt-id]').index()){
				var firstId = $(this.state.rubberStartCell).closest('[data-nt-id]').attr('data-nt-id');			
				var lastId = $(this.state.rubberEndCell).closest('[data-nt-id]').attr('data-nt-id');	
			} else {
				var firstId = $(this.state.rubberEndCell).closest('[data-nt-id]').attr('data-nt-id');			
				var lastId = $(this.state.rubberStartCell).closest('[data-nt-id]').attr('data-nt-id');	
			}			
			var thisId = '';
			var between=0;
			var idList='';
			$(this.options.divId).find('[data-nt-id]').each(function(i,elem){
				thisId = $(elem).attr('data-nt-id')
				switch(between){
				case 0:
					if ( thisId == firstId){
						between = 1 // then drop to case 1
					} else {
						break
					}	
				case 1:
					idList = idList.concat(thisId + '|')
					if (thisId == lastId){
						between = 2
					}	
					break
				}
			})
			if (this.options.localStorage){
				$(this.options.divId).ntbrowsels("selectRange");
			} else {
				var fromCol = $(this.state.rubberStartCell).attr('data-col')
				var toCol = $(this.state.rubberEndCell).attr('data-col')
				if (parseInt(fromCol) > parseInt(toCol)){
				  var temp = fromCol;
				  fromCol = toCol;
				  toCol = temp;
				}
				if (fromCol && toCol){
					this.server('_event_=selectRange&_fromColumn_=' + fromCol +	'&_toColumn_=' + toCol + '&_bidvList_=' + idList)
				}
			}
		},
		//------------------------------------------------------
		calcRubberband : function(event){
			var coords = {top:0,left:0,width:0,height:0};
			var mouseX = event.pageX
			var mouseY = event.pageY
			if (mouseX < $(this.state.mouseElem).offset().left){
				mouseX = $(this.state.mouseElem).offset().left
			}
			if (mouseX > $(this.state.mouseElem).offset().left + $(this.state.mouseElem).width()){
				mouseX = $(this.state.mouseElem).offset().left + $(this.state.mouseElem).width()
			}
			if (mouseX < this.state.rubberStartX){
				if (this.state.rubberEndCell){
					coords.left = $(this.state.rubberEndCell).offset().left
				} else {
					coords.left = mouseX + 6
				}	
				coords.width = $(this.state.rubberStartCell).offset().left + $(this.state.rubberStartCell).width() - coords.left
			} else {
				coords.left = $(this.state.rubberStartCell).offset().left
				if (this.state.rubberEndCell){
					var right = $(this.state.rubberEndCell).offset().left + $(this.state.rubberEndCell).width()
					coords.width = right - coords.left;
				} else {
					coords.width = mouseX - coords.left - 6
				}	
			}
			if (mouseY < this.state.rubberStartY){
				if (this.state.rubberEndCell){
					coords.top = $(this.state.rubberEndCell).offset().top
				} else {
					coords.top = mouseY + 6
				}	
				coords.height = $(this.state.rubberStartCell).offset().top + $(this.state.rubberStartCell).height() - coords.top
			} else {
				coords.top = $(this.state.rubberStartCell).offset().top
				if (this.state.rubberEndCell){
					var bottom = $(this.state.rubberEndCell).offset().top + $(this.state.rubberEndCell).height()
					coords.height = bottom - coords.top - 4;
				} else {
					coords.height = mouseY - coords.top - 6
				}	
			}
			var top = $('#' + this.options.tableId).offset().top
			var bottom = top + $('#' + this.options.tableId).height()
			if (coords.top + coords.height < top){
				coords.height = 0;
			} else if (coords.top < top){
				var d = top - coords.top
				coords.top = top
				coords.height -= d;
			} else if (coords.top > bottom){
				coords.height = 0;
			} else if (coords.top + coords.height > bottom){
				coords.height = bottom - coords.top
			}
			
			if (coords.height <= 0 ){
				this.state.outofsight = 1;
				$('#' + this.options.id + '_rubberband').hide()
			} else if (this.state.outofsight){
				$('#' + this.options.id + '_rubberband').show()
			}
			$('#' + this.options.id + '_rubberband').offset(coords);
			$('#' + this.options.id + '_rubberband').width(coords.width);
			$('#' + this.options.id + '_rubberband').height(coords.height);

		},
		//------------------------------------------------------
		unSelect : function(){			
			if (document.selection) {
				document.selection.empty()
			} else {
				window.getSelection().removeAllRanges()
			}
		},
		//------------------------------------------------------
		goExport : function(fmt){
		  var elem = $(this.element).find('[data-do="export"]');
		  this.exportTo(fmt,elem)
		},
		//------------------------------------------------------
		exportTo : function(fmt,elem){
			$(elem).prepend('<div id="ExportProgressLLKP" class="nt-export-progress"></div>');
			this.state.exportButton = elem;
			this.state.exportProgress = $('#ExportProgressLLKP');						
			this.disableButton(this.state.exportButton);
			$(this.state.exportButton).css('opacity','1');
			this.get('_event_=export&_exportto_=' + fmt)
			this.setTimer(2000);
			return this;
		},
		//------------------------------------------------------
		exportProgress : function(p){
			if (p<100){
				$(this.state.exportProgress).css('width',p+'%');
				this.setTimer(2000);
			} else {
				$(this.state.exportProgress).css('width','0%');
				this.enableButton(this.state.exportButton);
			}
		},

		//------------------------------------------------------
		setTimer : function(t) {
			setTimeout("$('"+this.options.divId+"').ntbrowse('server','"+this.options.procedure+"','_event_=timer');",t);
			return this;	
		},
		//------------------------------------------------------
		timerStart: function(t) {
			if(this.options.timerRefresh != 'disabled'){
				setTimeout("$('"+this.options.divId+"').ntbrowse('server','"+this.options.procedure+"','_refresh_="+this.options.timerRefresh+"&_timer="+t+"');",t);
			}
			return this;	
        },
		//------------------------------------------------------
		timerStop: function() {
        },
		//------------------------------------------------------
		first: function() {
			this.nav('','first');
        },
		//------------------------------------------------------
		previous: function() {
			this.nav('','previous');
        },
		//------------------------------------------------------
		next: function() {
			this.nav('','next');
        },
		//------------------------------------------------------
		last: function() {
			this.nav('','last');		
        },
		//------------------------------------------------------
		nav : function(f,d){
			this.fadeTable();
			if (this.options.json){
				this.serverJSON('_event_=nav&_refresh_='+d+'&focus=' + f);
			} else {
				this.server('_event_=nav&_refresh_='+d+'&focus=' + f);
			}	
			return this;
		},

        //------------------------------------------------------
		clearLocator : function(){
			$('#' + this.options.id + '_locator_a_div').find('input').val('');
			$('#' + this.options.id + '_locator_b_div').find('input').val('');
			this.fadeTable();
			this.state.locatorValue = '';

			this.server('_event_=locatorchanged&_refresh_=clearlocate')
			return this;
		},
        //------------------------------------------------------
		locate : function(elem,ev){
			if (this.state.locatorValue != $(elem).val()){
				if (ev.type=='input' || ev.type=='keypress'){
					this.locateChanged(elem);
				} else if (ev.type=='change'){
					this.state.locatorValue = $(elem).val();
					this.state.locatorId = $(elem).attr("id");
					this.goLocate();
				}
			}	
			return this;	
		},
        //------------------------------------------------------
		// can be called from outside if the locator value has been changed.
		locateChanged : function(elem,force){
			// sync the values in both locators
			if (elem.id == 'locator1' + this.options.id){
				$('#locator2' + this.options.id).val($('#locator1' + this.options.id).val())
			} else if (elem.id == 'locator2' + this.options.id){
				$('#locator1' + this.options.id).val($('#locator2' + this.options.id).val())
			}
			// if imm then send the locator to the server
			if (($(elem).attr('data-imm')=='true') || (force)){
				this.state.locatorTime = getUTCTime();
				this.state.locatorValue = $(elem).val();
				this.state.locatorId = $(elem).attr("id");
				if (this.state.locatorTimerActive==0){
					this.state.locatorTimerActive=1;
					setTimeout("$('"+this.options.divId+"').ntbrowse('goLocateTimer');",this.options.locateTimeGap);
				}
			}
		},
        //------------------------------------------------------
		// send the locator to the server
		goLocateTimer : function(){
			var t = getUTCTime();
			if (t-this.state.locatorTime < this.options.locateTimeGap){
				setTimeout("$('"+this.options.divId+"').ntbrowse('goLocateTimer');",this.options.locateTimeGap - (t-this.state.locatorTime));	// 5 is just a small bump to make sure it doesn't end up being =			
			} else {
				this.state.locatorTimerActive=0;
				this.goLocate();
			}	
		},
        //------------------------------------------------------
		// send the locator to the server
		goLocate : function(value){
			this.fadeTable();
			if(value != undefined){
				this.state.locatorValue = value;
				$('#' + this.options.id + '_locator_a_div').find('input').val(value);
				$('#' + this.options.id + '_locator_b_div').find('input').val(value);
			}
			//this.locVal = $(elem).val();
			this.server('_event_=locatorchanged&_refresh_=locate',this.state.locatorId +'='+encodeURIComponent(this.state.locatorValue));
		},
        //------------------------------------------------------
		locateFocus : function(elem){
			if ($(elem).attr("data-noFocus") == "true"){
				$(elem).attr("data-noFocus","false");
			} else {	
				try{
					$('#osk').ntosk('getFocus',elem);
				} catch(e) {};
			}	
			try{
				$('#osk').ntosk('show');						
			} catch(e) {};	
		},
        //------------------------------------------------------
		locateBlur : function(){
			try{
				$('#osk').ntosk('startHide');
			} catch(e) {};	
			this.state.blurring=true;
		},
        //------------------------------------------------------
		locateAsifBlur : function(elem,e,i){
			if ( $(elem).val != this.state.locatorValue){
				this.locate(elem,e,i);				
			}
			try{
				$('#osk').ntosk('startHide');		
			} catch(e) {};	
		},
        //------------------------------------------------------
		sort : function(elem,ev){
			var dv = $(elem).attr('data-value')
			var dve;
			if (dv){
				dve = elem;
			} else {				
				dv = $(elem).children('a').attr('data-value');
				if (dv){
					dve = $(elem).children('a');
				}	
			}
			if (this.options.localStorage){
				$(this.options.divId).ntbrowsels("clientSideSort",elem,dv,ev,dve);				
			} else {
				this.server('_event_=sortchanged&_refresh_=sort',this.options.procedure+'_sort_' + this.options.randomid + '='+dv);
			} 	
			
			return this;
		},

        //------------------------------------------------------
        disable : function(){
			var _this=this;
			$(this.options.divId).find(':button').each(function(i,e){
				if($(e).attr('disabled') != 'disabled' ){
					$(e).attr("data-wait","wait").each(function(i,e){_this.disableButton(e)});;
				}
			})
			$(this.options.divId).find('[data-elem="browse-row"]').off('mouseover.bt mouseout.bt click.bt') ;
		},
		
        //------------------------------------------------------
        enable : function(){
			var _this=this;
			$(this.options.divId).find('[data-wait="wait"]').removeAttr("data-wait").each(function(i,e){_this.enableButton(e)});
			this._bindEvents();
			this.refresh();
        },
		
        //------------------------------------------------------
        hide : function(){
			$(this.options.divId).hide();
        },
        //------------------------------------------------------
        show : function(){
			$(this.options.divId).show();
        },
        //------------------------------------------------------
        hideTable : function(){
			$('#' + this.options.tableId).fadeOut(200);
			$('#' + this.options.tableId).hide();
        },
        //------------------------------------------------------
        fadeTable : function(){
			$('#' + this.options.tableId).find('input, textarea, button, select').prop("disabled", true);
			$('#' + this.options.tableId).fadeTo(200,0.5)
        },
        //------------------------------------------------------
        unhideTable : function(){
			$('#' + this.options.tableId).css({opacity:1});
			$('#' + this.options.tableId).show();
        },
        //------------------------------------------------------
        serverClearLocator : function(){
			$('#' + this.options.id + '_locator_b_div').find('input').val('');
			$('#' + this.options.id + '_locator_a_div').find('input').val('');
        },
        //------------------------------------------------------
        locatorFocus : function(){
			$('#' + this.options.id + '_locator_b_div').find('input').focus();
			$('#' + this.options.id + '_locator_a_div').find('input').focus();
        },

		//------------------------------------------------------
        hideLocator : function(){
			$('#' + this.options.id + '_locator_b_div').hide();
			$('#' + this.options.id + '_locator_a_div').hide();
        },

        //------------------------------------------------------
        unhideLocator : function(i){
			if (i & 1){
				$('#' + this.options.id + '_locator_b_div').show();
			} else {
				$('#' + this.options.id + '_locator_b_div').hide();
			}
			
			if (i & 2){
				$('#' + this.options.id + '_locator_a_div').show();
			} else {
				$('#' + this.options.id + '_locator_a_div').hide();
			}
        },

        //------------------------------------------------------
        hideSelectButton : function(i){
			if(i){
				$('#'+ this.options.id +'_div').find('[data-do="select"]').hide();
			} else {
				$('#'+ this.options.id +'_div').find('[data-do="select"]').show();
			}	
		},
        //------------------------------------------------------
        hideButton : function(b){
			$('#'+ this.options.id +'_div').find('[data-do="'+b+'"]').hide();
		},
        //------------------------------------------------------
        showButton : function(b){
			$('#'+ this.options.id +'_div').find('[data-do="'+b+'"]').show();
		},
		//------------------------------------------------------
        hideFormButtons : function(i){
			if (i==true){
				$('#' + this.options.id + '_update_b_div').find('[data-do="insert"]').hide();
				$('#' + this.options.id + '_update_a_div').find('[data-do="insert"]').hide();			
			} else {
				$('#' + this.options.id + '_update_b_div').find('[data-do="insert"]').show();
				$('#' + this.options.id + '_update_a_div').find('[data-do="insert"]').show();
			}
			$('#' + this.options.id + '_update_b_div').find('[data-do="copy"]').hide();
			$('#' + this.options.id + '_update_a_div').find('[data-do="copy"]').hide();
			$('#' + this.options.id + '_update_b_div').find('[data-do="change"]').hide();
			$('#' + this.options.id + '_update_a_div').find('[data-do="change"]').hide();
			$('#' + this.options.id + '_update_b_div').find('[data-do="deleteb"]').hide();
			$('#' + this.options.id + '_update_a_div').find('[data-do="deleteb"]').hide();		
			$('#' + this.options.id + '_update_b_div').find('[data-do="view"]').hide();
			$('#' + this.options.id + '_update_a_div').find('[data-do="view"]').hide();		
			$('#' + this.options.id + '_update_b_div').find('[data-do="export"]').hide();
			$('#' + this.options.id + '_update_a_div').find('[data-do="export"]').hide();		
        },

        //------------------------------------------------------
        unhideFormButtons : function(){
			$('#' + this.options.id + '_update_b_div').find('[data-do="insert"]').show();
			$('#' + this.options.id + '_update_a_div').find('[data-do="insert"]').show();
			$('#' + this.options.id + '_update_b_div').find('[data-do="copy"]').show();
			$('#' + this.options.id + '_update_a_div').find('[data-do="copy"]').show();
			$('#' + this.options.id + '_update_b_div').find('[data-do="change"]').show();
			$('#' + this.options.id + '_update_a_div').find('[data-do="change"]').show();
			$('#' + this.options.id + '_update_b_div').find('[data-do="deleteb"]').show();
			$('#' + this.options.id + '_update_a_div').find('[data-do="deleteb"]').show();			
			$('#' + this.options.id + '_update_b_div').find('[data-do="view"]').show();
			$('#' + this.options.id + '_update_a_div').find('[data-do="view"]').show();			
			$('#' + this.options.id + '_update_b_div').find('[data-do="export"]').show();
			$('#' + this.options.id + '_update_a_div').find('[data-do="export"]').show();			
        },

        //------------------------------------------------------
        hideNav : function(){
			$('#' + this.options.id + '_nav_a').hide();
			$('#' + this.options.id + '_nav_b').hide();
        },
		
        //------------------------------------------------------
        unhideNav : function(disablePrev,disableNext){
			var _this=this;
			$('#' + this.options.id + '_nav_a').show();
			$('#' + this.options.id + '_nav_b').show();
			if (disablePrev==true){
				$('#' + this.options.id + '_nav_b').find('[data-do="first"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_b').find('[data-do="first"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_b').find('[data-do="previous"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="first"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="previous"]').each(function(i,e){_this.disableButton(e)});
			} else if (disablePrev==false) {
				$('#' + this.options.id + '_nav_b').find('[data-do="first"]').each(function(i,e){_this.enableButton(e)});
				$('#' + this.options.id + '_nav_b').find('[data-do="previous"]').each(function(i,e){_this.enableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="first"]').each(function(i,e){_this.enableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="previous"]').each(function(i,e){_this.enableButton(e)});
			}
			if (disableNext==true){
				$('#' + this.options.id + '_nav_b').find('[data-do="last"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_b').find('[data-do="next"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="last"]').each(function(i,e){_this.disableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="next"]').each(function(i,e){_this.disableButton(e)});
			} else if (disableNext==false){
				$('#' + this.options.id + '_nav_b').find('[data-do="last"]').each(function(i,e){_this.enableButton(e)});
				$('#' + this.options.id + '_nav_b').find('[data-do="next"]').each(function(i,e){_this.enableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="last"]').each(function(i,e){_this.enableButton(e)});
				$('#' + this.options.id + '_nav_a').find('[data-do="next"]').each(function(i,e){_this.enableButton(e)});
			}
        },
		
        //------------------------------------------------------
		edit : function(elem,action,header){    
			var actionname='';
			var actionform='';
			var actionFormOverride='';
			this.setvalue($(elem).closest('[data-nt-id]').attr('data-nt-id'));
			switch(action){
			case 1: //Insert
				actionname ='insert_btn';
				actionform = $('[data-nt-id="'+this.options.value+'"]').attr('data-nt-insert');
				if (!actionform){
					actionform = this.options.formInsert;
				}
				break;
			case 2: //Change
				actionname ='change_btn';
				actionform = $('[data-nt-id="'+this.options.value+'"]').attr('data-nt-change');
				if (!actionform){
					actionform = this.options.formChange;
				}
				break;
			case 3: //Delete
				actionname ='change_btn';
				actionform = $('[data-nt-id="'+this.options.value+'"]').attr('data-nt-delete');
				if (!actionform){
					actionform = this.options.formDelete;
				}
				break;
			case 4: //Copy
				actionname ='copy_btn';
				actionform = $('[data-nt-id="'+this.options.value+'"]').attr('data-nt-copy');
				if (!actionform){
					actionform = this.options.formCopy;
				}
				break;
			case 5: //View
				actionname ='view_btn';
				actionform = $('[data-nt-id="'+this.options.value+'"]').attr('data-nt-view');
				if (!actionform){
					actionform = this.options.formView;
				}
				break;
			}
			if (actionform == ''){
				actionform = this.options.form;
			}
			if (this.options.formpopup){     
				header = ''; // don't default the header when called from a browse.
				ntd.push(actionform,'',header,1,action,null,this.options.procedure,this.options.value,'_parentProc_=' + this.options.parent,null,null,null,null,null,null,this.options.divId);
			} else {
				this.gotoPage(actionform,actionname,this.options.value,0,this.options.procedure,this.options.parent);
			}
			return this;
		},

        //------------------------------------------------------
		deleteb : function(elem){
			var _this=this;
			if (this.options.confirmDelete){
				$('body').append('<div id="message_confirm" title="'+_this.options.confirmText+'" class="nt-flex">' + 
				'<div><div class="ui-icons-error ui-icon ui-error-icon ui-icon-alert nt-left nt-margin-right-1"></div></div>' +
				'<div>' +  this.options.confirmDeleteMessage + '</div></div>');
				$( "#message_confirm" ).dialog({
					resizable: false,
					modal: true,
					buttons: [{
						text: _this.options.deleteText,
						icon: 'ui-icon-trash',
						class:'nt-deleteb-button',
						click : function() {    
							$( this ).dialog( "close" );
							$( "#message_confirm" ).remove();
							_this.deletenow(elem);
						}
					}, {
						icon: 'ui-icon-cancel',
						text: _this.options.cancelText,
						click: function() {
							$( this ).dialog( "close" );
							$( "#message_confirm" ).remove();
							return _this;
						}
					}]	
				});      
			} else {
				this.deletenow(elem);
			}
		},

		//------------------------------------------------------
		deletenow : function(elem){			
			this.options.form = this.options.form.replace("?","&");
			this.setvalue($(elem).closest('[data-nt-id]').attr('data-nt-id'));
			if (this.options.localStorage){
				$(this.options.divId).ntbrowsels("deleteb",this.options.value);				
			} else {
				this.serverPost('pressedButton=deleteb_btn','_event_=deleteb&_action_=3&_fromForm_='+ this.options.form,'_bidv_=' + this.options.value + '&_ajax_=1&_parentProc_=' +  this.options.parent + '&_parentRid_=' + this.options.parentrid);
			}	
			return this;
		},
        //------------------------------------------------------
		select : function(elem){
			if (elem){
				this.setvalue($(elem).closest('[data-nt-id]').attr('data-nt-id'));
			}
			if (this.options.popup){
				$('#'+ntd.getluf()).data('luv',this.options.value);
				if (this.options.localStorage){
					$(this.options.divId).ntbrowsels("selectb",this.options.value,ntd.getluf());				
				}	
				$('#'+ntd.getluf()).change();
				this.options.onSelectButton(this.options.value);
				$('#popup_'+ntd.getdlg().toLowerCase()+'_div').dialog('close'); // close does a ntd.pop
			} else{
				this.options.onSelectButton(this.options.value);
				this.gotoPage(this.options.selectAction,'select_btn',this.options.value,this.options.lookupField);
				return this;
			};
		},

        //------------------------------------------------------
		cancel : function(){
			this.options.onCancelButton();
			if (this.options.popup){
				$('#popup_'+ntd.getdlg().toLowerCase()+'_div').dialog('close'); // close does a ntd.pop
			} else {
				this.gotoPage(this.options.cancelAction,'browsecancel_btn');
			}
			return this;
		},
        //------------------------------------------------------
		close : function(){
			this.options.onCloseButton();
			if (this.options.popup){
				$('#popup_'+ntd.getdlg().toLowerCase()+'_div').dialog('close'); // close does a ntd.pop
			} else {
				this.gotoPage(this.options.closeAction,'close_btn');
			}
			return this;
		},
        //------------------------------------------------------
		rad : function(){     // Reset After Date
			this.eip(this.ct,this.eipclm,this.vs);
			return this;
		},

        //------------------------------------------------------
        gotoPage : function(a,n,v,l,cf,p){
			$(':button').attr('disabled', 'disabled');
			$('#xdecfr').remove();
			this.state.nav= true;
			var ht = '<form method = "POST" action="'+a+'" id="xdecfr">';
			if (n) ht = ht + '<input type="hidden" name="pressedbutton" value = "'+n+'" />';
			if (v) ht = ht + '<input type="hidden" name="_bidv_" value = "'+v+'" />';
			if (l) ht = ht + '<input type="hidden" name="lookupfield" value = "'+this.options.lookupField+'" />';
			if (cf) ht = ht + '<input type="hidden" name="_calledfrom_" value = "'+cf+'" />';
			if (p) ht = ht + '<input type="hidden" name="_parentProc_" value = "'+p+'" />';
			if ($('[name="FormState"]')) {
				ht = ht + '<input type="hidden" name="FormState" value = "'+$('[name="FormState"]').val()+'" />';
			}
			ht = ht + '</form>';
			$(this.options.divId).append(ht)
			$('#xdecfr').submit();
			// this page terminates here
			return this;
		},

        //------------------------------------------------------
		sv : function(p0) {   // send async request to server
			var parms='';
			var _this=this;
			for(var d = 1; d < arguments.length; d++){
				parms += arguments[d] + '&';
			}
			parms += '_parentProc_=' + this.options.parent + '&_parentRid_=' + this.options.parentrid + '&_popup_=' + this.options.popup  + '&_rid_=' & this.options.randomid + '&_ajax_=1&_rnd_=' + Math.random().toString(36).substr(5);
			$.get(p0+ this.options.urlExt,parms,function(data){_this.onAjaxComplete(data);});
			return this;
		},

        //------------------------------------------------------
		get : function() {         // send async request to server procedure
			var parms='';
			var _this=this;
			for(var d = 0; d < arguments.length; d++){
				parms += arguments[d] + '&';
			}

			parms += '_parentProc_=' + this.options.parent + '&_parentRid_=' + this.options.parentrid + '&_ajax_=0&_popup_=' + this.options.popup + '&_rid_=' + this.options.randomid + '&_rnd_=' + Math.random().toString(36).substr(5);
			parms = parms.replace(/\r\n/g,"%0D%0A");
			parms = parms.replace(/\n\r/g,"%0D%0A");
			parms = parms.replace(/\r/g,"%0D%0A");
			parms = parms.replace(/\n/g,"%0D%0A");
			document.location = this.options.procedure + this.options.urlExt + '?' + parms;
			return this;
		},
        //------------------------------------------------------
		server : function() {         // send async request to server procedure
			var parms='';
			var _this=this;
			for(var d = 0; d < arguments.length; d++){
				parms += arguments[d] + '&';
			}

			parms += '_parentProc_=' + this.options.parent + '&_parentRid_=' + this.options.parentrid + '&_ajax_=1&_popup_=' + this.options.popup + '&_rid_=' + this.options.randomid + '&_rnd_=' + Math.random().toString(36).substr(5);
			parms = parms.replace(/\r\n/g,"%0D%0A");
			parms = parms.replace(/\n\r/g,"%0D%0A");
			parms = parms.replace(/\r/g,"%0D%0A");
			parms = parms.replace(/\n/g,"%0D%0A");
			$.get(this.options.procedure + this.options.urlExt,parms,function(data){_this.onAjaxComplete(data);});
			return this;
		},

        //------------------------------------------------------
		serverJSON : function() {         // send async request to server procedure
			var parms='';
			var _this=this;
			for(var d = 0; d < arguments.length; d++){
				parms += arguments[d] + '&';
			}

			parms += '_parentProc_=' + this.options.parent + '&_parentRid_=' + this.options.parentrid + '&_ajax_=1&_popup_=' + this.options.popup + '&_rid_=' + this.options.randomid + '&_rnd_=' + Math.random().toString(36).substr(5);
			parms = parms.replace(/\r\n/g,"%0D%0A");
			parms = parms.replace(/\n\r/g,"%0D%0A");
			parms = parms.replace(/\r/g,"%0D%0A");
			parms = parms.replace(/\n/g,"%0D%0A");
			$.getJSON(this.options.procedure + this.options.urlExt,parms,function(data){_this.onAjaxComplete(data);});
			return this;
		},

        //------------------------------------------------------
		serverPost : function() {     // send async request POST to server procedure
			var parms='';
			var _this=this;
			for(var d = 0; d < arguments.length; d++){ // supports multiple incoming arguments.
				parms += arguments[d] + '&';
			}
			parms += 'FormState=' + $('#FormState').val() + '&'
	
			parms += '_ajax_=1&_parentProc_=' + this.options.parent + '&_parentRid_=' + this.options.parentrid + '&_popup_=' + this.options.popup + '&_rid_=' + this.options.randomid + '&_rnd_=' + Math.random().toString(36).substr(5);
			$.post(this.options.procedure+ this.options.urlExt,parms,function(data){_this.onAjaxComplete(data);});
			return this;
		},

        //------------------------------------------------------
		onAjaxComplete : function(data) {
			xmlProcess(data);
			//this.ready();  // no need to call ready, the xmlProcess will recreate the object if needed.
			return this;
		},
        //------------------------------------------------------
		onAjaxCompleteJSON : function(data) {

			xmlProcess(data);
			//this.ready();  // no need to call ready, the xmlProcess will recreate the object if needed.
			return this;
		},
        //------------------------------------------------------
		process : function(data) {
		}
		

//------------------------------------------------------
});

$.extend( $.ui.ntbrowse, {
        version: "@VERSION"
});

})( jQuery );

///////////////////////////////////////////////////////
// end ntbrowse
///////////////////////////////////////////////////////
/*!
jCanvas v5.0
Copyright 2011, Caleb Evans
Licensed under the MIT license
*/

(function($, document, Math, Array, Image, parseFloat, parseInt, undefined) {

// Define local variables for better compression
var defaults, prefs,
	fn = $.fn,
	merge = $.extend,
	pi = Math.PI,
	round = Math.round,
	sin = Math.sin,
	cos = Math.cos,
	cssProps,
	colorProps;

// jCanvas function
function jCanvas(args) {
	if (!args) {
		// Reset to defaults if nothing is passed
		prefs = merge({}, defaults);
	} else {
		// Merge arguments with preferences
		prefs = merge({}, prefs, args);
	}
	return this;
}
// Set jCanvas default properties
defaults = {
	width: 0, height: 0,
	cornerRadius: 0,
	fillStyle: 'transparent',
	strokeStyle: 'transparent',
	strokeWidth: 1,
	strokeCap: 'butt',
	strokeJoin: 'miter',
	rounded: false,
	shadowX: 0, shadowY: 0,
	shadowBlur: 3,
	shadowColor: 'transparent',
	opacity: 1,
	compositing: 'source-over',
	x: 0, y: 0,
	x1: 0, y1: 0,
	scaleX: 1, scaleY: 1,
	start: 0, end: 360,
	ccw: false,
	inDegrees: true,
	fromCenter: true,
	closed: false,
	sides: 3,
	angle: 0,
	text: '',
	font: 'normal 12pt sans-serif',
	align: 'center',
	baseline: 'middle',
	source: '',
	repeat: 'repeat'
};
// Merge preferences with defaults
prefs = merge({}, defaults);

// Set global properties
function setGlobals(ctx, params) {
	ctx.fillStyle = params.fillStyle;
	ctx.strokeStyle = params.strokeStyle;
	ctx.lineWidth = params.strokeWidth;
	// Set rounded corners for paths
	if (params.rounded) {
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
	} else {
		ctx.lineCap = params.strokeCap;
		ctx.lineJoin = params.strokeJoin;
	}
	ctx.shadowOffsetX = params.shadowX;
	ctx.shadowOffsetY = params.shadowY;
	ctx.shadowBlur = params.shadowBlur;
	ctx.shadowColor = params.shadowColor;
	ctx.globalAlpha = params.opacity;
	ctx.globalCompositeOperation = params.compositing;
}

// Close path if chosen
function closePath(ctx, params) {
	// Mask if chosen
	if (params.mask) {
		ctx.save();
		ctx.clip();
	}
	if (params.closed) {
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	} else {
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

// Measure angles in chosen units
function convertAngles(params) {
	return params.inDegrees ? pi/180 : 1;
}

// Rotate individual shape
function positionShape(ctx, params, width, height) {
	
	params.toRad = convertAngles(params);
	ctx.save();
		
	// Always rotate from center
	if (!params.fromCenter) {
		params.x += width/2;
		params.y += height/2;
	}
	
	// Rotate only if specified
	if (params.angle) {
		ctx.translate(params.x, params.y);
		ctx.rotate(params.angle*params.toRad);
		ctx.translate(-params.x, -params.y);
	}
}

// Extend jCanvas
function extend(plugin) {

	// Merge properties with defaults
	plugin = plugin || {};
	defaults = merge(defaults, plugin.props || {});
	prefs = merge({}, defaults);

	// Create plugin
	if (plugin.name) {
		$.fn[plugin.name] = function(args) {
			var $elems = this, elem,
				ctx, e, params = merge({}, prefs, args);
			for (e=0; e<$elems.length; e+=1) {
				elem = $elems[e];
				if (!elem.getContext) {continue;}
				ctx = elem.getContext('2d');
				setGlobals(ctx, params);
				params.toRad = convertAngles(params);
				plugin.fn.call(elem, ctx, params);
			}
			return $elems;
		};
	}
	return $.fn[plugin.name];
}

// Make jCanvas function "chainable"
$.fn.jCanvas = jCanvas;

// Load canvas
$.fn.loadCanvas = function(ctx) {
	if (!this[0].getContext) {return null;}
	return this[0].getContext(ctx || '2d');
};

// Load canvas
$.fn.getCanvasImage = function(type) {
	if (!this[0].toDataURL) {return null;}
	if (type === undefined) {
		type = 'image/png';
	} else {
		type = type
			.replace(/^([a-z]+)$/gi, 'image/$1')
			.replace(/jpg/gi, 'jpeg');
	}
	return this[0].toDataURL(type);
};

// Draw on canvas manually
$.fn.draw = function(callback) {
	var $elems = this, e;
	for (e=0; e<$elems.length; e+=1) {
		if (!$elems[e].getContext) {continue;}
		callback.call($elems[e], $elems[e].getContext('2d'));
	}
	return this;
};

// Create gradient
$.fn.gradient = function(args) {
	if (!this[0].getContext) {return null;}
	var ctx = this[0].getContext('2d'),
		params = merge({}, prefs, args),
		gradient, percent,
		stops = 0,
		i = 1;
	
	// Create radial gradient if chosen
	if (params.r1 !== undefined || params.r2 !== undefined) {
		gradient = ctx.createRadialGradient(params.x1, params.y1, params.r1, params.x2, params.y2, params.r2);
	} else {
		gradient = ctx.createLinearGradient(params.x1, params.y1, params.x2, params.y2);
	}
	
	// Count number of color stops
	while (params['c' + i] !== undefined) {
		stops += 1;
		i += 1;
	}
		
	// Calculate color stop percentages if absent
	for (i=1; i<=stops; i+=1) {
		percent = round(100 / (stops-1) * (i-1)) / 100;
		if (params['s' + i] === undefined) {
			params['s' + i] = percent;
		}
		gradient.addColorStop(params['s' + i], params['c' + i]);
	}
	return gradient;
};

// Create pattern
$.fn.pattern = function(args) {
	if (!this[0].getContext) {return null;}
	var ctx = this[0].getContext('2d'),
		params = merge({}, prefs, args),
		img = new Image(),
		pattern;
	img.src = params.source;
	
	// Create pattern
	function create() {
		if (img.complete) {
			// Create pattern
			pattern = ctx.createPattern(img, params.repeat);
			return true;
		} else {
			return false;
		}
	}
	function onload() {
		create();
		// Run callback function
		if (params.load) {
			params.load.call(this[0], pattern);
		}
	}
	// Draw when image is loaded (if chosen)
	if (params.load) {
		img.onload = onload;
	} else {
		// Draw image if loaded
		if (!create()) {
			img.onload = onload;
		}
	}
	return pattern;
};

// Clear canvas
$.fn.clearCanvas = function(args) {
	var ctx, e, params = merge({}, prefs, args);

	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		ctx = this[e].getContext('2d');

		positionShape(ctx, params, params.width, params.height);
		
		// Clear entire canvas
		if (!params.width && !params.height) {
			ctx.clearRect(0, 0, this[e].width, this[e].height);
		} else {
			ctx.clearRect(params.x-params.width/2, params.y-params.height/2, params.width, params.height);
		}
	}
	return this;
};

// Save canvas
$.fn.saveCanvas = function() {
	var e;
	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		this[e].getContext('2d').save();
	}
	return this;
};

// Restore canvas
$.fn.restoreCanvas = function() {
	var e;
	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		this[e].getContext('2d').restore();
	}
	return this;
};

// Scale canvas
$.fn.scaleCanvas = function(args) {
	var ctx, e, params = merge({}, prefs, args);
		
	params.width = params.width || 1;
	params.height = params.height || 1;
		
	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		ctx = this[e].getContext('2d');

		ctx.save();
		ctx.translate(params.x, params.y);
		ctx.scale(params.scaleX, params.scaleY);
		ctx.translate(-params.x, -params.y);
	}
	return this;
};

// Translate canvas
$.fn.translateCanvas = function(args) {
	var ctx, e, params = merge({}, prefs, args);

	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		ctx = this[e].getContext('2d');
		ctx.save();
		ctx.translate(params.x, params.y);
	}
	return this;
};

// Rotate canvas
$.fn.rotateCanvas = function(args) {
	var ctx, e, params = merge({}, prefs, args);
	
	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		ctx = this[e].getContext('2d');
		positionShape(ctx, params, 0, 0);
	}
	return this;
};

// Draw rectangle
$.fn.drawRect = function(args) {
	var ctx, e, params = merge({}, prefs, args),
		x1, y1, x2, y2, r;

	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		ctx = this[e].getContext('2d');
		setGlobals(ctx, params);
		positionShape(ctx, params, params.width, params.height);
		ctx.beginPath();
		
		// Draw a rounded rectangle if chosen
		if (params.cornerRadius) {
			params.closed = true;
			x1 = params.x - params.width/2;
			y1 = params.y - params.height/2;
			x2 = params.x + params.width/2;
			y2 = params.y + params.height/2;
			r = params.cornerRadius;
			// Prevent over-rounded corners
			if ((x2 - x1) - (2 * r) < 0) {
				r = (x2 - x1) / 2;
			}
			if ((y2 - y1) - (2 * r) < 0) {
				r = (y2 - y1) / 2;
			}
			ctx.moveTo(x1+r,y1);
			ctx.lineTo(x2-r,y1);
			ctx.arc(x2-r, y1+r, r, 3*pi/2, pi*2, false);
			ctx.lineTo(x2,y2-r);
			ctx.arc(x2-r, y2-r, r, 0, pi/2, false);
			ctx.lineTo(x1+r,y2);
			ctx.arc(x1+r, y2-r, r, pi/2, pi, false);
			ctx.lineTo(x1,y1+r);
			ctx.arc(x1+r, y1+r, r, pi, 3*pi/2, false);
		} else {
			ctx.rect(params.x-params.width/2, params.y-params.height/2, params.width, params.height);
		}
		ctx.restore();
		closePath(ctx, params);
	}
	return this;
};

// Draw arc
$.fn.drawArc = function(args) {
	var ctx, e, params = merge({}, prefs, args);
	
	// Change default end angle to radians if needed
	if (!params.inDegrees && params.end === 360) {
		params.end = pi * 2;
	}
		
	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		ctx = this[e].getContext('2d');
		setGlobals(ctx, params);
		positionShape(ctx, params, params.radius*2, params.radius*2);
		
		// Draw arc
		ctx.beginPath();
		ctx.arc(params.x, params.y, params.radius, (params.start*params.toRad)-(pi/2), (params.end*params.toRad)-(pi/2), params.ccw);
		// Close path if chosen
		ctx.restore();
		closePath(ctx, params);
	}
	return this;
};

// Draw ellipse
$.fn.drawEllipse = function(args) {
	var ctx, e, params = merge({}, prefs, args),
		controlW = params.width * 4/3;
		
	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		ctx = this[e].getContext('2d');
		setGlobals(ctx, params);
		positionShape(ctx, params, params.width, params.height);
		
		// Create ellipse
		ctx.beginPath();
		ctx.moveTo(params.x, params.y-params.height/2);
		// Left side
		ctx.bezierCurveTo(params.x-controlW/2, params.y-params.height/2, params.x-controlW/2, params.y+params.height/2, params.x, params.y+params.height/2);
		// Right side
		ctx.bezierCurveTo(params.x+controlW/2, params.y+params.height/2, params.x+controlW/2, params.y-params.height/2, params.x, params.y-params.height/2);
		ctx.restore();
		closePath(ctx, params);
	}
	return this;
};

// Draw line
$.fn.drawLine = function(args) {
	var ctx, e, params = merge({}, prefs, args),
		l = 2, lx=0, ly=0;

	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		ctx = this[e].getContext('2d');
		setGlobals(ctx, params);
		
		// Draw each point
		ctx.beginPath();
		ctx.moveTo(params.x1, params.y1);
		while (lx !== undefined && ly !== undefined) {
			lx = params['x' + l];
			ly = params['y' + l];
			ctx.lineTo(lx, ly);
			l += 1;
		}
		// Close path if chosen
		closePath(ctx, params);
	}
	return this;
};

// Draw quadratic curve
$.fn.drawQuad = function(args) {
	var ctx, e, params = merge({}, prefs, args),
		l = 2,
		lx=0, ly=0,
		lcx=0, lcy=0;

	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		ctx = this[e].getContext('2d');
		setGlobals(ctx, params);
			
		// Draw each point
		ctx.beginPath();
		ctx.moveTo(params.x1, params.y1);
		while (lx !== undefined && ly !== undefined && lcx !== undefined && lcy !== undefined) {
			lx = params['x' + l];
			ly = params['y' + l];
			lcx = params['cx' + (l-1)];
			lcy = params['cy' + (l-1)];
			ctx.quadraticCurveTo(lcx, lcy, lx, ly);
			l += 1;
		}
		// Close path if chosen
		closePath(ctx, params);
	}
	return this;
};

// Draw Bezier curve
$.fn.drawBezier = function(args) {
	var ctx, e, params = merge({}, prefs, args),
		l = 2, lc = 1,
		lx=0, ly=0,
		lcx1=0, lcy1=0,
		lcx2=0, lcy2=0;

	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		ctx = this[e].getContext('2d');
		setGlobals(ctx, params);
	
		// Draw each point
		ctx.beginPath();
		ctx.moveTo(params.x1, params.y1);
		while (lx !== undefined && ly !== undefined && lcx1 !== undefined && lcy1 !== undefined && lcx2 !== undefined && lcy2 !== undefined) {
			lx = params['x' + l];
			ly = params['y' + l];
			lcx1 = params['cx' + lc];
			lcy1 = params['cy' + lc];
			lcx2 = params['cx' + (lc+1)];
			lcy2 = params['cy' + (lc+1)];
			ctx.bezierCurveTo(lcx1, lcy1, lcx2, lcy2, lx, ly);
			l += 1;
			lc += 2;
		}
		// Close path if chosen
		closePath(ctx, params);
	}
	return this;
};

// Draw text
$.fn.drawText = function(args) {
	var ctx, e, params = merge({}, prefs, args);

	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		ctx = this[e].getContext('2d');
		setGlobals(ctx, params);
	
		// Set text-specific properties
		ctx.textBaseline = params.baseline;
		ctx.textAlign = params.align;
		ctx.font = params.font;
		
		ctx.strokeText(params.text, params.x, params.y);
		ctx.fillText(params.text, params.x, params.y);
	}
	return this;
};

// Draw image
$.fn.drawImage = function(args) {
	var ctx, elem, e, params = merge({}, prefs, args),
		// Define image source
		img = new Image(),
		scaleFac;
	img.src = params.source;

	// Draw image function
	function draw(ctx) {
		if (img.complete) {
			scaleFac = (img.width / img.height);
			
			// Crop image
			if (params.sx === undefined) {
				params.sx = img.width / 2;
			}
			if (params.sy === undefined) {
				params.sy = img.height / 2;
			}
			params.sWidth = params.sWidth || img.width;
			params.sHeight = params.sHeight || img.height;
			
			// If only width is present
			if (params.width && !params.height) {
				params.height = params.width / scaleFac;
			// If only height is present
			} else if (!params.width && params.height) {
				params.width = params.height * scaleFac;
			// If width and height are both absent
			} else if (!params.width && !params.height) {
				params.width = img.width;
				params.height = img.height;
			}
			
			// Draw image
			positionShape(ctx, params, params.width, params.height);
			ctx.drawImage(
				img,
				params.sx - params.sWidth / 2,
				params.sy - params.sHeight / 2,
				params.sWidth,
				params.sHeight,
				params.x - params.width / 2,
				params.y - params.height / 2,
				params.width,
				params.height
			);
			ctx.restore();
			return true;
		} else {
			return false;
		}
	}
	// On load function
	function onload() {
		draw(ctx);
		// Run callback function
		if (params.load) {
			params.load.call(elem);
		}
	}
	// Draw image if already loaded
	for (e=0; e<this.length; e+=1) {
		elem = this[e];
		if (!elem.getContext) {continue;}
		ctx = elem.getContext('2d');
		setGlobals(ctx, params);
		
		// Draw when image is loaded (if chosen)
		if (params.load) {
			img.onload = onload;
		} else {
			// Draw image if loaded
			if (!draw(ctx)) {
				img.onload = onload;
			}
		}
	}
	return this;
};

// Draw polygon
$.fn.drawPolygon = function(args) {
	var ctx, e, params = merge({}, prefs, args),
		inner = pi / params.sides,
		theta = (pi/2) + inner,
		dtheta = (pi*2) / params.sides,
		apothem = cos(dtheta/2) * params.radius,
		x1, y1, x2, y2, i;
	params.closed = true;
	
	if (params.sides > 2) {
	for (e=0; e<this.length; e+=1) {
		if (!this[e].getContext) {continue;}
		ctx = this[e].getContext('2d');
		setGlobals(ctx, params);
		
		// Calculate points and draw
		positionShape(ctx, params, params.radius, params.radius);
		ctx.beginPath();
		for (i=0; i<params.sides; i+=1) {
			x1 = params.x + round(params.radius * cos(theta));
			y1 = params.y + round(params.radius * sin(theta));
			// Draw path
			if (i === 0) {
				ctx.moveTo(x1, y1);
			} else {
				ctx.lineTo(x1, y1);
			}
			// Project sides if chosen
			if (params.projection) {
				x2 = params.x + round((apothem+apothem*params.projection) * cos(theta+inner));
				y2 = params.y + round((apothem+apothem*params.projection) * sin(theta+inner));
				ctx.lineTo(x2, y2);
			}
			theta += dtheta;
		}
		ctx.restore();
		closePath(ctx, params);
	}
	}
	return this;
};

// Get pixels on the canvas
$.fn.setPixels = function(args) {
	var ctx, elem, e, i,
		params = merge({}, prefs, args),
		imgData, data, len, px;
	
	for (e=0; e<this.length; e+=1) {
			elem = this[e];
			if (!elem.getContext) {continue;}
			ctx = elem.getContext('2d');
			// Measure from center
			if (!params.x && !params.y && !params.width && !params.height) {
				params.width = elem.width;
				params.height = elem.height;
				params.x = params.width/2;
				params.y = params.height/2;
			}
			positionShape(ctx, params, params.width, params.height);
			imgData = ctx.getImageData(params.x-params.width/2, params.y-params.height/2, params.width, params.height);
			data = imgData.data;
			len = data.length;
			px = [];
			
			// Loop through pixels with "each" method
			if (params.each !== undefined) {
				for (i=0; i<len; i+=4) {
					px = params.each.call(elem, data[i], data[i+1], data[i+2], data[i+3]);
					data[i] = px[0];
					data[i+1] = px[1];
					data[i+2] = px[2];
					data[i+3] = px[3];
				}
			}
			// Put pixels on canvas
			ctx.putImageData(imgData, params.x-params.width/2, params.y-params.height/2);
			ctx.restore();
	}
	return this;
};

// Show object properties
function showProps(props, obj) {
	var i;
	for (i=0; i<props.length; i+=1) {
		obj[props[i]] = obj['_' + props[i]];
	}
}

// Hide object properties
function hideProps(props, obj) {
	var i;
	for (i=0; i<props.length; i+=1) {
		obj['_' + props[i]] = obj[props[i]];
	}
}

cssProps = [
	'width',
	'height',
	'opacity'
];
colorProps = [
	'backgroundColor',
	'color',
	'borderColor',
	'borderTopColor',
	'borderRightColor',
	'borderBottomColor',
	'borderLeftColor',
	'fillStyle',
	'strokeStyle',
	'shadowColor'
];

// Convert a color value to RGBA
function toRgba(color) {
	var original, elem,
		rgb = [],
		multiple = 1;
	
	// If color is array already
	if (typeof color === 'object') {
		rgb = color;
	} else {
		
		// Deal with color names
		if (color.match(/^[a-z]+$/gi)) {
			// Deal with complete transparency
			if (color === 'transparent') {
				color = 'rgba(255, 255, 255, 0)';
			}
			elem = document.documentElement;
			original = elem.style.color;
			elem.style.color = color;
			color = $.css(elem, 'color');
			elem.style.color = original;
		}
		// Deal with hexadecimal
		if (color.match(/^\#/gi)) {
			// Deal with shorthand hex
			if (color.length === 4) {
				color = color.replace(/(\w)/gi, '$1$1')
			}
			rgb = color.match(/[0-9a-f]{2}/gi);
			rgb[0] = parseInt(rgb[0], 16);
			rgb[1] = parseInt(rgb[1], 16);
			rgb[2] = parseInt(rgb[2], 16);
		// Parse RGB string
		} else if (color.match(/^rgb/gi)) {
			rgb = color.match(/[0-9\.]+/gi);
			// Deal with RGB percentages
			if (color.match(/\%/gi)) {
				multiple = 2.55;
			}
			rgb[0] = parseFloat(rgb[0]) * multiple;
			rgb[1] = parseFloat(rgb[1]) * multiple;
			rgb[2] = parseFloat(rgb[2]) * multiple;
		}
		// Add alpha
		if (color.indexOf('rgba') !== -1) {
			rgb[3] = parseFloat(rgb[3]);
		} else {
			rgb[3] = 1;
		}
	}
	return rgb;
}

// Get current frame value
function getFrame(fx, i) {
	fx.now[i] = fx.start[i] + (fx.end[i] - fx.start[i]) * fx.pos;
	// Don't round opacity
	if (i < 3) {fx.now[i] = round(fx.now[i]);}
}

// Animate a hex or RGB color
function animateColor(fx) {
	if (fx.pos === 0) {
		fx.start = toRgba(fx.start),
		fx.end = toRgba(fx.end);
	}
	fx.now = [];
	getFrame(fx, 0);
	getFrame(fx, 1);
	getFrame(fx, 2);
	getFrame(fx, 3);
	fx.now = 'rgba(' + fx.now.join(',') + ')';
	if (fx.elem.style) {
		fx.elem.style[fx.prop] = fx.now;
	} else {
		fx.elem[fx.prop] = fx.now;
	}
};

// Enable animation for color properties
function supportColorProps(props) {
	var p;
	for (p=0; p<props.length; p+=1) {
		if (!$.fx.step[props[p]]) {
			$.fx.step[props[p]] = animateColor;
		}
	}
}

// Get jCanvas layers
$.fn.getLayers = function() {
	var elem = this[0], layers;
	if (!elem || !elem.getContext) {return [];}
	layers = $.data(elem, 'layers');
	// Create layers array if none exists
	if (layers === undefined) {
		layers = [];
		$.data(elem, 'layers', layers);
	}
	return layers;
};

// Get a single jCanvas layer
$.fn.getLayer = function(index) {
	index = index || 0;
	return this.getLayers()[index];
};

// Add a new jCanvas layer
$.fn.addLayer = function(args) {
	var $elems = this, $elem, layers, img, e;
	args = merge(args, prefs, $.extend({}, args));
	// Use the "fn" property if specified (for compatibility)
	args.method = args.fn || args.method;
	
	for (e=0; e<$elems.length; e+=1) {
		$elem = $($elems[e]);
		if (!$elems[e].getContext) {continue;}
		layers = $elem.getLayers();
		// If layer is a function
		if (typeof args === 'function') {
			args.method = 'draw';
		}
		layers.push(args);
	}
	return $elems;
};

// Remove a jCanvas layer
$.fn.removeLayer = function(index) {
	index = index || 0;
	this.getLayers().splice(index, 1);
	return this;
};

// Draw jCanvas layers
$.fn.drawLayers = function() {
	var $elems = this, $elem,
		ctx, params, layers, e, i;
	for (e=0; e<$elems.length; e+=1) {
		$elem = $($elems[e]);
		if (!$elem[0].getContext) {continue;}
		ctx = $elem[0].getContext('2d');
		layers = $elem.getLayers();
		// Clear canvas first
		ctx.clearRect(0, 0, $elem[0].width, $elem[0].height);
		// Draw items on queue
		for (i=0; i<layers.length; i+=1) {
			params = layers[i];
			// If layer is a function
			if (params.method === 'draw') {
				params.call($elem[0], ctx);
			// If layer is an object
			} else {
				if (fn[params.method]) {
					fn[params.method].call($elem, params);
				}
			}
		}
	}
	return $elems;
};

// Animate jCanvas layer
$.fn.animateLayer = function() {
	// Setup
	var $elems = this,
		args = Array.prototype.slice.call(arguments, 0),
		$elem, layers, layer, e;
	
	// Deal with all cases of argument placement
	
	// If index is ommitted
	if (typeof args[0] === 'object') {
		args.unshift(0);
	}
	// If object is the last argument
	if (args[2] === undefined) {
		args.splice(2, 0, null);
		args.splice(3, 0, null);
		args.splice(4, 0, function() {});
	// If callback comes after object
	} else if (typeof args[2] === 'function') {
		args.splice(2, 0, null);
		args.splice(3, 0, null);
	}
	// If duration is the last argument
	if (args[3] === undefined) {
		args[3] = null;
		args.splice(4, 0, function() {});
	// If callback comes after duration
	} else if (typeof args[3] === 'function') {
		args.splice(3, 0, null);
	}
	// If callback is ommitted
	if (args[4] === undefined) {
		args[4] = function() {}
	}

	for (e=0; e<$elems.length; e+=1) {
		$elem = $($elems[e]);
		layers = $elem.getLayers();
		layer = layers[args[0]];
		// Merge properties so any property can be animated
		if (!layer || layer.method === 'draw') {
			continue;
		}
		layer = merge(layer, prefs, $.extend({}, layer));
		// Allow jQuery to animate CSS properties of regular objects
		hideProps(cssProps, layer);
		hideProps(cssProps, args[1]);
		// Animate layer
		$(layer).animate(args[1], {
			duration: args[2],
			easing: ($.easing[args[3]] ? args[3] : null),
			// When animation completes
			complete: (function($elem) {
				return function() {
					showProps(cssProps, layer);
					$elem.drawLayers(true);
					args[4].call($elem[0]);
				};
			}($elem)),
			// Redraw for every frame
			step: (function($elem, layer) {
				return function() {
					showProps(cssProps, layer);
					$elem.drawLayers(true);
				};
			}($elem, layer))
		});
	}
	return $elems;
};

// Enable animation for color properties
supportColorProps(colorProps);

// Export jCanvas functions
jCanvas.defaults = defaults;
jCanvas.prefs = prefs;
jCanvas.extend = extend;
$.jCanvas = jCanvas;

}(jQuery, document, Math, Array, Image, parseFloat, parseInt));(function( $, undefined ) {
	var BIG = 1;
	var SMALL = 0;
	var ZOOM = 1;
	var REGULAR = 0;


	var _dragging='';
	var _dragform='';
	var _zoomed=false;

$.widget("ui.ntcalendar", {
   // default options
	options: {
		id:'',
		proc: 'nothing',
		parent:'',
		divId: '',
		insertForm: '',
		insertText: 'Insert',
		changeText: 'Change',
		insertTip: 'Click here to insert a record',
		popupMode: true,
		otherFormParameters: '',
		size: SMALL,
		monthClass: '',
		smallMonthClass: '',
		contentClass: '',
		smallContentClass: '',
		labelClass: '',
		smallLabelClass: '',
		emptyLabelClass: '',
		smallEmptyLabelClass: '',
		allowZoom: true,
		zoomHeading: '',  
		draganddrop: true,
		gradients: true,
		headerClass:'ui-widget-header ui-corner-top nt-month-header', // s_web._SitesQueue.Defaults.Style.MonthHeader
		headingClass:'nt-heading nt-month-header-center',			 // s_web._SitesQueue.Defaults.Style.MonthHeading
		subHeaderClass:'nt-month-header-cell nt-wide',				// s_web._SitesQueue.Defaults.Style.MonthHeaderCell
		emptyCellClass:'nt-monthday-empty-cell',
		cellClass:'nt-monthday-cell ui-corner-all',
		weekDayName:['S','M','T','W','T','F','S'],
		compressEmptyLines:false,
		wsLive:0,             // live refresh via web sockets
		wsTables:[]          // array of table names to monitor
   },
   state:{
		popLiveUpdate:0
	},
//------------------------------------------------------    
		_create: function() {
		},	
//------------------------------------------------------    
		begin: function() {
			var _this = this;
			$(this.element).find('[data-nt-month]').each(function(){_this._addMonth(this,REGULAR);});
			this._addButtons(this.options.size == SMALL ? true : false,REGULAR);
			this._addPopup();
			this.refreshZoom();
		},	
//------------------------------------------------------
        _init: function() {
			if (this.options.wsLive){
				for (var i = 0; i < this.options.wsTables.length; i++) {
					if(this.options.wsTables[i]){
						nts.watch(this.options.id,"","table","",this.options.wsTables[i],this.liveUpdate,this)
					}	
				}	
			}  		
        },
//------------------------------------------------------
//   do not use "this" in this method, use "_this' instead.
        liveUpdate: function(json,_this) {
			if(_this.state.popLiveUpdate==true){
				// some actions here will trigger a netrefresh on the server side, but we're already getting a set of refresh
				// data from the action itself. In which case the live update is suppressed.
				_this.state.popLiveUpdate=false
			} else {
				var fromdate = $('#' + _this.options.id).find('[data-nt-month]').first().attr('data-nt-month')
				var todate = $('#' + _this.options.id).find('[data-nt-month]').last().attr('data-nt-month')
				$.get(_this.options.proc,'_ajax_=1&_refresh_=current&_fromdate_=' + fromdate + '&_todate_=' + todate + '&_parentProc_=' + _this.options.parent,function(data){
						// when new month arrives						
						xmlProcess(data);					
						_this.refresh()
					});				
			}	
        },		
//------------------------------------------------------    
		refresh: function() {
			var _this = this;	
			$(this.element).find('[data-nt-month]').each(function(){_this._addMonth(this,REGULAR);});
			this._addButtons(true,REGULAR);
			this.refreshZoom();
		},
//------------------------------------------------------    
		refreshZoom: function() {
			if (_zoomed == true){
				var zoomMonth = '#' + $('#'+this.options.divId+'_zoom_div').find('[data-nt-month]:first').attr('id');
				this._zoomInMonth($(zoomMonth));
			}	
		},
//------------------------------------------------------      		
		_addPopup: function(){
			var _this = this;
			$(this.element).after('<div id="popup_' + this.options.divId + '_div" class="nt-hidden">' +
														'<div id="'+this.options.divId+'_zoom_div"></div></div>');
			$('#popup_' + this.options.divId + '_div').
			dialog({close: function(event, ui) {_zoomed = false; },  
							autoOpen: false, 
							width: 1080, 
							modal: true, 
							position: ['center',15]})
			.removeClass('nt-hidden');				
		},
//------------------------------------------------------      
		clear: function(){
			$('#'+this.options.divId+'_cal_div').empty();
		},
//------------------------------------------------------      
		hide: function(){
			$('#'+this.options.divId+'_cal_div').hide();
		},
//------------------------------------------------------      
		show: function(){
			$('#'+this.options.divId+'_cal_div').show();
		},		
//------------------------------------------------------      
		addSmallHtmlMonth: function(date,m,y,headingText,firstDay,createDiv,createContents){
			var ml = [31,28,31,30,31,30,31,31,30,31,30,31];
			if (y%4==0){
				if (y % 100 == 0){
					if ( y % 400 == 0){
						ml[1] = 29;
					}
				} else {	
					ml[1] = 29;
				}
			}
			var id = 'd_'+m+'_'+y+'_div';
			var dayOneOffset = (date - firstDay) % 7;
			if (createDiv){
				$('#'+this.options.divId+'_cal_div').append(this.htmlSmallMonthWrapper(id,date));
			} else {
				$('#'+id).attr('data-nt-month',date);
			}	
			if (createContents){
				$('#'+id).append(this.htmlSmallMonthHeader(id,headingText))
				$('#'+id).append(this.htmlSmallMonthSubHeader(id))
				$('#'+id).append(this.htmlSmallMonthLines(this.options.divId,date,6,dayOneOffset,ml[m-1]))
			}
		},
//------------------------------------------------------      
		htmlSmallMonthWrapper: function(id,date){
			return(	'<div id="'+id+'" data-nt-month="'+date+'">' +
					'</div>')
		},
//------------------------------------------------------      
		htmlSmallMonthHeader: function(id,headingText){
			return(	'<div id="'+id+'_h" class="'+this.options.headerClass+'" data-nt-head="header">' +
					'<span class="'+this.options.headingClass+'" data-nt-heading="'+headingText+'">A</span>' +
					'</div>')
		},
//------------------------------------------------------      
		htmlSmallMonthSubHeader: function(id){
			return(	'<div id="'+id+'_sh"  class="'+this.options.subHeaderClass+'">' +
					'<div>'+this.options.weekDayName[0]+'</div>' +
					'<div>'+this.options.weekDayName[1]+'</div>' +
					'<div>'+this.options.weekDayName[2]+'</div>' +
					'<div>'+this.options.weekDayName[3]+'</div>' +
					'<div>'+this.options.weekDayName[4]+'</div>' +
					'<div>'+this.options.weekDayName[5]+'</div>' +
					'<div>'+this.options.weekDayName[6]+'</div>' +
					'</div>' )
		},
//------------------------------------------------------      
		htmlSmallMonthLines: function(id,date,weeks,dayOneOffset,dim){
			var s='';
			var i=0;
			var j=0;
			var day=1;
			if (!weeks) weeks=6;
			for(i=0; i < weeks; i++){
				s = s +	'<div id="'+id+'_m" class="nt-month-row nt-wide">' 
				for(j=0; j < 7 ; j++){
					if (dayOneOffset || day > 31 || day > dim){
						dayOneOffset -= 1;
						s = s +	'<div id="'+id+'_'+i+'_'+j+'" class="'+this.options.emptyCellClass+'">&#160;</div>';
					} else {
						s = s +	'<div id="'+id+'_'+ parseInt(date+day-1) +'" class="'+this.options.cellClass+'" data-nt-date="'+parseInt(date+day-1)+'"><div>'+day+'</div></div>';
						day += 1
					}					
				}	
				s = s +	'</div>'
				if (this.options.compressEmptyLines && day >= 31){
					break;
				}
			}
			return(s);
		},
//------------------------------------------------------      
		htmlSmallMonthClear: function(id,date,weeks,dayOneOffset,dim){
			var i=0;
			var j=0;
			var day=1;
			if (!weeks) weeks=6;
			for(i=0; i < weeks; i++){
				for(j=0; j < 7 ; j++){
					if (dayOneOffset || day > 31 || day > dim){
						dayOneOffset -= 1;
					} else {
						$('#' + id +'_'+ parseInt(date+day-1)).removeClass().addClass(this.options.cellClass)
						day += 1
					}										
				}	
				if (this.options.compressEmptyLines && day >= 31){
					break;
				}
			}
			return		
		},
//------------------------------------------------------      
		htmlSmallMonthData: function(date,m,firstDay,data){
			var id = 'd_'+date+'_div';
			var i=0;
			var _this=this;
			// clear month data
			var ml = [31,28,31,30,31,30,31,31,30,31,30,31];
			var dayOneOffset = (date - firstDay) % 7;
			this.htmlSmallMonthClear(this.options.divId,date,6,dayOneOffset,ml[m-1])			
			//
			if(!data){
				return
			}
			for (var i = 0; i < data.length; i++) {			
				$('#' + this.options.divId + '_' + parseInt(date-1+data[i][0])).each(function(){
					if (data[i-1]){
						if (data[i][2]==-1) data[i][2] = data[i-1][2];
						if (data[i][3]==-1) data[i][3] = data[i-1][3];
						if (data[i][4]==-1) data[i][4] = data[i-1][4];
						if (data[i][5]==-1) data[i][5] = data[i-1][5];
						if (data[i][6]==-1) data[i][6] = data[i-1][6];
						if (data[i][7]==-1) data[i][7] = data[i-1][7];
						if (data[i][8]==-1) data[i][8] = data[i-1][8];
						if (data[i][9]==-1) data[i][9] = data[i-1][9];
					}
					$(this)	.addClass(data[i][3])
							.attr('style',data[i][4])
							.attr('title',data[i][5])
							.attr('data-nt-image-big',data[i][6])
							.attr('data-nt-image-small',data[i][7])
							.attr('data-nt-id',data[i][8])
							.attr('data-nt-form',data[i][9])
							.attr('data-nt-place',data[i][10])
							;
					if 	(data[i][11] == 'r' || data[i][11] == 'i'){ 
						$(this).attr('data-nt-info',data[i][11]);
						if (data[i][8]){
							$(this).attr('data-nt-id','uk');
						}		
					}
					if (data[i][2]){ // content
						$(this).html('<div>'+data[i][1]+'</div><div>'+data[i][2]+'</div>');
					} else { // just label
						$(this).html('<div>'+data[i][1]+'</div>');
					}
				});
			}
		},
		
//------------------------------------------------------      
		_addMonth: function(month,zoomed){
		  this._setHeader(month);
		  this._primeUpdates(month,zoomed);		
		  this._primeInserts(month,zoomed);
			this._makeDraggable(month,zoomed);
			this._makeDroppable(month,zoomed);
			(this.options.size == BIG || zoomed == ZOOM) ? this._bigMonth(month) : this._smallMonth(month);
			this._applyGradients(month);
		},
//------------------------------------------------------      
		_setHeader: function(month){
			var _this = this;
			var _span = $(month).find('[data-nt-heading]');
			var _atr = $(month).find('[data-nt-heading]').attr('data-nt-heading');
			$(_span).html(_atr);
		},
//------------------------------------------------------      
		_bigMonth: function(month){
			var _this = this;
			$(month).removeClass(_this.options.smallMonthClass).addClass(_this.options.monthClass);
		},
//------------------------------------------------------      
		_smallMonth: function(month){
			var _this = this;
			$(month).removeClass(_this.options.MonthClass).addClass(_this.options.smallMonthClass);
		},
//------------------------------------------------------      
		_primeInserts: function(month,zoomed) {	
			var _this = this;	
			$(month).find("[data-nt-date]").not("[data-nt-id]").add('[data-nt-info="i"]',month)
				.removeClass("drop0 drop1 drag0 drag1")
				.addClass("drop"+zoomed)
				.attr("title",this.options.insertTip)
				.on("click",function(){
					if (_dragging==''){
						if (_this.options.popupMode && _this.options.insertForm){
							_this.state.popLiveUpdate=true;
							ntd.push(_this.options.insertForm,'',_this.options.insertText,1,1,null,_this.options.proc,'','_date_='+$(this).attr('data-nt-date')+'&'+_this.options.otherFormParameters,null,null,null,null,null,_this.options.parent);
						}	
					}		
				})	
				.find('div:first')
					.removeClass((_this.options.size==BIG || zoomed == ZOOM)? _this.options.smallEmptyLabelClass : _this.options.emptyLabelClass)
					.addClass((_this.options.size==BIG || zoomed == ZOOM) ? _this.options.emptyLabelClass : _this.options.smallEmptyLabelClass);
		},	
//------------------------------------------------------ 
		_primeUpdates: function(month,zoomed){ // find all full cells and prime them for call to update.
			var _this = this;	
			$(month).find("[data-nt-id]").not('[data-nt-info="r"]').not('[data-nt-info="i"]')
				.removeClass("drag0 drag1 drop0 drop1")
				.addClass("drag"+zoomed+" drop"+zoomed)
				.on("click.cal",function(){
					if (_dragging=='' && $(this).attr('data-nt-form') != undefined){
						if (_this.options.popupMode){
							_this.state.popLiveUpdate=true;
							ntd.push($(this).attr('data-nt-form'),'',_this.options.changeText,1,2,null,_this.options.proc,$(this).attr('data-nt-id'),'_date_='+$(this).attr('data-nt-date')+'&'+_this.options.otherFormParameters,null,null,null,null,null,_this.options.parent);
						}	
					}
				})
			$(month).find('[data-nt-id]')
				.addClass(_this.options.gradients ? "cal-grad" : "")
				.find('div:first')
					.removeClass((_this.options.size==BIG || zoomed == ZOOM) ? _this.options.smallLabelClass : _this.options.labelClass)
					.addClass((_this.options.size==BIG || zoomed == ZOOM) ? _this.options.labelClass : _this.options.smallLabelClass)
					.each(function(){
						if (_this.options.size==SMALL){
							image = $(this).parent().attr('data-nt-image-small');
							if (image){
								$(this).css('background-image','url("/'+image+'")');
							}	
						}
					})	
					.next()
						.removeClass((_this.options.size==BIG || zoomed == ZOOM) ? _this.options.smallContentClass : _this.options.contentClass)
						.addClass((_this.options.size==BIG || zoomed == ZOOM) ? _this.options.contentClass : _this.options.smallContentClass)
						.each(function(){
							if (_this.options.size==BIG || zoomed == ZOOM){
								image = $(this).parent().attr('data-nt-image-big');
								if (image){
									$(this).css('background-image','url("/'+image+'")');
								}	
							}
						})
						
			$(month)
				.find('[data-nt-place="f"]').removeClass('ui-corner-all').addClass((_this.options.size==BIG || zoomed == ZOOM)?'cal-corner-left':'cal-corner-left-small').end()
				.find('[data-nt-place="m"]').removeClass('ui-corner-all').end()
				.find('[data-nt-place="l"]').removeClass('ui-corner-all').addClass((_this.options.size==BIG || zoomed == ZOOM)?'cal-corner-right':'cal-corner-right-small').end()
				.find('[data-nt-place="s"]').removeClass('ui-corner-all').addClass((_this.options.size==BIG || zoomed == ZOOM)?'cal-corner-all':'cal-corner-all-small').end()
		},	
//------------------------------------------------------ 
		_makeDraggable: function(month,zoomed){
		  if (this.options.draganddrop){
			  $(month).find('.drag'+zoomed).draggable({
				  revert: 'invalid',
				  start: function(event, ui) { 
  					_dragging = $(this).attr('data-nt-id');
	  				_dragform = $(this).attr('data-nt-form');
		  		},
			  	stop: function(event, ui) { 
				  	setTimeout(function(){_dragging='';}, 300);
				  }
			  });
			};  
		},	
//------------------------------------------------------ 		
		_makeDroppable: function(month,zoomed){
			var _this = this;	            
			if (this.options.draganddrop){
			  $(month).find('.drop'+zoomed).droppable({
				  accept: '.drag'+zoomed,
				  drop: function(event, ui) { 
					_this.state.popLiveUpdate=true;
					ntd.push(_dragform,'',_this.options.changeText,1,2,null,_this.options.proc,_dragging,'_newdate_='+$(this).attr('data-nt-date'),1,null,null,null,null,_this.options.parent);
				  }
			  });
			};  
		},
//------------------------------------------------------ 
		_removeDragAndDrop: function(month,zoomed){
		  if (this.options.draganddrop){
				try{$(month).find('.drag'+zoomed).draggable("destroy");  } catch (e) {}	
				try{$(month).find('.drop'+zoomed).droppable("destroy");	 } catch (e) {}	
			};  
		},	
//------------------------------------------------------    
		_addButtons: function(addZoom,zoomed){
			var _this = this;
			$(this.element).find('[data-nt-month]:first').each(function(){_this._addPreviousButton(this,zoomed);});
			$(this.element).find('[data-nt-month]:last').each(function(){_this._addNextButton(this,zoomed);});
			if (addZoom && this.options.allowZoom){
				this._addZoomButtons();
			}	
		},
//------------------------------------------------------ 		
		_addZoomButtons: function(){
			var _this = this;
			if (this.options.size == SMALL){
				$(this.element).find('[data-nt-month]').each(function(){_this._addZoomButton(this);});			
			}	
			this._bindZoomButtons();
		},
//------------------------------------------------------ 		
		_bindZoomButtons: function(){
			var _this = this;	
			$(this.element).find('.ui-icon-circle-zoomin').on('click',function(){
				_this._zoomInMonth($(this).parent().parent());
			});
		},
//------------------------------------------------------ 		
		_zoomInMonth: function(month){		
			var _this = this;
			_zoomed = true;
			$('#popup_'+this.options.divId+'_div').dialog( "option", "title", _this.options.zoomHeading ).dialog('open');
			$('#'+this.options.divId+'_zoom_div').empty();
			$(month).clone().appendTo('#'+this.options.divId+'_zoom_div');
			var zoomMonth = $('#'+this.options.divId+'_zoom_div').find('[data-nt-month]:first')
			this._removeDragAndDrop(zoomMonth,0);
			this._removePreviousButton(zoomMonth,0);
			this._removeNextButton(zoomMonth,0);
			this._removeZoomButton(zoomMonth);
			this._zoomFormatIncoming(this);
		},
//------------------------------------------------------    
		_zoomFormatIncoming: function(_this){		
			_this._addMonth($('#'+ _this.options.divId + '_zoom_div').find('[data-nt-month]:first'),ZOOM);
			_this._addPreviousButton($('#'+ _this.options.divId + '_zoom_div').find('[data-nt-month]:first'),1);
			_this._addNextButton($('#'+ _this.options.divId + '_zoom_div').find('[data-nt-month]:last'),1);
		},
//------------------------------------------------------ 		
		_addZoomButton: function(month){
			var _this = this;
			var _id = $(month).attr('id') + '_zoom';
			if ($('#' + _id).html() == null){
				$(month)
					.find('[data-nt-heading]')
					.after('<span id="' + _id + '" class="nt-month-header-zoom ui-icon ui-icon-circle-zoomin">Zoom</span>')
			} 
		},
//------------------------------------------------------ 		
		_removeZoomButton: function(month){
			$(month).find('#' + $(month).attr('id') + '_zoom').remove();
		},		
//------------------------------------------------------    
		_addPreviousButton: function(month,zoomed){ 
			if ($('#' + this.options.divId + zoomed  + '_prev').attr('id') == undefined){
				$(month)
					.find('[data-nt-heading]')
					.before('<span id="' + this.options.divId + zoomed + '_prev" class="nt-hard-left nt-month-header-previous ui-icon ui-icon-circle-triangle-w">Prev</span>')
				this._bindPreviousButton(month,zoomed);
			}	
		},
//------------------------------------------------------ 		
		_removePreviousButton: function(month,zoomed){
			$(month).find('#' + this.options.divId + zoomed  + '_prev').remove();
		},		
//------------------------------------------------------ 		
		_addNextButton: function(month,zoomed){
			if ($('#' + this.options.divId + zoomed  + '_next').attr('id') == undefined){		
				$(month)
					.find('[data-nt-heading]')
					.after('<span id="' + this.options.divId + zoomed + '_next" class="nt-month-header-next ui-icon ui-icon-circle-triangle-e">Next</span>');
					//.after('<span id="' + this.options.divId + zoomed + '_next" class="nt-right ui-icon ui-icon-circle-triangle-e">Next</span>');
				this._bindNextButton(month,zoomed);
			}	
		},
//------------------------------------------------------ 		
		_removeNextButton: function(month,zoomed){
			$(month).find('#' + this.options.divId + zoomed + '_next').remove();
		},
//------------------------------------------------------ 		
		_bindNextButton: function(month,zoomed){
			var _this = this;	
			if (zoomed==false){
				$('#' + this.options.divId + zoomed  + '_next').on('click',function(){
					_this._scrollNext(month);
				});
			} else {
				$('#' + this.options.divId + zoomed  + '_next')
					.on('click',function(){
						var parentMonth = '#'+$(month).attr('id');
						$(month).empty().remove();
						var nextMonth = $(parentMonth).next();
						if ($(nextMonth).attr('id') != undefined){
							_this._zoomInMonth(nextMonth);
						} else {
							_this._scrollNext(parentMonth,function(){
									nextMonth = $(parentMonth).next();
									_this._zoomInMonth(nextMonth);
								});
						}	
					});	
			}	
		},
//------------------------------------------------------ 		
		_bindPreviousButton: function(month,zoomed){
			var _this = this;	
			if (zoomed==false){
				$('#' + this.options.divId + zoomed  + '_prev').on('click',function(){
					_this._scrollPrevious(month);
				});
			} else {
				$('#' + this.options.divId + zoomed  + '_prev')
					.on('click',function(){
						var parentMonth = '#'+$(month).attr('id');
						$(month).empty().remove();
						var previousMonth = $(parentMonth).prev();
						if ($(previousMonth).attr('id') != undefined){
							_this._zoomInMonth(previousMonth);
						} else {
							_this._scrollPrevious(parentMonth,function(){
									previousMonth = $(parentMonth).prev();
									_this._zoomInMonth(previousMonth);
								});
						}	
					});	
			}	
		},
//------------------------------------------------------    
		_scrollNext: function(month,onComplete){		
			var _this = this;	
			_this._removeNextButton(month,REGULAR);
			// create holder for incoming new month
			var newId = _this._getNextDivName();
			var height = $(month).height();
			var width = $(month).width();
			var _ad = $(month).attr('data-nt-month');
			$(month)
				.after('<div id="'+ newId+'"></div>');
			// get new month	
			$.get(_this.options.proc,'_ajax_=1&_next_=' + _ad + '&_parentProc_=' + this.options.parent,function(data){
					// when new month arrives
					xmlProcess(data);
					$(_this.element).find('#' + newId).each(function(){_this._addMonth(this,REGULAR);});
					_this._addButtons(true,REGULAR);
					if (onComplete){
						onComplete();
					}	
				});
			$(_this.element).find('[data-nt-month]:first').empty().remove();
		},		
//------------------------------------------------------    
		_scrollPrevious: function(month,onComplete){		
			var _this = this;	
			_this._removePreviousButton(month,REGULAR);
			// create holder for incoming new month
			var newId = _this._getPreviousDivName();
			var height = $(month).height();
			var width = $(month).width();
			var _ad = $(month).attr('data-nt-month');
			$(month)
				.before('<div id="'+ newId+'" style="float:left"></div>');
			// get new month	
			$.get(_this.options.proc,'_ajax_=1&_prev_=' + _ad + '&_parentProc_=' + this.options.parent,function(data){
					// when new month arrives
					xmlProcess(data);
					$(_this.element).find('#' + newId).each(function(){;_this._addMonth(this,REGULAR);});
					_this._addButtons(true,REGULAR);
					if (onComplete){
						onComplete();
					}	
				});
			$(_this.element).find('[data-nt-month]:last').empty().remove();
		},		
//------------------------------------------------------    
		_getPreviousDivName: function(){		
			var d = $(this.element).find('[data-nt-month]:first').attr('id');
			var parts=d.split('_');
			if (parts[1]==1){
			  parts[2] = parseInt(parts[2]) - 1;
			  parts[1] = 12;
			} else {
				parts[1] = parseInt(parts[1]) - 1;
			}	
			d = parts.join('_');
			return(d);
		},
//------------------------------------------------------    		
		_getNextDivName: function(){
			var d = $(this.element).find('[data-nt-month]:last').attr('id');
			var parts=d.split('_');
			if (parts[1]==12){
			  parts[2] = parseInt(parts[2]) + 1;
			  parts[1] = 1;
			} else {
				parts[1] = parseInt(parts[1]) + 1;
			}	
			d = parts.join('_');
			return(d);
		},
//------------------------------------------------------      
		_applyGradients: function(month){
		  var _this=this;
			$(month).find('.cal-grad')
				.each(function(){
					var col = $(this).css('background-color');
					if (col != 'transparent'){
						if (Modernizr.cssgradients ==  false){
							if (window.ActiveXObject) {  //for IE
								var ua = navigator.userAgent;
								var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
								if (re.exec(ua) != null){
									this.style.filter = '"filter: progid:DXImageTransform.Microsoft.gradient(StartColorStr='+_this._colToIEHex(col)+', EndColorStr=#FFFFFFFF)"';
								}	
							}
						} else {
							$(this).css('background','-webkit-gradient(linear, 0 0, 0 100%, from('+col+'), to(#FFFFFF))'); 
							if ($(this).css('background') == ''){
								$(this).css('background','-moz-linear-gradient(center bottom, #FFFFFF 0%, '+col+' 75%)');
							}		
						}	
					}	
				});		
		},
//------------------------------------------------------    
		_colToIEHex: function(color) {
		  if (color.substr(0, 1) === '#') {
			return color;
		  }
		  var dig = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);    
		  var r = parseInt(dig[2]);
		  var g = parseInt(dig[3]);
		  var b = parseInt(dig[4]);    
		  var rgb = b | (g << 8) | (r << 16);    
		  return dig[1] + '#FF' + rgb.toString(16);
		},
//------------------------------------------------------    
	   destroy: function() {
		   $.Widget.prototype.destroy.apply(this, arguments); // default destroy
		   // now do other stuff particular to this widget
	   }
 });

$.extend( $.ui.ntcalendar, {
	version: "@VERSION"
});

})( jQuery );

//===============================================================================================================
//===============================================================================================================

(function( $, undefined ) {
// vars and equates here
//  var _timePerPixel=0;
//  var _changeClicked=0;

$.widget("ui.ntplanner", {
		// default options
		options: {
			id:'',
			proc: 'nothing',
			parent:'',
			divId: '',
			resizable: 1,
			dayWidth: 72,
			planWidth: 0,
			dayOuterWidth: 72,  
			height: 52,   // in pixels because canvas, not css.
			padding: 3,
			startDay: 0,
			endDay: 86400,
			date: 0,
			columns: 7,
			changeText: 'Change',
			insertText: 'Insert',
			insertForm: '',      
			vertical: 0,
			gradients: true,
			showtimes: 1,     
			datesOnTop: 0,
			wsLive:0,             // live refresh via web sockets
			wsTables:[],          // array of table names to monitor
			_timePerPixel:0,    
			_changeClicked:0
		},
		state:{
			popLiveUpdate:false
		},
	//------------------------------------------------------
		_create: function() {
			this.refresh();
		},	
	//------------------------------------------------------
        _init: function() {
			if (this.options.wsLive){
				for (var i = 0; i < this.options.wsTables.length; i++) {
					if(this.options.wsTables[i]){
						nts.watch(this.options.id,"","table","",this.options.wsTables[i],this.liveUpdate,this)
					}	
				}	
			}  		
        },
	//------------------------------------------------------
	//   do not use "this" in this method, use "_this' instead.
        liveUpdate: function(json,_this) {			
			if (_this.state.popLiveUpdate==true){
				// some actions here will trigger a netRefresh on the server side, but we're already getting a set of refresh
				// data from the action itself. In which case the live update is suppressed.
				_this.state.popLiveUpdate=false
			} else {
				$.get(_this.options.proc,'_ajax_=1&_refresh_=current&_parentProc_=' + _this.options.parent,function(data){
						// when new data arrives
						xmlProcess(data);					
						_this.refresh()
					});				
			}	
        },		
	//------------------------------------------------------      
		hide: function(){
			$('#'+this.options.id).hide();
		},
	//------------------------------------------------------      
		show: function(){
			$('#'+this.options.id).show();
		},		
	//------------------------------------------------------
		addCanvas: function() {	   
			var i=(this.options.columns-1); 
			while(i>=0){
				$("[data-nt-row='data']").prepend('<canvas class="planner-back" width="'+(this.options.dayOuterWidth-2)+'" height="'+this.options.height+'" style="left:'+(i*this.options.dayOuterWidth)+'px;"></canvas>');
				i--;
			}  
		},
		//------------------------------------------------------    
		drawCanvasBackground: function() {	   		  
			if (this.options.showtimes == 1){
				var _this=this;
				var st=this.formatTime(this.options.startDay);
				var ed=this.formatTime(this.options.endDay);   	  	
				//$(".planner-back")
				var fc=$(".planner-back").eq(0).css('color');
				var fs=$(".planner-back").eq(0).css('font-size');
				$(".planner-back")
					.drawText({fillStyle:fc,strokeStyle:fc,x:5,y:26,text:st,align:"left",baseline:"middle",font:"normal "+fs+" Verdana, sans-serif"})
					.drawText({fillStyle:fc,strokeStyle:fc,x:this.options.dayWidth-5,y:26,text:ed,align:"right",baseline:"middle",font:"normal "+fs+" Verdana, sans-serif"});  		    
			}    
		},		
		//------------------------------------------------------    
		formatTime: function(t){
			var h = parseInt(t/360000);
			var m = parseInt(t%360000/6000);
			if (m<10) {
				return h + ':0' + m;
			} else {
				return h + ':' + m;
			}
		},
		//------------------------------------------------------   
		_resizable: function() {	
			// need to set max size, and also cope with browser window being resized smaller.
			var _this=this;
			if (this.options.resizable){
				$(this.element).find('#' + this.options.divId + '_resize_div').resizable({
					handles: "e", 
					alsoResize: '#'+ this.options.divId + '_columns_div',
					stop: function(event, ui) {SetSessionValue(_this.options.proc+':width',$(_this.element).find(".cal-scroll").width());}
				});
			} else {
				$('.cal-scroll').css('overflow-x','hidden');
			}
		},
		//------------------------------------------------------    
		_calcColumnWidths: function() {	
			var _this = this;		
			var _width=0;
			var _div;
			$(this.element).find('[data-nt-row="header"]').children().each(function(){
				$(this).width(_this.options.dayWidth);
				_this.options.dayOuterWidth = parseInt($(this).outerWidth(true));
			});
			_width=this.options.dayOuterWidth * this.options.columns;
			$('#'+this.options.divId+'_columns_div').children(':first').width(_width);	
			if (_this.options.vertical == 0){
				_this.options._timePerPixel = (this.options.columns*(this.options.endDay-this.options.startDay))/_width;
			} else if (_this.options.vertical == 86400){
				_this.options._timePerPixel = (this.options.endDay-this.options.startDay) / this.options.dayOuterWidth;
			} else {
				_this.options._timePerPixel = 100 * this.options.vertical / this.options.height;
			}			                                                       
		},
		//------------------------------------------------------    
		_prepareData: function() {	
			var _this = this;
			var dateStart=0;
			var dateEnd=0; 
			var viewDateStart=0;
			var viewDateEnd=0; 
			var timeStart=0;
			var timeEnd=0; 
			var dDraw=0;
			var dleft=0;
			var dright=0; 			
			var dheight=0;
			var dtop=0;
			var col=0;
			var dmarginTop=0;
			var dmarginBottom=0;
			var dmarginLeft=0;
			var dmarginRight=0;
			$(this.element).find("[data-nt-id]").each(function(){			  
				dDraw = 0;
				if (_this.options.vertical == 0){
					// plan with non-date/time as left column
					dDraw = 1;
					dleft = (($(this).attr('data-nt-start-date') - _this.options.date) * _this.options.dayOuterWidth) + 
							 (($(this).attr('data-nt-start-time') - _this.options.startDay) / _this.options._timePerPixel); 
					dright = (($(this).attr('data-nt-end-date') - _this.options.date) * _this.options.dayOuterWidth) + 
						   (($(this).attr('data-nt-end-time') - _this.options.startDay) / _this.options._timePerPixel); 		      
					dheight = _this.options.height -  _this.options.padding * 2 - 0;        
					dtop = _this.options.padding;
				} else if (_this.options.vertical == 86400){
					// plan with whole day as left column
					dDraw = 1;
					col = ($(this).attr('data-nt-column')-1);			    
					dleft = (col * _this.options.dayOuterWidth) +
							 (($(this).attr('data-nt-start-time') - _this.options.startDay) / _this.options._timePerPixel);			    
					dright = (col * _this.options.dayOuterWidth) + 
						   (($(this).attr('data-nt-end-time') - _this.options.startDay) / _this.options._timePerPixel); 		      
					if (dleft < col * _this.options.dayOuterWidth){
					  dleft = col * _this.options.dayOuterWidth;
					}
					if (dright > (col+1) * _this.options.dayOuterWidth){
						dright = (col+1) * _this.options.dayOuterWidth;
					}
					dheight = _this.options.height -  _this.options.padding * 2 - 0;
					dtop =  _this.options.padding;
				} else {                                     
				  // plan with varible time as the left column.
					dateStart = $(this).attr('data-nt-start-date');
					dateEnd = $(this).attr('data-nt-end-date');
					timeStart = $(this).attr('data-nt-start-time');
					timeEnd = $(this).attr('data-nt-end-time');
					viewDateStart = _this.options.date
					viewDateEnd = _this.options.date + _this.options.columns - 1
					
					if ((viewDateEnd < dateStart) || (viewDateStart > dateEnd)){
						dDraw = 0; // don't draw if viewable date is out of range
					} else if (dateStart == viewDateEnd && timeStart > _this.options.endDay){
						dDraw = 0; // don't draw if starts after viewable end
					} else if (dateEnd == viewDateStart && timeEnd < _this.options.startDay){
						dDraw = 0; // don't draw if ends before viewable start
					} else {
						dDraw = 1;						
						if ((dateStart == viewDateStart && timeStart < _this.options.startDay) || (dateStart < viewDateStart)){
							timeStart = _this.options.startDay;
						}
						if ((dateEnd == viewDateEnd && timeEnd > _this.options.endDay) || (dateEnd > viewDateEnd)){
							timeEnd = _this.options.endDay;
						}
						if (_this.options.datesOnTop){
							days = $(this).attr('data-nt-end-date')-$(this).attr('data-nt-start-date')+1;
						} else {
							days = 1;
						}
						dheight = (timeEnd-timeStart)/_this.options._timePerPixel; 
						col = ($(this).attr('data-nt-column')-1);
						dleft = (col*_this.options.dayOuterWidth)+5;
						dright = ((col+days)*_this.options.dayOuterWidth)-10;
						dtop = ((timeStart-_this.options.startDay)%(_this.options.vertical*100))/_this.options._timePerPixel;
						dmarginLeft = $(this).attr('data-nt-margin')
						dmarginRight = dmarginLeft;
					}
				}      
				if (dDraw){
					$(this)				
					.css('left',(dleft-(-dmarginLeft))+'px')
					.width(dright-dleft-0-dmarginLeft-dmarginRight)
					.css('top',dtop-(-dmarginTop)+'px')
					.css('height',dheight-dmarginTop-dmarginBottom+'px')
					.css('padding-left','0px') 
					.css('padding-right','0px')
					.removeClass('nt-hidden')
					.off('click.cal')
					.on('click.cal',function(e){
						_this.options._changeClicked = 1;
						_this.state.popLiveUpdate=true;
						ntd.push($(this).attr('data-nt-form'),'',_this.options.changeText,1,2,null,
						_this.options.proc,$(this).attr('data-nt-id'),'',0,'',$(this).parent().attr('data-nt-parent'),'','',_this.options.parent);
					})
				} else {
					$(this).addClass('nt-hidden');
				}
			});
		},
		//------------------------------------------------------    
		_bindInsert: function() {	
			var _this = this;
			$(this.element).find('[data-nt-row="data"]')
			.off('click.cal')
			.on('click.cal',function(e){
				if (_this.options._changeClicked == 0){
					if (_this.options.datesOnTop == 1){
						var _somedate =  _this.options.date + parseInt((e.pageX - $(this).offset().left) / _this.options.dayOuterWidth);
						if (_this.options.vertical == 0 || _this.options.vertical == 86400){
						  var _sometime = _this.options.startDay + parseInt(((e.pageX - $(this).offset().left) % _this.options.dayOuterWidth) * _this.options._timePerPixel);
						} else {
						  var po = $(this).parent().offset().top + $(this).parent().find(':first-child').height();
						  var _sometime = _this.options.startDay + parseInt((e.pageY-po) * _this.options._timePerPixel);
						}
					} else {
						var po = $(this).parent().offset().top + $(this).parent().find(':first-child').height();
						if (_this.options.vertical == 86400){  			
						var _somedate =  _this.options.date + parseInt((e.pageY-po) / $(this).height()) ;
						} else {
						var _somedate = _this.options.date;
						}
						if (_this.options.vertical == 0 || _this.options.vertical == 86400){  				  
						var _sometime = _this.options.startDay + parseInt(((e.pageX - $(this).offset().left) % _this.options.dayOuterWidth) * _this.options._timePerPixel);
						} else {    
						  var po = $(this).parent().offset().top + $(this).parent().find(':first-child').height();
						  var _sometime = _this.options.startDay + parseInt((e.pageY-po) * _this.options._timePerPixel);  				  
						}
					}
					if (_this.options.insertForm){
						_this.state.popLiveUpdate=true;
						ntd.push(_this.options.insertForm,'',_this.options.insertText,1,1,null,_this.options.proc,'','_date_='+ _somedate + '&_time_=' + _sometime + '&_bidv_=' + $(this).attr('data-nt-parent'),0,'',$(this).parent().attr('data-nt-parent'),'','',_this.options.parent);			
					}	
				} else {
					_this.options._changeClicked = 0;
				}	
			});
		},  

		
		//------------------------------------------------------    
		refresh: function() {	
			var _this=this;
			var i = $('.cal-scroll').width(); 		  
			if (this.options.planWidth){
				$('.cal-scroll').width(this.options.planWidth);
			} else {  
				if (i < this.options.dayWidth){
					$('.cal-scroll').width(20-(-this.options.dayWidth));
				}		  
			}    
			$('.planner-row-size').height(_this.options.height);
			this._calcColumnWidths();
			this._resizable();
			if (this.options.vertical >= 86400 || this.options.vertical==0){     			
				this.addCanvas();
				this.drawCanvasBackground();
			}  
			this._prepareData();
			this._bindInsert();      
		},		
		//------------------------------------------------------    
		destroy: function() {
			$.Widget.prototype.destroy.apply(this, arguments); // default destroy
			// now do other stuff particular to this widget
		}
 });

$.extend( $.ui.ntplanner, {
	version: "@VERSION"
});

})( jQuery );
	/**
 * Copyright (c) 2012 Anders Ekdahl (http://coffeescripter.com/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.2.7.a
 *
 * Demo and documentation: http://coffeescripter.com/code/ad-gallery/ (no longer alive)
 * 
 * NetTalk:
 * added images path to loader.gif
 * replaced calls to .load with .on("load" - lines 794, 821
 */
(function($) {
  $.fn.adGallery = function(options) {
    var defaults = { loader_image: '/styles/images/loader.gif', //bj
                     start_at_index: 0,
                     update_window_hash: true,
                     description_wrapper: false,
                     thumb_opacity: 0.7,
                     animate_first_image: false,
                     animation_speed: 400,
                     width: false,
                     height: false,
                     display_next_and_prev: true,
                     display_back_and_forward: true,
                     scroll_jump: 0, // If 0, it jumps the width of the container
                     slideshow: {
                       enable: true,
                       autostart: false,
                       speed: 5000,
                       start_label: 'Start',
                       stop_label: 'Stop',
                       stop_on_scroll: true,
                       countdown_prefix: '(',
                       countdown_sufix: ')',
                       onStart: false,
                       onStop: false
                     },
                     effect: 'slide-hori', // or 'slide-vert', 'fade', or 'resize', 'none'
                     enable_keyboard_move: true,
                     cycle: true,
                     hooks: {
                       displayDescription: false
                     },
                     callbacks: {
                       init: false,
                       afterImageVisible: false,
                       beforeImageVisible: false
                     }
    };
    var settings = $.extend(false, defaults, options);
    if(options && options.slideshow) {
      settings.slideshow = $.extend(false, defaults.slideshow, options.slideshow);
    };
    if(!settings.slideshow.enable) {
      settings.slideshow.autostart = false;
    };
    var galleries = [];
    $(this).each(function() {
      var gallery = new AdGallery(this, settings);
      galleries[galleries.length] = gallery;
    });
    // Sorry, breaking the jQuery chain because the gallery instances
    // are returned so you can fiddle with them
    return galleries;
  };

  function VerticalSlideAnimation(img_container, direction, desc) {
    var current_top = parseInt(img_container.css('top'), 10);
    if(direction == 'left') {
      var old_image_top = '-'+ this.image_wrapper_height +'px';
      img_container.css('top', this.image_wrapper_height +'px');
    } else {
      var old_image_top = this.image_wrapper_height +'px';
      img_container.css('top', '-'+ this.image_wrapper_height +'px');
    };
    if(desc) {
      desc.css('bottom', '-'+ desc[0].offsetHeight +'px');
      desc.animate({bottom: 0}, this.settings.animation_speed * 2);
    };
    if(this.current_description) {
      this.current_description.animate({bottom: '-'+ this.current_description[0].offsetHeight +'px'}, this.settings.animation_speed * 2);
    };
    return {old_image: {top: old_image_top},
            new_image: {top: current_top}};
  };

  function HorizontalSlideAnimation(img_container, direction, desc) {
    var current_left = parseInt(img_container.css('left'), 10);
    if(direction == 'left') {
      var old_image_left = '-'+ this.image_wrapper_width +'px';
      img_container.css('left',this.image_wrapper_width +'px');
    } else {
      var old_image_left = this.image_wrapper_width +'px';
      img_container.css('left','-'+ this.image_wrapper_width +'px');
    };
    if(desc) {
      desc.css('bottom', '-'+ desc[0].offsetHeight +'px');
      desc.animate({bottom: 0}, this.settings.animation_speed * 2);
    };
    if(this.current_description) {
      this.current_description.animate({bottom: '-'+ this.current_description[0].offsetHeight +'px'}, this.settings.animation_speed * 2);
    };
    return {old_image: {left: old_image_left},
            new_image: {left: current_left}};
  };

  function ResizeAnimation(img_container, direction, desc) {
    var image_width = img_container.width();
    var image_height = img_container.height();
    var current_left = parseInt(img_container.css('left'), 10);
    var current_top = parseInt(img_container.css('top'), 10);
    img_container.css({width: 0, height: 0, top: this.image_wrapper_height / 2, left: this.image_wrapper_width / 2});
    return {old_image: {width: 0,
                        height: 0,
                        top: this.image_wrapper_height / 2,
                        left: this.image_wrapper_width / 2},
            new_image: {width: image_width,
                        height: image_height,
                        top: current_top,
                        left: current_left}};
  };

  function FadeAnimation(img_container, direction, desc) {
    img_container.css('opacity', 0);
    return {old_image: {opacity: 0},
            new_image: {opacity: 1}};
  };

  // Sort of a hack, will clean this up... eventually
  function NoneAnimation(img_container, direction, desc) {
    img_container.css('opacity', 0);
    return {old_image: {opacity: 0},
            new_image: {opacity: 1},
            speed: 0};
  };

  function AdGallery(wrapper, settings) {
    this.init(wrapper, settings);
  };
  AdGallery.prototype = {
    // Elements
    wrapper: false,
    image_wrapper: false,
    gallery_info: false,
    nav: false,
    loader: false,
    preloads: false,
    thumbs_wrapper: false,
    thumbs_wrapper_width: 0,
    scroll_back: false,
    scroll_forward: false,
    next_link: false,
    prev_link: false,

    slideshow: false,
    image_wrapper_width: 0,
    image_wrapper_height: 0,
    current_index: -1,
    current_image: false,
    current_description: false,
    nav_display_width: 0,
    settings: false,
    images: false,
    in_transition: false,
    animations: false,
    init: function(wrapper, settings) {
      var context = this;
      this.wrapper = $(wrapper);
      this.settings = settings;
      this.setupElements();
      this.setupAnimations();
      if(this.settings.width) {
        this.image_wrapper_width = this.settings.width;
        this.image_wrapper.width(this.settings.width);
        this.wrapper.width(this.settings.width);
      } else {
        this.image_wrapper_width = this.image_wrapper.width();
      };
      if(this.settings.height) {
        this.image_wrapper_height = this.settings.height;
        this.image_wrapper.height(this.settings.height);
      } else {
        this.image_wrapper_height = this.image_wrapper.height();
      };
      this.nav_display_width = this.nav.width();
      this.current_index = -1;
      this.current_image = false;
      this.current_description = false;
      this.in_transition = false;
      this.findImages();
      if(this.settings.display_next_and_prev) {
        this.initNextAndPrev();
      };
      // The slideshow needs a callback to trigger the next image to be shown
      // but we don't want to give it access to the whole gallery instance
      var nextimage_callback = function(callback) {
        return context.nextImage(callback);
      };
      this.slideshow = new AdGallerySlideshow(nextimage_callback, this.settings.slideshow);
      this.controls.append(this.slideshow.create());
      if(this.settings.slideshow.enable) {
        this.slideshow.enable();
      } else {
        this.slideshow.disable();
      };
      if(this.settings.display_back_and_forward) {
        this.initBackAndForward();
      };
      if(this.settings.enable_keyboard_move) {
        this.initKeyEvents();
      };
      this.initHashChange();
      var start_at = parseInt(this.settings.start_at_index, 10);
      if(typeof this.getIndexFromHash() != "undefined") {
        start_at = this.getIndexFromHash();
      };
      this.loading(true);
      this.showImage(start_at,
        function() {
          // We don't want to start the slideshow before the image has been
          // displayed
          if(context.settings.slideshow.autostart) {
            context.preloadImage(start_at + 1);
            context.slideshow.start();
          };
        }
      );
      this.fireCallback(this.settings.callbacks.init);
    },
    setupAnimations: function() {
      this.animations = {
        'slide-vert': VerticalSlideAnimation,
        'slide-hori': HorizontalSlideAnimation,
        'resize': ResizeAnimation,
        'fade': FadeAnimation,
        'none': NoneAnimation
      };
    },
    setupElements: function() {
      this.controls = this.wrapper.find('.ad-controls');
      this.gallery_info = $('<p class="ad-info"></p>');
      this.controls.append(this.gallery_info);
      this.image_wrapper = this.wrapper.find('.ad-image-wrapper');
      this.image_wrapper.empty();
      this.nav = this.wrapper.find('.ad-nav');
      this.thumbs_wrapper = this.nav.find('.ad-thumbs');
      this.preloads = $('<div class="ad-preloads"></div>');
      this.loader = $('<img class="ad-loader" src="'+ this.settings.loader_image +'">');
      this.image_wrapper.append(this.loader);
      this.loader.hide();
      $(document.body).append(this.preloads);
    },
    loading: function(bool) {
      if(bool) {
        this.loader.show();
      } else {
        this.loader.hide();
      };
    },
    addAnimation: function(name, fn) {
      if($.isFunction(fn)) {
        this.animations[name] = fn;
      };
    },
    findImages: function() {
      var context = this;
      this.images = [];
      var thumbs_loaded = 0;
      var thumbs = this.thumbs_wrapper.find('a');
      var thumb_count = thumbs.length;
      if(this.settings.thumb_opacity < 1) {
        thumbs.find('img').css('opacity', this.settings.thumb_opacity);
      };
      thumbs.each(
        function(i) {
          var link = $(this);
          link.data("ad-i", i);
          var image_src = link.attr('href');
          var thumb = link.find('img');
          context.whenImageLoaded(thumb[0], function() {
            var width = thumb[0].parentNode.parentNode.offsetWidth;
            if(thumb[0].width == 0) {
              // If the browser tells us that the image is loaded, but the width
              // is still 0 for some reason, we default to 100px width.
              // It's not very nice, but it's better than 0.
              width = 100;
            };
            context.thumbs_wrapper_width += width;
            thumbs_loaded++;
          });
          context._initLink(link);
          context.images[i] = context._createImageData(link, image_src);
        }
      );
      // Wait until all thumbs are loaded, and then set the width of the ul
      var inter = setInterval(
        function() {
          if(thumb_count == thumbs_loaded) {
            context._setThumbListWidth(context.thumbs_wrapper_width);
            clearInterval(inter);
          };
        },
        100
      );
    },
    _setThumbListWidth: function(wrapper_width) {
      wrapper_width -= 100;
      var list = this.nav.find('.ad-thumb-list');
      list.css('width', wrapper_width +'px');
      var i = 1;
      var last_height = list.height();
      while(i < 201) {
        list.css('width', (wrapper_width + i) +'px');
        if(last_height != list.height()) {
          break;
        };
        last_height = list.height();
        i++;
      };
      if(list.width() < this.nav.width()) {
        list.width(this.nav.width());
      };
    },
    _initLink: function(link) {
      var context = this;
      link.click(
        function() {
          context.showImage(link.data("ad-i"));
          context.slideshow.stop();
          return false;
        }
      ).hover(
        function() {
          if(!$(this).is('.ad-active') && context.settings.thumb_opacity < 1) {
            $(this).find('img').fadeTo(300, 1);
          };
          context.preloadImage(link.data("ad-i"));
        },
        function() {
          if(!$(this).is('.ad-active') && context.settings.thumb_opacity < 1) {
            $(this).find('img').fadeTo(300, context.settings.thumb_opacity);
          };
        }
      );
    },
    _createImageData: function(thumb_link, image_src) {
      var link = false;
      var thumb_img = thumb_link.find("img");
      if(thumb_img.data('ad-link')) {
        link = thumb_link.data('ad-link');
      } else if(thumb_img.attr('longdesc') && thumb_img.attr('longdesc').length) {
        link = thumb_img.attr('longdesc');
      };
      var desc = false;
      if(thumb_img.data('ad-desc')) {
        desc = thumb_img.data('ad-desc');
      } else if(thumb_img.attr('alt') && thumb_img.attr('alt').length) {
        desc = thumb_img.attr('alt');
      };
      var title = false;
      if(thumb_img.data('ad-title')) {
        title = thumb_img.data('ad-title');
      } else if(thumb_img.attr('title') && thumb_img.attr('title').length) {
        title = thumb_img.attr('title');
      };
      return { thumb_link: thumb_link, image: image_src, error: false,
               preloaded: false, desc: desc, title: title, size: false,
               link: link };
    },
    initKeyEvents: function() {
      var context = this;
      $(document).keydown(
        function(e) {
          if(e.keyCode == 39) {
            // right arrow
            context.nextImage();
            context.slideshow.stop();
          } else if(e.keyCode == 37) {
            // left arrow
            context.prevImage();
            context.slideshow.stop();
          };
        }
      );
    },
    getIndexFromHash: function() {
      if(window.location.hash && window.location.hash.indexOf('#ad-image-') === 0) {
        var id = window.location.hash.replace(/^#ad-image-/g, '');
        var thumb = this.thumbs_wrapper.find("#"+ id);
        if(thumb.length) {
          return this.thumbs_wrapper.find("a").index(thumb);
        } else if(!isNaN(parseInt(id, 10))) {
          return parseInt(id, 10);
        };
      };
      return undefined;
    },
    removeImage: function(index) {
      if(index < 0 || index >= this.images.length) {
        throw "Cannot remove image for index "+ index;
      };
      var image = this.images[index];
      this.images.splice(index, 1);
      var thumb_link = image.thumb_link;
      var thumb_width = thumb_link[0].parentNode.offsetWidth;
      this.thumbs_wrapper_width -= thumb_width;
      thumb_link.remove();
      this._setThumbListWidth(this.thumbs_wrapper_width);
      this.gallery_info.html((this.current_index + 1) +' / '+ this.images.length);
      this.thumbs_wrapper.find('a').each(
        function(i) {
          $(this).data("ad-i", i);
        }
      );
      if(index == this.current_index && this.images.length != 0) {
        this.showImage(0);
      };
    },
    removeAllImages: function() {
      for (var i = this.images.length - 1; i >= 0; i--) {
        this.removeImage(i);
      };
    },
    addImage: function(thumb_url, image_url, image_id, title, description) {
      image_id = image_id || "";
      title = title || "";
      description = description || "";
      var li = $('<li><a href="'+ image_url +'" id="'+ image_id +'">' +
                   '<img src="'+ thumb_url +'" title="'+ title +'" alt="'+ description +'">' +
                 '</a></li>');
      var context = this;
      this.thumbs_wrapper.find("ul").append(li);
      
      var link = li.find("a");
      var thumb = link.find("img");
      thumb.css('opacity', this.settings.thumb_opacity);
      
      this.whenImageLoaded(thumb[0], function() {
        var thumb_width = thumb[0].parentNode.parentNode.offsetWidth;
        if(thumb[0].width == 0) {
          // If the browser tells us that the image is loaded, but the width
          // is still 0 for some reason, we default to 100px width.
          // It's not very nice, but it's better than 0.
          thumb_width = 100;
        };
        
        context.thumbs_wrapper_width += thumb_width;
        context._setThumbListWidth(context.thumbs_wrapper_width);
      });
      var i = this.images.length;
      link.data("ad-i", i);
      this._initLink(link);
      this.images[i] = context._createImageData(link, image_url);
      this.gallery_info.html((this.current_index + 1) +' / '+ this.images.length);
    },
    initHashChange: function() {
      var context = this;
      if("onhashchange" in window) {
        $(window).bind("hashchange", function() {
          var index = context.getIndexFromHash();
          if(typeof index != "undefined" && index != context.current_index) {
            context.showImage(index);
          };
        });
      } else {
        var current_hash = window.location.hash;
        setInterval(function() {
          if(window.location.hash != current_hash) {
            current_hash = window.location.hash;
            var index = context.getIndexFromHash();
            if(typeof index != "undefined" && index != context.current_index) {
              context.showImage(index);
            };
          };
        }, 200);
      };
    },
    initNextAndPrev: function() {
      this.next_link = $('<div class="ad-next"><div class="ad-next-image"></div></div>');
      this.prev_link = $('<div class="ad-prev"><div class="ad-prev-image"></div></div>');
      this.image_wrapper.append(this.next_link);
      this.image_wrapper.append(this.prev_link);
      var context = this;
      this.prev_link.add(this.next_link).mouseover(
        function(e) {
          // IE 6 hides the wrapper div, so we have to set it's width
          $(this).css('height', context.image_wrapper_height);
          $(this).find('div').show();
        }
      ).mouseout(
        function(e) {
          $(this).find('div').hide();
        }
      ).click(
        function() {
          if($(this).is('.ad-next')) {
            context.nextImage();
            context.slideshow.stop();
          } else {
            context.prevImage();
            context.slideshow.stop();
          };
        }
      ).find('div').css('opacity', 0.7);
    },
    initBackAndForward: function() {
      var context = this;
      this.scroll_forward = $('<div class="ad-forward"></div>');
      this.scroll_back = $('<div class="ad-back"></div>');
      this.nav.append(this.scroll_forward);
      this.nav.prepend(this.scroll_back);
      var has_scrolled = 0;
      var thumbs_scroll_interval = false;
      $(this.scroll_back).add(this.scroll_forward).click(
        function() {
          // We don't want to jump the whole width, since an image
          // might be cut at the edge
          var width = context.nav_display_width - 50;
          if(context.settings.scroll_jump > 0) {
            var width = context.settings.scroll_jump;
          };
          if($(this).is('.ad-forward')) {
            var left = context.thumbs_wrapper.scrollLeft() + width;
          } else {
            var left = context.thumbs_wrapper.scrollLeft() - width;
          };
          if(context.settings.slideshow.stop_on_scroll) {
            context.slideshow.stop();
          };
          context.thumbs_wrapper.animate({scrollLeft: left +'px'});
          return false;
        }
      ).css('opacity', 0.6).hover(
        function() {
          var direction = 'left';
          if($(this).is('.ad-forward')) {
            direction = 'right';
          };
          thumbs_scroll_interval = setInterval(
            function() {
              has_scrolled++;
              // Don't want to stop the slideshow just because we scrolled a pixel or two
              if(has_scrolled > 30 && context.settings.slideshow.stop_on_scroll) {
                context.slideshow.stop();
              };
              var left = context.thumbs_wrapper.scrollLeft() + 1;
              if(direction == 'left') {
                left = context.thumbs_wrapper.scrollLeft() - 1;
              };
              context.thumbs_wrapper.scrollLeft(left);
            },
            10
          );
          $(this).css('opacity', 1);
        },
        function() {
          has_scrolled = 0;
          clearInterval(thumbs_scroll_interval);
          $(this).css('opacity', 0.6);
        }
      );
    },
    _afterShow: function() {
      this.gallery_info.html((this.current_index + 1) +' / '+ this.images.length);
      if(!this.settings.cycle) {
        // Needed for IE
        this.prev_link.show().css('height', this.image_wrapper_height);
        this.next_link.show().css('height', this.image_wrapper_height);
        if(this.current_index == (this.images.length - 1)) {
          this.next_link.hide();
        };
        if(this.current_index == 0) {
          this.prev_link.hide();
        };
      };
      if(this.settings.update_window_hash) {
        var thumb_link = this.images[this.current_index].thumb_link;
        if (thumb_link.attr("id")) {
          window.location.hash = "#ad-image-"+ thumb_link.attr("id");
        } else {
          window.location.hash = "#ad-image-"+ this.current_index;
        };
      };
      this.fireCallback(this.settings.callbacks.afterImageVisible);
    },
    /**
     * Checks if the image is small enough to fit inside the container
     * If it's not, shrink it proportionally
     */
    _getContainedImageSize: function(image_width, image_height) {
      if(image_height > this.image_wrapper_height) {
        var ratio = image_width / image_height;
        image_height = this.image_wrapper_height;
        image_width = this.image_wrapper_height * ratio;
      };
      if(image_width > this.image_wrapper_width) {
  	    var ratio = image_height / image_width;
  	    image_width = this.image_wrapper_width;
  	    image_height = this.image_wrapper_width * ratio;
  	  };
      return {width: image_width, height: image_height};
    },
    /**
     * If the image dimensions are smaller than the wrapper, we position
     * it in the middle anyway
     */
    _centerImage: function(img_container, image_width, image_height) {
      img_container.css('top', '0px');
      if(image_height < this.image_wrapper_height) {
        var dif = this.image_wrapper_height - image_height;
        img_container.css('top', (dif / 2) +'px');
      };
      img_container.css('left', '0px');
      if(image_width < this.image_wrapper_width) {
        var dif = this.image_wrapper_width - image_width;
        img_container.css('left', (dif / 2) +'px');
      };
    },
    _getDescription: function(image) {
      var desc = false;
      if(image.desc.length || image.title.length) {
        var title = '';
        if(image.title.length) {
          title = '<strong class="ad-description-title">'+ image.title +'</strong>';
        };
        var desc = '';
        if(image.desc.length) {
          desc = '<span>'+ image.desc +'</span>';
        };
        desc = $('<p class="ad-image-description">'+ title + desc +'</p>');
      };
      return desc;
    },
    /**
     * @param function callback Gets fired when the image has loaded, is displaying
     *                          and it's animation has finished
     */
    showImage: function(index, callback) {
      if(this.images[index] && !this.in_transition && index != this.current_index) {
        var context = this;
        var image = this.images[index];
        this.in_transition = true;
        if(!image.preloaded) {
          this.loading(true);
          this.preloadImage(index, function() {
            context.loading(false);
            context._showWhenLoaded(index, callback);
          });
        } else {
          this._showWhenLoaded(index, callback);
        };
      };
    },
    /**
     * @param function callback Gets fired when the image has loaded, is displaying
     *                          and it's animation has finished
     */
    _showWhenLoaded: function(index, callback) {
      if(this.images[index]) {
        var context = this;
        var image = this.images[index];
        var img_container = $(document.createElement('div')).addClass('ad-image');
        var img = $(new Image()).attr('src', image.image);
        if(image.link) {
          var link = $('<a href="'+ image.link +'" target="_blank"></a>');
          link.append(img);
          img_container.append(link);
        } else {
          img_container.append(img);
        };
        this.image_wrapper.prepend(img_container);
        var size = this._getContainedImageSize(image.size.width, image.size.height);
        img.attr('width', size.width);
        img.attr('height', size.height);
        img_container.css({width: size.width +'px', height: size.height +'px'});
        this._centerImage(img_container, size.width, size.height);
        var desc = this._getDescription(image);
        if(desc) {
          if(!this.settings.description_wrapper && !this.settings.hooks.displayDescription) {
            img_container.append(desc);
            var width = size.width - parseInt(desc.css('padding-left'), 10) - parseInt(desc.css('padding-right'), 10);
            desc.css('width', width +'px');
          } else if(this.settings.hooks.displayDescription) {
            this.settings.hooks.displayDescription.call(this, image);
          } else {
            var wrapper = this.settings.description_wrapper;
            wrapper.append(desc);
          };
        };
        this.highLightThumb(this.images[index].thumb_link);
        
        var direction = 'right';
        if(this.current_index < index) {
          direction = 'left';
        };
        this.fireCallback(this.settings.callbacks.beforeImageVisible);
        if(this.current_image || this.settings.animate_first_image) {
          var animation_speed = this.settings.animation_speed;
          var easing = 'swing';
          var animation = this.animations[this.settings.effect].call(this, img_container, direction, desc);
          if(typeof animation.speed != 'undefined') {
            animation_speed = animation.speed;
          };
          if(typeof animation.easing != 'undefined') {
            easing = animation.easing;
          };
          if(this.current_image) {
            var old_image = this.current_image;
            var old_description = this.current_description;
            old_image.animate(animation.old_image, animation_speed, easing,
              function() {
                old_image.remove();
                if(old_description) old_description.remove();
              }
            );
          };
          img_container.animate(animation.new_image, animation_speed, easing,
            function() {
              context.current_index = index;
              context.current_image = img_container;
              context.current_description = desc;
              context.in_transition = false;
              context._afterShow();
              context.fireCallback(callback);
            }
          );
        } else {
          this.current_index = index;
          this.current_image = img_container;
          context.current_description = desc;
          this.in_transition = false;
          context._afterShow();
          this.fireCallback(callback);
        };
      };
    },
    nextIndex: function() {
      if(this.current_index == (this.images.length - 1)) {
        if(!this.settings.cycle) {
          return false;
        };
        var next = 0;
      } else {
        var next = this.current_index + 1;
      };
      return next;
    },
    nextImage: function(callback) {
      var next = this.nextIndex();
      if(next === false) return false;
      this.preloadImage(next + 1);
      this.showImage(next, callback);
      return true;
    },
    prevIndex: function() {
      if(this.current_index == 0) {
        if(!this.settings.cycle) {
          return false;
        };
        var prev = this.images.length - 1;
      } else {
        var prev = this.current_index - 1;
      };
      return prev;
    },
    prevImage: function(callback) {
      var prev = this.prevIndex();
      if(prev === false) return false;
      this.preloadImage(prev - 1);
      this.showImage(prev, callback);
      return true;
    },
    preloadAll: function() {
      var context = this;
      var i = 0;
      function preloadNext() {
        if(i < context.images.length) {
          i++;
          context.preloadImage(i, preloadNext);
        };
      };
      context.preloadImage(i, preloadNext);
    },
    preloadImage: function(index, callback) {
      if(this.images[index]) {
        var image = this.images[index];
        if(!this.images[index].preloaded) {
          var img = $(new Image());
          img.attr('src', image.image);
          if(!this.isImageLoaded(img[0])) {
            this.preloads.append(img);
            var context = this;
            img.on("load", // nt
              function() {
                image.preloaded = true;
                image.size = { width: this.width, height: this.height };
                context.fireCallback(callback);
              }
			).on("error", // nt
              function() {
                image.error = true;
                image.preloaded = false;
                image.size = false;
              }
            );
          } else {
            image.preloaded = true;
            image.size = { width: img[0].width, height: img[0].height };
            this.fireCallback(callback);
          };
        } else {
          this.fireCallback(callback);
        };
      };
    },
    whenImageLoaded: function(img, callback) {
      if (this.isImageLoaded(img)) {
        callback && callback();
      } else {
        $(img).on("load",callback); // bj
      };
    },
    isImageLoaded: function(img) {
      if(typeof img.complete != 'undefined' && !img.complete) {
        return false;
      };
      if(typeof img.naturalWidth != 'undefined' && img.naturalWidth == 0) {
        return false;
      };
      return true;
    },
    highLightThumb: function(thumb) {
      this.thumbs_wrapper.find('.ad-active').removeClass('ad-active');
      thumb.addClass('ad-active');
      if(this.settings.thumb_opacity < 1) {
        this.thumbs_wrapper.find('a:not(.ad-active) img').fadeTo(300, this.settings.thumb_opacity);
        thumb.find('img').fadeTo(300, 1);
      };
      var left = thumb[0].parentNode.offsetLeft;
      left -= (this.nav_display_width / 2) - (thumb[0].offsetWidth / 2);
      this.thumbs_wrapper.animate({scrollLeft: left +'px'});
    },
    fireCallback: function(fn) {
      if($.isFunction(fn)) {
        fn.call(this);
      };
    }
  };

  function AdGallerySlideshow(nextimage_callback, settings) {
    this.init(nextimage_callback, settings);
  };
  AdGallerySlideshow.prototype = {
    start_link: false,
    stop_link: false,
    countdown: false,
    controls: false,

    settings: false,
    nextimage_callback: false,
    enabled: false,
    running: false,
    countdown_interval: false,
    init: function(nextimage_callback, settings) {
      var context = this;
      this.nextimage_callback = nextimage_callback;
      this.settings = settings;
    },
    create: function() {
      this.start_link = $('<span class="ad-slideshow-start">'+ this.settings.start_label +'</span>');
      this.stop_link = $('<span class="ad-slideshow-stop">'+ this.settings.stop_label +'</span>');
      this.countdown = $('<span class="ad-slideshow-countdown"></span>');
      this.controls = $('<div class="ad-slideshow-controls"></div>');
      this.controls.append(this.start_link).append(this.stop_link).append(this.countdown);
      this.countdown.hide();

      var context = this;
      this.start_link.click(
        function() {
          context.start();
        }
      );
      this.stop_link.click(
        function() {
          context.stop();
        }
      );
      $(document).keydown(
        function(e) {
          if(e.keyCode == 83) {
            // 's'
            if(context.running) {
              context.stop();
            } else {
              context.start();
            };
          };
        }
      );
      return this.controls;
    },
    disable: function() {
      this.enabled = false;
      this.stop();
      this.controls.hide();
    },
    enable: function() {
      this.enabled = true;
      this.controls.show();
    },
    toggle: function() {
      if(this.enabled) {
        this.disable();
      } else {
        this.enable();
      };
    },
    start: function() {
      if(this.running || !this.enabled) return false;
      var context = this;
      this.running = true;
      this.controls.addClass('ad-slideshow-running');
      this._next();
      this.fireCallback(this.settings.onStart);
      return true;
    },
    stop: function() {
      if(!this.running) return false;
      this.running = false;
      this.countdown.hide();
      this.controls.removeClass('ad-slideshow-running');
      clearInterval(this.countdown_interval);
      this.fireCallback(this.settings.onStop);
      return true;
    },
    _next: function() {
      var context = this;
      var pre = this.settings.countdown_prefix;
      var su = this.settings.countdown_sufix;
      clearInterval(context.countdown_interval);
      this.countdown.show().html(pre + (this.settings.speed / 1000) + su);
      var slide_timer = 0;
      this.countdown_interval = setInterval(
        function() {
          slide_timer += 1000;
          if(slide_timer >= context.settings.speed) {
            var whenNextIsShown = function() {
              // A check so the user hasn't stoped the slideshow during the
              // animation
              if(context.running) {
                context._next();
              };
              slide_timer = 0;
            };
            if(!context.nextimage_callback(whenNextIsShown)) {
              context.stop();
            };
            slide_timer = 0;
          };
          var sec = parseInt(context.countdown.text().replace(/[^0-9]/g, ''), 10);
          sec--;
          if(sec > 0) {
            context.countdown.html(pre + sec + su);
          };
        },
        1000
      );
    },
    fireCallback: function(fn) {
      if($.isFunction(fn)) {
        fn.call(this);
      };
    }
  };
})(jQuery);/*
 * jQuery Iframe Transport Plugin 1.5
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true, nomen: true */
/*global define, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts three additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    $.ajaxTransport('iframe', function (options) {
        if (options.async && (options.type === 'POST' || options.type === 'GET')) {
            var form,
                iframe;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    // javascript:false as initial iframe src
                    // prevents warning popups on HTTPS in IE6.
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    iframe = $(
                        '<iframe src="javascript:false;" name="iframe-transport-' +
                            (counter += 1) + '"></iframe>'
                    ).on('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .on('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="javascript:false;"></iframe>')
                                    .appendTo(form);
                                form.remove();
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                $(input).prop('name', clone.prop('name'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .off('load')
                            .prop('src', 'javascript'.concat(':false;'));
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, and script:
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return $(iframe[0].body).html();
            },
            'iframe script': function (iframe) {
                return $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));
/*
 * jQuery File Upload Plugin 5.42.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * modified by Bruce
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, window, document, location, Blob, FormData */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file">').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
			// bruce. Want to cache the field name so it is sent with all the files uploaded. 
			ntFieldName: '', 
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).on('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
			if (this.options.ntFieldName){ // bruce. don't want the files[] array - just use the first name.
				return this.options.ntFieldName;
			}	
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).pipe(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).pipe(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    this._sequence = this._sequence.pipe(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (limitSize && (!filesLength || files[0].size === undefined)) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.off('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                },
                dirReader, entries = [];
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                clone = $(this.element[0].cloneNode(false)),
                data = clone.data();
            // Avoid memory leaks:
            clone.remove();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                data,
                function (key, value) {
                    var dataAttributeName = 'data-' +
                        // Convert camelCase to hyphen-ated key:
                        key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                    if (clone.attr(dataAttributeName)) {
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));
// nettalk file upload wrapper

(function( $, undefined ) {

$.widget( "ui.ntupload", {
	options: {
		proc: '',
		parent: '',
		field: '',
		multiple: true,
		autoUpload: false,
		jQueryButtons: true, 				
		addText: 'Add Files',
		addIcon: '',
		addClass: '',
		addId: 'a',
		addOnce: 1,
		clearText: 'Clear',
		clearIcon: '',
		clearClass: '',
		clearId: 'l',
		startText: 'Start',
		startIcon: '',
		startClass: '',
		smallStartClass: '',
		startId: 's',		
		cancelText: 'Cancel',
		cancelIcon: '',
		cancelClass: '',		
		smallCancelClass: '',
		removeText: 'Remove',
		removeIcon: '',
		smallRemoveClass: '',		
		cancelId: 'c',
		progressId: 'p',
		progressClass: '',
		listTable: true,		
		tableId: '',
		tableClass: 'nt-upload-table ui-corner-all',		
		uploadingText: 'Uploading',
		uploadedText: 'Uploaded',
		failedText: 'Failed',
		waitingText: 'Waiting',
		cancelledText: 'Cancelled',
		progressEvents: 1,
		maxSize:1,
		maxWarning:'File Too Large',
		ntform:'',
		dropId: ''
	},
	datas: new Array(),	
	waiting:0,
	started: 0,
	uploaded: 0,
	

//------------------------------------------------------
	_init : function() {
	var _this=this;	
	this.options.addId = 'a' + Math.random().toString(36).substring(7);
	this.options.clearId = 'l' + Math.random().toString(36).substring(7);
	this.options.startId = 's' + Math.random().toString(36).substring(7);		
	this.options.startId = 's' + Math.random().toString(36).substring(7);		
	this.options.cancelId = 'c' + Math.random().toString(36).substring(7);
	this.options.progressId = 'p' + Math.random().toString(36).substring(7);
	
	if (this.options.jQueryButtons){		
	   
		if (this.options.addIcon){
			$(this.element).children('label').append('<span class="ui-button-icon-primary ui-icon '+this.options.addIcon+'"></span>');
			$(this.element).children('label').addClass('ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary ' +this.options.addClass);			
		} else {
			$(this.element).children('label').addClass('ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only');
		}		
	} else {
		$(this.element).children('label').addClass('ui-button ui-corner-all nt-addfiles-button ' +this.options.addClass);
	}	
	$(this.element).children('label').append('<span id="'+this.options.addId+'" class="ui-button-text"><span>'+this.options.addText+'</span></span>');

	$(this.element).append('<button id="'+this.options.startId+'" data-inline="true" type="button" class="'+this.options.startClass+'">'+this.options.startText+'</Button>');
	$(this.element).append('<button id="'+this.options.clearId+'" data-inline="true" type="button" class="'+this.options.clearClass+'">'+this.options.clearText+'</Button>');
	$(this.element).append('<button id="'+this.options.cancelId+'" data-inline="true" type="button" class="'+this.options.cancelClass+'">'+this.options.cancelText+'</Button>');

	if (this.options.jQueryButtons){
		var options = {};
		if (this.options.startIcon){
			options = {icons: {primary: this.options.startIcon}};
		} else {
			$('#'+this.options.startId).addClass('nt-no-icon')
		}
		$('#'+this.options.startId).button(options).hide();
		options = {};
		if (this.options.clearIcon){
			options = {icons: {primary: this.options.clearIcon}};
		} else {
			$('#'+this.options.clearId).addClass('nt-no-icon')
		}	
		$('#'+this.options.clearId).button(options).hide();				
		options = {};
		if (this.options.cancelIcon){
			options = {icons: {primary: this.options.cancelIcon}};
		} else {
			$('#'+this.options.cancelId).addClass('nt-no-icon')
		}	
		$('#'+this.options.cancelId).button(options).hide();				
	} else {
		$('#'+this.options.startId).hide();	
		$('#'+this.options.clearId).hide();	
		$('#'+this.options.cancelId).hide();
	}
	
	if (this.options.listTable){
		if (!this.options.listTableId){
			this.options.tableId = 'T' + Math.random().toString(36).substring(7);
		}	
		$(this.element).append('<table id="'+this.options.tableId+'" class="'+this.options.tableClass+'"></table>');
		if (this.options.multiple){
		  $('#'+this.options.tableId).append('<tr><td colspan="4"><div id="'+this.options.progressId+'" class="'+this.options.progressClass+'" style="height:5px"></div></td></tr>');
		}  
	}
	$('#'+this.options.startId).off('click.ul').on('click.ul',function(e){_this.startall();});
	$('#'+this.options.clearId).off('click.ul').on('click.ul',function(e){_this.clearall();});
	$('#'+this.options.cancelId).off('click.ul').on('click.ul',function(e){_this.cancelall();});
	if (this.options.multiple){
	  $('#'+this.options.progressId).progressbar();
	  $('#'+this.options.progressId).hide();
	}  
	$('#'+this.options.tableId).hide();
	
	if (!!window.FormData) {
		this.options.progressEvents = true;
	} else {
		this.options.progressEvents = false;
	}	
	var dz = $(document);
	if (this.options.dropId){
		dz = $('#' + this.options.dropId);
	}
	$(this.element).find('[data-do="input"]').fileupload({
        dataType: 'xml',
		dropZone: dz,
		url: _this.options.proc + '_' + _this.options.field + '_value?_event_=accepted&_parentProc_=' + _this.options.parent,
		autoUpload: true,
		
        done: function (e, data) {
		  _this.doneone(e,data);
        },

        fail: function (e, data) {
		  _this.failone(e,data);
        },

		add: function(e,data){			
			_this.add(e,data);			
		},
		
		progressall: function (e, data) {
		  _this.progressall(e,data);			
		},
		
		progress: function (e, data) {
		  _this.progress(e,data);			
		}
		
    });
	
	},	

//------------------------------------------------------
	startall : function() {	 
        var _this=this;	                  
    if (this.options.progressEvents){
	      $('#'+this.options.progressId).show();
    }    
		if (this.options.jQueryButtons){
			$('#'+this.options.clearId).button().show();
			$('#'+this.options.cancelId).button().show();
		} else {
			$('#'+this.options.clearId).show();
			$('#'+this.options.cancelId).show();
		}		

		for(var d = 0; d < this.datas.length; d++){
			_this.startone(this.datas[d]);
		};		
	},		
	
//------------------------------------------------------
	clearall : function() {	 
    var _this=this;			
		for(var d = this.datas.length-1; d >= 0 ; d--){		    
			this.clearone(_this.datas[d]);
		};	
	},			
//------------------------------------------------------
	cancelall : function() {	 
        var _this=this;	
		$('#'+this.options.progressId).hide();
		for(var d = 0; d < this.datas.length; d++){
			_this.cancelone(this.datas[d]);
		};		
		if (this.options.jQueryButtons){
			$('#'+this.options.cancelId).button().hide();
			$('#'+this.options.startId).button().show();
			$('#'+this.options.clearId).button().show();		
		} else {
			$('#'+this.options.cancelId).hide();
			$('#'+this.options.startId).show();
			$('#'+this.options.clearId).show();		
		}		
	},			
//------------------------------------------------------
	startone : function(data) {	   
		if (this.options.progressEvents){
			$('#T'+data.context).show();
		}  
		$('#R'+data.context).hide();
		$('#C'+data.context).show();
		$('#W'+data.context).html('<span class="ui-corner-all ui-state-highlight nt-padding-5px">'+this.options.uploadingText+'</span>');
		data.submit();
		this.started += 1;
	},			
//------------------------------------------------------
	clearone : function(data,done) {	 		
		var _this=this;	
		var found=0;
		$('#T'+data.context).remove();
		if (done != true){
			$('#'+data.context).remove();
		}	
		for(var d = 0; d < this.datas.length; d++){
			if (_this.datas[d].context == data.context){
				found = true;				
			}	
			if (found){
				_this.datas[d] = _this.datas[d+1];
			}			
		}	
		this.datas.length -= 1;
		this.waiting -= 1;
		if (this.waiting == 0){
			if (this.options.jQueryButtons){
				$('#'+this.options.startId).button().hide();
				$('#'+this.options.clearId).button().hide();				
			} else {
				$('#'+this.options.startId).hide();
				$('#'+this.options.clearId).hide();				
			}			
			this.enableSave();
			if (this.uploaded ==0){
				$('#'+this.options.tableId).hide();
			}	
		}  
	},			
//------------------------------------------------------
	cancelone : function(data) {	 
        var _this=this;			
        if (!data.jqXHR) {
			data.errorThrown = 'abort';
			this._trigger('fail', data);			
        } else {
			data.jqXHR.abort();
        }		
		$('#W'+data.context).html('<span class="ui-state-error nt-padding-5px ui-corner-all">'+this.options.cancelledText+'</span>');
	},			
//------------------------------------------------------
	doneone : function(d,data) {	 
		$('#T'+data.context).hide();
		$('#S'+data.context).hide();
		$('#R'+data.context).hide();
		$('#C'+data.context).hide();
		$('#W'+data.context).html('<span class="ui-corner-all ui-state-highlight nt-padding-5px">'+this.options.uploadedText+'</span>');
		if(this.options.addOnce){
		  $('#' + this.options.field).parent().hide();
		}
		this.stopone();
		this.uploaded += 1;
		this.clearone(data,true);
		xmlProcess(data.jqXHR.responseText,true);
	},			
//------------------------------------------------------
	failone : function(d,data) {
		$('#T'+data.context).hide();
		$('#R'+data.context).show();
		$('#C'+data.context).hide();
		$('#W'+data.context).html('<span class="ui-state-error nt-padding-5px ui-corner-all">'+this.options.failedText+'</span>');
		this.stopone();
	},			
//------------------------------------------------------
	stopone : function() {	 
		this.started -= 1;
		if (this.started == 0){
			$('#'+this.options.progressId).hide();
			if (this.options.jQueryButtons){
				$('#'+this.options.cancelId).button().hide();
			} else {
				$('#'+this.options.cancelId).hide();
			}			
		}
	},			
	
//------------------------------------------------------
	add : function(e,data) {
		var _this=this;	
		var s='';
		if (this.options.multiple == false){
		  this.clearall();
		}
		$.each(data.files, function (index, file) {
			var bts;
			if (file.size == undefined){
				s = ''
			} else if (file.size < 1024){
				s = file.size + ' Bytes'
			} else if (file.size < 1048576){
				s = parseInt(file.size / 1024) + ' KB'
			} else {
				s = parseInt(file.size / 1048576) + ' MB'				
			}
			if (_this.options.maxSize && _this.options.maxSize < file.size){
				if (_this.options.maxSize < 1024){
					s = _this.options.maxSize + ' Bytes'
				} else if (_this.options.maxSize < 1048576){
					s = parseInt(_this.options.maxSize / 1024) + ' KB'
				} else {
					s = parseInt(_this.options.maxSize/ 1048576) + ' MB'				
				}
				alert(_this.options.maxWarning + ' : ' + file.name + ' > ' + s);
			} else {
				data.context = 'X' + Math.random().toString(36).substring(7);
				if (_this.options.multiple){    
					bts = '<td><button type="button" id="S'+data.context+'" data-inline="true" class="'+_this.options.smallStartClass+'">'+_this.options.startText+'</button></td>' +
						'<td><button type="button" id="R'+data.context+'" data-inline="true" class="'+_this.options.smallRemoveClass+'">'+_this.options.removeText+'</button></td>' +
					'<td	><button type="button" id="C'+data.context+'" data-inline="true" class="'+_this.options.smallCancelClass+'">'+_this.options.cancelText+'</button></td>' 
				} else {
					bts = '<td></td><td></td><td></td>'
				}			

				$('#'+ _this.options.tableId).append('<tr id="'+data.context+'"><td>'+file.name+'</td>' + 
												'<td id="Z'+data.context+'">'+s+'</td>'+
												'<td id="W'+data.context+'"><span class="">'+_this.options.waitingText+'</span></td>'+
												bts +
												 '</tr>' +
												 '<tr id="T'+data.context+'"><td colspan="6"><div id="P'+data.context+'" class="" style="height:10px"></div></td></tr>' 
												 );
				if (_this.options.jQueryButtons){
					var options = {};
					if (_this.options.startIcon){
						options = {icons: {primary: _this.options.startIcon}};
					} else {
						$('#S'+data.context).addClass('nt-no-icon')						
					}			
					$('#S'+data.context).button(options);
					options = {};
					if (_this.options.removeIcon){
						options = {icons: {primary: _this.options.removeIcon}};
					} else {
						$('#R'+data.context).addClass('nt-no-icon')
					}			
					$('#R'+data.context).button(options);
					options = {};
					if (_this.options.cancelIcon){
						options = {icons: {primary: _this.options.cancelIcon}};
					} else {
						$('#C'+data.context).addClass('nt-no-icon')
					}			
					$('#C'+data.context).button(options).hide();
				} else {
					$('#C'+data.context).hide();
				}
				$('#S'+data.context).off('click.ul').on('click.ul',function(e){_this.startone(data);});
				$('#R'+data.context).off('click.ul').on('click.ul',function(e){_this.clearone(data);});
				$('#C'+data.context).off('click.ul').on('click.ul',function(e){_this.cancelone(data);});
				
				$('#P'+data.context).progressbar();
				$('#T'+data.context).hide();
				_this.datas[_this.datas.length] = data;
				if (_this.options.autoUpload){
					_this.startone(data);
				}
				_this.waiting += 1;
			}	
		});		
		if(_this.waiting){
			$('#'+this.options.tableId).show();
			if (this.options.autoUpload == false){
				if (this.options.jQueryButtons){
					$('#'+this.options.startId).button().show();
					$('#'+this.options.clearId).button().show();
				} else {
					$('#'+this.options.startId).show();
					$('#'+this.options.clearId).show();
				}				
			} else {
				if (this.options.jQueryButtons){
					$('#'+this.options.cancelId).button().show();
				} else {
					$('#'+this.options.cancelId).show();
				}			
			}				
			this.disableSave();
		}	
	},
//------------------------------------------------------
	disableSave : function() {
		if (this.options.ntform){
			$(this.options.ntform).ntform("disableSave","upload");
		}	
	},	
//------------------------------------------------------
	enableSave : function() {
		if (this.options.ntform){
			$(this.options.ntform).ntform("enableSave","upload");
		}	
	},	
//------------------------------------------------------
	progressall : function(e,data) {
	  if (this.options.multiple){
		  $('#'+this.options.progressId).progressbar('value',parseInt(data.loaded / data.total * 100, 10));	  
		}  
	},	

//------------------------------------------------------
	progress : function(e,data) {	
	  $('#P'+data.context).progressbar('value',parseInt(data.loaded / data.total * 100, 10));
	}
	
	
//------------------------------------------------------
});

$.extend( $.ui.ntupload, {
	version: "@VERSION"
});

})( jQuery );
