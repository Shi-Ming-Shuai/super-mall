// common js 工具
import { debounce } from "common/utils/debounce";
//点击返回顶部按钮
import BackTop from "components//content/backTop/BackTop";
// 图片加载完成 使用防抖动 混入
export const itemImgLoadMixin = {
  data() {
    return {
      itemImgLoad: null
    }
  },
  mounted() {
    //1. 解决滚动时候 的卡顿问题（scrollerHei提前计算了所以卡顿）
    //1. 解决refresh 的性能问题
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.itemImgLoad = () => {
      refresh();
    };
    this.$bus.$on("imgLoad", this.itemImgLoad);
  }
}

export const backTop ={
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop: false,
    }
  },
  methods:{
    backTopClick() {
      true && this.$refs.scroll.scroll.scrollTo(0, 0, 800);
    }
  }
}