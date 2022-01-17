<template>
  <div class="home-introduct">
    <home-scroll-pages
      storeName="shopItem/getShopItemData"
      storeListName="shopItem/getShopItemList"
      :isEnd="isEnd"
      requestName="homeIntroduct"
      :tabBarHeight="homeTabBar"
      :navBarheight="homeTopBar"
      @setIsLoding="setIsLoding"
      :isPullDown="true"
    >
      <template v-if="isLoading && pullDownLoadings">
        <van-loading class="loading" color="#CBCFD3" size="50">加载中...</van-loading>
      </template>
      <template v-else>
        <swipper :homeBannerData="swipper" />
        <floor :categoryData="floor" />
        <goods :homeListData="goods" />
      </template>
    </home-scroll-pages>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onActivated, ref, watch } from 'vue';
import { useStore } from '@/store';
import Swipper from './common/Swipper.vue';
import Floor from './common/Floor.vue';
import Goods from '../common/goods/Goods.vue';
import homeScrollPages from '../common/homeScrollPages/homeScrollPages.vue';
import emitter from '@/bus';
import { wxConfig } from '@/weixin/WeiXin';
import { useRoute } from 'vue-router';
export default defineComponent({
  components: {
    homeScrollPages,
    Floor,
    Swipper,
    Goods
  },
  name: 'HomeIntroduct',
  setup() {
    const store = useStore();
    const route = useRoute();
    if (route.query.token) {
      window.localStorage.setItem('token', route.query.token as string);
      store.dispatch('classify/getClassifyItem'); //请求分类
      store.dispatch('classify/getBrandItem'); //请求品牌
    }
    const pullDownLoadings = ref(true);
    //配置weixin api
    const signMap = computed(() => {
      return store.state.shopItem.signMap;
    });
    watch(
      () => signMap.value,
      () => {
        wxConfig(signMap.value);
      }
    );
    onActivated(() => {
      emitter.emit('imgLoad');
      //用户信息
      store.dispatch('me/getUserDatas');
    });
    const setIsLoding = () => {
      pullDownLoadings.value = false;
    };
    const homeTopBar = computed(() => {
      return store.state.homeTopBar;
    });
    const homeTabBar = computed(() => {
      return store.state.tabBarHeight;
    });
    const isEnd = computed(() => {
      return store.state.shopItem.introductListisEnd;
    });
    const floor = computed(() => {
      return store.state.shopItem.category;
    });
    const swipper = computed(() => {
      return store.state.shopItem.homeBanner;
    });
    const goods = computed(() => {
      return store.state.shopItem.homeIntroductList;
    });
    const isLoading = computed(() => {
      return store.state.shopItem.isLoading;
    });
    return {
      isEnd,
      floor,
      swipper,
      goods,
      homeTopBar,
      homeTabBar,
      isLoading,
      setIsLoding,
      pullDownLoadings
    };
  }
});
</script>

<style scoped lang="scss">
.home-introduct {
  .goods-title {
    margin: 0 0 20px 10px;
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
}
</style>
