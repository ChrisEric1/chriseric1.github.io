"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[12228],{912228:(e,r,t)=>{t.r(r);t.d(r,{default:()=>x});var n=t(785893),a=t(667294),l=t(331535),o=t(67416),i=t(959797),s=t(825773),c=t.n(s);function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,l=[],o=!0,i=!1;try{for(t=t.call(e);!(o=(n=t.next()).done);o=!0){l.push(n.value);if(r&&l.length===r)break}}catch(e){i=!0;a=e}finally{try{o||null==t.return||t.return()}finally{if(i)throw a}}return l}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t)
;if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){var r=e.onConfirm,t=e.onClose,s=e.validationText,u=e.errorText,x=e.header,f=e.className,h=e.cancelText,m=e.confirmText,p=e.instructionText,y=e.transitionState,b=e.children,v=d(a.useState(""),2),j=v[0],C=v[1],g=d(a.useState(null),2),N=g[0],S=g[1],w=a.Children.count(b)>0?(0,n.jsx)(l.Zb,{type:l.Zb.Types.WARNING,className:c().card,children:(0,n.jsx)(l.xv,{className:c().warning,variant:"text-md/normal",children:b})}):null;return(0,n.jsx)(o.Y0,{transitionState:y,className:f,children:(0,n.jsxs)("form",{onSubmit:function(e){e.preventDefault();if(j.toLowerCase()===s.toLowerCase()){null==r||r();t()}else S(u)},children:[(0,n.jsx)(o.xB,{separator:!1,children:(0,n.jsx)(l.X6,{variant:"heading-lg/semibold",children:x})
}),(0,n.jsxs)(o.hz,{children:[w,(0,n.jsxs)(l.xJ,{title:p,className:c().spacing,children:[(0,n.jsx)(l.oi,{id:"text-entry-confirm",type:"text",value:j,autoComplete:"off",onChange:C,autoFocus:!0}),null!=N&&""!==N?(0,n.jsx)(l.xv,{color:"text-danger",variant:"text-xs/normal",className:c().error,children:N}):null]})]}),(0,n.jsxs)(o.mz,{children:[(0,n.jsx)(l.zx,{type:"submit",color:l.zx.Colors.RED,children:null!=m?m:i.Z.Messages.CONFIRM}),(0,n.jsx)(l.zx,{onClick:t,look:l.zx.Looks.LINK,color:l.zx.Colors.PRIMARY,children:null!=h?h:i.Z.Messages.CANCEL})]})]})})}}}]);
//# sourceMappingURL=8a6624f7a69e48f58ae8.js.map