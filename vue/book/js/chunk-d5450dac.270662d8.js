(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5450dac"],{"30bc":function(a,t,e){},"93a0":function(a,t,e){a.exports=e.p+"img/xuanhuan.67ff0aac.jpg"},c57c:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"classify"},[e("van-nav-bar",{attrs:{"left-text":"分类"},on:{"click-right":a.search},scopedSlots:a._u([{key:"right",fn:function(){return[e("van-icon",{attrs:{name:"search",color:"#000",size:"24"},on:{click:a.goSearch}})]},proxy:!0}])}),e("div",{staticClass:"banner-box"},[e("h2",[a._v("猜你喜欢")]),e("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},a._l(a.bannerData,(function(t,i){return e("van-swipe-item",{key:i},[e("img",{staticClass:"auto-img",attrs:{src:t.img},on:{click:function(e){return a.goClassifyList(t.gender,t.name)}}}),e("div",{staticClass:"banner-title"},[a._v(a._s(t.name))])])})),1)],1),e("van-tabs",{staticClass:"tabs-box",attrs:{sticky:"","offset-top":"81px","line-width":"15px",color:"#f99222",animated:"",swipeable:""},model:{value:a.active,callback:function(t){a.active=t},expression:"active"}},a._l(a.classifyData,(function(t,i){return e("van-tab",{key:i,attrs:{title:t.tab}},[e("div",{staticClass:"content"},a._l(t.data,(function(t,n){return e("div",{key:n,staticClass:"type-box",on:{click:function(e){return a.goClassifyList(i,t.name)}}},[e("div",{staticClass:"img-box"},[e("img",{staticClass:"auto-img",attrs:{src:t.bookCover,alt:""}})]),e("div",{staticClass:"type-name"},[a._v(a._s(t.name))])])})),0)])})),1)],1)},n=[],s=(e("d81d"),e("fb6a"),e("30bc"),{name:"Classify",data:function(){return{active:0,classifyData:{male:{tab:"男生",data:[]},female:{tab:"女生",data:[]},picture:{tab:"漫画",data:[]},press:{tab:"出版",data:[]}},bannerData:[{gender:"female",name:"古代言情",img:e("da59")},{gender:"male",name:"玄幻",img:e("93a0")},{gender:"male",name:"仙侠",img:e("f755")},{gender:"female",name:"科幻",img:e("f067")}]}},created:function(){this.getClassifyData()},methods:{search:function(){},getClassifyData:function(){var a=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/categories"}).then((function(t){for(var e in a.$toast.clear(),a.classifyData)a.classifyData[e].data=t.data[e],a.classifyData[e].data.map((function(a){a.bookCover=unescape(a.bookCover[0].slice(7))}))})).catch((function(t){a.$toast.clear()}))},goClassifyList:function(a,t){this.$router.push({name:"ClassifyList",query:{gender:a,major:t}})},goSearch:function(){this.$router.push({name:"Search"})}}}),c=s,o=e("2877"),r=Object(o["a"])(c,i,n,!1,null,null,null);t["default"]=r.exports},da59:function(a,t,e){a.exports=e.p+"img/yanqing.0eac72f7.jpg"},f067:function(a,t,e){a.exports=e.p+"img/kehuan.b410ba88.jpg"},f755:function(a,t,e){a.exports=e.p+"img/xianxia.90d37c7c.jpg"}}]);
//# sourceMappingURL=chunk-d5450dac.270662d8.js.map