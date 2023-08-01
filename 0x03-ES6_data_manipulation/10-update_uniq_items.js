/**
 * Function to update the quantity of unique items from 1 to 100 in the map.
 * @param {Map} map - The map to update.
 * @throws {Error} If the argument is not a map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
