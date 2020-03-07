// import Vue from 'vue';
// import VeeValidate from 'vee-validate';
// import zh_CN from 'vee-validate/dist/locale/zh_CN'
// Vue.use(VeeValidate);

// VeeValidate.Validator.localize('zh_CN', {
//   messages: zh_CN.messages,
//   attributes: {
//     phone: '手机号',
//     code: '短信验证码',
//     name: '用户名',
//     pwd: '密码',
//     captcha: '图形验证码'

//   }
// });

//扩展的验证方法
// VeeValidate.Validator.extend('phone', {
//   getMessage: (field) => `请输入正确的` + field,
//   validate: (value) => {
//     return /^1\d{10}$/.test(value)
//   }
// });
// //密码
// VeeValidate.Validator.extend('password', {
//   getMessage: (field) => `请输入正确的` + field,
//   validate: (value) => {

//     return /[0-9a-zA-Z]/.test(value)
//   }
// });



import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
// import Vue from 'vue'
// import VeeValidate  from 'vee-validate'
// import zh_CN from 'vee-validate/dist/locale/zh_CN' // 引入中文文件
Vue.use(VeeValidate) //内部定义一个全局指令：Validate

// 提示信息本地化
VeeValidate.Validator.localize('zh_CN',{
   messages: zh_CN.messages,
   attributes: {
     phone: '手机号',
     name: '用户名',
     code: '验证码',
   }
  })

  // 自定义验证规则
  VeeValidate.Validator.extend('phone', {
    validate: (value) => {
      return /^1\d{10}$/.test(value)
    },
   getMessage: field => field + '必须是11位手机号码',
  })
  

