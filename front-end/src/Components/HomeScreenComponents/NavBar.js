import React from "react";
import { Iconbutton, Typography, Toolbar, Link } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
// import { Googlebutton } from 'react-google-button'
import { UserAuth } from "../../Context/AuthContext";
// import Account from '../HomeScreenComponents/Account';
import logo from "../../assets/transparent_logo.png";
import "./NavBar.css";

export default function NavBar() {
  let shelterPath = window.location.pathname.includes("/shelter");
  let userPath = window.location.pathname.includes("/user");
  let currentWindow = window.location.pathname;

  let pawsterHomePageVal = `${window.location.pathname.split("/")[1]}/${
    window.location.pathname.split("/")[2]
  }`;

  const { logOut, user, googleSignIn } = UserAuth();
  let navigate = useNavigate();

  const sections = [
    { title: "About Pawster", url: "/about" },
    { title: "Support", url: "/support" },
    { title: "Contact Us", url: "/contact" },
  ];

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log(user);
      navigate("/");
      alert("you are logged out");
    } catch (err) {
      console.log(err);
    }
  };
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

  const loggedInTitle = () => {
    return (
      <Link href={`/${pawsterHomePageVal}`} underline="none">
        <h2>Pawster</h2>
      </Link>
    );
  };

  // if (currentWindow = "/")
  // {console.log(currentWindow)}

  if (currentWindow === "/") {
    return (
      <div className="custom-navbar">
        {/* Logic to return to the proper home path, whether it is '/user' or 'shelter'*/}
        <Link href="/" underline="none">
          <img className="NavBar-logo" src={logo} />
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

        <>
          <div className="NavBar-user-info">
            {" "}
            {user?.displayName ? (
              <img width="30px" height="30px" src={user?.photoURL} />
            ) : (
             null
            )}
            {!user?.displayName ? null : (
              <button variant="success">
                <Link href="/account">Account</Link>
              </button>
            )}
            {/* <Button variant='success'><Link href='/account'>Account</Link></Button> */}
            {/* {user?.displayName ? (
          <Button><Link href="/account">Account</Link></Button>
        ) : (
          null
        )} */}
            <div className="NavBar-signin">
              {user?.displayName ? (
                <button className="NavBar-login-button" onClick={handleSignOut}>Logout</button>
              ) : (
                <button className="NavBar-login-button" onClick={handleGoogleSignIn}>Log In</button>
              )}
            </div>
          </div>
        </>

        {/* </Toolbar> */}
      </div>
    );
  } else {
    return (
      <div className="custom-navbar2">
        {/* Logic to return to the proper home path, whether it is '/user' or 'shelter'*/}
        <Link href="/" underline="none">
          <img className="NavBar-logo2" src={logo} />
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

        <>
          <div className="NavBar-user-info2">
            {" "}
            <span className="NavBar-span">
              {user?.displayName ? (
                <img
                  className="NavBar-user-img"
                  width="35px"
                  height="35px"
                  src={user?.photoURL}
                />
              ) : (
              null
              )}
            </span>
            {!user?.displayName ? null : (
              <button variant="success">
                <Link href="/account">Account</Link>
              </button>
            )}
            {/* <button variant='success'><Link href='/account'>Account</Link></button> */}
            {/* {user?.displayName ? (
          <button><Link href="/account">Account</Link></button>
        ) : (
          null
        )} */}
            <div className="NavBar-signin2">
              {user?.displayName ? (
                <button className="NavBar-login-button" onClick={handleSignOut}>Logout</button>
              ) : (
                <button className="NavBar-login-button" onClick={handleGoogleSignIn}>Log in</button>
              )}
            </div>
          </div>
        </>
      </div>
    );
  }
}
