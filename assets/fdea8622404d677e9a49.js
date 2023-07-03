"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[68694,61928],{568694:(e,t,n)=>{n.r(t);n.d(t,{default:()=>S});var o=n(785893),r=n(667294),s=n(496486),i=n.n(s),a=n(363010),u=n(331535),l=n(600341),c=n(363157),d=n(28825),h=n(934714),f=n(487502),p=n(272729),g=n(67416),m=n(405959),_=n(461061),v=n(866452),x=n(959797),T=n(811769),E=n.n(T),O=n(380203),M=n.n(O);function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e){j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return j(e)}function V(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e,t){C=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return C(e,t)}var b=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}
;function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,o=j(e);if(t){var r=j(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return V(this,n)}}var y=(0,p.hQ)(),A=(0,p.hQ)(),L=(0,p.hQ)(),R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&C(e,t)}(n,e);var t=I(n);function n(){Z(this,n);var e;(e=t.apply(this,arguments)).handleAutoThresholdChange=function(t){var n=e.props,o=n.onThresholdChange,r=n.threshold;null==o||o(r,t)};e.handleSensitivityChange=function(t){var n=e.props,o=n.onThresholdChange,r=n.autoThreshold
;null==o||o(-1*(100-t),r)};return e}var r=n.prototype;r.handleValueRender=function(e){return"".concat((-1*(100-e)).toFixed(0),"dB")};r.renderAutomaticVADToggle=function(){var e=this,t=this.props.autoThreshold;return(0,o.jsx)(p.FG,{children:function(n){return(0,o.jsxs)(f.Z,{className:M().marginBottom4,children:[(0,o.jsx)(u.vw,{tag:u.RB.H3,children:(0,o.jsx)("label",{htmlFor:n,children:x.Z.Messages.FORM_LABEL_AUTOMATIC_VAD})}),(0,o.jsx)(u.rs,{id:n,checked:t,onChange:e.handleAutoThresholdChange})]})}})};r.renderSlider=function(){var e=this.props,t=e.autoThreshold,n=e.threshold;if(!t)return(0,o.jsx)(u.iR,{initialValue:n+100,onValueRender:this.handleValueRender,onValueChange:this.handleSensitivityChange,"aria-label":x.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY})};r.render=function(){return(0,o.jsxs)(u.xJ,{title:x.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY,className:M().marginBottom8,children:[this.renderAutomaticVADToggle(),this.renderSlider()]})};return n
}(r.PureComponent),D=a.ZP.connectStores([h.Z],(function(e){var t=e.mediaEngineContext;return{inputVolume:h.Z.getInputVolume(),outputVolume:h.Z.getOutputVolume(),inputDeviceId:h.Z.getInputDeviceId(),inputDevices:h.Z.getInputDevices(),outputDevices:h.Z.getOutputDevices(),outputDeviceId:h.Z.getOutputDeviceId(),inputMode:h.Z.getMode(t),shortcut:h.Z.getModeOptions(t).shortcut,vadThreshold:h.Z.getModeOptions(t).threshold,vadAutoThreshold:h.Z.getModeOptions(t).autoThreshold,delay:h.Z.getModeOptions(t).delay}}))((function(e){var t,n=e.mediaEngineContext,s=e.inputMode,a=e.shortcut,d=e.delay,h=e.vadThreshold,f=e.vadAutoThreshold,p=e.inputDevices,g=e.inputDeviceId,v=e.inputVolume,T=e.outputDeviceId,E=e.outputDevices,O=e.outputVolume,Z=e.speaking,j=void 0!==Z&&Z,V=i().first(p),C=null!=V&&V.disabled,b=i().first(E),I=null!=b&&b.disabled,D=[{value:_.pM4.VOICE_ACTIVITY,name:x.Z.Messages.INPUT_MODE_VAD},{value:_.pM4.PUSH_TO_TALK,name:x.Z.Messages.INPUT_MODE_PTT}];t=s===_.pM4.PUSH_TO_TALK?(0,
o.jsxs)(r.Fragment,{children:[(0,o.jsx)(u.xJ,{title:x.Z.Messages.FORM_LABEL_SHORTCUT,className:M().marginBottom20,children:(0,o.jsx)(c.Z,{defaultValue:a,onChange:function(e){return l.Z.setMode(s,{shortcut:e},n)}})}),(0,o.jsxs)(u.xJ,{className:M().marginBottom8,children:[(0,o.jsx)(u.vw,{id:y,children:x.Z.Messages.INPUT_MODE_PTT_RELEASE_DELAY}),(0,o.jsx)(u.iR,{initialValue:d,onValueChange:function(e){return l.Z.setMode(s,{delay:e},n)},onValueRender:function(e){return e>=1e3?"".concat((e/=1e3).toFixed(2),"s"):"".concat(e.toFixed(0),"ms")},maxValue:_.qhL,"aria-labelledby":y})]})]}):(0,o.jsx)(R,{speaking:j,inputMode:s,threshold:h,autoThreshold:f,onThresholdChange:function(e,t){return l.Z.setMode(s,{threshold:e,autoThreshold:t},n)}});return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(u.xJ,{title:x.Z.Messages.FORM_LABEL_INPUT_DEVICE,className:M().marginBottom20,children:(0,o.jsx)(u.q4,{value:g,onChange:function(e){return l.Z.setInputDevice(e,"Voice Settings")},options:i().map(p,(function(e){
return{value:e.id,label:e.name}})),isDisabled:C})}),(0,o.jsxs)(u.xJ,{className:M().marginBottom20,children:[(0,o.jsx)(u.vw,{id:A,children:x.Z.Messages.FORM_LABEL_INPUT_VOLUME}),(0,o.jsx)(u.iR,{initialValue:(0,m.P)(v),asValueChanges:function(e){return l.Z.setInputVolume((0,m.A)(e))},"aria-labelledby":A})]}),(0,o.jsx)(u.xJ,{title:x.Z.Messages.FORM_LABEL_OUTPUT_DEVICE,className:M().marginBottom20,children:(0,o.jsx)(u.q4,{value:T,onChange:function(e){return l.Z.setOutputDevice(e,"Voice Settings")},options:i().map(E,(function(e){return{value:e.id,label:e.name}})),isDisabled:I})}),(0,o.jsxs)(u.xJ,{className:M().marginBottom20,children:[(0,o.jsx)(u.vw,{id:L,children:x.Z.Messages.FORM_LABEL_OUTPUT_VOLUME}),(0,o.jsx)(u.iR,{initialValue:(0,m.P)(O),maxValue:200,asValueChanges:function(e){return l.Z.setOutputVolume((0,m.A)(e))},"aria-labelledby":L})]}),(0,o.jsx)(u.xJ,{title:x.Z.Messages.FORM_LABEL_INPUT_MODE,className:M().marginBottom20,children:(0,o.jsx)(u.Ee,{onChange:function(e){var t=e.value
;return l.Z.setMode(t,{},n)},options:D,value:s})}),t]})}));function S(e){(0,d.Z)((function(){null!=_.e3s&&e.onClose()}));var t;return(0,o.jsxs)(g.Y0,{transitionState:e.transitionState,"aria-label":x.Z.Messages.VOICE_SETTINGS,children:[(0,o.jsxs)(g.xB,{children:[(0,o.jsxs)(f.Z.Child,{children:[(0,o.jsx)(u.vw,{tag:"h1",className:M().marginReset,children:x.Z.Messages.VOICE_SETTINGS}),(0,o.jsx)(u.xv,{variant:"text-xs/normal",className:E().title,children:e.title})]}),(0,o.jsx)(f.Z.Child,{grow:0,children:(0,o.jsx)(g.ol,{onClick:e.onClose})})]}),(0,o.jsx)(g.hz,{children:(0,o.jsx)(D,{mediaEngineContext:null!==(t=e.mediaEngineContext)&&void 0!==t?t:v.Yn.DEFAULT})})]})}},28825:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(667294),r=n(173436);function s(e){var t=(0,o.useRef)(e);(0,o.useEffect)((function(){t.current=e}),[e]);(0,o.useEffect)((function(){if(__OVERLAY__){var e=function(e){e.locked&&t.current()};r.Z.subscribe("OVERLAY_SET_INPUT_LOCKED",e);return function(){
r.Z.unsubscribe("OVERLAY_SET_INPUT_LOCKED",e)}}}),[])}}}]);
//# sourceMappingURL=fdea8622404d677e9a49.js.map