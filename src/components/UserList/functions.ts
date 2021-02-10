import _isEqual from 'lodash/isEqual'
import { User, Users } from '../../types'

export const mapUsersDataFromApi = (item: any) => ({
  id: item.id,
  username: item.username,
  email: item.email,
  password: item.password,
  country: item.country,
})

export function getStartUser(allUsers: Users, users: Users) {
  return allUsers.find((v) => _isEqual(v, users[0])) as User
}

export function getEndUser(allUsers: Users, users: Users) {
  return allUsers.find((v) => _isEqual(v, users[users.length - 1])) as User
}

export function getUserRowNumber(allUsers: Users, user: User) {
  return allUsers.indexOf(user) + 1
}
