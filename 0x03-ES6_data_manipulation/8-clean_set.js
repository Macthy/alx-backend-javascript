/**
 * Function to return a string of set values that start with a specific string.
 * @param {Set} set - The set to check for values.
 * @param {string} startString - The string to check for at the beginning of the values.
 * @returns {string} A string of all the set values that start with the specified string.
 */
export default function cleanSet(set, startString) {
  // If no startString is provided, return an empty string.
  if (!startString) {
    return '';
  }

  // Filter the set values that start with the specified string and include only the rest of the string.
  const filteredValues = [...set].filter((value) => value.startsWith(startString)).map((value) => value.substring(startString.length));
  return filteredValues.join('-');
}
