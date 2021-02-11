import { usersUrl } from '../constants'

const UsersAPI = {
  get: () => {
    return fetch(usersUrl)
  },

  getWithParams: (params: { [key: string]: string }) => {
    const urlSearchParams = new URLSearchParams(params)
    return fetch(`${usersUrl}?${urlSearchParams}`)
  },

  delete: (id: number) => {
    return fetch(`${usersUrl}/${id}`, { method: 'DELETE' })
  },
}

export default UsersAPI
