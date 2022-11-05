import { TResponse, TTime } from './form';

export type TCompany = {
  id: number;
  name: string;
  type?: 'OWNER' | 'INVITED' | 'CREATED_BY_OWNER';
  inn?: string;
  address?: string;
};

export type TDepartment = {
  id: number;
  name: string;
};

export type TOffices = {
  id: number;
  name: string;
  address: string;
};

export type TFullCompany = TCompany & {
  departments: TDepartment[];
  offices: TOffices[];
};

export type TCompanyFields = Omit<TCompany, 'id'>;

export type TCompanyData = TCompany & TTime;

export type TCompaniesResponse = TResponse<TCompanyData[]>;
