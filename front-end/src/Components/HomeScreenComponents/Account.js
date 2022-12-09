import {React, useEffect }from 'react'
import { UserAuth } from '../../Context/AuthContext';
import { useNavigate} from "react-router-dom";


function Account() {
    const { logOut, user} = UserAuth();
    const navigate = useNavigate();

    
    const handleSignOut = async () => { 
        try {
          await logOut();
          console.log(user)
          alert("you are logged out")
        } catch(err) {
          console.log(err);
        }
  
      }
    
      

  return (
    <div className='account'>
    <h1>Users Profile</h1>
    
      <p>Welcome {user?.displayName}</p>
      
      <hr></hr>
      <div><img src = {user?.photoURL}
          
          className='animate__animated animate__zoomInDown'
          alt="its the users head"
          ></img></div>
          <h5>email: {user?.email}</h5>
          <hr></hr>
  
        <button onClick={handleSignOut}>Logout</button>
        <button ><a href="/">BACK</a></button>
        <br></br>
        <hr></hr>
        
    </div>
    
  )
}

export default Account
