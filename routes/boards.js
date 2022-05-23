const router = require('express').Router();
const { auth } = require('../middleware');
const boardController = require('../controller/boards.controller');

router.get('/', auth.verifyToken, boardController.boardList);
router.post('/', auth.verifyToken, boardController.createNewBoard);
router.delete('/:id', boardController.removeBoard);
router.put('/:id', boardController.updateBoard);

module.exports = router;
