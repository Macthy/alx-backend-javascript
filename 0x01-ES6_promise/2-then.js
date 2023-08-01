export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // When the Promise resolves, return an object with the following attributes
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      // When the Promise rejects, return an empty Error object
      return new Error();
    })
    .finally(() => {
      // For every resolution, log "Got a response from the API" to the console
      console.log('Got a response from the API');
    });
}
