import axios from 'axios'
import { User } from '../types'

const BASE_URL = 'http://localhost:3001/users'

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
  static async findMany(params: UserGetParams) {
    const response = await axios.get<User[]>(`${BASE_URL}`, {
      params,
    })

    return {
      data: response.data,
      totalCount: Number(response.headers['x-total-count']),
    }
  }

  static delete(id: number) {
    return axios.delete(`${BASE_URL}/${id}`)
  }
}
