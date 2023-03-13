const userService = require('../services/user.service');
const { createToken } = require('../utils/authFunctions');

const login = async (req, res) => {
    const { email, password } = req.body;
    const { dataValues: { id } } = await userService.login(email, password);
    // console.log('aquiiii agora', user);
    const token = createToken(id);

   return res.status(200).json({ token });
};

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService.createUser(displayName, email, password, image);
    // console.log('flamengo', newUser);
    if (newUser.type) {
        return res.status(409).json({ message: newUser.message });
    }
    const token = createToken(newUser.dataValues.id);
    // console.log('flamengoooo', token);
    return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
    try {
        const users = await userService.getAllUsers();
        // console.log('flamengo', users);
        if (!users) throw Error;
        res.status(200).json(users);
    } catch (err) {
        res.status(401).json({ message: 'Expired or invalid token' });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await userService.getUserById(id);
        // console.log('flamengo', users);
        if (!users) throw Error;
        res.status(200).json(users);
    } catch (err) {
        res.status(404).json({ message: 'User does not exist' });
    }
};

module.exports = {
    login,
    createUser,
    getAllUsers,
    getUserById,
};