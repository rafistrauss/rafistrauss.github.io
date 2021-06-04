import{S as e,i as t,s as r,e as a,k as s,c as n,a as o,n as c,d as i,b as l,f as p,L as h,t as m,g as u,j as f,P as j,m as d,o as k,h as g,v,r as L,w as $}from"../../chunks/vendor-15ea4ef4.js";import{d as x,b}from"../../chunks/env-a13806e5.js";import{i as E,P as w}from"../../chunks/projectData-eb6b26c4.js";function y(e){let t,r,m=e[0].projectLink&&D(e),u=e[0].repoLink&&_(e);return{c(){t=a("h2"),m&&m.c(),r=s(),u&&u.c(),this.h()},l(e){t=n(e,"H2",{class:!0});var a=o(t);m&&m.l(a),r=c(a),u&&u.l(a),a.forEach(i),this.h()},h(){l(t,"class","project-link svelte-1bjxyxa")},m(e,a){p(e,t,a),m&&m.m(t,null),h(t,r),u&&u.m(t,null)},p(e,a){e[0].projectLink?m?m.p(e,a):(m=D(e),m.c(),m.m(t,r)):m&&(m.d(1),m=null),e[0].repoLink?u?u.p(e,a):(u=_(e),u.c(),u.m(t,null)):u&&(u.d(1),u=null)},d(e){e&&i(t),m&&m.d(),u&&u.d()}}}function D(e){let t,r,s;return{c(){t=a("a"),r=m("View this project live"),this.h()},l(e){t=n(e,"A",{class:!0,target:!0,rel:!0,href:!0});var a=o(t);r=u(a,"View this project live"),a.forEach(i),this.h()},h(){l(t,"class","project-link__link svelte-1bjxyxa"),l(t,"target","_blank"),l(t,"rel","noreferrer"),l(t,"href",s=e[0].projectLink)},m(e,a){p(e,t,a),h(t,r)},p(e,r){1&r&&s!==(s=e[0].projectLink)&&l(t,"href",s)},d(e){e&&i(t)}}}function _(e){let t,r,s;return{c(){t=a("a"),r=m("View the code for this project"),this.h()},l(e){t=n(e,"A",{class:!0,target:!0,rel:!0,href:!0});var a=o(t);r=u(a,"View the code for this project"),a.forEach(i),this.h()},h(){l(t,"class","project-link__link svelte-1bjxyxa"),l(t,"target","_blank"),l(t,"rel","noreferrer"),l(t,"href",s=e[0].repoLink)},m(e,a){p(e,t,a),h(t,r)},p(e,r){1&r&&s!==(s=e[0].repoLink)&&l(t,"href",s)},d(e){e&&i(t)}}}function H(e){let t,r,x,b,E,D,_,H,S,V,I,N=e[0].name+"",P=e[0].description+"";document.title=t=e[0].name;let T=(e[0].projectLink||e[0].repoLink)&&y(e);return H=new w({props:{imageSource:`/projectImages/${e[0].imageLink}`,className:"project-image"}}),{c(){r=s(),x=a("h1"),b=m(N),E=s(),T&&T.c(),D=s(),_=a("section"),f(H.$$.fragment),S=s(),V=a("p"),this.h()},l(e){j('[data-svelte="svelte-uzl9ka"]',document.head).forEach(i),r=c(e),x=n(e,"H1",{});var t=o(x);b=u(t,N),t.forEach(i),E=c(e),T&&T.l(e),D=c(e),_=n(e,"SECTION",{class:!0});var a=o(_);d(H.$$.fragment,a),S=c(a),V=n(a,"P",{class:!0}),o(V).forEach(i),a.forEach(i),this.h()},h(){l(V,"class","project-description svelte-1bjxyxa"),l(_,"class","details svelte-1bjxyxa")},m(e,t){p(e,r,t),p(e,x,t),h(x,b),p(e,E,t),T&&T.m(e,t),p(e,D,t),p(e,_,t),k(H,_,null),h(_,S),h(_,V),V.innerHTML=P,I=!0},p(e,[r]){(!I||1&r)&&t!==(t=e[0].name)&&(document.title=t),(!I||1&r)&&N!==(N=e[0].name+"")&&g(b,N),e[0].projectLink||e[0].repoLink?T?T.p(e,r):(T=y(e),T.c(),T.m(D.parentNode,D)):T&&(T.d(1),T=null);const a={};1&r&&(a.imageSource=`/projectImages/${e[0].imageLink}`),H.$set(a),(!I||1&r)&&P!==(P=e[0].description+"")&&(V.innerHTML=P)},i(e){I||(v(H.$$.fragment,e),I=!0)},o(e){L(H.$$.fragment,e),I=!1},d(e){e&&i(r),e&&i(x),e&&i(E),T&&T.d(e),e&&i(D),e&&i(_),$(H)}}}const S=x,V=b,I=!0;async function N({page:e}){const t=E.find((t=>t.slug===e.params.slug));return t?{props:{projectData:t}}:{status:404,error:new Error(`Could not load ${e.params.slug}`)}}function P(e,t,r){let{projectData:a}=t;return e.$$set=e=>{"projectData"in e&&r(0,a=e.projectData)},[a]}export default class extends e{constructor(e){super(),t(this,e,P,H,r,{projectData:0})}}export{S as hydrate,N as load,I as prerender,V as router};
