import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TJwt, TLogin, TSingUp } from '../types/form/auth';
import { defaultFetchOptions, EEndpoints } from './constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ ...defaultFetchOptions }),
  endpoints: (builder) => ({
    singUp: builder.mutation<TJwt, TSingUp>({
      // TODO: remove any
      query: (body) => ({
        url: EEndpoints.login,
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<TJwt, Omit<TLogin, 'remember'>>({
      // TODO: remove any
      query: (body) => ({
        url: EEndpoints.login,
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: EEndpoints.logout,
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useSingUpMutation, useLogoutMutation } = authApi;
