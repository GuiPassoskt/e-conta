"use strict";(self["webpackChunkintervals"]=self["webpackChunkintervals"]||[]).push([[8],{3776:(e,a,t)=>{t.d(a,{Z:()=>d});var l=t(284);const o=new l.Z("e-conta"),n=async e=>await o.collection(e).orderBy("name").get({keys:!0}),s=async(e,a)=>await o.collection(e).doc(a).get(),i=async(e,a)=>await o.collection(e).add({...a}),c=async(e,a,t)=>await o.collection(e).doc(a).update({...t}),r=async(e,a)=>await o.collection(e).doc(a).delete(),d=()=>({db:o,listar:n,buscar:s,adicionar:i,atualizar:c,excluir:r})},2703:(e,a,t)=>{t.d(a,{v:()=>i});var l=t(321),o=t(3776);const n="expense",{listar:s}=(0,o.Z)(),i=(0,l.Q_)("conta",{state:()=>({list:[]}),actions:{async listConta(){const e=await s(n);this.list=e.map((e=>({...e.data,id:e.key})))},async getByCategoria(e){const a=await s(n),t=a.filter((a=>a.data.category===e));this.list=t.map((e=>({...e.data,id:e.key})))},setConta(e){this.list=e},addConta(e){this.list.push(e)},dropConta(e){const a=this.list.indexOf(e);this.list.splice(a,1)}},getters:{leanList:e=>e.list.map((e=>e.name)),totalList:e=>{const a=e.list.map((e=>parseFloat(e.amount)*e.quantity));if(a.length>0){const e=a.reduce(((e,a)=>e+a));return e.toFixed(2)||0}return 0},badgeCount:e=>e.list.length}})},2008:(e,a,t)=>{t.r(a),t.d(a,{default:()=>x});var l=t(3673),o=t(8880);function n(e,a,t,n,s,i){const c=(0,l.up)("q-icon"),r=(0,l.up)("q-avatar"),d=(0,l.up)("q-input"),u=(0,l.up)("q-btn"),m=(0,l.up)("q-form"),p=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(p,{padding:""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{onSubmit:(0,o.iM)(e.tipoAcao,["prevent"]),onReset:e.reset},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{outlined:"",label:"Descrição",modelValue:e.expense.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.expense.name=a),modelModifiers:{trim:!0},rules:[e=>e&&e.length>0||"Descrição Obrigatória"]},{append:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{name:"insert_comment"})])),_:1})])),_:1},8,["modelValue","rules"]),(0,l.Wm)(d,{outlined:"",label:"Categoria",modelValue:e.expense.category,"onUpdate:modelValue":a[1]||(a[1]=a=>e.expense.category=a),modelModifiers:{trim:!0},rules:[e=>e&&e.length>0||"Categoria Obrigatória"],disable:""},{append:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{name:"sell"})])),_:1})])),_:1},8,["modelValue","rules"]),(0,l.Wm)(d,{outlined:"",placeholder:"R$",type:"tel",mask:"#.##","fill-mask":"0","reverse-fill-mask":"",modelValue:e.expense.amount,"onUpdate:modelValue":a[2]||(a[2]=a=>e.expense.amount=a),label:"R$",class:"q-mt-md",hint:"O valor do produto pode ser cadastrado depois"},{append:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{name:"monetization_on"})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(d,{outlined:"",label:"Quantidade",type:"tel",modelValue:e.expense.quantity,"onUpdate:modelValue":a[3]||(a[3]=a=>e.expense.quantity=a),rules:[e=>e&&e.length>0||"Quantidade Obrigatória"],class:"q-mt-md"},{append:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{name:"add_circle"})])),_:1})])),_:1},8,["modelValue","rules"]),(0,l.Wm)(u,{unelevated:"",type:"submit",color:"primary",label:"Salvar",icon:"save",class:"full-width q-mt-md"}),(0,l.Wm)(u,{type:"reset",id:"cancel",icon:"delete",class:"full-width q-mt-md",style:{display:"none"}})])),_:1},8,["onSubmit","onReset"])])),_:1})}var s=t(8825),i=t(1959),c=t(9582),r=t(3776),d=t(2703);const u=(0,l.aZ)({name:"PageIndex",setup(){const e=(0,s.Z)(),a=(0,c.yj)(),t=(0,c.tv)(),{buscar:o,adicionar:n,atualizar:u}=(0,r.Z)(),{addConta:m}=(0,d.v)(),p=(0,i.iH)({name:"",category:"",amount:0,quantity:0}),y=(0,i.iH)(!1),g="expense",v=()=>y.value?f():h(),h=()=>{n(g,p.value).then((a=>{e.notify({message:"Produto salvo com sucesso!",color:"positive",icon:"check"}),m(p.value),document.querySelector("#cancel").click()})).catch((a=>{e.notify({message:a,color:"negative",icon:"close"})}))},f=()=>{const{id:l}=a.params;u(g,l,p.value).then((()=>{e.notify({message:"Produto atualizada com sucesso!",color:"positive",icon:"check"}),t.push({name:"lista"})})).catch((a=>{e.notify({message:a,color:"negative",icon:"close"})}))},w=()=>{p.value={name:"",category:a.params.category,amount:0,quantity:0}};return(0,l.bv)((async()=>{p.value.category=a.params.category||"",a.params&&a.params.id&&(y.value=!0,p.value=await o(g,a.params.id))})),{expense:p,collection:g,editar:y,tipoAcao:v,salvarProduto:h,atualizarProduto:f,reset:w}}});var m=t(4260),p=t(4379),y=t(5269),g=t(4842),v=t(5096),h=t(4554),f=t(8240),w=t(7518),b=t.n(w);const q=(0,m.Z)(u,[["render",n]]),x=q;b()(u,"components",{QPage:p.Z,QForm:y.Z,QInput:g.Z,QAvatar:v.Z,QIcon:h.Z,QBtn:f.Z})}}]);