import { fetchBaseQuery } from '@reduxjs/toolkit/query';

type BaseQueryProps = Parameters<typeof fetchBaseQuery>[0];

export const BASE_URL = 'http://tusur.ml:9080/api/v1/';

export const defaultFetchOptions: Partial<BaseQueryProps> = {
  mode: 'cors',
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('jwt');
    if (token) headers.set('Authorization', `Bearer ${token}`);
    headers.set('Accept', 'application/json');
    return headers;
  },
};

export enum EEndpointsAuth {
  login = 'auth/login',
  currentUser = 'auth/user',
  singUp = 'auth/registration',
  logout = 'auth/logout',
}

export enum EEndpointsCompanies {
  base = 'companies',
}
