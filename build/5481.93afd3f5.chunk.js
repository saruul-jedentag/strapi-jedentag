"use strict";(self.webpackChunkbackend_jedentag=self.webpackChunkbackend_jedentag||[]).push([[5481],{99123:(P,i,t)=>{t.d(i,{a:()=>f});var n=t(67294),a=t(57993),o=t(14293),r=t.n(o),d=t(86896),u=t(16550),_=t(75021);const E="strapi-notification-seat-limit",L="https://cloud.strapi.io/profile/billing",l="https://strapi.io/billing/request-seats",f=()=>{const{formatMessage:e}=(0,d.Z)();let{license:M,isError:c,isLoading:D}=(0,_.q)();const T=(0,a.lm)(),{pathname:O}=(0,u.TH)(),{enforcementUserCount:C,permittedSeats:m,licenseLimitStatus:s,isHostedOnStrapiCloud:I}=M;(0,n.useEffect)(()=>{if(c||D)return;const A=!r()(m)&&!window.sessionStorage.getItem(`${E}-${O}`)&&(s==="AT_LIMIT"||s==="OVER_LIMIT");let g;s==="OVER_LIMIT"?g="warning":s==="AT_LIMIT"&&(g="softWarning"),A&&T({type:g,message:e({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:s}),title:e({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:s,enforcementUserCount:C,permittedSeats:m}),link:{url:I?L:l,label:e({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:I})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${E}-${O}`,!0)}})},[T,M,O,e,D,m,s,C,I,c])}},75021:(P,i,t)=>{t.d(i,{q:()=>r});var n=t(67294),a=t(57993),o=t(88767);function r({enabled:d}={enabled:!0}){const{get:u}=(0,a.kY)(),{data:_,isError:E,isLoading:L}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:e}}=await u("/admin/license-limit-information");return e},{enabled:d}),l=n.useMemo(()=>_??{},[_]),f=n.useCallback(e=>(l?.features??[]).find(c=>c.name===e)?.options??{},[l?.features]);return{license:l,getFeature:f,isError:E,isLoading:L}}},17403:(P,i,t)=>{t.r(i),t.d(i,{UserListPageEE:()=>r});var n=t(67294),a=t(61611),o=t(99123);function r(){return(0,o.a)(),n.createElement(a.W,null)}}}]);
