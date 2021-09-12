import{D as e,S as s,i as t,s as a,e as l,c as r,a as n,d as i,b as c,E as o,f as h,F as f,G as v,H as g,I as u,J as $,t as m,k as p,j as b,g as d,n as k,m as w,K as E,L as q,o as L,v as _,r as x,w as A,M as I,N as H,O as T}from"../chunks/vendor-0706e083.js";const S={subscribe:s=>(()=>{const s=e("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}})().page.subscribe(s)};function B(e){let s,t,a;return{c(){s=l("a"),this.h()},l(e){s=r(e,"A",{href:!0,class:!0,title:!0,target:!0,rel:!0,"aria-label":!0,style:!0}),n(s).forEach(i),this.h()},h(){c(s,"href",e[1]),c(s,"class","iconLink svelte-1cmf7za"),c(s,"title",e[2]),c(s,"target",t=e[3]?"_blank":null),c(s,"rel",a=e[3]?"noreferrer":null),c(s,"aria-label",e[4]),o(s,"--hover-color",e[5])},m(t,a){h(t,s,a),s.innerHTML=e[0]},p(e,[l]){1&l&&(s.innerHTML=e[0]),2&l&&c(s,"href",e[1]),4&l&&c(s,"title",e[2]),8&l&&t!==(t=e[3]?"_blank":null)&&c(s,"target",t),8&l&&a!==(a=e[3]?"noreferrer":null)&&c(s,"rel",a),16&l&&c(s,"aria-label",e[4]),32&l&&o(s,"--hover-color",e[5])},i:f,o:f,d(e){e&&i(s)}}}function M(e,s,t){let{svg:a}=s,{link:l}=s,{title:r=null}=s,{newTab:n=!0}=s,{label:i="none"}=s,{color:c="orange"}=s;return e.$$set=e=>{"svg"in e&&t(0,a=e.svg),"link"in e&&t(1,l=e.link),"title"in e&&t(2,r=e.title),"newTab"in e&&t(3,n=e.newTab),"label"in e&&t(4,i=e.label),"color"in e&&t(5,c=e.color)},[a,l,r,n,i,c]}class R extends s{constructor(e){super(),t(this,e,M,B,a,{svg:0,link:1,title:2,newTab:3,label:4,color:5})}}function O(e){let s,t,a,o,f,I,H,T,S,B,M,O,W,D,G,N,j,y,F,V,z,J,K,U;return j=new R({props:{link:"https://github.com/rafistrauss",svg:v.svg,title:"Github Link",label:v.title,color:"#388bfd"}}),F=new R({props:{link:"https://stackoverflow.com/users/1851509/general-twyckenham",title:"StackOverflow Link",svg:g.svg,color:"#"+g.hex}}),z=new R({props:{title:"LinkedIn Link",link:"https://www.linkedin.com/in/rafi-strauss-84043143/",svg:u.svg,color:"#"+u.hex}}),K=new R({props:{link:"mailto:rafi@rafistrauss.com",title:"Email link",svg:$.svg,color:"#"+$.hex}}),{c(){s=l("header"),t=l("nav"),a=l("ul"),o=l("li"),f=l("a"),I=m("Home"),H=p(),T=l("li"),S=l("a"),B=m("Resume"),M=p(),O=l("li"),W=l("a"),D=m("Blog"),G=p(),N=l("div"),b(j.$$.fragment),y=p(),b(F.$$.fragment),V=p(),b(z.$$.fragment),J=p(),b(K.$$.fragment),this.h()},l(e){s=r(e,"HEADER",{class:!0});var l=n(s);t=r(l,"NAV",{class:!0});var c=n(t);a=r(c,"UL",{class:!0});var h=n(a);o=r(h,"LI",{class:!0});var v=n(o);f=r(v,"A",{"sveltekit:prefetch":!0,title:!0,href:!0,class:!0});var g=n(f);I=d(g,"Home"),g.forEach(i),v.forEach(i),H=k(h),T=r(h,"LI",{class:!0});var u=n(T);S=r(u,"A",{"sveltekit:prefetch":!0,title:!0,href:!0,class:!0});var $=n(S);B=d($,"Resume"),$.forEach(i),u.forEach(i),M=k(h),O=r(h,"LI",{class:!0});var m=n(O);W=r(m,"A",{"sveltekit:prefetch":!0,title:!0,href:!0,class:!0});var p=n(W);D=d(p,"Blog"),p.forEach(i),m.forEach(i),h.forEach(i),c.forEach(i),G=k(l),N=r(l,"DIV",{class:!0});var b=n(N);w(j.$$.fragment,b),y=k(b),w(F.$$.fragment,b),V=k(b),w(z.$$.fragment,b),J=k(b),w(K.$$.fragment,b),b.forEach(i),l.forEach(i),this.h()},h(){c(f,"sveltekit:prefetch",""),c(f,"title","Home"),c(f,"href","/"),c(f,"class","svelte-3hohdq"),c(o,"class","svelte-3hohdq"),E(o,"active","/"===e[0].path),c(S,"sveltekit:prefetch",""),c(S,"title","Resume"),c(S,"href","/resume/"),c(S,"class","svelte-3hohdq"),c(T,"class","svelte-3hohdq"),E(T,"active",e[0].path.startsWith("/resume")),c(W,"sveltekit:prefetch",""),c(W,"title","Blog"),c(W,"href","/blog/"),c(W,"class","svelte-3hohdq"),c(O,"class","svelte-3hohdq"),E(O,"active",e[0].path.startsWith("/blog")),c(a,"class","svelte-3hohdq"),c(t,"class","svelte-3hohdq"),c(N,"class","contactLinks svelte-3hohdq"),c(s,"class","svelte-3hohdq")},m(e,l){h(e,s,l),q(s,t),q(t,a),q(a,o),q(o,f),q(f,I),q(a,H),q(a,T),q(T,S),q(S,B),q(a,M),q(a,O),q(O,W),q(W,D),q(s,G),q(s,N),L(j,N,null),q(N,y),L(F,N,null),q(N,V),L(z,N,null),q(N,J),L(K,N,null),U=!0},p(e,[s]){1&s&&E(o,"active","/"===e[0].path),1&s&&E(T,"active",e[0].path.startsWith("/resume")),1&s&&E(O,"active",e[0].path.startsWith("/blog"))},i(e){U||(_(j.$$.fragment,e),_(F.$$.fragment,e),_(z.$$.fragment,e),_(K.$$.fragment,e),U=!0)},o(e){x(j.$$.fragment,e),x(F.$$.fragment,e),x(z.$$.fragment,e),x(K.$$.fragment,e),U=!1},d(e){e&&i(s),A(j),A(F),A(z),A(K)}}}function W(e,s,t){let a;return I(e,S,(e=>t(0,a=e))),[a]}class D extends s{constructor(e){super(),t(this,e,W,O,a,{})}}function G(e){let s,t,a,o,v,g;return{c(){s=l("footer"),t=m("Built with "),a=l("a"),o=l("img"),g=m("\n\t\tSveltekit"),this.h()},l(e){s=r(e,"FOOTER",{class:!0});var l=n(s);t=d(l,"Built with "),a=r(l,"A",{href:!0,title:!0,target:!0,rel:!0,class:!0});var c=n(a);o=r(c,"IMG",{src:!0,alt:!0,class:!0}),g=d(c,"\n\t\tSveltekit"),c.forEach(i),l.forEach(i),this.h()},h(){o.src!==(v="/_app/assets/svelte-logo.87df40b8.svg")&&c(o,"src","/_app/assets/svelte-logo.87df40b8.svg"),c(o,"alt","Sveltekit"),c(o,"class","svelte-1gn6u0q"),c(a,"href","https://kit.svelte.dev/"),c(a,"title","Sveltekit"),c(a,"target","_blank"),c(a,"rel","noreferrer"),c(a,"class","svelte-1gn6u0q"),c(s,"class","svelte-1gn6u0q")},m(e,l){h(e,s,l),q(s,t),q(s,a),q(a,o),q(a,g)},p:f,i:f,o:f,d(e){e&&i(s)}}}class N extends s{constructor(e){super(),t(this,e,null,G,a,{})}}function j(e){let s,t,a,o,f,v;s=new D({});const g=e[1].default,u=H(g,e,e[0],null);return f=new N({}),{c(){b(s.$$.fragment),t=p(),a=l("main"),u&&u.c(),o=p(),b(f.$$.fragment),this.h()},l(e){w(s.$$.fragment,e),t=k(e),a=r(e,"MAIN",{class:!0});var l=n(a);u&&u.l(l),l.forEach(i),o=k(e),w(f.$$.fragment,e),this.h()},h(){c(a,"class","svelte-1l5lemn")},m(e,l){L(s,e,l),h(e,t,l),h(e,a,l),u&&u.m(a,null),h(e,o,l),L(f,e,l),v=!0},p(e,[s]){u&&u.p&&(!v||1&s)&&T(u,g,e,e[0],s,null,null)},i(e){v||(_(s.$$.fragment,e),_(u,e),_(f.$$.fragment,e),v=!0)},o(e){x(s.$$.fragment,e),x(u,e),x(f.$$.fragment,e),v=!1},d(e){A(s,e),e&&i(t),e&&i(a),u&&u.d(e),e&&i(o),A(f,e)}}}function y(e,s,t){let{$$slots:a={},$$scope:l}=s;return e.$$set=e=>{"$$scope"in e&&t(0,l=e.$$scope)},[l,a]}export default class extends s{constructor(e){super(),t(this,e,y,j,a,{})}}
