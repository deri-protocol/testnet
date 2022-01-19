(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[14],{1198:function(t,e,a){},1218:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return x}));var n=a(5),c=a(10),i=a(39),o=a(89),r=(a(810),a(914)),s=a(918),l=(a(920),a(1198),a(921)),u=a(29),d=a(791),j=a(1199),f=a.n(j),O=a(926),b=a(9),p="".concat(Object({NODE_ENV:"development",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HTTP_URL:"https://oracle2.deri.finance",REACT_APP_REST_SERVER_URL:"https://testnetapi.deri.finance",REACT_APP_SINGLE_DOMAIN:"on",REACT_APP_WSS_URL:"wss://oracle2.deri.finance"}).REACT_APP_INFO_HTTP_URL),h=[{title:"DIRECTION",dataIndex:"direction",key:"direction",width:"14%",render:function(t){return Object(b.jsx)("span",{className:"direction ".concat(t),children:t.toUpperCase()})}},{title:"ACCOUNT",dataIndex:"account",key:"account",width:"14%",render:function(t){return t?Object(u.h)(t):""}},{title:"SYMBOL",dataIndex:"symbol",key:"symbol",width:"14%"},{title:"PRICE",dataIndex:"price",key:"price",width:"14%",render:function(t){return Object(b.jsx)(d.a,{value:t,decimalScale:5})}},{title:"VOLUME",dataIndex:"volume",key:"volume",width:"14%"},{title:"NOTIONAL",dataIndex:"notional",key:"notional",width:"14%",render:function(t,e){return Object(b.jsx)(d.a,{value:t,prefix:"$",decimalScale:5})}},{title:"TIMESTAMP (UTC)",dataIndex:"timestamp",key:"timestamp",width:"14%",render:function(t){return f()(new Date(1e3*t)).utc().format("YYYY-MM-DD HH:mm:ss")}}],m=[{title:"ACTION",dataIndex:"action",key:"action",width:"20%",render:function(t){return Object(b.jsx)("span",{className:"action ".concat(t),children:t.toUpperCase()})}},{title:"ACCOUNT",dataIndex:"account",key:"account",width:"20%",render:function(t){return t?Object(u.h)(t):""}},{title:"LIQUIDITY",dataIndex:"notional",key:"notional",width:"20%",render:function(t,e){return"MAX_VALUE"===e.amount?e.amount:Object(b.jsx)(d.a,{value:t,prefix:"$",decimalScale:5})}},{title:"AMOUNT",dataIndex:"amount",key:"amount",width:"20%",render:function(t,e){return"MAX_VALUE"===e.amount?e.amount:Object(b.jsx)(d.a,{value:t,suffix:" ".concat(e.bToken),decimalScale:5})}},{title:"TIMESTAMP (UTC)",dataIndex:"timestamp",key:"timestamp",width:"20%",render:function(t){return f()(new Date(1e3*t)).utc().format("YYYY-MM-DD HH:mm:ss")}}];function x(){var t=Object(i.i)(),e=t.network,a=t.add,d=t.catalog,j=t.bToken,f=/(\w+\|)+/.test(j)?"MULTIPLE TOKEN":j,x=Object(c.useState)("".concat(Object({NODE_ENV:"development",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HTTP_URL:"https://oracle2.deri.finance",REACT_APP_REST_SERVER_URL:"https://testnetapi.deri.finance",REACT_APP_SINGLE_DOMAIN:"on",REACT_APP_WSS_URL:"wss://oracle2.deri.finance"}).REACT_APP_INFO_HTTP_URL,"/get_trade_history?pool=").concat(a)),v=Object(n.a)(x,2),g=v[0],S=v[1],_="".concat(p,"/get_liquidity?pool=").concat(a),T="".concat(p,"/get_trade?pool=").concat(a);return Object(b.jsxs)("div",{className:"info-main info-detail",children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)(o.b,{to:"/info",children:"Deri Overview"})," > ","".concat(e," - ").concat(d.toUpperCase()," - ").concat(Object(u.h)(a)," (").concat(f,")")]}),Object(b.jsxs)("div",{className:"charts",children:[Object(b.jsx)("div",{className:"graph tvl",children:Object(b.jsx)(s.a,{title:"TVL",url:"".concat(Object({NODE_ENV:"development",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HTTP_URL:"https://oracle2.deri.finance",REACT_APP_REST_SERVER_URL:"https://testnetapi.deri.finance",REACT_APP_SINGLE_DOMAIN:"on",REACT_APP_WSS_URL:"wss://oracle2.deri.finance"}).REACT_APP_INFO_HTTP_URL,"/get_liquidity_history?pool=").concat(a)})}),Object(b.jsxs)("div",{className:"graph volume24",children:[Object(b.jsx)(O.a,{url:g,onChange:function(t){return S(t)}}),Object(b.jsx)(r.a,{title:"Volume 24H",url:g,cycle:["WEEKLY","MONTHLY"],defaultCycle:"MONTHLY"})]})]}),Object(b.jsxs)("div",{className:"list-by-chain",children:[Object(b.jsx)(l.a,{title:"LIQUIDITY",columns:m,url:_,pagination:!0}),Object(b.jsx)(l.a,{title:"TRADE",columns:h,url:T,pagination:!0})]})]})}},791:function(t,e,a){"use strict";var n,c,i=a(20),o=a(107),r=a(53),s=a(5),l=a(49),u=a(10),d=(a(77),a(814)),j=a(48),f=a(29),O=a(14),b=a(9),p=Object(j.a)(d.a)(n||(n=Object(l.a)(["\n  width : ","px;\n"])),(function(t){return t.width})),h=j.a.div(c||(c=Object(l.a)(["\n  width : ",";\n  height : ",";\n"])),(function(t){return/px$/.test(t.width)?t.width:"".concat(t.width,"px")}),(function(t){return/px$/.test(t.height)?t.height:"".concat(t.height,"px")}));e.a=function(t){var e=Object(u.useState)(Object(b.jsx)("span",{className:"loading-line"})),a=Object(s.a)(e,2),n=a[0],c=a[1],l=Object(u.useState)(!0),d=Object(s.a)(l,2),j=d[0],m=d[1],x=function(){var e=t.allowZero;return"object"!==Object(r.a)(t.value)&&void 0!==t.value&&""!==t.value&&!isNaN(t.value)&&"NaN"!==t.value||0===Math.abs(t.value)&&!0===e};return Object(u.useEffect)((function(){var e=t.allowZero,a=(t.wallet,t.closeShowLoadingEffectAfterLoaded),n=t.defaultValue,r=void 0===n?"--":n,s=Object(o.a)(t,["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"]);if(x())!e&&s.value&&/\d+\.0*[1-9]+/.test(s.value)&&0===+Object(O.bg)(s.value).toFixed(+s.decimalScale||2)&&(s.decimalScale=Object(f.c)(Math.abs(s.value))+1),s.value=Object(f.E)(s.value),s.value&&/\d+.9{6}/.test(s.value)&&(s.value=(+s.value).toFixed(5)),c(Object(b.jsx)(p,Object(i.a)(Object(i.a)({},s),{},{displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(j){var l=t.width,u=t.height;c(Object(b.jsx)(h,{className:"loading-line",width:l,height:u})),a&&m(!1)}var d=window.setTimeout((function(){x()||c(r)}),6e4);return function(){clearTimeout(d)}}),[t.value,t.decimalScale,t.suffix]),n}},811:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n,c=a(5),i=a(49),o=a(10),r=a(208),s=a(48),l=a(9),u=s.a.div(n||(n=Object(i.a)(["\n    display : flex;\n    width: 100%;\n    justify-content: space-between;\n  "])));function d(t){var e=t.groups,a=void 0===e?["25%","50%","75%","100%"]:e,n=t.selectedBorderColor,i=t.defaultBorderColor,s=t.onChange,d=t.defaultValue,j=t.outline,f=t.outlineColor,O=t.width,b=t.height,p=t.bgColor,h=t.className,m=Object(o.useState)(d),x=Object(c.a)(m,2),v=x[0],g=x[1];return Object(o.useEffect)((function(){g(d)}),[d]),Object(l.jsx)(u,{className:h,children:a.map((function(t,e){return Object(l.jsx)(r.a,{label:t,selectedBorderColor:n,isSelected:t===v,disabled:!1,outline:j,bgColor:p,className:"g-button",defaultBorderColor:i,outlineColor:f,width:O,height:b,onClick:function(){var e;(e=t)!==v?(g(e),s&&s(e)):e===v?(g(""),s&&s("")):g(e)}},e)}))})}},850:function(t,e,a){"use strict";var n,c=a(49),i=a(29),o=a(836),r=a(48),s=a(9),l=r.a.div(n||(n=Object(c.a)(["\n&.custom-tooltip {\n  padding: 0 0 0 10px;\n  color: #E0ECFF;\n  z-index: 2;\n  .tip-title {\n    font-size: 16px;\n    color: #E0ECFF;\n  }\n  .value {\n    font-size: 32px;\n    font-weight : 700;\n    font-family : Barlow;\n  }\n  .date {\n    margin-top: 4px;\n    margin-left: 4px;\n    font-size: 14px;\n    height: 14px;\n  }\n}\n"])));e.a=function(t){var e=t.title,a=t.active,n=t.payload,c=(t.label,t.lastItem);return a&&n&&n.length?Object(s.jsxs)(l,{className:"custom-tooltip",children:[Object(s.jsx)("div",{className:"tip-title",children:e}),Object(s.jsx)("div",{className:"value",children:Object(i.b)(n[0].payload.value)}),Object(s.jsx)("div",{className:"date",children:"".concat(Object(o.a)(new Date(1e3*n[0].payload.time),"yyyy-mm-dd"),"(UTC)")})]}):e&&c.value?Object(s.jsxs)(l,{className:"custom-tooltip",children:[Object(s.jsx)("div",{className:"tip-title",children:e}),Object(s.jsx)("div",{className:"value",children:Object(i.b)(c.value)}),Object(s.jsx)("div",{className:"date",children:"".concat(Object(o.a)(new Date(1e3*c.timestamp),"yyyy-mm-dd"),"(UTC)")})]}):null}},914:function(t,e,a){"use strict";a.d(e,"a",(function(){return g}));var n=a(0),c=a.n(n),i=a(2),o=a(5),r=a(10),s=a(810),l=a.n(s),u=a(1193),d=a(1194),j=a(1195),f=a(851),O=a(852),b=a(1210),p=a(933),h=a(836),m=a(850),x=a(29),v=(a(208),a(811),a(9));function g(t){var e=t.url,a=t.title,n=Object(r.useState)(null),s=Object(o.a)(n,2),g=s[0],S=s[1],_=Object(r.useState)({}),T=Object(o.a)(_,2),y=T[0],C=T[1],E=Object(r.useState)({}),w=Object(o.a)(E,2),A=w[0],N=w[1],R=Object(r.useState)({}),P=Object(o.a)(R,2),L=P[0],k=P[1],I=function(){var t=Object(i.a)(c.a.mark((function t(e){var a,n,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(e);case 2:a=t.sent,n=[],200===a.status&&Array.isArray(a.data.data)&&(n=a.data.data.sort((function(t,e){return t.timestamp>e.timestamp?1:t.timestamp<e.timestamp?-1:0}))).length>0&&(i=a.data.last_24h?a.data.last_24h:n[n.length-1].value,C({timestamp:n[n.length-1].timestamp,value:i})),S(n.map((function(t){return{time:t.timestamp,value:Number(t.value)}})));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){var t=document.querySelector(".graph").getBoundingClientRect();N(t),I(e)}),[e]);var D=Object(x.t)()?3:2;return g?Object(v.jsx)(u.a,{height:300,children:Object(v.jsxs)(d.a,{height:300,width:A.width,data:g,children:[Object(v.jsx)("defs",{children:Object(v.jsxs)("linearGradient",{id:"colorArea",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(v.jsx)("stop",{offset:"5%",stopColor:"#3756CD",stopOpacity:.85}),Object(v.jsx)("stop",{offset:"95%",stopColor:"#3756CD",stopOpacity:0})]})}),Object(v.jsx)(j.a,{vertical:!1,strokeDasharray:"9",stroke:"#203B60"}),Object(v.jsx)(f.a,{dataKey:"time",axisLine:!1,tickLine:!1,tick:{fill:"#fff",fontSize:"14"},padding:{left:12,right:12},tickFormatter:function(t){return t&&"auto"!==t?Object(h.a)(new Date(1e3*t),"mm-dd"):""},interval:D}),Object(v.jsx)(O.a,{dataKey:"value",axisLine:!1,tickLine:!1,tickFormatter:x.d,tick:{fill:"#fff",fontSize:"14"},padding:{top:25}}),Object(v.jsx)(b.a,{position:{x:16,y:-106},cursor:{y:L.y-10,height:L.height+10,stroke:"#fff",fill:"#3756CD",strokeWidth:0,fillOpacity:.5},content:Object(v.jsx)(m.a,{title:a,lastItem:y})}),Object(v.jsx)(p.a,{type:"monotone",dataKey:"value",fill:"#3756CD",radius:[10,10,0,0],fillOpacity:.9,onMouseOver:function(t){k(t)}})]})}):null}},918:function(t,e,a){"use strict";a.d(e,"a",(function(){return g}));var n=a(0),c=a.n(n),i=a(2),o=a(5),r=a(10),s=a(810),l=a.n(s),u=a(1193),d=a(1196),j=a(1195),f=a(851),O=a(852),b=a(1210),p=a(919),h=a(836),m=a(850),x=a(29),v=a(9);function g(t){var e=t.url,a=t.title,n=Object(r.useState)(null),s=Object(o.a)(n,2),g=s[0],S=s[1],_=Object(r.useState)({}),T=Object(o.a)(_,2),y=T[0],C=T[1],E=Object(r.useState)({}),w=Object(o.a)(E,2),A=w[0],N=w[1],R=function(){var t=Object(i.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(e);case 2:a=t.sent,n=[],200===a.status&&Array.isArray(a.data.data)&&(n=a.data.data.sort((function(t,e){return t.timestamp>e.timestamp?1:t.timestamp<e.timestamp?-1:0}))).length>0&&C(n[n.length-1]),S(n.map((function(t){return{time:t.timestamp,value:Number(t.value)}})));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){var t=document.querySelector(".graph").getBoundingClientRect();N(t),R()}),[]),g?Object(v.jsx)(u.a,{height:300,children:Object(v.jsxs)(d.a,{width:A.width,data:g,children:[Object(v.jsx)("defs",{children:Object(v.jsxs)("linearGradient",{id:"colorArea",x1:"0",y1:"1",x2:"0",y2:"0",children:[Object(v.jsx)("stop",{offset:"10%",stopColor:"#2772F0",stopOpacity:.1}),Object(v.jsx)("stop",{offset:"90%",stopColor:"#2772f0",stopOpacity:.3})]})}),Object(v.jsx)(j.a,{vertical:!1,strokeDasharray:"9",stroke:"#203B60"}),Object(v.jsx)(f.a,{dataKey:"time",axisLine:!1,tickLine:!1,tick:{fill:"#fff",fontSize:"14"},padding:{left:12,right:14},allowDataOverflow:!1,tickFormatter:function(t){return t&&"auto"!==t?Object(h.a)(new Date(1e3*t),"mm-dd"):""}}),Object(v.jsx)(O.a,{dataKey:"value",tickLine:!1,axisLine:!1,tickFormatter:x.d,tick:{fill:"#fff",fontSize:"14"},padding:{top:65}}),Object(v.jsx)(b.a,{position:{x:16,y:-106},cursor:!1,content:Object(v.jsx)(m.a,{title:a,lastItem:y})}),Object(v.jsx)(p.a,{type:"monotone",dataKey:"value",stroke:"#3756CD",fillOpacity:.5,strokeWidth:3,fill:"url(#colorArea)"})]})}):null}},920:function(t,e,a){},921:function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var n=a(0),c=a.n(n),i=a(2),o=a(5),r=a(10),s=a(930),l=a(929),u=a(931),d=(a(922),a(923)),j=a.n(d),f=a(810),O=a.n(f),b=(a(924),a(925),a(38)),p=a(9);function h(t){var e=t.title,a=t.columns,n=t.initialData,l=void 0===n?[]:n,u=t.url,d=t.pagination,j=Object(r.useState)(l),f=Object(o.a)(j,2),b=f[0],h=f[1],x=Object(r.useState)(1),v=Object(o.a)(x,2),g=v[0],S=v[1],_=Object(r.useState)(),T=Object(o.a)(_,2),y=T[0],C=T[1],E=Object(r.useState)(10),w=Object(o.a)(E,2),A=w[0],N=w[1],R=function(){var t=Object(i.a)(c.a.mark((function t(e,a){var n,i,o,r=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>2&&void 0!==r[2]?r[2]:A,i=e,d&&(i="".concat(i,"&page=").concat(a,"&page_amount=").concat(n)),t.next=5,O.a.get(i);case 5:200===(o=t.sent).status&&Array.isArray(o.data.data)&&(C(o.data.count),h(o.data.data),S(a));case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),P=function(t){R(u,t)};return Object(r.useEffect)((function(){u&&R(u,1)}),[u]),Object(p.jsxs)("div",{className:"table",children:[Object(p.jsx)("div",{className:"t-title",children:e}),Object(p.jsx)(s.a,{data:b,columns:a,footer:function(){return d&&Object(p.jsx)(m,{page:g,count:y,pageSize:A,onPage:P,onShowSizeChange:function(t,e){return function(t,e){N(e),R(u,t,e)}(t,e)}})}})]})}function m(t){var e=t.page,a=t.count,n=t.onPage,c=t.pageSize,i=t.onShowSizeChange;return Object(p.jsx)("div",{className:"pagination",children:Object(p.jsx)(u.a,{selectComponentClass:l.a,onChange:n,current:e,total:a,pageSize:c,prevIcon:function(){return Object(p.jsx)(b.a,{token:"arrow-left"})},nextIcon:function(){return Object(p.jsx)(b.a,{token:"arrow-right"})},showSizeChanger:!0,onShowSizeChange:i,locale:j.a,pageSizeOptions:["10","20","30","50"]})})}},924:function(t,e,a){},926:function(t,e,a){"use strict";var n,c=a(49),i=a(811),o=a(48),r=a(29),s=a(9),l=o.a.div(n||(n=Object(c.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 70px;\n  margin-right: 32px;\n  .filter{\n    justify-content: flex-end;\n    .g-button {\n      margin-left: 8px ;\n    }\n  }\n"])));e.a=function(t){var e=t.url,a=t.onChange,n=Object(r.t)()?64:96;return Object(s.jsx)(l,{children:Object(s.jsx)(i.a,{groups:["WEEKLY","MONTHLY"],selectedBorderColor:"rgba(205, 122, 55)",defaultValue:"MONTHLY",defaultBorderColor:"rgba(85, 119, 253, 0.1)",bgColor:"rgba(85, 119, 253, 0.1)",className:"filter",width:n,height:"32",onChange:function(t){var n=new URL(e),c=n.searchParams;c.has("cycle")&&c.delete("cycle"),c.append("cycle",t),a(n.toString())},outline:!0,outlineColor:"rgba(205, 122, 55, 0.5)"})})}}}]);
//# sourceMappingURL=14.30877bd2.chunk.js.map