import { TResponse, TTime } from './form';

export type TCompany = {
  id: number;
  type: 'OWNER' | 'INVITED' | 'CREATED_BY_OWNER';
  name: string;
  inn: string;
  address: string;
};

export type TCompanyData = TCompany & TTime;

export type TCompaniesResponse = TResponse<TCompanyData[]>;
