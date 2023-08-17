import { uploadPhoto, createUser } from "./utils.js";

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return {
      photo,
      user,
    };
  } catch (error) {
    // If any of the async functions fail, return an empty object
    console.error("Error:", error.message);
    return {
      photo: null,
      user: null,
    };
  }
}
