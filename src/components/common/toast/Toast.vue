<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    //定一个显示方法  参数一： 传入的Pormise成功结构
    //参数二： 传入显示持续时间 (默认2000毫秒)
    show(message, duration = 2000) {
      this.message = message;
      this.isShow = true;
      //修改isShow的值 让标签不显示
      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  padding: 8px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 5, 0.5);
  color: white;

  font-size: 15px;
  z-index: 99;
}
</style>
