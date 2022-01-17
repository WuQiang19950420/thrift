<template>
  <footer ref="tabBar">
    <tab-bar />
    <router-link to="/publish" custom>
      <tab-bar-mid-btn @click="goPublish"></tab-bar-mid-btn>
    </router-link>
  </footer>
</template>

<script>
import TabBar from './common/TabBar.vue';
import TabBarMidBtn from './common/TabBarMidBtn.vue';

import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, onMounted, computed } from 'vue';
export default {
  components: {
    TabBar,
    TabBarMidBtn
  },
  setup() {
    const tabBar = ref(null);
    const router = useRouter();
    const store = useStore();
    onMounted(() => {
      store.commit('getTabBarHeight', tabBar.value.clientHeight);
    });
    const publishShow = computed(() => {
      return store.state.publishShow;
    });
    const goPublish = () => {
      if (publishShow.value) {
        router.back();
      } else {
        store.commit('setPublishdData', true);
        router.push('/publish');
      }
    };
    return {
      goPublish,
      tabBar
    };
  }
};
</script>

<style scoped>
footer {
  height: 50px;
}
</style>
