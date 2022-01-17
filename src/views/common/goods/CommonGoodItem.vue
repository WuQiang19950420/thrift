<template>
  <section class="common-good-item">
    <header>
      <div class="me-header-left">
        <div class="user-img">
          <img :src="orderItem.photo" />
        </div>
        <div class="user-name">
          <h5>{{ orderItem.buyerName }}</h5>
        </div>
      </div>
      <div class="me-header-right">
        <span>{{ orderState }}</span>
      </div>
    </header>
    <article class="good-item-content">
      <div class="good-item-img">
        <img :src="image[0]" @load="imgLoad" @error="imgError" />
      </div>
      <p>
        <span>{{ orderItem.shortDescription }}</span>
      </p>
    </article>
    <article class="good-item-price">
      <span><slot name="pay"></slot></span>
      <span><slot name="payAmount"></slot></span>
    </article>
    <footer>
      <!-- <button @click.stop="leftBtnClick" v-if="leftBtn">{{ leftBtn }}</button> -->
      <button @click.stop="midBtnClick" v-if="midBtn">{{ midBtn }}</button>
      <button @click.stop="rightBtnClick" v-if="rightBtn">
        {{ rightBtn }}
      </button>
    </footer>
  </section>
</template>

<script lang="ts">
import emitter from '@/bus';
import { computed, defineComponent, ref, watchEffect } from 'vue';
import { cancelOrder } from '@/service/order/order';
import { Toast } from 'vant';
import { useStore } from '@/store';
import { applyRefund, confirmGoods, payAgain, sellRefus, sellRefund } from '@/service/order/order';
import { wxPay } from '@/weixin/WeiXin';
import { Dialog } from 'vant';
export default defineComponent({
  props: {
    orderItem: {
      type: Object,
      default: () => {
        return {};
      }
    },
    orderItemIndex: {
      type: Number,
      required: true
    },
    //0是我卖出的 1是我买到的
    pageIndex: {
      type: Number,
      required: true
    }
  },
  emits: ['showPop'],
  setup(prop, { emit }) {
    const store = useStore();
    const image = computed(() => {
      return prop.orderItem.imagePath.split('|');
    });
    const leftBtn = ref('');
    const midBtn = ref('');
    const rightBtn = ref('');
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
      }
      return state;
    });
    watchEffect(() => {
      //1和3 显示支付按钮
      const stateIndex = prop.orderItem.orderStatus;
      const isDelivery = prop.orderItem.isShipping;
      const paymentStatus = prop.orderItem.paymentStatus;
      const isStateIndex = stateIndex === 2 || stateIndex === 8 || stateIndex === 9;
      if (stateIndex === 1 && paymentStatus === 1 && prop.pageIndex === 1) {
        rightBtn.value = '去支付';
        midBtn.value = '取消订单';
        leftBtn.value = '';
      } else if (isStateIndex && isDelivery === 0 && prop.pageIndex === 1) {
        rightBtn.value = '退款';
        midBtn.value = '';
        leftBtn.value = '';
      } else if (isStateIndex && isDelivery === 1 && prop.pageIndex === 1) {
        rightBtn.value = '退款/退货';
        midBtn.value = '确认收货';
        leftBtn.value = '';
      } else if (stateIndex === 2 && isDelivery === 0 && prop.pageIndex === 0) {
        rightBtn.value = '发货';
        midBtn.value = '';
        leftBtn.value = '';
      } else if (stateIndex === 5 && prop.pageIndex === 0 && isDelivery === 1) {
        rightBtn.value = '同意退货退款';
        midBtn.value = '拒绝退货退款';
        leftBtn.value = '';
      } else if (stateIndex === 5 && prop.pageIndex === 0 && isDelivery === 0) {
        rightBtn.value = '同意退款';
        midBtn.value = '';
        leftBtn.value = '';
      } else {
        rightBtn.value = '';
        midBtn.value = '';
        leftBtn.value = '';
      }
    });
    function resHandel(index: number, res: any) {
      if (res.code === 1) {
        store.commit('order/changeOrderStatus', [prop.orderItemIndex, index]);
        Toast(res.msg);
      } else {
        Toast(res.msg);
      }
    }
    const payErro = () => {
      Toast('支付失败');
    };
    const paySuccess = () => {
      Toast('支付成功');
      store.commit('order/changeOrderStatus', [prop.orderItemIndex, 2]);
      store.commit('order/changeOrderPaymentState', [prop.orderItemIndex, 2]);
    };
    const rightBtnClick = async () => {
      if (rightBtn.value === '去支付') {
        const host = location.host;
        const requestData = `oid=${prop.orderItem.id}`;
        const res = await payAgain(requestData);
        if (res.mweb_url) {
          sessionStorage.setItem('mweb_url', res.mweb_url);
          const url = encodeURIComponent(`http://${host}/wxPay`);
          window.location.href = `${res.mweb_url}&redirect_url=${url}`;
          resHandel(2, res);
        } else {
          wxPay(res, payErro, paySuccess);
        }
      } else if (rightBtn.value === '退款') {
        Dialog.confirm({
          message: `退款之前请先与卖家沟通,卖家联系方式:${prop.orderItem.phone}`,
          confirmButtonText: '已沟通'
        }).then(async () => {
          const requestData = `oid=${prop.orderItem.id}&refundType=0&buyerDeliveryType=&buyerExpressCompanyName=&buyerShipOrderNumber=`;
          const res = await applyRefund(requestData);
          resHandel(5, res);
        });
      } else if (rightBtn.value === '退款/退货') {
        emit('showPop', [prop.orderItemIndex, prop.orderItem.id]);
      } else if (rightBtn.value === '同意退款' || rightBtn.value === '同意退货退款') {
        const requestData = `oid=${prop.orderItem.id}`;
        const res = await sellRefund(requestData);
        resHandel(6, res);
      } else if (rightBtn.value === '发货') {
        emit('showPop', [prop.orderItemIndex, prop.orderItem.id]);
      }
    };
    const midBtnClick = async () => {
      if (midBtn.value === '取消订单') {
        const requestData = `oid=${prop.orderItem.id}`;
        const res = await cancelOrder(requestData);
        resHandel(4, res);
      } else if (midBtn.value === '确认收货') {
        const requestData = `oid=${prop.orderItem.id}`;
        const res = await confirmGoods(requestData);
        if (res.code === 1) {
          store.commit('order/changeOrderStatus', [prop.orderItemIndex, 10]);
          store.commit('order/changeOrderIsDeliver', [prop.orderItemIndex, 2]);
          Toast(res.msg);
        } else {
          Toast(res.msg);
        }
      } else if (midBtn.value === '拒绝退货退款') {
        const requestData = `oid=${prop.orderItem.id}`;
        const res = await sellRefus(requestData);
        resHandel(9, res);
      }
    };
    const imgError = () => {
      emitter.emit('imgLoad');
    };
    const imgLoad = () => {
      emitter.emit('imgLoad');
    };
    return {
      imgLoad,
      imgError,
      image,
      orderState,
      leftBtn,
      midBtn,
      rightBtn,
      rightBtnClick,
      midBtnClick,
      payErro,
      paySuccess
    };
  }
});
</script>

<style lang="scss" scoped>
.common-good-item {
  width: 97%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0px 4px 20px #f2f2f2;
  padding: 10px;
  header {
    display: flex;
    justify-content: space-between;
    .me-header-left {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .user-img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .user-name {
        margin-left: 10px;
        h5 {
          margin: 0;
          font-size: 13px;
          font-weight: 400;
        }
      }
    }
    .me-header-right {
      font-size: 12px;
      color: #e74416;
    }
  }
  .good-item-content {
    display: flex;
    .good-item-img {
      img {
        width: 65px;
        height: 65px;
        border-radius: 10px;
      }
    }
    p {
      margin: 0 0 0 10px;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
  .good-item-price {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      &:first-child {
        font-size: 12px;
      }
      &:last-child {
        margin-left: 5px;
        font-size: 14px;
        color: red;
      }
    }
  }
  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
    button {
      width: fit-content;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      padding: 0 10px;
      border-radius: 20px;
      border: 1px solid #f5f5f5;
      margin-left: 20px;
      background-color: #fff;
    }
    .other {
      font-size: 16px;
    }
  }
}
</style>
