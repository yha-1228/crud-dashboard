import axios from 'axios';
import { sleep } from '../utils/sleep';
import type { User } from '../types';

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

export class UserAPI {
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
}
