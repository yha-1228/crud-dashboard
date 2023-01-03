import UserAPI from '../api/UserAPI'
import { Callbacks, useMutation } from './use-mutation'

export function useDeleteUser(callbacks: Callbacks) {
  return useMutation(UserAPI.delete, callbacks)
}
