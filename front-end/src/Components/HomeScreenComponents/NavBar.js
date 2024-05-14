import React from "react";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import logo from "../../assets/transparent_logo.png";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function NavBar() {

  let currentWindow = window.location.pathname;

  const { logOut, user, googleSignIn } = UserAuth();
  let navigate = useNavigate();

  const sections = [
    { title: "About", url: "/about" },
    { title: "Support", url: "/support" },
    { title: "Contact Us", url: "/contactUs" },
  ];

  const handleGoogleSignIn = async () => {
    alert("You will be redirected to log in");
    try {
      await googleSignIn();
      console.log(user);
      navigate("/user/1/explore");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log(user);
      navigate("/");
      alert("you have logged out");
    } catch (err) {
      console.log(err);
    }
  };

  
  if (currentWindow === "/") {
    return (
     // <div className="NavBar-overall-Div">
      <div className="custom-navbar">
        {/* Logic to return to the proper home path, whether it is '/user' or 'shelter'*/}
        <Link href="/" underline="none">
          <img className="NavBar-logo" src={logo} alt={'logo'}/>
        </Link>

        {/* Logic to hide bottom navBar when we are on other pages that aren't 'Home', such as '/user' or 'shelter'*/}
        <div className="NavBar-sections">
          {sections.map((section) => (
            <Link
              underline="none"
              noWrap
              key={section.title}
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
        </div>

        <div className="NavBar-user-info">
          {" "}
          {user?.displayName ? (
            <img
              width="45px"
              height="45px"
              style={{ marginRight: "20px", borderRadius: "25px" }}
              alt='user-img'
              src={user.photoURL}
            />
          ) : null}
          <div className="NavBar-signin">
            {user?.displayName ? (
              <button className="NavBar-login-button2" onClick={handleSignOut}>
                Logout
              </button>
            ) : (
              <button
                className="NavBar-login-button2"
                onClick={handleGoogleSignIn}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
      //</div>
    );
  } else {
    return (
      <div className="NavBar-overall-Div">
      <div className="custom-navbar2">
        {/* Logic to return to the proper home path, whether it is '/user' or 'shelter'*/}
        <Link href="/" underline="none">
          <img className="NavBar-logo2" src={logo} alt='navbar-logo-2' />
        </Link>

        {/* Logic to hide bottom navBar when we are on other pages that aren't 'Home', such as '/user' or 'shelter'*/}
        <div className="NavBar-sections2">
          {sections.map((section) => (
            <Link
              underline="none"
              noWrap
              key={section.title}
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
        </div>

        <div className="NavBar-user-info2">
          {user?.displayName ? (
            <img
              width="45px"
              height="45px"
              style={{ marginRight: "20px", borderRadius: "25px" }}
              src={user?.photoURL}
              alt='user-img-2'
            />
          ) : null}

          {!user?.displayName ?  null : (
            <button className="NavBar-login-button2">
              <Link className="NavBar-login-button2" href="/user/1/explore">
                Explore
              </Link>
            </button>
          )}
          
          <div className="NavBar-signin2">
            {user?.displayName ? (
              <button className="NavBar-login-button2" onClick={handleSignOut}>
                Logout
              </button>
            ) : (
              <button
                className="NavBar-login-button2"
                onClick={handleGoogleSignIn}
              >
                Log in
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    );
  }
}
