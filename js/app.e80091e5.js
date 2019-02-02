(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],f=0,m=[];f<c.length;f++)o=c[f],i[o]&&m.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/15-puzzle-vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("08ad"),i=n.n(r);i.a},"08ad":function(e,t,n){},"12ae":function(e,t,n){e.exports=n.p+"img/loading.a6ec563b.gif"},"130b":function(e,t,n){"use strict";var r=n("d01b"),i=n.n(r);i.a},"1c5e":function(e,t,n){"use strict";var r=n("3aa5"),i=n.n(r);i.a},2316:function(e,t,n){},"2e7b":function(e,t,n){"use strict";var r=n("66f7"),i=n.n(r);i.a},"38cd":function(e,t,n){},"3aa5":function(e,t,n){},"3d99":function(e,t,n){"use strict";var r=n("821b"),i=n.n(r);i.a},"3fd8":function(e,t,n){"use strict";var r=n("8075"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("dde3"),n("c8a0"),n("5c85");var r=n("9869"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"#app"}},[n("Menu"),n("Content")],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("div",{staticClass:"container"},[r("div",{staticClass:"logo"},[r("img",{attrs:{alt:"Vue logo",src:n("9d64")}}),r("span",[e._v(e._s(e.title))])]),r("div",{staticClass:"menu"},[r("Button",{staticClass:"menu-button",attrs:{disabled:e.loading},on:{click:function(t){e.restart()}}},[e._v(e._s(e.restartButtonText))])],1)])])},c=[],u=n("acd0"),s=n("9ce4"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:{disabled:e.disabled},on:{click:function(t){e.handleClick()},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.handleClick()}}},[e._t("default")],2)},f=[],m={name:"Button",props:{disabled:{type:Boolean,default:!1}},methods:{handleClick:function(){this.disabled||this.$emit("click")}}},d=m,b=(n("3fd8"),n("2be6")),p=Object(b["a"])(d,l,f,!1,null,"7d834904",null);p.options.__file="Button.vue";var v=p.exports,h={name:"MyMenu",props:{title:{type:String,default:"Play the 15 Puzzle Game"}},components:{Button:v},computed:Object(u["a"])({},Object(s["c"])({loading:function(e){return e.games.loading}}),{restartButtonText:function(){return this.loading?"Loading...":"Restart Game"}}),methods:Object(u["a"])({},Object(s["b"])({restart:"games/buildInitialGame"}))},g=h,y=(n("c748"),Object(b["a"])(g,o,c,!1,null,"63de1bf1",null));y.options.__file="Menu.vue";var _=y.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"content"}},[n("Game")],1)},O=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board"},[e.loading?n("div",[n("Loading")],1):e.myGame?n("div",[n("div",{staticClass:"section game"},[n("Grid")],1),n("div",{staticClass:"section options"},[n("Options")],1),n("div",{staticClass:"section infos"},[n("Moves",{attrs:{turn:e.turn}}),n("Victory",{directives:[{name:"show",rawName:"v-show",value:e.isVictory,expression:"isVictory"}],attrs:{turn:e.turn}})],1)]):e._e()])},j=[],G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{staticClass:"loading",attrs:{alt:"Loading...",src:n("12ae")}})])}],S={name:"Loading"},C=S,T=(n("2e7b"),Object(b["a"])(C,G,k,!1,null,"825d338a",null));T.options.__file="Loading.vue";var N=T.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.myGame?n("div",{staticClass:"puzzle-grid"},e._l(e.currentGrid,function(t,r){return n("span",{key:r,staticClass:"flex"},e._l(t,function(t){return n("span",{key:t,staticClass:"flex"},[0===t?n("TileEmpty",{attrs:{dimensionStyle:e.myGame.dimensionStyle}}):e.isMovableTile(t)?n("Tile",{attrs:{number:t,showNumber:e.showNumbers,backgroundStyle:e.buildBackground(t),dimensionStyle:e.myGame.dimensionStyle,clickable:!0},nativeOn:{click:function(n){n.preventDefault(),e.moveTile(t)}}}):n("Tile",{attrs:{number:t,showNumber:e.showNumbers,backgroundStyle:e.buildBackground(t),dimensionStyle:e.myGame.dimensionStyle,clickable:!1}})],1)}),0)}),0):e._e()},E=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.classes,style:[e.backgroundStyle,e.dimensionStyle,{backgroundImage:e.image}]},[e.showNumber?n("span",{staticClass:"puzzle-tile-number"},[e._v(e._s(e.number))]):e._e()])},$=[],B=(n("ce9c"),{name:"Tile",props:{number:Number,showNumber:Boolean,backgroundStyle:Object,dimensionStyle:Object,clickable:Boolean},computed:Object(u["a"])({},Object(s["c"])({image:function(e){return e.settings.picture}}),{classes:function(){return{"puzzle-tile":!0,"puzzle-tile-clickable":this.clickable}}})}),V=B,L=(n("3d99"),Object(b["a"])(V,M,$,!1,null,"45be1cd9",null));L.options.__file="Tile.vue";var P=L.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"puzzle-tile",style:[e.dimensionStyle]})},I=[],A={name:"TileEmpty",props:{dimensionStyle:Object}},J=A,Y=(n("f735"),Object(b["a"])(J,R,I,!1,null,"5632be6b",null));Y.options.__file="TileEmpty.vue";var D=Y.exports,q=(n("0e30"),n("08b3")),F=(n("df26"),n("c8ff")),H=(n("d2b6"),n("2e73"),n("e285"),n("325e")),K=n.n(H),Q=2e3,U=1,W=function(e){return e[Math.floor(Math.random()*e.length)]},X=function(e){return new K.a(function(t){return setTimeout(t,e)})},Z=function(){var e=Object(F["a"])(regeneratorRuntime.mark(function e(t){var n,r,i,a,o=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:Q,r=!1,i=ie(t),a=function(){var e=Object(F["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=7;break}return t=se(i),i=de(i,W(t)),e.next=5,X(U);case 5:e.next=0;break;case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),e.next=6,K.a.race([X(n).then(function(){return r=!0,i}),new K.a(function(){return a()})]);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),ee=0,te=4,ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te;return Array(e).fill(1).map(function(t,n){return Array(e).fill(1).map(function(t,r){var i=n*e+r+1;return i===e*e?ee:i})})},re=function(){var e=Object(F["a"])(regeneratorRuntime.mark(function e(){var t,n,r,i=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:te,n=ne(t),e.next=4,Z(n);case 4:return r=e.sent,e.abrupt("return",{currentGrid:r,isVictory:!1,resolvedGrid:n,turn:0});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),ie=function(e){return e.map(function(e){return Object(q["a"])(e)})},ae=function(e,t){if(!e||!t)return!1;if(e.length!=t.length)return!1;for(var n=e.length,r=0;r<n;r++){if(e[r].length!==t[r].length)return!1;for(var i=e[r].length,a=0;a<i;a++)if(e[r][a]!==t[r][a])return!1}return!0},oe=function(e,t){return e&&t&&e.y===t.y&&e.x===t.x},ce=function(e,t){for(var n=0;n<e.length;n++){var r=e[n].findIndex(function(e){return e===t});if(-1!==r)return{y:n,x:r}}throw"The tile with value ".concat(t," doesn't exist.")},ue=function(e){return ce(e,ee)},se=function(e){var t=ue(e),n=t.y,r=t.x;return[n>0&&{y:n-1,x:r},r+1<e.length&&{y:n,x:r+1},n+1<e.length&&{y:n+1,x:r},r>0&&{y:n,x:r-1}].filter(function(e){return e})},le=function(e,t){return se(e).some(function(e){return oe(e,t)})},fe=function(e){return se(e).map(function(t){return e[t.y][t.x]})},me=function(e,t){return fe(e).some(function(e){return e===t})},de=function(e,t){if(!le(e,t))throw"The tile at coords (".concat(t.y,", ").concat(t.x,") is not movable.");var n=ue(e),r=ce(e,e[t.y][t.x]),i=ie(e);return i[n.y][n.x]=e[r.y][r.x],i[r.y][r.x]=e[n.y][n.x],i},be=function(e,t){var n=e.currentGrid,r=e.resolvedGrid,i=e.turn,a=ce(n,t),o=de(n,a),c=ae(o,r);return{currentGrid:o,resolvedGrid:r,isVictory:c,turn:i+1}},pe=2,ve=100,he=500,ge=60,ye=function(e,t){return e/(t+1)},_e=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"px";return{backgroundPosition:t,backgroundSize:"".concat((e+1)*n).concat(r)}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return{height:"".concat(e).concat(t),margin:"".concat(pe,"px"),width:"".concat(e).concat(t)}},Oe=function(e){return e?"vh":"px"},we=function(e,t){var n=ye(e?ge:he,t),r=xe(n,Oe(e));return{dimensionStyle:r,tileSize:n}},je=function(e,t,n,r){return _e(t,n,r,Oe(e))},Ge={name:"Grid",components:{Tile:P,TileEmpty:D},computed:Object(u["a"])({},Object(s["c"])({myGame:function(e){return e.games.myGame},currentGrid:function(e){return e.games.myGame&&e.games.myGame.currentGrid},isVictory:function(e){return e.games.myGame&&e.games.myGame.isVictory},showNumbers:function(e){return e.settings.showNumbers}})),methods:Object(u["a"])({},Object(s["b"])({moveTile:"games/moveTile"}),{buildBackground:function(e){return je(!0,this.myGame.size,this.myGame.imageCoords[e],this.myGame.tileSize)},isMovableTile:function(e){return!this.isVictory&&me(this.currentGrid,e)}})},ke=Ge,Se=(n("cb48"),Object(b["a"])(ke,z,E,!1,null,"33f8fcfa",null));Se.options.__file="Grid.vue";var Ce,Te=Se.exports,Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"victory"},[e._v(e._s(e.victoryTextByLevel))])])},ze=[],Ee=n("ce72"),Me=1,$e=2,Be=3,Ve=4,Le=function(e){return e<80?Me:e<120?$e:e<180?Be:Ve},Pe=(Ce={},Object(Ee["a"])(Ce,Me,"Congrats, you are now the 15 Puzzle master!"),Object(Ee["a"])(Ce,$e,"You are a champion!"),Object(Ee["a"])(Ce,Be,"Bravo, you played well."),Object(Ee["a"])(Ce,Ve,"You finally finished"),Ce),Re={name:"Victory",props:{turn:Number},computed:{victoryTextByLevel:function(){return"Victory! ".concat(Pe[Le(this.turn)])}}},Ie=Re,Ae=(n("1c5e"),Object(b["a"])(Ie,Ne,ze,!1,null,"886aa7f4",null));Ae.options.__file="Victory.vue";var Je=Ae.exports,Ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{class:e.classes},[e._v(e._s(e.label))])])},De=[],qe={name:"Moves",props:{turn:Number},computed:{label:function(){switch(this.turn){case 0:return"Start the game by clicking on a tile";case 1:return"".concat(this.turn," move");default:return"".concat(this.turn," moves")}},classes:function(){var e=Le(this.turn);return{start:e===Ve,bad:e===Ve,normal:e===Be,good:e===$e,perfect:e===Me}}}},Fe=qe,He=(n("b1d3"),Object(b["a"])(Fe,Ye,De,!1,null,"081ab461",null));He.options.__file="Moves.vue";var Ke=He.exports,Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Checkbox",{attrs:{checked:e.showNumbers,label:"Show numbers"},on:{change:e.setShowNumbers}})],1)},Ue=[],We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"container"},[n("span",{staticClass:"label"},[e._v(e._s(e.label))]),n("input",{attrs:{type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){e.$emit("change",t.target.value)}}}),n("span",{staticClass:"checkmark"})])},Xe=[],Ze={name:"Checkbox",props:{checked:Boolean,label:String}},et=Ze,tt=(n("6407"),Object(b["a"])(et,We,Xe,!1,null,null,null));tt.options.__file="Checkbox.vue";var nt=tt.exports,rt={name:"Options",components:{Checkbox:nt},computed:Object(u["a"])({},Object(s["c"])({showNumbers:function(e){return e.settings.showNumbers}})),methods:Object(u["a"])({},Object(s["b"])({setShowNumbers:"settings/setShowNumbers"}))},it=rt,at=(n("e7b2"),Object(b["a"])(it,Qe,Ue,!1,null,"ce86521c",null));at.options.__file="Options.vue";var ot=at.exports,ct={name:"Game",components:{Loading:N,Grid:Te,Victory:Je,Moves:Ke,Options:ot},computed:Object(u["a"])({},Object(s["c"])({myGame:function(e){return e.games.myGame},turn:function(e){return e.games.myGame?e.games.myGame.turn:-1},isVictory:function(e){return e.games.myGame&&e.games.myGame.isVictory},loading:function(e){return e.games.loading}})),methods:Object(u["a"])({},Object(s["b"])({restart:"games/buildInitialGame"})),created:function(){this.restart()}},ut=ct,st=(n("98d6"),Object(b["a"])(ut,w,j,!1,null,"2acb937a",null));st.options.__file="Game.vue";var lt=st.exports,ft={name:"Content",components:{Game:lt}},mt=ft,dt=(n("7bad"),Object(b["a"])(mt,x,O,!1,null,"9512316e",null));dt.options.__file="Content.vue";var bt=dt.exports,pt={name:"App",components:{Menu:_,Content:bt}},vt=pt,ht=(n("034f"),n("130b"),Object(b["a"])(vt,i,a,!1,null,null,null));ht.options.__file="App.vue";var gt=ht.exports,yt=n("3821"),_t=n.n(yt),xt=(n("cac7"),function(e){var t=e.length>0?100/e.length:0,n={};return e.forEach(function(e,r){e.forEach(function(e,i){n[e]="".concat(t*i,"% ").concat(t*r,"%")})}),n}),Ot={myGame:null,loading:!1},wt={},jt={buildInitialGame:function(e){e.commit("setLoading",!0),re(te).then(function(t){t.size=te,t.imageCoords=xt(t.resolvedGrid);var n=we(!0,t.resolvedGrid.length),r=n.dimensionStyle,i=n.tileSize;t.dimensionStyle=r,t.tileSize=i,e.commit("setGame",t),e.commit("setLoading",!1)})},moveTile:function(e,t){var n=e.state.myGame,r=_t()({},n,Object(u["a"])({},be(n,t)));e.commit("setGame",r)}},Gt={setGame:function(e,t){e.myGame=t},setLoading:function(e,t){e.loading=t}},kt={namespaced:!0,state:Ot,getters:wt,actions:jt,mutations:Gt},St=n("a906"),Ct=n.n(St),Tt={panda:'url("'.concat(Ct.a,'")')},Nt={showNumbers:!1,picture:Tt.panda},zt={},Et={setShowNumbers:function(e){e.commit("setShowNumbers",!e.state.showNumbers)}},Mt={setShowNumbers:function(e,t){e.showNumbers=t}},$t={namespaced:!0,state:Nt,getters:zt,actions:Et,mutations:Mt};r["a"].use(s["a"]);var Bt=!1,Vt=new s["a"].Store({modules:{games:kt,settings:$t},strict:Bt});r["a"].config.productionTip=!1,new r["a"]({store:Vt,render:function(e){return e(gt)}}).$mount("#app")},6407:function(e,t,n){"use strict";var r=n("7082"),i=n.n(r);i.a},6683:function(e,t,n){},"66f7":function(e,t,n){},7082:function(e,t,n){},"7bad":function(e,t,n){"use strict";var r=n("bef5"),i=n.n(r);i.a},8075:function(e,t,n){},"821b":function(e,t,n){},"98d6":function(e,t,n){"use strict";var r=n("e6aa"),i=n.n(r);i.a},"9d64":function(e,t,n){e.exports=n.p+"img/logo.9d567569.png"},a906:function(e,t,n){e.exports=n.p+"img/panda.78af0e74.jpg"},aac2:function(e,t,n){},b1d3:function(e,t,n){"use strict";var r=n("6683"),i=n.n(r);i.a},bef5:function(e,t,n){},c748:function(e,t,n){"use strict";var r=n("38cd"),i=n.n(r);i.a},cb1c:function(e,t,n){},cb48:function(e,t,n){"use strict";var r=n("2316"),i=n.n(r);i.a},d01b:function(e,t,n){},e6aa:function(e,t,n){},e7b2:function(e,t,n){"use strict";var r=n("aac2"),i=n.n(r);i.a},f735:function(e,t,n){"use strict";var r=n("cb1c"),i=n.n(r);i.a}});
//# sourceMappingURL=app.e80091e5.js.map