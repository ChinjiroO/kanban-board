/* eslint-disable prettier/prettier */
const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken(req, res, next) {
    // eslint-disable-next-line dot-notation
    const token = req.headers['authorization'];

    if (!token) {
      res.status(403).send({ message: 'No token available' });
    }

    const bearer = token.split(' ');
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, 'secretKey', function (err, decoded) {
      if (err) {
        res.status(401).send({ message: 'Unauthorized' });
      }
      req.token = decoded;
      next();
    });
  },
};
