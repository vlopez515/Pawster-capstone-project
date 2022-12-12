import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./ImageFeed.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
// import { Googlebutton } from 'react-google-button'
import { UserAuth } from "../../Context/AuthContext";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const { logOut, user, googleSignIn } = UserAuth();
  let navigate = useNavigate();

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

  return (
    <div className="outter-div" sx={{ backgroundColor: "black" }}>
      <div className="splash-image">
        <h1>Find the right pet for you</h1>
        {user?.displayName ? (
          <button className="Image-Feed-button">
            <Link to="/user/1/explore">
              <h2>Explore</h2>
            </Link>

      
          </button>
        ) : (
          <button className="Image-Feed-button" onClick={handleGoogleSignIn}>
            Log in
          </button>
        )}
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "https://bestfriends.org/sites/default/files/2022-08/DrBlissShiba8725SAx2.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  }
];
