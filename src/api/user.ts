import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TUser, TUserData } from '../types/forms/user';
import getUserData from '../utils/getUserData';
import { defaultFetchOptions, EEndpointsAuth } from './constants';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ ...defaultFetchOptions }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    currentUser: builder.query<TUserData, void>({
      query: () => ({
        url: EEndpointsAuth.currentUser,
        method: 'GET',
      }),
      transformResponse: getUserData,
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
