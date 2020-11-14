const config = require('../../config.json');
const jsonWebToken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db/db');

async function createUser(userJson) {
    console.log(`Request Body: ${userJson}`);
    const user = {
        'email': userJson.email,
        'username': userJson.username,
    };

    if (userJson.password) {
        user.hash = bcrypt.hashSync(userJson.password, 10);
    }

    await db.insertUser(JSON.stringify(user));
}

exports.userRelated = {
    createUser
};
