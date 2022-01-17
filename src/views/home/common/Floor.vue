<template>
  <article class="floor">
    <ul class="floor-icon">
      <li
        class="floor-icon-item"
        v-for="item in categoryData"
        :key="item.id"
        @click="floorClick(item.id, item.categoryName, item.isAll)"
      >
        <img class="icon-img" :src="item.imagePath" @load="imgLoad" />
        <span class="icon-text">{{ item.categoryName }}</span>
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import emitter from '@/bus';
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
export default defineComponent({
  props: {
    categoryData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  setup() {
    const imgLoad = () => {
      emitter.emit('imgLoad');
    };
    const router = useRouter();
    const store = useStore();
    const floorClick = (...argument: [number, string, boolean]) => {
      if (argument[2]) {
        router.push('/classify');
      } else {
        store.commit('shopItem/changeCategoryValue', argument[0]);
        //路由跳转到页面传递查找到名字
        router.push({
          path: '/search',
          query: {
            valueName: argument[1],
            isShowNavBar: 1
          }
        });
      }
    };
    return {
      imgLoad,
      floorClick
    };
  }
});
</script>

<style lang="scss" scoped>
.floor {
  margin: 20px 0 0 0;
  .floor-icon {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    .floor-icon-item {
      width: calc(100% / 5);
      height: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon-img {
        width: 40px;
        height: 40px;
        margin-bottom: 5px;
      }
      .icon-text {
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
}
</style>
