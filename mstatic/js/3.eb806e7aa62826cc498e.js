webpackJsonp([3],{"3cXf":function(t,i,e){t.exports={default:e("VWiu"),__esModule:!0}},VWiu:function(t,i,e){var a=e("DH3n"),s=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},a3Yh:function(t,i,e){"use strict";i.__esModule=!0;var a,s=e("liLe"),n=(a=s)&&a.__esModule?a:{default:a};i.default=function(t,i,e){return i in t?(0,n.default)(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}},aA3l:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("IHPB"),s=e.n(a),n=e("3cXf"),l=e.n(n),o=e("a3Yh"),c=e.n(o),d=e("SXXC"),r=e.n(d),v=e("d8Q8"),u=e("pLux"),m=e("zf2T");function _(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0==i?Object(m.a)(t):i>0?Object(m.a)(t).times(Object(m.a)("1"+"0".repeat(i))):Object(m.a)(t).div(Object(m.a)("1"+"0".repeat(-i)))}function h(t){return _(t,-18)}var p=void 0,f={name:"pool",data:function(){var t;return t={isLp:!0,isApprove:!0,isEnterMargin:!1,isConnect:!1,noNetwork:!0,menuShow:!1,isslp:!0,wallet:"0.0000",mytradingvolumecurrent:"--",walletSymbol:"",networkText:"",address:"",noNetworkText:"",withdrawLiuqidity:"",depositLiquidity:"",minAddLiquidity:"",claimenetwork:"",money:"",unclaimed:"--",mytradingpencentage:"--",settimeout:"-- h -- m -- s",my_liquidity:"--",liquidity_margin:"",liquidity_volume:"",total_liquidity:"--",PerLiquidityShare:"--",maxRemovableShares:"",pencentage:"--",maxBalance:"",balance:"",baseToken:"",shares:"",chainId:""},c()(t,"baseToken",""),c()(t,"account",""),c()(t,"address",""),c()(t,"agement",""),c()(t,"symbol",""),c()(t,"apy","--"),c()(t,"totaltradingvolumecurrent",""),c()(t,"myHarvestDeriLp",""),c()(t,"claimed",""),c()(t,"unclaimed",""),c()(t,"myHarvestDeriLp",""),c()(t,"myHarvestDeriTrade",""),c()(t,"claimenetwork",""),c()(t,"address_pool",""),c()(t,"checkIndex","mining"),t},components:{menut:v.a},watch:{liquidity_margin:{handler:function(t,i){this.isEnterMargin=0!=t&&""!=t}},liquidity_volume:{handler:function(t,i){this.isEnterMargin=0!=t&&""!=t}}},mounted:function(){this.chainId=this.$route.params.chainId,this.baseToken=this.$route.params.baseToken,this.address_pool=this.$route.params.pooladdress,"0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd"==this.address_pool?(this.slpConnectWallet(),this.isslp=!1):this.connectWallet()},methods:{hide:function(t){this.menuShow=t},removeMax:function(){this.liquidity_volume=this.maxRemovableShares},addMax:function(){this.liquidity_margin=this.maxBalance},reset:function(){this.getWalletBalance(this.agement),this.getSpecification(this.agement),this.getLiquidityInfo(this.agement),this.getUserWalletBalence(this.chainId,this.account),this.getPoolInfoApy(this.chainId,this.baseToken),this.liquidity_margin="",this.liquidity_volume=""},removeSlpLiquidity:function(){var t=this,i=r()("#removeslpbut"),e=this.liquidity_volume,a=this.maxRemovableShares,n=_(this.maxRemovableShares);if(_(e).gt(n))alert("The input liquidity cannot exceed  "+a);else if(+e<=0||isNaN(e))alert("Invalid Liquidity!");else{var o=JSON.parse(l()(this.agement));o.push(e),this.disableButton(i),u.B.apply(void 0,s()(o)).then(function(e){e.success||alert("failure of transaction"),r()("#removeLiquidity").modal("hide"),t.enableButton(i),t.reset()})}},addSlpLiquidity:function(){var t=this,i=r()("#addslpbut"),e=this.liquidity_margin,a=_(e),n=_(this.maxBalance);if(a.gt(n))alert("not sufficient funds");else if(+e<=0||isNaN(e))alert("Please enter the correct format!");else{this.disableButton(i);var o=JSON.parse(l()(this.agement));o.push(e),u.c.apply(void 0,s()(o)).then(function(e){console.log(e),e.success||alert("failure of transaction"),r()("#addLiquidity").modal("hide"),t.enableButton(i),t.reset()})}},mintDToken:function(){var t=this,i=r()("#claimmyderi");0!=this.unclaimed?parseInt(Date.now()/1e3)%28800<1800?alert("Claiming DERI is disabled during first 30 minutes of each epoch"):(this.disableButton(i),console.log(),Object(u.y)(this.chainId,this.accoun).then(function(e){if(console.log(e),t.enableButton(i),e.success){t.unclaimed=0,clearInterval(p);var a=t;p=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}else alert("Claim failed");t.reset()})):alert("Sorry,no DERI to claim yet")},tmintDToken:function(){var t=this,i=r()("#tradeclaimmyderi");0!=this.unclaimed?parseInt(Date.now()/1e3)%28800<1800?alert("Claiming DERI is disabled during first 30 minutes of each epoch"):(this.disableButton(i),Object(u.y)(this.chainId,this.account).then(function(e){if(t.enableButton(i),e.success){t.unclaimed=0,clearInterval(p);var a=t;p=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}else alert("Claim failed");t.reset()})):alert("Sorry,no DERI to claim yet")},addLiquidity:function(){var t=this,i=r()("#addbut"),e=this.liquidity_margin,a=_(e),n=_(this.maxBalance);if(a.gt(n))alert("not sufficient funds");else if(+e<+this.minAddLiquidity)alert("The input liquidity shall not be less than "+this.minAddLiquidity);else if(+e<=0||isNaN(e))alert("Please enter the correct format!");else{this.disableButton(i);var o=JSON.parse(l()(this.agement));o.push(e),u.c.apply(void 0,s()(o)).then(function(e){console.log(e),e.success||alert("failure of transaction"),r()("#addLiquidity").modal("hide"),t.enableButton(i),t.reset()})}},removeLiquidity:function(){var t=this,i=r()("#removebut"),e=this.liquidity_volume,a=+this.maxRemovableShares,n=(_(this.maxRemovableShares),_(e)),o=a-e;if(o<1&&0!=o)alert('Leaving staking balance of smaller than 1 is not allowed. Please click "MAX" to remove all if you are to withdraw all of your liquidity.');else if(n.gt(bgMaxBalance))alert("The input liquidity cannot exceed  "+a);else if(+e<=0||isNaN(e))alert("Invalid Liquidity!");else{var c=JSON.parse(l()(this.agement));c.push(e),this.disableButton(i),u.A.apply(void 0,s()(c)).then(function(e){e.success||alert("failure of transaction"),r()("#removeLiquidity").modal("hide"),t.enableButton(i),t.reset()})}},getWalletSymbol:function(t){switch(t){case"1":this.walletSymbol="ETH",this.networkText="ETHEREUM";break;case"56":this.walletSymbol="BNB",this.networkText="BSC";break;case"128":this.walletSymbol="HT",this.networkText="HECO";break;case"3":this.walletSymbol="ETH",this.networkText="ROPSTEN";break;case"42":this.walletSymbol="ETH",this.networkText="KOVAN";break;case"97":this.walletSymbol="BNB",this.networkText="BSC TESTNET";break;case"256":this.walletSymbol="HT",this.networkText="HECO TESTNET";break;default:this.walletSymbol=""}},current:function(){var t=parseInt(Date.now()/1e3),i=28800*parseInt(t/28800)+28800-t,e=parseInt(i/3600),a=parseInt(i%3600/60),s=parseInt(i%60);this.settimeout=e+" h "+a+" m "+s+" s"},connectWallet:function(){var t=this;Object(u.e)().then(function(i){if(i.success){var e=ethereum.networkVersion;if(console.log(e,t.chainId),e!=t.chainId)return t.noNetwork=!1,void(t.noNetworkText="Unsupported Chain ID "+e+"!");t.account=i.account,t.address=i.account.slice(0,6)+"..."+i.account.slice(i.account.length-4,i.account.length),t.isConnect=!0,t.agement=[t.chainId,t.baseToken,t.account];var a=t;setInterval(function(){a.current()},1e3),t.isUnlocked(t.agement),t.getWalletBalance(t.agement),t.getSpecification(t.agement),t.getLiquidityInfo(t.agement),t.getUserWalletBalence(t.chainId,t.account),t.getPoolInfoApy(t.chainId,t.baseToken),t.getUserInfoAll(t.account),sessionStorage.setItem("chainId",t.chainId),sessionStorage.setItem("baseToken",t.baseToken),p=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}})},slpConnectWallet:function(){var t=this;Object(u.e)().then(function(i){if(i.success){var e=ethereum.networkVersion;if(console.log(e,t.chainId),e!=t.chainId)return t.noNetwork=!1,void(t.noNetworkText="Unsupported Chain ID "+e+"!");t.account=i.account,t.address=i.account.slice(0,6)+"..."+i.account.slice(i.account.length-4,i.account.length),t.isConnect=!0,t.agement=[t.chainId,t.address_pool,t.account];var a=t;setInterval(function(){a.current()},1e3),t.getWalletBalance(t.agement),t.getSlpLiquidityInfo(t.agement),t.getUserWalletBalence(t.chainId,t.account),t.getSlpPoolInfoApy(t.chainId,t.address_pool),t.getUserInfoAll(t.account),sessionStorage.setItem("chainId",t.chainId),p=setInterval(function(){a.getUserInfoAll(a.account)},18e4)}})},getSlpPoolInfoApy:function(){var t=this;Object(u.q)("1","0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd").then(function(i){var e=.22008070161007/t.total_liquidity;e=(100*e).toFixed(2)+"%";var a=h(i.apy);a="0"==a?"--":(100*a).toFixed(2)+"%",t.apy=a+" + "+e})},getSlpLiquidityInfo:function(t){var i=this;u.p.apply(void 0,s()(t)).then(function(t){console.log(t),i.maxRemovableShares=t.shares;var e=+t.liquidity;i.stotal=e,i.my_liquidity=(+t.shares).toFixed(2),i.total_liquidity=e,i.PerLiquidityShare=1,i.PerLiquidityShare=i.PerLiquidityShare.toFixed(6),i.money=t.shares*i.PerLiquidityShare,i.symbol="DERI-USDT SLP",i.pencentage=t.shares/t.liquidity*100,isNaN(i.pencentage)?i.pencentage="0%":"0"==t.shares?i.pencentage="0%":i.pencentage=i.pencentage.toFixed(2)+"%"})},getLiquidityInfo:function(t){var i=this;u.l.apply(void 0,s()(t)).then(function(t){console.log(t),i.maxRemovableShares=t.shares;var e=+t.poolLiquidity;if(i.stotal=e,i.my_liquidity=t.shares,i.total_liquidity=e,"NaN"==t.shareValue)i.PerLiquidityShare="--";else{var a=+t.shareValue;i.PerLiquidityShare=a.toFixed(6),i.money=t.shares*i.PerLiquidityShare}i.pencentage=t.shares*t.shareValue/t.poolLiquidity*100,isNaN(i.pencentage)?i.pencentage="0%":"0"==t.shares?i.pencentage="0%":i.pencentage=i.pencentage.toFixed(2)+"%"})},getUserInfoInPool:function(t){var i=this;u.u.apply(void 0,s()(t)).then(function(t){i.mytradingvolumecurrent=h(t.volume1h)})},getWalletBalance:function(t){var i=this;u.w.apply(void 0,s()(t)).then(function(t){console.log("balance",t),i.maxBalance=t,i.balance=(+t).toFixed(2)})},getSpecification:function(t){var i=this;u.r.apply(void 0,s()(t)).then(function(t){console.log(t),i.minAddLiquidity=t.minAddLiquidity,i.symbol=t.bSymbol})},getUserWalletBalence:function(t,i){var e=this;console.log(t),Object(u.v)(t,i).then(function(i){e.wallet=(+i).toFixed(4),e.getWalletSymbol(t)})},isUnlocked:function(t){var i=this;u.x.apply(void 0,s()(t)).then(function(t){t?(r()("input").attr("disabled",!1),i.isApprove=!0):(r()("input").attr("disabled",!0),i.isApprove=!1)})},unlock:function(){var t=this,i=r()("#Unlock");this.disableButton(i);var e=this.agement;u.D.apply(void 0,s()(e)).then(function(e){t.enableButton(i),t.isUnlocked(t.isUnlocked)})},getPoolInfoApy:function(t,i){var e=this;Object(u.n)(t,i).then(function(t){var i=h(t.apy);e.totaltradingvolumecurrent=h(t.volume1h),e.apy="0"==i?"--":(100*i).toFixed(2)+"%"})},getUserInfoAll:function(t){var i=this;Object(u.t)(t).then(function(t){i.claimed=h(t.total).toFixed(2),console.log(t),t.valid?i.unclaimed=(+t.amount).toFixed(2):i.unclaimed=0,console.log(t),i.myHarvestDeriLp=(+t.lp).toFixed(2),i.myHarvestDeriTrade=(+t.trade).toFixed(2),i.getClaimeNetwork(t.chainId)})},getClaimeNetwork:function(t){switch(t){case"1":this.claimenetwork="ETHEREUM";break;case"56":this.claimenetwork="BSC";break;case"128":this.claimenetwork="HECO";break;case"3":this.claimenetwork="ROPSTEN";break;case"42":this.claimenetwork="KOVAN";break;case"97":this.claimenetwork="BSC TESTNET";break;case"256":this.claimenetwork="HECO TESTNET";break;default:this.claimenetwork=""}},disableButton:function(t){t.find("span.spinner").show(),t.attr("disabled",!0)},enableButton:function(t){t.find("span.spinner").hide(),t.attr("disabled",!1)}}},y={render:function(){var t=this,i=this,a=i.$createElement,s=i._self._c||a;return s("div",{attrs:{id:"poolmining"}},[s("div",{staticClass:"modal fade",attrs:{id:"addLiquidity",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[i._m(0),i._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"margin_box_info"},[s("div",[i._v("Wallet Balance")]),i._v(" "),s("div",{staticClass:"money"},[s("span",[s("span",{staticClass:"bt_balance"},[i._v(i._s(i.balance))]),i._v(" "),s("br"),i._v(i._s(i.baseToken))]),i._v(" "),s("span",{staticClass:"add"})]),i._v(" "),s("div",{staticClass:"enter_margin"},[s("div",{staticClass:"input_margin"},[s("div",{staticClass:"box"},[s("div",{directives:[{name:"show",rawName:"v-show",value:i.isEnterMargin,expression:"isEnterMargin"}],staticClass:"amount"},[i._v("\n                    LIQUIDITY VOLUME\n                  ")]),i._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:i.liquidity_margin,expression:"liquidity_margin"}],staticClass:"margin_value",attrs:{type:"number",placeholder:"LIQUIDITY VOLUME"},domProps:{value:i.liquidity_margin},on:{input:function(t){t.target.composing||(i.liquidity_margin=t.target.value)}}})])]),i._v(" "),s("div",[i._v(i._s(i.baseToken))])]),i._v(" "),s("div",{staticClass:"max"},[i._v("\n              MAX: "),s("span",{staticClass:"max_num"},[i._v(i._s(this.maxBalance))]),i._v(" "),s("span",{on:{click:i.addMax}},[i._v("ADD ALL")])]),i._v(" "),s("div",{staticClass:"add_margin_btn"},[s("button",{staticClass:"margin_btn",attrs:{id:"addbut"},on:{click:i.addLiquidity}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                DEPOSIT\n              ")])])])])])])]),i._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"removeLiquidity",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[i._m(1),i._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"margin_box_info"},[s("div",[i._v("Shares Available")]),i._v(" "),s("div",{staticClass:"money"},[s("span",[s("span",{staticClass:"bt_balance"},[i._v(i._s(i.my_liquidity))])]),i._v(" "),s("span",{staticClass:"remove"})]),i._v(" "),s("div",{staticClass:"enter_margin"},[s("div",{staticClass:"input_margin"},[s("div",{staticClass:"box"},[s("div",{directives:[{name:"show",rawName:"v-show",value:i.isEnterMargin,expression:"isEnterMargin"}],staticClass:"amount"},[i._v("\n                    LIQUIDITY VOLUME\n                  ")]),i._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:i.liquidity_volume,expression:"liquidity_volume"}],staticClass:"margin_value",attrs:{type:"number",placeholder:"LIQUIDITY VOLUME"},domProps:{value:i.liquidity_volume},on:{input:function(t){t.target.composing||(i.liquidity_volume=t.target.value)}}})])]),i._v(" "),s("div",[i._v(i._s(i.baseToken))])]),i._v(" "),s("div",{staticClass:"max"},[i._v("\n              MAX: "),s("span",{staticClass:"max_num"},[i._v(i._s(this.maxRemovableShares))]),i._v(" "),s("span",{on:{click:i.removeMax}},[i._v("REMOVE ALL")])]),i._v(" "),s("div",{staticClass:"add_margin_btn"},[s("button",{staticClass:"margin_btn",attrs:{id:"removebut"},on:{click:i.removeLiquidity}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                WITHDRAW\n              ")])])])])])])]),i._v(" "),s("div",{staticClass:"nav"},[s("img",{staticClass:"menu",attrs:{src:e("+HEJ"),alt:""},on:{click:function(){t.menuShow=!0}}}),i._v(" "),i._m(2)]),i._v(" "),s("div",{staticClass:"min",class:i.menuShow?"blur":""},[s("div",{staticClass:"middle"},[s("div",{staticClass:"pool_network"},[i._v("POOL @ "+i._s(i.networkText))]),i._v(" "),s("div",{staticClass:"check_trade_liquidity"},[s("div",{staticClass:"liquidity_mining",class:i.isLp?"action":"",on:{click:function(){t.isLp=!0}}},[i._v("\n              LIUQIDITY MINING\n              ")]),i._v(" "),s("div",{staticClass:"trade_mining",class:i.isLp?"":"action",on:{click:function(){t.isLp=!1}}},[i._v("\n              TRADING MINING\n              ")])]),i._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:i.isLp,expression:"isLp"}],staticClass:"liquidity_info"},[s("div",{staticClass:"claim_box"},[s("div",{staticClass:"odd title"},[i._v("\n                  My Liquidity-Providing Harvest in Current Epoch\n              ")]),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("Current Epoch Remaining Time")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.settimeout))])]),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("\n                  My Harvest in Current Epoch (estimated)\n                  ")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.myHarvestDeriLp)+" DERI")])]),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("Claimed DERI")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.claimed))])]),i._v(" "),i._m(3),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("Unclaimed DERI")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.unclaimed))])]),i._v(" "),s("div",{staticClass:"odd claim_network"},[s("div",{staticClass:"text_title"},[i._v("\n                  Your DERI is on "+i._s(i.claimenetwork)+" . Connect to\n                  "+i._s(i.claimenetwork)+" to claim.\n                  ")])]),i._v(" "),s("div",{staticClass:"claim_btn"},[s("button",{staticClass:"claim",attrs:{id:"claimmyderi"},on:{click:i.mintDToken}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                  CLAIM\n                  ")])])]),i._v(" "),s("div",{staticClass:"liquidity_box"},[s("div",{staticClass:"odd title"},[i._v("Provide "+i._s(i.symbol)+" Earn DERI")]),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("Pool Total Liquidity")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.total_liquidity)+" "+i._s(i.symbol))])]),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("APY")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.apy))])]),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("Liquidity Share Value")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.PerLiquidityShare)+" "+i._s(i.symbol))])]),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("My Liquidity Pencentage")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.pencentage))])]),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("Staked Balance(Shares)")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.my_liquidity))])]),i._v(" "),s("div",{staticClass:"odd claim_network"},[s("div",{staticClass:"text_title money"},[i._v(i._s(i.money)+" "+i._s(i.symbol))])]),i._v(" "),s("div",{staticClass:"liquidity_btn"},[i.isApprove?s("div",{staticClass:"add_remove_liquidity"},[s("button",{staticClass:"add_liquidity",attrs:{"data-toggle":"modal","data-target":"#addLiquidity"}},[i._v("\n                      ADD LIQUIDITY\n                  ")]),i._v(" "),s("button",{staticClass:"remove_liquidity",attrs:{"data-toggle":"modal","data-target":"#removeLiquidity"}},[i._v("\n                      REMOVE LIQUIDITY\n                  ")])]):s("div",{staticClass:"approve"},[s("button",{staticClass:"approve_btn",attrs:{id:"Unlock"},on:{click:i.unlock}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                      APPROVE\n                  ")])])])])]),i._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!i.isLp,expression:"!isLp"}],staticClass:"trade_info"},[s("div",{staticClass:"claim_box"},[s("div",{staticClass:"odd title"},[i._v("My Trading Harvest in Current Epoch")]),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("My Trading Harvest in Current Epoch (Est)")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.myHarvestDeriTrade)+" DERI")])]),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("Claimed DERI")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.claimed))])]),i._v(" "),i._m(4),i._v(" "),i._m(5),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("Unclaimed DERI")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.unclaimed))])]),i._v(" "),i._m(6),i._v(" "),s("div",{staticClass:"claim_btn"},[s("button",{staticClass:"claim",attrs:{id:"tradeclaimmyderi"},on:{click:i.tmintDToken}},[s("span",{staticClass:"spinner spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),i._v("\n                          CLAIM\n                      ")])])]),i._v(" "),s("div",{staticClass:"liquidity_box"},[s("div",{staticClass:"odd title"},[i._v("Trade to Earn DERI")]),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("Total Trading Volume in Current Hour")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.totaltradingvolumecurrent))])]),i._v(" "),s("div",{staticClass:"odd text"},[s("div",{staticClass:"text_title"},[i._v("My Trading Volume in Current Hour")]),i._v(" "),s("div",{staticClass:"text_num"},[i._v(i._s(i.mytradingvolumecurrent))])]),i._v(" "),i._m(7),i._v(" "),i._m(8),i._v(" "),i._m(9),i._v(" "),i._m(10)])])])]),i._v(" "),s("div",{staticClass:"fixed",class:i.menuShow?"blur":""},[i.isConnect?s("button",{staticClass:"connect"},[i._v("\n      "+i._s(i.wallet)+" "+i._s(i.walletSymbol)+" "),s("span",{staticClass:"address"},[i._v(i._s(i.address))])]):s("button",{staticClass:"connect",on:{click:i.connectWallet}},[i._v("\n      Connect to wallet\n    ")])]),i._v(" "),s("div",{staticClass:"menu_left",class:i.menuShow?"anmint":""},[s("menut",{attrs:{checkIndex:i.checkIndex},on:{hide:i.hide}})],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"modal-header"},[i("div",{staticClass:"title"},[this._v("ADD LIQUIDITY")]),this._v(" "),i("div",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[i("span",[this._v("×")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"modal-header"},[i("div",{staticClass:"title"},[this._v("REMOVE LIQUIDITY")]),this._v(" "),i("div",{staticClass:"close",attrs:{"data-dismiss":"modal"}},[i("span",[this._v("×")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("a",{staticClass:"logo",attrs:{href:"http://deri.finance/"}},[i("img",{staticClass:"logo_left",attrs:{src:e("AqYs"),alt:""}}),this._v(" "),i("img",{staticClass:"logo_right",attrs:{src:e("7dpQ"),alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd claim_network"},[i("div",{staticClass:"text_title"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd text"},[i("div",{staticClass:"text_title"}),this._v(" "),i("div",{staticClass:"text_num"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"odd claim_network"},[i("div",{staticClass:"text_title "})])}]};var C=e("C7Lr")(f,y,!1,function(t){e("j+HZ")},"data-v-6b4c71cc",null);i.default=C.exports},"j+HZ":function(t,i){}});