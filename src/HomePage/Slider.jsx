import React from "react";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image1 from "../images/pexels.jpg";
// import image2 from "../images/10-Places-To-Visit-In-Rajasthan.jpg";
import image3 from "../images/pexels-chandi-saha-18474918.jpg";
import image4 from "../images/jaiselmer.jpg"
import { SliderImg } from "./SliderImg";

function Slider(){
    return(
        <>
            <Carousel>
      <Carousel.Item interval={4000}>
        <SliderImg SlideImg={image1}/>
        <Carousel.Caption>
          <h1>RAJASTHAN TOUR PACKAGES</h1>
          <p>Discover and explore a range of fabulous day trips and sightseeing attraction in RAJASTHAN.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item interval={2000}>
        <SliderImg SlideImg={image2}/>
        <Carousel.Caption>
        <h1>RAJASTHAN TOUR PACKAGES</h1>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item interval={2000}>
      <SliderImg SlideImg={image3}/>
        <Carousel.Caption>
        <h1>RAJASTHAN TOUR PACKAGES</h1>
        <p>Discover and explore a range of fabulous day trips and sightseeing attraction in RAJASTHAN.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </>
    )
}

export{ Slider }