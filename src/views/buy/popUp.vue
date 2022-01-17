<template>
  <article class="popUp">
    <van-radio-group v-model="checked" direction="horizontal" class="check-map" icon-size="15">
      <van-radio name="0" @click="radioClick">快递</van-radio>
      <van-radio name="1" @click="radioClick">物流</van-radio>
      <van-radio name="2" @click="radioClick">送货上门</van-radio>
    </van-radio-group>
    <van-form @submit="onSubmit">
      <van-cell-group inset v-if="checked == 0 || checked == 1">
        <van-field
          v-model="refundData.name"
          name="name"
          label="快递/物流公司名称"
          placeholder="请输入快递/物流公司名称"
          :rules="[{ required: true, message: '快递/物流公司名称' }]"
          autocomplete="off"
          label-width="8.3em"
        />
        <van-field
          v-model="refundData.number"
          name="number"
          label="快递/物流单号"
          placeholder="请输入快递/物流单号"
          :rules="[{ required: true, message: '请输入快递/物流单号' }]"
          autocomplete="off"
          label-width="8.3em"
        />
        <van-field
          v-model="refundData.refundReason"
          name="refundReason"
          label="退货退款原因"
          placeholder="请输入退货退款原因"
          :rules="[{ required: true, message: '请输入退货退款原因' }]"
          autocomplete="off"
          label-width="8.3em"
        />
      </van-cell-group>
      <van-cell-group inset v-else>
        <van-field
          v-model="refundData.refundReason"
          name="refundReason"
          label="退货退款原因"
          placeholder="请输入退货退款原因"
          :rules="[{ required: true, message: '请输入退货退款原因' }]"
          autocomplete="off"
          label-width="8.3em"
        />
      </van-cell-group>
      <div class="notice">
        <span>退货退款之前请先与卖家沟通,以免造成钱货两失,卖家联系方式:{{ phone }}</span>
        <span class="notice-one">注:二手商品退货退款运费不退</span>
      </div>
      <div class="button">
        <div class="btn">
          <van-button round block type="primary" native-type="submit"> 申请退款退货 </van-button>
        </div>
        <div class="btn">
          <van-button round block @click="cancel"> 取消 </van-button>
        </div>
      </div>
    </van-form>
  </article>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  emits: ['submitRefund', 'cancel'],
  props: {
    phone: {
      type: String,
      default: ''
    }
  },
  setup(_, { emit }) {
    const refundData = reactive({
      name: '',
      number: '',
      refundReason: ''
    });
    const checked = ref('0');
    const onSubmit = (values: any) => {
      emit('submitRefund', [values, checked.value]);
    };
    const cancel = () => {
      emit('cancel');
    };
    const radioClick = () => {
      refundData.name = '';
      refundData.number = '';
      refundData.refundReason = '';
    };
    return {
      onSubmit,
      refundData,
      cancel,
      checked,
      radioClick
    };
  }
});
</script>

<style scoped lang="scss">
.popUp {
  padding: 20px 0;
  .check-map {
    padding: 0px 0 10px 29px;
    font-size: 14px;
  }
  .notice {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    padding-left: 30px;
    .notice-one {
      margin-top: 7px;
      color: #ee2324;
      font-size: 11px;
    }
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
