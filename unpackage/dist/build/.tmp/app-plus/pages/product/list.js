(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/list"],{"5a15":function(t,e,n){},"5cf3":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a")),r=n("2f62");function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,a,o,r,i){try{var s=t[r](i),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(a,o)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var r=t.apply(e,n);function i(t){s(r,a,o,i,c,"next",t)}function c(t){s(r,a,o,i,c,"throw",t)}i(void 0)})}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"6a5c"))},p=1,f={components:{uniLoadMore:d},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,cateList:[],goodsList:[],hotelList:[],sortType:"LowRate",compareFlag:!1}},computed:u({},(0,r.mapState)(["userInfo"])),onLoad:function(t){this.cateId=t.tid,this.loadCateList(t.fid,t.sid),this.loadData()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){},onReachBottom:function(){this.loadMoreData()},methods:{loadCateList:function(){var t=c(o.default.mark(function t(e,n){var a,r;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("cateList");case 2:a=t.sent,r=a.filter(function(t){return t.pid==e}),r.forEach(function(t){var e=a.filter(function(e){return e.pid==t.id});t.child=e}),this.cateList=r;case 6:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),loadData:function(){var e=c(o.default.mark(function e(){var n,r,i,s,c,u,l=this,d=arguments;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:d.length>0&&void 0!==d[0]?d[0]:"add",d.length>1?d[1]:void 0,this.nowTime=(new Date).getTime().toString(),this.timestamp=this.nowTime.substring(0,10),n=JSON.parse(localStorage.getItem("params")),r=this.timestamp,i={Version:"1.36",Local:"zh_CN",Request:{ArrivalDate:n.startTime,DepartureDate:n.endTime,CityId:"1401",QueryText:n.hotelName,PaymentType:"All",Sort:"Default",PageIndex:p,PageSize:"10",ResultType:"1,2,3,4"}},s=JSON.stringify(i),c=encodeURIComponent(s),u=this.$md5(r+this.$md5(s+n.appkey)+n.secretKey),t.request({url:this.api+"/api/el",data:{elUrl:"http://api.elong.com/rest?format=json&method=hotel.list&user=ea6caf12111045358e50018742b4c47a&timestamp="+r+"&signature="+u+"&data="+c},success:function(t){var e=[];e=t.data.data;var n=decodeURIComponent(e);if(null!=JSON.parse(n)){var o=[];o=JSON.parse(n).Result.Hotels,l.list=JSON.parse(n).Result.Hotels,console.log(a(l.list," at pages\\product\\list.vue:180")),o.map(function(t){t.LowRate=Math.round(t.LowRate*l.userInfo.pricePencent)}),l.goodsList=o}else console.log(a("数据不存在"," at pages\\product\\list.vue:187"))}});case 11:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),loadMoreData:function(){var e=c(o.default.mark(function e(){var n,r,i,s,c,u,l=this,d=arguments;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:d.length>0&&void 0!==d[0]?d[0]:"add",d.length>1?d[1]:void 0,this.goodsList,this.nowTime=(new Date).getTime().toString(),this.timestamp=this.nowTime.substring(0,10),n=JSON.parse(localStorage.getItem("params")),p++,r=this.timestamp,i={Version:"1.36",Local:"zh_CN",Request:{ArrivalDate:n.startTime,DepartureDate:n.endTime,CityId:"1401",QueryText:n.hotelName,PaymentType:"All",Sort:"Default",PageIndex:p,PageSize:"10",ResultType:"1,2,3,4"}},s=JSON.stringify(i),c=encodeURIComponent(s),u=this.$md5(r+this.$md5(s+n.appkey)+n.secretKey),t.request({url:this.api+"/api/el",data:{elUrl:"http://api.elong.com/rest?format=json&method=hotel.list&user=ea6caf12111045358e50018742b4c47a&timestamp="+r+"&signature="+u+"&data="+c},success:function(t){var e=[];e=t.data.data;var n=decodeURIComponent(e),o=[];o=JSON.parse(n).Result.Hotels,l.list=JSON.parse(n).Result.Hotels,console.log(a(p,l.list," at pages\\product\\list.vue:243")),o.map(function(t){t.LowRate=Math.round(t.LowRate*l.userInfo.pricePencent)}),l.goodsList=l.goodsList.concat(o)}});case 13:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),sort:function(t){switch(this.sortType=t,this.compareFlag=!this.compareFlag,this.goodsList.sort(this.compare(t)),t){case"in_price":this.sortType="in_price",this.recommendlist.sort(this.compare("in_price"));break;case"now_price":this.sortType="now_price",this.recommendlist.sort(this.compare("now_price"));break;case"increase":this.sortType="increase",this.recommendlist.sort(this.compare("increase"));break}},compare:function(t){return this.compareFlag?function(e,n){var a=e[t],o=n[t];return o-a}:function(e,n){var a=e[t],o=n[t];return a-o}},toggleCateMask:function(t){var e=this,n="show"===t?10:300,a="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=a},n)},changeCate:function(e){this.cateId=e.id,this.toggleCateMask(),t.pageScrollTo({duration:300,scrollTop:0})},navToDetailPage:function(e){var n=e.HotelId;t.navigateTo({url:"/pages/product/product?id=".concat(n)})},stopPrevent:function(){}}};e.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},"88a6":function(t,e,n){"use strict";n.r(e);var a=n("5cf3"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"9e26":function(t,e,n){"use strict";var a=n("5a15"),o=n.n(a);o.a},bdec:function(t,e,n){"use strict";n.r(e);var a=n("dcec"),o=n("88a6");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("9e26");var i=n("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},dcec:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})}},[["39c4","common/runtime","common/vendor"]]]);