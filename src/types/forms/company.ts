import { TCompany, TCompanyID, TDepartment, TOffices } from '../company';

export type TCreateCompany = {
  name: string;
};

export type TCompanyFields = Omit<TCompany, 'id'>;
export type TDepartmentFields = Omit<TDepartment, 'id'>;
export type TOfficesFields = Omit<TOffices, 'id'>;
