import{d as y,k as n,l as r,q as l,s as u,K as t,E as s,L as v,M as w,N as M,J as b,T as m,_ as i,m as _,v as f,t as p,O as T}from"./entry.500a44d5.js";import{a as d,u as g}from"./useModal.89fcde43.js";import{_ as k}from"./UiButton.vue.4a627162.js";const C={class:"TheModal"},D=y({__name:"TheModal",setup(e){return(o,a)=>(n(),r("div",C,[l(m,{name:"modal",mode:"out-in"},{default:u(()=>[t(d).data?(n(),r("div",{key:0,class:s(o.$style.wrapper),onClick:a[0]||(a[0]=v((...c)=>t(d).close&&t(d).close(...c),["self"]))},[(n(),w(M(t(d).data),{onClose:t(d).close},null,40,["onClose"]))],2)):b("",!0)]),_:1})]))}}),L="_wrapper_ml8p8_10",N={wrapper:L},S={$style:N},B=i(D,[["__cssModules",S]]),x=e=>e<10?`0${e}`:e,F={class:"PongScore"},V=y({__name:"PongScore",setup(e){const o=g();function a(){o.timeLeft=o.gameTime}return(c,$)=>{const h=k;return n(),r("div",F,[_("div",{class:s(c.$style.wrapper)},[_("div",{class:s(c.$style.button)},[l(h,{onClick:a},{default:u(()=>[f("Restart")]),_:1})],2),_("div",{class:s(c.$style.score)},[l(m,{name:"top",mode:"out-in"},{default:u(()=>[(n(),r("div",{key:t(o).table[0]},p(t(o).table[0]),1))]),_:1}),f(" | "),l(m,{name:"top",mode:"out-in"},{default:u(()=>[(n(),r("div",{key:t(o).table[1]},p(t(o).table[1]),1))]),_:1})],2),_("div",{class:s(c.$style.timer)}," Time left: "+p(t(x)(Number(t(o).timeLeft.toFixed()))),3)],2)])}}}),P="_wrapper_13rax_10",q="_score_13rax_18",E="_timer_13rax_26",H="_button_13rax_31",R={wrapper:P,score:q,timer:E,button:H},z={$style:R},J=i(V,[["__cssModules",z]]),K="_wrapper_1guov_10",O="_score_1guov_16",U={wrapper:K,score:O},Y={},Z={class:"TheHeader"};function j(e,o){const a=J;return n(),r("div",Z,[_("div",{class:s(e.$style.wrapper)},[l(a,{class:s(e.$style.score)},null,8,["class"])],2)])}const A={$style:U},G=i(Y,[["render",j],["__cssModules",A]]),I="_wrapper_1eq4a_10",Q={wrapper:I},W={},X={class:"TheFooter"};function ee(e,o){return n(),r("div",X,[_("div",{class:s(e.$style.wrapper)}," ©"+p(new Date().getFullYear()),3)])}const se={$style:Q},oe=i(W,[["render",ee],["__cssModules",se]]),te="_DefaultLayout_19d5b_10",ne="_modal_19d5b_18",ae="_header_19d5b_28",ce="_footer_19d5b_29",re="_container_19d5b_33",le={DefaultLayout:te,modal:ne,header:ae,footer:ce,container:re},_e={};function de(e,o){const a=B,c=G,$=oe;return n(),r("div",{class:s(e.$style.DefaultLayout)},[l(a,{class:s(e.$style.modal)},null,8,["class"]),l(c,{class:s(e.$style.header)},null,8,["class"]),_("div",{class:s(e.$style.container)},[T(e.$slots,"default")],2),l($,{class:s(e.$style.footer)},null,8,["class"])],2)}const ie={$style:le},$e=i(_e,[["render",de],["__cssModules",ie]]);export{$e as default};