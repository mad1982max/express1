const MyErrors = require('../libs/error');

module.exports.validation = (req, res, next) => {
    if (req.headers['x-admin-password'] === process.env.ADMIN_PASSWORD) {
        next()
    } else {
        next(new MyErrors(403, 'Access denied', 'Wrong password'));
    }

};