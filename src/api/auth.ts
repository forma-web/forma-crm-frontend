import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TLogin, TSingUp } from '../types/forms/auth';
import { TUserData } from '../types/forms/user';
import getUserData from '../utils/getUserData';
import { defaultFetchOptions, EEndpointsAuth } from './constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ ...defaultFetchOptions }),
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
    currentUser: builder.mutation<TUserData, void>({
      query: () => ({
        url: EEndpointsAuth.currentUser,
        method: 'GET',
      }),
      transformResponse: getUserData,
    }),
  }),
});

export const { useLoginMutation, useSingUpMutation, useCurrentUserMutation, useLogoutMutation } =
  authApi;
