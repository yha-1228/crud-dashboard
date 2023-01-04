import { UserAPI, UserFindManyParams } from '../api/fetchers';
import { UseQueryProps, useQuery } from './data-fetching/use-query';

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
