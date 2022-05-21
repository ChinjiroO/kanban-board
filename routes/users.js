const router = require('express').Router();

const userController = require('../controller/user.controller');

// Get all users
router.get('/', userController.allUsers);

module.exports = router;
