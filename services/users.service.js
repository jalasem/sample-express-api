const { serverResponse } = require('../utils/helpers');

const { fetchUsers, fetchUser } = require('../factory/user.factory');

module.exports = {
  getUsers(req, res) {
    // imagine you've fetched from db
    const users = fetchUsers();

    serverResponse(res, users);
  },
  getUser(req, res) {
    const { id } = req.params;
    const user = fetchUser(id);

    if (!user) return serverResponse(res, 'user not found', 404, 'error');

    return serverResponse(res, user);
  },
};
