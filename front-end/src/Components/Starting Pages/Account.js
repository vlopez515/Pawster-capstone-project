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
          alert("you are logging out")
        } catch(err) {
          console.log(err);
        }
  
      }
      useEffect(() => {
        if (!user) {
          // alert("you are logged in now")
          // console.log(user)
          navigate("/login");
        } 
    
      }, [user]);

  return (
    <div className='account'>
    <h1>Account</h1>
    
      <p>Welcome {user?.displayName}</p>
      <div><img src = {user?.photoURL}
          
          className="user-image"
          alt="its the users head"
          ></img></div>
          <h5>email: {user?.email}</h5>
          <h3>Welcome {user?.displayName}</h3>
        <button onClick={handleSignOut}>Logout</button>
        <button ><a href="/">BACK</a></button>
    </div>
    
  )
}

export default Account
