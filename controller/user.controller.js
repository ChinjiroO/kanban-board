const Users = require('../models').users;

module.exports = {
  allUsers(req, res) {
    return Users.findAll({})
      .then((users) => res.status(200).send(users))
      .catch((err) => res.status(500).send(err));
  },
};
