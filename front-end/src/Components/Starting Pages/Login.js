
import React, { useContext, useEffect } from "react";
// import { UserContext } from "../../Providers/UserProvider";
import {UserContext} from "../../Providers/UserProvider"
import { useNavigate } from "react-router-dom";

import { signInWithGoogle, signOut } from "../../Services/Firebase";
import Button from 'react-bootstrap/Button';
// import {GoogleButton} from 'react-google-button'

export const Login = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      navigate("/loggedInPage");
    } 

  }, [user, navigate]);

  return (
    <div>
      <section>
        <div>
          <div> <h3>Your  Login Information:</h3></div>
          {/* <GoogleButton onClick={signInWithGoogle} /> */}
          {/* <Button onClick={signInWithGoogle}><GoogleButton /></Button> <br></br>
          <br></br> */}
        
        {/* commented out */}
          <Button onClick={signOut}> sign out</Button>
          
      </div>
      </section>

    </div>
  );
};
