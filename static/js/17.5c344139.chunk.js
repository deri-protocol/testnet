(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[17],{571:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a=s(2),c=s(13);function l({btnText:e,className:t,disabled:s,click:l,afterClick:n,checkApprove:i,wallet:o,spec:r,lang:d}){const[b,j]=Object(a.useState)(s?"disabled":"enabled"),[p,u]=Object(a.useState)(!0),[O,m]=Object(a.useState)(!1),[h,y]=Object(a.useState)(e),x=Object(a.useRef)(null),v=()=>{j("disabled"),m(!0),x.current&&(x.current.style.display="inline-block")},f=()=>{x.current&&(x.current.style.display="none"),j("enabled"),m(!1)};return Object(a.useEffect)((()=>((async()=>{if(i&&o&&o.detail.account){const e=await o.isApproved(r.pool,r.bTokenId);u(e)}})(),()=>{})),[o,r,i]),Object(a.useEffect)((()=>(e&&y(e),()=>{})),[e]),Object(c.jsxs)("button",{className:t,onClick:()=>{p?(async()=>{if("enabled"!==b)return;v(),await l()&&n&&n(),f()})():(async()=>{v(),(await o.approve(r.pool,r.bTokenId)).success?u(!0):(u(!1),alert(d["approve-failed"])),f()})()},children:[Object(c.jsx)("span",{className:"btn-loading-wrap",children:Object(c.jsx)("span",{ref:x,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),O?d.pending:p?h:d.approve]})}},572:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var a=s(2),c=s(573),l=s(13);function n(e){const[t,s]=Object(a.useState)("--");return Object(a.useEffect)((()=>{const{allowZero:t,...a}=e;return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&s(Object(l.jsx)(c.a,{...a,displayType:"text"})),()=>{}}),[e.value]),t}},577:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var a=s(2),c=s(11),l=s(76),n=s(29);s(7);const i=c.a.get(),{chainInfo:o}=l[i];function r(e){const[t,s]=Object(a.useState)(!1),[l,r]=Object(a.useState)([]),[d,b]=Object(a.useState)([]),[j,p]=Object(a.useState)([]),[u,O]=Object(a.useState)([]),[m,h]=Object(a.useState)([]),[y,x]=Object(a.useState)([]);return Object(a.useEffect)((()=>{const t=e=>{const t=[];return e.reduce(((e,t)=>{const s=e.find((e=>Object(n.c)(e.pool.address,t.address)));if(s&&s.list.length<5)s.list.push(t);else{const s={pool:{network:t.network,symbol:t.symbol,address:t.address,formatAdd:t.formatAdd,version:t.version,chainId:t.chainId,airdrop:t.airdrop,type:t.type,bTokenSymbol:t.bTokenSymbol,bTokenId:t.bTokenId,symbolId:t.symbolId},list:[t]};e.push(s)}return e}),t),t};let a=Object(c.l)(i,"v2"),d=Object(c.l)(i,"v1");const j=Object(c.l)(i,"v2_lite"),u=Object(c.l)(i,"option"),m=Object(c.D)(i);let y=a.concat(d).concat(m).concat(j).concat(u).reduce(((e,t)=>{const s=e.findIndex((e=>e.chainId===t.chainId&&e.bTokenSymbol===t.bTokenSymbol&&t.version===e.version));return("v2"===t.version||"v2_lite"===t.version||"option"===t.version)&&s>-1&&-1===e[s].symbol.indexOf(t.symbol)?e[s].symbol+=`,${t.symbol}`:e.push(t),e}),[]);y=y.map((async e=>{const t=await Object(c.B)(e.chainId,e.pool,e.bTokenId)||{},s=await Object(c.A)(e.chainId,e.pool,e.bTokenId)||{},a=e.pool||"";return Object.assign(e,{network:o[e.chainId]&&o[e.chainId].name,liquidity:t.liquidity,apy:(100*+s.apy).toFixed(2),formatAdd:Object(n.d)(a),address:a,type:"perpetual",buttonText:"STAKING",multiplier:s.multiplier})}));const v=Object(c.v)(i).map((async e=>{const t=await Object(c.B)(e.chainId,e.pool)||{},s=await Object(c.A)(e.chainId,e.pool)||{},a=e.pool||"";let l,i;if(Object(n.k)(e.pool)){let t=await Object(c.x)(e.chainId,e.pool);l=t&&(100*+t.apy2).toFixed(2)}return Object(n.l)(e.pool)&&(i="SUSHI-APY"),Object(n.j)(e.pool)&&(i="CAKE-APY"),Object.assign(e,{network:o[e.chainId].name,liquidity:t.liquidity,apy:(100*+s.apy).toFixed(2),formatAdd:Object(n.d)(a),lpApy:l,address:a,type:"lp",label:i,buttonText:"STAKING"})})),f=y.concat(v);return Promise.all(f).then((a=>{a.push({network:"BSC",bTokenSymbol:"GIVEAWAY",liquidity:"1002200",symbol:"--",airdrop:!0,chainId:56,buttonText:"CLAIM"});let c=a.filter((e=>("v1"===e.version||!e.version)&&!e.retired)),l=a.filter((e=>("v2"===e.version||"v2_lite"===e.version)&&!e.retired)),n=a.filter((e=>"option"===e.version&&!e.retired));const i=a.filter((e=>e.retired&&!e.premining)),o=a.filter((e=>e.retired&&e.premining));e&&(c=t(c),l=t(l),n=t(n)),p(l),b(c),O(n),r(a),h(i),x(o),s(!0)})),()=>l.length=0}),[]),[t,l,d,j,u,m,y]}},594:function(e,t,s){"use strict";var a=s(2),c=s(17),l=s(76),n=s(11),i=s(572),o=s(37),r=s(571),d=s(29),b=s(570),j=s.n(b),p=s(13);const u=l[n.a.get()].chainInfo;function O({wallet:e,pool:t,card:s,index:l,list:o,lang:b}){const[j,u]=Object(a.useState)(""),[O,m]=Object(a.useState)(!1),h=Object(c.useHistory)(),y=()=>{e.connect().then((()=>{m(!0)}))},x=async()=>{let t=await Object(n.H)(e.detail.account);t.valid?Object(d.c)(e.detail.chainId,t.chainId)?(await Object(n.Q)(t.chainId,e.detail.account)).success||alert(b["claim-failed"]):alert(b["please-switch-to-BSC-to-claim-deri"]):alert(b["no-deri-to-claim"])};return Object(a.useEffect)((()=>{if(t&&t.airdrop)e.isConnected()?u(Object(p.jsx)(r.a,{btnText:b.claim,click:x,lang:b})):u(Object(p.jsx)(r.a,{btnText:b["connect-wallet"],click:y,lang:b}));else{let e=`/mining/${t.version||"v1"}/${t.chainId}/${s.type}/${s.symbol}/${s.bTokenSymbol}/${t.address}`;s.bTokenId&&(e=`${e}?baseTokenId=${s.bTokenId}`),s.symbolId&&(e=e.indexOf("?")>0?`${e}&symbolId=${s.symbolId}`:`${e}?symbolId=${s.symbolId}`),u(Object(p.jsx)("button",{onClick:()=>(e=>{h.push(e)})(e),children:b.staking}))}return()=>{}}),[e.detail.account,O]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"info",children:[Object(p.jsxs)("div",{className:"top-info",children:[Object(p.jsxs)("div",{className:"pool-top",children:[Object(p.jsx)("span",{className:`logo ${s.bTokenSymbol}`}),Object(p.jsx)("span",{className:"base-token",children:s.bTokenSymbol})]}),Object(p.jsxs)("div",{className:"pool-detail",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{className:"title",children:s.airdrop?b.total:b["pool-liq"]}),Object(p.jsx)(i.a,{value:s.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:s.lpApy?7:0})]}),Object(p.jsx)("div",{className:"multiplier",children:s.multiplier&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{children:b.multiplier}),Object(p.jsxs)("span",{className:"multiplier-value",title:b["multiplier-tip"],children:[s.multiplier,"x"]})]})}),Object(p.jsxs)("div",{className:"apy",children:[Object(p.jsx)("span",{children:b.apy}),Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{className:s.lpApy?"sushi-apy-underline":"",title:s.lpApy&&b["deri-apy"],children:s.apy?Object(p.jsx)(i.a,{value:s.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),s.lpApy&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{children:" + "}),Object(p.jsxs)("span",{className:s.lpApy?"sushi-apy-underline":"",title:s.lpApy&&s.label,children:[" ",Object(p.jsx)(i.a,{value:s.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]})]})]}),Object(p.jsx)("div",{className:"bottom-btn",children:j})]}),l!==o.length-1&&Object(p.jsx)("div",{className:"top-line"})]})}t.a=Object(o.b)("wallet","version")(Object(o.c)((function({wallet:e,group:t={},lang:s}){const{pool:a,list:c}=t,l=j()("pool",{"only-one":1===c.length,full:5===c.length});return Object(p.jsxs)("div",{className:l,children:[Object(p.jsxs)("div",{className:"pool-header",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("div",{className:"network",children:a.network&&a.network.toUpperCase()}),Object(p.jsxs)("div",{className:"pool-desc",children:[Object(p.jsxs)("span",{className:"symbol",children:[Object(p.jsxs)("span",{className:"symbol-label",children:[s.symbol,":"]}),Object(p.jsx)("span",{className:"symbol-value",children:a.symbol})]}),Object(p.jsxs)("span",{className:"address",children:[Object(p.jsxs)("span",{className:"address-label",children:[s.address,":"]}),a.airdrop?"--":Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:`${u[a.chainId]&&u[a.chainId].viewUrl}/address/${a.address}`,children:a.formatAdd})]})]})]}),Object(p.jsx)("div",{className:"version",children:s[a.version]})]}),Object(p.jsx)("div",{className:"pool-info",children:c.map(((t,l)=>Object(p.jsx)(O,{card:t,index:l,pool:a,list:c,wallet:e,lang:s},l)))})]})})))},696:function(e,t,s){},697:function(e,t,s){},729:function(e,t,s){"use strict";s.r(t);var a=s(2),c=(s(696),s(697),s(570)),l=s.n(c),n=s(594),i=s(577),o=s(37),r=s(13);t.default=Object(o.b)("version","loading")(Object(o.c)((function({lang:e,loading:t}){const[s,c,o,d,b]=Object(i.a)(!0),[j,p]=Object(a.useState)("all"),u=e=>{p(e)},O=l()("checkout-pools",j);return Object(a.useEffect)((()=>(s?t.loaded():t.loading(),()=>{})),[s]),Object(r.jsxs)("div",{className:"mining-info",children:[Object(r.jsxs)("div",{className:O,children:[Object(r.jsx)("div",{className:"all",onClick:()=>u("all"),children:e.all}),Object(r.jsx)("div",{className:"futures",onClick:()=>u("futures"),children:e.futures}),Object(r.jsx)("div",{className:"options",onClick:()=>u("options"),children:e.options})]}),"all"===j&&Object(r.jsx)("div",{className:"pools",children:d.concat(b).concat(o).map(((t,s)=>Object(r.jsx)(n.a,{group:t,lang:e},s)))}),"futures"===j&&Object(r.jsx)("div",{className:"pools",children:d.concat(o).map(((t,s)=>Object(r.jsx)(n.a,{group:t,lang:e},s)))}),"options"===j&&Object(r.jsx)("div",{className:"pools",children:b.map(((t,s)=>Object(r.jsx)(n.a,{group:t,lang:e},s)))})]})})))}}]);
//# sourceMappingURL=17.5c344139.chunk.js.map