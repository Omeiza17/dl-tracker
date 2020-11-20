const config = require('../../config.json');
const jsonWebToken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db/db').dbInstance;

async function createUser(userJson) {
    let user = {
        'email': userJson.email,
    };

    if (userJson['password']) {
        user['hash'] = bcrypt.hashSync(userJson['password'], 10);
    }

    await db.insertUser(user);
}

function authenticateUser(userJson, callback) {
    db.getUser(userJson.email, function (result) {
        if (result && bcrypt.compareSync(userJson.password, result.hash)) {
            const token = jsonWebToken.sign({sub: result._id}, config.secret_key, {expiresIn: 10 * 60});
            console.log(token);
            callback({
                token: token,
                email: result.email,
                id: result._id
            });
        }
    });

}

exports.userRelated = {
    createUser,
    authenticateUser
};
