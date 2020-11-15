const config = require('../../config.json');
const jsonWebToken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db/db').dbInstance;

async function createUser(userJson) {
    console.log(`Request Body: ${userJson.email}`);
    let user = {
        'email': userJson.email,
    };

    if (userJson['password']) {
        user['hash'] = bcrypt.hashSync(userJson['password'], 10);
    }

    await db.insertUser(user);
}

exports.userRelated = {
    createUser
};
