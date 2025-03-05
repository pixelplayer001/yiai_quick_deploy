
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as P}from"./index-c9fa3ab3.js";import{A as x}from"./sales-629fe721.js";import{d as Q,r as _,Q as V,x as T,o as z,c as X,e,f as a,k as n,b as g,w as G,I as H,a as J,t as w,U as K,E as W,h as r,X as Y,q as I}from"./index-9d6935c8.js";const Z=["src"],E=Q({__name:"salesUser",setup(ee){const U=_(),C=_(0),b=_(!1),m=_(!1),N=_(),i=V({performanceRatio:0,salesOutletName:"",userId:0}),s=V({salesOutletName:"",performanceRatio:null,page:1,size:10}),A=V({performanceRatio:[{required:!0,message:"请填写佣金比例",trigger:"blur"}],salesOutletName:[{required:!0,message:"请填写自定义分销名称",trigger:"blur"}]}),k=_([]);async function c(){try{b.value=!0;const o=await x.querySalesUserList(s);b.value=!1;const{rows:l,count:d}=o.data;C.value=d,k.value=l}catch{b.value=!1}}function S(o){o==null||o.resetFields(),c()}async function B(o){o==null||o.validate(async l=>{l&&(await x.updateSalesUser(i),W.success("修改信息成功！"),m.value=!1,c())})}async function M(o){const{userId:l,performanceRatio:d,salesOutletName:p}=o;i.performanceRatio=d,i.salesOutletName=p,m.value=!0,i.userId=l}return T(()=>{c()}),(o,l)=>{const d=r("el-input"),p=r("el-form-item"),y=r("el-button"),h=r("el-form"),v=P,q=r("el-alert"),u=r("el-table-column"),f=r("el-tag"),D=r("el-table"),$=r("el-pagination"),j=r("el-row"),L=r("el-dialog"),F=Y("loading");return z(),X("div",null,[e(v,null,{default:a(()=>[e(h,{ref_key:"formRef",ref:U,inline:!0,model:s},{default:a(()=>[e(p,{label:"分销人代号",prop:"salesOutletName"},{default:a(()=>[e(d,{modelValue:s.salesOutletName,"onUpdate:modelValue":l[0]||(l[0]=t=>s.salesOutletName=t),placeholder:"填写分销人代号搜索"},null,8,["modelValue"])]),_:1}),e(p,{label:"返佣比例",prop:"performanceRatio"},{default:a(()=>[e(d,{modelValue:s.performanceRatio,"onUpdate:modelValue":l[1]||(l[1]=t=>s.performanceRatio=t),placeholder:"填写分销人返佣比例"},null,8,["modelValue"])]),_:1}),e(p,null,{default:a(()=>[e(y,{type:"primary",onClick:c},{default:a(()=>[n(" 查询 ")]),_:1}),e(y,{onClick:l[2]||(l[2]=t=>S(g(U)))},{default:a(()=>[n(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(v,null,{default:a(()=>[e(q,{"show-icon":"",title:"佣金账户设置说明",description:"佣金设置实时生效、佣金比例用户用户邀请的成员下单后的结算比例、分销人代号会在分销页面展示！",type:"success"})]),_:1}),e(v,{style:{width:"100%"}},{default:a(()=>[G((z(),H(D,{border:"",data:g(k),style:{width:"100%"},size:"large"},{default:a(()=>[e(u,{prop:"userInfo.avatar",label:"头像",width:"120"},{default:a(t=>{var R,O;return[J("img",{src:(O=(R=t.row)==null?void 0:R.userInfo)==null?void 0:O.avatar,style:{height:"50px"}},null,8,Z)]}),_:1}),e(u,{prop:"userInfo.email",label:"邮箱",width:"200"}),e(u,{prop:"salesOutletName",label:"分销人代号",width:"120"}),e(u,{prop:"performanceRatio",label:"分销人佣金比例",align:"center"},{default:a(t=>[e(f,null,{default:a(()=>[n(w(t.row.performanceRatio)+"% ",1)]),_:2},1024)]),_:1}),e(u,{prop:"orderCount",label:"累计分销订单量",align:"center"},{default:a(t=>[e(f,{type:"success"},{default:a(()=>[n(w(t.row.orderCount),1)]),_:2},1024)]),_:1}),e(u,{prop:"totalAmount",label:"分销人账户总金额",align:"center",width:"150"},{default:a(t=>[e(f,{type:t.row.totalAmount>0?"success":"danger"},{default:a(()=>[n(" ￥"+w(t.row.totalAmount),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"withdrawalAmount",label:"分销人已提现金额",align:"center",width:"150"},{default:a(t=>[e(f,{type:t.row.withdrawalAmount>0?"success":"danger"},{default:a(()=>[n(" ￥"+w(t.row.withdrawalAmount),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"distributionBalance",label:"分销人可提现金额",align:"center",width:"150"},{default:a(t=>[e(f,{type:t.row.distributionBalance>0?"success":"danger"},{default:a(()=>[n(" ￥"+w(t.row.distributionBalance),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"drawMoneyIn",label:"分销人正在提现金额",align:"center"},{default:a(t=>[e(f,{type:t.row.drawMoneyIn>0?"success":"danger"},{default:a(()=>[n(" ￥"+w(t.row.drawMoneyIn),1)]),_:2},1032,["type"])]),_:1}),e(u,{fixed:"right",label:"操作",width:"100",align:"center"},{default:a(t=>[e(y,{link:"",type:"primary",size:"small",onClick:R=>M(t.row)},{default:a(()=>[n(" 变更用户 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[F,g(b)]]),e(j,{class:"flex justify-end mt-5"},{default:a(()=>[e($,{"current-page":s.page,"onUpdate:currentPage":l[3]||(l[3]=t=>s.page=t),"page-size":s.size,"onUpdate:pageSize":l[4]||(l[4]=t=>s.size=t),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:g(C),onSizeChange:c,onCurrentChange:c},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),e(L,{modelValue:g(m),"onUpdate:modelValue":l[9]||(l[9]=t=>K(m)?m.value=t:null),title:"修改用户权限",width:"450px"},{footer:a(()=>[e(y,{onClick:l[7]||(l[7]=t=>m.value=!1)},{default:a(()=>[n(" 我再想想 ")]),_:1}),e(y,{type:"primary",onClick:l[8]||(l[8]=t=>B(g(N)))},{default:a(()=>[n(" 确认修改 ")]),_:1})]),default:a(()=>[e(h,{ref_key:"cramiRef",ref:N,model:i,rules:A,"label-width":"105px"},{default:a(()=>[e(p,{label:"佣金比例",prop:"performanceRatio"},{default:a(()=>[e(d,{modelValue:i.performanceRatio,"onUpdate:modelValue":l[5]||(l[5]=t=>i.performanceRatio=t),modelModifiers:{number:!0},type:"number",placeholder:"设置佣金比例"},null,8,["modelValue"])]),_:1}),e(p,{label:"自定义名称",prop:"salesOutletName"},{default:a(()=>[e(d,{modelValue:i.salesOutletName,"onUpdate:modelValue":l[6]||(l[6]=t=>i.salesOutletName=t),placeholder:"设置自定义名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});typeof I=="function"&&I(E);export{E as default};
