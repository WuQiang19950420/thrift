<template>
  <article class="chit-chat-goods">
    <img src="~assets/image/home/mouse.png" />
    <div class="goods-detail">
      <h6>商品标题</h6>
      <span>¥500</span>
      <span>(运费:¥13)</span>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.chit-chat-goods {
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  padding-bottom: 10px;
  position: fixed;
  background-color: #fff;
  border-bottom: 1px solid #ebedf0;
  z-index: 999;
  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
  .goods-detail {
    margin-left: 10px;
    h6 {
      margin-bottom: 4px;
      font-weight: 400;
    }
    span {
      font-size: 11px;
      &:first-of-type {
        font-size: 13px;
      }
      &:last-child {
        color: #b5b5b5;
      }
    }
  }
}
</style>
