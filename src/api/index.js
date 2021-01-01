const faker = require('faker')

module.exports = () => {
  const db = { users: [] }
  const size = 334

  for (let index = 1; index <= size; index++) {
    const item = {
      id: index,
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      country: faker.address.country(),
    }

    db.users.push(item)
  }

  return db
}
