import UserAPI from '../api/UserAPI';
import { Callbacks, useMutation } from './data-fetching/use-mutation';

export function useDeleteUser(callbacks: Callbacks) {
  return useMutation(UserAPI.delete, callbacks);
}
