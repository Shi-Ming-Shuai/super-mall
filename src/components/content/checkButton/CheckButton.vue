<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/icon.dui.png"  alt />
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.check-button {
  width: 20px;
 
  border: 2px solid #cccccc;
  border-radius: 50%;
}
.check-button img {
  text-align: center;
  width: 15px;
  height: 15px;
  
}
.check {
  border: 2px solid red;
  background-color: red;
}
</style>
