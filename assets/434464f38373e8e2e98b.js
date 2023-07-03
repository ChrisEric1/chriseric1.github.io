"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[4509],{81580:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=k;var n,o,a=g(r(67294)),i=r(36211),l=r(30887),u=S(r(41908)),d=S(r(92974)),c=S(r(31055)),f=S(r(86750)),p=S(r(69245)),s=r(81069),v=S(r(6118)),_=S(r(89446)),y=g(r(84455)),A=S(r(96835)),E=S(r(74257)),m=S(r(79950)),b=r(19290),O=r(34596),T=S(r(48018));function S(e){return e&&e.__esModule?e:{default:e}}function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null
;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}function D(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}if(t&&a)for(var d in a)void 0===t[d]&&(t[d]=a[d]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function N(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(){I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
;for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return I.apply(this,arguments)}function P(e,t,r,n,o,a,i){try{var l=e[a](i),u=l.value}catch(e){r(e);return}l.done?t(u):Promise.resolve(u).then(n,o)}function M(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){P(a,n,o,i,l,"next",e)}function l(e){P(a,n,o,i,l,"throw",e)}i(void 0)}))}}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done);i=!0){a.push(n.value);if(t&&a.length===t)break}}catch(e){l=!0;o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}()}function w(e,t){if(e){if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(e){e[e.UNSUBMITTED=0]="UNSUBMITTED";e[e.CHANGED=1]="CHANGED";e[e.SUBMITTING=2]="SUBMITTING"}(o||(o={}));var L={activity_preview_video_asset_id:"",supported_platforms:[s.ApplicationEmbeddedActivitySupportedPlatform.WEB],default_orientation_lock_state:s.ApplicationEmbeddedActivityOrientationLockState.UNLOCKED,tablet_default_orientation_lock_state:s.ApplicationEmbeddedActivityOrientationLockState.UNLOCKED,requires_age_gate:!1};function k(e){var t,r=e.applicationId,n=(0,i.useStateFromStores)([v.default],(function(){return v.default.getApplicationEmbeddedActivityConfig(r)
})),S=R(a.useState(L),2),h=S[0],g=S[1],P=R(a.useState(!1),2),w=P[0],C=P[1],k=R(a.useState(o.UNSUBMITTED),2),j=k[0],G=k[1],U=R(a.useState(null),2),B=U[0],W=U[1];a.useEffect((function(){null!==n&&g(n)}),[n]);function x(){return(x=M(regeneratorRuntime.mark((function e(){var t,a,i,u,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G(o.SUBMITTING);t={};(a=""!==h.activity_preview_video_asset_id?h.activity_preview_video_asset_id:null)!==(null==n?void 0:n.activity_preview_video_asset_id)&&(t.activity_preview_video_asset_id=a);(i=h.default_orientation_lock_state)!==(null==n?void 0:n.default_orientation_lock_state)&&(t.default_orientation_lock_state=i);(u=h.tablet_default_orientation_lock_state)!==(null==n?void 0:n.tablet_default_orientation_lock_state)&&(t.tablet_default_orientation_lock_state=u);(d=h.requires_age_gate)!==(null==n?void 0:n.requires_age_gate)&&(t.requires_age_gate=d);w&&(t.supported_platforms=h.supported_platforms);e.prev=11;e.next=14;return(0,
l.updateApplicationEmbeddedActivityConfig)(r,t);case 14:e.next=20;break;case 16:e.prev=16;e.t0=e.catch(11);W((0,b.getMessageFromAPIError)(e.t0,O.Messages.Errors.ERROR_SUBMITTING_FORM.format()));return e.abrupt("return");case 20:W(null);G(o.UNSUBMITTED);C(!1);case 23:case"end":return e.stop()}}),e,null,[[11,16]])})))).apply(this,arguments)}function F(e,t){if(!t||h.supported_platforms.includes(e)){if(!t&&h.supported_platforms.includes(e)){var r=I({},h,{supported_platforms:h.supported_platforms.filter((function(t){return t!==e}))});g(r);C(!0);G(o.CHANGED)}}else{var n=I({},h,{supported_platforms:[].concat(N(h.supported_platforms),[e])});g(n);C(!0);G(o.CHANGED)}}var H=[{label:O.Messages.EmbeddedApplication.ORIENTATION_LOCK_STATE_UNLOCKED,value:s.ApplicationEmbeddedActivityOrientationLockState.UNLOCKED},{label:O.Messages.EmbeddedApplication.ORIENTATION_LOCK_STATE_PORTRAIT,value:s.ApplicationEmbeddedActivityOrientationLockState.PORTRAIT},{
label:O.Messages.EmbeddedApplication.ORIENTATION_LOCK_STATE_LANDSCAPE,value:s.ApplicationEmbeddedActivityOrientationLockState.LANDSCAPE}];return D(f.default,{},void 0,D(u.default,{onSubmit:function(){return x.apply(this,arguments)}},void 0,null!=B?D(c.default,{type:c.default.Types.ERROR},void 0,B):null,D(y.default,{},void 0,D(y.GridSection,{},void 0,D(y.GridChild,{columnSpread:12},void 0,D(d.default,{},void 0,O.Messages.EmbeddedApplication.AGE_GATE),D(d.default,{},void 0,"(",O.Messages.EmbeddedApplication.AGE_GATE_NOTES,")"),D(A.default,{},void 0,D(_.default,{className:T.default.checkbox,value:h.requires_age_gate,onChange:function(e){var t=I({},h,{requires_age_gate:e});g(t);G(o.CHANGED)},type:_.default.Types.INVERTED},void 0,O.Messages.EmbeddedApplication.AGE_GATED))),D(y.GridChild,{columnSpread:12},void 0,D(d.default,{},void 0,O.Messages.EmbeddedApplication.PREVIEW_VIDEO_ASSET_ID),D(m.default,{name:"activity_preview_video_asset_id",type:"number",
value:null!==(t=h.activity_preview_video_asset_id)&&void 0!==t?t:"",onChange:function(e){var t=I({},h,{activity_preview_video_asset_id:e});g(t);G(o.CHANGED)}})),D(y.GridChild,{columnSpread:12},void 0,D(d.default,{},void 0,O.Messages.EmbeddedApplication.PHONE_DEFAULT_ORIENTATION_LOCK_STATE),D(d.default,{},void 0,"(",O.Messages.EmbeddedApplication.PHONE_DEFAULT_ORIENTATION_LOCK_STATE_NOTES,")"),D(E.default,{value:h.default_orientation_lock_state,clearable:!1,searchable:!1,options:H,onChange:function(e){var t=e.value,r=I({},h,{default_orientation_lock_state:t});g(r);G(o.CHANGED)}})),D(y.GridChild,{columnSpread:12},void 0,D(d.default,{},void 0,O.Messages.EmbeddedApplication.TABLET_DEFAULT_ORIENTATION_LOCK_STATE),D(d.default,{},void 0,"(",O.Messages.EmbeddedApplication.TABLET_DEFAULT_ORIENTATION_LOCK_STATE_NOTES,")"),D(E.default,{value:h.tablet_default_orientation_lock_state,clearable:!1,searchable:!1,options:H,onChange:function(e){var t=e.value,r=I({},h,{
tablet_default_orientation_lock_state:t});g(r);G(o.CHANGED)}})),D(y.GridChild,{columnSpread:12},void 0,D(d.default,{},void 0,O.Messages.EmbeddedApplication.SUPPORTED_PLATFORMS),D(A.default,{},void 0,D(_.default,{className:T.default.checkbox,onChange:function(e){return F(s.ApplicationEmbeddedActivitySupportedPlatform.WEB,e)},type:_.default.Types.INVERTED,value:h.supported_platforms.includes(s.ApplicationEmbeddedActivitySupportedPlatform.WEB)},void 0,O.Messages.EmbeddedApplication.SUPPORTED_PLATFORM_WEB),D(_.default,{className:T.default.checkbox,type:_.default.Types.INVERTED,onChange:function(e){return F(s.ApplicationEmbeddedActivitySupportedPlatform.IOS,e)},value:h.supported_platforms.includes(s.ApplicationEmbeddedActivitySupportedPlatform.IOS)},void 0,O.Messages.EmbeddedApplication.SUPPORTED_PLATFORM_IOS),D(_.default,{className:T.default.checkbox,type:_.default.Types.INVERTED,onChange:function(e){return F(s.ApplicationEmbeddedActivitySupportedPlatform.ANDROID,e)},
value:h.supported_platforms.includes(s.ApplicationEmbeddedActivitySupportedPlatform.ANDROID)},void 0,O.Messages.EmbeddedApplication.SUPPORTED_PLATFORM_ANDROID))))),D(p.default,{isVisible:j===o.CHANGED,onReset:function(){W(null);G(o.UNSUBMITTED);C(!1);null!=n&&g(n)},submitting:j===o.SUBMITTING})))}k.displayName="EmbeddedApplicationProxyConfigForm"},23007:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.match,r=(_=a.useState(o.LOADING),A=2,function(e){if(Array.isArray(e))return e}(_)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done);i=!0){a.push(n.value);if(t&&a.length===t)break}}catch(e){l=!0;o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(_,A)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1)
;"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(_,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],d=r[1],v=t.params.id;var _,A;a.useEffect((function(){function e(){return(e=E(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0;e.next=3;return(0,i.getApplicationEmbeddedActivityConfig)(v);case 3:d(o.LOADED);e.next=9;break;case 6:e.prev=6;e.t0=e.catch(0);d(o.ERROR);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]);return a.createElement(a.Fragment,null,y(c.default,{},void 0,y(u.default,{},void 0,s.Messages.EmbeddedApplication.EMBEDDED_APPLICATION_SETTINGS_HEADING),y(f.default,{
isFlush:!0},void 0,s.Messages.EmbeddedApplication.EMBEDDED_APPLICATION_SETTINGS_SUBHEADING),n===o.ERROR&&y(l.default,{type:l.default.Types.ERROR},void 0,s.Messages.Errors.ERROR_LOADING_EMBEDDED_ACTIVITY_CONFIG)),n===o.LOADING?b:y(p.default,{applicationId:t.params.id}))};var n,o,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=_(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}(r(67294)),i=r(30887),l=v(r(31055)),u=v(r(81061)),d=v(r(91464)),c=v(r(86750)),f=v(r(58350)),p=v(r(81580)),s=r(34596);function v(e){return e&&e.__esModule?e:{default:e}}function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap
;return(_=function(e){return e?r:t})(e)}function y(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}if(t&&a)for(var d in a)void 0===t[d]&&(t[d]=a[d]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function A(e,t,r,n,o,a,i){try{var l=e[a](i),u=l.value}catch(e){r(e);return}l.done?t(u):Promise.resolve(u).then(n,o)}function E(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){A(a,n,o,i,l,"next",e)}function l(e){A(a,n,o,i,l,"throw",e)}i(void 0)}))}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(e){e[e.LOADING=0]="LOADING";e[e.LOADED=1]="LOADED";e[e.ERROR=2]="ERROR"}(o||(o={}))
;var b=y(d.default,{})},31055:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n=c(r(67294)),o=u(r(94184)),a=c(r(34704)),i=u(r(49839)),l=["className"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}function f(){f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}
;return f.apply(this,arguments)}function p(e,t){p=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return p(e,t)}var s=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;p(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props,t=e.className,r=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++){r=a[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,l);return n.createElement(a.default,f({},r,{className:(0,o.default)(i.default.formStatusAlert,t)}))};return t}(n.Component);t.default=s;s.displayName="FormStatusAlert";s.Types=a.AlertTypes},81069:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.ApplicationEmbeddedActivitySupportedPlatform=t.ApplicationEmbeddedActivityOrientationLockState=void 0;var r,n;t.ApplicationEmbeddedActivitySupportedPlatform=r;!function(e){e.WEB="web";e.IOS="ios";e.ANDROID="android"
}(r||(t.ApplicationEmbeddedActivitySupportedPlatform=r={}));t.ApplicationEmbeddedActivityOrientationLockState=n;!function(e){e[e.UNLOCKED=1]="UNLOCKED";e[e.PORTRAIT=2]="PORTRAIT";e[e.LANDSCAPE=3]="LANDSCAPE"}(n||(t.ApplicationEmbeddedActivityOrientationLockState=n={}))},96835:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e;r&&r.set(e,n)}(r(67294));var n,o=l(r(94184)),a=l(r(13192)),i=l(r(53019));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap
;return(u=function(e){return e?r:t})(e)}function d(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}if(t&&a)for(var d in a)void 0===t[d]&&(t[d]=a[d]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var c=(0,a.default)({SMALL:null,MEDIUM:null}),f=(0,a.default)({NONE:null,PRIMARY:null,RED:null}),p=(0,a.default)({DARK:null,LIGHT:null}),s=function(e){var t,r=e.borderColor,n=void 0===r?f.PRIMARY:r,a=e.children,l=e.className,u=e.color,s=void 0===u?p.LIGHT:u,v=e.size,_=void 0===v?c.MEDIUM:v;return d("div",{className:(0,o.default)(i.default.wrapper,l,(t={},t[i.default.small]=_===c.SMALL,t[i.default.medium]=_===c.MEDIUM,t[i.default.borderNone]=n===f.NONE,t[i.default.borderPrimary]=n===f.PRIMARY,t[i.default.borderRed]=n===f.RED,
t[i.default.colorDark]=s===p.DARK,t[i.default.colorLight]=s===p.LIGHT,t))},void 0,a)};s.displayName="Panel";s.BorderColor=f;s.Color=p;s.Size=c;var v=s;t.default=v}}]);
//# sourceMappingURL=434464f38373e8e2e98b.js.map