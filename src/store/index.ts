import { createStore, useStore as useVuexStore, Store } from 'vuex';
import type { IRootState, IRootAllType } from './type';
import createPersistedState from 'vuex-persistedstate';
import { order } from './order/order';
import { address } from './address/address';
import { shopDetail } from './shopDetail/shopDetail';
import { shopItem } from './shopItem/shopItem';
import { collect } from './collect/collect';
import { classify } from './classify/classify';
import { message } from './message/message';
import { me } from './me/me';
const store = createStore<IRootState>({
  state: {
    publishShow: false,
    homeTagBoole: false,
    tabBarHeight: 0,
    phoneHeight: 0,
    homeTopBar: 0
  },
  mutations: {
    //修改发布元素的值
    setPublishdData(state, payload: boolean) {
      state.publishShow = payload;
    },
    //修改tag吸顶的值
    setHomeTagBoole(state, payLoad) {
      state.homeTagBoole = payLoad;
    },
    setHomeTopBar(state, payLoad) {
      state.homeTopBar = payLoad;
    },
    //获取tabBar的高度
    getTabBarHeight(state, payLoad) {
      state.tabBarHeight = payLoad;
    },
    //获取innerheight
    getInnerHeight(state, payLoad) {
      state.phoneHeight = payLoad;
    }
  },
  modules: {
    shopDetail,
    order,
    address,
    shopItem,
    collect,
    classify,
    message,
    me
  },
  /* vuex数据持久化配置 */
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer(val) {
        const vals = val as IRootAllType;
        return {
          publishShow: vals.publishShow,
          homeTagBoole: vals.homeTagBoole,
          tabBarHeight: vals.tabBarHeight,
          phoneHeight: vals.phoneHeight,
          shopDetail: vals.shopDetail,
          address: vals.address,
          homeTopBar: vals.homeTopBar,
          shopItem: vals.shopItem,
          classify: vals.classify
        };
      }
    })
  ]
});

export function useStore(): Store<IRootAllType> {
  return useVuexStore();
}
export default store;
