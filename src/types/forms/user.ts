import { TResponse, TTime } from '../form';

export type TUser = {
  id: number;
  first_name: string;
  last_name: string;
  middle_name?: string;
  birth_date?: Date;
  sex?: 'M' | 'F';
  email: string;
  phone?: string;
  avatar?: string;
};

export type TUserFields = Partial<Omit<TUser, 'id' | 'avatar'>>;

export type TUserData = TUser & TTime;

export type TUserResponse = TResponse<TUserData>;
