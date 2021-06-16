(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[8],{538:function(e,c,t){"use strict";var s=t(2),i=t(35),n=(t(539),t(138)),a=t(43);c.a=Object(n.b)("wallet")(Object(n.c)((function({wallet:e}){const[c,t]=Object(s.useState)("Connect Wallet"),n=c=>{e.isConnected()?c.supported?t(Object(a.jsxs)("span",{children:[c.formatBalance," ",c.symbol," ",Object(a.jsx)("span",{className:"address",children:Object(i.c)(c.account)})]})):t(Object(a.jsxs)("span",{className:"no-supported",children:["Unsupported Chain ID ",c.chainId,"!"]})):t("Connect Wallet")};return Object(s.useEffect)((()=>((async()=>{const c=await e.connect();c&&n(c)})(),()=>{})),[]),Object(s.useEffect)((()=>(n(e.detail),()=>{})),[e.detail.account,e.detail.formatBalance]),Object(a.jsxs)("div",{className:"connect",children:[Object(a.jsxs)("div",{className:"network-text-logo",children:[Object(a.jsx)("i",{className:e.detail.symbol}),Object(a.jsx)("span",{className:"logo-text",children:e.detail.text})]}),Object(a.jsx)("div",{className:"bg-btn",children:Object(a.jsx)("button",{className:"nav-btn connect-btn",onClick:e.connect,children:c})})]})})))},539:function(e,c,t){},552:function(e,c,t){"use strict";var s=t(2),i=t(138),n=t(28),a=t(43);c.a=Object(i.b)("wallet","version")(Object(n.c)((function({wallet:e,version:c}){const t=()=>{if(e.isConnected()&&!e.supportV2)return c.setCurrent("v1"),void alert("No V2 pool on this network yet");c.switch(),window.location.reload()};return Object(s.useEffect)((()=>(e.detail.chainId&&(e.supportV2?c.current||(e.supportV2?c.setCurrent("v2"):c.setCurrent("v1")):c.setCurrent("v1",!0)),()=>{})),[e.detail.chainId]),Object(a.jsx)("div",{className:"version",children:c.isV1?Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAXCAYAAACmnHcKAAAACXBIWXMAAAsSAAALEgHS3X78AAADv0lEQVRYhcVYT0gUURj/zbguWaiblkUq2qGyKNwItEOgzgpCe1CCLhFkdOzgdpMueepsRHXosuHJS2yH6ZIzrdAhIkKNUpDIDQNNhfVP+W/Xic++Z8/X7KyKub/L7Lz53sz7ve/3/XmrOY6DTDBC4XYAjQCCAGozGv5/JAAMAIgDiNqWmXT7oisZIxSOAOgCUJxDAl54QOtTSW0iY4TCAQAxAA2STT/vSDyHixfqaJXGyFtttmUOiIENMkwkLsmJSLTbljm21yvPBCMUrmbF3GCbWSIqCMlkBiQid2zL7M7RgskLIlareMG0yTHbMqNs00axw2FAHgqS5NbJGKEwsb2XSyKsjKgiJRWD7Ikkk37Nz5/ZltmuNRmX6SVjzLLftszGvSaCP2Ro9xuKAw6MltRk8EJ6oeAA0qlV+D8N6b5XL/MrfkxoUAjJTjiuUxBJWasrw7fKAbwH8EIZr+PxuxnmPebnRVmI0Hcbyo466OhcThgtqfGSQ06yoMCZLyxyZi5eSk9GOpfHzgbT4FAQyulmGRIiOmtznbFtmZky1ncAw0yqXBpv5us7xb6IidR5kZBApQDXb61MHC5zpt0MiNTVa6tfyHOUACgZcGqOskkjkanmm1iWD/YpBAj1AOakZwKPANTwJniCtV98omYNlVVrU1625K1TZ9Z+8W0bX4UDanXO3wTXqupCpp6vdewllQjYi7eZ6JZwrGJtxufDSjbbc8G0kFVAXbdPipdsZITUalhGp3lclRjh/lZJ7CZ0zg6Q5OaFPiZCUruSQWI7wsy0VppKwZ9t7vg3fR///GfzdU7LkOTmBeGFZg+JbQucdGZHR/IwM6WVeM2dm9XK3r7JO8i3IsZFAkvoUgC1cuHywjDLTWQpN4ntBN3LS0Bvj798fk4rdZu/uKgV9vbkl84m12tNv9RmtfM1rkupDSJFZsFzsVG7JTHbMqnODI6O6HjS7a/+/DGvkkgRgZ8LWiDxVT/y9KH/5NCHvP1cV9YzGR9Rqvg1MdHOUPHp4MHzcie6V1A7dqonRQEHy0sauPKD45ua3wG2F50L1cigICM/2NSJ5oAU7Xab0qP186FMNJpqh99EsSd3zUE2EIS6ctU5e4GLbEwqKTcFSfVwJhMCt9dEKJ4rT+HvOUYcDeSD4wYRuB2beWJUmbRdyJ2tiIWI2BAjFI5KB6ydIMGxs6mX9Kkv4pTXyO6M8I5s97+Aam43kjy/gXc1wuS2UtPcQF37xiFNhee/MwIsv2w1SMaYfNym+bJMd0AomVXmAH4DDmCLGoun3ZsAAAAASUVORK5CYII=",onClick:t,alt:"Switch V2"}):Object(a.jsx)("img",{onClick:t,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAXCAYAAACmnHcKAAAACXBIWXMAAAsSAAALEgHS3X78AAAD1ElEQVRYhc1YTUhUURT+3hu1DFKxsh8DJyIQirSIahFkM7VpFg5CmzbZpk0IQ6uoRbZrFUJU25E2tShy8drke+hWorQgDQkmSFArmelfbXxxhu/a7XXfjFk5ffB47965777znfOde88dy/d9mBCLJ+oAJHm1Aag1Dlw5DAK4L5fnOhnTV41kYvFEN4DUf0AgDL1in+c6Wf33n8gwGgMAWrQxfewbLqPxUaojqTk4J32e6yzatUgmFk9EabAa3Ef2xpCWA3S2KOaSiZBOZliLyGnPddLs76RHWgE0AXjFSKU91xkoE6k25k8tCUVFcgUyzBHFtkCEXpAXDheZV6LXGdTuSiAWT4hzn/BTvZ7rdFpHYsfF6AxZ9nmuk9Rzp2GTj2PH51/v3L3wraISc/NzqH7+zLYePqjcOj1pyUQjnuu0rjQZ/FioVBC22YGkSvHeI0R2teaROj+bOXgoP7W2xn9XXe1/qKn1p6V99tzsSyEq4zipCRcAPALQEfjtBvsbtb6jjLT0y9VVioznOt2UWcF2m6sE6OEMF4JTq1YDJ07OvxQSponq1/vZM12zEzJOc0IQQ2w3a/1CYD+AUQATWv8F3vcBuCY2GJxgQpp9bTaXPTA/wEihZW/+sxhcbJZ1G/yZHc15eaxlUgbRD+A9va5wgPf+wNgYgHY+jxqcEAa1CLXYWoIrwyVfsKM5P1NqlooKzDVs9F+zGZY3YnQNowGNWJCMDjVmosgYhUWH26bOvwwlNRWRZoPEdEiuKHkN/Y4pNmseaHIrkBofi9SXenlhAZHpKWsrm2EVgi61DkYpLCqneIF5MxoyLpSMioiSSSF3Xjy318y8teqKvfxmytowPhaRx1yJDXSIiV9MYvu1Fayf9ddSkOSYV7aW+O2yv7B86c1lLdy9Xbn500czoQ/vrXV3blU1zn4tNHtKfFTJxbSKKVzUxp5fIhFoZAYUGbVWq/1Cltrc08eRNdevVm0fH7PrhdSXL9ZaITH8KLLlZk9VdHyskHIjSyBzj1JDkag0as9qr7lSbFKWWk1spk3lzBGRDMuFtKrXZD9p2LSA6UkbjAaYb8kyljMD3PAHPddpU2TqmMBNwUqU7DsDNVofD0np8M/9UyJRKkoVxnvEXr1q1pkKLot8yuH1YojFE0kqRtm5WOEHD2dBQjm+KF4YLhcxVhetVIh+cDytq+OXYzMll9ZKi+VghFLNavN1a9JNa/vJcjDIg+NPe1tFcCJ6P8kopQJV9VIRZVmUZSHbzmNGiuSWc2QQlYhCQg+Fof/O6FiGARn9uC2O0b34p/MZAeA7lnaTTtpmho4AAAAASUVORK5CYII=",alt:"Switch V1"})})})))},566:function(e,c,t){},567:function(e,c,t){},568:function(e,c,t){},569:function(e,c,t){},599:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return u}));var s=t(2),i=t.n(s),n="data:image/png;base64,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",a=t(23),r=t(139),A=(t(566),t(43));function j({closeMenu:e}){const c=!!Object(a.j)("/mining"),t=!!Object(a.j)("/lite");return Object(s.useEffect)((()=>(document.querySelectorAll(".menu li a").forEach((c=>c.addEventListener("click",e))),()=>{})),[]),Object(A.jsxs)("div",{className:"menu",children:[Object(A.jsxs)("div",{className:"top",children:[Object(A.jsx)("a",{className:"logo",href:"https://deri.finance/",children:Object(A.jsx)("img",{src:n,alt:""})}),Object(A.jsx)("span",{className:"close-menu",click:"close",onClick:e})]}),Object(A.jsx)("div",{className:"ul",children:Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{className:c?"selected":"",children:Object(A.jsx)(r.b,{to:"/mining",children:"Mining"})}),Object(A.jsx)("li",{className:t?"selected":"",children:Object(A.jsx)(r.b,{to:"/lite",children:" Trade "})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{rel:"noreferrer",href:"https://governance.deri.finance/",children:"Governance"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{rel:"noreferrer",href:"https://bridge.deri.finance/",children:"Bridge"})}),Object(A.jsxs)("li",{className:"ref",children:["Docs ",Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAABXklEQVQoU2WRP0hVcRTHP9/fvT6ejzJpCIVaIkNzMZpaskGECB2ypxA+aFGxocmh0bm2COmlEIEI+ujPIBi4ODQ4BLqYoETgYHs9VPTe+40raGTf7Zzv+XC+nCMmJ0O5ZbhXIb3yuxTml4bbfnFG5er3C5IHwTsLu9eWNfBmuzPIXwQFw6f6vsaXnv4Fc8BKXgep33BIFt3Rw+ntu3K2LCkGH2K9dXPzRG3wUv3ey9Wmc40XXwg/BhVsJxB61Ff9WiqG83NC94EYOMjMK8V6TpY9k/UEKAIJ1qLrxUfK4z+ofmuNFc0idQOR0R6wDnQJl4DUeCXN0sqHsRs/j6FjcGrralTgnazb4AiU2Q4SKWjVpJXaSPuPfPYUyouh6a0Oo1lwFxCAzHgtQZWPI9c3Txb8A+XNgZmNm8ENC4LL+YntZKg22plHPdV/UO6UpzZvqRD3pkd8fj/etnb2b38ARWSBW029yFUAAAAASUVORK5CYII=",alt:""}),Object(A.jsxs)("ul",{className:"ref-box",children:[Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"https://docs.deri.finance/whitepaper",children:"Whitepaper"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"https://docs.deri.finance/code-audits",children:"Code Audit"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"https://deri.finance/#/team",children:"Team"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"https://docs.deri.finance/faq",children:"FAQ"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"https://docs.deri.finance/",children:"Guide"})}),Object(A.jsx)("li",{children:Object(A.jsx)("a",{href:"https://github.com/deri-finance/",children:"Github"})})]})]})]})}),Object(A.jsxs)("div",{className:"m-footer",children:[Object(A.jsxs)("div",{className:"footer-link",children:[Object(A.jsx)("a",{rel:"noreferrer",className:"iocn_a",children:Object(A.jsxs)("div",{className:"circle",children:[Object(A.jsx)("div",{className:"wechat",children:Object(A.jsx)("div",{className:"down_box"})}),Object(A.jsx)("div",{className:"fa fa-wechat"})]})}),Object(A.jsx)("a",{rel:"noreferrer",className:"iocn-a",href:"mailto: service@deri.finance",children:Object(A.jsx)("div",{className:"circle",children:Object(A.jsx)("div",{className:"fa fa-envelope"})})}),Object(A.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://deri-protocol.medium.com",children:Object(A.jsx)("div",{className:"circle",children:Object(A.jsx)("div",{className:"fa fa-medium"})})}),Object(A.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://twitter.com/DeriProtocol",children:Object(A.jsx)("div",{className:"circle",children:Object(A.jsx)("div",{className:"fa fa-twitter"})})}),Object(A.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://github.com/deri-finance",children:Object(A.jsx)("div",{className:"circle",children:Object(A.jsx)("div",{className:"fa fa-github"})})}),Object(A.jsx)("a",{rel:"noreferrer",className:"iocn-a",href:"https://t.me/DeriProtocol",children:Object(A.jsx)("div",{className:"circle",children:Object(A.jsx)("div",{className:"fa fa-paper-plane"})})})]}),Object(A.jsx)("div",{className:"banquan",children:"\xa9 2021 Deri Protocol"})]})]})}t(567);var l=t(552);function d(){const[e,c]=Object(s.useState)({});return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"nav",children:[Object(A.jsx)("img",{className:"menu-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAASCAYAAABFGc6jAAAARklEQVRIS2MMm3XzAgMjoz4DDcF/BobzjHSziIYeQTGacdQickNgGAYd3ZI33SwiN3JJ1TcMEwOpQUCu+mEYdHRL3vSyCAAv2BujNlrcrwAAAABJRU5ErkJggg==",onClick:()=>{c({left:0})}}),Object(A.jsx)("div",{className:"menu-left",style:e,children:Object(A.jsx)(j,{closeMenu:()=>c({left:"-110%"})})}),Object(A.jsx)("a",{className:"logo",href:"https://deri.finance/",children:Object(A.jsx)("img",{src:n,alt:""})}),Object(A.jsx)(l.a,{})]})})}var o,b=t(101);const m=Object(b.a)((()=>Promise.all([t.e(0),t.e(1),t.e(3),t.e(2),t.e(15)]).then(t.bind(null,595)))),h=Object(b.a)((()=>Promise.all([t.e(0),t.e(12)]).then(t.bind(null,596)))),O=Object(b.a)((()=>Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,597))));var x=Object(a.k)(o=class extends i.a.Component{render(){return Object(A.jsx)("div",{className:"body",children:Object(A.jsxs)(a.d,{children:[Object(A.jsx)(a.b,{exact:!0,path:"/",component:m}),Object(A.jsx)(a.b,{exact:!0,path:"/lite",component:m}),Object(A.jsx)(a.b,{exact:!0,path:"/mining",component:h}),Object(A.jsx)(a.b,{exact:!0,path:"/mining/:version/:chainId/:type/:symbol/:baseToken/:address",component:O}),Object(A.jsx)(a.b,{component:m})]})})}})||o,f=(t(568),t(538));function p(){return Object(A.jsx)("div",{className:"footer",children:Object(A.jsx)(f.a,{})})}t(569);function u(){const e=function(){const[e,c]=Object(s.useState)({width:void 0,height:void 0});return Object(s.useEffect)((()=>{function e(){c({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),e}();return Object(s.useEffect)((()=>(document.querySelector("html").setAttribute("style",`font-size : ${e.width/375*100}px`),()=>{})),[e]),Object(A.jsxs)("div",{className:"mobile",children:[Object(A.jsx)(d,{}),Object(A.jsx)(x,{}),Object(A.jsx)(p,{})]})}}}]);
//# sourceMappingURL=8.93f63e01.chunk.js.map