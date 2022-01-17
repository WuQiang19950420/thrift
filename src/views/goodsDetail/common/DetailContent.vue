<template>
  <article class="detail-content">
    <p>{{ shopDetail.shortDescription }}</p>
    <div class="detail-price">
      <em>¥</em><span class="price">{{ shopDetail.salePrice }}</span>
      <span class="tags" v-if="shopDetail.freightType">包邮</span>
      <span class="old-price">原价¥{{ shopDetail.marketPrice }}</span>
    </div>
    <section class="detail-tags" v-if="shopDetail.brandName">
      <span class="tags-left">品牌</span>
      <span class="tags-right">{{ shopDetail.brandName }}</span>
    </section>
    <section class="detail-tags" v-if="shopDetail.color">
      <span class="tags-left">颜色</span>
      <span class="tags-right">{{ shopDetail.color }}</span>
    </section>
    <section class="detail-tags" v-if="shopDetail.categoryName">
      <span class="tags-left">分类</span>
      <span class="tags-right">{{ shopDetail.categoryName }}</span>
    </section>
    <section class="detail-tags" v-if="shopDetail.weight">
      <span class="tags-left">重量</span>
      <span class="tags-right">{{ shopDetail.weight }}千克</span>
    </section>
    <section class="detail-tags" v-if="shopDetail.weight">
      <span class="tags-left">卖家联系方式</span>
      <span class="tags-right">{{ shopDetail.phone }}</span>
    </section>
    <div class="detail-img" v-for="item in image" :key="item">
      <img :src="item" @load="imgLoad" />
    </div>
  </article>
</template>

<script lang="ts">
import emitter from '@/bus';
import { defineComponent, computed } from 'vue';
export default defineComponent({
  props: {
    shopDetail: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(props) {
    const imgLoad = () => {
      emitter.emit('imgLoad');
    };
    const image = computed(() => {
      return props.shopDetail.imagePath?.split('|');
    });
    return {
      imgLoad,
      image
    };
  }
});
</script>

<style scoped lang="scss">
.detail-content {
  padding: 10px;
  p {
    font-size: 14px;
    line-height: 20px;
    margin: 0 0 10px 0;
  }
  .detail-price {
    em {
      font-style: inherit;
      font-size: 12px;
      color: red;
    }
    .price {
      color: red;
    }
    .tags {
      margin-left: 5px;
      background-color: red;
      border-radius: 3px;
      padding: 1px;
      font-size: 10px;
      color: #fff;
    }
    .old-price {
      margin-left: 10px;
      font-size: 11px;
      color: #666;
      text-decoration: line-through;
    }
  }
  .detail-tags {
    font-size: 12px;
    margin-top: 10px;
    .tags-left {
      color: #666;
      margin-right: 20px;
    }
  }
  .detail-img {
    width: 100%;
    margin-top: 20px;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>
