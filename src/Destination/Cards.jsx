import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import zero_velly_img from "../../src/images/ziro_velly.webp";
import majuli_island from "../../src/images/Majuli_-_The_largest_river_island.jpg";
import tawang from "../../src/images/tawang-monastery-1.jpg";
import bundi_fort_img from "../../src/images/bundi.jpg";

const spotlightDestinations = [
  {
    title: 'Ziro Valley, Arunachal Pradesh',
    image: zero_velly_img,
    subtitle: 'Highlands, culture & music',
  },
  {
    title: 'Majuli Island, Assam',
    image: majuli_island,
    subtitle: 'The world’s largest river island',
  },
  {
    title: 'Tawang, Arunachal Pradesh',
    image: tawang,
    subtitle: 'Breathtaking monasteries & snow peaks',
  },
  {
    title: 'Bundi, Rajasthan',
    image: bundi_fort_img,
    subtitle: 'Painted walls, stepwells & forgotten forts',
  },
];

const SpotlightDestinations = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const handleScroll = (direction) => {
    const scrollAmount = 340;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll(); // initial
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  return (
    <Box sx={{px: {xs: 2.8, md: 5}, pt: {xs: 6, md:9}, pb: {xs: 3, md:5}}} position="relative">
      <Typography variant="h4" fontWeight={600} mb={1}  fontFamily="Source_serif_pro" textAlign='center' fontSize={{xs: '30px', md: '34PX'}}>
        Spotlight Destinations
      </Typography>
      <Typography variant="body1" color="text.secondary" fontSize='14px' mb={4} textAlign='center'>
        Handpicked experiences from the most breathtaking locations in India.
      </Typography>

      <Box
        sx={{
          position: 'relative',
        }}
      >
        {/* Scrollable container */}
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 3,
            pb: 1,
            scrollBehavior: 'smooth',
            pr: 2,
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {spotlightDestinations.map((dest, idx) => (
            <Box
              key={idx}
              sx={{
                minWidth: {xs:311, md:320},
                height: {xs:200, md:420},
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.03)' },
              }}
            >
              <Box
                component="img"
                src={dest.image}
                alt={dest.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(70%)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  p: 3,
                  color: '#fff',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                }}
              >
                <Typography variant="h6" fontWeight={700}>
                  {dest.title}
                </Typography>
                <Typography variant="body2" mb={2}>
                  {dest.subtitle}
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    borderRadius: 2,
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: '#000',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,1)',
                    },
                  }}
                >
                  Explore
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Left arrow */}
        {showLeftArrow && (
          <IconButton
            onClick={() => handleScroll('left')}
            sx={{
              position: 'absolute',
              top: '50%',
              left: -16,
              transform: 'translateY(-50%)',
              bgcolor: '#ffffffdd',
              boxShadow: 2,
              zIndex: 10,
              '&:hover': { bgcolor: '#ffffff' },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
        )}

        {/* Right arrow */}
        {showRightArrow && (
          <IconButton
            onClick={() => handleScroll('right')}
            sx={{
              position: 'absolute',
              top: '50%',
              right: -16,
              transform: 'translateY(-50%)',
              bgcolor: '#ffffffdd',
              boxShadow: 2,
              zIndex: 10,
              '&:hover': { bgcolor: '#ffffff' },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default SpotlightDestinations;
