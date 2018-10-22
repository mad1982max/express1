const users = require('../db/users.json');

module.exports.findUser = (queryObj) => {
    return users.find(user => +user.id === +queryObj);
};