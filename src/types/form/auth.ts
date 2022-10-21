export type TLogin = {
  email: string;
  password: string;
  remember: boolean;
};

export type TSingUp = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type TJwt = {
  access_token: string;
};
