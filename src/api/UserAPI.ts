const usersUrl = 'http://localhost:3001/users'

export default class UserAPI {
  static getUsersRequest(params?: { [key: string]: string }) {
    if (params) {
      const urlSearchParams = new URLSearchParams(params)
      return fetch(`${usersUrl}?${urlSearchParams}`)
    }

    return fetch(usersUrl)
  }

  static deleteUserRequest(id: number) {
    return fetch(`${usersUrl}/${id}`, { method: 'DELETE' })
  }
}
