<template>
  <main class="message" :style="{ height: height + 'px' }">
    <van-nav-bar title="消息" :border="false" :fixed="true" :placeholder="true" style="'background-color':#f3f3f3 " />
    <!-- <message-top></message-top> -->
    <template v-if="isLoading">
      <van-loading class="loading" color="#CBCFD3" size="50">加载中...</van-loading>
    </template>
    <template v-else>
      <template v-if="message">
        <message-item @click="goChitChat(index)" v-for="(item, index) in message" :key="item.id" :message="item">
          <!-- <template v-slot:time>
            <time class="time">7-25</time>
          </template>
          <template v-slot:img>
            <img class="img" src="~assets/image/home/mouse.png" />
          </template> -->
        </message-item>
      </template>
      <template v-else>
        <empty text="暂无消息" :style="{ height: emptyHeight + 'px' }" class="emptys" />
      </template>
    </template>
  </main>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { computed, defineComponent, ref } from 'vue';
import { useStore } from '@/store';

import MessageItem from './common/MessageItem.vue';
import empty from '../common/empty/empty.vue';
// import MessageTop from './common/MessageTop.vue';
export default defineComponent({
  components: {
    MessageItem,
    empty
    // MessageTop
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const isLoading = computed(() => {
      return store.state.message.isLoading;
    });
    const requestData = `index=1&token=${window.localStorage.getItem('token')}`;
    store.dispatch('message/getMessageItem', requestData);
    const message = computed(() => {
      return store.state.message.messageItem;
    });
    store.dispatch('me/getUserDatas');
    const height = ref(window.innerHeight);
    const goChitChat = (index: number) => {
      store.commit('message/clearAllMessage');
      router.push({
        path: '/chitchat',
        query: {
          index,
          userName: message.value[index].username,
          hisPhoto: message.value[index].photo
        }
      });
    };
    return {
      goChitChat,
      message,
      isLoading,
      height
    };
  }
});
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.time {
  font-size: 10px;
  color: #b5b5b5;
}
.loading {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
