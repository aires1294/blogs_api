const { Category } = require('../models');

const createCategory = async (name) => {
    try {
        const newCategory = await Category.create({ name });
        // console.log('agoraaaa', newCategory);
        return newCategory;
    } catch (e) {
        return { type: 'error', message: '"name" is required' };
    }
};

const getCategories = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    createCategory,
    getCategories,
};