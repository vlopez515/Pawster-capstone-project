import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
export default function TinderCards() {
  //list of the animal picture that user is gonna swip through.
  const [animals, setAnimals] = useState([//gonna be from the database/api - to show aniamals for us.
    {
      name: "tom",
      url: "https://img.freepik.com/free-vector/banner-with-diverse-happy-people-group-standing-together-white_90220-141.jpg?w=1480&t=st=1669074670~exp=1669075270~hmac=fe0020557819f6cc16a536deddff6cbc568e9e0f062d78aaef2160bcdb5aa1a9",
    },

    {
      name: "jerry",
      url: "https://img.freepik.com/free-vector/banner-with-diverse-happy-people-group-standing-together-white_90220-141.jpg?w=1480&t=st=1669074670~exp=1669075270~hmac=fe0020557819f6cc16a536deddff6cbc568e9e0f062d78aaef2160bcdb5aa1a9",
    },
  ]);

//useEffect (() => {//gonna use the [api] here most likly for the data of the animals. 
// const unsub = array.map ();
// return () => {
//     unsub();//this way it reload the array - so we dont have 100+ listing.
//unsub is only for firebase database.;
// }
// }, [animals])

// is goona be use to get the url and animal we are goona set up
//as cards. 
//in the function inside of the us

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCard_cardContainer">
        {animals.map((animal) => {
          return (
            <TinderCard
              className="swipe"
              key={animal.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${animal.url})` }}
                className="card"
              >
                <h3>{animal.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}
