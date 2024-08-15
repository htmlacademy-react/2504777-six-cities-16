import axios, {AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse} from 'axios';
import { StatusCodeMapping, ApiDefault } from './const';
import { getToken } from './token';
// import { processErrorHandle } from './process-error-handle';

// type DetailMessageType = {
//   type: string;
//   message: string;
// }

// const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ApiDefault.ServerUrl as string,
    timeout: ApiDefault.RequestTimeout as number,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    },
  );

  // api.interceptors.response.use(
  //   (response) => response,
  //   (error: AxiosError<DetailMessageType>) => {
  //     if (error.response && shouldDisplayError(error.response)) {
  //       const detailMessage = (error.response.data);

  //       processErrorHandle(detailMessage.message);
  //     }

  //     throw error;
  //   }
  // );

  return api;
};


