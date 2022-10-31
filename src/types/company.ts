import { TResponse, TTime } from './form';

export type TCompany = {
  id: number;
  name: string;
  type?: 'OWNER' | 'INVITED' | 'CREATED_BY_OWNER';
  inn?: string;
  address?: string;
};

export type TCompanyData = TCompany & TTime;

export type TCompaniesResponse = TResponse<TCompanyData[]>;
