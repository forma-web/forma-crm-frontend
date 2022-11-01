import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TLogin, TSingUp } from '../types/forms/auth';
import { TUserData } from '../types/forms/user';
import getUserData from '../utils/getUserData';
import { defaultFetchOptions, EEndpointsAuth } from './constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ ...defaultFetchOptions }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    singUp: builder.mutation<TUserData, TSingUp>({
      query: (body) => ({
        url: EEndpointsAuth.singUp,
        method: 'POST',
        body,
      }),
      transformResponse: getUserData,
    }),
    login: builder.mutation<TUserData, Omit<TLogin, 'remember'>>({
      query: (body) => ({
        url: EEndpointsAuth.login,
        method: 'POST',
        body,
      }),
      transformResponse: getUserData,
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
