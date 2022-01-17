<template>
  <div class="home-location">
    <home-scroll-pages
      storeName="shopItem/getShopItemData"
      storeListName="shopItem/getShopItemList"
      :isEnd="isEnd"
      requestName="homeLocation"
      :tabBarHeight="homeTabBar"
      :navBarheight="homeTopBar"
      :city="city"
      @setIsLoding="setIsLoding"
      :isPullDown="true"
    >
      <template v-if="isLoading && pullDownLoading">
        <van-loading class="loading" color="#CBCFD3" size="50">加载中...</van-loading>
      </template>
      <template v-else>
        <template v-if="goods.length !== 0">
          <goods :homeListData="goods" />
        </template>
        <template v-else>
          <empty text="暂无商品" :style="{ height: emptyHeight + 'px' }" class="emptys" />
        </template>
      </template>
    </home-scroll-pages>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onActivated } from 'vue';
import { useStore } from '@/store';
import Goods from '../common/goods/Goods.vue';
import homeScrollPages from '../common/homeScrollPages/homeScrollPages.vue';
import empty from '../common//empty/empty.vue';
import emitter from '@/bus';
export default defineComponent({
  components: {
    homeScrollPages,
    Goods,
    empty
  },
  name: 'HomeLocation',
  setup() {
    const store = useStore();
    onActivated(() => {
      emitter.emit('imgLoad');
    });
    const pullDownLoading = ref(true);
    const setIsLoding = () => {
      pullDownLoading.value = false;
    };
    const homeTopBar = computed(() => {
      return store.state.homeTopBar;
    });
    const homeTabBar = computed(() => {
      return store.state.tabBarHeight;
    });
    const isEnd = computed(() => {
      return store.state.shopItem.homeLocationtListisEnd;
    });
    const goods = computed(() => {
      return store.state.shopItem.homeLocationtList;
    });
    const city = computed(() => {
      return store.state.shopItem.locationCity;
    });
    const emptyHeight = ref(window.innerHeight - homeTopBar.value - homeTabBar.value);
    const isLoading = computed(() => {
      return store.state.shopItem.isLoading;
    });
    return {
      isEnd,
      goods,
      city,
      emptyHeight,
      homeTabBar,
      homeTopBar,
      isLoading,
      setIsLoding,
      pullDownLoading
    };
  }
});
</script>

<style scoped lang="scss">
.emptys {
  transform: translateY(20%);
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
</style>
