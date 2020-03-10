// 多个状态
export default {
  latitude: '40.10038',  //纬度
  longitude: '116.36867', // 经度
 address: {}, // 地址信息对象
 categorys: [], // 分类数组(轮播图)
 shops: [], //商家数组
 user:{},//保存user里边的id和name
 token: localStorage.getItem('key_token'),//读取token

 goods: [], // 商品列表
 ratings: [], // 商家评价列表
 info: {}, // 商家信息
//  sendCode:''  发送短信验证码
}