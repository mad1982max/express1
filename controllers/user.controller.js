const model = require('../models/models.index');
const MyErrors = require('../libs/error');

module.exports.showAllUsers = (req, res, next) => {
    const answer = model.getAllUsers(req.query);
    if(answer.length === 0) {
        next(new MyErrors(404, 'User not found', 'Users was not found with such params'))
    }
    else (
        res.json(answer)
    )
};

module.exports.showUserbyId = (req, res, next) => {
    const answer = model.getUserById(req.params.id);
    if(answer) {
        res.json(answer);
    } else {
        next(new MyErrors(404, 'User not found', 'User was not found with such id'))
    }
};

module.exports.deleteUserbyId = (req, res, next) => {
    const answer = model.deleteUserById(req.params.id);
    if(answer === -1) {
        next(new MyErrors(404, 'User not found', 'Users was not found with such id'))
    } else {
        res.json('User is deleted');
    }
};

module.exports.addUser = (req, res, next) => {
    if(req.body.firstName === undefined || req.body.lastName === undefined || req.body.email === undefined) {
        next(new MyErrors(400, 'Bad request', 'You ara missing some fields'))
    } else {
        let answer = model.addUser(req.body);
        console.log(answer.user);
        res.send(answer.message);
    }
};

module.exports.updateFields = (req, res, next) => {
    let answer = model.updateFields(req.params.id, req.body);
    res.send(answer.message);
};

module.exports.updateCompl = (req, res, next) => {
    if(req.body.firstName === undefined || req.body.lastName === undefined || req.body.email === undefined) {
        next(new MyErrors(400, 'Bad request', 'You ara missing some fields'))
    } else {
        let answer = model.updateAllFields(req.params.id, req.body);
        res.send(answer.message);
    }
};
