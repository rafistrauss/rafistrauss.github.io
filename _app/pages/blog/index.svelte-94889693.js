import{_ as t}from"../../chunks/preload-helper-9f12a5fd.js";import{S as s,i as e,s as a,e as l,t as n,c as o,a as r,g as c,d as h,b as f,f as i,L as g,h as u,F as m,k as p,n as d,v,j as x,m as E,o as $,r as _,w as j,u as A,R as b,P as y,B}from"../../chunks/vendor-2275b982.js";function P(t){let s,e,a=t[0].name+"";return{c(){s=l("span"),e=n(a),this.h()},l(t){s=o(t,"SPAN",{class:!0});var l=r(s);e=c(l,a),l.forEach(h),this.h()},h(){f(s,"class","svelte-d1944t")},m(t,a){i(t,s,a),g(s,e)},p(t,[s]){1&s&&a!==(a=t[0].name+"")&&u(e,a)},i:m,o:m,d(t){t&&h(s)}}}function N(t,s,e){let{tag:a}=s;return t.$$set=t=>{"tag"in t&&e(0,a=t.tag)},[a]}class w extends s{constructor(t){super(),e(this,t,N,P,a,{tag:0})}}function L(t,s,e){const a=t.slice();return a[1]=s[e].title,a[2]=s[e].tags,a[3]=s[e].outline,a[4]=s[e].slug,a[5]=s[e].published_at,a}function O(t,s,e){const a=t.slice();return a[8]=s[e],a}function k(t){let s,e;return s=new w({props:{tag:t[8]}}),{c(){x(s.$$.fragment)},l(t){E(s.$$.fragment,t)},m(t,a){$(s,t,a),e=!0},p(t,e){const a={};1&e&&(a.tag=t[8]),s.$set(a)},i(t){e||(v(s.$$.fragment,t),e=!0)},o(t){_(s.$$.fragment,t),e=!1},d(t){j(s,t)}}}function S(t){let s,e,a,m,x,E,$,j,y,P,N,w,L,S,T,z,H,I=t[1]+"",R=t[3]+"",D=t[5]+"",F=t[2],U=[];for(let l=0;l<F.length;l+=1)U[l]=k(O(t,F,l));const V=t=>_(U[t],1,1,(()=>{U[t]=null}));return{c(){s=l("li"),e=l("a"),a=l("h2"),m=n(I),x=p(),E=l("p"),$=n(R),j=p(),y=l("p"),P=n("Tags:\n\t\t\t\t\t"),N=l("span");for(let t=0;t<U.length;t+=1)U[t].c();w=p(),L=l("p"),S=n(D),z=p(),this.h()},l(t){s=o(t,"LI",{class:!0});var l=r(s);e=o(l,"A",{class:!0,rel:!0,href:!0});var n=r(e);a=o(n,"H2",{class:!0});var f=r(a);m=c(f,I),f.forEach(h),x=d(n),E=o(n,"P",{class:!0});var i=r(E);$=c(i,R),i.forEach(h),j=d(n),y=o(n,"P",{class:!0});var g=r(y);P=c(g,"Tags:\n\t\t\t\t\t"),N=o(g,"SPAN",{class:!0});var u=r(N);for(let s=0;s<U.length;s+=1)U[s].l(u);u.forEach(h),g.forEach(h),w=d(n),L=o(n,"P",{class:!0});var p=r(L);S=c(p,D),p.forEach(h),n.forEach(h),z=d(l),l.forEach(h),this.h()},h(){f(a,"class","svelte-mo237j"),f(E,"class","text-white text-base"),f(N,"class","tags svelte-mo237j"),f(y,"class","text-sm font-normal text-gray-500"),f(L,"class","date svelte-mo237j"),f(e,"class","text-blue-500 space-y-3 svelte-mo237j"),f(e,"rel","prefetch"),f(e,"href",T="/blog/"+t[4]),f(s,"class","list-none svelte-mo237j")},m(t,l){i(t,s,l),g(s,e),g(e,a),g(a,m),g(e,x),g(e,E),g(E,$),g(e,j),g(e,y),g(y,P),g(y,N);for(let s=0;s<U.length;s+=1)U[s].m(N,null);g(e,w),g(e,L),g(L,S),g(s,z),H=!0},p(t,s){if((!H||1&s)&&I!==(I=t[1]+"")&&u(m,I),(!H||1&s)&&R!==(R=t[3]+"")&&u($,R),1&s){let e;for(F=t[2],e=0;e<F.length;e+=1){const a=O(t,F,e);U[e]?(U[e].p(a,s),v(U[e],1)):(U[e]=k(a),U[e].c(),v(U[e],1),U[e].m(N,null))}for(B(),e=F.length;e<U.length;e+=1)V(e);A()}(!H||1&s)&&D!==(D=t[5]+"")&&u(S,D),(!H||1&s&&T!==(T="/blog/"+t[4]))&&f(e,"href",T)},i(t){if(!H){for(let t=0;t<F.length;t+=1)v(U[t]);H=!0}},o(t){U=U.filter(Boolean);for(let s=0;s<U.length;s+=1)_(U[s]);H=!1},d(t){t&&h(s),b(U,t)}}}function T(t){let s,e,a,u,m,x,E=t[0],$=[];for(let l=0;l<E.length;l+=1)$[l]=S(L(t,E,l));const j=t=>_($[t],1,1,(()=>{$[t]=null}));return{c(){s=p(),e=l("h1"),a=n("A Blog By Any Other Name"),u=p(),m=l("ul");for(let t=0;t<$.length;t+=1)$[t].c();this.h()},l(t){y('[data-svelte="svelte-jcbbot"]',document.head).forEach(h),s=d(t),e=o(t,"H1",{});var l=r(e);a=c(l,"A Blog By Any Other Name"),l.forEach(h),u=d(t),m=o(t,"UL",{class:!0});var n=r(m);for(let s=0;s<$.length;s+=1)$[s].l(n);n.forEach(h),this.h()},h(){document.title="A Blog By Any Other Name",f(m,"class","list-none svelte-mo237j")},m(t,l){i(t,s,l),i(t,e,l),g(e,a),i(t,u,l),i(t,m,l);for(let s=0;s<$.length;s+=1)$[s].m(m,null);x=!0},p(t,[s]){if(1&s){let e;for(E=t[0],e=0;e<E.length;e+=1){const a=L(t,E,e);$[e]?($[e].p(a,s),v($[e],1)):($[e]=S(a),$[e].c(),v($[e],1),$[e].m(m,null))}for(B(),e=E.length;e<$.length;e+=1)j(e);A()}},i(t){if(!x){for(let t=0;t<E.length;t+=1)v($[t]);x=!0}},o(t){$=$.filter(Boolean);for(let s=0;s<$.length;s+=1)_($[s]);x=!1},d(t){t&&h(s),t&&h(e),t&&h(u),t&&h(m),b($,t)}}}const z={"./ordered_z_index_maps.svx":()=>t((()=>import("./ordered_z_index_maps.svx-7ccacc48.js")),["/_app/pages/blog/ordered_z_index_maps.svx-7ccacc48.js","/_app/assets/pages/blog/ordered_z_index_maps.svx-6f2801ab.css","/_app/chunks/vendor-2275b982.js"])};let H=[];for(const D in z)H.push(z[D]().then((({metadata:t})=>t)));async function I({page:t,fetch:s}){return{props:{posts:await Promise.all(H)}}}function R(t,s,e){let{posts:a}=s;return t.$$set=t=>{"posts"in t&&e(0,a=t.posts)},[a]}export default class extends s{constructor(t){super(),e(this,t,R,T,a,{posts:0})}}export{I as load};
