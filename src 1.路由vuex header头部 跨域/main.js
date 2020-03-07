import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  './api'
import store from './vuex'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
