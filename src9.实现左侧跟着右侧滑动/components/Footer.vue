<template>
    <div>
    <footer class="footer_guide border-1px">
  <a href="javascript:;" 
  class="guide_item on"   
  :class="{'on':$route.path ==='/msite'}"
  @click="$router.replace('/msite')">
    <span class="item_icon">
      <i class="iconfont icon-waimai"></i>
     
    </span>
    <span>外卖</span>
  </a>
   <!-- <router-link to="/search">Go to Foo</router-link> -->
    <!-- <router-view></router-view> -->
  <a href="javascript:;" 
  class="guide_item" 
  :class="{'on':$route.path ==='/search'}"
  @click="$router.push('/search')">
    <span class="item_icon">
      <i class="iconfont icon-soushuo"></i>
    </span>
    <span>搜索</span>
  </a>
  <a href="javascript:;" 
  class="guide_item" 
  :class="{'on':$route.path ==='/order'}"
  @click="$router.push('/order')">
    <span class="item_icon">
      <i class="iconfont icon-icon-"></i>
    </span>
    <span>订单</span>
  </a>
  <a href="javascript:;" 
  class="guide_item" 
  :class="{'on':$route.path ==='/profile'}"
  @click="$router.push('/profile')">
    <span class="item_icon">
      <i class="iconfont icon-wode"></i>
    </span>
    <span>我的</span>
  </a>
</footer>

    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
};

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../common/stylus/mixins.styl'
  .footer_guide
    top-border-1px(#e4e4e4)
    // 固定定位
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    // 弹性盒子，相当于左浮动
    display flex
    .guide_item
      display flex
      // 让所有弹性盒模型对象的子元素都有相同的长度
      flex 1
      // 居中
      text-align center
      // 项目将垂直显示，正如一个列一样。
      flex-direction column
      // 元素位于容器的中心。
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
