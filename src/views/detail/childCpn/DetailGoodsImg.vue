<template>
  <div v-if="Object.keys(goodsImg).length !== 0">
    <!--goodsImg.describe 商品描述  -->
    <div class="describe">
      <div class="start">~__________</div>
      <div class="text">{{goodsImg.desc}}</div>
      <div class="end">__________~</div>
    </div>
    <!-- list-img  穿着效果 细节展示 -->
    <div class="describe-list-img">
      <div class="key">{{goodsImg.detailImage[0].key}}</div>
      <div v-for="item in goodsImg.detailImage">
        <div class="img" v-for="(item2, index) in item.list">
          <img :src="item2" @load="imgLoad" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodsImg: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      counter: 0,
      imgLengths: 0
    };
  },
  methods: {
    imgLoad() {
      //利用一个计算器 来 跟监听的最新属性比较 如果相同那么就 运行里面代码
      if (++this.counter === this.imgLengths) {
        this.$emit("imgLoad");
      }
    }
  },
  watch: {
    //监听 goodsImg中的属性变化  将变化赋值给data属性
    goodsImg() {
      this.imgLengths = this.goodsImg.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.describe {
  padding: 10px;
  position: relative;
}
.describe .end {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.describe .text {
  margin: 20px;
  font-size: 13px;
}
.describe-list-img .key {
  text-align: center;
}
.describe-list-img .img img {
  width: 100%;
}
</style>
