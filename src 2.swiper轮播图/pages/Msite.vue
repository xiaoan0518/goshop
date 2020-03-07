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
              <!-- 遍历一个大数组 -->
              <div class="swiper-slide" v-for="(category, index) in categorysArr" :key="index">
                <!-- 遍历一个小数组 -->
                <a href="javascript:" class="link_to_food" v-for="(c, index) in category" :key="index">
                  <div class="food_container">
                    <img :src="`https://fuss10.elemecdn.com`+ c.image_url">
                  </div>
                  <span>{{c.title}}</span>
                </a>
               
                
                
                
                 
              </div>
              
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
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
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  components:{
    HeaderTop,
    ShopList
  },
    mounted() {
      // 分发action
      this.$store.dispatch('getAddress' )
      // 分发商家列表
      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategory', ()=>{ //categorys数据变化了
            this.$nextTick(()=>{
            // 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
            new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
            })      
          })
      })
    },
  
 

  computed: {
    ...mapState(['address','categorys']),
    // 计算轮播图
    categorysArr(){
      // 1.大数组
      const bigArr =[]
      // 2.小数组
      let SmallArr = []
      // 3.拿到state里边的状态数据
      let {categorys} = this
      // 4.遍历总数组
      categorys.forEach((c)=>{
        // 5.将小数组添加到大数组（只能添加一次）
        if (SmallArr.length === 0) {
          bigArr.push(SmallArr)
        }
        // 6.把数据添加到小数组
        SmallArr.push(c)
        // 7.小数组的最大长度要为8
        if (SmallArr.length ===8) {
          SmallArr =[]
        }
        })
        // 8.返回一个新数组
        return bigArr
    }
  },









/**
 * 创建Swiper对象轮播有问题
 * 1.watch + nextTick()
 * 2.callback + nextTick()
 * 3.利用dipath()返回promise
 */

// watch: {
// 1.    //更新状态数据==》调用监视的回调==》异步更新界面
//     categorys(){//categorys发生改变了/数组数据来了
//       this.$nextTick(()=>{
//       // 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
//        new Swiper ('.swiper-container', {
//           loop: true, // 循环模式选项
//           // 如果需要分页器
//           pagination: {
//             el: '.swiper-pagination',
//           },
//       })      
//     })
//   }
// },



   //3.  async mounted() {
  //     // 分发action
  //    this.$store.dispatch('getAddress' )
  //     // 分发商家列表
  //     this.$store.dispatch('getShops')
  //     // 轮播图   返回promise在状态更新且界面更新之后才成功
  //   await  this.$store.dispatch('getCategory' )
  //     //  创建swiper对象的时间？比必须在列表页面显之后
  //      new Swiper ('.swiper-container', {
  //         loop: true, // 循环模式选项
  //         // 如果需要分页器
  //         pagination: {
  //           el: '.swiper-pagination',
  //         },
  //     })       
  // },





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
