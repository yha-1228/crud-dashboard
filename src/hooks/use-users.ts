import { UserAPI } from '../api/fetchers';
import { useQuery } from './data-fetching/use-query';
import type { UserFindManyParams } from '../api/fetchers';
import type { UseQueryProps } from './data-fetching/use-query';

export function useUsers(
  params: UserFindManyParams,
  onSuccess: UseQueryProps['onSuccess'],
) {
  return useQuery({
    fetcher: () => UserAPI.findMany(params),
    deps: [params._start, params._limit],
    onSuccess,
  });
}
