<template>
  <header class="detail-header">
    <div class="user-left">
      <div class="user-img" v-if="header.photo">
        <img :src="header.photo" @load="imgLoad" />
      </div>
      <div class="user-name">
        <h3>{{ header.userName }}</h3>
        <span>{{ address }}</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import emitter from '@/bus';
export default defineComponent({
  props: {
    header: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(prop) {
    const imgLoad = () => {
      emitter.emit('imgLoad');
    };
    const address = computed(() => {
      const ads = prop.header.address.split('/');
      return ads[0] + ads[1];
    });
    return {
      imgLoad,
      address
    };
  }
});
</script>

<style lang="scss" scoped>
.detail-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #f2f2f2;
  .user-left {
    display: flex;
    align-items: center;
    margin-left: 10px;
    .user-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .user-name {
      margin-left: 10px;
      h3 {
        font-size: 13px;
        margin: 0;
        margin-bottom: 5px;
      }
      span {
        font-size: 11px;
        color: #666;
      }
    }
  }
}
</style>
