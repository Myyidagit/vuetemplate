/*
 * @Descripttion: 
 * @version: 
 * @Author: Mr. Xu
 * @Date: 2021-03-16 15:16:46
 * @LastEditors: Mr. Xu
 * @LastEditTime: 2021-03-16 15:29:46
 */
import Vue from "vue"
Vue.directive('loadmore', {
  bind(el, binding) {
    var p = 0;
    var t = 0;
    var down = true;
    var selectWrap = el.querySelector('.el-table__body-wrapper')
    selectWrap.addEventListener('scroll', function () {
      //判断是否向下滚动
      p = this.scrollTop;
      // if ( t < p){down=true}else{down=false}
      if (t < p) {
        down = true;
      } else {
        down = false;
      }
      t = p;
      //判断是否到底
      const sign = 10;
      const scrollDistance = this.scrollHeight - this.scrollTop - this.clientHeight
      if (scrollDistance <= sign && down) {
        binding.value('down')
      }
      if(p == 0 && !down){
        binding.value('up')
      }
    })
  }
})