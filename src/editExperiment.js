import experimentService from "./experiment-service"
import {useParams, useNavigate, Link} from "react-router-dom";
import {useState, useEffect} from "react";

const EditExperiment = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [experiment, setExperiment] = useState({})
  useEffect(() => {
    if(id !== "new") {
      findExperimentById(id)
    }
  }, []);
  const createExperiment = (experiment) =>
      experimentService.createExperiment(experiment).then(navigate('/experiments'))
  const findExperimentById = (id) =>
      experimentService.findExperimentById(id).then(experiment => setExperiment(experiment))

  const deleteExperiment = (id) =>
      experimentService.deleteExperiment(id).then(navigate('/experiments'))

  const updateExperiment = (id, newExperiment) =>
      experimentService.updateExperiment(id, newExperiment).then(navigate('/experiments'))







  return (
      <div>
        <h2>Experiment Editor</h2>
        <label>ID</label>
        <input value={experiment.id}/><br/>
        <label>Title</label>
        <input onChange={(e) =>
            setExperiment(experiment =>
                ({...experiment, title: e.target.value}))}
               value={experiment.title}/><br/>
        <label>Treatment Type</label>
        <input onChange={(e) =>
            setExperiment(experiment =>
                ({...experiment, treatmentType: e.target.value}))}
               value={experiment.treatmentType}/><br/>
        <label>Date Performed</label>
        <input onChange={(e) =>
            setExperiment(experiment =>
                ({...experiment, datePerformed: e.target.value}))}
               value={experiment.datePerformed}/><br/>
        <label>Notes</label>
        <input onChange={(e) =>
            setExperiment(experiment =>
                ({...experiment, notes: e.target.value}))}
               value={experiment.notes}/><br/>
        <label>Scientist ID</label>
        <input onChange={(e) =>
            setExperiment(experiment =>
                ({...experiment, scientist_id: e.target.value}))}
               value={experiment.scientist_id}/><br/>
        <button>
          <Link to = {`/editUser/${experiment.scientist_id}`}>
            Link To Scientist Associated with Experiment
          </Link>
        </button><br/>
        <button>
          <Link to = {`/experiment_samples/${experiment.id}`}>
            Link to associated Experiments
          </Link>
        </button><br/>

        <button>
          <Link to = {`/experiments`}>
            Cancel
          </Link>
        </button>
        <button
            onClick={() => deleteExperiment(experiment.id)}>
          Delete
        </button>
        <button
            onClick={() => createExperiment(experiment)}>
          Create
        </button>
        <button
            onClick={() => updateExperiment(experiment.id, experiment)}>
          Save
        </button><br/>


      </div>
  )

}

export default EditExperiment