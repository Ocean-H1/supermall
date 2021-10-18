<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.acm" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
      recommends:{
        type:Array,
        default(){
          return [];
        }
      }
    }
}
</script>

<style scoped>
.recommend {
   display: flex;
   text-align: center;
   font-size: 13px;
   padding: 10px 0 20px 0;
   border-bottom: 10px solid #eee;
 }
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 100%;
  padding: 2vw;
}
</style>
