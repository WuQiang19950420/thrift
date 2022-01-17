<template>
  <main :style="{ height: pageHeight + 'px' }">
    <van-nav-bar title="发布宝贝" left-arrow @click-left="onClickLeft" :fixed="true" />
    <scroll :style="{ height: height + 'px' }" ref="scrollRef">
      <div class="box1" />
      <publish-goods-text ref="publishGoodsText" />
      <publish-choose ref="publishChoose" />
    </scroll>
    <buy-tab-bar class="fixed" ref="buyTabBarRef">
      <button class="publish" @click="publishGood">立即发布</button>
    </buy-tab-bar>
  </main>
</template>

<script lang="ts">
import BuyTabBar from '@/views/common/tabBar/BuyTabBar.vue';
import PublishChoose from './common/PublishChoose.vue';
import PublishGoodsText from './common/PublishGoodsText.vue';
import Scroll from '../common/scroll/Scroll.vue';

import { Toast, Dialog } from 'vant';
import { ref, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { publishGoods } from '@/service/publishGoods/publishGoods';
import { setMeInput } from '@/service/order/order';
import emitter from '@/bus';
export default defineComponent({
  components: {
    PublishGoodsText,
    BuyTabBar,
    PublishChoose,
    Scroll
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    //判断是否是编辑商品还是初次发布商品
    const onClickLeft = () => {
      if (route.query.isWrite === '1') {
        router.back();
      } else {
        store.commit('setPublishdData');
        router.go(-2);
      }
    };
    //验证用户是否实名
    const a = false;
    if (a) {
      Dialog({
        title: '您还没有实名认证～',
        showCancelButton: true,
        confirmButtonColor: '#2A89FA',
        confirmButtonText: '去认证',
        cancelButtonText: '回首页'
      })
        .then(() => {
          router.push('/authentication');
        })
        .catch(() => {
          router.go(-2);
          store.commit('setPublishdData');
        });
    }
    const goodsId = ref('');
    if (route.query.goodsId) {
      goodsId.value = route.query.goodsId as string;
    }
    //用户发布商品
    const publishGoodsText = ref<InstanceType<typeof PublishGoodsText>>();
    const publishChoose = ref<InstanceType<typeof PublishChoose>>();
    const publishGood = async () => {
      const price = publishChoose.value?.allPrice.price; //商品优惠后的价格
      const oldPrice = publishChoose.value?.allPrice.oldPrice; //商品本来的价格
      let sellerFreight = null; //是否包邮
      let mailCharge = null; //邮费
      if (publishChoose.value?.allPrice.mailCharge === '包邮') {
        sellerFreight = '1';
        mailCharge = '0';
      } else {
        mailCharge = publishChoose.value?.allPrice.mailCharge;
        sellerFreight = '0';
      }
      const a = publishChoose.value?.address as string;
      const b = publishChoose.value?.detailedAddress as string;
      const address = a + '/' + b; //地址
      const goodTextArea = publishGoodsText.value?.goodTextArea as string; //宝贝描述
      const imgList = publishGoodsText.value?.upLoadImgs.join('|'); //图片地址
      const phone = publishChoose.value?.phone; //手机号
      const productName = publishChoose.value?.productName; //商品名称
      const brandId = publishChoose.value?.brandId; //品牌id
      const classifyId = publishChoose.value?.classifyId; //分类id
      const goodsWeight = publishChoose.value?.goodsWeight; //商品重量
      const goodsColor = publishChoose.value?.goodsColor; //商品颜色
      const city = publishChoose.value?.city; //发货城市
      const productType = publishChoose.value?.productTypeChecked; //商品类型
      let freightType = 0; //发货方式
      publishChoose.value?.freightTypeColumns.forEach((item, index) => {
        if (publishChoose.value?.freightType === item) {
          freightType = index;
        }
      });
      // console.log(
      //   mailCharge,
      //   price,
      //   address,
      //   goodTextArea,
      //   imgList,
      //   phone,
      //   productName,
      //   brandId,
      //   classifyId,
      //   goodsColor,
      //   goodsWeight,
      //   productType
      // );
      if (
        price &&
        mailCharge &&
        address &&
        goodTextArea &&
        imgList &&
        phone &&
        productName &&
        brandId &&
        classifyId &&
        goodsColor &&
        goodsWeight &&
        productType &&
        sellerFreight
      ) {
        const requestData = `productType=${productType}&sellerFreight=${sellerFreight}&productName=${productName}&shortDescription=${goodTextArea}&imagePath=${imgList}&phone=${phone}&address=${address}&categoryId=${classifyId}&brandId=${brandId}&city=${city}&marketPrice=${oldPrice}&salePrice=${price}&freightType=${freightType}&freightMoney=${mailCharge}&weight=${goodsWeight}&color=${goodsColor}&token=${localStorage.getItem(
          'token'
        )}`;
        let resData = null;
        if (route.query.isWrite !== '1') {
          resData = await publishGoods(requestData);
        } else {
          const requestDatas = `${requestData}&id=${goodsId.value}`;
          resData = await setMeInput(requestDatas);
        }
        if (resData.code === 1) {
          Toast('发布成功,正在跳转');
          setTimeout(() => {
            router.push({
              path: '/meInput',
              query: {
                isGet: 'true'
              }
            });
          }, 1000);
        } else {
          Toast('发布失败');
        }
      } else {
        Toast('请填写内容');
      }
    };

    //页面高度
    const boxRef = ref<HTMLElement>();
    const buyTabBarRef = ref<InstanceType<typeof BuyTabBar>>();
    const height = ref(window.innerHeight);
    const pageHeight = ref(window.innerHeight);
    const scrollRef = ref<InstanceType<typeof Scroll>>();
    onMounted(() => {
      height.value = height.value - buyTabBarRef.value?.$el.clientHeight;
      emitter.emit('imgLoad');
    });
    return {
      publishGood,
      publishChoose,
      publishGoodsText,
      onClickLeft,
      height,
      boxRef,
      scrollRef,
      buyTabBarRef,
      pageHeight,
      goodsId
    };
  }
});
</script>

<style scoped lang="scss">
.fixed {
  justify-content: flex-end;
  .publish {
    width: 100px;
    height: 36px;
    border: none;
    background-color: red;
    color: #fff;
    border-radius: 25px;
  }
}
.box {
  width: 100%;
  height: 50px;
}
.box1 {
  height: 46px;
}
</style>
