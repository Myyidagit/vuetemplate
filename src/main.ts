/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-31 17:30:26
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-03-31 18:52:20
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-31 17:30:26
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-03-31 18:51:54
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import "@/directives/directives.js"
import axiosHttp from "@/api"
import "./assets/css/reset.css"

Vue.use(Element);
Vue.prototype.$http = axiosHttp;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
