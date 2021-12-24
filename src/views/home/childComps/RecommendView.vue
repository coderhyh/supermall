<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less">
.recommend {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: .2rem !important;
  border-bottom: .1rem solid #eee;
  div {
    img{
      width: .8rem;
      height: 0.8rem;
      margin: .1rem 0;
    }
    p{
      text-align: center;
    }
  }
}
</style>