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

  const imageArr = [
    "https://images.unsplash.com/photo-1489440543286-a69330151c0b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cGV0c3x8fHx8fDE2NzA1NTM1NTQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cGV0c3x8fHx8fDE2NzA1NTM1NjA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1607791502157-a5c7b4cdd47b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cGV0c3x8fHx8fDE2NzA1NTM1NjI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
    "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cGV0c3x8fHx8fDE2NzA1NTM1NjM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500",
  ];

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

  const goRight = () => {
    swipe("right");
    // console.log(currentAnimal)
  };

  const updateAnimal = (newLikedAnimal, id) => {
    // const {id} = newLikedAnimal;
    // const {userLiked} = newLikedAnimal
    // console.log(id)
    axios
      .put(`http://localhost:2222/pets/${id}`, newLikedAnimal)
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
      {/* <h1>Tinder Cards</h1> */}
      {/* {console.log(animals)} */}
      <div className="tinderCard_cardContainer">
        {/* cards start here. */}
        {animals.map((animal, index) => {
          return (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={animal.id}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, animal.name, index)} //maybe this function??
              onCardLeftScreen={() => outOfFrame(animal.name, index)}
            >
              <div
                style={
                  { backgroundImage: "url(" + `${animal.image_url}` + ")" }
                  // animal.photos.length > 0
                  //   ? {
                  //       backgroundImage: "url(" + animal.photos[0].full + ")",
                  //     }
                  //   : {
                  //       backgroundImage:
                  //         "url(" +
                  //         `${imageArr[Math.floor(Math.random() * imageArr.length)]}` +
                  //         ")",
                  //     }
                }
                className="card"
              >
                <div className="TinderCards_AnimalInfo">
                  <h3>
                    {animal.name} ({animal.age} {animal.breed})
                  </h3>
                  <p>{animal.description}</p>
                </div>
              </div>
            </TinderCard>
          );
        })}

        {/* <button
          onClick={() => navigate("/")}
        >
          Swipe left!
        </button> */}
        {/* <SwipeButtons/> */}

        {/* <div className="SwipeButton_overall_div">
          <div className="swipeButtons">
            <IconButton
              className="swipeButtons_left"
              size="medium"
              onClick={goLeft}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton
              className="swipeButtons_repeat"
              size="large"
              onClick={goBack}
            >
              <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton
              className="swipeButtons_right"
              size="small"
              onClick={goRight}
            >
              <FavoriteIcon fontSize="large" />
            </IconButton>
          </div>
        </div> */}
        {/*       
      <div className="buttons">
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("left")}
        >
          Swipe left!
        </button>
        </div>
         */}
      </div>
      {/* <div className="buttons">
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("left")}
        >
          Swipe left!
        </button>
        <button
          style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
          onClick={() => goBack()}
        >
          Undo swipe!
        </button>
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("right")}
        >
          Swipe right!
        </button>
      </div> */}

      {/* {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )} */}
    </div>
  );
}
