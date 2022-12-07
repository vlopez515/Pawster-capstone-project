import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";

export default function TinderCards({ animals }) {
  const [currentIndex, setCurrentIndex] = useState(animals.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const alreadyRemoved = [];

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

  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < animals.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="tinderCard_cardContainer">
      <h1>Tinder Cards</h1>
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
                  {/* <p>{animal.breeds.primary}</p> */}
                </div>
              </div>
            </TinderCard>
          );
        })}
      </div>

      <div className="buttons">
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
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </div>
  );
}
