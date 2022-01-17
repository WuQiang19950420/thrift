<template>
  <main class="buy">
    <scroll-pages
      title="我买到的"
      storeName="order/getAllBuySellData"
      storeListName="order/getAllBuySellList"
      :isEnd="isEnd"
      :requestData="requestData"
      requestMode="get"
      @setIsEnd="setIsEnd"
    >
      <template v-if="orderItem.length !== 0">
        <common-good-item
          v-for="(item, index) in orderItem"
          :key="index"
          :orderItem="item"
          @click="goOrderDetail(index)"
          @showPop="showPop"
          :orderItemIndex="index"
          :pageIndex="1"
        >
          <template #pay>实付款</template>
          <template #payAmount>￥{{ item.totalAmount }}</template>
        </common-good-item>
      </template>
      <template v-else><empty text="暂无订单" class="emptys" /></template>
    </scroll-pages>
    <van-popup :show="show" position="bottom" round>
      <pop-up @cancel="cancel" @submitRefund="submitRefund" :phone="cellPhone"></pop-up>
    </van-popup>
  </main>
</template>

<script lang="ts">
import scrollPages from '../common/scrollPages/scrollPages.vue';
import CommonGoodItem from '../common/goods/CommonGoodItem.vue';
import popUp from './popUp.vue';
import empty from '../common/empty/empty.vue';

import { computed, defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import { Toast } from 'vant';

import { applyRefund } from '@/service/order/order';

export default defineComponent({
  name: 'buy',
  components: {
    scrollPages,
    CommonGoodItem,
    popUp,
    empty
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const show = ref(false);
    const cellPhone = ref('');
    const isEnd = computed(() => {
      return store.state.order.isEnd;
    });
    const saveSumbitData = ref();
    const requestData = { type: 0 };
    const orderItem = computed(() => {
      return store.state.order.AllBuySellData;
    });
    const setIsEnd = () => {
      store.commit('order/changeIsEnd', false);
    };
    //  快递弹出层开关
    const showPop = (...arg: any[]) => {
      saveSumbitData.value = arg;
      show.value = true;
      cellPhone.value = orderItem.value[saveSumbitData.value[0][0]].phone;
    };
    const cancel = () => {
      show.value = false;
    };
    //申请退款退货
    const submitRefund = async (value: any[]) => {
      let requestData = '';
      if (value[1] == 0 || value[1] == 1) {
        requestData = `refundReason=${value[0].refundReason}&oid=${saveSumbitData.value[0][1]}&refundType=1&buyerDeliveryType=${value[1]}&buyerExpressCompanyName=${value[0].name}&buyerShipOrderNumber=${value[0].number}`;
      } else {
        requestData = `refundReason=${value[0].refundReason}&oid=${saveSumbitData.value[0][1]}&refundType=1&buyerDeliveryType=${value[1]}`;
      }
      const res = await applyRefund(requestData);
      if (res.code === 1) {
        show.value = false;
        Toast(res.msg);
        store.commit('order/changeOrderStatus', [saveSumbitData.value[0][0], 5]);
      } else {
        Toast(res.msg);
      }
    };
    const goOrderDetail = (value: number) => {
      router.push({
        path: '/orderDetail',
        query: {
          orderIndex: value,
          pageIndex: 1
        }
      });
    };
    return {
      isEnd,
      orderItem,
      requestData,
      goOrderDetail,
      showPop,
      show,
      cancel,
      submitRefund,
      setIsEnd,
      cellPhone
    };
  }
});
</script>

<style scoped lang="scss">
.buy {
  background-color: #fafafa;
  .box {
    height: 46px;
  }
}
</style>
