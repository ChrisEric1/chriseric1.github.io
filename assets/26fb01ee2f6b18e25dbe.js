"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[51356],{51356:(t,e,n)=>{n.r(e);n.d(e,{default:()=>V});var r=n(785893),o=n(667294),i=n(363010),c=n(331535),a=n(881548),l=n(981171),u=n(730189),s=n(182102),p=n(655695),f=n(367124),d=n(447887),h=n(800539),b=n(916957),y=n(512238),g=n(713237),v=n(693518),O=n(272729),m=n(67416),j=n(202036),w=n(862325),x=n(461061),k=n(420124),P=n.n(k);function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t,e,n,r,o,i,c){try{var a=t[i](c),l=a.value}catch(t){n(t);return}a.done?e(l):Promise.resolve(l).then(r,o)}function Z(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){S(i,r,o,c,a,"next",t)}function a(t){S(i,r,o,c,a,"throw",t)}c(void 0)}))}}function I(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n]
;r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(t,r.key,r)}}function A(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function T(t){T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return T(t)}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){A(t,e,n[e])}))}return t}function E(t,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable})));n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function L(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++){n=i[r];e.indexOf(n)>=0||(o[n]=t[n])}return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++){n=i[r];e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}}return o}function G(t,e){return!e||"object"!==M(e)&&"function"!=typeof e?C(t):e}function N(t,e){N=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return N(t,e)}var M=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=T(t);if(e){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return G(this,n)}}var z=function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:c.label++;return{value:i[1],done:!1};case 5:c.label++;r=i[1];i=[0];continue;case 7:i=c.ops.pop();c.trys.pop();continue;default:if(!(o=c.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}
if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1];o=i;break}if(o&&c.label<o[2]){c.label=o[2];c.ops.push(i);break}o[2]&&c.ops.pop();c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&N(t,e)}(n,t);var e=D(n);function n(){I(this,n);var t;(t=e.apply(this,arguments)).state={error:null,accepted:!1};var r=C(t);t.handleAccept=Z((function(){var t,e,n,o;return z(this,(function(i){switch(i.label){case 0:t=r.props,e=t.giftCode,n=t.channelContext;if(null==e)throw new Error("GiftCode is null at acceptance.");i.label=1;case 1:i.trys.push([1,3,,4]);return[4,l.Z.redeemGiftCode(e.code,{channelId:n})];case 2:i.sent();r.setState({
accepted:!0});return[3,4];case 3:o=i.sent();r.setState({error:o});return[3,4];case 4:return[2]}}))}));t.handleGoToLibrary=function(){var e=t.props,n=e.onClose,r=e.libraryApplication;(0,p.uL)(x.Z5c.APPLICATION_LIBRARY,{state:{applicationId:null!=r?r.id:null}});n()};return t}var o=n.prototype;o.componentDidMount=function(){var t=this.props,e=t.application,n=t.sku;null==e&&null!=n&&a.Z.fetchApplication(n.applicationId)};o.render=function(){var t=this.props,e=t.application,n=t.accepting,o=t.onClose,i=t.giftCode,a=t.headerId,l=t.transitionState,u=t.useReducedMotion;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(m.Y0,{transitionState:l,size:m.Cg.SMALL,className:P().modal,"aria-labelledby":a,children:[null!=i.giftStyle?(0,r.jsx)(s.Z,{giftStyle:i.giftStyle,className:P().seasonalGiftIcon}):null,(0,r.jsx)("div",{className:P().backSplash}),(0,r.jsxs)(m.hz,{className:P().content,children:[(0,r.jsx)(m.ol,{onClick:o,className:P().closeButton}),null!=i.giftStyle?null:(0,r.jsx)(v.Z,{
size:v.Z.Sizes.LARGE,game:e,skuId:i.skuId}),(0,r.jsx)(c.X6,{id:a,className:P().header,variant:"heading-sm/semibold",children:this.headerText}),(0,r.jsx)(c.xv,{className:P().body,variant:"text-sm/normal",children:this.bodyText}),(0,r.jsx)(c.zx,{submitting:n,onClick:this.handleClick,children:this.buttonText})]})]}),null==i.giftStyle||u?null:(0,r.jsx)(g.O_,{className:P().cannon,children:function(t){return(0,r.jsx)(g.WV,E(_({},t,g.R7),{position:{x:50,y:50},firing:!0}))}})]})};!function(t,e,n){e&&R(t.prototype,e);n&&R(t,n)}(n,[{key:"step",get:function(){var t=this.props,e=t.libraryApplication,n=t.accepting,r=t.giftCode,o=this.state,i=o.error,c=o.accepted;return(0,j.TO)(e,r,i,c,n)}},{key:"buttonText",get:function(){return(0,j.L2)(this.step,this.props.giftCode)}},{key:"headerText",get:function(){return null!=this.props.sku?(0,j.dQ)(this.step,this.props.giftCode,this.props.sku):null}},{key:"bodyText",get:function(){
var t=this.props,e=t.sku,n=t.accepting,r=t.libraryApplication,o=t.subscriptionPlan,i=this.state,c=i.error,a=i.accepted;return null!=e?(0,j.iM)({step:this.step,sku:e,libraryApplication:r,error:c,accepted:a,accepting:n,onGoToLibrary:this.handleGoToLibrary,subscriptionPlan:o}):null}},{key:"errorMessage",get:function(){var t=this.props,e=t.libraryApplication,n=t.accepting,r=this.state,o=r.error,i=r.accepted;return(0,j.e$)(e,o,i,n,this.handleGoToLibrary)}},{key:"handleClick",get:function(){var t=this.props,e=t.giftCode,n=t.onClose;switch(this.step){case x.wZ8.ERROR:return n;case x.wZ8.SUCCESS:return __OVERLAY__||null!=e.subscriptionPlanId?n:this.handleGoToLibrary;case x.wZ8.CONFIRM:default:return this.handleAccept}}}]);return n}(o.Component),Y=i.ZP.connectStores([h.Z,y.Z,f.Z,d.Z,b.Z,u.Z],(function(t){var e=t.giftCode,n=y.Z.get(e.skuId),r=null!=n?f.Z.getGame(n.applicationId):null,o=u.Z.useReducedMotion;return{sku:n,libraryApplication:null!=n?(0,j.z2)(e,n,h.Z):null,application:r,
subscriptionPlan:null!=e.subscriptionPlanId?(0,w.oE)(e.subscriptionPlanId):null,accepting:d.Z.getIsAccepting(e.code),useReducedMotion:o}}))(B);const V=function(t){var e=t.channelContext,n=t.code,o=L(t,["channelContext","code"]),c=(0,O.Dt)(),a=(0,i.e7)([d.Z],(function(){return d.Z.get(n)}));return null==a?null:(0,r.jsx)(Y,E(_({},o),{channelContext:e,giftCode:a,headerId:c}))}}}]);
//# sourceMappingURL=26fb01ee2f6b18e25dbe.js.map