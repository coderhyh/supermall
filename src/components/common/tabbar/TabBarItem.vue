<!-- TabBarItem -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "TabBarItem",
  props: {
    path: String,
    // 传值改变颜色
    activeColor: {
      type: String,
      default: '#FF5777'
    }
  },
  components: {},
  data() {
    //这里存放数据
    return {
      // isActive: false
    };
  },
  //方法集合
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err)
    }
  },
  //监听属性 类似于data概念
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {};
    }
  },
};
</script>
<style scoped>
/* @import url(); 引入公共css类 */

.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: .14rem;
  height: .49rem;
  /* line-height: 49px; */
}
.tab-bar-item img {
  width: .24rem;
  height: .24rem;
  margin-top: .05rem;
}
</style>