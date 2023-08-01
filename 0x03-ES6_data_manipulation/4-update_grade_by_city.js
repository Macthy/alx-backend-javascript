/**
 * Function to update student grades for a specific city.
 * @param {Object[]} students - The array of student objects.
 * @param {string} city - The city for which to update the grades.
 * @param {Object[]} newGrades - The array of grade objects containing studentId and grade attributes.
 * @returns {Object[]} An array of student objects with updated grades for the specified city.
 */
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
