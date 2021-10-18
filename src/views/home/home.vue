<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from '../../network/home'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'

export default {
    name:'home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data(){
      return {
        banners: [],
        recommends:[],
      }
    },  
    created(){
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
}
</script>

<style scoped>
 
</style>
