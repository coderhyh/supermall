<template>
  <div class="goods-list-item" @click="goodsItemClick">
    <img :src="goodsItem.show.img" alt="">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goodsItemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid); 
    }
  },
}
</script>

<style lang="less" scoped>
@import url("~assets/css/themeConfig.less");
.goods-list-item{
  width: 1.8rem;
  background: #fff;
  overflow: hidden;
  padding-top: .1rem;
  img{
    width: 1.8rem;
    border-radius: .05rem;
  }
  div{
    height: .4rem;
    p:extend(.snh),span{
      line-height: .2rem;
      font-size: .12rem;
    }
    .price{
      color: @theme-color;
      margin-right: .1rem;
    }
    .collect{
      padding-left: .15rem;
      background: url("~assets/imgs/common/collect.svg") no-repeat left center / .12rem;
    }
  }
}
</style>