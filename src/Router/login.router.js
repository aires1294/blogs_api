const express = require('express');
const userController = require('../controllers/user.controllers');
const { validateLoginBody } = require('../utils/middlewares');

const router = express.Router();

router.post('/', validateLoginBody, userController.login);
// router.post('/', userController.login);

module.exports = router;