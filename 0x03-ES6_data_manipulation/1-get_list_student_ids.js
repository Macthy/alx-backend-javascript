/**
 * Function to get an array of ids from a list of objects.
 * @param {Object[]} list - The array of objects, each containing an id attribute.
 * @returns {Number[]} An array containing the ids extracted from the list.
 */
export default function getListStudentIds(list) {
  // Check if the argument is an array
  if (!Array.isArray(list)) {
    return []; // If not an array, return an empty array
  }

  // Use map function to extract the ids from each object and return the result
  return list.map((student) => student.id);
}
