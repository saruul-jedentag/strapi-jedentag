(self.webpackChunkbackend_jedentag=self.webpackChunkbackend_jedentag||[]).push([[2458],{49699:(P,m,e)=>{"use strict";e.d(m,{Z:()=>h});var t=e(67294),c=e(53979),r=e(11047),o=e(29728),a=e(57993),i=e(85018),u=e(67109),y=e(45697),s=e.n(y),v=e(86896),A=e(30815),n=e(72986);const d=({onRegenerate:T,idToRegenerate:R,backUrl:Z,onError:N})=>{const{formatMessage:S}=(0,v.Z)(),[M,B]=(0,t.useState)(!1),{regenerateData:D,isLoadingConfirmation:H}=(0,n.rW)(Z,R,T,N),W=async()=>{D(),B(!1)};return t.createElement(t.Fragment,null,t.createElement(o.z,{startIcon:t.createElement(A.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>B(!0),name:"regenerate"},S({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(a.QH,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(A.Z,null),isConfirmButtonLoading:H,isOpen:M,onToggleDialog:()=>B(!1),onConfirm:W,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};d.defaultProps={onRegenerate(){},onError:void 0},d.propTypes={onRegenerate:s().func,idToRegenerate:s().oneOfType([s().number,s().string]).isRequired,backUrl:s().string.isRequired,onError:s().func};const l=d,g=({title:T,token:R,setToken:Z,canEditInputs:N,canRegenerate:S,isSubmitting:M,backUrl:B,regenerateUrl:D,onErrorRegenerate:H})=>{const{formatMessage:W}=(0,v.Z)(),Y=X=>{Z({...R,accessKey:X})};return t.createElement(c.T,{title:R?.name||W(T),primaryAction:N?t.createElement(r.k,{gap:2},S&&R?.id&&t.createElement(l,{backUrl:D,onRegenerate:Y,idToRegenerate:R?.id,onError:H}),t.createElement(o.z,{disabled:M,loading:M,startIcon:t.createElement(i.Z,null),type:"submit",size:"S"},W({id:"global.save",defaultMessage:"Save"}))):S&&R?.id&&t.createElement(l,{onRegenerate:Y,idToRegenerate:R?.id,backUrl:D}),navigationAction:t.createElement(a.rU,{startIcon:t.createElement(u.Z,null),to:B},W({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};g.propTypes={token:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().oneOfType([s().number,s().string]),name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),canEditInputs:s().bool.isRequired,canRegenerate:s().bool.isRequired,setToken:s().func.isRequired,isSubmitting:s().bool.isRequired,backUrl:s().string.isRequired,title:s().shape({id:s().string,label:s().string}).isRequired,regenerateUrl:s().string.isRequired,onErrorRegenerate:s().func},g.defaultProps={token:void 0,onErrorRegenerate:void 0};const h=g},89982:(P,m,e)=>{"use strict";e.d(m,{Z:()=>v});var t=e(67294),c=e(40619),r=e(82562),o=e(75515),a=e(45697),i=e.n(a),u=e(86896),y=e(51352);const s=({token:A,errors:n,values:d,onChange:l,isCreating:g})=>{const{formatMessage:h}=(0,u.Z)();return t.createElement(t.Fragment,null,t.createElement(c.P,{name:"lifespan",label:h({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:d.lifespan!==null?d.lifespan:"0",error:n.lifespan?h(n.lifespan?.id?n.lifespan:{id:n.lifespan,defaultMessage:n.lifespan}):null,onChange:T=>{l({target:{name:"lifespan",value:T}})},required:!0,disabled:!g,placeholder:"Select"},t.createElement(r.W,{value:"604800000"},h({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(r.W,{value:"2592000000"},h({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(r.W,{value:"7776000000"},h({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(r.W,{value:"0"},h({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(o.Z,{variant:"pi",textColor:"neutral600"},!g&&`${h({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,y.IX)(A?.createdAt,parseInt(d.lifespan,10))}`))};s.propTypes={errors:i().shape({lifespan:i().string}),onChange:i().func.isRequired,values:i().shape({lifespan:i().oneOfType([i().number,i().string])}).isRequired,isCreating:i().bool.isRequired,token:i().shape({id:i().oneOfType([i().number,i().string]),type:i().string,lifespan:i().string,name:i().string,accessKey:i().string,permissions:i().array,description:i().string,createdAt:i().string})},s.defaultProps={errors:{},token:{}};const v=s},81384:(P,m,e)=>{"use strict";e.d(m,{Z:()=>v});var t=e(67294),c=e(12028),r=e(57993),o=e(65186),a=e(69427),i=e(45697),u=e.n(i),y=e(86896);const s=({token:A,tokenType:n})=>{const{formatMessage:d}=(0,y.Z)(),l=(0,r.lm)(),{trackUsage:g}=(0,r.rS)(),{copy:h}=(0,r.VP)(),T=R=>async()=>{await h(R)&&(g("didCopyTokenKey",{tokenType:n}),l({type:"success",message:{id:"Settings.tokens.notification.copied"}}))};return t.createElement(r.Y_,{endAction:A&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(c.h,{label:d({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),onClick:T(A),noBorder:!0,icon:t.createElement(o.Z,null),style:{padding:0,height:"1rem"}})),title:A||d({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:d(A?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(a.Z,null),iconBackground:"neutral100"})};s.defaultProps={token:null},s.propTypes={token:u().string,tokenType:u().string.isRequired};const v=s},37651:(P,m,e)=>{"use strict";e.d(m,{Z:()=>u});var t=e(67294),c=e(61467),r=e(45697),o=e.n(r),a=e(86896);const i=({errors:y,values:s,onChange:v,canEditInputs:A})=>{const{formatMessage:n}=(0,a.Z)();return t.createElement(c.g,{label:n({id:"Settings.tokens.form.description",defaultMessage:"Description"}),id:"description",error:y.description?n(y.description?.id?y.description:{id:y.description,defaultMessage:y.description}):null,onChange:v,disabled:!A},s.description)};i.propTypes={errors:o().shape({description:o().string}),onChange:o().func.isRequired,canEditInputs:o().bool.isRequired,values:o().shape({description:o().string}).isRequired},i.defaultProps={errors:{}};const u=i},72028:(P,m,e)=>{"use strict";e.d(m,{Z:()=>u});var t=e(67294),c=e(16364),r=e(45697),o=e.n(r),a=e(86896);const i=({errors:y,values:s,onChange:v,canEditInputs:A})=>{const{formatMessage:n}=(0,a.Z)();return t.createElement(c.o,{name:"name",error:y.name?n(y.name?.id?y.name:{id:y.name,defaultMessage:y.name}):null,label:n({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:v,value:s.name,disabled:!A,required:!0})};i.propTypes={errors:o().shape({name:o().string}),onChange:o().func.isRequired,canEditInputs:o().bool.isRequired,values:o().shape({name:o().string}).isRequired},i.defaultProps={errors:{}};const u=i},32381:(P,m,e)=>{"use strict";e.d(m,{Z:()=>y});var t=e(67294),c=e(40619),r=e(82562),o=e(45697),a=e.n(o),i=e(86896);const u=({name:s,errors:v,values:A,onChange:n,canEditInputs:d,options:l,label:g})=>{const{formatMessage:h}=(0,i.Z)();return t.createElement(c.P,{name:s,label:h({id:g.id,defaultMessage:g.defaultMessage}),value:A&&A[s],error:v[s]?h(v[s]?.id?v[s]:{id:v[s],defaultMessage:v[s]}):null,onChange:n,placeholder:"Select",required:!0,disabled:!d},l&&l.map(({value:T,label:R})=>t.createElement(r.W,{key:T,value:T},h(R))))};u.propTypes={name:a().string,options:a().arrayOf(a().shape({label:a().shape({id:a().string,defaultMessage:a().string}),value:a().string})),errors:a().shape({type:a().string}),onChange:a().func.isRequired,canEditInputs:a().bool.isRequired,values:a().shape({type:a().string}).isRequired,label:a().shape({id:a().string,defaultMessage:a().string}).isRequired},u.defaultProps={name:"type",errors:{},options:[]};const y=u},81966:(P,m,e)=>{"use strict";e.d(m,{Z:()=>t,f:()=>c});const t="api-token",c="transfer-token"},92458:(P,m,e)=>{"use strict";e.d(m,{Z:()=>Ge});var t=e(67294),c=e(185),r=e(49066),o=e(11047),a=e(57993),i=e(41054),u=e(86896),y=e(88767),s=e(86706),v=e(16550),A=e(45697),n=e.n(A);const d=(0,t.createContext)({}),l=({children:p,...E})=>t.createElement(d.Provider,{value:E},p),g=()=>(0,t.useContext)(d);l.propTypes={children:n().node.isRequired};var h=e(26779),T=e(36364),R=e(81966),Z=e(49699),N=e(81384),S=e(41580),M=e(75515),B=e(11276),D=e(67819),H=e(89982),W=e(37651),Y=e(72028),X=e(32381);const J=({errors:p,onChange:E,canEditInputs:f,isCreating:I,values:x,apiToken:k,onDispatch:O,setHasChangedPermissions:V})=>{const{formatMessage:j}=(0,u.Z)(),F=({target:{value:z}})=>{V(!1),z==="full-access"&&O({type:"SELECT_ALL_ACTIONS"}),z==="read-only"&&O({type:"ON_CHANGE_READ_ONLY"})},w=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return t.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(M.Z,{variant:"delta",as:"h2"},j({id:"global.details",defaultMessage:"Details"})),t.createElement(B.r,{gap:5},t.createElement(D.P,{key:"name",col:6,xs:12},t.createElement(Y.Z,{errors:p,values:x,canEditInputs:f,onChange:E})),t.createElement(D.P,{key:"description",col:6,xs:12},t.createElement(W.Z,{errors:p,values:x,canEditInputs:f,onChange:E})),t.createElement(D.P,{key:"lifespan",col:6,xs:12},t.createElement(H.Z,{isCreating:I,errors:p,values:x,onChange:E,token:k})),t.createElement(D.P,{key:"type",col:6,xs:12},t.createElement(X.Z,{values:x,errors:p,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:z=>{F({target:{value:z}}),E({target:{name:"type",value:z}})},options:w,canEditInputs:f})))))};J.propTypes={errors:n().shape({name:n().string,description:n().string,lifespan:n().string,type:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({name:n().string,description:n().string,lifespan:n().oneOfType([n().number,n().string]),type:n().string}).isRequired,isCreating:n().bool.isRequired,apiToken:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().string,name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string}),onDispatch:n().func.isRequired,setHasChangedPermissions:n().func.isRequired},J.defaultProps={errors:{},apiToken:{}};const Q=J;var ne=e(53979),le=e(29728),de=e(85018);const _=({apiTokenName:p})=>{const{formatMessage:E}=(0,u.Z)();return(0,a.go)(),t.createElement(c.o,{"aria-busy":"true"},t.createElement(a.SL,{name:"API Tokens"}),t.createElement(ne.T,{primaryAction:t.createElement(le.z,{disabled:!0,startIcon:t.createElement(de.Z,null),type:"button",size:"L"},E({id:"global.save",defaultMessage:"Save"})),title:p||E({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),t.createElement(r.D,null,t.createElement(a.dO,null)))};_.defaultProps={apiTokenName:null},_.propTypes={apiTokenName:n().string};const ce=_;var se=e(35161),ae=e.n(se),oe=e(13217),Ce=e.n(oe),re=e(88972);const Me=p=>{switch(p){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},xe=(0,re.ZP)(S.x)`
  margin: -1px;
  border-radius: ${({theme:p})=>p.spaces[1]} 0 0 ${({theme:p})=>p.spaces[1]};
`;function pe({route:p}){const{formatMessage:E}=(0,u.Z)(),{method:f,handler:I,path:x}=p,k=x?Ce()(x.split("/")):[],[O="",V=""]=I?I.split("."):[],j=Me(p.method);return t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(M.Z,{variant:"delta",as:"h3"},E({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",t.createElement("span",null,O),t.createElement(M.Z,{variant:"delta",textColor:"primary600"},".",V)),t.createElement(o.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},t.createElement(xe,{background:j.background,borderColor:j.border,padding:2},t.createElement(M.Z,{fontWeight:"bold",textColor:j.text},f)),t.createElement(S.x,{paddingLeft:2,paddingRight:2},ae()(k,F=>t.createElement(M.Z,{key:F,textColor:F.includes(":")?"neutral600":"neutral900"},"/",F)))))}pe.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},pe.propTypes={route:n().shape({handler:n().string,method:n().string,path:n().string})};const Oe=pe,Re=()=>{const{value:{selectedAction:p,routes:E}}=g(),{formatMessage:f}=(0,u.Z)(),I=p?.split(".")[0];return t.createElement(D.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},p?t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},E[I]?.map(x=>x.config.auth?.scope?.includes(p)||x.handler===p?t.createElement(Oe,{key:x.handler,route:x}):null)):t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(M.Z,{variant:"delta",as:"h3"},f({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),t.createElement(M.Z,{as:"p",textColor:"neutral600"},f({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var De=e(48734),Ie=e(74756),Se=e(63081),Te=e(36213),ke=e(78114),Le=e(48403),Be=e.n(Le);const Pe=(0,re.iv)`
  background: ${p=>p.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ue=(0,re.ZP)(S.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${p=>p.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${p=>p.isActive&&Pe}
  &:hover {
    ${Pe}
  }
`,be=re.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:p})=>p.colors.neutral150};
`,ue=({controllers:p,label:E,orderNumber:f,disabled:I,onExpanded:x,indexExpandendCollapsedContent:k})=>{const{value:{onChangeSelectAll:O,onChange:V,selectedActions:j,setSelectedAction:F,selectedAction:w}}=g(),[z,ie]=(0,t.useState)(!1),{formatMessage:Ee}=(0,u.Z)(),q=()=>{ie(L=>!L),x(f)};(0,t.useEffect)(()=>{k!==null&&k!==f&&z&&ie(!1)},[k,f,z]);const b=L=>L===w;return t.createElement(De.U,{expanded:z,onToggle:q,variant:f%2?"primary":"secondary"},t.createElement(Ie.B,{title:Be()(E)}),t.createElement(Se.v,null,p?.map(L=>{const ee=L.actions.every(K=>j.includes(K.actionId)),fe=L.actions.some(K=>j.includes(K.actionId));return t.createElement(S.x,{key:`${E}.${L?.controller}`},t.createElement(o.k,{justifyContent:"space-between",alignItems:"center",padding:4},t.createElement(S.x,{paddingRight:4},t.createElement(M.Z,{variant:"sigma",textColor:"neutral600"},L?.controller)),t.createElement(be,null),t.createElement(S.x,{paddingLeft:4},t.createElement(Te.X,{value:ee,indeterminate:!ee&&fe,onValueChange:()=>{O({target:{value:[...L.actions]}})},disabled:I},Ee({id:"app.utils.select-all",defaultMessage:"Select all"})))),t.createElement(B.r,{gap:4,padding:4},L?.actions&&L?.actions.map(K=>t.createElement(D.P,{col:6,key:K.actionId},t.createElement(Ue,{isActive:b(K.actionId),padding:2,hasRadius:!0},t.createElement(Te.X,{value:j.includes(K.actionId),name:K.actionId,onValueChange:()=>{V({target:{value:K.actionId}})},disabled:I},K.action),t.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>F({target:{value:K.actionId}}),style:{display:"inline-flex",alignItems:"center"}},t.createElement(ke.Z,null)))))))})))};ue.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},ue.propTypes={controllers:n().array,orderNumber:n().number,label:n().string.isRequired,disabled:n().bool,onExpanded:n().func,indexExpandendCollapsedContent:n().number};const Ze=ue,ge=({section:p,...E})=>{const[f,I]=(0,t.useState)(null),x=k=>I(k);return t.createElement(S.x,{padding:4,background:"neutral0"},p&&p.map((k,O)=>t.createElement(Ze,{key:k.apiId,label:k.label,controllers:k.controllers,orderNumber:O,indexExpandendCollapsedContent:f,onExpanded:x,name:k.apiId,...E})))};ge.defaultProps={section:null},ge.propTypes={section:n().arrayOf(n().object)};const We=ge,Ke=({...p})=>{const{value:{data:E}}=g(),{formatMessage:f}=(0,u.Z)();return t.createElement(B.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},t.createElement(D.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(M.Z,{variant:"delta",as:"h2"},f({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),t.createElement(M.Z,{as:"p",textColor:"neutral600"},f({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),E?.permissions&&t.createElement(We,{section:E?.permissions,...p})),t.createElement(Re,null))},Ne=(0,t.memo)(Ke);var me=e(51352);const $e=(p,E=[])=>({...p,selectedAction:null,routes:[],selectedActions:[],data:(0,me.mk)(E)});var je=e(18172),Fe=e(97019),Ae=e.n(Fe);const ze={data:{},selectedActions:[]},He=(p,E)=>(0,je.ZP)(p,f=>{switch(E.type){case"ON_CHANGE":{f.selectedActions.includes(E.value)?Ae()(f.selectedActions,E.value):f.selectedActions.push(E.value);break}case"SELECT_ALL_IN_PERMISSION":{E.value.every(x=>f.selectedActions.includes(x.actionId))?E.value.forEach(x=>{Ae()(f.selectedActions,x.actionId)}):E.value.forEach(x=>{f.selectedActions.push(x.actionId)});break}case"SELECT_ALL_ACTIONS":{f.selectedActions=[...f.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const I=f.data.allActionsIds.filter(x=>x.includes("find")||x.includes("findOne"));f.selectedActions=[...I];break}case"UPDATE_PERMISSIONS_LAYOUT":{f.data=(0,me.mk)(E.value);break}case"UPDATE_ROUTES":{f.routes={...E.value};break}case"UPDATE_PERMISSIONS":{f.selectedActions=[...E.value];break}case"SET_SELECTED_ACTION":{f.selectedAction=E.value;break}default:return f}}),Ve="Name already taken",Ge=()=>{(0,a.go)();const{formatMessage:p}=(0,u.Z)(),{lockApp:E,unlockApp:f}=(0,a.o1)(),I=(0,a.lm)(),x=(0,v.k6)(),k=(0,s.v9)(T._),[O,V]=(0,t.useState)(x.location.state?.apiToken.accessKey?{...x.location.state.apiToken}:null),{trackUsage:j}=(0,a.rS)(),F=(0,t.useRef)(j),{setCurrentStep:w}=(0,a.c1)(),{allowedActions:{canCreate:z,canUpdate:ie,canRegenerate:Ee}}=(0,a.ss)(k.settings["api-tokens"]),[q,b]=(0,t.useReducer)(He,ze,C=>$e(C,{})),{params:{id:L}}=(0,v.$B)("/settings/api-tokens/:id"),{get:ee,post:fe,put:K}=(0,a.kY)(),$=L==="create";(0,y.useQuery)("content-api-permissions",async()=>{const[C,G]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async te=>{const{data:U}=await ee(te);return U.data}));b({type:"UPDATE_PERMISSIONS_LAYOUT",value:C}),b({type:"UPDATE_ROUTES",value:G}),O&&(O?.type==="read-only"&&b({type:"ON_CHANGE_READ_ONLY"}),O?.type==="full-access"&&b({type:"SELECT_ALL_ACTIONS"}),O?.type==="custom"&&b({type:"UPDATE_PERMISSIONS",value:O?.permissions}))},{onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,t.useEffect)(()=>{F.current($?"didAddTokenFromList":"didEditTokenFromList",{tokenType:R.Z})},[$]);const{status:Ye}=(0,y.useQuery)(["api-token",L],async()=>{const{data:{data:C}}=await ee(`/admin/api-tokens/${L}`);return V({...C}),C?.type==="read-only"&&b({type:"ON_CHANGE_READ_ONLY"}),C?.type==="full-access"&&b({type:"SELECT_ALL_ACTIONS"}),C?.type==="custom"&&b({type:"UPDATE_PERMISSIONS",value:C?.permissions}),C},{enabled:!$&&!O,onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Xe=async(C,G)=>{F.current($?"willCreateToken":"willEditToken",{tokenType:R.Z}),E();const te=C.lifespan&&parseInt(C.lifespan,10)&&C.lifespan!=="0"?parseInt(C.lifespan,10):null;try{const{data:{data:U}}=$?await fe("/admin/api-tokens",{...C,lifespan:te,permissions:C.type==="custom"?q.selectedActions:null}):await K(`/admin/api-tokens/${L}`,{name:C.name,description:C.description,type:C.type,permissions:C.type==="custom"?q.selectedActions:null});$&&(x.replace(`/settings/api-tokens/${U.id}`,{apiToken:U}),w("apiTokens.success")),f(),V({...U}),I({type:"success",message:p($?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),F.current($?"didCreateToken":"didEditToken",{type:O.type,tokenType:R.Z})}catch(U){const ve=(0,h.I)(U.response.data);G.setErrors(ve),U?.response?.data?.error?.message===Ve?I({type:"warning",message:U.response.data.message||"notification.error.tokennamenotunique"}):I({type:"warning",message:U?.response?.data?.message||"notification.error"}),f()}},[Qe,ye]=(0,t.useState)(!1),Je={...q,onChange:({target:{value:C}})=>{ye(!0),b({type:"ON_CHANGE",value:C})},onChangeSelectAll:({target:{value:C}})=>{ye(!0),b({type:"SELECT_ALL_IN_PERMISSION",value:C})},setSelectedAction:({target:{value:C}})=>{b({type:"SET_SELECTED_ACTION",value:C})}},he=ie&&!$||z&&$;return!$&&!O&&Ye!=="success"?t.createElement(ce,{apiTokenName:O?.name}):t.createElement(l,{value:Je},t.createElement(c.o,null,t.createElement(a.SL,{name:"API Tokens"}),t.createElement(i.J9,{validationSchema:me.fK,validateOnChange:!1,initialValues:{name:O?.name||"",description:O?.description||"",type:O?.type,lifespan:O?.lifespan?O.lifespan.toString():O?.lifespan},enableReinitialize:!0,onSubmit:(C,G)=>Xe(C,G)},({errors:C,handleChange:G,isSubmitting:te,values:U,setFieldValue:ve})=>(Qe&&U?.type!=="custom"&&ve("type","custom"),t.createElement(a.l0,null,t.createElement(Z.Z,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:O,setToken:V,canEditInputs:he,canRegenerate:Ee,isSubmitting:te,regenerateUrl:"/admin/api-tokens/"}),t.createElement(r.D,null,t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(O?.name)&&t.createElement(N.Z,{token:O?.accessKey,tokenType:R.Z}),t.createElement(Q,{errors:C,onChange:G,canEditInputs:he,isCreating:$,values:U,apiToken:O,onDispatch:b,setHasChangedPermissions:ye}),t.createElement(Ne,{disabled:!he||U?.type==="read-only"||U?.type==="full-access"}))))))))}},51352:(P,m,e)=>{"use strict";e.d(m,{IX:()=>a,fK:()=>s,mk:()=>A});var t=e(66115),c=e(77349),r=e(51991);const a=(n,d,l="en")=>{if(d&&typeof d=="number"){const g=d/24/60/60/1e3;return(0,t.Z)((0,c.Z)(new Date(n),g),"PPP",{locale:r[l]})}return"Unlimited"};var i=e(57993),u=e(87561);const s=u.Ry().shape({name:u.Z_(i.I0.string).max(100).required(i.I0.required),type:u.Z_(i.I0.string).oneOf(["read-only","full-access","custom"]).required(i.I0.required),description:u.Z_().nullable(),lifespan:u.Rx().integer().min(0).nullable().defined(i.I0.required)}),A=n=>{const d={allActionsIds:[],permissions:[]};return d.permissions=Object.keys(n).map(l=>({apiId:l,label:l.split("::")[1],controllers:Object.keys(n[l].controllers).map(g=>({controller:g,actions:n[l].controllers[g].map(h=>{const T=`${l}.${g}.${h}`;return l.includes("api::")&&d.allActionsIds.push(T),{action:h,actionId:T}}).flat()})).flat()})),d}},41848:P=>{function m(e,t,c,r){for(var o=e.length,a=c+(r?1:-1);r?a--:++a<o;)if(t(e[a],a,e))return a;return-1}P.exports=m},42118:(P,m,e)=>{var t=e(41848),c=e(62722),r=e(42351);function o(a,i,u){return i===i?r(a,i,u):t(a,c,u)}P.exports=o},74221:P=>{function m(e,t,c,r){for(var o=c-1,a=e.length;++o<a;)if(r(e[o],t))return o;return-1}P.exports=m},62722:P=>{function m(e){return e!==e}P.exports=m},65464:(P,m,e)=>{var t=e(29932),c=e(42118),r=e(74221),o=e(7518),a=e(278),i=Array.prototype,u=i.splice;function y(s,v,A,n){var d=n?r:c,l=-1,g=v.length,h=s;for(s===v&&(v=a(v)),A&&(h=t(s,o(A)));++l<g;)for(var T=0,R=v[l],Z=A?A(R):R;(T=d(h,Z,T,n))>-1;)h!==s&&u.call(h,T,1),u.call(s,T,1);return s}P.exports=y},42351:P=>{function m(e,t,c){for(var r=c-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}P.exports=m},35161:(P,m,e)=>{var t=e(29932),c=e(67206),r=e(69199),o=e(1469);function a(i,u){var y=o(i)?t:r;return y(i,c(u,3))}P.exports=a},97019:(P,m,e)=>{var t=e(5976),c=e(45604),r=t(c);P.exports=r},45604:(P,m,e)=>{var t=e(65464);function c(r,o){return r&&r.length&&o&&o.length?t(r,o):r}P.exports=c},13217:(P,m,e)=>{var t=e(14259);function c(r){var o=r==null?0:r.length;return o?t(r,1,o):[]}P.exports=c},48734:(P,m,e)=>{"use strict";e.d(m,{U:()=>n,y:()=>v});var t=e(85893),c=e(67294),r=e(88972),o=e(13819),a=e(2504),i=e(75515),u=e(11047),y=e(41580);const s=({theme:d,expanded:l,variant:g,disabled:h,error:T})=>T?`1px solid ${d.colors.danger600} !important`:h?`1px solid ${d.colors.neutral150}`:l?`1px solid ${d.colors.primary600}`:g==="primary"?`1px solid ${d.colors.neutral0}`:`1px solid ${d.colors.neutral100}`,v=(0,r.ZP)(i.Z)``,A=(0,r.ZP)(y.x)`
  border: ${s};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:d})=>d.colors.primary600};

    ${v} {
      color: ${({theme:d,expanded:l})=>l?void 0:d.colors.primary700};
    }

    ${i.Z} {
      color: ${({theme:d,expanded:l})=>l?void 0:d.colors.primary600};
    }

    & > ${u.k} {
      background: ${({theme:d})=>d.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:d})=>d.colors.primary200};
    }
  }
`,n=({children:d,disabled:l=!1,error:g,expanded:h=!1,hasErrorMessage:T=!0,id:R,onToggle:Z,toggle:N,size:S="M",variant:M="primary",shadow:B})=>{const D=(0,a.M)(R),H=c.useMemo(()=>({expanded:h,onToggle:Z,toggle:N,id:D,size:S,variant:M,disabled:l}),[l,h,D,Z,S,N,M]);return(0,t.jsxs)(o.S.Provider,{value:H,children:[(0,t.jsx)(A,{"data-strapi-expanded":h,disabled:l,"aria-disabled":l,expanded:h,hasRadius:!0,variant:M,error:g,shadow:B,children:d}),g&&T&&(0,t.jsx)(y.x,{paddingTop:1,children:(0,t.jsx)(i.Z,{variant:"pi",textColor:"danger600",children:g})})]})}},63081:(P,m,e)=>{"use strict";e.d(m,{v:()=>o});var t=e(85893),c=e(13819),r=e(41580);const o=({children:a,...i})=>{const{expanded:u,id:y}=(0,c.A)();if(!u)return null;const s=`accordion-content-${y}`,v=`accordion-label-${y}`,A=`accordion-desc-${y}`;return(0,t.jsx)(r.x,{role:"region",id:s,"aria-labelledby":v,"aria-describedby":A,...i,children:a})}},13819:(P,m,e)=>{"use strict";e.d(m,{A:()=>r,S:()=>c});var t=e(67294);const c=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),r=()=>(0,t.useContext)(c)},74756:(P,m,e)=>{"use strict";e.d(m,{B:()=>d});var t=e(85893),c=e(12645),r=e(88972),o=e(48734),a=e(13819);const i=({expanded:l,disabled:g,variant:h})=>{let T="neutral100";return l?T="primary100":g?T="neutral150":h==="primary"&&(T="neutral0"),T};var u=e(39785),y=e(52624),s=e(11047),v=e(75515);const A=(0,r.ZP)(u.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:l,expanded:g})=>g?l.colors.primary600:l.colors.neutral500};
    }
  }
`,n=(0,r.ZP)(s.k)`
  min-height: ${({theme:l,size:g})=>l.sizes.accordions[g]};
  border-radius: ${({theme:l,expanded:g})=>g?`${l.borderRadius} ${l.borderRadius} 0 0`:l.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:l})=>l.colors.primary600};
      }
    }
  }
`,d=({title:l,description:g,as:h="span",togglePosition:T="right",action:R,...Z})=>{const{onToggle:N,toggle:S,expanded:M,id:B,size:D,variant:H,disabled:W}=(0,a.A)(),Y=`accordion-content-${B}`,X=`accordion-label-${B}`,J=`accordion-desc-${B}`,Q=D==="M"?6:4,ne=D==="M"?Q:Q-2,le=i({expanded:M,disabled:W,variant:H}),de={as:h,fontWeight:D==="S"?"bold":void 0,id:X,textColor:M?"primary600":"neutral700",ellipsis:!0,variant:D==="M"?"delta":void 0},_=M?"primary600":"neutral600",ce=M?"primary200":"neutral200",se=D==="M"?`${32/16}rem`:`${24/16}rem`,ae=()=>{W||(S&&!N?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),S()):N&&N())},oe=(0,t.jsx)(s.k,{justifyContent:"center",borderRadius:"50%",height:se,width:se,transform:M?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ce,cursor:W?"not-allowed":"pointer",onClick:ae,shrink:0,children:(0,t.jsx)(y.J,{as:c.Z,width:D==="M"?`${11/16}rem`:`${8/16}rem`,color:M?"primary600":"neutral600"})});return(0,t.jsx)(n,{paddingBottom:ne,paddingLeft:Q,paddingRight:Q,paddingTop:ne,background:le,expanded:M,size:D,justifyContent:"space-between",cursor:W?"not-allowed":"",children:(0,t.jsxs)(s.k,{gap:3,flex:1,maxWidth:"100%",children:[T==="left"&&oe,(0,t.jsx)(A,{onClick:ae,"aria-disabled":W,"aria-expanded":M,"aria-controls":Y,"aria-labelledby":X,"data-strapi-accordion-toggle":!0,expanded:M,type:"button",flex:1,minWidth:0,...Z,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.y,{...de,children:l}),g&&(0,t.jsx)(v.Z,{as:"p",id:J,textColor:_,children:g})]})}),T==="right"&&(0,t.jsxs)(s.k,{gap:3,children:[oe,R]}),T==="left"&&R]})})}}}]);