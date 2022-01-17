<template>
  <van-tabbar route z-index="0">
    <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="description" to="/classify">分类</van-tabbar-item>
    <van-tabbar-item></van-tabbar-item>
    <van-tabbar-item icon="chat-o" to="/message" :badge="isShow()">消息</van-tabbar-item>
    <van-tabbar-item icon="contact" to="/me">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { Tabbar, TabbarItem } from 'vant';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';
export default defineComponent({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    const store = useStore();
    const userData = computed(() => {
      return store.state.me.userData;
    });
    const isShow = () => {
      if (userData.value.messageCount > 99) {
        return '99+';
      } else if (userData.value.messageCount > 0 && userData.value.messageCount < 99)
        return userData.value.messageCount;
      else {
        return '';
      }
    };
    return {
      userData,
      isShow
    };
  }
});
</script>

<style></style>
