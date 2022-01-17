<template>
  <article class="tab-bar-mid">
    <van-icon class="mid-icon" :class="{ 'mid-icon-active': clickActive }" name="plus" size="30" />
  </article>
</template>

<script>
import { computed } from 'vue';
import { useStore } from '@/store';
export default {
  setup() {
    const store = useStore();
    const clickActive = computed(() => {
      return store.state.publishShow;
    });
    return {
      clickActive
    };
  }
};
</script>

<style lang="scss">
.tab-bar-mid {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #0099ff;
  color: #fff;
  text-align: center;
  line-height: 50px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  .mid-icon {
    margin-top: 50%;
    transform: translateY(-50%) rotate(0deg);
    transition: all 0.5s;
  }
  .mid-icon-active {
    transform: translateY(-50%) rotate(45deg);
  }
}
</style>
