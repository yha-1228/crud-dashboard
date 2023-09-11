import { UserAPI } from '../api/fetchers';
import { useMutation } from './data-fetching/use-mutation';
import type { Callbacks} from './data-fetching/use-mutation';

export function useDeleteUser(callbacks: Callbacks) {
  return useMutation(UserAPI.delete, callbacks);
}
