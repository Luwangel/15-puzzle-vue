(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],f=0,m=[];f<c.length;f++)o=c[f],i[o]&&m.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={index:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/15-puzzle-vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("08ad"),i=n.n(r);i.a},"08ad":function(e,t,n){},"0bb3":function(e,t,n){e.exports=n.p+"img/tree.d6188f98.jpg"},"0e89":function(e,t,n){"use strict";var r=n("37dd"),i=n.n(r);i.a},1068:function(e,t,n){e.exports=n.p+"img/strasbourg.538fd0a8.jpg"},1090:function(e,t,n){e.exports=n.p+"img/palm.8ddb4451.jpg"},"12ae":function(e,t,n){e.exports=n.p+"img/loading.a6ec563b.gif"},"130b":function(e,t,n){"use strict";var r=n("d01b"),i=n.n(r);i.a},"1c5e":function(e,t,n){"use strict";var r=n("3aa5"),i=n.n(r);i.a},"37dd":function(e,t,n){},"3aa5":function(e,t,n){},"3d99":function(e,t,n){"use strict";var r=n("821b"),i=n.n(r);i.a},"3fd8":function(e,t,n){"use strict";var r=n("8075"),i=n.n(r);i.a},"458c":function(e,t,n){},"496a":function(e,t,n){"use strict";var r=n("9755"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("dde3"),n("c8a0"),n("5c85");var r=n("9869"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"#app"}},[n("Menu"),n("Content")],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("div",{staticClass:"container"},[r("div",{staticClass:"logo"},[r("img",{attrs:{alt:"Vue logo",src:n("9d64")}}),r("span",[e._v(e._s(e.title))])]),r("div",{staticClass:"menu"},[r("Button",{staticClass:"menu-button",attrs:{disabled:e.loading},on:{click:function(t){e.restart()}}},[e._v(e._s(e.restartButtonText))])],1)])])},c=[],u=n("acd0"),s=n("9ce4"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:{disabled:e.disabled},on:{click:function(t){e.handleClick()},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.handleClick()}}},[e._t("default")],2)},f=[],m={name:"Button",props:{disabled:{type:Boolean,default:!1}},methods:{handleClick:function(){this.disabled||this.$emit("click")}}},d=m,b=(n("3fd8"),n("2be6")),p=Object(b["a"])(d,l,f,!1,null,"7d834904",null);p.options.__file="Button.vue";var v=p.exports,h={name:"MyMenu",props:{title:{type:String,default:"Play the 15 Puzzle Game"}},components:{Button:v},computed:Object(u["a"])({},Object(s["c"])({loading:function(e){return e.games.loading}}),{restartButtonText:function(){return this.loading?"Loading...":"Restart Game"}}),methods:Object(u["a"])({},Object(s["b"])({restart:"games/buildInitialGame"}))},g=h,y=(n("0e89"),Object(b["a"])(g,o,c,!1,null,"1f317d2e",null));y.options.__file="Menu.vue";var _=y.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("Game")],1)},O=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board"},[e.loading?n("section",[n("Loading")],1):e.myGame?n("div",[n("section",{staticClass:"game"},[n("Grid")],1),n("section",{staticClass:"options"},[n("Options")],1),n("section",{staticClass:"infos"},[n("Moves",{attrs:{turn:e.turn}}),n("Victory",{directives:[{name:"show",rawName:"v-show",value:e.isVictory,expression:"isVictory"}],attrs:{turn:e.turn}})],1)]):e._e()])},w=[],G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("img",{staticClass:"loading",attrs:{alt:"Loading...",src:n("12ae")}})},k=[],S={name:"Loading"},C=S,T=(n("d4f6"),Object(b["a"])(C,G,k,!1,null,"15cc6713",null));T.options.__file="Loading.vue";var N=T.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.myGame?n("div",{staticClass:"puzzle-grid"},e._l(e.currentGrid,function(t,r){return n("span",{key:r,staticClass:"flex"},e._l(t,function(t){return n("span",{key:t,staticClass:"flex"},[0===t?n("TileEmpty",{attrs:{dimensionStyle:e.myGame.dimensionStyle}}):e.isMovableTile(t)?n("Tile",{attrs:{number:t,showNumber:e.showNumbers,backgroundStyle:e.buildBackground(t),dimensionStyle:e.myGame.dimensionStyle,clickable:!0},nativeOn:{click:function(n){n.preventDefault(),e.moveTile(t)}}}):n("Tile",{attrs:{number:t,showNumber:e.showNumbers,backgroundStyle:e.buildBackground(t),dimensionStyle:e.myGame.dimensionStyle,clickable:!1}})],1)}),0)}),0):e._e()},E=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.classes,style:[e.backgroundStyle,e.dimensionStyle,{backgroundImage:e.image}]},[e.showNumber?n("span",{staticClass:"puzzle-tile-number"},[e._v(e._s(e.number))]):e._e()])},B=[],$=(n("ce9c"),{name:"Tile",props:{number:Number,showNumber:Boolean,backgroundStyle:Object,dimensionStyle:Object,clickable:Boolean},computed:Object(u["a"])({},Object(s["c"])({image:function(e){return e.settings.picture}}),{classes:function(){return{"puzzle-tile":!0,"puzzle-tile-clickable":this.clickable}}})}),V=$,L=(n("3d99"),Object(b["a"])(V,M,B,!1,null,"45be1cd9",null));L.options.__file="Tile.vue";var P=L.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"puzzle-tile",style:[e.dimensionStyle]})},I=[],A={name:"TileEmpty",props:{dimensionStyle:Object}},J=A,Y=(n("f735"),Object(b["a"])(J,R,I,!1,null,"5632be6b",null));Y.options.__file="TileEmpty.vue";var D=Y.exports,q=(n("2e73"),n("0e30"),n("08b3")),F=(n("df26"),n("c8ff")),H=(n("d2b6"),n("e285"),n("325e")),K=n.n(H),Q=2e3,U=1,W=function(e){return e[Math.floor(Math.random()*e.length)]},X=function(e){return new K.a(function(t){return setTimeout(t,e)})},Z=function(){var e=Object(F["a"])(regeneratorRuntime.mark(function e(t){var n,r,i,a,o=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:Q,r=!1,i=ie(t),a=function(){var e=Object(F["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=7;break}return t=se(i),i=de(i,W(t)),e.next=5,X(U);case 5:e.next=0;break;case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),e.next=6,K.a.race([X(n).then(function(){return r=!0,i}),new K.a(function(){return a()})]);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),ee=0,te=4,ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te;return Array(e).fill(1).map(function(t,n){return Array(e).fill(1).map(function(t,r){var i=n*e+r+1;return i===e*e?ee:i})})},re=function(){var e=Object(F["a"])(regeneratorRuntime.mark(function e(){var t,n,r,i=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:te,n=ne(t),e.next=4,Z(n);case 4:return r=e.sent,e.abrupt("return",{currentGrid:r,isVictory:!1,resolvedGrid:n,turn:0});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),ie=function(e){return e.map(function(e){return Object(q["a"])(e)})},ae=function(e,t){if(!e||!t)return!1;if(e.length!=t.length)return!1;for(var n=e.length,r=0;r<n;r++){if(e[r].length!==t[r].length)return!1;for(var i=e[r].length,a=0;a<i;a++)if(e[r][a]!==t[r][a])return!1}return!0},oe=function(e,t){return e&&t&&e.y===t.y&&e.x===t.x},ce=function(e,t){for(var n=0;n<e.length;n++){var r=e[n].findIndex(function(e){return e===t});if(-1!==r)return{y:n,x:r}}throw"The tile with value ".concat(t," doesn't exist.")},ue=function(e){return ce(e,ee)},se=function(e){var t=ue(e),n=t.y,r=t.x;return[n>0&&{y:n-1,x:r},r+1<e.length&&{y:n,x:r+1},n+1<e.length&&{y:n+1,x:r},r>0&&{y:n,x:r-1}].filter(function(e){return e})},le=function(e,t){return se(e).some(function(e){return oe(e,t)})},fe=function(e){return se(e).map(function(t){return e[t.y][t.x]})},me=function(e,t){return fe(e).some(function(e){return e===t})},de=function(e,t){if(!le(e,t))throw"The tile at coords (".concat(t.y,", ").concat(t.x,") is not movable.");var n=ue(e),r=ce(e,e[t.y][t.x]),i=ie(e);return i[n.y][n.x]=e[r.y][r.x],i[r.y][r.x]=e[n.y][n.x],i},be=function(e,t){var n=e.currentGrid,r=e.resolvedGrid,i=e.turn,a=ce(n,t),o=de(n,a),c=ae(o,r);return{currentGrid:o,resolvedGrid:r,isVictory:c,turn:i+1}},pe=2,ve=100,he=500,ge=60,ye=function(e){var t=e.length>0?100/e.length:0,n={};return e.forEach(function(e,r){e.forEach(function(e,i){n[e]="".concat(t*i,"% ").concat(t*r,"%")})}),n},_e=function(e,t){return e/(t+1)},xe=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"px";return{backgroundPosition:t,backgroundSize:"".concat((e+1)*n).concat(r)}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return{height:"".concat(e).concat(t),margin:"".concat(pe,"px"),width:"".concat(e).concat(t)}},je=function(e){return e?"vh":"px"},we=function(e,t){var n=_e(e?ge:he,t),r=Oe(n,je(e));return{dimensionStyle:r,tileSize:n}},Ge=function(e,t,n,r){return xe(t,n,r,je(e))},ke={name:"Grid",components:{Tile:P,TileEmpty:D},computed:Object(u["a"])({},Object(s["c"])({myGame:function(e){return e.games.myGame},currentGrid:function(e){return e.games.myGame&&e.games.myGame.currentGrid},isVictory:function(e){return e.games.myGame&&e.games.myGame.isVictory},showNumbers:function(e){return e.settings.showNumbers}})),methods:Object(u["a"])({},Object(s["b"])({moveTile:"games/moveTile"}),{buildBackground:function(e){return Ge(!0,this.myGame.size,this.myGame.imageCoords[e],this.myGame.tileSize)},isMovableTile:function(e){return!this.isVictory&&me(this.currentGrid,e)}})},Se=ke,Ce=(n("e9c0"),Object(b["a"])(Se,z,E,!1,null,"7b3059ab",null));Ce.options.__file="Grid.vue";var Te,Ne=Ce.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"victory"},[e._v(e._s(e.victoryTextByLevel))])])},Ee=[],Me=n("ce72"),Be=1,$e=2,Ve=3,Le=4,Pe=function(e){return e<80?Be:e<120?$e:e<180?Ve:Le},Re=(Te={},Object(Me["a"])(Te,Be,"Congrats, you are now the 15 Puzzle master!"),Object(Me["a"])(Te,$e,"You are a champion!"),Object(Me["a"])(Te,Ve,"Bravo, you played well."),Object(Me["a"])(Te,Le,"You finally finished"),Te),Ie={name:"Victory",props:{turn:Number},computed:{victoryTextByLevel:function(){return"Victory! ".concat(Re[Pe(this.turn)])}}},Ae=Ie,Je=(n("1c5e"),Object(b["a"])(Ae,ze,Ee,!1,null,"886aa7f4",null));Je.options.__file="Victory.vue";var Ye=Je.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{class:e.classes},[e._v(e._s(e.label))])])},qe=[],Fe={name:"Moves",props:{turn:Number},computed:{label:function(){switch(this.turn){case 0:return"Start the game by clicking on a tile";case 1:return"".concat(this.turn," move");default:return"".concat(this.turn," moves")}},classes:function(){var e=Pe(this.turn);return{start:e===Le,bad:e===Le,normal:e===Ve,good:e===$e,perfect:e===Be}}}},He=Fe,Ke=(n("b1d3"),Object(b["a"])(He,De,qe,!1,null,"081ab461",null));Ke.options.__file="Moves.vue";var Qe=Ke.exports,Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Checkbox",{attrs:{checked:e.showNumbers,label:"Show numbers"},on:{change:e.setShowNumbers}})],1)},We=[],Xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"container"},[n("span",{staticClass:"label"},[e._v(e._s(e.label))]),n("input",{attrs:{type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){e.$emit("change",t.target.value)}}}),n("span",{staticClass:"checkmark"})])},Ze=[],et={name:"Checkbox",props:{checked:Boolean,label:String}},tt=et,nt=(n("496a"),Object(b["a"])(tt,Xe,Ze,!1,null,"16e0c14c",null));nt.options.__file="Checkbox.vue";var rt=nt.exports,it={name:"Options",components:{Checkbox:rt},computed:Object(u["a"])({},Object(s["c"])({showNumbers:function(e){return e.settings.showNumbers}})),methods:Object(u["a"])({},Object(s["b"])({setShowNumbers:"settings/setShowNumbers"}))},at=it,ot=(n("e7b2"),Object(b["a"])(at,Ue,We,!1,null,"ce86521c",null));ot.options.__file="Options.vue";var ct=ot.exports,ut={name:"Game",components:{Loading:N,Grid:Ne,Victory:Ye,Moves:Qe,Options:ct},computed:Object(u["a"])({},Object(s["c"])({myGame:function(e){return e.games.myGame},turn:function(e){return e.games.myGame?e.games.myGame.turn:-1},isVictory:function(e){return e.games.myGame&&e.games.myGame.isVictory},loading:function(e){return e.games.loading}})),methods:Object(u["a"])({},Object(s["b"])({restart:"games/buildInitialGame"})),created:function(){this.restart()}},st=ut,lt=(n("ff87"),Object(b["a"])(st,j,w,!1,null,"5b72e34b",null));lt.options.__file="Game.vue";var ft=lt.exports,mt={name:"MyContent",components:{Game:ft}},dt=mt,bt=(n("8012"),Object(b["a"])(dt,x,O,!1,null,"3614c5c0",null));bt.options.__file="Content.vue";var pt=bt.exports,vt={name:"App",components:{Menu:_,Content:pt}},ht=vt,gt=(n("034f"),n("130b"),Object(b["a"])(ht,i,a,!1,null,null,null));gt.options.__file="App.vue";var yt=gt.exports,_t=n("3821"),xt=n.n(_t),Ot=n("cac7"),jt=n.n(Ot),wt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.random();if(!jt()(e))throw Error("The list should be an array");if(t<0||t>=1)throw Error("The value random number should be a number (0 <= rand < 1)");return e[Math.floor(t*e.length)]},Gt={myGame:null,loading:!1},kt={},St={buildInitialGame:function(e){e.commit("setLoading",!0),re(te).then(function(t){t.size=te,t.imageCoords=ye(t.resolvedGrid);var n=we(!0,t.resolvedGrid.length),r=n.dimensionStyle,i=n.tileSize;t.dimensionStyle=r,t.tileSize=i,e.commit("setGame",t),e.commit("setLoading",!1)})},moveTile:function(e,t){var n=e.state.myGame,r=xt()({},n,Object(u["a"])({},be(n,t)));e.commit("setGame",r)}},Ct={setGame:function(e,t){e.myGame=t},setLoading:function(e,t){e.loading=t}},Tt={namespaced:!0,state:Gt,getters:kt,actions:St,mutations:Ct},Nt=n("4cfc"),zt=n.n(Nt),Et=n("1090"),Mt=n.n(Et),Bt=n("a906"),$t=n.n(Bt),Vt=n("1068"),Lt=n.n(Vt),Pt=n("0bb3"),Rt=n.n(Pt),It=function(e){return'url("'.concat(e,'")')},At={palm:It(Mt.a),panda:It($t.a),strasbourg:It(Lt.a),tree:It(Rt.a)},Jt=wt(zt()(At)),Yt={showNumbers:!1,picture:At[Jt]},Dt={},qt={setShowNumbers:function(e){e.commit("setShowNumbers",!e.state.showNumbers)}},Ft={setShowNumbers:function(e,t){e.showNumbers=t}},Ht={namespaced:!0,state:Yt,getters:Dt,actions:qt,mutations:Ft};r["a"].use(s["a"]);var Kt=!1,Qt=new s["a"].Store({modules:{games:Tt,settings:Ht},strict:Kt});r["a"].config.productionTip=!1,new r["a"]({store:Qt,render:function(e){return e(yt)}}).$mount("#app")},6683:function(e,t,n){},8012:function(e,t,n){"use strict";var r=n("458c"),i=n.n(r);i.a},8075:function(e,t,n){},"821b":function(e,t,n){},9755:function(e,t,n){},"9d64":function(e,t,n){e.exports=n.p+"img/logo.9d567569.png"},a906:function(e,t,n){e.exports=n.p+"img/panda.78af0e74.jpg"},aac2:function(e,t,n){},b1d3:function(e,t,n){"use strict";var r=n("6683"),i=n.n(r);i.a},bdfd:function(e,t,n){},cb1c:function(e,t,n){},d01b:function(e,t,n){},d4f6:function(e,t,n){"use strict";var r=n("fbda"),i=n.n(r);i.a},dd30:function(e,t,n){},e7b2:function(e,t,n){"use strict";var r=n("aac2"),i=n.n(r);i.a},e9c0:function(e,t,n){"use strict";var r=n("bdfd"),i=n.n(r);i.a},f735:function(e,t,n){"use strict";var r=n("cb1c"),i=n.n(r);i.a},fbda:function(e,t,n){},ff87:function(e,t,n){"use strict";var r=n("dd30"),i=n.n(r);i.a}});
//# sourceMappingURL=index.ec9b34b2.js.map