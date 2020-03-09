import ajax from './ajax'
// const BUSE = '/api'
/*eslint-disable no-undef */

// 经纬度
// export const reqAddress = (latitude, longitude) => ajax({
//   url: `/position/${longitude},${latitude}`
// })
export const reqAddress = ((latitude, longitude) => ajax.get( `/position/${longitude},${latitude}`))

// 食品分类列表（轮播图）
export const reqCategory = () => ajax.get(`index_category`,
{ //是不是携带了token  携带token就可以访问  不携带token就不可以访问
  headers:{
   sedToken:true
  }
})

// 根据经纬度获取商家列表
export const reqShops = (latitude, longitude) => ajax.get(`/shops`, {
      params: {
        latitude,
        longitude
      },
      //是不是携带了token  携带token就可以访问  不携带token就不可以访问
      headers: {
        sedToken: true
      }
    }
   )

// 发送短信验证码
export const reqSendcode = (phone) => ajax.get(`sendcode`,{
  params:{
    phone
  }
})

// 手机验证码登录
export const reqloginSms = (phone,code) => ajax.post(`login_sms`,{phone,code})

// 用户名密码登录
export const reqloginPwd = (name, pwd, captcha) => ajax.post(`login_pwd`, {
  name,
  pwd,
  captcha
})

// 根据user获取用户信息（cooken）(实现自动登录)
export const reqUserInfo = () => ajax.get(`userinfo`)

  









































































// reqAddress("116.36867", "40.10038").then((result) => {
//    console.log(result);
   
// }
// )