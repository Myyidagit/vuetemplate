/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-31 17:01:16
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-03-31 17:04:36
 */
import axios from "../../axios"
const obj = {
    getGoodsList:(params)=>{
        return axios.get("/aaaa",params);
    }
}
export default obj