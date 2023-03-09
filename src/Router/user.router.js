const express = require('express');
const userController = require('../controllers/user.controllers');
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

module.exports = router;