<template>
  <section class="publish-choose-item">
    <div class="item-left">
      <slot name="icon"></slot>
      <div class="name">
        <slot name="name"></slot>
      </div>
    </div>
    <div class="item-right">
      <slot name="content"></slot>
      <slot name="arrow"></slot>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.publish-choose-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 13px;
  padding: 0 10px;
  .item-right {
    color: #a3a3a3;
    display: flex;
    align-items: center;
  }
  .item-left {
    display: flex;
    align-items: center;
    .name {
      margin-left: 5px;
    }
  }
}
</style>
>
