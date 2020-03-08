<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <!-- 1.div绑定class样式display为none
               2.绑定一定类名on如果为true就把display改成block
               3.在data里边定义布尔值实现验证码于密码的切换
                  点击切换isshowSMS是真是假
               4.绑定点击事件
           -->
          <a href="javascript:;" :class="{on:isshowSmS}" @click="isshowSmS=true">短信登录</a>
          <a href="javascript:;" :class="{on:!isshowSmS}" @click="isshowSmS=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on:isshowSmS}">
            <section class="login_message" >
              <!-- 
                1.绑定v-mode拿到input里边的数据 
                2.计算属性（正则表达式验证收集号）
                3.手机号正则验证通过disabled变为false
                4.给class正则的对象添加样式
                -->
              <input type="tel" maxlength="11" 
              placeholder="手机号s" 
              v-model="phone"
              name="phone"
              v-validate="'required|mobile'"
              >
              <!-- 表单验证
                   1.name：中文显示定义的标识
                   2.v-validate="'required|mobile；默认显示和扩展显示的的标识(两种方式)
                   2.required:false(清空input是否显示),regex:/^\d{6}$/（通过正则判断）
                   3.errors.first('phone')显示对应的字体-->
              <span  >{{errors.first('phone')}}</span>
              <button :disabled="!right_phones || computTime>0" 
                      class="get_verification" 
                      :class="{right_phone:right_phones}"
                      @click.prevent="sedcode"
                      >
                      {{computTime>0?`获取验证码${computTime}`:'获取验证码'}}
                      <!-- 1.定义初始值为0显示验证码
                           2.点击更改初始值为最大数字
                           3.启动定时器倒计时
                           4.清除定时器
                           5.disabled里边computTime大于0也不可以点击
                       -->
                      </button>
            </section>
            <section class="login_verification">
              <input type="tel" 
              maxlength="8" placeholder="验证码"
              name="code"
              v-validate="{required:false,regex:/^\d{6}$/}"
              >
              <span>{{errors.first('code')}}</span>
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!isshowSmS}">
            <section>
              <section class="login_message" >
                <input type="tel" maxlength="11" 
                placeholder="手机/邮箱/用户名s"
              
                name='name'
                v-validate="'required'"
                 >
                <span>{{errors.first('name')}}</span>
              </section>
              <section class="login_verification">
                <input :type="isshowpwd? 'text' : 'password'" maxlength="8" placeholder="密码">
                <!-- 包裹密码隐藏显示按钮 -->
                <!-- 按钮颜色 -->
                <div class="switch_button " :class="isshowpwd?'on':'off'" @click="isshowpwd=!isshowpwd">
                  <div class="switch_circle"  :class="{right:isshowpwd}"></div>
                  <span class="switch_text">{{isshowpwd?'abc':''}}</span>
                </div>
                <!--  1.data定义一个标识  （显示隐藏）
                      2.点击事件--标识=！标识
                      3.标识三元表达式？有优势：无样式
                      4.:class{类名：标识}左右滑动
                      5.标识三元表达式？文字：空串 
                      -->
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码">
                <img class="get_verification" 
                src="http://localhost:5000/captcha" 
                alt="captcha"
                @click="updatacaptcha"
                ref="captcha"
                >
                <!-- 一次性短信验证码
                     1.点击事件  通过$ref从拿到src从新指定
                     2.通过时间戳点击更新 -->
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </span>
    </div>
  </div>
</template>

<script>
// 发送短信验证码的请求
import {reqSendcode} from '../api'
import { Toast } from 'mint-ui';
export default {
    props: {

    },
    data() {
        return {
         isshowSmS:true,   //true 验证码   false  密码
         phone:'',  //获取手机号
         computTime:0, //验证码时间倒计时
         isshowpwd:false  //密码是否显示铭文标识
        };
    },
    mounted() {
      
    },
    computed: {
      // 计算收集正则表达式
      right_phones(){
        return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(this.phone)
      }
    },
    methods: {
      // 点击发送验证码
    async  sedcode(){
        // 更改倒计时时间
        this.computTime =10
      const clearTime = setInterval(() => {
        if (this.computTime===0) {
            // 清除定时器
            clearInterval(clearTime)
          }else{
           this.computTime--
          }
        }, 1000);
        // this.$store.dispatch('getSendcode',this.phone)//发送短信验证码
        // 发送短信验证码
      const result =  await reqSendcode(this.phone)
      if (result.code ===0) {
        Toast('发送请求成功了')
      }else{
        // 获取验证码失败，没有倒计时
        this.computTime=0
        Toast(result.msg)
      }
    },

      // 点击登录验证表单
    async login (){
      let names
      // 获取到是手机号登录 || 用户名登录
      const {isshowSmS} = this
      if (isshowSmS) {
        names=['phone','code']
      }else{
        names=['name']
      }
      // 对指定的表单进行验证
      const success = await this.$validator.validateAll(names)
      if (success) {
        alert('表单验证通过')
      }
    },

    //一次性图形验证码
    updatacaptcha(){
       this.$refs.captcha.src ='http://localhost:5000/captcha?tim='+Date.now()
    }
 
    },

    
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color red
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(27px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
