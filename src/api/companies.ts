import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TCompaniesResponse, TCompany } from '../types/company';
import { defaultFetchOptions, EEndpointsCompanies } from './constants';

export const companiesApi = createApi({
  reducerPath: 'companiesApi',
  baseQuery: fetchBaseQuery({ ...defaultFetchOptions }),
  endpoints: (builder) => ({
    compainesList: builder.mutation<TCompany[], void>({
      query: () => ({
        url: EEndpointsCompanies.companiesList,
        method: 'GET',
      }),
      transformResponse: (response: TCompaniesResponse) => {
        return response.data.map((company) => {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { created_at, updated_at, ...other } = company;
          return other;
        });
      },
    }),
  }),
});

export const { useCompainesListMutation } = companiesApi;
