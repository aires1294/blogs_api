const { BlogPost } = require('../models');

const createPost = async (title, content, categoryIds) => {
    try {
        const post = await BlogPost.create({ title, content, categoryIds });
        return post;
    } catch (e) {
        return { type: 'error', message: 'Some required fields are missing' };
    }
};

module.exports = {
    createPost,
};