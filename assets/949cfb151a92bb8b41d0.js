"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[79370],{679370:(e,n,r)=>{r.r(n);r.d(n,{default:()=>j});var t=r(785893),o=r(667294),a=r(496486),i=r.n(a),l=r(363010),u=r(331535),s=r(675860),c=r(461061);function f(e,n,r,t,o,a,i){try{var l=e[a](i),u=l.value}catch(e){r(e);return}l.done?n(u):Promise.resolve(u).then(t,o)}function d(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function i(e){f(a,t,o,i,l,"next",e)}function l(e){f(a,t,o,i,l,"throw",e)}i(void 0)}))}}var h=function(e,n){var r,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),
0):t.next)&&!(o=o.call(t,a[1])).done)return o;(t=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:!1};case 5:i.label++;t=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}o[2]&&i.ops.pop();i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e];t=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};const p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:7,r=arguments.length>2?arguments[2]:void 0;return d((function(){return h(this,(function(t){switch(t.label){case 0:return[4,s.Z.get({url:c.ANM.GUILD_PRUNE(e),query:{days:n,include_roles:r},oldFormErrors:!0})];case 1:return[2,t.sent().body.pruned]}}))}))()
},y=function(e,n,r){return s.Z.post({url:c.ANM.GUILD_PRUNE(e),body:{days:n,compute_prune_count:!1,include_roles:r},oldFormErrors:!0})};var v=r(429111),b=r(940712),m=r(601465),g=r(67416),E=r(959797),S=r(249860),x=r.n(S);function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function _(e,n,r,t,o,a,i){try{var l=e[a](i),u=l.value}catch(e){r(e);return}l.done?n(u):Promise.resolve(u).then(t,o)}function R(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function i(e){_(a,t,o,i,l,"next",e)}function l(e){_(a,t,o,i,l,"throw",e)}i(void 0)}))}}function M(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done);i=!0){a.push(t.value);if(n&&a.length===n)break}}catch(e){l=!0;o=e}finally{try{i||null==r.return||r.return()}finally{
if(l)throw o}}return a}}(e,n)||N(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||N(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,n){if(e){if("string"==typeof e)return w(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,n):void 0}}var k=function(e,n){var r,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),
throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;(t=0,o)&&(a=[2&a[0],o.value]);switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:!1};case 5:i.label++;t=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}o[2]&&i.ops.pop();i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e];t=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};const j=function(e){
var n=e.guild,r=e.transitionState,a=e.onClose,s=M(o.useState(7),2),c=s[0],f=s[1],d=M(o.useState(null),2),h=d[0],S=d[1],w=M(o.useState([]),2),_=w[0],N=w[1],j=o.useCallback(R((function(){var e;return k(this,(function(r){switch(r.label){case 0:S(null);return[4,p(n.id,c,_)];case 1:e=r.sent();S(e);return[2]}}))})),[c,n.id,_]);o.useEffect((function(){j()}),[j]);var L=(0,l.e7)([b.Z],(function(){var e=b.Z.getHighestRole(n);return i()(n.roles).sortBy((function(e){return e.position})).filter((function(e){return e.id!==n.id})).filter((function(r){return b.Z.isRoleHigher(n,e,r)})).value()})).map((function(e){var n=e.id;return{label:e.name,value:n}}));return(0,t.jsxs)(g.Y0,{transitionState:r,children:[(0,t.jsx)(g.xB,{separator:!1,children:(0,t.jsxs)(u.X6,{variant:"heading-lg/semibold",children:[E.Z.Messages.PRUNE_MEMBERS,"—",null!=n?n.toString():""]})}),(0,t.jsxs)("div",{className:x().content,children:[(0,t.jsx)(u.xJ,{title:E.Z.Messages.FORM_LABEL_LAST_SEEN,children:(0,t.jsx)(u.Ee,{value:c,
options:[{name:E.Z.Messages.LAST_SEEN.format({days:7}),value:7},{name:E.Z.Messages.LAST_SEEN.format({days:30}),value:30}],onChange:function(e){var n=e.value;f(n)},className:x().spacing})}),(0,t.jsx)(u.xJ,{title:E.Z.Messages.PRUNE_WITH_ROLES,children:(0,t.jsx)(m.Z,{isMulti:!0,options:L,onChange:function(e){N(e.map((function(e){return e.value})))},value:_,multiValueRenderer:function(e){var r=e.value,o=n.getRole(r);if(null==o)return null;var a=_.indexOf(r);return(0,t.jsx)(v.U,{className:x().role,role:o,canRemove:!0,onRemove:function(){N(A(_.slice(0,a)).concat(A(_.slice(a+1))))},guildId:n.id})},maxMenuHeight:200})}),(0,t.jsx)(u.R9,{type:u.R9.Types.DESCRIPTION,className:x().spacing,children:_.length>0?E.Z.Messages.FORM_HELP_LAST_SEEN_WITH_ROLES_1.format({members:h,days:c}):E.Z.Messages.FORM_HELP_LAST_SEEN_1.format({members:h,days:c})})]}),(0,t.jsxs)(g.mz,{children:[(0,t.jsx)(u.zx,{onClick:function(){y(n.id,c,_);a()},children:E.Z.Messages.PRUNE}),(0,t.jsx)(u.zx,{look:u.zx.Looks.LINK,
color:u.zx.Colors.PRIMARY,onClick:a,children:E.Z.Messages.CANCEL})]})]})}}}]);
//# sourceMappingURL=949cfb151a92bb8b41d0.js.map