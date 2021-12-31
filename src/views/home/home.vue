<!-- home -->
<template>
  <div id="home">
    <!-- navBar -->
    <nav-bar class="home-nav-bar" ref="navBar">
      <div slot="center" class="nav-bar-center">购物街</div>
    </nav-bar>
    <!-- TabControl -->
    <tab-control
      class="abControl"
      :titles="['流行', '新款', '精选']"
      ref="tabControl1"
      @tabClick="tabClick"
      v-show="isTabControlShow"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      @pullingUp="pullingUp"
      :pull-up-load="true"
    >
      <!-- swiper -->
      <swiper-box
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></swiper-box>
      <!-- RecommendView -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- FeatureView -->
      <feature-view></feature-view>
      <!-- TabControl -->
      <tab-control
        class="abControl"
        :titles="['流行', '新款', '精选']"
        ref="tabControl2"
        @tabClick="tabClick"
      ></tab-control>
      <!-- GoodsList -->
      <goods-list ref="goodsList" :goods="goods[controlType].list"></goods-list>
    </scroll>
    <!-- BackTop -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"; // 顶部栏
import SwiperBox from "./childComps/homeSwiper.vue"; // 轮播图
import RecommendView from "./childComps/RecommendView.vue"; // 推荐
import FeatureView from "./childComps/FeatureView.vue"; // 本周流行
import TabControl from "components/content/tabControl/TabControl.vue"; //商品列表导航
import GoodsList from "components/content/goods/GoodsList.vue"; // 商品列表
import BackTop from "components/content/backTop/BackTop.vue"; // 返回顶部

import { getHomeMultidata, getHomeGoods } from "network/home";
import Scroll from "components/common/scroll/Scroll.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    SwiperBox,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: null,
      recommends: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      controlType: "pop",
      isShowBackTop: false,
      backTopFlag: true,
      tabControlTop: 0,
      isTabControlShow: false,
    };
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品的数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /* 
      事件监听相关
    */
    //  '流行', '新款', '精选' --- 事件
    tabClick(index) {
      this.controlType = Object.keys(this.goods)[index];
      this.$refs.scroll.scrollTo(0, -this.tabControlTop);
      this.$refs.tabControl1.curIndex = index;
      this.$refs.tabControl2.curIndex = index;
    },
    // 返回顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    // 监听页面滚动
    contentScroll(position) {
      if (this.backTopFlag) {
        this.backTopFlag = false;
        this.isShowBackTop = -position.y > 800;
        setTimeout(() => {
          this.backTopFlag = true;
        }, 1000);
      }
      // 决定 tabControl 是否吸顶
      this.isTabControlShow = -position.y > this.tabControlTop;
    },
    // 上啦加载更多
    pullingUp() {
      this.getHomeGoods(this.controlType);
    },
    swiperImgLoad() {
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /* 
      网络请求相关
    */
    getHomeMultidata() {
      getHomeMultidata()
        .then((result) => {
          this.banners = result.data.banner.list;
          this.recommends = result.data.recommend.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((result) => {
          this.goods[type].list.push(...result.data.list);
          this.goods[type].page++;
          // 重置上拉刷新
          this.$refs.scroll.finishPullUp();
          this.$refs.scroll.scroll.refresh();
        })
        .catch((err) => {
          console.log("服务器繁忙，请刷新");
        });
    },
  },
  computed: {},
  watch: {},
  mounted() {},
};
</script>
<style lang='less' scoped>
@import url("~assets/css/themeConfig.less");
#home {
  height: 100vh;
}
.home-nav-bar {
  background: @theme-color;
  .nav-bar-center {
    font-size: 0.2rem;
    font-weight: 700;
    color: white;
  }
}
.tab-control {
  box-shadow: 0 1px 0 rgba(204, 204, 204, 0.514);
  position: relative;
  z-index: 999;
}

.content {
  position: fixed;
  top: 0.44rem;
  bottom: 0.49rem;
  left: 0;
  right: 0;
  // height: calc(100vh - 0.44rem - 0.49rem);
  // margin-top: 0.44rem;
  overflow: hidden;
}
</style>