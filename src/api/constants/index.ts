import { fetchBaseQuery } from '@reduxjs/toolkit/query';

type BaseQueryProps = Parameters<typeof fetchBaseQuery>[0];

export const BASE_URL = 'http://tusur.ml:9080/api/v1/';

export const defaultFetchOptions: Partial<BaseQueryProps> = {
  credentials: 'include',
  mode: 'cors',
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('jwt');
    if (token) headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
};

export enum EEndpoints {
  login = 'auth/login',
  singUp = 'auth/registration',
  logout = 'auth/logout',
}
