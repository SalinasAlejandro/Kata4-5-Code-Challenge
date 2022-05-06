const StudentService = require("./../services/StudentService");
const Reader = require("./../utils/Reader");

class StudentController {
    static getAllStudents() {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.allStudents(students);
    }
    static getEmailWithHaveCertification() {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getEmailWithHaveCertification(students);
    }
    static getStudentsWithCreditsMoreThan500() {
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsWithCreditsMoreThan500(students);
    }
}

module.exports = StudentController;