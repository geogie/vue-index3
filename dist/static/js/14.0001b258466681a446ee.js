webpackJsonp([14],{Sg1f:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Dd8w"),s=r.n(a),i=r("3nlj"),n=r("d4Oi"),o=r("NYxO"),c={data:function(){return{slidename:"slide-go",mainarea:!1}},computed:s()({},Object(o.b)(["this.$store.state.ordercur"])),methods:s()({onSwipeLeft:function(){this.$router.push("./waitreceive")},onSwipeRight:function(){this.$router.push("./waitpay")}},Object(o.c)({setOrdercur:"SET_ORDERCUR",setOrdertab:"SET_ORDERTAB"})),components:{Headersec:i.a,Ordertab:n.a},mounted:function(){this.mainarea=!0,this.$refs.noback.isBack=!1,this.setOrdercur(3),this.$store.state.ordercur<this.$store.state.ordertab?this.slidename="slide-back":this.slidename="slide-go",this.setOrdertab(3)}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page orderpage"},[a("v-touch",{on:{swipeleft:function(t){e.onSwipeLeft()},swiperight:function(t){e.onSwipeRight()}}},[a("headersec",{ref:"noback",attrs:{tabname:"我的订单"}}),e._v(" "),a("ordertab",{attrs:{urlRouter:e.$route.path}}),e._v(" "),a("transition",{attrs:{name:e.slidename}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.mainarea,expression:"mainarea"}],staticClass:"ordercontainer"},[a("img",{attrs:{src:r("2Rdd")}}),e._v(" "),a("p",[e._v("待发货页面")])])])],1)],1)},staticRenderFns:[]},u=r("VU/8")(c,d,!1,null,null,null);t.default=u.exports}});
//# sourceMappingURL=14.0001b258466681a446ee.js.map