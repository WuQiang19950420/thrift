<template>
  <article class="write-order-shop-main">
    <order-detail-goods class="wrtie-godds" />
    <div class="shop-main-other">
      <section>
        <span>类型</span>
        <span class="right">{{ shopDetail.categoryName }}</span>
      </section>
      <section>
        <span>品牌</span>
        <span class="right">{{ shopDetail.brandName }}</span>
      </section>
      <section>
        <span>颜色</span>
        <span class="right">{{ shopDetail.color }}</span>
      </section>
      <section>
        <span>配送方式</span>
        <span class="right">{{ freightType }}</span>
      </section>
      <section>
        <span>运费</span>
        <template v-if="shopDetail.freightMoney === 0">
          <span style="margin-right: 13px">免运费</span>
        </template>
        <template v-else>
          <span style="margin-right: 13px">￥{{ shopDetail.freightMoney }}</span>
        </template>
      </section>
      <p class="remark">订单备注:</p>
      <textarea class="input-text" v-model="remark"></textarea>
    </div>
    <footer>
      <template v-if="shopDetail.freightMoney === 0">
        总计：<em>￥{{ shopDetail.salePrice }}</em>
      </template>
      <template v-else>
        总计<span class="shop-freightMoney">(商品+运费):</span
        ><em>￥{{ shopDetail.salePrice + shopDetail.freightMoney }}</em>
      </template>
    </footer>
  </article>
</template>

<script>
import OrderDetailGoods from './OrderDetailGoods.vue';
import { computed, defineComponent, ref } from 'vue';
import { useStore } from '@/store';
export default defineComponent({
  components: {
    OrderDetailGoods
  },
  setup() {
    const store = useStore();
    const shopDetail = computed(() => {
      return store.state.shopDetail.shopDetail;
    });
    const remark = ref('');
    const freightType = computed(() => {
      let freightType = '';
      switch (shopDetail.value.freightType) {
        case 0:
          freightType = '快递';
          break;
        case 1:
          freightType = '物流';
          break;
        case 2:
          freightType = '自提';
          break;
        case 3:
          freightType = '送货上门';
          break;
      }
      return freightType;
    });
    return {
      shopDetail,
      freightType,
      remark
    };
  }
});
</script>

<style lang="scss" scoped>
.write-order-shop-main {
  background-color: #ffffff;
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px 10px 0 10px;
  font-size: 13px;
  .wrtie-godds {
    box-shadow: none;
    margin-top: 0;
  }
  .shop-main-other {
    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      .right {
        margin-right: 20px;
        position: relative;
      }
    }
    .remark {
      margin-top: 20px;
    }
    .input-text {
      margin-top: 10px;
      width: 100%;
      height: 60px;
      border: none;
      resize: none;
      padding: 3px;
      font-size: 13px;
      border-radius: 6px;
      border: 1px solid #f3f3f3;
    }
  }
  footer {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    line-height: 40px;
    position: relative;
    margin-top: 10px;
    padding-right: 10px;
    .shop-freightMoney {
      font-size: 10px;
    }
    em {
      font-style: normal;
      color: red;
      font-size: 16px;
    }
    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      pointer-events: none;
      background-color: #e5e5e5;
      height: 1px;
      left: 0;
      right: 0;
      top: 0;
      left: 10px;
      right: 10px;
    }
  }
}
</style>
