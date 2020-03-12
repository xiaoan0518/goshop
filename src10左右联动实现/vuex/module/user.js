
import {
  ACTIONUSER,
  DELETUSERS,
  USERTOKEN,
  DELTEDTOKEN,
} from '../actions.type'

// 登录的状态
const state = {
   user: {}, //保存user里边的id和name
   token: localStorage.getItem('key_token') //读取token
  }
const actions = {
     // 保存uest
  actionUser({commit},user){
    // 在localStorage存储token
    console.log(user);
    
    const token = user.token
    localStorage.setItem('key_token', user.token)
    commit(USERTOKEN, token)
    delete user.token
    // 保存user
    commit(ACTIONUSER, user)
  },

  // 清空user
  deletusers({commit}){
     // 清空user
    commit(DELETUSERS),
    // 删除token
    commit(DELTEDTOKEN)
    localStorage.removeItem('key_token')
  },
    }
const mutations = {
     // 保存user
     [ACTIONUSER](state, user) {
       state.user = user
     },
     // 保存token
     [USERTOKEN](state, token) {
       state.token = token
     },
     // 清空suer
     [DELETUSERS](state) {
       state.user = {}

     },
     //删除token
     [DELTEDTOKEN](state) {
       state.token = ''
     },
  }
const getters = {

      }



export default {
  state,
  actions,
  mutations,
  getters
}