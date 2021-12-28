<template>
  <div class="back-top">
    <img src="~assets/imgs/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {

    }
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
.back-top {
  position: fixed;
  right: .05rem;
  bottom: 0.55rem;
  z-index: 999;
  width: .45rem;
  height: .45rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>