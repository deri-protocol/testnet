(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[59],{2689:function(e,n,t){"use strict";t.r(n),t.d(n,"WalletLinkConnector",(function(){return c}));var r=t(406);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){return i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},i(e,n)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){var n,r;function c(n){var t,r=n.url,o=n.appName,i=n.appLogoUrl,c=n.darkMode,h=n.supportedChainIds;return(t=e.call(this,{supportedChainIds:h})||this).url=r,t.appName=o,t.appLogoUrl=i,t.darkMode=c||!1,t.handleChainChanged=t.handleChainChanged.bind(a(t)),t.handleAccountsChanged=t.handleAccountsChanged.bind(a(t)),t}r=e,(n=c).prototype=Object.create(r.prototype),n.prototype.constructor=n,i(n,r);var h=c.prototype;return h.activate=function(){try{var e=this,n=function(){return Promise.resolve(e.provider.request({method:"eth_requestAccounts"})).then((function(n){var t=n[0];return e.provider.on("chainChanged",e.handleChainChanged),e.provider.on("accountsChanged",e.handleAccountsChanged),{provider:e.provider,account:t}}))},r=function(){if(window.ethereum&&!0===window.ethereum.isCoinbaseWallet)e.provider=window.ethereum;else{var n=function(){if(!e.walletLink)return Promise.resolve(Promise.all([t.e(5),t.e(14),t.e(64)]).then(t.t.bind(null,2632,7)).then((function(e){var n;return null!=(n=null==e?void 0:e.default)?n:e}))).then((function(n){e.walletLink=new n(o({appName:e.appName,darkMode:e.darkMode},e.appLogoUrl?{appLogoUrl:e.appLogoUrl}:{})),e.provider=e.walletLink.makeWeb3Provider(e.url,1)}))}();if(n&&n.then)return n.then((function(){}))}}();return Promise.resolve(r&&r.then?r.then(n):n())}catch(i){return Promise.reject(i)}},h.getProvider=function(){try{return Promise.resolve(this.provider)}catch(e){return Promise.reject(e)}},h.getChainId=function(){try{return Promise.resolve(this.provider.chainId)}catch(e){return Promise.reject(e)}},h.getAccount=function(){try{return Promise.resolve(this.provider.request({method:"eth_requestAccounts"})).then((function(e){return e[0]}))}catch(e){return Promise.reject(e)}},h.deactivate=function(){this.provider.removeListener("chainChanged",this.handleChainChanged),this.provider.removeListener("accountsChanged",this.handleAccountsChanged)},h.close=function(){try{return this.provider.close(),this.emitDeactivate(),Promise.resolve()}catch(e){return Promise.reject(e)}},h.handleChainChanged=function(e){console.log("Handling 'chainChanged' event with payload",e),this.emitUpdate({chainId:e})},h.handleAccountsChanged=function(e){console.log("Handling 'accountsChanged' event with payload",e),this.emitUpdate({account:e[0]})},c}(r.a)}}]);
//# sourceMappingURL=59.59971498.chunk.js.map