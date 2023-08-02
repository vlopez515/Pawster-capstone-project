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
  // const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  // const navigate = useNavigate();
  // const [changeSwipe, setChangeSwipe] = useState(false);
  const [flip, setFlip] = useState("");
  // const [display, setDisplay] = useState(false);

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


  const childRefs = useMemo(
    () =>
      Array(animals.length)
        .fill(0)
        .map(() => React.createRef()),
    [animals.length]
  );

  const canGoBack = currentIndex < animals.length - 1
  const canSwipe = currentIndex >= 0

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const swiped = async (direction, index) => {
    setCurrentIndex(index - 1)
    console.log(direction, index);

    if (direction === "right") {
      updateAnimal({ ...animals[index], userLiked: true }, animals[index].id);
    } else if (direction === "left") {
      updateAnimal({ ...animals[index], userLiked: false }, animals[index].id);
    }
  };
  
  const swipe = async (dir) => {
    if (canSwipe && currentIndex < animals.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }
  
  
  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };


  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  

  const updateAnimal = (newLikedAnimal, id) => {
    axios
      .put(`http://localhost:3333/pets/${id}`, newLikedAnimal)
      .then(
        (response) => {
          console.log(response);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="tinderCard_cardContainer">
      <div className="tinderCard_slider">
        {animals.map((animal, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={animal.id}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, index)}
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
            </TinderCard>
        ))}
      </div>
      <div className='buttons'>
      <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe("left")}>Swipe left!</button>
      <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
      <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe("right")}>Swipe right!</button>
    </div>
  </div>
  );
}
