const StudentController = require("../../lib/controllers/StudentController");

describe("Test for StudentController", () => {

    test("1. Test getAllStudents", () => {
        const students = StudentController.getAllStudents();
        expect(students.length).toBe(51);
    });

    test("2. Test getEmailWithHaveCertification", () => {
        const students = StudentController.getEmailWithHaveCertification();
        expect(students.length).toBe(29);
    });

    test("3. Test getStudentsWithCreditsMoreThan500", () => {
        const students = StudentController.getStudentsWithCreditsMoreThan500();
        expect(students.length).toBe(27);
    });

});