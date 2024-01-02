import { API_URL } from '@/config';
import storage from '@/utils/storage';
import Axios, { InternalAxiosRequestConfig } from 'axios';
// import { useNotificationStore } from '@/stores/notifications';

const setAuthorizationHeader = (
  config: InternalAxiosRequestConfig<unknown>,
) => {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
};

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(
  (config) => {
    config.headers.Accept = 'application/json';
    setAuthorizationHeader(config);
    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // TODO
    // const message = error.response?.data?.message || error.message;
    // useNotificationStore.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });

    return Promise.reject(error);
  },
);
