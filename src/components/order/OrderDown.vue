<template>
  <div class="page orderpage">
    <v-touch @swipleft="onSwipeLeft()" @swiperight="onSwipeRight()">
      <headersec tabname="我的订单" ref="noback"></headersec>
      <ordertab :urlRouter="$route.path"></ordertab>
      <transition :anme="slidename">
        <div class="ordercontainer" v-show="mainarea">
          <img src="../../../build/github.png" alt=""/>
          <p>已完成页面</p>
        </div>
      </transition>
    </v-touch>
  </div>
</template>
<script>
  import Headersec from '../base/HeaderSec'
  import Ordertab from '../base/OrderTab'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data(){
      return{
        slidename:'slide-go',
        mainarea:false
      }
    },
    methods:{
      onSwipeLeft(){
        this.$router.push('./order')
      },
      onSwipeRight(){
        this.$router.push('./waitreceive')
      },
      ...mapMutations({
        setOrdertab:'SET_ORDERTAB'
      })
    },
    components:{
      Headersec,
      Ordertab
    },
    mounted(){
      this.$refs.noback.isBack=false
      this.mainarea = true
      this.setOrdertab(5)
    }
  }
</script>
