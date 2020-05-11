<template>
  <div class="detail-param" v-if="Object.keys(paramInfo).length !== 0">
    <!-- 商品尺码 信息 -->
    <div class="rule" v-for="item in paramInfo.size">
      <div v-for="item2 in item" class="rule-tables">
        <div v-for="item3 in item2" class="rule-tables-item">{{item3}}</div>
      </div>
    </div>
    <!-- 商品材质 信息 -->
    <div class="info" v-for="item in paramInfo.info">
      <div class="info-item">
        <span class="left1">{{item.key}}</span>
        <span class="right1">{{item.value}}</span>
      </div>
    </div>

    <!-- 判断是否还有图片数据 有的话展示 -->
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.detail-param {
  font-size: 13px;
  padding: 10px;
  border-top: 4px solid rgb(236, 236, 236);
}
.rule-tables {
  margin-top: 10px;
  display: flex;
}
.rule-tables-item {
  flex: 1;
  padding: 10px;
  border-bottom: 2px solid #f5f2f2;
}
.info {
  margin-top: 10px;
  display: flex;
}
.info-item {
  flex: 1;
  padding: 10px;
  border-bottom: 2px solid #f5f2f2;
}

.info-item .right1 {
  display: inline-block;
  margin-left: 10%;
  width: 70%;
  color: var(--color-tint);
}
.info-img img {
  width: 100%;
}
</style>
