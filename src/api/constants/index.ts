import { fetchBaseQuery } from '@reduxjs/toolkit/query';

type BaseQueryProps = Parameters<typeof fetchBaseQuery>[0];

export const BASE_URL = 'http://ch-tours.ru:8080/api/v1/';

export const defaultFetchOptions: Partial<BaseQueryProps> = {
  credentials: 'include',
  mode: 'cors',
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Bearer ${localStorage.getItem('jwt')}`);
    return headers;
  },
};

export enum EEndpoints {
  login = 'auth/login',
  logout = 'auth/logout',
}
