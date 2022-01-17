import type { Module } from 'vuex';
import type { IRootState } from '../type';
import type { IShopItem, IPayLoad } from './type';
import { getHomeShopItem, getSearchShopItem } from '@/service/shopItem/shopItem';

export const shopItem: Module<IShopItem, IRootState> = {
  namespaced: true,
  state() {
    return {
      homeBanner: [],
      homeIntroductList: [], //存放推荐页面的商品
      homeLocationtList: [], //存放地址页面的商品
      shopList: [], //存放搜索和banner的商品
      category: [],
      locationCity: '', //地址页面的地区
      introductListisEnd: false,
      homeLocationtListisEnd: false,
      shopListisEnd: false,
      isLoading: false,
      searchValue: '', //搜索的内容,
      categoryValue: '',
      positionY: 0, //记录滚动距离
      signMap: {}
    };
  },
  mutations: {
    changeHomeBanner(state, homeBanner: any[]) {
      state.homeBanner = homeBanner;
    },
    deleteHomeIntroductData(state) {
      state.homeIntroductList = [];
    },
    deleteHomeLocationtData(state) {
      state.homeLocationtList = [];
    },
    deleteShopList(state) {
      state.shopList = [];
    },
    changeHomeIntroductData(state, homeIntroductList: any[]) {
      state.homeIntroductList = homeIntroductList;
    },
    changeHomeLocationtData(state, homeLocationtList: any[]) {
      state.homeLocationtList = homeLocationtList;
    },
    changeShopListData(state, shopList: any[]) {
      state.shopList = shopList;
    },
    changeHomeCategory(state, category: any[]) {
      if (category.length < 10 && category.length > 0) {
        state.category = category;
      } else {
        state.category = category.splice(0, 9);
      }
      state.category[state.category.length] = {
        categoryName: '所有分类',
        imagePath: require('@/assets/image/home/category.png'),
        isAll: true
      };
    },
    concatHomeIntroductList(state, homeIntroductList: any[]) {
      state.homeIntroductList = state.homeIntroductList.concat(homeIntroductList);
    },
    concatHomeLocationtList(state, homeLocationtList: any[]) {
      state.homeLocationtList = state.homeLocationtList.concat(homeLocationtList);
    },
    concatShopList(state, shopList: any[]) {
      state.shopList = state.shopList.concat(shopList);
    },
    changeIntroductListisEnd(state, introductListisEnd: boolean) {
      state.introductListisEnd = introductListisEnd;
    },
    changeHomeLocationtListisEnd(state, homeLocationtListisEnd: boolean) {
      state.homeLocationtListisEnd = homeLocationtListisEnd;
    },
    changeShopListisEnd(state, shopListisEnd: boolean) {
      state.shopListisEnd = shopListisEnd;
    },
    changeIsLoading(state, payLoad) {
      state.isLoading = payLoad;
    },
    changeLocationCity(state, locationCity: string) {
      state.locationCity = locationCity;
    },
    changeSearchValue(state, search: string) {
      state.searchValue = search;
    },
    changeCategoryValue(state, categoryValue: string) {
      state.categoryValue = categoryValue;
    },
    setPositionY(state, payLoad) {
      state.positionY = payLoad;
    },
    changeSignMap(state, payLoad) {
      state.signMap = payLoad;
    }
  },
  actions: {
    async getShopItemData({ commit }, payLoad: IPayLoad) {
      commit('changeIsLoading', true);
      if (payLoad.requestName === 'homeIntroduct') {
        commit('changeIntroductListisEnd', false);
        commit('deleteHomeIntroductData');
        const { banner, category, data, signMap } = await getHomeShopItem(payLoad.requestDataPost);
        commit('changeHomeBanner', JSON.parse(banner));
        commit('changeHomeIntroductData', JSON.parse(data));
        commit('changeHomeCategory', JSON.parse(category));
        commit('changeSignMap', signMap);
      } else if (payLoad.requestName === 'homeLocation') {
        commit('changeHomeLocationtListisEnd', false);
        commit('deleteHomeLocationtData');
        const { data } = await getSearchShopItem(payLoad.requestDataPost);
        if (JSON.parse(data).length === 0) {
          commit('changeHomeLocationtListisEnd', true);
        } else if (JSON.parse(data).length > 0 || JSON.parse(data).length < 10) {
          commit('changeHomeLocationtListisEnd', true);
          commit('changeHomeLocationtData', JSON.parse(data));
        } else {
          commit('changeHomeLocationtData', JSON.parse(data));
        }
      } else {
        commit('deleteShopList');
        commit('changeShopListisEnd', false);
        const { requestDataPost, requestName } = payLoad;
        const isCategory = requestName === 'category';
        const { data } = await (isCategory ? getHomeShopItem : getSearchShopItem)(requestDataPost);
        if (JSON.parse(data).length === 0) {
          commit('changeShopListisEnd', true);
        } else if (JSON.parse(data).length > 0 && JSON.parse(data).length < 10) {
          commit('changeShopListisEnd', true);
          commit('changeShopListData', JSON.parse(data));
        } else {
          commit('changeShopListData', JSON.parse(data));
        }
      }
      commit('changeIsLoading', false);
    },
    //下拉加载请求
    async getShopItemList({ commit }, payLoad: IPayLoad) {
      if (payLoad.requestName === 'homeIntroduct') {
        const { data } = await getHomeShopItem(payLoad.requestDataPost);
        //判断请求的商品数据是否为空，修改isEed值
        if (JSON.parse(data).length === 0) {
          commit('changeIntroductListisEnd', true);
        } else {
          commit('concatHomeIntroductList', JSON.parse(data));
        }
      } else if (payLoad.requestName === 'homeLocation') {
        const { data } = await getSearchShopItem(payLoad.requestDataPost);
        //判断请求的商品数据是否为空，修改isEed值
        if (JSON.parse(data).length === 0) {
          commit('changeHomeLocationtListisEnd', true);
        } else {
          commit('concatHomeLocationtList', JSON.parse(data));
        }
      } else if (payLoad.requestName === 'category') {
        const { data } = await getHomeShopItem(payLoad.requestDataPost);
        //判断请求的商品数据是否为空，修改isEed值
        if (JSON.parse(data).length === 0) {
          commit('changeShopListisEnd', true);
        } else {
          commit('concatShopList', JSON.parse(data));
        }
      } else {
        const { data } = await getSearchShopItem(payLoad.requestDataPost);
        //判断请求的商品数据是否为空，修改isEed值
        if (JSON.parse(data).length === 0) {
          commit('changeShopListisEnd', true);
        } else {
          commit('concatShopList', JSON.parse(data));
        }
      }
    }
  }
};
