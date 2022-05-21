const bcrypt = require('bcrypt');

const Users = require('../models').users;

module.exports = {
  async createUser(req, res) {
    return Users.create({
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    })
      .then(() =>
        res
          .status(200)
          .send({ message: `create user: ${req.body.username} successfully` })
      )
      .catch((err) => res.status(500).send({ message: err.message }));
  },
  allUsers(req, res) {
    return Users.findAll({})
      .then((users) => res.status(200).send(users))
      .catch((err) => res.status(500).send(err));
  },
};
