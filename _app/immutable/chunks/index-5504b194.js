import{S as g,i as S,s as d,k as m,a as b,l as o,m as N,c as v,h as f,n as r,F as h,b as w,D as _,B as p}from"./index-ac53d3c4.js";function C(l){let s,t,i,u,e,n;return{c(){s=m("picture"),t=m("source"),u=b(),e=m("img"),this.h()},l(c){s=o(c,"PICTURE",{});var a=N(s);t=o(a,"SOURCE",{srcset:!0,type:!0}),u=v(a),e=o(a,"IMG",{class:!0,src:!0,alt:!0}),a.forEach(f),this.h()},h(){r(t,"srcset",i=l[1]+".webp"),r(t,"type","image/webp"),r(e,"class",l[0]),h(e.src,n=l[1]+".jpg")||r(e,"src",n),r(e,"alt","")},m(c,a){w(c,s,a),_(s,t),_(s,u),_(s,e)},p(c,[a]){a&2&&i!==(i=c[1]+".webp")&&r(t,"srcset",i),a&1&&r(e,"class",c[0]),a&2&&!h(e.src,n=c[1]+".jpg")&&r(e,"src",n)},i:p,o:p,d(c){c&&f(s)}}}function E(l,s,t){let{className:i=""}=s,{imageSource:u=""}=s;return l.$$set=e=>{"className"in e&&t(0,i=e.className),"imageSource"in e&&t(1,u=e.imageSource)},[i,u]}class j extends g{constructor(s){super(),S(this,s,E,C,d,{className:0,imageSource:1})}}export{j as P};