// axios封装
import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { handleErrStatus } from './errorStatus';
// 创建axios实例
const instance: AxiosInstance = axios.create({
  baseURL: 'http://adAdmin/api/v1/',
  timeout: 10000,
  // 跨域请求是否需要携带cookie
  withCredentials: false
});

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token') as string;
    config.headers.Authorization = token;
    return config;
  });

// 响应拦截器
instance.interceptors.response.use((response: AxiosResponse) => {
  const { code, data } = response.data;
  if (code === 0) {
    return data;
  }
}, error => {
  const { status } = error.response;
  const errorMessage = handleErrStatus(status);
  return Promise.reject(errorMessage);
});

export default instance;