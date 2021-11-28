import{S as J,i as O,s as F,e as g,t as C,k as S,j as G,c as v,a as I,g as D,d as c,n as w,m as Q,b as r,I as P,f as b,P as f,o as W,J as X,x as V,u as R,v as Y,T as Z,U as L,w as ee,V as te,A as ae,r as se}from"../chunks/vendor-b723e31e.js";import{i as N,P as oe}from"../chunks/projectData-8b38777a.js";function x(u,a,l){const i=u.slice();return i[1]=a[l],i[3]=l,i}function z(u){let a,l,i=u[1].name+"",h,d,m,_,j,y,k;return m=new oe({props:{className:"item__image-link",imageSource:"/projectImages/resized/"+u[1].imageLink,alt:""}}),{c(){a=g("a"),l=g("div"),h=C(i),d=S(),G(m.$$.fragment),_=S(),this.h()},l(p){a=v(p,"A",{class:!0,title:!0,style:!0,href:!0});var n=I(a);l=v(n,"DIV",{class:!0,style:!0});var $=I(l);h=D($,i),$.forEach(c),d=w(n),Q(m.$$.fragment,n),_=w(n),n.forEach(c),this.h()},h(){r(l,"class","item__top-border svelte-v5100g"),P(l,"background-color",u[1].color),P(l,"color",u[1].textColor),r(a,"class","item svelte-v5100g"),r(a,"title",j=`Project ${u[1].name}`),P(a,"animation-delay",u[3]*.2+"s"),r(a,"href",y="/projects/"+u[1].slug)},m(p,n){b(p,a,n),f(a,l),f(l,h),f(a,d),W(m,a,null),f(a,_),k=!0},p:X,i(p){k||(V(m.$$.fragment,p),k=!0)},o(p){R(m.$$.fragment,p),k=!1},d(p){p&&c(a),Y(m)}}}function le(u){let a,l,i,h,d,m,_,j,y,k,p,n,$,A;document.title=a=B;let E=N,s=[];for(let e=0;e<E.length;e+=1)s[e]=z(x(u,E,e));const U=e=>R(s[e],1,1,()=>{s[e]=null});return{c(){l=g("link"),i=g("meta"),h=g("meta"),d=g("meta"),m=g("meta"),_=g("meta"),j=S(),y=g("h2"),k=C("Projects"),p=S(),n=g("section");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){const t=Z('[data-svelte="svelte-3kaqmu"]',document.head);l=v(t,"LINK",{rel:!0,href:!0}),i=v(t,"META",{name:!0,content:!0}),h=v(t,"META",{name:!0,content:!0}),d=v(t,"META",{property:!0,content:!0}),m=v(t,"META",{property:!0,content:!0}),_=v(t,"META",{property:!0,content:!0}),t.forEach(c),j=w(e),y=v(e,"H2",{class:!0});var o=I(y);k=D(o,"Projects"),o.forEach(c),p=w(e),n=v(e,"SECTION",{class:!0,style:!0});var T=I(n);for(let M=0;M<s.length;M+=1)s[M].l(T);T.forEach(c),this.h()},h(){r(l,"rel","canonical"),r(l,"href",K),r(i,"name","description"),r(i,"content",re),r(h,"name","author"),r(h,"content","Rafi Strauss"),r(d,"property","og:url"),r(d,"content",K),r(m,"property","og:title"),r(m,"content",B),r(_,"property","og:type"),r(_,"content",ne),r(y,"class","projectsTitle svelte-v5100g"),r(n,"class",$=""+(L(u[0]?"hideAnimation":"")+" svelte-v5100g")),P(n,"display","grid")},m(e,t){f(document.head,l),f(document.head,i),f(document.head,h),f(document.head,d),f(document.head,m),f(document.head,_),b(e,j,t),b(e,y,t),f(y,k),b(e,p,t),b(e,n,t);for(let o=0;o<s.length;o+=1)s[o].m(n,null);A=!0},p(e,[t]){if((!A||t&0)&&a!==(a=B)&&(document.title=a),t&0){E=N;let o;for(o=0;o<E.length;o+=1){const T=x(e,E,o);s[o]?(s[o].p(T,t),V(s[o],1)):(s[o]=z(T),s[o].c(),V(s[o],1),s[o].m(n,null))}for(se(),o=E.length;o<s.length;o+=1)U(o);ee()}(!A||t&1&&$!==($=""+(L(e[0]?"hideAnimation":"")+" svelte-v5100g")))&&r(n,"class",$)},i(e){if(!A){for(let t=0;t<E.length;t+=1)V(s[t]);A=!0}},o(e){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)R(s[t]);A=!1},d(e){c(l),c(i),c(h),c(d),c(m),c(_),e&&c(j),e&&c(y),e&&c(p),e&&c(n),te(s,e)}}}const me=!0,q="pageVisited",H="true",K="https://rafistrauss.com",re="The homepage for Rafi Strauss:  portfolio of his projects, resume, general info. Built with sveltekit. Blazing fast - straight 100s on core web vitals",B="Rafi Strauss Portfolio: Homepage",ne="website";function ie(u,a,l){let i=!1;return ae(()=>{l(0,i=sessionStorage.getItem(q)===H),sessionStorage.setItem(q,H),window.addEventListener("beforeunload",()=>{sessionStorage.removeItem(q)})}),[i]}class pe extends J{constructor(a){super();O(this,a,ie,le,F,{})}}export{pe as default,me as prerender};
