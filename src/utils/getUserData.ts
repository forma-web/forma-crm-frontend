/* eslint-disable @typescript-eslint/naming-convention */
import { TUserResponse } from '../types/forms/user';

export default function getUserData(response: TUserResponse) {
  const {
    data: { created_at, updated_at, ...user },
    meta,
  } = response;
  localStorage.setItem('jwt', meta.access_token);
  return user;
}
