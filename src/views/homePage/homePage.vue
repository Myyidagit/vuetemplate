<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-31 16:08:25
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-04-06 11:20:58
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
      },
      feibonaqie(n){
        let first = 0; //创建初始值
        let sencond = 1;//创建初始值
        let center = 0;//中间变量 用来交换值
        let forNum = 1;//递归次数
        let numN = function(){
          if(forNum < n){
            forNum++;//递归次数增加
            center = first;//将第一个值交给中间变量存储
            first = sencond;//将第二个值赋值给第一个
            sencond = center + sencond;//将第一个第二个相加，赋值给第二个
            numN()//继续递归
          }
        };
        numN()
        return sencond;
      }
  },
  created(){},
  mounted(){
    console.log(this.feibonaqie(3))
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