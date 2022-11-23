import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default function CarouselComponent() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/05/06/86/17/360_F_506861774_sspeY1dM9frtiXBhOhtU7YDN6WIHf0rc.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/05/06/86/17/360_F_506861774_sspeY1dM9frtiXBhOhtU7YDN6WIHf0rc.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/05/06/86/17/360_F_506861774_sspeY1dM9frtiXBhOhtU7YDN6WIHf0rc.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

