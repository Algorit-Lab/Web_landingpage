const jwt = require('jsonwebtoken')
module.exports = (secretKey, username) => {
    const payload = {
        sub: username,
        exp: Date.now() + 3600000
    }

    return jwt.sign(payload, secretKey);
}
