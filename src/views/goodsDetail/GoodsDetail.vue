<template>
  <main class="goods-detail">
    <van-nav-bar left-arrow @click-left="onClickLeft" :border="false" :fixed="true" title="商品详情" />
    <template v-if="isLoading">
      <van-loading class="loading" color="#CBCFD3" size="50">加载中...</van-loading>
    </template>
    <template v-else>
      <scroll :style="{ height: pageHeight + 'px' }">
        <div class="box" />
        <detail-header :header="header" />
        <detail-content :shopDetail="shopDetail" />
        <detail-user :user="user" />
      </scroll>
    </template>
    <buy-tab-bar>
      <template #circle>
        <div class="i-btn">
          <div class="collect" @click="collect">
            <van-icon name="star-o" size="20" />
            <span class="collect-text">收藏</span>
          </div>
          <div class="collect" @click="msg">
            <van-icon name="comment-o" size="20" />
            <span class="collect-text">聊一聊</span>
          </div>
        </div>
      </template>
      <button class="pay" @click="buy">购买</button>
    </buy-tab-bar>
  </main>
</template>

<script lang="ts">
import DetailHeader from './common/DetailHeader.vue';
import DetailContent from './common/DetailContent.vue';
import DetailUser from './common/DetailUser.vue';
import BuyTabBar from '@/views/common/tabBar/BuyTabBar.vue';
import Scroll from '@/views/common/scroll/Scroll.vue';

import { Toast } from 'vant';
import { getIneerHeight } from '@/views/hooks';
import { useRouter, useRoute } from 'vue-router';
import { computed, defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import { saveCancelCollection } from '@/service/collect/collect';
import emitter from '@/bus';
import { Dialog } from 'vant';
export default defineComponent({
  components: {
    DetailHeader,
    DetailContent,
    DetailUser,
    BuyTabBar,
    Scroll
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const goodsId = ref('');
    const pageHeight = getIneerHeight();
    if (route.query.goodsId) {
      goodsId.value = route.query.goodsId as string;
    }
    const store = useStore();
    const data = {
      id: goodsId.value,
      url: encodeURIComponent(window.location.href)
    };
    store.dispatch('shopDetail/getShopDetail', data);
    store.dispatch('address/getAddressItem');
    const shopDetail = computed(() => {
      return store.state.shopDetail.shopDetail;
    });
    const onClickLeft = () => {
      router.back();
      emitter.emit('goOldY');
    };
    const isLoading = computed(() => {
      return store.state.shopDetail.isLoading;
    });
    const buy = () => {
      store.commit('shopDetail/changeGoodsId', goodsId.value);
      //弹窗提示
      Dialog.confirm({
        message: `购买前请先跟卖家沟通商品细节,卖家联系方式:${shopDetail.value.phone}`,
        confirmButtonText: '已沟通'
      }).then(() => {
        router.push({
          path: '/writeOrder',
          query: {
            goodsId: shopDetail.value.id
          }
        });
      });
    };
    //获取地址
    const header = computed(() => {
      return {
        photo: shopDetail.value.photo,
        userName: shopDetail.value.userName,
        address: shopDetail.value.address
      };
    });
    const user = computed(() => {
      return {
        photo: shopDetail.value.photo,
        userName: shopDetail.value.userName,
        day: shopDetail.value.day,
        count: shopDetail.value.count,
        sellerCounts: shopDetail.value.sellerCount
      };
    });
    //聊天
    const msg = () => {
      router.push({
        path: '/chitchat',
        query: {
          uid: shopDetail.value.userId,
          userName: shopDetail.value.userName
        }
      });
    };
    //收藏商品
    const collect = async () => {
      const requestData = `type=1&productId=${shopDetail.value.id}`;
      const res = await saveCancelCollection(requestData);
      res.code === 1 ? Toast(res.msg) : Toast(res.msg);
    };
    return {
      onClickLeft,
      buy,
      pageHeight,
      shopDetail,
      header,
      user,
      collect,
      isLoading,
      msg
    };
  }
});
</script>

<style scoped lang="scss">
.goods-detail {
  .loading {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box {
    height: 46px;
  }
  .pay {
    width: 80px;
    height: 30px;
    border: none;
    background-color: red;
    color: #fff;
    border-radius: 25px;
    font-size: 14px;
  }
  .i-btn {
    display: flex;
    .collect {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;
      .collect-text {
        margin-top: 5px;
        font-size: 12px;
      }
    }
  }
}
</style>
