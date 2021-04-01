/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-24 16:33:13
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-03-24 16:57:48
 */
import axios from "axios"
// 创建axios实例
var instance = axios.create({
    baseURL: '/api',
    timeout: 1000 * 12,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // 默认的
});

// 设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.post['Content-Type'] = 'application/json';
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */ 
instance.interceptors.request.use(    
    config => {     
        // config.headers.common['X-user-userId'] = getUserID();
        // config.headers.common['X-KeyTech-Session'] = getSessionID();

        return config;    
    },
    error => Promise.error(error)
);
// 响应拦截器
instance.interceptors.response.use(    
    // 请求成功
    res => {
        if(res.status === 200){
            return Promise.resolve(res);  
        }else{
            return Promise.reject(res);
        }
    },
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            return Promise.reject(response);
        } 
    }
);
export default instance