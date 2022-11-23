import axios from "axios";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Framgment,
} from "react-router-dom";
// const API = process.env.REACT_APP_API_URL;
import Header from "./Components/Header.js";
import TinderCards from "./Components/TinderCards.js";
import SwipeButtons from "./Components/SwipeButtons";
import Chats from "./Components/Chats";
import ChatScreen from "./Components/ChatScreen.js";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </div>
            }
          />
          <Route
            path="/chats"
            element={
              <div>
                <Header backButton="/" />
                <Chats />
              </div>
            }
          />

          <Route
            path="/chats/:animal"
            element={
              <div>
                <Header backButton="/chats" />
                <ChatScreen />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );

  // const [days, setDays] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${API}/test`)
  //     .then(
  //       (response) => {
  //         setDays(response.data);
  //       },
  //       (error) => console.log("get", error)
  //     )
  //     .catch((c) => console.warn("catch", c));
  // }, []);
  // return (

  {
    /* <Router>
          <NavBar code={code} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard code={code} />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route exact path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </Router> */
  }

  // );
}

export default App;
