<template>
  <article class="wrap-right">
    <template v-if="classify?.length !== 0">
      <section class="wrap-right-item">
        <!-- <h4>{{ title }}</h4> -->
        <ul class="wrap-right-goods">
          <li v-for="item in classify" :key="item.id" @click="classifyClick(item.id, item.categoryName)">
            <img :src="item.imagePath" />
            <span>{{ item.categoryName }}</span>
          </li>
        </ul>
      </section>
    </template>
    <template v-else>
      <empty text="暂无分类" />
    </template>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import empty from '../../common/empty/empty.vue';
import emitter from '@/bus';
export default defineComponent({
  components: {
    empty
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const index = ref(0);
    const classify = computed(() => {
      return store.state.classify.classifyItem[index.value]?.children;
    });
    emitter.on('setTitle', (indexs: any) => {
      index.value = indexs;
    });
    const classifyClick = (...argument: [number, string]) => {
      store.commit('shopItem/changeCategoryValue', argument[0]);
      //路由跳转到页面传递查找到名字
      router.push({
        path: '/search',
        query: {
          valueName: argument[1],
          isShowNavBar: 1
        }
      });
    };
    return {
      classify,
      classifyClick,
      index
    };
  }
});
</script>

<style scoped lang="scss">
.wrap-right {
  height: 100%;
  width: 100%;
  .wrap-right-item {
    padding-top: 10px;
    // h4 {
    //   margin: 10px 0 10px 10px;
    // }
    .wrap-right-goods {
      display: flex;
      flex-wrap: wrap;
      li {
        width: calc(100% / 3);
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 70px;
          height: 70px;
          border-radius: 10px;
        }
        span {
          margin-top: 10px;
          font-size: 13px;
        }
      }
    }
  }
  .empty {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-25%, -60%);
  }
}
</style>
