import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default function CarouselComponent() { 
  const [width, setWidth] = useState(window.innerWidth)
  const [pic, setPic] = useState('photo_large')

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
    handleSetPic(width)
    console.log(width)
  })

  const handleSetPic = (width) => {
    if(width < 400){
      setPic('photo_small')
    }
    if(width >= 400) {
      setPic('photo_medium')
    }
    if(width > 639){
    setPic('photo_large')
    }
  }

  const carouselContent = [
    {
      header: "Looking to Adopt?",
      text: "Find your ideal cat buddy that is looking for a temporary home", 
      photo_small:"https://images.squarespace-cdn.com/content/v1/54628e00e4b0b862de638015/1594589044654-MW22PA47X00AI2NXPMLW/image-asset.jpeg?format=750w",
      photo_medium: "https://www.petfinder.com/sites/default/files/styles/card/public/images/content/PF2015_267_Kittens_Shelter-630.jpg?itok=JGTdJJaD",
      photo_large: 'https://jointanimalservices.org/wp-content/uploads/2015/07/kittensfoster.jpg',
    },
    {
      header: "Saving Lives in New York City",
      text: "You can make a difference in the lives of animals in your community",
      photo_small: 'https://img.freepik.com/free-photo/smiley-woman-petting-big-rescue-dog-adoption-shelter_23-2148683034.jpg?w=740&t=st=1670133630~exp=1670134230~hmac=cdec35dd59546951aaa69f93f96e41c2aa2376a30f115a0c91a49234420853a3',
      photo_medium: "https://bestfriends.org/sites/default/files/2022-08/DrBlissShiba8725SAx2.jpg",
      photo_large: 'https://labellefoundation.org/wp-content/uploads/2020/10/slide-3.jpg',
    },
    {
      header: "Fostering to know if you’re ready to adopt",
      text: " Adopting a pet is a big decision. If you’re not sure you’re ready to take that next step, fostering is a great way to test the waters.",
      photo_small: "https://img.freepik.com/free-photo/close-up-girl-hugging-cute-dog_23-2148699657.jpg?w=826&t=st=1670133432~exp=1670134032~hmac=57b33346fb17b1ff0dc5620bd86f76ed1869a968bb6621103fc0798572aa8b83",
      photo_medium: "https://www.aspca.org/sites/default/files/blog_10-reasons-asdm_101619_body1.jpg",
      photo_large: "https://labellefoundation.org/wp-content/uploads/2020/10/slide-2.jpg",
    }
  ]

  

  return (

    <Carousel>
      {
        carouselContent.map((slide, idx) => {
          return (
            <Carousel.Item className='text-center'>
              <img
                className="img-responsive w-100"
                src={slide[`${pic}`]}
                alt={idx}
              />
              {console.log('slide.'+ pic)}
              <Carousel.Caption className="text-dark bg-white opacity-75">
                <h3>{slide.header}</h3>
                <p>{slide.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  )
}

