(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"0626":function(e,t,o){},"8cc5":function(e,t,o){"use strict";o.r(t);var a=o("8ffe"),r=o("b670");for(var n in r)"default"!==n&&function(e){o.d(t,e,function(){return r[e]})}(n);o("a825");var s=o("2877"),c=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"8ffe":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];o.d(t,"a",function(){return a}),o.d(t,"b",function(){return r})},a825:function(e,t,o){"use strict";var a=o("0626"),r=o.n(a);r.a},b670:function(e,t,o){"use strict";o.r(t);var a=o("f833"),r=o.n(a);for(var n in a)"default"!==n&&function(e){o.d(t,e,function(){return a[e]})}(n);t["default"]=r.a},f833:function(e,t,o){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(o("a34a")),n=o("2f62");function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t,o,a,r,n,s){try{var c=e[n](s),i=c.value}catch(l){return void o(l)}c.done?t(i):Promise.resolve(i).then(a,r)}function i(e){return function(){var t=this,o=arguments;return new Promise(function(a,r){var n=e.apply(t,o);function s(e){c(n,a,r,s,i,"next",e)}function i(e){c(n,a,r,s,i,"throw",e)}s(void 0)})}}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},a=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),a.forEach(function(t){u(e,t,o[t])})}return e}function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var m=function(){return o.e("components/share").then(o.bind(null,"f477"))},h=JSON.parse(localStorage.getItem("params")),d={components:{share:m},data:function(){return{checkFormNow:!1,choose:!0,overflowHide:!0,goodsDetails:{},Review:{},LowRate:"",detail:{},specClass:"none",specClass2:"none",specChildListcheck:!0,specSelected:{imgurl:"http://pavo.elongstatic.com/i/Hotel120_120/000fnUA4.jpg"},favorite:!0,shareList:[],specList:[{id:1,name:"房型"}],specChildList:[],roomsImg:[],roomsImg2:[],room:[],spList:[],content:[],hotelId:"",createOrderData:[],checkForm:{}}},computed:l({},(0,n.mapState)(["hasLogin","userInfo"])),onLoad:function(){var t=i(r.default.mark(function t(o){var n,s,c,i,l,u,m,d=this;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=o.id,console.log(e(n," at pages\\product\\product.vue:245")),this.hotelId=n,this.nowTime=(new Date).getTime().toString(),this.timestamp=this.nowTime.substring(0,10),s=this.userInfo,s.token&&(this.checkForm.token=s.token,this.checkForm.hotelId=n,this.checkForm.checkInDate=h.startTime,this.checkForm.checkOutDate=h.endTime),c=this.timestamp,i={Version:"1.28",Local:"zh_CN",Request:{ArrivalDate:h.startTime,DepartureDate:h.endTime,HotelIds:n,PaymentType:"All",Options:"1,2,3,4"}},l=JSON.stringify(i),u=encodeURIComponent(l),m=this.$md5(c+this.$md5(l+h.appkey)+h.secretKey),a.request({url:this.api+"/api/el",data:{elUrl:"http://api.elong.com/rest?format=json&method=hotel.detail&user=ea6caf12111045358e50018742b4c47a&timestamp="+c+"&signature="+m+"&data="+u},success:function(t){var o=[];o=t.data.data;var r=decodeURIComponent(o);d.resdata=JSON.parse(r).Result.Hotels;var s=JSON.parse(r).Result.Hotels;s.map(function(t,o){(t.HotelId=n)&&(console.log(e(t.Detail.ThumbNailUrl," at pages\\product\\product.vue:296")),d.detail=t.Detail,d.content=t.Detail,d.LowRate=t.LowRate,d.Review=t.Detail.Review,d.roomww=t.Rooms,d.room=t.Rooms,d.Imgs=t.Images)}),d.Imgs.map(function(e,t){"8"==e.Type&&"true"==e.IsRoomCoverImage&&e.Locations.map(function(e,t){"0"==e.WaterMark&&"1"==e.SizeType?d.roomsImg.push(e.Url):"1"==e.WaterMark&&"7"==e.SizeType&&d.roomsImg2.push(e.Url)})}),a.setStorage({key:"historyImg",data:d.roomsImg}),d.roomww.map(function(e,t){e.RatePlans.map(function(o,a){""==o.BookingRuleIds&&1==o.isPriceLimittedProduct&&o.NightlyRates.map(function(a,r){1==a.Status&&(d.specChildList.push({id:t+1,pid:1,RoomTypeId:o.RoomTypeId,name:e.Name,price:o.TotalRate,imgurl:e.ImageUrl,rateplanId:o.RatePlanId,breakfastNum:a.BreakfastCount,RatePlanName:o.RatePlanName}),d.specChildList.length>1&&(d.specChildListcheck=!1))})})})}}),t.next=15,this.$api.json("shareList");case 15:this.shareList=t.sent;case 16:case"end":return t.stop()}},t,this)}));function o(e){return t.apply(this,arguments)}return o}(),methods:{toggleSpec:function(){var e=this;"show"===this.specClass?(this.specClass="hide",setTimeout(function(){e.specClass="none"},250)):"none"===this.specClass&&(this.specClass="show")},toggleSpec2:function(){var e=this;"show"===this.specClass2?(this.specClass2="hide",setTimeout(function(){e.specClass2="none"},250)):"none"===this.specClass2&&(this.specClass2="show")},toggleSpec3:function(e){this.overflowHide=!this.overflowHide},selectSpec:function(t,o){var r=this;this.choose=!1;var n=this.specChildList;n.forEach(function(e){e.pid===o&&r.$set(e,"selected",!1)}),this.$set(n[t],"selected",!0),this.specSelected={},n.forEach(function(e){!0===e.selected&&(r.specSelected=e,r.checkForm.roomNum=1,r.checkForm.roomTypeId=e.RoomTypeId,r.checkForm.totalPrice=e.price,r.checkForm.basePrice=e.price,r.checkForm.rateplanId=e.rateplanId,r.checkForm.breakfastNum=e.breakfastNum,r.checkForm.name=e.name,r.checkForm.RatePlanName=e.RatePlanName)}),a.request({url:this.api+"/api/orderValidate",data:this.checkForm,success:function(t){if(console.log(e(t.data," at pages\\product\\product.vue:411")),r.$api.msg(t.data.msg),1==t.data.code){r.checkFormNow=!0;var o={token:r.userInfo.token,hotelId:r.hotelId,checkInDate:h.startTime,checkOutDate:h.endTime,roomTypeId:r.checkForm.roomTypeId,totalPrice:r.checkForm.totalPrice,basePrice:r.checkForm.basePrice,rateplanId:r.checkForm.rateplanId,breakfastNum:r.checkForm.breakfastNum,hotelName:r.detail.HotelName,hotelTel:r.detail.Phone,roomName:r.checkForm.name,rateplanName:r.checkForm.RatePlanName,orderId:t.data.orderId,linkName:r.userInfo.nickname,roomNum:1};a.setStorage({key:"createOrderData",data:o}),localStorage.setItem("createOrderData2",JSON.stringify(o))}}})},share:function(){this.$refs.share.toggleMask()},toFavorite:function(){this.favorite=!this.favorite},buy:function(){a.navigateTo({url:"/pages/order/createOrder?id=".concat(this.hotelId)})},stopPrevent:function(){}}};t.default=d}).call(this,o("0de9")["default"],o("6e42")["default"])}},[["9aea","common/runtime","common/vendor"]]]);