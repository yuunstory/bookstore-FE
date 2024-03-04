import axios, { AxiosRequestConfig } from 'axios';
import { getToken, removetoken } from '../store/authStore';

const BASE_URL = 'http://localhost:1225';
const DEFAULT_TIMEOUT = 30000;

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
      return response;
    },
    (error) => {
      if (error.response) {
        // 로그인 만료 처리
        if (error.response.status === 401) {
          removetoken();
          window.location.href = '/login';
          return;
        }
        return Promise.reject(error.response);
      } else if (error.request) {
        console.error('서버 응답 없음:', error.request);
      } else {
        console.error('요청 설정 오류:', error.message);
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
