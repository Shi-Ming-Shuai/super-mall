<template>
  <div class="bottom-nav-bar">
    <div class="left">
      <div class="wrapper">
        <i class="icon service"><img src="~assets/img/detail/1.png" alt=""></i>
        <span class="text">客服</span>
      </div>
      <div class="wrapper">
        <i class="icon shop"><img src="~assets/img/detail/2.png" alt=""></i>
        <span class="text">店铺</span>
      </div>
      <div class="wrapper">
        <i class="icon select"><img src="~assets/img/detail/3.png" alt=""></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    name:'',
    methods:{
      addToCart(){
        this.$emit('addToCart')
      }
    }
}
</script>

<style scoped>
.bottom-nav-bar {
    background-color: #fff;
    height: 49px;
    position: fixed;
    bottom: -1px;
    left: 0;
    right: 0;
    display: flex;
    text-align: center;

  }
  .left {
    width: 50%;
  }
  .left,.right {
    display: flex;
  }
  .left .wrapper{
    flex: 1;
    padding: 5px;
  }
  .right{
    width: 50%;
  }
  .left .icon {
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 auto;
  }
  .left .icon img{
    width:100%;
    height:100%;
  }
  .text {
    font-size: 12px;
  }
  .cart {
    height: 49px;
    width: 60%;
    background-color: #fff737;
    color:#666;
    font-size: 14px;
    line-height: 49px;
  }
  .buy {
    height: 49px;
    width: 40%;
    background-color: var(--color-tint);
    color:#fff;
    font-size:164x;
    line-height: 49px;
  }
</style>
