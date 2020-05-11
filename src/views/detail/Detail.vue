<template>
  <div id="detail">
    <!-- 详情页的导航栏 -->

    <nav-bar @detailItem="titleClick" ref="navBar"></nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <!-- 轮播图数据 -->
      <top-swiper :topImage="topImage"></top-swiper>
      <!-- Goods 商品描述 新旧价格 快递信息 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- Shop 商家的信息  商品描述  店铺图片等等 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- detailInfo  商品的卖家秀图片- -->
      <detail-goods-img :goodsImg="goodsImg" @imgLoad="loadImg"></detail-goods-img>
      <!-- 参数信息    商品的衣长信息 详细衣服的描述 -->
      <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
      <!-- 商品的评论信息 comment -->
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <!-- 推荐数据展示  goodsList  公共组件 -->
      <goods-list ref="recommend" :goodsList="recommendData"></goods-list>
    </scroll>
    <!-- 点击返回顶部 -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
    <!-- 底部导航栏 收藏-店铺-购物车 -->
    <detail-bottom-nav-bar @addToCart="addToCart"></detail-bottom-nav-bar>
    <!-- 点击购物车 添加成功显示 -->
    <toast></toast>
  </div>
</template>

<script>
// common utils 工具
import { itemImgLoadMixin, backTop } from "common/utils/mixin";

//actions 映射助手
import { mapActions } from "vuex";

//导入公共组件 common
import scroll from "components/common/scroll/scroll";
import Toast from "components/common/toast/Toast";

//导入详情页的子组件 （抽离出去的组件）
import NavBar from "views/detail/childCpn/NavBar";
import topSwiper from "views/detail/childCpn/topSwiper";
import DetailBaseInfo from "views/detail/childCpn/DetailBaseInfo";
import DetailShopInfo from "views/detail/childCpn/DetailShopInfo";
import DetailGoodsImg from "views/detail/childCpn/DetailGoodsImg";
import DetailParamInfo from "views/detail/childCpn/DetailParamInfo";
import DetailCommentInfo from "views/detail/childCpn/DetailCommentInfo";
import DetailBottomNavBar from "views/detail/childCpn/DetailBottomNavBar";

//导入本项目当中重复使用的组件  GoodsList
import GoodsList from "components/content/goods/GoodsList";
//网络请求 detail  封装的Goods类（数据）
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "network/detail";

export default {
  name: "Detail",
  components: {
    NavBar,
    topSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    scroll,
    DetailGoodsImg,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomNavBar,
    Toast
  },
  data() {
    return {
      iid: null,
      topImage: [],
      goods: {},
      shop: {},
      goodsImg: {},
      paramInfo: {},
      commentInfo: {},
      //推荐页数据
      recommendData: [],
      //接收参数 评论  推荐距离顶部的y值高度
      themeTopYs: [],
      getThemeTopYs: null,
      currentIndex: null
    };
  },
  created() {
    //1. 根据传入的iid 显示不同的详情页的内容
    this.iid = this.$route.params.iid;

    //2. 根据iid  请求不同详情的数据
    this.getDetail();

    //3. 获取推荐页数据
    getRecommend().then(res => {
      this.recommendData = res.data.list;
    });
  },
  mixins: [itemImgLoadMixin],
  mixins: [backTop],
  mounted() {},
  destroyed() {
    //取消全局事件的监听  针对某一个事件 imgLoad事件（全局事件总线）
    this.$bus.$off("imgLoad", this.itemImgLoad);
  },
  methods: {
    //映射 Acitons 中的方法
    ...mapActions(["addCart"]),

    //点击相对于的title 跳转到对应位置（标题 联动）
    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 800);
    },
    //组件内部相关方法    组件内部相关方法   组件内部相关方法  组件内部相关方法
    loadImg() {
      //重新计算scroll 滚动条的高度scrollerHeight
      this.$refs.scroll.refresh();
      //接收参数 评论  推荐距离顶部的y值高度
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //给数组添加一个js最大值 用于后面判断
      this.themeTopYs.push(Number.MAX_VALUE);
    },
    //监听页面滚动  滚到指定位置 对应的标签页就会变红
    contentScroll(position) {
      const positionY = position.y;
      console.log("做完有时间判断一下如果评论没有信息 出现的bug");

      //判断评论是否存在
      // if (this.themeTopYs[2]) {
      //判断 是否在themeTopYs[i] 和 themeTopYs[i +1] 这两个数中间
      for (let i = 0; i < this.themeTopYs.length; i++) {
        if (
          (positionY < -this.themeTopYs[i] + 44 &&
            positionY > -this.themeTopYs[i + 1] + 44) ||
          positionY == -this.themeTopYs[i] + 44
        ) {
          this.currentIndex = i;
          this.$refs.navBar.currentIndex = this.currentIndex;
        }
      }

      //监听滚动，到达一定位置 回到顶部(5000)
      this.isShowBackTop = -position.y > 5000;
    },

    //点击添加到购物车
    addToCart() {
      //1. 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImage[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      //2. 将商品添加到购物车 (如果添加成功，则显示弹窗toast)
      this.addCart(product).then(resolve => {
        this.$toast.show(resolve, 1000);
      });
    },

    //网络请求相关 的方法           网络请求相关 的方法            网络请求相关 的方法
    //将网络请求封装到methods里面 这样减少created的代码量\
    getDetail() {
      const iid = this.iid;
      getDetail(iid).then(res => {
        const data = res.result;
        //轮播图 图片数据
        this.topImage = data.itemInfo.topImages;
        //goods  商品描述数据 快递 价格 等等
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        //获取店铺的图片 信息 评分
        this.shop = new Shop(data.shopInfo);

        //获取商品的图片
        this.goodsImg = data.detailInfo;

        //获取商品的参数  衣长、颜色、大小
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        //获取商品的评论信息   评论
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    }
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 99;
  background: #fff;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
