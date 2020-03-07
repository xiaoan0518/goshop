// 多个直接更改数据的方法
import {
  REQADDRESS
} from './actions.type'
export default {
  // 经纬度
  [REQADDRESS](state,address){
    state.address = address
  }
   
}