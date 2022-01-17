import wqRequest from '../index';
import type { IRequestAllBuySellData } from './type';
enum orderAPI {
  placeOrder = '/assistant/order/create', //下单
  getOrderItem = '/assistant/order/query', //获取订单列表
  cancelOrder = '/assistant/order/removeOrder', //取消订单
  payAgain = '/assistant/order/payAgain', //重新支付
  confirmGoods = '/assistant/order/harvestOrder', //确认收货
  agreeRefund = '/assistant/order/refund', //同意退款
  applyRefund = '/assistant/order/applyRefund', //申请退款
  meInput = '/assistant/product/product', //获取发布的商品
  setMeInput = '/assistant/product/editProduct', //修改发布的商品
  cash = '/assistant/amt/cash', //用户提现
  sellRefus = '/assistant/order/refuse', //卖家拒绝退款
  sellRefund = '/assistant/order/refund', //卖家同意退款
  sellDeliver = '/assistant/order/deliver' //卖家发货
}
export function placeOrder(requestData: string) {
  return wqRequest.request({
    url: orderAPI.placeOrder,
    data: requestData,
    method: 'post'
  });
}

export function getAllBuySell(data: IRequestAllBuySellData) {
  return wqRequest.request({
    url: orderAPI.getOrderItem,
    method: 'get',
    params: {
      currentPage: data.currentPage,
      pageSize: data.pageSize,
      type: data.type
    }
  });
}

export function cancelOrder(requestData: string) {
  return wqRequest.request({
    url: orderAPI.cancelOrder,
    method: 'post',
    data: requestData
  });
}

export function payAgain(requestData: string) {
  return wqRequest.request({
    url: orderAPI.payAgain,
    method: 'post',
    data: requestData
  });
}

export function confirmGoods(requestData: string) {
  return wqRequest.request({
    url: orderAPI.confirmGoods,
    method: 'post',
    data: requestData
  });
}

export function applyRefund(requestData: string) {
  return wqRequest.request({
    url: orderAPI.applyRefund,
    method: 'post',
    data: requestData
  });
}

export function agreeRefund(requestData: string) {
  return wqRequest.request({
    url: orderAPI.agreeRefund,
    method: 'post',
    data: requestData
  });
}

export function queryMeInput(requestData: any) {
  return wqRequest.request({
    url: orderAPI.meInput,
    params: {
      currentPage: requestData.currentPage,
      pageSize: requestData.pageSize
    }
  });
}
export function setMeInput(requestData: string) {
  return wqRequest.request({
    url: orderAPI.setMeInput,
    method: 'post',
    data: requestData
  });
}
export function cash(requestData: string) {
  return wqRequest.request({
    url: orderAPI.cash,
    method: 'post',
    data: requestData
  });
}
export function sellRefus(requestData: string) {
  return wqRequest.request({
    url: orderAPI.sellRefus,
    method: 'post',
    data: requestData
  });
}

export function sellRefund(requestData: string) {
  return wqRequest.request({
    url: orderAPI.sellRefund,
    method: 'post',
    data: requestData
  });
}

export function sellDeliver(requestData: string) {
  return wqRequest.request({
    url: orderAPI.sellDeliver,
    method: 'post',
    data: requestData
  });
}
