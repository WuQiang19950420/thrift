<template>
  <address class="order-address">
    <p class="order-address-middle">{{ singleAddress[0] }}</p>
    <p class="order-address">{{ singleAddress[1] }}</p>
    <p class="order-phone-name">{{ address.name }} {{ address.phone }}</p>
    <div class="set-address">
      <slot name="setAddress"></slot>
    </div>
    <slot name="addressTitle"> </slot>
  </address>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import type { IAddressItem } from '@/store/address/type';
export default defineComponent({
  props: {
    address: {
      type: Object as PropType<IAddressItem>,
      defult: () => {
        return {};
      }
    }
  },
  setup(prop) {
    const singleAddress = computed(() => {
      return prop.address?.address.split(' ');
    });
    return {
      singleAddress
    };
  }
});
</script>

<style lang="scss" scoped>
.order-address {
  font-style: normal;
  background-color: #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-top: 10px;
  position: relative;
  .set-address {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 23px;
    height: 23px;
  }
  // .order-address-tag {
  //   height: 30px;
  //   line-height: 30px;
  //   padding: 0 10px;
  //   margin: 0;
  //   .order-address-default {
  //     color: #ffffff;
  //     border-radius: 5px;
  //     font-size: 13px;
  //     padding: 0 4px;
  //     background-color: red;
  //     margin-right: 5px;
  //   }
  // }
  .order-address-middle {
    padding: 0 10px;
    font-size: 12px;
  }
  .order-address {
    margin-top: 5px;
    padding: 0 10px;
    font-size: 13px;
    font-weight: 700;
  }
  .order-phone-name {
    margin-top: 5px;
    padding: 0 10px;
    font-size: 11px;
  }
}
</style>
