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

export default function TinderCards({ animals }) {
  const [currentIndex, setCurrentIndex] = useState(animals.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const navigate = useNavigate();
  const [changeSwipe, setChangeSwipe] = useState(false);
  const [flip, setFlip] = useState("");
  const [display, setDisplay] = useState(false);

  // const alreadyRemoved = [];
  const [currentAnimal, setCurrentAnimal] = useState({
    name: "",
    breed: "",
    gender: "",
    age: "",
    color: "",
    size: "",
    type: "",
    maintenance_level: "",
    spayed_neutered: null,
    house_trained: null,
    description: null,
    declawed: null,
    special_needs: null,
    shots_current: null,
    status: null,
    shelter_id: 2,
    userLiked: false,
    image_url: null,
  });

  const [likedAnimals, setLikedAnimals] = useState([]);

  const childRefs = useMemo(
    () =>
      Array(animals.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < animals.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = async (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    console.log(direction, index);

    if (direction === "right") {
      //new code - for swiping right, needs to change the userLiked part to true... since its liked now
      // console.log(currentAnimal)
      updateAnimal({ ...animals[index], userLiked: true }, animals[index].id);
    } else if (direction === "left") {
      updateAnimal({ ...animals[index], userLiked: false }, animals[index].id);
    }
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // console.log(currentAnimal);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir, index) => {
    // console.log(index)
    if (canSwipe && currentIndex <= animals.length) {
      //  await swipe(dir)
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  const goLeft = () => {
    swipe("left");
  };

  const goRight = () => {
    swipe("right");
  };

  const updateAnimal = (newLikedAnimal, id) => {
    axios
      .put(`http://localhost:3333/pets/${id}`, newLikedAnimal)
      .then(
        (response) => {
          console.log(response);
          // navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="tinderCard_cardContainer">
        
      <div className="tinderCard_reject">
        <NextPlanOutlinedIcon
          className="favoriteButton"
          size="large"
          onClick={(dir) => swiped("left", [...animals].name, [animals].index)}
        />
        <h4>Click button or swipe left to see next pet !</h4>
      </div>
      <div className="tinderCard_slider">
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
      <div className="tinderCard_accept">
        <FavoriteBorderIcon fontSize="large" />
        <h4>Click button or swipe right to like pet !</h4>
      </div>

      {/* <SwipeButtons/> */}

      {/* <div className="swipeButtons">
      {changeSwipe ? (<span>.</span> ) : (
         <span>,</span>
        )}
      <IconButton className="swipeButtons_left" size="medium">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_repeat" size="large" >
          <ReplayIcon fontSize="large"  />
        </IconButton>
        <IconButton className="swipeButtons_star" size="small">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_right" size="small" onClick={goRight}>
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_lightning" size="small">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div> */}
    </div>
    // </div>
  );
}
