// divideFunction: Function that performs division between two numbers.
// If the denominator is 0, it throws an error with the message "cannot divide by 0".
// Otherwise, it returns the result of the division.
export default function divideFunction(numerator, denominator) {
  try {
    // Check if the denominator is equal to 0
    if (denominator === 0) {
      // If the denominator is 0, throw a new Error with the message "cannot divide by 0"
      throw new Error('cannot divide by 0');
    }
    // If the denominator is not 0, perform the division and return the result
    return numerator / denominator;
  } catch (error) {
    // Catch any error that occurred during the division
    // and re-throw it to propagate the error to the caller
    throw error;
  }
}

