const users = require('./users');
const boards = require('./boards');

module.exports = (app) => {
  app.use('/users', users);
  app.use('/boards', boards);
};
