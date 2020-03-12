// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由的配置的数组
import routes from './routes.js'
import store from '../vuex'
// 声明使用
Vue.use(VueRouter)
// 配置路由
const router= new VueRouter({
  mode: 'history',
  routes
})

  
  router.beforeEach((to, form, next) => {
    const paths = ['/a', '/b']
    const path = to.path
    // 如果目标path时需要检查的，判断用户不存在，跳转到登录界面
    if (paths.indexOf(path) !== -1 && !store.state.user.user._id) {
      return next('/login')
    }
    // 放心
    next()
  })

export default router
