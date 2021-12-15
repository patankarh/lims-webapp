import {useEffect, useState} from "react";
import {Link} from "react-router-dom";



const UserList = () => {
  //const history = useHistory()
  const [users, setUsers] =
      useState([]);
  const findAllUsers = () =>
      fetch(
          "http://localhost:8080/api/users")
      .then(res => res.json())
      .then(users => setUsers(users));
  useEffect(findAllUsers, []);

  return(
      <div>


        <h2>Scientists</h2>
        <button>
          <Link to=
                    {`/experiments`}>
            Switch to Experiments
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
                    {`/editUser/new`}>
          Add User
          </Link>
        </button>


        <ul className={"list-group"}>

          {
            users.map(user =>
                <li className="list-group-item" key={user.id}>
                  ID: {user.id}<br/>
                  First Name: {user.firstName},<br/>
                  Last Name: {user.lastName},<br/>
                  Role: {user.role},<br/>
                  Username: {user.username},<br/>
                  Password: {user.password},<br/>
                  Email: {user.email},<br/>
                  Date Of Birth: {user.dateOfBirth},<br/>
                  <Link to= {`/editUser/${user.id}`} >
                    Edit {user.firstName} {user.lastName}
                  </Link><br/><br/><br/>



                </li>)
          }

        </ul>
      </div>
  )}
export default UserList;




