<template>
  <article class="order-detail-state">
    <h5>{{ orderState }}</h5>
    <div class="order-detail-settlement">
      <span>{{ orderItem.isSettlement === 0 ? '未结算' : '已结算' }}</span>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
export default defineComponent({
  props: {
    orderItem: {
      type: Object,
      required: true
    },
    pageIndex: {
      type: Number,
      required: true
    }
  },
  setup(prop) {
    const orderState = computed(() => {
      const orderState = prop.orderItem.orderStatus;
      const paymentState = prop.orderItem.paymentStatus;
      const isShipping = prop.orderItem.isShipping;
      const pageIndex = prop.pageIndex;
      let state = '';
      if (orderState === 1 && paymentState === 0 && isShipping === 0) {
        pageIndex === 1 ? (state = '下单成功') : (state = '买家下单成功');
      } else if (orderState === 1 && paymentState === 1 && isShipping === 0) {
        pageIndex === 1 ? (state = '待支付') : (state = '等待买家支付');
      } else if (orderState === 2 && paymentState === 2 && isShipping === 0) {
        pageIndex === 1 ? (state = '等待卖家发货') : (state = '买家支付成功');
      } else if (orderState === 2 && paymentState === 2 && isShipping === 1) {
        pageIndex === 1 ? (state = '卖家已发货') : (state = '等待买家收货');
      } else if (orderState === 10 && paymentState === 2 && isShipping === 2) {
        state = '交易成功';
      } else if (orderState === 3) {
        state = '支付失败';
      } else if (orderState === 4) {
        state = '订单已取消';
      } else if (orderState === 5) {
        pageIndex === 1 ? (state = '退款申请中') : (state = '买家申请退款');
      } else if (orderState === 6) {
        state = '退款中';
      } else if (orderState === 7) {
        state = '退款成功';
      } else if (orderState === 8) {
        state = '退款失败';
      } else if (orderState === 9) {
        state = '卖家拒绝退款';
      } else if (orderState === 8) {
        state = '退款失败';
      }
      return state;
    });
    return {
      orderState
    };
  }
});
</script>

<style lang="scss" scoped>
.order-detail-state {
  position: relative;
  background-image: linear-gradient(140deg, #84bff7, #2e9aff);
  color: #fff;
  padding: 64px 10px 30px;
  font-size: 12px;
  text-align: center;
  overflow: hidden;
  h5 {
    font-size: 19px;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:before {
    content: '';
    position: absolute;
    width: 60%;
    height: 0;
    padding-bottom: 28%;
    left: 0;
    top: 0;
    border-radius: 0 0 70% 0/0 0 100% 0;
    opacity: 0.63;
    background-image: linear-gradient(230deg, rgba(244, 29, 40, 0) 50%, #84bff7 96%);
    box-shadow: 0 2px 40px 0 #84bff7;
  }
  .order-detail-settlement {
    position: absolute;
    right: 0;
    top: 0;
    width: 75px;
    height: 75px;
    background-image: url('../../../assets/image/order/sellIcon.png');
    background-size: 75px;
    span {
      text-align: center;
      position: relative;
      top: 34px;
      color: #db1f1f;
      font-size: 11px;
    }
  }
}
</style>
