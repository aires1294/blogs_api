const { Category } = require('../models/Category');

const createCategory = async (name) => {
    try {
        const newCategory = await Category.create({ name });
        console.log('agoraaaa', newCategory);
        return newCategory;
    } catch (e) {
        return { type: 'error', message: '"name" is required' };
    }
};

module.exports = {
    createCategory,
};