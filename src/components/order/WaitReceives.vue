<template>
  <div class="page orderpage">
    <v-touch @swipeleft="onSwipeLeft()" @swiperight="onSwipeRight()">
      <headersec tabname="我的订单" ref="noback"></headersec>
      <ordertab :urlRouter="$route.path"></ordertab>
      <transition :name="slidename">
        <div class="ordercontainer" v-show="mainarea">
          <img src="../../../static/img/github.png" alt=""/>
          <p>待收货页面</p>
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
        mainarea:false,
        slidename:'slide-go'
      }
    },
    methods:{
      onSwipeLeft(){
        this.$router.push('./orderdown')
      },
      onSwipeRight(){
        this.$router.push('./waitdeliver')
      },
      ...mapMutations({
        setOrdercur:'SET_ORDERCUR',
        setOrdertab:'SET_ORDERTAB'
      })
    },
    components:{
      Headersec,
      Ordertab
    },
    mounted(){
      this.mainarea = true
      this.$refs.noback.isBack = false
      this.setOrdercur(4)
      if (this.$store.state.ordercur<this.$store.state.ordertab) {
        this.slidename='slide-back'
      }else {
        this.slidename = 'slide-go'
      }
      this.setOrdertab(4)
    }
  }
</script>
