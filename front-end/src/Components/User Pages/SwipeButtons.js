import React from "react";
import "./SwipeButtons.css";
import { IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";


export default function SwipeButtons() {
  return (
    <div className="SwipeButton_overall_div">
      <div className="swipeButtons">
        <IconButton className="swipeButtons_repeat" size="large" >
          <ReplayIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipeButtons_left" size="medium">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_right" size="small">
          <FavoriteIcon fontSize="large" />
        </IconButton>
      </div>
     </div>
  );
}
