<template>
  <article class="scrollPages" :style="{ height: pageHeight + 'px' }">
    <slot name="navBar">
      <van-nav-bar ref="navBarRef" left-arrow @click-left="onClickLeft" :border="false" :fixed="true" :title="title" />
      <div class="box" ref="boxRef" />
    </slot>
    <scroll :style="{ height: scrollHeight + 'px' }" @pullingUp="pullingUp" ref="scrollRef">
      <div style="height: 1px; margin-top: -1px"></div>
      <template v-if="isLoading">
        <van-loading class="loading" color="#CBCFD3" size="50">加载中...</van-loading>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </scroll>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref, onActivated } from 'vue';
import { useRouter } from 'vue-router';
import Scroll from '@/views/common/scroll/Scroll.vue';
import { Toast } from 'vant';
import { useStore } from '@/store';
import type { IRequestData } from './type';
import emitter from '@/bus';
export default defineComponent({
  components: {
    Scroll
  },
  props: {
    title: {
      type: String,
      required: true
    },
    isEnd: {
      type: Boolean,
      required: true
    },
    requestData: {
      type: [String, Object] as PropType<IRequestData>
    },
    requestMode: {
      type: String,
      default: 'post'
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
    isRequestEmpty: {
      type: Boolean,
      default: false
    }
  },
  emits: ['getResData', 'setIsEnd'],
  setup(props, { emit }) {
    const pageHeight = ref(window.innerHeight);
    const router = useRouter();
    const boxHeight = ref(0);
    const scrollHeight = ref(0);
    const boxRef = ref<HTMLElement>();
    const scrollRef = ref<InstanceType<typeof Scroll>>();
    let currentPage = ref(1); //分页
    const pageSize = 10; //分页数量
    const store = useStore();
    let isGetData = true;
    emitter.on('noGetData', () => {
      isGetData = false;
    });
    const requestDatas = computed(() => {
      if (props.requestMode === 'post') {
        if (props.requestData) {
          return `currentPage=${currentPage.value}&pageSize=${pageSize}&${props.requestData}`;
        } else {
          return `currentPage=${currentPage.value}&pageSize=${pageSize}`;
        }
      } else {
        if (props.isRequestEmpty) {
          return '';
        } else {
          let request = (props.requestData as IRequestData) || {};
          request.currentPage = currentPage.value;
          request.pageSize = pageSize;
          return request;
        }
      }
    });
    onActivated(() => {
      emitter.emit('imgLoad');
      if (isGetData) {
        scrollRef.value?.goXy(0, 0, 0);
        currentPage.value = 1;
        store.dispatch(props.storeName, requestDatas.value);
      }
      isGetData = true;
    });
    onMounted(() => {
      const height = boxRef.value?.clientHeight as number;
      scrollHeight.value = pageHeight.value - height;
    });
    const pullingUp = () => {
      if (props.isEnd) {
        Toast('没有更多内容了');
      } else {
        currentPage.value++;
        store.dispatch(props.storeListName, requestDatas.value);
        scrollRef.value?.stopPullUp();
      }
    };
    const onClickLeft = () => {
      emit('setIsEnd');
      router.back();
    };
    //loading
    const isLoading = computed(() => {
      return store.state.order.isLoading;
    });
    return {
      pageHeight,
      onClickLeft,
      boxRef,
      boxHeight,
      scrollHeight,
      pullingUp,
      scrollRef,
      currentPage,
      requestDatas,
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
  .loading {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
