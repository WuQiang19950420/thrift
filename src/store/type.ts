import { IShopDetail } from './shopDetail/type';
import { IAllBuySell } from './order/type';
import { IAddress } from './address/type';
import { IShopItem } from './shopItem/type';
import { ICollect } from './collect/type';
import { IClassifyState } from './classify/type';
import { IMessage } from './message/type';
import { IMe } from './me/type';
export interface IRootState {
  publishShow: boolean;
  homeTagBoole: boolean;
  tabBarHeight: number;
  phoneHeight: number;
  homeTopBar: number;
}

//定义module接口
export interface IRootWithModule {
  shopDetail: IShopDetail;
  allBuySell: IAllBuySell;
  address: IAddress;
  shopItem: IShopItem;
  order: IAllBuySell;
  collect: ICollect;
  classify: IClassifyState;
  message: IMessage;
  me: IMe;
}

export type IRootAllType = IRootState & IRootWithModule; //把2个接口绑定到一起
