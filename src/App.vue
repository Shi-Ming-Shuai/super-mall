<template>
  <div id="app">
    <!-- exclude="Detail" 详情页中的数据 不被缓存 -->
  <keep-alive exclude="Detail">
    <router-view></router-view>
  </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/tabbar/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
