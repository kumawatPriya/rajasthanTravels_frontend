import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image1 from "../images/Lake.jpg";
// import image2 from "../images/10-Places-To-Visit-In-Rajasthan.jpg";
import image3 from "../images/teaValleyResort.webp";
import image4 from "../images/jaiselmer.jpg"
import { SliderImg } from "./SliderImg";
import { motion } from "framer-motion";

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

    // Animation variants
  const headingVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  const paragraphVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 }
  };
  return (
    <>
     <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={3000}>
        <Carousel.Item>
          <SliderImg SlideImg={image1} />
          <Carousel.Caption>
            <motion.h2
              key={`heading-${activeIndex}`}
              variants={headingVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1 }}
            >
              Discover your dream destination
            </motion.h2>
            <motion.p
              key={`paragraph-${activeIndex}`}
              variants={paragraphVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 1, delay: 0.4 }}
            >
              Discover and explore a range of fabulous day trips and sightseeing attraction in INDIA.
            </motion.p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <SliderImg SlideImg={image3} />
          <Carousel.Caption>
            <motion.h2
              key={`heading-${activeIndex}`}
              variants={headingVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8 }}
            >
              Discover your dream destination
            </motion.h2>
            <motion.p
              key={`paragraph-${activeIndex}`}
              variants={paragraphVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover and explore a range of fabulous day trips and sightseeing attraction in INDIA.
            </motion.p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  )
}

export { Slider }