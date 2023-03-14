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

const getAllPosts = async (req, res) => {
    const { type, message } = await blogPostService.getAllPosts();
    if (type) {
        return res.status(500).json({ message });
    }
    return res.status(200).json(message);
};

module.exports = {
    createPost,
    getAllPosts,
};
