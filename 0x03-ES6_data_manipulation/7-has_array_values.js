/**
 * Function to check if all elements in the array exist within the set.
 * @param {Set} set - The set to check against.
 * @param {Array} arr - The array to check for elements in the set.
 * @returns {boolean} True if all elements in the array exist within the set, false otherwise.
 */
export default function hasValuesFromArray(set, arr) {
  // Check if all elements in the array exist in the set
  return arr.every((element) => set.has(element));
}
