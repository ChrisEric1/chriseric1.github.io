"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[47120],{147120:(e,t,n)=>{n.r(t);n.d(t,{TeamSetup:()=>h,default:()=>f});var r=n(785893),a=n(667294),s=n(331535),l=n(7096),o=n(378315),i=n(573228),c=n(337488),u=n(272729),d=n(67416),O=n(461061),_=n(984674),E=n(959797),N=n(5352),T=n.n(N);function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,s=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){s.push(r.value);if(t&&s.length===t)break}}catch(e){o=!0;a=e}finally{try{l||null==n.return||n.return()}finally{if(o)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name)
;if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){var t=e.selectedTeamId,n=e.onSetSelectedTeamId,a=e.teamOptions;return(0,r.jsx)("div",{className:T().teamSetup,children:0===a.length?(0,r.jsx)(s.xv,{variant:"text-md/normal",color:"header-secondary",children:E.Z.Messages.CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_NO_TEAM_BODY.format()}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.xv,{variant:"text-md/normal",className:T().teamBodyText,color:"header-secondary",children:E.Z.Messages.CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_CHOOSE_TEAM_BODY}),(0,r.jsx)(s.q4,{options:a,placeholder:E.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,value:t,onChange:n,
"aria-label":E.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER})]})})}function f(e){var t=e.guildId,n=e.requireTeamSetup,N=e.onClose,A=e.transitionState,f=(0,u.Dt)(),I=m(a.useState(),2),M=I[0],p=I[1],x=m(a.useState(!1),2),C=x[0],R=x[1],y=(0,c.Z)().teams.filter((function(e){return e.payout_account_status===_.C.ACTIVE})),g=a.useMemo((function(){return y.map((function(e){return{label:e.name,value:e.id}}))}),[y]),v=a.useCallback((function(){(0,l.Z)(O.EYA.DEVELOPER_PORTAL_TEAMS)}),[]);return(0,r.jsxs)(d.Y0,{"aria-labelledby":f,size:d.Cg.DYNAMIC,transitionState:A,children:[(0,r.jsx)(d.xB,{separator:!1,className:T().header,children:(0,r.jsx)(s.X6,{variant:"heading-xl/semibold",children:n?E.Z.Messages.CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_TITLE:E.Z.Messages.CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_TITLE_ACCEPT_TERM_ONLY})}),(0,r.jsxs)(d.hz,{className:T().content,children:[n&&(0,r.jsx)(h,{selectedTeamId:M,onSetSelectedTeamId:p,teamOptions:g}),(0,r.jsx)(s.XZ,{
onChange:function(){R((function(e){return!e}))},size:20,type:s.XZ.Types.INVERTED,value:C,children:(0,r.jsx)(s.xv,{variant:"text-md/normal",color:"header-secondary",children:(0,i.f)()})})]}),(0,r.jsx)(d.mz,{className:T().footer,children:(0,r.jsx)("div",{className:T().buttons,children:n&&0===g.length?(0,r.jsx)(s.zx,{onClick:v,children:E.Z.Messages.CREATOR_MONETIZATION_NEW_OWNER_ONBOARDING_MODAL_SETUP_TEAM_CTA}):(0,r.jsx)(s.zx,{disabled:!C||n&&null==M,onClick:function(){N();(0,o.df)(t,M)},children:E.Z.Messages.SUBMIT})})})]})}}}]);
//# sourceMappingURL=efc700a9c8f65a817de8.js.map