<template>
  <main class="home">
    <home-top-bar />
    <keep-alive>
      <component :is="component" />
    </keep-alive>
  </main>
</template>

<script lang="ts">
import Search from './common/Search.vue';
import HomeTopBar from './common/HomeTopBar.vue';
import HomeIntroduct from './HomeIntroduct.vue';
import HomeLoction from './HomeLocation.vue';

import emitter from '@/bus';

import { ref, defineComponent, onActivated } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/store';

export default defineComponent({
  name: 'home',
  components: {
    Search,
    HomeTopBar,
    HomeIntroduct,
    HomeLoction
  },
  setup() {
    const store = useStore();
    //首页切换页面
    const isPageShow = ref(true);
    const component = ref('HomeIntroduct');
    emitter.on('locationClick', (index: any) => {
      if (index === 1) {
        component.value = 'HomeIntroduct';
      } else {
        component.value = 'HomeLoction';
      }
    });
    onActivated(() => {
      store.commit('setPublishdData', false);
      store.commit('shopItem/changeCategoryValue', '');
    });
    return {
      isPageShow,
      component
    };
  }
});
</script>

<style scoped lang="scss"></style>
