<template>
  <div class="page">
    <headersec tabname="我的地址"></headersec>
    <transition :name="slidename">
      <div class="container" v-show="mainarea">
        <div v-show="!havePage">
          <nopage></nopage>
        </div>
        <div v-show="havePage">
          <div class="address-item" v-for="addressItem in this.$store.state.address" @click="onChooseAddress(addressItem)">
            <p>{{addressItem}}</p>
          </div>
        </div>
      </div>
    </transition>
    <div class="pageBottom" @click="onAddAddress">
      <span class="tabbar-label">新增地址</span>
    </div>

  </div>
</template>
<script>
  import Headersec from '../base/HeaderSec'
  import { mapGetters, mapMutations } from 'vuex'
  import Nopage from '../base/NoPage'
  export default {
    data(){
      return{
        slidename:'slide-go',
        mainarea: false,
        havePage:false
      }
    },
    components:{
      Headersec,
      Nopage
    },
    mounted(){
      const that = this
      that.mainarea = true
      if (this.$store.state.address.length ===0){
        this.havePage = false
      } else {
        this.havePage = true
      }
      if (this.$store.state.comname === 'addressadd'){
        this.slidename = 'slide-back'
      } else{
        this.slidename = 'slide-go'
      }
      this.setComname('address')
    },
    methods:{
      ...mapMutations({
        setComname:'SET_COMNAME',
        setChooseaddress:'SET_CHOOSEADDRESS',
        setIschoose:'SET_ISCHOOSE'
      }),
      onChooseAddress(item){
        if (this.$store.state.ischoose==1){
          this.setChooseaddress(item)
          this.$router.push('./orderwait')
          this.setIschoose(2)
        }
      },
      onAddAddress(){
        this.$router.push('./addaddress')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../static/less/variable.less';
  .pageBottom {
    position: fixed;
    bottom: 0;
    background: @theme_background;
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    color: @base_color;
    font-size: .28rem;
    text-align: center;
  }

  .address-item {
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .28rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
</style>
