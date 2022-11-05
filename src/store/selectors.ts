import { RootState } from '.';

export const selectUser = (state: RootState) => state.user;
export const selectFullCompany = (state: RootState) => state.company;
export const selectCompany = (state: RootState) => state.company.data;
export const selectDepartments = (state: RootState) => state.company.departments;
export const selectOffices = (state: RootState) => state.company.offices;
export const selectCompanies = (state: RootState) => state.user.companies;
