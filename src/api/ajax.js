// 配置axios链接请求
import axios from 'axios'
import qs from "qs"
//  // 在发起请求请做一些业务处理(请求拦截器)
axios.interceptors.request.use((config) => {
  // 解构出config里边的
  const {
    method,
    data
  } = config
  if (method.toLowerCase() === 'post') {
    //  判断是否是对象形式，如果是对象就是json形式,只用qs.stringify转换成urlencoded编码
    if (data instanceof Object) {
      config.data = qs.stringify(data)
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
  return response.data;
}, () => {

  //终端 Promise
  return new Promise(() => {});
});

export default axios
