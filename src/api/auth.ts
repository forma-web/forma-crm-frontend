import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TAuth } from '../types/form/auth';
import { defaultFetchOptions, EEndpoints } from './constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ ...defaultFetchOptions }),
  endpoints: (builder) => ({
    getJwtToken: builder.mutation<any, Omit<TAuth, 'remember'>>({
      // TODO: remove any
      query: (body) => ({
        url: EEndpoints.login,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetJwtTokenMutation } = authApi;
