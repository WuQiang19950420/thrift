<template>
  <article class="goods">
    <h4 class="goods-title">新鲜好物</h4>
    <!-- <goods-tags ref = "tagsEle" @tagsClick = "tagsClick"/> -->
    <goods />
  </article>
</template>

<script>
// import GoodsTags from './GoodsTags.vue'
import Goods from '@/views/common/goods/Goods.vue';

// import {onMounted,ref,nextTick,onDeactivated} from 'vue';
// import {useStore} from 'vuex';

export default {
  components: {
    //   GoodsTags,
    Goods
  },
  setup() {
    // //监听页面消失
    // const tagsEle = ref(null);
    // const store = useStore();
    // let offsetTop = '';
    // let offsetHeight = '';
    // const changeMessage = async newMessage => {
    //     await nextTick();
    //     offsetTop = tagsEle.value.$el.offsetTop; //获取元素到顶的高度
    //     offsetHeight = tagsEle.value.$el.offsetHeight;
    //     window.addEventListener("scroll", handleScroll);
    // };
    // function handleScroll(){
    //     const scrollTop = window.pageYOffset;
    //     // 判断页面滚动的距离是否大于吸顶元素的位置
    //     if(scrollTop > offsetTop - 26 - offsetHeight){
    //         store.commit('setHomeTagBoole',true);
    //     }else{
    //         store.commit('setHomeTagBoole',false);
    //     }
    // };
    // onMounted(() => {
    //     changeMessage();
    // })
    // onDeactivated(() => {
    //     window.removeEventListener("scroll");
    // })
    // //父组件使用传递监听事件
    // let tagsIndex = ref(0);
    // const tagsClick = index => {
    //     tagsIndex.value = index;
    // };
    return {
      // tagsEle,
      // tagsClick,
      // tagsIndex
    };
  }
};
</script>

<style lang="scss" scoped>
.goods {
  .goods-title {
    margin: 0 0 20px 10px;
  }
}
</style>
