import UserAPI, { UserFindManyParams } from '../api/UserAPI';
import { UseQueryProps, useQuery } from './use-query';

export function useUsers(
  params: UserFindManyParams,
  onSuccess: UseQueryProps['onSuccess']
) {
  return useQuery({
    fetcher: () => UserAPI.findMany(params),
    deps: [params._start, params._limit],
    onSuccess,
  });
}
