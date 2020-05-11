<template>
  <div class="goods">
 <goods-list-item v-for="item in goodsList" :listItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'

export default {
  name: "",
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components:{
    GoodsListItem
  }
};
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
