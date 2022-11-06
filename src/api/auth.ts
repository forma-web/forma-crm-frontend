import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TLogin, TSingUp } from '../types/forms/auth';
import { TUser } from '../types/forms/user';
import transformData from '../utils/transformData';
import { defaultFetchOptions, EEndpointsAuth } from './constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ ...defaultFetchOptions() }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    singUp: builder.mutation<TUser, TSingUp>({
      query: (body) => ({
        url: EEndpointsAuth.singUp,
        method: 'POST',
        body,
      }),
      transformResponse: transformData<TUser>,
    }),
    login: builder.mutation<TUser, Omit<TLogin, 'remember'>>({
      query: (body) => ({
        url: EEndpointsAuth.login,
        method: 'POST',
        body,
      }),
      transformResponse: transformData<TUser>,
    }),
    logout: builder.mutation({
      query: () => ({
        url: EEndpointsAuth.logout,
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useSingUpMutation, useLogoutMutation } = authApi;
