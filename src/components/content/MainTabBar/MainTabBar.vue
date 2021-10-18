<template>
    <div>
        <tab-bar>
            <TabBarItem path='/home' activeColor="red">
            <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
            <img src="~assets/img/tabbar/home_a.svg" alt="" slot="item-icon-active">
            <div slot="item-text">首页</div>
            </TabBarItem>
            
            <TabBarItem path='/category' activeColor="red">
            <img src="~assets/img/tabbar/classify.svg" alt="" slot="item-icon">
            <img src="~assets/img/tabbar/classify_a.svg" alt="" slot="item-icon-active">
            <div slot="item-text">分类</div>
            </TabBarItem>
            <TabBarItem path='/cart' activeColor="red">
            <img src="~assets/img/tabbar/cart.svg" alt="" slot="item-icon">
            <img src="~assets/img/tabbar/cart_a.svg" alt="" slot="item-icon-active">
            <div slot="item-text">购物车</div>
            </TabBarItem>
            <TabBarItem path='/profile' activeColor="red">
            <img src="~assets/img/tabbar/my.svg" alt="" slot="item-icon">
            <img src="~assets/img/tabbar/my_a.svg" alt="" slot="item-icon-active">
            <div slot="item-text">我的</div>
            </TabBarItem>
        
        </tab-bar>
    </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>


