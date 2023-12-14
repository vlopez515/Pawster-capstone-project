import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./SwipeButtons.css";
import { IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import ViewPet from "./ViewPet";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

export default function TinderCards({ animals }) {
  const [currentIndex, setCurrentIndex] = useState(animals.length - 1);
  const currentIndexRef = useRef(currentIndex);

  console.log(animals);

  const childRefs = useMemo(
    () =>
      Array(animals.length)
        .fill(0)
        .map(() => React.createRef()),
    [animals.length]
  );

  const canGoBack = currentIndex < animals.length - 1;
  const canSwipe = currentIndex >= 0;

  const swiped = async (direction, index) => {
    setCurrentIndex(index - 1);
    console.log(direction, index);

    if (direction === "right") {
      updateAnimal({ ...animals[index], userLiked: true }, animals[index].id);
    } else if (direction === "left") {
      updateAnimal({ ...animals[index], userLiked: false }, animals[index].id);
    }
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < animals.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

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
          >
            <div
              style={{
                backgroundImage: `url(${animal.photos[0].medium})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="card"
            >
              <h3 className="text">
                {animal.name}, {animal.breeds.primary}
              </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
