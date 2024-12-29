"use strict";(self.webpackChunkbackend_jedentag=self.webpackChunkbackend_jedentag||[]).push([[2812],{54920:(R,p,t)=>{t.d(p,{R:()=>v});var e=t(57993),n=t(88767);function v(f={},M={}){const{id:h="",...c}=f,{get:S}=(0,e.kY)(),{data:E,isError:P,isLoading:y,refetch:C}=(0,n.useQuery)(["users",h,c],async()=>{const{data:{data:O}}=await S(`/admin/users/${h}`,{params:c});return O},M);let T=[];return h&&E?T=[E]:Array.isArray(E?.results)&&(T=E.results),{users:T,pagination:E?.pagination??null,isLoading:y,isError:P,refetch:C}}},71359:(R,p,t)=>{t.d(p,{Z:()=>P});var e=t(67294),n=t(41580),v=t(29728),f=t(57993),M=t(89597),h=t(45697),c=t.n(h),S=t(86896);const E=({displayedFilters:y})=>{const[C,T]=(0,e.useState)(!1),{formatMessage:O}=(0,S.Z)(),b=(0,e.useRef)(),Z=()=>{T(j=>!j)};return e.createElement(e.Fragment,null,e.createElement(n.x,{paddingTop:1,paddingBottom:1},e.createElement(v.z,{variant:"tertiary",ref:b,startIcon:e.createElement(M.Z,null),onClick:Z,size:"S"},O({id:"app.utils.filters",defaultMessage:"Filters"})),C&&e.createElement(f.J5,{displayedFilters:y,isVisible:C,onToggle:Z,source:b})),e.createElement(f.W$,{filtersSchema:y}))};E.propTypes={displayedFilters:c().arrayOf(c().shape({name:c().string.isRequired,metadatas:c().shape({label:c().string}),fieldSchema:c().shape({type:c().string})})).isRequired};const P=E},67220:(R,p,t)=>{t.r(p),t.d(p,{default:()=>ve});var e=t(67294),n=t(57993),v=t(86706),f=t(36364),M=t(17034),h=t(49066),c=t(41580),S=t(185),E=t(53979),P=t(36989),y=t(86896),C=t(71359),T=t(88767),O=t(16550),b=t(54920);const j=({canReadAuditLogs:a,canReadUsers:d})=>{const{get:u}=(0,n.kY)(),{search:i}=(0,O.TH)(),m=(0,n.lm)(),[{query:l}]=(0,n.Kx)(),s={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:L=>m({type:"warning",message:L.message})},{users:r,isError:g,isLoading:D}=(0,b.R)({},{...s,enabled:d,staleTime:2*(1e3*60)}),{data:A,isLoading:F,isError:x}=(0,T.useQuery)(["auditLogs",i],async()=>{const{data:L}=await u("/admin/audit-logs",{params:l});return L},{...s,enabled:a});return{auditLogs:A,users:r,isLoading:D||F,hasError:x||g}};var w=t(42866),k=t(24969),q=t(59946),_=t(63321),ee=t(36773),te=t(45697),o=t.n(te),ae=t(23855);const H=()=>{const{formatDate:a}=(0,y.Z)();return u=>{const i=(0,ae.Z)(u),m=a(i,{dateStyle:"long"}),l=a(i,{timeStyle:"medium",hourCycle:"h24"});return`${m}, ${l}`}};var U=t(11047),se=t(77197),I=t(75515),ne=t(11276),oe=t(14177);const Q={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},W=a=>Q[a]||a,Y=({actionLabel:a,actionName:d})=>e.createElement(U.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(I.Z,{textColor:"neutral600",variant:"sigma"},a),e.createElement(I.Z,{textColor:"neutral600"},d));Y.propTypes={actionLabel:o().string.isRequired,actionName:o().string.isRequired};const B=Y,K=({status:a,data:d,formattedDate:u})=>{const{formatMessage:i}=(0,y.Z)();if(a==="loading")return e.createElement(U.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(se.a,null,"Loading content..."));const{action:m,user:l,payload:s}=d;return e.createElement(e.Fragment,null,e.createElement(c.x,{marginBottom:3},e.createElement(I.Z,{variant:"delta",id:"title"},i({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(ne.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(B,{actionLabel:i({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:i({id:`Settings.permissions.auditLogs.${m}`,defaultMessage:W(m)},{model:s?.model})}),e.createElement(B,{actionLabel:i({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:u}),e.createElement(B,{actionLabel:i({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:l?.displayName||"-"}),e.createElement(B,{actionLabel:i({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:l?.id.toString()||"-"})),e.createElement(oe.V,{value:JSON.stringify(s,null,2),disabled:!0,label:i({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};K.defaultProps={data:{}},K.propTypes={status:o().oneOf(["idle","loading","error","success"]).isRequired,data:o().shape({action:o().string,date:o().string,payload:o().object,user:o().object}),formattedDate:o().string.isRequired};const ie=K,z=({handleClose:a,logId:d})=>{const{get:u}=(0,n.kY)(),i=(0,n.lm)(),m=async D=>{const{data:A}=await u(`/admin/audit-logs/${D}`);if(!A)throw new Error("Audit log not found");return A},{data:l,status:s}=(0,T.useQuery)(["audit-log",d],()=>m(d),{onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),a()}}),r=H(),g=l?r(l.date):"";return e.createElement(w.P,{onClose:a,labelledBy:"title"},e.createElement(k.x,null,e.createElement(_.O,{label:g,id:"title"},e.createElement(ee.$,{isCurrent:!0},g))),e.createElement(q.f,null,e.createElement(ie,{status:s,data:l,formattedDate:g})))};z.propTypes={handleClose:o().func.isRequired,logId:o().string.isRequired};const re=z,$=({pagination:a})=>e.createElement(c.x,{paddingTop:4},e.createElement(U.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(n.v4,null),e.createElement(n.tU,{pagination:a})));$.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},$.propTypes={pagination:o().shape({page:o().number,pageCount:o().number,pageSize:o().number,total:o().number})};const le=$;var de=t(15234),me=t(79031),J=t(37909),ue=t(12028),ce=t(8934);const V=({headers:a,rows:d,onOpenModal:u})=>{const{formatMessage:i}=(0,y.Z)(),m=H(),l=({type:s,value:r,model:g})=>s==="date"?m(r):s==="action"?i({id:`Settings.permissions.auditLogs.${r}`,defaultMessage:W(r)},{model:g}):r||"-";return e.createElement(de.p,null,d.map(s=>e.createElement(me.Tr,{key:s.id,...(0,n.X7)({fn:()=>u(s.id)})},a.map(({key:r,name:g,cellFormatter:D})=>e.createElement(J.Td,{key:r},e.createElement(I.Z,{textColor:"neutral800"},l({type:r,value:D?D(s[g]):s[g],model:s.payload?.model})))),e.createElement(J.Td,{...n.UW},e.createElement(U.k,{justifyContent:"end"},e.createElement(ue.h,{onClick:()=>u(s.id),"aria-label":i({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${s.action} action`}),noBorder:!0,icon:e.createElement(ce.Z,null)}))))))};V.defaultProps={rows:[]},V.propTypes={headers:o().array.isRequired,rows:o().array,onOpenModal:o().func.isRequired};const ge=V;var pe=t(29178),fe=t(90608);const N=({value:a,options:d,onChange:u})=>{const{formatMessage:i}=(0,y.Z)(),m=i({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(pe.hQ,{"aria-label":m,value:a,onChange:u},d.map(({label:l,customValue:s})=>e.createElement(fe.O,{key:s,value:s},l)))};N.defaultProps={value:null},N.propTypes={value:o().string,options:o().arrayOf(o().shape({label:o().string.isRequired,customValue:o().string.isRequired}).isRequired).isRequired,onChange:o().func.isRequired};const X=N,G=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],Ee=({formatMessage:a,users:d,canReadUsers:u})=>{const i=Object.keys(Q).map(l=>({label:a({id:`Settings.permissions.auditLogs.${l}`,defaultMessage:W(l)},{model:void 0}),customValue:l})),m=[{name:"action",metadatas:{customOperators:G,label:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:i,customInput:X},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(u&&d){const l=r=>r.username?r.username:r.firstname&&r.lastname?a({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:r.firstname,lastname:r.lastname}):r.email,s=d.map(r=>({label:l(r),customValue:r.id.toString()}));return[...m,{name:"user",metadatas:{customOperators:G,label:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:s,customInput:X},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return m},ye=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:a=>a?a.displayName:""}],Le=()=>{const{formatMessage:a}=(0,y.Z)(),d=(0,v.v9)(f._),{allowedActions:{canRead:u,canReadUsers:i}}=(0,n.ss)({...d.settings.auditLogs,readUsers:d.settings.users.read}),[{query:m},l]=(0,n.Kx)(),{auditLogs:s,users:r,isLoading:g,hasError:D}=j({canReadAuditLogs:u,canReadUsers:i});(0,n.go)();const A=Ee({formatMessage:a,users:r,canReadUsers:i}),F=a({id:"global.auditLogs",defaultMessage:"Audit Logs"}),x=ye.map(L=>({...L,metadatas:{...L.metadatas,label:a(L.metadatas.label)}}));return D?e.createElement(M.A,null,e.createElement(h.D,null,e.createElement(c.x,{paddingTop:8},e.createElement(n.Hn,null)))):e.createElement(S.o,{"aria-busy":g},e.createElement(n.SL,{name:F}),e.createElement(E.T,{title:F,subtitle:a({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(P.Z,{startActions:e.createElement(C.Z,{displayedFilters:A})}),e.createElement(h.D,{canRead:u},e.createElement(n.tM,{contentType:"Audit logs",headers:x,rows:s?.results||[],withBulkActions:!0,isLoading:g},e.createElement(ge,{headers:x,rows:s?.results||[],onOpenModal:L=>l({id:L})})),e.createElement(le,{pagination:s?.pagination})),m?.id&&e.createElement(re,{handleClose:()=>l({id:null},"remove"),logId:m.id}))},ve=()=>{const a=(0,v.v9)(f._);return e.createElement(n.O4,{permissions:a.settings.auditLogs.main},e.createElement(Le,null))}},90608:(R,p,t)=>{t.d(p,{O:()=>n});var e=t(29178);const n=e.Wx},36989:(R,p,t)=>{t.d(p,{Z:()=>v});var e=t(85893),n=t(11047);const v=({startActions:f,endActions:M})=>!f&&!M?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:f}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:M})]})}}]);
