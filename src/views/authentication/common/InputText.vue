<template>
  <section class="input-text">
    <div class="input-border">
      <span class="text">
        <slot name="text"></slot>
      </span>
      <div class="input"><slot name="input"></slot></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.input-text {
  height: 60px;
  padding: 0 10px;
  line-height: 60px;
  font-size: 14px;
  .input-border {
    display: flex;
    justify-content: space-between;
    height: 100%;
    border-bottom: 1px solid #f5f6f8;
    .text {
      width: 70px;
    }
    .input {
      flex: 1;
    }
  }
}
</style>
