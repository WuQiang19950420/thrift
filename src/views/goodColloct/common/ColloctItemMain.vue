<template>
  <article class="colloct-item-main">
    <p>{{ colloct.shortDescription }}</p>
    <div class="colloct-img" ref="imgScrollRef">
      <div class="colloct-content">
        <img :src="item" @load="imgLoad" v-for="item in image" :key="item" />
      </div>
    </div>
    <div class="item-btn">
      <span class="price">¥{{ colloct.salePrice }}</span>
      <button @click.stop="cancelColloct">取消收藏</button>
    </div>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
import BScroll from '@better-scroll/core';
import emitter from '@/bus';
import { saveCancelCollection } from '@/service/collect/collect';
import { Toast } from 'vant';
import { useStore } from '@/store';
export default defineComponent({
  props: {
    colloct: {
      type: Object,
      default: () => {
        return {};
      }
    },
    colloctItemIndex: {
      type: Number,
      required: true
    }
  },
  setup(prop) {
    const store = useStore();
    const imgScrollRef = ref<HTMLElement>();
    const imgLoad = () => {
      emitter.emit('imgLoad');
    };
    let bs = reactive({});
    onMounted(() => {
      bs = new BScroll(imgScrollRef.value as HTMLElement, {
        scrollX: true,
        probeType: 3
      });
    });
    const cancelColloct = async () => {
      const requestData = `type=0&productId=${prop.colloct.productId}`;
      const res = await saveCancelCollection(requestData);
      if (res.code === 1) {
        store.commit('collect/deleteCollectItem', prop.colloctItemIndex);
        Toast(res.msg);
      } else {
        Toast(res.msg);
      }
    };
    const image = computed(() => {
      return prop.colloct.imagePath.split('|');
    });
    return {
      imgLoad,
      image,
      imgScrollRef,
      bs,
      cancelColloct
    };
  }
});
</script>

<style lang="scss" scoped>
.colloct-item-main {
  p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
  }

  .colloct-img {
    margin-top: 10px;
    white-space: nowrap;
    .colloct-content {
      display: inline-block;
      img {
        display: inline-block;
        margin-left: 10px;
        max-width: 130px;
        max-height: 130px;
        border-radius: 10px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
  .item-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 5px;
    .price {
      font-size: 16px;
      color: red;
    }
    button {
      width: 70px;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      padding: 0;
      border-radius: 20px;
      border: 1px solid #efefef;
      margin-left: 20px;
      background-color: #fff;
    }
  }
}
</style>
