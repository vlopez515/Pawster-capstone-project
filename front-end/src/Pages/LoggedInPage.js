// import React, { useContext, useEffect } from "react";
// import { UserContext } from "../Providers/UserProvider";
// import { useHistory } from "react-router-dom";
// import { signOut } from "../Services/Firebase";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';


// export const LoggedInPage = () => {
//   const imgStyle = {
//       width:'30vh',
//       height:'30vh'
//   }
//   const history = useHistory()
//   const user = useContext(UserContext)
  
//   useEffect(() => { 
//     if(!user){
//       history.push("/")
//       }
//     }, [user, history]);

  
//   const handleLogout = async () => {
//     signOut()
//     alert("you've been logged out")
//   };


  
//   if ( user ){
//     return (
//       <div>
//         <h1> YOU ARE NOW LOGGED IN : </h1>
//         <h1>Welcome {user.displayName} !</h1>
//         <div>
//           <img src = {user.photoURL}
//           style={imgStyle}
//             className="user-image"
//             alt="its the users head"
//             ></img>
//         </div>
        
//         <p>email: {user.email}</p>
//         <Button variant="primary" onClick={handleLogout}> LOG OUT</Button>
//         {/* <Button variant="primary">Primary</Button>{' '} */}

//       </div>
//     );
//   } else 
//   return (
//     <div> NOT LOGGED IN </div>
//   )
// }
