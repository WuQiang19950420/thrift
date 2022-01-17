<template>
  <article class="message-top">
    <message-item class="message-item" :imgList="require('assets/image/message/message.png')"></message-item>
    <message-item class="message-item" :imgList="require('assets/image/message/notice.png')"></message-item>
  </article>
</template>

<script>
import MessageItem from './MessageItem.vue';

export default {
  components: {
    MessageItem
  },
  setup() {
    1;
  }
};
</script>

<style lang="scss" scoped>
.message-top {
  &::after {
    content: '';
    width: 100%;
    height: 5px;
    background-color: #f2f2f2;
    display: block;
  }
  .message-item {
    margin-top: 10px;
  }
}
</style>
