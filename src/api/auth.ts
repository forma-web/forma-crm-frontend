import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TResponse } from '../types/form';
import { TLogin, TSingUp } from '../types/forms/auth';
import { TUser, TUserResponse } from '../types/forms/user';
import getUserData from '../utils/getUserData';
import { defaultFetchOptions, EEndpoints } from './constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ ...defaultFetchOptions }),
  endpoints: (builder) => ({
    singUp: builder.mutation<TUser, TSingUp>({
      query: (body) => ({
        url: EEndpoints.singUp,
        method: 'POST',
        body,
      }),
      transformResponse: getUserData,
    }),
    login: builder.mutation<TUser, Omit<TLogin, 'remember'>>({
      query: (body) => ({
        url: EEndpoints.login,
        method: 'POST',
        body,
      }),
      transformResponse: getUserData,
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
