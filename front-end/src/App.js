import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './Components/HomeScreenComponents/NavBar';
import Footer from './Components/HomeScreenComponents/Footer';
import HomeScreenRoutes from './HomeScreenRoutes';


function App() {
  return (
    <div className="App">

      <Router>
        {/* Keep NavBar so each diff page keeps it */}
        <NavBar />
        <main>
          <HomeScreenRoutes /> 


        </main>
      </Router>

      {/* Keep Footer for all other screens? */}
      <Footer />
    </div>
  )
}



export default App;






// function App() {

//   return (
//     <div className="App">
//       <AuthContextProvider>
//         <Router>
//           {true &&
//             <StartingScreen />}
//           {/* Example of How to Switching Screen for User / Shelter */}
//           {false &&
//             <UserStartingScreen />
//             // <ContactUs />
//           }
//           {
//             false &&
//             <ShelterStartingScreen />
//           }
//         </Router>
//       </AuthContextProvider>
//     </div>
//   );
// }

// export default App;