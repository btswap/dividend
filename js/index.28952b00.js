(function(t){function a(a){for(var s,o,r=a[0],l=a[1],c=a[2],u=0,g=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&g.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(g.length)g.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,r=1;r<e.length;r++){var l=e[r];0!==i[l]&&(s=!1)}s&&(n.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={index:0},n=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="https://cdn.jsdelivr.net/gh/btswap/dividend/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var d=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0081":function(t,a,e){"use strict";var s=e("843d"),i=e.n(s);i.a},"04b3":function(t,a){t.exports="data:image/png;base64,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"},"4ffd":function(t,a){t.exports="data:image/png;base64,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"},"56d7":function(t,a,e){"use strict";e.r(a);e("6611"),e("450d");var s=e("e772"),i=e.n(s),n=(e("1f1a"),e("4e4b")),o=e.n(n),r=(e("a7cc"),e("df33")),l=e.n(r),c=(e("be4f"),e("896a")),d=e.n(c),u=(e("1951"),e("eedf")),g=e.n(u),m=(e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("2b0e")),p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Nav"),e("Main")],1)},h=[],D=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"nav-container"},[s("header",[s("div",{staticClass:"left"},[s("img",{attrs:{src:e("4ffd"),alt:""}}),s("span",{staticClass:"text"},[t._v("BTswap")])]),s("div",{staticClass:"right"},[s("a",{staticClass:"text",attrs:{href:"http://btswap.com/whitepaper.pdf",target:"_blank"}},[t._v("Whitepaper")]),s("a",{staticClass:"text github",attrs:{href:"https://github.com/btswap",target:"_blank"}},[t._v("Github")]),s("a",{staticClass:"text",attrs:{href:"https://btswap.com/guidelines.pdf",target:"_blank"}},[t._v("Guidelines")]),s("a",{staticClass:"btn",attrs:{href:"https://ex.btswap.com/",target:"_blank"}},[t._v("Trade Now")])])])])}],f={name:"Nav"},w=f,b=(e("9117"),e("2877")),A=Object(b["a"])(w,D,v,!1,null,"3376e43c",null),y=A.exports,T=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main-container"},[s("img",{staticClass:"bg1",attrs:{src:e("756d"),alt:""}}),s("img",{staticClass:"bg2",attrs:{src:e("ff95"),alt:""}}),s("div",{staticClass:"main-content"},[s("div",{staticClass:"strong-text"},[t._v("BTswap，a Better Way to Trade your crypto")]),s("div",{staticClass:"light-text"},[t._v("Decentralized Liquidity Mining Exchange Based on AMM")]),s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Enter email address"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),s("el-button",{staticClass:"btn",attrs:{loading:t.loading,plain:""},on:{click:t.showModal}},[t._v("Get dividend")])],1),t.msgShow?s("div",{staticClass:"msg-wrap"},[t._v(t._s(t.msg))]):t._e()]),s("NewModal",{attrs:{visible:t.visible,email:t.email},on:{visibleHandle:t.hiddenModal}})],1)},C=[],S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"fade"}},[t.visible?e("div",{staticClass:"modal-container",on:{click:function(a){return a.target!==a.currentTarget?null:t.hideModal(a)}}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("div",{staticClass:"header-item",staticStyle:{width:"30%"}},[e("p",[t._v("Total Investment：")]),e("p",[t._v(t._s(t.modalData.amount)+"ETH")])]),e("div",{staticClass:"header-item"},[e("p",[t._v("Received：")]),e("p",[t._v(t._s(t.modalData.total)+" Phase")])]),e("div",{staticClass:"header-item"},[e("p",[t._v("Remaining：")]),e("p",[t._v(t._s((100*t.modalData.left).toFixed(2))+"%")])]),e("div",{staticClass:"header-item",staticStyle:{width:"30%"}},[e("el-button",{staticClass:"btn",attrs:{loading:t.loading,type:"primary"},on:{click:t.getSome}},[t._v("Withdrawl")])],1)]),t.msgShow?e("div",{staticClass:"msg-wrap"},[t._v(t._s(t.msg))]):t._e(),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"table-header"},[e("p",[t._v("Time")]),e("p",[t._v("Amount")]),e("p",[t._v("Hash")])]),e("div",{staticClass:"table-body"},t._l(t.modalData.data,(function(a,s){return e("div",{key:s,staticClass:"body-item",class:[{"gray-bg":s%2==0}]},[e("p",[t._v(t._s(t.switchTimeFormat(a.createTime)))]),e("p",[t._v(t._s(a.amount))]),a.hash?t._e():e("p",[t._v("pending")]),a.hash?e("a",{staticStyle:{color:"#3498db"},attrs:{href:"https://etherscan.io/tx/"+a.hash,target:"_blank"}},[t._v(t._s(t.getHash(a.hash)))]):t._e()])})),0)])])]):t._e()])},x=[],O=(e("99af"),e("0fb7"),e("f529")),Q=e.n(O),M=e("bc3a"),B=e.n(M),E=(e("3022"),{name:"Nav",props:{visible:Boolean,modalData:Object,address:String},data:function(){return{msg:"",msgShow:!1,loading:!1}},methods:{getSome:function(){var t=this;this.msgShow=!1,this.loading=!0,B()({method:"post",url:"https://api.btswap.com/bonus/api/withdrawl",data:{addr:this.address},responseType:"json"}).then((function(a){t.loading=!1;var e=a.data;console.log(e),0==e.code?(Q()({type:"success",message:"Withdrawl Success！"}),t.$emit("visibleHandle",!1)):(t.msg=e.msg,t.msgShow=!0)})).catch((function(a){console.log(a),t.loading=!1,t.msg=a,t.msgShow=!0}))},hideModal:function(){console.log(11),this.$emit("visibleHandle",!1),this.msgShow=!1},switchTimeFormat:function(t){var a=new Date(t),e=a.getFullYear(),s=a.getMonth()+1,i=a.getDate(),n=a.getHours(),o=a.getMinutes(),r=a.getSeconds();return"".concat(e,"-").concat(this.addZero(s),"-").concat(this.addZero(i)," ").concat(this.addZero(n),":").concat(this.addZero(o),":").concat(this.addZero(r))},addZero:function(t){return t<10?"0"+t:t},getHash:function(t){return t?t.substring(0,6)+"..."+t.substring(t.length-6):""}},destroyed:function(){this.msgShow=!1}}),_=E,N=(e("0081"),Object(b["a"])(_,S,x,!1,null,"56ecedda",null)),k=N.exports,L=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.visible?s("div",{staticClass:"modal-container",on:{click:function(a){return a.target!==a.currentTarget?null:t.hideModal(a)}}},[s("div",{staticClass:"eth-info"},[s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",placeholder:"请输入ETH收款地址"},domProps:{value:t.address},on:{input:function(a){a.target.composing||(t.address=a.target.value)}}}),s("el-button",{staticClass:"btn",attrs:{loading:t.ethBtnLoading,plain:""},on:{click:t.getDividendList}},[t._v("确定")])],1),s("div",{staticClass:"amount-wrap"},[s("div",{staticClass:"amount-item"},[s("p",{staticClass:"amount-title"},[t._v("投资额")]),s("p",{staticClass:"amount-desc"},[t._v(t._s(t.ethData.amount+"ETH"))])]),s("div",{staticClass:"amount-item"},[s("p",{staticClass:"amount-title"},[t._v("代币总金额")]),s("p",{staticClass:"amount-desc"},[t._v(t._s(t.ethData.total+"BT"))])]),s("div",{staticClass:"amount-item"},[s("p",{staticClass:"amount-title"},[t._v("已提现金额")]),s("p",{staticClass:"amount-desc"},[t._v(t._s(t.ethData.withdrawal+"BT"))])])]),s("img",{attrs:{src:e("04b3"),alt:""},on:{click:function(a){return a.target!==a.currentTarget?null:t.hideModal(a)}}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"dig-wrap"},[s("div",{staticClass:"amount-info"},[s("div",{staticClass:"amount-item",staticStyle:{flex:"1"}},[s("span",{staticStyle:{color:"#222A46"}},[t._v("可用金额:")]),s("span",{staticStyle:{color:"#000000"}},[t._v(t._s(t.ethData.free+"BT"))])]),s("div",{staticClass:"amount-item",staticStyle:{flex:"2"}},[s("span",{staticStyle:{color:"#222A46"}},[t._v("质押金额:")]),s("span",{staticStyle:{color:"#000000"}},[t._v(t._s(t.ethData.mine+"BT"))])])]),s("div",{staticClass:"tab-btn-wrap"},[s("div",{staticClass:"btn",class:[{active:"goDig"==t.tab}],on:{click:t.changeTab}},[t._v("去挖矿")]),s("div",{staticClass:"btn",class:[{active:"goWithdrawl"==t.tab}],on:{click:t.changeTab}},[t._v("去提现")])]),"goDig"==t.tab?s("div",{staticClass:"info-input"},[s("div",[s("span",[t._v("挖矿周期：")]),s("el-select",{staticClass:"select-override",attrs:{placeholder:"挖矿周期"},on:{change:t.changeDigTime},model:{value:t.digTimeType,callback:function(a){t.digTimeType=a},expression:"digTimeType"}},t._l(t.selectData,(function(t,a){return s("el-option",{key:a,attrs:{label:t.day+"天",value:t.type}})})),1)],1),s("div",{staticClass:"input-item"},[s("span",[t._v("挖矿金额：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.digAmount,expression:"digAmount"}],attrs:{type:"text",placeholder:"挖矿金额"},domProps:{value:t.digAmount},on:{input:function(a){a.target.composing||(t.digAmount=a.target.value)}}}),s("span",{staticClass:"rate"},[t._v("年化收益率："+t._s(t.rate)+"%")])])]):t._e(),"goWithdrawl"==t.tab?s("div",{staticClass:"info-input"},[t._m(0),s("div",{staticClass:"input-item"},[s("span",[t._v("提现金额：")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.withdrawlAmount,expression:"withdrawlAmount"}],attrs:{type:"text",placeholder:"提现金额"},domProps:{value:t.withdrawlAmount},on:{input:function(a){a.target.composing||(t.withdrawlAmount=a.target.value)}}})])]):t._e(),s("el-button",{staticClass:"confirm-btn",attrs:{loading:t.submitLoading,plain:""},on:{click:t.submit}},[t._v("确定")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"history-wrap"},[s("div",{staticClass:"table-title"},[t._v("Withdraw History")]),t._m(1),s("div",{staticClass:"table-body"},t._l(t.ethData.data,(function(a,e){return s("div",{key:e,staticClass:"body-item",class:[{"gray-bg":e%2==0}]},[s("p",[t._v(t._s(t.switchTimeFormat(a.createTime)))]),s("p",[t._v(t._s(a.amount))]),a.hash?t._e():s("p",[t._v("pending")]),a.hash?s("a",{staticStyle:{color:"#3498db"},attrs:{href:"https://etherscan.io/tx/"+a.hash,target:"_blank"}},[t._v(t._s(t.getHash(a.hash)))]):t._e()])})),0)])]):t._e()},F=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("span",[t._v("手续费：")]),e("input",{attrs:{readonly:"",type:"text",value:"100BT"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-header"},[e("p",[t._v("Time")]),e("p",[t._v("Amount")]),e("p",[t._v("Hash")])])}],j=(e("4160"),e("159b"),{name:"NewModal",props:{visible:Boolean,modalData:Object,email:String},data:function(){return{tab:"goDig",digTimeType:"",ethBtnLoading:!1,submitLoading:!1,address:"",msg:"",digAmount:"",withdrawlAmount:"",ethData:{amount:"0",total:"0",free:"0",mine:"0",withdrawal:"0",data:[]},selectData:[],rate:"0",detailShow:!1}},mounted:function(){var t=this;B()({method:"get",url:"https://api.btswap.com/bonus/api/getRate",responseType:"json"}).then((function(a){var e=a.data;console.log(e),t.selectData=e.data})).catch((function(t){console.log(t)}))},methods:{changeTab:function(){"goDig"==this.tab?this.tab="goWithdrawl":this.tab="goDig"},changeDigTime:function(t){var a=this;console.log(t),this.selectData.forEach((function(e){e.type==t&&(a.rate=e.rate)}))},hideModal:function(){console.log(11),this.$emit("visibleHandle",!1),this.tab="goDig",this.digTimeType="",this.address="",this.digAmount="",this.withdrawlAmount="",this.ethData={amount:"0",total:"0",free:"0",mine:"0",withdrawal:"0",data:[]},this.selectData=[],this.rate="0",this.detailShow=!1},getDividendList:function(){var t=this;this.ethBtnLoading=!0,B()({method:"post",url:"https://api.btswap.com/bonus/api/getDividendList",data:{addr:this.address,email:this.email},responseType:"json"}).then((function(a){t.ethBtnLoading=!1;var e=a.data;console.log(e),0==e.code?(t.detailShow=!0,t.ethData=e):Q()({type:"error",message:e.msg})})).catch((function(a){console.log(a),t.ethBtnLoading=!1,Q()({type:"error",message:a})}))},submit:function(){var t=this;if("goDig"==this.tab){if(this.digAmount>this.ethData.free)return void Q()({type:"error",message:"挖矿金额不能大于可用金额"});this.submitLoading=!0,B()({method:"post",url:"https://api.btswap.com/bonus/api/mortgage",data:{addr:this.address,email:this.email,amount:this.digAmount,type:this.digTimeType},responseType:"json"}).then((function(a){t.submitLoading=!1;var e=a.data;console.log(e),0==e.code?(Q()({type:"success",message:"Success！"}),t.$emit("visibleHandle",!1)):Q()({type:"error",message:e.msg})})).catch((function(a){console.log(a),t.submitLoading=!1,Q()({type:"error",message:a})}))}else{if(!this.address)return void Q()({type:"error",message:"ETH地址不能为空！"});if(this.withdrawlAmount>this.ethData.free)return void Q()({type:"error",message:"提现金额不能大于可用金额"});if(this.withdrawlAmount<=100)return void Q()({type:"error",message:"提现金额要大于手续费"});this.submitLoading=!0,B()({method:"post",url:"https://api.btswap.com/bonus/api/withdrawl",data:{addr:this.address,email:this.email,amount:this.withdrawlAmount},responseType:"json"}).then((function(a){t.submitLoading=!1;var e=a.data;console.log(e),0==e.code?(Q()({type:"success",message:"Withdrawl Success！"}),t.$emit("visibleHandle",!1)):Q()({type:"error",message:e.msg})})).catch((function(a){console.log(a),t.submitLoading=!1,Q()({type:"error",message:a})}))}},switchTimeFormat:function(t){var a=new Date(t),e=a.getFullYear(),s=a.getMonth()+1,i=a.getDate(),n=a.getHours(),o=a.getMinutes(),r=a.getSeconds();return"".concat(e,"-").concat(this.addZero(s),"-").concat(this.addZero(i)," ").concat(this.addZero(n),":").concat(this.addZero(o),":").concat(this.addZero(r))},addZero:function(t){return t<10?"0"+t:t},getHash:function(t){return t?t.substring(0,6)+"..."+t.substring(t.length-6):""},destroyed:function(){}}}),X=j,Z=(e("d8af"),Object(b["a"])(X,L,F,!1,null,"5303da2e",null)),H=Z.exports,Y={name:"Main",components:{Modal:k,NewModal:H},data:function(){return{visible:!1,email:"",tableData:{},msg:"",msgShow:!1,loading:!1}},methods:{showModal:function(){var t=this;this.msgShow=!1,this.loading=!0,B()({method:"post",url:"https://api.btswap.com/bonus/api/checkEmail",data:{email:this.email},responseType:"json"}).then((function(a){t.loading=!1;var e=a.data;console.log(e),e.data?(t.msgShow=!1,t.tableData=e,t.visible=!0):(t.msg=e.msg,t.msgShow=!0)})).catch((function(a){console.log(a),t.msg=a,t.msgShow=!0,t.loading=!1}))},hiddenModal:function(t){this.visible=t},getSome:function(){this.visible=!1}}},R=Y,W=(e("84ac"),Object(b["a"])(R,T,C,!1,null,"7cf3458c",null)),z=W.exports,q={name:"App",components:{Nav:y,Main:z}},I=q,J=(e("5c0b"),Object(b["a"])(I,p,h,!1,null,null,null)),K=J.exports;e("b20f");m["default"].use(g.a),m["default"].use(d.a),m["default"].use(l.a),m["default"].use(o.a),m["default"].use(i.a),m["default"].config.productionTip=!1,new m["default"]({render:function(t){return t(K)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),i=e.n(s);i.a},"756d":function(t,a,e){t.exports=e.p+"img/bg1.a09aa834.png"},"843d":function(t,a,e){},"84ac":function(t,a,e){"use strict";var s=e("ba30"),i=e.n(s);i.a},9117:function(t,a,e){"use strict";var s=e("d136"),i=e.n(s);i.a},"92e8":function(t,a,e){},"9c0c":function(t,a,e){},b20f:function(t,a,e){},ba30:function(t,a,e){},d136:function(t,a,e){},d8af:function(t,a,e){"use strict";var s=e("92e8"),i=e.n(s);i.a},ff95:function(t,a,e){t.exports=e.p+"img/bg2.8c0a62fa.png"}});