"use strict";(self["webpackChunkintervals"]=self["webpackChunkintervals"]||[]).push([[274],{3776:(a,e,l)=>{l.d(e,{Z:()=>s});var o=l(284);const t=new o.Z("e-conta"),c=async a=>await t.collection(a).orderBy("name").get({keys:!0}),n=async(a,e)=>await t.collection(a).doc(e).get(),d=async(a,e)=>await t.collection(a).add({...e}),i=async(a,e,l)=>await t.collection(a).doc(e).update({...l}),r=async(a,e)=>await t.collection(a).doc(e).delete(),s=()=>({db:t,listar:c,buscar:n,adicionar:d,atualizar:i,excluir:r})},1274:(a,e,l)=>{l.r(e),l.d(e,{default:()=>H});var o=l(3673),t=l(2323);const c=a=>((0,o.dD)("data-v-6edebae7"),a=a(),(0,o.Cn)(),a),n={class:"q-gutter-y-md flex"},d=c((()=>(0,o._)("span",null,"Versão: ",-1))),i={id:"version"},r={class:"q-gutter-y-md flex"},s=c((()=>(0,o._)("span",null,"Modo Dark: ",-1))),u={class:"q-gutter-y-md column"},m=(0,o.Uk)("Verificar Atualização"),p=c((()=>(0,o._)("br",null,null,-1))),g={class:"q-gutter-y-md column"},v=(0,o.Uk)("Apagar Produtos"),w=c((()=>(0,o._)("span",{class:"q-ml-sm"},"Deseja excluir todos os produtos?",-1)));function f(a,e,l,c,f,k){const _=(0,o.up)("q-toggle"),y=(0,o.up)("q-btn"),Z=(0,o.up)("q-card"),b=(0,o.up)("q-avatar"),q=(0,o.up)("q-card-section"),C=(0,o.up)("q-card-actions"),W=(0,o.up)("q-dialog"),D=(0,o.up)("q-page"),x=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(D,{padding:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{class:"q-pa-md"},{default:(0,o.w5)((()=>[(0,o._)("div",n,[d,(0,o._)("p",i,(0,t.zw)(a.config.version),1)]),(0,o._)("div",r,[s,(0,o.Wm)(_,{modelValue:a.toggleDarkMode,"onUpdate:modelValue":e[0]||(e[0]=e=>a.toggleDarkMode=e)},null,8,["modelValue"])]),(0,o._)("div",u,[(0,o.Wm)(y,{color:"primary",icon:"update",onClick:e[1]||(e[1]=e=>a.atualizacao())},{default:(0,o.w5)((()=>[m])),_:1})]),p,(0,o._)("div",g,[(0,o.Wm)(y,{color:"primary",icon:"delete",onClick:a.modalActive},{default:(0,o.w5)((()=>[v])),_:1},8,["onClick"])])])),_:1}),(0,o.Wm)(W,{modelValue:a.confirm,"onUpdate:modelValue":e[3]||(e[3]=e=>a.confirm=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(q,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{icon:"delete",color:"negative","text-color":"white"}),w])),_:1}),(0,o.Wm)(C,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(y,{flat:"",label:"Cancelar",color:"dark"},null,512),[[x]]),(0,o.wy)((0,o.Wm)(y,{flat:"",label:"Excluir",color:"negative",onClick:e[2]||(e[2]=e=>a.excluirDb())},null,512),[[x]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var k=l(8825),_=l(1959),y=l(52),Z=l(3776);const b=(0,o.aZ)({name:"Atualizacao",setup(){const a=(0,k.Z)(),{db:e}=(0,Z.Z)(),{darkMode:l,setDarkmode:t}=(0,y.P)(),c=(0,_.iH)(l),n=(0,_.iH)(!1),d="expense",i=(0,_.iH)({version:a.version}),r=()=>{location.reload(!0)},s=()=>{n.value=!0},u=async()=>{await e.collection(d).delete()};return(0,o.YP)(c,(e=>{console.log(e),t(e),a.dark.set(l)})),(0,o.bv)((()=>{t(c.value),a.dark.set(l)})),{confirm:n,collection:d,config:i,toggleDarkMode:c,atualizacao:r,modalActive:s,excluirDb:u}}});var q=l(4260),C=l(4379),W=l(151),D=l(8886),x=l(8240),Q=l(6778),V=l(5589),A=l(5096),z=l(9367),h=l(677),M=l(7518),P=l.n(M);const U=(0,q.Z)(b,[["render",f],["__scopeId","data-v-6edebae7"]]),H=U;P()(b,"components",{QPage:C.Z,QCard:W.Z,QToggle:D.Z,QBtn:x.Z,QDialog:Q.Z,QCardSection:V.Z,QAvatar:A.Z,QCardActions:z.Z}),P()(b,"directives",{ClosePopup:h.Z})}}]);