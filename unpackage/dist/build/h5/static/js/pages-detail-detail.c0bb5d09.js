(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{"064b":function(e,t,i){"use strict";i.r(t);var a=i("b6c0"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},"12dd":function(e,t,i){var a=i("f848");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("784909c6",a,!0,{sourceMap:!1,shadowMode:!1})},"4bef":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-swiper",{staticClass:"carousel",attrs:{"indicator-dots":"true",circular:"true",interval:"3000",duration:"700"}},e._l(e.data.imgList,function(t,a){return i("v-uni-swiper-item",{key:a},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{class:t.loaded,attrs:{src:t.src,mode:"aspectFill"},on:{load:function(t){t=e.$handleEvent(t),e.imageOnLoad("imgList",a)}}})],1)],1)}),1),i("v-uni-view",{staticClass:"scroll-view-wrapper"},[i("v-uni-scroll-view",{staticClass:"episode-panel",class:{Skeleton:!e.loaded},attrs:{"scroll-x":""}},e._l(e.data.episodeList,function(t,a){return i("v-uni-view",{key:a,class:{current:e.currentEpd===t},on:{click:function(t){t=e.$handleEvent(t),e.changeEpd(a)}}},[e._v(e._s(t))])}),1)],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{class:{Skeleton:!e.loaded}},[e._v(e._s(e.data.title))]),i("v-uni-text",{class:{Skeleton:!e.loaded}},[e._v(e._s(e.data.title2))])],1),i("v-uni-text",{staticClass:"yticon icon-xia"})],1),i("v-uni-view",{staticClass:"actions"},[i("v-uni-text",{staticClass:"yticon icon-fenxiang2",on:{click:function(t){t=e.$handleEvent(t),e.share(t)}}}),i("v-uni-text",{staticClass:"yticon icon-Group-"}),i("v-uni-text",{staticClass:"yticon icon-shoucang",class:{active:e.data.favorite},on:{click:function(t){t=e.$handleEvent(t),e.favorite(t)}}})],1),i("v-uni-view",{staticClass:"guess"},[i("v-uni-view",{staticClass:"section-tit"},[e._v("猜你喜欢")]),i("v-uni-view",{staticClass:"guess-list"},e._l(e.data.guessList,function(t,a){return i("v-uni-view",{key:a,staticClass:"guess-item"},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{class:t.loaded,attrs:{src:t.src,mode:"aspectFill"},on:{load:function(t){t=e.$handleEvent(t),e.imageOnLoad("guessList",a)}}})],1),i("v-uni-text",{staticClass:"title clamp",class:{Skeleton:!e.loaded}},[e._v(e._s(t.title))]),i("v-uni-text",{staticClass:"clamp",class:{Skeleton:!e.loaded}},[e._v(e._s(t.title2))])],1)}),1)],1),i("v-uni-view",{staticClass:"evalution"},[i("v-uni-view",{staticClass:"section-tit"},[e._v("评论")]),i("v-uni-view",{staticClass:"eva-list",class:{Skeleton:!e.loaded}},e._l(e.data.evaList,function(t,a){return i("v-uni-view",{key:a,staticClass:"eva-item"},[i("v-uni-image",{attrs:{src:t.src,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"eva-right"},[i("v-uni-text",[e._v(e._s(t.nickname))]),i("v-uni-text",[e._v(e._s(t.time))]),i("v-uni-view",{staticClass:"zan-box"},[i("v-uni-text",[e._v(e._s(t.zan))]),i("v-uni-text",{staticClass:"yticon icon-shoucang"})],1),i("v-uni-text",{staticClass:"content"},[e._v(e._s(t.content))])],1)],1)}),1)],1),i("share",{ref:"share",attrs:{contentHeight:580,shareList:e.shareList}})],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"9a5f":function(e,t,i){"use strict";i.r(t);var a=i("4bef"),n=i("064b");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("ca08");var l=i("2877"),o=Object(l["a"])(n["default"],a["a"],a["b"],!1,null,"eda43206",null);t["default"]=o.exports},b6c0:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=a(i("3b8d")),s=a(i("f4772")),l={components:{share:s.default},data:function(){return{loaded:!1,currentEpd:1,data:{guessList:[{},{},{},{}]},shareList:[]}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark(function e(){var t,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.json("detailData");case 2:return t=e.sent,e.next=5,this.$api.json("shareList");case 5:i=e.sent,this.loaded=!0,this.data=t,this.shareList=i,uni.setNavigationBarTitle({title:t.title});case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{imageOnLoad:function(e,t){this.$set(this.data[e][t],"loaded","loaded")},changeEpd:function(e){var t=this.data.episodeList,i=t[e];this.$api.msg("切换到第".concat(i,"项")),this.currentEpd=i},share:function(){this.$refs.share.toggleMask()},favorite:function(){this.data.favorite=!this.data.favorite}},onBackPress:function(){if(this.$refs.share.show)return this.$refs.share.toggleMask(),!0}};t.default=l},ca08:function(e,t,i){"use strict";var a=i("12dd"),n=i.n(a);n.a},f848:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-eda43206]{background:#f8f8f8}.carousel[data-v-eda43206]{height:200px}.carousel .image-wrapper[data-v-eda43206]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;width:100%;height:100%;overflow:hidden}.carousel .image-wrapper uni-image[data-v-eda43206]{width:100%;height:100%}.scroll-view-wrapper[data-v-eda43206]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?90?%;padding:%?20?% 0 %?20?% %?40?%;background:#fff}.episode-panel[data-v-eda43206]{white-space:nowrap;width:100%}.episode-panel uni-view[data-v-eda43206]{display:inline-block;margin-right:%?30?%;width:%?56?%;font-size:%?32?%;color:#606266}.episode-panel uni-view.current[data-v-eda43206]{color:#07a7a7}.info[data-v-eda43206]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?10?% %?40?%;background:#fff}.info .title[data-v-eda43206]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:%?36?%;color:#303133}.info .title uni-text[data-v-eda43206]:last-child{font-size:%?24?%;color:#909399;margin-top:%?4?%}.info .title uni-text:last-child.Skeleton[data-v-eda43206]{width:%?220?%}.info .yticon[data-v-eda43206]{font-size:%?44?%;color:#606266;margin:0 %?10?% 0 %?30?%}.actions[data-v-eda43206]{padding:%?10?% %?28?%;background:#fff}.actions .yticon[data-v-eda43206]{font-size:%?46?%;color:#606266;padding:%?10?% %?12?%}.actions .yticon.active[data-v-eda43206]{color:#ff4443}.actions .yticon[data-v-eda43206]:nth-child(2){font-size:%?50?%}.section-tit[data-v-eda43206]{font-size:%?30?%;color:#303133;margin-bottom:%?30?%;text-align:center}.guess[data-v-eda43206]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?30?% %?40?% %?10?%;margin-top:%?16?%;background:#fff}.guess-list[data-v-eda43206]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}.guess-item[data-v-eda43206]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden;min-width:40%;margin-right:%?26?%;padding-bottom:%?40?%}.guess-item[data-v-eda43206]:nth-child(2n){margin-right:0}.guess-item uni-image[data-v-eda43206]{width:100%;height:%?200?%;border-radius:%?10?%}.guess-item uni-text[data-v-eda43206]{font-size:%?24?%;color:#909399}.guess-item uni-text.Skeleton[data-v-eda43206]{width:%?180?%}.guess-item uni-text.Skeleton.title[data-v-eda43206]{width:%?140?%}.guess-item uni-text.title[data-v-eda43206]{font-size:%?30?%;color:#303133;margin-top:%?16?%;margin-bottom:%?8?%}.evalution[data-v-eda43206]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#fff;margin-top:%?16?%;padding:%?40?% 0}.eva-item[data-v-eda43206]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?% %?40?%}.eva-item uni-image[data-v-eda43206]{width:%?60?%;height:%?60?%;border-radius:50px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:%?24?%}.eva-right[data-v-eda43206]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?26?%;color:#909399;position:relative}.eva-right .zan-box[data-v-eda43206]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:base-line;-webkit-align-items:base-line;-ms-flex-align:base-line;align-items:base-line;position:absolute;top:%?10?%;right:%?10?%}.eva-right .zan-box .yticon[data-v-eda43206]{margin-left:%?8?%}.eva-right .content[data-v-eda43206]{font-size:%?28?%;color:#333;padding-top:%?20?%}body.?%PAGE?%[data-v-eda43206]{background:#f8f8f8}',""])}}]);