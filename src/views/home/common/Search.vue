<template>
  <article class="search">
    <div class="search-input" @click="goSearch">
      <input class="display-input" />
      <div class="search-input-left" />
      <van-icon name="search" color="#D7D7D7" class="search-icon" />
      <div class="search-btn">搜索</div>
    </div>
  </article>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const goSearch = () => {
      store.commit('shopItem/deleteShopItem');
      router.push('/search');
    };
    return {
      goSearch
    };
  }
});
</script>

<style lang="scss" scoped>
.search {
  width: 95%;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  .display-input {
    width: 100%;
    height: 30px;
    position: absolute;
    opacity: 0;
  }
  .search-input {
    width: 90%;
    display: flex;
    flex: 1;
    position: relative;
    .search-input-left {
      flex: 1;
      border: 1px solid #0099ff;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }
    .search-icon {
      position: absolute;
      top: 5px;
      left: 10px;
      font-weight: 900;
      font-size: 19px;
    }
    .search-btn {
      width: 50px;
      background-color: #0099ff;
      color: #fff;
      font-size: 13px;
      text-align: center;
      line-height: 28px;
      float: right;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
}
</style>
