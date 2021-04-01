<!--
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-26 11:20:15
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-03-31 11:55:16
-->
<template>
  <div class="myDiv">
      <el-input v-model="form.name"></el-input>
      <el-input v-model="form.age"></el-input>
      <el-input v-model="form.sex"></el-input>
  </div>
 
</template>

<script>

export default {
  components:{},
  props:{
      formData:{
          type:Object,
          default:()=>{
              return {}
          }
      }
  },
  data(){
    return {
        form:{
            name:"aaa",
            age:18,
            sex:"男"
        }
    }
  },
  watch:{},
  computed:{},
  methods:{
      send(){
          this.newd.name = "gggg"
      }
  },
  computed:{
    //   newd(){
    //       return this.d
    //   }
  },
  created(){
    //   this.form = {...this.formData};
    //如果formdata跟form结构不一样 只用到了个别属性
    //可以这么写
      let {formData} = this;
      this.form.name = formData.name;
      this.form.age = formData.age;
  },
  mounted(){
      
  }
}
</script>
<style lang="scss" scoped>
.myDiv{}
</style>