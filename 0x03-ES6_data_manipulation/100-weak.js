// Export a constant instance of WeakMap and name it weakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // If the endpoint is not in the weakMap, initialize it with a count of 1
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    // If the endpoint is already in the weakMap, increment the count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Check if the count is >= 5, and if so, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
