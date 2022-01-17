import wqRequest from '../index';

enum msgAPI {
  getMsgList = '/assistant/getMsgList', //获取消息列表
  getMsg = '/assistant/getMessage', //获取消息
  sendMsg = '/assistant/sendMessage' //发布消息
}

export function getMsgList(requestData: any) {
  return wqRequest.request({
    url: msgAPI.getMsgList,
    data: requestData,
    method: 'post'
  });
}

export function getMsg(requestData: string) {
  return wqRequest.request({
    url: msgAPI.getMsg,
    data: requestData,
    method: 'post'
  });
}

export function sendMsg(requestData: string) {
  return wqRequest.request({
    url: msgAPI.sendMsg,
    data: requestData,
    method: 'post'
  });
}
