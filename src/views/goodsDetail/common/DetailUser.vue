<template>
  <article class="detail-user">
    <div class="user-img">
      <img :src="user.photo" />
      <span>{{ user.userName }}</span>
    </div>
    <div class="detail-user-middle">
      <div class="flex-item">
        <span>在售商品</span>
        <strong>{{ user.count }}</strong>
      </div>
      <div class="flex-item">
        <span>已售商品</span>
        <strong>{{ user.sellerCounts }}</strong>
      </div>
      <div class="flex-item">
        <span>加入市场</span>
        <strong>{{ user.day }}天</strong>
      </div>
    </div>
  </article>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.detail-user {
  width: 95%;
  margin: 10px auto;
  box-shadow: 0px 4px 20px #e3e5e7;
  border-radius: 10px;
  padding: 10px;
  height: 170px;
  .user-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    span {
      padding-top: 10px;
    }
  }
  .detail-user-middle {
    display: flex;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-top: 10px;
    .flex-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      span {
        font-size: 13px;
        color: #666;
        strong {
          font-size: 14px;
          color: #000;
        }
      }
    }
  }
}
</style>
