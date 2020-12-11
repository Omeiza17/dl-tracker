const courseworkDB = require('../db/coursework_db').dbInstance;

async function createCoursework(coursework) {
    courseworkDB.insertCourseWork(coursework);

}
exports.courseWorkRelated = {createCoursework};