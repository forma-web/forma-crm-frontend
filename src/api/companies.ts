import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TCompaniesResponse, TCompany, TCompanyData } from '../types/company';
import { TResponse } from '../types/form';
import { TCreateCompany } from '../types/forms/company';
import { defaultFetchOptions } from './constants';

export const companiesApi = createApi({
  reducerPath: 'companiesApi',
  baseQuery: fetchBaseQuery({ ...defaultFetchOptions('companies') }),
  tagTypes: ['Companies'],
  endpoints: (builder) => ({
    compainesList: builder.query<TCompany[], void>({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
      providesTags: ['Companies'],
      transformResponse: (response: TCompaniesResponse) => {
        return response.data.map((company) => {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { created_at, updated_at, ...other } = company;
          return other;
        });
      },
    }),
    createCompany: builder.mutation<TCompany, TCreateCompany>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Companies'],
      transformResponse: (response: TResponse<TCompanyData>) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { created_at, updated_at, ...company } = response.data;
        return company;
      },
    }),
  }),
});

export const { useCompainesListQuery, useCreateCompanyMutation } = companiesApi;
