<template>
<swiper class="detail-swiper">
    <swiper-item class="swiper-item" v-for="item in topImage">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "",
  props: {
    topImage: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}

</style>
