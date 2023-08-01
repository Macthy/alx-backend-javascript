/**
 * Function to create a new ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - The length of the ArrayBuffer.
 * @param {Number} position - The position at which to set the Int8 value.
 * @param {Number} value - The Int8 value to be set at the specified position.
 * @returns {DataView} A DataView containing the ArrayBuffer with the Int8 value set.
 * @throws {Error} If the position is outside the range.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Set the Int8 value at the specified position using DataView
  const view = new DataView(buffer);
  view.setInt8(position, value);

  return view;
}
