<template>
  <div class="recommends">
<div v-for="item in recommends" class="recommends-item">
  <a :href="item.link">
    <img :src="item.image" alt="">
  </a>
  <div>{{item.title}}</div>
</div>
  </div>
</template>

<script>

export default {
    name:'',
  components: {

  }, //接收父组件传递过来的数据，recommends
  props:{
    recommends:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommends{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;
  border-bottom: 8px solid #eee;
}
.recommends-item{
  flex: 1;
  margin-bottom: 18px;
}
.recommends-item img{
  width: 80%;
  margin: 5px auto 10px;
}
</style>
