// 多个直接更改数据的方法
import {
  REQADDRESS,
  REQCATEGORY,
  REQSHOPS
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
  }
  
  
   
}