"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[87646],{687646:(e,t,r)=>{r.r(t);r.d(t,{default:()=>w});var n=r(785893),o=r(667294),c=r(331535),s=r(354290),i=r(30741),a=r(964199),u=r(461061),f=r(959797),p=r(137574),l=r.n(p);function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function h(e){h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return h(e)}function O(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){
Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function d(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e,t){g=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return g(e,t)}var j=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}var v=function(e){!function(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&g(e,t)}(r,e);var t=m(r);function r(){y(this,r);var e;(e=t.apply(this,arguments)).state={reason:""};e.handleReasonChange=function(t){e.setState({reason:t})};e.handleKick=function(){var t=e.props,r=t.guildId,n=t.user;s.Z.kickUser(r,n.id,e.state.reason)};return e}r.prototype.render=function(){var e=this.props.user;return(0,n.jsxs)(i.default,O(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){b(e,t,r[t])}))}return e}({header:f.Z.Messages.KICK_USER_FROM_SERVER.format({user:e.username}),confirmText:f.Z.Messages.KICK,
cancelText:f.Z.Messages.CANCEL,onConfirm:this.handleKick},this.props),{children:[(0,n.jsx)(c.xv,{variant:"text-md/normal",className:l().spacing,children:f.Z.Messages.KICK_USER_BODY.format({user:"@".concat(a.ZP.getName(e))})}),(0,n.jsx)(c.xJ,{title:f.Z.Messages.FORM_LABEL_REASON_KICK,className:l().spacing,children:(0,n.jsx)(c.Kx,{maxLength:u.GNZ,onChange:this.handleReasonChange,value:this.state.reason,rows:2})})]}))};return r}(o.PureComponent);const w=v}}]);
//# sourceMappingURL=265ec6f5ba45d04f4941.js.map