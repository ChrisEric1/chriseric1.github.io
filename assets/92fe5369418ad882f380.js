"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[9491],{46445:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,a=g(r(67294)),o=S(r(36211)),u=g(r(18760)),s=S(r(41908)),l=S(r(31055)),i=S(r(81061)),c=S(r(86750)),d=S(r(86460)),f=S(r(58350)),p=S(r(69245)),h=S(r(62441)),v=S(r(89446)),y=g(r(84455)),m=g(r(34596));function S(e){return e&&e.__esModule?e:{default:e}}function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e
;r&&r.set(e,n);return n}function O(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=a;else if(u>1){for(var s=new Array(u),l=0;l<u;l++)s[l]=arguments[l+3];t.children=s}if(t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function C(e,t){C=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return C(e,t)}var _=m.default.getLanguages().filter((function(e){return e.enabled})),k=function(e){return null!=e&&null!=e.locales?e.locales:[]},j=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;C(e,t)}(t,e);function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];(t=e.call.apply(e,[this].concat(n))||this).state={hasError:!1,hasSubmitted:!1,hasUnsavedChanges:!1,isSubmitting:!1,
selectedLocales:k(t.props.sku)};t.handleCheckboxChange=function(e,r){if(null!=r){var n=r;t.setState((function(e){var t=e.selectedLocales;return t.includes(n)?{selectedLocales:t.filter((function(e){return e!==n}))}:{selectedLocales:t.concat(n)}}),t.handleFormChange)}};t.handleFormChange=function(){t.state.hasUnsavedChanges||t.setState({hasUnsavedChanges:!0})};t.handleFormReset=function(){t.setState({hasUnsavedChanges:!1,selectedLocales:k(t.props.sku)})};t.handleFormSubmit=function(){var e=t.props.match.params,r=e.id,n=e.skuId,a={locales:t.state.selectedLocales};u.updateSku(r,n,a).then((function(){t.setState({isSubmitting:!1,hasError:!1,hasSubmitted:!0,hasUnsavedChanges:!1})})).catch((function(){t.setState({isSubmitting:!1,hasError:!0,hasSubmitted:!1})}))};t.renderFormStatus=function(){var e=t.state,r=e.hasError,n=e.hasSubmitted;return r?O(l.default,{type:l.default.Types.ERROR},void 0,m.Messages.Alerts.ERROR):n?O(l.default,{type:l.default.Types.SUCCESS
},void 0,m.Messages.Alerts.SUCCESS_CHANGES_SAVED):null};t.renderLocalesCheckboxes=function(){var e=t.state.selectedLocales;return _.map((function(r){return O(y.GridChild,{columnSpread:3,columnSpreadMedium:4,columnSpreadSmallMedium:6,columnSpreadSmall:6,columnSpreadExtraSmall:12},r.code,O(v.default,{onChange:t.handleCheckboxChange,value:e.includes(r.code),name:r.code,type:v.default.Types.INVERTED},void 0,r.englishName))}))};return t}t.prototype.render=function(){var e=this.state,t=e.hasUnsavedChanges,r=e.isSubmitting;return O(s.default,{onChange:this.handleFormChange,onSubmit:this.handleFormSubmit},void 0,O(c.default,{},void 0,O(i.default,{},void 0,m.Messages.Locales.HEADING),O(f.default,{isFlush:!0},void 0,m.Messages.Locales.SUBHEADING),this.renderFormStatus()),O(c.default,{isFlush:!0},void 0,O(d.default,{bottomMargin:d.default.BottomMarginSizes.LARGE
},void 0,m.Messages.Locales.AVAILABLE_LOCALES_HEADING),O(y.default,{},void 0,O(y.GridSection,{},void 0,this.renderLocalesCheckboxes()))),O(p.default,{isVisible:t,onReset:this.handleFormReset,submitting:r}))};return t}(a.Component);j.displayName="SkuLocales";var M=o.default.connectStores([h.default],(function(e){return{sku:h.default.getSku(e.match.params.skuId)}}))(j);t.default=M},31055:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n=c(r(67294)),a=l(r(94184)),o=c(r(34704)),u=l(r(49839)),s=["className"];function l(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function d(){d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return d.apply(this,arguments)}function f(e,t){f=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return f(e,t)}var p=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;f(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props,t=e.className,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++){r=o[n];t.indexOf(r)>=0||(a[r]=e[r])}return a}(e,s);return n.createElement(o.default,d({},r,{className:(0,a.default)(u.default.formStatusAlert,t)}))};return t
}(n.Component);t.default=p;p.displayName="FormStatusAlert";p.Types=o.AlertTypes}}]);
//# sourceMappingURL=92fe5369418ad882f380.js.map