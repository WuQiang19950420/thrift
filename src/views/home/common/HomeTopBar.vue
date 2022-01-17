<template>
  <header class="home-top-bar" ref="homeTopBar">
    <home-loction></home-loction>
    <search />
  </header>
  <div class="box"></div>
</template>

<script lang="ts">
import Search from './Search.vue';
import HomeLoction from './HomeLoction.vue';

import { defineComponent, onMounted, ref } from 'vue';
import { useStore } from '@/store';
export default defineComponent({
  components: {
    Search,
    HomeLoction
  },
  setup() {
    const homeTopBar = ref<HTMLElement>();
    const store = useStore();
    onMounted(() => {
      store.commit('setHomeTopBar', homeTopBar.value?.clientHeight);
    });
    return {
      homeTopBar
    };
  }
});
</script>

<style lang="scss" scoped>
.home-top-bar {
  padding: 10px 0;
  width: 100%;
  height: 80px;
  z-index: 4;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
}
.box {
  height: 80px;
}
</style>
