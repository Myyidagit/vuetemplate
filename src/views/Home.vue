<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-12 11:58:47
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-06 12:21:58
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-12 11:58:47
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-06 12:21:13
-->
<template>
  <div id="Home">
    <el-container class="homeContainer">
      <el-aside width="auto" style="background:#384661;">
        <el-scrollbar style="height:100%;" :native="false" wrapStyle wrapClass viewClass viewStyle :noresize="false" tag="div">
            <div style="height:100%">
                <div class="logoColl">
                  <div :class="['logoColl_img',isCollapse?'colllogoact':'']"> 
                    <img src="../assets/image/logo.png" alt="">
                  </div>
                  <i :class="['el-icon-s-fold','isCollapseBtn',isCollapse?'CollapseBtnRate':'']" @click="collHandler"></i>
                </div>
                <el-menu :default-active="activeUrl" :unique-opened="true" :router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#384661" text-color="#DCDFE6" active-text-color="#409EFF" :collapse-transition="true" >
                  <template v-for="(item,index) in routerList">
                    <el-submenu :index="item.path" v-if="item.children" :key="index">
                      <template slot="title">
                        <i style="width: 18px;text-align: center;color:#DCDFE6;" :class="item.icon"></i>
                        <span slot="title" style="font-weight:800;">{{item.name}}</span>
                      </template>
                      <el-menu-item v-for="(child,index) in item.children" :index="child.path" :key="index">{{child.name}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else :index="item.path" :key="index">
                      <i :class="item.icon" style="width: 18px;text-align: center;color:#DCDFE6;"></i>
                      <span style="font-weight:800;">{{item.name}}</span>
                    </el-menu-item>
                  </template>
                </el-menu>
              </div>
          </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <div class="user_photo_box">
            <el-dropdown @command="command">
              <el-avatar shape="square" :size="50" fit="contain" :src="logoUrl"></el-avatar>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="out">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
  },
  data(){
    return {
      activeUrl: "/homePage",
      isCollapse:false,
      logoUrl:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      routerList:[
        {
          name: "项目数据",
          path: "/homePage",
          icon: "el-icon-s-home"
        },
        {
          name: "截贞列表",
          path: "/goodsList/goodsList",
          icon: "el-icon-platform-eleme"
        },
        {
          name: "第二菜单",
          path: "/cutPhoto",
          icon: "el-icon-video-camera-solid",
          children: [
            { name: "嘟嘟嘟嘟", path: "/cutPhoto/cutPhoto", icon: "" }
          ]
        },
      ]
    }
  },
  methods:{
    handleOpen(){},
    handleClose(){},
    collHandler(){
      this.isCollapse = !this.isCollapse
    },
    command(comd){
      console.log(comd)
      switch(comd){
        case "out":
          this.$router.push({
            name:"Login"
          }) 
      }
    }
  },
  mounted() {
    this.activeUrl = this.$route.path;
  },
  created(){
    
  }
};
</script>
<style lang="scss" scoped>
#Home {
  height: 100%;
  background: #F2F6FC;
  .homeContainer ::v-deep{
    height: 100%;
    .logoColl{
      height: 60px;
      background: #fff;
      position: relative;
      background-color: #26344F;
      border-bottom: 1px solid #FFF;
      .logoColl_img{
        width: 150px;
        height: 60px;
        display: inline-block;
        text-align: center;
        transition: all ease-in 0.3s;
        overflow: hidden;
        img{
          height: 100%;
        }
      }
      .colllogoact{
        width: 0px;
      }
      .isCollapseBtn{
        font-size:30px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        position: absolute;
        margin-top: 15px;
        right: 20px;
        color: #FFF;
        // transform: translateY(-50%);
        transition: all ease-in 0.3s;
        &:hover{
          color: #409EFF;
        }
      }
      .CollapseBtnRate{
        transform: rotateZ(180deg);
      }
    }
    
    //解决导航右侧超出1px
    .el-menu {
      border-right: 1px solid #384661;
    }
    .el-submenu__icon-arrow{
      font-size: 16px;
      color: #fff;
    }
    .el-scrollbar__wrap{
      overflow-x: hidden;
    }
    .el-submenu.is-active .el-submenu__title{
      background-color: #26344F !important;
      font-weight: bold;
    }
    //导航激活时的背景颜色
    .el-menu-item.is-active{
      background-color: #26344F !important;
      color: #fff !important;
      font-weight: bold;
      i{
        color: #fff !important;
      }
    }
  }
  .el-header{
    background-color: #384661;
    color: #fff;
    border-left: 1px solid #fff;
    text-align: right;
    .user_photo_box{
      height: 50px;
      width: 50px;
      background: #26344F;
      margin-top: 5px;
      display: inline-block;
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

