<template>
  <div class="cart-bottom">
    <div>
      <check-button class="checked-icon" :is-checked="isSelectAll" @click.native="checkClick"></check-button>
      <span class="all">全选</span>
    </div>
    <div class="PriceSum">
      <span class="zongJi">总计：</span>
      <span class="allPrice">{{priceSum}}</span>
    </div>
    <div class="end" @click="calcClick">
      <span class="jieSuan">去结算</span>
      <span class="number">({{GoodsLength}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  name: "",
  components: {
    CheckButton
  },
  computed: {
    //计算选中的商品 数量 价钱总和
    priceSum() {
      return (
        "￥" +
        this.$store.getters.getCartList
          .filter(item => {
            return item.checked;
          })
          .reduce((total, item) => {
            //将过滤出来的选中的商品价格 进行汇总
            return total + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    GoodsLength() {
      return this.$store.getters.getCartList.filter(item => item.checked)
        .length;
    },
    //判断是否包含没有选中的  如果包含则全选的标志不亮
    isSelectAll() {
      if (this.$store.getters.getCartList.length === 0) return false;

      //方法1. 判断是否有不选中的checked  如果有 直接取反返回的数字
      // return !(this.$store.getters.getCartList.filter(item => !item.checked).length)
      //方法2. find 判断数组中是否有符合条件的 如果有 直接返回
      return !this.$store.getters.getCartList.find(item => !item.checked);
    }
  },
  methods: {
    //点击全选按钮 如果有没选中的则全选， 全部选中则全不选
    checkClick() {
      if(this.isSelectAll){
        this.$store.getters.getCartList.forEach(item => {
          item.checked = false
        })
      }else{
       this.$store.getters.getCartList.forEach(item => {
          item.checked = true
        })
      }
    },
    //点击去计算 显示弹窗
    calcClick(){
     if(!this.isSelectAll){
        this.$toast.show('您还没有添加商品',800)
     }
    }
  }
};
</script>

<style scoped>
.cart-bottom {
  height: 40px;
  background-color: #eee;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checked-icon {
  height: 20px;
  display: inline-block;
  margin-right: 5px;
}
.end {
  color: white;
  text-align: center;
  line-height: 40px;
  width: 40%;
  height: 40px;
  background-color: rgb(240, 85, 13);
}
.all, .zongJi, .jieSuan{
  font-size:16px;
}
.allPrice{
  font-size: 13px;
}
.number{
  font-size: 14px;
}
</style>
