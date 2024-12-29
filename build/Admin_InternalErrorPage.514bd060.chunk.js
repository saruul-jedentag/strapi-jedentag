"use strict";(self.webpackChunkbackend_jedentag=self.webpackChunkbackend_jedentag||[]).push([[9501],{65408:(v,l,e)=>{e.r(l),e.d(l,{InternalErrorPage:()=>p});var t=e(67294),s=e(185),c=e(53979),h=e(49066),x=e(89722),g=e(57993),r=e(37323),u=e(20550),E=e(86896);const p=()=>{const{formatMessage:m}=(0,E.Z)();return(0,g.go)(),t.createElement(s.o,{labelledBy:"title"},t.createElement(c.T,{id:"title",title:m({id:"content-manager.pageNotFound",defaultMessage:"Page not found"})}),t.createElement(h.D,null,t.createElement(x.x,{action:t.createElement(g.Qj,{variant:"secondary",endIcon:t.createElement(r.Z,null),to:"/"},m({id:"app.components.NotFoundPage.back",defaultMessage:"Back to homepage"})),content:m({id:"notification.error",defaultMessage:"An error occured"}),hasRadius:!0,icon:t.createElement(u.Z,{width:"10rem"}),shadow:"tableShadow"})))}},49066:(v,l,e)=>{e.d(l,{D:()=>c});var t=e(85893),s=e(41580);const c=({children:h})=>(0,t.jsx)(s.x,{paddingLeft:10,paddingRight:10,children:h})},53979:(v,l,e)=>{e.d(l,{T:()=>p});var t=e(85893),s=e(67294),c=e(88972);const h=n=>{const a=(0,s.useRef)(null),[o,d]=(0,s.useState)(!0),i=([_])=>{d(_.isIntersecting)};return(0,s.useEffect)(()=>{const _=a.current,f=new IntersectionObserver(i,n);return _&&f.observe(a.current),()=>{_&&f.disconnect()}},[a,n]),[a,o]};var x=e(79698);const g=(n,a)=>{const o=(0,x.W)(a);(0,s.useLayoutEffect)(()=>{const d=new ResizeObserver(o);return Array.isArray(n)?n.forEach(i=>{i.current&&d.observe(i.current)}):n.current&&d.observe(n.current),()=>{d.disconnect()}},[n,o])};var r=e(41580),u=e(11047),E=e(75515);const p=n=>{const a=(0,s.useRef)(null),[o,d]=(0,s.useState)(null),[i,_]=h({root:null,rootMargin:"0px",threshold:0});return g(i,()=>{i.current&&d(i.current.getBoundingClientRect())}),(0,s.useEffect)(()=>{a.current&&d(a.current.getBoundingClientRect())},[a]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:o?.height},ref:i,children:_&&(0,t.jsx)(M,{ref:a,...n})}),!_&&(0,t.jsx)(M,{...n,sticky:!0,width:o?.width})]})};p.displayName="HeaderLayout";const m=(0,c.ZP)(r.x)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,M=s.forwardRef(({navigationAction:n,primaryAction:a,secondaryAction:o,subtitle:d,title:i,sticky:_,width:f,...j},D)=>{const P=typeof d=="string";return _?(0,t.jsx)(m,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:f,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(u.k,{justifyContent:"space-between",children:[(0,t.jsxs)(u.k,{children:[n&&(0,t.jsx)(r.x,{paddingRight:3,children:n}),(0,t.jsxs)(r.x,{children:[(0,t.jsx)(E.Z,{variant:"beta",as:"h1",...j,children:i}),P?(0,t.jsx)(E.Z,{variant:"pi",textColor:"neutral600",children:d}):d]}),o?(0,t.jsx)(r.x,{paddingLeft:4,children:o}):null]}),(0,t.jsx)(u.k,{children:a?(0,t.jsx)(r.x,{paddingLeft:2,children:a}):void 0})]})}):(0,t.jsxs)(r.x,{ref:D,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,t.jsx)(r.x,{paddingBottom:2,children:n}):null,(0,t.jsxs)(u.k,{justifyContent:"space-between",children:[(0,t.jsxs)(u.k,{minWidth:0,children:[(0,t.jsx)(E.Z,{as:"h1",variant:"alpha",...j,children:i}),o?(0,t.jsx)(r.x,{paddingLeft:4,children:o}):null]}),a]}),P?(0,t.jsx)(E.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:d}):d]})})},185:(v,l,e)=>{e.d(l,{o:()=>x});var t=e(85893),s=e(88972),c=e(41580);const h=(0,s.ZP)(c.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,x=({labelledBy:g="main-content-title",...r})=>(0,t.jsx)(h,{"aria-labelledby":g,as:"main",id:"main-content",tabIndex:-1,...r})},37323:(v,l,e)=>{e.d(l,{Z:()=>c});var t=e(85893);const s=h=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...h,children:(0,t.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),c=s}}]);
