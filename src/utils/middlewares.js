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

const validateDisplayName = async (req, res, next) => {
    // const {displayName, email, password, image}
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
};

const validateEmail = async (req, res, next) => {
    const { email } = req.body;
    const regex = /\S+@\S+\.\S+/g;
    const emailConfirmed = regex.test(email);
    if (!emailConfirmed) {
        return res.status(400)
        .json({ message: '"email" must be a valid email' });
    }
    next();
  };

  const validatePassword = async (req, res, next) => {
    // const {displayName, email, password, image}
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400)
        .json({ message: '"password" length must be at least 6 characters long' });
    }
    next();
};

module.exports = {
    validateLoginBody,
    validateUser,
    validateDisplayName,
    validateEmail,
    validatePassword,
};