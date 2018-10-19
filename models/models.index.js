let users = require('../db/users');
let usersArr = users.slice();

module.exports.getAllUsers = (queryObj) => {
    const patterns = Object.keys(queryObj);

    if (patterns.length === 0) {
        return usersArr;
    } else {
        let resultArr = usersArr;
        patterns.forEach(pattern => {
            resultArr = resultArr.filter(user => user[pattern].startsWith(queryObj[pattern]))
        });
        return resultArr;
    }
};

module.exports.getUserById = (id) => {
    return usersArr.find(user => user.id === +id);
};

module.exports.deleteUserById = (id) => {
    const userIndex = usersArr.findIndex(user => user.id === +id);
    if(userIndex === -1) {
        return -1;
    } else {
        usersArr.splice(userIndex, 1);
        return usersArr;
    }
};

module.exports.addUser = (obj) => {
    let index = usersArr[usersArr.length - 1].id + 1;
    let user = {};
    user.id = index;
    let keys = Object.keys(obj);
    keys.forEach(key => user[key] = obj[key]);
    usersArr.push(user);
    return {user: user, message: `User with id ${index} is added`};
};

module.exports.updateFields = (id, obj) => {
    let user = usersArr.find(user => user.id === +id);
    if (user) {
        let fields = Object.keys(obj);
        if(fields.length === 0) {
            return {user: user, message: 'There is no data to update'}
        } else {
            fields.forEach(field => user[field] = obj[field]);
            return {user: user, message: 'Fields are updated'}
        }
    } else {
        return 'There is no user with such id';
    }
};

module.exports.updateAllFields = (id, obj) => {
    let user = usersArr.find(user => user.id === +id);
    if (user) {
        let fields = Object.keys(obj);
        fields.forEach(field => user[field] = obj[field]);
        return {user: user, message: 'User is updated'}

    } else {
        return 'There is no user with such id';
    }
};