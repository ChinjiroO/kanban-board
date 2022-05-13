const router = require('express').Router();

const boardController = require('../controller/boards');

// Get boards list
router.get('/', boardController.allLists);
router.get('/:id', boardController.getById);

module.exports = router;
