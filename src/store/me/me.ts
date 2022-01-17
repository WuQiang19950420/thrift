import { Module } from 'vuex';
import type { IRootState } from '@/store/type';
import { IMe } from './type';
import { getUserData } from '@/service/me/me';

export const me: Module<IMe, IRootState> = {
  namespaced: true,
  state() {
    return {
      userData: {}
    };
  },
  mutations: {
    changeUserData(state, userData) {
      state.userData = [];
      state.userData = userData;
    },
    changeUserDataAmt(state, amt) {
      state.userData.amt = (state.userData.amt - amt).toFixed(2);
    }
  },
  actions: {
    async getUserDatas({ commit }) {
      const userData = await getUserData();
      commit('changeUserData', userData);
    }
  }
};
