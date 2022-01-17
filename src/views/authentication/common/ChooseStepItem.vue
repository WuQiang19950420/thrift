<template>
  <section class="step-item">
    <div class="step-item-top" :class="$attrs.name">
      <slot name="stepImg"></slot>
    </div>
    <span class="step-item-bottom" :class="$attrs.bottom">
      <slot name="stepText"></slot>
    </span>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 15px 0;
  .step-item-top {
    width: 55px;
    height: 55px;
    line-height: 60px;
    text-align: center;
    color: #9b9b9b;
    border-radius: 50%;
    background-color: #f3f3f3;
    margin-bottom: 10px;
  }
  .step-item-bottom {
    font-size: 13px;
    color: #9b9b9b;
  }
  .one-step-active {
    background-color: #84bff7;
    color: #fff;
  }
  .one-text-active {
    color: #84bff7;
  }
  .two-step-active {
    color: #2e9aff;
  }
  .two-text-active {
    color: #2e9aff;
  }
}
</style>
