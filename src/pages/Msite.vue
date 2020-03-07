<template>
   
      <div class="msite">
          <!--首页头部-->
          <!-- 从通用组件拿过来数据，所有组件可以随意编写 -->
          <HeaderTop :title='address.name'>
            <!-- 左半部分 -->
            <router-link slot="search" to="/search" class="header_search">
                <i class="iconfont icon-soushuo"></i>
            </router-link>
            <!-- 又半部分 -->
              <router-link slot="login" to="/login" class="header_login">
                  <span class="header_login_text">登录|注册</span>
              </router-link>
          </HeaderTop>
    
      
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/1.jpg">
                  </div>
                  <span>甜品饮品</span>
                </a>
                
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
       <ShopList></ShopList>
      </div>
    
</template>

<script>
import HeaderTop from '../components/HeaderTop'
import {mapState} from 'vuex'
import ShopList from '../components/ShopList'
// 轮播图
// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'
export default {
  components:{
    HeaderTop,
    ShopList
  },
    mounted() {
      // 分发action
     this.$store.dispatch('getAddress' )
     this.$store.dispatch('getCategory' )
  },

  computed: {
    ...mapState(['address'])
  },
  
   
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../common/stylus/mixins.styl'
.msite
    width 100%
    .header
      background-color #02a774   //头部颜色
      position fixed    //头部定位
      z-index 100//头部层级
      left 0
      top 0//头部定位位置
      width 100%      
      height 45px//头部宽高
      .header_search//下边是icon突变
        position absolute   
        left 15px
        top 50%
        transform translateY(-50%)//居中
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #ffffff
      .header_title//中间的文本
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)   //大小居中
        width 50%
        color #fff
        text-align center  //文字居中
        .header_title_text  //文字大小
          font-size 20px
          color #fff
          display block
      .header_login  //登录注册
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)//混合
      margin-top 45px
      height 200px
      background #fff //轮播最外侧盒子高度
      .swiper-container //容器
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex  //浮动
            justify-content center  //位于容器的中心
            align-items flex-start  //位于容器的开头
            flex-wrap wrap  //规定灵活的项目在必要的时候拆行或拆列。
            .link_to_food  //一个a标签大小
              width 25%
              .food_container  //图片转成块元素  独占一行
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block   //图片不独占一行
                  width 50px
                  height 50px
              span
                display block   //文字
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination   
          >span.swiper-pagination-bullet-active
            background #02a774
    
</style>
