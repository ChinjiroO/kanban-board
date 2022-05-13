const Boards = require('../models').boards;

module.exports = {
  allLists(req, res) {
    return Boards.findAll({})
      .then((boards) => res.status(200).send(boards))
      .catch((err) => res.status(500).send(err));
  },
  getById(req, res) {
    return Boards.findByPk(req.params.id, {})
      .then((boards) => {
        if (!boards) {
          return res.status(404).send({
            message: 'Board Not Found',
          });
        }
        return res.status(200).send(boards);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },
};
