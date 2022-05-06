const Reader = require("../../lib/utils/Reader");
const StudentService = require("../../lib/services/StudentService");

describe("Test for StudentService", () => {

    test("1. Obtain all students with all info", () => {
        const students = Reader.readJsonFile("test/visualpartners.test.json");
        const studentsFilter = StudentService.allStudents(students);
        expect(studentsFilter.length).toBe(51);
    });

});