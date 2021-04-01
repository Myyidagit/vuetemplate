/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-31 16:01:08
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-01 10:49:15
 */
const routes = [
    {
        path:"/",
        name:"Login",
        component: resolve => require(['@/views/login.vue'], resolve),
    },
    {
      path: "/home",
      name: "Home",
      component: resolve => require(['@/views/Home.vue'], resolve),
      children:[
        {
            path:"/homePage",
            name:"HomePage",
            component: resolve => require(['@/views/homePage/homePage.vue'], resolve),
        },
        {
            path:"/cutPhoto/cutPhoto",
            name:"CutPhoto",
            component: resolve => require(['@/views/cutPhoto/cutPhoto.vue'], resolve),
        }
      ]
    }
  ];
export default routes