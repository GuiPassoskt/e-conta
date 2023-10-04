import{c as Je,an as Ze,ao as xt,ap as qt,aq as At,ar as Xt,as as Yt,at as Gt,au as Jt,d as h,av as Zt,R as el,h as p,i as Ie,aw as tl,j as et,s as ae,ax as ll,r as F,w as oe,ai as Z,ay as ul,az as nl,e as al,f as ol,o as _t,aA as il,aB as rl,aC as sl,aD as cl,aE as Ke,aF as gt,y as _e,aG as ht,q as dl,aH as ye,v as fl,aI as vl,aJ as zt,aK as ml,a5 as Re,a6 as Te,a4 as It,x as Sl,_ as gl,F as hl,U as yl,G as bl,aL as wl,m as Cl,I as je,ad as yt,L,K as j,al as Vl,T as tt,af as bt,ae as pl,a8 as wt,J as kl,M as Ue,$ as We,Z as xl,N as Xe,aM as ql,a3 as Al,aN as _l,aO as zl,aP as Il,n as Ct,P as Ml,S as Bl,aQ as Vt}from"./index.ff6764e0.js";import{r as Ge,u as Fl}from"./useFilters.cd576e68.js";import{u as Ol}from"./useDatabase.e22061e5.js";import{u as El}from"./contaStore.f0af17ad.js";var Ll=Je({name:"QField",inheritAttrs:!1,props:Ze,emits:xt,setup(){return qt(At())}});const Rl={xs:8,sm:10,md:14,lg:20,xl:24};var Tl=Je({name:"QChip",props:{...Xt,...Yt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:i,emit:r}){const{proxy:{$q:V}}=et(),A=Gt(e,V),a=Jt(e,Rl),v=h(()=>e.selected===!0||e.icon!==void 0),y=h(()=>e.selected===!0?e.iconSelected||V.iconSet.chip.selected:e.icon),m=h(()=>e.iconRemove||V.iconSet.chip.remove),I=h(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),s=h(()=>{const w=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(w?` text-${w} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(I.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(A.value===!0?" q-chip--dark q-dark":"")}),b=h(()=>{const w=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},N={...w,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||V.lang.label.remove};return{chip:w,remove:N}});function M(w){w.keyCode===13&&S(w)}function S(w){e.disable||(r("update:selected",!e.selected),r("click",w))}function H(w){(w.keyCode===void 0||w.keyCode===13)&&(ae(w),e.disable===!1&&(r("update:modelValue",!1),r("remove")))}function O(){const w=[];I.value===!0&&w.push(p("div",{class:"q-focus-helper"})),v.value===!0&&w.push(p(Ie,{class:"q-chip__icon q-chip__icon--left",name:y.value}));const N=e.label!==void 0?[p("div",{class:"ellipsis"},[e.label])]:void 0;return w.push(p("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},tl(i.default,N))),e.iconRight&&w.push(p(Ie,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&w.push(p(Ie,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:m.value,...b.value.remove,onClick:H,onKeyup:H})),w}return()=>{if(e.modelValue===!1)return;const w={class:s.value,style:a.value};return I.value===!0&&Object.assign(w,b.value.chip,{onClick:S,onKeyup:M}),Zt("div",w,O(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[el,e.ripple]])}}});const W=1e3,Hl=["start","center","end","start-force","center-force","end-force"],Mt=Array.prototype.filter,Dl=window.getComputedStyle(document.body).overflowAnchor===void 0?ll:function(e,i){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const r=e.children||[];Mt.call(r,A=>A.dataset&&A.dataset.qVsAnchor!==void 0).forEach(A=>{delete A.dataset.qVsAnchor});const V=r[i];V&&V.dataset&&(V.dataset.qVsAnchor="")}))};function be(e,i){return e+i}function Ye(e,i,r,V,A,a,v,y){const m=e===window?document.scrollingElement||document.documentElement:e,I=A===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-v-y,scrollMaxSize:0,offsetStart:-v,offsetEnd:-y};if(A===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=m.scrollLeft,s.scrollViewSize+=m.clientWidth),s.scrollMaxSize=m.scrollWidth,a===!0&&(s.scrollStart=(Ge===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=m.scrollTop,s.scrollViewSize+=m.clientHeight),s.scrollMaxSize=m.scrollHeight),r!==null)for(let b=r.previousElementSibling;b!==null;b=b.previousElementSibling)b.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=b[I]);if(V!==null)for(let b=V.nextElementSibling;b!==null;b=b.nextElementSibling)b.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=b[I]);if(i!==e){const b=m.getBoundingClientRect(),M=i.getBoundingClientRect();A===!0?(s.offsetStart+=M.left-b.left,s.offsetEnd-=M.width):(s.offsetStart+=M.top-b.top,s.offsetEnd-=M.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function pt(e,i,r,V){i==="end"&&(i=(e===window?document.body:e)[r===!0?"scrollWidth":"scrollHeight"]),e===window?r===!0?(V===!0&&(i=(Ge===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-i),window.scrollTo(i,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,i):r===!0?(V===!0&&(i=(Ge===!0?e.scrollWidth-e.offsetWidth:0)-i),e.scrollLeft=i):e.scrollTop=i}function ze(e,i,r,V){if(r>=V)return 0;const A=i.length,a=Math.floor(r/W),v=Math.floor((V-1)/W)+1;let y=e.slice(a,v).reduce(be,0);return r%W!==0&&(y-=i.slice(a*W,r).reduce(be,0)),V%W!==0&&V!==A&&(y-=i.slice(V,v*W).reduce(be,0)),y}const Pl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},$l={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Pl};function Nl({virtualScrollLength:e,getVirtualScrollTarget:i,getVirtualScrollEl:r,virtualScrollItemSizeComputed:V}){const A=et(),{props:a,emit:v,proxy:y}=A,{$q:m}=y;let I,s,b,M=[],S;const H=F(0),O=F(0),w=F({}),N=F(null),x=F(null),T=F(null),_=F({from:0,to:0}),R=h(()=>a.tableColspan!==void 0?a.tableColspan:100);V===void 0&&(V=h(()=>a.virtualScrollItemSize));const G=h(()=>V.value+";"+a.virtualScrollHorizontal),we=h(()=>G.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);oe(we,()=>{J()}),oe(G,ie);function ie(){te(s,!0)}function Ce(n){te(n===void 0?s:n)}function ee(n,c){const f=i();if(f==null||f.nodeType===8)return;const B=Ye(f,r(),N.value,x.value,a.virtualScrollHorizontal,m.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);b!==B.scrollViewSize&&J(B.scrollViewSize),re(f,B,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,Hl.indexOf(c)>-1?c:s>-1&&n>s?"end":"start")}function X(){const n=i();if(n==null||n.nodeType===8)return;const c=Ye(n,r(),N.value,x.value,a.virtualScrollHorizontal,m.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),f=e.value-1,B=c.scrollMaxSize-c.offsetStart-c.offsetEnd-O.value;if(I===c.scrollStart)return;if(c.scrollMaxSize<=0){re(n,c,0,0);return}b!==c.scrollViewSize&&J(c.scrollViewSize),Ve(_.value.from);const D=Math.floor(c.scrollMaxSize-Math.max(c.scrollViewSize,c.offsetEnd)-Math.min(S[f],c.scrollViewSize/2));if(D>0&&Math.ceil(c.scrollStart)>=D){re(n,c,f,c.scrollMaxSize-c.offsetEnd-M.reduce(be,0));return}let k=0,g=c.scrollStart-c.offsetStart,P=g;if(g<=B&&g+c.scrollViewSize>=H.value)g-=H.value,k=_.value.from,P=g;else for(let C=0;g>=M[C]&&k<f;C++)g-=M[C],k+=W;for(;g>0&&k<f;)g-=S[k],g>-c.scrollViewSize?(k++,P=g):P=S[k]+g;re(n,c,k,P)}function re(n,c,f,B,D){const k=typeof D=="string"&&D.indexOf("-force")>-1,g=k===!0?D.replace("-force",""):D,P=g!==void 0?g:"start";let C=Math.max(0,f-w.value[P]),Q=C+w.value.total;Q>e.value&&(Q=e.value,C=Math.max(0,Q-w.value.total)),I=c.scrollStart;const ce=C!==_.value.from||Q!==_.value.to;if(ce===!1&&g===void 0){ke(f);return}const{activeElement:xe}=document,Y=T.value;ce===!0&&Y!==null&&Y!==xe&&Y.contains(xe)===!0&&(Y.addEventListener("focusout",pe),setTimeout(()=>{Y!==null&&Y.removeEventListener("focusout",pe)})),Dl(Y,f-C);const Be=g!==void 0?S.slice(C,f).reduce(be,0):0;if(ce===!0){const le=Q>=_.value.from&&C<=_.value.to?_.value.to:Q;_.value={from:C,to:le},H.value=ze(M,S,0,C),O.value=ze(M,S,Q,e.value),requestAnimationFrame(()=>{_.value.to!==Q&&I===c.scrollStart&&(_.value={from:_.value.from,to:Q},O.value=ze(M,S,Q,e.value))})}requestAnimationFrame(()=>{if(I!==c.scrollStart)return;ce===!0&&Ve(C);const le=S.slice(C,f).reduce(be,0),de=le+c.offsetStart+H.value,Fe=de+S[f];let qe=de+B;if(g!==void 0){const He=le-Be,K=c.scrollStart+He;qe=k!==!0&&K<de&&Fe<K+c.scrollViewSize?K:g==="end"?Fe-c.scrollViewSize:de-(g==="start"?0:Math.round((c.scrollViewSize-S[f])/2))}I=qe,pt(n,qe,a.virtualScrollHorizontal,m.lang.rtl),ke(f)})}function Ve(n){const c=T.value;if(c){const f=Mt.call(c.children,C=>C.classList&&C.classList.contains("q-virtual-scroll--skip")===!1),B=f.length,D=a.virtualScrollHorizontal===!0?C=>C.getBoundingClientRect().width:C=>C.offsetHeight;let k=n,g,P;for(let C=0;C<B;){for(g=D(f[C]),C++;C<B&&f[C].classList.contains("q-virtual-scroll--with-prev")===!0;)g+=D(f[C]),C++;P=g-S[k],P!==0&&(S[k]+=P,M[Math.floor(k/W)]+=P),k++}}}function pe(){T.value!==null&&T.value!==void 0&&T.value.focus()}function te(n,c){const f=1*V.value;(c===!0||Array.isArray(S)===!1)&&(S=[]);const B=S.length;S.length=e.value;for(let k=e.value-1;k>=B;k--)S[k]=f;const D=Math.floor((e.value-1)/W);M=[];for(let k=0;k<=D;k++){let g=0;const P=Math.min((k+1)*W,e.value);for(let C=k*W;C<P;C++)g+=S[C];M.push(g)}s=-1,I=void 0,H.value=ze(M,S,0,_.value.from),O.value=ze(M,S,_.value.to,e.value),n>=0?(Ve(_.value.from),Z(()=>{ee(n)})):se()}function J(n){if(n===void 0&&typeof window!="undefined"){const g=i();g!=null&&g.nodeType!==8&&(n=Ye(g,r(),N.value,x.value,a.virtualScrollHorizontal,m.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}b=n;const c=parseFloat(a.virtualScrollSliceRatioBefore)||0,f=parseFloat(a.virtualScrollSliceRatioAfter)||0,B=1+c+f,D=n===void 0||n<=0?1:Math.ceil(n/V.value),k=Math.max(1,D,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/B));w.value={total:Math.ceil(k*B),start:Math.ceil(k*c),center:Math.ceil(k*(.5+c)),end:Math.ceil(k*(1+c)),view:D}}function Me(n,c){const f=a.virtualScrollHorizontal===!0?"width":"height",B={["--q-virtual-scroll-item-"+f]:V.value+"px"};return[n==="tbody"?p(n,{class:"q-virtual-scroll__padding",key:"before",ref:N},[p("tr",[p("td",{style:{[f]:`${H.value}px`,...B},colspan:R.value})])]):p(n,{class:"q-virtual-scroll__padding",key:"before",ref:N,style:{[f]:`${H.value}px`,...B}}),p(n,{class:"q-virtual-scroll__content",key:"content",ref:T,tabindex:-1},c.flat()),n==="tbody"?p(n,{class:"q-virtual-scroll__padding",key:"after",ref:x},[p("tr",[p("td",{style:{[f]:`${O.value}px`,...B},colspan:R.value})])]):p(n,{class:"q-virtual-scroll__padding",key:"after",ref:x,style:{[f]:`${O.value}px`,...B}})]}function ke(n){s!==n&&(a.onVirtualScroll!==void 0&&v("virtualScroll",{index:n,from:_.value.from,to:_.value.to-1,direction:n<s?"decrease":"increase",ref:y}),s=n)}J();const se=ul(X,m.platform.is.ios===!0?120:35);nl(()=>{J()});let o=!1;return al(()=>{o=!0}),ol(()=>{if(o!==!0)return;const n=i();I!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?pt(n,I,a.virtualScrollHorizontal,m.lang.rtl):ee(s)}),_t(()=>{se.cancel()}),Object.assign(y,{scrollTo:ee,reset:ie,refresh:Ce}),{virtualScrollSliceRange:_,virtualScrollSliceSizeComputed:w,setVirtualScrollSize:J,onVirtualScrollEvt:se,localResetVirtualScroll:te,padVirtualScroll:Me,scrollTo:ee,reset:ie,refresh:Ce}}const kt=e=>["add","add-unique","toggle"].includes(e),Ql=".*+?^${}()|[]\\",Kl=Object.keys(Ze);var jl=Je({name:"QSelect",inheritAttrs:!1,props:{...$l,...il,...Ze,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:kt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...xt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:i,emit:r}){const{proxy:V}=et(),{$q:A}=V,a=F(!1),v=F(!1),y=F(-1),m=F(""),I=F(!1),s=F(!1);let b=null,M,S,H,O=null,w,N,x,T;const _=F(null),R=F(null),G=F(null),we=F(null),ie=F(null),Ce=rl(e),ee=ml(dt),X=h(()=>Array.isArray(e.options)?e.options.length:0),re=h(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Ve,virtualScrollSliceSizeComputed:pe,localResetVirtualScroll:te,padVirtualScroll:J,onVirtualScrollEvt:Me,scrollTo:ke,setVirtualScrollSize:se}=Nl({virtualScrollLength:X,getVirtualScrollTarget:Lt,getVirtualScrollEl:st,virtualScrollItemSizeComputed:re}),o=At(),n=h(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&M!==void 0?M:[],d=u.map(z=>Et(z,l));return e.modelValue===null&&t===!0?d.filter(z=>z!==null):d}return u}),c=h(()=>{const t={};return Kl.forEach(u=>{const l=e[u];l!==void 0&&(t[u]=l)}),t}),f=h(()=>e.optionsDark===null?o.isDark.value:e.optionsDark),B=h(()=>gt(n.value)),D=h(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),k=h(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),g=h(()=>X.value===0),P=h(()=>n.value.map(t=>U.value(t)).join(", ")),C=h(()=>e.displayValue!==void 0?e.displayValue:P.value),Q=h(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ce=h(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(Q.value))),xe=h(()=>o.focused.value===!0?e.tabindex:-1),Y=h(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${o.targetUid.value}_lb`};return y.value>=0&&(t["aria-activedescendant"]=`${o.targetUid.value}_${y.value}`),t}),Be=h(()=>({id:`${o.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),le=h(()=>n.value.map((t,u)=>({index:u,opt:t,html:Q.value(t),selected:!0,removeAtIndex:Ot,toggleOption:ue,tabindex:xe.value}))),de=h(()=>{if(X.value===0)return[];const{from:t,to:u}=Ve.value;return e.options.slice(t,u).map((l,d)=>{const z=fe.value(l)===!0,q=t+d,E={clickable:!0,active:!1,activeClass:He.value,manualFocus:!0,focused:!1,disable:z,tabindex:-1,dense:e.optionsDense,dark:f.value,role:"option",id:`${o.targetUid.value}_${q}`,onClick:()=>{ue(l)}};return z!==!0&&($e(l)===!0&&(E.active=!0),y.value===q&&(E.focused=!0),E["aria-selected"]=E.active===!0?"true":"false",A.platform.is.desktop===!0&&(E.onMousemove=()=>{a.value===!0&&ve(q)})),{index:q,opt:l,html:Q.value(l),label:U.value(l),selected:E.active,focused:E.focused,toggleOption:ue,setOptionIndex:ve,itemProps:E}})}),Fe=h(()=>e.dropdownIcon!==void 0?e.dropdownIcon:A.iconSet.arrow.dropdown),qe=h(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),He=h(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),K=h(()=>Pe(e.optionValue,"value")),U=h(()=>Pe(e.optionLabel,"label")),fe=h(()=>Pe(e.optionDisable,"disable")),Oe=h(()=>n.value.map(t=>K.value(t))),Ft=h(()=>{const t={onInput:dt,onChange:ee,onKeydown:rt,onKeyup:ot,onKeypress:it,onFocus:nt,onClick(u){S===!0&&ye(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=ee,t});oe(n,t=>{M=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&o.innerLoading.value!==!0&&(v.value!==!0&&a.value!==!0||B.value!==!0)&&(H!==!0&&he(),(v.value===!0||a.value===!0)&&me(""))},{immediate:!0}),oe(()=>e.fillInput,he),oe(a,Ne),oe(X,Wt);function lt(t){return e.emitValue===!0?K.value(t):t}function De(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const u=e.modelValue.slice();r("remove",{index:t,value:u.splice(t,1)[0]}),r("update:modelValue",u)}else r("update:modelValue",null)}function Ot(t){De(t),o.focus()}function ut(t,u){const l=lt(t);if(e.multiple!==!0){e.fillInput===!0&&Ae(U.value(t),!0,!0),r("update:modelValue",l);return}if(n.value.length===0){r("add",{index:0,value:l}),r("update:modelValue",e.multiple===!0?[l]:l);return}if(u===!0&&$e(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const d=e.modelValue.slice();r("add",{index:d.length,value:l}),d.push(l),r("update:modelValue",d)}function ue(t,u){if(o.editable.value!==!0||t===void 0||fe.value(t)===!0)return;const l=K.value(t);if(e.multiple!==!0){u!==!0&&(Ae(e.fillInput===!0?U.value(t):"",!0,!0),ne()),R.value!==null&&R.value.focus(),(n.value.length===0||_e(K.value(n.value[0]),l)!==!0)&&r("update:modelValue",e.emitValue===!0?l:t);return}if((S!==!0||I.value===!0)&&o.focus(),nt(),n.value.length===0){const q=e.emitValue===!0?l:t;r("add",{index:0,value:q}),r("update:modelValue",e.multiple===!0?[q]:q);return}const d=e.modelValue.slice(),z=Oe.value.findIndex(q=>_e(q,l));if(z>-1)r("remove",{index:z,value:d.splice(z,1)[0]});else{if(e.maxValues!==void 0&&d.length>=e.maxValues)return;const q=e.emitValue===!0?l:t;r("add",{index:d.length,value:q}),d.push(q)}r("update:modelValue",d)}function ve(t){if(A.platform.is.desktop!==!0)return;const u=t>-1&&t<X.value?t:-1;y.value!==u&&(y.value=u)}function Ee(t=1,u){if(a.value===!0){let l=y.value;do l=ht(l+t,-1,X.value-1);while(l!==-1&&l!==y.value&&fe.value(e.options[l])===!0);y.value!==l&&(ve(l),ke(l),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Le(l>=0?U.value(e.options[l]):w))}}function Et(t,u){const l=d=>_e(K.value(d),t);return e.options.find(l)||u.find(l)||t}function Pe(t,u){const l=t!==void 0?t:u;return typeof l=="function"?l:d=>d!==null&&typeof d=="object"&&l in d?d[l]:d}function $e(t){const u=K.value(t);return Oe.value.find(l=>_e(l,u))!==void 0}function nt(t){e.useInput===!0&&R.value!==null&&(t===void 0||R.value===t.target&&t.target.value===P.value)&&R.value.select()}function at(t){dl(t,27)===!0&&a.value===!0&&(ye(t),ne(),he()),r("keyup",t)}function ot(t){const{value:u}=t.target;if(t.keyCode!==void 0){at(t);return}if(t.target.value="",b!==null&&(clearTimeout(b),b=null),he(),typeof u=="string"&&u.length!==0){const l=u.toLocaleLowerCase(),d=q=>{const E=e.options.find($=>q.value($).toLocaleLowerCase()===l);return E===void 0?!1:(n.value.indexOf(E)===-1?ue(E):ne(),!0)},z=q=>{d(K)!==!0&&(d(U)===!0||q===!0||me(u,!0,()=>z(!0)))};z()}else o.clearValue(t)}function it(t){r("keypress",t)}function rt(t){if(r("keydown",t),fl(t)===!0)return;const u=m.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(y.value>-1||u===!0);if(t.keyCode===27){Ke(t);return}if(t.keyCode===9&&l===!1){Se();return}if(t.target===void 0||t.target.id!==o.targetUid.value||o.editable.value!==!0)return;if(t.keyCode===40&&o.innerLoading.value!==!0&&a.value===!1){ae(t),ge();return}if(t.keyCode===8&&e.hideSelected!==!0&&m.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?De(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&r("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof m.value!="string"||m.value.length===0)&&(ae(t),y.value=-1,Ee(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&pe.value!==void 0&&(ae(t),y.value=Math.max(-1,Math.min(X.value,y.value+(t.keyCode===33?-1:1)*pe.value.view)),Ee(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ae(t),Ee(t.keyCode===38?-1:1,e.multiple));const d=X.value;if((x===void 0||T<Date.now())&&(x=""),d>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||x.length!==0)){a.value!==!0&&ge(t);const z=t.key.toLocaleLowerCase(),q=x.length===1&&x[0]===z;T=Date.now()+1500,q===!1&&(ae(t),x+=z);const E=new RegExp("^"+x.split("").map(Qe=>Ql.indexOf(Qe)>-1?"\\"+Qe:Qe).join(".*"),"i");let $=y.value;if(q===!0||$<0||E.test(U.value(e.options[$]))!==!0)do $=ht($+1,-1,d-1);while($!==y.value&&(fe.value(e.options[$])===!0||E.test(U.value(e.options[$]))!==!0));y.value!==$&&Z(()=>{ve($),ke($),$>=0&&e.useInput===!0&&e.fillInput===!0&&Le(U.value(e.options[$]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||x!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&ae(t),y.value>-1&&y.value<d){ue(e.options[y.value]);return}if(u===!0){const z=(q,E)=>{if(E){if(kt(E)!==!0)return}else E=e.newValueMode;if(Ae("",e.multiple!==!0,!0),q==null)return;(E==="toggle"?ue:ut)(q,E==="add-unique"),e.multiple!==!0&&(R.value!==null&&R.value.focus(),ne())};if(e.onNewValue!==void 0?r("newValue",m.value,z):z(m.value),e.multiple!==!0)return}a.value===!0?Se():o.innerLoading.value!==!0&&ge()}}function st(){return S===!0?ie.value:G.value!==null&&G.value.contentEl!==null?G.value.contentEl:void 0}function Lt(){return st()}function Rt(){return e.hideSelected===!0?[]:i["selected-item"]!==void 0?le.value.map(t=>i["selected-item"](t)).slice():i.selected!==void 0?[].concat(i.selected()):e.useChips===!0?le.value.map((t,u)=>p(Tl,{key:"option-"+u,removable:o.editable.value===!0&&fe.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:xe.value,onRemove(){t.removeAtIndex(u)}},()=>p("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:U.value(t.opt)}))):[p("span",{[ce.value===!0?"innerHTML":"textContent"]:C.value})]}function ct(){if(g.value===!0)return i["no-option"]!==void 0?i["no-option"]({inputValue:m.value}):void 0;const t=i.option!==void 0?i.option:l=>p(It,{key:l.index,...l.itemProps},()=>p(Re,()=>p(Te,()=>p("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let u=J("div",de.value.map(t));return i["before-options"]!==void 0&&(u=i["before-options"]().concat(u)),Sl(i["after-options"],u)}function Tt(t,u){const l=u===!0?{...Y.value,...o.splitAttrs.attributes.value}:void 0,d={ref:u===!0?R:void 0,key:"i_t",class:D.value,style:e.inputStyle,value:m.value!==void 0?m.value:"",type:"search",...l,id:u===!0?o.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Ft.value};return t!==!0&&S===!0&&(Array.isArray(d.class)===!0?d.class=[...d.class,"no-pointer-events"]:d.class+=" no-pointer-events"),p("input",d)}function dt(t){b!==null&&(clearTimeout(b),b=null),!(t&&t.target&&t.target.qComposing===!0)&&(Le(t.target.value||""),H=!0,w=m.value,o.focused.value!==!0&&(S!==!0||I.value===!0)&&o.focus(),e.onFilter!==void 0&&(b=setTimeout(()=>{b=null,me(m.value)},e.inputDebounce)))}function Le(t){m.value!==t&&(m.value=t,r("inputValue",t))}function Ae(t,u,l){H=l!==!0,e.useInput===!0&&(Le(t),(u===!0||l!==!0)&&(w=t),u!==!0&&me(t))}function me(t,u,l){if(e.onFilter===void 0||u!==!0&&o.focused.value!==!0)return;o.innerLoading.value===!0?r("filterAbort"):(o.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&n.value.length!==0&&H!==!0&&t===U.value(n.value[0])&&(t="");const d=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);O!==null&&clearTimeout(O),O=d,r("filter",t,(z,q)=>{(u===!0||o.focused.value===!0)&&O===d&&(clearTimeout(O),typeof z=="function"&&z(),s.value=!1,Z(()=>{o.innerLoading.value=!1,o.editable.value===!0&&(u===!0?a.value===!0&&ne():a.value===!0?Ne(!0):a.value=!0),typeof q=="function"&&Z(()=>{q(V)}),typeof l=="function"&&Z(()=>{l(V)})}))},()=>{o.focused.value===!0&&O===d&&(clearTimeout(O),o.innerLoading.value=!1,s.value=!1),a.value===!0&&(a.value=!1)})}function Ht(){return p(vl,{ref:G,class:k.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&g.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:f.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:qe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Be.value,onScrollPassive:Me,onBeforeShow:vt,onBeforeHide:Dt,onShow:Pt},ct)}function Dt(t){mt(t),Se()}function Pt(){se()}function $t(t){ye(t),R.value!==null&&R.value.focus(),I.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Nt(t){ye(t),Z(()=>{I.value=!1})}function Qt(){const t=[p(Ll,{class:`col-auto ${o.fieldClass.value}`,...c.value,for:o.targetUid.value,dark:f.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:m.value.length!==0,...o.splitAttrs.listeners.value,onFocus:$t,onBlur:Nt},{...i,rawControl:()=>o.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(p("div",{ref:ie,class:k.value+" scroll",style:e.popupContentStyle,...Be.value,onClick:Ke,onScrollPassive:Me},ct())),p(zt,{ref:we,modelValue:v.value,position:e.useInput===!0?"top":void 0,transitionShow:N,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:vt,onBeforeHide:Kt,onHide:jt,onShow:Ut},()=>p("div",{class:"q-select__dialog"+(f.value===!0?" q-select__dialog--dark q-dark":"")+(I.value===!0?" q-select__dialog--focused":"")},t))}function Kt(t){mt(t),we.value!==null&&we.value.__updateRefocusTarget(o.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),o.focused.value=!1}function jt(t){ne(),o.focused.value===!1&&r("blur",t),he()}function Ut(){const t=document.activeElement;(t===null||t.id!==o.targetUid.value)&&R.value!==null&&R.value!==t&&R.value.focus(),se()}function Se(){v.value!==!0&&(y.value=-1,a.value===!0&&(a.value=!1),o.focused.value===!1&&(O!==null&&(clearTimeout(O),O=null),o.innerLoading.value===!0&&(r("filterAbort"),o.innerLoading.value=!1,s.value=!1)))}function ge(t){o.editable.value===!0&&(S===!0?(o.onControlFocusin(t),v.value=!0,Z(()=>{o.focus()})):o.focus(),e.onFilter!==void 0?me(m.value):(g.value!==!0||i["no-option"]!==void 0)&&(a.value=!0))}function ne(){v.value=!1,Se()}function he(){e.useInput===!0&&Ae(e.multiple!==!0&&e.fillInput===!0&&n.value.length!==0&&U.value(n.value[0])||"",!0,!0)}function Ne(t){let u=-1;if(t===!0){if(n.value.length!==0){const l=K.value(n.value[0]);u=e.options.findIndex(d=>_e(K.value(d),l))}te(u)}ve(u)}function Wt(t,u){a.value===!0&&o.innerLoading.value===!1&&(te(-1,!0),Z(()=>{a.value===!0&&o.innerLoading.value===!1&&(t>u?te():Ne(!0))}))}function ft(){v.value===!1&&G.value!==null&&G.value.updatePosition()}function vt(t){t!==void 0&&ye(t),r("popupShow",t),o.hasPopupOpen=!0,o.onControlFocusin(t)}function mt(t){t!==void 0&&ye(t),r("popupHide",t),o.hasPopupOpen=!1,o.onControlFocusout(t)}function St(){S=A.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?i["no-option"]!==void 0||e.onFilter!==void 0||g.value===!1:!0),N=A.platform.is.ios===!0&&S===!0&&e.useInput===!0?"fade":e.transitionShow}return sl(St),cl(ft),St(),_t(()=>{b!==null&&clearTimeout(b)}),Object.assign(V,{showPopup:ge,hidePopup:ne,removeAtIndex:De,add:ut,toggleOption:ue,getOptionIndex:()=>y.value,setOptionIndex:ve,moveOptionSelection:Ee,filter:me,updateMenuPosition:ft,updateInputValue:Ae,isOptionSelected:$e,getEmittingOptionValue:lt,isOptionDisabled:(...t)=>fe.value.apply(null,t)===!0,getOptionValue:(...t)=>K.value.apply(null,t),getOptionLabel:(...t)=>U.value.apply(null,t)}),Object.assign(o,{innerValue:n,fieldClass:h(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:_,targetRef:R,hasValue:B,showPopup:ge,floatingLabel:h(()=>e.hideSelected!==!0&&B.value===!0||typeof m.value=="number"||m.value.length!==0||gt(e.displayValue)),getControlChild:()=>{if(o.editable.value!==!1&&(v.value===!0||g.value!==!0||i["no-option"]!==void 0))return S===!0?Qt():Ht();o.hasPopupOpen===!0&&(o.hasPopupOpen=!1)},controlEvents:{onFocusin(t){o.onControlFocusin(t)},onFocusout(t){o.onControlFocusout(t,()=>{he(),Se()})},onClick(t){if(Ke(t),S!==!0&&a.value===!0){Se(),R.value!==null&&R.value.focus();return}ge(t)}},getControl:t=>{const u=Rt(),l=t===!0||v.value!==!0||S!==!0;if(e.useInput===!0)u.push(Tt(t,l));else if(o.editable.value===!0){const z=l===!0?Y.value:void 0;u.push(p("input",{ref:l===!0?R:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?o.targetUid.value:void 0,value:C.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...z,onKeydown:rt,onKeyup:at,onKeypress:it})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&u.push(p("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:ot}))}if(Ce.value!==void 0&&e.disable!==!0&&Oe.value.length!==0){const z=Oe.value.map(q=>p("option",{value:q,selected:!0}));u.push(p("select",{class:"hidden",name:Ce.value,multiple:e.multiple},z))}const d=e.useInput===!0||l!==!0?void 0:o.splitAttrs.attributes.value;return p("div",{class:"q-field__native row items-center",...d,...o.splitAttrs.listeners.value},u)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[p(Ie,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:Fe.value})]:null}),qt(o)}});const Ul=hl({name:"ListProducts",setup(){const e=yl(),i=bl(),{monetize:r}=Fl(),{excluir:V}=Ol(),A=El(),a=F([]),v=F(),y="expense",m=F({}),I=F(!1),s=F("Todos"),b=async()=>{try{await A.listConta(),a.value=A.list}catch(x){e.notify({message:x,color:"negative",icon:"close"})}},M=(x=!1,T)=>{e.bottomSheet({message:"Selecione uma op\xE7\xE3o",grid:x,actions:[{label:"Editar",icon:"edit",color:"positive",size:"sm",id:"edit",item:T},{label:"Deletar",icon:"delete",color:"negative",id:"delete",item:T}]}).onOk(_=>{_.id==="delete"&&_.item.id?(m.value=_.item,S()):_.id==="edit"&&_.item.id&&i.push({name:"editar",params:{id:_.item.id}})}).onCancel(()=>{}).onDismiss(()=>{})},S=()=>{I.value=!0},H=()=>{const{id:x}=m.value;V(y,x).then(()=>{e.notify({message:"Produto excluida com sucesso!",color:"positive",icon:"delete"}),b()}).catch(T=>{e.notify({message:T,color:"negative",icon:"close"})})},O=x=>r(x),w=()=>{setTimeout(()=>{const x=a.value.filter(T=>T.name.startsWith(v.value));a.value=x},500)},N=(x,T)=>x!==0&&T>0?"positive":"negative";return wl(async()=>{v.value&&w()}),oe(s,async x=>{x!=="Todos"?(await A.getByCategoria(x),a.value=A.list):b()}),Cl(()=>{b()}),{expenses:a,expenseName:v,collection:y,expense:m,confirm:I,getExpenses:b,show:M,modalActive:S,deleteExpense:H,setMonetize:O,setColor:N,model:s,options:["Acougue","Alimentos","Cerveja","Limpeza","Sacolao","Outros","Todos"]}}}),Bt=e=>(Ml("data-v-229e23d7"),e=e(),Bl(),e),Wl={class:"q-pa-md",style:{}},Xl=Bt(()=>tt("div",{style:{height:"100px"}},null,-1)),Yl=Bt(()=>tt("span",{class:"q-ml-sm"},"Deseja excluir este item?",-1));function Gl(e,i,r,V,A,a){return je(),yt(bt,null,[L(Vl,{outlined:"",label:"Buscar...",modelValue:e.expenseName,"onUpdate:modelValue":i[0]||(i[0]=v=>e.expenseName=v),modelModifiers:{trim:!0},class:"q-pa-md"},{append:j(()=>[L(wt,null,{default:j(()=>[L(Ie,{name:"search"})]),_:1})]),_:1},8,["modelValue"]),L(jl,{outlined:"",modelValue:e.model,"onUpdate:modelValue":i[1]||(i[1]=v=>e.model=v),options:e.options,label:"Categoria",class:"q-pa-md"},null,8,["modelValue","options"]),tt("div",Wl,[(je(!0),yt(bt,null,pl(e.expenses,v=>(je(),kl(Al,{key:v.id},{default:j(()=>[L(It,null,{default:j(()=>[L(Re,null,{default:j(()=>[L(Te,null,{default:j(()=>[Ue("Produto: "+We(v.name),1)]),_:2},1024),L(Te,null,{default:j(()=>[Ue("Valor: R$ "+We(e.setMonetize(v.amount)),1)]),_:2},1024),L(Te,{caption:"",lines:"2"},{default:j(()=>[Ue("Quantidade: "+We(v.quantity),1)]),_:2},1024)]),_:2},1024),L(Re,{side:""},{default:j(()=>[L(xl,{color:e.setColor(v.quantity,v.amount),rounded:""},null,8,["color"])]),_:2},1024),L(Re,{avatar:""},{default:j(()=>[L(Xe,{icon:"tune","no-caps":"",outline:"",onClick:y=>e.show(null,v)},null,8,["onClick"])]),_:2},1024)]),_:2},1024),L(ql,{spaced:"",inset:""})]),_:2},1024))),128)),Xl,L(zt,{modelValue:e.confirm,"onUpdate:modelValue":i[3]||(i[3]=v=>e.confirm=v),persistent:""},{default:j(()=>[L(_l,null,{default:j(()=>[L(zl,{class:"row items-center"},{default:j(()=>[L(wt,{icon:"delete",color:"negative","text-color":"white"}),Yl]),_:1}),L(Il,{align:"right"},{default:j(()=>[Ct(L(Xe,{flat:"",label:"Cancelar",color:"dark"},null,512),[[Vt]]),Ct(L(Xe,{flat:"",label:"Excluir",color:"negative",onClick:i[2]||(i[2]=v=>e.deleteExpense())},null,512),[[Vt]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64)}var lu=gl(Ul,[["render",Gl],["__scopeId","data-v-229e23d7"]]);export{lu as default};
