const expTime = require('../config/app.config');
const jwt = require('jsonwebtoken');
const MyErrors = require('../libs/error');

const secretKey = 'itIsABigSecret';

class Token {
    static generateToken(data) {
        data.date = new Date().toJSON();
        data.ver = expTime.auth.version;
        return jwt.sign(data, secretKey, {expiresIn: expTime.auth.tokenExpirationTimeSec});
    }

    static verifyToken(token) {
        return jwt.verify(token, secretKey, {ver: expTime.auth.tokenExpirationTimeSec}, (err, decoded) => {
            if(err) {throw new MyErrors(401, 'Invalid token', 'This token is not valid')}
            else {
                return decoded;
            }
        });
    }
}
module.exports = Token;
