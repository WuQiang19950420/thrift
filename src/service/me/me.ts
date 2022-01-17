import wqRequest from '../index';

enum meApi {
  getUserData = '/assistant/member'
}

export function getUserData() {
  return wqRequest.request({
    url: meApi.getUserData
  });
}
