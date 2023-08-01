/**
 * Function to get the sum of all student IDs.
 * @param {Object[]} students - The array of student objects, each containing an id attribute.
 * @returns {number} The sum of all student IDs.
 */
export default function getStudentIdsSum(students) {
  // Use reduce function to calculate the sum of all student IDs
  return students.reduce((sum, student) => sum + student.id, 0);
}

