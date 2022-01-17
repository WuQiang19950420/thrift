import wqRequest from '../index';

//统一获取商品
enum shopItemAPI {
  homeShopItem = '/assistant/product/init' //查询首页的商品
}
export function getShopDetailData() {
  return wqRequest.request({
    url: shopItemAPI.homeShopItem
  });
}
