import{S as t,i as e,s as a,e as o,t as s,k as n,j as r,c as l,a as c,g as i,d as m,n as h,m as f,b as p,E as u,f as d,L as g,o as y,F as v,v as E,r as k,w as $,P as b,u as j,Q as T,B as A}from"../chunks/vendor-1d2a2839.js";import{i as S,P as M}from"../chunks/projectData-e86e378f.js";function w(t,e,a){const o=t.slice();return o[0]=e[a],o[2]=a,o}function x(t){let e,a,b,j,T,A,S,w=t[0].name+"";return T=new M({props:{className:"item__image-link",imageSource:"/projectImages/"+t[0].imageLink,alt:""}}),{c(){e=o("a"),a=o("div"),b=s(w),j=n(),r(T.$$.fragment),A=n(),this.h()},l(t){e=l(t,"A",{class:!0,style:!0,href:!0});var o=c(e);a=l(o,"DIV",{class:!0,style:!0});var s=c(a);b=i(s,w),s.forEach(m),j=h(o),f(T.$$.fragment,o),A=h(o),o.forEach(m),this.h()},h(){p(a,"class","item__top-border svelte-1b8otia"),u(a,"background-color",t[0].color),u(a,"color",t[0].textColor),p(e,"class","item svelte-1b8otia"),u(e,"animation-delay",.2*t[2]+"s"),p(e,"href","/projects/"+t[0].slug)},m(t,o){d(t,e,o),g(e,a),g(a,b),g(e,j),y(T,e,null),g(e,A),S=!0},p:v,i(t){S||(E(T.$$.fragment,t),S=!0)},o(t){k(T.$$.fragment,t),S=!1},d(t){t&&m(e),$(T)}}}function B(t){let e,a,s,r,i,f,y,v,$,M=S,B=[];for(let o=0;o<M.length;o+=1)B[o]=x(w(t,M,o));const I=t=>k(B[t],1,1,(()=>{B[t]=null}));return{c(){e=o("link"),a=o("meta"),s=o("meta"),r=o("meta"),i=o("meta"),f=o("meta"),y=n(),v=o("section");for(let t=0;t<B.length;t+=1)B[t].c();this.h()},l(t){const o=b('[data-svelte="svelte-5yyypa"]',document.head);e=l(o,"LINK",{rel:!0,href:!0}),a=l(o,"META",{name:!0,content:!0}),s=l(o,"META",{name:!0,content:!0}),r=l(o,"META",{property:!0,content:!0}),i=l(o,"META",{property:!0,content:!0}),f=l(o,"META",{property:!0,content:!0}),o.forEach(m),y=h(t),v=l(t,"SECTION",{style:!0,class:!0});var n=c(v);for(let e=0;e<B.length;e+=1)B[e].l(n);n.forEach(m),this.h()},h(){document.title="Home",p(e,"rel","canonical"),p(e,"href",_),p(a,"name","description"),p(a,"content",L),p(s,"name","author"),p(s,"content","Rafi Strauss"),p(r,"property","og:url"),p(r,"content",_),p(i,"property","og:title"),p(i,"content",N),p(f,"property","og:type"),p(f,"content","website"),u(v,"display","grid"),p(v,"class","svelte-1b8otia")},m(t,o){g(document.head,e),g(document.head,a),g(document.head,s),g(document.head,r),g(document.head,i),g(document.head,f),d(t,y,o),d(t,v,o);for(let e=0;e<B.length;e+=1)B[e].m(v,null);$=!0},p(t,[e]){if(0&e){let a;for(M=S,a=0;a<M.length;a+=1){const o=w(t,M,a);B[a]?(B[a].p(o,e),E(B[a],1)):(B[a]=x(o),B[a].c(),E(B[a],1),B[a].m(v,null))}for(A(),a=M.length;a<B.length;a+=1)I(a);j()}},i(t){if(!$){for(let t=0;t<M.length;t+=1)E(B[t]);$=!0}},o(t){B=B.filter(Boolean);for(let e=0;e<B.length;e+=1)k(B[e]);$=!1},d(t){m(e),m(a),m(s),m(r),m(i),m(f),t&&m(y),t&&m(v),T(B,t)}}}const I=!0,_="https://rafistrauss.com",L="The homepage for Rafi Strauss, and portfolio of projects. Built with sveltekit. Blazing fast",N="Rafi Strauss Homepage";export default class extends t{constructor(t){super(),e(this,t,null,B,a,{})}}export{I as prerender};
