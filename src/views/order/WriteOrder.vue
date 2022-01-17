<template>
  <main class="write-order" :style="{ height: meInputHeight + 'px' }">
    <van-nav-bar left-arrow @click-left="onClickLeft" :fixed="true" title="填写订单" />
    <div class="box" />
    <address-item @click="goAddress" v-if="address.length !== 0" :address="address[addressIndex]">
      <template v-slot:addressTitle>
        <div class="address-title"></div>
      </template>
    </address-item>
    <write-order-shop-main ref="wtireOrderShopMainRef" />
    <buy-tab-bar class="tab-bar">
      <button class="pay" @click="buy">确认购买</button>
    </buy-tab-bar>
    <van-dialog
      :show="show"
      title="您还没有填写地址呢~"
      show-cancel-button
      showConfirmButton
      confirmButtonText="去填写"
      confirmButtonColor="#5FAFFB"
      @confirm="goSetAddress"
      @cancel="back"
    />
  </main>
</template>

<script lang="ts">
import AddressItem from '../common/address/AddressItem.vue';
import WriteOrderShopMain from './common/WriteOrderShopMain.vue';
import BuyTabBar from '@/views/common/tabBar/BuyTabBar.vue';

import { ref, defineComponent, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from '@/store';
import { placeOrder } from '@/service/order/order';
import { Toast } from 'vant';
import { wxPay } from '@/weixin/WeiXin';
export default defineComponent({
  components: {
    AddressItem,
    WriteOrderShopMain,
    BuyTabBar
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const addressIndex = ref(0);
    const goodsId = ref('');
    const wtireOrderShopMainRef = ref<InstanceType<typeof WriteOrderShopMain>>();
    const goodsIdCpt = computed(() => {
      return store.state.shopDetail.goodsId;
    });
    if (route.query.goodsId) {
      goodsId.value = route.query.goodsId as string;
    } else {
      goodsId.value = goodsIdCpt.value.toString();
    }
    const address = computed(() => {
      return store.state.address.addressItem;
    });
    const show = ref(false);
    if (address.value.length === 0) {
      show.value = true;
    }
    //弹窗去填写地址
    const goSetAddress = () => {
      router.push('/addressManage');
    };
    //地址选择
    if (route.query.addressIndex) {
      addressIndex.value = parseInt(route.query.addressIndex as string);
    }
    //购买
    const buy = async () => {
      const remark = wtireOrderShopMainRef.value?.remark;
      const requestData = `pid=${goodsId.value}&addId=${address.value[addressIndex.value].id}&remark=${remark}`;
      const res = await placeOrder(requestData);
      const host = location.host;
      if (res.code === 1) {
        Toast('下单成功');
        if (res.mweb_url) {
          sessionStorage.setItem('mweb_url', res.mweb_url);
          const url = encodeURIComponent(`http://${host}/wxPay`);
          window.location.href = `${res.mweb_url}&redirect_url=${url}`;
        } else {
          wxPay(res, payErro, paySuccess);
        }
      } else {
        Toast('下单失败');
      }
    };
    const payErro = () => {
      Toast({
        message: '支付失败,正在跳转到订单',
        onClose: () => {
          router.push({
            path: './buy',
            query: {
              isGet: 'true'
            }
          });
        }
      });
    };
    const paySuccess = () => {
      Toast({
        message: '支付成功,正在跳转到订单',
        onClose: () => {
          router.push({
            path: './buy',
            query: {
              isGet: 'true'
            }
          });
        }
      });
    };
    //弹窗取消
    const back = () => {
      router.back();
    };
    const meInputHeight = ref(window.innerHeight);
    const onClickLeft = () => {
      router.back();
    };
    const goAddress = () => {
      router.push({
        path: '/addressManage',
        query: {
          goodsId: goodsId.value
        }
      });
    };
    return {
      meInputHeight,
      onClickLeft,
      goAddress,
      show,
      goSetAddress,
      back,
      address,
      buy,
      addressIndex,
      goodsId,
      payErro,
      paySuccess,
      goodsIdCpt,
      wtireOrderShopMainRef
    };
  }
});
</script>

<style lang="scss" scoped>
.write-order {
  background-color: #f2f2f2;
  .box {
    height: 46px;
  }
  .address-title {
    background: url(../../assets/image/order/addressTitle.png) no-repeat;
    background-size: contain;
    height: 7px;
    margin-top: 10px;
  }
  .tab-bar {
    justify-content: flex-end;
    .pay {
      width: 88px;
      height: 30px;
      border: none;
      background-color: red;
      color: #fff;
      border-radius: 25px;
      font-size: 14px;
    }
  }
}
</style>
