(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[21],{1334:function(e,t,s){},1335:function(e,t,s){},1376:function(e,t,s){"use strict";s.r(t);var c=s(2),a=(s(1334),s(1335),s(607)),n=s.n(a),l=s(900),i=s(660),o=s(37),r=s(817),d=s(7),p=s(50),b=s(819),j=s(22),u=s(13);const m=d.a.get(),{chainInfo:O}=p[m],h=b.openPoolList;t.default=Object(o.b)("version","loading")(Object(o.c)((function({lang:e,loading:t}){const[s,a,o,p,b]=Object(i.a)(!0),[x,f]=Object(c.useState)([]),[v,g]=Object(c.useState)("all"),y=n()("filter-area",v),N=async e=>{if(g(e===v?"all":e),"open"===e&&0===x.length){t.loading();let e=Object(j.c)(await(async()=>(await d.nb.update(),Object(d.p)(m,"v2_lite_open")))());e=e.filter((e=>!h.includes(e.pool))),e=e.map((e=>Object(j.s)(e,null,O))),Promise.all(e).then((s=>{e=Object(j.m)(s),f(e),t.loaded()}))}};return Object(c.useEffect)((()=>(s?t.loaded():t.loading(),()=>{})),[s]),Object(u.jsxs)("div",{className:"mining-info",children:[Object(u.jsxs)("div",{className:y,children:[Object(u.jsx)("span",{className:"future-zone",onClick:()=>N("future"),children:e.futures}),Object(u.jsx)("span",{className:"option-zone",onClick:()=>N("option"),children:e.options}),Object(u.jsx)("span",{className:"separator-line"}),Object(u.jsx)("span",{className:"open-zone",onClick:()=>N("open"),children:e["open-zone"]})]}),"all"===v&&Object(u.jsxs)("div",{className:"pools",children:[b.map(((t,s)=>Object(u.jsx)(l.a,{group:t,lang:e},s))),p.concat(o).map(((t,s)=>Object(u.jsx)(l.a,{group:t,lang:e},s)))]}),"future"===v&&Object(u.jsx)("div",{className:"pools",children:p.concat(o).map(((t,s)=>Object(u.jsx)(l.a,{group:t,lang:e},s)))}),"option"===v&&Object(u.jsx)("div",{className:"pools",children:Object(u.jsx)("div",{className:"pools",children:b.map(((t,s)=>Object(u.jsx)(l.a,{group:t,lang:e},s)))})}),"open"===v&&Object(u.jsxs)("div",{className:"pools open-pool",children:[x.map(((t,s)=>Object(u.jsx)(l.a,{group:t,lang:e},s))),x.length>0&&Object(u.jsx)(r.a,{lang:e})]})]})})))},608:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var c=s(2),a=s(13);function n({btnText:e,className:t,disabled:s,click:n,afterClick:l,checkApprove:i,wallet:o,spec:r,lang:d}){const[p,b]=Object(c.useState)(s?"disabled":"enabled"),[j,u]=Object(c.useState)(!0),[m,O]=Object(c.useState)(!1),[h,x]=Object(c.useState)(e),f=Object(c.useRef)(null),v=()=>{b("disabled"),O(!0),f.current&&(f.current.style.display="inline-block")},g=()=>{f.current&&(f.current.style.display="none"),b("enabled"),O(!1)};return Object(c.useEffect)((()=>((async()=>{if(i&&o&&o.detail.account){const e=await o.isApproved(r.pool,r.bTokenId);u(e)}})(),()=>{})),[o,r,i]),Object(c.useEffect)((()=>(e&&x(e),()=>{})),[e]),Object(a.jsxs)("button",{className:t,onClick:()=>{j?(async()=>{if("enabled"!==p)return;v(),await n()&&l&&l(),g()})():(async()=>{v(),(await o.approve(r.pool,r.bTokenId)).success?u(!0):(u(!1),alert(d["approve-failed"])),g()})()},children:[Object(a.jsx)("span",{className:"btn-loading-wrap",children:Object(a.jsx)("span",{ref:f,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),m?d.pending:j?h:d.approve]})}},610:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var c=s(2),a=s(616),n=s(13);function l(e){const[t,s]=Object(c.useState)(Object(n.jsx)("span",{className:"loading-line"}));return Object(c.useEffect)((()=>{const{allowZero:t,...c}=e;return("object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&s(Object(n.jsx)(a.a,{...c,displayType:"text"})),()=>{}}),[e.value]),t}},618:function(e,t,s){"use strict";var c=s(2),a=s(13);t.a=function(e){const t=Object(c.useRef)(null);return Object(c.useEffect)((()=>{const e=t.current;if(e){e.querySelectorAll("[tip]").forEach((t=>{let s=null;t.addEventListener("mouseover",(e=>{const t=e.currentTarget.getAttribute("tip");if(t){const c=`hover-box-${(new Date).getTime()}`;s=document.body.querySelector(`#${c}`),s=document.createElement("div"),s.style.cssText=`z-index : 9;min-width : 100px;max-width : ${window.screen.width}px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;`,document.body.appendChild(s),s.innerText=t,s.id=c,s.style.display="block";const a=e.currentTarget.getBoundingClientRect();if(s.style.top=`${a.y+a.height+window.document.documentElement.scrollTop}px`,s.offsetWidth+e.pageX>window.screen.width)if(e.pageX-s.offsetWidth>=0)s.style.left=e.pageX-s.offsetWidth+"px";else{const t=e.pageX-s.offsetWidth/2>0?e.pageX-s.offsetWidth/2:0;s.style.left=`${t}px`}else s.style.left=`${e.pageX}px`}})),e.addEventListener("mouseout",(e=>{s&&s.remove()}))}))}return()=>{t.current=null}}),[e.title]),e.block?Object(a.jsx)("div",{ref:t,children:e.children}):Object(a.jsx)("span",{ref:t,children:e.children})}},660:function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var c=s(2),a=s(7),n=s(50),l=s(22),i=s(5);s(652);const o=a.a.get(),{chainInfo:r}=n[o];function d(e,t,s){const[n,d]=Object(c.useState)(!1),[p,b]=Object(c.useState)([]),[j,u]=Object(c.useState)([]),[m,O]=Object(c.useState)([]),[h,x]=Object(c.useState)([]),[f,v]=Object(c.useState)([]),[g,y]=Object(c.useState)([]);return Object(c.useEffect)((()=>((async()=>{let c=Object(a.p)(o,"v2");const n=Object(a.p)(o,"v2_lite"),p=Object(a.p)(o,"option");let j=c.concat(n).concat(p);if(s){let e=Object(a.p)(o,"v1");const t=Object(a.K)(o);j=e.concat(t)}j=Object(l.c)(j),j=j.map((e=>Object(l.s)(e,t,r)));const m=Object(a.z)(o).map((async e=>{const t=e.pool||"";let s;return Object(l.q)(e.pool),Object(l.r)(e.pool)&&(s=i.a.get("mining","sushi-apy")),Object(l.p)(e.pool)&&(s=i.a.get("mining","cake-apy")),Object.assign(e,{network:r[e.chainId].name,formatAdd:Object(l.g)(t),address:t,type:"lp",label:s,buttonText:"STAKING"})})),h=j.concat(m);Promise.all(h).then((t=>{const s={network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"1740",symbol:"--",airdrop:!0,chainId:56,apy:"--",buttonText:"CLAIM"};(new Date).getTime()<=16356744e5&&t.push(s);let c=t.filter((e=>("v1"===e.version||!e.version)&&!e.retired)),a=t.filter((e=>("v2"===e.version||"v2_lite"===e.version||"v2_lite_dpmm"===e.version)&&!e.retired)),n=t.filter((e=>"option"===e.version&&!e.retired));const i=t.filter((e=>e.retired&&!e.premining)),o=t.filter((e=>e.retired&&e.premining));let r=t.filter((e=>e.isOpen));e&&(c=Object(l.m)(c),a=Object(l.m)(a),n=Object(l.m)(n),r=Object(l.m)(r)),O(a),u(c),x(n),b(t),v(i),y(o),d(!0)}))})(),()=>p.length=0)),[]),[n,p,j,m,h,f,g]}},760:function(e,t){},817:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));s(818);var c=s(90),a=s(132),n=s(13);function l({lang:e}){return Object(n.jsxs)("div",{className:"pool-placehold",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("div",{className:"title",children:e["add-pool"]})}),Object(n.jsxs)("div",{className:"pool-body",children:[Object(n.jsx)("div",{className:"info",children:Object(n.jsx)("div",{children:e["add-pool-text"]})}),Object(n.jsxs)("div",{className:"btn-c",children:[a.isMobile&&Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("button",{onClick:()=>{alert(e["please-operate"])},children:e.add})}),a.isBrowser&&Object(n.jsx)(c.b,{to:"/addpool",children:Object(n.jsx)("button",{children:e.add})})]})]})]})}},818:function(e,t,s){},819:function(e){e.exports=JSON.parse('{"openPoolList":["0xbe63f663349059F436364aC1700603d9570bFBc3","0x6D1c634964CA200faaF384CD767020C2c64466aC"]}')},900:function(e,t,s){"use strict";var c=s(2),a=s(20),n=s(50),l=s(7),i=s(610),o=s(37),r=s(608),d=s(22),p=s(607),b=s.n(p),j=s(618),u=(s(652),s(13));const m=n[l.a.get()].chainInfo;function O({wallet:e,pool:t,card:s,index:n,list:o,lang:p}){const[b,m]=Object(c.useState)(""),[O,h]=Object(c.useState)(!1),[x,f]=Object(c.useState)({}),v=Object(a.useHistory)(),g=()=>{e.connect().then((()=>{h(!0)}))},y=async()=>{let t=await Object(l.P)(e.detail.account);t.valid?Object(d.e)(e.detail.chainId,t.chainId)?(await Object(l.jb)(t.chainId,e.detail.account)).success||alert(p["claim-failed"]):alert(p["please-switch-to-BSC-to-claim-deri"]):alert(p["no-deri-to-claim"])};return Object(c.useEffect)((()=>{if(t&&t.airdrop)e.isConnected()?m(Object(u.jsx)(r.a,{btnText:p.claim,click:y,lang:p})):m(Object(u.jsx)(r.a,{btnText:p["connect-wallet"],click:g,lang:p}));else{let e=`/mining/${t.version||"v1"}/${t.chainId}/${s.type}/${s.symbol}/${s.bTokenSymbol}/${t.address}`;s.bTokenId&&(e=`${e}?baseTokenId=${s.bTokenId}`),s.symbolId&&(e=e.indexOf("?")>0?`${e}&symbolId=${s.symbolId}`:`${e}?symbolId=${s.symbolId}`),m(Object(u.jsx)("button",{onClick:()=>(e=>{v.push(e)})(e),children:p.staking}))}t&&t.airdrop?f({liquidity:s.liquidity,airdrop:t.airdrop}):(async e=>{const s=await Object(l.F)(e.chainId,e.pool,e.bTokenId),c={liquidity:(await Object(l.G)(e.chainId,e.pool,e.bTokenId)).liquidity,apy:(100*+s.apy).toFixed(2),multiplier:s.multiplier};if(e.isLp){const s=(100*+(await Object(l.B)(e.chainId,e.pool)).apy2).toFixed(2);c.lpApy=s,c.isCakeLP=Object(d.p)(t.address),c.isSushiLP=Object(d.r)(t.address)}f(c)})(s)}),[e.detail.account,O,s]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("div",{className:"top-info",children:[Object(u.jsxs)("div",{className:"pool-top",children:["v2_lite_open"!==t.version&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("span",{className:`logo ${s.bTokenSymbol}`})}),"v2_lite_open"===t.version&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("span",{className:"bg-logo",children:Object(u.jsx)("img",{onError:e=>{e.target.src="data:image/png;base64,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"},src:`https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/${s.bTokenSymbol}.png`})})}),Object(d.p)(t.address)&&Object(u.jsx)(j.a,{children:Object(u.jsx)("span",{tip:p["cake-lp-hover"],className:"base-token lp-token",children:s.bTokenSymbol})}),Object(d.r)(t.address)&&Object(u.jsx)(j.a,{children:Object(u.jsx)("span",{tip:p["sushi-lp-hover"],className:"base-token lp-token",children:s.bTokenSymbol})}),!s.isLp&&Object(u.jsx)("span",{className:"base-token",children:s.bTokenSymbol})]}),Object(u.jsxs)("div",{className:"pool-detail",children:[Object(u.jsxs)("div",{className:"liq",children:[Object(u.jsx)("span",{className:"title",children:s.airdrop?p.total:p["pool-liq"]}),Object(u.jsx)(i.a,{value:x.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:x.lpApy?7:0})]}),Object(u.jsx)("div",{className:"multiplier",children:x.multiplier&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:p.multiplier}),Object(u.jsx)(j.a,{block:!1,children:Object(u.jsxs)("span",{className:"multiplier-value",tip:p["multiplier-tip"],children:[x.multiplier,"x"]})})]})}),Object(u.jsx)("div",{className:`apy ${x.lpApy&&"lp-apy"}`,children:!s.isOpen&&!s.airdrop&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:p.apy}),Object(u.jsx)(j.a,{block:!1,title:x.lpApy,children:Object(u.jsx)("span",{className:x.lpApy?"sushi-apy-underline":"",tip:x.lpApy?p["deri-apy"]:"",children:Object(u.jsx)(i.a,{value:x.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})}),x.lpApy&&x.lpApy>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:"+"}),Object(u.jsx)(j.a,{block:!1,children:Object(u.jsx)("span",{className:x.lpApy?"sushi-apy-underline":"",tip:s.label,children:Object(u.jsx)(i.a,{value:x.lpApy,displayType:"text",suffix:"%",decimalScale:2})})})]})]})})]})]}),Object(u.jsx)("div",{className:"bottom-btn",children:b})]}),n!==o.length-1&&Object(u.jsx)("div",{className:"top-line"})]})}t.a=Object(o.b)("wallet","version")(Object(o.c)((function({wallet:e,group:t={},lang:s}){const{pool:c,list:a}=t,n=b()("pool",{"only-one":1===a.length,full:5===a.length});return Object(u.jsxs)("div",{className:n,children:[Object(u.jsxs)("div",{className:"pool-header",children:[Object(u.jsxs)("div",{className:"left",children:[Object(u.jsx)("div",{className:"network",children:c.network&&c.network.toUpperCase()}),Object(u.jsxs)("div",{className:"pool-desc",children:[Object(u.jsxs)("span",{className:"symbol",children:[Object(u.jsxs)("span",{className:"symbol-label",children:[s.symbol,":"]}),Object(u.jsx)("span",{className:"symbol-value",children:c.symbol})]}),Object(u.jsxs)("span",{className:"address",children:[Object(u.jsxs)("span",{className:"address-label",children:[s.address,":"]}),c.airdrop?"--":Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:`${m[c.chainId]&&m[c.chainId].viewUrl}/address/${c.address}`,children:c.formatAdd})]})]})]}),Object(u.jsx)("div",{className:"version",children:s[c.version]})]}),Object(u.jsx)("div",{className:"pool-info",children:a.map(((t,n)=>Object(u.jsx)(O,{card:t,index:n,pool:c,list:a,wallet:e,lang:s},n)))})]})})))}}]);
//# sourceMappingURL=21.5b17775a.chunk.js.map