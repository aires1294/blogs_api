const express = require('express');
const blogPostController = require('../controllers/blogPost.controllers');
const { validateToken } = require('../utils/authFunctions');
// const { validateCategoryIds } = require('../utils/middlewares');

const router = express.Router();

router.post('/', validateToken, blogPostController.createPost);
router.get('/', validateToken, blogPostController.getAllPosts);
router.get('/:id', validateToken, blogPostController.getPostById);

module.exports = router;