const { BlogPost, User, Category, PostCategory } = require('../models');

const include = {
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category,
        as: 'categories',
        through: PostCategory,
      },
    ],
  };

const createPost = async (title, content, categoryIds) => {
    try {
        const post = await BlogPost.create({ title, content, categoryIds });
        return post;
    } catch (e) {
        return { type: 'error', message: 'Some required fields are missing' };
    }
};

const getAllPosts = async () => {
    const user = await BlogPost.findAll(include);
    return { type: null, message: user };
};

// const findAllCategoryIds = async (categoryIds) => {
//     const user = await BlogPost.findAndCountAll({ where: { categoryIds } });
//     return user;
// };

module.exports = {
    createPost,
    getAllPosts,
    // findAllCategoryIds,
};