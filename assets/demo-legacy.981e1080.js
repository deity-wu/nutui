System.register(["./mobile-legacy.1e64fb01.js","./vendor-legacy.f9cfd4bf.js","./index-legacy.879cbd14.js"],(function(t){"use strict";var e,n,s,i,o,c;return{setters:[function(t){e=t.c,n=t.T},function(t){s=t.r,i=t.o,o=t.c,c=t.f},function(){}],execute:function(){const{createDemo:l}=e("toast"),a=t("default",l({setup:()=>({textToast:t=>{n.text(t)},successToast:t=>{n.success(t)},errorToast:t=>{n.fail(t)},warningToast:t=>{n.warn(t)},loadingToast:t=>{n.loading(t)}})})),r={class:"demo"},u=c("h2",null,"基本用法",-1);a.render=function(t,e,n,l,a,f){const d=s("nut-cell");return i(),o("div",r,[u,c(d,{title:"Text 文字提示","is-link":"",onClick:e[1]||(e[1]=e=>t.textToast("网络失败，请稍后再试~"))}),c(d,{title:"Success 成功提示","is-link":"",onClick:e[2]||(e[2]=e=>t.successToast("成功提示"))}),c(d,{title:"Error 失败提示","is-link":"",onClick:e[3]||(e[3]=e=>t.errorToast("失败提示"))}),c(d,{title:"Warning 警告提示","is-link":"",onClick:e[4]||(e[4]=e=>t.warningToast("警告提示"))}),c(d,{title:"Loading 加载提示","is-link":"",onClick:e[5]||(e[5]=e=>t.loadingToast("加载中"))})])}}}}));
