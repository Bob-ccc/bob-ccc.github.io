(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d32c477"],{"2d3b":function(t,s,o){"use strict";o.r(s);var a=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"search"},[o("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词"},on:{input:t.onInput,search:t.onSearch},scopedSlots:t._u([{key:"left",fn:function(){return[o("div",{staticClass:"back",on:{click:t.back}},[o("van-icon",{attrs:{name:"arrow-left"}})],1)]},proxy:!0},{key:"action",fn:function(){return[o("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.value,callback:function(s){t.value=s},expression:"value"}}),o("div",{directives:[{name:"show",rawName:"v-show",value:0==t.status,expression:"status==0"}],staticClass:"hotwords-box clearfix"},[o("p",[t._v("热门搜索")]),t._l(t.hotwords,(function(s,a){return o("div",{key:a,staticClass:"hotword fl",on:{click:function(o){return t.changeValue(s)}}},[o("span",[t._v(t._s(a+1))]),t._v(" "+t._s(s)+" ")])}))],2),o("div",{directives:[{name:"show",rawName:"v-show",value:0==t.status,expression:"status==0"}],staticClass:"historywords-box"},[o("p",[t._v("历史搜索")]),t._l(t.historywords,(function(s,a){return o("div",{key:a,staticClass:"historywords",on:{click:function(o){return t.changeValue(s)}}},[t._v(" "+t._s(s)+" ")])}))],2),o("div",{directives:[{name:"show",rawName:"v-show",value:1==t.status,expression:"status==1"}],staticClass:"auto-complete"},t._l(t.autowords,(function(s,a){return o("p",{key:a,on:{click:function(o){return t.changeValue(s)}}},[t._v(t._s(s))])})),0),o("div",{directives:[{name:"show",rawName:"v-show",value:2==t.status,expression:"status==2"}],staticClass:"searchList"},t._l(t.bookList,(function(s,a){return o("div",{key:a,staticClass:"search-book",on:{click:function(o){return t.goDetail(s._id)}}},[o("div",{staticClass:"img-box"},[o("img",{staticClass:"auto-img",attrs:{src:s.cover,alt:""}})]),o("div",{staticClass:"text-box"},[o("div",{staticClass:"title-box"},[o("div",{staticClass:"title"},[t._v(t._s(s.title))]),o("div",{staticClass:"author"},[t._v(t._s(s.author))])]),o("div",{staticClass:"shorIntro"},[t._v(t._s(s.shortIntro))]),o("div",{staticClass:"tags"},[o("span",[t._v(t._s(s.retentionRatio)+"%留存")])])])])})),0)],1)},i=[],e=(o("d81d"),o("fb6a"),o("a434"),o("4de5"),{data:function(){return{value:"",hotwords:[],autowords:[],bookList:[],historywords:[],status:0}},created:function(){this.getHotwords(),this.getHistorywords()},methods:{back:function(){this.$router.go(-1)},getHistorywords:function(){var t=localStorage.getItem("SEARCH");if(t){if(0==JSON.parse(t).length)return;for(var s=0;s<JSON.parse(t).length;s++)this.historywords.push(JSON.parse(t)[s]);localStorage.setItem("SEARCH",JSON.stringify(this.historywords))}else t=[],localStorage.setItem("SEARCH",JSON.stringify(t))},onInput:function(){var t=this;this.status=1,this.axios({method:"GET",url:"/auto-complete?query="+this.value}).then((function(s){if(t.autowords=[],0!=s.data.keywords.length)for(var o=0;o<s.data.keywords.length;o++)t.autowords.push(s.data.keywords[o])}))},changeValue:function(t){this.value=t;for(var s=0;s<this.historywords.length;s++)this.historywords[s]==t&&this.historywords.splice(s,1);this.historywords.unshift(t),localStorage.setItem("SEARCH",JSON.stringify(this.historywords)),this.onSearch()},onSearch:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/search?keyword="+this.value}).then((function(s){t.$toast.clear(),t.status=2,t.bookList=s.data.books,t.bookList.map((function(t){return[t.cover=unescape(t.cover.slice(7))]}))}))},getHotwords:function(){var t=this;this.axios({method:"GET",url:"/search-hotwords"}).then((function(s){t.hotwords=[];for(var o=0;o<8;o++)t.hotwords.push(s.data.searchHotWords[o].word)}))},goDetail:function(t){var s=this;this.$store.dispatch("detailStore/setBookIdListById",t),this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios.all([this.axios({method:"GET",url:"/book-info/"+t}),this.axios({method:"GET",url:"/book-sources?view=summary&book="+t})]).then((function(t){s.$toast.clear(),s.$store.dispatch("detailStore/setBookDetail",t[0].data),s.$store.dispatch("detailStore/setBookOriginIdListById",t[1].data[0]._id),s.$router.push({name:"Detail"})})).catch((function(t){s.$toast.clear()}))}},watch:{value:function(t){""==t&&(this.status=0)}}}),r=e,n=o("2877"),c=Object(n["a"])(r,a,i,!1,null,null,null);s["default"]=c.exports},"4de5":function(t,s,o){}}]);
//# sourceMappingURL=chunk-5d32c477.7702e368.js.map