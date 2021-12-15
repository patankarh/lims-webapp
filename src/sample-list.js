import {useEffect, useState} from "react";
import {Link} from "react-router-dom";



const SampleList = () => {
  //const history = useHistory()
  const [samples, setSamples] =
      useState([]);
  const findAllSamples = () =>
      fetch(
          "http://localhost:8080/api/samples")
      .then(res => res.json())
      .then(samples => setSamples(samples));
  useEffect(findAllSamples, []);

  return(
      <div>


        <h2>Samples</h2>
        <button>
          <Link to=
                    {`/`}>
            Switch to Scientists
          </Link>
        </button>
        <button>
          <Link to=
                    {`/experiments`}>
            Switch to Experiments
          </Link>
        </button>

        <button>
          <Link to=
                    {`/editSample/new`}>
            Add Sample
          </Link>
        </button>


        <ul>

          {
            samples.map(sample =>
                <li className="list-group-item" key={sample.id}>

                    ID: {sample.id},<br/>
                    Name: {sample.name},<br/>
                    Organism: {sample.organism},<br/>
                    Tissue Origin: {sample.tissueOrigin},<br/>
                    DNA Sequence: {sample.dnaSequence},<br/>
                    Disease: {sample.disease},<br/>
                    Vendor: {sample.vendor},<br/>
                    Notes: {sample.notes},<br/>
                    Experiment ID: {sample.experiment_id}<br/>
                  <Link to= {`/editSample/${sample.id}`}>
                    Edit {sample.name}
                  </Link><br/><br/><br/>




                </li>)

          }

        </ul>
      </div>
  )}
export default SampleList;
