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

export type TFieldsData<T> = {
  [K in keyof T]: {
    label: string;
    defaultCheck?: Record<string, unknown>;
  };
};

export type TResponse<T, K = TJwtData> = {
  data: T;
  meta?: K;
};
