"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[99749],{674981:(t,e,n)=>{n.d(e,{Z:()=>p});var r=n(173436),o=n(832691),i=n(824756),a=n(461061);function c(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){n(t);return}c.done?e(l):Promise.resolve(l).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,l,"next",t)}function l(t){c(i,r,o,a,l,"throw",t)}a(void 0)}))}}var u=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){
case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},s=new o.Z("CloudSync"),f=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);this.message=e};function p(t,e){return d.apply(this,arguments)}function d(){d=l((function(t,e){var n,o,c,l=arguments;return u(this,(function(u){switch(u.label){case 0:n=l.length>2&&void 0!==l[2]?l[2]:null;r.Z.dispatch({type:"GAME_CLOUD_SYNC_START",applicationId:t,branchId:e});u.label=1;case 1:
u.trys.push([1,3,,4]);return[4,i.j(t,e,n)];case 2:if((o=u.sent()).type===a.QCD.CONFLICT){r.Z.dispatch({type:"GAME_CLOUD_SYNC_CONFLICT",applicationId:t,branchId:e,next:o.next,remote:o.remote});throw new f("Conflict in cloud sync.")}o.type!==a.QCD.PULL&&o.type!==a.QCD.PUSH||s.info("Sync complete",o);return[3,4];case 3:if((c=u.sent())instanceof f)throw c;r.Z.dispatch({type:"GAME_CLOUD_SYNC_ERROR",applicationId:t,branchId:e});s.error("Failed to cloud sync:",c);throw new Error("Failed to cloud sync.");case 4:r.Z.dispatch({type:"GAME_CLOUD_SYNC_COMPLETE",applicationId:t,branchId:e});return[2,o]}}))}));return d.apply(this,arguments)}},836042:(t,e,n)=>{n.d(e,{$:()=>i});var r=n(112886),o=n(212033),i={binds:["mod+k","mod+t"],comboKeysBindGlobal:!0,action:function(){o.Z.hasLayers()||(0,r.$Z)();return!1}}},171826:(t,e,n)=>{n.d(e,{_:()=>a});var r=n(173436);var o=n(897576),i=n(62230),a={binds:["mod+/","mod+shift+/"],comboKeysBindGlobal:!0,action:function(){(0,o.nf)(i.J)?r.Z.dispatch({
type:"HIDE_KEYBOARD_SHORTCUTS"}):r.Z.dispatch({type:"SHOW_KEYBOARD_SHORTCUTS"});return!1}}},848828:(t,e,n)=>{n.d(e,{c:()=>h,Z:()=>y});var r=n(785893),o=(n(667294),n(294184)),i=n.n(o),a=n(78979),c=n(661505),l=n.n(c),u="up",s="right",f="down",p="left",d=function(t){var e=t.direction,n=void 0===e?u:e;return(0,r.jsx)("svg",{width:"10",height:"10",xmlns:"http://www.w3.org/2000/svg",className:i()(l().bindArrow,l()[n]),children:(0,r.jsx)("g",{fill:"#FFFFFF",children:(0,r.jsx)("polygon",{transform:"translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) ",points:"4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10"})})})},h={mod:function(){return a.Z.modKey},alt:function(){return a.Z.altKey},up:function(){return(0,r.jsx)(d,{direction:u})},down:function(){return(0,r.jsx)(d,{direction:f})},left:function(){return(0,r.jsx)(d,{direction:p})},right:function(){return(0,r.jsx)(d,{direction:s})},
pageup:function(){return"page up"},pagedown:function(){return"page down"},"any-character":function(){return"any key"},plus:function(){return"+"},return:function(){return a.Z.returnKey}};const y=function(t){var e=t.shortcut,n=t.className,o=t.keyClassName,a=Array.isArray(e)?e:e.split("+");return(0,r.jsx)("div",{className:i()(l().keybindShortcut,n),children:a.map((function(t){return null!=h[t]?h[t]():t})).map((function(t,e){return(0,r.jsx)("span",{className:i()(l().key,o),children:t},e)}))})}},62230:(t,e,n)=>{n.d(e,{J:()=>r});var r="KEYBOARD_SHORTCUT_MODAL_KEY"},112886:(t,e,n)=>{n.d(e,{$Z:()=>x,Cp:()=>D,yC:()=>j,tF:()=>U,Se:()=>k});var r=n(173436),o=n(642400),i=n(8062),a=n(804626),c=n(404168),l=n(416533),u=n(672549),s=n(510174),f=n(53551),p=n(356004),d=n(800539),h=n(379822),y=n(971738),b=n(932847),_=n(532497),C=n(215390),v=n(461061),O=n(35236);function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(t,e,n){
e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){g(t,e,n[e])}))}return t}function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done);a=!0){i.push(r.value);if(e&&i.length===e)break}}catch(t){c=!0;o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name)
;if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I,T=function(){return Promise.resolve()},N=n(905435);T=N.playApplication;var w=Object.freeze((g(I={},c.xQ.USER,c.h8.USER),g(I,c.xQ.TEXT_CHANNEL,c.h8.TEXT_CHANNEL),g(I,c.xQ.VOICE_CHANNEL,c.h8.VOICE_CHANNEL),g(I,c.xQ.GUILD,c.h8.GUILD),g(I,c.xQ.APPLICATION,c.h8.APPLICATION),I)),A=new RegExp("^".concat(c.xQ.USER,"|").concat(c.xQ.TEXT_CHANNEL,"|").concat(c.xQ.VOICE_CHANNEL,"|\\").concat(c.xQ.GUILD,"|\\").concat(c.xQ.APPLICATION));function L(t){var e=S(function(t){var e,n=t.charAt(0),r=null!==(e=w[n])&&void 0!==e?e:null;return[t.replace(A,""),r]}(t),2);return{query:e[0],queryMode:e[1]}}function R(t){if(!C.Z.isOpen()){var e,n=y.Z.getGuildId(),r=h.Z.getChannelId(n);if(null!=r){
var o=p.Z.getChannel(r);e=null!=o?o.type:null}b.default.track(v.rMx.QUICKSWITCHER_OPENED,{source:t,current_guild_id:n,current_channel_id:r,current_channel_type:e})}}function P(t,e){var n=C.Z.getProps(),r=n.results,o=n.queryMode,i=n.query,a=n.maxQueryLength,l=y.Z.getGuildId(),u=h.Z.getChannelId(l),s=r[(0,c.gJ)(c.a8.DOWN,-1,r)],d=_.Z.isEmail(i),v=_.Z.isPhoneNumber(i),m=_.Z.isUserTagLike(i),g=null!=u&&(0,O.AB)(u),E={current_channel_id:g?void 0:u,current_channel_static_route:g?u:void 0,current_guild_id:l,query_mode:null!=o?o:"GENERAL",query_length:i.length,max_query_length:a,is_email_like:d,is_phone_like:v,is_username_like:m,query:d||v||m?null:i,top_result_type:null!=s?s.type:null,top_result_score:null!=s?s.score:null,num_results_total:C.Z.getResultTotals(),num_results_users:C.Z.getResultTotals(c.h8.USER),num_results_text_channels:C.Z.getResultTotals(c.h8.TEXT_CHANNEL),num_results_voice_channels:C.Z.getResultTotals(c.h8.VOICE_CHANNEL),num_results_guilds:C.Z.getResultTotals(c.h8.GUILD),
num_results_group_dms:C.Z.getResultTotals(c.h8.GROUP_DM)};if(null!=u){var S=p.Z.getChannel(u);E.current_channel_type=null!=S?S.type:null}if(null!=e){var I=e.type,T=e.score,N=e.record;E.selected_type=I;E.selected_score=T;E.selected_index=r.indexOf(e);switch(I){case c.h8.GUILD:E.selected_guild_id=N.id;break;case c.h8.TEXT_CHANNEL:case c.h8.VOICE_CHANNEL:N instanceof f.Sf&&(E.selected_guild_id=null!=N.guild_id?N.guild_id:null);E.selected_channel_id=N.id;break;case c.h8.GROUP_DM:E.selected_channel_id=N.id;break;case c.h8.USER:E.selected_user_id=N.id}}b.default.track(t,E)}function Z(){r.Z.dispatch({type:"QUICKSWITCHER_HIDE"})}function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"KEYBIND",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";R(t);r.Z.dispatch(E({type:"QUICKSWITCHER_SHOW"},L(e)))}function D(){P(v.rMx.QUICKSWITCHER_CLOSED);Z()}function j(t){r.Z.dispatch(E({type:"QUICKSWITCHER_SEARCH"},L(t)))}function U(t){r.Z.dispatch({type:"QUICKSWITCHER_SELECT",
selectedIndex:t})}function k(t){Z();P(v.rMx.QUICKSWITCHER_RESULT_SELECTED,t);var e,n=t.type,f=t.record,h={page:v.ZY5.QUICK_SWITCHER};switch(n){case c.h8.GUILD:(0,s.X)(f.id);break;case c.h8.TEXT_CHANNEL:null!=(e=p.Z.getChannel(f.id))&&(0,u.Kh)(e.id,{state:{analyticsSource:h}});break;case c.h8.VOICE_CHANNEL:null!=(e=p.Z.getChannel(f.id))&&a.default.selectVoiceChannel(f.id);break;case c.h8.USER:o.Z.openPrivateChannel([f.id]);i.Z.channelListScrollTo(v.ME,f.id);break;case c.h8.GROUP_DM:(0,u.Kh)(f.id);i.Z.channelListScrollTo(v.ME,f.id);break;case c.h8.APPLICATION:var y=d.Z.getActiveLibraryApplication(f.id);T(f.id,y,{analyticsParams:{source:v.Sbl.QUICK_SWITCHER,location:v.Sbl.QUICK_SWITCHER}});break;case c.h8.LINK:(0,l.Z)(f.path)}r.Z.dispatch({type:"QUICKSWITCHER_SWITCH_TO",result:t})}},604943:(t,e,n)=>{n.d(e,{Z:()=>g});var r=n(363010),o=n(173436),i=n(674981),a=n(800539),c=n(73462),l=n(57203),u=n(742269),s=n(824756),f=n(461061);function p(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t){d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return d(t)}function h(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t,e){y=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return y(t,e)}var b,_,C,v=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
;return h(this,n)}}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&y(t,e)}(n,t);var e=O(n);function n(){p(this,n);return e.apply(this,arguments)}var r=n.prototype;r.initialize=function(){u.FB&&s.S();b={};_=new Set;C=[]};r.getState=function(t,e){var n=(0,l.Tu)(t,e);return b[n]};r.isSyncing=function(t,e){var n=(0,l.Tu)(t,e);return _.has(n)};r.__getLocalVars=function(){return{syncStates:b,syncingComboIds:_,lastSeenDiscordApplicationIds:C}};return n}(r.ZP.Store);m.displayName="CloudSyncStore";const g=new m(o.Z,{GAME_CLOUD_SYNC_START:function(t){var e=t.applicationId,n=t.branchId,r=(0,l.Tu)(e,n);_.add(r)},GAME_CLOUD_SYNC_UPDATE:function(t){var e=t.state,n=!0,r=!1,o=void 0;try{for(var i,a=Object.keys(e)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=i.value;b[c]=e[c]}}catch(t){r=!0;o=t}finally{try{
n||null==a.return||a.return()}finally{if(r)throw o}}},GAME_CLOUD_SYNC_COMPLETE:function(t){var e=t.applicationId,n=t.branchId,r=(0,l.Tu)(e,n);_.delete(r);b[r]={type:f.TzF.DONE,timestamp:Date.now()};return!0},GAME_CLOUD_SYNC_CONFLICT:function(t){var e=t.applicationId,n=t.branchId,r=t.next,o=t.remote,i=(0,l.Tu)(e,n);b[i]={type:f.TzF.CONFLICT,next:r,remote:o};_.delete(i)},GAME_CLOUD_SYNC_ERROR:function(t){var e=t.applicationId,n=t.branchId,r=(0,l.Tu)(e,n);b[r]={type:f.TzF.ERROR};_.delete(r)},RUNNING_GAMES_CHANGE:function(){var t=c.ZP.getRunningDiscordApplicationIds(),e=C.filter((function(e){return!t.includes(e)})),n=!0,r=!1,l=void 0;try{for(var u,s=function(){var t=u.value,e=a.Z.getActiveLibraryApplication(t);if(null==e)return"continue";o.Z.wait((function(){try{i.Z(e.id,e.branchId)}catch(t){}}))},f=e[Symbol.iterator]();!(n=(u=f.next()).done);n=!0)s()}catch(t){r=!0;l=t}finally{try{n||null==f.return||f.return()}finally{if(r)throw l}}C=t;return!1}})},824756:(t,e,n)=>{n.d(e,{S:()=>v,j:()=>m})
;var r=n(675860),o=n(173436),i=n(832691),a=n(861967),c=n(631134),l=n(134734),u=n(57203),s=n(742269),f=n(588641),p=n(461061);function d(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){n(t);return}c.done?e(l):Promise.resolve(l).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){d(i,r,o,a,c,"next",t)}function c(t){d(i,r,o,a,c,"throw",t)}a(void 0)}))}}var y,b=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{
value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function _(){if(null==y)throw new Error("Initialize cloud sync module before syncing.");return y}function C(){return s.FB&&((0,s.id)()||(0,s.ED)())}function v(){return O.apply(this,arguments)}function O(){return(O=h((function(){var t;return b(this,(function(e){switch(e.label){case 0:if(null!=y)return[2];if(!C()){new i.Z("CloudSyncUtils").warn("CloudSync is not supported on this platform");return[2]}return[4,f.default.ensureModule("discord_cloudsync")];case 1:e.sent()
;t=f.default.getCloudSync();(y=new t).on("state",(function(t){return o.Z.dispatch({type:"GAME_CLOUD_SYNC_UPDATE",state:t})}));return[2]}}))}))).apply(this,arguments)}function m(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!l.Z.supportsCloudSync(t,e))return Promise.resolve({type:p.QCD.NONE});var o,i=_(),s=l.Z.getState(t,e);if(null==s)throw new Error("No dispatch state for ".concat(t,":").concat(e));var f=null!==(o=s.storage)&&void 0!==o?o:{},d=(0,u.Tu)(t,e),h=c.default.getToken();if(null==h)throw new Error("Cannot use cloud sync when not authenticated.");var y=null!=s.installPath?(0,a.Z)(s.installPath):null;if(null==y)throw new Error("No install path for ".concat(t,":").concat(e));var b=c.default.getId(),C={forceHash:n,manifestPath:p.SRg.STORAGE_MANIFEST(y,b),roots:null!=f.roots?f.roots:[{id:p.SRg.ROOT_ID,paths:Object.keys(p.SRg.ROOT_PLATFORMS).map((function(t){return{platform:t,path:p.SRg.ROOT_STORAGE_PATH(y,b)}})),patterns:p.SRg.ROOT_PATTERN}],storage:{
baseURL:"".concat(r.Z.getAPIBaseURL()).concat(p.ANM.APPLICATION_STORAGE(t,e)),token:h},replacements:{INSTALLDIR:p.SRg.INSTALL_DIR(y),USERID:b,BRANCHID:e}};return i.sync(d,C)}},905435:(t,e,n)=>{n.r(e);n.d(e,{installApplication:()=>X,performDefaultLibraryApplicationAction:()=>tt,playApplication:()=>U,repairApplication:()=>$,updateApplication:()=>J});var r=n(36347),o=n(785893),i=n(667294),a=n(730381),c=n.n(a),l=n(363010),u=n(331535),s=n(674981),f=n(881548),p=n(367124),d=n(604943),h=n(487502),y=n(67416),b=n(897576),_=n(932847),C=n(461061),v=n(959797),O=n(184804),m=n.n(O),g=n(380203),E=n.n(g);function S(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){n(t);return}c.done?e(l):Promise.resolve(l).then(r,o)}function I(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){S(i,r,o,a,c,"next",t)}function c(t){S(i,r,o,a,c,"throw",t)}a(void 0)}))}}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function N(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function w(t){w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return w(t)}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){N(t,e,n[e])}))}return t}function L(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function R(t,e){R=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return R(t,e)}var P=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function Z(t){var e=function(){
if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=w(t);if(e){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return L(this,n)}}var x=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0]
;continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&R(t,e)}(n,t);var e=Z(n);function n(){T(this,n);var t;(t=e.apply(this,arguments)).onClose=function(){t.props.onClose()};t.handlePlay=function(){
var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=t.props,o=r.libraryApplication,i=r.analyticsParams;t.onClose();U(o.id,o,{analyticsParams:i,cloudSync:e,cloudSyncForceHash:n})};t.handleChooseDownload=function(){var e=t.props.cloudSyncState;e.type===C.TzF.CONFLICT&&t.handlePlay(!0,e.remote.hash)};t.handleChooseUpload=function(){var e=t.props.cloudSyncState;e.type===C.TzF.CONFLICT&&t.handlePlay(!0,e.next.hash)};return t}var r=n.prototype;r.renderConflictButton=function(t,e,n,r){return(0,o.jsxs)(u.zx,{className:m().conflictButton,innerClassName:m().conflictButtonInner,onClick:r,children:[(0,o.jsx)("div",{className:n}),(0,o.jsxs)("div",{className:m().buttonBody,children:[(0,o.jsx)("div",{className:m().conflictTitle,children:t}),(0,o.jsx)("div",{children:v.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_LAST_MODIFIED}),(0,o.jsx)("div",{className:m().timestamp,children:c()(e).calendar()})]})]})};r.renderError=function(){
var t=this,e=this.props.application;return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsxs)(y.hz,{children:[(0,o.jsx)(h.Z,{justify:h.Z.Justify.CENTER,children:(0,o.jsx)("div",{className:m().errorArt})}),(0,o.jsx)("div",{className:m().description,children:v.Z.Messages.CLOUD_SYNC_MODAL_ERROR_DESCRIPTION.format({applicationName:e.name})})]}),(0,o.jsx)(y.mz,{children:(0,o.jsxs)(h.Z,{justify:h.Z.Justify.BETWEEN,children:[(0,o.jsx)(u.zx,{className:m().linkButton,size:m().linkButtonSize,look:u.zx.Looks.LINK,color:u.zx.Colors.PRIMARY,onClick:this.onClose,children:v.Z.Messages.CANCEL}),(0,o.jsxs)(h.Z,{direction:h.Z.Direction.HORIZONTAL,justify:h.Z.Justify.END,children:[(0,o.jsx)(u.zx,{look:u.zx.Looks.LINK,color:u.zx.Colors.PRIMARY,onClick:function(){return t.handlePlay()},className:m().retryButton,children:v.Z.Messages.RETRY}),(0,o.jsx)(u.zx,{onClick:function(){return t.handlePlay(!1)},children:v.Z.Messages.GAME_ACTION_BUTTON_PLAY})]})]})})]})};r.renderConflict=function(){
var t=this.props,e=t.application,n=t.cloudSyncState;if(n.type!==C.TzF.CONFLICT)throw new Error("Cannot render conflict for non conflict type");return(0,o.jsxs)(y.hz,{className:E().marginBottom20,children:[(0,o.jsx)("div",{className:m().description,children:v.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_DESCRIPTION.format({applicationName:e.name})}),this.renderConflictButton(v.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_DOWNLOAD,n.remote.timestamp,m().conflictDownloadArt,this.handleChooseDownload),(0,o.jsxs)(h.Z,{className:m().choiceWrapper,align:h.Z.Align.CENTER,children:[(0,o.jsx)("div",{className:m().choiceLine}),(0,o.jsx)("div",{className:m().choiceTitle,children:v.Z.Messages.CLOUD_SYNC_MODAL_OR}),(0,o.jsx)("div",{className:m().choiceLine})]}),this.renderConflictButton(v.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_CHOICE_UPLOAD,n.next.timestamp,m().conflictUploadArt,this.handleChooseUpload)]})};r.render=function(){
var t=this.props,e=t.cloudSyncState,n=t.transitionState,r=e.type===C.TzF.CONFLICT?v.Z.Messages.CLOUD_SYNC_MODAL_CONFLICT_HEADER:v.Z.Messages.CLOUD_SYNC_MODAL_ERROR_HEADER;return(0,o.jsxs)(y.Y0,{transitionState:n,className:m().modal,"aria-label":r,children:[(0,o.jsxs)(y.xB,{separator:!1,children:[(0,o.jsx)(y.ol,{className:m().closeButton,onClick:this.onClose}),(0,o.jsx)(u.vw,{tag:"h2",className:E().marginReset,children:r})]}),e.type===C.TzF.CONFLICT?this.renderConflict():this.renderError()]})};return n}(i.PureComponent),j=l.ZP.connectStores([d.Z,p.Z],(function(t){var e=t.libraryApplication,n=t.branchId;return{cloudSyncState:d.Z.getState(e.id,n),application:p.Z.getGame(e.id)}}))(D);function U(t,e,n){return k.apply(this,arguments)}function k(){return(k=I((function(t,e,n){var r,i,a,c,l,u,d;return x(this,(function(h){switch(h.label){case 0:if(null==(r=p.Z.getGame(t)))return[2];i=n.cloudSync,a=void 0===i||i,c=n.cloudSyncForceHash,l=void 0===c?null:c,u=n.analyticsParams
;if(!a||null==e)return[3,4];d=e.branchId;h.label=1;case 1:h.trys.push([1,3,,4]);return[4,s.Z(e.id,d,l)];case 2:h.sent();return[3,4];case 3:h.sent();(0,b.h7)((function(t){return(0,o.jsx)(j,A({libraryApplication:e,analyticsParams:u,branchId:d},t))}));return[2];case 4:_.default.track(C.rMx.APPLICATION_OPENED,A({application_id:r.id,application_name:r.name,type:C.q5t.LAUNCH,distributor:null!=e?e.getDistributor():null},u));return[2,f.Z.launch(r.id,null==e?void 0:e.branchId)]}}))}))).apply(this,arguments)}var M=n(133840),H=n(286283),G=n(134734),F=n(937689),B=n(400055),Y=n(664252);function K(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){n(t);return}c.done?e(l):Promise.resolve(l).then(r,o)}function Q(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){K(i,r,o,a,c,"next",t)}function c(t){K(i,r,o,a,c,"throw",t)}a(void 0)}))}}function z(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0
}):t[e]=n;return t}function W(t,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}var q=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i
;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;r=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function V(t,e,i,a,c){var l=Y.Z.getInstallationPath(t.id,e),u=null!=t.eulaId&&!B.Z.hasAcceptedEULA(t.eulaId);null==l||u?(0,b.ZD)(Q((function(){var r,i;return q(this,(function(a){switch(a.label){case 0:return[4,Promise.all([n.e(40532),n.e(37990),n.e(35666),n.e(54327),n.e(51912),n.e(30620),n.e(37650),n.e(56943)]).then(n.bind(n,356943))];case 1:r=a.sent(),i=r.default;return[2,function(n){return(0,o.jsx)(i,W(function(t){for(var e=1;e<arguments.length;e++){
var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){z(t,e,n[e])}))}return t}({},n),{applicationId:t.id,branchId:e,analyticsLocation:c}))}]}}))}))):(0,r.LO)({application:t,branchId:e,buildId:i,manifestIds:a,installationPath:l,analyticsLocation:c})}function X(t,e,n){var r=p.Z.getGame(t);if(null!=r){var o=M.Z.getTargetBuildId(r.id,e),i=M.Z.getTargetManifests(r.id,e);null!=o&&null!=i&&null!=V&&V(r,e,o,i,n)}}function J(t,e){var n=p.Z.getGame(t);if(null!=n)return r.li(n,e,M.Z.getTargetBuildId(n.id,e),M.Z.getTargetManifests(n.id,e))}function $(t,e,n){var o=p.Z.getGame(t);if(null!=o)return r.cG(o,e,n)}function tt(t,e){var n=(0,H.i)(t,G.Z,F.Z),r=e.analyticsParams;switch(n){case C.apO.PLAY:return U(t.id,t,{analyticsParams:r});case C.apO.INSTALL:return X(t.id,t.branchId,r.source);case C.apO.UPDATE:
return J(t.id,t.branchId)}}}}]);
//# sourceMappingURL=e549da88d3c71066d7f8.js.map