let users = [
  { name: 'Ismail', email: 'ismail@mail.com' },
  { name: 'Ishaq', email: 'ishaq@mail.com' },
  { name: 'Iskeel', email: 'iskeel@mail.com' },
  { name: 'Ibrahim', email: 'ibrahim@mail.com' },
  { name: 'Idrees', email: 'idrees@mail.com' },
  { name: 'Idowu', email: 'idowu@mail.com' },
  { name: 'Isabella', email: 'isabella@mail.com' },
];

// const db = require('../model/db-pool');

users = users.map((user, index) => ({ ...user, id: index + 11 }));

module.exports = {
  fetchUsers() {
    return users;
  },
  fetchUser(id) {
    // eslint-disable-next-line eqeqeq
    const user = users.filter((us) => us.id == id);

    if (!user.length) return null;
    return user[0];
  },
};
