export interface IShopItem {
  homeBanner: any[];
  homeIntroductList: any[];
  homeLocationtList: any[];
  shopList: any[];
  category: any[];
  introductListisEnd: boolean;
  homeLocationtListisEnd: boolean;
  shopListisEnd: boolean;
  isLoading: boolean;
  locationCity: string;
  searchValue: string;
  categoryValue: string;
  positionY: number;
  signMap: any;
}

export interface IPayLoad {
  requestDataPost: string;
  requestDataGet: string;
  requestName: string;
}
