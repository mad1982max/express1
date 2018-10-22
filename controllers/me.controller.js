const model = require('../models/me.models');

module.exports.findUser = (req, res, next) => {
    let answer = model.findUser(req.currentUser.userId);
    res.json(answer);
};