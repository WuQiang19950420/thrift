<template>
  <ul class="wrap-left">
    <li
      class="wrap-left-item"
      v-for="(item, index) in classifyItem"
      :key="index"
      @click="itemClick(index)"
      :class="{ 'wrap-left-item-active': itemIndex === index }"
    >
      <a :class="{ 'wrap-left-font-active': itemIndex === index }">{{ item.categoryName }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import emitter from '@/bus';
export default defineComponent({
  setup() {
    const itemIndex = ref(0);
    const store = useStore();
    const classifyItem = computed(() => {
      return store.state.classify.classifyItem;
    });
    const itemClick = (index: number) => {
      emitter.emit('setTitle', index);
      itemIndex.value = index;
    };
    return {
      itemClick,
      itemIndex,
      classifyItem
    };
  }
});
</script>

<style scoped lang="scss">
.wrap-left {
  width: 100%;
  .wrap-left-item {
    height: 47px;
    width: 100%;
    text-align: center;
    line-height: 47px;
    a {
      width: 100%;
      height: 47px;
      font-size: 13px;
    }
  }
  .wrap-left-item-active {
    background-color: #fff;
    .wrap-left-font-active {
      color: red;
    }
  }
}
</style>
