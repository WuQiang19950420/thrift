<template>
  <main class="classify" :style="{ height: height + 'px' }">
    <header class="search" ref="classifyHeader" @click="goSearch">
      <div>
        <van-icon name="search" class="search-icon" />
        <input />
      </div>
    </header>
    <classify-wrap />
  </main>
</template>

<script>
import ClassifyWrap from './common/ClassifyWrap.vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    ClassifyWrap
  },
  name: 'Classify',
  setup() {
    const router = useRouter();
    const store = useStore();
    const height = ref(window.innerHeight);
    const goSearch = () => {
      store.commit('shopItem/deleteShopItem');
      router.push('/search');
    };
    return {
      goSearch,
      height
    };
  }
});
</script>

<style lang="scss" scoped>
.classify {
  .search {
    height: 50px;
    padding: 10px 0;
    border-bottom: 1px solid #f2f2f2;
    div {
      height: 30px;
      width: 80%;
      border-radius: 15px;
      background-color: #f2f2f2;
      margin: 0 auto;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
        position: absolute;
      }
      .search-icon {
        color: #d7dadf;
        font-size: 30px;
        font-size: 20px;
        font-weight: 900;
        position: relative;
        top: 6px;
        left: 10px;
      }
    }
  }
}
</style>
