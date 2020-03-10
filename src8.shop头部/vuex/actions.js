// 多个间接更改数据的
import {
  reqAddress,
  reqCategory,
  reqShops,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods
  // reqSendcode
} from '../api/index'
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


  



  // 发送短信验证码
//  async getSendcode({commit},phone) {
//    const sendcode = await reqSendcode(phone)
//    if (sendcode.code ===0) {
//      alert('正确')
//      commit(REQSENDCODE, sendcode)
//    }else{
//      alert('错误')
//    }
//   }

  
}