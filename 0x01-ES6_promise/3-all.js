import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  // Create an array of promises
  const promises = [uploadPhoto(), createUser()];

  // Use Promise.all to resolve all promises in the array
  Promise.all(promises)
    .then((responses) => {
      // Destructure the response to get the body, firstName and lastName
      const [photoResponse, userResponse] = responses;
      const { body: photoBody } = photoResponse;
      const { firstName, lastName } = userResponse;

      // Log the result to the console
      console.log(`${photoBody} ${firstName} ${lastName}`);
    })
    .catch((error) => {
      // Handle errors
      console.error("Signup system offline");
    });
}
