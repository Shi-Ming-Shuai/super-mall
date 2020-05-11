<template>
  <div>
    <!-- 详情页的导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="left" class="backImg" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          class="title-item"
          @click="detailItem(index)"
          :class="{active: index === currentIndex}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "",
  components: {
    NavBar
  },
  data() {
    return {
      iid: null,
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods:{
    detailItem(index){
    this.currentIndex = index
    this.$emit('detailItem',index)
    },
    backClick(){
    this.$router.go(-1)    
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title .title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.backImg{
  margin: 5px 0px 0px 20px;
}
.nav-bar{
  overflow: hidden;
}
</style>
