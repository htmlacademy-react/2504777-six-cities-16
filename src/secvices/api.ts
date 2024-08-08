import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import { SERVER_URL, REQUEST_TIMEOUT } from '../const';
import { getToken } from './token';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: SERVER_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};


