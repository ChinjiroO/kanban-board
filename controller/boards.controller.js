const Boards = require('../models').boards;

module.exports = {
  boardList(req, res) {
    return Boards.findAll({ where: { user_id: req.token.id } })
      .then((board) => res.status(200).send(board))
      .catch((err) => res.status(500).send(err));
  },
  createNewBoard(req, res) {
    return Boards.create({
      name: req.body.name,
      user_id: req.token.id,
    })
      .then((board) =>
        res.status(200).send({
          message: `create board: ${req.body.name} successfully`,
          boards: board,
        })
      )
      .catch((err) => res.status(500).send(err));
  },
  removeBoard(req, res) {
    return Boards.destroy({ where: { id: req.params.id } })
      .then((result) => {
        if (result === 1) {
          res.send({ message: `board with id:${req.params.id} is removed` });
        } else {
          res
            .status(404)
            .send({ message: `cannot remove board: ${req.params.id}` });
        }
      })
      .catch((err) => res.status(500).send({ message: err.message }));
  },
  updateBoard(req, res) {
    return Boards.update(req.body, { where: { id: req.params.id } })
      .then((result) => {
        if (result[0] === 1) {
          res.send({ message: `board with id:${req.params.id} is updated` });
        } else {
          res
            .status(404)
            .send({ message: `cannot update board: ${req.params.id}` });
        }
      })
      .catch((err) => res.status(500).send({ message: err.message }));
  },
};
