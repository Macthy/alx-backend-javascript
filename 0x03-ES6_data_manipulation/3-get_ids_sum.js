export default function getStudentIdsSum(students) {
  // Use reduce function to calculate the sum of all student IDs
  return students.reduce((sum, student) => sum + student.id, 0);
}
