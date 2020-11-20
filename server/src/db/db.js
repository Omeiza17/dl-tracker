const Datastore = require('nedb');
const dbInstance = new Datastore({
    filename: 'server/database.db', autoload: true, timestampData: true, onload: function (error) {
    }
});
dbInstance.ensureIndex({fieldName: 'email', unique: true}, function (err) {
});

function insertUser(userMap) {
    dbInstance.insert(userMap, function (error, newUser) {
    })
}

function getUser(email, callback) {
    dbInstance.findOne({email: email}, function (error, userDoc) {
        console.log(userDoc);
        return callback(userDoc);
    });
}

exports.dbInstance = {insertUser, getUser};
