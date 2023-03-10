const express = require('express');
const categoryController = require('../controllers/category.controllers');
const { validateToken } = require('../utils/authFunctions');

const router = express.Router();

router.post('/', validateToken, categoryController.createCategory);
router.get('/', validateToken, categoryController.getCategories);

module.exports = router;