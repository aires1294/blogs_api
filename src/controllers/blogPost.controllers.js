const blogPostService = require('../services/blogPost.service');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const newPost = await blogPostService.createPost(title, content, categoryIds);
    console.log('flamegnoooo', newPost);
    if (newPost.type) {
        return res.status(400).json({ message: newPost.message });
    }
    return res.status(201).json(newPost);
};

module.exports = {
    createPost,
};