const express = require('express');
const blogPostController = require('../controllers/blogPost.controllers');
const { validateToken } = require('../utils/authFunctions');

const router = express.Router();

router.post('/', validateToken, blogPostController.createPost);

module.exports = router;