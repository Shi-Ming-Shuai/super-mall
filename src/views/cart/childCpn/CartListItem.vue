<template>
  <div class="list-item">
    <!-- 点击选中 -->
    <div class="item-selector">
      <check-button class="item-icon" :is-checked="getCartList.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="getCartList.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{getCartList.title}}</div>
      <div class="item-desc">{{getCartList.desc}}</div>
      <div class="item-bottom" @click="checkClick">
        <div class="item-price">￥{{getCartList.price}}</div>
        <div class="item-count">×{{getCartList.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "",
  props: {
    getCartList: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      this.getCartList.checked = !this.getCartList.checked;
    }
  }
};
</script>

<style scoped>
.list-item {
  padding: 10px;
  box-shadow: 0px 2px 5px rgb(175, 170, 170);
  display: flex;
  justify-content: left;
  overflow: hidden;
}
.list-item:last-child {
  box-shadow: none;
}
/**选中按钮 */
.item-selector {
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-icon{
  width:20px;
  height:20px;
}
.item-img img {
  margin-top: 10px;
  width: 60px;
  height: 80px;
  border-radius: 10px;
}
.item-info {
  padding: 10px;
  overflow: hidden;
}
.item-title,
.item-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-title {
  font-size: 16px;
  font-weight: 600;
}
.item-desc {
  margin-top: 10px;
  font-size: 12px;
}
.item-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.item-bottom .item-price {
  color: #ffb805;
  font-size: 18px;
}
</style>
