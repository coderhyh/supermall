<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    MainTabBar,
  },
};
</script>
<style lang="less">
@import url("assets/css/base.less");
</style>
