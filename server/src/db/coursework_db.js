const Datastore = require('nedb');

const courseWorkDB = new Datastore({
    filename: 'server/course.db', autoload: true, timestampData: true, onload: function (error) {
    }
});

function insertCourseWork(courseWork) {
    courseWorkDB.insert(courseWork, function (error, newCourseWork) {
        console.log(newCourseWork);
    })
}

exports.dbInstance = {insertCourseWork};