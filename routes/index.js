const boards = require('./boards');

module.exports = (app) => {
  app.use('/boards', boards);
};
