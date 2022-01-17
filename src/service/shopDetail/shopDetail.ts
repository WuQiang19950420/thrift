import wqRequest from '../index';
import type { IRequestData, IShopDetail } from './type';

enum homeAPI {
  shopDetailData = '/assistant/product/detail'
}
export function getShopDetailData(data: IRequestData) {
  return wqRequest.request<IShopDetail>({
    url: homeAPI.shopDetailData,
    params: {
      id: data.id,
      currentUrl: data.url
    }
  });
}
