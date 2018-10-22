const Token = require('../services/jwt.service');
const MyErrors = require('../libs/error');

module.exports.verifSystem = (req, res, next) => {
    const token = req.headers['x-access-token'];
    const answer = Token.verifyToken(token);
    if(answer.role === 'system') {
        next();
    } else {
        next(new MyErrors(401, 'Invalid token', 'You don\'t have enough rights' ))
    }
};

module.exports.verifUser = (req, res, next) => {
    const token = req.headers['x-access-token'];
    const answer = Token.verifyToken(token);
    if(answer.role === 'user') {
        req.currentUser = answer;
        next();
    } else {
        next(new MyErrors(401, 'Invalid token', 'You don\'t have enough rights' ))
    }
};