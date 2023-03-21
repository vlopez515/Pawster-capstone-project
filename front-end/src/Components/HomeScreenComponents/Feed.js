import React from "react";
import ImageFeed from "./ImageFeed";
import "./Feed.css"

function Feed() {
  return (
      <div className="feed">
        <div className="Feed-homepage">
          <ImageFeed />
        </div>
        <div className="pageContent">
          <div className="twoColumns">
            <div className="infoCard">
              <h2>Who are we ?</h2>
              <p>
                We are a group of dedicated individuals, who are passionate about
                helping pets currently placed in overpopulated shelters find a
                home. With our combined knowledge of full stack development, we
                created this app in hopes of allowing people interested in
                fostering or adopting, take their first steps!{" "}
              </p>
            </div>

            <div className="infoCard">
              <h2>Our Mission</h2>
              <p>
                The mission of Pawster is to help facilitate New York City
                residents ability to foster pets by making the process simple and
                easy.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Feed;
