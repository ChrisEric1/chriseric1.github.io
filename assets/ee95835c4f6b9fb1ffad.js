(this.webpackJsonp=this.webpackJsonp||[]).push([[14],{11318:function(e,t,a){e.exports=a.p+"5656f17248cf747f56433a1d60c8c1bf.svg"},436:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.AuthBoxFooter=U;t.default=t.IncompatibleBrowser=t.ActivityCount=t.AuthSpinner=t.SubText=t.Block=t.Input=t.ChannelIcon=t.GuildIcon=t.Avatar=t.Button=t.Image=t.SubTitle=t.Title=void 0;var n,r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=A(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e;a&&a.set(e,n);return n
}(a(0)),l=S(a(8)),o=a(6231),i=S(a(27)),u=S(a(53)),f=S(a(320)),s=S(a(182)),d=S(a(465)),c=S(a(546)),p=S(a(6305)),v=S(a(217)),m=S(a(45)),y=S(a(20)),h=a(430),N=S(a(90)),g=a(302),b=a(1),O=S(a(4)),_=S(a(6437)),T=["className"];function S(e){return e&&e.__esModule?e:{default:e}}function A(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(A=function(e){return e?a:t})(e)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function I(e,t,a,r){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,o=arguments.length-3;t||0===o||(t={children:void 0});if(1===o)t.children=r;else if(o>1){for(var i=new Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var f in l)void 0===t[f]&&(t[f]=l[f]);else t||(t=l||{});return{$$typeof:n,type:e,
key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}var R=v.default;null==R&&(R=function(){return null});var C=function(e){var t=e.className,a=e.id,n=e.children;return I(m.default,{size:y.default.Sizes.SIZE_24,color:y.default.Colors.HEADER_PRIMARY,className:(0,l.default)(_.default.title,t),id:a},void 0,n)};t.Title=C;C.displayName="Title";var w=function(e){var t=e.className,a=e.children;return I(y.default,{size:y.default.Sizes.SIZE_16,color:y.default.Colors.HEADER_SECONDARY,className:t},void 0,a)};t.SubTitle=w;w.displayName="SubTitle";var M=function(e){var t=e.className;return I("img",{alt:"",src:e.src,className:(0,l.default)(_.default.image,t)})};t.Image=M;M.displayName="Image";var P=function(e){var t,a=e.className,n=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++){a=l[n];t.indexOf(a)>=0||(r[a]=e[a])}return r}(e,T),o=n.look===i.default.Looks.LINK;return r.createElement(i.default,E({size:o?i.default.Sizes.MIN:i.default.Sizes.LARGE,fullWidth:!o,
className:(0,l.default)(a,(t={},t[_.default.button]=!o,t[_.default.linkButton]=o,t))},n))};t.Button=P;P.displayName="Button";P.Looks=i.default.Looks;P.Colors=i.default.Colors;P.Sizes=i.default.Sizes;var B=function(e){var t=e.className,a=e.src,n=e.size;return I(R,{src:a,size:n,className:(0,l.default)(_.default.inviteLargeIcon,t),"aria-hidden":!0})};t.Avatar=B;B.displayName="Avatar";B.Sizes=R.Sizes;var k=function(e){var t=e.guild,a=e.size,n=e.animate,r=void 0!==n&&n;return I(f.default,{active:!0,guild:t,size:a,animate:r})};t.GuildIcon=k;k.displayName="GuildIcon";k.Sizes=f.default.Sizes;var D=function(e){var t=e.className,a=e.channel,n=e.size;return I(R,{src:(0,o.getChannelIconURL)(a),size:n,className:(0,l.default)(_.default.inviteIcon,t),"aria-hidden":!0})};t.ChannelIcon=D;D.displayName="ChannelIcon";D.Sizes=R.Sizes;var j=function(e){
var t,a=e.label,n=e.error,r=e.placeholder,o=e.value,i=e.className,u=e.inputClassName,f=e.setRef,p=e.type,v=void 0===p?"text":p,m=e.onChange,y=e.autoComplete,h=e.autoFocus,N=e.maxLength,g=e.spellCheck,b=e.name,O=e.description,T=e.required;return I(d.default,{title:a,error:n,className:i,required:T},void 0,I(s.default,{name:b,type:v,value:o,inputRef:f,placeholder:r,className:_.default.input,inputClassName:(0,l.default)(u,(t={},t[_.default.inputError]=null!=n,t)),"aria-label":a,onChange:m,autoComplete:y,autoFocus:h,maxLength:N,spellCheck:g}),null!=O?I(c.default,{type:c.default.Types.DESCRIPTION,className:_.default.description},void 0,O):null)};t.Input=j;j.displayName="Input";var L=function(e){var t=e.className,a=e.children;return I("div",{className:(0,l.default)(_.default.block,t)},void 0,a)};t.Block=L;L.displayName="Block";var x=function(e){var t=e.className,a=e.children;return I(y.default,{size:y.default.Sizes.SIZE_12,className:(0,l.default)(_.default.subText,t)},void 0,a)};t.SubText=x
;x.displayName="SubText";var F=function(e){var t=e.className;return I(u.default,{direction:u.default.Direction.VERTICAL,align:u.default.Align.CENTER,className:t},void 0,I(p.default,{className:_.default.spinnerVideo}))};t.AuthSpinner=F;F.displayName="AuthSpinner";var W=function(e){var t,a=e.online,n=e.total,r=e.className,o=e.flat,i=e.textClassName;if(null==n)return null;null!=a&&a>0&&(t=I("div",{className:(0,l.default)(_.default.pill,_.default.pillOnline,o&&_.default.pillFlat)},void 0,I("i",{className:_.default.pillIconOnline}),I(y.default,{tag:"span",className:(0,l.default)(_.default.pillMessage,i)},void 0,O.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({membersOnline:a}))));return I(u.default,{justify:u.default.Justify.CENTER,className:r},void 0,t,I("div",{className:(0,l.default)(_.default.pill,o&&_.default.pillFlat)},void 0,I("i",{className:_.default.pillIconTotal}),I(y.default,{tag:"span",className:(0,l.default)(_.default.pillMessage,i)
},void 0,O.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({count:n}))))};t.ActivityCount=W;W.displayName="ActivityCount";var z=function(e){var t=e.className;return I(L,{className:t},void 0,I(P,{onClick:function(){return window.open((0,h.getCurrentPlatformDownloadURL)())}},void 0,O.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({platform:(0,h.getPlatformReadableName)()})),I(x,{className:_.default.downloadButtonSubtext},void 0,O.default.Messages.INCOMPATIBLE_BROWSER.format({supportedBrowserURL:N.default.getArticleURL(b.HelpdeskArticles.SUPPORTED_BROWSERS)})))};t.IncompatibleBrowser=z;z.displayName="IncompatibleBrowser";var H=function(e){var t=e.className,a=e.contentClassName,n=e.tag,r=void 0===n?"section":n,o=e.onSubmit,i=e.children,u=e.expanded,f=void 0!==u&&u,s=e.theme,d=void 0===s?b.ThemeTypes.DARK:s,c=e.mobileBanner,p=e.style;return null!=c?I(r,{onSubmit:o,className:(0,l.default)(_.default.authBoxWithMobileBanner,(0,g.getThemeClass)(d),t),style:p
},void 0,I("div",{className:_.default.mobileBannerLogo}),I("div",{className:_.default.mobileBanner},void 0,I("img",{src:c,alt:""})),i):I(r,{onSubmit:o,style:p,className:(0,l.default)(f?_.default.authBoxExpanded:_.default.authBox,(0,g.getThemeClass)(d),t)},void 0,I("div",{className:(0,l.default)(_.default.centeringWrapper,a)},void 0,i))};H.displayName="AuthBox";function U(e){var t,a,n,r;return I(u.default,{grow:0,shrink:0,direction:null!==(t=e.direction)&&void 0!==t?t:u.default.Direction.HORIZONTAL_REVERSE,justify:null!==(a=e.justify)&&void 0!==a?a:u.default.Justify.START,align:null!==(n=e.align)&&void 0!==n?n:u.default.Align.STRETCH,wrap:null!==(r=e.wrap)&&void 0!==r?r:u.default.Wrap.NO_WRAP,className:(0,l.default)(_.default.footer,e.className)},void 0,e.children)}U.displayName="AuthBoxFooter";var G=H;t.default=G},5861:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e
;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=l(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e;a&&a.set(e,n);return n}(a(0)),r=["externalRef"];function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(l=function(e){return e?a:t})(e)}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i=function(e){var t=e.externalRef,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++){a=l[n];t.indexOf(a)>=0||(r[a]=e[a])}return r}(e,r),l=n.useRef(null);n.useLayoutEffect((function(){
return function(){var e=l.current;null!=e&&function(e){e.removeAttribute("src");Array.from(e.children).forEach((function(e){if(e instanceof HTMLSourceElement){e.removeAttribute("src");e.removeAttribute("type")}e instanceof HTMLImageElement&&e.removeAttribute("src")}));try{e.load()}catch(e){}}(e)}}),[]);n.useLayoutEffect((function(){if("function"==typeof t){t(null);t(l.current)}else null!=t&&(t.current=l.current);return function(){"function"==typeof t?t(null):null!=t&&(t.current=null)}}),[t,l]);return n.createElement("video",o({ref:l},a))};i.displayName="Video";var u=n.forwardRef((function(e,t){return n.createElement(i,o({},e,{externalRef:t}))}));t.default=u},6231:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getChannelIconURL=function(e,t,a){void 0===t&&(t=32);switch(e.type){case o.ChannelTypes.DM:var i=e.recipients.map(n.default.getUser).filter(l.isNotNullish)[0];return null==i?null:i.getAvatarURL(void 0,t,a);case o.ChannelTypes.GROUP_DM:
return r.default.getChannelIconURL({id:e.id,icon:e.icon,applicationId:e.getApplicationId(),size:t})}};t.getChannelIconSource=function(e){switch(e.type){case o.ChannelTypes.DM:var t=e.recipients.map(n.default.getUser).filter(l.isNotNullish)[0];return null!=t?t.getAvatarSource(void 0):null;case o.ChannelTypes.GROUP_DM:return r.default.getChannelIconSource({id:e.id,icon:e.icon,applicationId:e.getApplicationId(),size:128})}};var n=i(a(13)),r=i(a(131)),l=a(52),o=a(1);function i(e){return e&&e.__esModule?e:{default:e}}},6305:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=g(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null
;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e;a&&a.set(e,n);return n}(a(0)),l=a(113),o=N(a(335)),i=a(1248),u=N(a(6313)),f=N(a(6314)),s=N(a(5861)),d=a(1),c=N(a(6315)),p=N(a(6316)),v=N(a(6317)),m=N(a(6318)),y=N(a(6319)),h=N(a(6320));function N(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(g=function(e){return e?a:t})(e)}function b(e,t,a,r){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,o=arguments.length-3;t||0===o||(t={children:void 0});if(1===o)t.children=r;else if(o>1){for(var i=new Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var f in l)void 0===t[f]&&(t[f]=l[f]);else t||(t=l||{});return{$$typeof:n,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}var O=b("source",{src:u.default,type:"video/mp4"},"hevc"),_=b("source",{src:f.default,type:"video/mp4"},"hevc"),T=function(){
var e,t,a,n,r,l=(0,i.getChromeVersion)(),o=c.default,u=m.default,f=p.default,s=y.default,N=[b("source",{src:o,type:"video/mp4"},"mp4"),b("img",{alt:"",src:f},"png")],g=[b("source",{src:u,type:"video/mp4"},"mp4"),b("img",{alt:"",src:s},"png")];if(a=window.navigator,n=a.userAgent.toLowerCase(),r=null!=(null===(t=a.mediaCapabilities)||void 0===t?void 0:t.decodingInfo),-1!==n.indexOf("safari")&&-1===n.indexOf("chrome")&&-1!==n.indexOf("version/")&&r){N.unshift(O);g.unshift(_)}if(l>52||-1===l){var T=v.default,S=h.default;N.unshift(b("source",{src:T,type:"video/webm"},"webm"));g.unshift(b("source",{src:S,type:"video/webm"},"webm"))}return(e={})[d.ThemeTypes.DARK]=N,e[d.ThemeTypes.LIGHT]=g,e}(),S=function(e){var t=e.loop,a=void 0===t||t,n=e.autoPlay,i=void 0===n||n,u=e.setRef,f=e.className,c=e.onReady,p=r.useContext(o.default),v=r.useContext(l.AccessibilityPreferencesContext).reducedMotion;return r.createElement(s.default,{key:p,ref:u,onLoadedData:c,className:f,loop:!v.enabled&&a,
autoPlay:!v.enabled&&i,playsInline:!0},T[p]||T[d.ThemeTypes.DARK])};S.displayName="AppSpinner";var A=S;t.default=A},6313:function(e,t,a){e.exports=a.p+"2d889bf9114df188325d15f9e517c325.mov"},6314:function(e,t,a){e.exports=a.p+"d44a33e33f751afe9a0e5e42e2156d8f.mov"},6315:function(e,t,a){e.exports=a.p+"6d5b64b094944af6d52d895c8c2b8a59.mp4"},6316:function(e,t,a){e.exports=a.p+"dff87c953f43b561d71fbcfe8a93a79a.png"},6317:function(e,t,a){e.exports=a.p+"3b0d96ed8113994f3d139088726cfecd.webm"},6318:function(e,t,a){e.exports=a.p+"90c2f45413660019fa25f4f9f40ecb5d.mp4"},6319:function(e,t,a){e.exports=a.p+"61c5375ee8d8dbf35c109b06044394d8.png"},6320:function(e,t,a){e.exports=a.p+"1eae6aab9a6b4e7da646db415479560b.webm"},6878:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,r=g(a(0)),l=a(324),o=h(a(3)),i=h(a(16)),u=h(a(844)),f=a(46),s=h(a(14)),d=h(a(53)),c=g(a(436)),p=a(1),v=h(a(4)),m=h(a(9060)),y=h(a(418));function h(e){return e&&e.__esModule?e:{
default:e}}function N(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(N=function(e){return e?a:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=N(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e;a&&a.set(e,n);return n}function b(e,t,a,r){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,o=arguments.length-3;t||0===o||(t={children:void 0});if(1===o)t.children=r;else if(o>1){for(var i=new Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&l)for(var f in l)void 0===t[f]&&(t[f]=l[f]);else t||(t=l||{});return{$$typeof:n,type:e,key:void 0===a?null:""+a,ref:null,props:t,
_owner:null}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e})(e,t)}o.default.initialize();var _="handoff",T="done",S="failed";function A(){try{window.close()}catch(e){}}var E=b(c.AuthSpinner,{}),I=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;O(e,t)}(t,e);function t(t){var a;(a=e.call(this,t)||this).done=function(){A();a.setState({stage:T})};a.failed=function(){a.setState({stage:S});A()};a.handleOpenApp=function(){(0,f.transitionTo)(p.Routes.ME)};var n=t.location.search,r=null!=n&&""!==n?(0,l.parse)(n):{};a.state={key:r.key||"",stage:"true"===r.done?T:_};return a}var n=t.prototype;n.componentDidMount=function(){var e=this,t=this.state,a=t.stage,n=t.key;a===T?A():s.default.isAuthenticated()?i.default.post({url:p.Endpoints.HANDOFF,body:{key:n},oldFormErrors:!0}).then((function(t){return e.handoff(t.body.handoff_token)}),(function(){return e.handoff()})):this.handoff()};n.handoff=function(e){
u.default.requestRedirect(p.RPCCommands.BROWSER_HANDOFF,{handoffToken:e,fingerprint:s.default.getFingerprint()}).then(this.done,this.failed)};n.renderDone=function(){return b(c.default,{},void 0,b(c.Image,{src:a(11318),className:y.default.marginBottom20}),b(c.Title,{className:y.default.marginBottom8},void 0,v.default.Messages.BROWSER_HANDOFF_DONE_TITLE),b(c.SubTitle,{className:y.default.marginBottom40},void 0,v.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE),b(c.Button,{onClick:this.handleOpenApp},void 0,v.default.Messages.CONTINUE_TO_WEBAPP))};n.renderFailed=function(){return b(c.default,{},void 0,b(c.Image,{src:a(11318),className:y.default.marginBottom20}),b(c.Title,{className:y.default.marginBottom8},void 0,v.default.Messages.BROWSER_HANDOFF_FAILED_TITLE),b(c.SubTitle,{className:y.default.marginBottom40},void 0,v.default.Messages.BROWSER_HANDOFF_DONE_SAFE_TO_CLOSE),b(c.Button,{onClick:this.handleOpenApp},void 0,v.default.Messages.CONTINUE_TO_WEBAPP))}
;n.renderHandoff=function(){return b(c.default,{},void 0,E,b(c.Title,{className:y.default.marginBottom8},void 0,v.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_TITLE),b(c.SubTitle,{},void 0,v.default.Messages.BROWSER_HANDOFF_AUTHENTICATING_DESCRIPTION))};n.render=function(){var e;switch(this.state.stage){case T:e=this.renderDone();break;case S:e=this.renderFailed();break;case _:default:e=this.renderHandoff()}return b(d.default,{justify:d.default.Justify.CENTER,align:d.default.Align.CENTER,className:m.default.wrapper},void 0,e)};return t}(r.PureComponent);t.default=I;I.displayName="BrowserHandoff"}}]);
//# sourceMappingURL=ee95835c4f6b9fb1ffad.js.map