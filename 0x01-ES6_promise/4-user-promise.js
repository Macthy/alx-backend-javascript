export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    // Resolve the promise with an object containing firstName and lastName
    firstName: firstName,
    lastName: lastName,
  });
}
