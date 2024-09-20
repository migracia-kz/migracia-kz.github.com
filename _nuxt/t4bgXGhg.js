import{f as V,a1 as _,$ as H,e as y,o as xe,j as Se,w as Ae,d as Ce,t as Ee,z as _e,x as Et,H as Be,v as _t,a2 as Pe,k as x,p as ut,a3 as ft,q as k,a4 as Oe,a5 as Re,U as De,a6 as Bt,C as it,a7 as $e,a8 as Te,a9 as Le,Z as A,aa as ke,l as N,ab as Fe,ac as Ve,ad as et,ae as Ie,af as Qt,ag as Me,ah as zt,ai as Ne,s as He,aj as We}from"./O4epWfKA.js";import{I as ze,b as je,B as q,u as X}from"./CsNeaXGk.js";const Ge=V({name:"HtmlInline",props:{...ze,tag:{type:String,default:"span"}},setup(t,e){const n=je(t);return()=>_(t.tag,H(n),e.slots)}}),qn=V({__name:"divider",props:{alignment:{type:String,default:"center"},title:{type:String,default:"center"}},setup(t){const e=t,n=y(()=>({[`divider-${e.alignment}`]:e.alignment})),o=y(()=>({"--divider-border-width":"1px","--divider-spacer":"1.5em"}));return(i,r)=>{const s=Ge;return xe(),Se(s,{class:_e(Et(n)),style:Be(Et(o))},{default:Ae(()=>[Ce(Ee(e.title),1)]),_:1},8,["class","style"])}}}),Tt={id:{type:String,default:void 0}};function Lt(t,e="component"){const n=t.id||Ue();return _t(`id.${e}`,n),{attr:y(()=>({id:n}))}}function bt(t,e){const n=x(t.id);return ut(()=>{const o=ft(e);n.value=o==null?void 0:o.id}),n}function Ue(){return Pe().replace("$","")}const qe=1e3;function Xe(t,e={}){const{element:n=De}=e;if(!t||t=="#")return[];const o=n==null?void 0:n.querySelectorAll(t);return o?Array.from(o).map(i=>i.id):[]}function Ye(t,e={}){const{window:n=Re}=e,o=ft(t);if(!n||!o)return 0;let{transitionDuration:i,transitionDelay:r}=n.getComputedStyle(o);const s=Number.parseFloat(i),l=Number.parseFloat(r);return!s&&!l?0:(i=i.split(",")[0],r=r.split(",")[0],(Number.parseFloat(i)+Number.parseFloat(r))*qe)}const jt=async(t,e=!0)=>{if(await k(),!e)return new Promise(i=>i);const o=Ye(t)+5;await Oe(o),await k()};function Gt(t){return()=>{t.forEach(e=>e)}}function Ut(t,e=""){function n(){return Xe(t).map(u=>Bt(`${e}${u}`))}return{on:c=>{const u=n().map(f=>f.on(c));return Gt(u)},once:c=>{const u=n().map(f=>f.once(c));return Gt(u)},emit:c=>{n().forEach(u=>{u.emit(c)})},off:c=>{n().forEach(u=>{u.off(c)})},reset:()=>{n().forEach(a=>{a.reset()})}}}const kt={target:{type:String},href:{type:String}};function Jt(t,e,n,o){const i=it(`${e}.${n}`,void 0),r=bt(t,o);return s=>{if(t.target||t.href){const{emit:l}=Ut(t.target||t.href||"","expose_");l(e,s)}else if(i&&i(s),r.value){const{emit:l}=Ut(`#${r.value}`,"expose_");l(e,s)}}}const te={toggle:{type:String},active:{type:Boolean},split:{type:Boolean},...kt};function ee(t,e){if($e(t.toggle))return{};const n=Te(t.toggle),o=bt(t,e),i=n.map(l=>Jt(t,"toggle",l||"",e)),r=()=>i.forEach(l=>l());n.forEach(l=>{const c=it(`buttonID.${l}`,void 0);ut(()=>{c&&o.value&&(c.value=o.value)})});const s=async()=>{await r()};return{class:y(()=>({"dropdown-toggle":n.includes("dropdown"),"dropdown-toggle-split":t.split})),method:{toggle:s},event:{onClick:s}}}const ne={...kt,button:{type:[String,Boolean]},size:{type:String},disabled:{type:Boolean},type:{type:String,default:"button"},to:{type:String},colorGenerate:{type:Boolean}};function oe(t){return{class:y(()=>({disabled:t.disabled,btn:t.button,[`btn-${t.button}`]:Le(t.button),[`btn-${t.size}`]:t.size})),style:y(()=>({...A(t.colorGenerate,"--bs-btn-bg",`var(--bs-${t.button})`),...A(t.colorGenerate,"--bs-btn-hover-bg",`var(--bs-active-${t.button})`),...A(t.colorGenerate,"--bs-btn-active-bg",`var(--bs-active-${t.button})`),...A(t.colorGenerate,"--bs-btn-border-color",`var(--bs-${t.button})`),...A(t.colorGenerate,"--bs-btn-hover-border-color",`var(--bs-${t.button})`),...A(t.colorGenerate,"--bs-btn-active-border-color",`var(--bs-active-${t.button})`),...A(!t.textColor&&t.colorGenerate,"--bs-btn-color",`var(--bs-contrast-${t.button})`),...A(!t.textColor&&t.colorGenerate,"--bs-btn-hover-color",`var(--bs-contrast-${t.button})`),...A(!t.textColor&&t.colorGenerate,"--bs-btn-active-color",`var(--bs-contrast-${t.button})`)})),attr:y(()=>({type:t.type,...A(t.disabled,"aria-disabled","true"),...A(t.target,"data-bv-target",t.target)}))}}const Xn=V({name:"BsAccordionButton",props:{...q,...te,...Tt,...ne,tag:{type:String,default:"button"},toggle:{type:String,default:"collapse"}},setup(t,e){const n=x(),o=X(t),i=oe(t),r=Lt(t,"accordion-button"),s=ee(t,n),l=it("active.collapse",x(!1)),c={class:y(()=>({"accordion-button":!0,collapsed:l&&!(l!=null&&l.value)})),ref:n};return()=>_("button",H(c,r,i,o,s),e.slots)}}),Yn=V({name:"BsAccordionHeader",props:{...q,tag:{type:String,default:"div"}},setup(t,e){const n=X(t),o={class:{"accordion-header":!0}};return()=>_(t.tag,H(o,n),e.slots)}}),Ze={...kt,dismiss:{type:String}};function Ke(t,e){if(!t.dismiss)return{};const n=Jt(t,"dismiss",t.dismiss||"",e),o=()=>{n()};return{method:{dismiss:o},event:{onClick:o}}}const rt=Math.min,Z=Math.max,pt=Math.round,ht=Math.floor,G=t=>({x:t,y:t}),Qe={left:"right",right:"left",bottom:"top",top:"bottom"},Je={start:"end",end:"start"};function Pt(t,e,n){return Z(t,rt(e,n))}function mt(t,e){return typeof t=="function"?t(e):t}function K(t){return t.split("-")[0]}function vt(t){return t.split("-")[1]}function ie(t){return t==="x"?"y":"x"}function Ft(t){return t==="y"?"height":"width"}function st(t){return["top","bottom"].includes(K(t))?"y":"x"}function Vt(t){return ie(st(t))}function tn(t,e,n){n===void 0&&(n=!1);const o=vt(t),i=Vt(t),r=Ft(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=wt(s)),[s,wt(s)]}function en(t){const e=wt(t);return[Ot(t),e,Ot(e)]}function Ot(t){return t.replace(/start|end/g,e=>Je[e])}function nn(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function on(t,e,n,o){const i=vt(t);let r=nn(K(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(Ot)))),r}function wt(t){return t.replace(/left|right|bottom|top/g,e=>Qe[e])}function rn(t){return{top:0,right:0,bottom:0,left:0,...t}}function re(t){return typeof t!="number"?rn(t):{top:t,right:t,bottom:t,left:t}}function yt(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function qt(t,e,n){let{reference:o,floating:i}=t;const r=st(e),s=Vt(e),l=Ft(s),c=K(e),a=r==="y",u=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,m=o[l]/2-i[l]/2;let d;switch(c){case"top":d={x:u,y:o.y-i.height};break;case"bottom":d={x:u,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:f};break;case"left":d={x:o.x-i.width,y:f};break;default:d={x:o.x,y:o.y}}switch(vt(e)){case"start":d[s]-=m*(n&&a?-1:1);break;case"end":d[s]+=m*(n&&a?-1:1);break}return d}const sn=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:f}=qt(a,o,c),m=o,d={},v=0;for(let g=0;g<l.length;g++){const{name:p,fn:h}=l[g],{x:w,y:b,data:E,reset:C}=await h({x:u,y:f,initialPlacement:o,placement:m,strategy:i,middlewareData:d,rects:a,platform:s,elements:{reference:t,floating:e}});u=w??u,f=b??f,d={...d,[p]:{...d[p],...E}},C&&v<=50&&(v++,typeof C=="object"&&(C.placement&&(m=C.placement),C.rects&&(a=C.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):C.rects),{x:u,y:f}=qt(a,m,c)),g=-1)}return{x:u,y:f,placement:m,strategy:i,middlewareData:d}};async function se(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:m=!1,padding:d=0}=mt(e,t),v=re(d),p=l[m?f==="floating"?"reference":"floating":f],h=yt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(p)))==null||n?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:a,rootBoundary:u,strategy:c})),w=f==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),E=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},C=yt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:b,strategy:c}):w);return{top:(h.top-C.top+v.top)/E.y,bottom:(C.bottom-h.bottom+v.bottom)/E.y,left:(h.left-C.left+v.left)/E.x,right:(C.right-h.right+v.right)/E.x}}const ln=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:a,padding:u=0}=mt(t,e)||{};if(a==null)return{};const f=re(u),m={x:n,y:o},d=Vt(i),v=Ft(d),g=await s.getDimensions(a),p=d==="y",h=p?"top":"left",w=p?"bottom":"right",b=p?"clientHeight":"clientWidth",E=r.reference[v]+r.reference[d]-m[d]-r.floating[v],C=m[d]-r.reference[d],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let S=R?R[b]:0;(!S||!await(s.isElement==null?void 0:s.isElement(R)))&&(S=l.floating[b]||r.floating[v]);const P=E/2-C/2,T=S/2-g[v]/2-1,W=rt(f[h],T),at=rt(f[w],T),Y=W,ct=S-g[v]-at,B=S/2-g[v]/2+P,tt=Pt(Y,B,ct),M=!c.arrow&&vt(i)!=null&&B!==tt&&r.reference[v]/2-(B<Y?W:at)-g[v]/2<0,L=M?B<Y?B-Y:B-ct:0;return{[d]:m[d]+L,data:{[d]:tt,centerOffset:B-tt-L,...M&&{alignmentOffset:L}},reset:M}}}),an=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:g=!0,...p}=mt(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const h=K(i),w=st(l),b=K(l)===l,E=await(c.isRTL==null?void 0:c.isRTL(a.floating)),C=m||(b||!g?[wt(l)]:en(l)),R=v!=="none";!m&&R&&C.push(...on(l,g,v,E));const S=[l,...C],P=await se(e,p),T=[];let W=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&T.push(P[h]),f){const B=tn(i,s,E);T.push(P[B[0]],P[B[1]])}if(W=[...W,{placement:i,overflows:T}],!T.every(B=>B<=0)){var at,Y;const B=(((at=r.flip)==null?void 0:at.index)||0)+1,tt=S[B];if(tt)return{data:{index:B,overflows:W},reset:{placement:tt}};let M=(Y=W.filter(L=>L.overflows[0]<=0).sort((L,z)=>L.overflows[1]-z.overflows[1])[0])==null?void 0:Y.placement;if(!M)switch(d){case"bestFit":{var ct;const L=(ct=W.filter(z=>{if(R){const j=st(z.placement);return j===w||j==="y"}return!0}).map(z=>[z.placement,z.overflows.filter(j=>j>0).reduce((j,be)=>j+be,0)]).sort((z,j)=>z[1]-j[1])[0])==null?void 0:ct[0];L&&(M=L);break}case"initialPlacement":M=l;break}if(i!==M)return{reset:{placement:M}}}return{}}}};async function cn(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=K(n),l=vt(n),c=st(n)==="y",a=["left","top"].includes(s)?-1:1,u=r&&c?-1:1,f=mt(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return l&&typeof v=="number"&&(d=l==="end"?v*-1:v),c?{x:d*u,y:m*a}:{x:m*a,y:d*u}}const un=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,c=await cn(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},fn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:p=>{let{x:h,y:w}=p;return{x:h,y:w}}},...c}=mt(t,e),a={x:n,y:o},u=await se(e,c),f=st(K(i)),m=ie(f);let d=a[m],v=a[f];if(r){const p=m==="y"?"top":"left",h=m==="y"?"bottom":"right",w=d+u[p],b=d-u[h];d=Pt(w,d,b)}if(s){const p=f==="y"?"top":"left",h=f==="y"?"bottom":"right",w=v+u[p],b=v-u[h];v=Pt(w,v,b)}const g=l.fn({...e,[m]:d,[f]:v});return{...g,data:{x:g.x-n,y:g.y-o,enabled:{[m]:r,[f]:s}}}}}};function xt(){return typeof window<"u"}function J(t){return It(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(It(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function It(t){return xt()?t instanceof Node||t instanceof O(t).Node:!1}function D(t){return xt()?t instanceof Element||t instanceof O(t).Element:!1}function F(t){return xt()?t instanceof HTMLElement||t instanceof O(t).HTMLElement:!1}function Xt(t){return!xt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}function gt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=$(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function dn(t){return["table","td","th"].includes(J(t))}function St(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Mt(t){const e=Nt(),n=D(t)?$(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function mn(t){let e=U(t);for(;F(e)&&!lt(e);){if(Mt(e))return e;if(St(e))return null;e=U(e)}return null}function Nt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function lt(t){return["html","body","#document"].includes(J(t))}function $(t){return O(t).getComputedStyle(t)}function At(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function U(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Xt(t)&&t.host||I(t);return Xt(e)?e.host:e}function le(t){const e=U(t);return lt(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&gt(e)?e:le(e)}function dt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=le(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=O(i);if(r){const l=Rt(s);return e.concat(s,s.visualViewport||[],gt(i)?i:[],l&&n?dt(l):[])}return e.concat(i,dt(i,[],n))}function Rt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ae(t){const e=$(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=pt(n)!==r||pt(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function Ht(t){return D(t)?t:t.contextElement}function ot(t){const e=Ht(t);if(!F(e))return G(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=ae(e);let s=(r?pt(n.width):n.width)/o,l=(r?pt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const vn=G(0);function ce(t){const e=O(t);return!Nt()||!e.visualViewport?vn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function gn(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==O(t)?!1:e}function Q(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Ht(t);let s=G(1);e&&(o?D(o)&&(s=ot(o)):s=ot(t));const l=gn(r,n,o)?ce(r):G(0);let c=(i.left+l.x)/s.x,a=(i.top+l.y)/s.y,u=i.width/s.x,f=i.height/s.y;if(r){const m=O(r),d=o&&D(o)?O(o):o;let v=m,g=Rt(v);for(;g&&o&&d!==v;){const p=ot(g),h=g.getBoundingClientRect(),w=$(g),b=h.left+(g.clientLeft+parseFloat(w.paddingLeft))*p.x,E=h.top+(g.clientTop+parseFloat(w.paddingTop))*p.y;c*=p.x,a*=p.y,u*=p.x,f*=p.y,c+=b,a+=E,v=O(g),g=Rt(v)}}return yt({width:u,height:f,x:c,y:a})}function hn(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=I(o),l=e?St(e.floating):!1;if(o===s||l&&r)return n;let c={scrollLeft:0,scrollTop:0},a=G(1);const u=G(0),f=F(o);if((f||!f&&!r)&&((J(o)!=="body"||gt(s))&&(c=At(o)),F(o))){const m=Q(o);a=ot(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+u.x,y:n.y*a.y-c.scrollTop*a.y+u.y}}function pn(t){return Array.from(t.getClientRects())}function Dt(t,e){const n=At(t).scrollLeft;return e?e.left+n:Q(I(t)).left+n}function wn(t){const e=I(t),n=At(t),o=t.ownerDocument.body,i=Z(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=Z(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Dt(t);const l=-n.scrollTop;return $(o).direction==="rtl"&&(s+=Z(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function yn(t,e){const n=O(t),o=I(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const a=Nt();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function bn(t,e){const n=Q(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=F(t)?ot(t):G(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,a=o*r.y;return{width:s,height:l,x:c,y:a}}function Yt(t,e,n){let o;if(e==="viewport")o=yn(t,n);else if(e==="document")o=wn(I(t));else if(D(e))o=bn(e,n);else{const i=ce(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return yt(o)}function ue(t,e){const n=U(t);return n===e||!D(n)||lt(n)?!1:$(n).position==="fixed"||ue(n,e)}function xn(t,e){const n=e.get(t);if(n)return n;let o=dt(t,[],!1).filter(l=>D(l)&&J(l)!=="body"),i=null;const r=$(t).position==="fixed";let s=r?U(t):t;for(;D(s)&&!lt(s);){const l=$(s),c=Mt(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||gt(s)&&!c&&ue(t,s))?o=o.filter(u=>u!==s):i=l,s=U(s)}return e.set(t,o),o}function Sn(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?St(e)?[]:xn(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((a,u)=>{const f=Yt(e,u,i);return a.top=Z(f.top,a.top),a.right=rt(f.right,a.right),a.bottom=rt(f.bottom,a.bottom),a.left=Z(f.left,a.left),a},Yt(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function An(t){const{width:e,height:n}=ae(t);return{width:e,height:n}}function Cn(t,e,n){const o=F(e),i=I(e),r=n==="fixed",s=Q(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=G(0);if(o||!o&&!r)if((J(e)!=="body"||gt(i))&&(l=At(e)),o){const d=Q(e,!0,r,e);c.x=d.x+e.clientLeft,c.y=d.y+e.clientTop}else i&&(c.x=Dt(i));let a=0,u=0;if(i&&!o&&!r){const d=i.getBoundingClientRect();u=d.top+l.scrollTop,a=d.left+l.scrollLeft-Dt(i,d)}const f=s.left+l.scrollLeft-c.x-a,m=s.top+l.scrollTop-c.y-u;return{x:f,y:m,width:s.width,height:s.height}}function Ct(t){return $(t).position==="static"}function Zt(t,e){if(!F(t)||$(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return I(t)===n&&(n=n.ownerDocument.body),n}function fe(t,e){const n=O(t);if(St(t))return n;if(!F(t)){let i=U(t);for(;i&&!lt(i);){if(D(i)&&!Ct(i))return i;i=U(i)}return n}let o=Zt(t,e);for(;o&&dn(o)&&Ct(o);)o=Zt(o,e);return o&&lt(o)&&Ct(o)&&!Mt(o)?n:o||mn(t)||n}const En=async function(t){const e=this.getOffsetParent||fe,n=this.getDimensions,o=await n(t.floating);return{reference:Cn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function _n(t){return $(t).direction==="rtl"}const Bn={convertOffsetParentRelativeRectToViewportRelativeRect:hn,getDocumentElement:I,getClippingRect:Sn,getOffsetParent:fe,getElementRects:En,getClientRects:pn,getDimensions:An,getScale:ot,isElement:D,isRTL:_n};function Pn(t,e){let n=null,o;const i=I(t);function r(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:a,top:u,width:f,height:m}=t.getBoundingClientRect();if(l||e(),!f||!m)return;const d=ht(u),v=ht(i.clientWidth-(a+f)),g=ht(i.clientHeight-(u+m)),p=ht(a),w={rootMargin:-d+"px "+-v+"px "+-g+"px "+-p+"px",threshold:Z(0,rt(1,c))||1};let b=!0;function E(C){const R=C[0].intersectionRatio;if(R!==c){if(!b)return s();R?s(!1,R):o=setTimeout(()=>{s(!1,1e-7)},1e3)}b=!1}try{n=new IntersectionObserver(E,{...w,root:i.ownerDocument})}catch{n=new IntersectionObserver(E,w)}n.observe(t)}return s(!0),r}function On(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=Ht(t),u=i||r?[...a?dt(a):[],...dt(e)]:[];u.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),r&&h.addEventListener("resize",n)});const f=a&&l?Pn(a,n):null;let m=-1,d=null;s&&(d=new ResizeObserver(h=>{let[w]=h;w&&w.target===a&&d&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var b;(b=d)==null||b.observe(e)})),n()}),a&&!c&&d.observe(a),d.observe(e));let v,g=c?Q(t):null;c&&p();function p(){const h=Q(t);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&n(),g=h,v=requestAnimationFrame(p)}return n(),()=>{var h;u.forEach(w=>{i&&w.removeEventListener("scroll",n),r&&w.removeEventListener("resize",n)}),f==null||f(),(h=d)==null||h.disconnect(),d=null,c&&cancelAnimationFrame(v)}}const de=un,me=fn,ve=an,Rn=ln,Dn=(t,e,n)=>{const o=new Map,i={platform:Bn,...n},r={...i.platform,_c:o};return sn(t,e,{...i,platform:r})};function $n(t){return t!=null&&typeof t=="object"&&"$el"in t}function $t(t){if($n(t)){const e=t.$el;return It(e)&&J(e)==="#comment"?null:e}return t}function nt(t){return typeof t=="function"?t():Et(t)}function ge(t){return{name:"arrow",options:t,fn(e){const n=$t(nt(t.element));return n==null?{}:Rn({element:n,padding:t.padding}).fn(e)}}}function he(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Kt(t,e){const n=he(t);return Math.round(e*n)/n}function pe(t,e,n){n===void 0&&(n={});const o=n.whileElementsMounted,i=y(()=>{var S;return(S=nt(n.open))!=null?S:!0}),r=y(()=>nt(n.middleware)),s=y(()=>{var S;return(S=nt(n.placement))!=null?S:"bottom"}),l=y(()=>{var S;return(S=nt(n.strategy))!=null?S:"absolute"}),c=y(()=>{var S;return(S=nt(n.transform))!=null?S:!0}),a=y(()=>$t(t.value)),u=y(()=>$t(e.value)),f=x(0),m=x(0),d=x(l.value),v=x(s.value),g=ke({}),p=x(!1),h=y(()=>{const S={position:d.value,left:"0",top:"0"};if(!u.value)return S;const P=Kt(u.value,f.value),T=Kt(u.value,m.value);return c.value?{...S,transform:"translate("+P+"px, "+T+"px)",...he(u.value)>=1.5&&{willChange:"transform"}}:{position:d.value,left:P+"px",top:T+"px"}});let w;function b(){if(a.value==null||u.value==null)return;const S=i.value;Dn(a.value,u.value,{middleware:r.value,placement:s.value,strategy:l.value}).then(P=>{f.value=P.x,m.value=P.y,d.value=P.strategy,v.value=P.placement,g.value=P.middlewareData,p.value=S!==!1})}function E(){typeof w=="function"&&(w(),w=void 0)}function C(){if(E(),o===void 0){b();return}if(a.value!=null&&u.value!=null){w=o(a.value,u.value,b);return}}function R(){i.value||(p.value=!1)}return N([r,s,l,i],b,{flush:"sync"}),N([a,u],C,{flush:"sync"}),N(i,R,{flush:"sync"}),Fe()&&Ve(E),{x:et(f),y:et(m),strategy:et(d),placement:et(v),middlewareData:et(g),isPositioned:et(p),floatingStyles:h,update:b}}const Tn={title:{type:[String],default:""},placement:{type:String,default:"top"},template:{type:String}};function Ln(t,e){if(!t.toggle||t.toggle!="tooltip")return{};const n=Ie(e),o=x(!1),i=x(),r=x(),s=x(t.placement),{floatingStyles:l,placement:c,middlewareData:a}=pe(e,i,{placement:s,whileElementsMounted:On,middleware:[ve(),me(),de(5),ge({element:r})]});return N(n,()=>{o.value=n.value}),{attr:y(()=>({})),render:()=>{var u,f,m,d;if(o.value)return _(Qt,{to:"body"},_("div",{class:{tooltip:!0,"bs-tooltip-auto":!0,show:o.value},style:l.value,"data-popper-placement":c.value,ref:i},[_("div",{class:{"tooltip-arrow":!0},style:{...A((u=a.value.arrow)==null?void 0:u.x,"left",`${(f=a.value.arrow)==null?void 0:f.x}px`),...A((m=a.value.arrow)==null?void 0:m.y,"top",`${(d=a.value.arrow)==null?void 0:d.y}px`),position:"absolute"},ref:r}),_("div",{class:{"tooltip-inner":!0}},t.title)]))}}}const kn={title:{type:[String],default:""},content:{type:[String],default:""},placement:{type:[String],default:"right"},template:{type:String}};function Fn(t,e){if(!t.toggle||t.toggle!="popover")return{};const n=x(),o=x(),i=x(!1),r=Me(e),{floatingStyles:s,placement:l,middlewareData:c}=pe(e,n,{placement:t.placement,middleware:[ve(),me(),de(9),ge({element:o})]}),a=async()=>{i.value=!i.value};return N(r,()=>{r.value==!1&&(i.value=!1)}),{attr:y(()=>({})),event:{onClick:a},render:()=>{var u,f,m,d;if(i.value)return _(Qt,{to:"body"},_("div",{class:{popover:!0,"bs-popover-auto":!0,fade:!0,show:!0},style:s.value,"data-popper-placement":l.value,ref:n},[_("div",{class:{"popover-arrow":!0},style:{...A((u=c.value.arrow)==null?void 0:u.x,"left",`${(f=c.value.arrow)==null?void 0:f.x}px`),...A((m=c.value.arrow)==null?void 0:m.y,"top",`${(d=c.value.arrow)==null?void 0:d.y}px`),position:"absolute"},ref:o}),_("h3",{class:{"popover-header":!0}},t.title),_("div",{class:{"popover-body":!0}},t.content)]))}}}function Wt(t,e,n){const o=bt(t,e),i=y(()=>Bt(`expose_${o.value}`)),r=y(()=>Bt(`emit_${o.value}`));function s(a){return zt(a,(u,f)=>{_t(`${f}.${n}`,u)}),ut(()=>{i.value.on((u,...f)=>a[u]?a[u](f):void 0)}),a}function l(a,u,f){a.emit(u,f),r.value.emit(u,f)}function c(a){zt(a,(u,f)=>{_t(`${f}.${n}`,u)}),ut(()=>{i.value.on((u,f)=>{a[u]&&f&&(a[u].value=f)})})}return{emit:l,expose:s,exposeState:c}}const we={active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}};function ye(t,e,n){const o=it(`current.${e}`,void 0),i=it(`parent.${e}`,void 0),r=bt(t,n),s=x(r.value&&(o==null?void 0:o.value)==r.value||t.active||!1),{expose:l,exposeState:c}=Wt(t,n,e);o&&!t.to&&(s.value&&r.value&&(o.value=r.value),N(o,async d=>{d==r.value?s.value=!0:s.value=!1;const v=ft(n);v&&(await k(),s.value?v.classList.contains("active")||(v.classList.add("active"),await k()):v.classList.contains("active")&&(v.classList.remove("active"),await k()))}));const a=()=>{t.disabled||(o&&i&&i.value&&r.value?o.value=r.value:s.value=!0)},u=()=>{o&&i&&i.value?o.value="":s.value=!1},f=()=>{s.value?u():a()};ut(()=>{s.value&&r.value&&o&&(o.value=r.value)});const m=l({show:a,hide:u,toggle:f});return c({active:s}),{class:y(()=>({active:s.value,disabled:t.disabled})),attr:y(()=>({...A(s.value,"aria-current","page"),...A(t.disabled,"aria-disabled","true")})),method:m}}const Zn=V({name:"HtmlButton",props:{...q,...ne,...Tt,...te,...we,...Ze,...Tn,...kn,type:{type:String,default:"button"}},setup(t,e){const n=x(),o=X(t),i=oe(t),r=Lt(t,"button"),s=ee(t,n),l=ye(t,"button",n),c=Ke(t,n),a=Ln(t,n),u=Fn(t,n),f={attr:{type:t.type},ref:n};return()=>_("button",H(f,r,i,c,s,l,u,a,o),Ne(e.slots.default,a.render,u.render))}}),Kn=V({name:"BsAccordionBody",props:{...q,tag:{type:String,default:"div"}},setup(t,e){const n=X(t),o={class:{"accordion-body":!0}};return()=>_(t.tag,H(o,n),e.slots)}}),Vn={horizontal:{type:Boolean}};function In(t,e,n){const o=it("active.collapse",void 0);o&&N(o,g=>{g?f():m()});const i=x((o==null?void 0:o.value)||!1),r=x(0),s=x(0),l=x(!i.value),c=x(!1),a=x(i.value),{expose:u}=Wt(t,n,"collapse"),f=async()=>{if(!n.value)return;const g=ft(n);g&&(e.emit("show.collapse"),i.value=!0,l.value=!1,c.value=!0,a.value=!1,await k(),r.value=g.scrollHeight,s.value=g.scrollWidth,await jt(n,!0),l.value=!0,c.value=!1,a.value=!0,e.emit("shown.collapse"))},m=async()=>{if(!n.value)return;const g=ft(n);g&&(e.emit("hide.collapse"),i.value=!1,r.value=g.offsetHeight,s.value=g.offsetWidth,c.value=!0,await k(),l.value=!1,a.value=!0,await k(),r.value=g.scrollHeight,s.value=g.scrollWidth,await k(),r.value=0,s.value=0,await k(),await jt(n,!0),l.value=!0,c.value=!1,a.value=!1,e.emit("hidden.collapse"))},v=u({show:f,hide:m,toggle:async()=>{i.value?await m():await f()}});return{class:y(()=>({show:a.value,collapse:l.value,collapsing:c.value,"collapse-horizontal":t.horizontal})),style:y(()=>({...A(!t.horizontal&&c.value,"height",r.value==0?"0":`${r.value}px`),...A(t.horizontal&&c.value,"width",s.value==0?"0":`${s.value}px`)})),method:v}}const Qn=V({name:"BsAccordionCollapse",props:{...q,...Vn,tag:{type:String,default:"div"}},setup(t,e){const n=x(),o=X(t),i=In(t,e,n),r={class:{"accordion-collapse":!0},ref:n};return()=>_(t.tag,H(r,o,i),e.slots)}}),Jn=V({name:"BsAccordionItem",props:{...q,...we,...Tt,tag:{type:String,default:"div"}},setup(t,e){const n=X(t),o=Lt(t,"accordion-item"),i=x(),r=ye(t,"collapse",i),s={class:{"accordion-item":!0},ref:i};return()=>_(t.tag,H(o,s,r,n),e.slots)}}),Mn={flush:{type:Boolean}};function Nn(t){return{class:y(()=>({accordion:!0,"accordion-flush":t.flush}))}}const Hn={current:{type:String,default:""},parent:{type:Boolean,default:!0}};function Wn(t,e,n,o){if(!t.parent)return{};const i=He(t,"parent"),r=x(t.current||""),{exposeState:s}=Wt(t,n,o);return s({current:r,parent:i}),N(r,()=>{e.emit("currentChanged",r.value)}),N(()=>t.current,()=>{t.current&&(r.value=t.current)}),{attr:y(()=>({"data-bv-current":r.value}))}}const to=V({name:"BsAccordion",props:{...q,...Mn,...Hn,tag:{type:String,default:"div"},parent:{type:Boolean,default:!1},color:{type:String,default:void 0}},setup(t,e){const n=x(),o=X(t),i=Nn(t),r=Wn(t,e,n,"collapse");We(e,i,r,o);const s={ref:n,style:y(()=>({...A(t.color,"--bs-accordion-border-color",`var(--bs-active-${t.color})`),...A(!t.textColor&&t.color,"--bs-accordion-btn-focus-border-color",`var(--bs-active-${t.color})`),...A(t.color,"--bs-accordion-active-color",`var(--bs-contrast-${t.color})`),...A(t.color,"--bs-accordion-active-bg",`var(--bs-${t.color})`),...A(t.color,"--bs-accordion-btn-focus-box-shadow",`var(--bs-active-${t.color})`)}))};return()=>_(t.tag,H(i,r,o,s),e.slots)}}),zn={...q,type:{type:String}};function jn(t){const e=X(t);return{class:y(()=>({[`container-${t.type}`]:t.type,container:!t.type,...e.class.value})),style:y(()=>({...e.style.value}))}}const eo=V({name:"BsGridContainer",props:{...zn,tag:{type:String,default:"div"}},setup(t,e){const n=jn(t);return()=>_(t.tag,H(n),e.slots)}}),no=""+new URL("1.oVraDaQP.png",import.meta.url).href,oo=""+new URL("2.D_wzZOk6.png",import.meta.url).href;export{qn as _,Xn as a,Yn as b,Zn as c,Kn as d,Qn as e,Jn as f,to as g,eo as h,no as i,oo as j};
