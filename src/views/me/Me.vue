<template>
  <main :style="{ height: pageHeight + 'px' }">
    <me-header />
    <me-order />
    <me-icon />
  </main>
</template>

<script lang="ts">
import MeHeader from './common/MeHeader.vue';
import MeOrder from './common/MeOrder.vue';
import MeIcon from './common/MeIcon.vue';

import { defineComponent, ref } from 'vue';
import { useStore } from '@/store';
export default defineComponent({
  components: {
    MeHeader,
    MeOrder,
    MeIcon
  },
  setup() {
    const pageHeight = ref(window.innerHeight);
    const store = useStore();
    store.dispatch('me/getUserDatas');
    return {
      pageHeight
    };
  }
});
</script>

<style></style>
