import React from "react";
import { Stack, Box, Container } from "@mui/system";
import ImageFeed from "./ImageFeed";
import "./Feed.css"

function Feed() {
  return (
    <>
      <Stack direction="column" spacing={2} align="center">
        <div className="Feed-homepage">
          <ImageFeed />
        </div>

        <Stack direction="row" spacing={2} align="center">
          <Container>
            <h2>Who are we ?</h2>
            <br />
            <p>
              We are a group of dedicated individuals, who are passionate about
              helping pets currently placed in overpopulated shelters find a
              home. With our combined knowledge of full stack development, we
              created this app in hopes of allowing people interested in
              fostering or adopting, take their first steps!{" "}
            </p>
          </Container>

          <Container>
            <h2>Our Mission</h2>
            <br />
            <p>
              The mission of Pawster is to help facilitate New York City
              residents ability to foster pets by making the process simple and
              easy.
            </p>
          </Container>
        </Stack>

        <br />
      </Stack>
    </>
  );
}

export default Feed;
