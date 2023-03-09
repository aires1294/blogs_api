const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const createToken = (id) => {
    const token = jwt.sign({ data: { userId: id } }, secret, jwtConfig);
    return token;
};

const validateToken = (req, res, next) => {
   const token = req.header('authorization');
   try {
    const verifyToken = jwt.verify(token, secret);
    req.body.verifyToken = verifyToken; 
    next();
   } catch (e) {
    return res.status(400).json({ message: 'Token expired or invalid' });
   }   
};

module.exports = {
    createToken,
    validateToken,
};