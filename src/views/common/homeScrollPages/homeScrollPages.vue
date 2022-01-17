<template>
  <main class="scrollPages">
    <scroll
      :style="{ height: pageHeight + 'px' }"
      @pullingUp="pullingUp"
      @pullingDown="pullingDown"
      @scrollXy="scrollXy"
      ref="scrollRef"
      :isPullDown="isPullDown"
    >
      <slot></slot>
    </scroll>
    <back-top v-show="backTopShow" @click="backTopClick" />
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, onDeactivated, ref, watch } from 'vue';
import BackTop from '../backTop/BackTop.vue';
import Scroll from '@/views/common/scroll/Scroll.vue';
import { Toast } from 'vant';
import { useStore } from '@/store';
import emitter from '@/bus';
export default defineComponent({
  components: {
    Scroll,
    BackTop
  },
  props: {
    isScrollY: {
      type: Boolean,
      default: true
    },
    //是否上拉加载
    isPullDown: {
      type: Boolean,
      default: false
    },
    navBarheight: {
      type: Number,
      default: 0
    },
    isEnd: {
      type: Boolean,
      required: true
    },
    //组件名字
    requestName: {
      type: String,
      required: true
    },
    //vuex的函数名字
    storeName: {
      type: String,
      required: true
    },
    storeListName: {
      type: String,
      required: true
    },
    category: {
      type: String,
      default: ''
    },
    tabBarHeight: {
      type: Number,
      default: 0
    },
    condition: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    }
  },
  emits: ['setIsLoding'],
  setup(props, { emit }) {
    const backTopShow = ref(false);
    const pageHeight = ref(window.innerHeight - props.tabBarHeight - props.navBarheight);
    const scrollRef = ref<InstanceType<typeof Scroll>>();
    let currentPage = ref(1); //分页
    const pageSize = 10; //分页数量
    const store = useStore();
    //请求数据
    const requestDatas = computed(() => {
      const data = {
        requestDataPost: `currentPage=${currentPage.value}&pageSize=${pageSize}`,
        requestName: props.requestName
      };
      props.requestName === 'homeIntroduct' || props.requestName === 'category'
        ? (data.requestDataPost = `${data.requestDataPost}&category=${props.category}&currentUrl=${encodeURIComponent(
            location.href
          )}`)
        : (data.requestDataPost = `${data.requestDataPost}&city=${props.city}&condition=${props.condition}`);
      return data;
    });
    if (props.requestName !== 'search') {
      store.dispatch(props.storeName, requestDatas.value);
    }
    const pullingUp = () => {
      if (props.isEnd) {
        Toast('没有更多内容了');
      } else {
        currentPage.value++;
        store.dispatch(props.storeListName, requestDatas.value);
        scrollRef.value?.stopPullUp();
      }
      // scrollRef.value?.stopPullUp();
    };
    //监听y坐标，显示火箭按钮
    const positionY = ref(0);
    const scrollXy = (p: any) => {
      if (-p.y > 1500) {
        backTopShow.value = true;
      } else {
        backTopShow.value = false;
      }
      positionY.value = p.y;
    };
    const position = computed(() => {
      return store.state.shopItem.positionY;
    });
    emitter.on('goOldY', () => {
      scrollRef.value?.goXy(0, position.value, 1);
    });
    //组件消失 保存Y坐标
    onDeactivated(() => {
      store.commit('shopItem/setPositionY', positionY.value);
    });
    const backTopClick = () => {
      scrollRef.value?.goXy(0, 0);
    };
    const isLoading = computed(() => {
      return store.state.shopItem.isLoading;
    });
    //上拉加载
    const pullingDown = async () => {
      currentPage.value = 1;
      emit('setIsLoding');
      await store.dispatch(props.storeName, requestDatas.value);
      if (!isLoading.value) {
        Toast('刷新成功');
      }
    };
    //监听用户选择城市，并请求数据
    watch(
      () => props.city,
      () => {
        store.dispatch(props.storeName, requestDatas.value);
      }
    );
    //用户搜索
    emitter.off('getSearchData');
    emitter.on('getSearchData', () => {
      setTimeout(() => {
        store.dispatch(props.storeName, requestDatas.value);
      }, 300);
    });
    return {
      pageHeight,
      pullingUp,
      scrollRef,
      currentPage,
      requestDatas,
      scrollXy,
      backTopShow,
      backTopClick,
      position,
      pullingDown,
      isLoading
    };
  }
});
</script>

<style scoped lang="scss">
.scrollPages {
  .box {
    height: 46px;
  }
}
</style>
