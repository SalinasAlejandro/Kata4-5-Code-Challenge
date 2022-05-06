const StudentController = require("../../lib/controllers/StudentController");

describe("Test for StudentController", () => {

    test("1. Test getAllStudents", () => {
        const students = StudentController.getAllStudents();
        expect(students.length).toBe(51);
    });

});