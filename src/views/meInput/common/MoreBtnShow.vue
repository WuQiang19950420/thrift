<template>
  <article class="more-btn-show">
    <section class="more-btn-item" v-for="(item, index) in moreBtn" :key="index" @click="allBtnClk(index)">
      <span>{{ item }}</span>
    </section>
  </article>
</template>

<script>
import { Dialog } from 'vant';
import { deleteGoods } from '@/service/publishGoods/publishGoods';
import { useStore } from '@/store';
import { Toast } from 'vant';
export default {
  emits: ['closeAllBtn'],
  //1 发布商品数组下标值 2 商品的id
  props: {
    idList: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const moreBtn = ['删除', '取消'];
    const store = useStore();
    const notice = (msg, act) => {
      Dialog.confirm({
        message: msg,
        confirmButtonColor: '2A89FA'
      }).then(() => {
        act();
      });
    };
    const allBtnClk = (index) => {
      switch (index) {
        case 0: {
          const deleteShop = async () => {
            const res = await deleteGoods(props.idList[1]);
            if (res.code === 1) {
              Toast('删除成功');
              store.commit('order/deleteAllBuySellData', props.idList[0]);
            } else {
              Toast('删除失败');
            }
          };
          notice('确定要删除吗?', deleteShop);
          emit('closeAllBtn');
          break;
        }
        case 1: {
          emit('closeAllBtn');
          break;
        }
      }
    };
    return {
      moreBtn,
      allBtnClk
    };
  }
};
</script>

<style lang="scss" scoped>
.more-btn-show {
  .more-btn-item {
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
}
</style>
