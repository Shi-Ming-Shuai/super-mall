<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    //1. 创建BScroll对象
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    //2. 实施监听滚动位置  将这个事件传递出去 谁用谁接收
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }
    //3. 上拉加载  将事件传递出去
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
        //避免短时间重复上拉 延迟调用上拉加载
        setTimeout(() => {
          this.scroll.finishPullUp();
        }, 2000);
      });
    }
  },
  methods: {
    refresh() {
      // console.log(
      //   "防抖动,debounce 减少refresh的调用次数 具体请看Home.vue methods中的debounce方法"
      // );
      this.scroll && this.scroll.refresh();
    }
  }
};
</script>

<style scoped>
</style>
