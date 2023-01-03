import axios from 'axios';
import { User } from '../types';
import { sleep } from '../utils/sleep';

const BASE_URL = 'http://localhost:3001/users';

export type UserFindManyParams = {
  /**
   * offset
   */
  _start: string;
  /**
   * limit
   */
  _limit: string;
};

export default class UserAPI {
  static async findMany(params: UserFindManyParams) {
    const response = await axios.get<User[]>(BASE_URL, {
      params,
    });

    // fake loading
    await sleep(500);

    return {
      data: response.data,
      totalCount: Number(response.headers['x-total-count']),
    };
  }

  static delete(id: number) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}
