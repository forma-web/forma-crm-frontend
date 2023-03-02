import { TResponse, TTime } from '../types/form';

export default function transformData<T>(response: TResponse<T & TTime>): T {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    data: { created_at, updated_at, ...rect },
    meta,
  } = response;
  if (meta) localStorage.setItem('jwt', meta.access_token);
  return rect as T;
}
