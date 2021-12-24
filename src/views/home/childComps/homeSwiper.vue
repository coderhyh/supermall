<!-- homeSwiper -->
<template>
  <swiper>
    <swiper-slide v-for="item in banners" :key="item.acm">
      <a :href="item.link">
        <img class="swiper-img" :src="item.image" :alt="item.title" />
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper.vue";

export default {
  name: "homeSwiper",
  components: {
    Swiper,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
/* @import url(); 引入公共css类 */
</style>