// TODO: declare URL where server listens for HTTP requests
const SAMPLE_URL = "http://localhost:8080/api/samples"


// TODO: retrieve all users from the server
export const findAllSamples = () =>
    fetch(SAMPLE_URL).then(response => response.json())


// TODO: retrieve a single user by their ID
export const findSampleById = (id) =>
    fetch(`${SAMPLE_URL}/${id}`).then(response => response.json())


// TODO: delete a user by their ID
export const deleteSample = (id) =>
    fetch(`${SAMPLE_URL}/${id}`, {
      method: "DELETE"
    })


// TODO: create a new user
export const createSample = (user) =>
    fetch(SAMPLE_URL, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json())


// TODO: update a user by their ID
export const updateSample = (id, sample) =>
    fetch(`${SAMPLE_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(sample),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json())


// TODO: export all functions as the API to this service
export default {
  findAllSamples,
  findSampleById,
  deleteSample,
  createSample,
  updateSample
}