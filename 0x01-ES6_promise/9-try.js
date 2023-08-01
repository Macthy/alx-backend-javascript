// guardrail: Function that accepts a mathFunction (Function) as an argument.
// It executes the mathFunction and appends its return value or error message to an array named queue.
// The message 'Guardrail was processed' is always appended to the queue.
export default function guardrail(mathFunction) {
  // Initialize an array named queue to store the results and messages.
  const queue = [];

  try {
    // Try executing the mathFunction and append its return value to the queue.
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // If the mathFunction throws an error, append the error message to the queue.
    queue.push(error.message);
  } finally {
    // Append the message 'Guardrail was processed' to the queue after execution.
    queue.push('Guardrail was processed');
  }

  // Return the final queue array.
  return queue;
}
