/**
 * Function to get students located in a specific city.
 * @param {Object[]} students - The array of student objects, each containing a location attribute.
 * @param {string} city - The city to filter students by.
 * @returns {Object[]} An array of student objects located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  // Use filter function to return a new array of students located in the specified city
  return students.filter((student) => student.location === city);
}
