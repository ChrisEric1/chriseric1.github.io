"use strict";(this.webpackChunkdiscord_developers=this.webpackChunkdiscord_developers||[]).push([[1400],{34870:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var a,s=v(r(67294)),n=O(r(36211)),u=v(r(18760)),o=O(r(41908)),i=O(r(31055)),l=O(r(81061)),f=O(r(86750)),d=O(r(86460)),c=O(r(58350)),p=O(r(69245)),S=O(r(62441)),E=O(r(89446)),h=v(r(84455)),y=r(70348),F=r(34596);function O(e){return e&&e.__esModule?e:{default:e}}function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_=function(e){return e?r:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=_(t);if(r&&r.has(e))return r.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=s?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(a,n,u):a[n]=e[n]}a.default=e
;r&&r.set(e,a);return a}function T(e,t,r,s){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=s;else if(u>1){for(var o=new Array(u),i=0;i<u;i++)o[i]=arguments[i+3];t.children=o}if(t&&n)for(var l in n)void 0===t[l]&&(t[l]=n[l]);else t||(t=n||{});return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function m(e,t){m=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return m(e,t)}var R=function(){var e;return(e={})[y.SKUFeatureTypes.SINGLE_PLAYER]=F.Messages.Features.FEATURE_SINGLE_PLAYER,e[y.SKUFeatureTypes.ONLINE_MULTIPLAYER]=F.Messages.Features.FEATURE_ONLINE_MULTIPLAYER,e[y.SKUFeatureTypes.LOCAL_MULTIPLAYER]=F.Messages.Features.FEATURE_LOCAL_MULTIPLAYER,e[y.SKUFeatureTypes.PVP]=F.Messages.Features.FEATURE_PVP,e[y.SKUFeatureTypes.LOCAL_COOP]=F.Messages.Features.FEATURE_LOCAL_COOP,
e[y.SKUFeatureTypes.CROSS_PLATFORM]=F.Messages.Features.FEATURE_CROSS_PLATFORM,e[y.SKUFeatureTypes.RICH_PRESENCE]=F.Messages.Features.FEATURE_RICH_PRESENCE,e[y.SKUFeatureTypes.DISCORD_GAME_INVITES]=F.Messages.Features.FEATURE_DISCORD_GAME_INVITES,e[y.SKUFeatureTypes.SPECTATOR_MODE]=F.Messages.Features.FEATURE_SPECTATOR_MODE,e[y.SKUFeatureTypes.CONTROLLER_SUPPORT]=F.Messages.Features.FEATURE_CONTROLLER_SUPPORT,e[y.SKUFeatureTypes.CLOUD_SAVES]=F.Messages.Features.FEATURE_CLOUD_SAVES,e[y.SKUFeatureTypes.ONLINE_COOP]=F.Messages.Features.FEATURE_ONLINE_COOP,e[y.SKUFeatureTypes.SECURE_NETWORKING]=F.Messages.Features.FEATURE_SECURE_NETWORKING,e},g=Object.keys(y.SKUFeatureTypes).sort((function(e,t){return y.SKUFeatureTypes[e]-y.SKUFeatureTypes[t]})),C=function(e){return null!=(null==e?void 0:e.features)?e.features:[]},U=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;m(e,t)}(t,e);function t(){
for(var t,r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];(t=e.call.apply(e,[this].concat(a))||this).state={hasError:!1,hasSubmitted:!1,hasUnsavedChanges:!1,isSubmitting:!1,selectedFeatures:C(t.props.sku)};t.handleCheckboxChange=function(e,r){if(null!=r){var a=y.SKUFeatureTypes[r];t.setState((function(e){var t=e.selectedFeatures;return t.includes(a)?{selectedFeatures:t.filter((function(e){return e!==a}))}:{selectedFeatures:t.concat(a)}}),t.handleFormChange)}};t.handleFormChange=function(){t.state.hasUnsavedChanges||t.setState({hasUnsavedChanges:!0})};t.handleFormReset=function(){t.setState({hasUnsavedChanges:!1,selectedFeatures:C(t.props.sku)})};t.handleFormSubmit=function(){var e=t.props.match.params,r=e.id,a=e.skuId,s={features:t.state.selectedFeatures};u.updateSku(r,a,s).then((function(){t.setState({isSubmitting:!1,hasError:!1,hasSubmitted:!0,hasUnsavedChanges:!1})})).catch((function(){t.setState({isSubmitting:!1,hasError:!0,hasSubmitted:!1})}))}
;t.renderFormStatus=function(){var e=t.state,r=e.hasError,a=e.hasSubmitted;return r?T(i.default,{type:i.default.Types.ERROR},void 0,F.Messages.Alerts.ERROR):a?T(i.default,{type:i.default.Types.SUCCESS},void 0,F.Messages.Alerts.SUCCESS_CHANGES_SAVED):null};t.renderFeaturesCheckboxes=function(){var e=t.state.selectedFeatures,r=R();return g.map((function(a){var s,n=y.SKUFeatureTypes[a];return T(h.GridChild,{columnSpread:3,columnSpreadMedium:4,columnSpreadSmallMedium:6,columnSpreadSmall:6,columnSpreadExtraSmall:12},a,T(E.default,{onChange:t.handleCheckboxChange,value:e.includes(n),name:a,type:E.default.Types.INVERTED},void 0,null!==(s=r[n])&&void 0!==s?s:a))}))};return t}t.prototype.render=function(){var e=this.state,t=e.hasUnsavedChanges,r=e.isSubmitting;return T(o.default,{onChange:this.handleFormChange,onSubmit:this.handleFormSubmit},void 0,T(f.default,{},void 0,T(l.default,{},void 0,F.Messages.Features.HEADING),T(c.default,{isFlush:!0
},void 0,F.Messages.Features.SUBHEADING),this.renderFormStatus()),T(f.default,{isFlush:!0},void 0,T(d.default,{bottomMargin:d.default.BottomMarginSizes.LARGE},void 0,F.Messages.Features.AVAILABLE_FEATURES_HEADING),T(h.default,{},void 0,T(h.GridSection,{},void 0,this.renderFeaturesCheckboxes()))),T(p.default,{isVisible:t,onReset:this.handleFormReset,submitting:r}))};return t}(s.Component);U.displayName="SkuFeatures";var A=n.default.connectStores([S.default],(function(e){return{sku:S.default.getSku(e.match.params.skuId)}}))(U);t.default=A},31055:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var a=f(r(67294)),s=i(r(94184)),n=f(r(34704)),u=i(r(49839)),o=["className"];function i(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e}
;var r=l(t);if(r&&r.has(e))return r.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=s?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(a,n,u):a[n]=e[n]}a.default=e;r&&r.set(e,a);return a}function d(){d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};return d.apply(this,arguments)}function c(e,t){c=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return c(e,t)}var p=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;c(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}t.prototype.render=function(){var e=this.props,t=e.className,r=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++){r=n[a];t.indexOf(r)>=0||(s[r]=e[r])}return s}(e,o)
;return a.createElement(n.default,d({},r,{className:(0,s.default)(u.default.formStatusAlert,t)}))};return t}(a.Component);t.default=p;p.displayName="FormStatusAlert";p.Types=n.AlertTypes}}]);
//# sourceMappingURL=eaf80e8aaa8e3464557b.js.map