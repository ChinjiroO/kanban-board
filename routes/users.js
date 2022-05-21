const router = require('express').Router();

const userController = require('../controller/user.controller');

// create a new user
router.post('/signup', userController.createUser);
// Get all users
router.get('/', userController.allUsers);

module.exports = router;
