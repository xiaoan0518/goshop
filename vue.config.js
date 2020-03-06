// 跨域的简单但是
module.exports = {
  devServer: {
    proxy: 'http://localhost:5000'
  }
}
// 跨域的复杂方式
// module.exports = {
//   devServer: {
//     proxy: {
//       // 请求地址以api开头
//       '/api': {
//         target: 'http://localhost:4000',  //服务器地址
//         changeOrigin: true, //支持跨越
//         pathRewrite: { //重写路径：让代理服务在转发请求，对路径进行特定修改
//           '^/api': '', // 去掉路径中的api
//         },
        
//       },
//       // 可以配置多个跨域
//     }
//   }
// }


