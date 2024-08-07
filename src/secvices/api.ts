import axios, {AxiosInstance} from 'axios';
import { SERVER_URL, REQUEST_TIMEOUT } from '../const';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: SERVER_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
