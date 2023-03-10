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

const getAllUsers = async () => {
    const users = await User.findAll();
    return users.map((user) => {
    const { password: _, ...userWithNoPassword } = user.dataValues; 
    // console.log('aqui', userWithNoPassword);
    return userWithNoPassword;
    });
};

const getUserById = async (id) => {
    const user = await User.findByPk(id);
    console.log('aqui aaaaaaaaa', user);
    const { password: _, ...userById } = user.dataValues; 
    return userById;
};

module.exports = {
    login,
    createUser,
    getAllUsers,
    getUserById,
};