import{p as M,d as _,s as R}from"./styles-991ebdfc-Cw9lcVEV.js";import{l as d,c,h as w,u as B,_ as G,$ as D,a0 as E,a1 as C,j as $}from"./mermaid.core-CuRYvBSD.js";import{G as z}from"./graph-Bolc1a8U.js";import{r as P}from"./index-fc10efb0-CSWees1f.js";import"./request-D0R88Di3.js";import"./layout-BD-dhnee.js";import"./index-M3pXe0T4.js";import"./clone-DlAVHJIf.js";import"./edges-d32062c0-BHPTvceF.js";import"./createText-6b48ae7d-Bwf9vKiV.js";import"./index.demo-CBFe_z1Z.js";import"./use-is-dark-C773AUBY.js";import"./LinkCard-ClTREHD8.js";import"./image-BsKqtQSq.js";import"./helper-CaAdfMs7.js";import"./StyledButton-Du9KJwW8.js";import"./motion-minimal-GkgNfZih.js";import"./viewport-DUHAwfyq.js";import"./toast-QlB5oV8N.js";import"./env-DbhK1WeT.js";import"./provider-DVg6CMq0.js";import"./use-is-unmounted-uf5-5htI.js";import"./spring-BiPrtYZ-.js";import"./use-event-callback-D_bubOLe.js";import"./dom-XXNktKeO.js";import"./use-animation-e6A9aeMm.js";import"./visual-element-H_tS0lhz.js";import"./index-D2SPvy35.js";import"./use-is-client-3-FC5pC3.js";import"./use-motion-template-DpKJpKja.js";import"./Gallery-BndGHOFZ.js";import"./lodash-B3VVwmZe.js";import"./FormInput-CTejcXWT.js";import"./ShikiWrapper-BQoBsyFN.js";import"./alert-By7Xx1xw.js";import"./CodeHighlighter-kBZand9p.js";import"./FloatPopover-DpoAUXZV.js";import"./SocialSourceLink-pVxosTWR.js";import"./Collapse-DVNOznnX.js";import"./useQuery-g4Puql7b.js";import"./CodeEditor-ISub3Ond.js";import"./index-LAI3pait.js";import"./Mermaid-DshJyDyU.js";import"./line-XCcOdSVz.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";const S=s=>$.sanitizeText(s,c());let k={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const q=function(s,e,m,i){const t=Object.keys(s);d.info("keys:",t),d.info(s),t.forEach(function(a){var o,r;const l=s[a],p={shape:"rect",id:l.id,domId:l.domId,labelText:S(l.id),labelStyle:"",style:"fill: none; stroke: black",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};e.setNode(l.id,p),A(l.classes,e,m,i,l.id),d.info("setNode",p)})},A=function(s,e,m,i,t){const a=Object.keys(s);d.info("keys:",a),d.info(s),a.filter(o=>s[o].parent==t).forEach(function(o){var r,l;const n=s[o],p=n.cssClasses.join(" "),y=D(n.styles),u=n.label??n.id,b=0,f={labelStyle:y.labelStyle,shape:"class_box",labelText:S(u),classData:n,rx:b,ry:b,class:p,style:y.style,id:n.id,domId:n.domId,tooltip:i.db.getTooltip(n.id,t)||"",haveCallback:n.haveCallback,link:n.link,width:n.type==="group"?500:void 0,type:n.type,padding:((r=c().flowchart)==null?void 0:r.padding)??((l=c().class)==null?void 0:l.padding)};e.setNode(n.id,f),t&&e.setParent(n.id,t),d.info("setNode",f)})},F=function(s,e,m,i){d.info(s),s.forEach(function(t,a){var o,r;const l=t,n="",p={labelStyle:"",style:""},y=l.text,u=0,h={labelStyle:p.labelStyle,shape:"note",labelText:S(y),noteData:l,rx:u,ry:u,class:n,style:p.style,id:l.id,domId:l.id,tooltip:"",type:"note",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};if(e.setNode(l.id,h),d.info("setNode",h),!l.class||!(l.class in i))return;const f=m+a,x={id:`edgeNote${f}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:E(k.curve,C)};e.setEdge(l.id,l.class,x,f)})},H=function(s,e){const m=c().flowchart;let i=0;s.forEach(function(t){var a;i++;const o={classes:"relation",pattern:t.relation.lineType==1?"dashed":"solid",id:`id_${t.id1}_${t.id2}_${i}`,arrowhead:t.type==="arrow_open"?"none":"normal",startLabelRight:t.relationTitle1==="none"?"":t.relationTitle1,endLabelLeft:t.relationTitle2==="none"?"":t.relationTitle2,arrowTypeStart:N(t.relation.type1),arrowTypeEnd:N(t.relation.type2),style:"fill:none",labelStyle:"",curve:E(m?.curve,C)};if(d.info(o,t),t.style!==void 0){const r=D(t.style);o.style=r.style,o.labelStyle=r.labelStyle}t.text=t.title,t.text===void 0?t.style!==void 0&&(o.arrowheadStyle="fill: #333"):(o.arrowheadStyle="fill: #333",o.labelpos="c",((a=c().flowchart)==null?void 0:a.htmlLabels)??c().htmlLabels?(o.labelType="html",o.label='<span class="edgeLabel">'+t.text+"</span>"):(o.labelType="text",o.label=t.text.replace($.lineBreakRegex,`
`),t.style===void 0&&(o.style=o.style||"stroke: #333; stroke-width: 1.5px;fill:none"),o.labelStyle=o.labelStyle.replace("color:","fill:"))),e.setEdge(t.id1,t.id2,o,i)})},V=function(s){k={...k,...s}},W=async function(s,e,m,i){d.info("Drawing class - ",e);const t=c().flowchart??c().class,a=c().securityLevel;d.info("config:",t);const o=t?.nodeSpacing??50,r=t?.rankSpacing??50,l=new z({multigraph:!0,compound:!0}).setGraph({rankdir:i.db.getDirection(),nodesep:o,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),n=i.db.getNamespaces(),p=i.db.getClasses(),y=i.db.getRelations(),u=i.db.getNotes();d.info(y),q(n,l,e,i),A(p,l,e,i),H(y,l),F(u,l,y.length+1,p);let b;a==="sandbox"&&(b=w("#i"+e));const h=a==="sandbox"?w(b.nodes()[0].contentDocument.body):w("body"),f=h.select(`[id="${e}"]`),x=h.select("#"+e+" g");if(await P(x,l,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",e),B.insertTitle(f,"classTitleText",t?.titleTopMargin??5,i.db.getDiagramTitle()),G(l,f,t?.diagramPadding,t?.useMaxWidth),!t?.htmlLabels){const T=a==="sandbox"?b.nodes()[0].contentDocument:document,I=T.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const g of I){const L=g.getBBox(),v=T.createElementNS("http://www.w3.org/2000/svg","rect");v.setAttribute("rx",0),v.setAttribute("ry",0),v.setAttribute("width",L.width),v.setAttribute("height",L.height),g.insertBefore(v,g.firstChild)}}};function N(s){let e;switch(s){case 0:e="aggregation";break;case 1:e="extension";break;case 2:e="composition";break;case 3:e="dependency";break;case 4:e="lollipop";break;default:e="none"}return e}const J={setConf:V,draw:W},zt={parser:M,db:_,renderer:J,styles:R,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,_.clear()}};export{zt as diagram};
