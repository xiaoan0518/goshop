<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.isRouterShow"/>
  </div>
</template>
<script>

import Footer from './components/Footer.vue'

// import {reqUserInfo} from './api'
// import {ACTIONUSER} from './vuex/actions.type'
export default {
  // 名字
  name: 'App',
  components: {
    // 注册组件
    Footer
  },

  // async mounted() {
  //   // 自动登录（使用cooken解决）
  //  const result =  await reqUserInfo()
  //  if (result.code ===0) {
  //   //  拿到user
  //   const user = result.data
  //    console.log(user);
  //   //  页面每次加载中心调用action///user是持久化Cooke你存储一天
  //   this.$store.dispatch('actionUser',user)
  //   // this.$store.commit(ACTIONUSER,user)
  //  }
  // },

  
  
}
</script>

<style>

</style>
