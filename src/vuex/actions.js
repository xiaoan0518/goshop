// 多个间接更改数据的
import {
  reqAddress,
  reqCategory
} from '../api/index'
import {
  REQADDRESS,
  REQCATEGORY
} from './actions.type'
export default {
  // 经纬度
 async getAddress ({commit,state}){
  //  解构sate   这里需要用到数据
   let {longitude,latitude} = state
  //  发送请求  获取参数
    const result = await reqAddress(longitude, latitude)
    // 提交给mutation,并存储状态
    if (result.code === 0) {
      const address = result.data
      commit(REQADDRESS, address)
    }
    // commit(REQADDRESS,{ address:result.data})
   
  },

  // 获取商品分类列表（轮播图）
 async  getCategory({commit}){
  const result = await reqCategory()
  if (result.code ===0) {
    const category = result.data
    commit(REQCATEGORY, category)
  }
  }
}