(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-507e40c6"],{"107c":function(e,t,c){var n=c("d039"),a=c("da84"),r=a.RegExp;e.exports=n((function(){var e=r("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,c){"use strict";var n=c("d784"),a=c("44e7"),r=c("825a"),s=c("1d80"),i=c("4840"),l=c("8aa5"),o=c("50c4"),u=c("577e"),d=c("14c3"),b=c("9263"),j=c("9f7f"),p=c("d039"),f=j.UNSUPPORTED_Y,O=[].push,h=Math.min,g=4294967295,v=!p((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var c="ab".split(e);return 2!==c.length||"a"!==c[0]||"b"!==c[1]}));n("split",(function(e,t,c){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,c){var n=u(s(this)),r=void 0===c?g:c>>>0;if(0===r)return[];if(void 0===e)return[n];if(!a(e))return t.call(n,e,r);var i,l,o,d=[],j=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,f=new RegExp(e.source,j+"g");while(i=b.call(f,n)){if(l=f.lastIndex,l>p&&(d.push(n.slice(p,i.index)),i.length>1&&i.index<n.length&&O.apply(d,i.slice(1)),o=i[0].length,p=l,d.length>=r))break;f.lastIndex===i.index&&f.lastIndex++}return p===n.length?!o&&f.test("")||d.push(""):d.push(n.slice(p)),d.length>r?d.slice(0,r):d}:"0".split(void 0,0).length?function(e,c){return void 0===e&&0===c?[]:t.call(this,e,c)}:t,[function(t,c){var a=s(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,a,c):n.call(u(a),t,c)},function(e,a){var s=r(this),b=u(e),j=c(n,s,b,a,n!==t);if(j.done)return j.value;var p=i(s,RegExp),O=s.unicode,v=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(f?"g":"y"),m=new p(f?"^(?:"+s.source+")":s,v),x=void 0===a?g:a>>>0;if(0===x)return[];if(0===b.length)return null===d(m,b)?[b]:[];var y=0,E=0,D=[];while(E<b.length){m.lastIndex=f?0:E;var I,k=d(m,f?b.slice(E):b);if(null===k||(I=h(o(m.lastIndex+(f?E:0)),b.length))===y)E=l(b,E,O);else{if(D.push(b.slice(y,E)),D.length===x)return D;for(var w=1;w<=k.length-1;w++)if(D.push(k[w]),D.length===x)return D;E=y=I}}return D.push(b.slice(y)),D}]}),!v,f)},"13d7":function(e,t,c){},"14c3":function(e,t,c){var n=c("c6b6"),a=c("9263");e.exports=function(e,t){var c=e.exec;if("function"===typeof c){var r=c.call(e,t);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"29dc":function(e,t,c){},3578:function(e,t,c){"use strict";var n=c("7a23");Object(n["H"])("data-v-37ec0910");var a={class:"pay-fixed"};function r(e,t,c,r,s,i){return Object(n["E"])(),Object(n["i"])("article",a,[Object(n["L"])(e.$slots,"circle",{},void 0,!0),Object(n["L"])(e.$slots,"default",{},void 0,!0)])}Object(n["F"])();var s={};c("62bc");s.render=r,s.__scopeId="data-v-37ec0910";t["a"]=s},"3cce":function(e,t,c){},"44e7":function(e,t,c){var n=c("861d"),a=c("c6b6"),r=c("b622"),s=r("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==a(e))}},5305:function(e,t,c){"use strict";c.r(t);var n=c("7a23");Object(n["H"])("data-v-739f0fe4");var a={class:"goods-detail"},r=Object(n["l"])("加载中..."),s=Object(n["j"])("div",{class:"box"},null,-1),i={class:"i-btn"},l=Object(n["j"])("span",{class:"collect-text"},"收藏",-1),o=Object(n["j"])("span",{class:"collect-text"},"聊一聊",-1);function u(e,t,c,u,d,b){var j=Object(n["M"])("van-nav-bar"),p=Object(n["M"])("van-loading"),f=Object(n["M"])("detail-header"),O=Object(n["M"])("detail-content"),h=Object(n["M"])("detail-user"),g=Object(n["M"])("scroll"),v=Object(n["M"])("van-icon"),m=Object(n["M"])("buy-tab-bar");return Object(n["E"])(),Object(n["i"])("main",a,[Object(n["m"])(j,{"left-arrow":"",onClickLeft:e.onClickLeft,border:!1,fixed:!0,title:"商品详情"},null,8,["onClickLeft"]),e.isLoading?(Object(n["E"])(),Object(n["g"])(p,{key:0,class:"loading",color:"#CBCFD3",size:"50"},{default:Object(n["W"])((function(){return[r]})),_:1})):(Object(n["E"])(),Object(n["g"])(g,{key:1,style:Object(n["x"])({height:e.pageHeight+"px"})},{default:Object(n["W"])((function(){return[s,Object(n["m"])(f,{header:e.header},null,8,["header"]),Object(n["m"])(O,{shopDetail:e.shopDetail},null,8,["shopDetail"]),Object(n["m"])(h,{user:e.user},null,8,["user"])]})),_:1},8,["style"])),Object(n["m"])(m,null,{circle:Object(n["W"])((function(){return[Object(n["j"])("div",i,[Object(n["j"])("div",{class:"collect",onClick:t[0]||(t[0]=function(){return e.collect&&e.collect.apply(e,arguments)})},[Object(n["m"])(v,{name:"star-o",size:"20"}),l]),Object(n["j"])("div",{class:"collect",onClick:t[1]||(t[1]=function(){return e.msg&&e.msg.apply(e,arguments)})},[Object(n["m"])(v,{name:"comment-o",size:"20"}),o])])]})),default:Object(n["W"])((function(){return[Object(n["j"])("button",{class:"pay",onClick:t[2]||(t[2]=function(){return e.buy&&e.buy.apply(e,arguments)})},"购买")]})),_:1})])}Object(n["F"])();c("e7e5");var d=c("d399"),b=c("1da1"),j=(c("e17f"),c("2241"));c("96cf");Object(n["H"])("data-v-5dc2382a");var p={class:"detail-header"},f={class:"user-left"},O={key:0,class:"user-img"},h=["src"],g={class:"user-name"};function v(e,t,c,a,r,s){return Object(n["E"])(),Object(n["i"])("header",p,[Object(n["j"])("div",f,[e.header.photo?(Object(n["E"])(),Object(n["i"])("div",O,[Object(n["j"])("img",{src:e.header.photo,onLoad:t[0]||(t[0]=function(){return e.imgLoad&&e.imgLoad.apply(e,arguments)})},null,40,h)])):Object(n["h"])("",!0),Object(n["j"])("div",g,[Object(n["j"])("h3",null,Object(n["Q"])(e.header.userName),1),Object(n["j"])("span",null,Object(n["Q"])(e.address),1)])])])}Object(n["F"])();c("ac1f"),c("1276");var m=c("0a81"),x=Object(n["o"])({props:{header:{type:Object,default:function(){return{}}}},setup:function(e){var t=function(){m["a"].emit("imgLoad")},c=Object(n["e"])((function(){var t=e.header.address.split("/");return t[0]+t[1]}));return{imgLoad:t,address:c}}});c("e671");x.render=v,x.__scopeId="data-v-5dc2382a";var y=x;Object(n["H"])("data-v-5b555ab1");var E={class:"detail-content"},D={class:"detail-price"},I=Object(n["j"])("em",null,"¥",-1),k={class:"price"},w={key:0,class:"tags"},R={class:"old-price"},C={key:0,class:"detail-tags"},L=Object(n["j"])("span",{class:"tags-left"},"品牌",-1),_={class:"tags-right"},N={key:1,class:"detail-tags"},Q=Object(n["j"])("span",{class:"tags-left"},"颜色",-1),H={class:"tags-right"},T={key:2,class:"detail-tags"},M=Object(n["j"])("span",{class:"tags-left"},"分类",-1),P={class:"tags-right"},U={key:3,class:"detail-tags"},A=Object(n["j"])("span",{class:"tags-left"},"重量",-1),B={class:"tags-right"},S={key:4,class:"detail-tags"},F=Object(n["j"])("span",{class:"tags-left"},"卖家联系方式",-1),q={class:"tags-right"},J=["src"];function W(e,t,c,a,r,s){return Object(n["E"])(),Object(n["i"])("article",E,[Object(n["j"])("p",null,Object(n["Q"])(e.shopDetail.shortDescription),1),Object(n["j"])("div",D,[I,Object(n["j"])("span",k,Object(n["Q"])(e.shopDetail.salePrice),1),e.shopDetail.freightType?(Object(n["E"])(),Object(n["i"])("span",w,"包邮")):Object(n["h"])("",!0),Object(n["j"])("span",R,"原价¥"+Object(n["Q"])(e.shopDetail.marketPrice),1)]),e.shopDetail.brandName?(Object(n["E"])(),Object(n["i"])("section",C,[L,Object(n["j"])("span",_,Object(n["Q"])(e.shopDetail.brandName),1)])):Object(n["h"])("",!0),e.shopDetail.color?(Object(n["E"])(),Object(n["i"])("section",N,[Q,Object(n["j"])("span",H,Object(n["Q"])(e.shopDetail.color),1)])):Object(n["h"])("",!0),e.shopDetail.categoryName?(Object(n["E"])(),Object(n["i"])("section",T,[M,Object(n["j"])("span",P,Object(n["Q"])(e.shopDetail.categoryName),1)])):Object(n["h"])("",!0),e.shopDetail.weight?(Object(n["E"])(),Object(n["i"])("section",U,[A,Object(n["j"])("span",B,Object(n["Q"])(e.shopDetail.weight)+"千克",1)])):Object(n["h"])("",!0),e.shopDetail.weight?(Object(n["E"])(),Object(n["i"])("section",S,[F,Object(n["j"])("span",q,Object(n["Q"])(e.shopDetail.phone),1)])):Object(n["h"])("",!0),(Object(n["E"])(!0),Object(n["i"])(n["a"],null,Object(n["K"])(e.image,(function(c){return Object(n["E"])(),Object(n["i"])("div",{class:"detail-img",key:c},[Object(n["j"])("img",{src:c,onLoad:t[0]||(t[0]=function(){return e.imgLoad&&e.imgLoad.apply(e,arguments)})},null,40,J)])})),128))])}Object(n["F"])();var Y=Object(n["o"])({props:{shopDetail:{type:Object,default:function(){return{}}}},setup:function(e){var t=function(){m["a"].emit("imgLoad")},c=Object(n["e"])((function(){var t;return null===(t=e.shopDetail.imagePath)||void 0===t?void 0:t.split("|")}));return{imgLoad:t,image:c}}});c("8533");Y.render=W,Y.__scopeId="data-v-5b555ab1";var $=Y;Object(n["H"])("data-v-08a9859a");var z={class:"detail-user"},K={class:"user-img"},G=["src"],V={class:"detail-user-middle"},X={class:"flex-item"},Z=Object(n["j"])("span",null,"在售商品",-1),ee={class:"flex-item"},te=Object(n["j"])("span",null,"已售商品",-1),ce={class:"flex-item"},ne=Object(n["j"])("span",null,"加入市场",-1);function ae(e,t,c,a,r,s){return Object(n["E"])(),Object(n["i"])("article",z,[Object(n["j"])("div",K,[Object(n["j"])("img",{src:e.user.photo},null,8,G),Object(n["j"])("span",null,Object(n["Q"])(e.user.userName),1)]),Object(n["j"])("div",V,[Object(n["j"])("div",X,[Z,Object(n["j"])("strong",null,Object(n["Q"])(e.user.count),1)]),Object(n["j"])("div",ee,[te,Object(n["j"])("strong",null,Object(n["Q"])(e.user.sellerCounts),1)]),Object(n["j"])("div",ce,[ne,Object(n["j"])("strong",null,Object(n["Q"])(e.user.day)+"天",1)])])])}Object(n["F"])();var re=Object(n["o"])({props:{user:{type:Object,default:function(){return{}}}},setup:function(){return{}}});c("834d");re.render=ae,re.__scopeId="data-v-08a9859a";var se=re,ie=c("3578"),le=c("bc0c"),oe=c("5502"),ue=function(){var e=Object(oe["b"])(),t=Object(n["J"])(window.innerHeight-e.state.tabBarHeight);return t},de=c("6c02"),be=c("0613"),je=c("09b2"),pe=Object(n["o"])({components:{DetailHeader:y,DetailContent:$,DetailUser:se,BuyTabBar:ie["a"],Scroll:le["a"]},setup:function(){var e=Object(de["d"])(),t=Object(de["c"])(),c=Object(n["J"])(""),a=ue();t.query.goodsId&&(c.value=t.query.goodsId);var r=Object(be["b"])(),s={id:c.value,url:encodeURIComponent(window.location.href)};r.dispatch("shopDetail/getShopDetail",s),r.dispatch("address/getAddressItem");var i=Object(n["e"])((function(){return r.state.shopDetail.shopDetail})),l=function(){e.back(),m["a"].emit("goOldY")},o=Object(n["e"])((function(){return r.state.shopDetail.isLoading})),u=function(){r.commit("shopDetail/changeGoodsId",c.value),j["a"].confirm({message:"购买前请先跟卖家沟通商品细节,卖家联系方式:".concat(i.value.phone),confirmButtonText:"已沟通"}).then((function(){e.push({path:"/writeOrder",query:{goodsId:i.value.id}})}))},p=Object(n["e"])((function(){return{photo:i.value.photo,userName:i.value.userName,address:i.value.address}})),f=Object(n["e"])((function(){return{photo:i.value.photo,userName:i.value.userName,day:i.value.day,count:i.value.count,sellerCounts:i.value.sellerCount}})),O=function(){e.push({path:"/chitchat",query:{uid:i.value.userId,userName:i.value.userName}})},h=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="type=1&productId=".concat(i.value.id),e.next=3,Object(je["b"])(t);case 3:c=e.sent,c.code,Object(d["a"])(c.msg);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{onClickLeft:l,buy:u,pageHeight:a,shopDetail:i,header:p,user:f,collect:h,isLoading:o,msg:O}}});c("9124");pe.render=u,pe.__scopeId="data-v-739f0fe4";t["default"]=pe},"5b6c":function(e,t,c){},"62bc":function(e,t,c){"use strict";c("3cce")},"834d":function(e,t,c){"use strict";c("13d7")},8533:function(e,t,c){"use strict";c("29dc")},"8aa5":function(e,t,c){"use strict";var n=c("6547").charAt;e.exports=function(e,t,c){return t+(c?n(e,t).length:1)}},"8c1c":function(e,t,c){},9124:function(e,t,c){"use strict";c("5b6c")},9263:function(e,t,c){"use strict";var n=c("577e"),a=c("ad6d"),r=c("9f7f"),s=c("5692"),i=c("7c73"),l=c("69f3").get,o=c("fce3"),u=c("107c"),d=RegExp.prototype.exec,b=s("native-string-replace",String.prototype.replace),j=d,p=function(){var e=/a/,t=/b*/g;return d.call(e,"a"),d.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),f=r.UNSUPPORTED_Y||r.BROKEN_CARET,O=void 0!==/()??/.exec("")[1],h=p||O||f||o||u;h&&(j=function(e){var t,c,r,s,o,u,h,g=this,v=l(g),m=n(e),x=v.raw;if(x)return x.lastIndex=g.lastIndex,t=j.call(x,m),g.lastIndex=x.lastIndex,t;var y=v.groups,E=f&&g.sticky,D=a.call(g),I=g.source,k=0,w=m;if(E&&(D=D.replace("y",""),-1===D.indexOf("g")&&(D+="g"),w=m.slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&"\n"!==m.charAt(g.lastIndex-1))&&(I="(?: "+I+")",w=" "+w,k++),c=new RegExp("^(?:"+I+")",D)),O&&(c=new RegExp("^"+I+"$(?!\\s)",D)),p&&(r=g.lastIndex),s=d.call(E?c:g,w),E?s?(s.input=s.input.slice(k),s[0]=s[0].slice(k),s.index=g.lastIndex,g.lastIndex+=s[0].length):g.lastIndex=0:p&&s&&(g.lastIndex=g.global?s.index+s[0].length:r),O&&s&&s.length>1&&b.call(s[0],c,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(s[o]=void 0)})),s&&y)for(s.groups=u=i(null),o=0;o<y.length;o++)h=y[o],u[h[0]]=s[h[1]];return s}),e.exports=j},"9f7f":function(e,t,c){var n=c("d039"),a=c("da84"),r=a.RegExp;t.UNSUPPORTED_Y=n((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,c){"use strict";var n=c("23e7"),a=c("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,c){"use strict";var n=c("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,c){"use strict";c("ac1f");var n=c("6eeb"),a=c("9263"),r=c("d039"),s=c("b622"),i=c("9112"),l=s("species"),o=RegExp.prototype;e.exports=function(e,t,c,u){var d=s(e),b=!r((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),j=b&&!r((function(){var t=!1,c=/a/;return"split"===e&&(c={},c.constructor={},c.constructor[l]=function(){return c},c.flags="",c[d]=/./[d]),c.exec=function(){return t=!0,null},c[d](""),!t}));if(!b||!j||c){var p=/./[d],f=t(d,""[e],(function(e,t,c,n,r){var s=t.exec;return s===a||s===o.exec?b&&!r?{done:!0,value:p.call(t,c,n)}:{done:!0,value:e.call(c,t,n)}:{done:!1}}));n(String.prototype,e,f[0]),n(o,d,f[1])}u&&i(o[d],"sham",!0)}},e671:function(e,t,c){"use strict";c("8c1c")},fce3:function(e,t,c){var n=c("d039"),a=c("da84"),r=a.RegExp;e.exports=n((function(){var e=r(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-507e40c6.90606cc7.js.map