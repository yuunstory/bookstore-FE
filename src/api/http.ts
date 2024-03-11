import axios, { AxiosRequestConfig } from 'axios';
import { getToken, removetoken } from '../store/authStore';

const BASE_URL = 'http://localhost:1225';
const DEFAULT_TIMEOUT = 60000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      'content-type': 'application/json',
      Authorization: getToken() ? getToken() : '',
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      console.log(error.response.status);
      // 로그인 만료 처리
      if (error.response.status === 401) {
        removetoken();
        // window.alert('로그인이 필요한 페이지입니다.');
        window.location.href = '/login';
        return;
      }
      return Promise.reject(error.response);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
