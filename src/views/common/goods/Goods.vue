<template>
  <article class="goods-item">
    <div class="goods-item-flex">
      <section class="goods-warp">
        <goods-item
          v-for="item in shopsRight"
          :key="item.id"
          :goodItem="item"
          @click="shopsLeftClick(item.id)"
        ></goods-item>
      </section>
      <section class="goods-warp">
        <goods-item
          v-for="item in shopsLeft"
          :key="item.id"
          :goodItem="item"
          @click="shopsRightClick(item.id)"
        ></goods-item>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import GoodsItem from './GoodsItem.vue';
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: {
    GoodsItem
  },
  props: {
    homeListData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  setup(props) {
    //商品数据分开 为瀑布流做准备 [1,2,3,4]
    const shopsLeft = computed(() => {
      return props.homeListData.slice(0, props.homeListData.length / 2);
    });
    const shopsRight = computed(() => {
      return props.homeListData.slice(props.homeListData.length / 2, props.homeListData.length);
    });
    const router = useRouter();
    //点击进入商品详情页
    function shopsClick(value: number) {
      router.push({
        path: '/goodsDetail',
        query: {
          goodsId: value
        }
      });
    }
    const shopsLeftClick = (value: number) => {
      shopsClick(value);
    };
    const shopsRightClick = (value: number) => {
      shopsClick(value);
    };
    return {
      shopsLeft,
      shopsRight,
      shopsRightClick,
      shopsLeftClick
    };
  }
});
</script>

<style scoped lang="scss">
.goods-item {
  width: 95%;
  margin: 0 auto;
  margin-top: 5px;
  .goods-item-flex {
    display: flex;
    .goods-warp {
      display: flex;
      flex-direction: column;
      width: 50%;
    }
  }
}
</style>
