import React from "react";
import {
  IconButton,
  Stack,
  Button,
  Typography,
  Toolbar,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { GoogleButton } from 'react-google-button'
import { UserAuth } from "../../Context/AuthContext";
// import Account from '../HomeScreenComponents/Account';
import logo from "../../assets/transparent_logo.png";
import "./NavBar.css";

export default function NavBar() {
  let shelterPath = window.location.pathname.includes("/shelter");
  let userPath = window.location.pathname.includes("/user");

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
      console.log(user)
      navigate('/')
      alert("you are logged out")
    } catch(err) {
      console.log(err);
    }
  };
  const handleGoogleSignIn = async () => {
    alert("You will be redirected to log in");
    try {
      await googleSignIn()
      console.log(user)
      navigate("/user/1/explore")
      
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
            <img
              width="35px"
              height="35px"
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_568656.png&f=1&nofb=1&ipt=0b7501c5cee0570f798ceffd572515faa6728c4d3095a6a7566b5c8da43013b2&ipo=images"
            ></img>
          )}
          {!user?.displayName ? null : (
            <Button variant="success">
              <Link href="/account">Account</Link>
            </Button>
          )}
          {/* <Button variant='success'><Link href='/account'>Account</Link></Button> */}
          {/* {user?.displayName ? (
          <Button><Link href="/account">Account</Link></Button>
        ) : (
          null
        )} */}
          <div className="NavBar-signin">
            {user?.displayName ? (
              <Button onClick={handleSignOut}>Logout</Button>
            ) : (
              <Button onClick={handleGoogleSignIn}>Log In</Button>
            )}
          </div>
        </div>
      </>

      {/* </Toolbar> */}
      <Stack
        direction="row"
        spacing={2}
        component="nav"
        sx={{ justifyContent: "space-evenly", overflowX: "auto" }}
      ></Stack>
    </div>
  );
}
