import { useLoaderData } from "react-router-dom";
import User from "../User/User"
import './GridStyle.css'


const Users = () => {
  const users=useLoaderData()
 
    return (
        <div>
          <h2>Hi our user {users.length}</h2>
          <p>Hasibul Hasan Chaion</p>  
          <div className="grid grid-cols-3 gap-2">
            {
              users.map(user=><User key={user.id} user={user}></User>)
            }
          </div>
        </div>
    );
};

export default Users;