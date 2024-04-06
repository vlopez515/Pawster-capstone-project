import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import "./SwipeButtons.css";
import axios from "axios";


export default function TinderCards({ animals }) {
  const [currentIndex, setCurrentIndex] = useState(animals.length - 1);
  const currentIndexRef = useRef(currentIndex);
  const [allPets, setAllPets] = useState([]);

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
      const swipedPet = animals[index];
      addNewPet(swipedPet);
    } else if (direction === "left") {
    //something after swiping left
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
 
  const addNewPet = async (swipedPet) => {
    try {
      const newPet = {
        name: swipedPet.name,
        age: swipedPet.age,
        type: swipedPet.type,
        attributes: {
          house_trained: swipedPet.attributes.house_trained,
          shots_current: swipedPet.attributes.shots_current,
          sprayed_neutered: swipedPet.attributes.sprayed_neutered,
          special_needs: swipedPet.attributes.special_needs,
        },
        breeds: {
          primary: swipedPet.breeds.primary,
          mixed: swipedPet.breeds.mixed,
        },
        contact: {
          email: swipedPet.contact.email,
          phone: swipedPet.contact.phone,
        },
        // address: {
        //   // address1: swipedPet.address.address1,
        //   // city: swipedPet.address.city,
        //   // postcode: swipedPet.address.postcode,
        // },
        size: swipedPet.size,
        gender: swipedPet.gender,
        description: swipedPet.description,
      };
  
      const response = await axios.post(`${API}/pets`, newPet);
      console.log("New pet added successfully:", response.data);

    } catch (error) {
      console.error("Error adding new pet:", error);
    }
  };

  let pets = allPets.filter(pet => pet.userliked === true)

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
