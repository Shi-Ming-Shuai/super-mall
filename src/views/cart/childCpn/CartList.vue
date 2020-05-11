<template>
  <div class="cart-list">
  <scroll class="content" ref="scroll">
  <cart-list-item v-for="item in getCartList" :getCartList="item"></cart-list-item>
  </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import scroll from 'components/common/scroll/scroll'
//自己定义的子组件
import CartListItem from './CartListItem'
export default {
  name: "",
  //声明周期函数  vue-router  每次进来都调用一次（这个组件被缓存了)
  activated(){
   this.$refs.scroll.refresh()   
  },
  components:{
    scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["getCartList"])
  },
};
</script>

<style scoped>
.cart-list{
  height: calc(100vh - 44px - 49px - 40px);
}
.content{
  height: 100%;
  overflow: hidden;
}
</style>
