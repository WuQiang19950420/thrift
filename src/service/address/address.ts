import wqRequest from '../index';

enum addressApi {
  getAddress = '/assistant/address/detail', //获取用户所有地址
  setAddress = '/assistant/address/saveAddress', //保存用户地址
  deleteAddress = '/assistant/address/delAddress' //删除地址
}

export function getAddress() {
  return wqRequest.request({
    url: addressApi.getAddress
  });
}
export function setAddress(requestData: string) {
  return wqRequest.request({
    url: addressApi.setAddress,
    method: 'post',
    data: requestData
  });
}
export function deleteAddress(requestData: string) {
  return wqRequest.request({
    url: addressApi.deleteAddress,
    method: 'post',
    data: requestData
  });
}
