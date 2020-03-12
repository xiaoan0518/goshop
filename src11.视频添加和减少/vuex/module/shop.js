import Vue from 'vue'
import {
  reqShopInfo,
  reqShopRatings,
  reqShopGoods
  // reqSendcode
} from '../../api/index'

import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  ADD_FOOD_COUNT, 
  REDUCE_FOOD_COUNT
} from '../actions.type'

// 商家列表
const state = {
     goods: [], // 商品列表
     ratings: [], // 商家评价列表
     info: {}, // 商家信息
    //  cartFood: [] //存储食物对象的数组
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

       // 对food的数量操作的方法
   updateFoodCount({ commit }, { isAdd, food }) {
    // 判断isAdd是true还是false,加或者是减
    if (isAdd) {
      // 添加
      commit(ADD_FOOD_COUNT, { food })
    } else {
      // 减少
      commit(REDUCE_FOOD_COUNT, { food })
    }
  }

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
     // food加的操作---count
  [ADD_FOOD_COUNT]( { food }) {
    // food对象就没有count属性
    if (food.count) {
       food.count++
    } else {
      // 给food添加一个新的属性，属性名是count，值是1  ==没有数据绑定
      //  food.count = 1
      // 为响应式对象添加一个属性，确保新属性也是响应式，并且能够触发视图更新
      Vue.set(food, 'count', 1)
    }
  },
  // food减的操作--count
  [REDUCE_FOOD_COUNT](state, {food}) {
    // 判断数量大于0才可以减
    if (food.count > 0) {
      food.count--
    }
  }

}
const getters = {

      }



export default {
  state,
  actions,
  mutations,
  getters
}