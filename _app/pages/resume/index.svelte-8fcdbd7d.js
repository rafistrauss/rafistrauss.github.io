import{S as e,i as s,s as a,e as t,t as c,k as l,c as r,a as i,g as o,d as n,n as h,b as v,f as d,L as f,F as x,R as m,E as u}from"../../chunks/vendor-15ea4ef4.js";var p={$schema:"https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json",awards:[{awarder:"NBCUniversal Media, LLC",date:"2020-12-08",summary:"GEM - Going the Extra Mile - is the NBCUniversal employee recognition program that recognizes and rewards employees for significant accomplishments or exemplary behavior that reflects the company credo.",title:"GEM for Elections 2020 Web Application"}],basics:{email:"rafi@rafistrauss.com",label:"Software Engineer",location:{city:"New York",region:"NY"},name:"Rafi Strauss",phone:"872-228-6724",profiles:[{network:"Github",url:"https://github.com/rafistrauss",username:"rafistrauss"},{network:"StackOverflow",url:"https://stackoverflow.com/users/1851509/general-twyckenham",username:"General_Twyckenham                "},{network:"LinkedIn",url:"https://www.linkedin.com/in/rafi-strauss-84043143/",username:"Rafi (Raphael) Strauss"}],url:"https://www.rafistrauss.com"},education:[{area:"Computer Science",institution:"Yeshiva College",studyType:"Bachelor of Arts"}],work:[{description:"",highlights:["Key member of the amazing team behind the widely-viewed election web pages, such as <a href='https://www.nbcnews.com/politics/2020-elections/president-results'>President Results</a>, which combined for over 100 million page views.","Implemented and customized a lightweight CMS for editorial & product to manage the election pages without requiring releases or dev work","Lead the initiative to onboard Telemundo to NBC News' front-end tech stack"],location:"New York, NY",name:"NBCUniversal Media, LLC",position:"Senior Software Engineer, Web",startDate:"2019-06-01",summary:"",url:"https://www.nbcuniversal.com/"},{description:"",endDate:"2019-06-01",highlights:["Implemented frontend design and functionality for client websites according to best practices, including BEM and ES6: <a href='https://200.cravath.com/'>Cravath Bicentennial</a>, <a href='https://www.bclplaw.com/'>BCLP</a>, <a href='https://www.choateia.com/'>Choate IA</a>, <a href='https://www.finnegan.com/en/'>Finnegan</a>, among others","Wrote an internal service to integrate Trello and Request Tracker, obviating the need for duplicate content entry","Resolved support &amp; maintenance issues in core and project code to keep clients happy","Developed several internal Chrome extensions and bash scripts to aid engineer productivity and work satisfaction"],location:"New York, NY",name:"Rubenstein Technology Group",position:"Software Engineer",startDate:"2016-11-01",summary:"",url:"https://www.rubensteintech.com/"},{description:"",endDate:"2016-10-01",highlights:["Developed new core functionality for the ProSeeder platform using a Java/JSP backend","Implemented new designs and features to modernize the web application and improve user experience","Improved systems development lifecycle by automating build processes","Implemented SASS for product consistency, speed, and more enjoyable development","Worked on platform optimizations from front-end to back"],location:"New York, NY",name:"ProSeeder Technologies Inc.",position:"Software Engineer",startDate:"2015-01-01",summary:""},{description:"",endDate:"2015-02-01",highlights:["Developed website and infrastructure, including account management, product display, e-commerce frontend, and admin backends","Interfaced with tech companies such as UpCload and Poikos (Flixfit) to consider utilizing their technology for measuring customers"],location:"New York, NY",name:"Fitted Threads",position:"Co-founder & Lead Developer",startDate:"2012-10-01",summary:""}]};function g(e,s,a){const t=e.slice();return t[2]=s[a],t}function E(e,s,a){const t=e.slice();return t[5]=s[a],t}function w(e,s,a){const t=e.slice();return t[8]=s[a],t}function I(e){let s,a=e[8]+"";return{c(){s=t("li"),this.h()},l(e){s=r(e,"LI",{class:!0}),i(s).forEach(n),this.h()},h(){v(s,"class","svelte-xc4xh8")},m(e,t){d(e,s,t),s.innerHTML=a},p:x,d(e){e&&n(s)}}}function y(e){let s,a,x,u,p,g,E,y,D,b,k,S,L,C,T,V=e[5].position+"",N=new Date(e[5].startDate).toLocaleString("default",e[1])+"",H=(e[5].endDate?new Date(e[5].endDate).toLocaleString("default",e[1]):"Present")+"",P=e[5].name+"",A=e[5].highlights,R=[];for(let t=0;t<A.length;t+=1)R[t]=I(w(e,A,t));return{c(){s=t("div"),a=t("div"),x=t("h2"),u=c(V),p=l(),g=t("p"),E=c(N),y=c(" - "),D=c(H),b=l(),k=t("h3"),S=c(P),L=l(),C=t("ul");for(let e=0;e<R.length;e+=1)R[e].c();T=l(),this.h()},l(e){s=r(e,"DIV",{class:!0});var t=i(s);a=r(t,"DIV",{class:!0});var c=i(a);x=r(c,"H2",{class:!0});var l=i(x);u=o(l,V),l.forEach(n),p=h(c),g=r(c,"P",{class:!0});var v=i(g);E=o(v,N),y=o(v," - "),D=o(v,H),v.forEach(n),c.forEach(n),b=h(t),k=r(t,"H3",{class:!0});var d=i(k);S=o(d,P),d.forEach(n),L=h(t),C=r(t,"UL",{class:!0});var f=i(C);for(let s=0;s<R.length;s+=1)R[s].l(f);f.forEach(n),T=h(t),t.forEach(n),this.h()},h(){v(x,"class","svelte-xc4xh8"),v(g,"class","subDetails svelte-xc4xh8"),v(a,"class","svelte-xc4xh8"),v(k,"class","companyName svelte-xc4xh8"),v(C,"class","svelte-xc4xh8"),v(s,"class","experience__item svelte-xc4xh8")},m(e,t){d(e,s,t),f(s,a),f(a,x),f(x,u),f(a,p),f(a,g),f(g,E),f(g,y),f(g,D),f(s,b),f(s,k),f(k,S),f(s,L),f(s,C);for(let s=0;s<R.length;s+=1)R[s].m(C,null);f(s,T)},p(e,s){if(1&s){let a;for(A=e[5].highlights,a=0;a<A.length;a+=1){const t=w(e,A,a);R[a]?R[a].p(t,s):(R[a]=I(t),R[a].c(),R[a].m(C,null))}for(;a<R.length;a+=1)R[a].d(1);R.length=A.length}},d(e){e&&n(s),m(R,e)}}}function D(e){let s,a,m,p,g,E,w,I,y,D,b,k,S,L,C,T,V=e[2].title+"",N=new Date(e[2].date).toLocaleString("default",{month:"long",year:"numeric"})+"",H=e[2].awarder+"",P=e[2].summary+"";return{c(){s=t("div"),a=t("div"),m=t("h2"),p=t("img"),E=c(V),w=l(),I=t("p"),y=c(N),D=l(),b=t("h3"),k=c(H),S=l(),L=t("p"),C=c(P),T=l(),this.h()},l(e){s=r(e,"DIV",{class:!0});var t=i(s);a=r(t,"DIV",{class:!0});var c=i(a);m=r(c,"H2",{class:!0});var l=i(m);p=r(l,"IMG",{src:!0,style:!0,alt:!0,class:!0}),E=o(l,V),l.forEach(n),w=h(c),I=r(c,"P",{class:!0});var v=i(I);y=o(v,N),v.forEach(n),c.forEach(n),D=h(t),b=r(t,"H3",{class:!0});var d=i(b);k=o(d,H),d.forEach(n),S=h(t),L=r(t,"P",{class:!0});var f=i(L);C=o(f,P),f.forEach(n),T=h(t),t.forEach(n),this.h()},h(){p.src!==(g="/_app/assets/gem.91b6a527.svg")&&v(p,"src","/_app/assets/gem.91b6a527.svg"),u(p,"height","0.85em"),u(p,"margin-right","4px"),v(p,"alt",""),v(p,"class","svelte-xc4xh8"),v(m,"class","svelte-xc4xh8"),v(I,"class","subDetails svelte-xc4xh8"),v(a,"class","svelte-xc4xh8"),v(b,"class","companyName svelte-xc4xh8"),v(L,"class","svelte-xc4xh8"),v(s,"class","experience__item svelte-xc4xh8")},m(e,t){d(e,s,t),f(s,a),f(a,m),f(m,p),f(m,E),f(a,w),f(a,I),f(I,y),f(s,D),f(s,b),f(b,k),f(s,S),f(s,L),f(L,C),f(s,T)},p:x,d(e){e&&n(s)}}}function b(e){let s,a,u,p,w,I,b,k,S,L,C,T,V,N,H,P,A,R,F,M,Y,B,q,G,U,_,j,z,J,W,O,K,Q,$,X,Z,ee,se,ae,te,ce,le,re,ie,oe,ne,he,ve,de,fe,xe,me,ue,pe,ge,Ee,we,Ie,ye,De,be,ke,Se,Le,Ce,Te,Ve,Ne,He,Pe,Ae,Re,Fe,Me,Ye,Be,qe,Ge,Ue,_e,je,ze,Je,We,Oe,Ke,Qe,$e,Xe,Ze,es=e[0].basics.name+"",ss=e[0].basics.label+"",as=e[0].basics.location.city+"",ts=e[0].education[0].studyType+"",cs=e[0].education[0].area+"",ls=e[0].education[0].institution+"",rs=e[0].work,is=[];for(let t=0;t<rs.length;t+=1)is[t]=y(E(e,rs,t));let os=e[0].awards,ns=[];for(let t=0;t<os.length;t+=1)ns[t]=D(g(e,os,t));return{c(){s=t("div"),a=t("div"),u=t("div"),p=t("h1"),w=c(es),I=l(),b=t("h4"),k=c(ss),S=l(),L=t("h4"),C=c(as),T=l(),V=t("div"),N=t("ul"),H=t("li"),P=t("a"),A=c("rafi@rafistrauss.com"),R=l(),F=t("div"),M=l(),Y=t("div"),B=t("section"),q=t("div"),G=t("h1"),U=c("Work Experience"),_=l(),j=t("div"),z=t("article");for(let e=0;e<is.length;e+=1)is[e].c();J=l(),W=t("div"),O=l(),K=t("section"),Q=t("div"),$=t("h1"),X=c("Awards"),Z=l(),ee=t("div"),se=t("article");for(let e=0;e<ns.length;e+=1)ns[e].c();ae=l(),te=t("div"),ce=l(),le=t("section"),re=t("div"),ie=t("h1"),oe=c("Key Skills"),ne=l(),he=t("div"),ve=t("ul"),de=t("li"),fe=c("HTML5/CSS3/SASS"),xe=l(),me=t("li"),ue=c("Javascript"),pe=l(),ge=t("li"),Ee=c("git"),we=l(),Ie=t("li"),ye=c("React"),De=l(),be=t("li"),ke=c("Java"),Se=l(),Le=t("li"),Ce=c("Perl"),Te=l(),Ve=t("li"),Ne=c("PHP"),He=l(),Pe=t("li"),Ae=c("SQL"),Re=l(),Fe=t("div"),Me=l(),Ye=t("section"),Be=t("div"),qe=t("h1"),Ge=c("Education"),Ue=l(),_e=t("div"),je=t("article"),ze=t("h2"),Je=c(ts),We=c(", "),Oe=c(cs),Ke=l(),Qe=t("p"),$e=c(ls),Xe=l(),Ze=t("div"),this.h()},l(e){s=r(e,"DIV",{class:!0});var t=i(s);a=r(t,"DIV",{class:!0});var c=i(a);u=r(c,"DIV",{id:!0,class:!0});var l=i(u);p=r(l,"H1",{class:!0});var v=i(p);w=o(v,es),v.forEach(n),I=h(l),b=r(l,"H4",{class:!0});var d=i(b);k=o(d,ss),d.forEach(n),S=h(l),L=r(l,"H4",{class:!0});var f=i(L);C=o(f,as),f.forEach(n),l.forEach(n),T=h(c),V=r(c,"DIV",{id:!0,class:!0});var x=i(V);N=r(x,"UL",{class:!0});var m=i(N);H=r(m,"LI",{class:!0});var g=i(H);P=r(g,"A",{href:!0,class:!0});var E=i(P);A=o(E,"rafi@rafistrauss.com"),E.forEach(n),g.forEach(n),m.forEach(n),x.forEach(n),R=h(c),F=r(c,"DIV",{class:!0}),i(F).forEach(n),c.forEach(n),M=h(t),Y=r(t,"DIV",{id:!0,class:!0});var y=i(Y);B=r(y,"SECTION",{class:!0});var D=i(B);q=r(D,"DIV",{class:!0});var rs=i(q);G=r(rs,"H1",{class:!0});var os=i(G);U=o(os,"Work Experience"),os.forEach(n),rs.forEach(n),_=h(D),j=r(D,"DIV",{class:!0});var hs=i(j);z=r(hs,"ARTICLE",{class:!0});var vs=i(z);for(let s=0;s<is.length;s+=1)is[s].l(vs);vs.forEach(n),hs.forEach(n),J=h(D),W=r(D,"DIV",{class:!0}),i(W).forEach(n),D.forEach(n),O=h(y),K=r(y,"SECTION",{class:!0});var ds=i(K);Q=r(ds,"DIV",{class:!0});var fs=i(Q);$=r(fs,"H1",{class:!0});var xs=i($);X=o(xs,"Awards"),xs.forEach(n),fs.forEach(n),Z=h(ds),ee=r(ds,"DIV",{class:!0});var ms=i(ee);se=r(ms,"ARTICLE",{class:!0});var us=i(se);for(let s=0;s<ns.length;s+=1)ns[s].l(us);us.forEach(n),ms.forEach(n),ae=h(ds),te=r(ds,"DIV",{class:!0}),i(te).forEach(n),ds.forEach(n),ce=h(y),le=r(y,"SECTION",{class:!0});var ps=i(le);re=r(ps,"DIV",{class:!0});var gs=i(re);ie=r(gs,"H1",{class:!0});var Es=i(ie);oe=o(Es,"Key Skills"),Es.forEach(n),gs.forEach(n),ne=h(ps),he=r(ps,"DIV",{class:!0});var ws=i(he);ve=r(ws,"UL",{class:!0});var Is=i(ve);de=r(Is,"LI",{class:!0});var ys=i(de);fe=o(ys,"HTML5/CSS3/SASS"),ys.forEach(n),xe=h(Is),me=r(Is,"LI",{class:!0});var Ds=i(me);ue=o(Ds,"Javascript"),Ds.forEach(n),pe=h(Is),ge=r(Is,"LI",{class:!0});var bs=i(ge);Ee=o(bs,"git"),bs.forEach(n),we=h(Is),Ie=r(Is,"LI",{class:!0});var ks=i(Ie);ye=o(ks,"React"),ks.forEach(n),De=h(Is),be=r(Is,"LI",{class:!0});var Ss=i(be);ke=o(Ss,"Java"),Ss.forEach(n),Se=h(Is),Le=r(Is,"LI",{class:!0});var Ls=i(Le);Ce=o(Ls,"Perl"),Ls.forEach(n),Te=h(Is),Ve=r(Is,"LI",{class:!0});var Cs=i(Ve);Ne=o(Cs,"PHP"),Cs.forEach(n),He=h(Is),Pe=r(Is,"LI",{class:!0});var Ts=i(Pe);Ae=o(Ts,"SQL"),Ts.forEach(n),Is.forEach(n),ws.forEach(n),Re=h(ps),Fe=r(ps,"DIV",{class:!0}),i(Fe).forEach(n),ps.forEach(n),Me=h(y),Ye=r(y,"SECTION",{id:!0,class:!0});var Vs=i(Ye);Be=r(Vs,"DIV",{class:!0});var Ns=i(Be);qe=r(Ns,"H1",{class:!0});var Hs=i(qe);Ge=o(Hs,"Education"),Hs.forEach(n),Ns.forEach(n),Ue=h(Vs),_e=r(Vs,"DIV",{class:!0});var Ps=i(_e);je=r(Ps,"ARTICLE",{class:!0});var As=i(je);ze=r(As,"H2",{class:!0});var Rs=i(ze);Je=o(Rs,ts),We=o(Rs,", "),Oe=o(Rs,cs),Rs.forEach(n),Ke=h(As),Qe=r(As,"P",{class:!0});var Fs=i(Qe);$e=o(Fs,ls),Fs.forEach(n),As.forEach(n),Ps.forEach(n),Xe=h(Vs),Ze=r(Vs,"DIV",{class:!0}),i(Ze).forEach(n),Vs.forEach(n),y.forEach(n),t.forEach(n),this.h()},h(){v(p,"class","quickFade delayTwo svelte-xc4xh8"),v(b,"class","quickFade delayThree svelte-xc4xh8"),v(L,"class","quickFade delayThree svelte-xc4xh8"),v(u,"id","name"),v(u,"class","svelte-xc4xh8"),v(P,"href","mailto:"+e[0].basics.email),v(P,"class","svelte-xc4xh8"),v(H,"class","svelte-xc4xh8"),v(N,"class","svelte-xc4xh8"),v(V,"id","contactDetails"),v(V,"class","quickFade delayFour svelte-xc4xh8"),v(F,"class","clear svelte-xc4xh8"),v(a,"class","mainDetails svelte-xc4xh8"),v(G,"class","svelte-xc4xh8"),v(q,"class","sectionTitle svelte-xc4xh8"),v(z,"class","experience svelte-xc4xh8"),v(j,"class","sectionContent js-experience-section svelte-xc4xh8"),v(W,"class","clear svelte-xc4xh8"),v(B,"class","svelte-xc4xh8"),v($,"class","svelte-xc4xh8"),v(Q,"class","sectionTitle svelte-xc4xh8"),v(se,"class","awards svelte-xc4xh8"),v(ee,"class","sectionContent svelte-xc4xh8"),v(te,"class","clear svelte-xc4xh8"),v(K,"class","svelte-xc4xh8"),v(ie,"class","svelte-xc4xh8"),v(re,"class","sectionTitle svelte-xc4xh8"),v(de,"class","svelte-xc4xh8"),v(me,"class","svelte-xc4xh8"),v(ge,"class","svelte-xc4xh8"),v(Ie,"class","svelte-xc4xh8"),v(be,"class","svelte-xc4xh8"),v(Le,"class","svelte-xc4xh8"),v(Ve,"class","svelte-xc4xh8"),v(Pe,"class","svelte-xc4xh8"),v(ve,"class","keySkills svelte-xc4xh8"),v(he,"class","sectionContent svelte-xc4xh8"),v(Fe,"class","clear svelte-xc4xh8"),v(le,"class","svelte-xc4xh8"),v(qe,"class","svelte-xc4xh8"),v(Be,"class","sectionTitle svelte-xc4xh8"),v(ze,"class","svelte-xc4xh8"),v(Qe,"class","subDetails svelte-xc4xh8"),v(je,"class","svelte-xc4xh8"),v(_e,"class","sectionContent svelte-xc4xh8"),v(Ze,"class","clear svelte-xc4xh8"),v(Ye,"id","Education"),v(Ye,"class","svelte-xc4xh8"),v(Y,"id","mainArea"),v(Y,"class","quickFade delayFive svelte-xc4xh8"),v(s,"class","cv instaFade wrap svelte-xc4xh8")},m(e,t){d(e,s,t),f(s,a),f(a,u),f(u,p),f(p,w),f(u,I),f(u,b),f(b,k),f(u,S),f(u,L),f(L,C),f(a,T),f(a,V),f(V,N),f(N,H),f(H,P),f(P,A),f(a,R),f(a,F),f(s,M),f(s,Y),f(Y,B),f(B,q),f(q,G),f(G,U),f(B,_),f(B,j),f(j,z);for(let s=0;s<is.length;s+=1)is[s].m(z,null);f(B,J),f(B,W),f(Y,O),f(Y,K),f(K,Q),f(Q,$),f($,X),f(K,Z),f(K,ee),f(ee,se);for(let s=0;s<ns.length;s+=1)ns[s].m(se,null);f(K,ae),f(K,te),f(Y,ce),f(Y,le),f(le,re),f(re,ie),f(ie,oe),f(le,ne),f(le,he),f(he,ve),f(ve,de),f(de,fe),f(ve,xe),f(ve,me),f(me,ue),f(ve,pe),f(ve,ge),f(ge,Ee),f(ve,we),f(ve,Ie),f(Ie,ye),f(ve,De),f(ve,be),f(be,ke),f(ve,Se),f(ve,Le),f(Le,Ce),f(ve,Te),f(ve,Ve),f(Ve,Ne),f(ve,He),f(ve,Pe),f(Pe,Ae),f(le,Re),f(le,Fe),f(Y,Me),f(Y,Ye),f(Ye,Be),f(Be,qe),f(qe,Ge),f(Ye,Ue),f(Ye,_e),f(_e,je),f(je,ze),f(ze,Je),f(ze,We),f(ze,Oe),f(je,Ke),f(je,Qe),f(Qe,$e),f(Ye,Xe),f(Ye,Ze)},p(e,[s]){if(3&s){let a;for(rs=e[0].work,a=0;a<rs.length;a+=1){const t=E(e,rs,a);is[a]?is[a].p(t,s):(is[a]=y(t),is[a].c(),is[a].m(z,null))}for(;a<is.length;a+=1)is[a].d(1);is.length=rs.length}if(1&s){let a;for(os=e[0].awards,a=0;a<os.length;a+=1){const t=g(e,os,a);ns[a]?ns[a].p(t,s):(ns[a]=D(t),ns[a].c(),ns[a].m(se,null))}for(;a<ns.length;a+=1)ns[a].d(1);ns.length=os.length}},i:x,o:x,d(e){e&&n(s),m(is,e),m(ns,e)}}}function k(e){return[p,{month:"short",year:"numeric"}]}export default class extends e{constructor(e){super(),s(this,e,k,b,a,{})}}