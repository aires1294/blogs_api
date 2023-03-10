const express = require('express');
const userController = require('../controllers/user.controllers');
const { validateToken } = require('../utils/authFunctions');
const { 
    validateDisplayName, 
    validateEmail,
    validatePassword,
     } = require('../utils/middlewares');

const router = express.Router();

router.post('/', 
    validateDisplayName, 
    validateEmail, 
    validatePassword, 
    userController.createUser);

router.get('/', validateToken, userController.getAllUsers);

router.get('/:id', validateToken, userController.getUserById);

module.exports = router;