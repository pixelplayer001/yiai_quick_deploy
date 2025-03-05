
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as D}from"./index-c9fa3ab3.js";import{a as m}from"./config-73878767.js";import{d as O,Q as j,r as _,x as B,o as M,c as g,e,f as a,a as U,k as b,R as E,S as L,E as x,h as n,t as J,q as V}from"./index-9d6935c8.js";const z={class:"flex justify-between"},F=U("b",null,"码支付参数设置",-1),K=O({__name:"mpay",setup(Q){const t=j({payMpayStatus:"",payMpayPid:"",payMpaySecret:"",payMpayNotifyUrl:"",payMpayReturnUrl:"",payMpayApiPayUrl:"",payMpayRedirect:"",payMpayChannel:[]}),h=_({payMpayStatus:[{required:!0,trigger:"change",message:"请选择当前支付开启状态"}],payMpaySecret:[{required:!0,trigger:"blur",message:"请填写支付秘钥"}],payMpayPid:[{required:!0,trigger:"blur",message:"请填写商户PID"}],payMpayNotifyUrl:[{required:!0,trigger:"blur",message:"请填写支付通知地址"}],payMpayApiPayUrl:[{required:!0,trigger:"blur",message:"请填写平台支付API请求地址"}]}),d=_(),C=[{label:"微信支付",value:"wxpay"},{label:"支付宝支付",value:"alipay"}];async function i(){const o=await m.queryConfig({keys:["payMpaySecret","payMpayNotifyUrl","payMpayReturnUrl","payMpayPid","payMpayStatus","payMpayApiPayUrl","payMpayRedirect","payMpayChannel"]}),l=o.data.payMpayChannel?JSON.parse(o.data.payMpayChannel):[];Object.assign(t,o.data,{payMpayChannel:l})}function S(){var o;(o=d.value)==null||o.validate(async l=>{if(l){try{await m.setConfig({settings:v(t)}),x.success("变更配置信息成功")}catch{}i()}else x.error("请填写完整信息")})}function P(o,l){if(["payMpayChannel"].includes(o)){if(!l)return[];if(l)return JSON.stringify(l)}else return l}function v(o){return Object.keys(o).map(l=>({configKey:l,configVal:P(l,o[l])}))}return B(()=>{i()}),(o,l)=>{const c=n("el-alert"),k=D,w=n("el-button"),N=n("el-switch"),r=n("el-form-item"),u=n("el-col"),y=n("el-row"),s=n("el-input"),f=n("el-divider"),R=n("el-checkbox"),q=n("el-checkbox-group"),A=n("el-form"),I=n("el-card");return M(),g("div",null,[e(k,null,{default:a(()=>[e(c,{closable:!1,"show-icon":"",title:"码支付参数说明",description:"码支付只能支持跳转登录、可同时开通多渠道、同时开启多种支付方式的情况优先级参照支付菜单排序、同时只能使用一种平台、所有的支付通知地址统一为 https://域名/api/pay/notify 将域名修改为您的域名即可！",type:"success"})]),_:1}),e(I,{style:{margin:"20px"}},{header:a(()=>[U("div",z,[F,e(w,{class:"button",text:"",onClick:S},{default:a(()=>[b(" 保存设置 ")]),_:1})])]),default:a(()=>[e(A,{ref_key:"formRef",ref:d,rules:h.value,model:t,"label-width":"120px"},{default:a(()=>[e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(r,{label:"启用当前支付",prop:"payMpayPid"},{default:a(()=>[e(N,{modelValue:t.payMpayStatus,"onUpdate:modelValue":l[0]||(l[0]=p=>t.payMpayStatus=p),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(r,{label:"商户PID",prop:"payMpayPid"},{default:a(()=>[e(s,{modelValue:t.payMpayPid,"onUpdate:modelValue":l[1]||(l[1]=p=>t.payMpayPid=p),placeholder:"请填写商户PID",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(r,{label:"商户秘钥",prop:"payMpaySecret"},{default:a(()=>[e(s,{modelValue:t.payMpaySecret,"onUpdate:modelValue":l[2]||(l[2]=p=>t.payMpaySecret=p),placeholder:"请填写商户秘钥",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(r,{label:"支付通知地址",prop:"payMpaySecret"},{default:a(()=>[e(s,{modelValue:t.payMpayNotifyUrl,"onUpdate:modelValue":l[3]||(l[3]=p=>t.payMpayNotifyUrl=p),placeholder:"请填写支付通知地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(r,{label:"支付回调地址",prop:"payMpaySecret"},{default:a(()=>[e(s,{modelValue:t.payMpayReturnUrl,"onUpdate:modelValue":l[4]||(l[4]=p=>t.payMpayReturnUrl=p),placeholder:"请填写支付成功后的回跳地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f),e(y,null,{default:a(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:a(()=>[e(r,{label:"支付请求地址",prop:"payMpayApiPayUrl"},{default:a(()=>[e(s,{modelValue:t.payMpayApiPayUrl,"onUpdate:modelValue":l[5]||(l[5]=p=>t.payMpayApiPayUrl=p),placeholder:"请填写平台支付请求地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f),e(y,null,{default:a(()=>[e(u,{xs:24,md:24,lg:24,xl:24},{default:a(()=>[e(r,{label:"开启支付渠道",prop:"payMpayChannel"},{default:a(()=>[e(q,{modelValue:t.payMpayChannel,"onUpdate:modelValue":l[6]||(l[6]=p=>t.payMpayChannel=p),size:"small"},{default:a(()=>[(M(),g(E,null,L(C,p=>e(R,{key:p.value,border:"",label:p.value},{default:a(()=>[b(J(p.label),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof V=="function"&&V(K);export{K as default};
