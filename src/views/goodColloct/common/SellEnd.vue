<template>
  <aside class="sell-end">
    <span>
      <slot></slot>
    </span>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sell-end {
  position: absolute;
  right: 30px;
  top: 0px;
  width: 60px;
  height: 30px;
  border-radius: 8px;
  text-align: center;
  line-height: 26px;
  border: 2px solid #c9c9c9;
  color: #c9c9c9;
  font-size: 13px;
  transform: rotate(-10deg);
}
</style>
