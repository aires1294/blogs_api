const { User } = require('../models');

const login = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    return user;
};

const createUser = async (displayName, email, password, image) => {
    try {
        const newUser = await User.create({ displayName, email, password, image });
        return newUser;
    } catch (e) {
        return { type: 'error', message: 'User already registered' };
    }
};

const getAllUsers = () => User.findAll();

module.exports = {
    login,
    createUser,
    getAllUsers,
};