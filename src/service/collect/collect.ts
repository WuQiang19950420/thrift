import wqRequest from '../index';

enum collectApi {
  queryCollection = '/assistant/collection/query', //获取收藏
  saveCancelCollection = '/assistant/collection/save' //取消 收藏
}

export function queryCollection(requestData: string) {
  return wqRequest.request({
    url: collectApi.queryCollection,
    data: requestData,
    method: 'post'
  });
}

export function saveCancelCollection(requestData: string) {
  return wqRequest.request({
    url: collectApi.saveCancelCollection,
    data: requestData,
    method: 'post'
  });
}
