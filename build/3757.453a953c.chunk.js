"use strict";(self.webpackChunkbackend_jedentag=self.webpackChunkbackend_jedentag||[]).push([[3757],{23037:(h,E,e)=>{e.r(E),e.d(E,{InformationBoxEE:()=>I});var t=e(67294),l=e(70642),s=e(11047),m=e(75515),c=e(77197),o=e(57993),d=e(86896),r=e(88767),a=e(50236),g=e(75021),n=e(38705),i=e(86978),f=e(52258),v=e(5318);const w="strapi_stage";function I(){const{initialData:A,isCreatingEntry:R,layout:{uid:y,options:D},isSingleType:k,onChange:C}=(0,o.Wq)(),{put:u}=(0,o.kY)(),T=A?.[w]??null,P=D?.reviewWorkflows??!1,{formatMessage:p}=(0,d.Z)(),{formatAPIError:x}=(0,o.So)(),G=(0,o.lm)(),{getFeature:Z}=(0,g.q)(),[F,L]=t.useState(!1),{meta:$,workflows:[B],isLoading:j}=(0,f.n)({filters:{contentTypes:y}}),{error:K,isLoading:Y,mutateAsync:H}=(0,r.useMutation)(async({entityId:O,stageId:W,uid:M})=>{const N=k?"single-types":"collection-types",{data:{data:U}}=await u(`/admin/content-manager/${N}/${M}/${O}/stage`,{data:{id:W}});return C({target:{name:w,value:U[w]}},!0),U},{onSuccess(){G({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}})}}),S=Z("review-workflows"),Q=K&&x(K)||null,X=async({value:O})=>{try{S?.[i.Ef]&&parseInt(S[i.Ef],10)<$.workflowCount?L("workflow"):S?.[i._X]&&parseInt(S[i._X],10)<B.stages.length?L("stage"):await H({entityId:A.id,stageId:O,uid:y})}catch{}},{themeColorName:V}=T?.color?(0,v.k)(T?.color):{};return t.createElement(a.d.Root,null,t.createElement(a.d.Title,null),P&&!R&&t.createElement(l.q4,{error:Q,name:w,id:w,value:T?.id,onChange:O=>X({value:O}),label:p({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:t.createElement(s.k,{as:"span",height:2,background:T?.color,borderColor:V==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>t.createElement(s.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},t.createElement(m.Z,{textColor:"neutral800",ellipsis:!0},T?.name),j||Y?t.createElement(c.a,{small:!0,style:{display:"flex"}}):null)},B?B.stages.map(({id:O,color:W,name:M})=>{const{themeColorName:N}=(0,v.k)(W);return t.createElement(l.ag,{startIcon:t.createElement(s.k,{height:2,background:W,borderColor:N==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:O,textValue:M},M)}):[]),t.createElement(a.d.Body,null),t.createElement(n.fC,{isOpen:F==="workflow",onClose:()=>L(!1)},t.createElement(n.Dx,null,p({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),t.createElement(n.uT,null,p({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),t.createElement(n.fC,{isOpen:F==="stage",onClose:()=>L(!1)},t.createElement(n.Dx,null,p({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),t.createElement(n.uT,null,p({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}},75021:(h,E,e)=>{e.d(E,{q:()=>m});var t=e(67294),l=e(57993),s=e(88767);function m({enabled:c}={enabled:!0}){const{get:o}=(0,l.kY)(),{data:d,isError:r,isLoading:a}=(0,s.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:i}}=await o("/admin/license-limit-information");return i},{enabled:c}),g=t.useMemo(()=>d??{},[d]),n=t.useCallback(i=>(g?.features??[]).find(v=>v.name===i)?.options??{},[g?.features]);return{license:g,getFeature:n,isError:r,isLoading:a}}},38705:(h,E,e)=>{e.d(E,{uT:()=>y,fC:()=>C,Dx:()=>R});var t=e(67294),l=e(75515),s=e(11047),m=e(42866),c=e(59946),o=e(41580),d=e(12028),r=e(80994),a=e(70968),g=e(45697),n=e.n(g),i=e(86896),f=e(88972);const v=e.p+"0cd5f8915b265d5b1856.png",w="limits-title",I="https://strapi.io/pricing-cloud",A="https://strapi.io/contact-sales";function R({children:u}){return t.createElement(l.Z,{variant:"alpha",id:w},u)}R.propTypes={children:n().node.isRequired};function y({children:u}){return t.createElement(l.Z,{variant:"omega"},u)}y.propTypes={children:n().node.isRequired};function D(){const{formatMessage:u}=(0,i.Z)();return t.createElement(s.k,{gap:2,paddingTop:4},t.createElement(r.Q,{variant:"default",isExternal:!0,href:I},u({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(r.Q,{variant:"tertiary",isExternal:!0,href:A},u({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const k=f.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:u})=>`-${u.spaces[7]}`};
  margin-top: ${({theme:u})=>`-${u.spaces[7]}`};
  width: 360px;
`;function C({children:u,isOpen:T,onClose:P}){const{formatMessage:p}=(0,i.Z)();return T?t.createElement(m.P,{labelledBy:w},t.createElement(c.f,null,t.createElement(s.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(s.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},u,t.createElement(D,null)),t.createElement(s.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(k,{src:v,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(o.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(d.h,{icon:t.createElement(a.Z,null),"aria-label":p({id:"global.close",defaultMessage:"Close"}),onClick:P})))))):null}C.defaultProps={isOpen:!1},C.propTypes={children:n().node.isRequired,isOpen:n().bool,onClose:n().func.isRequired}},86978:(h,E,e)=>{e.d(E,{$k:()=>r,Ef:()=>f,FT:()=>n,Nj:()=>d,Ot:()=>o,VS:()=>a,_X:()=>v,gu:()=>s,lv:()=>g,qZ:()=>m,sN:()=>l,uL:()=>i,x4:()=>c});var t=e(42675);const l="settings_review-workflows",s="Settings/Review_Workflows/RESET_WORKFLOW",m="Settings/Review_Workflows/SET_WORKFLOW",c="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",o="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",d="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",r="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",a="Settings/Review_Workflows/WORKFLOW_UPDATE",g={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},n=t.W.colors.primary600,i={STAGE:"stage"},f="numberOfWorkflows",v="stagesPerWorkflow"},52258:(h,E,e)=>{e.d(E,{n:()=>s});var t=e(57993),l=e(88767);function s(m={}){const{get:c}=(0,t.kY)(),{id:o="",...d}=m,r={populate:"stages"},{data:a,isLoading:g,status:n,refetch:i}=(0,l.useQuery)(["review-workflows","workflows",o],async()=>(await c(`/admin/review-workflows/workflows/${o}`,{params:{...r,...d}})).data);let f=[];return o&&a?.data?f=[a.data]:Array.isArray(a?.data)&&(f=a.data),{meta:a?.meta??{},workflows:f,isLoading:g,status:n,refetch:i}}},5318:(h,E,e)=>{e.d(E,{k:()=>s,s:()=>m});var t=e(42675),l=e(86978);function s(c){if(!c)return null;const d=Object.entries(t.W.colors).filter(([,r])=>r.toUpperCase()===c.toUpperCase()).reduce((r,[a])=>(l.lv?.[a]&&(r=a),r),null);return d?{themeColorName:d,name:l.lv[d]}:null}function m(){return Object.entries(l.lv).map(([c,o])=>({hex:t.W.colors[c].toUpperCase(),name:o}))}}}]);