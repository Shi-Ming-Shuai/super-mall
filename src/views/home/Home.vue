<template>
  <div id="home">
    <!-- nav-bar 购物街导航 -->
    <nav-bar class="home-nav">
      <div slot="center">
        <h3>购物街</h3>
      </div>
    </nav-bar>
    <!-- 复制的tab-ctrol 用来吸顶（如果想用别的方法显示的可以把这个删除） -->
    <tab-control
      class="tab-copy"
      ref="tabControl2"
      :titles="['流行','新款','精选']"
      @itemClick="tabClick"
      v-show="isFixed"
    ></tab-control>
    <!-- 卷曲获取数据 better-scrool -->
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 banners-->
      <swiper :banners="banners" @swiperLoad="swiperLoad"></swiper>
      <!-- 推荐 recommends-->
      <recommend :recommends="recommends"></recommend>
      <!-- 特性。流行 -->
      <feature></feature>
      <!-- 选项卡控制 -->
      <tab-control ref="tabControl" :titles="['流行','新款','精选']" @itemClick="tabClick"></tab-control>
      <!-- 选项卡中不同标题展示的不同数据 Goods -->
      <goods-list :goodsList="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// common js 工具
import { itemImgLoadMixin,backTop } from "common/utils/mixin";

//common组件 任意项目公共组件
import NavBar from "components/common/navbar/NavBar";
import scroll from "components//common/scroll/scroll";

//content组件 在本项目中公共的组件
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
// import BackTop from "components//content/backTop/BackTop";

//views 当前组件 里抽离出去的小组件
import swiper from "views/home/childCpn/HomeSwiper";
import recommend from "views/home/childCpn/HomeRecommend";
import feature from "views/home/childCpn/HomeFeature";

//axios
import { getHomeMultidata, getHomeGoods } from "network/Home";

export default {
  name: "Home",
  mixins:[backTop],
  components: {
    NavBar,
    scroll,
    swiper,
    recommend,
    feature,
    TabControl,
    GoodsList,
    // BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      // isShowBackTop: false,
      tabOffsetTop: 0,
      isFixed: false,
      //记录组件deactivated 离开时候距离顶部的y值
      saveY: 0
    };
  },
  //声明周期函数              声明周期函数               声明周期函数
  created() {
    //请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mixins: [itemImgLoadMixin,backTop],
  mounted() {},
  destroyed() {
    console.log("Home被销毁");
  },
  //Vue-router 生命周期
  activated() {
    //重新进入页面的时候 回到上次离开页面那时候的位置
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 保存Y值
    this.saveY = this.$refs.scroll.scroll.y;
    //取消全局事件的监听  针对某一个事件 imgLoad事件（全局事件总线）
    this.$bus.$off("imgLoad", this.itemImgLoad);
  },
  //页面触发相关事件 的方法     页面触发相关事件 的方法       页面触发相关事件 的方法
  methods: {
    tabClick(index) {
      if (index === 0) {
        this.currentType = "pop";
      } else if (index === 1) {
        this.currentType = "new";
      } else {
        this.currentType = "sell";
      }
      //修复吸顶的tab-control Bug  让index同步
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //点击图片返回顶部
    // backTopClick() {
    //   true && this.$refs.scroll.scroll.scrollTo(0, 0, 800);
    // },
    //实时监听页面滚动
    contentScroll(position) {
      //1. 判断点击返回顶部的图片 是否超过距离y轴 高度1000（显示）
      this.isShowBackTop = -position.y > 1000;
      //2. 判断是否到达tabCotrol的吸顶位置（到达吸顶）
      this.isFixed = -position.y > this.tabOffsetTop;
    },
    //上拉加载更多
    loadMore() {
      console.log("上拉加载更多，请求数据");
      this.getHomeGoods(this.currentType);
    },
    //tabControl 吸顶效果
    swiperLoad() {
      //1. 判断tab-control距离顶部的距离
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      console.log("tabControl距离顶部scroll距离" + " " + this.tabOffsetTop);
      //2.
    },

    //网络请求相关 的方法           网络请求相关 的方法            网络请求相关 的方法
    //将网络请求封装到methods里面 这样减少created的代码量
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //网络请求Goods数据  这里的type 跟netwrok 相关配置有关
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  font-size: 18.72px;
  background-color: var(--color-tint);
  color: #ffffff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}
.tab-copy {
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  /* 方法二 使用 css新特性 calc函数  */
  /* height: calc(100% - 93px);
  overflow:hidden; */
  /* margin-top:44px */
}
</style>
