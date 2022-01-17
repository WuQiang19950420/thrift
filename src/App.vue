<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="home,buy,sale,goodColloct,Classify,meInput" exclude="search">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <all-tab-bar v-if="$route.meta.showTab" />
</template>

<script>
import AllTabBar from '@/views/common/tabBar/AllTabBar.vue';

export default {
  components: {
    AllTabBar
  },
  setup() {
    document.body.addEventListener(
      'touchmove',
      function (e) {
        e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
      },
      { passive: false }
    ); //passive 参数不能省略，用来兼容ios和android
  }
};
</script>

<style lang="scss">
@import 'assets/css/base.css';
@import 'assets/css/fonts/iconfont.css';
</style>
