<template>
  <main class="me-input">
    <scroll-pages
      title="我发布的"
      storeListName="order/getInputDataList"
      storeName="order/getInputData"
      :isEnd="isEnd"
      requestMode="get"
      @setIsEnd="setIsEnd"
    >
      <template v-if="meInputData.length !== 0">
        <me-input-item
          v-for="(item, index) in meInputData"
          :key="item.id"
          :meInput="item"
          @write="write(index, item.id)"
          @moreBtn="moreBtn(index, item.id)"
        />
      </template>
      <template v-else>
        <empty text="暂无商品" />
      </template>
    </scroll-pages>
    <van-popup :show="shows" :round="true" position="bottom" @click-overlay="shows = false">
      <more-btn-show @closeAllBtn="closeAllBtn" :idList="idList" />
    </van-popup>
  </main>
</template>

<script lang="ts">
import scrollPages from '../common/scrollPages/scrollPages.vue';
import MeInputItem from './common/MeInputItem.vue';
import MoreBtnShow from './common/MoreBtnShow.vue';
import empty from '../common/empty/empty.vue';

import { computed, defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'meInput',
  components: {
    scrollPages,
    MeInputItem,
    MoreBtnShow,
    empty
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const idList = ref([]); //发布商品的id和index
    const meInputData = computed(() => {
      return store.state.order.AllBuySellData;
    });
    const isEnd = computed(() => {
      return store.state.order.isEnd;
    });
    const setIsEnd = () => {
      store.commit('order/changeIsEnd', false);
    };
    //显示更多按钮
    const shows = ref(false);
    const moreBtn = (...idLists: any) => {
      idList.value = idLists;
      shows.value = true;
    };
    const closeAllBtn = () => {
      shows.value = false;
    };
    //重新编辑商品
    const write = (...idLists: any) => {
      router.push({
        path: '/PublishGoods',
        query: {
          isWrite: 1,
          index: idLists[0],
          goodsId: idLists[1]
        }
      });
    };
    return {
      meInputData,
      isEnd,
      setIsEnd,
      moreBtn,
      write,
      shows,
      closeAllBtn,
      idList
    };
  }
});
</script>

<style scoped lang="scss">
.me-input {
  background-color: #fafafa;
}
</style>
