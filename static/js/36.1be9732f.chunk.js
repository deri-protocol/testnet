(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[36],{1039:function(e,t,n){},1396:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(37),i=n(777),c=n.n(i),r=n(20),o=n(607),l=n.n(o),d=n(608),p=n(7),u=n(733),b=n(778),f=n(779),m=(n.p,n(732)),h=n(618),j=(n(1039),n(13));function v({goToStep:e,lang:t,wallet:n,props:s,loading:i,OnChange:c}){const[r,o]=Object(a.useState)("0.0001"),[u,v]=Object(a.useState)("0.000004"),[O,y]=Object(a.useState)("0.1"),[g,S]=Object(a.useState)(!0),[w,N]=Object(a.useState)(!1),[k,C]=Object(a.useState)(!0),[E,T]=Object(a.useState)(""),[_,I]=Object(a.useState)([]),A={BTCUSD:"0.0001",ETHUSD:"0.001",BNBUSD:"0.01",AXSUSDT:"1",MBOXUSDT:"1",IBSCDEFI:"0.01",IGAME:"0.01",ALICEUSDT:"0.1",NULSUSDT:"1"},[R,D]=Object(a.useState)("dev"===p.a.get()?{symbol:"BTCUSD",symbolId:0,address:"0x78Db6d02EE87260a5D825B31616B5C29f927E430",chainId:"96"}:{symbol:"BTCUSD",symbolId:0,address:"0x5632A70669411D4de43d405E1880018ff85daaD3",chainId:"56"}),L=l()("dropdown-menu",{show:w}),B=()=>n&&n.detail&&n.detail.account,H=()=>{n.connect()},[U,M]=Object(a.useState)(Object(j.jsx)("button",{OnClick:H,children:t["connect-wallet"]})),P=()=>{R.symbol?(c("multiplier",r),c("fundingRateCoefficient",u),c("transactionFeeRatio",O),c("oracleConfig",R),e(2)):alert(t["please-enter-a-correct-address"])},K=()=>{C(!k),D(k?{}:_[0])};return Object(a.useEffect)((()=>{B()&&(i.loading(),(async()=>{let e=await Object(p.H)(n.detail.chainId,n.detail.account);i.loaded(),e.length&&(e.sort((function(e,t){return+e.blockNumber-+t.blockNumber})),o(A[e[0].symbol]),D(e[0]),I(e))})())}),[n.detail.chainId]),Object(a.useEffect)((()=>{let e;e=B()?Object(j.jsx)("button",{onClick:P,children:t.next}):Object(j.jsx)("button",{onClick:H,children:t["connect-wallet"]}),M(e)}),[n,n.detail,n.detail.account,R,r,u,O]),Object(j.jsxs)("div",{className:"step1",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("span",{children:t["add-symbol"]}),Object(j.jsxs)("span",{children:[s.baseToken," @ ",t.bsc]})]}),Object(j.jsx)("div",{className:"context",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("span",{className:"base-title",children:[" ",t.oracle]}),Object(j.jsxs)("div",{className:"select-oracle",children:[k?Object(j.jsx)("div",{className:"radio"}):Object(j.jsx)("div",{className:"radio-no",onClick:K}),Object(j.jsx)("span",{children:t["choose-from-exsting-ones"]}),k?Object(j.jsx)("div",{className:"radio-no optional",onClick:K}):Object(j.jsx)("div",{className:"radio optional"}),Object(j.jsx)("span",{children:t["generate-oracle-address"]})]}),k&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"select-symbol",children:Object(j.jsxs)("div",{className:"btn-group check-baseToken-btn",children:[Object(j.jsxs)("button",{type:"button",onClick:e=>{_.length>0&&(e.preventDefault(),N(!w))},className:"btn chec",children:[Object(j.jsx)(x,{spec:R}),Object(j.jsx)("span",{className:"check-base-down",children:Object(j.jsx)("img",{src:m.a,alt:""})})]}),Object(j.jsx)("div",{className:L,children:_.map(((e,t)=>Object(j.jsx)("div",{className:"dropdown-item",onClick:t=>(e=>{const t=_.find((t=>t.address===e.address&&e.chainId===t.chainId));t&&(o(A[t.symbol]),D(t),N(!1))})(e),children:Object(j.jsx)(x,{spec:e})},t)))})]})})}),!k&&Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"optional-oracle",children:[Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)("input",{type:"text",value:E,placeholder:t["chain-link-address"],onChange:e=>(e=>{let{value:t}=e.target;T(t)})(e)}),Object(j.jsx)(d.a,{className:"btn",click:async()=>{if(!E)return void alert(t["please-enter-a-correct-address"]);if((await Object(p.j)(n.detail.chainId,n.detail.account,E)).success){let e=await Object(p.H)(n.detail.chainId,n.detail.account);D(e[0]),I(e)}else alert(t.fail)},btnText:t.generate,lang:t})]}),Object(j.jsx)("div",{className:"optional-oracle-address",children:Object(j.jsx)("input",{type:"text",value:R.address})})]})}),Object(j.jsxs)("div",{className:"symbol-name",children:[Object(j.jsx)("div",{className:"symbol-title",children:t["symbol-name"]}),Object(j.jsx)("div",{className:"symbol-value",children:R?R.symbol:""})]}),Object(j.jsxs)("div",{className:"advanced",onClick:()=>S(!g),children:[Object(j.jsx)("span",{className:"select-advanced",children:t.advanced}),g?Object(j.jsx)("img",{src:f.a}):Object(j.jsx)("img",{src:b.a})]}),Object(j.jsx)("div",{className:"advanced-border"}),g&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"margin-rewards",children:Object(j.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(j.jsx)("div",{className:"title",children:t.parameters}),Object(j.jsxs)("div",{className:"parameters",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text",children:Object(j.jsx)(h.a,{block:!1,children:Object(j.jsx)("span",{className:"hover-title",tip:t["multiplier-hover"],children:t.multiplier})})}),Object(j.jsx)("div",{className:"input-value",children:Object(j.jsx)("input",{type:"number",value:r,onChange:e=>(e=>{let{value:t}=e.target;o(t)})(e)})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text",children:Object(j.jsx)(h.a,{block:!1,children:Object(j.jsx)("span",{className:"hover-title",tip:t["funding-rate-coefficient-hover"],children:t["funding-rate-coefficient"]})})}),Object(j.jsx)("div",{className:"input-value",children:Object(j.jsx)("input",{type:"number",value:u,onChange:e=>(e=>{let{value:t}=e.target;v(t)})(e)})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text",children:Object(j.jsx)("span",{className:"hover-title-fee",children:t["transaction-fee-ratio"]})}),Object(j.jsxs)("div",{className:"input-value",children:[Object(j.jsx)("input",{type:"number",value:O,onChange:e=>(e=>{let{value:t}=e.target;y(t)})(e)}),"  %"]})]})]})]})})}),Object(j.jsx)("div",{className:"next-button",children:U})]})})]})}function O({goToStep:e,lang:t,wallet:n,props:a,parameters:s}){const i=Object(r.useHistory)();return Object(j.jsxs)("div",{className:"step2",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("span",{children:t.confirm})}),Object(j.jsx)("div",{className:"context",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("span",{className:"oracle-title",children:[" ",t.oracle]}),Object(j.jsx)("div",{className:"oracle-name",children:s[2]}),Object(j.jsxs)("span",{className:"symbol-title",children:[" ",t["symbol-name"]]}),Object(j.jsx)("div",{className:"symbol-name",children:s[1]}),Object(j.jsx)("div",{className:"margin-rewards",children:Object(j.jsxs)("div",{className:"margin-ratio-parameters",children:[Object(j.jsx)("div",{className:"title",children:t.parameters}),Object(j.jsxs)("div",{className:"parameters",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text",children:t.multiplier}),Object(j.jsx)("div",{className:"input-value",children:s[3]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text",children:t["funding-rate-coefficient"]}),Object(j.jsx)("div",{className:"input-value",children:s[5]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text",children:t["transaction-fee-ratio"]}),Object(j.jsxs)("div",{className:"input-value",children:[Object(p.g)(s[4]).times(Object(p.g)(100)).toString(),"  %"]})]})]})]})}),Object(j.jsx)("div",{className:"next-button",children:Object(j.jsxs)("div",{className:"next-button",children:[Object(j.jsx)("button",{onClick:()=>{e(1)},children:t.cancel}),Object(j.jsx)(d.a,{click:async()=>{(await Object(p.d)(n.detail.chainId,a.address,n.detail.account,s)).success?(alert(t.success),i.push("/mining")):alert(t.fail)},btnText:t.ok,lang:t})]})})]})})]})}function x({spec:e}){return e?`${e.symbol}`:""}t.default=Object(s.b)("wallet","loading")(Object(s.c)((function({wallet:e={},lang:t,loading:n}){const[s,i]=Object(a.useState)("0.0001"),[o,l]=Object(a.useState)("0.000004"),[d,b]=Object(a.useState)("0.1"),[f,m]=Object(a.useState)(0),[h,x]=Object(a.useState)("dev"===p.a.get()?{symbol:"BTCUSD",address:"0x78Db6d02EE87260a5D825B31616B5C29f927E430",chainId:"96"}:{symbol:"BTCUSD",address:"0x5632A70669411D4de43d405E1880018ff85daaD3",chainId:"56"}),[y,g]=Object(a.useState)([]),{version:S,chainId:w,symbol:N,baseToken:k,address:C,type:E}=Object(r.useParams)(),T=Object(u.a)(),_={version:S,chainId:w,symbol:N,baseToken:k,address:C,wallet:e,type:E,lang:t};return T.has("baseTokenId")&&(_.baseTokenId=T.get("baseTokenId")),T.has("symbolId")&&(_.symbolId=T.get("symbolId")),Object(a.useEffect)((()=>{e&&e.detail&&e.detail.account&&(async()=>{let t=await Object(p.D)(e.detail.chainId,C);t=t.map((e=>+e)),t=t.sort((function(e,t){return t-e}));let n=0;t.length&&(n=+t[0]+1),m(n)})()}),[e,e.detail,C]),Object(a.useEffect)((()=>{let e=[f,h.symbol,h.address,s,Object(p.g)(d).div(Object(p.g)(100)).toString(),o];g(e)}),[s,o,d,h,f]),Object(a.useEffect)((()=>{}),[e,e.detail]),Object(j.jsx)("div",{className:"add-symbol",children:Object(j.jsx)("div",{className:"Step-box",children:Object(j.jsxs)(c.a,{initialStep:1,children:[Object(j.jsx)(v,{lang:t,wallet:e,props:_,loading:n,OnChange:(e,t)=>{"multiplier"===e&&i(t),"fundingRateCoefficient"===e&&l(t),"transactionFeeRatio"===e&&b(t),"oracleConfig"===e&&x(t)}}),Object(j.jsx)(O,{lang:t,wallet:e,props:_,parameters:y})]})})})})))},608:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(2),s=n(13);function i({btnText:e,className:t,disabled:n,click:i,afterClick:c,checkApprove:r,wallet:o,spec:l,lang:d}){const[p,u]=Object(a.useState)(n?"disabled":"enabled"),[b,f]=Object(a.useState)(!0),[m,h]=Object(a.useState)(!1),[j,v]=Object(a.useState)(e),O=Object(a.useRef)(null),x=()=>{u("disabled"),h(!0),O.current&&(O.current.style.display="inline-block")},y=()=>{O.current&&(O.current.style.display="none"),u("enabled"),h(!1)};return Object(a.useEffect)((()=>((async()=>{if(r&&o&&o.detail.account){const e=await o.isApproved(l.pool,l.bTokenId);f(e)}})(),()=>{})),[o,l,r]),Object(a.useEffect)((()=>(e&&v(e),()=>{})),[e]),Object(s.jsxs)("button",{className:t,onClick:()=>{b?(async()=>{if("enabled"!==p)return;x(),await i()&&c&&c(),y()})():(async()=>{x(),(await o.approve(l.pool,l.bTokenId)).success?f(!0):(f(!1),alert(d["approve-failed"])),y()})()},children:[Object(s.jsx)("span",{className:"btn-loading-wrap",children:Object(s.jsx)("span",{ref:O,className:"spinner spinner-border spinner-border-sm",style:{display:"none",marginRight:"2"}})}),m?d.pending:b?j:d.approve]})}},618:function(e,t,n){"use strict";var a=n(2),s=n(13);t.a=function(e){const t=Object(a.useRef)(null);return Object(a.useEffect)((()=>{const e=t.current;if(e){e.querySelectorAll("[tip]").forEach((t=>{let n=null;t.addEventListener("mouseover",(e=>{const t=e.currentTarget.getAttribute("tip");if(t){const a=`hover-box-${(new Date).getTime()}`;n=document.body.querySelector(`#${a}`),n=document.createElement("div"),n.style.cssText=`z-index : 9;min-width : 100px;max-width : ${window.screen.width}px ;font-size : 12px ;position : absolute;background-color: #2c2d31;border: 1px solid #AAAAAA;color: #AAAAAA;border-radius: 10px;padding: 4px;`,document.body.appendChild(n),n.innerText=t,n.id=a,n.style.display="block";const s=e.currentTarget.getBoundingClientRect();if(n.style.top=`${s.y+s.height+window.document.documentElement.scrollTop}px`,n.offsetWidth+e.pageX>window.screen.width)if(e.pageX-n.offsetWidth>=0)n.style.left=e.pageX-n.offsetWidth+"px";else{const t=e.pageX-n.offsetWidth/2>0?e.pageX-n.offsetWidth/2:0;n.style.left=`${t}px`}else n.style.left=`${e.pageX}px`}})),e.addEventListener("mouseout",(e=>{n&&n.remove()}))}))}return()=>{t.current=null}}),[e.title]),e.block?Object(s.jsx)("div",{ref:t,children:e.children}):Object(s.jsx)("span",{ref:t,children:e.children})}},777:function(e,t,n){!function(e,t){"use strict";var n="default"in t?t.default:t;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,a=c(t);return e=n?(e=c(this).constructor,Reflect.construct(a,arguments,e)):a.apply(this,arguments),a=this,!(e=e)||"object"!=typeof e&&"function"!=typeof e?o(a):e}}function d(e,t){var n,a=(t=void 0===t?{}:t).insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(t=document.createElement("style")).type="text/css","top"===a&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)))}var p={animated:"rsw_1z",fadeInRight:"rsw_1M",fadeInLeft:"rsw_19",fadeOutRight:"rsw_3C",fadeOutLeft:"rsw_1u"};d("/**\n * Snippets from animate.css\n * Credit goes to https://github.com/daneden\n * github.com/daneden/animate.css\n*/\n.rsw_1z {\n  -webkit-animation-duration: .8192s;\n  animation-duration: .8192s;\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards;\n}\n\n/** fadeInRight */\n@-webkit-keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_1M {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_1M {\n  -webkit-animation-name: rsw_1M;\n  animation-name: rsw_1M;\n}\n\n/** fadeInLeft */\n@-webkit-keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes rsw_19 {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.rsw_19 {\n  -webkit-animation-name: rsw_19;\n  animation-name: rsw_19;\n}\n\n/** fadeOutRight */\n@-webkit-keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes rsw_3C {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.rsw_3C {\n  -webkit-animation-name: rsw_3C;\n  animation-name: rsw_3C;\n}\n\n/** fadeOutLeft */\n@-webkit-keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes rsw_1u {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.rsw_1u {\n  -webkit-animation-name: rsw_1u;\n  animation-name: rsw_1u;\n}\n");var u="rsw_2Y",b="rsw_2f",f="rsw_3G";d("/** Step Wizard */\n.rsw_2Y {\n    position: relative;\n}\n\n.rsw_2f {\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 0;\n}\n\n.rsw_3G {\n    opacity: 1;\n    pointer-events: inherit;\n    position: relative;\n    z-index: 1;\n}\n");var m=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(f,t.PureComponent);var e,c,d,b=l(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),i(o(t=b.call(this,e)),"initialState",(function(){var e={activeStep:0,classes:{},hashKeys:{},namedSteps:{}},n="object"===("undefined"==typeof window?"undefined":a(window))?t.getHash():"",s=t.getSteps();s.forEach((function(t,n){e.hashKeys[n]=t.props&&t.props.hashKey||"step".concat(n+1),e.hashKeys[e.hashKeys[n]]=n,e.namedSteps[n]=t.props&&t.props.stepName||"step".concat(n+1),e.namedSteps[e.namedSteps[n]]=n}));var i=t.props.initialStep-1;return i&&s[i]&&(e.activeStep=i),t.props.isHashEnabled&&n&&void 0!==e.hashKeys[n]&&(e.activeStep=e.hashKeys[n]),t.props.transitions&&(e.classes[e.activeStep]=t.props.transitions.intro||""),e})),i(o(t),"getHash",(function(){return decodeURI(window.location.hash).replace(/^#/,"")})),i(o(t),"getTransitions",(function(){return t.props.transitions||{enterRight:"".concat(p.animated," ").concat(p.fadeInRight),enterLeft:"".concat(p.animated," ").concat(p.fadeInLeft),exitRight:"".concat(p.animated," ").concat(p.fadeOutRight),exitLeft:"".concat(p.animated," ").concat(p.fadeOutLeft)}})),i(o(t),"onHashChange",(function(){var e=t.state.hashKeys[t.getHash()];void 0!==e&&t.setActiveStep(e)})),i(o(t),"isInvalidStep",(function(e){return e<0||e>=t.totalSteps})),i(o(t),"setActiveStep",(function(e){var n,a,s=t.state.activeStep;s!==e&&(t.isInvalidStep(e)?console.error("".concat(e+1," is an invalid step")):(n=t.state.classes,a=t.getTransitions(),s<e?(n[s]=a.exitLeft,n[e]=a.enterRight):(n[s]=a.exitRight,n[e]=a.enterLeft),t.setState({activeStep:e,classes:n},(function(){t.onStepChange({previousStep:s+1,activeStep:e+1})}))))})),i(o(t),"onStepChange",(function(e){t.props.onStepChange(e),t.props.isHashEnabled&&t.updateHash(t.state.activeStep)})),i(o(t),"getSteps",(function(){return n.Children.toArray(t.props.children)})),i(o(t),"firstStep",(function(){return t.goToStep(1)})),i(o(t),"lastStep",(function(){return t.goToStep(t.totalSteps)})),i(o(t),"nextStep",(function(){return t.setActiveStep(t.state.activeStep+1)})),i(o(t),"previousStep",(function(){return t.setActiveStep(t.state.activeStep-1)})),i(o(t),"goToStep",(function(e){t.props.isHashEnabled&&"string"==typeof e&&void 0!==t.state.hashKeys[e]?t.setActiveStep(t.state.hashKeys[e]):t.setActiveStep(e-1)})),i(o(t),"goToNamedStep",(function(e){"string"==typeof e&&void 0!==t.state.namedSteps[e]?t.setActiveStep(t.state.namedSteps[e]):console.error('Cannot find step with name "'.concat(e,'"'))})),i(o(t),"updateHash",(function(e){window.location.hash=t.state.hashKeys[e]})),i(o(t),"isReactComponent",(function(e){return"function"==typeof(e=e.type)||"object"===a(e)})),t.state=t.initialState(),t}return e=f,(c=[{key:"componentDidMount",value:function(){this.props.isHashEnabled&&window.addEventListener("hashchange",this.onHashChange),this.props.instance(this)}},{key:"componentWillUnmount",value:function(){this.props.isHashEnabled&&window.removeEventListener("hashchange",this.onHashChange)}},{key:"currentStep",get:function(){return this.state.activeStep+1}},{key:"totalSteps",get:function(){return this.getSteps().length}},{key:"render",value:function(){var e=this,t={currentStep:this.currentStep,totalSteps:this.totalSteps,nextStep:this.nextStep,previousStep:this.previousStep,goToStep:this.goToStep,goToNamedStep:this.goToNamedStep,firstStep:this.firstStep,lastStep:this.lastStep},a=this.state.classes,s=n.Children.map(this.getSteps(),(function(s,i){return s?(t.isActive=i===e.state.activeStep,t.transitions=a[i],!e.props.isLazyMount||e.props.isLazyMount&&t.isActive?n.createElement(h,t,e.isReactComponent(s)?n.cloneElement(s,t):s):null):null}));return n.createElement("div",{className:this.props.className},this.props.nav&&n.cloneElement(this.props.nav,t),n.createElement("div",{className:u},s))}}])&&s(e.prototype,c),d&&s(e,d),f}();m.defaultProps={children:[],className:null,initialStep:1,instance:function(){},isHashEnabled:!1,isLazyMount:!1,nav:null,onStepChange:function(){},transitions:void 0};var h=function(e){var t=e.children,a=e.isActive;return e=e.transitions,n.createElement("div",{className:"".concat(b," ").concat(e," ").concat(a?f:"").trim()},t)};h.defaultProps={children:[],isActive:!1,transitions:""},e.Step=h,e.default=m,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(2))},778:function(e,t,n){"use strict";t.a=n.p+"static/media/down.611894d4.svg"},779:function(e,t,n){"use strict";t.a=n.p+"static/media/up.2c6adea1.svg"}}]);
//# sourceMappingURL=36.1be9732f.chunk.js.map