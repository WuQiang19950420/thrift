<template>
  <main class="sale">
    <scroll-pages
      title="我卖出的"
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
          :pageIndex="0"
          ref="commonGoodItemRef"
        >
          <template #pay>实收款</template>
          <template #payAmount>￥{{ item.actualPayAmount }}</template>
        </common-good-item></template
      >

      <template v-else><empty text="暂无订单" class="emptys" /></template>
    </scroll-pages>
    <van-popup :show="show" position="bottom" round>
      <pop-up @cancel="cancel" @submitRefund="submitRefund" :order="orderItem[orderIndex]"></pop-up>
    </van-popup>
  </main>
</template>

<script lang="ts">
import scrollPages from '../common/scrollPages/scrollPages.vue';
import CommonGoodItem from '../common/goods/CommonGoodItem.vue';
import empty from '../common/empty/empty.vue';
import popUp from './popUp.vue';

import { computed, defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import { sellDeliver } from '@/service/order/order';
import { Toast } from 'vant';

export default defineComponent({
  name: 'sale',
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
    const saveSumbitData = ref();
    const commonGoodItemRef = ref('');
    const requestData = { type: 1 };
    const orderIndex = ref(0);
    const isEnd = computed(() => {
      return store.state.order.isEnd;
    });
    const setIsEnd = () => {
      store.commit('order/changeIsEnd', false);
    };
    const orderItem = computed(() => {
      return store.state.order.AllBuySellData;
    });
    //发货
    const submitRefund = async (value: any) => {
      const requestData = `oid=${saveSumbitData.value[0][1]}&expressCompanyName=${value.name}&shipOrderNumber=${value.number}`;
      const res = await sellDeliver(requestData);
      if (res.code === 1) {
        store.commit('order/changeOrderIsDeliver', [saveSumbitData.value[0][0], 1]);
        Toast('发货成功');
        show.value = false;
      } else {
        Toast('发货失败');
      }
    };
    const cancel = () => {
      show.value = !show.value;
    };
    const showPop = (...arg: any[]) => {
      saveSumbitData.value = arg; //当前订单索引值
      orderIndex.value = saveSumbitData.value[0][0];
      show.value = !show.value;
    };
    const goOrderDetail = (value: number) => {
      router.push({
        path: '/orderDetail',
        query: {
          orderIndex: value,
          pageIndex: 0
        }
      });
    };
    return {
      isEnd,
      goOrderDetail,
      show,
      setIsEnd,
      requestData,
      orderItem,
      cancel,
      submitRefund,
      showPop,
      saveSumbitData,
      commonGoodItemRef,
      orderIndex
    };
  }
});
</script>

<style scoped lang="scss">
.sale {
  background-color: #fafafa;
  .box {
    height: 46px;
  }
}
</style>
