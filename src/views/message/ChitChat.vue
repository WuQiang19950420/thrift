<template>
  <main class="chit-chat" :style="{ height: height + 'px' }">
    <van-nav-bar left-arrow @click-left="onClickLeft" :title="userName" :border="false" ref="navBarRef" />
    <!-- <chit-chat-goods /> -->
    <!-- <div class="box" ref="box"></div> -->
    <van-loading class="loading" color="#CBCFD3" size="20" v-if="isLoading" />
    <scroll
      :style="{ height: clientHeight + 'px' }"
      ref="scrollRef"
      @pullingDown="pullingDown"
      :isPullDown="true"
      :isPullDowns="false"
    >
      <send-item
        v-for="(item, index) in msgCompoent"
        :key="index"
        :message="item"
        ref="sendRigt"
        :hisPhoto="hisPhoto"
        :position="item.id ? true : false"
      ></send-item>
      <div class="box" />
    </scroll>
    <chit-chat-fixed @sendMessage="sendMessage" ref="chitChatFix" />
  </main>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, nextTick, defineComponent, computed, onUnmounted, watch } from 'vue';
import { useStore } from '@/store';
import { sendMsg } from '@/service/message/message';

import ChitChatFixed from './common/ChitChatFixed.vue';
// import ChitChatGoods from './common/ChitChatGoods.vue';
import SendItem from './common/SendItem.vue';
import Scroll from '../common/scroll/Scroll.vue';
import { Toast } from 'vant';
export default {
  components: {
    ChitChatFixed,
    SendItem,
    Scroll
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const uid = ref();
    const index = ref();
    const userName = ref();
    const hisPhoto = ref();
    const isLoading = computed(() => {
      return store.state.message.isLoading;
    });
    if (route.query.uid) {
      uid.value = route.query.uid;
    }
    if (route.query.userName) {
      userName.value = route.query.userName;
      hisPhoto.value = route.query.hisPhoto;
    }
    if (route.query.hisPhoto) {
      hisPhoto.value = route.query.hisPhoto;
    }
    if (route.query.index) {
      index.value = route.query.index;
    }
    const message = computed(() => {
      return store.state.message.messageItem;
    });
    const onClickLeft = () => {
      router.back();
    };
    const currentPage = ref(1);
    //聊天内容，并滚动到最底部
    const requestDatas = `index=1&token=${window.localStorage.getItem('token')}&uuid=${
      uid.value || message.value[index.value].id
    }`;
    const requestData = computed(() => {
      return `index=${currentPage.value}&token=${window.localStorage.getItem('token')}&uuid=${
        uid.value || message.value[index.value].id
      }`;
    });
    store.dispatch('message/getAllMessage', requestData.value).then(() => {
      const el = scrollRef.value.$el.children[0].children;
      setTimeout(() => {
        scrollRef.value.scrollToElement(el[el.length - 1], 0);
      }, 100);
    });
    //上拉查询旧消息
    const isEnd = computed(() => {
      return store.state.message.isEnd;
    });
    const pullingDown = () => {
      if (isEnd.value) {
        Toast('没有更多聊天记录了');
      } else {
        currentPage.value++;
        store.dispatch('message/getAllMessageList', requestData.value);
      }
    };
    //聊天轮询;
    const setTime = setInterval(() => {
      store.dispatch('message/getNextMessage', requestDatas);
    }, 5000);
    onUnmounted(() => {
      clearInterval(setTime);
    });
    const chitChatFix = ref(null);
    const scrollRef = ref(null);
    const height = ref(window.innerHeight);
    const box = ref(null);
    const navBarRef = ref(null);
    const clientHeight = ref('');
    onMounted(() => {
      clientHeight.value = window.innerHeight - chitChatFix.value.$el.clientHeight - navBarRef.value.$el.clientHeight;
    });
    //发送消息
    const msgReact = computed(() => {
      return store.state.message.allMessage;
    });
    const nextMessage = computed(() => {
      return store.state.message.nextMessage;
    });
    //组件内部的变量
    const msgCompoent = computed(() => {
      return store.state.message.allMessageCopy;
    });
    //监听聊天数据 更新滚动高度
    watch(
      () => msgCompoent.value,
      () => {
        const el = scrollRef.value.$el.children[0].children;
        nextTick(() => {
          scrollRef.value.scroll[0].refresh();
          setTimeout(() => {
            scrollRef.value.scrollToElement(el[el.length - 1], 0);
          }, 100);
        });
      }
    );
    const sendRigt = ref(null);
    const sendMessage = async (sendText) => {
      store.commit('message/changeAllMessageCopy', { content: sendText });
      nextTick(() => {
        scrollRef.value.scroll[0].refresh();
      });
      const y = clientHeight.value - scrollRef.value.scroll[0].scrollerHeight * 2; //计算出滚动的距离
      scrollRef.value.goXy(0, y);
      const requestData = `token=${localStorage.getItem('token')}&uuid=${
        uid.value || message.value[index.value].id
      }&msg=${sendText}&type=1`;
      const res = await sendMsg(requestData);
      if (res.code !== 1) {
        Toast('发送失败');
      } else {
        sendRigt.value.isShow = false;
      }
    };
    return {
      onClickLeft,
      sendMessage,
      msgReact,
      sendRigt,
      chitChatFix,
      clientHeight,
      scrollRef,
      box,
      navBarRef,
      uid,
      userName,
      index,
      message,
      isLoading,
      height,
      msgCompoent,
      nextMessage,
      pullingDown,
      isEnd,
      currentPage,
      requestDatas,
      requestData,
      hisPhoto
    };
  }
};
</script>

<style scoped lang="scss">
.chit-chat {
  padding: 0 10px;
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
  }
}
</style>
