function d(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function N(){return Object.create(null)}function m(t){t.forEach(L)}function R(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function dt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function Z(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return d;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t,e,n){t.$$.on_destroy.push(J(e,n))}function mt(t,e,n,i){if(t){const s=j(t,e,n,i);return t[0](s)}}function j(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function gt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],l=Math.max(e.dirty.length,s.length);for(let c=0;c<l;c+=1)u[c]=e.dirty[c]|s[c];return u}return e.dirty|s}return e.dirty}function pt(t,e,n,i,s,u){if(s){const l=j(e,n,i,u);t.p(l,s)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function vt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function xt(t){return t==null?"":t}let b=!1;function K(){b=!0}function Q(){b=!1}function U(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&r.push(f)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const o=e[r].claim_order,f=(s>0&&e[n[s]].claim_order<=o?s+1:U(1,s,v=>e[n[v]].claim_order,o))-1;i[r]=n[f]+1;const a=f+1;n[a]=r,s=Math.max(a,s)}const u=[],l=[];let c=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(u.push(e[r-1]);c>=r;c--)l.push(e[c]);c--}for(;c>=0;c--)l.push(e[c]);u.reverse(),l.sort((r,o)=>r.claim_order-o.claim_order);for(let r=0,o=0;r<l.length;r++){for(;o<u.length&&l[r].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(l[r],f)}}function Y(t,e){if(b){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function tt(t,e,n){t.insertBefore(e,n||null)}function et(t,e,n){b&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function q(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function wt(){return E(" ")}function $t(){return E("")}function kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function nt(t){return Array.from(t.childNodes)}function B(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function G(t,e,n,i,s=!1){B(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const c=t[l];if(e(c)){const r=n(c);return r===void 0?t.splice(l,1):t[l]=r,s||(t.claim_info.last_index=l),c}}for(let l=t.claim_info.last_index-1;l>=0;l--){const c=t[l];if(e(c)){const r=n(c);return r===void 0?t.splice(l,1):t[l]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,c}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function it(t,e,n,i){return G(t,s=>s.nodeName===e,s=>{const u=[];for(let l=0;l<s.attributes.length;l++){const c=s.attributes[l];n[c.name]||u.push(c.name)}u.forEach(l=>s.removeAttribute(l))},()=>i(e))}function Ct(t,e,n){return it(t,e,n,q)}function st(t,e){return G(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>E(e),!0)}function Et(t){return st(t," ")}function V(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Ht(t){const e=V(t,"HTML_TAG_START",0),n=V(t,"HTML_TAG_END",e);if(e===n)return new O;B(t);const i=t.splice(e,n-e+1);w(i[0]),w(i[i.length-1]);const s=i.slice(1,i.length-1);for(const u of s)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new O(s)}function Mt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Tt(t,e){t.value=e==null?"":e}function zt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,n){t.classList[n?"add":"remove"](e)}function Lt(t,e=document.body){return Array.from(e.querySelectorAll(t))}class rt{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=q(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class O extends rt{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)et(this.t,this.n[n],e)}}let g;function p(t){g=t}function $(){if(!g)throw new Error("Function called outside component initialization");return g}function Nt(t){$().$$.on_mount.push(t)}function jt(t){$().$$.after_update.push(t)}function qt(t,e){$().$$.context.set(t,e)}function Bt(t){return $().$$.context.get(t)}const y=[],I=[],k=[],P=[],lt=Promise.resolve();let H=!1;function ct(){H||(H=!0,lt.then(D))}function M(t){k.push(t)}const T=new Set;let A=0;function D(){const t=g;do{for(;A<y.length;){const e=y[A];A++,p(e),ot(e.$$)}for(p(null),y.length=0,A=0;I.length;)I.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];T.has(n)||(T.add(n),n())}k.length=0}while(y.length);for(;P.length;)P.pop()();H=!1,T.clear(),p(t)}function ot(t){if(t.fragment!==null){t.update(),m(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const C=new Set;let h;function Gt(){h={r:0,c:[],p:h}}function Vt(){h.r||m(h.c),h=h.p}function ut(t,e){t&&t.i&&(C.delete(t),t.i(e))}function Ot(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),h.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function It(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const l=t[u],c=e[u];if(c){for(const r in l)r in c||(i[r]=1);for(const r in c)s[r]||(n[r]=c[r],s[r]=1);t[u]=c}else for(const r in l)s[r]=1}for(const l in i)l in n||(n[l]=void 0);return n}function Pt(t){return typeof t=="object"&&t!==null?t:{}}function Dt(t){t&&t.c()}function Ft(t,e){t&&t.l(e)}function at(t,e,n,i){const{fragment:s,on_mount:u,on_destroy:l,after_update:c}=t.$$;s&&s.m(e,n),i||M(()=>{const r=u.map(L).filter(R);l?l.push(...r):m(r),t.$$.on_mount=[]}),c.forEach(M)}function ft(t,e){const n=t.$$;n.fragment!==null&&(m(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(y.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Rt(t,e,n,i,s,u,l,c=[-1]){const r=g;p(t);const o=t.$$={fragment:null,ctx:null,props:u,update:d,not_equal:s,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:N(),dirty:c,skip_bound:!1,root:e.target||r.$$.root};l&&l(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,v,...z)=>{const S=z.length?z[0]:v;return o.ctx&&s(o.ctx[a],o.ctx[a]=S)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](S),f&&ht(t,a)),v}):[],o.update(),f=!0,m(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){K();const a=nt(e.target);o.fragment&&o.fragment.l(a),a.forEach(w)}else o.fragment&&o.fragment.c();e.intro&&ut(t.$$.fragment),at(t,e.target,e.anchor,e.customElement),Q(),D()}p(r)}class Wt{$destroy(){ft(this,1),this.$destroy=d}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _=[];function Zt(t,e=d){let n;const i=new Set;function s(c){if(W(t,c)&&(t=c,n)){const r=!_.length;for(const o of i)o[1](),_.push(o,t);if(r){for(let o=0;o<_.length;o+=2)_[o][0](_[o+1]);_.length=0}}}function u(c){s(c(t))}function l(c,r=d){const o=[c,r];return i.add(o),i.size===1&&(n=e(s)||d),c(t),()=>{i.delete(o),i.size===0&&(n(),n=null)}}return{set:s,update:u,subscribe:l}}var Jt={title:"GitHub",slug:"github",svg:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',get path(){return this.svg.match(/<path\s+d="([^"]*)/)[1]},source:"https://github.com/logos",hex:"181717",guidelines:"https://github.com/logos",license:void 0},Kt={title:"Stack Overflow",slug:"stackoverflow",svg:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow icon</title><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/></svg>',get path(){return this.svg.match(/<path\s+d="([^"]*)/)[1]},source:"https://stackoverflow.design/brand/logo/",hex:"F58025",guidelines:"https://stackoverflow.com/legal/trademark-guidance",license:void 0},Qt={title:"LinkedIn",slug:"linkedin",svg:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',get path(){return this.svg.match(/<path\s+d="([^"]*)/)[1]},source:"https://brand.linkedin.com",hex:"0A66C2",guidelines:"https://brand.linkedin.com/policies",license:void 0},Ut={title:"Gmail",slug:"gmail",svg:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail icon</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>',get path(){return this.svg.match(/<path\s+d="([^"]*)/)[1]},source:"https://fonts.gstatic.com/s/i/productlogos/gmail_2020q4/v8/192px.svg",hex:"EA4335",guidelines:void 0,license:void 0};export{vt as $,Nt as A,F as B,Zt as C,mt as D,pt as E,yt as F,gt as G,Bt as H,zt as I,d as J,Jt as K,Kt as L,Qt as M,Ut as N,St as O,Y as P,_t as Q,dt as R,Wt as S,Lt as T,xt as U,bt as V,Tt as W,kt as X,m as Y,O as Z,Ht as _,nt as a,At as b,Ct as c,w as d,q as e,et as f,st as g,Mt as h,Rt as i,Dt as j,wt as k,$t as l,Ft as m,Et as n,at as o,It as p,Pt as q,Gt as r,W as s,E as t,Ot as u,ft as v,Vt as w,ut as x,qt as y,jt as z};