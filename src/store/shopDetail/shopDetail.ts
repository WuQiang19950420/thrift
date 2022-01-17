import { Module } from 'vuex';
import type { IShopDetail } from './type';
import type { IRootState } from '../type';
import { getShopDetailData } from '@/service/shopDetail/shopDetail';

export const shopDetail: Module<IShopDetail, IRootState> = {
  namespaced: true,
  state() {
    return {
      shopDetail: {},
      signMap: {},
      isLoading: true,
      goodsId: 0
    };
  },
  mutations: {
    changeShopDetail(state, shopDetail: any) {
      state.shopDetail = shopDetail;
    },
    changesignMap(state, signMap: any) {
      state.signMap = signMap;
    },
    changIsLoading(state, payload: boolean) {
      state.isLoading = payload;
    },
    changeGoodsId(state, goodsId: number) {
      state.goodsId = goodsId;
    }
  },
  actions: {
    async getShopDetail({ commit }, payload) {
      commit('changIsLoading', true);
      const searchData = await getShopDetailData(payload);
      const { data, photo, userName, count, day, sellerCount } = searchData;
      const datas = JSON.parse(data);
      datas.photo = photo;
      datas.userName = userName;
      datas.day = day;
      datas.count = count;
      datas.sellerCount = sellerCount;
      commit('changeShopDetail', datas);
      commit('changIsLoading', false);
    }
  }
};
