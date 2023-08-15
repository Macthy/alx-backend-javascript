// Returns a string describing the preference for using const when possible
export function taskFirst() {
  const task = 'I prefer const when I can.'; // Declare a constant variable
  return task;
}

// Returns a string indicating that something is okay
export function getLast() {
  return ' is okay';
}

// Combines the result of getLast() with a message and returns the combination
export function taskNext() {
  let combination = 'But sometimes let'; // Declare a variable using let
  combination += getLast(); // Append the result of getLast() to the variable

  return combination;
}

