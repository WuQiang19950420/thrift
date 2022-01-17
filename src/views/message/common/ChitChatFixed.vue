<template>
  <footer class="chit-chat-fixed">
    <input type="text" placeholder="聊点什么吧～" v-model="sendText" />
    <div class="send" @click="sendMessage">发送</div>
  </footer>
</template>

<script>
import { ref } from 'vue';
import { Toast } from 'vant';
export default {
  emits: ['sendMessage'],
  setup(_, { emit }) {
    const sendText = ref('');
    const sendMessage = () => {
      if (sendText.value != '') {
        emit('sendMessage', sendText.value);
        sendText.value = '';
      } else {
        Toast('发送内容不能为空');
      }
    };
    return {
      sendText,
      sendMessage
    };
  }
};
</script>

<style scoped lang="scss">
.chit-chat-fixed {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  input {
    background-color: #f3f3f3;
    border: none;
    border-radius: 10px;
    height: 30px;
    width: 70%;
    padding-left: 10px;
    margin-left: 20px;
    font-size: 13px;
    &::placeholder {
      font-size: 12px;
      color: #b5b5b5;
    }
  }
  .send {
    height: 25px;
    font-size: 13px;
    width: 15%;
    background-color: #5faffb;
    color: #fff;
    line-height: 25px;
    text-align: center;
    border-radius: 10px;
    margin-right: 10px;
  }
}
</style>
