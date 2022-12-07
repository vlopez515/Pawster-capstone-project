import {React, useeffect }from 'react'
import { UserAuth } from '../../Context/AuthContext';
import { useNavigate} from "react-router-dom";

function Account() {
    const { logOut, user} = UserAuth();

    
    const handleSignOut = async () => { 
        try {
          await logOut();
          alert("you are not logged In")
        } catch(err) {
          console.log(err);
        }
  
      }

  return (
    <div className='account'>
    <h1>Account</h1>
    
      <p>Welcome {user?.displayName}</p>
      {/* <Login / > */}
      <div><img src = {user.photoURL}
          
          className="user-image"
          alt="its the users head"
          ></img></div>
          <h5>email: {user.email}</h5>
          <h3>Welcome {user?.displayName}</h3>
        {/* <button onClick={handleSignOut}>Logout</button> */}
        <button >BACK</button>
    </div>
    
  )
}

export default Account
