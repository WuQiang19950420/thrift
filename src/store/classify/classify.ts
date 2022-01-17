import type { Module } from 'vuex';
import type { IRootState } from '../type';
import type { IClassifyState } from './type';
import { queryCollection, queryBrand } from '@/service/classify/classify';
export const classify: Module<IClassifyState, IRootState> = {
  namespaced: true,
  state() {
    return {
      classifyItem: [],
      brandItem: [],
      options: []
    };
  },
  mutations: {
    changeClassifyItem(state, addressItem: any[]) {
      state.options = [];
      state.classifyItem = addressItem;
      for (let i = 0; i < addressItem.length; i++) {
        state.options.push({
          text: addressItem[i].categoryName,
          value: addressItem[i].id,
          children: []
        });
      }
    },
    changeClassifySecondItem(state, payLoad: any[]) {
      state.classifyItem[payLoad[1]].children = payLoad[0];
      for (let i = 0; i < payLoad[0].length; i++) {
        state.options[payLoad[1]].children.push({
          text: payLoad[0][i].categoryName,
          value: payLoad[0][i].id
        });
      }
    },
    changeBrandItem(state, brandItem: any[]) {
      state.brandItem = brandItem;
    }
  },
  actions: {
    async getClassifyItem({ commit }) {
      const { data } = await queryCollection(undefined);
      commit('changeClassifyItem', JSON.parse(data));
      JSON.parse(data).forEach(async (item: any, index: number) => {
        const { data } = await queryCollection(item.id);
        commit('changeClassifySecondItem', [JSON.parse(data), index]);
      });
    },
    async getBrandItem({ commit }) {
      const { data } = await queryBrand();
      commit('changeBrandItem', JSON.parse(data));
    }
  }
};
