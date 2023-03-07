const express = require('express');
const userController = require('../controllers/user.controllers');
const { validateLoginBody, validateUser } = require('../utils/middlewares');

const router = express.Router();

router.post('/', validateLoginBody, validateUser, userController.login);
// router.post('/', userController.login);

module.exports = router;