// 配置axios链接请求
import axios from 'axios'
import qs from "qs"
import store from '../vuex'
import router from '../router'
import {Toast} from 'mint-ui';

//  // 在发起请求请做一些业务处理(请求拦截器)
axios.interceptors.request.use((config) => {
  // 解构出config里边的
  const {method,data
  } = config
  if (method.toLowerCase() === 'post') {
    //  判断是否是对象形式，如果是对象就是json形式,只用qs.stringify转换成urlencoded编码
    if (data instanceof Object) {
      config.data = qs.stringify(data)
    }
  }
  if (config.headers.sedToken) {
    // 从store里边读取token
    const token = store.state.token
    if (!token) {
      // 没有token抛出错误
      
      const error = new Error('没有token')
      error.status = 401
      throw error
    }else{
      // 没有authorization请求头, 直接返回401响应
     config.headers['Authorization'] = token
    }
  }

  // 返回最新的cifig
  return config;
}, (error) => {
  // 对请求失败做处理
  return Promise.reject(error);
});
// 响应拦截器


axios.interceptors.response.use((response) => {
  // 成功返回data数据
  // console.log(response);

  return response.data;
},   
(error) => {
  // const {response} =error
  // 1.发送请求没有token，请求失败
  if (!error.response) {
    console.log('ssss');
    if (error.status === 401) {
      // 判断是不是当前路由路径
      console.log('111');
      
      if (router.currentRoute.path !== '/login') {
        // 提示
        Toast(error.message)
        //跳转到登录页面
        router.push('/login')
      }
    }
  }else{
    // 发了请求，token过期了
    if (error.status === 401) {
       if (router.currentRoute.path !== '/login') {
         // 提示
         Toast(error.data.message)
         // 退出登录
         store.dispatch('deletusers')
         //跳转到登录页面
         router.push('/login')
       }
       //  3.请求的资源不存在
     } else if (error.status === 404) {
       Toast('请求的资源不存在')
     } else {
       Toast('请求错误' + error.message)
     }
  }
  //终端 Promise
  return new Promise(() => {});
  });

export default axios

