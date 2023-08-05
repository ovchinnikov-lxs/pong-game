var $=Object.defineProperty;var E=(o,e,s)=>e in o?$(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s;var a=(o,e,s)=>(E(o,typeof e!="symbol"?e+"":e,s),s);import{d as I,r as y,C as z,o as V,D,k as m,l as x,m as P,E as v,G as W,H as A,_ as Y,q as G}from"./entry.500a44d5.js";import{u as H,a as O}from"./useModal.89fcde43.js";class _{constructor(e,s,t){a(this,"canvas");a(this,"side");a(this,"width",12);a(this,"height",200);a(this,"targetYPosition",0);a(this,"xPosition",0);a(this,"yPosition",0);a(this,"easing",.1667);a(this,"step",60);a(this,"padding",0);this.canvas=e,this.side=s,this.padding=t,this.step=this.canvas.height*.05,this.init()}goToTop(){if(this.targetYPosition-this.step<0)return this.targetYPosition=0,!1;this.targetYPosition-=this.step}goToBottom(){if(this.targetYPosition+this.step+this.height>this.canvas.height)return this.targetYPosition=this.canvas.height-this.height,!1;this.targetYPosition+=this.step}updatePlatformPositions(){this.yPosition+=(this.targetYPosition-this.yPosition)*this.easing}setXPosition(){switch(this.side){case"left":this.xPosition=this.padding;break;case"right":this.xPosition=this.canvas.width-this.padding-this.width;break}}setYPosition(){this.yPosition=this.targetYPosition=this.canvas.height/2-this.height/2}setSize(){this.width=this.canvas.width*.01,this.height=this.canvas.height*.2}init(){this.setSize(),this.setXPosition(),this.setYPosition()}update(e){this.canvas=e,this.setSize(),this.setXPosition(),this.setYPosition()}}class U{constructor(e,s,t){a(this,"canvas");a(this,"x");a(this,"y");a(this,"speedX");a(this,"speedY");a(this,"radius");a(this,"padding");const i=Math.random()>.5?.007:-.007,l=Math.random()>.5?.007:-.007;this.canvas=e,this.speedX=this.canvas.width*i,this.speedY=this.canvas.height*l,this.radius=this.canvas.width*.01,this.padding=s,this.x=this.canvas.width/2-this.radius/2,this.y=this.canvas.height/2-this.radius/2,t&&(this.radius=t)}restart(e){this.canvas=e;const s=Math.random()>.5?.007:-.007,t=Math.random()>.5?.007:-.007;this.speedX=this.canvas.width*s,this.speedY=this.canvas.height*t,this.x=this.canvas.width/2-this.radius/2,this.y=this.canvas.height/2-this.radius/2}updateBallPosition(e,s,t){if(this.canvas=e,this.x+=this.speedX,this.y+=this.speedY,(this.y+this.radius>this.canvas.height||this.y-this.radius<0)&&(this.speedY=-this.speedY),(this.x-this.radius<s.width+this.padding&&this.y>s.yPosition&&this.y<s.yPosition+s.height||this.x+this.radius>this.canvas.width-(t.width+this.padding)&&this.y>t.yPosition&&this.y<t.yPosition+t.height)&&(this.speedX=-this.speedX),this.x+this.radius>this.canvas.width)return this.speedX=-this.speedX,0;if(this.x-this.radius<0)return this.speedX=-this.speedX,1}}const q={class:"Pong"},K=I({__name:"PongTable",setup(o){const e=H(),s=y(),t=y();let i,l,u,h,r,d;function k(){if(!i||!t.value)return!1;i.beginPath(),i.arc(d.x,d.y,d.radius,0,Math.PI*2),i.fillStyle=getComputedStyle(t.value).getPropertyValue("--ui-white-color"),i.fill(),i.closePath()}function b(){if(!i||!t.value)return!1;i.fillStyle=getComputedStyle(t.value).getPropertyValue("--ui-white-color"),i.fillRect(h.xPosition,h.yPosition,h.width,h.height),i.fillRect(r.xPosition,r.yPosition,r.width,r.height)}function T(){if(!i||!t.value)return!1;i.fillStyle=getComputedStyle(t.value).getPropertyValue("--ui-black-color"),i.fillRect(0,0,t.value.width,t.value.height)}function p(){if(!t.value||!i)return!1;i.clearRect(0,0,t.value.width,t.value.height),T(),b(),k(),h.updatePlatformPositions(),r.updatePlatformPositions();const n=d.updateBallPosition(t.value,h,r);typeof n=="number"&&e.changeScore(n)}function X(){if(!s.value||!t.value)return!1;t.value.width=s.value.clientWidth,t.value.height=s.value.clientHeight,h.update(t.value),r.update(t.value),p()}function L(){if(!t.value)return!1;clearInterval(u),e.restart(),d.restart(t.value),f()}z(()=>e.timeLeft,n=>{n===e.gameTime&&setTimeout(L,300)});function B(){e.table[0]>e.table[1]?e.setWinner("Left Player winner!"):e.table[1]>e.table[0]?e.setWinner("Right Player winner!"):e.setWinner("Draw!"),clearInterval(u),O.open(W(()=>A(()=>import("./PongModal.36eef2cc.js"),["./PongModal.36eef2cc.js","./UiButton.vue.4a627162.js","./entry.500a44d5.js","./UiButton.ee47640a.css","./useModal.89fcde43.js","./PongModal.334b25e2.css"],import.meta.url)))}function M(){e.timeLeft-=.0167,e.timeLeft<=0&&B()}function f(){u=setInterval(()=>{p(),M()},16.67)}function R(){if(!t.value||!s.value)return!1;i=t.value.getContext("2d"),t.value.width=s.value.clientWidth,t.value.height=s.value.clientHeight,h=new _(t.value,"left",t.value.width*.01),r=new _(t.value,"right",t.value.width*.01),d=new U(t.value,t.value.width*.01),f()}const c={};function g(n){delete c[n.key]}function w(n){c[n.key]=!0,c.w&&h.goToTop(),c.s&&h.goToBottom(),c.ArrowUp&&r.goToTop(),c.ArrowDown&&r.goToBottom(),p()}function S(){if(!s.value)return!1;l=new ResizeObserver(X),l.observe(s.value),window.addEventListener("keydown",w),window.addEventListener("keyup",g)}function C(){l&&l.disconnect(),window.removeEventListener("keydown",w),window.removeEventListener("keyup",g)}return V(()=>{R(),S()}),D(()=>{C(),u&&clearInterval(u)}),(n,nt)=>(m(),x("div",q,[P("div",{ref_key:"wrapperRef",ref:s,class:v(n.$style.wrapper)},[P("canvas",{ref_key:"canvasRef",ref:t,class:v(n.$style.canvas)},null,2)],2)]))}}),N="_wrapper_a9a6n_10",j="_canvas_a9a6n_28",F={wrapper:N,canvas:j},J={$style:F},Q=Y(K,[["__cssModules",J]]),Z="_wrapper_eg0q3_10",tt={wrapper:Z},et={},st={class:"IndexPage"};function it(o,e){const s=Q;return m(),x("div",st,[G(s,{class:v(o.$style.wrapper)},null,8,["class"])])}const at={$style:tt},lt=Y(et,[["render",it],["__cssModules",at]]);export{lt as default};
