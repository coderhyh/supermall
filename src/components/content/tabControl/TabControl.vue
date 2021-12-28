<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ cur: index == curIndex }"
      @click="curClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  data() {
    return {
      curIndex: 0,
    };
  },
  methods: {
    curClick(index) {
      if (this.curIndex != index) {
        this.curIndex = index;
        this.$emit("tabClick", index);

        // const wrapper = this.$parent.$refs.wrapper;
        // wrapper.scrollTo(0, this.$el.offsetTop)
        
        // const refs = this.$parent.$refs;
        // const navBar = refs.navBar.$el.offsetHeight;
        // const tabControl = refs.tabControl.$el.offsetHeight;
        // const goodsList = refs.goodsList.$el.offsetTop;
        // window.scrollTo(0, goodsList - (navBar + tabControl));
      }
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~assets/css/themeConfig.less");
.tab-control {
  background: white;
  display: flex;
  font-size: 16px;
  text-align: center;
  line-height: 0.4rem;

  .tab-control-item {
    flex: 1;
  }
  span {
    padding: 5px;
    font-size: 0.12rem;
  }
  .cur span {
    color: @theme-color;
    border-bottom: 0.03rem solid @theme-color;
  }
}
</style>