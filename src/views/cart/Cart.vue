<template>
  <div id="cart">
    <!-- 导航 购物车 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车 ({{length}})</div>
    </nav-bar>

    <!-- 商品展示的列表 -->
    <cart-list></cart-list>
    
    <!-- 底部汇总 结算 -->
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
// 公共组件
import NavBar from "components/common/navbar/NavBar";

//子组件
import CartList from 'views/cart/childCpn/CartList'
import CartBottom from 'views/cart/childCpn/CartBottom'
//mapGeter助手   将vuex getters中的属性 映射成 compuuted计算属性
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottom
  },
  computed: {
    // vuex 的 mapGetters助手
    ...mapGetters({
      length: "cartList2"
    })
  }
};
</script>

<style scoped>
.nav-bar {
  font-size: 16px;
  background-color: var(--color-tint);
  color: white;
}
</style>
