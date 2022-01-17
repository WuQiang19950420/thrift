import { Module } from 'vuex';
import type { IRootState } from '@/store/type';
import type { ICollect } from './type';
import { queryCollection } from '@/service/collect/collect';
export const collect: Module<ICollect, IRootState> = {
  namespaced: true,
  state() {
    return {
      collectItem: [],
      isEnd: false,
      isLoading: false
    };
  },
  mutations: {
    changeCollectItem(state, collectItem: any[]) {
      state.collectItem = collectItem;
    },
    concatCollectItem(state, collectItem: any[]) {
      state.collectItem = state.collectItem.concat(collectItem);
    },
    clearCollectItem(state) {
      state.collectItem = [];
    },
    changeIsEnd(state, isEnd: boolean) {
      state.isEnd = isEnd;
    },
    changeIsLoading(state, payLoad: boolean) {
      state.isLoading = payLoad;
    },
    deleteCollectItem(state, collectItemIndex: number) {
      state.collectItem.splice(collectItemIndex, 1);
    }
  },
  actions: {
    async getCollectItemData({ commit }, payLoad: string) {
      commit('clearCollectItem');
      commit('changeIsLoading', true);
      const { data } = await queryCollection(payLoad);
      commit('changeCollectItem', JSON.parse(data));
      if (JSON.parse(data).length < 10) commit('changeIsEnd', true);
      commit('changeIsLoading', false);
    },
    async getCollectItemList({ commit }, payLoad: string) {
      const { data } = await queryCollection(payLoad);
      //判断请求的商品数据是否为空，修改isEed值
      if (JSON.parse(data).length === 0) {
        commit('changeIsEnd', true);
      } else if (JSON.parse(data).length > 0 && JSON.parse(data).length < 10) {
        commit('changeIsEnd', true);
        commit('concatCollectItem', JSON.parse(data));
      } else {
        commit('changeIsEnd', false);
        commit('concatCollectItem', JSON.parse(data));
      }
    }
  }
};
