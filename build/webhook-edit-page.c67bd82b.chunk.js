"use strict";(self.webpackChunkbackend_jedentag=self.webpackChunkbackend_jedentag||[]).push([[5162],{34882:(V,f,t)=>{t.d(f,{Z:()=>le});var e=t(67294),b=t(45421),m=t(11047),v=t(64777),U=t(77197),X=t(65833),Z=t(33709),l=t(54580),se=t(63237),ae=t(75515),H=t(26031),z=t(36213),A=t(92155),G=t(41054),ie=t(45697),M=t.n(ie),Q=t(86896),D=t(88972),de=t(92686);const E=s=>s.reduce((o,c)=>{const C=c.split(".")[0];return o[C]||(o[C]=[]),o[C].push(c),o},{}),B=(0,D.ZP)(b.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:s})=>s.colors.neutral100};
  }

  thead th span {
    color: ${({theme:s})=>s.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:s})=>s.spaces[3]};
    padding-block-end: ${({theme:s})=>s.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:s})=>s.spaces[2]};
  }
`,re=s=>{const o=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return s&&(o.push({id:"app.utils.publish",defaultMessage:"Publish"}),o.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),o},Y=s=>{const o=["entry.create","entry.update","entry.delete"];return s&&o.push("entry.publish","entry.unpublish"),{entry:o,media:["media.create","media.update","media.delete"]}},J=e.createContext(),oe=({children:s})=>{const{formatMessage:o}=(0,Q.Z)(),{collectionTypes:c,isLoading:C}=(0,de.G)(),u=e.useMemo(()=>c.some(R=>R.options.draftAndPublish===!0),[c]),L=o({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return e.createElement(J.Provider,{value:{isDraftAndPublish:u}},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(v.Q,{"aria-hidden":!0},L),C&&e.createElement(U.a,null,o({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})),e.createElement(B,{"aria-label":L},s)))};oe.propTypes={children:M().oneOfType([M().arrayOf(M().node),M().node]).isRequired};const q=({getHeaders:s=re})=>{const{isDraftAndPublish:o}=e.useContext(J),{formatMessage:c}=(0,Q.Z)(),C=s(o);return e.createElement(X.S,null,e.createElement(Z.Z,null,e.createElement(l.g,null,e.createElement(se.T,null,c({id:"Settings.webhooks.event.select",defaultMessage:"Select event"}))),C.map(u=>["app.utils.publish","app.utils.unpublish"].includes(u.id)?e.createElement(l.g,{key:u.id,title:c({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"})},e.createElement(ae.Z,{variant:"sigma",textColor:"neutral600"},c(u))):e.createElement(l.g,{key:u.id},e.createElement(ae.Z,{variant:"sigma",textColor:"neutral600"},c(u))))))};q.defaultProps={getHeaders:re},q.propTypes={getHeaders:M().func};const ee=({providedEvents:s})=>{const{isDraftAndPublish:o}=e.useContext(J),c=s||Y(o),{values:C,handleChange:u}=(0,G.u6)(),L="events",R=C.events,F=[],x=E(R),k=({target:{name:y,value:g}})=>{let T=new Set(R);g?T.add(y):T.delete(y),u({target:{name:L,value:Array.from(T)}})},w=({target:{name:y,value:g}})=>{let T=new Set(R);g?c[y].forEach(P=>{F.includes(P)||T.add(P)}):c[y].forEach(P=>T.delete(P)),u({target:{name:L,value:Array.from(T)}})};return e.createElement(H.X,null,Object.entries(c).map(([y,g])=>e.createElement(_,{disabledEvents:F,key:y,name:y,events:g,inputValue:x[y],handleSelect:k,handleSelectAll:w})))};ee.defaultProps={providedEvents:null},ee.propTypes={providedEvents:M().object};const ce=s=>s.replace(/-/g," ").split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1).toLowerCase()).join(" "),_=({disabledEvents:s,name:o,events:c,inputValue:C,handleSelect:u,handleSelectAll:L})=>{const{formatMessage:R}=(0,Q.Z)(),F=c.filter(g=>!s.includes(g)),x=C.length>0,k=C.length===F.length,w=({target:{name:g}})=>{L({target:{name:g,value:!k}})},y=5;return e.createElement(Z.Z,null,e.createElement(l.f,null,e.createElement(z.X,{indeterminate:x&&!k,"aria-label":R({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:o,onChange:w,value:k},ce(o))),c.map(g=>e.createElement(l.f,{key:g},e.createElement(A.C,{disabled:s.includes(g),"aria-label":g,name:g,value:C.includes(g),onValueChange:T=>u({target:{name:g,value:T}})}))),c.length<y&&e.createElement(l.f,{colSpan:y-c.length}))};_.defaultProps={disabledEvents:[],events:[],inputValue:[],handleSelect(){},handleSelectAll(){}},_.propTypes={disabledEvents:M().array,events:M().array,inputValue:M().array,handleSelect:M().func,handleSelectAll:M().func,name:M().string.isRequired};const le={Root:oe,Headers:q,Body:ee,EventRow:_}},81164:(V,f,t)=>{t.d(f,{Z:()=>fe});var e=t(67294),b=t(185),m=t(57993),v=t(88767),U=t(16550),X=t(92686),Z=t(53979),l=t(11047),se=t(29728),ae=t(49066),H=t(41580),z=t(11276),A=t(67819),G=t(16364),ie=t(90321),M=t(85018),Q=t(67109),D=t(41054),de=t(45697),E=t.n(de),B=t(86896),re=t(80902),Y=t(34882);function J(){return e.createElement(Y.Z.Root,null,e.createElement(Y.Z.Headers,null),e.createElement(Y.Z.Body,null))}var oe=t(64777),q=t(39785),ee=t(96315),ce=t(29178),_=t(90608);const le=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],s=({name:n,onChange:a,value:r,...d})=>{const{values:{headers:h}}=(0,D.u6)(),[O,i]=(0,e.useState)(le);(0,e.useEffect)(()=>{i(le.filter(p=>!h?.some(K=>K.key!==r&&K.key===p)))},[h,r]);const $=p=>{a({target:{name:n,value:p}})},N=p=>{i(K=>[...K,p]),$(p)};return e.createElement(ce.XU,{...d,onClear:()=>$(""),onChange:$,onCreateOption:N,placeholder:"",value:r},O.map(p=>e.createElement(_.O,{value:p,key:p},p)))};s.defaultProps={value:void 0},s.propTypes={name:E().string.isRequired,onChange:E().func.isRequired,value:E().string};const o=s,C=()=>{const{formatMessage:n}=(0,B.Z)(),{values:a,errors:r}=(0,D.u6)();return e.createElement(l.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(oe.Q,null,n({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(H.x,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(D.F2,{validateOnChange:!1,name:"headers",render:({push:d,remove:h})=>e.createElement(z.r,{gap:4},a.headers.map((O,i)=>e.createElement(e.Fragment,{key:`${i}.${O.key}`},e.createElement(A.P,{col:6},e.createElement(D.gN,{as:o,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:n({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:r.headers?.[i]?.key&&r.headers[i].key})),e.createElement(A.P,{col:6},e.createElement(l.k,{alignItems:"flex-end"},e.createElement(H.x,{style:{flex:1}},e.createElement(D.gN,{as:G.o,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:n({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:r.headers?.[i]?.value&&r.headers[i].value})),e.createElement(l.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:r.headers?.[i]?.value?0:5},e.createElement(m.fG,{disabled:a.headers.length===1,onClick:()=>h(i),label:n({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})))))),e.createElement(A.P,{col:12},e.createElement(q.A,{type:"button",onClick:()=>{d({key:"",value:""})},startIcon:e.createElement(ee.Z,null)},n({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))})))};var u=t(75515),L=t(86647),R=t(70968),F=t(88972);const x=F.ZP.svg(({theme:n,color:a})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${n.colors[a]};
  }
`),k=({isPending:n,statusCode:a})=>{const{formatMessage:r}=(0,B.Z)();return n?e.createElement(l.k,{gap:2,alignItems:"center"},e.createElement(x,{as:L.Z}),e.createElement(u.Z,null,r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):a>=200&&a<300?e.createElement(l.k,{gap:2,alignItems:"center"},e.createElement(x,{as:M.Z,color:"success700"}),e.createElement(u.Z,null,r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):a>=300?e.createElement(l.k,{gap:2,alignItems:"center"},e.createElement(x,{as:R.Z,color:"danger700"}),e.createElement(u.Z,null,r({id:"Settings.error",defaultMessage:"error"})," ",a)):null};k.propTypes={isPending:E().bool.isRequired,statusCode:E().number},k.defaultProps={statusCode:void 0};const w=({statusCode:n,message:a})=>{const{formatMessage:r}=(0,B.Z)();return n>=200&&n<300?e.createElement(l.k,{justifyContent:"flex-end"},e.createElement(u.Z,{textColor:"neutral600",ellipsis:!0},r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):n>=300?e.createElement(l.k,{justifyContent:"flex-end"},e.createElement(l.k,{maxWidth:(0,m.Q1)(250),justifyContent:"flex-end",title:a},e.createElement(u.Z,{ellipsis:!0,textColor:"neutral600"},a))):null};w.propTypes={statusCode:E().number,message:E().string},w.defaultProps={statusCode:void 0,message:void 0};const y=({onCancel:n})=>{const{formatMessage:a}=(0,B.Z)();return e.createElement(l.k,{justifyContent:"flex-end"},e.createElement("button",{onClick:n,type:"button"},e.createElement(l.k,{gap:2,alignItems:"center"},e.createElement(u.Z,{textColor:"neutral400"},a({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement(x,{as:R.Z,color:"neutral400"}))))};y.propTypes={onCancel:E().func.isRequired};const g=({isPending:n,onCancel:a,response:r})=>{const{statusCode:d,message:h}=r,{formatMessage:O}=(0,B.Z)();return e.createElement(H.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(z.r,{gap:4,style:{alignItems:"center"}},e.createElement(A.P,{col:3},e.createElement(u.Z,null,O({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(A.P,{col:3},e.createElement(k,{isPending:n,statusCode:d})),e.createElement(A.P,{col:6},n?e.createElement(y,{onCancel:a}):e.createElement(w,{statusCode:d,message:h}))))};g.defaultProps={isPending:!1,onCancel(){},response:{}},g.propTypes={isPending:E().bool,onCancel:E().func,response:E().object};const T=g;var P=t(87561);const me=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Ee=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,he=({formatMessage:n})=>P.Ry().shape({name:P.Z_().required(n({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(me,n({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:P.Z_().required(n({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Ee,n({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:P.Vo(a=>{let r=P.IX();if(a.length===1){const{key:d,value:h}=a[0];if(!d&&!h)return r}return r.of(P.Ry().shape({key:P.Z_().required(n({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:P.Z_().required(n({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:P.IX()}),ue=({handleSubmit:n,triggerWebhook:a,isCreating:r,isTriggering:d,triggerResponse:h,data:O})=>{const{formatMessage:i}=(0,B.Z)(),[$,N]=(0,e.useState)(!1),p=(0,re.c)(J,async()=>(await t.e(568).then(t.bind(t,70568))).EventTableEE),K=W=>Object.keys(W).length?Object.entries(W).map(([te,ne])=>({key:te,value:ne})):[{key:"",value:""}],S=(0,D.TA)({initialValues:{name:O?.name||"",url:O?.url||"",headers:K(O?.headers||{}),events:O?.events||[]},onSubmit(W,{resetForm:te,setSubmitting:ne}){n(W),te({values:W}),ne(!1)},validationSchema:he({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return p?e.createElement(D.Hy,{value:S},e.createElement(m.l0,{onSubmit:S.handleSubmit},e.createElement(Z.T,{primaryAction:e.createElement(l.k,{gap:2},e.createElement(se.z,{onClick:()=>{a(),N(!0)},variant:"tertiary",startIcon:e.createElement(ie.Z,null),disabled:r||d,size:"L"},i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(se.z,{startIcon:e.createElement(M.Z,null),type:"submit",size:"L",disabled:!S.dirty,loading:S.isSubmitting},i({id:"global.save",defaultMessage:"Save"}))),title:r?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):O?.name,navigationAction:e.createElement(m.rU,{startIcon:e.createElement(Q.Z,null),to:"/settings/webhooks"},i({id:"global.back",defaultMessage:"Back"}))}),e.createElement(ae.D,null,e.createElement(l.k,{direction:"column",alignItems:"stretch",gap:4},$&&e.createElement(T,{isPending:d,response:h,onCancel:()=>N(!1)}),e.createElement(H.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(l.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(z.r,{gap:6},e.createElement(A.P,{col:6},e.createElement(D.gN,{as:G.o,name:"name",error:S?.errors?.name&&S.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(A.P,{col:12},e.createElement(D.gN,{as:G.o,name:"url",error:S?.errors?.url&&S.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(C,null),e.createElement(p,null))))))):null};ue.propTypes={data:E().object,handleSubmit:E().func.isRequired,triggerWebhook:E().func.isRequired,isCreating:E().bool.isRequired,isTriggering:E().bool.isRequired,triggerResponse:E().object},ue.defaultProps={data:void 0,triggerResponse:void 0};const pe=ue,ge=n=>({...n,headers:n.headers.reduce((a,{key:r,value:d})=>(r!==""&&(a[r]=d),a),{})}),fe=()=>{const{params:{id:n}}=(0,U.$B)("/settings/webhooks/:id"),a=n==="create",{replace:r}=(0,U.k6)(),d=(0,m.lm)(),{formatAPIError:h}=(0,m.So)(),O=(0,v.useQueryClient)(),{isLoading:i}=(0,X.G)(),{put:$,get:N,post:p}=(0,m.kY)(),{isLoading:K,data:S,error:W}=(0,v.useQuery)(["webhooks",n],async()=>{const{data:{data:I}}=await N(`/admin/webhooks/${n}`);return I},{enabled:!a});e.useEffect(()=>{W&&d({type:"warning",message:h(W)})},[W,d,h]);const{isLoading:te,data:ne,isIdle:ve,mutate:Me}=(0,v.useMutation)(()=>p(`/admin/webhooks/${n}/trigger`)),Ce=()=>Me(null,{onError(I){d({type:"warning",message:h(I)})}}),ye=(0,v.useMutation)(I=>p("/admin/webhooks",I)),Pe=(0,v.useMutation)(({id:I,body:j})=>$(`/admin/webhooks/${I}`,j)),be=async I=>{if(a){ye.mutate(ge(I),{onSuccess({data:j}){d({type:"success",message:{id:"Settings.webhooks.created"}}),r(`/settings/webhooks/${j.data.id}`)},onError(j){d({type:"warning",message:h(j)})}});return}Pe.mutate({id:n,body:ge(I)},{onSuccess(){O.invalidateQueries(["webhooks",n]),d({type:"success",message:{id:"notification.form.success.fields"}})},onError(j){d({type:"warning",message:h(j)})}})};return K||i?e.createElement(m.dO,null):e.createElement(b.o,null,e.createElement(m.SL,{name:"Webhooks"}),e.createElement(pe,{data:S,handleSubmit:be,triggerWebhook:Ce,isCreating:a,isTriggering:te,isTriggerIdle:ve,triggerResponse:ne?.data.data}))}},71589:(V,f,t)=>{t.r(f),t.d(f,{default:()=>Z});var e=t(67294),b=t(57993),m=t(86706),v=t(36364),U=t(81164);const Z=()=>{const l=(0,m.v9)(v._);return e.createElement(b.O4,{permissions:l.settings.webhooks.create},e.createElement(U.Z,null))}},10372:(V,f,t)=>{t.r(f),t.d(f,{default:()=>Z});var e=t(67294),b=t(57993),m=t(86706),v=t(36364),U=t(81164);const Z=()=>{const l=(0,m.v9)(v._);return e.createElement(b.O4,{permissions:l.settings.webhooks.update},e.createElement(U.Z,null))}},90608:(V,f,t)=>{t.d(f,{O:()=>b});var e=t(29178);const b=e.Wx},67109:(V,f,t)=>{t.d(f,{Z:()=>m});var e=t(85893);const b=v=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...v,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),m=b},90321:(V,f,t)=>{t.d(f,{Z:()=>m});var e=t(85893);const b=v=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 8 8",...v,children:(0,e.jsx)("path",{fill:"#212134",d:"M2 .93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84l-4.6 3.06A.5.5 0 0 1 2 7.07V.93Z"})}),m=b}}]);
