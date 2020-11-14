const Datastore = require('nedb');
const dbInstance = new Datastore({
    filename: 'server/database.db', autoload: true, timestampData: true, onload: function (error) {
    }
});
dbInstance.ensureIndex({fieldName: 'email', unique: true}, function (err) {
});

function insertUser(userMap) {
    dbInstance.insert(userMap, function (error, newUser) {
        console.log(newUser);
    })
}

exports = {insertUser};
