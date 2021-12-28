<!-- MainTabBar -->
<template>
  <tab-bar>
    <tab-bar-item v-for="item in TabBarList" :key="item.path" :path="item.path">
      <img slot="item-icon" :src="item.img" alt="" />
      <img slot="item-icon-active" :src="item.img_active" alt="" />
      <p slot="item-name">{{ item.name }}</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    //这里存放数据
    return {
      TabBarList: [
        {
          path: "/home",
          img: require("assets/imgs/tabbar/home.svg"),
          img_active: require("assets/imgs/tabbar/home_active.svg"),
          name: "首页",
        },
        {
          path: "/category",
          img: require("assets/imgs/tabbar/category.svg"),
          img_active: require("assets/imgs/tabbar/category_active.svg"),
          name: "分类",
        },
        {
          path: "/cart",
          img: require("assets/imgs/tabbar/shopcart.svg"),
          img_active: require("assets/imgs/tabbar/shopcart_active.svg"),
          name: "购物车",
        },
        {
          path: "/profile",
          img: require("assets/imgs/tabbar/profile.svg"),
          img_active: require("assets/imgs/tabbar/profile_active.svg"),
          name: "我的",
        },
      ],
    };
  },
};
</script>
<style scoped>
/* @import url(); 引入公共css类 */
</style>