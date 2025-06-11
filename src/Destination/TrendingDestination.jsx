import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import bhutan_img from "../images/bhutan.jpg";
import thailand_img from "../images/thailand.jpg";
import shrilanka_img from "../images/shri-lanka.webp";
import city_palace_img from "../images/CityPalace.jpg";
import himachal_img from "../images/him_aanchal.webp";
import goa from "../images/goa_beach.jpg";
import jammu_Kashmir_img from "../images/Jammu-and-Kashmir.webp";
import kerala_img from "../images/keralaplace.jpg"
import { FaArrowRightLong, FaArrowLeftLong  } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SlickArrowLeft = ({ onClick }) => (
  <IconButton onClick={onClick} sx={{ mx: 1, fontSize: {xs:'14px',md:'17px'}, color: '#24c5ce', border: '1.5px solid #24c5ce', borderRadius: '25px', padding: {xs:'10px',md:'14px'}
   }}>
    <FaArrowLeftLong />
  </IconButton>
);

const SlickArrowRight = ({ onClick }) => (
  <IconButton onClick={onClick} sx={{ mx: 1, fontSize: {xs:'14px',md:'17px'}, color: '#24c5ce', border: '1.5px solid #24c5ce', borderRadius: '25px', padding: {xs:'10px',md:'14px'}
   }}>
    <FaArrowRightLong />
  </IconButton>
);

const destinations = [
  { title: "Bhutan", packages: "20+ Packages", image: bhutan_img },
  { title: "Thailand", packages: "10+ Packages", image: thailand_img },
  { title: "Srilanka", packages: "10+ Packages", image: shrilanka_img },
  { title: "Rajasthan", packages: "30+ Packages", image: city_palace_img },
  { title: "Jammu & Kashmir", packages: "30+ Packages", image: jammu_Kashmir_img },
  { title: "Kerala", packages: "25+ Packages", image: kerala_img },
  { title: "Goa", packages: "18+ Packages", image: goa },
  { title: "Himachal", packages: "22+ Packages", image: himachal_img },
];

export default function TrendingDestinationsSlider() {
  const sliderRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ px: {xs:3, md:7}, mt:{md:1} }}>
      {/* Header */}
      <Box display="flex" flexDirection={{xs: 'column', md: 'row'}} justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" fontWeight={700} fontFamily='Source_serif_pro' fontSize={{xs:'24px', md:'30px'}}>
          Top Trending Destinations
        </Typography>
        <Link to='/holidayPackages'>
        <Button variant="text" sx={{ fontWeight: 400, fontSize: {xs:'12px',md:'15px'}, textTransform: 'capitalize', textDecoration: 'underline' }} endIcon={<ArrowForwardIos sx={{ fontSize: '11px !important' }} />}>
          View All Tours
        </Button></Link>
      </Box>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {destinations.map((dest, index) => (
          <Box key={index} px={1}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="280"
                image={dest.image}
                alt={dest.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {dest.packages}
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  {dest.title}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>

      {/* Arrows below the slider */}
      <Box display="flex" justifyContent="center" mt={3} gap={{xs:1, md:2}}>
        <SlickArrowLeft 
          onClick={() => sliderRef.current?.slickPrev()}
          disabled={currentSlide === 0}
        />
        <SlickArrowRight
          onClick={() => sliderRef.current?.slickNext()}
          disabled={currentSlide >= destinations.length - 4}
        />
      </Box>
    </Box>
  );
}
