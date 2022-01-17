<template>
  <article class="cash-input">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="name"
          name="name"
          label="姓名"
          placeholder="填写真实姓名"
          autocomplete="off"
          :rules="[{ required: true, message: '请填写您的真实姓名' }]"
        />
        <van-field
          v-model="cashPrice"
          name="price"
          label="金额"
          type="number"
          placeholder="填写金额"
          autocomplete="off"
          :rules="[{ pattern, message: '最多2位小数,首位不能为0' }]"
        />
      </van-cell-group>
      <div class="button">
        <van-button round block type="primary" native-type="submit" size="normal" color="#2e9aff"> 提现 </van-button>
      </div>
    </van-form>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { cash } from '@/service/order/order';
import { Toast } from 'vant';
import { useStore } from '@/store';
export default defineComponent({
  setup() {
    const name = ref('');
    const cashPrice = ref('');
    const pattern = /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/;
    const onSubmit = async (values: any) => {
      if (price.value > 0) {
        if (price.value < values.cashPrice) {
          Toast('填写的金额大于账户余额');
        } else {
          const requestData = `name=${values.name}&amt=${values.price}`;
          const res = await cash(requestData);
          if (res.code === 1) {
            Toast('提现成功');
            store.commit('me/changeUserDataAmt', values.price);
          } else {
            Toast('提现失败');
          }
        }
      } else {
        Toast('余额不足');
      }
    };
    const store = useStore();
    const price = computed(() => {
      const price = store.state.me.userData.amt;
      return price;
    });
    return {
      name,
      cashPrice,
      onSubmit,
      pattern,
      price
    };
  }
});
</script>

<style scoped lang="scss">
.cash-input {
  margin-top: 50px;
  .button {
    margin-top: 20px;
    width: 70%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>
