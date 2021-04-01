<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-31 16:24:40
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-03-31 16:26:02
-->
<template>
  <div class="myDiv">
      <el-button type="success" @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
      login(){
          this.$router.push({
              name:"HomePage"
          })
      }
  },
  created(){},
  mounted(){
      
  }
}
</script>
<style lang="scss" scoped>
.myDiv{
    height: 100%;
    text-align: center;
}
</style>