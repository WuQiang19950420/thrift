import type { Module } from 'vuex';
import type { IRootState } from '../type';
import type { IAddress } from './type';
import { getAddress } from '@/service/address/address';
export const address: Module<IAddress, IRootState> = {
  namespaced: true,
  state() {
    return {
      addressItem: [],
      isLoading: false
    };
  },
  mutations: {
    changeAddressItem(state, addressItem: any[]) {
      state.addressItem = addressItem;
    },
    changeIsLoading(state, isLoading: boolean) {
      state.isLoading = isLoading;
    }
  },
  actions: {
    async getAddressItem({ commit }) {
      commit('changeIsLoading', true);
      const { address } = await getAddress();
      commit('changeAddressItem', JSON.parse(address));
      commit('changeIsLoading', false);
    }
  }
};
