import{d as i,o as p,c as f,a as e,D as x,e as m,f as _,k as c,l as k,m as t,z as v,E as a,t as d}from"./index-9247ed63.js";const w={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},h=e("path",{d:"M30.71 229.47l188.87-113a30.54 30.54 0 0 1 31.09-.39a33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53z",fill:"currentColor"},null,-1),b=[h],g=i({name:"PlayBack",render:function(s,r){return p(),f("svg",w,b)}}),B={class:"pt-1 mr-2 cursor-pointer"},A=i({__name:"titleBar",props:{title:{default:""},des:{default:""},padding:{default:4}},setup(o){const s=o,r=x(),n=m(()=>r.theme==="dark"),u=_();return(y,l)=>(p(),f("div",{class:a(["flex border-b border-[#ebebeb] dark:border-[#ffffff17] py-4 w-full",[`px-${s.padding}`]])},[e("div",B,[c(t(v),{size:"16",class:"text-primary",onClick:l[0]||(l[0]=C=>t(u).push("/"))},{default:k(()=>[c(t(g))]),_:1})]),e("div",null,[e("b",{class:a([[t(n)?"text-[#fff]":"text-[#555]"],"text-lg"])},d(s.title),3),e("div",{class:a([[t(n)?"text-[#fff]":"text-[#626569]"],"text-truncate text-[#626569] mt-1"])},d(s.des),3)])],2))}});export{A as _};
