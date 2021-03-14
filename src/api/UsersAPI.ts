import { usersUrl } from '../constants'

const UserAPI = {
  get: (params?: { [key: string]: string }) => {
    if (params) {
      const urlSearchParams = new URLSearchParams(params)
      return fetch(`${usersUrl}?${urlSearchParams}`)
    }

    return fetch(usersUrl)
  },

  deleteBy: (id: number) => {
    return fetch(`${usersUrl}/${id}`, { method: 'DELETE' })
  },
}

export default UserAPI
