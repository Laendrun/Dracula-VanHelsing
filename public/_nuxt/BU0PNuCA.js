import{_ as w}from"./CYYUZr3o.js";import{r as x,o,c as l,a as s,t as n,e as a,n as g,f as v,g as S,F as f,h as b,i as _,b as u,j as k}from"./CZ-P3nhg.js";import"./DtvR-4DX.js";import"./DlAUqK2U.js";const C={class:"my-4"},h={__name:"Card",props:{value:{type:Number,required:!0},color:{type:String,required:!0},visible:{type:Boolean,required:!1}},setup(p){const y=p,{value:d,color:m,visble:e=!1}=y;let r;switch(m){case"R":r="red";break;case"Y":r="yellow";break;case"P":r="violet";break;case"B":r="blue";break;case"G":r="gray";break;default:r="gray";break}const t=x({classes:`h2 py-2 bg-${r}-500 dark:bg-${r}-500 flex justify-center`});return(i,c)=>(o(),l("div",C,[s("div",{class:g(a(t).classes)},[s("p",null,n(a(d)),1)],2)]))}},j={class:"h-screen flex flex-col"},A={key:0,class:"bg-gray-200 dark:bg-gray-800 h-1/6"},R={class:"h-full"},B={class:"grid grid-col-12 gap-4"},D={class:"col-span-10 flex justify-center items-center"},H={class:"grid grid-cols-7 gap-4"},N={class:"mx-4 my-2"},L={key:0,class:"mx-4 my-2"},U={key:1,class:"mx-4 my-2"},V={key:1,class:"h-1/6 bg-gray-100 dark:bg-gray-900 flex flex-col"},q={class:"flex justify-evenly items-center h-1/2"},I={class:"flex justify-center items-center h-1/2"},$={class:"w-10 h-10 flex items-center justify-center"},G={class:"w-10 h-10 flex items-center justify-center"},O={key:2,class:"h-3/6 bg-gray-100 dark:bg-gray-900 flex justify-center items-center"},F={key:3,class:"bg-gray-200 dark:bg-gray-800 h-1/6"},J={class:"h-full"},P={class:"grid grid-col-12 gap-4"},Y={class:"col-span-10 flex justify-center items-center"},z={class:"grid grid-cols-7 gap-4"},E={class:"mx-4 my-2"},M={key:0,class:"mx-4 my-2"},T={key:1,class:"mx-4 my-2"},Z={__name:"[id]",props:{socket:{type:Object,required:!0}},setup(p){const y=p,{socket:d}=y;d||v("/");const m=S();if(!m.params.id){const r={type:"leave"};d.send(JSON.stringify(r)),v("/")}const e=x({roomId:"",ownCards:[],opponentCards:[],gameStatus:"waiting"});return e.roomId=m.params.id,d.onmessage=r=>{const t=JSON.parse(r.data);if(console.log(t),t.type!="game")return;t.params.gameId&&(e.gameStatus=t.params.gameStatus);const i={Y:"w-10 h-10 bg-yellow-500 rounded-full",B:"w-10 h-10 bg-blue-500 rounded-full",R:"w-10 h-10 bg-red-500 rounded-full",P:"w-10 h-10 bg-violet-500 rounded-full",G:"w-10 h-10 bg-gray-500 rounded-full"};e.gameStatus=="ready"&&(e.ownCards=t.params.cards,e.opponentCards=t.params.opCards,e.role=t.params.role,e.dHealth=t.params.draculaHealth,e.currentStage=t.params.currentStage,e.colors=t.params.colors.map(c=>i[c]||c)),console.log("Game status: %s",e.gameStatus),console.log("Role %s:",e.role)},(r,t)=>{const i=w;return o(),l("div",j,[a(e).gameStatus=="ready"?(o(),l("div",A,[s("div",R,[s("div",B,[s("div",D,[s("div",H,[s("p",N,n(a(e).role=="DRACULA"?"VH":"D"),1),(o(!0),l(f,null,b(a(e).opponentCards,c=>(o(),k(h,{color:c.color,value:c.value,visible:c.shown,class:"w-16 h-24"},null,8,["color","value","visible"]))),256)),a(e).role!="DRACULA"?(o(),l("p",L,n(a(e).dHealth)+"/12",1)):(o(),l("p",U,n(a(e).currentStage)+"/5",1))])])])])])):_("",!0),a(e).gameStatus=="ready"?(o(),l("div",V,[s("div",q,[u(h,{color:"gray",value:0,visible:!1,class:"w-16 h-16"}),s("div",{class:g([a(e).colors[a(e).colors.length-1],"flex items-center justify-center"])},[u(i,{name:"i-icon-park-twotone-crown-three"})],2),u(h,{color:"gray",value:0,visible:!1,class:"w-16 h-16"})]),s("div",I,[s("div",{class:g(a(e).colors[0])},null,2),s("div",$,[u(i,{name:"i-heroicons-chevron-right"})]),s("div",{class:g(a(e).colors[1])},null,2),s("div",G,[u(i,{name:"i-heroicons-chevron-right"})]),s("div",{class:g(a(e).colors[2])},null,2)])])):_("",!0),a(e).gameStatus=="ready"?(o(),l("div",O,t[0]||(t[0]=[s("div",{class:"flex flex-col"},null,-1)]))):_("",!0),a(e).gameStatus=="ready"?(o(),l("div",F,[s("div",J,[s("div",P,[s("div",Y,[s("div",z,[s("p",E,n(a(e).role=="DRACULA"?"D":"VH"),1),(o(!0),l(f,null,b(a(e).ownCards,c=>(o(),k(h,{color:c.color,value:c.value,visible:c.shown,class:"w-24 h-24"},null,8,["color","value","visible"]))),256)),a(e).role=="DRACULA"?(o(),l("p",M,n(a(e).dHealth)+"/12",1)):(o(),l("p",T,n(a(e).currentStage)+"/5",1))])])])])])):_("",!0)])}}};export{Z as default};
