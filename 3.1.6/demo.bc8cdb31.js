import{c as e}from"./mobile.8417f238.js";import{_ as l}from"./index.be496494.js";import{m as t,r as a,e as s,j as u,k as n,g as r,o,l as d}from"./vendor.9cc7b6f2.js";const{createDemo:h}=e("swipe"),i=h({props:{},setup(){const e=t(),l=t(!1),a=t(0);return{checked:l,number:a,changSwitch:l=>{var t,a;l?null==(t=e.value)||t.open("left"):null==(a=e.value)||a.close()},refSwipe:e,open:e=>{console.log(e),l.value=!0},close:()=>{l.value=!1}}}}),p={class:"demo full"},c=r("h2",null,"基础用法",-1),f=d("删除"),g=r("h2",null,"禁止滑动",-1),m=d("删除"),y=r("h2",null,"左右滑动",-1),_=d("选择"),v=d("删除"),b=d("收藏"),q=r("h2",null,"异步控制",-1),w=d("删除"),k=r("h2",null,"自定义",-1),V=d("选择"),j=d("删除"),x=d("收藏");var C=l(i,[["render",function(e,l,t,r,d,h){const i=a("nut-cell"),C=a("nut-button"),S=a("nut-swipe"),O=a("nut-switch"),U=a("nut-inputnumber");return o(),s("div",p,[c,u(S,null,{right:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"danger"},{default:n((()=>[f])),_:1})])),default:n((()=>[u(i,{"round-radius":"0",desc:"左滑删除"})])),_:1}),g,u(S,{disabled:""},{right:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"danger"},{default:n((()=>[m])),_:1})])),default:n((()=>[u(i,{"round-radius":"0",desc:"禁止滑动"})])),_:1}),y,u(S,null,{left:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"success"},{default:n((()=>[_])),_:1})])),right:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"danger"},{default:n((()=>[v])),_:1}),u(C,{shape:"square",style:{height:"100%"},type:"info"},{default:n((()=>[b])),_:1})])),default:n((()=>[u(i,{"round-radius":"0",desc:"左滑右滑都可以哦"})])),_:1}),q,u(S,{ref:"refSwipe",onOpen:e.open,onClose:e.close},{right:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"danger"},{default:n((()=>[w])),_:1})])),default:n((()=>[u(i,{title:"异步打开关闭"},{link:n((()=>[u(O,{modelValue:e.checked,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked=l),onChange:e.changSwitch,"active-text":"开","inactive-text":"关"},null,8,["modelValue","onChange"])])),_:1})])),_:1},8,["onOpen","onClose"]),k,u(S,null,{left:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"success"},{default:n((()=>[V])),_:1})])),right:n((()=>[u(C,{shape:"square",style:{height:"100%"},type:"danger"},{default:n((()=>[j])),_:1}),u(C,{shape:"square",style:{height:"100%"},type:"info"},{default:n((()=>[x])),_:1})])),default:n((()=>[u(i,{title:"商品描述"},{link:n((()=>[u(U,{modelValue:e.number,"onUpdate:modelValue":l[1]||(l[1]=l=>e.number=l)},null,8,["modelValue"])])),_:1})])),_:1})])}]]);export{C as default};
