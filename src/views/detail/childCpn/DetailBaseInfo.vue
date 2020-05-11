<template>
  <!-- <div v-if="Object.keys(goods).length !== 0"> -->
  <div v-if="Object.keys(goods).length !==0" class="detail-base-info">
    <!-- itemInfo 标题 标签信息 -->
    <div class="itemInfo">
      <div class="itemInfo-title">{{goods.title}}</div>
      <div class="itemInfo-price">
        <span class="new">{{goods.newPrice}}</span>
        <span class="old">{{goods.oldPrice}}</span>
        <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
      </div>
    </div>
    <!-- columns  销量 收藏 -->
    <div class="columns">
      <span class="columns-text">{{goods.columns[0]}}</span>
      <span class="columns-text">{{goods.columns[1]}}</span>
      <span class="columns-text">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <!-- services  服务类目（快递 退货 包邮等等信息） -->
    <div class="services">
      <div v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.detail-base-info {
  padding: 10px;
}
.itemInfo-title{
  font-size: 16px;
}
.itemInfo-price {
  margin: 10px 0 20px;
}
.itemInfo-price .new {
  font-size: 19.2px;
  color: var(--color-tint);
}
.itemInfo-price .old {
  font-size: 12px;
  margin: 0 5px;
  text-decoration: line-through;
  color: rgb(179, 176, 176);
}
.itemInfo-price .discount {
  font-size: 12px;
  padding: 3px;
  background: var(--color-tint);
  border-radius: 20px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}
.columns {
  margin-bottom: 10px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
.columns-text {
  color: rgb(179, 176, 176);
}
.services {
  border-top: 1.5px solid #eeeeee;
  border-bottom: 3px solid #eeeeee;
  display: flex;
  justify-content:space-between;
  line-height: 60px;
}

.services img {
  width: 12px;
  height: 12px;
  position: relative;
  top: 2px;
}
.services span {
  font-size: 12px;
  color: #333;

}
</style>
