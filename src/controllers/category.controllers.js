const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const { Authorization } = req.headers;
    const newCategory = await categoryService.createCategory(name);
    if (newCategory.type) {
        return res.status(400).json({ message: newCategory.message });
    }
    const token = Authorization;
    return res.status(201).json({ token });
};

module.exports = {
    createCategory,
};