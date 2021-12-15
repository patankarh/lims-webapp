import {useEffect, useState} from "react";
import userService from "./user-service"
import {Link, useParams} from "react-router-dom";


const UserExperimentList = () => {
  const {id} = useParams()
  const [experiments, setExperiments] =
      useState([]);
  const findAllExperiments = () =>
      fetch(
          `http://localhost:8080/api/experiments/user/${id}`)
      .then(res => res.json())
      .then(experiments => setExperiments(experiments));
  useEffect(findAllExperiments, []);

  return(
      <div>
      <h2>Associated Experiments</h2>
        <button>
          <Link to=
                    {`/`}>
            Switch to Scientists
          </Link>

        </button>
        <button>
          <Link to=
                    {`/samples`}>
            Switch to Samples
          </Link>
        </button>

        <button>
          <Link to=
                    {`/editExperiment/new`}>
            Add Experiment!
          </Link>
        </button>

      <ul>
        {
          experiments.map(experiment =>
              <li className="list-group-item" key={experiment.id}>

                ID: {experiment.id},<br/>
                Title: {experiment.title},<br/>
                Treatment Type: {experiment.treatmentType},<br/>
                Date Performed: {experiment.datePerformed},<br/>
                Notes: {experiment.notes},<br/>
                Scientist ID: {experiment.scientist_id}<br/>
                <Link to= {`/editExperiment/${experiment.id}`} >
                  Edit {experiment.title}
                </Link><br/><br/><br/>



              </li>)
        }
      </ul>
      </div>
  )}
export default UserExperimentList;

//Treatment Type: {experiment.treatmentType},
//Date Performed: {experiment.datePerformed},
//Notes: {experiment.notes},
//Scientist: {userService.findUserById(experiment.scientist_id)}