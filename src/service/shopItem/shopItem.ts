import wqRequest from '../index';
//获取所有商品的接口
enum shopItemAPI {
  homeShopItem = '/assistant/product/init', //获取首页商品和banner商品
  searchShopItem = '/assistant/product/condition' //获取搜索商品和地区商品
}
export function getHomeShopItem(requestData: string) {
  return wqRequest.request({
    url: shopItemAPI.homeShopItem,
    method: 'post',
    data: requestData
  });
}
export function getSearchShopItem(requestData: string) {
  return wqRequest.request({
    url: shopItemAPI.searchShopItem,
    method: 'post',
    data: requestData
  });
}
