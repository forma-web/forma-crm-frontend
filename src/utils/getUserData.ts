import { TUserResponse } from '../types/forms/user';

export default function getUserData(response: TUserResponse) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    data: { created_at, updated_at, ...rect },
    meta,
  } = response;
  if (meta) localStorage.setItem('jwt', meta.access_token);
  return rect;
}
