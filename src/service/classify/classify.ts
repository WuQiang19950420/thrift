import wqRequest from '../index';
import type { IClassify } from './type';

enum classify {
  queryClassify = '/assistant/category/category', // 一级分类和二级分类
  queryBrand = '/assistant/brand/query' //品牌分类
}

export function queryCollection(requestData: number | undefined) {
  return wqRequest.request({
    url: classify.queryClassify,
    method: 'get',
    params: {
      id: requestData
    }
  });
}
export function queryBrand() {
  return wqRequest.request({
    url: classify.queryBrand
  });
}
