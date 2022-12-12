import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import SwipeButtons from "./SwipeButtons";
import { IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import axios from "axios";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

export default function TinderCards({ animals }) {
  const [currentIndex, setCurrentIndex] = useState(animals.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const navigate = useNavigate();
  const [changeSwipe, setChangeSwipe] = useState(false)

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
      updateAnimal({ ...animals[index], userLiked: true }, index + 1);
    } else if (direction === "left") {
      updateAnimal({ ...animals[index], userLiked: false }, index + 1);
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
    // console.log(currentAnimal)
  };


// useEffect (() => {
//   if (changeSwipe === true) {
//     goRight()
//   } else if (changeSwipe === false) {
//     goLeft()
//   }

// },[changeSwipe])

  const goRight = () => {
    swipe("right");
    setChangeSwipe(!changeSwipe)
    // console.log(changeSwipe)
    // forceUpdate();
    // swiped("right")
    // console.log(currentAnimal)
    // this.forceUpdate();
  };

  const updateAnimal = (newLikedAnimal, id) => {
    axios
      .put(`https://pawster.onrender.com/pets/${id}`, newLikedAnimal)
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
      <div className="tinderCard_cardContainer">
        {animals.map((animal, index) => {
          return (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={animal.id}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, animal.name, index)}
              onCardLeftScreen={() => outOfFrame(animal.name, index)}
            >
              <div
                style={{
                  backgroundImage: "url(" + `${animal.image_url}` + ")",
                }}
                className="card"
              >
                <div className="TinderCards_AnimalInfo">
                  <h3>
                    {animal.name} , {animal.breed}
                  </h3>
                  {/* <p>{animal.description}</p> */}
                  <p>{console.log(changeSwipe)}</p>
                </div>
              </div>

              {/* Tinder Buttons */}

            
            </TinderCard>
          );
        })}
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
      
    </div>
  );
}
