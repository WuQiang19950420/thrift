(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a8d3f58"],{"118f":function(e,t,n){"use strict";n("23a0")},"23a0":function(e,t,n){},"2ad1":function(e,t,n){},"2f8a":function(e,t,n){"use strict";n.r(t);var c=n("7a23");Object(c["H"])("data-v-b81dafa8");var a=Object(c["j"])("div",{class:"box"},null,-1);function s(e,t,n,s,o,i){var u=Object(c["M"])("van-nav-bar"),l=Object(c["M"])("van-loading"),r=Object(c["M"])("send-item"),b=Object(c["M"])("scroll"),d=Object(c["M"])("chit-chat-fixed");return Object(c["E"])(),Object(c["i"])("main",{class:"chit-chat",style:Object(c["x"])({height:s.height+"px"})},[Object(c["m"])(u,{"left-arrow":"",onClickLeft:s.onClickLeft,title:s.userName,border:!1,ref:"navBarRef"},null,8,["onClickLeft","title"]),s.isLoading?(Object(c["E"])(),Object(c["g"])(l,{key:0,class:"loading",color:"#CBCFD3",size:"20"})):Object(c["h"])("",!0),Object(c["m"])(b,{style:Object(c["x"])({height:s.clientHeight+"px"}),ref:"scrollRef",onPullingDown:s.pullingDown,isPullDown:!0,isPullDowns:!1},{default:Object(c["W"])((function(){return[(Object(c["E"])(!0),Object(c["i"])(c["a"],null,Object(c["K"])(s.msgCompoent,(function(e,t){return Object(c["E"])(),Object(c["g"])(r,{key:t,message:e,ref:"sendRigt",hisPhoto:s.hisPhoto,position:!!e.id},null,8,["message","hisPhoto","position"])})),128)),a]})),_:1},8,["style","onPullingDown"]),Object(c["m"])(d,{onSendMessage:s.sendMessage,ref:"chitChatFix"},null,8,["onSendMessage"])],4)}Object(c["F"])();var o=n("1da1"),i=(n("e7e5"),n("d399")),u=(n("96cf"),n("99af"),n("6c02")),l=n("0613"),r=n("3606");Object(c["H"])("data-v-f56ef414");var b={class:"chit-chat-fixed"};function d(e,t,n,a,s,o){return Object(c["E"])(),Object(c["i"])("footer",b,[Object(c["X"])(Object(c["j"])("input",{type:"text",placeholder:"聊点什么吧～","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.sendText=e})},null,512),[[c["S"],a.sendText]]),Object(c["j"])("div",{class:"send",onClick:t[1]||(t[1]=function(){return a.sendMessage&&a.sendMessage.apply(a,arguments)})},"发送")])}Object(c["F"])();var j={emits:["sendMessage"],setup:function(e,t){var n=t.emit,a=Object(c["J"])(""),s=function(){""!=a.value?(n("sendMessage",a.value),a.value=""):Object(i["a"])("发送内容不能为空")};return{sendText:a,sendMessage:s}}};n("6c48");j.render=d,j.__scopeId="data-v-f56ef414";var O=j;Object(c["H"])("data-v-d794ef20");var g=["src"],f={key:1,class:"four-one-four"},v=["src"],h={key:1,class:"four-one-four"};function m(e,t,n,a,s,o){var i=Object(c["M"])("loading");return Object(c["E"])(),Object(c["i"])("section",{class:Object(c["w"])(["send-item",{"send-item-position":!n.position}])},[a.isShow?(Object(c["E"])(),Object(c["g"])(i,{key:0,type:"spinner",size:"20",class:"loading"})):Object(c["h"])("",!0),n.position?(Object(c["E"])(),Object(c["i"])(c["a"],{key:1},[n.hisPhoto?(Object(c["E"])(),Object(c["i"])("img",{key:0,src:n.hisPhoto,onLoad:t[0]||(t[0]=function(){return a.imgLoad&&a.imgLoad.apply(a,arguments)})},null,40,g)):(Object(c["E"])(),Object(c["i"])("div",f))],64)):Object(c["h"])("",!0),Object(c["j"])("div",{class:Object(c["w"])({"send-text-left":n.position,"send-text":!n.position})},[Object(c["j"])("span",null,Object(c["Q"])(n.message.content),1)],2),n.position?Object(c["h"])("",!0):(Object(c["E"])(),Object(c["i"])(c["a"],{key:2},[a.myPhoto?(Object(c["E"])(),Object(c["i"])("img",{key:0,src:a.myPhoto,onLoad:t[1]||(t[1]=function(){return a.imgLoad&&a.imgLoad.apply(a,arguments)})},null,40,v)):(Object(c["E"])(),Object(c["i"])("div",h))],64))],2)}Object(c["F"])();n("ac1e");var p=n("543e"),y=n("0a81"),w={props:{message:{type:Object,default:function(){return{}}},position:{type:Boolean,default:!0},hisPhoto:{type:String,default:""}},components:{Loading:p["b"]},setup:function(){var e=Object(l["b"])(),t=Object(c["e"])((function(){return e.state.message.photos})),n=Object(c["J"])(!1),a=function(){y["a"].emit("imgLoad")};return{isShow:n,imgLoad:a,myPhoto:t}}};n("118f");w.render=m,w.__scopeId="data-v-d794ef20";var x=w,k=n("bc0c"),M={components:{ChitChatFixed:O,SendItem:x,Scroll:k["a"]},setup:function(){var e=Object(u["d"])(),t=Object(u["c"])(),n=Object(l["b"])(),a=Object(c["J"])(),s=Object(c["J"])(),b=Object(c["J"])(),d=Object(c["J"])(),j=Object(c["e"])((function(){return n.state.message.isLoading}));t.query.uid&&(a.value=t.query.uid),t.query.userName&&(b.value=t.query.userName,d.value=t.query.hisPhoto),t.query.hisPhoto&&(d.value=t.query.hisPhoto),t.query.index&&(s.value=t.query.index);var O=Object(c["e"])((function(){return n.state.message.messageItem})),g=function(){e.back()},f=Object(c["J"])(1),v="index=1&token=".concat(window.localStorage.getItem("token"),"&uuid=").concat(a.value||O.value[s.value].id),h=Object(c["e"])((function(){return"index=".concat(f.value,"&token=").concat(window.localStorage.getItem("token"),"&uuid=").concat(a.value||O.value[s.value].id)}));n.dispatch("message/getAllMessage",h.value).then((function(){var e=x.value.$el.children[0].children;setTimeout((function(){x.value.scrollToElement(e[e.length-1],0)}),100)}));var m=Object(c["e"])((function(){return n.state.message.isEnd})),p=function(){m.value?Object(i["a"])("没有更多聊天记录了"):(f.value++,n.dispatch("message/getAllMessageList",h.value))},y=setInterval((function(){n.dispatch("message/getNextMessage",v)}),5e3);Object(c["D"])((function(){clearInterval(y)}));var w=Object(c["J"])(null),x=Object(c["J"])(null),k=Object(c["J"])(window.innerHeight),M=Object(c["J"])(null),P=Object(c["J"])(null),E=Object(c["J"])("");Object(c["C"])((function(){E.value=window.innerHeight-w.value.$el.clientHeight-P.value.$el.clientHeight}));var L=Object(c["e"])((function(){return n.state.message.allMessage})),C=Object(c["e"])((function(){return n.state.message.nextMessage})),J=Object(c["e"])((function(){return n.state.message.allMessageCopy}));Object(c["U"])((function(){return J.value}),(function(){var e=x.value.$el.children[0].children;Object(c["v"])((function(){x.value.scroll[0].refresh(),setTimeout((function(){x.value.scrollToElement(e[e.length-1],0)}),100)}))}));var S=Object(c["J"])(null),q=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var o,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.commit("message/changeAllMessageCopy",{content:t}),Object(c["v"])((function(){x.value.scroll[0].refresh()})),o=E.value-2*x.value.scroll[0].scrollerHeight,x.value.goXy(0,o),u="token=".concat(localStorage.getItem("token"),"&uuid=").concat(a.value||O.value[s.value].id,"&msg=").concat(t,"&type=1"),e.next=7,Object(r["c"])(u);case 7:l=e.sent,1!==l.code?Object(i["a"])("发送失败"):S.value.isShow=!1;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{onClickLeft:g,sendMessage:q,msgReact:L,sendRigt:S,chitChatFix:w,clientHeight:E,scrollRef:x,box:M,navBarRef:P,uid:a,userName:b,index:s,message:O,isLoading:j,height:k,msgCompoent:J,nextMessage:C,pullingDown:p,isEnd:m,currentPage:f,requestDatas:v,requestData:h,hisPhoto:d}}};n("afba");M.render=s,M.__scopeId="data-v-b81dafa8";t["default"]=M},"6c48":function(e,t,n){"use strict";n("2ad1")},afba:function(e,t,n){"use strict";n("cb17")},cb17:function(e,t,n){}}]);
//# sourceMappingURL=chunk-5a8d3f58.2ae34672.js.map