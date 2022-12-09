import React from "react";
import "./SwipeButtons.css";
import { IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";

export default function SwipeButtons() {
  return (
    <div className="SwipeButton_overall_div">
      <div className="swipeButtons">
        <IconButton className="swipeButtons_repeat" size="large" >
          <ReplayIcon fontSize="large"  />
        </IconButton>
        <IconButton className="swipeButtons_left" size="medium">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_star" size="small">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_right" size="small">
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_lightning" size="small">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
     </div>
  );
}
