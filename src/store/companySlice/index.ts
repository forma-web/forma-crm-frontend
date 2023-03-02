import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCompany, TDepartment, TFullCompany, TOffices } from '../../types/company';

type TCompanyState = {
  id: number | null;
  data: Omit<TCompany, 'id'> | null;
  departments: TDepartment[];
  offices: TOffices[];
};

const defaultValues: TCompanyState = {
  id: null,
  data: null,
  departments: [],
  offices: [],
};

export const companyStoreSlice = createSlice({
  name: 'company',
  initialState: defaultValues,
  reducers: {
    setCompany: (state, action: PayloadAction<TFullCompany>) => {
      const { id, departments, offices, ...company } = action.payload;
      state.id = id;
      state.data = company;
      state.departments = departments;
      state.offices = offices;
    },
    clearCompany: (state) => {
      state.id = null;
      state.data = null;
      state.departments = [];
      state.offices = [];
    },
  },
});

export const { setCompany, clearCompany } = companyStoreSlice.actions;

export default companyStoreSlice;
