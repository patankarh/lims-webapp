import sampleService from "./sample-service"
import {useParams, useNavigate, Link} from "react-router-dom";
import {useState, useEffect} from "react";

const EditSample = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [sample, setSample] = useState({})
  useEffect(() => {
    if(id !== "new") {
      findSampleById(id)
    }
  }, []);
  const createSample = (sample) =>
      sampleService.createSample(sample).then(navigate('/samples'))
  const findSampleById = (id) =>
      sampleService.findSampleById(id).then(sample => setSample(sample))

  const deleteSample = (id) =>
      sampleService.deleteSample(id).then(navigate('/samples'))

  const updateSample = (id, newSample) =>
      sampleService.updateSample(id, newSample).then(navigate('/samples'))







  return (
      <div>
        <h2>Sample Editor</h2>
        <label>ID</label>
        <input value={sample.id}/><br/>
        <label>Name</label>
        <input onChange={(e) =>
            setSample(sample =>
                ({...sample, name: e.target.value}))}
               value={sample.name}/><br/>
        <label>Organism</label>
        <input onChange={(e) =>
            setSample(sample =>
                ({...sample, organism: e.target.value}))}
               value={sample.organism}/><br/>
        <label>Tissue Origin</label>
        <input onChange={(e) =>
            setSample(sample =>
                ({...sample, tissueOrigin: e.target.value}))}
               value={sample.tissueOrigin}/><br/>
        <label>DNA Sequence</label>
        <input onChange={(e) =>
            setSample(sample =>
                ({...sample, dnaSequence: e.target.value}))}
               value={sample.dnaSequence}/><br/>
        <label>Disease</label>
        <input onChange={(e) =>
            setSample(sample =>
                ({...sample, disease: e.target.value}))}
               value={sample.disease}/><br/>
        <label>Vendor</label>
        <input onChange={(e) =>
            setSample(sample =>
                ({...sample, vendor: e.target.value}))}
               value={sample.vendor}/><br/>

        <label>Notes</label>
        <input onChange={(e) =>
            setSample(sample =>
                ({...sample, notes: e.target.value}))}
               value={sample.notes}/><br/>

        <label>Experiment ID</label>
        <input onChange={(e) =>
            setSample(sample =>
                ({...sample, experiment_id: e.target.value}))}
               value={sample.experiment_id}/><br/>
        <button>
          <Link to = {`/editExperiment/${sample.experiment_id}`}>
            Link To Experiment Associated with Sample
          </Link>
        </button><br/>

        <button>
          <Link to = {`/samples`}>
            Cancel
          </Link>
        </button>
        <button
            onClick={() => deleteSample(sample.id)}>
          Delete
        </button>
        <button
            onClick={() => createSample(sample)}>
          Create
        </button>
        <button
            onClick={() => updateSample(sample.id, sample)}>
          Save
        </button>

      </div>
  )

}

export default EditSample