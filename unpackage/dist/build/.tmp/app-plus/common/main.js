(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"7b29":function(t,e,o){},"8b4a":function(t,e,o){"use strict";o.r(e);var n=o("c8a0"),a=o.n(n);for(var u in n)"default"!==u&&function(t){o.d(e,t,function(){return n[t]})}(u);e["default"]=a.a},c8a0:function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o("2f62");function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){c(t,e,o[e])})}return t}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var r={computed:u({},(0,a.mapState)(["userInfo"])),methods:u({},(0,a.mapMutations)(["login","logout"])),onLaunch:function(){var e=this,o=t.getStorageSync("userInfo")||"";o.id?(t.getStorage({key:"userInfo",success:function(t){e.login(t.data)}}),t.request({url:this.api+"/api/loadUserInfo",data:{token:this.userInfo.token},success:function(t){0==t.data.code?(e.$api.msg(t.data.msg),e.logout()):1==t.data.code?console.log(n("登录状态成功"," at App.vue:44")):-1==t.data.code?(console.log(n("登录状态异常"," at App.vue:46")),e.logout()):-2==t.data.code&&(console.log(n("登录状态超时"," at App.vue:49")),e.logout())}})):(this.$api.msg("还未登录"),setTimeout(function(){t.navigateTo({url:"/pages/public/login"})},1500))},onShow:function(){console.log(n("App Show"," at App.vue:67"))},onHide:function(){console.log(n("App Hide"," at App.vue:70"))}};e.default=r}).call(this,o("6e42")["default"],o("0de9")["default"])},ecfc:function(t,e,o){"use strict";o.r(e);var n=o("8b4a");for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);o("f9d6");var u,c,r=o("2877"),i=Object(r["a"])(n["default"],u,c,!1,null,null,null);e["default"]=i.exports},f9d6:function(t,e,o){"use strict";var n=o("7b29"),a=o.n(n);a.a}},[["a5fe","common/runtime","common/vendor"]]]);