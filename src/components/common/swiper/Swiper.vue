<!-- swiper -->
<template>
  <swiper
    :options="swiperOption"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <slot></slot>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>


<script>
import "swiper/css/swiper.css";
export default {
  name: 'swiper_img',
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        // 设置分页器
        pagination: {
          el: ".swiper-pagination",
          // 设置点击可切换
          clickable: true,
        },
        // 设置自动轮播
        autoplay: {
          delay: 3000, // 3秒切换一次
          disableOnInteraction: false,
        },
        // 设置轮播可循环
        loop: true,
      },
    };
  },
  methods: {
    onSwiper() {},
    onSlideChange() {},
  },
};
</script>
<style scoped lang="less">
/* @import url(); 引入公共css类 */
</style>