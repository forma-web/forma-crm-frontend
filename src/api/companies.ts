import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  TCompaniesResponse,
  TCompany,
  TCompanyID,
  TDepartment,
  TFullCompany,
  TOffices,
} from '../types/company';
import { TId } from '../types/form';
import { TCreateCompany, TDepartmentFields, TOfficesFields } from '../types/forms/company';
import transformData from '../utils/transformData';
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
    companyInfo: builder.query<TFullCompany, string>({
      query: (id) => ({
        url: id,
        method: 'GET',
      }),
      providesTags: ['Companies'],
      transformResponse: transformData<TFullCompany>,
    }),
    createCompany: builder.mutation<TCompany, TCreateCompany>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Companies'],
      transformResponse: transformData<TCompany>,
    }),
    editCompany: builder.mutation<void, Partial<TCompany> & Pick<TCompany, 'id'>>({
      query: ({ id, ...body }) => ({
        url: `${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Companies'],
    }),
    addDepartment: builder.mutation<void, TDepartmentFields & TCompanyID>({
      query: ({ companyID, ...body }) => ({
        url: `/${companyID}/departments`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Companies'],
    }),
    addOffice: builder.mutation<void, TOfficesFields & TCompanyID>({
      query: ({ companyID, ...body }) => ({
        url: `/${companyID}/offices`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Companies'],
    }),
    editDepartment: builder.mutation<void, TDepartment & TCompanyID>({
      query: ({ companyID, id, ...body }) => ({
        url: `/${companyID}/departments/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Companies'],
    }),
    editOffice: builder.mutation<void, TOffices & TCompanyID>({
      query: ({ companyID, id, ...body }) => ({
        url: `/${companyID}/offices/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Companies'],
    }),
    deleteDepartment: builder.mutation<void, TId & TCompanyID>({
      query: ({ companyID, id }) => ({
        url: `/${companyID}/departments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Companies'],
    }),
    deleteOffice: builder.mutation<void, TId & TCompanyID>({
      query: ({ companyID, id }) => ({
        url: `/${companyID}/offices/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Companies'],
    }),
  }),
});

export const {
  useCompainesListQuery,
  useCompanyInfoQuery,
  useCreateCompanyMutation,
  useEditCompanyMutation,
  useAddDepartmentMutation,
  useAddOfficeMutation,
  useEditDepartmentMutation,
  useEditOfficeMutation,
  useDeleteDepartmentMutation,
  useDeleteOfficeMutation,
} = companiesApi;
