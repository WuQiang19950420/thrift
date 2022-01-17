import type { AxiosResponse, AxiosRequestConfig } from 'axios'; //导入axios定义的接口

export interface WQRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (config: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}
export interface WQRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  //继承axios的配置，添加自己的配置
  interceptors?: WQRequestInterceptors<T>;
  showLoading?: boolean;
}
