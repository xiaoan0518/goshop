import {
  reqShopInfo,
  reqShopRatings,
  reqShopGoods
  // reqSendcode
} from '../../api/index'

import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from '../actions.type'

// 商家列表
const state = {
     goods: [], // 商品列表
     ratings: [], // 商家评价列表
     info: {}, // 商家信息
  }

const actions = {
    // 商家详情信息
  async getShopInfo({commit}, cb) {
    const result = await reqShopInfo()
      if (result.code === 0) {
        const info = result.data
        info.score = 3.5
        commit(RECEIVE_INFO, {info})
        cb && cb()
      }
    },

    // 异步获取商家评价列表
  async getShopRatings({commit}, cb) {
     const result = await reqShopRatings()
        if (result.code === 0) {
          const ratings = result.data
          commit(RECEIVE_RATINGS, {ratings})
          cb && cb()
        }
      },

      // 异步获取商家商品列表
      async getShopGoods({commit}, cb) {
        const result = await reqShopGoods()
        if (result.code === 0) {
          const goods = result.data
          commit(RECEIVE_GOODS, {goods})
          // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
          cb && cb()
        }
      },

    }

const mutations = {
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
}
const getters = {

      }



export default {
  state,
  actions,
  mutations,
  getters
}