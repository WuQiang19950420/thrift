(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bb87acd"],{"3f10":function(e,t,o){"use strict";var n=o("7a23");Object(n["H"])("data-v-6067295a");var c={class:"goods-item"},a={class:"goods-item-flex"},r={class:"goods-warp"},i={class:"goods-warp"};function s(e,t,o,s,u,l){var p=Object(n["M"])("goods-item");return Object(n["E"])(),Object(n["i"])("article",c,[Object(n["j"])("div",a,[Object(n["j"])("section",r,[(Object(n["E"])(!0),Object(n["i"])(n["a"],null,Object(n["K"])(e.shopsRight,(function(t){return Object(n["E"])(),Object(n["g"])(p,{key:t.id,goodItem:t,onClick:function(o){return e.shopsLeftClick(t.id)}},null,8,["goodItem","onClick"])})),128))]),Object(n["j"])("section",i,[(Object(n["E"])(!0),Object(n["i"])(n["a"],null,Object(n["K"])(e.shopsLeft,(function(t){return Object(n["E"])(),Object(n["g"])(p,{key:t.id,goodItem:t,onClick:function(o){return e.shopsRightClick(t.id)}},null,8,["goodItem","onClick"])})),128))])])])}Object(n["F"])();o("fb6a");Object(n["H"])("data-v-74e42413");var u={class:"goods-item"},l=["src"],p={class:"goods-title"},d={class:"goods-price"},f=Object(n["j"])("a",null,"¥",-1),g={class:"user"},b=["src"],m={class:"user-name"},O={class:"bottom-msg"},j={class:"browsing-history"};function A(e,t,o,c,a,r){return Object(n["E"])(),Object(n["i"])("section",u,[Object(n["j"])("img",{src:e.image[0],onLoad:t[0]||(t[0]=function(){return e.imgLoad&&e.imgLoad.apply(e,arguments)}),onError:t[1]||(t[1]=function(){return e.imgError&&e.imgError.apply(e,arguments)})},null,40,l),Object(n["j"])("article",null,[Object(n["j"])("h4",p,Object(n["Q"])(e.goodItem.productName),1),Object(n["L"])(e.$slots,"default",{},void 0,!0),Object(n["j"])("span",d,[f,Object(n["l"])(Object(n["Q"])(e.goodItem.salePrice),1)]),Object(n["j"])("div",g,[Object(n["j"])("img",{class:"user-img",src:e.goodItem.photo},null,8,b),Object(n["j"])("span",m,Object(n["Q"])(e.goodItem.UserName),1)]),Object(n["j"])("header",O,[Object(n["j"])("div",j,Object(n["Q"])(e.goodItem.vistiCounts)+"人浏览",1)])])])}Object(n["F"])();o("ac1f"),o("1276");var v=o("0a81"),h=Object(n["o"])({props:{goodItem:{type:Object,default:function(){return{}}}},setup:function(e){var t=Object(n["e"])((function(){return e.goodItem.imagePath.split("|")})),o=function(){v["a"].emit("imgLoad")},c=function(){v["a"].emit("imgLoad")};return{imgLoad:o,image:t,imgError:c}}});o("7481");h.render=A,h.__scopeId="data-v-74e42413";var I=h,y=o("6c02"),E=Object(n["o"])({components:{GoodsItem:I},props:{homeListData:{type:Array,default:function(){return[]}}},setup:function(e){var t=Object(n["e"])((function(){return e.homeListData.slice(0,e.homeListData.length/2)})),o=Object(n["e"])((function(){return e.homeListData.slice(e.homeListData.length/2,e.homeListData.length)})),c=Object(y["d"])();function a(e){c.push({path:"/goodsDetail",query:{goodsId:e}})}var r=function(e){a(e)},i=function(e){a(e)};return{shopsLeft:t,shopsRight:o,shopsRightClick:i,shopsLeftClick:r}}});o("52f3");E.render=s,E.__scopeId="data-v-6067295a";t["a"]=E},"413e":function(e,t,o){"use strict";var n=o("7a23");function c(e,t,o,c,a,r){var i=Object(n["M"])("van-empty");return Object(n["E"])(),Object(n["i"])("article",null,[Object(n["m"])(i,{description:e.text},null,8,["description"])])}var a=Object(n["o"])({props:{text:{type:String,default:""}},setup:function(){return{}}});a.render=c;t["a"]=a},"52f3":function(e,t,o){"use strict";o("b942")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,o){var n=o("1d80"),c=o("577e"),a=o("5899"),r="["+a+"]",i=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),u=function(e){return function(t){var o=c(n(t));return 1&e&&(o=o.replace(i,"")),2&e&&(o=o.replace(s,"")),o}};e.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(e,t,o){var n=o("861d"),c=o("d2bb");e.exports=function(e,t,o){var a,r;return c&&"function"==typeof(a=t.constructor)&&a!==o&&n(r=a.prototype)&&r!==o.prototype&&c(e,r),e}},7481:function(e,t,o){"use strict";o("bf13")},"7b77":function(e,t){e.exports="data:image/png;base64,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"},"87a3":function(e,t,o){"use strict";o("c38e")},"8cd6":function(e,t,o){},"9d26":function(e,t,o){"use strict";var n=o("7a23");Object(n["H"])("data-v-8f097d10");var c={class:"scrollPages"};function a(e,t,o,a,r,i){var s=Object(n["M"])("scroll"),u=Object(n["M"])("back-top");return Object(n["E"])(),Object(n["i"])("main",c,[Object(n["m"])(s,{style:Object(n["x"])({height:e.pageHeight+"px"}),onPullingUp:e.pullingUp,onPullingDown:e.pullingDown,onScrollXy:e.scrollXy,ref:"scrollRef",isPullDown:e.isPullDown},{default:Object(n["W"])((function(){return[Object(n["L"])(e.$slots,"default",{},void 0,!0)]})),_:3},8,["style","onPullingUp","onPullingDown","onScrollXy","isPullDown"]),Object(n["X"])(Object(n["m"])(u,{onClick:e.backTopClick},null,8,["onClick"]),[[n["T"],e.backTopShow]])])}Object(n["F"])();var r=o("1da1"),i=(o("e7e5"),o("d399")),s=(o("96cf"),o("a9e3"),o("99af"),o("7b77")),u=o.n(s);Object(n["H"])("data-v-17787662");var l={class:"back-top"},p=Object(n["j"])("img",{src:u.a},null,-1),d=[p];function f(e,t,o,c,a,r){return Object(n["E"])(),Object(n["i"])("aside",l,d)}Object(n["F"])();var g={};o("e21e");g.render=f,g.__scopeId="data-v-17787662";var b=g,m=o("bc0c"),O=o("0613"),j=o("0a81"),A=Object(n["o"])({components:{Scroll:m["a"],BackTop:b},props:{isScrollY:{type:Boolean,default:!0},isPullDown:{type:Boolean,default:!1},navBarheight:{type:Number,default:0},isEnd:{type:Boolean,required:!0},requestName:{type:String,required:!0},storeName:{type:String,required:!0},storeListName:{type:String,required:!0},category:{type:String,default:""},tabBarHeight:{type:Number,default:0},condition:{type:String,default:""},city:{type:String,default:""}},emits:["setIsLoding"],setup:function(e,t){var o=t.emit,c=Object(n["J"])(!1),a=Object(n["J"])(window.innerHeight-e.tabBarHeight-e.navBarheight),s=Object(n["J"])(),u=Object(n["J"])(1),l=10,p=Object(O["b"])(),d=Object(n["e"])((function(){var t={requestDataPost:"currentPage=".concat(u.value,"&pageSize=").concat(l),requestName:e.requestName};return"homeIntroduct"===e.requestName||"category"===e.requestName?t.requestDataPost="".concat(t.requestDataPost,"&category=").concat(e.category,"&currentUrl=").concat(encodeURIComponent(location.href)):t.requestDataPost="".concat(t.requestDataPost,"&city=").concat(e.city,"&condition=").concat(e.condition),t}));"search"!==e.requestName&&p.dispatch(e.storeName,d.value);var f=function(){e.isEnd?Object(i["a"])("没有更多内容了"):(u.value++,p.dispatch(e.storeListName,d.value))},g=Object(n["J"])(0),b=function(e){-e.y>1500?c.value=!0:c.value=!1,g.value=e.y},m=Object(n["e"])((function(){return p.state.shopItem.positionY}));j["a"].on("goOldY",(function(){var e;null===(e=s.value)||void 0===e||e.goXy(0,m.value,1)})),Object(n["B"])((function(){p.commit("shopItem/setPositionY",g.value)}));var A=function(){var e;null===(e=s.value)||void 0===e||e.goXy(0,0)},v=Object(n["e"])((function(){return p.state.shopItem.isLoading})),h=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u.value=1,o("setIsLoding"),t.next=4,p.dispatch(e.storeName,d.value);case 4:v.value||Object(i["a"])("刷新成功");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n["U"])((function(){return e.city}),(function(){p.dispatch(e.storeName,d.value)})),j["a"].off("getSearchData"),j["a"].on("getSearchData",(function(){setTimeout((function(){p.dispatch(e.storeName,d.value)}),300)})),{pageHeight:a,pullingUp:f,scrollRef:s,currentPage:u,requestDatas:d,scrollXy:b,backTopShow:c,backTopClick:A,position:m,pullingDown:h,isLoading:v}}});o("87a3");A.render=a,A.__scopeId="data-v-8f097d10";t["a"]=A},a9e3:function(e,t,o){"use strict";var n=o("83ab"),c=o("da84"),a=o("94ca"),r=o("6eeb"),i=o("5135"),s=o("c6b6"),u=o("7156"),l=o("d9b5"),p=o("c04e"),d=o("d039"),f=o("7c73"),g=o("241c").f,b=o("06cf").f,m=o("9bf2").f,O=o("58a8").trim,j="Number",A=c[j],v=A.prototype,h=s(f(v))==j,I=function(e){if(l(e))throw TypeError("Cannot convert a Symbol value to a number");var t,o,n,c,a,r,i,s,u=p(e,"number");if("string"==typeof u&&u.length>2)if(u=O(u),t=u.charCodeAt(0),43===t||45===t){if(o=u.charCodeAt(2),88===o||120===o)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+u}for(a=u.slice(2),r=a.length,i=0;i<r;i++)if(s=a.charCodeAt(i),s<48||s>c)return NaN;return parseInt(a,n)}return+u};if(a(j,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var y,E=function(e){var t=arguments.length<1?0:e,o=this;return o instanceof E&&(h?d((function(){v.valueOf.call(o)})):s(o)!=j)?u(new A(I(t)),o,E):I(t)},R=n?g(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;R.length>C;C++)i(A,y=R[C])&&!i(E,y)&&m(E,y,b(A,y));E.prototype=v,v.constructor=E,r(c,j,E)}},b942:function(e,t,o){},bf13:function(e,t,o){},c38e:function(e,t,o){},e21e:function(e,t,o){"use strict";o("8cd6")}}]);
//# sourceMappingURL=chunk-2bb87acd.dc6fe10a.js.map