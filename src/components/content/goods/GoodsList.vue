<template>
  <div class="goods-list">
    <goods-list-item
      v-for="item in goods"
      :goodsItem="item"
      :key="item.acm"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  computed: {},
  methods: {},
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ul {
    list-style: none;
  }
}
</style>