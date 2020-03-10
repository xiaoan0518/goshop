// 多个直接更改数据的方法
import {
  REQADDRESS,
  REQCATEGORY,
  REQSHOPS,
  ACTIONUSER,
  DELETUSERS,
  USERTOKEN,
  DELTEDTOKEN,
   RECEIVE_GOODS,
   RECEIVE_RATINGS,
   RECEIVE_INFO

  // REQSENDCODE
} from './actions.type'
export default {
  // 经纬度
  [REQADDRESS](state,address){
    state.address = address
  },

  // 获取分类列表（轮播图）
  [REQCATEGORY](state, category){
    state.categorys = category
  },

  // 获取商家列表
  [REQSHOPS](state, shops){
    state.shops = shops
  },

  // 保存user
  [ACTIONUSER](state,user){
    state.user = user
  },
  // 保存token
  [USERTOKEN](state,token){
    state.token = token
  },
  // 清空suer
  [DELETUSERS](state){
    state.user={}
    
  },
  //删除token
  [DELTEDTOKEN](state){
    state.token = ''
  },


  [RECEIVE_INFO](state, {
    info
  }) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {
    ratings
  }) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {
    goods
  }) {
    state.goods = goods
  },

  // 发送短信验证码
  // [REQSENDCODE](state, sendcode) {
  //   state.sendcode = sendcode
  // }
  
  
   
}