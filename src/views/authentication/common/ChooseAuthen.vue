<template>
  <header class="choose-authen">
    <div class="choose-radio">
      <h5>选择类型</h5>
      <radio-group v-model="checked" direction="horizontal" icon-size="13px" @change="radioChange">
        <radio name="0">个人认证</radio>
        <radio name="1">公司认证</radio>
      </radio-group>
    </div>
  </header>
</template>

<script>
import { RadioGroup, Radio } from 'vant';
import { ref } from 'vue';
export default {
  components: {
    RadioGroup,
    Radio
  },
  emits: ['changeRadio'],
  setup(_, { emit }) {
    const checked = ref('0');
    const radioChange = () => {
      emit('changeRadio', checked.value);
    };
    return {
      checked,
      radioChange
    };
  }
};
</script>

<style lang="scss" scoped>
.choose-authen {
  width: 95%;
  margin: 0 auto;
  margin-top: 30px;
  .choose-radio {
    font-size: 13px;
    h5 {
      font-size: 15px;
      margin: 10px 0;
    }
  }
}
</style>
