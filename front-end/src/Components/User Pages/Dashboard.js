import React from "react";
import TinderCard from "react-tinder-card";
import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import SwipeButtons from "./SwipeButtons";
import { IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import NextPlanOutlinedIcon from "@mui/icons-material/NextPlanOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import axios from "axios";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ViewPet from "./ViewPet";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import UserLikedPets from "./UserLikedPets";

function Dashboard({ animals }) {

  return (
    <div className="dashboard">
      <UserLikedPets />
      <div className="swiper-container">
        <div className="card-container">
          {animals.map((animal, index) => {
            return (
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                key={animal.id}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, animal.name, index)}
                onCardLeftScreen={() => outOfFrame(animal.name, index)}
                onClick={() => setFlip(!flip)}
              >
                <div
                  style={{
                    backgroundImage: "url(" + `${animal.image_url}` + ")",
                  }}
                  className={`card ${flip ? "flip" : ""}`}
                >
                  {!flip ? (
                    <div className="front">
                      <h3 className="text">
                        {animal.name}, {animal.breed}
                      </h3>
                      <div className="info">
                        <InfoOutlinedIcon onClick={() => setFlip(!flip)} />
                      </div>
                      {/* <p>{console.log(changeSwipe)}</p> */}
                    </div>
                  ) : (
                    <div className="back">
                      <ViewPet petShown={animal} />
                      <KeyboardBackspaceOutlinedIcon
                        className="backButton"
                        size="large"
                        onClick={() => setFlip(!flip)}
                      />
                      {/* </h3> */}
                    </div>
                  )}
                </div>
                {/* Tinder Buttons */}
              </TinderCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
