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

export default function TinderCards({ animals }) {
  const [currentIndex, setCurrentIndex] = useState(animals.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  // const alreadyRemoved = [];
  const [currentAnimal, setCurrentAnimal] = useState({});

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
      await setCurrentAnimal(animals[index]); //set the current animal the the one animal being swiped right on
      console.log(currentAnimal);

      //MAKE POST HERE?
      axios
        .post(`https://pawster.onrender.com/pets`, {
          // name: `${currentAnimal.name}`,
          // type: `${currentAnimal.type}`,
          //  breed: `${currentAnimal.breeds.primary ? `${currentAnimal.breeds.primary}` : "null" }`,
          // size: `${currentAnimal.size}`,
          // gender: `${currentAnimal.gender}`,
          // age: `${currentAnimal.age}`,
          // color: `${currentAnimal.colors.primary}`,
          // maintenance_level: null,
          // spayed_neutered: `${currentAnimal.attributes.spayed_neutered}`,
          // house_trained: `${currentAnimal.attributes.house_trained}`,
          // declawed: `${currentAnimal.attributes.declawed}`,
          // special_needs: `${currentAnimal.attributes.special_needs}`,
          // shots_current: `${currentAnimal.attributes.shots_current}`,
          // description: `${currentAnimal.description}`,
          // status: `${currentAnimal.status}`,
          // shelter_id: 2,
        })
        .then((res) => {
          console.log(res);
        });


    } // console.log(currentAnimal)
    // console.log(canSwipe)
    // alreadyRemoved.push(nameToDelete)
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

  //How do i grab the info of the pets????

  // useEffect(() => {
  //   if (lastDirection === "left") return;
  //   axios
  //     .post(`https://pawster.onrender.com/pets`, {
  //       name: `${currentAnimal.name}`,
  //       type: `${currentAnimal.type}`,
  //       breed: `${currentAnimal.breeds.primary}`,
  //       size: `${currentAnimal.size}`,
  //       gender: `${currentAnimal.gender}`,
  //       age: `${currentAnimal.age}`,
  //       color: `${currentAnimal.colors.primary}`,
  //       maintenance_level: null,
  //       spayed_neutered: `${currentAnimal.attributes.spayed_neutered}`,
  //       house_trained: `${currentAnimal.attributes.house_trained}`,
  //       declawed: `${currentAnimal.attributes.declawed}`,
  //       special_needs: `${currentAnimal.attributes.special_needs}`,
  //       shots_current: `${currentAnimal.attributes.shots_current}`,
  //       description: `${currentAnimal.description}`,
  //       status: `${currentAnimal.status}`,
  //       shelter_id: 2,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }, []);

  return (
    <div className="tinderCard_cardContainer">
      <h1>Tinder Cards</h1>
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
                  animal.photos.length > 0
                    ? {
                        backgroundImage: "url(" + animal.photos[0].full + ")",
                      }
                    : {
                        backgroundImage:
                          "url(" +
                          "https://media.istockphoto.com/id/936182806/vector/no-image-available-sign.jpg?s=612x612&w=0&k=20&c=9HTEtmbZ6R59xewqyIQsI_pQl3W3QDJgnxFPIHb4wQE=" +
                          ")",
                      }
                }
                className="card"
              >
                <div className="TinderCards_AnimalInfo">
                  <h3>
                    {animal.name} ({animal.age})
                  </h3>
                  <p>
                    {animal.distance} km away at {animal.organization_id}
                  </p>
                  <p>{animal.breeds.primary}</p>
                </div>
              </div>
            </TinderCard>
          );
        })}

        {/* <SwipeButtons/> */}

        {/* <div className="SwipeButton_overall_div">
      <div className="swipeButtons">
      <IconButton className="swipeButtons_left" size="medium" onClick={goLeft}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons_repeat" size="large" onClick={goBack} >
          <ReplayIcon fontSize="large"  />
        </IconButton>
        <IconButton className="swipeButtons_right" size="small" onClick={goRight}>
          <FavoriteIcon fontSize="large" />
        </IconButton>

      </div>
     </div> */}
      </div>

      {/* <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("left")}
        >
          Swipe left!
        </button> */}

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
