const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const newCategory = await categoryService.createCategory(name);
    console.log('oiii', newCategory);   
    if (newCategory.type) {
        return res.status(400).json({ message: newCategory.message });
    } 
    return res.status(201).json(newCategory);
};

const getCategories = async (_req, res) => {
    try {
        const categories = await categoryService.getCategories();
        if (!categories) throw Error;
        res.status(200).json(categories);
    } catch (err) {
        res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    createCategory,
    getCategories,
};