/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-12 11:58:47
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-03-31 18:53:58
 */
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes:routes
});
router.beforeEach((to, from, next) => {
  console.log(to.path)
  next()
})
export default router;
