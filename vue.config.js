/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-12 12:15:35
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-03-31 15:57:54
 */
module.exports = {
    lintOnSave:false,
    devServer: {
        proxy: {
            "/api":{
              target: 'http://1.119.170.34:18888', //设置调用接口域名和端口号别忘了加http
              secure:true,
              changeOrigin: true,
              pathRewrite: {// 如果接口本身没有/api需要通过pathRewrite来重写了地址
                '^/api': '' //这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
                    // 比如我要调用'http://0.0:300/user/add'，直接写‘/api/user/add’即可 代理后地址栏显示/http://localhost:8080/api/user/add
              }
            }
          }
    }
}