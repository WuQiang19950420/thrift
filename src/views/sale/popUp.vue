<template>
  <article class="popUp">
    <h3 class="deliver-name">发货类型:{{ delivery }}</h3>
    <van-form @submit="onSubmit">
      <van-cell-group inset v-if="order.deliveryType === 0 || order.deliveryType === 1">
        <van-field
          v-model="refundData.name"
          name="name"
          label="快递公司名称"
          placeholder="请输入快递公司名称"
          :rules="[{ required: true, message: '快递公司名称' }]"
          autocomplete="off"
        />
        <van-field
          v-model="refundData.number"
          name="number"
          label="快递单号"
          placeholder="请输入快递单号"
          :rules="[{ required: true, message: '请输入快递单号' }]"
          autocomplete="off"
        />
      </van-cell-group>
      <div class="button">
        <div class="btn">
          <van-button round block type="primary" native-type="submit">发货</van-button>
        </div>
        <div class="btn">
          <van-button round block @click="cancel"> 取消 </van-button>
        </div>
      </div>
    </van-form>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  emits: ['submitRefund', 'cancel'],
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const delivery = computed(() => {
      let delivery = '';
      switch (props.order.deliveryType) {
        case 0:
          delivery = '快递';
          break;
        case 1:
          delivery = '物流';
          break;
        case 2:
          delivery = '自提';
          break;
        case 3:
          delivery = '送货上门';
          break;
      }
      return delivery;
    });
    const refundData = reactive({
      name: '',
      number: ''
    });
    const checked = ref('0');
    const onSubmit = (values: any) => {
      emit('submitRefund', values);
    };
    const cancel = () => {
      emit('cancel');
    };
    return {
      onSubmit,
      refundData,
      cancel,
      checked,
      delivery
    };
  }
});
</script>

<style scoped lang="scss">
.popUp {
  padding: 20px 0;
  .deliver-name {
    font-size: 14px;
    font-weight: 400;
    margin-left: 33px;
  }
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 30px;
    .btn {
      width: 70%;
      height: 30px;
      line-height: 30px;
      &:last-child {
        margin-top: 40px;
      }
    }
  }
}
</style>
