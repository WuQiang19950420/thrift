<template>
  <div class="search" :style="{ height: innerHeight + 'px' }">
    <template v-if="$route.query.isShowNavBar == 1">
      <van-nav-bar left-arrow @click-left="onClickLeft" :title="$route.query.valueName" :fixed="true" />
      <div class="box" />
    </template>
    <template v-else>
      <search-input ref="searchRef"></search-input>
    </template>
    <home-scroll-pages
      storeName="shopItem/getShopItemData"
      storeListName="shopItem/getShopItemList"
      :isEnd="isEnd"
      :requestName="requestName"
      :condition="condition"
      :category="category"
      :navBarheight="47"
      :isScrollY="isScrollY"
    >
      <template v-if="isLoading">
        <van-loading class="loading" color="#CBCFD3" size="50">加载中...</van-loading>
      </template>
      <template v-else>
        <empty v-if="goods.length === 0" text="暂无商品" :style="{ height: emptyHeight + 'px' }" class="emptys" />
        <goods :homeListData="goods" />
      </template>
    </home-scroll-pages>
  </div>
</template>
<script lang="ts">
import SearchInput from './SearchInput.vue';
import homeScrollPages from '../common/homeScrollPages/homeScrollPages.vue';
import Goods from '../common/goods/Goods.vue';
import empty from '../common/empty/empty.vue';
import { computed, defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from '@/store';
export default defineComponent({
  components: {
    SearchInput,
    homeScrollPages,
    Goods,
    empty
  },
  name: 'search',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const requestName = ref('search');
    store.commit('shopItem/changeShopListisEnd', false);
    if (route.query.isShowNavBar) {
      requestName.value = 'category';
    }
    const category = computed(() => {
      return store.state.shopItem.categoryValue.toString();
    });
    const isEnd = computed(() => {
      return store.state.shopItem.shopListisEnd;
    });
    const goods = computed(() => {
      return store.state.shopItem.shopList;
    });
    const condition = computed(() => {
      return store.state.shopItem.searchValue;
    });
    const isLoading = computed(() => {
      return store.state.shopItem.isLoading;
    });
    //如果请求数据为0 则禁止滚动
    const isScrollY = computed(() => {
      if (goods.value.length === 0) {
        return true;
      } else {
        return false;
      }
    });
    const onClickLeft = () => {
      router.back();
    };
    const innerHeight = ref(window.innerHeight);
    const emptyHeight = ref(window.innerHeight - 47);
    return {
      onClickLeft,
      requestName,
      isEnd,
      goods,
      condition,
      category,
      emptyHeight,
      isLoading,
      innerHeight,
      isScrollY
    };
  }
});
</script>

<style lang="scss" scoped>
.search {
  .box {
    height: 46px;
  }
  .loading {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .emptys {
    transform: translateY(15%);
  }
}
</style>
