<!-- TabBar -->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar",
};
</script>
<style scoped>

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