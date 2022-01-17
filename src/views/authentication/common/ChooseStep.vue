<template>
  <article class="choose-step">
    <choose-step-item
      class="choose-item-after"
      :class="{ 'choose-item-after-active': oneStep === 1 }"
      :name="{
        'one-step-active': oneStep === 1,
        'two-step-active': oneStep === 2
      }"
      :bottom="{
        'one-text-active': oneStep === 1,
        'two-text-active': oneStep === 2
      }"
    >
      <template v-slot:stepImg>
        <i class="iconfont icon-beizhu size"></i>
      </template>
      <template v-slot:stepText>填写实名信息</template>
    </choose-step-item>
    <choose-step-item
      class="choose-item-after"
      :class="{ 'choose-item-after-active': twoStep === 1 }"
      :name="{
        'one-step-active': twoStep === 1,
        'two-step-active': twoStep === 2
      }"
      :bottom="{
        'one-text-active': twoStep === 1,
        'two-text-active': twoStep === 2
      }"
    >
      <template v-slot:stepImg>
        <i class="iconfont icon-shenfenzheng size"></i>
      </template>
      <template v-slot:stepText>证件上传</template>
    </choose-step-item>
    <choose-step-item
      :name="{
        'one-step-active': threeStep === 1,
        'two-step-active': threeStep === 2
      }"
      :bottom="{
        'one-text-active': threeStep === 1,
        'two-text-active': threeStep === 2
      }"
    >
      <template v-slot:stepImg>
        <i class="iconfont icon-quanxianguanli size"></i>
      </template>
      <template v-slot:stepText>完成认证</template>
    </choose-step-item>
  </article>
</template>

<script>
import ChooseStepItem from './ChooseStepItem.vue';
export default {
  components: { ChooseStepItem },
  inheritAttrs: false,
  props: {
    oneStep: {
      type: Number,
      default: 0
    },
    twoStep: {
      type: Number,
      default: 0
    },
    threeStep: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped lang="scss">
.choose-step {
  display: flex;
  justify-content: space-around;
  .choose-item-after {
    position: relative;
    &::after {
      content: '';
      height: 2px;
      width: 50px;
      background-color: #f3f3f3;
      position: absolute;
      right: -20px;
      top: 40%;
    }
  }
  .choose-item-after-active {
    &::after {
      background-color: #2a89fa;
    }
  }
  .size {
    font-size: 28px;
  }
}
</style>
