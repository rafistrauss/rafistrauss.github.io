import{S as J,i as O,s as F,e as g,t as H,j as w,v as G,c as v,a as P,g as K,d as c,l as V,w as Q,b as r,I as j,f as b,P as f,x as W,J as X,p as I,n as B,A as Y,T as Z,U as C,o as ee,V as te,u as ae,m as se}from"../chunks/vendor-5106ce79.js";import{i as L,P as oe}from"../chunks/projectData-2a1d8aeb.js";function N(u,a,l){const i=u.slice();return i[1]=a[l],i[3]=l,i}function x(u){let a,l,i=u[1].name+"",h,_,m,d,T,y,$;return m=new oe({props:{className:"item__image-link",imageSource:"/projectImages/resized/"+u[1].imageLink}}),{c(){a=g("a"),l=g("div"),h=H(i),_=w(),G(m.$$.fragment),d=w(),this.h()},l(p){a=v(p,"A",{class:!0,title:!0,style:!0,href:!0});var n=P(a);l=v(n,"DIV",{class:!0,style:!0});var E=P(l);h=K(E,i),E.forEach(c),_=V(n),Q(m.$$.fragment,n),d=V(n),n.forEach(c),this.h()},h(){r(l,"class","item__top-border svelte-v5100g"),j(l,"background-color",u[1].color),j(l,"color",u[1].textColor),r(a,"class","item svelte-v5100g"),r(a,"title",T=`Project ${u[1].name}`),j(a,"animation-delay",u[3]*.2+"s"),r(a,"href",y="/projects/"+u[1].slug)},m(p,n){b(p,a,n),f(a,l),f(l,h),f(a,_),W(m,a,null),f(a,d),$=!0},p:X,i(p){$||(I(m.$$.fragment,p),$=!0)},o(p){B(m.$$.fragment,p),$=!1},d(p){p&&c(a),Y(m)}}}function le(u){let a,l,i,h,_,m,d,T,y,$,p,n,E,k;document.title=a=q;let A=L,s=[];for(let e=0;e<A.length;e+=1)s[e]=x(N(u,A,e));const U=e=>B(s[e],1,1,()=>{s[e]=null});return{c(){l=g("link"),i=g("meta"),h=g("meta"),_=g("meta"),m=g("meta"),d=g("meta"),T=w(),y=g("h2"),$=H("Projects"),p=w(),n=g("section");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){const t=Z('[data-svelte="svelte-3kaqmu"]',document.head);l=v(t,"LINK",{rel:!0,href:!0}),i=v(t,"META",{name:!0,content:!0}),h=v(t,"META",{name:!0,content:!0}),_=v(t,"META",{property:!0,content:!0}),m=v(t,"META",{property:!0,content:!0}),d=v(t,"META",{property:!0,content:!0}),t.forEach(c),T=V(e),y=v(e,"H2",{class:!0});var o=P(y);$=K(o,"Projects"),o.forEach(c),p=V(e),n=v(e,"SECTION",{class:!0,style:!0});var S=P(n);for(let M=0;M<s.length;M+=1)s[M].l(S);S.forEach(c),this.h()},h(){r(l,"rel","canonical"),r(l,"href",D),r(i,"name","description"),r(i,"content",re),r(h,"name","author"),r(h,"content","Rafi Strauss"),r(_,"property","og:url"),r(_,"content",D),r(m,"property","og:title"),r(m,"content",q),r(d,"property","og:type"),r(d,"content",ne),r(y,"class","projectsTitle svelte-v5100g"),r(n,"class",E=C(u[0]?"hideAnimation":"")+" svelte-v5100g"),j(n,"display","grid")},m(e,t){f(document.head,l),f(document.head,i),f(document.head,h),f(document.head,_),f(document.head,m),f(document.head,d),b(e,T,t),b(e,y,t),f(y,$),b(e,p,t),b(e,n,t);for(let o=0;o<s.length;o+=1)s[o].m(n,null);k=!0},p(e,[t]){if((!k||t&0)&&a!==(a=q)&&(document.title=a),t&0){A=L;let o;for(o=0;o<A.length;o+=1){const S=N(e,A,o);s[o]?(s[o].p(S,t),I(s[o],1)):(s[o]=x(S),s[o].c(),I(s[o],1),s[o].m(n,null))}for(se(),o=A.length;o<s.length;o+=1)U(o);ee()}(!k||t&1&&E!==(E=C(e[0]?"hideAnimation":"")+" svelte-v5100g"))&&r(n,"class",E)},i(e){if(!k){for(let t=0;t<A.length;t+=1)I(s[t]);k=!0}},o(e){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)B(s[t]);k=!1},d(e){c(l),c(i),c(h),c(_),c(m),c(d),e&&c(T),e&&c(y),e&&c(p),e&&c(n),te(s,e)}}}const me=!0,R="pageVisited",z="true",D="https://rafistrauss.com",re="The homepage for Rafi Strauss:  portfolio of his projects, resume, general info. Built with sveltekit. Blazing fast - straight 100s on core web vitals",q="Rafi Strauss Portfolio: Homepage",ne="website";function ie(u,a,l){let i=!1;return ae(()=>{l(0,i=sessionStorage.getItem(R)===z),sessionStorage.setItem(R,z),window.addEventListener("beforeunload",()=>{sessionStorage.removeItem(R)})}),[i]}class pe extends J{constructor(a){super();O(this,a,ie,le,F,{})}}export{pe as default,me as prerender};
