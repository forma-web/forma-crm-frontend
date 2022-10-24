import { TUserResponse } from '../types/forms/user';

export default function getUserData(response: TUserResponse) {
  const { data, meta } = response;
  if (meta) localStorage.setItem('jwt', meta.access_token);
  return data;
}
