import axios from 'axios';
import type { AxiosInstance } from 'axios'; //导入axios定义的接口
import type { WQRequestInterceptors, WQRequestConfig } from './type'; //导入自己增强的接口

const DEFAULT_LOADING = true;
//创建一个类
class WQRequest {
  //类的属性
  instance: AxiosInstance;
  interceptors?: WQRequestInterceptors; //?符号是可选类型
  showLoading: boolean;
  //构造器
  constructor(config: WQRequestConfig) {
    this.instance = axios.create(config); //每次创建axios实例保存到属性中
    this.interceptors = config.interceptors; //保存axios实例里的构造器方法
    this.showLoading = config.showLoading ?? DEFAULT_LOADING; //保存showLoading ？？默认true
    this.instance.interceptors.request.use(
      //保存axios请求拦截
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      //保存axios响应拦截
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    //添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  //单独的请求
  request<T = any>(config: WQRequestConfig<T>): Promise<T> {
    return new Promise((reslove, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      if (config.showLoading === !DEFAULT_LOADING) {
        this.showLoading = config.showLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          reslove(res);
          this.showLoading = DEFAULT_LOADING;
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING;
          reject(err);
        });
    });
  }
}

export default WQRequest;
