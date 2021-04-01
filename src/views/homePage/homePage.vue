<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-31 16:08:25
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-03-31 20:23:34
-->
<template>
  <div id="myDiv">
    <div class="box">
      sdfsdff
    </div>
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
      //获取数据
      getList(){
          this.$http.homePageapi.getGoodsList({name:1244}).then(res=>{
              console.log(res)
          })
      }
  },
  created(){},
  mounted(){
  }
}
</script>
<style lang="scss" scoped>
#myDiv{
  height: 100%;
  background: #fff;
  .box{
    height: 200px;
  }
}
</style>