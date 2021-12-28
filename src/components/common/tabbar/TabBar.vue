<!-- TabBar -->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "TabBar",
};
</script>
<style scoped>
/* @import url(); 引入公共css类 */

#tab-bar {
  display: flex;
  background: #eee;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px .05rem rgba(200, 200, 200, 0.356);
}

</style>