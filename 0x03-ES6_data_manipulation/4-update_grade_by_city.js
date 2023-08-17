export default function updateStudentGradeByCity(students, city, newGrades) {
  // Use filter function to get students for the specified city
  const studentsInCity = students.filter((student) => student.location === city);

  // Use map function to update grades for the students in the specified city
  return studentsInCity.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    student.grade = gradeObj ? gradeObj.grade : 'N/A';
    return student;
  });
}
