<template>
  <section class="msg-item">
    <div class="msg-item-left">
      <div class="msg-img">
        <img :src="message.photo" />
        <div class="no-msg" v-if="message.count !== 0">{{ message.count }}</div>
      </div>

      <div class="text">
        <h5>{{ message.username }}</h5>
        <!-- <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <slot name="time"></slot> -->
      </div>
    </div>
    <!-- <div class="msg-item-right">
      <slot name="img"></slot>
    </div> -->
  </section>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.msg-item {
  display: flex;
  justify-content: space-between;
  padding: 0 10px 10px 10px;
  margin-top: 10px;
  border-bottom: 1px solid #f3f3f3;
  .msg-item-left {
    display: flex;
    align-items: center;
    font-size: 14px;
    width: calc(100vw - 60px);
    .msg-img {
      position: relative;
      .no-msg {
        width: 15px;
        height: 15px;
        background-color: red;
        color: white;
        border-radius: 50%;
        font-size: 11px;
        text-align: center;
        line-height: 15px;
        position: absolute;
        top: -3px;
        right: -5px;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }

    .text {
      margin-left: 15px;
      h5 {
        margin: 0;
        font-size: 14px;
        font-weight: 400;
      }
      p {
        margin: 2px 0;
        color: #b5b5b5;
        width: 200px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  // .msg-item-right {
  //   width: 60px;
  //   height: 60px;
  // }
}
</style>
