import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  './api'
// 引入validate.js文件
import './validate.js'
import store from './vuex'
import Star from './components/Star.vue'

Vue.component('Star', Star)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
