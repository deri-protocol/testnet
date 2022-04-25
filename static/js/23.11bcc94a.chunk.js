(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[23],{1065:function(e,t,a){"use strict";var c=a(5),i=(a(57),a(1148)),s=a(44),n=a(15),r=a(9),l=a(4);const d=Object(s.a)(i.a)`
  width : ${e=>e.width}px;
`,o=s.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;t.a=function(e){const[t,a]=Object(c.useState)(Object(l.jsx)("span",{className:"loading-line"})),[i,s]=Object(c.useState)(!0),u=()=>{const{allowZero:t}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},j=e=>e&&e.replace(/\.$/,"");return Object(c.useEffect)((()=>{const{allowZero:t,wallet:c,closeShowLoadingEffectAfterLoaded:b,defaultValue:h="--",...v}=e;if(u())v.decimalScale>0&&!t&&v.value&&/\d+\.0*[1-9]+/.test(v.value)&&0===+Object(r.bg)(v.value).toFixed(+v.decimalScale||2)&&(v.decimalScale=Object(n.d)(Math.abs(v.value))+2),-1===v.decimalScale&&delete v.decimalScale,v.value=Object(n.J)(v.value),v.value&&/\d+.9{6}/.test(v.value)&&(v.value=(+v.value).toFixed(5)),a(Object(l.jsx)(d,{...v,renderText:j,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(i){const{width:t,height:c}=e;a(Object(l.jsx)(o,{className:"loading-line",width:t,height:c})),b&&s(!1)}const f=window.setTimeout((()=>{u()||a(h)}),6e4);return()=>{clearTimeout(f)}}),[e.value,e.decimalScale,e.suffix]),t}},1987:function(e,t,a){},2172:function(e,t,a){"use strict";a.r(t);var c=a(7),i=a(16),s=a(1),n=a.n(s),r=a(5),l=a(40),d=a(15),o=a(144),u=a(1065),j=a(143),b=a(30),h=a.p+"static/media/time.0b0bfc0e.svg",v=(a(1987),a(4));t.default=Object(l.b)("wallet","poolManager")(Object(l.c)((function(e){var t=e.lang,a=e.wallet,s=void 0===a?{}:a,l=(e.type,Object(r.useState)(0)),f=Object(i.a)(l,2),p=f[0],x=f[1],O=Object(r.useState)(!0),m=Object(i.a)(O,2),w=m[0],g=m[1],N=Object(o.c)(),S=Object(r.useState)({}),k=Object(i.a)(S,2),T=k[0],$=k[1],y=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.isConnected()){e.next=5;break}return e.next=3,b.a.request("getDeriBalance",[s.detail.chainId,s.detail.account]);case 3:t=e.sent,x(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.isConnected()){e.next=10;break}return e.next=3,b.a.request("getUserInfoAllForAirDrop",[s.detail.account]);case 3:t=e.sent,a=1e3*t.deadline,$(t),g(!t.valid),(c=new Date).getTime()>=a&&g(!0),c.getTime()>=1647e9&&g(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T.valid){e.next=3;break}return N.error(t["no-deri-to-claim"]),e.abrupt("return");case 3:if(Object(d.f)(s.detail.chainId,T.chainId)){e.next=6;break}return N.error(t["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 6:return e.next=8,b.a.request("mintAirdrop",[T.chainId,s.detail.account],{includeResponse:!0});case 8:(a=e.sent).success||N.error(t["claim-failed"]),a.success&&g(!0),y();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){y(),C()}),[s,s.detail]),Object(v.jsx)("div",{className:"airdrop-box",children:Object(v.jsx)("div",{className:"airdrop-info",children:Object(v.jsxs)("div",{className:"airdrop-info-box",children:[Object(v.jsx)("div",{className:"airdrop-title",children:t.title}),Object(v.jsxs)("div",{className:"wallet-address",children:[Object(v.jsx)("span",{className:"blue-logo"}),Object(d.i)(s.detail.account)]}),Object(v.jsxs)("div",{className:"wallet-balance",children:[t["wallet-balance"]," : ",Object(v.jsx)(u.a,{value:p,decimalScale:0,thousandSeparator:!0})," DERI"]}),Object(v.jsxs)("div",{className:"airdrop-time",children:[Object(v.jsx)("div",{className:"time-logo",children:Object(v.jsx)("img",{src:h,alt:""})}),Object(v.jsxs)("div",{className:"time-text",children:[Object(v.jsxs)("div",{className:"time-title",children:[Object(v.jsx)("div",{children:t["start-time"]}),Object(v.jsx)("div",{children:t["expire-time"]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"2022-03-09 10:00:00 UTC"}),Object(v.jsx)("div",{children:"2022-03-11 12:00:00 UTC"})]})]})]}),Object(v.jsx)("div",{className:"claim",children:Object(v.jsx)(j.a,{fontWeight:"bold",disabled:w,label:t.claim,width:"277",height:"72",fontSize:"32",onClick:I})})]})})})})))}}]);
//# sourceMappingURL=23.11bcc94a.chunk.js.map