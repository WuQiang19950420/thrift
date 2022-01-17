<template>
  <article class="price-pop">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="price"
          name="price"
          label="价格"
          placeholder="填写商品现价"
          autocomplete="off"
          type="number"
          :rules="[{ pattern, message: '最多2位小数,首位不能为0' }]"
        />
        <van-field
          v-model="oldPrice"
          name="oldPrice"
          label="原价"
          placeholder="填写商品原价"
          autocomplete="off"
          type="number"
          :rules="[{ pattern, message: '最多2位小数,首位不能为0' }]"
        />
        <van-field
          v-model="mailCharge"
          name="mailCharge"
          label="邮费"
          type="number"
          placeholder="填写邮费"
          autocomplete="off"
          :rules="[{ validator, message: '最多2位小数,首位不能为0' }]"
        >
          <template v-slot:extra>
            <van-checkbox v-model="isMailCharge" :disabled="isDisabled == 1" @change="mailChargeChange"
              >包邮</van-checkbox
            >
          </template></van-field
        >
      </van-cell-group>
      <div class="button">
        <van-button round block type="primary" native-type="submit" size="normal" color="#2e9aff"> 确定 </van-button>
      </div>
    </van-form>
  </article>
</template>

<script lang="ts">
import { ref, watch, defineComponent, watchEffect } from 'vue';
export default defineComponent({
  props: {
    allPrice: {
      type: Object,
      default: () => {
        return {};
      }
    },
    isShowMail: {
      type: Boolean,
      default: false
    }
  },
  emits: ['setPriceData'],
  setup(props, { emit }) {
    const checked = ref(false);
    const isDisabled = ref(0);
    const blinkShow = ref(0);
    const isMailCharge = ref(false);
    const price = ref('');
    const oldPrice = ref('');
    const mailCharge = ref('');
    if (props.allPrice) {
      price.value = props.allPrice.price == 0 ? '' : props.allPrice.price;
      oldPrice.value = props.allPrice.oldPrice == 0 ? '' : props.allPrice.oldPrice;
      mailCharge.value = props.allPrice.mailCharge == 0 ? '' : props.allPrice.mailCharge;
      if (props.allPrice.mailCharge === '包邮') {
        isMailCharge.value = true;
      }
    }
    //判断自提和送货上门包邮
    watchEffect(() => {
      if (props.isShowMail) {
        isMailCharge.value = true;
        isDisabled.value = 1;
      } else {
        isMailCharge.value = false;
        isDisabled.value = 0;
      }
    });
    watch(isMailCharge, (newValue) => {
      if (newValue) {
        mailCharge.value = '包邮';
      } else {
        mailCharge.value = '';
      }
    });
    const mailChargeChange = (checked: boolean) => {
      if (checked) {
        mailCharge.value = '包邮';
      } else {
        mailCharge.value = '';
      }
    };
    const pattern = /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/;
    const validator = (val: any) => {
      if (val === '包邮') {
        return true;
      } else {
        return /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/.test(val);
      }
    };
    const onSubmit = () => {
      const allPrices = {
        price: price.value,
        oldPrice: oldPrice.value,
        mailCharge: mailCharge.value
      };
      emit('setPriceData', allPrices);
    };
    // watch(mailCharge, (newValue) => {
    //   console.log(newValue);
    //   if (newValue !== '包邮') {
    //     isMailCharge.value = false;
    //   } else {
    //     isMailCharge.value = true;
    //   }
    // });
    const mailChargeBlur = (e: any) => {
      if (e.target.value !== '包邮') {
        isMailCharge.value = false;
      }
    };
    return {
      blinkShow,
      price,
      oldPrice,
      mailCharge,
      isMailCharge,
      isDisabled,
      checked,
      mailChargeChange,
      onSubmit,
      mailChargeBlur,
      pattern,
      validator
    };
  }
});
</script>

<style lang="scss" scoped>
.price-pop {
  .button {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 70%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>
