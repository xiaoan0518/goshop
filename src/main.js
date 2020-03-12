import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import loding from './common/stylus/loding.gif'
import  './api'
import './mock/mock-server'
// 引入validate.js文件
import './validate.js'
import store from './vuex'
import Star from './components/Star.vue'
import CartControl from './components/CartControl.vue'
import { Button } from 'mint-ui';


// 注册全局组件
Vue.component(Button.name, Button);
Vue.component('Star', Star)
Vue.component('CartControl', CartControl)
// 声明使用懒加载
Vue.use(VueLazyload, {
  loding
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
