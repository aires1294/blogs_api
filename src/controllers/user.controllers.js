const userService = require('../services/user.service');
const { createToken } = require('../utils/authFunctions');

const login = async (req, res) => {
    const { email, password } = req.body;
    const { dataValues: { id } } = await userService.login(email, password);
    // console.log('aquiiii agora', user);
    const token = createToken(id);

    res.status(200).json({ token });
};

// const createUser = async (req, res) => {
//     const { displayName, email, password, image} = req.body;
//     const newUser = await userService.createUser(displayName, email, password, image);

//     res.status(201).json({ });
// };

module.exports = {
    login,
};