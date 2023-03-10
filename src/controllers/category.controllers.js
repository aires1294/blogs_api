const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    // console.log(name);
    // const { Authorization } = req.headers;
    const newCategory = await categoryService.createCategory(name);
    console.log('oiii', newCategory);   
    if (newCategory.type) {
        return res.status(400).json({ message: newCategory.message });
    } 
    // const token = newCategory;
    return res.status(201).json(newCategory);
   
    // const token = newCategory.name;
    // console.log('aqui', token);
    // return res.status(201).json({ token });
};

module.exports = {
    createCategory,
};