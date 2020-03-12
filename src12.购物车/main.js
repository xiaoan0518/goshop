import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  './api'
import './mock/mock-server'
// 引入validate.js文件
import './validate.js'
import store from './vuex'
import Star from './components/Star.vue'
import CartControl from './components/CartControl.vue'
import { Button } from 'mint-ui';
Vue.prototype.$store = store


Vue.component(Button.name, Button);
Vue.component('Star', Star)
Vue.component('CartControl', CartControl)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
