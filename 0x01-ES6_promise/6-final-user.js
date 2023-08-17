import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create an array of promises by calling the functions with the appropriate arguments
  const promises = [uploadPhoto(fileName), signUpUser(firstName, lastName)];

  // Use promise.allSettled to handle all the promises and return an array of results
  return Promise.allSettled(promises)
    .then((results) => {
      // Map over the results array and format the resolved and rejected values
      return results.map((result) => {
        if (results.status === "fulfilled") {
	  // If the promise was fulfilled, return an object with status "fullfiled" and the resolved value
          return { status: "fulfilled", value: result.value };
        } else {
	  // If the promise was rejected, return an object with the status "rejected" and the error message
          return { status: "rejected", value: result.reason.message };
        }
      });
    })
    .catch((error) => {
      // Handle any errors that might occur during the process
      console.error(error);
    });
}
