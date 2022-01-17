<template>
  <main class="captial">
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      :border="false"
      :fixed="true"
      title="我的资产"
      :placeholder="true"
    />
    <cash-main></cash-main>
    <cash-input></cash-input>
  </main>
</template>

<script lang="ts">
import cashMain from './common/cash-main.vue';
import cashInput from './common/cash-input.vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: {
    cashMain,
    cashInput
  },
  setup() {
    const router = useRouter();
    const onClickLeft = () => {
      router.back();
    };
    return {
      onClickLeft
    };
  }
});
</script>

<style lang="scss" scoped>
.captial {
}
</style>
