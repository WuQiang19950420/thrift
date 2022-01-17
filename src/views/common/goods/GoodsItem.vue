<template>
  <section class="goods-item">
    <img :src="image[0]" @load="imgLoad" @error="imgError" />
    <article>
      <h4 class="goods-title">{{ goodItem.productName }}</h4>
      <slot></slot>
      <span class="goods-price"><a>¥</a>{{ goodItem.salePrice }}</span>
      <div class="user">
        <img class="user-img" :src="goodItem.photo" />
        <span class="user-name">{{ goodItem.UserName }}</span>
      </div>
      <header class="bottom-msg">
        <!-- <div class="symbol">已缴纳保证金</div> -->
        <div class="browsing-history">{{ goodItem.vistiCounts }}人浏览</div>
        <!-- <div class="advert">广告</div> -->
      </header>
    </article>
  </section>
</template>

<script lang="ts">
import { computed, PropType, defineComponent } from 'vue';
import emitter from '@/bus';
import type { IGoodItem } from './type/type';
export default defineComponent({
  props: {
    goodItem: {
      type: Object as PropType<IGoodItem>,
      default: () => {
        return {};
      }
    }
  },
  setup(props) {
    const image = computed(() => {
      return props.goodItem.imagePath.split('|');
    });
    const imgLoad = () => {
      emitter.emit('imgLoad');
    };
    const imgError = () => {
      emitter.emit('imgLoad');
    };
    return {
      imgLoad,
      image,
      imgError
    };
  }
});
</script>

<style lang="scss" scoped>
.goods-item {
  border-radius: 10px;
  margin: 4px;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    border-radius: 8px;
  }
  article {
    padding: 10px;
    .goods-title {
      margin: 0;
      font-size: 13px;
      font-weight: 400;
      margin-bottom: 3px;
    }
    .goods-price {
      display: block;
      margin: 10px 0 5px 0;
      color: red;
      font-size: 15px;
      a {
        color: red;
      }
    }
    .user {
      font-size: 11px;
      .user-img {
        width: 18px;
        height: 18px;
        border-radius: 50%;
      }
      .user-name {
        display: inline-block;
        height: 18px;
        line-height: 18px;
        margin-left: 5px;
        width: 60px;
        color: #c0c0c0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .bottom-msg {
      display: flex;
      justify-content: flex-end;
      font-size: 11px;
      .symbol {
        width: fit-content;
        margin-left: 3px;
        border: 1px solid #eaf9fe;
        color: #2997c6;
      }
      .advert {
        width: fit-content;
        padding: 1px 2px;
        margin-left: 3px;
        border: 1px solid #ddd;
        color: #ddd;
        border-radius: 3px;
      }
      .browsing-history {
        color: #ddd;
      }
    }
  }
}
</style>
