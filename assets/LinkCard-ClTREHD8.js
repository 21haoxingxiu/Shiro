function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./NotePreview-DVSp-pQu.js","./index-M3pXe0T4.js","./index-Ou5EeICI.css","./useQuery-g4Puql7b.js","./request-D0R88Di3.js","./toast-QlB5oV8N.js","./helper-CaAdfMs7.js","./StyledButton-Du9KJwW8.js","./motion-minimal-GkgNfZih.js","./env-DbhK1WeT.js","./utils-CPlusJL9.js","./viewport-DUHAwfyq.js","./Gallery-BndGHOFZ.js","./image-BsKqtQSq.js","./lodash-B3VVwmZe.js","./use-is-unmounted-uf5-5htI.js","./Gallery-BwIx_4-Z.css","./provider-DVg6CMq0.js","./spring-BiPrtYZ-.js","./use-event-callback-D_bubOLe.js","./dom-XXNktKeO.js","./use-animation-e6A9aeMm.js","./visual-element-H_tS0lhz.js","./index-D2SPvy35.js","./alert-By7Xx1xw.js","./CodeHighlighter-kBZand9p.js","./use-is-dark-C773AUBY.js","./CodeHighlighter-tNUswnnS.css","./ShikiWrapper-BQoBsyFN.js","./ShikiWrapper-glFdlpXN.css","./FloatPopover-DpoAUXZV.js","./use-is-client-3-FC5pC3.js","./SocialSourceLink-pVxosTWR.js","./Collapse-DVNOznnX.js","./alert-MZMw284e.css","./customParseFormat-COFNg1YJ.js","./FormInput-CTejcXWT.js","./use-motion-template-DpKJpKja.js","./utils-CucRcSz-.css","./NotePreview-BCWlJovY.css","./PostPreview-Bbk7N-6_.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as g,j as a,_ as ne,g as ue,c as ve,s as K,b as be}from"./index-M3pXe0T4.js";import{u as me,L as ye,g as we}from"./image-BsKqtQSq.js";import{c as ae,a as je}from"./helper-CaAdfMs7.js";import{L as de}from"./StyledButton-Du9KJwW8.js";import{h as Q,j as oe}from"./request-D0R88Di3.js";import{a as _e,b as Ne}from"./viewport-DUHAwfyq.js";import{u as fe}from"./provider-DVg6CMq0.js";import{m as $e}from"./spring-BiPrtYZ-.js";import{m as J}from"./motion-minimal-GkgNfZih.js";import{a as ke}from"./use-is-client-3-FC5pC3.js";import{p as Ce}from"./dom-XXNktKeO.js";import{u as Y,a as Pe}from"./use-motion-template-DpKJpKja.js";var ee=(r=>(r.Click="click",r.Interaction="interaction",r.Impression="impression",r))(ee||{});const Te=r=>{const{shouldTrack:e=!0,...t}=r;return e?a.jsx(he,{...t}):a.jsx(a.Fragment,{children:r.children})},he=g.memo(r=>{const[e,t]=g.useState(!1),u=_e(),{ref:d}=me({initialInView:!1,triggerOnce:!0,onChange(o){if(o){if(t(!0),u)return;document.dispatchEvent(new CustomEvent("impression",{detail:{action:r.action??ee.Impression,label:r.trackerMessage}})),r.onTrack?.()}}});return a.jsxs(a.Fragment,{children:[r.children,!e&&a.jsx("span",{ref:d})]})});he.displayName="ImpressionView";const le=r=>{const{dismissAll:e,dismissTop:t}=fe();return a.jsxs("div",{className:"relative mx-auto mt-[10vh] max-w-full overflow-auto px-2 scrollbar-none lg:max-w-[65rem] lg:p-0",children:[a.jsx(Te,{action:ee.Impression,trackerMessage:"Peek Modal"}),a.jsx(J.div,{initial:{opacity:.5,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},transition:$e,className:"scrollbar-none",children:r.children}),a.jsxs(J.div,{initial:!0,exit:{opacity:0},className:"fixed right-2 top-2 flex items-center gap-4",children:[a.jsxs(de,{className:"flex size-8 rounded-full p-1 shadow-sm ring-1 ring-zinc-200 center dark:ring-neutral-800",href:r.to,onClick:e,children:[a.jsx("i",{className:"icon-[mingcute--fullscreen-2-line] text-lg"}),a.jsx("span",{className:"sr-only",children:"Go to this link"})]}),a.jsxs("button",{className:"flex size-8 rounded-full p-1 shadow-sm ring-1 ring-zinc-200 center dark:ring-neutral-800",onClick:t,children:[a.jsx("i",{className:"icon-[mingcute--close-line] text-lg"}),a.jsx("span",{className:"sr-only",children:"Dimiss"})]})]})]})},Se=()=>{const r=Ne(),{present:e}=fe();return g.useCallback(t=>{if(r)return;const u={clickOutsideToDismiss:!0,title:"Preview",modalClassName:"relative mx-auto mt-[10vh] scrollbar-none max-w-full overflow-auto px-2 lg:max-w-[65rem] lg:p-0"};return t.startsWith("/notes/")?(requestAnimationFrame(async()=>{const d=await ne(()=>import("./NotePreview-DVSp-pQu.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]),import.meta.url).then(o=>o.NotePreview);e({...u,CustomModalComponent:()=>a.jsx(le,{to:t,children:a.jsx(d,{noteId:parseInt(t.split("/").pop())})}),content:()=>null})}),!0):t.startsWith("/posts/")?(requestAnimationFrame(async()=>{const d=await ne(()=>import("./PostPreview-Bbk7N-6_.js"),__vite__mapDeps([40,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]),import.meta.url).then(f=>f.PostPreview),o=t.split("/"),c=o.pop(),h=o.pop();e({...u,CustomModalComponent:()=>a.jsx(le,{to:t,children:a.jsx(d,{category:h,slug:c})}),content:()=>null})}),!0):!1},[r,e])};var Ie=function(r,e){e=e||{},e.listUnicodeChar=e.hasOwnProperty("listUnicodeChar")?e.listUnicodeChar:!1,e.stripListLeaders=e.hasOwnProperty("stripListLeaders")?e.stripListLeaders:!0,e.gfm=e.hasOwnProperty("gfm")?e.gfm:!0,e.useImgAltText=e.hasOwnProperty("useImgAltText")?e.useImgAltText:!0,e.abbr=e.hasOwnProperty("abbr")?e.abbr:!1,e.replaceLinksWithURL=e.hasOwnProperty("replaceLinksWithURL")?e.replaceLinksWithURL:!1,e.htmlTagsToSkip=e.hasOwnProperty("htmlTagsToSkip")?e.htmlTagsToSkip:[];var t=r||"";t=t.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*/gm,"");try{e.stripListLeaders&&(e.listUnicodeChar?t=t.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):t=t.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(t=t.replace(/\n={2,}/g,`
`).replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),e.abbr&&(t=t.replace(/\*\[.*\]:.*\n/,"")),t=t.replace(/<[^>]*>/g,"");var u=new RegExp("<[^>]*>","g");if(e.htmlTagsToSkip.length>0){var d="(?!"+e.htmlTagsToSkip.join("|")+")";u=new RegExp("<"+d+"[^>]*>","ig")}t=t.replace(u,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[([^\]]*?)\][\[\(].*?[\]\)]/g,e.replaceLinksWithURL?"$2":"$1").replace(/^\s{0,3}>\s?/gm,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} #{0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*]+)(\S)(.*?\S)??\1/g,"$2$3").replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g,"$1$3$4$5").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/~(.*?)~/g,"$1")}catch(o){return console.error(o),r}return t};const Me=ue(Ie);var pe={exports:{}};/**
* Generate unique and beautiful colors from any texts or numbers
 * @version v1.1.1
 * @link https://github.com/dastoori/uniqolor#README
 * @author Rasool Dastoori
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */(function(r,e){(function(t,u){r.exports=u()})(ve,function(){function t(l,s){var n=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(n!=null){var i,m,b,x,w=[],_=!0,C=!1;try{if(b=(n=n.call(l)).next,s===0){if(Object(n)!==n)return;_=!1}else for(;!(_=(i=b.call(n)).done)&&(w.push(i.value),w.length!==s);_=!0);}catch(E){C=!0,m=E}finally{try{if(!_&&n.return!=null&&(x=n.return(),Object(x)!==x))return}finally{if(C)throw m}}return w}}function u(l,s){return c(l)||t(l,s)||f(l,s)||v()}function d(l){return o(l)||h(l)||f(l)||y()}function o(l){if(Array.isArray(l))return p(l)}function c(l){if(Array.isArray(l))return l}function h(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function f(l,s){if(l){if(typeof l=="string")return p(l,s);var n=Object.prototype.toString.call(l).slice(8,-1);if(n==="Object"&&l.constructor&&(n=l.constructor.name),n==="Map"||n==="Set")return Array.from(l);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(l,s)}}function p(l,s){(s==null||s>l.length)&&(s=l.length);for(var n=0,i=new Array(s);n<s;n++)i[n]=l[n];return i}function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var T=[0,100],N=[0,100],k=function(s){return"".concat(s.length===1?"0":"").concat(s)},$=function(s,n,i){return Math.max(Math.min(s,i),n)},I=function(s,n){return Math.floor(Math.random()*(n-s+1))+s},X=function l(s,n,i){for(var m=I(s,n),b=0;b<i?.length;b++){var x=i[b];if(x?.length===2&&m>=x[0]&&m<=x[1])return l(s,n,i)}return m},V=function(s){for(var n=s.length,i=0,m=0;m<n;m++)i=(i<<5)-i+s.charCodeAt(m),i&=i;return i},U=function(s,n){return typeof n=="number"?n:s%Math.abs(n[1]-n[0])+n[0]},M=function(s,n){return typeof s=="number"?$.apply(void 0,[Math.abs(s)].concat(d(n))):s.length===1||s[0]===s[1]?$.apply(void 0,[Math.abs(s[0])].concat(d(n))):[Math.abs($.apply(void 0,[s[0]].concat(d(n)))),$.apply(void 0,[Math.abs(s[1])].concat(d(n)))]},S=function(s,n,i){return i<0?i+=1:i>1&&(i-=1),i<1/6?s+(n-s)*6*i:i<1/2?n:i<2/3?s+(n-s)*(2/3-i)*6:s},R=function(s,n,i){var m,b,x;if(s/=360,n/=100,i/=100,n===0)m=b=x=i;else{var w=i<.5?i*(1+n):i+n-i*n,_=2*i-w;m=S(_,w,s+1/3),b=S(_,w,s),x=S(_,w,s-1/3)}return[Math.round(m*255),Math.round(b*255),Math.round(x*255)]},L=function(s,n,i,m){return(s*299+n*587+i*114)/1e3>=m},G=function(s,n,i){return"hsl(".concat(s,", ").concat(n,"%, ").concat(i,"%)")},W=function(s,n,i,m){switch(m){case"rgb":return"rgb(".concat(s,", ").concat(n,", ").concat(i,")");case"hex":default:return"#".concat(k(s.toString(16))).concat(k(n.toString(16))).concat(k(i.toString(16)))}},z=function(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.format,m=i===void 0?"hex":i,b=n.saturation,x=b===void 0?[50,55]:b,w=n.lightness,_=w===void 0?[50,60]:w,C=n.differencePoint,E=C===void 0?130:C,A=Math.abs(V(String(s))),D=U(A,[0,360]),B=U(A,M(x,T)),O=U(A,M(_,N)),Z=R(D,B,O),H=u(Z,3),F=H[0],re=H[1],se=H[2];return{color:m==="hsl"?G(D,B,O):W(F,re,se,m),isLight:L(F,re,se,E)}};return z.random=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=l.format,n=s===void 0?"hex":s,i=l.saturation,m=i===void 0?[50,55]:i,b=l.lightness,x=b===void 0?[50,60]:b,w=l.differencePoint,_=w===void 0?130:w,C=l.excludeHue;m=M(m,T),x=M(x,N);var E=C?X(0,359,C):I(0,359),A=typeof m=="number"?m:I.apply(void 0,d(m)),D=typeof x=="number"?x:I.apply(void 0,d(x)),B=R(E,A,D),O=u(B,3),Z=O[0],H=O[1],F=O[2];return{color:n==="hsl"?G(E,A,D):W(Z,H,F,n),isLight:L(Z,H,F,_)}},z})})(pe);var Re=pe.exports;const ge=ue(Re);function Le(r){return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...r,children:a.jsxs("g",{fill:"none",fillRule:"evenodd",children:[a.jsx("path",{d:"M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z"}),a.jsx("path",{fill:"currentColor",d:"M13.08 2.868a1.25 1.25 0 0 0-2.16 0L8.126 7.665L2.697 8.842a1.25 1.25 0 0 0-.667 2.054l3.7 4.141l-.56 5.525a1.25 1.25 0 0 0 1.748 1.27L12 19.592l5.082 2.24a1.25 1.25 0 0 0 1.748-1.27l-.56-5.525l3.7-4.14a1.25 1.25 0 0 0-.667-2.055l-5.428-1.176l-2.795-4.798ZM12 17.523c.172 0 .344.035.504.106l4.206 1.854l-.463-4.573a1.25 1.25 0 0 1 .312-.959l3.062-3.427l-4.492-.973a1.25 1.25 0 0 1-.816-.592L12 4.987v12.536Z"})]})})}const Ee={typescript:"#2b7489",javascript:"#f1e05a",html:"#e34c26",java:"#b07219",go:"#00add8",vue:"#2c3e50",css:"#563d7c",yaml:"#cb171e",json:"#292929",markdown:"#083fa1",csharp:"#178600","c#":"#178600",c:"#555555",cpp:"#f34b7d","c++":"#f34b7d",python:"#3572a5",lua:"#000080",vimscript:"#199f4b",shell:"#89e051",dockerfile:"#384d54",ruby:"#701516",php:"#4f5d95",lisp:"#3fb68b",kotlin:"#F18E33",rust:"#dea584",dart:"#00B4AB",swift:"#ffac45","objective-c":"#438eff","objective-c++":"#6866fb",r:"#198ce7",matlab:"#e16737",scala:"#c22d40",sql:"#e38c00",perl:"#0298c3"},ie="https://api.github.com",Ae="/api/gh",te=r=>{const e=r.replace(ie,"");return Promise.any([fetch(ie+e).then(t=>{if(t.status===403)throw new Error("GitHub API rate limit exceeded");return t.json()}),fetch(Ae+e).then(t=>t.json())])},q=Symbol(),Oe=Symbol(),He=typeof window>"u"||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent),xe=He?g.useEffect:g.useLayoutEffect,Ve=K.unstable_runWithPriority?r=>{try{K.unstable_runWithPriority(K.unstable_NormalPriority,r)}catch(e){if(e.message==="Not implemented.")r();else throw e}}:r=>r(),Ue=r=>({value:t,children:u})=>{const d=g.useRef(t),o=g.useRef(0),[c,h]=g.useState(null);c&&(c(t),h(null));const f=g.useRef();if(!f.current){const p=new Set,y=(v,T)=>{be.unstable_batchedUpdates(()=>{o.current+=1;const N={n:o.current};T!=null&&T.suspense&&(N.n*=-1,N.p=new Promise(k=>{h(()=>$=>{N.v=$,delete N.p,k($)})})),p.forEach(k=>k(N)),v()})};f.current={[q]:{v:d,n:o,l:p,u:y}}}return xe(()=>{d.current=t,o.current+=1,Ve(()=>{f.current[q].l.forEach(p=>{p({n:o.current,v:t})})})},[t]),g.createElement(r,{value:f.current},u)};function De(r){const e=g.createContext({[q]:{v:{current:r},n:{current:-1},l:new Set,u:t=>t()}});return e[Oe]=e.Provider,e.Provider=Ue(e.Provider),delete e.Consumer,e}function Fe(r,e){const t=g.useContext(r)[q],{v:{current:u},n:{current:d},l:o}=t,c=e(u),[h,f]=g.useReducer((p,y)=>{if(!y)return[u,c];if("p"in y)throw y.p;if(y.n===d)return Object.is(p[1],c)?p:[u,c];try{if("v"in y){if(Object.is(p[0],y.v))return p;const v=e(y.v);return Object.is(p[1],v)?p:[y.v,v]}}catch{}return[...p]},[u,c]);return Object.is(h[1],c)||f(),xe(()=>(o.add(f),()=>{o.delete(f)}),[o]),h[1]}const Ge={tmdb:!1},We=De(Ge),ze=r=>Fe(We,e=>e[r]);var P=(r=>(r.GHRepo="gh-repo",r.Self="self",r.MixSpace="mx-space",r.GHCommit="gh-commit",r.GHPr="gh-pr",r.TMDB="tmdb",r))(P||{});const Be="_contents_1bvlu_25",Ze="_title_1bvlu_34",qe="_desc_1bvlu_46",Xe="_image_1bvlu_56",Ke="_skeleton_1bvlu_66",Ye="_error_1bvlu_94",j={"card-grid":"_card-grid_1bvlu_1",contents:Be,title:Ze,desc:qe,image:Xe,skeleton:Ke,error:Ye},gt=r=>{const e=ke(),t=a.jsx(Qe,{});return e?a.jsx(ye,{placeholder:t,children:a.jsx(Je,{...r})}):t},Je=r=>{const{id:e,source:t=P.Self,className:u,fallbackUrl:d}=r,[o,c]=g.useState(!0),[h,f]=g.useState(!1),[p,y]=g.useState(d||"javascript:;"),[v,T]=g.useState(),N=Se(),k=g.useCallback(async s=>{N(p)&&Ce(s)},[p]),$=ze("tmdb"),I=g.useCallback((s,n)=>{const i={[P.MixSpace]:ce,[P.GHRepo]:et,[P.GHCommit]:tt,[P.GHPr]:rt,[P.Self]:ce};$&&(i[P.TMDB]=st);const m=i[s];if(!m)return{isValid:!1,fetchFn:null};const b=m.isValid(n);return{isValid:b,fetchFn:b?m.fetch:null}},[$]),{isValid:X,fetchFn:V}=g.useMemo(()=>I(t,e),[t,e]),U=g.useCallback(async()=>{V&&(c(!0),await V(e,T,y).catch(s=>{console.error("fetch card info error: ",s),f(!0)}),c(!1))},[V,e]),{ref:M}=me({triggerOnce:!0,onChange(s){s&&U()}}),S=Y(0),R=Y(0),L=Y(0),G=g.useCallback(({clientX:s,clientY:n,currentTarget:i})=>{const m=i.getBoundingClientRect();S.set(s-m.left),R.set(n-m.top),L.set(Math.sqrt(m.width**2+m.height**2)*1.3)},[S,R,L]),W=Pe`radial-gradient(${L}px circle at ${S}px ${R}px, var(--spotlight-color) 0%, transparent 65%)`;if(!X)return null;const z=t==="self"?de:"a",l=v?.classNames||{};return a.jsxs(z,{href:p,target:t!=="self"?"_blank":"_self",ref:M,className:ae(j["card-grid"],(o||h)&&j.skeleton,h&&j.error,"group",u,l.cardRoot),style:{borderColor:v?.color?`${v.color}30`:""},onClick:k,onMouseMove:G,children:[v?.color&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"absolute inset-0 z-0",style:{backgroundColor:v?.color,opacity:.06}}),a.jsx(J.div,{layout:!0,className:"absolute inset-0 z-0 opacity-0 duration-500 group-hover:opacity-100",style:{"--spotlight-color":`${v?.color}50`,background:W}})]}),a.jsxs("span",{className:j.contents,children:[a.jsx("span",{className:j.title,children:v?.title}),a.jsx("span",{className:j.desc,children:v?.desc})]}),(o||v?.image)&&a.jsx("span",{className:ae(j.image,l.image),"data-image":v?.image||"",style:{backgroundImage:v?.image?`url(${v.image})`:void 0}})]})},Qe=()=>a.jsxs("span",{className:je(j["card-grid"],j.skeleton),children:[a.jsxs("span",{className:j.contents,children:[a.jsx("span",{className:j.title}),a.jsx("span",{className:j.desc})]}),a.jsx("span",{className:j.image})]}),et={isValid:r=>{const e=r.split("/");return e.length===2&&e[0].length>0&&e[1].length>0},fetch:async(r,e,t)=>{const[u,d]=r.split("/");try{const o=await te(`https://api.github.com/repos/${u}/${d}`),c=Q(o);e({title:a.jsxs("span",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"flex-1",children:c.name}),a.jsx("span",{className:"shrink-0 self-end justify-self-end",children:c.stargazersCount>0&&a.jsxs("span",{className:"inline-flex shrink-0 items-center gap-1 self-center text-sm text-orange-400 dark:text-yellow-500",children:[a.jsx("i",{className:"icon-[mingcute--star-line]"}),a.jsx("span",{className:"font-sans font-medium",children:c.stargazersCount})]})})]}),desc:c.description,image:c.owner.avatarUrl,color:Ee[c.language?.toLowerCase()]}),t(c.htmlUrl)}catch(o){throw console.error("Error fetching GitHub data:",o),o}}},tt={isValid:r=>{const e=r.split("/");return e.length===4&&e.every(t=>t.length>0)&&e[2]==="commit"},fetch:async(r,e,t)=>{const[u,d,,o]=r.split("/");try{const c=await te(`https://api.github.com/repos/${u}/${d}/commits/${o}`),h=Q(c);e({title:a.jsx("span",{className:"font-normal",children:h.commit.message.replace(/Signed-off-by:.+/,"")}),desc:a.jsxs("span",{className:"flex items-center space-x-5 font-mono",children:[a.jsxs("span",{className:"text-uk-green-light",children:["+",h.stats.additions]}),a.jsxs("span",{className:"text-uk-red-light",children:["-",h.stats.deletions]}),a.jsx("span",{className:"text-sm",children:h.sha.slice(0,7)}),a.jsxs("span",{className:"text-sm opacity-80",children:[u,"/",d]})]}),image:h.author?.avatarUrl}),t(`https://github.com/${u}/${d}/commit/${o}`)}catch(c){throw console.error("Error fetching GitHub commit data:",c),c}}},rt={isValid:r=>{const e=r.split("/");return e.length===3&&e.every(t=>t.length>0)},fetch:async(r,e,t)=>{const[u,d,,o]=r.split("/");try{const c=await te(`https://api.github.com/repos/${u}/${d}/pulls/${o}`),h=Q(c);e({title:`PR: ${h.title}`,desc:a.jsxs("span",{className:"flex items-center space-x-5 font-mono",children:[a.jsxs("span",{className:"text-uk-green-light",children:["+",h.additions]}),a.jsxs("span",{className:"text-uk-red-light",children:["-",h.deletions]}),a.jsxs("span",{className:"text-sm opacity-80",children:[u,"/",d]})]}),image:h.user.avatarUrl}),t(h.htmlUrl)}catch(c){throw console.error("Error fetching GitHub PR data:",c),c}}},ce={isValid:r=>{const[e,...t]=r.split("/");return e!=="posts"&&e!=="notes"?!1:e==="posts"?t.length===2:t.length===1},fetch:async(r,e,t)=>{const[u,...d]=r.split("/");try{let o={title:"",text:""};if(u==="posts"){const[f,p]=d;o=await oe.post.getPost(f,p),t(`/posts/${f}/${p}`)}else if(u==="notes"){const[f]=d;o=(await oe.note.getNoteById(+f)).data,t(`/notes/${f}`)}const c=o.cover||o.meta?.cover;let h="";if(c){const f=new Image;f.src=c,f.crossOrigin="Anonymous",f.onload=()=>{e(p=>p?.title!==o.title?p:{...p,color:we(f)})}}else h=ge(o.title,{saturation:[30,35],lightness:[60,70]}).color;e({title:o.title,desc:o.summary||`${Me(o.text).slice(0,50)}...`,image:c||o.images?.[0]?.src,color:h})}catch(o){throw console.error("Error fetching self data:",o),o}}},st={isValid(r){const[e,t]=r.split("/");return["tv","movie"].includes(e)&&t.length>0},async fetch(r,e,t){const[u,d]=r.split("/");e({classNames:{cardRoot:"!w-full"}});const o=await fetch(`/api/tmdb/${u}/${d}?language=zh-CN`).then(f=>f.json()).catch(f=>{throw console.error("Error fetching TMDB data:",f),f}),c=u==="tv"?o.name:o.title,h=u==="tv"?o.original_name:o.original_title;e({title:a.jsxs("span",{className:"flex flex-wrap items-end gap-2",children:[a.jsx("span",{children:c}),c!==h&&a.jsxs("span",{className:"text-sm opacity-70",children:["(",h,")"]}),a.jsxs("span",{className:"inline-flex shrink-0 items-center gap-1 self-center text-xs text-orange-400 dark:text-yellow-500",children:[a.jsx(Le,{}),a.jsx("span",{className:"font-sans font-medium",children:o.vote_average>0&&o.vote_average.toFixed(1)})]})]}),desc:a.jsx("span",{className:"line-clamp-none overflow-visible whitespace-pre-wrap",children:o.overview}),image:`https://image.tmdb.org/t/p/w500${o.poster_path}`,color:ge(o.name,{saturation:[30,35],lightness:[60,70]}).color,classNames:{image:"self-start !h-[75px] !w-[50px]",cardRoot:"!w-full !flex-row-reverse"}}),o.homepage&&t(o.homepage)}};export{gt as L,Me as R,ee as T,P as a,Se as b,ze as u};
