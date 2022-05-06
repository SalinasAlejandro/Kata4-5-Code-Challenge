class StudentService {
    static allStudents(students) {
        return students;
    }
    static getEmailWithHaveCertification(students) {
        const studentsFilter = students.filter((student) => student.haveCertification == true);
        return studentsFilter.map((student) => student.email);
    }
}

module.exports = StudentService;