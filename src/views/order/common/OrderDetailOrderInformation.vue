<template>
  <article class="order-information">
    <h5>订单信息</h5>
    <div class="order-information-top">
      <section>
        <h5>订单编号</h5>
        <span>{{ orderItem.orderId }}</span>
      </section>
      <section>
        <h5>下单时间</h5>
        <span>{{ orderItem.orderTime }}</span>
      </section>
      <section v-if="orderItem.expressCompanyName">
        <h5>物流/快递名称</h5>
        <span>{{ orderItem.expressCompanyName }}</span>
      </section>
      <section v-if="orderItem.shipOrderNumber">
        <h5>物流/快递单号</h5>
        <span>{{ orderItem.shipOrderNumber }}</span>
      </section>
      <section>
        <h5>支付方式</h5>
        <span>在线支付</span>
      </section>
      <section>
        <h5>配送方式</h5>
        <span>{{ freightType }}</span>
      </section>
      <template
        v-if="orderItem.buyerDeliveryType == 0 || orderItem.buyerDeliveryType == 1 || orderItem.buyerDeliveryType == 2"
      >
        <section>
          <h5>退货方式</h5>
          <span>{{ refundType }}</span>
        </section>
        <section v-if="orderItem.buyerDeliveryType !== 2">
          <h5>退货快递/物流名称</h5>
          <span>{{ orderItem.buyerExpressCompanyName }}</span>
        </section>
        <section v-if="orderItem.buyerDeliveryType !== 2">
          <h5>退货快递/物流单号</h5>
          <span>{{ orderItem.buyerShipOrderNumber }}</span>
        </section>
        <section>
          <h5>退货原因</h5>
          <span>{{ orderItem.refundReason }}</span>
        </section>
        <section v-if="orderItem.buyerRemark">
          <h5>买家备注</h5>
          <span>{{ orderItem.buyerRemark }}</span>
        </section>
      </template>
    </div>
    <div class="order-infromation-bottom">
      <section>
        <h5>商品总额</h5>
        <span>￥{{ orderItem.totalAmount - orderItem.freight }}</span>
      </section>
      <section>
        <h5>运费</h5>
        <span>￥{{ orderItem.freight }}</span>
      </section>
      <template v-if="$route.query.pageIndex == 0">
        <span class="refund-notice">注:若该商品产生运费,退货退款时运费将正常结算到您的账户</span>
      </template>
      <template v-else>
        <span class="refund-notice">注:若该商品产生运费,退货退款时运费不退</span>
      </template>
      <footer>
        <span>总金额:</span>
        <span v-if="$route.query.pageIndex == 0">￥{{ orderItem.actualPayAmount }}</span>
        <span v-else>￥{{ orderItem.totalAmount }}</span>
      </footer>
    </div>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
export default defineComponent({
  props: {
    orderItem: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(props) {
    const freightType = computed(() => {
      let freightType = '';
      switch (props.orderItem.deliveryType) {
        case 0:
          freightType = '快递';
          break;
        case 1:
          freightType = '物流';
          break;
        case 2:
          freightType = '自提';
          break;
        case 3:
          freightType = '送货上门';
          break;
      }
      return freightType;
    });
    const refundType = computed(() => {
      let refundType = '';
      switch (props.orderItem.buyerDeliveryType) {
        case 0:
          refundType = '快递';
          break;
        case 1:
          refundType = '物流';
          break;
        case 2:
          refundType = '送货上门';
          break;
      }
      return refundType;
    });
    return {
      freightType,
      refundType
    };
  }
});
</script>

<style lang="scss" scoped>
.order-information {
  background-color: #fff;
  border-radius: 6px;
  margin-top: 10px;
  padding: 10px;
  h5 {
    font-size: 14px;
    font-weight: 400;
    margin: 0;
  }
  .order-information-top {
    section {
      margin-top: 10px;
      display: flex;
      height: 30px;
      line-height: 30px;
      font-size: 13px;
      h5 {
        color: #999;
        margin: 0 20px 0 0;
        font-size: 12px;
      }
    }
  }
  .order-infromation-bottom {
    margin-top: 20px;
    section {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      span {
        color: red;
        font-size: 14px;
      }
    }
    .refund-notice {
      display: block;
      font-size: 11px;
      color: red;
    }
  }
  footer {
    text-align: right;
    margin-top: 20px;
    font-size: 14px;
    span {
      &:nth-child(1) {
        font-weight: 700;
      }
      &:nth-child(2) {
        margin-left: 10px;
        color: red;
      }
    }
  }
}
</style>
