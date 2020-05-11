<template>
 <swiper>
      <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
      </swiper-item>
    </swiper>
</template>

<script>
// 引入第三方的轮播图UI
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
    name:'',
  components: {
    Swiper,
    SwiperItem
  },  //从父组件Home接收轮播图的相关数据（banners）
  props:{
    banners: {
      type: Array,
      //对象和数组默认从一个工厂函数获取
      default(){
        return []
      }
    }
  },
  data(){
    return {
      isImgLoad:false
    }
  },
  methods:{
    imgLoad(){
      if(!this.isImgLoad){
      console.log('swiper图片加载完成,触发tabControl吸顶效果');
      this.$emit('swiperLoad')
      this.isImgLoad = true
      }
    }
  }
  }
</script>

<style scoped>
</style>
