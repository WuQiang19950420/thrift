//请求参数
export interface IRequestData {
  id: number;
  url: string;
}
//接受参数
export interface IShopDetail {
  code: number;
  data: string;
  msg: string;
  photo: string;
  signMap: ISignMap;
  userName: string;
  count: number;
  day: number;
  sellerCount: number;
}
export interface ISignMap {
  appId: string;
  jsapi_ticket: string;
  nonceStr: string;
  signature: string;
  timestamp: string;
}
export interface IResShopDetail {
  marketPrice: number;
  addedDate: AddedDate;
  color: string;
  city: string;
  imagePath: string;
  freightType: number;
  productName: string;
  freightMoney: number;
  isDeleted: number;
  lstUpdDate: LstUpdDate;
  id: number;
  productType: number;
  createDate: CreateDate;
  vistiCounts: number;
  address: string;
  quantity: number;
  salePrice: number;
  resv4: string;
  sellerFreight: number;
  resv5: string;
  weight: number;
  resv2: string;
  resv3: string;
  saleStatus: number;
  shortDescription: string;
  resv1: string;
  userId: number;
  volume: number;
  phone: string;
  brandId: number;
  auditStatus: number;
  categoryId: number;
  userName: string;
  photo: string;
}

type CreateDate = LstUpdDate;

export interface LstUpdDate {
  dayOfWeek: string;
  hour: number;
  month: string;
  dayOfMonth: number;
  dayOfYear: number;
  year: number;
  monthValue: number;
  nano: number;
  minute: number;
  second: number;
}

export interface AddedDate {
  dayOfWeek: string;
  month: string;
  dayOfMonth: number;
  dayOfYear: number;
  era: string;
  year: number;
  monthValue: number;
  chronology: Chronology;
  leapYear: boolean;
}

export interface Chronology {
  calendarType: string;
  id: string;
}
