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

const SlickArrowLeft = ({ onClick }) => (
  <IconButton onClick={onClick} sx={{ mx: 1 }}>
    <ArrowBackIos />
  </IconButton>
);

const SlickArrowRight = ({ onClick }) => (
  <IconButton onClick={onClick} sx={{ mx: 1 }}>
    <ArrowForwardIos />
  </IconButton>
);

const destinations = [
  { title: "Bhutan", packages: "20+ Packages", image: "/images/bhutan.jpg" },
  { title: "Thailand", packages: "10+ Packages", image: "/images/thailand.jpg" },
  { title: "Srilanka", packages: "10+ Packages", image: "/images/srilanka.jpg" },
  { title: "Rajasthan", packages: "30+ Packages", image: "/images/rajasthan.jpg" },
  { title: "Jammu & Kashmir", packages: "30+ Packages", image: "/images/jammu.jpg" },
  { title: "Kerala", packages: "25+ Packages", image: "/images/kerala.jpg" },
  { title: "Goa", packages: "18+ Packages", image: "/images/goa.jpg" },
  { title: "Himachal", packages: "22+ Packages", image: "/images/himachal.jpg" },
  { title: "Ladakh", packages: "12+ Packages", image: "/images/ladakh.jpg" },
  { title: "Andaman", packages: "15+ Packages", image: "/images/andaman.jpg" },
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
    <Box sx={{ px: 5, mt: 6 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" fontWeight={700}>
          Top Trending Destinations
        </Typography>
        <Button variant="text" sx={{ fontWeight: 600 }} endIcon={<ArrowForwardIos fontSize="small" />}>
          View All Tours
        </Button>
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
      <Box display="flex" justifyContent="center" mt={3}>
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
