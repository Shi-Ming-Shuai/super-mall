<template>
  <div class="wrapper" ref="scroll">
  <ul>
    <button @click="a">点击</button>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
    <li>ww</li>
  </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

  export default {
    name: 'Category',
    data(){
      return {
        scroll:null
      }
    },
    mounted(){
       this.scroll = new BScroll(this.$refs.scroll,{
         //实时监听滚动
         probeType:3,
         //是否让被包裹的内容可以产生点击事件
         click:true,
         //是否开启上拉加载
         pullUpLoad:true
       })
       //设置卷曲的实例 如果滚动就会触发这个 scroll事件
       this.scroll.on('scroll',position => {
        //  console.log(position);
       })
       //设置上拉加载
       this.scroll.on('pullingUp',() => {
         console.log('上拉加载');
         setTimeout(() => {
           console.log('第一次上拉加载执行完，进行下一次');
           this.scroll.finishPullUp()
         },2000)
       })
    },
    
    methods:{
      a(){
       this.scroll.scrollTo(0,0,5000)
      }
    }
  }


</script>

<style scoped>
 .wrapper{
   height: 150px;
   background-color: red;
   overflow: hidden;
 }
</style>
