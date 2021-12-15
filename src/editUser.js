import userService from "./user-service"
import {useParams, useNavigate, Link} from "react-router-dom";
import {useState, useEffect} from "react";

const EditUser = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [user, setUser] = useState({})
  useEffect(() => {
    if(id !== "new") {
      findUserById(id)
    }
  }, []);
  const createUser = (user) =>
      userService.createUser(user).then(navigate('/'))
  const findUserById = (id) =>
      userService.findUserById(id).then(user => setUser(user))

  const deleteUser = (id) =>
      userService.deleteUser(id).then(navigate('/'))

  const updateUser = (id, newUser) =>
      userService.updateUser(id, newUser).then(navigate('/'))









  return (
      <div>
        <h2>User Editor</h2>
        <label>ID</label>
        <input value={user.id}/><br/>
        <label>First Name</label>
        <input onChange={(e) =>
            setUser(user =>
                ({...user, firstName: e.target.value}))}
               value={user.firstName}/><br/>
        <label>Last Name</label>
        <input onChange={(e) =>
            setUser(user =>
                ({...user, lastName: e.target.value}))}
               value={user.lastName}/><br/>
        <label>Username</label>
        <input onChange={(e) =>
            setUser(user =>
                ({...user, username: e.target.value}))}
               value={user.username}/><br/>
        <label>Password</label>
        <input onChange={(e) =>
            setUser(user =>
                ({...user, password: e.target.value}))}
               value={user.password}/><br/>
        <label>email</label>
        <input onChange={(e) =>
            setUser(user =>
                ({...user, email: e.target.value}))}
               value={user.email}/><br/>
        <label>Date of Birth</label>
        <input onChange={(e) =>
            setUser(user =>
                ({...user, dateOfBirth: e.target.value}))}
               value={user.dateOfBirth}/><br/>
        <label>Role (Must Be: Lead Scientist, Senior Scientist, Scientist, or [default] Research Associate)</label>
        <input onChange={(e) =>
            setUser(user =>
                ({...user, role: e.target.value}))}
               value={user.role}/><br/>
        <button>
          <Link to = {`/users_experiment/${user.id}`}>
            Link to associated Experiments
          </Link>
        </button><br/>
        <button>
          <Link to = {`/`}>
          Cancel
          </Link>
        </button>
        <button
            onClick={() => deleteUser(user.id)}>
          Delete
        </button>
        <button
            onClick={() => createUser(user)}>
          Create
        </button>
        <button
            onClick={() => updateUser(user.id, user)}>
          Save
        </button>



      </div>
  )

}

export default EditUser