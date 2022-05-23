const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
  login(req, res) {
    return Users.findOne({
      where: { username: req.body.username },
    })
      .then(async (user) => {
        if (!user) {
          return res.status(404).send({ message: 'User not found' });
        }
        const passwordIsValid = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: 'Invalid Password!',
          });
        }
        const token = jwt.sign(
          { id: user.id, username: user.username, email: user.email },
          'secretKey',
          {
            expiresIn: '1h',
          }
        );

        return res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          accessToken: token,
        });
      })
      .catch((err) => {
        return res.status(500).send({ message_error: err.message });
      });
  },
};
