import ajax from './ajax'
// const BUSE = '/api'
/*eslint-disable no-undef */

// 经纬度
// export const reqAddress = (latitude, longitude) => ajax({
//   url: `/position/${longitude},${latitude}`
// })
export const reqAddress = ((latitude, longitude) => ajax.get( `/position/${longitude},${latitude}`))

// 食品分类列表（轮播图）
export const reqCategory = () => ajax.get(`index_category`)









































































// reqAddress("116.36867", "40.10038").then((result) => {
//    console.log(result);
   
// }
// )