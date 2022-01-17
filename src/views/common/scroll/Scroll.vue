<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <div class="box" v-if="isPullDown && isPullDowns">
        <loading size="20px" class="loading" :color="loadingColor" text-color="#C8C9CC">
          <van-icon v-show="isShowArrow" :class="{ arrow: isArrow }" name="down" />
          {{ loadingText }}
        </loading>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import BScroll from '@better-scroll/core';
import PullUp from '@better-scroll/pull-up';
import PullDown from '@better-scroll/pull-down';
import { onMounted, ref, reactive, defineComponent } from 'vue';
import { Loading } from 'vant';
import emitter from '@/bus';
import type { IObj, IPosition } from './types/types';

BScroll.use(PullUp);
BScroll.use(PullDown);

export default defineComponent({
  name: 'scroll',
  props: {
    isPullDown: {
      type: Boolean,
      default: false
    },
    isScrollY: {
      type: Boolean,
      default: true
    },
    //是否是下拉加载
    isPullDowns: {
      type: Boolean,
      default: true
    }
  },
  emits: ['pullingUp', 'scrollXy', 'pullingDown', 'refreshed'],
  components: {
    Loading
  },
  setup(props, { emit }) {
    const wrapper = ref<HTMLElement>();
    const scroll = reactive<any[]>([]);
    const pullDownLoading = ref(false);
    const loadingColor = ref('#fff');
    const loadingText = ref('下拉刷新');
    const isArrow = ref(false);
    const isShowArrow = ref(true);
    //判断是否需要上拉刷新
    let obj: IObj | boolean = { threshold: 0, stop: 0 };
    if (props.isPullDown) {
      obj = {
        threshold: 50,
        stop: 50
      };
    } else {
      obj = false;
    }
    onMounted(() => {
      scroll[0] = new BScroll(wrapper.value as HTMLElement, {
        pullUpLoad: true,
        pullDownRefresh: obj as any,
        click: true,
        scrollY: props.isScrollY
      });
      //图片加载回调
      const debounces = () => {
        scroll[0].refresh();
      };
      emitter.on('imgLoad', debounce(debounces, 20, this));
      //监听下拉
      scroll[0].on('pullingUp', () => {
        emit('pullingUp');
        scroll[0].finishPullUp();
      });
      //监听上拉
      if (props.isPullDown) {
        if (props.isPullDowns) {
          scroll[0].on('pullingDown', () => {
            isShowArrow.value = false;
            loadingColor.value = '#C8C9CC';
            loadingText.value = '加载中';
            setTimeout(() => {
              pullDownLoading.value = false;
              emit('pullingDown');
              scroll[0].finishPullDown();
            }, 1000);
          });
          scroll[0].on('enterThreshold', () => {
            isShowArrow.value = true;
            loadingColor.value = '#fff';
            loadingText.value = '下拉刷新';
            isArrow.value = false;
          });
          scroll[0].on('leaveThreshold', () => {
            loadingText.value = '释放刷新';
            isArrow.value = true;
          });
        } else {
          scroll[0].on('pullingDown', () => {
            emit('pullingDown');
            scroll[0].finishPullDown();
          });
        }
      }
      //监听滚动坐标
      const positions = (position: IPosition) => {
        emit('scrollXy', position);
      };
      scroll[0].on('scroll', debounce(positions, 20, this));
      // scroll[0].on('scroll', positions)
    });
    //下拉停止
    const stopPullUp = () => {
      scroll[0].finishPullUp();
    };
    //滑动到指定位置
    const scrollToElement = (el: Element, time: number) => {
      scroll[0].scrollToElement(el, time);
    };
    //回到x y指定的距离
    const goXy = (x: number, y: number, time = 300) => {
      scroll[0].scrollTo(x, y, time);
    };
    //防抖函数
    function debounce(fn: any, delay = 50, obj: any) {
      let timer: any = null;
      return function (...args: any) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(obj, args);
        }, delay);
      };
    }
    return {
      scroll,
      wrapper,
      stopPullUp,
      goXy,
      loadingColor,
      loadingText,
      isArrow,
      isShowArrow,
      scrollToElement
    };
  }
});
</script>

<style scoped lang="scss">
.wrapper {
  overflow: hidden;
  .content {
    .box {
      height: 80px;
      line-height: 100px;
      text-align: center;
      color: #c8c9cc;
      font-size: 14px;
      position: absolute;
      left: 0;
      top: -70px;
      width: 100%;
      .arrow {
        transform: rotate(180deg);
      }
    }
    .loading {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
