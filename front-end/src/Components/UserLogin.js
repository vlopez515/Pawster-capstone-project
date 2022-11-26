
// import React, { useContext, useEffect } from "react";
// import { UserContext } from "../Providers/UserProvider";
// import { useHistory } from "react-router-dom";
// import { signInWithGoogle, signOut } from "../Services/Firebase";



// export const Login = () => {
//   const user = useContext(UserContext);
//   const history = useHistory();
//   useEffect(() => {
//     if (user) {
//       history.push("/loggedInPage");
//     }
//   }, [user, history]);

//   return (
//     <div>
//       <section>
//         <div>
//           <div> <h3>Your  Login Information:</h3></div>
//           <Button onClick={signInWithGoogle}><img className="goog" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HG6XtzIxf4Nbo_vZt8T3EAHaHa%26pid%3DApi&f=1&ipt=082d7363cd0a8780b03b32584fe273978d742cd37dd1b27ca9d62038ee6700f3&ipo=images"></img><span className="goo">Sign in With google</span></Button> <br></br>
//           <br></br>
//           <Button onClick={signOut}> sign out</Button>
//       </div>
//       </section>

//     </div>
//   );
// };
