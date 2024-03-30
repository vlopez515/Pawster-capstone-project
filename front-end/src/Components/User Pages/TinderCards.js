import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import "./SwipeButtons.css";
import axios from "axios";


export default function TinderCards({ animals }) {
  const [currentIndex, setCurrentIndex] = useState(animals.length - 1);
  const currentIndexRef = useRef(currentIndex);
  const [allPets, setAllPets] = useState([])

  const API = process.env.REACT_APP_API_URL

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
    if (direction === "right") {
      addNewPet(animals[index]);
    } else if (direction === "left") {
      // Handle swipe left if needed
    }
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < animals.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const goBack = async () => {
    
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };


  const addNewPet = (animals) => {
    const newPet = { ...animals, userLiked: true };
    axios
      .post(`${API}/pets`, newPet)
      .then((response) => {
        console.log("New pet added successfully:", response.data);
        // You can optionally update the local state or perform any other necessary actions
      })
      .catch((error) => {
        console.error("Error adding new pet:", error);
      });
  };

  let pets = allPets.filter(pet => pet.userliked === true)
  
  // console.log(pets,'one')

  return (
    <div className="tinderCard_cardContainer" src="https://previews.123rf.com/images/paulgrecaud/paulgrecaud1701/paulgrecaud170100005/69950272-summer-landscape-with-green-grass-at-sunny-day-nature-background.jpg" width= "1000">
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
