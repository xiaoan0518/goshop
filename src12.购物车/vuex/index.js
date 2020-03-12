import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// import state from './state'
// import actions from './actions'
// import mutations from './mutations'
// import getters from './getters'
import msite from './module/msite'
import shop from './module/shop'
import user from './module/user'

export default new Vuex.Store({
  //  getters,
   modules: {
    msite,
    shop,
    user
  }
  // state,
  // actions,
  // mutations,
 
})