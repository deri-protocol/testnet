(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[34],{1466:function(e,t,a){"use strict";var s,c,i=a(62),n=a(366),r=a(76),l=a(13),d=a(81),o=a(9),j=(a(93),a(1514)),b=a(65),h=a(23),x=a(19),u=a(6),v=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],p=Object(b.a)(j.a)(s||(s=Object(d.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),O=b.a.span(c||(c=Object(d.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(o.useState)(Object(u.jsx)("span",{className:"loading-line"})),a=Object(l.a)(t,2),s=a[0],c=a[1],d=Object(o.useState)(!0),j=Object(l.a)(d,2),b=j[0],m=j[1],f=function(){var t=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},w=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),s=e.defaultValue,r=void 0===s?"--":s,l=Object(n.a)(e,v);if(f())l.decimalScale>0&&l.value&&/\d+\.0*[1-9]+/.test(l.value)&&!t&&0===+Object(x.bg)(l.value).toFixed(+l.decimalScale||2)&&(l.decimalScale=Object(h.g)(Math.abs(l.value))+2),(-1===l.decimalScale||0===+l.value&&t)&&delete l.decimalScale,l.value=/e(\+|=)?/.test(l.value)?Object(h.P)(l.value):""+l.value,l.value&&/\d+.9{6}/.test(l.value)&&(l.value=(+l.value).toFixed(5)),c(Object(u.jsx)(p,Object(i.a)(Object(i.a)({},l),{},{renderText:w,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var d=e.width,o=e.height;c(Object(u.jsx)(O,{className:"loading-line",width:d,height:o})),a&&m(!1)}var j=window.setTimeout((function(){f()||c(r)}),r===l.value?0:6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),s}},2401:function(e,t,a){},2616:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a(13),i=a(0),n=a.n(i),r=a(9),l=a(66),d=a(1466),o=a(217),j=a(55),b=a(31),h=a(221),x=a(17),u=a(286),v=a.p+"static/media/pancake.e177218b.svg",p=(a.p,a.p+"static/media/uniswap.5495839a.svg"),O=a.p+"static/media/gateio.1570dd44.svg",m=a.p+"static/media/mxc.b59b5e73.svg",f=a.p+"static/media/governance.c99bf238.svg",w=a.p+"static/media/privilege.1beba9ef.svg",N=(a(2401),a(6));function g(e){var t=e.item,a=e.index,s=Object(r.useState)(!1),i=Object(c.a)(s,2),n=i[0],l=i[1];return Object(N.jsxs)("div",{className:"faq-info-box",children:[Object(N.jsxs)("div",{className:"faq-title-img",onClick:function(){l(!n)},children:[Object(N.jsx)("div",{className:"faq-question-title",children:t.label}),Object(N.jsx)("div",{children:Object(N.jsx)(b.a,{token:n?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),n&&Object(N.jsxs)("div",{className:"faq-des",children:[t.labelDes,t.link&&Object(N.jsxs)("a",{rel:"noreferrer",target:"_blank",href:t.link,children:[" ",t.linkLabel]})]})]},a)}t.default=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.wallet,a=void 0===t?{}:t,i=e.lang,l=Object(r.useState)(),k=Object(c.a)(l,2),_=k[0],S=k[1],E=Object(r.useState)(),y=Object(c.a)(E,2),A=y[0],T=y[1],C=Object(r.useState)(!1),R=Object(c.a)(C,2),D=R[0],P=R[1],I=Object(r.useState)(),L=Object(c.a)(I,2),q=L[0],U=L[1],F=Object(h.a)(),W=[{label:i["what-is-deri"],labelDes:i["what-is-deri-des"]},{label:i["is-deri-erc20-token"],labelDes:i["is-deri-erc20-token-des"]},{label:i["what-deri-token-total"],labelDes:i["what-deri-token-total-des"],link:"https://docs.deri.io/library/tokenomics",linkLabel:i.more}],H=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_){e.next=13;break}return"DERI",18,e.prev=3,e.next=6,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:_,symbol:"DERI",decimals:18}}});case 6:e.sent?console.log("Thanks for your interest!"):console.log("Your loss!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(s.a)(n.a.mark((function e(){var t,a,s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(Object({NODE_ENV:"development",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_WSS_URL:"wss://testnetapi.deri.io",REACT_APP_EXECUTOR_WSS_URL:"wss://executortestnet.deri.io",REACT_APP_HTTP_URL:"https://oracletestnet.deri.io",REACT_APP_KLINE_HTTP_URL:"https://klinetestnet.deri.io",REACT_APP_KLINE_WSS_URL:"wss://klinetestnet.deri.io",REACT_APP_REST_SERVER_URL:"https://testnetapi.deri.io",REACT_APP_SINGLE_DOMAIN:"on",REACT_APP_WSS_URL:"wss://oracletestnet.deri.io"}).REACT_APP_INFO_HTTP_URL,"/stats_for_token"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:(s=e.sent)&&((c={}).price=s.data.price,c.market_cap=s.data.market_cap,c.circulating_supply=parseInt(s.data.circulating_supply),c.total_supply=parseInt(s.data.total_supply),T(c));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(s.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getDeriBurnedAmount");case 2:t=e.sent,U(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()){e.next=6;break}return e.next=3,a.switchNetwork(F[42161]);case 3:window.open("https://app.uniswap.org/#/tokens/arbitrum/0x21E60EE73F17AC0A411ae5D690f908c3ED66Fe12"),e.next=7;break;case 6:window.open("https://app.uniswap.org/#/tokens/arbitrum/0x21E60EE73F17AC0A411ae5D690f908c3ED66Fe12");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()){e.next=6;break}return e.next=3,a.switchNetwork(F[56]);case 3:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5"),e.next=7;break;case 6:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e;a.isConnected()&&(56===+a.detail.chainId?e="0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5":1===+a.detail.chainId?e="0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9":128===+a.detail.chainId?e="0x2bdA3e331Cf735D9420e41567ab843441980C4B8":137===+a.detail.chainId?e="0x3d1d2afd191b165d140e3e8329e634665ffb0e5e":42161===+a.detail.chainId&&(e="0x21E60EE73F17AC0A411ae5D690f908c3ED66Fe12"),S(e))}),[a.detail]),Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){K()}),3e5),K(),$(),function(){e&&clearInterval(e)}}),[]),Object(N.jsx)("div",{className:"token-box",children:Object(N.jsxs)("div",{className:"token-info",children:[Object(N.jsxs)("div",{className:"token-header",children:[Object(N.jsxs)("div",{className:"token-header-left",children:[Object(N.jsxs)("div",{className:"logo-title",children:[Object(N.jsx)("img",{alt:"",src:u.default}),Object(N.jsx)("span",{className:"title-text",children:i.title})]}),Object(N.jsxs)("div",{className:"token-header-des",children:[i["deri-is-the-protocol-token"],Object(N.jsxs)("a",{rel:"noopener noreferrer",href:"https://docs.deri.io/tokenomics",target:"_blank",className:"learn-more",children:[" ",i["learn-more"]," "]})]})]}),Object(N.jsx)("div",{className:"token-header-right",children:Object(N.jsx)(o.a,{onClick:function(){H()},type:x.C,width:"242",label:i["add-deri-to-metamask"]})})]}),Object(N.jsxs)("div",{className:"token-info-content",children:[Object(N.jsxs)("div",{className:"top-info-box",children:[Object(N.jsxs)("div",{className:"info-box",children:[Object(N.jsxs)("div",{className:"num",children:["$ ",A?Object(N.jsx)(d.a,{value:A.price,displayType:"text",thousandSeparator:!0,decimalScale:4}):"--"]}),Object(N.jsx)("div",{className:"text",children:i.price})]}),Object(N.jsxs)("div",{className:"info-box min-box",children:[Object(N.jsxs)("div",{className:"num",children:["$ ",A?Object(N.jsx)(d.a,{value:A.market_cap,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"]}),Object(N.jsx)("div",{className:"text",children:i["market-cap"]})]})]}),Object(N.jsxs)("div",{className:"buttom-info-box",children:[Object(N.jsxs)("div",{className:"info-box",children:[Object(N.jsx)("div",{className:"num",children:A?Object(N.jsx)(d.a,{value:A.circulating_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(N.jsx)("div",{className:"text",children:i["circulating-supply"]})]}),Object(N.jsxs)("div",{className:"info-box min-box",children:[Object(N.jsx)("div",{className:"num",children:A?Object(N.jsx)(d.a,{value:A.total_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(N.jsx)("div",{className:"text",children:i["total-supply"]})]})]})]}),Object(N.jsx)("div",{className:"buy-deri-token",children:i["token-burning"]}),Object(N.jsxs)("div",{className:"token-info-content token-burning-content",children:[Object(N.jsx)("div",{className:"top-info-box  token-burning",children:Object(N.jsxs)("div",{className:"info-box",children:[Object(N.jsx)("div",{className:"num",children:"4,357,036"}),Object(N.jsx)("div",{className:"text",children:i["burned-to-mining-vault"]})]})}),Object(N.jsx)("div",{className:"buttom-info-box  token-burning",children:Object(N.jsxs)("div",{className:"info-box",children:[Object(N.jsxs)("div",{className:"num",children:[Object(N.jsx)(d.a,{value:q,displayType:"text",thousandSeparator:!0,decimalScale:0}),"  ",Object(N.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://etherscan.io/token/0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9?a=0x000000000000000000000000000000000000dead",children:[" ",Object(N.jsx)(b.a,{token:"target"})]})]}),Object(N.jsx)("div",{className:"text",children:i["burned-to-deadlock-address"]})]})})]}),Object(N.jsx)("div",{className:"buy-deri-token",children:i["buy-deri-token"]}),Object(N.jsxs)("div",{className:"buy-deri-token-swap",children:[Object(N.jsx)("a",{target:"_blank",onClick:V,children:Object(N.jsxs)("div",{className:"swap-box",children:[Object(N.jsx)("div",{className:"swap-logo",children:Object(N.jsx)("img",{alt:"",src:v})}),Object(N.jsx)("div",{className:"swap-name",children:i["pancake-swap"]})]})}),Object(N.jsx)("a",{target:"_blank",onClick:B,children:Object(N.jsxs)("div",{className:"swap-box",children:[Object(N.jsx)("div",{className:"swap-logo",children:Object(N.jsx)("img",{alt:"",src:p})}),Object(N.jsx)("div",{className:"swap-name",children:i["uni-swap"]})]})}),Object(N.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.gate.io/tradepro/DERI_USDT",children:Object(N.jsxs)("div",{className:"swap-box",children:[Object(N.jsx)("div",{className:"swap-logo",children:Object(N.jsx)("img",{alt:"",src:O})}),Object(N.jsx)("div",{className:"swap-name",children:i.gate})]})}),Object(N.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.mexc.com/exchange/DERI_USDT",children:Object(N.jsxs)("div",{className:"swap-box",children:[Object(N.jsx)("div",{className:"swap-logo",children:Object(N.jsx)("img",{alt:"",src:m})}),Object(N.jsx)("div",{className:"swap-name",children:i.mexc})]})})]}),Object(N.jsxs)("div",{className:"benefits-faq-box",children:[Object(N.jsxs)("div",{className:"benefits-box",children:[Object(N.jsx)("div",{className:"benefits-title",children:i["benefits-of-deri-token"]}),Object(N.jsxs)("div",{className:"benefits-info",children:[Object(N.jsxs)("div",{className:"governance",children:[Object(N.jsx)("img",{src:f,alt:""}),Object(N.jsxs)("div",{className:"governance-des",children:[Object(N.jsx)("div",{className:"governance-title",children:i.governance}),Object(N.jsx)("div",{className:"governance-text",children:i["governance-des"]})]})]}),Object(N.jsxs)("div",{className:"privilege",children:[Object(N.jsx)("img",{src:w,alt:""}),Object(N.jsxs)("div",{className:"privilege-des",children:[Object(N.jsx)("div",{className:"privilege-title",children:i.privilege}),Object(N.jsx)("div",{className:"privilege-text",children:i["privilege-des"]})]})]})]})]}),Object(N.jsxs)("div",{className:"faq-box",children:[Object(N.jsx)("div",{className:"faq-title",children:i.faq}),Object(N.jsxs)("div",{className:"faq-info",children:[W.map((function(e,t){return Object(N.jsx)(g,{item:e,index:t})})),Object(N.jsxs)("div",{className:"faq-info-box",children:[Object(N.jsxs)("div",{className:"faq-title-img",onClick:function(){P(!D)},children:[Object(N.jsx)("div",{className:"faq-question-title",children:i["what-are-the"]}),Object(N.jsx)("div",{children:Object(N.jsx)(b.a,{token:D?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),D&&Object(N.jsxs)("div",{className:"faq-des",children:[Object(N.jsx)("div",{className:"governance-privilege",children:i.governance}),Object(N.jsx)("div",{children:i["what-are-the-govenance-des"]}),Object(N.jsx)("div",{className:"governance-privilege privilege",children:i.privilege}),Object(N.jsx)("div",{children:i["what-are-the-privilege-des-one"]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("br",{}),i["what-are-the-privilege-des-two"]]}),Object(N.jsx)("div",{className:"specifically",children:i["what-are-the-privilege-des-three"]}),Object(N.jsxs)("div",{className:"specifically-des",children:[Object(N.jsx)("div",{className:"list-style"}),Object(N.jsx)("div",{children:i["what-are-the-privilege-des-three-des-one"]})]}),Object(N.jsxs)("div",{className:"specifically-des",children:[Object(N.jsx)("div",{className:"list-style"}),Object(N.jsx)("div",{children:i["what-are-the-privilege-des-three-des-two"]})]}),Object(N.jsx)("div",{className:"specifically",children:i["what-are-the-privilege-des-four"]})]})]})]})]})]})]})})})))}}]);
//# sourceMappingURL=34.a0b1763a.chunk.js.map