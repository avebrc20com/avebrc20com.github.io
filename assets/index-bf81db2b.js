import{s as p,u as f,_ as v,o as t,c as _,p as g,a as h,b as n,d as m,e as w,f as k,r as C,w as x,g as S,h as B,i as l,j as a,k as b,l as y,m as N,v as I,n as V,F as D,q as F,K as G,t as K,x as M}from"./index-c6e0f175.js";function T(){return p({method:"get",url:"/v1api/v2/settings/globalConfig"}).then(async e=>{let o=f("ave_globalConfig",{token_logo_url:"https://www.avestorage.cloud/"},localStorage);return o.value=e,o.value})}const j={},r=e=>(g("data-v-e977224a"),e=e(),h(),e),q={class:"u-network-container"},A=r(()=>n("h3",null,"温馨提示：",-1)),E=r(()=>n("p",null,"当前的网络环境访问权限受到限制，我们无法为中国大陆、美国、新加坡等地区提供服务，请您遵守所在国家和地区相关规定访问我们的服务。",-1)),R=r(()=>n("p",null,"因用户所在国家和地区合规问题而导致访问网络不稳定，属于不可抗力，与平台无关，此类原因导致的交易损失不在赔付范围。",-1)),U=[A,E,R];function $(e,o){return t(),_("div",q,U)}const z=v(j,[["render",$],["__scopeId","data-v-e977224a"]]),L=m({__name:"index",setup(e){const o=w();let u=k(()=>M().aToken);const c=C(!1);return x(u,s=>{s&&(console.log(s),o.go(0))}),S(()=>{T()}),B(()=>{}),(s,H)=>{const i=F("router-view");return t(),_(D,null,[l(c)?y("",!0):(t(),a(i,{key:0},{default:b(({Component:d})=>[(t(),a(G,null,[(t(),a(K(d)))],1024))]),_:1})),N(V(z,null,null,512),[[I,l(c)]])],64)}}});export{L as default};
