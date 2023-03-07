const userService = require('../services/user.service');

const validateLoginBody = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ message: 'Some required fields are missing' });
    }
    next();
};

const validateUser = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await userService.login(email, password); 
    if (!user) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
};

module.exports = {
    validateLoginBody,
    validateUser,
};