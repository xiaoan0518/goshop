<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.isRouterShow"/>
  </div>
</template>
<script>

import Footer from './components/Footer.vue'

export default {
  // 名字
  name: 'App',
  components: {
    // 注册组件
    Footer
  },

  
  
}
</script>

<style>

</style>
