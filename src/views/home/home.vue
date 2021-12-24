<!-- home -->
<template>
  <div id="home">
    <!-- navBar -->
    <nav-bar class="home-nav-bar">
      <div slot="center" class="nav-bar-center">购物街</div>
    </nav-bar>
    <!-- swiper -->
    <swiper-box :banners="banners"></swiper-box>
    <!-- RecommendView -->
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import SwiperBox from "./childComps/homeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    SwiperBox,
    RecommendView,
  },
  data() {
    return {
      banners: null,
      recommends: null,
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created() {
    // 请求多个数据
    getHomeMultidata()
      .then((result) => {
        this.banners = result.data.banner.list;
        this.recommends = result.data.recommend.list;
        // this.dKeywords = result.data.dKeyword;
        // this.keywords = result.data.keywords;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {},
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style lang='less' scoped>
@import url("~assets/css/base.less");

.home-nav-bar {
  background: @theme-color;
  .nav-bar-center {
    font-size: 0.2rem;
    font-weight: 600;
    color: white;
  }
}
</style>