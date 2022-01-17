<template>
  <section class="order-item">
    <article>
      <div class="order-item-content">
        <div class="state">{{ orderState }}</div>
        <img :src="img[0]" @load="imgLoad" />
        <div class="product">
          <span class="product-name">{{ meInput.productName }}</span>
          <div class="product-brand">
            <span class="product-detail-name">型号:{{ brandId }}</span>
            <span class="product-detail-name">颜色:{{ meInput.color }}</span>
          </div>
        </div>
        <small class="product-detail-price">￥{{ meInput.salePrice }}</small>
      </div>
    </article>
    <footer>
      <button @click="write">编辑</button>
      <button @click="moreBtn(meInput.id, index)">更多</button>
    </footer>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import emitter from '@/bus';
export default defineComponent({
  props: {
    meInput: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  emits: ['write', 'moreBtn'],
  setup(props, { emit }) {
    emitter.emit('imgLoad');
    const write = () => {
      emit('write');
    };
    //品牌
    const store = useStore();
    const img = computed(() => {
      return props.meInput.imagePath.split('|');
    });
    const orderState = computed(() => {
      const state = props.meInput.auditStatus;
      let states = '';
      if (state === 0) {
        states = '待审核';
      } else if (state === 1) {
        states = '已审核';
      } else if (state === 2) {
        states = '审核未通过';
      }
      return states;
    });
    const brandId: any = computed(() => {
      let brandName = '';
      store.state.classify.brandItem.forEach((item) => {
        if (item.id == props.meInput.brandId) {
          brandName = item.brandName;
        }
      });
      return brandName;
    });
    //更多按钮
    const moreBtn = (id: number) => {
      emit('moreBtn', id);
    };
    return {
      write,
      moreBtn,
      brandId,
      img,
      orderState
    };
  }
});
</script>

<style lang="scss" scoped>
.order-item {
  width: 97%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px 10px 10px 10px;
  margin-top: 10px;
  box-shadow: 0px 4px 20px #f2f2f2;
  article {
    .order-item-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .state {
        position: absolute;
        top: 0;
        right: 4px;
        width: inherit;
        font-size: 12px;
      }
      img {
        width: 70px;
        height: 70px;
        border-radius: 6px;
      }
      .product {
        margin: 0 0 0 10px;
        display: flex;
        flex-direction: column;
        flex: 1;
        .product-name {
          font-size: 13px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .product-brand {
          .product-detail-name {
            margin-top: 10px;
            font-size: 12px;
            color: #a6acb3;
            margin-left: 10px;
            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
      .product-detail-price {
        margin-top: 5px;
        font-size: 14px;
        color: red;
      }
    }
  }
  footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    button {
      width: 44px;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      padding: 0;
      border-radius: 20px;
      border: 1px solid #f5f5f5;
      margin-left: 20px;
      background-color: #fff;
    }
    .other {
      font-size: 16px;
    }
  }
}
.pay-state-active {
  color: red;
}
</style>
