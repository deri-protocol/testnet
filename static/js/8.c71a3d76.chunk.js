(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[8],{1245:function(e,t,a){"use strict";var s,i,l=a(37),n=a(200),c=a(55),o=a(7),r=a(51),d=a(6),b=(a(62),a(1331)),j=a(50),m=a(22),v=a(15),x=a(5),p=Object(j.a)(b.a)(s||(s=Object(r.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),u=j.a.div(i||(i=Object(r.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(x.jsx)("span",{className:"loading-line"})),a=Object(o.a)(t,2),s=a[0],i=a[1],r=Object(d.useState)(!0),b=Object(o.a)(r,2),j=b[0],h=b[1],O=function(){var t=e.allowZero;return"object"!==Object(c.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},f=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),s=e.defaultValue,c=void 0===s?"--":s,o=Object(n.a)(e,["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"]);if(O())o.decimalScale>0&&!t&&o.value&&/\d+\.0*[1-9]+/.test(o.value)&&0===+Object(v.bg)(o.value).toFixed(+o.decimalScale||2)&&(o.decimalScale=Object(m.d)(Math.abs(o.value))+2),-1===o.decimalScale&&delete o.decimalScale,o.value=Object(m.J)(o.value),o.value&&/\d+.9{6}/.test(o.value)&&(o.value=(+o.value).toFixed(5)),i(Object(x.jsx)(p,Object(l.a)(Object(l.a)({},o),{},{renderText:f,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(j){var r=e.width,d=e.height;i(Object(x.jsx)(u,{className:"loading-line",width:r,height:d})),a&&h(!1)}var b=window.setTimeout((function(){O()||i(c)}),6e4);return function(){clearTimeout(b)}}),[e.value,e.decimalScale,e.suffix]),s}},1582:function(e,t,a){"use strict";t.a=a.p+"static/media/staked.46571832.svg"},1812:function(e,t,a){},1892:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var s=a(6),i=a(53),l=a(1245),n=a(170),c=a(479),o=a(481),r=a(478),d=a(1582),b=a(482),j=a(99),m=a.n(j),v=a.p+"static/media/close.61c9d399.svg",x=(a(2145),a(50)),p=a(5);function u(e){let{lang:t,pool:a,wallet:j}=e;const x=Object(i.g)(),[u,h]=Object(s.useState)({}),[O,g]=Object(s.useState)(!1),[k,N]=Object(s.useState)(),[y,w]=Object(s.useState)(!0),S=e=>{e.target.src=b.default};Object(s.useEffect)((()=>{(async()=>{h({});let e=await a.getPoolInfo(j,a);h(e)})(),j.isConnected()&&((async()=>{let e=await a.getIsStaked(j,a);e&&g(e.isStaked)})(),(async()=>{if(a&&("v3"===a.version||"v3_lite"===a.version)){let e=await a.getVenusEarned(j,a.address);N(e)}})())}),[a,j.detail.account]),Object(s.useEffect)((()=>{let e=sessionStorage.getItem(a.address);null!==e&&e&&w(!1)}),[a]);const T=`/pool/${a.version||"v1"}/${a.chainId}/${a.type}/${a.address}`;return Object(p.jsxs)("div",{className:"card-box",children:[Object(p.jsxs)("div",{className:"v2_lite_open"===a.version?"card-list open-list":"card-list",onClick:()=>{(e=>{"v2_lite_open"!==a.version&&x.push(e)})(T)},children:[Object(p.jsxs)("div",{className:m()("card-header",{v3:a.isAllV3}),children:[Object(p.jsxs)("div",{className:"pool-network-type",children:[Object(p.jsx)("div",{className:"network-logo",children:Object(p.jsx)("img",{alt:"",src:(e=>{let t;return"56"===e||"97"===e?t=c.default:"137"===e?t=o.default:"1"===e&&(t=r.default),t})(a.chainId)})}),Object(p.jsxs)("div",{className:"pool-type-network-text",children:[Object(p.jsxs)("div",{className:"pool-type-text",children:["0xD2D950e338478eF7FeB092F840920B3482FcaC40"!==a.address&&Object(p.jsxs)(p.Fragment,{children:[t[a.type]," ",t[a.zone]]}),"0xD2D950e338478eF7FeB092F840920B3482FcaC40"===a.address&&Object(p.jsx)(p.Fragment,{children:t[a.zone]})]}),Object(p.jsx)("div",{className:"pool-network-text",children:a.chain.toUpperCase()})]})]}),Object(p.jsxs)("div",{className:"base-token-logo",children:[a.isLp&&Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"lp-base-token-bg",children:[Object(p.jsx)("div",{className:`base-token-bg ${a.bTokens[0].bTokenSymbol}`}),Object(p.jsx)("span",{className:"lp-con",children:"+"}),Object(p.jsx)("div",{className:`base-token-bg ${a.bTokens[1].bTokenSymbol}`})]})}),!a.isLp&&"v3"!==a.version&&"v3_lite"!==a.version&&Object(p.jsx)(p.Fragment,{children:a.bTokens.map(((e,t)=>Object(p.jsx)("div",{className:"base-token-box-bg",children:Object(p.jsx)("div",{className:`base-token-bg ${e.bTokenSymbol}`,children:"v2_lite_open"===a.version&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("img",{alt:"",onError:S,src:`https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/${e.bTokenSymbol}.png`})})})},t)))}),("v3"===a.version||"v3_lite"===a.version)&&Object(p.jsx)(f,{bTokens:a.bTokens})]})]}),Object(p.jsxs)("div",{className:"card-content",children:[Object(p.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==a.version&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"max-apy-title",children:"v2"===a.version||"v3_lite"===a.version||"v3"===a.version?t["max-apy"]:t.apy}),Object(p.jsx)("div",{className:"max-apy-num",children:Object(p.jsx)(l.a,{value:u.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(p.jsxs)("div",{className:"total-pool-liquidity",children:[Object(p.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(p.jsx)("div",{className:"total-liquidity-num",children:Object(p.jsx)(l.a,{value:u.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===a.type?7:0})})]}),Object(p.jsxs)("div",{className:"your-deri-epoch",children:[O&&Object(p.jsxs)("div",{className:"staked-box",children:[Object(p.jsx)("img",{src:d.a,alt:""}),t.staked]}),+k>0&&("v3"===a.version||"v3_lite"===a.version)&&Object(p.jsx)("span",{className:"xvs-collectable",children:Object(p.jsxs)("div",{className:"staked-box",children:[Object(p.jsx)(l.a,{width:"50px",value:k,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(p.jsx)("div",{className:"stake-button",children:Object(p.jsx)(n.a,{disabled:"v2_lite_open"===a.version,className:"button",outline:!0,label:"v2_lite_open"===a.version?t.operating:t.stake})})]})]}),"v3_lite"===a.version&&y&&Object(p.jsxs)("div",{className:"new-symbol",children:[Object(p.jsx)("div",{className:"new-symbol-text",children:"New Listing : APEUSDT GMTUSDT"}),Object(p.jsx)("div",{className:"close-symbol",children:Object(p.jsx)("img",{src:v,alt:"close",onClick:()=>{return e=a.address,sessionStorage.setItem(e,!1),void w(!1);var e}})})]})]})}const h=x.a.div`
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

`,O=x.a.div`
  position: absolute;
  transform : ${e=>`rotate(${-e.rotate}deg)`};
  width: 48px;
  height: 48px;
  display: inline-block;
  border-radius: 50%;
  .move {
    transform : translateX(100px) ${e=>`rotate(${e.rotate}deg) !important`};
  }
`,f=e=>{let{bTokens:t=[]}=e;const a=360/t.length;return Object(p.jsxs)(h,{className:"v3-tokens",children:[Object(p.jsx)("div",{className:"tokens",children:t.filter(((e,t)=>t<3)).map(((e,t)=>Object(p.jsx)("div",{className:"base-token-box-bg",children:Object(p.jsx)("div",{className:`base-token-bg ${e.bTokenSymbol}`})},t)))}),Object(p.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(p.jsxs)("div",{className:"base-token-bg",children:[t.length-3," +"]}),t.map(((e,t)=>{const s=a*t;return Object(p.jsx)(O,{className:"base-token",rotate:s,width:"100",children:Object(p.jsx)("div",{width:"100",rotate:s,className:`base-token-bg move ${e.bTokenSymbol}`})},t)}))]})]})}},2145:function(e,t,a){}}]);
//# sourceMappingURL=8.c71a3d76.chunk.js.map