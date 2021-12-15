import userService from "./user-service"
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

const AddUser = () => {

  const [user, setUser] = useState({})
  useEffect(() => {
    if(id !== "new") {
      findUserById(id)
    }
  }, []);
  const findUserById = (id) =>
      userService.findUserById(id).then(user => setUser(user))

  const deleteUser = (id) =>
      userService.deleteUser(id)

  const updateUser = (id, newUser) =>
      userService.updateUser(id, newUser)





  return (
      <div>
        <h2>Add User</h2>
        <label>ID</label>
        <input /><br/>
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
        <label>Role</label>
        <input onChange={(e) =>
            setUser(user =>
                ({...user, role: e.target.value}))}
               value={user.role}/><br/>
        <button
        >
          Cancel
        </button>
        <button
            onClick={() => deleteUser(user.id)}>
          Delete
        </button>
        <button
            onClick={() => updateUser(user.id, user)}>
          Save
        </button>

      </div>
  )

}

export default EditUser