import wqRequest from '../index';

enum publishGoodsApi {
  publishGoods = '/assistant/product/addProduct', //发布商品
  upLoadImg = '/assistant/product/uploadImg', //上传图片
  deleteGoods = '/assistant/product/remove' //删除发布商品
}

export function publishGoods(requestData: string) {
  return wqRequest.request({
    url: publishGoodsApi.publishGoods,
    method: 'post',
    data: requestData
  });
}

export function upLoadImg(requestData: any) {
  return wqRequest.request({
    url: publishGoodsApi.upLoadImg,
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: requestData
  });
}

export function deleteGoods(requestData: number) {
  return wqRequest.request({
    url: publishGoodsApi.deleteGoods,
    params: {
      pid: requestData
    }
  });
}
