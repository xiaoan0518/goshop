<template>

   <div>
    
  <div class="goods">
    <div class="menu-wrapper" ref="wrapper">
      <ul class="inner" ref="leftUl">
          <!-- 左半部分 -->
          <!-- 
            1.currnt  根据对应的下边显示样式active   currentIndex  拿到左侧的下标 
             -->
        <li class="menu-item " 
        :class="{current:currentIndex===index}" 
        v-for="(good, index) in goods" :key="index"
        @click="clickItem(index)">
          <span class="text bottom-border-1px">
          <img class="icon" v-if="good.icon" :src="good.icon">
                {{good.name}}
          </span>
        </li>
      </ul>
    </div>
    <!-- 右半部分 -->
    <div class="foods-wrapper" >
      <ul  ref="rightUl" >
        <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
          <h1 class="title">{{good.name}}</h1>
          <ul>
            <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods" :key="index">
              <div class="icon">
                <img width="57" height="57"
                     :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售91份</span>
                  <span>好评率100%</span></div>
                <div class="price">
                  <span class="now">￥9</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <CartControl :food="food" />
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
   <ShopCart  />
</div> 
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
// 引入购物车
import ShopCart from '../../components/ShopCart'
export default {
  components:{
    ShopCart
  },
  data() {
    return {
      scrollY:0,  //2.纵向滚动的值
      tops:[],   //3. 存储每个选项高度的值的数组
     }
  },
    computed: {
        ...mapState({goods:state=>state.shop.goods}),
        // 计算右侧  左侧跟着改变(选中的索引)
        currentIndex(){
         let {scrollY,tops} =this
           //  从数组中获取索引
          const index =  tops.findIndex((top,index)=> scrollY >=top && scrollY < tops[index + 1])
        if ( this.index !=  index && this.leftScroll ){
            //  this.index  === index
            //  console.log(this.index);
             
            // //把当前右侧滑动的li对应的索引值保存起来
            // // 获取索引值,让左侧的对应这个索引的li也滑动,滑动到对应的索引位置即可
            const li = this.$refs.leftUl.children[index];
            // 让当前的li去移动
           this.leftScroll.scrollToElement(li, 300);
      }
        //  把索引返回
         return index
        }
    },
    methods:{
      // 调用上下滑动
      _initScroll(){
        // 显示上下滑动效果
      this.leftScroll = new BScroll(this.$refs.wrapper,{
        click: true,
      })
      this.rightScroll = new BScroll('.foods-wrapper',{
        click: true,
        probeType: 3
        /**
         * probeType:1,2,3
         * 1:非实时,触摸
         * 2:实时,触摸,
         * 3:实时的,触摸,惯性,编码
         * 实时的:时间间隔很短
         * 非实时的:时间间隔很长
         *
         *
         */
      })
      this.rightScroll.on("scroll", ({y }) => {
        this.scrollY = Math.abs(y); //abs取绝对值
      });
      // 直接到达底部
      // this.rightScroll.on("scrollEnd", ({y }) => {
      //   this.scrollY = Math.abs(y); //abs取绝对值
      // });
      },
      _initTops() {
      // 装载数据--tops
      const tops = [];
      let top = 0;
      tops.push(top);
      // 获取右侧列表中li
      const list = this.$refs.rightUl.children;
      Array.prototype.slice.call(list).forEach(li => {
        top += li.clientHeight;
        // console.log('ssss',top);
        
        tops.push(top);
         // 更新数据
        this.tops = tops;
        // console.log(tops);
        
      });
    },
    clickItem(index) {
      // 根据索引获取tops数组中对应的scrollY值
      const scrollY = this.tops[index];
      // 解决延迟
      this.scrollY = scrollY;
      // 右侧列表滑动到某个指定的位置
      this.rightScroll.scrollTo(0, -scrollY, 300);
    },
  },
  async  mounted() {
     await this.$store.dispatch('getShopGoods')
     this.$nextTick(()=>{
       this._initScroll()
         // 初始化滚动
       this._initTops();
     })},
    
    

    



    // watch: {//goods开始没有数据，后来
    //  async  goods(){
    //    await this.$nextTick(()=>{
    //         new BScroll(this.$refs.wrapper,{
              
    //         })
    //         new BScroll(this.$refs.right,{
                
    //         })
    //     })
    //    } 
    // },
   
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .goods
    display: flex
    position: absolute
    top: 225px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      height 400px
      background: #f3f5f7
      overflow hidden
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: pink
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
