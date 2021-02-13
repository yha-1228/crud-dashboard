export function mapUsersDataFromApi(item: any) {
  return {
    id: item.id,
    username: item.username,
    email: item.email,
    password: item.password,
    country: item.country,
  }
}
