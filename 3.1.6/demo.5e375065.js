import{c as s}from"./mobile.8417f238.js";import{_ as e}from"./index.be496494.js";import{a as t,r as a,e as l,j as o,k as i,B as n,C as d,g as r,o as u,l as c}from"./vendor.9cc7b6f2.js";const{createDemo:p}=s("overlay"),v=p({props:{},setup:()=>({state:t({show:!1,show2:!1})})}),f=s=>(n("data-v-3325d30e"),s=s(),d(),s),b={class:"demo"},h=f((()=>r("h2",null,"基础用法",-1))),m=c("显示遮罩层"),w=f((()=>r("h2",null,"嵌套内容",-1))),_=c("嵌套内容"),y=f((()=>r("div",{class:"wrapper"},[r("div",{class:"content"},"这里是正文")],-1)));var j=e(v,[["render",function(s,e,t,n,d,r){const c=a("nut-button"),p=a("nut-overlay"),v=a("nut-cell");return u(),l("div",b,[h,o(v,null,{default:i((()=>[o(c,{type:"primary",onClick:e[0]||(e[0]=e=>s.state.show=!0)},{default:i((()=>[m])),_:1}),o(p,{visible:s.state.show,"onUpdate:visible":e[1]||(e[1]=e=>s.state.show=e),"z-index":2e3},null,8,["visible"])])),_:1}),w,o(v,null,{default:i((()=>[o(c,{type:"success",onClick:e[2]||(e[2]=e=>s.state.show2=!0)},{default:i((()=>[_])),_:1}),o(p,{visible:s.state.show2,"onUpdate:visible":e[3]||(e[3]=e=>s.state.show2=e),"z-index":2e3},{default:i((()=>[y])),_:1},8,["visible"])])),_:1})])}],["__scopeId","data-v-3325d30e"]]);export{j as default};
