<template>
  <article class="order-item">
    <div class="order-item-content">
      <img :src="image[0]" />
      <p>
        <span class="product-name">{{ shopDetail.productName || goodsData.productName }}</span>
        <span class="product-detail-name" v-if="goodsData.shortDescription">{{ goodsData.shortDescription }}</span>
      </p>
      <small class="product-detail-price">￥{{ shopDetail.salePrice || goodsData.salePrice }}</small>
    </div>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
export default defineComponent({
  props: {
    goodsData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(prop) {
    const store = useStore();
    const shopDetail = computed(() => {
      return store.state.shopDetail.shopDetail;
    });
    const image = computed(() => {
      if (prop.goodsData.imagePath) {
        return prop.goodsData.imagePath.split('|');
      } else {
        return shopDetail.value.imagePath.split('|');
      }
    });
    return {
      shopDetail,
      image
    };
  }
});
</script>

<style lang="scss" scoped>
.order-item {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0px 4px 20px #f2f2f2;
  .order-item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
      border-radius: 6px;
    }
    p {
      margin: 0 0 0 10px;
      display: flex;
      flex-direction: column;
      flex: 1;
      .product-name {
        font-size: 13px;
        position: relative;
        top: -15px;
      }
      .product-detail-name {
        font-size: 12px;
        color: #a6acb3;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .product-detail-price {
      margin-top: 5px;
      font-size: 14px;
      color: #a6acb3;
    }
  }
}
</style>
