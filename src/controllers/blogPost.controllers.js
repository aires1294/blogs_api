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
    const { message } = await blogPostService.getAllPosts();
    return res.status(200).json(message);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const { message } = await blogPostService.getPostById(id);
    if (!message) {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(message);
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
};
