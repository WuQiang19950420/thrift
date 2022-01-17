<template>
  <article class="pay-fixed">
    <slot name="circle"></slot>
    <slot></slot>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pay-fixed {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  background-color: #ffffff;
}
</style>
