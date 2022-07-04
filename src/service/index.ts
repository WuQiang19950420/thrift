import WQRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';
import { Toast } from 'vant';

const wqRequest = new WQRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token');
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      if (res.data.code === -2) {
        Toast('登录失效,正在跳转');
        setTimeout(() => {
          window.location.href = 'https://www.shinetoola.com';
        }, 1000);
      }
      return res;
    },
    responseInterceptorCatch: (err) => {
      if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
        Toast('请求失败,请检查网络连接');
      }
      return err;
    }
  }
});
export default wqRequest;
