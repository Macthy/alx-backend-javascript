// Implement the getFullResponseFromAPI function
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // If success is true, resolve the Promise with a success response.
      resolve({ status: 200, body: 'Success' });
    } else {
      // If success is false, reject the Promise with an error
      reject(new Error('The fake API is not working currently'));
    }
  });
}
