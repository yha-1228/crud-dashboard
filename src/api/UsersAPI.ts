import { usersUrl } from '../constants'

const UsersAPI = {
  get: () => {
    return fetch(usersUrl)
  },

  getWithParams: (params: { [key: string]: string }) => {
    const urlSearchParams = new URLSearchParams(params)
    return fetch(`${usersUrl}?${urlSearchParams}`)
  },
}

export default UsersAPI
