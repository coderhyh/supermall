<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  props: {

  },
};
</script>

<style lang="less">
.nav-bar {
  display: flex;
  line-height: 0.44rem;
  height: 0.44rem;
  text-align: center;
  box-shadow: 0 1px 10px rgba(204, 204, 204, 0.514);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99999;

  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
}
</style>