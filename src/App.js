import logo from './logo.svg';
import './App.css';
import UserList from "./user-list";
import ExperimentList from "./experiment-list";
import {BrowserRouter, Routes, Route}
  from "react-router-dom";
import EditUser from "./editUser";
import EditExperiment from "./editExperiment";
import SampleList from "./sample-list";
import EditSample from "./editSample";
import UserExperimentList from "./user-experiment-list";
import ExperimentSampleList from "./experiment-sample-list";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"
                 element={<UserList/>}/>
          <Route path="/experiments"
                 element={<ExperimentList/>}/>
          <Route path="/editUser/new"
                 element={<EditUser/>}/>
          <Route path="/editUser/:id"
                 element={<EditUser/>}/>
          <Route path="/editExperiment/:id"
                 element={<EditExperiment/>}/>
          <Route path="/editExperiment/new"
                 element={<EditExperiment/>}/>
          <Route path="/samples"
                 element={<SampleList/>}/>
          <Route path="/editSample/:id"
                 element={<EditSample/>}/>
          <Route path="/editSample/new"
                 element={<EditSample/>}/>
          <Route path="/users_experiment/:id"
                 element={<UserExperimentList/>}/>
          <Route path="/experiment_samples/:id"
                 element={<ExperimentSampleList/>}/>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
