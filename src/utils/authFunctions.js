const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const createToken = (id) => {
    const token = jwt.sign({ data: { userId: id } }, secret, jwtConfig);
    return token;
};

// const validateToken = (req, res, next) => {
//    const token = req.header('authorization');
//    try {
//     const verifyToken = jwt.verify(token, secret);
//     req.body.verifyToken = verifyToken; 
//     next();
//    } catch (e) {
//     return res.status(401).json({ message: 'Token expired or invalid' });
//    }   
// };

const validateToken = (req, res, next) => {
    // const { authorization } = req.headers;
       const token = req.header('authorization');

    if (!token) {
        return res.status(401)
        .json({ message: 'Token not found' });
    } 
    const verifyToken = jwt.verify(token, secret);
    req.body.verifyToken = verifyToken; 
    if (!verifyToken) {
        return res.status(401)
        .json({ message: 'Expired or invalid token' });
    }
    next();
 };

module.exports = {
    createToken,
    validateToken,
};