const usersUrl = 'http://localhost:3001/users'

export type UserGetParams = {
  /**
   * offset
   */
  _start: string
  /**
   * limit
   */
  _limit: string
}

export default class UserAPI {
  static fetchUsersRequestOfGet(params?: UserGetParams) {
    if (params) {
      const urlSearchParams = new URLSearchParams(params)
      return fetch(`${usersUrl}?${urlSearchParams}`)
    }

    return fetch(usersUrl)
  }

  static fetchUsersRequestOfDelete(id: number) {
    return fetch(`${usersUrl}/${id}`, { method: 'DELETE' })
  }
}
