(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[94056],{96972:(e,n,t)=>{e.exports=t.p+"b36c705f790dad253981f1893085015a.svg"},540579:(e,n,t)=>{e.exports=t.p+"36c9a2fb7d0593a581a92373121c2848.svg"},894056:(e,n,t)=>{"use strict";t.r(n);t.d(n,{default:()=>H});var r=t(785893),i=t(667294),a=t(294184),s=t.n(a),l=t(363010),o=t(331535),c=t(565922),u=t(53211),d=t(808525),h=t(121764),f=t(80635),m=t(53551),g=t(105405),x=t(971738),v=t(859023),S=t(246887),j=t(31165),C=t(381604),I=t(873014),p=t(363798),N=t(880068),Z=t(90816),y=t(959797),L=t(401539),E=t.n(L),w=t(96972),A=t.n(w),_=t(540579),R=t.n(_);function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function P(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],s=!0,l=!1;try{for(t=t.call(e);!(s=(r=t.next()).done);s=!0){a.push(r.value)
;if(n&&a.length===n)break}}catch(e){l=!0;i=e}finally{try{s||null==t.return||t.return()}finally{if(l)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e){var n=e.channel,t=e.ChannelIcon,i=e.selectedChannelId,a=e.setSelectedChannelId,s=(0,u.ZP)(n);return(0,r.jsxs)(o.P3,{className:E().channelRow,onClick:function(){return a(n.id)},children:[null!=i&&i===n.id?(0,r.jsx)(I.Z,{className:E().radioIcon}):(0,r.jsx)(C.Z,{className:E().radioIcon}),(0,r.jsx)(t,{className:E().icon,width:16,height:16}),(0,r.jsx)(o.xv,{variant:"text-md/medium",
color:"interactive-active",children:s})]})}function T(e){var n=e.guildId,t=(0,l.cj)([h.Z],(function(){return h.Z.getGuildWithoutChangingCommunityRows(n)})).guildChannels,a=P(i.useState(null),2),c=a[0],u=a[1],f=i.useMemo((function(){var e=[];t.forEachChannel((function(n){((0,m.r8)(n.type)||(0,m.bw)(n.type))&&e.push(n)}));return e}),[t]);if(0===f.length)return null;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:s()(E().divider,E().bottomDivider)}),(0,r.jsx)(o.xv,{variant:"eyebrow",color:"interactive-normal",className:E().contentPadding,children:y.Z.Messages.CLIP_SHARE_SELECT_CHANNEL}),(0,r.jsx)(N.ZP,{sections:[f.length],sectionHeight:0,renderRow:function(e){var n=e.section,t=e.row;if(n>0)return null;var i=f[t],a=(0,d.KS)(i);return null==a?null:(0,r.jsx)(M,{channel:i,ChannelIcon:a,selectedChannelId:c,setSelectedChannelId:u},i.id)},rowHeight:function(e,n){return e>0?0:null!=f[n]?56:0},renderSection:function(){return null},
className:s()(E().channelList,E().contentPadding),fade:!0})]})}function D(e){var n=e.friends,t=e.searchQuery,a=i.useMemo((function(){return 0===t.length?n:n.filter((function(e){return e.username.toLowerCase().includes(t.toLowerCase())}))}),[n,t]),u=(0,l.e7)([f.Z],(function(){return f.Z.theme}));if(0===a.length)return(0,r.jsxs)(S.ZP,{theme:u,className:E().emptyStateContainer,children:[(0,r.jsx)(S.ZP.Image,{width:415,height:75,lightSrc:R(),darkSrc:A()}),(0,r.jsx)(S.ZP.Text,{note:y.Z.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND})]});return(0,r.jsx)(N.ZP,{sections:[a.length],sectionHeight:0,renderRow:function(e){var n=e.section,t=e.row;if(n>0)return null;var i=a[t],s=a[t].username;return(0,r.jsxs)("div",{className:E().userRow,children:[(0,r.jsx)(c.Z,{user:i}),(0,r.jsx)(o.xv,{className:E().username,variant:"text-md/normal",children:s}),(0,r.jsx)(o.zx,{className:E().friendShareButton,look:o.iL.OUTLINED,size:o.Ph.SMALL,color:o.Tt.BRAND,children:(0,r.jsx)(o.xv,{variant:"text-sm/medium",
children:y.Z.Messages.SHARE})})]},i.id)},rowHeight:function(e,n){return e>0?0:null!=a[n]?52:0},renderSection:function(){return null},className:s()(E().friendsList,E().contentPadding),fade:!0})}function H(e){var n=e.transitionState,t=e.onClose,a=P(i.useState(""),2),c=a[0],u=a[1],d=(0,l.Wu)([g.Z],(function(){return g.Z.getFriendIDs()})),h=(0,l.Wu)([v.default],(function(){return d.map((function(e){return v.default.getUser(e)})).filter(Z.lm)}),[d]),f=(0,l.e7)([x.Z],(function(){return x.Z.getLastSelectedGuildId()}));return(0,r.jsxs)(p.Y0,{size:p.Cg.SMALL,transitionState:n,children:[(0,r.jsx)(o.X6,{className:s()(E().title,E().contentPadding),variant:"heading-lg/semibold",color:"interactive-active",children:y.Z.Messages.CLIP_SHARE_MODAL_TITLE}),(0,r.jsx)(o.xv,{variant:"text-md/normal",color:"text-normal",className:s()(E().subtitle,E().contentPadding),children:y.Z.Messages.CLIP_SHARE_MODAL_SUBTITLE}),(0,r.jsx)(j.Z,{className:E().searchBar,query:c,onChange:u,size:j.Z.Sizes.MEDIUM,
onClear:function(){u("")},placeholder:y.Z.Messages.INVITE_SEARCH_FOR_FRIENDS}),(0,r.jsx)("div",{className:s()(E().divider,E().topDivider)}),(0,r.jsx)(D,{searchQuery:c,friends:h}),null!=f&&(0,r.jsx)(T,{guildId:f}),(0,r.jsxs)(p.mz,{children:[(0,r.jsx)(o.zx,{color:o.zx.Colors.BRAND,children:y.Z.Messages.CLIPS_EDIT_SHARE_CLIP}),(0,r.jsx)(o.zx,{look:o.iL.LINK,onClick:t,color:o.Tt.PRIMARY,children:y.Z.Messages.BACK})]})]})}}}]);
//# sourceMappingURL=855371a1cb3162ca170d.js.map