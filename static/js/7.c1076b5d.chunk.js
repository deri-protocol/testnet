(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[7],{1208:function(e,t,a){"use strict";var s,i,l=a(73),n=a(284),c=a(106),o=a(25),r=a(185),d=a(6),b=(a(63),a(1253)),j=a(50),v=a(19),m=a(10),x=a(4),p=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],u=Object(j.a)(b.a)(s||(s=Object(r.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),h=j.a.div(i||(i=Object(r.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(x.jsx)("span",{className:"loading-line"})),a=Object(o.a)(t,2),s=a[0],i=a[1],r=Object(d.useState)(!0),b=Object(o.a)(r,2),j=b[0],O=b[1],f=function(){var t=e.allowZero;return"object"!==Object(c.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},g=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),s=e.defaultValue,c=void 0===s?"--":s,o=Object(n.a)(e,p);if(f())o.decimalScale>0&&o.value&&/\d+\.0*[1-9]+/.test(o.value)&&0===+Object(m.bg)(o.value).toFixed(+o.decimalScale||2)&&(o.decimalScale=Object(v.d)(Math.abs(o.value))+2),(-1===o.decimalScale||0===+o.value&&t)&&delete o.decimalScale,o.value=Object(v.J)(o.value),o.value&&/\d+.9{6}/.test(o.value)&&(o.value=(+o.value).toFixed(5)),i(Object(x.jsx)(u,Object(l.a)(Object(l.a)({},o),{},{renderText:g,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(j){var r=e.width,d=e.height;i(Object(x.jsx)(h,{className:"loading-line",width:r,height:d})),a&&O(!1)}var b=window.setTimeout((function(){f()||i(c)}),6e4);return function(){clearTimeout(b)}}),[e.value,e.decimalScale,e.suffix]),s}},1381:function(e,t,a){"use strict";t.a=a.p+"static/media/staked.45c27f0b.svg"},1619:function(e,t,a){},1722:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var s=a(6),i=a(54),l=a(1208),n=a(162),c=a(453),o=a(454),r=a(455),d=a(451),b=a(1381),j=a(456),v=a(59),m=a.n(v),x=a.p+"static/media/close.7f6b23a4.svg",p=(a(1954),a(50)),u=a(4);function h(e){let{lang:t,pool:a,wallet:v}=e;const p=Object(i.g)(),[h,O]=Object(s.useState)({}),[f,k]=Object(s.useState)(!1),[N,y]=Object(s.useState)(),[w,S]=Object(s.useState)(!0),T=e=>{e.target.src=j.default};Object(s.useEffect)((()=>{(async()=>{O({});let e=await a.getPoolInfo(v,a);O(e)})(),v.isConnected()&&((async()=>{let e=await a.getIsStaked(v,a);e&&k(e.isStaked)})(),(async()=>{if(a&&("v3"===a.version||"v3_lite"===a.version)){let e=await a.getVenusEarned(v,a.address);y(e)}})())}),[a,v.detail.account]),Object(s.useEffect)((()=>{let e=sessionStorage.getItem(a.address);null!==e&&e&&S(!1)}),[a]);const _=`/pool/${a.version||"v1"}/${a.chainId}/${a.type}/${a.address}`;return Object(u.jsxs)("div",{className:"card-box",children:[Object(u.jsxs)("div",{className:"v2_lite_open"===a.version?"card-list open-list":"card-list",onClick:()=>{(e=>{"v2_lite_open"!==a.version&&p.push(e)})(_)},children:[Object(u.jsxs)("div",{className:m()("card-header",{v3:a.isAllV3}),children:[Object(u.jsxs)("div",{className:"pool-network-type",children:[Object(u.jsx)("div",{className:"network-logo",children:Object(u.jsx)("img",{alt:"",src:(e=>{let t;return"56"===e||"97"===e?t=c.default:"137"===e?t=r.default:"1"===e?t=d.default:"42161"!==e&&"421611"!==e||(t=o.default),t})(a.chainId)})}),Object(u.jsxs)("div",{className:"pool-type-network-text",children:[Object(u.jsxs)("div",{className:"pool-type-text",children:["0xD2D950e338478eF7FeB092F840920B3482FcaC40"!==a.address&&Object(u.jsxs)(u.Fragment,{children:[t[a.type]," ",t[a.zone]]}),"0xD2D950e338478eF7FeB092F840920B3482FcaC40"===a.address&&Object(u.jsx)(u.Fragment,{children:t[a.zone]})]}),Object(u.jsx)("div",{className:"pool-network-text",children:a.chain.toUpperCase()})]})]}),Object(u.jsxs)("div",{className:"base-token-logo",children:[a.isLp&&Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"lp-base-token-bg",children:[Object(u.jsx)("div",{className:`base-token-bg ${a.bTokens[0].bTokenSymbol}`}),Object(u.jsx)("span",{className:"lp-con",children:"+"}),Object(u.jsx)("div",{className:`base-token-bg ${a.bTokens[1].bTokenSymbol}`})]})}),!a.isLp&&"v3"!==a.version&&"v3_lite"!==a.version&&Object(u.jsx)(u.Fragment,{children:a.bTokens.map(((e,t)=>Object(u.jsx)("div",{className:"base-token-box-bg",children:Object(u.jsx)("div",{className:`base-token-bg ${e.bTokenSymbol}`,children:"v2_lite_open"===a.version&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("img",{alt:"",onError:T,src:`https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/${e.bTokenSymbol}.png`})})})},t)))}),("v3"===a.version||"v3_lite"===a.version)&&Object(u.jsx)(g,{bTokens:a.bTokens})]})]}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==a.version&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"max-apy-title",children:"v2"===a.version||"v3_lite"===a.version||"v3"===a.version?t["max-apy"]:t.apy}),Object(u.jsx)("div",{className:"max-apy-num",children:Object(u.jsx)(l.a,{value:h.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(u.jsxs)("div",{className:"total-pool-liquidity",children:[Object(u.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(u.jsx)("div",{className:"total-liquidity-num",children:Object(u.jsx)(l.a,{value:h.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===a.type?7:0})})]}),Object(u.jsxs)("div",{className:"your-deri-epoch",children:[f&&Object(u.jsxs)("div",{className:"staked-box",children:[Object(u.jsx)("img",{src:b.a,alt:""}),t.staked]}),+N>0&&("v3"===a.version||"v3_lite"===a.version)&&Object(u.jsx)("span",{className:"xvs-collectable",children:Object(u.jsxs)("div",{className:"staked-box",children:[Object(u.jsx)(l.a,{width:"50px",value:N,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(u.jsx)("div",{className:"stake-button",children:Object(u.jsx)(n.a,{disabled:"v2_lite_open"===a.version,className:"button",outline:!0,label:"v2_lite_open"===a.version?t.operating:t.stake})})]})]}),"v3_lite"===a.version&&w&&Object(u.jsxs)("div",{className:"new-symbol",children:[Object(u.jsxs)("div",{className:"new-symbol-text",children:["New Listing : ",Object(u.jsx)("a",{href:"https://deri.io/#/trade/futures/SOLUSDT",target:"_blank",children:"SOLUSDT"})," ",Object(u.jsx)("a",{href:"https://deri.io/#/trade/futures/LUNAUSDT",target:"_blank",children:"LUNAUSDT"})]}),Object(u.jsx)("div",{className:"close-symbol",children:Object(u.jsx)("img",{src:x,alt:"close",onClick:()=>{return e=a.address,sessionStorage.setItem(e,!1),void S(!1);var e}})})]})]})}const O=p.a.div`
  @-webkit-keyframes explode {
    0% {
        transform: translateX(0px);
        -moz-transform : translateX(0px);
    }
    100% {
        transform: translateX(100px);
        -moz-transform : translateX(100px);
    }
  }

  @keyframes explode {
    0% {
        transform: translateX(0px);
        -moz-transform : translateX(0px);
    }
    100% {
        transform: translateX(100px);
        -moz-transform : translateX(100px);
    }
  }
  .base-token{
    margin-left: 0px!important;
    z-index : -2;
    visibility: hidden;
    background-color: #111e34;
    border : 1px solid #fff;
  }
  @media only screen and (max-width: 760px) {
    .base-token{
      display:none;
    }
  }
  .base-token-box-bg.explode:hover .move  {
    -webkit-animation : explode .4s .0s linear;
    -moz-animation :  explode .4s .0s linear;
    animation: explode .4s .0s linear;
    // transform : translateX(100px)!important;
    visibility: visible;    
  }
  
  .base-token-box-bg.explode:hover .base-token {
    z-index : 2!important;
  } 

`,f=p.a.div`
  position: absolute;
  transform : ${e=>`rotate(${-e.rotate}deg)`};
  width: 48px;
  height: 48px;
  display: inline-block;
  border-radius: 50%;
  .move {
    transform : translateX(100px) ${e=>`rotate(${e.rotate}deg) !important`};
  }
`,g=e=>{let{bTokens:t=[]}=e;const a=360/t.length;return Object(u.jsxs)(O,{className:"v3-tokens",children:[Object(u.jsx)("div",{className:"tokens",children:t.filter(((e,t)=>t<3)).map(((e,t)=>Object(u.jsx)("div",{className:"base-token-box-bg",children:Object(u.jsx)("div",{className:`base-token-bg ${e.bTokenSymbol}`})},t)))}),Object(u.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(u.jsxs)("div",{className:"base-token-bg",children:[t.length-3," +"]}),t.map(((e,t)=>{const s=a*t;return Object(u.jsx)(f,{className:"base-token",rotate:s,width:"100",children:Object(u.jsx)("div",{width:"100",rotate:s,className:`base-token-bg move ${e.bTokenSymbol}`})},t)}))]})]})}},1954:function(e,t,a){}}]);
//# sourceMappingURL=7.c1076b5d.chunk.js.map