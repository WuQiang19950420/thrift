<template>
  <article class="wrap" :style="{ height: wrapHeight + 'px' }">
    <div class="left-wrap">
      <classify-wrap-left />
    </div>
    <div class="right-wrap">
      <classify-wrap-right />
    </div>
  </article>
</template>

<script lang="ts">
import ClassifyWrapLeft from './ClassifyWrapLeft.vue';
import ClassifyWrapRight from './ClassifyWrapRight.vue';

import { ref, defineComponent } from 'vue';
import { useStore } from '@/store';
export default defineComponent({
  components: {
    ClassifyWrapLeft,
    ClassifyWrapRight
  },
  setup() {
    const store = useStore();
    if (!store.state.classify.classifyItem) store.dispatch('classify/getClassifyItem');
    const wrapHeight = ref(innerHeight - store.state.tabBarHeight * 2);
    return {
      wrapHeight
    };
  }
});
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  width: 100%;
  .left-wrap {
    width: 100px;
    overflow: auto;
    background-color: #f8f8f8;
  }
  .right-wrap {
    flex: 1;
  }
}
</style>
