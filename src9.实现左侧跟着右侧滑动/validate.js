import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN' // 引入中文文件
Vue.use(VeeValidate) //内部定义一个全局指令：Validate
// 提示信息本地化
VeeValidate.Validator.localize('zh_CN',{
   messages: zh_CN.messages,
   attributes: {
    //  配置中文
     phone: '手机号',
     name: '用户名',
     code: '验证码',
   }
  })
  // 自定义验证规则s
  /**
   * Validator   验证器
   * extend     扩展
   * mobile     扩展名
   */
  // 用户名（可以配置多个）
  VeeValidate.Validator.extend('mobile', {
    validate: (value) => {
      return /^1\d{10}$/.test(value)
    },
    // 调用这个方法提示错误输入的
   getMessage: field => field + '请输入11位手机号',
  })
  

