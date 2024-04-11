import{w as de,j as N,i as Se,k as ye,B as _,C as De,h as te,D as se,G as Pe,l as T}from"./request-D0R88Di3.js";import{r as c,j as l,R as A}from"./index-M3pXe0T4.js";import{p as M,r as Te,s as Ne,f as _e,h as Me,i as Ie,j as je,b as Re}from"./viewport-DUHAwfyq.js";import{a as Fe}from"./env-DbhK1WeT.js";import{a as B,c as re,b as Y,e as q,r as G,t as v}from"./toast-QlB5oV8N.js";import{T as Le}from"./LinkCard-ClTREHD8.js";import{M as Oe,c as We}from"./StyledButton-Du9KJwW8.js";import{$ as $e,_ as Ue}from"./provider-DVg6CMq0.js";import{a as oe}from"./Gallery-BndGHOFZ.js";import{A as Ve}from"./ShikiWrapper-BQoBsyFN.js";import{c as w,a as F}from"./helper-CaAdfMs7.js";import{u as ae,a as ze}from"./use-motion-template-DpKJpKja.js";import{m as Ye}from"./motion-minimal-GkgNfZih.js";import{m as Ge,i as He}from"./lodash-B3VVwmZe.js";import{u as Be}from"./use-event-callback-D_bubOLe.js";let qe=Object.freeze([]),Ke=e=>{let t=c.useRef(!1);!t.current&&(t.current=!0,e?.())},K=()=>{var e;let t=c.createContext(null),r=B(null),s=c.memo(o=>{var a;let{data:n,children:i}=o,d=(a=c.useContext(t))!==null&&a!==void 0?a:r,u=re(d);return Ke(()=>{u(n)}),c.useEffect(()=>{u(n)},[n]),c.useEffect(()=>(u(n),()=>{u(null)}),[]),i});return s.displayName="ModelDataProvider",{ModelDataAtomProvider:o=>{let{children:a,overrideAtom:n}=o;return l.jsx(t.Provider,{value:n??r,children:a})},ModelDataProvider:s,useModelDataSelector:(o,a)=>{var n;let i=(n=c.useContext(t))!==null&&n!==void 0?n:r,d=c.useCallback(u=>u?o(u):null,a||qe);return Y(de(i,d))},useSetModelData:()=>re((e=c.useContext(t))!==null&&e!==void 0?e:r),useGetModelData:()=>{var o;let a=(o=c.useContext(t))!==null&&o!==void 0?o:r,n=q();return()=>n.get(a)},useModelData:()=>{var o;return Y((o=c.useContext(t))!==null&&o!==void 0?o:r)},setGlobalModelData:o=>{let a=G();a.set(r,M(a.get(r),o))},getGlobalModelData:()=>G().get(r),ModelDataAtomContext:t}},ne=G();ne.get,ne.set;var p=(e=>(e.GATEWAY_CONNECT="GATEWAY_CONNECT",e.GATEWAY_DISCONNECT="GATEWAY_DISCONNECT",e.VISITOR_ONLINE="VISITOR_ONLINE",e.VISITOR_OFFLINE="VISITOR_OFFLINE",e.AUTH_FAILED="AUTH_FAILED",e.COMMENT_CREATE="COMMENT_CREATE",e.POST_CREATE="POST_CREATE",e.POST_UPDATE="POST_UPDATE",e.POST_DELETE="POST_DELETE",e.NOTE_CREATE="NOTE_CREATE",e.NOTE_UPDATE="NOTE_UPDATE",e.NOTE_DELETE="NOTE_DELETE",e.PAGE_UPDATED="PAGE_UPDATED",e.PAGE_UPDATE="PAGE_UPDATE",e.SAY_CREATE="SAY_CREATE",e.SAY_DELETE="SAY_DELETE",e.SAY_UPDATE="SAY_UPDATE",e.RECENTLY_CREATE="RECENTLY_CREATE",e.RECENTLY_DELETE="RECENTLY_DELETE",e.ACTIVITY_UPDATE_PRESENCE="ACTIVITY_UPDATE_PRESENCE",e.ACTIVITY_LEAVE_PRESENCE="ACTIVITY_LEAVE_PRESENCE",e.ARTICLE_READ_COUNT_UPDATE="ARTICLE_READ_COUNT_UPDATE",e))(p||{}),Qe=(e=>(e.Join="join",e.Leave="leave",e.UpdateSid="updateSid",e))(Qe||{}),E=(e=>(e.EditDataUpdate="editDataUpdate",e.Publish="Publish",e.Refetch="Refetch",e.SocketConnected="SocketConnected",e.SocketDisconnected="SocketDisconnected",e))(E||{});class Gt extends Event{constructor(t){super(E.Publish),this.data=t}static{this.type=E.Publish}}class Ht extends Event{static{this.type=E.Refetch}constructor(){super(E.Refetch)}}class Je extends Event{static{this.type=E.SocketConnected}constructor(){super(E.SocketConnected)}}class Xe extends Event{static{this.type=E.SocketDisconnected}constructor(){super(E.SocketDisconnected)}}class Bt extends Event{constructor(t){super(E.EditDataUpdate),this.data=t}static{this.type=E.EditDataUpdate}}function Ze(e){return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:l.jsx("path",{fill:"currentColor",d:"M1 11h3v2H1v-2m3.9-7.5L3.5 4.9L5.6 7L7 5.6L4.9 3.5M13 1h-2v3h2V1m7 10v2h3v-2h-3M10 22c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-4v1m9.1-18.5L17 5.6L18.4 7l2.1-2.1l-1.4-1.4M18 12c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4Z"})})}function et(e){return l.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 512 512",...e,children:l.jsx("path",{fill:"currentColor",d:"M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94c9.38 9.37 24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36c53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0z"})})}function tt(e){return l.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 22 22",...e,children:[l.jsx("path",{fill:"currentColor",d:"M6 6h11.17l1 1l-1 1H6V6zm12 10H6.83l-1-1l1-1H18v2z",opacity:".3"}),l.jsx("path",{fill:"currentColor",d:"M13 10h5l3-3l-3-3h-5V2h-2v2H4v6h7v2H6l-3 3l3 3h5v4h2v-4h7v-6h-7v-2zM6 6h11.17l1 1l-1 1H6V6zm12 10H6.83l-1-1l1-1H18v2z"})]})}const st=["says"];var H=(e=>(e.RefreshToc="refresh-toc",e))(H||{}),f=(e=>(e.Home="//",e.Posts="/posts",e.Post="/posts/",e.Notes="/notes",e.Note="/notes/",e.NoteTopics="/notes/topics",e.NoteTopic="/notes/topics/",e.Timelime="/timeline",e.Login="/login",e.Page="/",e.Categories="/categories",e.Category="/categories/",e.Projects="/projects",e.Project="/projects/",e.Says="/says",e.Friends="/friends",e.Thinking="/thinking",e.PageDeletd="/common/deleted",e))(f||{});function g(e,t){let r=e;switch(e){case"/notes/":{r+=t.id,t.password&&(r+=`?password=${t.password}`);break}case"/posts/":{const s=t;r+=`${s.category}/${s.slug}`;break}case"/posts":{const s=t;r+=`?${new URLSearchParams(s).toString()}`;break}case"/timeline":{const s=t;r+=`?${new URLSearchParams(s).toString()}`;break}case"/notes/topics/":case"/categories/":case"/":{r+=t.slug;break}case"//":{r="/";break}case"/projects/":{r+=t.id;break}}return r}const I=e=>e,rt={presence:e=>I({queryKey:["activity","presence",e],queryFn:async()=>{const t=await N.activity.getPresence(e);return Te(t),t}})},ot={root:()=>I({queryKey:["aggregation"],queryFn:async()=>N.aggregate.getAggregateData("shiro").then(e=>e.$serialized),gcTime:1e3*60*10,meta:{forceHydration:!0},staleTime:Se?1e3*60*10:void 0})};c.createContext(null);c.createContext({reset(e,t){}});const at="latest",nt={byNid:(e,t)=>I({queryKey:["note",e],meta:{hydrationRoutePath:g(f.Note,{id:e}),shouldHydration:r=>{const s=r?.data;return!(s?.publicAt?ye(s?.publicAt).isAfter(new Date):!1)}},queryFn:async({queryKey:r})=>{const[,s]=r;return s===at?(await N.note.getLatest()).$serialized:{...await N.note.getNoteById(+r[1],t)}}})},it={bySlug:e=>I({queryKey:["page",e],meta:{hydrationRoutePath:g(f.Page,{slug:e})},queryFn:async({queryKey:t})=>{const[,r]=t;return(await N.page.getBySlug(r)).$serialized}})},ct={bySlug:(e,t)=>I({queryKey:["post",e,t],meta:{hydrationRoutePath:g(f.Post,{category:e,slug:t})},queryFn:async({queryKey:r})=>{const[,s,o]=r;return(await N.post.getPost(s,o)).$serialized}})},ie={aggregation:ot,note:nt,post:ct,page:it,activity:rt},{ModelDataProvider:qt,ModelDataAtomProvider:Kt,getGlobalModelData:U,setGlobalModelData:ce,useModelDataSelector:Qt,useSetModelData:Jt}=K(),{ModelDataProvider:Xt,getGlobalModelData:lt,setGlobalModelData:dt,useModelDataSelector:Zt,ModelDataAtomProvider:es}=K(),{ModelDataProvider:ts,ModelDataAtomProvider:ss,getGlobalModelData:V,setGlobalModelData:le,useModelDataSelector:rs}=K(),k=()=>{document.dispatchEvent(new CustomEvent("impression",{detail:{action:Le.Impression,label:"Socket Realtime Event"}}))},ut=(e,t,r)=>{switch(e){case p.VISITOR_ONLINE:case p.VISITOR_OFFLINE:{const{online:s}=t;De(s);break}case p.POST_UPDATE:{const s=t,o=V();if(!o||o.id!==s.id)break;le(a=>{const n={...t};Reflect.deleteProperty(n,"category"),Object.assign(a,n)}),v("文章已更新"),k(),o.text!==s.text&&document.dispatchEvent(new CustomEvent(H.RefreshToc));break}case p.POST_DELETE:{const s=t;location.pathname===g(f.Post,{category:s.category.slug,slug:s.slug})&&V()?.id===s.id&&(r.replace(g(f.PageDeletd,{})),v.error("文章已删除"),k());break}case p.NOTE_UPDATE:{const s=t,o=U()?.data;if(!o||o.id!==s.id)break;ce(a=>{Object.assign(a.data,s)}),v("手记已更新"),k(),o.text!==s.text&&document.dispatchEvent(new CustomEvent(H.RefreshToc));break}case p.NOTE_DELETE:{const s=t;location.pathname===g(f.Note,{id:s.id})&&U()?.data.id===s.id&&(r.replace(g(f.PageDeletd,{})),v.error("手记已删除"),k());break}case p.PAGE_UPDATED:case p.PAGE_UPDATE:{const{slug:s}=t;lt()?.slug===s&&(dt(o=>{Object.assign(o,t)}),v("页面已更新"),k());break}case p.NOTE_CREATE:{const{title:s,nid:o}=t;v.success(`有新的内容发布了：「${s}」`,{onClick:()=>{window.peek(`/notes/${o}`)},iconElement:A.createElement(et),autoClose:!1}),k();break}case p.POST_CREATE:{const{title:s,category:o,slug:a}=t;v.success(`有新的内容发布了：「${s}」`,{onClick:()=>{window.peek(`/posts/${o.slug}/${a}`)},iconElement:A.createElement(tt)}),k();break}case p.RECENTLY_CREATE:{k(),location.pathname===g(f.Thinking,{})||v.success(`写下一点小思考：
${t.content}`,{autoClose:1e4,iconElement:A.createElement(Ze),onClick:()=>{r.push(g(f.Thinking,{}))}});break}case p.SAY_CREATE:{location.pathname===g(f.Says,{})&&(k(),_.setQueryData(st,s=>M(s,o=>{o?.pages?.[0].data.unshift(t)})));break}case p.ACTIVITY_UPDATE_PRESENCE:{const s=t,o=ie.activity.presence(s.roomName).queryKey,a=_.getQueryState(o);_.cancelQueries({queryKey:o}),Ie(t),a?.data||_.invalidateQueries({queryKey:o});break}case p.ACTIVITY_LEAVE_PRESENCE:{const s=t;_.cancelQueries({queryKey:ie.activity.presence(s.roomName).queryKey}),Me(s.identity);break}case p.ARTICLE_READ_COUNT_UPDATE:{const{id:s,count:o,type:a}=t;if(!o)break;switch(a){case"post":{V()?.id===s&&le(i=>{i.count.read=o});break}case"note":{U()?.data?.id===s&&ce(i=>{i.data.count.read=o});break}}break}case"fn#media-update":{_e(t);break}case"fn#ps-update":{const s=t.processInfo;Ne(s);break}case"shiro#update":{v.info("站点版本已更新，请刷新页面",{onClick:()=>{location.reload()}});break}default:window.dispatchEvent(new CustomEvent(`event:${e}`,{detail:t}))}};class mt{constructor(t,r){"SharedWorker"in window?this.ActualWorker=new SharedWorker(t,r):this.ActualWorker=new Worker(t,r)}get onmessage(){return"SharedWorker"in window?this.ActualWorker?.port.onmessage:this.ActualWorker.onmessage}set onmessage(t){"SharedWorker"in window?this.ActualWorker.port.onmessage=t:this.ActualWorker.onmessage=t}get onmessageerror(){return"SharedWorker"in window?this.ActualWorker?.port.onmessageerror:this.ActualWorker.onmessageerror}set onmessageerror(t){"SharedWorker"in window?this.ActualWorker.port.onmessageerror=t:this.ActualWorker.onmessageerror=t}start(){if("SharedWorker"in window)return this.ActualWorker?.port.start()}postMessage(t,r){return"SharedWorker"in window?this.ActualWorker?.port.postMessage(t,r):this.ActualWorker.postMessage(t,r)}terminate(){return"SharedWorker"in window?this.ActualWorker?.port.close():this.ActualWorker.terminate()}close(){return this.terminate()}get port(){return"SharedWorker"in window?this.ActualWorker.port:this.ActualWorker}get onerror(){return this.ActualWorker.onerror}set onerror(t){this.ActualWorker.onerror=t}addEventListener(t,r,s){return"SharedWorker"in window&&t!=="error"?this.ActualWorker?.port.addEventListener(t,r,s):this.ActualWorker.addEventListener(t,r,s)}removeEventListener(t,r,s){return"SharedWorker"in window&&t!=="error"?this.ActualWorker?.port.removeEventListener(t,r,s):this.ActualWorker.removeEventListener(t,r,s)}dispatchEvent(t){return this.ActualWorker.dispatchEvent(t)}}class Q{constructor(){if(this.socket=null,this.worker=null,this.bindMessageHandler=r=>{r.onmessage=s=>{const{data:o}=s,{type:a,payload:n}=o;switch(a){case"ping":{r?.postMessage({type:"pong"}),console.log("[ws worker] pong");break}case"connect":{window.dispatchEvent(new Je),se(!0);const i=n;this.setSid(i);break}case"disconnect":{window.dispatchEvent(new Xe),se(!1);break}case"sid":{const i=n;this.setSid(i);break}case"message":{const i=n;if(typeof i!="string")return this.handleEvent(i.type,te(i.data));const{data:d,type:u}=JSON.parse(i);this.handleEvent(u,te(d))}}}},Fe)return;const t=new mt(new URL(""+new URL("io.worker-B0UANsn0.js",import.meta.url).href,import.meta.url),{name:"shiro-ws-worker"});this.prepare(t),this.worker=t}async getSid(){return this.socket?.sid}setRouter(t){this.router=t}setSid(t){this.socket={...this.socket,sid:t}}prepare(t){const r=Pe.replace(/\/$/,"");this.bindMessageHandler(t),t.postMessage({type:"config",payload:{url:`${r}/web`,socket_session_id:je()}}),t.start(),t.postMessage({type:"init"})}handleEvent(t,r){window.dispatchEvent(new CustomEvent(t,{detail:r})),ut(t,r,this.router)}emit(t,r){this.worker?.postMessage({type:"emit",payload:{type:t,payload:r}})}reconnect(){this.worker?.postMessage({type:"reconnect"})}static{this.shared=new Q}}const pt=Q.shared,os=Object.freeze(Object.defineProperty({__proto__:null,socketWorker:pt},Symbol.toStringTag,{value:"Module"})),ue=e=>{const{onKeyDown:t,onCompositionStart:r,onCompositionEnd:s}=e,o=c.useRef(!1),a=c.useCallback(d=>{o.current=!0,r?.(d)},[r]),n=c.useCallback(d=>{o.current=!1,s?.(d)},[s]),i=c.useCallback(d=>{if(t?.(d),o.current){d.stopPropagation();return}},[t]);return{onCompositionEnd:n,onCompositionStart:a,onKeyDown:i}},me=c.forwardRef(({className:e,...t},r)=>{const s=ue(t);return l.jsx("input",{ref:r,className:w("min-w-0 flex-auto appearance-none rounded-lg border ring-accent/20 duration-200 sm:text-sm lg:text-base","bg-base-100 px-3 py-[calc(theme(spacing.2)-1px)] placeholder:text-zinc-400 focus:outline-none focus:ring-2 dark:bg-zinc-700/[0.15]","border-border","focus:border-accent/80 dark:text-zinc-200 dark:placeholder:text-zinc-500",t.type==="password"?"font-mono":"font-[system-ui]",e),...t,...s})});me.displayName="Input";const R={sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl","3xl":"rounded-3xl",default:"rounded"},ht=c.forwardRef((e,t)=>{const{className:r,wrapperClassName:s,children:o,rounded:a="xl",bordered:n=!0,...i}=e,d=ae(0),u=ae(0),y=c.useCallback(({clientX:m,clientY:O,currentTarget:W})=>{const $=W.getBoundingClientRect();d.set(m-$.left),u.set(O-$.top)},[d,u]),b=ze`radial-gradient(320px circle at ${d}px ${u}px, var(--spotlight-color) 0%, transparent 85%)`,h=Re(),x=ue(e),[S,D]=c.useState(!1);return l.jsxs("div",{className:w("group relative h-full border ring-0 ring-accent/20 duration-200 [--spotlight-color:oklch(var(--a)_/_0.12)]",R[a],"border-transparent",S&&"border-accent/80 ring-2","dark:text-zinc-200 dark:placeholder:text-zinc-500",s),onMouseMove:y,children:[!h&&l.jsx(Ye.div,{className:F("pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",R[a]),style:{background:b},"aria-hidden":"true"}),n&&l.jsx("div",{className:F("border-border pointer-events-none absolute inset-0 z-0 border",R[a]),"aria-hidden":"true"}),l.jsx("textarea",{ref:t,className:w("size-full resize-none bg-transparent","overflow-auto px-3 py-4","!outline-none","text-neutral-900/80 dark:text-slate-100/80",R[a],r),...i,onFocus:m=>{D(!0),i.onFocus?.(m)},onBlur:m=>{D(!1),i.onBlur?.(m)},...x,onKeyDown:m=>{m.key==="Enter"&&(m.metaKey||m.ctrlKey)&&e.onCmdEnter?.(m),i.onKeyDown?.(m),x.onKeyDown?.(m)}}),o]})});ht.displayName="TextArea";const ft=c.forwardRef((e,t)=>c.createElement($e.label,Ue({},e,{ref:t,onMouseDown:r=>{var s;(s=e.onMouseDown)===null||s===void 0||s.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault()}}))),pe=ft,Et=c.createContext({}),gt=()=>c.useContext(Et),J=c.forwardRef(({className:e,...t},r)=>{const s=gt();return l.jsx(pe,{ref:r,className:w("text-foreground-600 text-[1em] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e,s.className),...t})});J.displayName=pe.displayName;const bt=({errorMessage:e,id:t})=>l.jsx("div",{className:"mt-2",children:l.jsx(J,{className:"text-xs font-medium text-error",htmlFor:t,children:e})}),xt=c.createContext({}),Ct=()=>c.useContext(xt),vt=A.forwardRef((e,t)=>{const{className:r,type:s,label:o,isLoading:a,errorMessage:n,isInvalid:i,endContent:d,labelPlacement:u,inputClassName:y,bindValue:b,...h}=e,x=c.useId(),S=Ct(),{value:D,onChange:m,onBlur:O,onFocus:W,labelClassName:$,...ge}=h,[X,Z]=A.useState(!1),be=A.useCallback(()=>{Z(!0)},[]),xe=A.useCallback(()=>{Z(!1)},[]),[Ce,ee]=A.useState(h.value);c.useEffect(()=>{ee(h.value)},[h.value]);const[j,ve]=A.useState(!1),ke=Ge({},S,e),{labelPlacement:C="top"}=ke,Ae=w(S.inputClassName,e.labelClassName),we=w(S.inputClassName,e.inputClassName);return l.jsxs("div",{className:"flex w-full flex-col",children:[l.jsxs("div",{className:w({"flex flex-col":C==="top","flex grow flex-row items-center":C==="left"},"peer relative",r),children:[o&&l.jsx(J,{className:F({"mr-4":C==="left","mb-2 flex":C==="top"},C==="inside"&&{"absolute left-3 top-2 z-[1] select-none duration-200":!0,"text-primary":X,"bottom-2 top-2 flex items-center text-lg":!D&&!X},Ae),htmlFor:x,children:o}),l.jsxs("div",{className:"relative grow",children:[l.jsx("input",{id:x,value:He(b)?Ce:b,onChange:P=>{ee(P.target.value),m?.(P)},onBlur:P=>{xe(),O?.(P)},onFocus:P=>{be(),W?.(P)},type:s==="password"&&!j?"password":"text",className:w("flex h-10 w-full rounded-md border px-3 py-2 text-sm","focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50","border-zinc-200 bg-white placeholder:text-slate-500 focus-visible:border-primary dark:border-neutral-800 dark:bg-zinc-900",C==="inside"&&"h-auto pb-2 pt-8",s==="password"&&["pr-6",!j&&"font-mono"],a&&"pr-6",i&&"!border-red-400 !bg-red-600/50",we),ref:t,...ge}),s==="password"&&!a&&l.jsx(Oe,{className:z({placement:C}),onClick:()=>{ve(!j)},children:l.jsx("i",{className:F("text-lg text-gray-500",j?"icon-[mingcute--eye-line]":"icon-[mingcute--eye-close-line]")})}),!a&&d&&l.jsx("div",{className:z({placement:C}),children:d}),a&&l.jsx("div",{className:z({placement:C}),children:l.jsx("i",{className:"loading loading-spinner size-5 text-primary/80"})})]})]}),i&&n&&l.jsx(bt,{id:x,errorMessage:n})]})}),z=We({base:"absolute right-2",variants:{placement:{inside:"bottom-2",left:"bottom-0 top-0 flex items-center",top:"bottom-0 top-0 flex items-center"}}});vt.displayName="Input";B({});const he=c.createContext(null),fe=c.createContext(null),Ee=()=>c.useContext(he),kt=()=>c.useContext(fe),At=c.forwardRef((e,t)=>{const{showErrorMessage:r=!0,...s}=e,o=oe(()=>B({})),a=oe(()=>({showErrorMessage:r,fields:o,getField:n=>T.get(o)[n],getCurrentValues:()=>Object.fromEntries(Object.entries(T.get(o)).map(([n,i])=>{const d=i.getEl()?.value;return[n,i.transform?i.transform?.(d):d]})),addField:(n,i)=>{T.set(o,d=>({...d,[n]:i}))},removeField:n=>{T.set(o,i=>{const d={...i};return delete d[n],d})}}));return c.useImperativeHandle(t,()=>a,[a]),l.jsx(he.Provider,{value:a,children:l.jsx(fe.Provider,{value:c.useMemo(()=>({showErrorMessage:r}),[r]),children:l.jsx(wt,{...s})})})});At.displayName="Form";const wt=e=>{const{onSubmit:t,...r}=e,s=Ee().fields,o=c.useCallback(async a=>{a.preventDefault();const n=T.get(s);for await(const[i,d]of Object.entries(n)){const u=d.getEl();if(!u)continue;const y=u.value,b=d.rules;for(let h=0;h<b.length;h++){const x=b[h];try{if(!await x.validator(y)){console.error(`Form validation failed, at field \`${i}\`, got value \`${y}\``),u.focus(),x.message&&T.set(s,D=>M(D,m=>{m[i].rules[h].status="error"}));return}}catch(S){console.error("validate function throw error",S);return}}}t?.(a)},[t]);return l.jsx("form",{onSubmit:o,...r,children:e.children})},L=()=>{const e=Ee();if(!e)throw new Error("FormInput must be used inside <FormContext />");return e},St=e=>{const t=L(),{fields:r}=t;return Y(de(r,c.useCallback(s=>{if(e)return s[e]?.rules.find(o=>o.status==="error")?.message},[e])))},yt=({rules:e,transform:t,getEl:r,name:s})=>{const o=L(),{addField:a,removeField:n}=o,i=Be(r);c.useEffect(()=>{if(e&&s)return a(s,{rules:e,getEl:i,transform:t}),()=>{n(s)}},[a,i,s,n,e,t])},Dt=e=>{const t=q(),r=L(),{fields:s}=r;return c.useCallback(()=>{t.set(s,o=>M(o,a=>{e&&a[e].rules.forEach(n=>{n.status==="error"&&(n.status="success")})}))},[s,t,e])},Pt=e=>{const t=q(),r=L(),{fields:s}=r;return c.useCallback(()=>{t.set(s,o=>M(o,a=>{if(!e)return;const n=a[e].getEl()?.value;n&&a[e].rules.some(i=>{if(!i.validator(n))return i.status="error",!0})}))},[s,t,e])},Tt=c.memo(({className:e,rules:t,onKeyDown:r,transform:s,name:o,...a})=>{const{showErrorMessage:n}=kt(),i=c.useRef(null),d=St(o);yt({rules:t||[],transform:s,getEl:()=>i.current,name:o});const u=Dt(o),y=c.useCallback(h=>{r&&r(h),u()},[r,u]),b=Pt(o);return l.jsxs(l.Fragment,{children:[l.jsx(me,{name:o,ref:i,className:w(!!d&&"ring-2 ring-red-400 dark:ring-orange-700","w-full",e),type:"text",onKeyDown:y,onBlur:h=>{b(),a.onBlur?.(h)},...a}),n&&l.jsx(Ve,{duration:.2,children:l.jsx("p",{className:"text-left text-sm text-red-400 dark:text-orange-700",children:d})})]})});Tt.displayName="FormInput";export{At as F,me as I,ss as M,f as R,Qe as S,ht as T,ts as a,Tt as b,Qt as c,Kt as d,qt as e,ie as q,g as r,pt as s,rs as u,os as w};