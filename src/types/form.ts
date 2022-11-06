import { TextFieldProps } from '@mui/material';
import { Control, FieldValues } from 'react-hook-form';

export type TTime = {
  created_at?: Date;
  updated_at?: Date;
};

export type TJwt = {
  access_token: string;
};

export type TJwtData = TJwt & {
  token_type: string;
  expires_in: number;
};

export type TFields = {
  [x: string]: unknown;
};

export type TFieldsWithID<T extends TFields> = T & { id: number };

export type TFieldsData<T> = {
  [K in keyof T]: {
    label: string;
    defaultCheck?: Record<string, unknown>;
  };
};

export type TControlledField<T extends FieldValues> = {
  name: keyof T;
  error?: string;
  control?: Control<T, unknown>;
  rules?: Record<string, unknown>;
};

export type TResponse<T, K = TJwtData> = {
  data: T;
  meta?: K;
};
