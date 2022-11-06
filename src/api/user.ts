import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TUser } from '../types/forms/user';
import transformData from '../utils/transformData';
import { defaultFetchOptions, EEndpointsAuth } from './constants';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ ...defaultFetchOptions() }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    currentUser: builder.query<TUser, void>({
      query: () => ({
        url: EEndpointsAuth.currentUser,
        method: 'GET',
      }),
      transformResponse: transformData<TUser>,
      providesTags: ['Users'],
    }),
    editUser: builder.mutation<void, Partial<TUser> & Pick<TUser, 'id'>>({
      query: ({ id, ...body }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useEditUserMutation, useCurrentUserQuery } = userApi;
