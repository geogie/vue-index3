webpackJsonp([8],{"AkY+":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Dd8w"),r=s.n(a),i=s("3nlj"),o=s("d4Oi"),n=s("Hj6f"),d=s("NYxO"),c={data:function(){return{slidename:"slide-go",mainarea:!1,havePage:!1}},mounted:function(){this.mainarea=!0,this.setOrdercur(1),void 0===this.$store.state.pays?this.havePage=!1:this.havePage=!0,this.$refs.noback.isBack=!1,this.$store.state.ordercur<this.$store.state.ordertab?this.slidename="slide-back":this.slidename="slide-go",this.setOrdertab(1)},components:{Headersec:i.a,Ordertab:o.a,Nopage:n.a},computed:r()({},Object(d.b)(["this.$store.state.pays","this.$store.state.ordercur","this.$store.state.ordertab"])),methods:r()({onSwipeLeft:function(){this.$router.push("./waitpay")},onSwipeRight:function(){this.$router.push("./orderdown")}},Object(d.c)({setOrdercur:"SET_ORDERCUR",setOrdertab:"SET_ORDERTAB"}))},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page orderpage"},[s("v-touch",{on:{swipeleft:function(t){e.onSwipeLeft()},swiperight:function(t){e.onSwipeRight()}}},[s("headersec",{ref:"noback",attrs:{tabname:"我的订单"}}),e._v(" "),s("ordertab",{attrs:{urlRouter:e.$route.path}}),e._v(" "),s("transition",{attrs:{name:e.slidename}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.mainarea,expression:"mainarea"}],staticClass:"container"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.havePage,expression:"!havePage"}]},[s("nopage")],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.havePage,expression:"havePage"}],staticClass:"order-item"},e._l(e.$store.state.pays,function(t){return s("div",[s("div",{staticClass:"order-top flex-between"},[s("p",[e._v("订单号xxxxx")]),e._v(" "),s("p",[e._v("已支付")])]),e._v(" "),s("div",{staticClass:"order-content"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"order-img"},[s("img",{attrs:{src:t.GoodsImage}})]),e._v(" "),s("div",{staticClass:"order-text"},[s("p",{staticClass:"goods-name text-ellipsis"},[e._v(e._s(t.GoodsName))]),e._v(" "),s("p",{staticClass:"goods-num"},[e._v("x"+e._s(t.GoodsNum))]),e._v(" "),s("p",{staticClass:"goods-price"},[e._v("¥"+e._s(t.GoodsPrice))])])])])])}))])])],1)],1)},staticRenderFns:[]};var h=s("VU/8")(c,v,!1,function(e){s("NhX4")},"data-v-7e861277",null);t.default=h.exports},NhX4:function(e,t){}});
//# sourceMappingURL=8.40a607c361a99c2e68f9.js.map