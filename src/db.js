const faker = require('faker');

module.exports = () => {
  const size = 887;

  const db = {
    users: [],
  };

  for (let index = 1; index <= size; index++) {
    db.users.push({
      id: index,
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      country: faker.address.country(),
      isMember: faker.random.boolean(),
      createdAt: faker.date.past(),
    });
  }

  return db;
};
