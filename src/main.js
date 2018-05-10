// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
var VueTouch = require('vue-touch')
require('../mock')
fastclick.attach(document.body)

Vue.use(Vuex)
Vue.prototype.$http=axios;
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {            //配置滑动区域为左滑动，解决和滚动事件的冲突
  direction: 'horizontal',
  threshold: 200
}
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {                //懒加载声明错误图和占位图
  preLoad: 1.3,
  error: './static/img/github.png',
  loading: './static/img/github.png',
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
