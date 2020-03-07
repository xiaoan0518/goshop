// 多个间接更改数据的
import {
  reqAddress,
  reqCategory,
  reqShops
} from '../api/index'
import {
  REQADDRESS,
  REQCATEGORY,
  REQSHOPS
} from './actions.type'
export default {
  // 经纬度
 async getAddress ({commit,state}){
  //  解构sate   这里需要用到数据
   let {longitude,latitude} = state
  //  1.调用接口请求函数发请求
    const result = await reqAddress(longitude, latitude)
    // 2.有了结果，提交给mutation
    if (result.code === 0) {
      const address = result.data
      commit(REQADDRESS, address)
    }
    // commit(REQADDRESS,{ address:result.data})
   
  },

  // 获取商品分类列表（轮播图）
 async  getCategory({commit},callback){
  const result = await reqCategory()
  if (result.code ===0) {
    const category = result.data
    commit(REQCATEGORY, category)
  }
  // 在ccommit之后执行callback
  // 判断是函数就调用，不是就调用
  typeof callback === 'function' && callback()
  },

  // 获取商家列表
 async getShops({commit,state}){
   const {longitude,latitude}=state
   const result = await reqShops(longitude, latitude)
   if (result.code ===0) {
     const shops = result.data
     commit(REQSHOPS, shops)
   }
  }
}