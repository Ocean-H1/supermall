<template>
  <div class="HomeSwiper">
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name:'HomeSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banners:{
            type:Array,
            // 如果传过来的值是 Object/Array 需使用函数类型 否则会报错
            default(){
                return [];
            }
        }
    }
}
</script>

<style scoped>

</style>
