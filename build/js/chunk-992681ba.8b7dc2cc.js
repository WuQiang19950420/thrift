(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-992681ba"],{1691:function(e,t,n){},"1c87":function(e,t,n){"use strict";n("f540")},"25f0":function(e,t,n){"use strict";var a=n("6eeb"),r=n("825a"),i=n("577e"),o=n("d039"),c=n("ad6d"),l="toString",u=RegExp.prototype,s=u[l],b=o((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),d=s.name!=l;(b||d)&&a(RegExp.prototype,l,(function(){var e=r(this),t=i(e.source),n=e.flags,a=i(void 0===n&&e instanceof RegExp&&!("flags"in u)?c.call(e):n);return"/"+t+"/"+a}),{unsafe:!0})},"260b":function(e,t,n){},3578:function(e,t,n){"use strict";var a=n("7a23");Object(a["H"])("data-v-37ec0910");var r={class:"pay-fixed"};function i(e,t,n,i,o,c){return Object(a["E"])(),Object(a["i"])("article",r,[Object(a["L"])(e.$slots,"circle",{},void 0,!0),Object(a["L"])(e.$slots,"default",{},void 0,!0)])}Object(a["F"])();var o={};n("62bc");o.render=i,o.__scopeId="data-v-37ec0910";t["a"]=o},"3cce":function(e,t,n){},"62bc":function(e,t,n){"use strict";n("3cce")},"6cfb":function(e,t,n){"use strict";n("1691")},"78c5":function(e,t,n){"use strict";n("cc78")},"7c8d":function(e,t,n){
/*!
 * Compressor.js v1.1.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-05T02:32:40.212Z
 */
(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function t(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?e(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var c={exports:{}};(function(e){"undefined"!==typeof window&&function(t){var n=t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype,a=t.Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),r=a&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}}(),i=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,o=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,c=(a||i)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(e){var t,n,c,l,u,s,b,d,f;if(t=e.match(o),!t)throw new Error("invalid data URI");for(n=t[2]?t[1]:"text/plain"+(t[3]||";charset=US-ASCII"),c=!!t[4],l=e.slice(t[0].length),u=c?atob(l):decodeURIComponent(l),s=new ArrayBuffer(u.length),b=new Uint8Array(s),d=0;d<u.length;d+=1)b[d]=u.charCodeAt(d);return a?new Blob([r?b:s],{type:n}):(f=new i,f.append(s),f.getBlob(n))};t.HTMLCanvasElement&&!n.toBlob&&(n.mozGetAsFile?n.toBlob=function(e,t,a){var r=this;setTimeout((function(){a&&n.toDataURL&&c?e(c(r.toDataURL(t,a))):e(r.mozGetAsFile("blob",t))}))}:n.toDataURL&&c&&(n.msToBlob?n.toBlob=function(e,t,a){var r=this;setTimeout((function(){(t&&"image/png"!==t||a)&&n.toDataURL&&c?e(c(r.toDataURL(t,a))):e(r.msToBlob(t))}))}:n.toBlob=function(e,t,n){var a=this;setTimeout((function(){e(c(a.toDataURL(t,n)))}))})),e.exports?e.exports=c:t.dataURLtoBlob=c}(window)})(c);var l=c.exports,u=function(e){return"undefined"!==typeof Blob&&(e instanceof Blob||"[object Blob]"===Object.prototype.toString.call(e))},s={strict:!0,checkOrientation:!0,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},b="undefined"!==typeof window&&"undefined"!==typeof window.document,d=b?window:{},f=function(e){return e>0&&e<1/0},h=Array.prototype.slice;function m(e){return Array.from?Array.from(e):h.call(e)}var j=/^image\/.+$/;function p(e){return j.test(e)}function O(e){var t=p(e)?e.substr(6):"";return"jpeg"===t&&(t="jpg"),".".concat(t)}var v=String.fromCharCode;function g(e,t,n){var a,r="";for(n+=t,a=t;a<n;a+=1)r+=v(e.getUint8(a));return r}var y=d.btoa;function w(e,t){var n=[],a=8192,r=new Uint8Array(e);while(r.length>0)n.push(v.apply(null,m(r.subarray(0,a)))),r=r.subarray(a);return"data:".concat(t,";base64,").concat(y(n.join("")))}function C(e){var t,n=new DataView(e);try{var a,r,i;if(255===n.getUint8(0)&&216===n.getUint8(1)){var o=n.byteLength,c=2;while(c+1<o){if(255===n.getUint8(c)&&225===n.getUint8(c+1)){r=c;break}c+=1}}if(r){var l=r+4,u=r+10;if("Exif"===g(n,l,4)){var s=n.getUint16(u);if(a=18761===s,(a||19789===s)&&42===n.getUint16(u+2,a)){var b=n.getUint32(u+4,a);b>=8&&(i=u+b)}}}if(i){var d,f,h=n.getUint16(i,a);for(f=0;f<h;f+=1)if(d=i+12*f+2,274===n.getUint16(d,a)){d+=8,t=n.getUint16(d,a),n.setUint16(d,1,a);break}}}catch(m){t=1}return t}function k(e){var t=0,n=1,a=1;switch(e){case 2:n=-1;break;case 3:t=-180;break;case 4:a=-1;break;case 5:t=90,a=-1;break;case 6:t=90;break;case 7:t=90,n=-1;break;case 8:t=-90;break}return{rotate:t,scaleX:n,scaleY:a}}var P=/\.\d*(?:0|9){12}\d*$/;function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return P.test(e)?Math.round(e*t)/t:e}function x(e){var t=e.aspectRatio,n=e.height,a=e.width,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",i=f(a),o=f(n);if(i&&o){var c=n*t;("contain"===r||"none"===r)&&c>a||"cover"===r&&c<a?n=a/t:a=n*t}else i?n=a/t:o&&(a=n*t);return{width:a,height:n}}var T=d.ArrayBuffer,S=d.FileReader,M=d.URL||d.webkitURL,U=/\.\w+$/,B=d.Compressor,E=function(){function e(a,r){n(this,e),this.file=a,this.image=new Image,this.options=t(t({},s),r),this.aborted=!1,this.result=null,this.init()}return r(e,[{key:"init",value:function(){var e=this,t=this.file,n=this.options;if(u(t)){var a=t.type;if(p(a))if(M&&S)if(T||(n.checkOrientation=!1),M&&!n.checkOrientation)this.load({url:M.createObjectURL(t)});else{var r=new S,i=n.checkOrientation&&"image/jpeg"===a;this.reader=r,r.onload=function(n){var r=n.target,c=r.result,l={};if(i){var u=C(c);u>1||!M?(l.url=w(c,a),u>1&&o(l,k(u))):l.url=M.createObjectURL(t)}else l.url=c;e.load(l)},r.onabort=function(){e.fail(new Error("Aborted to read the image with FileReader."))},r.onerror=function(){e.fail(new Error("Failed to read the image with FileReader."))},r.onloadend=function(){e.reader=null},i?r.readAsArrayBuffer(t):r.readAsDataURL(t)}else this.fail(new Error("The current browser does not support image compression."));else this.fail(new Error("The first argument must be an image File or Blob object."))}else this.fail(new Error("The first argument must be a File or Blob object."))}},{key:"load",value:function(e){var n=this,a=this.file,r=this.image;r.onload=function(){n.draw(t(t({},e),{},{naturalWidth:r.naturalWidth,naturalHeight:r.naturalHeight}))},r.onabort=function(){n.fail(new Error("Aborted to load the image."))},r.onerror=function(){n.fail(new Error("Failed to load the image."))},d.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(d.navigator.userAgent)&&(r.crossOrigin="anonymous"),r.alt=a.name,r.src=e.url}},{key:"draw",value:function(e){var t=this,n=e.naturalWidth,a=e.naturalHeight,r=e.rotate,i=void 0===r?0:r,o=e.scaleX,c=void 0===o?1:o,u=e.scaleY,s=void 0===u?1:u,b=this.file,d=this.image,h=this.options,m=document.createElement("canvas"),j=m.getContext("2d"),O=Math.abs(i)%180===90,v=("contain"===h.resize||"cover"===h.resize)&&f(h.width)&&f(h.height),g=Math.max(h.maxWidth,0)||1/0,y=Math.max(h.maxHeight,0)||1/0,w=Math.max(h.minWidth,0)||0,C=Math.max(h.minHeight,0)||0,k=n/a,P=h.width,T=h.height;if(O){var S=[y,g];g=S[0],y=S[1];var M=[C,w];w=M[0],C=M[1];var U=[T,P];P=U[0],T=U[1]}v&&(k=P/T);var B=x({aspectRatio:k,width:g,height:y},"contain");g=B.width,y=B.height;var E=x({aspectRatio:k,width:w,height:C},"cover");if(w=E.width,C=E.height,v){var L=x({aspectRatio:k,width:P,height:T},h.resize);P=L.width,T=L.height}else{var I=x({aspectRatio:k,width:P,height:T}),J=I.width;P=void 0===J?n:J;var R=I.height;T=void 0===R?a:R}P=Math.floor(W(Math.min(Math.max(P,w),g))),T=Math.floor(W(Math.min(Math.max(T,C),y)));var _=-P/2,A=-T/2,D=P,V=T,z=[];if(v){var H=0,F=0,q=n,$=a,N=x({aspectRatio:k,width:n,height:a},{contain:"cover",cover:"contain"}[h.resize]);q=N.width,$=N.height,H=(n-q)/2,F=(a-$)/2,z.push(H,F,q,$)}if(z.push(_,A,D,V),O){var G=[T,P];P=G[0],T=G[1]}m.width=P,m.height=T,p(h.mimeType)||(h.mimeType=b.type);var X="transparent";if(b.size>h.convertSize&&h.convertTypes.indexOf(h.mimeType)>=0&&(h.mimeType="image/jpeg"),"image/jpeg"===h.mimeType&&(X="#fff"),j.fillStyle=X,j.fillRect(0,0,P,T),h.beforeDraw&&h.beforeDraw.call(this,j,m),!this.aborted&&(j.save(),j.translate(P/2,T/2),j.rotate(i*Math.PI/180),j.scale(c,s),j.drawImage.apply(j,[d].concat(z)),j.restore(),h.drew&&h.drew.call(this,j,m),!this.aborted)){var Q=function(e){t.aborted||t.done({naturalWidth:n,naturalHeight:a,result:e})};m.toBlob?m.toBlob(Q,h.mimeType,h.quality):Q(l(m.toDataURL(h.mimeType,h.quality)))}}},{key:"done",value:function(e){var t=e.naturalWidth,n=e.naturalHeight,a=e.result,r=this.file,i=this.image,o=this.options;if(M&&!o.checkOrientation&&M.revokeObjectURL(i.src),a)if(o.strict&&a.size>r.size&&o.mimeType===r.type&&!(o.width>t||o.height>n||o.minWidth>t||o.minHeight>n||o.maxWidth<t||o.maxHeight<n))a=r;else{var c=new Date;a.lastModified=c.getTime(),a.lastModifiedDate=c,a.name=r.name,a.name&&a.type!==r.type&&(a.name=a.name.replace(U,O(a.type)))}else a=r;this.result=a,o.success&&o.success.call(this,a)}},{key:"fail",value:function(e){var t=this.options;if(!t.error)throw e;t.error.call(this,e)}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=B,e}},{key:"setDefaults",value:function(e){o(s,e)}}]),e}();return E}))},a15b:function(e,t,n){"use strict";var a=n("23e7"),r=n("44ad"),i=n("fc6a"),o=n("a640"),c=[].join,l=r!=Object,u=o("join",",");a({target:"Array",proto:!0,forced:l||!u},{join:function(e){return c.call(i(this),void 0===e?",":e)}})},b08b:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c}));var a,r=n("6022");function i(e){return r["a"].request({url:a.publishGoods,method:"post",data:e})}function o(e){return r["a"].request({url:a.upLoadImg,method:"post",headers:{"Content-Type":"multipart/form-data"},data:e})}function c(e){return r["a"].request({url:a.deleteGoods,params:{pid:e}})}(function(e){e["publishGoods"]="/assistant/product/addProduct",e["upLoadImg"]="/assistant/product/uploadImg",e["deleteGoods"]="/assistant/product/remove"})(a||(a={}))},bcd6:function(e,t,n){"use strict";n.r(t);var a=n("7a23");Object(a["H"])("data-v-ba414b88");var r=Object(a["j"])("div",{class:"box1"},null,-1);function i(e,t,n,i,o,c){var l=Object(a["M"])("van-nav-bar"),u=Object(a["M"])("publish-goods-text"),s=Object(a["M"])("publish-choose"),b=Object(a["M"])("scroll"),d=Object(a["M"])("buy-tab-bar");return Object(a["E"])(),Object(a["i"])("main",{style:Object(a["x"])({height:e.pageHeight+"px"})},[Object(a["m"])(l,{title:"发布宝贝","left-arrow":"",onClickLeft:e.onClickLeft,fixed:!0},null,8,["onClickLeft"]),Object(a["m"])(b,{style:Object(a["x"])({height:e.height+"px"}),ref:"scrollRef"},{default:Object(a["W"])((function(){return[r,Object(a["m"])(u,{ref:"publishGoodsText"},null,512),Object(a["m"])(s,{ref:"publishChoose"},null,512)]})),_:1},8,["style"]),Object(a["m"])(d,{class:"fixed",ref:"buyTabBarRef"},{default:Object(a["W"])((function(){return[Object(a["j"])("button",{class:"publish",onClick:t[0]||(t[0]=function(){return e.publishGood&&e.publishGood.apply(e,arguments)})},"立即发布")]})),_:1},512)],4)}Object(a["F"])();n("e7e5");var o=n("d399"),c=n("1da1"),l=(n("e17f"),n("2241")),u=(n("96cf"),n("a15b"),n("159b"),n("99af"),n("3578"));Object(a["H"])("data-v-0bcd6785");var s={class:"publish-choose"},b=Object(a["j"])("span",null,"商品类型",-1),d=Object(a["l"])("实物商品"),f=Object(a["l"])("虚拟商品"),h=Object(a["j"])("span",null,"商品名称",-1),m=Object(a["j"])("span",null,"发货地区",-1),j=Object(a["j"])("span",null,"详细地址",-1),p=Object(a["j"])("span",null,"联系电话",-1),O=Object(a["j"])("span",null,"重量(kg)",-1),v=Object(a["j"])("span",null,"颜色",-1),g=Object(a["j"])("span",null,"发货方式",-1),y={key:0},w={key:1},C=Object(a["j"])("span",null,"品牌",-1),k={key:0},P={key:1},W=Object(a["j"])("span",null,"分类",-1),x={key:0},T={key:1},S=Object(a["j"])("span",null,"价格",-1),M={key:0},U=Object(a["j"])("span",null,"原价",-1),B=Object(a["j"])("span",null,"运费",-1),E=Object(a["l"])("￥"),L=Object(a["l"])("请输入邮费");function I(e,t,n,r,i,o){var c=Object(a["M"])("van-icon"),l=Object(a["M"])("van-radio"),u=Object(a["M"])("van-radio-group"),I=Object(a["M"])("publish-choose-item"),J=Object(a["M"])("van-picker"),R=Object(a["M"])("van-popup"),_=Object(a["M"])("van-cascader"),A=Object(a["M"])("van-area"),D=Object(a["M"])("price-pop");return Object(a["E"])(),Object(a["i"])("article",s,[Object(a["m"])(I,null,{icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"shop-o",size:16})]})),name:Object(a["W"])((function(){return[b]})),content:Object(a["W"])((function(){return[Object(a["m"])(u,{modelValue:e.productTypeChecked,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.productTypeChecked=t}),direction:"horizontal","icon-size":15},{default:Object(a["W"])((function(){return[Object(a["m"])(l,{name:"0"},{default:Object(a["W"])((function(){return[d]})),_:1}),Object(a["m"])(l,{name:"1"},{default:Object(a["W"])((function(){return[f]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),Object(a["m"])(I,null,{icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"shop-o",size:16})]})),name:Object(a["W"])((function(){return[h]})),content:Object(a["W"])((function(){return[Object(a["X"])(Object(a["j"])("input",{type:"text",class:"input-address input-productName",maxlength:"13","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.productName=t})},null,512),[[a["S"],e.productName]])]})),_:1}),Object(a["m"])(I,{onClick:e.chooseAddress},{icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"location-o",size:16})]})),name:Object(a["W"])((function(){return[m]})),content:Object(a["W"])((function(){return[Object(a["j"])("span",null,Object(a["Q"])(e.address||"请选择发货地址"),1)]})),arrow:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"arrow"})]})),_:1},8,["onClick"]),Object(a["m"])(I,null,{icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"location-o",size:16})]})),name:Object(a["W"])((function(){return[j]})),content:Object(a["W"])((function(){return[Object(a["X"])(Object(a["j"])("input",{type:"text",class:"input-address","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.detailedAddress=t})},null,512),[[a["S"],e.detailedAddress]])]})),_:1}),Object(a["m"])(I,null,{icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"phone-o",size:16})]})),name:Object(a["W"])((function(){return[p]})),content:Object(a["W"])((function(){return[Object(a["X"])(Object(a["j"])("input",{type:"tel",maxlength:"11",class:"input-address","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.phone=t})},null,512),[[a["S"],e.phone]])]})),_:1}),Object(a["m"])(I,null,{icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"aim",size:16})]})),name:Object(a["W"])((function(){return[O]})),content:Object(a["W"])((function(){return[Object(a["X"])(Object(a["j"])("input",{type:"number",class:"input-address","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.goodsWeight=t})},null,512),[[a["S"],e.goodsWeight]])]})),_:1}),Object(a["m"])(I,null,{icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"records",size:16})]})),name:Object(a["W"])((function(){return[v]})),content:Object(a["W"])((function(){return[Object(a["X"])(Object(a["j"])("input",{type:"text",class:"input-address","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.goodsColor=t})},null,512),[[a["S"],e.goodsColor]])]})),_:1}),Object(a["m"])(I,{onClick:t[6]||(t[6]=function(t){return e.freightTypeShow=!0})},Object(a["k"])({icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"logistics",size:16})]})),name:Object(a["W"])((function(){return[g]})),content:Object(a["W"])((function(){return[e.freightType?(Object(a["E"])(),Object(a["i"])("span",w,Object(a["Q"])(e.freightType),1)):(Object(a["E"])(),Object(a["i"])("span",y,"请选择发货方式"))]})),_:2},[e.freightType?void 0:{name:"arrow",fn:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"arrow"})]}))}]),1024),Object(a["m"])(I,{onClick:t[7]||(t[7]=function(t){return e.brandShow=!0})},Object(a["k"])({icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"award-o",size:16})]})),name:Object(a["W"])((function(){return[C]})),content:Object(a["W"])((function(){return[e.brandName?(Object(a["E"])(),Object(a["i"])("span",P,Object(a["Q"])(e.brandName),1)):(Object(a["E"])(),Object(a["i"])("span",k,"请选择品牌"))]})),_:2},[e.brandName?void 0:{name:"arrow",fn:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"arrow"})]}))}]),1024),Object(a["m"])(I,{onClick:t[8]||(t[8]=function(t){return e.classifyShow=!0})},Object(a["k"])({icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"qr",size:16})]})),name:Object(a["W"])((function(){return[W]})),content:Object(a["W"])((function(){return[e.fieldValue?(Object(a["E"])(),Object(a["i"])("span",T,Object(a["Q"])(e.fieldValue),1)):(Object(a["E"])(),Object(a["i"])("span",x,"请选择分类"))]})),_:2},[e.fieldValue?void 0:{name:"arrow",fn:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"arrow"})]}))}]),1024),Object(a["m"])(I,{onClick:e.writePrice},Object(a["k"])({icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"after-sale",size:16})]})),name:Object(a["W"])((function(){return[S]})),content:Object(a["W"])((function(){return[0===e.allPrice.price||""===e.allPrice.price?(Object(a["E"])(),Object(a["i"])("span",M,"您开个价吧～")):(Object(a["E"])(),Object(a["i"])("span",{key:1,style:{color:"red","font-size":"16px"},onClick:t[9]||(t[9]=function(){return e.writePrice&&e.writePrice.apply(e,arguments)})},"￥"+Object(a["Q"])(e.allPrice.price),1))]})),_:2},[0===e.allPrice.price?{name:"arrow",fn:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"arrow"})]}))}:void 0]),1032,["onClick"]),Object(a["m"])(I,{onClick:e.writePrice},{icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"after-sale",size:16})]})),name:Object(a["W"])((function(){return[U]})),content:Object(a["W"])((function(){return[Object(a["j"])("span",null,"￥"+Object(a["Q"])(e.allPrice.oldPrice||"0.00"),1)]})),_:1},8,["onClick"]),Object(a["m"])(I,{onClick:e.writePrice},{icon:Object(a["W"])((function(){return[Object(a["m"])(c,{name:"after-sale",size:16})]})),name:Object(a["W"])((function(){return[B]})),content:Object(a["W"])((function(){return[Object(a["j"])("span",null,[e.allPrice.mailCharge?(Object(a["E"])(),Object(a["i"])(a["a"],{key:0},["包邮"!==e.allPrice.mailCharge?(Object(a["E"])(),Object(a["i"])(a["a"],{key:0},[E],64)):Object(a["h"])("",!0),Object(a["l"])(" "+Object(a["Q"])(e.allPrice.mailCharge||"请输入邮费"),1)],64)):(Object(a["E"])(),Object(a["i"])(a["a"],{key:1},[L],64))])]})),_:1},8,["onClick"]),Object(a["m"])(R,{show:e.freightTypeShow,position:"bottom",round:!0,teleport:"body"},{default:Object(a["W"])((function(){return[Object(a["m"])(J,{title:"请选择发货方式",columns:e.freightTypeColumns,onConfirm:e.freightTypeConfirm,onCancel:t[10]||(t[10]=function(t){return e.freightTypeShow=!1})},null,8,["columns","onConfirm"])]})),_:1},8,["show"]),Object(a["m"])(R,{show:e.brandShow,position:"bottom",round:!0,teleport:"body"},{default:Object(a["W"])((function(){return[Object(a["m"])(J,{title:"请选择品牌",columns:e.columns,onConfirm:e.onConfirm,onCancel:t[11]||(t[11]=function(t){return e.brandShow=!1})},null,8,["columns","onConfirm"])]})),_:1},8,["show"]),Object(a["m"])(R,{show:e.classifyShow,position:"bottom",round:!0,teleport:"body"},{default:Object(a["W"])((function(){return[Object(a["m"])(_,{title:"请选择商品的分类",options:e.options,onClose:t[12]||(t[12]=function(t){return e.classifyShow=!1}),onFinish:e.onFinish,"active-color":"#1989FA",modelValue:e.cascaderValue,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.cascaderValue=t})},null,8,["options","onFinish","modelValue"])]})),_:1},8,["show"]),Object(a["m"])(R,{show:e.areaShow,position:"bottom",round:!0,teleport:"body"},{default:Object(a["W"])((function(){return[Object(a["m"])(A,{"area-list":e.areaList,onCancel:t[14]||(t[14]=function(t){return e.areaShow=!1}),onConfirm:e.areaEnd},null,8,["area-list","onConfirm"])]})),_:1},8,["show"]),Object(a["m"])(R,{show:e.show,position:"bottom",onClickOverlay:e.clickOverlay,round:!0,teleport:"body"},{default:Object(a["W"])((function(){return[Object(a["m"])(D,{onSetPriceData:e.setPriceData,allPrice:e.allPrice,isShowMail:e.isShowMail},null,8,["onSetPriceData","allPrice","isShowMail"])]})),_:1},8,["show","onClickOverlay"])])}Object(a["F"])();n("b0c0"),n("d81d"),n("d3b7"),n("25f0"),n("ac1f"),n("1276");Object(a["H"])("data-v-ed523f16");var J={class:"publish-choose-item"},R={class:"item-left"},_={class:"name"},A={class:"item-right"};function D(e,t,n,r,i,o){return Object(a["E"])(),Object(a["i"])("section",J,[Object(a["j"])("div",R,[Object(a["L"])(e.$slots,"icon",{},void 0,!0),Object(a["j"])("div",_,[Object(a["L"])(e.$slots,"name",{},void 0,!0)])]),Object(a["j"])("div",A,[Object(a["L"])(e.$slots,"content",{},void 0,!0),Object(a["L"])(e.$slots,"arrow",{},void 0,!0)])])}Object(a["F"])();var V={};n("6cfb");V.render=D,V.__scopeId="data-v-ed523f16";var z=V;Object(a["H"])("data-v-6bb8b808");var H={class:"price-pop"},F=Object(a["l"])("包邮"),q={class:"button"},$=Object(a["l"])(" 确定 ");function N(e,t,n,r,i,o){var c=Object(a["M"])("van-field"),l=Object(a["M"])("van-checkbox"),u=Object(a["M"])("van-cell-group"),s=Object(a["M"])("van-button"),b=Object(a["M"])("van-form");return Object(a["E"])(),Object(a["i"])("article",H,[Object(a["m"])(b,{onSubmit:e.onSubmit},{default:Object(a["W"])((function(){return[Object(a["m"])(u,{inset:""},{default:Object(a["W"])((function(){return[Object(a["m"])(c,{modelValue:e.price,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.price=t}),name:"price",label:"价格",placeholder:"填写商品现价",autocomplete:"off",type:"number",rules:[{pattern:e.pattern,message:"最多2位小数,首位不能为0"}]},null,8,["modelValue","rules"]),Object(a["m"])(c,{modelValue:e.oldPrice,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.oldPrice=t}),name:"oldPrice",label:"原价",placeholder:"填写商品原价",autocomplete:"off",type:"number",rules:[{pattern:e.pattern,message:"最多2位小数,首位不能为0"}]},null,8,["modelValue","rules"]),Object(a["m"])(c,{modelValue:e.mailCharge,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.mailCharge=t}),name:"mailCharge",label:"邮费",type:"number",placeholder:"填写邮费",autocomplete:"off",rules:[{validator:e.validator,message:"最多2位小数,首位不能为0"}]},{extra:Object(a["W"])((function(){return[Object(a["m"])(l,{modelValue:e.isMailCharge,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.isMailCharge=t}),disabled:1==e.isDisabled,onChange:e.mailChargeChange},{default:Object(a["W"])((function(){return[F]})),_:1},8,["modelValue","disabled","onChange"])]})),_:1},8,["modelValue","rules"])]})),_:1}),Object(a["j"])("div",q,[Object(a["m"])(s,{round:"",block:"",type:"primary","native-type":"submit",size:"normal",color:"#2e9aff"},{default:Object(a["W"])((function(){return[$]})),_:1})])]})),_:1},8,["onSubmit"])])}Object(a["F"])();var G=Object(a["o"])({props:{allPrice:{type:Object,default:function(){return{}}},isShowMail:{type:Boolean,default:!1}},emits:["setPriceData"],setup:function(e,t){var n=t.emit,r=Object(a["J"])(!1),i=Object(a["J"])(0),o=Object(a["J"])(0),c=Object(a["J"])(!1),l=Object(a["J"])(""),u=Object(a["J"])(""),s=Object(a["J"])("");e.allPrice&&(l.value=0==e.allPrice.price?"":e.allPrice.price,u.value=0==e.allPrice.oldPrice?"":e.allPrice.oldPrice,s.value=0==e.allPrice.mailCharge?"":e.allPrice.mailCharge,"包邮"===e.allPrice.mailCharge&&(c.value=!0)),Object(a["V"])((function(){e.isShowMail?(c.value=!0,i.value=1):(c.value=!1,i.value=0)})),Object(a["U"])(c,(function(e){s.value=e?"包邮":""}));var b=function(e){s.value=e?"包邮":""},d=/(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/,f=function(e){return"包邮"===e||/(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/.test(e)},h=function(){var e={price:l.value,oldPrice:u.value,mailCharge:s.value};n("setPriceData",e)},m=function(e){"包邮"!==e.target.value&&(c.value=!1)};return{blinkShow:o,price:l,oldPrice:u,mailCharge:s,isMailCharge:c,isDisabled:i,checked:r,mailChargeChange:b,onSubmit:h,mailChargeBlur:m,pattern:d,validator:f}}});n("d4d0");G.render=N,G.__scopeId="data-v-6bb8b808";var X=G,Q=n("6c02"),K=n("0613"),Y=n("9163"),Z=Object(a["o"])({components:{PublishChooseItem:z,PricePop:X},setup:function(){var e=Object(K["b"])(),t=Object(Q["c"])(),n=Object(a["J"])(""),r=Object(a["J"])(""),i=Object(a["J"])(""),o=Object(a["J"])(""),c=Object(a["J"])(!1),l=Object(a["J"])("0"),u=Object(a["J"])(!1),s=Object(a["J"])(""),b=Object(a["J"])(""),d=Object(a["J"])(""),f=function(){u.value=!0},h=function(e){e[0].name===e[1].name?(s.value=e[0].name+"/"+e[2].name,d.value=e[0].name):(s.value=e[0].name+"/"+e[1].name+"/"+e[2].name,d.value=e[1].name),u.value=!1},m=Object(a["J"])(!1),j=["快递","物流","自提","送货上门"],p=Object(a["J"])(""),O=function(e){p.value=e,m.value=!1};Object(a["U"])(p,(function(){"自提"==p.value||"送货上门"==p.value?(L.mailCharge="包邮",c.value=!0):(L.mailCharge=0,c.value=!1)})),e.state.classify.brandItem||e.dispatch("classify/getBrandItem");var v=Object(a["J"])(!1),g=[],y=Object(a["J"])(""),w=Object(a["J"])(0),C=Object(a["e"])((function(){return e.state.classify.brandItem})),k=function(e,t){w.value=C.value[t].id,y.value=C.value[t].brandName,v.value=!1};e.state.classify.classifyItem||e.dispatch("classify/getClassifyItem");var P=Object(a["J"])(!1),W=Object(a["J"])(""),x=Object(a["J"])(""),T=Object(a["J"])(0),S=Object(a["e"])((function(){return e.state.classify.classifyItem})),M=Object(a["e"])((function(){return e.state.classify.options})),U=function(e){var t=e.selectedOptions;P.value=!1,T.value=t[t.length-1].value,W.value=t.map((function(e){return e.text})).join("/")},B=Object(a["J"])(!1),E=Object(a["J"])(!0),L=Object(a["I"])({price:0,oldPrice:0,mailCharge:0}),I=Object(a["e"])((function(){return e.state.order.AllBuySellData[parseInt(t.query.index)]}));if("1"===t.query.isWrite){n.value=I.value.productName,r.value=I.value.weight,i.value=I.value.color,o.value=I.value.phone,p.value=j[I.value.freightType],L.price=I.value.salePrice.toString(),L.oldPrice=I.value.marketPrice.toString(),L.mailCharge=0==I.value.freightMoney?"包邮":I.value.freightMoney,T.value=I.value.categoryId.toString(),d.value=I.value.city,l.value=I.value.productType.toString(),M.value.forEach((function(e){e.children.forEach((function(t){t.value===I.value.categoryId&&(W.value="".concat(e.text,"/").concat(t.text))}))}));var J=I.value.address.split("/");3===J.length?(s.value=J[0]+"/"+J[1],b.value=J[2]):(s.value=J[0]+"/"+J[1]+"/"+J[2],b.value=J[3])}Object(a["V"])((function(){C.value.forEach((function(e){g.push(e.brandName)})),"1"===t.query.isWrite&&C.value.forEach((function(e){e.id===I.value.brandId&&(y.value=e.brandName,w.value=I.value.brandId)}))}));var R=function(){B.value=!0},_=function(){B.value=!1},A=function(e){B.value=!1,console.log(""===e.price),0===e.price&&""===e.price||(L.price=e.price),0===e.oldPrice&&""===e.oldPrice||(L.oldPrice=e.oldPrice),0===e.mailCharge&&""===e.mailCharge||(L.mailCharge=e.mailCharge),E.value=!1};return{writePrice:R,show:B,clickOverlay:_,setPriceData:A,allPrice:L,showPrice:E,areaList:Y["areaList"],areaShow:u,chooseAddress:f,areaEnd:h,address:s,onFinish:U,classifyShow:P,fieldValue:W,brandShow:v,brand:C,columns:g,onConfirm:k,brandName:y,productName:n,phone:o,brandId:w,cascaderValue:x,classifyId:T,goodsWeight:r,freightTypeShow:m,freightTypeColumns:j,freightType:p,freightTypeConfirm:O,detailedAddress:b,goodsColor:i,city:d,productTypeChecked:l,options:M,classify:S,isShowMail:c}}});n("c703");Z.render=I,Z.__scopeId="data-v-0bcd6785";var ee=Z;Object(a["H"])("data-v-46cc9c1d");var te={class:"publish-goods-text"},ne={class:"up-load"};function ae(e,t,n,r,i,o){var c=Object(a["M"])("van-uploader");return Object(a["E"])(),Object(a["i"])("article",te,[Object(a["X"])(Object(a["j"])("textarea",{class:"input-text",placeholder:"请描述下您的宝贝吧(最多255个字符)～","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.goodTextArea=t}),maxlength:"255"},null,512),[[a["S"],e.goodTextArea]]),Object(a["j"])("div",ne,[Object(a["m"])(c,{"before-delete":e.beforeDelete,"after-read":e.afterReads,modelValue:e.fileList,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.fileList=t}),"max-count":5,onLoad:e.imgLoad},null,8,["before-delete","after-read","modelValue","onLoad"])])])}Object(a["F"])();n("a434");var re=n("0a81"),ie=n("b08b"),oe=n("7c8d"),ce=n.n(oe),le=Object(a["o"])({setup:function(){var e=Object(K["b"])(),t=Object(Q["c"])(),n=Object(a["e"])((function(){return e.state.order.AllBuySellData[parseInt(t.query.index)]})),r=Object(a["J"])(""),i=new FormData,l=Object(a["J"])([]),u=Object(a["J"])([]);if("1"===t.query.isWrite){r.value=n.value.shortDescription;var s=n.value.imagePath.split("|");s.forEach((function(e){l.value.push({url:e})})),u.value=n.value.imagePath.split("|")}var b=function(e){e&&new ce.a(e.file,{quality:.6,success:function(t){return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.status="uploading",e.message="上传中...",i.delete("file"),i.append("file",t),Object(ie["c"])(i).then((function(t){1===t.code?(Object(o["a"])("上传成功"),e.status="done",u.value.push(t.url)):(e.status="failed",e.message="上传失败")}));case 5:case"end":return n.stop()}}),n)})))()}})},d=function(e,t){u.value.splice(t.index,1),l.value.splice(t.index,1)},f=function(){re["a"].emit("imgLoad")};return{goodTextArea:r,upLoadImgs:u,publishData:n,fileList:l,afterReads:b,imgLoad:f,beforeDelete:d}}});n("78c5");le.render=ae,le.__scopeId="data-v-46cc9c1d";var ue=le,se=n("bc0c"),be=n("5502"),de=n("bfc0"),fe=Object(a["o"])({components:{PublishGoodsText:ue,BuyTabBar:u["a"],PublishChoose:ee,Scroll:se["a"]},setup:function(){var e=Object(Q["d"])(),t=Object(Q["c"])(),n=Object(be["b"])(),r=function(){"1"===t.query.isWrite?e.back():(n.commit("setPublishdData"),e.go(-2))},i=!1;i&&Object(l["a"])({title:"您还没有实名认证～",showCancelButton:!0,confirmButtonColor:"#2A89FA",confirmButtonText:"去认证",cancelButtonText:"回首页"}).then((function(){e.push("/authentication")})).catch((function(){e.go(-2),n.commit("setPublishdData")}));var u=Object(a["J"])("");t.query.goodsId&&(u.value=t.query.goodsId);var s=Object(a["J"])(),b=Object(a["J"])(),d=function(){var n=Object(c["a"])(regeneratorRuntime.mark((function n(){var a,r,i,c,l,d,f,h,m,j,p,O,v,g,y,w,C,k,P,W,x,T,S,M,U,B,E,L,I,J,R,_,A,D,V,z,H,F;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(C=null===(a=b.value)||void 0===a?void 0:a.allPrice.price,k=null===(r=b.value)||void 0===r?void 0:r.allPrice.oldPrice,P=null,W=null,"包邮"===(null===(i=b.value)||void 0===i?void 0:i.allPrice.mailCharge)?(P="1",W="0"):(W=null===(x=b.value)||void 0===x?void 0:x.allPrice.mailCharge,P="0"),T=null===(c=b.value)||void 0===c?void 0:c.address,S=null===(l=b.value)||void 0===l?void 0:l.detailedAddress,M=T+"/"+S,U=null===(d=s.value)||void 0===d?void 0:d.goodTextArea,B=null===(f=s.value)||void 0===f?void 0:f.upLoadImgs.join("|"),E=null===(h=b.value)||void 0===h?void 0:h.phone,L=null===(m=b.value)||void 0===m?void 0:m.productName,I=null===(j=b.value)||void 0===j?void 0:j.brandId,J=null===(p=b.value)||void 0===p?void 0:p.classifyId,R=null===(O=b.value)||void 0===O?void 0:O.goodsWeight,_=null===(v=b.value)||void 0===v?void 0:v.goodsColor,A=null===(g=b.value)||void 0===g?void 0:g.city,D=null===(y=b.value)||void 0===y?void 0:y.productTypeChecked,V=0,null===(w=b.value)||void 0===w||w.freightTypeColumns.forEach((function(e,t){var n;(null===(n=b.value)||void 0===n?void 0:n.freightType)===e&&(V=t)})),!(C&&W&&M&&U&&B&&E&&L&&I&&J&&_&&R&&D&&P)){n.next=36;break}if(z="productType=".concat(D,"&sellerFreight=").concat(P,"&productName=").concat(L,"&shortDescription=").concat(U,"&imagePath=").concat(B,"&phone=").concat(E,"&address=").concat(M,"&categoryId=").concat(J,"&brandId=").concat(I,"&city=").concat(A,"&marketPrice=").concat(k,"&salePrice=").concat(C,"&freightType=").concat(V,"&freightMoney=").concat(W,"&weight=").concat(R,"&color=").concat(_,"&token=").concat(localStorage.getItem("token")),H=null,"1"===t.query.isWrite){n.next=29;break}return n.next=26,Object(ie["b"])(z);case 26:H=n.sent,n.next=33;break;case 29:return F="".concat(z,"&id=").concat(u.value),n.next=32,Object(de["l"])(F);case 32:H=n.sent;case 33:1===H.code?(Object(o["a"])("发布成功,正在跳转"),setTimeout((function(){e.push({path:"/meInput",query:{isGet:"true"}})}),1e3)):Object(o["a"])("发布失败"),n.next=37;break;case 36:Object(o["a"])("请填写内容");case 37:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=Object(a["J"])(),h=Object(a["J"])(),m=Object(a["J"])(window.innerHeight),j=Object(a["J"])(window.innerHeight),p=Object(a["J"])();return Object(a["C"])((function(){var e;m.value=m.value-(null===(e=h.value)||void 0===e?void 0:e.$el.clientHeight),re["a"].emit("imgLoad")})),{publishGood:d,publishChoose:b,publishGoodsText:s,onClickLeft:r,height:m,boxRef:f,scrollRef:p,buyTabBarRef:h,pageHeight:j,goodsId:u}}});n("1c87");fe.render=i,fe.__scopeId="data-v-ba414b88";t["default"]=fe},c703:function(e,t,n){"use strict";n("260b")},cc78:function(e,t,n){},d4d0:function(e,t,n){"use strict";n("d6f4")},d6f4:function(e,t,n){},d81d:function(e,t,n){"use strict";var a=n("23e7"),r=n("b727").map,i=n("1dde"),o=i("map");a({target:"Array",proto:!0,forced:!o},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},f540:function(e,t,n){}}]);
//# sourceMappingURL=chunk-992681ba.8b7dc2cc.js.map