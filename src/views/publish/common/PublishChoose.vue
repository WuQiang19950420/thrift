<template>
  <article class="publish-choose">
    <publish-choose-item>
      <template v-slot:icon>
        <van-icon name="shop-o" :size="16" />
      </template>
      <template v-slot:name>
        <span>商品类型</span>
      </template>
      <template v-slot:content>
        <van-radio-group v-model="productTypeChecked" direction="horizontal" :icon-size="15">
          <van-radio name="0">实物商品</van-radio>
          <van-radio name="1">虚拟商品</van-radio>
        </van-radio-group>
      </template>
    </publish-choose-item>
    <publish-choose-item>
      <template v-slot:icon>
        <van-icon name="shop-o" :size="16" />
      </template>
      <template v-slot:name>
        <span>商品名称</span>
      </template>
      <template v-slot:content>
        <input type="text" class="input-address input-productName" maxlength="13" v-model="productName" />
      </template>
    </publish-choose-item>
    <publish-choose-item @click="chooseAddress">
      <template v-slot:icon>
        <van-icon name="location-o" :size="16" />
      </template>
      <template v-slot:name>
        <span>发货地区</span>
      </template>
      <template v-slot:content>
        <span>{{ address || '请选择发货地址' }}</span>
      </template>
      <template v-slot:arrow>
        <van-icon name="arrow" />
      </template>
    </publish-choose-item>
    <publish-choose-item>
      <template v-slot:icon>
        <van-icon name="location-o" :size="16" />
      </template>
      <template v-slot:name>
        <span>详细地址</span>
      </template>
      <template v-slot:content>
        <input type="text" class="input-address" v-model="detailedAddress" />
      </template>
    </publish-choose-item>
    <publish-choose-item>
      <template v-slot:icon>
        <van-icon name="phone-o" :size="16" />
      </template>
      <template v-slot:name>
        <span>联系电话</span>
      </template>
      <template v-slot:content>
        <input type="tel" maxlength="11" class="input-address" v-model="phone" />
      </template>
    </publish-choose-item>
    <publish-choose-item>
      <template v-slot:icon>
        <van-icon name="aim" :size="16" />
      </template>
      <template v-slot:name>
        <span>重量(kg)</span>
      </template>
      <template v-slot:content>
        <input type="number" class="input-address" v-model="goodsWeight" />
      </template>
    </publish-choose-item>
    <publish-choose-item>
      <template v-slot:icon>
        <van-icon name="records" :size="16" />
      </template>
      <template v-slot:name>
        <span>颜色</span>
      </template>
      <template v-slot:content>
        <input type="text" class="input-address" v-model="goodsColor" />
      </template>
    </publish-choose-item>
    <publish-choose-item @click="freightTypeShow = true">
      <template v-slot:icon>
        <van-icon name="logistics" :size="16" />
      </template>
      <template v-slot:name>
        <span>发货方式</span>
      </template>
      <template v-slot:content>
        <span v-if="!freightType">请选择发货方式</span>
        <span v-else>{{ freightType }}</span>
      </template>
      <template v-slot:arrow v-if="!freightType">
        <van-icon name="arrow" />
      </template>
    </publish-choose-item>
    <publish-choose-item @click="brandShow = true">
      <template v-slot:icon>
        <van-icon name="award-o" :size="16" />
      </template>
      <template v-slot:name>
        <span>品牌</span>
      </template>
      <template v-slot:content>
        <span v-if="!brandName">请选择品牌</span>
        <span v-else>{{ brandName }}</span>
      </template>
      <template v-slot:arrow v-if="!brandName">
        <van-icon name="arrow" />
      </template>
    </publish-choose-item>
    <publish-choose-item @click="classifyShow = true">
      <template v-slot:icon>
        <van-icon name="qr" :size="16" />
      </template>
      <template v-slot:name>
        <span>分类</span>
      </template>
      <template v-slot:content>
        <span v-if="!fieldValue">请选择分类</span>
        <span v-else>{{ fieldValue }}</span>
      </template>
      <template v-slot:arrow v-if="!fieldValue">
        <van-icon name="arrow" />
      </template>
    </publish-choose-item>
    <publish-choose-item @click="writePrice">
      <template v-slot:icon>
        <van-icon name="after-sale" :size="16" />
      </template>
      <template v-slot:name>
        <span>价格</span>
      </template>
      <template v-slot:content>
        <span v-if="allPrice.price === 0 || allPrice.price === ''">您开个价吧～</span>
        <span v-else style="color: red; font-size: 16px" @click="writePrice">￥{{ allPrice.price }}</span>
      </template>
      <template v-slot:arrow v-if="allPrice.price === 0">
        <van-icon name="arrow" />
      </template>
    </publish-choose-item>
    <publish-choose-item @click="writePrice">
      <template v-slot:icon>
        <van-icon name="after-sale" :size="16" />
      </template>
      <template v-slot:name>
        <span>原价</span>
      </template>
      <template v-slot:content>
        <span>￥{{ allPrice.oldPrice || '0.00' }}</span>
      </template>
    </publish-choose-item>
    <publish-choose-item @click="writePrice">
      <template v-slot:icon>
        <van-icon name="after-sale" :size="16" />
      </template>
      <template v-slot:name>
        <span>运费</span>
      </template>
      <template v-slot:content>
        <span>
          <template v-if="allPrice.mailCharge">
            <template v-if="allPrice.mailCharge !== '包邮'">￥</template>
            {{ allPrice.mailCharge || '请输入邮费' }}
          </template>
          <template v-else>请输入邮费</template>
        </span>
      </template>
    </publish-choose-item>
    <van-popup :show="freightTypeShow" position="bottom" :round="true" teleport="body">
      <van-picker
        title="请选择发货方式"
        :columns="freightTypeColumns"
        @confirm="freightTypeConfirm"
        @cancel="freightTypeShow = false"
      />
    </van-popup>
    <van-popup :show="brandShow" position="bottom" :round="true" teleport="body">
      <van-picker title="请选择品牌" :columns="columns" @confirm="onConfirm" @cancel="brandShow = false" />
    </van-popup>
    <van-popup :show="classifyShow" position="bottom" :round="true" teleport="body">
      <van-cascader
        title="请选择商品的分类"
        :options="options"
        @close="classifyShow = false"
        @finish="onFinish"
        active-color="#1989FA"
        v-model="cascaderValue"
      />
    </van-popup>
    <van-popup :show="areaShow" position="bottom" :round="true" teleport="body">
      <van-area :area-list="areaList" @cancel="areaShow = false" @confirm="areaEnd" />
    </van-popup>
    <van-popup :show="show" position="bottom" @click-overlay="clickOverlay" :round="true" teleport="body">
      <price-pop @setPriceData="setPriceData" :allPrice="allPrice" :isShowMail="isShowMail" />
    </van-popup>
  </article>
</template>

<script lang="ts">
import PublishChooseItem from './PublishChooseItem.vue';
import PricePop from './PricePop.vue';

import { ref, reactive, defineComponent, computed, watchEffect, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/store';
import { areaList } from '@vant/area-data';
import type { IAllPrices } from '../type';

export default defineComponent({
  components: {
    PublishChooseItem,
    PricePop
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const productName = ref('');
    const goodsWeight = ref('');
    const goodsColor = ref('');
    const phone = ref('');
    const isShowMail = ref(false);
    //商品类型选择
    const productTypeChecked = ref('0');
    //用户输入地址,并显示在页面
    const areaShow = ref(false);
    const address = ref('');
    const detailedAddress = ref('');
    const city = ref('');
    const chooseAddress = () => {
      areaShow.value = true;
    };
    const areaEnd = (data: any[]) => {
      if (data[0].name === data[1].name) {
        address.value = data[0].name + '/' + data[2].name;
        city.value = data[0].name;
      } else {
        address.value = data[0].name + '/' + data[1].name + '/' + data[2].name;
        city.value = data[1].name;
      }
      areaShow.value = false;
    };
    //发货方式
    const freightTypeShow = ref(false);
    const freightTypeColumns = ['快递', '物流', '自提', '送货上门'];
    const freightType = ref('');
    const freightTypeConfirm = (value: string) => {
      freightType.value = value;
      freightTypeShow.value = false;
    };
    //监听freightType 2和3 包邮
    watch(freightType, () => {
      if (freightType.value == '自提' || freightType.value == '送货上门') {
        allPrice.mailCharge = '包邮';
        isShowMail.value = true;
      } else {
        allPrice.mailCharge = 0;
        isShowMail.value = false;
      }
    });
    //品牌
    if (!store.state.classify.brandItem) {
      store.dispatch('classify/getBrandItem');
    }
    const brandShow = ref(false);
    const columns: string[] = []; //品牌
    const brandName = ref(''); //品牌id名字
    const brandId = ref(0); //品牌id
    const brand = computed(() => {
      // store.state.classify.brandItem.forEach((item) => {
      //   columns.push(item.brandName);
      // });
      return store.state.classify.brandItem;
    });
    const onConfirm = (value: string, index: number) => {
      brandId.value = brand.value[index].id;
      brandName.value = brand.value[index].brandName;
      brandShow.value = false;
    };
    //分类
    if (!store.state.classify.classifyItem) {
      store.dispatch('classify/getClassifyItem');
    }
    const classifyShow = ref(false);
    const fieldValue = ref('');
    const cascaderValue = ref('');
    const classifyId = ref(0);
    const classify = computed(() => {
      return store.state.classify.classifyItem;
    });
    const options = computed(() => {
      return store.state.classify.options;
    });
    // 全部选项选择完毕后，会触发 finish 事件
    const onFinish = ({ selectedOptions }: any) => {
      classifyShow.value = false;
      classifyId.value = selectedOptions[selectedOptions.length - 1].value;
      fieldValue.value = selectedOptions.map((option: any) => option.text).join('/');
    };
    //用户输入价格,并显示在页面
    const show = ref(false);
    const showPrice = ref(true);
    let allPrice = reactive<IAllPrices>({
      price: 0,
      oldPrice: 0,
      mailCharge: 0
    });
    //编辑商品初始化
    const publishData = computed(() => {
      return store.state.order.AllBuySellData[parseInt(route.query.index as string)];
    });
    if (route.query.isWrite === '1') {
      productName.value = publishData.value.productName;
      goodsWeight.value = publishData.value.weight;
      goodsColor.value = publishData.value.color;
      phone.value = publishData.value.phone;
      freightType.value = freightTypeColumns[publishData.value.freightType];
      allPrice.price = publishData.value.salePrice.toString();
      allPrice.oldPrice = publishData.value.marketPrice.toString();
      allPrice.mailCharge = publishData.value.freightMoney == 0 ? '包邮' : publishData.value.freightMoney;
      classifyId.value = publishData.value.categoryId.toString();
      city.value = publishData.value.city;
      productTypeChecked.value = publishData.value.productType.toString();

      options.value.forEach((item) => {
        item.children.forEach((items: any) => {
          if (items.value === publishData.value.categoryId) {
            fieldValue.value = `${item.text}/${items.text}`;
          }
        });
      });
      //地址转换
      const addressCopy = publishData.value.address.split('/');
      if (addressCopy.length === 3) {
        address.value = addressCopy[0] + '/' + addressCopy[1];
        detailedAddress.value = addressCopy[2];
      } else {
        address.value = addressCopy[0] + '/' + addressCopy[1] + '/' + addressCopy[2];
        detailedAddress.value = addressCopy[3];
      }
    }
    //监听品牌数据，品牌id转换品牌名字
    watchEffect(() => {
      brand.value.forEach((item) => {
        columns.push(item.brandName);
      });
      if (route.query.isWrite === '1') {
        brand.value.forEach((item) => {
          if (item.id === publishData.value.brandId) {
            brandName.value = item.brandName;
            brandId.value = publishData.value.brandId;
          }
        });
      }
    });
    const writePrice = () => {
      show.value = true;
    };
    const clickOverlay = () => {
      show.value = false;
    };
    const setPriceData = (allPrices: any) => {
      show.value = false;
      console.log(allPrices.price === '');
      if (allPrices.price !== 0 || allPrices.price !== '') allPrice.price = allPrices.price;
      if (allPrices.oldPrice !== 0 || allPrices.oldPrice !== '') allPrice.oldPrice = allPrices.oldPrice;
      if (allPrices.mailCharge !== 0 || allPrices.mailCharge !== '') allPrice.mailCharge = allPrices.mailCharge;
      showPrice.value = false;
    };
    return {
      writePrice,
      show,
      clickOverlay,
      setPriceData,
      allPrice,
      showPrice,
      areaList,
      areaShow,
      chooseAddress,
      areaEnd,
      address,
      onFinish,
      classifyShow,
      fieldValue,
      brandShow,
      brand,
      columns,
      onConfirm,
      brandName,
      productName,
      phone,
      brandId,
      cascaderValue,
      classifyId,
      goodsWeight,
      freightTypeShow,
      freightTypeColumns,
      freightType,
      freightTypeConfirm,
      detailedAddress,
      goodsColor,
      city,
      productTypeChecked,
      options,
      classify,
      isShowMail
    };
  }
});
</script>

<style scoped lang="scss">
.publish-choose {
  .input-address {
    border: none;
    border-bottom: 1px solid #f3f3f3;
    text-align: right;
  }
  .input-tel {
    width: 90px;
  }
  .input-productName {
    width: max-content;
  }
}
</style>
