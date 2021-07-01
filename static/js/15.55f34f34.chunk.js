(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[15],{624:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),c=n.n(a),r=n(1),s=n(19),i=n(7),o=n(60);function l(e){var t=e.btnText,n=e.className,a=e.disabled,l=e.click,b=e.afterClick,p=e.checkApprove,u=e.wallet,d=e.spec,j=e.lang,A=Object(i.useState)(a?"disabled":"enabled"),f=Object(s.a)(A,2),O=f[0],x=f[1],v=Object(i.useState)(!0),h=Object(s.a)(v,2),m=h[0],y=h[1],w=Object(i.useState)(!1),k=Object(s.a)(w,2),g=k[0],S=k[1],N=Object(i.useRef)(null),I=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"===O){e.next=2;break}return e.abrupt("return");case 2:return T(),e.next=5,l();case 5:e.sent&&b&&b(),C();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){x("disabled"),S(!0),N.current&&(N.current.style.display="inline-block")},C=function(){N.current&&(N.current.style.display="none"),x("enabled"),S(!1)},V=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(p&&u&&u.detail.account)){e.next=5;break}return e.next=3,u.isApproved(d.pool,d.bTokenId);case 3:t=e.sent,y(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(),e.next=3,u.approve(d.pool,d.bTokenId);case 3:e.sent.success?y(!0):(y(!1),alert(j["approve-failed"])),C();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){return V(),function(){}}),[u,d,p]),Object(o.jsxs)("button",{className:n,onClick:function(){m?I():Y()},children:[Object(o.jsx)("span",{className:"btn-loading-wrap",children:Object(o.jsx)("span",{ref:N,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),g?j.pending:m?t:j.approve]})}},625:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(28),c=n(178),r=n(19),s=n(7),i=n(626),o=n(60);function l(e){var t=Object(s.useState)("--"),n=Object(r.a)(t,2),l=n[0],b=n[1];return Object(s.useEffect)((function(){var t=e.allowZero,n=Object(c.a)(e,["allowZero"]);return(void 0!==e.value&&""!==e.value&&"NaN"!==e.value||0===(isNaN(e.value)&&Math.abs(e.value))&&!0===t)&&b(Object(o.jsx)(i.a,Object(a.a)(Object(a.a)({},n),{},{displayType:"text"}))),function(){}}),[e.value]),l}},649:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),c=n.n(a),r=n(1),s=n(19),i=n(7),o=n(26),l=n(177),b=n(46),p=o.DeriEnv.get(),u=l[p].chainInfo;function d(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],l=Object(i.useState)([]),d=Object(s.a)(l,2),j=d[0],A=d[1],f=Object(i.useState)([]),O=Object(s.a)(f,2),x=O[0],v=O[1],h=Object(i.useState)([]),m=Object(s.a)(h,2),y=m[0],w=m[1];return Object(i.useEffect)((function(){var e=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool,t.bTokenId);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool,t.bTokenId);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:return a=e.t1,r=t.pool||"",e.abrupt("return",Object.assign(t,{network:u[t.chainId].name,liquidity:n.liquidity,apy:(100*+a.apy).toFixed(2),pool:Object(b.c)(r),address:r,type:"perpetual",buttonText:"STAKING"}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=Object(o.getContractAddressConfig)(p,"v2");Object(o.getContractAddressConfig)(p,"v1");t=(t=t.reduce((function(e,t){var n=e.findIndex((function(e){return e.bTokenSymbol===t.bTokenSymbol&&t.version===e.version}));return"v2"===t.version&&n>-1&&-1===e[n].symbol.indexOf(t.symbol)?e[n].symbol+=",".concat(t.symbol):e.push(t),e}),[])).map(e);var n=Object(o.getLpContractAddressConfig)(p).map(function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a,r,s,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.getPoolLiquidity)(t.chainId,t.pool);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return n=e.t0,e.next=8,Object(o.getPoolInfoApy)(t.chainId,t.pool);case 8:if(e.t1=e.sent,e.t1){e.next=11;break}e.t1={};case 11:if(a=e.t1,r=t.pool||"",!Object(b.h)(t.pool)){e.next=18;break}return e.next=16,Object(o.getLpPoolInfoApy)(t.chainId,t.pool);case 16:l=e.sent,s=(100*+l.apy2).toFixed(2);case 18:return Object(b.i)(t.pool)&&(i="SUSHI-APY"),Object(b.g)(t.pool)&&(i="CAKE-APY"),e.abrupt("return",Object.assign(t,{network:u[t.chainId].name,liquidity:n.liquidity,apy:(100*+a.apy).toFixed(2),pool:Object(b.c)(r),lpApy:s,address:r,type:"lp",label:i,buttonText:"STAKING"}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s=t.concat(n);return Promise.all(s).then((function(e){var t=e.filter((function(e){return"v1"===e.version||!e.version})),n=e.filter((function(e){return"v2"===e.version}));w(n),v(t),A(e),a(!0)})),function(){return j.length=0}}),[]),[n,j,x,y]}},658:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(1),s=n(19),i=n(7),o=n(33),l=n(177),b=n(26),p=n(625),u=n(97),d=n(624),j=n(46),A=n(60),f=l[b.DeriEnv.get()].chainInfo;t.a=Object(u.b)("wallet","version")(Object(u.c)((function(e){var t=e.wallet,n=(e.version,e.pool),a=e.lang,l=Object(i.useState)(""),u=Object(s.a)(l,2),O=u[0],x=u[1],v="logo ".concat(n.bTokenSymbol),h=Object(o.useHistory)(),m=function(){t.connect()},y=function(){var e=Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.getUserInfoAllForAirDrop)(t.detail.account);case 2:if((n=e.sent).valid){e.next=6;break}return alert(a["no-deri-to-claim"]),e.abrupt("return");case 6:if(Object(j.b)(t.detail.chainId,n.chainId)){e.next=9;break}return alert(a["please-switch-to-BSC-to-claim-deri"]),e.abrupt("return");case 9:return e.next=11,Object(b.mintAirdrop)(n.chainId,t.detail.account);case 11:e.sent.success||alert(a["claim-failed"]);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){if(n&&n.airdrop)t.isConnected()?x(Object(A.jsx)(d.a,{btnText:a.claim,click:y,lang:a})):x(Object(A.jsx)(d.a,{btnText:a["connect-wallet"],click:m,lang:a}));else{var e="/mining/".concat(n.version||"v1","/").concat(n.chainId,"/").concat(n.type,"/").concat(n.symbol,"/").concat(n.bTokenSymbol,"/").concat(n.address);n.bTokenId&&(e="".concat(e,"?baseTokenId=").concat(n.bTokenId)),n.symbolId&&(e=e.indexOf("?")>0?"".concat(e,"&symbolId=").concat(n.symbolId):"".concat(e,"?symbolId=").concat(n.symbolId)),x(Object(A.jsx)("button",{onClick:function(){return function(e){h.push(e)}(e)},children:a.staking}))}return function(){}}),[n]),Object(A.jsxs)("div",{className:"pool",children:[Object(A.jsxs)("div",{className:"pool-header",children:[Object(A.jsx)("div",{className:"network",children:n.network&&n.network.toUpperCase()}),Object(A.jsxs)("div",{className:"pool-label",children:["v1"===n.version&&Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVRIicVWT2jTYBx9k4ZlLYhQb3aXFdZO8NCAG7RSVukOOmUwkLmDCN4UPSxF0PZeCqMZHmoOwi6evEgr4k2PTpeTUDrbyURaL8UU7GT1DzTyyS/lW0zabFZ98BGatvm99773+30ZMQwD/wspWfYCCAAYB1D3/AseKVlmxfxU1E9rkr6uAegwMkNzhlN5nCtmFtZp1flrXlF0/hmDyLyg61mLyjEAIbPYbCKRiEajM51O58OaoqxTMbb28opSo78mAeQA3ACwaVfMloyp8m46nfP5fKdKxeIzTdM+kfJ9KuPx+Pfz8/NZQRB+ALgC4KPlcScAZABMA2jzwqzwpGSZqYtylprKG9Vq9YskSYhEIm1N0x5xKnk8JKfWLESS3GrTPVtHTHjI7jFS+9Kyl0zNyVA47HcgkgYwBeAxLRNXAcwA2AKwQJ8X+5FhprgJ8G+5ISwSmS3ann4ose16t719WVXVI+S+1xLyp25a+y05NM0pYzm4SfbfsVHZa+VYLHY6OTcnNZvNjqqqt6mVzdw9p51g+YMbMq+JyBRHJmcYxrH3OzvrhUIhDEByaOXaZCg0Kori50AgcC+vKA/6FRpIplKptILBoFdvtZbyq6sjS8vLC8GJiTPlcrn2pFQapczVrSo5nAPwFcCbQbV+ZcZhYJn39HQmc0kQhG+vNjbU2UTierfb3RRF8ZoLV48CKALYpSD3JyOvrFwEcIEfyzYD6z43J3YpsO0BzwYXctZpWVfOuABrzVv0M8cJaoM0EcryrZ+SZdP5cW6u1f7aqU3DlD8c+UOywZznOotN98Yfk3FQyZ/IZmdVWQxsAt6DKzKW9w6ryl4bk1pWrJFXlL2DCttHxsV7h255BXBUeRiwbopSNw1V5WHAhh7by/qwVR4YAH4C104ah/PdWdoAAAAASUVORK5CYII=",alt:"v1"}),"v2"===n.version&&Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAAAsSAAALEgHS3X78AAACuUlEQVRIicVWS2gTURQ9hcTEBAtpstOsGtoaKZhAKswiJkUIWkUtSOmiCO78LTrpIqYLd6VQEgkSBReRkpUbm/hbVVdCtQNuAqMZpC7S7hKRGBNKICNP7pRnkmlGbe2Bx4Nh5t577j3nvelTVRUHhago2gAcA+AGUDL9jzqiosiSHQYwDMBJS3umAGiwYvasMxxLFyUbAqA9q9Aq8XsimazwMXoV84b28d1YhsLhsCAIp37UalupVOoRSxaJREyBQOCsY2DAz8VbB/AewHK3ZLrFREVx6E48vmi320fzudwrSZLKxLJBzNhqBIPBb+cmJhbMZnMTwAyALQCTAOIAPgJYoJ1hEcAZAPe7FWSKiiJjJxBbNzfLzWKxWPP7/fD5fFVJkp4kkkmlS91Zev8eFcJwC0AVwE3aNcQA5AFc7VoMl5wxft42yzEA3uGREadOIYz9cQBPaWkYp4TVLt8c0ZmEzYiAO3RD4Ecx0ysIQ7PZTKiqGlEU5eXjTOYtiVxz1wsj1v5EHRojATIc5UYR68LSzdnX6fV6vadDoUsOh8Mhy/JqbmVF09BrmgTTX083gdp9u010WVVVT3zZ2Mik0+kPnJU1ljtWjs7NXXa5XKNQVfmQxXKXE3MHenZGluWvHo/HWq5UphJLS31T09MXPYODQqFQ+Pwsn7cAOEnOYizrnLYmqXv9AJb07MzjV2d6HVjx+fkrZrN5+93a2sNQOHy91WqtW63Wazox+8nC2lhjOkLuLEacnb0A4DyzctspWeZYPqDgLOh3Eqxegiw5bJlGaxhGrwNNNww3OCHv9p4eVqOimKHO8+easm+3Nh2mO47idl7gijYFNpl/LqbdxpzmwCXjL8eSXixDxbT9d9h0bMwS1ynpZiKZrP8psd+K2UuWfwPmJoHc5DT637FfYIdesc3GBwMAPwHwfCc5wAJXPgAAAABJRU5ErkJggg==",alt:"v2"})]})]}),Object(A.jsx)("div",{className:"pool-info",children:Object(A.jsxs)("div",{className:"info-center",children:[Object(A.jsxs)("div",{className:"top-info",children:[Object(A.jsx)("div",{className:v}),Object(A.jsxs)("div",{className:"pool-detail",children:[Object(A.jsx)("div",{className:"base-token",children:n.bTokenSymbol}),Object(A.jsxs)("div",{children:[Object(A.jsx)("span",{className:"title",children:n.airdrop?a.total:a["pool-liq"]}),Object(A.jsx)(p.a,{value:n.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:n.lpApy?7:0})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("span",{children:a.symbol}),n.symbol]}),Object(A.jsxs)("div",{className:"apy",children:[Object(A.jsx)("span",{children:a.apy}),Object(A.jsxs)("span",{children:[Object(A.jsx)("span",{className:n.lpApy?"sushi-apy-underline":"",title:n.lpApy&&a["deri-apy"],children:n.apy?Object(A.jsx)(p.a,{value:n.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2}):"--"}),n.lpApy&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("span",{children:" + "}),Object(A.jsxs)("span",{className:n.lpApy?"sushi-apy-underline":"",title:n.lpApy&&n.label,children:[" ",Object(A.jsx)(p.a,{value:n.lpApy,displayType:"text",suffix:"%",decimalScale:2})]})]})]})]}),Object(A.jsxs)("div",{className:"pool-address",children:[Object(A.jsx)("span",{children:a.address}),n.airdrop?"--":Object(A.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(f[n.chainId].viewUrl,"/address/").concat(n.address||n.pool),children:n.pool})]})]})]}),Object(A.jsx)("div",{className:"bottom-btn",children:O})]})})]})})))},721:function(e,t,n){},722:function(e,t,n){},744:function(e,t,n){"use strict";n.r(t);var a=n(19),c=(n(7),n(721),n(722),n(658)),r=n(649),s=n(97),i=n(60);t.default=Object(s.b)("version")(Object(s.c)((function(e){var t=e.version,n=e.lang,s=Object(r.a)(t),o=Object(a.a)(s,2),l=o[0],b=o[1];return Object(i.jsx)("div",{className:"mining-info",children:Object(i.jsxs)("div",{className:"pools",children:[b.map((function(e,t){return Object(i.jsx)(c.a,{pool:e,lang:n},t)})),!l&&Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)("span",{className:"spinner spinner-border spinner-border-sm"})})]})})})))}}]);
//# sourceMappingURL=15.55f34f34.chunk.js.map