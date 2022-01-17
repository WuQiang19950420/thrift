<template>
  <main class="authen">
    <van-nav-bar left-arrow @click-left="onClickLeft" :fixed="true" title="实名认证" :placeholder="true" />
    <choose-step :oneStep="oneStep" :twoStep="twoStep" :threeStep="threeStep" />
    <choose-authen @changeRadio="changeRadio" v-if="isShow" />
    <component :is="component" :isFlag="isShow"></component>
    <next-btn @click="nextBtnClick">{{ btnText }}</next-btn>
  </main>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import ChooseAuthen from './common/ChooseAuthen.vue';
import ChooseStep from './common/ChooseStep.vue';
import Company from './Company.vue';
import Individual from './Individual.vue';
import WriteComplete from './WriteComplete.vue';
import NextBtn from './common/NextBtn.vue';

export default {
  components: {
    ChooseAuthen,
    ChooseStep,
    Company,
    Individual,
    WriteComplete,
    NextBtn
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const onClickLeft = () => {
      router.push('/home');
      store.commit('setPublishdData');
    };
    //修改step
    const oneStep = ref(2);
    const twoStep = ref(0);
    const threeStep = ref(0);
    const isShow = ref(true);
    const btnText = ref('下一步');
    let isClick = 0;
    const nextBtnClick = () => {
      if (isClick === 0) {
        isShow.value = false;
        oneStep.value = 1;
        twoStep.value = 2;
        isClick = 1;
        btnText.value = '完成';
      } else if (isClick === 1) {
        twoStep.value = 1;
        threeStep.value = 2;
        component.value = 'WriteComplete';
        btnText.value = '回首页';
        isClick = 2;
      } else {
        console.log('回首页');
      }
    };
    //选择公司或者个人认证
    const component = ref('Individual');
    const changeRadio = (checked) => {
      if (checked == 0) {
        component.value = 'Individual';
      } else {
        component.value = 'Company';
      }
    };
    return {
      onClickLeft,
      component,
      changeRadio,
      isShow,
      nextBtnClick,
      oneStep,
      twoStep,
      threeStep,
      btnText
    };
  }
};
</script>

<style lang="scss" scoped>
.authen {
}
</style>
