import UserAPI, { UserGetParams } from '../api/UserAPI';
import { useQuery } from './use-query';

export function useUsers(params: UserGetParams) {
  return useQuery(
    () => UserAPI.findMany(params),
    [params._start, params._limit]
  );
}
