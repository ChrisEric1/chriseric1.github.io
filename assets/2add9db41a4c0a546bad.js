"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[81070],{115689:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(785893),l=t(667294),o=t(60392),i=t(516945),a=t.n(i);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,l,o=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(r=t.next()).done);i=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){a=!0;l=e}finally{try{i||null==t.return||t.return()}finally{if(a)throw l}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e,n)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){var n=e.hasSetEmoji,t=e.onClick,i=e.children,s=u(l.useState(!1),2),c=s[0],d=s[1];return(0,r.jsxs)("div",{className:a().container,onMouseEnter:function(){d(!!n)},onMouseLeave:function(){d(!1)},children:[i,n&&c&&(0,r.jsx)(o.Z,{onClick:t,className:a().removeButton})]})}},970001:(e,n,t)=>{t.d(n,{_:()=>r,S:()=>l});var r="Guild Welcome Screen",l="hasClickedWelcomeEmojiPicker"},281070:(e,n,t)=>{t.r(n);t.d(n,{default:()=>U});var r=t(785893),l=t(667294),o=t(363010),i=t(444450),a=t(331535),s=t(152163),u=t(239396),c=t(53211),d=t(808525),f=t(902397),m=t(115689),h=t(356004),j=t(392115),E=t(1812),p=t(105405),v=t(859023),C=t(629858),y=t(487502),x=t(761434),b=t(757987),g=t(272729),S=t(976703),_=t(67416),O=t(890889),N=t(94181),I=t(431583),L=t(970001),P=t(461061),Z=t(959797),T=t(585398),M=t.n(T);function A(e,n){
(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function k(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){k(e,n,t[n])}))}return e}function D(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}
function G(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,l,o=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(r=t.next()).done);i=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){a=!0;l=e}finally{try{i||null==t.return||t.return()}finally{if(a)throw l}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return A(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const U=function(e){var n,t,T=e.guildId,A=e.welcomeChannel,k=e.transitionState,U=e.onSave,B=e.onClose,z=(0,
g.Dt)(),W=G(l.useState(null!=A?A.channel_id:null),2),R=W[0],H=W[1],K=G(l.useState(null!=A?A.description:""),2),Y=K[0],V=K[1],F=G(l.useState(null!=A?{id:A.emoji_id,name:A.emoji_name}:null),2),J=F[0],X=F[1],$=G(l.useState(!1),2),q=$[0],Q=$[1],ee=(0,o.e7)([j.Z],(function(){return null!=(null==J?void 0:J.id)?j.Z.getUsableCustomEmojiById(J.id):null})),ne=(0,o.e7)([E.ZP],(function(){return E.ZP.getChannels(T)[E.sH]}),[T]),te=(0,o.e7)([N.Z],(function(){return N.Z.get(T)})),re=null!==(t=null==te||null===(n=te.welcome_channels)||void 0===n?void 0:n.map((function(e){return e.channel_id})))&&void 0!==t?t:[],le=G(l.useState(!1),2),oe=le[0],ie=le[1];l.useEffect((function(){i.Z.get(L.S)||setTimeout((function(){return ie(!0)}),300)}),[]);var ae=[];ne.forEach((function(e){var n=e.channel;!O.ZP.canEveryoneRole(P.Plq.VIEW_CHANNEL,n)||(null==A?void 0:A.channel_id)!==n.id&&re.includes(n.id)||ae.push({value:n.id,label:(0,c.F6)(n,v.default,p.Z)})}));var se=function(){ie(!1);B()
},ue=l.useCallback((function(e){return V(e)}),[]),ce=function(e){if(null!=e){var n,t,r;X(null!=e.id?{id:null!==(n=e.id)&&void 0!==n?n:null,name:null!==(t=e.name)&&void 0!==t?t:null}:{id:null,name:null!==(r=e.optionallyDiverseSequence)&&void 0!==r?r:null})}else X(null)},de=l.useCallback((function(){i.Z.set(L.S,!0);ie(!1)}),[]);return(0,r.jsx)(u.Z,{page:P.ZY5.CHANNEL_WELCOME_CREATE_MODAL,children:(0,r.jsxs)(_.Y0,{transitionState:k,"aria-labelledby":z,children:[(0,r.jsxs)("div",{className:M().modalContents,children:[(0,r.jsx)(_.ol,{onClick:se,className:M().closeButton}),(0,r.jsx)(a.X6,{variant:"heading-md/semibold",className:M().headerText,id:z,children:Z.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL}),(0,r.jsxs)(a.hj,{className:M().formGroup,children:[(0,r.jsx)(a.Vc,{options:ae,onChange:function(e){return H(e)},value:R,renderOptionPrefix:function(e){if(null===e)return null;var n,t=e.value,l=h.Z.getChannel(t),o=null!==(n=(0,d.KS)(l))&&void 0!==n?n:S.Z;return(0,r.jsx)(o,{
className:M().channelTitleIcon,width:16,height:16})}}),(0,r.jsx)(a.xv,{variant:"text-xs/normal",color:"text-muted",className:M().formDescription,children:Z.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS})]}),(0,r.jsx)(a.$i,{}),(0,r.jsx)(a.X6,{variant:"heading-md/semibold",className:M().headerText,children:Z.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION}),(0,r.jsx)(a.hj,{className:M().formGroup,children:(0,r.jsx)(a.oi,{maxLength:42,value:Y,inputClassName:M().input,placeholder:Z.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,onChange:ue})}),(0,r.jsx)(a.$i,{}),(0,r.jsx)(a.hj,{className:M().formGroup,children:(0,r.jsxs)("div",{className:M().emojiSectionContainer,children:[(0,r.jsxs)("div",{className:M().emojiTitleContainer,children:[(0,r.jsx)(a.X6,{variant:"heading-md/semibold",children:Z.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI}),(0,r.jsx)(a.xv,{variant:"text-xs/normal",color:"text-muted",
children:Z.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL})]}),(0,r.jsx)(m.Z,{hasSetEmoji:null!=J,onClick:ce,children:(0,r.jsx)(x.ZP,{renderPopout:function(e){var n=e.closePopout,t=E.ZP.getDefaultChannel(T);return(0,r.jsx)(f.Z,{guildId:T,closePopout:n,onSelectEmoji:function(e,t){ce(e);if(t){n();null==e&&se()}},pickerIntention:P.HzX.COMMUNITY_CONTENT,onNavigateAway:se,channel:t})},position:x.ZP.Positions.LEFT,animation:x.ZP.Animation.NONE,align:x.ZP.Align.BOTTOM,children:function(e,n){var t=n.isShown;return(0,r.jsx)(b.DY,{color:b.FG.BRAND,tooltipClassName:M().tooltip,position:b.as.LEFT,text:oe?Z.Z.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP:null,forceOpen:oe,children:(0,r.jsx)(C.Z,D(w({},e),{onClick:function(n){var t;de();null===(t=e.onClick)||void 0===t||t.call(e,n)},active:t,className:M().emojiButton,tabIndex:0,renderButtonContents:null==J||null==J.id&&null==J.name?null:function(){return(0,r.jsx)(s.Z,{className:M().emoji,emojiId:J.id,emojiName:J.name,
animated:Boolean(null==ee?void 0:ee.animated)})}}))})}})})]})})]}),(0,r.jsxs)(_.mz,{className:M().footer,justify:y.Z.Justify.BETWEEN,children:[(0,r.jsxs)(y.Z,{grow:0,align:y.Z.Align.CENTER,children:[(0,r.jsx)(a.zx,{onClick:se,size:a.zx.Sizes.SMALL,look:a.zx.Looks.LINK,color:a.zx.Colors.PRIMARY,children:Z.Z.Messages.CANCEL}),(0,r.jsx)(a.zx,{onClick:function(){null!=R&&Y.length>0&&U({channel_id:R,description:Y,emoji_id:null==J?void 0:J.id,emoji_name:null==J?void 0:J.name});se()},disabled:null==R||0===Y.length,children:Z.Z.Messages.SAVE})]}),null!=A&&(0,r.jsx)(a.zx,{onClick:function(){Q(!0)},size:a.zx.Sizes.MIN,look:a.zx.Looks.LINK,color:a.zx.Colors.RED,children:Z.Z.Messages.REMOVE})]}),q&&(0,r.jsx)(I.Z,{onConfirm:function(){U();se()},onCancel:function(){return Q(!1)},channelId:R})]})})}}}]);
//# sourceMappingURL=2add9db41a4c0a546bad.js.map