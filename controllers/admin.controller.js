const Token = require('../services/jwt.service');

module.exports.generateUserToken = (req, res, next) => {
    const data = {};
    data.userId = req.params.userId;
    data.role = 'user';
    const answer = Token.generateToken(data);
    res.json({token: answer});
};

module.exports.generateSystemToken = (req, res, next) => {
    const data = {};
    data.role = 'system';
    const answer = Token.generateToken(data);
    res.json({token: answer});
};