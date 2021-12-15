// TODO: declare URL where server listens for HTTP requests
const EXPERIMENT_URL = "http://localhost:8080/api/experiments"


// TODO: retrieve all users from the server
export const findAllExperiments = () =>
    fetch(EXPERIMENT_URL).then(response => response.json())


// TODO: retrieve a single user by their ID
export const findExperimentById = (id) =>
    fetch(`${EXPERIMENT_URL}/${id}`).then(response => response.json())


// TODO: delete a user by their ID
export const deleteExperiment = (id) =>
    fetch(`${EXPERIMENT_URL}/${id}`, {
      method: "DELETE"
    })


// TODO: create a new user
export const createExperiment = (experiment) =>
    fetch(EXPERIMENT_URL, {
      method: 'POST',
      body: JSON.stringify(experiment),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json())


// TODO: update a user by their ID
export const updateExperiment = (id, experiment) =>
    fetch(`${EXPERIMENT_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(experiment),
      headers: {'content-type': 'application/json'}
    }).then(response => response.json())




// TODO: export all functions as the API to this service
export default {
  findAllExperiments,
  findExperimentById,
  deleteExperiment,
  createExperiment,
  updateExperiment
}
