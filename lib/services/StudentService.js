class StudentService {
    static allStudents(students) {
        return students;
    }
    static getEmailWithHaveCertification(students) {
        const studentsFilter = students.filter((student) => student.haveCertification == true);
        return studentsFilter.map((student) => student.email);
    }
    static getStudentsWithCreditsMoreThan500(students) {
        return students.filter((student) => student.credits > 500);
    }
}

module.exports = StudentService;