(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{6578:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=m();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=o?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(t,n,a):t[n]=e[n]}t.default=e,r&&r.set(e,t);return t}(t(0)),a=p(t(5)),s=t(142),u=p(t(71)),l=t(1080),i=p(t(1519)),d=t(1),f=p(t(2)),c=p(t(9637));function p(e){return e&&e.__esModule?e:{default:e}}function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function w(e,r,t,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,s=arguments.length-3;if(r||0===s||(r={children:void 0}),1===s)r.children=n;else if(s>1){for(var u=new Array(s),l=0;l<s;l++)u[l]=arguments[l+3];r.children=u}if(r&&a)for(var i in a)void 0===r[i]&&(r[i]=a[i]);else r||(r=a||{});return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}function v(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r}var y=[{id:"discord",name:f.default.Messages.DESKTOP_APP,url:(0,l.getCurrentPlatformDownloadURL)()},{id:"chrome",name:f.default.Messages.BROWSER_CHROME,url:"https://www.google.com/chrome/browser/desktop/"},{id:"firefox",name:f.default.Messages.BROWSER_FIREFOX,url:"https://www.mozilla.org/en-US/firefox/new/?scene=2"}],b={discord:"browserDiscord",firefox:"browserFirefox",chrome:"browserChrome"},O=function(e){function r(){return e.apply(this,arguments)||this}return v(r,e),r.prototype.render=function(){var e,r=this.props.browser,t=r.id,o=r.name,n=r.url;return e=null!=n?w(u.default,{className:c.default.btn,href:n},void 0,f.default.Messages.DOWNLOAD):w(s.Link,{className:c.default.btn,to:d.Routes.APPS},void 0,f.default.Messages.DOWNLOAD),w("li",{className:c.default.browserItem},void 0,w("div",{className:(0,a.default)(c.default.browserItemText,c.default.browser,c.default[b[t]])}),w("div",{className:c.default.browserItemText},void 0,o),e)},r}(n.Component);O.displayName="SupportedBrowser";var h=function(e){function r(){return e.apply(this,arguments)||this}v(r,e);var t=r.prototype;return t.componentDidMount=function(){i.default.launch("discord://"+this.props.location.pathname,(function(e){console.log("discord://",e)}))},t.render=function(){var e=y.map((function(e){return w(O,{browser:e},e.id)}));return w("div",{className:c.default.unsupportedBrowser},void 0,w("div",{className:c.default.wrap},void 0,w("h1",{className:c.default.title},void 0,f.default.Messages.UNSUPPORTED_BROWSER_TITLE),w("p",{className:c.default.message},void 0,f.default.Messages.UNSUPPORTED_BROWSER_BODY),w("ul",{className:c.default.browserList},void 0,e)))},r}(n.Component);h.displayName="UnsupportedBrowser";var g=h;r.default=g}}]);
//# sourceMappingURL=9f13fc30bdbfdea22659.js.map