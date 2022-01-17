<template>
  <scroll-pages
    title="我的收藏"
    storeListName="collect/getCollectItemList"
    storeName="collect/getCollectItemData"
    :isEnd="isEnd"
  >
    <template v-if="isLoading">
      <van-loading class="loading" color="#CBCFD3" size="50">加载中...</van-loading>
    </template>
    <template v-else>
      <template v-if="colloctItem.length !== 0">
        <good-colloct-item
          v-for="(item, index) in colloctItem"
          :key="item.productId"
          :colloctItem="item"
          :colloctItemIndex="index"
          @click="goShopDetail(item.productId)"
        />
      </template>
      <template v-else>
        <empty text="暂无收藏" />
      </template>
    </template>
  </scroll-pages>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import scrollPages from '../common/scrollPages/scrollPages.vue';
import GoodColloctItem from './common/GoodColloctItem.vue';
import empty from '../common/empty/empty.vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: {
    scrollPages,
    GoodColloctItem,
    empty
  },
  name: 'goodColloct',
  setup() {
    const store = useStore();
    const router = useRouter();
    const isLoading = computed(() => {
      return store.state.collect.isLoading;
    });
    const isEnd = computed(() => {
      return store.state.collect.isEnd;
    });
    const colloctItem = computed(() => {
      return store.state.collect.collectItem;
    });
    //点击进入商品详情页
    function goShopDetail(value: number) {
      router.push({
        path: './goodsDetail',
        query: {
          goodsId: value
        }
      });
    }
    return {
      isEnd,
      colloctItem,
      goShopDetail,
      isLoading
    };
  }
});
</script>

<style scoped lang="scss">
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
