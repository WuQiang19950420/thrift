<template>
  <article class="order-detail-address">
    <template v-if="$route.query.pageIndex == 0">
      <h3 class="address-top">买家地址信息</h3>
      <div class="address-left">
        <span class="address-name">{{ addressData.buyName }}</span>
        <span class="address-phone">{{ addressData.buyPhone }}</span>
        <address class="address">{{ addressData.buyAddress }}</address>
      </div>
    </template>
    <template v-else>
      <div class="address-left">
        <span class="address">卖家电话:{{ addressData.sellPhone }}</span>
        <address class="address">卖家地址:{{ sellAddress }}</address>
      </div>
    </template>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
export default defineComponent({
  props: {
    addressData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(prop) {
    const sellAddress = computed(() => {
      const sellAdd = prop.addressData.sellAddress.split('/');
      return `${sellAdd[0]}${sellAdd[1]} ${sellAdd[2]}`;
    });
    return {
      sellAddress
    };
  }
});
</script>

<style lang="scss" scoped>
.order-detail-address {
  position: relative;
  padding: 10px 10px 10px 40px;
  background-color: #fff;
  border-radius: 12px;
  margin-top: -10px;
  .address-top {
    font-size: 13px;
    margin-bottom: 7px;
  }
  .address-left {
    font-size: 13px;
    &:before {
      content: '';
      height: 22px;
      width: 22px;
      background: url(../../../assets/image/order/icon-address.png) no-repeat;
      background-size: 22px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
    }
    .address-phone {
      margin-left: 10px;
    }
    .address {
      font-style: normal;
      margin-top: 5px;
      color: #8e8e8e;
    }
  }
}
</style>
