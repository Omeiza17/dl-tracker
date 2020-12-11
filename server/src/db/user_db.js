const Datastore = require('nedb');
const userDB = new Datastore({
    filename: 'server/user.db', autoload: true, timestampData: true, onload: function (error) {
    }
});

userDB.ensureIndex({fieldName: 'email', unique: true}, function (err) {
});

function insertUser(userMap) {
    userDB.insert(userMap, function (error, newUser) {
        console.log(newUser);
    })
}

function getUser(email, callback) {
    userDB.findOne({email: email}, function (error, userDoc) {
        console.log(userDoc);
        return callback(userDoc);
    });
}

exports.dbInstance = {insertUser, getUser};
