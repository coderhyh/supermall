<template>
  <div>
    <nav-bar class="home-nav-bar">
      <div slot="left" class="backBtn" @click="$router.back()">
        <img src="~assets/imgs/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <p v-for="(item, index) in titles" :key="index"
          :class="{cur: index === curIndex}"
          @click="curIndex = index"
        >{{item}}</p>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      curIndex: 0
    };
  },
  components: {
    NavBar
  },
};
</script>

<style lang="less" scoped>
@import url("~assets/css/themeConfig.less");
.backBtn img{
  vertical-align: middle;
  width: .18rem;
}
.title{
  display: flex;
  justify-content: space-evenly;
  font-size: .14rem;

  .cur{
    color: @theme-color;
    font-weight: 900;
  }
}
</style>