<template>
  <article class="search">
    <div class="left" @click="cancel">
      <van-icon name="arrow-left" />
    </div>
    <div class="search-position">
      <form action="" id="myform" @click="inputClick">
        <input class="search-input" type="search" ref="search" v-model="searchValue" @keydown="searchKeybord" />
      </form>
      <van-icon name="search" color="#D7D7D7" class="search-icon" />
    </div>
    <span class="cancel" @click="searchClicks">确定</span>
  </article>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import emitter from '@/bus';
import { ref, nextTick, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    //dom挂载获取input焦点
    const search = ref<HTMLElement>();
    nextTick(() => {
      search.value?.focus();
    });
    const cancel = () => {
      router.back();
    };
    const searchValue = ref('');
    const searchClicks = () => {
      store.commit('shopItem/changeSearchValue', searchValue.value);
      emitter.emit('getSearchData');
    };
    //虚拟键盘搜索按钮
    const searchKeybord = (event: any) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        store.commit('shopItem/changeSearchValue', searchValue.value);
        emitter.emit('getSearchData');
      }
    };
    return {
      cancel,
      search,
      searchClicks,
      searchValue,
      searchKeybord
    };
  }
});
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  height: 46px;
  text-align: center;
  .left {
    width: 30px;
  }
  .search-position {
    position: relative;
    flex: 1;
    .search-input {
      width: 95%;
      height: 30px;
      border: 1px solid #0099ff;
      border-radius: 15px;
      padding-left: 30px;
      font-size: 13px;
    }
    .search-icon {
      position: absolute;
      top: 5px;
      left: 12px;
      font-weight: 900;
      font-size: 19px;
    }
  }
  .cancel {
    width: 40px;
    font-size: 13px;
    padding-right: 2px;
  }
}
</style>
