!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){n(3),n(4),n(5),n(1),n(6),n(2),n(7);let r=null;const o=[],i=[],u=new Native(function(e){for(r=e;o.length>0;){let e=o.shift();Native.defineProperties(native,e.apply(native,[r]))}for(;i.length>0;)i.shift().apply(window)});const c={core:u,ready:function(e){return u.isReady?(window.setTimeout(e),this):(i.push(e),this)},extend:function(e){return"function"!=typeof e?this:(u.isReady?Native.defineProperties(this,e.apply(this,[r])):o.push(e),this)}};Native.defineProperty(window,"native",{get:function(){return c}}),e.exports=c},function(e,t){const n=Object.freeze({default:0,warning:1,error:2});Object.defineProperty(window,"NativeLogStyle",{get:function(){return n}}),e.exports=n},function(e,t){const n=Object.freeze({url:"url",json:"json",object:"object",javascript:"javascript"});Object.defineProperty(window,"NativeMode",{get:function(){return n}}),Object.defineProperty(window,"NativeType",{get:function(){return console.warn("NativeType was deprecated, please use NativeMode instead."),n}}),e.exports=n},function(e,t){const n=Object.freeze({image:"image"});Object.defineProperty(window,"NativeCachedResourceType",{get:function(){return n}}),e.exports=n},function(e,t){const n=Object.freeze({currentTheme:"com.mlibai.native.cookie.currentTheme",currentUser:"com.mlibai.native.cookie.currentUser"});Object.defineProperty(window,"NativeCookieKey",{get:function(){return n}}),e.exports=n},function(e,t,n){const r=n(1),o=n(2);c(u,"version",{get:function(){return"2.0.1"}}),c(window,"Native",{get:function(){return u}}),c(u,"defineProperty",{get:function(){return c}}),c(u,"log",{get:function(){return a}}),c(u,"defineProperties",{get:function(){return s}}),c(u,"parseURLQueryValue",{get:function(){return f}}),c(u,"parseURLQuery",{get:function(){return l}});const i=new function(){let e=null;function t(t,n){if(void 0===n)return function(){if(e)return;e={},window.setTimeout(function(){e=null});let t=document.cookie;if(!t)return;let n=t.split("; ");for(;n.length>0;){let t=n.pop().split("=");if(!Array.isArray(t)||0===t.length)continue;let r=decodeURIComponent(t[0]);t.length>1?e[r]=decodeURIComponent(t[1]):e[r]=null}}(),e.hasOwnProperty(t)?e[t]:void 0;let r=new Date;return n?(r.setTime(r.getTime()+2592e6),"string"!=typeof n&&(n=JSON.stringify(n)),document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(n)+"; expires="+r.toUTCString()):(r.setTime(r.getTime()-1),document.cookie=encodeURIComponent(t)+"; expires="+r.toUTCString()),e&&(e[t]=n),this}function n(){return e=null,this}s(this,{value:{get:function(){return t}},synchronize:{get:function(){return n}}})};function u(e){let t=1e7,n={},i=o.url,u=null,c="native";function a(e,o){switch(typeof e){case"function":let i="NT"+t++;return n[i]=e,i;case"string":if(!n.hasOwnProperty(e))return;let u=n[e];return(o||void 0===o)&&delete n[e],u;default:return Native.log("Parameters error: Only function or string is allowed for Native.callback()'s first argument.",r.error)}}function f(e){switch(i){case o.url:return function(e){let t=[];for(let e=1;e<arguments.length;e+=1){let n=arguments[e];"function"==typeof n?t.push(a(n)):t.push(n)}let n=c+"://"+e+"?parameters="+Native.parseURLQueryValue(t),r=document.createElement("iframe");r.style.display="none",r.setAttribute("src",n),document.body.appendChild(r),window.setTimeout(function(){document.body.removeChild(r)},2e3),"function"==typeof u&&u(n)}.apply(this,arguments);case o.json:return function(e){let t=[e];for(let e=1;e<arguments.length;e+=1){let n=arguments[e];switch(typeof n){case"number":case"string":case"boolean":t.push(n);break;case"function":t.push(a(n));break;default:t.push(JSON.stringify(n))}}l.apply(this,t)}.apply(this,arguments);case o.object:return l.apply(this,arguments);case o.javascript:return function(e){let t=[];for(let e=1;e<arguments.length;e++)"function"==typeof arguments[e]?t.push(a(arguments[e])):t.push(arguments[e]);window.setTimeout(function(){u.apply(window,[e,t])})}.apply(this,arguments);default:return Native.log("Not supported interaction mode `"+i+"`, see more in NativeMode enum.",r.error)}}function l(e){let t=[];for(let e=1;e<arguments.length;e+=1)t.push(arguments[e]);window.setTimeout(function(){let n=e.split("/"),r=u;for(let e=0;e<n.length;e++)r=r[n[e]];r.apply(window,t)})}let d=!1,p=null;function g(t,n){if(u=t,i=n,d)return this;function r(){p=f(window.NativeMethod.ready,function(t){d=!0,p=null,e(t)})}if(p&&a(p,!0),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)window.setTimeout(function(){r()});else{function o(){document.removeEventListener("DOMContentLoaded",o),window.removeEventListener("load",o),r()}document.addEventListener("DOMContentLoaded",o),window.addEventListener("load",o)}return this}s(this,{callback:{get:function(){return a}},perform:{get:function(){return f}},scheme:{get:function(){return c},set:function(e){c=e}},isReady:{get:function(){return d}},register:{get:function(){return g}},delegate:{get:function(){return u},set:function(e){u=e}},mode:{get:function(){return i},set:function(e){i=e}}})}function c(e,t,n){return void 0===e?a("Define property error: Can not define properties for an undefined value.",2):"string"!=typeof t||0===t.length?a("Define property error: The name for "+e.constructor.name+"'s property must be a nonempty string.",2):e.hasOwnProperty(t)?a("Define property warning: The property "+t+" to be defined for "+e.constructor.name+" is already exist.",1):void Object.defineProperty(e,t,n)}function a(e,t){"number"!=typeof t||t===r.default?console.log("%c[Native]%c %s","color: #0b78d7; font-weight: bold;","color: #333333",e):t===r.warning?console.log("%c[Native]%c %s","color: #0b78d7; font-weight: bold;","color: #fe7e3c",e):t===r.error&&console.log("%c[Native]%c %s","color: #0b78d7; font-weight: bold;","color: #d8463c",e)}function s(e,t){if(void 0===e)return a("Define properties error: Can not define properties for an undefined value.",2);if("object"!=typeof t)return a("Define properties error: The property list for "+e.constructor.name+" at second parameter must be an Object.",2);for(let n in t)t.hasOwnProperty(n)&&c(e,n,t[n])}function f(e){if(!e)return"";switch(typeof e){case"string":return encodeURIComponent(e);case"undefined":return"";default:return encodeURIComponent(JSON.stringify(e))}}function l(e){if(!e)return"";if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++)t.push(f(e[n]));return t.join("&")}switch(typeof e){case"string":return encodeURIComponent(e);case"object":let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length>0?t+="&"+encodeURIComponent(n):t=encodeURIComponent(n),e[n]&&(t+="="+f(e[n])));return t;case"undefined":return"";default:return encodeURIComponent(JSON.stringify(e))}}c(u,"cookie",{get:function(){return i}}),e.exports=u},function(e,t){const n=Object.freeze({ready:"ready",alert:"alert",dataService:Object.freeze({cachedResourceForURL:"dataService/cachedResourceForURL",numberOfRowsInList:"dataService/numberOfRowsInList",dataForRowAtIndex:"dataService/dataForRowAtIndex"}),eventService:Object.freeze({track:"eventService/track",documentElementWasClicked:"eventService/documentElementWasClicked",documentElementDidSelect:"eventService/documentElementDidSelect"}),login:"login",navigation:Object.freeze({push:"navigation/push",pop:"navigation/pop",popTo:"navigation/popTo",bar:Object.freeze({setHidden:"navigation/bar/setHidden",setTitle:"navigation/bar/setTitle",setTitleColor:"navigation/bar/setTitleColor",setBackgroundColor:"navigation/bar/setBackgroundColor"})}),networking:Object.freeze({http:"networking/http"}),open:"open",present:"present",dismiss:"dismiss",setCurrentTheme:"setCurrentTheme"});Object.defineProperty(window,"NativeMethod",{get:function(){return n}}),e.exports=n},function(e,t){const n=Object.freeze({WiFi:"WiFi"});Object.defineProperty(window,"NativeNetworkStatus",{get:function(){return n}}),e.exports=n},function(e,t,n){n(3),n(4),n(5),n(1),n(6),n(2),n(7),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),e.exports=n(0)},function(e,t,n){n(0).extend(function(){function e(e,t){return e&&"object"==typeof e?this.core.perform(NativeMethod.alert,e,t):(Native.log("Method `alert` first parameter must be an message object.",NativeLogStyle.error),null)}return{alert:{get:function(){return e}}}})},function(e,t,n){n(0).extend(function(){let e=new function(e){function t(t,n,r){return"string"!=typeof t||"string"!=typeof n?(Native.log("Method `numberOfRowsInList` first/second parameter must be a string value.",NativeLogStyle.error),null):e.core.perform(NativeMethod.dataService.numberOfRowsInList,t,n,r)}function n(t,n,r,o){return"string"!=typeof t||"string"!=typeof n||"number"!=typeof r?(Native.log("Method `dataForRowAtIndex` first/second/third parameter must be a string/string/number value.",NativeLogStyle.error),null):e.core.perform(NativeMethod.dataService.dataForRowAtIndex,t,n,r,o)}function r(t,n,r){if("string"!=typeof t)return Native.log("Method `cachedResourceForURL` url parameter must be a string value.",NativeLogStyle.error),null;switch(typeof n){case"function":r=n,n=NativeCachedResourceType.image;break;case"string":break;default:n=NativeCachedResourceType.image}return"function"!=typeof r?(Native.log("Method `cachedResourceForURL` must have a callback handler.",NativeLogStyle.error),null):e.core.perform(NativeMethod.dataService.cachedResourceForURL,t,n,r)}Native.defineProperties(this,{numberOfRowsInList:{get:function(){return t}},dataForRowAtIndex:{get:function(){return n}},cachedResourceForURL:{get:function(){return r}}})}(this);return{dataService:{get:function(){return e}}}})},function(e,t,n){n(0).extend(function(){let e=new function(e){function t(t,n,r,o){return"string"!=typeof t||"string"!=typeof n||void 0!==r?(Native.log("Method `documentElementDidSelect` first/second/third parameter must be a string/string/number value.",NativeLogStyle.error),null):e.core.perform(NativeMethod.eventService.documentElementDidSelect,t,n,r,o)}function n(t,n,r,o){return"string"!=typeof t||"string"!=typeof n?(Native.log("Method `elementWasClicked` first/second parameter must be a string value.",NativeLogStyle.error),null):("function"==typeof r&&(o=r,r=null),e.core.perform(NativeMethod.eventService.documentElementWasClicked,t,n,r,o))}function r(t,n){return"string"!=typeof t?(Native.log("Method `track` first parameter must be a string value.",NativeLogStyle.error),null):e.core.perform(NativeMethod.eventService.track,t,n)}Native.defineProperties(this,{documentElementDidSelect:{get:function(){return t}},documentElementWasClicked:{get:function(){return n}},track:{get:function(){return r}}})}(this);return{eventService:{get:function(){return e}}}})},function(e,t,n){n(0).extend(function(){function e(e){if(!e)return Native.log("Method `login` called without a callback is not allowed.",NativeLogStyle.error),this;let t=this;this.core.perform(NativeMethod.login,function(n){t.setCurrentUser(n),e()})}return{login:{get:function(){return e}}}})},function(e,t,n){n(0).extend(function(e){function t(e,t){let n=t.title,r=t.titleColor,o=t.backgroundColor,i=t.isHidden;function u(t,r){return"string"!=typeof t?(Native.log("The navigation.bar.title must be a string value.",NativeLogStyle.error),this):(n=t,r&&e.core.perform(NativeMethod.navigation.bar.setTitle,t),this)}function c(t,n){return"string"!=typeof t?(Native.log("The navigation.bar.titleColor must be a string value.",NativeLogStyle.error),this):(r=t,n&&e.core.perform(NativeMethod.navigation.bar.setTitleColor,t),this)}function a(t,n,r){return"boolean"!=typeof t?(Native.log("The navigation.bar.isHidden must be a boolean value.",NativeLogStyle.error),this):(i=t,r&&e.core.perform(NativeMethod.navigation.bar.setHidden,t,n),this)}function s(e){return a(!0,e,!0),this}function f(e){return a(!1,e,!0),this}function l(t,n){return"string"!=typeof t?(Native.log("The navigation.bar.backgroundColor must be a string value.",NativeLogStyle.error),this):(o=t,n?(e.core.perform(NativeMethod.navigation.bar.setBackgroundColor,t),this):this)}Native.defineProperties(this,{title:{get:function(){return n},set:function(e){u(e,!0)}},titleColor:{get:function(){return r},set:function(e){c(e,!0)}},backgroundColor:{get:function(){return o},set:function(e){l(e,!0)}},isHidden:{get:function(){return i},set:function(e){a(e,!1,!0)}},setTitle:{get:function(){return u}},setTitleColor:{get:function(){return c}},setBackgroundColor:{get:function(){return l}},setHidden:{get:function(){return a}},hide:{get:function(){return s}},show:{get:function(){return f}}})}let n=new function(e,n){let r=function(t,n){if("string"!=typeof t)return Native.log("Method `push` can not be called without a url parameter.",NativeLogStyle.error),null;if(!/^([a-z]+):\/\//i.test(t))if(/^(\/)/i.test(t))t=window.location.protocol+"//"+window.location.host+t;else{let e=window.location.href.split("/");e.pop(),t=e.join("/")+"/"+t}return"boolean"!=typeof n&&(n=!0),e.core.perform(NativeMethod.navigation.push,t,n)},o=function(t){return"boolean"!=typeof t&&(t=!0),e.core.perform(NativeMethod.navigation.pop,t)},i=function(t,n){if("number"==typeof t)return"boolean"!=typeof n&&(n=!0),e.core.perform(NativeMethod.navigation.popTo,t,n);Native.log("Method `popTo` can not be called without a index parameter.",NativeLogStyle.error)},u=new t(e,n.bar);Native.defineProperties(this,{push:{get:function(){return r}},pop:{get:function(){return o}},popTo:{get:function(){return i}},bar:{get:function(){return u}}})}(this,e.navigation);return{navigation:{get:function(){return n}}}})},function(e,t,n){n(0).extend(function(e){let t=new function(e,t){let n=t.status,r=[];function o(t,n){return t&&"object"==typeof t?e.core.perform(NativeMethod.networking.http,t,n):(Native.log("Method `http` first parameter must be an request object.",NativeLogStyle.error),null)}function i(e){if("function"==typeof e)return r.push(e),this;for(let e=0;e<r.length;e++)r[e].call(window)}function u(e){n=e,i()}Native.defineProperties(this,{isViaWiFi:{get:function(){return n===NativeNetworkStatus.WiFi}},status:{get:function(){return n}},isReachable:{get:function(){return!!n}},statusChange:{get:function(){return i}},http:{get:function(){return o}},setStatus:{get:function(){return u}}})}(this,e.networking);return{networking:{get:function(){return t}},http:{get:function(){return t.http}}}})},function(e,t,n){n(0).extend(function(){function e(e){return"string"!=typeof e?(Native.log("Method `open`'s page parameter must be a string value.",NativeLogStyle.error),null):this.core.perform(NativeMethod.open,e)}return{open:{get:function(){return e}}}})},function(e,t,n){n(0).extend(function(){function e(e,t,n){if("string"!=typeof e)return Native.log("Method `present` first parameter must be a string value.",NativeLogStyle.error),null;let r=t,o=n;return"function"==typeof t&&(r=!0,o=t),"boolean"!=typeof r&&(r=!0),this.core.perform(NativeMethod.present,e,r,o)}function t(e,t){let n=e,r=t;return"function"==typeof e&&(n=!0,r=e),"boolean"!=typeof n&&(n=!0),this.core.perform(NativeMethod.dismiss,n,r)}return{present:{get:function(){return e}},dismiss:{get:function(){return t}}}})},function(e,t,n){n(0).extend(function(e){let t=e.currentTheme,n=[];function r(e,n,r){t=e,window.Native.cookie.value(NativeCookieKey.currentTheme,e),r||void 0===r?this.core.perform(NativeMethod.setCurrentTheme,e,n):o()}function o(e,t){if("function"==typeof e)return n.push({callback:e,animated:t}),this;for(let e=0;e<n.length;e++){let t=n[e];t.callback.call(window,t.animated)}return this}return function(e){function t(){let t=window.Native.cookie.value(NativeCookieKey.currentTheme);t&&t!==e.currentTheme&&(e.setCurrentTheme(t,!1,!1),e.currentThemeChange())}window.addEventListener("pagehide",function e(){window.removeEventListener("pagehide",e),window.addEventListener("pageshow",t)})}(this),{currentTheme:{get:function(){return t},set:function(e){r(e,!1,!0)}},currentThemeChange:{get:function(){return o}},setCurrentTheme:{get:function(){return r}}}})},function(e,t,n){n(0).extend(function(e){const t=[];function n(e){if("function"==typeof e)return t.push(e),this;for(let e=0;e<t.length;e++)t[e].call(window);return this}function r(e,t,n,r){Native.defineProperties(this,{id:{get:function(){return e}},name:{get:function(){return t}},info:{get:function(){return n}},version:{get:function(){return r}}})}let o=new r(e.currentUser.id,e.currentUser.name,e.currentUser.info,e.currentUser.version);function i(e){o=new r(e.id,e.name,e.info,e.version),n()}return Native.cookie.value(NativeCookieKey.currentUser,JSON.stringify(o)),function(e){function t(){let t=JSON.parse(window.Native.cookie.value(NativeCookieKey.currentUser));t.id===e.currentUser.id&&t.version===e.currentUser.version||e.setCurrentUser(t)}window.addEventListener("pagehide",function e(){window.addEventListener("pageshow",t),window.removeEventListener("pagehide",e)})}(this),{setCurrentUser:{get:function(){return i}},currentUserChange:{get:function(){return n}},currentUser:{get:function(){return o}}}})}]);