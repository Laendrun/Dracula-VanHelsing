import{_}from"./CYYUZr3o.js";import{k as Q,l as Ve,m as Ue,p as Ee,q as g,s as H,v as Te,x as Le,y as w,z as L,A as T,B as ee,C,o as y,j as N,w as I,c as m,n as h,D as v,i as x,E as S,G as ne,H as D,I as U,J as Y,K as ie,L as me,M as Me,N as Je,a as E,b as j,O as De,P as he,Q as A,F as R,d as J,t as V,R as X,S as He,T as Ke,U as Re,r as We,f as Qe,e as M}from"./CZ-P3nhg.js";import{_ as F}from"./DlAUqK2U.js";import{_ as Ye}from"./86r3jZps.js";import"./DtvR-4DX.js";const de=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function te(e,a){a?a={...de,...a}:a=de;const n=ve(a);return n.dispatch(e),n.toString()}const Ze=Object.freeze(["prototype","__proto__","constructor"]);function ve(e){let a="",n=new Map;const t=r=>{a+=r};return{toString(){return a},getContext(){return n},dispatch(r){return e.replacer&&(r=e.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const i=Object.prototype.toString.call(r);let l="";const s=i.length;s<10?l="unknown:["+i+"]":l=i.slice(8,s-1),l=l.toLowerCase();let d=null;if((d=n.get(r))===void 0)n.set(r,n.size);else return this.dispatch("[CIRCULAR:"+d+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return t("buffer:"),t(r.toString("utf8"));if(l!=="object"&&l!=="function"&&l!=="asyncfunction")this[l]?this[l](r):e.ignoreUnknown||this.unkown(r,l);else{let o=Object.keys(r);e.unorderedObjects&&(o=o.sort());let f=[];e.respectType!==!1&&!ce(r)&&(f=Ze),e.excludeKeys&&(o=o.filter(c=>!e.excludeKeys(c)),f=f.filter(c=>!e.excludeKeys(c))),t("object:"+(o.length+f.length)+":");const u=c=>{this.dispatch(c),t(":"),e.excludeValues||this.dispatch(r[c]),t(",")};for(const c of o)u(c);for(const c of f)u(c)}},array(r,i){if(i=i===void 0?e.unorderedArrays!==!1:i,t("array:"+r.length+":"),!i||r.length<=1){for(const d of r)this.dispatch(d);return}const l=new Map,s=r.map(d=>{const o=ve(e);o.dispatch(d);for(const[f,u]of o.getContext())l.set(f,u);return o.toString()});return n=l,s.sort(),this.array(s,!1)},date(r){return t("date:"+r.toJSON())},symbol(r){return t("symbol:"+r.toString())},unkown(r,i){if(t(i),!!r&&(t(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return t("error:"+r.toString())},boolean(r){return t("bool:"+r)},string(r){t("string:"+r.length+":"),t(r)},function(r){t("fn:"),ce(r)?this.dispatch("[native]"):this.dispatch(r.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),e.respectFunctionProperties&&this.object(r)},number(r){return t("number:"+r)},xml(r){return t("xml:"+r.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(r){return t("regex:"+r.toString())},uint8array(r){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return t("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return t("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return t("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return t("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return t("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return t("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return t("url:"+r.toString())},map(r){t("map:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},set(r){t("set:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},file(r){return t("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(e.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(r){return t("bigint:"+r.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const ke="[native code] }",Ge=ke.length;function ce(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-Ge)===ke}function fe(e,a,n={}){return e===a||te(e,n)===te(a,n)}function Xe(e,a,n={}){const t=ae(e,n),r=ae(a,n);return we(t,r,n)}function we(e,a,n={}){var i,l;const t=[],r=new Set([...Object.keys(e.props||{}),...Object.keys(a.props||{})]);if(e.props&&a.props)for(const s of r){const d=e.props[s],o=a.props[s];d&&o?t.push(...we((i=e.props)==null?void 0:i[s],(l=a.props)==null?void 0:l[s],n)):(d||o)&&t.push(new ge((o||d).key,d?"removed":"added",o,d))}return r.size===0&&e.hash!==a.hash&&t.push(new ge((a||e).key,"changed",a,e)),t}function ae(e,a,n=""){if(e&&typeof e!="object")return new pe(n,e,te(e,a));const t={},r=[];for(const i in e)t[i]=ae(e[i],a,n?`${n}.${i}`:i),r.push(t[i].hash);return new pe(n,e,`{${r.join(":")}}`,t)}class ge{constructor(a,n,t,r){this.key=a,this.type=n,this.newValue=t,this.oldValue=r}toString(){return this.toJSON()}toJSON(){var a;switch(this.type){case"added":return`Added   \`${this.key}\``;case"removed":return`Removed \`${this.key}\``;case"changed":return`Changed \`${this.key}\` from \`${((a=this.oldValue)==null?void 0:a.toString())||"-"}\` to \`${this.newValue.toString()}\``}}}class pe{constructor(a,n,t,r){this.key=a,this.value=n,this.hash=t,this.props=r}toString(){return this.props?`{${Object.keys(this.props).join(",")}}`:JSON.stringify(this.value)}toJSON(){const a=this.key||".";return this.props?`${a}({${Object.keys(this.props).join(",")}})`:`${a}(${this.value})`}}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ye=()=>{};function Pe(e,a){function n(...t){return new Promise((r,i)=>{Promise.resolve(e(()=>a.apply(this,t),{fn:a,thisArg:this,args:t})).then(r).catch(i)})}return n}function _e(e,a={}){let n,t,r=ye;const i=s=>{clearTimeout(s),r(),r=ye};return s=>{const d=Q(e),o=Q(a.maxWait);return n&&i(n),d<=0||o!==void 0&&o<=0?(t&&(i(t),t=null),Promise.resolve(s())):new Promise((f,u)=>{r=a.rejectOnCancel?u:f,o&&!t&&(t=setTimeout(()=>{n&&i(n),t=null,f(s())},o)),n=setTimeout(()=>{t&&i(t),t=null,f(s())},d)})}}function er(e,a=200,n={}){return Pe(_e(a,n),e)}const W=new Map;function rr(e){const a=Ve();function n(s){var d;const o=W.get(e)||new Set;o.add(s),W.set(e,o);const f=()=>r(s);return(d=a==null?void 0:a.cleanups)==null||d.push(f),f}function t(s){function d(...o){r(d),s(...o)}return n(d)}function r(s){const d=W.get(e);d&&(d.delete(s),d.size||i())}function i(){W.delete(e)}function l(s,d){var o;(o=W.get(e))==null||o.forEach(f=>f(s,d))}return{on:n,once:t,off:r,emit:l,reset:i}}const le={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},tr=e=>Object.keys(le).reduce((n,t)=>(e[t]!==void 0&&(n[t]=e[t]),n),{}),Z=(e,a,n,t,r=!1)=>{const i=Ue(),l=Ee(),s=g(()=>{var c;const o=Q(a),f=Q(n),u=Q(t);return H((o==null?void 0:o.strategy)||((c=l.ui)==null?void 0:c.strategy),u?{wrapper:u}:{},o||{},r?Te(l.ui,e,{}):{},f||{})}),d=g(()=>Le(i,["class"]));return{ui:s,attrs:d}},ar={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},Se={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"},se={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",form:"form-input",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",file:{base:"file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},be={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid",empty:{label:"No options."},optionEmpty:{label:'No results for "{query}".'}},arrow:{...Se,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},nr={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}};({...se});({...se});({...be,option:{...be.option},arrow:{...Se}});const ir={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},lr={base:"mx-auto",padding:"px-4 sm:px-6 lg:px-8",constrained:"max-w-7xl"},sr=H(w.ui.strategy,w.ui.card,ir),or=L({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:n}=Z("card",T(e,"ui"),sr),t=g(()=>ee(C(a.value.base,a.value.rounded,a.value.divide,a.value.ring,a.value.shadow,a.value.background),e.class));return{ui:a,attrs:n,cardClass:t}}});function ur(e,a,n,t,r,i){return y(),N(ne(e.$attrs.onSubmit?"form":e.as),S({class:e.cardClass},e.attrs),{default:I(()=>[e.$slots.header?(y(),m("div",{key:0,class:h([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[v(e.$slots,"header")],2)):x("",!0),e.$slots.default?(y(),m("div",{key:1,class:h([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[v(e.$slots,"default")],2)):x("",!0),e.$slots.footer?(y(),m("div",{key:2,class:h([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[v(e.$slots,"footer")],2)):x("",!0)]),_:3},16,["class"])}const dr=F(or,[["render",ur]]),cr=(e,a,n=!0)=>{const t=D("form-events",void 0),r=D("form-group",void 0),i=D("form-inputs",void 0);r&&(!n||e!=null&&e.legend?r.inputId.value=void 0:e!=null&&e.id&&(r.inputId.value=e==null?void 0:e.id),i&&(i.value[r.name.value]=r.inputId.value));const l=U(!1);function s(u,c){t&&t.emit({type:u,path:c})}function d(){s("blur",r==null?void 0:r.name.value),l.value=!0}function o(){s("change",r==null?void 0:r.name.value)}const f=er(()=>{(l.value||r!=null&&r.eagerValidation.value)&&s("input",r==null?void 0:r.name.value)},300);return{inputId:g(()=>(e==null?void 0:e.id)??(r==null?void 0:r.inputId.value)),name:g(()=>(e==null?void 0:e.name)??(r==null?void 0:r.name.value)),size:g(()=>{var c;const u=a.size[r==null?void 0:r.size.value]?r==null?void 0:r.size.value:null;return(e==null?void 0:e.size)??u??((c=a.default)==null?void 0:c.size)}),color:g(()=>{var u;return(u=r==null?void 0:r.error)!=null&&u.value?"red":e==null?void 0:e.color}),emitFormBlur:d,emitFormInput:f,emitFormChange:o}};function $e({ui:e,props:a}){const n=Me();if(Y("ButtonGroupContextConsumer",!0),D("ButtonGroupContextConsumer",!1))return{size:g(()=>a.size),rounded:g(()=>e.value.rounded)};let r=n.parent,i;for(;r&&!i;){if(r.type.name==="ButtonGroup"){i=D(`group-${r.uid}`);break}r=r.parent}const l=g(()=>i==null?void 0:i.value.children.indexOf(n));return ie(()=>{i==null||i.value.register(n)}),me(()=>{i==null||i.value.unregister(n)}),{size:g(()=>i!=null&&i.value?(i==null?void 0:i.value.size)??e.value.default.size:a.size),rounded:g(()=>!i||l.value===-1?e.value.rounded:i.value.children.length===1?i.value.ui.rounded:l.value===0?i.value.rounded.start:l.value===i.value.children.length-1?i.value.rounded.end:"rounded-none")}}const O=H(w.ui.strategy,w.ui.input,se),fr=L({components:{UIcon:_},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>O.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(O.size).includes(e)}},color:{type:String,default:()=>O.default.color,validator(e){return[...w.ui.colors,...Object.keys(O.color)].includes(e)}},variant:{type:String,default:()=>O.default.variant,validator(e){return[...Object.keys(O.variant),...Object.values(O.color).flatMap(a=>Object.keys(a))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:a,slots:n}){const{ui:t,attrs:r}=Z("input",T(e,"ui"),O,T(e,"class")),{size:i,rounded:l}=$e({ui:t,props:e}),{emitFormBlur:s,emitFormInput:d,size:o,color:f,inputId:u,name:c}=cr(e,O),p=g(()=>i.value??o.value),k=U(Je({},e.modelModifiers,{trim:!1,lazy:!1,number:!1,nullify:!1})),$=U(null),z=()=>{var b;e.autofocus&&((b=$.value)==null||b.focus())},K=b=>{k.value.trim&&(b=b.trim()),(k.value.number||e.type==="number")&&(b=De(b)),k.value.nullify&&(b||(b=null)),a("update:modelValue",b),d()},xe=b=>{k.value.lazy||K(b.target.value)},ze=b=>{if(e.type==="file"){const q=b.target.files;a("change",q)}else{const q=b.target.value;a("change",q),k.value.lazy&&K(q),k.value.trim&&(b.target.value=q.trim())}},Ce=b=>{s(),a("blur",b)};ie(()=>{setTimeout(()=>{z()},e.autofocusDelay)});const Oe=g(()=>{var q,ue;const b=((ue=(q=t.value.color)==null?void 0:q[f.value])==null?void 0:ue[e.variant])||t.value.variant[e.variant];return ee(C(t.value.base,t.value.form,l.value,t.value.placeholder,e.type==="file"&&t.value.file.base,t.value.size[p.value],e.padded?t.value.padding[p.value]:"p-0",b==null?void 0:b.replaceAll("{color}",f.value),(G.value||n.leading)&&t.value.leading.padding[p.value],(oe.value||n.trailing)&&t.value.trailing.padding[p.value]),e.inputClass)}),G=g(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),oe=g(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),Be=g(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),je=g(()=>e.loading&&!G.value?e.loadingIcon:e.trailingIcon||e.icon),Ae=g(()=>C(t.value.icon.leading.wrapper,t.value.icon.leading.pointer,t.value.icon.leading.padding[p.value])),Ne=g(()=>C(t.value.icon.base,f.value&&w.ui.colors.includes(f.value)&&t.value.icon.color.replaceAll("{color}",f.value),t.value.icon.size[p.value],e.loading&&t.value.icon.loading)),qe=g(()=>C(t.value.icon.trailing.wrapper,t.value.icon.trailing.pointer,t.value.icon.trailing.padding[p.value])),Fe=g(()=>C(t.value.icon.base,f.value&&w.ui.colors.includes(f.value)&&t.value.icon.color.replaceAll("{color}",f.value),t.value.icon.size[p.value],e.loading&&!G.value&&t.value.icon.loading));return{ui:t,attrs:r,name:c,inputId:u,input:$,isLeading:G,isTrailing:oe,inputClass:Oe,leadingIconName:Be,leadingIconClass:Ne,leadingWrapperIconClass:Ae,trailingIconName:je,trailingIconClass:Fe,trailingWrapperIconClass:qe,onInput:xe,onChange:ze,onBlur:Ce}}}),gr=["id","name","type","required","placeholder","disabled"];function pr(e,a,n,t,r,i){const l=_;return y(),m("div",{class:h(e.type==="hidden"?"hidden":e.ui.wrapper)},[E("input",S({id:e.inputId,ref:"input",name:e.name,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.type==="file"?e.attrs:{...e.attrs,value:e.modelValue},{onInput:a[0]||(a[0]=(...s)=>e.onInput&&e.onInput(...s)),onBlur:a[1]||(a[1]=(...s)=>e.onBlur&&e.onBlur(...s)),onChange:a[2]||(a[2]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,gr),v(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(y(),m("span",{key:0,class:h(e.leadingWrapperIconClass)},[v(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[j(l,{name:e.leadingIconName,class:h(e.leadingIconClass)},null,8,["name","class"])])],2)):x("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(y(),m("span",{key:1,class:h(e.trailingWrapperIconClass)},[v(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[j(l,{name:e.trailingIconName,class:h(e.trailingIconClass)},null,8,["name","class"])])],2)):x("",!0)],2)}const yr=F(fr,[["render",pr]]),re=H(w.ui.strategy,w.ui.formGroup,nr),br=L({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(re.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:a,attrs:n}=Z("formGroup",T(e,"ui"),re,T(e,"class")),t=D("form-errors",null),r=g(()=>{var s,d;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(d=(s=t==null?void 0:t.value)==null?void 0:s.find(o=>o.path===e.name))==null?void 0:d.message}),i=g(()=>a.value.size[e.size??re.default.size]),l=U(he());return Y("form-group",{error:r,inputId:l,name:g(()=>e.name),size:g(()=>e.size),eagerValidation:g(()=>e.eagerValidation)}),{ui:a,attrs:n,inputId:l,size:i,error:r}}}),mr=["for"];function hr(e,a,n,t,r,i){return y(),m("div",S({class:e.ui.wrapper},e.attrs),[E("div",{class:h(e.ui.inner)},[e.label||e.$slots.label?(y(),m("div",{key:0,class:h([e.ui.label.wrapper,e.size])},[E("label",{for:e.inputId,class:h([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?v(e.$slots,"label",A(S({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(y(),m(R,{key:1},[J(V(e.label),1)],64))],10,mr),e.hint||e.$slots.hint?(y(),m("span",{key:0,class:h([e.ui.hint])},[e.$slots.hint?v(e.$slots,"hint",A(S({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(y(),m(R,{key:1},[J(V(e.hint),1)],64))],2)):x("",!0)],2)):x("",!0),e.description||e.$slots.description?(y(),m("p",{key:1,class:h([e.ui.description,e.size])},[e.$slots.description?v(e.$slots,"description",A(S({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(y(),m(R,{key:1},[J(V(e.description),1)],64))],2)):x("",!0)],2),E("div",{class:h([e.label?e.ui.container:""])},[v(e.$slots,"default",A(X({error:e.error}))),typeof e.error=="string"&&e.error?(y(),m("p",{key:0,class:h([e.ui.error,e.size])},[e.$slots.error?v(e.$slots,"error",A(S({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(y(),m(R,{key:1},[J(V(e.error),1)],64))],2)):e.help||e.$slots.help?(y(),m("p",{key:1,class:h([e.ui.help,e.size])},[e.$slots.help?v(e.$slots,"help",A(S({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(y(),m(R,{key:1},[J(V(e.help),1)],64))],2)):x("",!0)],2)],16)}const vr=F(br,[["render",hr]]),kr=L({inheritAttrs:!1,props:{...le,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:[Boolean,String],default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function a(t,r){const i=Xe(t,r).reduce((l,s)=>(s.type==="added"&&l.push(s.key),l),[]);return fe(t,r,{excludeKeys:l=>i.includes(l)})}function n(t,r,{isActive:i,isExactActive:l}){if(e.exactQuery==="partial"){if(!a(t.query,r.query))return e.inactiveClass}else if(e.exactQuery===!0&&!fe(t.query,r.query))return e.inactiveClass;return e.exactHash&&t.hash!==r.hash?e.inactiveClass:e.exact&&l||!e.exact&&i?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),wr=["href","aria-disabled","role","rel","target","tabindex","onClick"];function Sr(e,a,n,t,r,i){const l=Ye;return e.to?(y(),N(l,S({key:1},e.$props,{custom:""}),{default:I(({route:s,href:d,target:o,rel:f,navigate:u,isActive:c,isExactActive:p,isExternal:k})=>[E("a",S(e.$attrs,{href:e.disabled?void 0:d,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:f,target:o,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(s,e._.provides[He]||e.$route,{isActive:c,isExactActive:p}),tabindex:e.disabled?-1:void 0,onClick:$=>!k&&!e.disabled&&u($)}),[v(e.$slots,"default",A(X({isActive:e.active!==void 0?e.active:e.exact?p:c})))],16,wr)]),_:3},16)):(y(),N(ne(e.as),S({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:I(()=>[v(e.$slots,"default",A(X({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const Ie=F(kr,[["render",Sr]]),B=H(w.ui.strategy,w.ui.button,ar),$r=L({components:{UIcon:_,ULink:Ie},inheritAttrs:!1,props:{...le,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>B.default.size,validator(e){return Object.keys(B.size).includes(e)}},color:{type:String,default:()=>B.default.color,validator(e){return[...w.ui.colors,...Object.keys(B.color)].includes(e)}},variant:{type:String,default:()=>B.default.variant,validator(e){return[...Object.keys(B.variant),...Object.values(B.color).flatMap(a=>Object.keys(a))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>B.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:a}){const{ui:n,attrs:t}=Z("button",T(e,"ui"),B),{size:r,rounded:i}=$e({ui:n,props:e}),l=g(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),s=g(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),d=g(()=>e.square||!a.default&&!e.label),o=g(()=>{var z,K;const $=((K=(z=n.value.color)==null?void 0:z[e.color])==null?void 0:K[e.variant])||n.value.variant[e.variant];return ee(C(n.value.base,n.value.font,i.value,n.value.size[r.value],n.value.gap[r.value],e.padded&&n.value[d.value?"square":"padding"][r.value],$==null?void 0:$.replaceAll("{color}",e.color),e.block?n.value.block:n.value.inline),e.class)}),f=g(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),u=g(()=>e.loading&&!l.value?e.loadingIcon:e.trailingIcon||e.icon),c=g(()=>C(n.value.icon.base,n.value.icon.size[r.value],e.loading&&n.value.icon.loading)),p=g(()=>C(n.value.icon.base,n.value.icon.size[r.value],e.loading&&!l.value&&n.value.icon.loading)),k=g(()=>tr(e));return{ui:n,attrs:t,isLeading:l,isTrailing:s,isSquare:d,buttonClass:o,leadingIconName:f,trailingIconName:u,leadingIconClass:c,trailingIconClass:p,linkProps:k}}});function Ir(e,a,n,t,r,i){const l=_,s=Ie;return y(),N(s,S({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:I(()=>[v(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(y(),N(l,{key:0,name:e.leadingIconName,class:h(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):x("",!0)]),v(e.$slots,"default",{},()=>[e.label?(y(),m("span",{key:0,class:h([e.truncate?e.ui.truncate:""])},V(e.label),3)):x("",!0)]),v(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(y(),N(l,{key:0,name:e.trailingIconName,class:h(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):x("",!0)])]),_:3},16,["type","disabled","class"])}const xr=F($r,[["render",Ir]]);class P extends Error{constructor(a){super(a),this.message=a,Object.setPrototypeOf(this,P.prototype)}}const zr=L({props:{schema:{type:[Object,Function],default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:a,emit:n}){const t=he(),r=rr(`form-${t}`),i=U(null);ie(()=>{r.on(async u=>{var c;u.type!=="submit"&&((c=e.validateOn)!=null&&c.includes(u.type))&&await o(u.path,{silent:!0})})}),me(()=>{r.reset()});const l=U([]);Y("form-errors",l),Y("form-events",r);const s=U({});Y("form-inputs",s);async function d(){let u=await e.validate(e.state);if(e.schema){const{errors:c,result:p}=await Lr(e.state,e.schema);c?u=u.concat(c):i.value=p}return u}async function o(u,c={silent:!1}){let p=u;if(u&&!Array.isArray(u)&&(p=[u]),p){const k=l.value.filter(z=>!p.includes(z.path)),$=(await d()).filter(z=>p.includes(z.path));l.value=k.concat($)}else l.value=await d();if(l.value.length>0){if(c.silent)return!1;throw new P(`Form validation failed: ${JSON.stringify(l.value,null,2)}`)}return e.state}async function f(u){var p;const c=u;try{(p=e.validateOn)!=null&&p.includes("submit")&&await o(),c.data=e.schema?i.value:e.state,n("submit",c)}catch(k){if(!(k instanceof P))throw k;const $={...c,errors:l.value.map(z=>({...z,id:s.value[z.path]}))};n("error",$)}}return a({validate:o,errors:l,setErrors(u,c){c?l.value=l.value.filter(p=>p.path!==c).concat(u):l.value=u},async submit(){await f(new Event("submit"))},getErrors(u){return u?l.value.filter(c=>c.path===u):l.value},clear(u){u?l.value=l.value.filter(c=>c.path!==u):l.value=[]}}),{onSubmit:f,errors:Ke(l)}}});function Cr(e){return e.validate&&e.__isYupSchema__}function Or(e){return e.inner!==void 0}function Br(e){return"schema"in e&&typeof e.coercer=="function"&&typeof e.validator=="function"&&typeof e.refiner=="function"}function jr(e){return e.validateAsync!==void 0&&e.id!==void 0}function Ar(e){return e.isJoi===!0}function Nr(e){return"_parse"in e||"_run"in e||typeof e=="function"&&"schema"in e}function qr(e){return e.parse!==void 0}async function Fr(e,a){const n=await("_parse"in a?a._parse(e):"_run"in a?a._run({typed:!1,value:e},{}):a(e));return!n.issues||n.issues.length===0?{errors:null,result:"output"in n?n.output:"value"in n?n.value:null}:{errors:n.issues.map(r=>{var i;return{path:((i=r.path)==null?void 0:i.map(l=>l.key).join("."))||"",message:r.message}}),result:null}}async function Vr(e,a){try{return{errors:null,result:await a.validateAsync(e,{abortEarly:!1})}}catch(n){if(Ar(n))return{errors:n.details.map(r=>({path:r.path.join("."),message:r.message})),result:null};throw n}}async function Ur(e,a){const n=await a.safeParseAsync(e);return n.success===!1?{errors:n.error.issues.map(r=>({path:r.path.join("."),message:r.message})),result:null}:{result:n.data,errors:null}}async function Er(e,a){const[n,t]=a.validate(e);return n?{errors:n.failures().map(i=>({message:i.message,path:i.path.join(".")})),result:null}:{errors:null,result:t}}async function Tr(e,a){try{return{errors:null,result:await a.validate(e,{abortEarly:!1})}}catch(n){if(Or(n))return{errors:n.inner.map(r=>({path:r.path??"",message:r.message})),result:null};throw n}}function Lr(e,a){if(qr(a))return Ur(e,a);if(jr(a))return Vr(e,a);if(Nr(a))return Fr(e,a);if(Cr(a))return Tr(e,a);if(Br(a))return Er(e,a);throw new Error("Form validation failed: Unsupported form schema")}function Mr(e,a,n,t,r,i){return y(),m("form",{onSubmit:a[0]||(a[0]=Re((...l)=>e.onSubmit&&e.onSubmit(...l),["prevent"]))},[v(e.$slots,"default",A(X({errors:e.errors})))],32)}const Jr=F(zr,[["render",Mr]]),Dr={__name:"Home",props:{socket:{type:Object,required:!0}},setup(e){const a=e,{socket:n}=a,t=We({username:void 0,roomId:void 0,lastMessage:void 0});n.onmessage=l=>{const s=JSON.parse(l.data);if(s.type=="game"&&s.params.gameStatus!=null&&s.params.roomId!=null)return Qe(`/game/${s.params.roomId}`)};async function r(l){if(t.roomId){let s=`{"type": "join", "params": { "roomId": "${t.roomId}", "username": "${t.username}"}}`;n.send(s)}else{let s=`{"type": "create", "params": { "username": "${t.username}"}}`;n.send(s)}}async function i(l){const s=[];return l.username||s.push({path:"username",message:"Requis"}),s}return(l,s)=>{const d=yr,o=vr,f=xr,u=Jr,c=dr;return y(),N(c,null,{header:I(()=>[s[2]||(s[2]=E("p",null,"Créer ou rejoindre une partie",-1)),E("p",null,V(M(t).lastMessage),1)]),default:I(()=>[j(u,{class:"space-y-4",onSubmit:r,state:M(t),validate:i},{default:I(()=>[j(o,{label:"Nom utilisateur",name:"username",required:""},{default:I(()=>[j(d,{type:"text",modelValue:M(t).username,"onUpdate:modelValue":s[0]||(s[0]=p=>M(t).username=p)},null,8,["modelValue"])]),_:1}),j(o,{label:"ID Partie",name:"roomId",description:"Obligatoire seulement si vous rejoingnez une partie existante."},{default:I(()=>[j(d,{type:"text",modelValue:M(t).roomId,"onUpdate:modelValue":s[1]||(s[1]=p=>M(t).roomId=p)},null,8,["modelValue"])]),_:1}),j(f,{type:"submit"},{default:I(()=>s[3]||(s[3]=[J(" Se connecter ")])),_:1})]),_:1},8,["state"])]),_:1})}}},Hr=H(w.ui.strategy,w.ui.container,lr),Kr=L({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:n}=Z("container",T(e,"ui"),Hr),t=g(()=>ee(C(a.value.base,a.value.padding,a.value.constrained),e.class));return{ui:a,attrs:n,containerClass:t}}});function Rr(e,a,n,t,r,i){return y(),N(ne(e.as),S({class:e.containerClass},e.attrs),{default:I(()=>[v(e.$slots,"default")]),_:3},16,["class"])}const Wr=F(Kr,[["render",Rr]]),Qr={};function Yr(e,a){const n=Dr,t=Wr;return y(),N(t,{class:"mt-8"},{default:I(()=>[j(n,{socket:e.$attrs.socket},null,8,["socket"])]),_:1})}const et=F(Qr,[["render",Yr]]);export{et as default};
