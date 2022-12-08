
// // import React, { useContext, useEffect } from "react";
// // import { UserContext } from "../../Providers/UserProvider";
// // import {UserContext} from "../../Providers/UserProvider"
// import React, { useEffect } from 'react';
// import {GoogleButton} from 'react-google-button'
// import { useNavigate } from "react-router-dom";
// import { UserAuth } from '../../Context/AuthContext';
// // import Button from 'react-bootstrap/Button';
// // import { signInWithGoogle, signOut } from "../../Services/Firebase";
// // import account from './LoggedIn'
// // import { async } from '@firebase/util';

// export default function Login () {
//   const {googleSignIn, user} = UserAuth();
//   // console.log("Login")
//   const navigate = useNavigate();
// // const {googleSignIn, user} = UserAuth();
  
//   const handleGoogleSignIn = async () => {
//     try {
//       await googleSignIn()
//       alert("Welcome to the Sign In Page")

//     } catch (error) {
//       console.log(error)
//     }
//   }
  

//   useEffect(() => {
//     if (user) {
//       console.log(user)
//       navigate("/account")
//     } 

//   }, [user]);

//   return (
//     <div>
      
//         <div className='login'>
//          <h3>Log In </h3>
         
//           <GoogleButton onClick={handleGoogleSignIn} />
//           {/* <GoogleButton /> */}
//           {/* <GoogleButton onClick={signInWithGoogle} />  */}
//           {/* <Button onClick={signInWithGoogle}><GoogleButton /></Button> <br></br>
//           <br></br>
        
//         {/* commented out */}
//           {/* <Button onClick={signOut}> sign out</Button> */}
          
//       </div>
      

//     </div>
//   );
// };
