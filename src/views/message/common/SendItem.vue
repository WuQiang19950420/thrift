<template>
  <section class="send-item" :class="{ 'send-item-position': !position }">
    <loading type="spinner" size="20" class="loading" v-if="isShow" />
    <template v-if="position">
      <img :src="hisPhoto" @load="imgLoad" v-if="hisPhoto" />
      <div class="four-one-four" v-else></div>
    </template>
    <div :class="{ 'send-text-left': position, 'send-text': !position }">
      <span>{{ message.content }}</span>
    </div>
    <template v-if="!position">
      <img :src="myPhoto" @load="imgLoad" v-if="myPhoto" />
      <div class="four-one-four" v-else></div>
    </template>
  </section>
</template>

<script>
import { Loading } from 'vant';
import { computed, ref } from 'vue';
import { useStore } from '@/store';
import emitter from '@/bus';
export default {
  props: {
    message: {
      type: Object,
      default: () => {
        return {};
      }
    },
    position: {
      type: Boolean,
      default: true
    },
    hisPhoto: {
      type: String,
      default: ''
    }
  },
  components: {
    Loading
  },
  setup() {
    const store = useStore();
    const myPhoto = computed(() => {
      return store.state.message.photos;
    });
    const isShow = ref(false);
    const imgLoad = () => {
      emitter.emit('imgLoad');
    };
    return {
      isShow,
      imgLoad,
      myPhoto
    };
  }
};
</script>

<style scoped lang="scss">
.send-item-position {
  justify-content: flex-end;
}
.send-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  .loading {
    margin-right: 10px;
  }
  .send-text {
    background-color: #5faffb;
    max-width: 270px;
    padding: 10px;
    font-size: 13px;
    border-radius: 5px;
    margin-right: 15px;
    position: relative;
    &::after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -6px;
      border-top: 5px solid transparent;
      border-left: 10px solid #5faffb;
      border-bottom: 5px solid transparent;
    }
  }
  img {
    width: 35px;
    height: 35px;
    border-radius: 5px;
  }
  .send-text-left {
    background-color: #f3f3f3;
    max-width: 270px;
    padding: 10px;
    font-size: 13px;
    border-radius: 5px;
    margin-left: 15px;
    position: relative;
    &::after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -6px;
      border-top: 5px solid transparent;
      border-right: 10px solid #f3f3f3;
      border-bottom: 5px solid transparent;
    }
  }
  .four-one-four {
    width: 35px;
    height: 35px;
    border-radius: 5px;
  }
}
</style>
