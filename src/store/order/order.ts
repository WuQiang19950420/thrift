import type { Module } from 'vuex';
import type { IRootState } from '../type';
import type { IAllBuySell } from './type';
import { getAllBuySell, queryMeInput } from '@/service/order/order';
import type { IRequestAllBuySellData } from '@/service/order/type';
export const order: Module<IAllBuySell, IRootState> = {
  namespaced: true,
  state() {
    return {
      AllBuySellData: [],
      isEnd: false,
      isLoading: false
    };
  },
  mutations: {
    changeAllBuySellData(state, AllBuySellData: any[]) {
      state.AllBuySellData = AllBuySellData;
    },
    clearAllBuySellData(state) {
      state.AllBuySellData = [];
    },
    concatAllBuySellData(state, AllBuySellData: any[]) {
      state.AllBuySellData = state.AllBuySellData.concat(AllBuySellData);
    },
    changeIsEnd(state, isEnd: boolean) {
      state.isEnd = isEnd;
    },
    changeIsLoading(state, payLoad: boolean) {
      state.isLoading = payLoad;
    },
    deleteAllBuySellData(state, index: number) {
      state.AllBuySellData.splice(index, 1);
    },
    //修改订单状态 orderItemIndex 订单下标值
    changeOrderStatus(state, orderItem: any[]) {
      state.AllBuySellData[orderItem[0]].orderStatus = orderItem[1];
    },
    changeOrderIsDeliver(state, orderItem: any[]) {
      state.AllBuySellData[orderItem[0]].isShipping = orderItem[1];
    },
    changeOrderPaymentState(state, orderItem: any[]) {
      state.AllBuySellData[orderItem[0]].paymentStatus = orderItem[1];
    }
  },
  actions: {
    async getAllBuySellData({ commit }, payLoad: IRequestAllBuySellData) {
      commit('clearAllBuySellData');
      commit('changeIsLoading', true);
      const { data } = await getAllBuySell(payLoad);
      if (JSON.parse(data).length === 0) {
        commit('changeIsEnd', true);
      } else if (JSON.parse(data).length > 0 && JSON.parse(data).length < 10) {
        commit('changeIsEnd', true);
        commit('changeAllBuySellData', JSON.parse(data));
      } else {
        commit('changeAllBuySellData', JSON.parse(data));
      }
      commit('changeIsLoading', false);
    },
    async getInputData({ commit }, payLoad: IRequestAllBuySellData) {
      commit('clearAllBuySellData');
      commit('changeIsLoading', true);
      const { data } = await queryMeInput(payLoad);
      if (JSON.parse(data).length === 0) {
        commit('changeIsEnd', true);
      } else if (JSON.parse(data).length > 0 && JSON.parse(data).length < 10) {
        commit('changeIsEnd', true);
        commit('changeAllBuySellData', JSON.parse(data));
      } else {
        commit('changeAllBuySellData', JSON.parse(data));
      }
      commit('changeIsLoading', false);
    },
    async getInputDataList({ commit }, payLoad: IRequestAllBuySellData) {
      const { data } = await queryMeInput(payLoad);
      //判断请求的商品数据是否为空，修改isEed值
      if (JSON.parse(data).length === 0) {
        commit('changeIsEnd', true);
      } else {
        commit('changeIsEnd', false);
        commit('concatAllBuySellData', JSON.parse(data));
      }
    },
    async getAllBuySellList({ commit }, payLoad: IRequestAllBuySellData) {
      const { data } = await getAllBuySell(payLoad);
      //判断请求的商品数据是否为空，修改isEed值
      if (JSON.parse(data).length === 0) {
        commit('changeIsEnd', true);
      } else {
        commit('changeIsEnd', false);
        commit('concatAllBuySellData', JSON.parse(data));
      }
    }
  }
};
