<template>
  <main class="order-detail" :style="{ height: meInputHeight + 'px' }">
    <van-nav-bar left-arrow @click-left="onClickLeft" :border="false" :fixed="true" title="订单详情" />
    <scroll :style="{ height: meInputHeight + 'px' }">
      <div class="box"></div>
      <order-detail-state :orderItem="orderItem" :pageIndex="pageIndex"></order-detail-state>
      <order-detail-address :addressData="addressData"></order-detail-address>
      <order-detail-goods :goodsData="goodsData"></order-detail-goods>
      <order-detail-order-information :orderItem="orderItem"></order-detail-order-information
    ></scroll>
  </main>
</template>

<script lang="ts">
import OrderDetailState from './common/OrderDetailState.vue';
import OrderDetailAddress from './common/OrderDetailAddress.vue';
import OrderDetailOrderInformation from './common/OrderDetailOrderInformation.vue';
import OrderDetailGoods from './common/OrderDetailGoods.vue';
import scroll from '@/views/common/scroll/Scroll.vue';
import { ref, defineComponent, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from '@/store';
import emitter from '@/bus';
export default defineComponent({
  components: {
    OrderDetailState,
    OrderDetailAddress,
    OrderDetailOrderInformation,
    OrderDetailGoods,
    scroll
  },
  setup() {
    const meInputHeight = ref(window.innerHeight);
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const pageIndex = ref();
    let oderIndex = 0;
    if (route.query.orderIndex) {
      oderIndex = parseInt(route.query.orderIndex as string);
    }
    if (route.query.pageIndex) {
      pageIndex.value = parseInt(route.query.pageIndex as string);
    }

    const orderItem = computed(() => {
      return store.state.order.AllBuySellData[oderIndex];
    });
    const onClickLeft = () => {
      emitter.emit('noGetData');
      router.back();
    };
    const addressData = {
      buyName: orderItem.value.shipTo,
      buyPhone: orderItem.value.cellPhone,
      buyAddress: orderItem.value.address,
      sellPhone: orderItem.value.phone,
      sellAddress: orderItem.value.sellerAddress
    };
    const goodsData = {
      imagePath: orderItem.value.imagePath,
      productName: orderItem.value.productName,
      salePrice: orderItem.value.productTotalAmount,
      shortDescription: orderItem.value.shortDescription
    };
    return {
      meInputHeight,
      onClickLeft,
      orderItem,
      addressData,
      goodsData,
      oderIndex,
      pageIndex
    };
  }
});
</script>

<style lang="scss" scoped>
.order-detail {
  background-color: #f2f2f2;
  .box {
    height: 46px;
  }
  .goods-information {
    background-color: #fff;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
  }
}
</style>
