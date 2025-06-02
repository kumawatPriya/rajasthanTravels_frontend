import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ExploreIcon from '@mui/icons-material/Explore';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FlightTakeoffIcon sx={{ fontSize: 42, color: 'white' }} />,
    title: '420+ Destinations',
    description: 'Discover handpicked locations across the globe.',
  },
  {
    icon: <MonetizationOnIcon sx={{ fontSize: 42, color: 'white' }} />,
    title: 'Best Price Assurance',
    description: 'Enjoy competitive pricing with no hidden fees.',
  },
  {
    icon: <HeadsetMicIcon sx={{ fontSize: 42, color: 'white' }} />,
    title: '24/7 Travel Support',
    description: 'We’re here for you every step of your journey.',
  },
  {
    icon: <ExploreIcon sx={{ fontSize: 42, color: 'white' }} />,
    title: 'Curated Experiences',
    description: 'Personalized trips to help you explore like a local.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ViatraFeatures = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: 'linear-gradient(130deg, #204066, #21807d)',
        py: 4,
        color: 'white',
        textAlign: 'center',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            gap: 4,
            maxWidth: '1200px',
            mx: 'auto',
            px: 2,
          }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} style={{ flex: '1 1 0' }}>
              <Box
                sx={{
                  minWidth: { xs: '100%', sm: '45%', md: '22%' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  px: 2,
                }}
              >
                {feature.icon}
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" mt={1} sx={{ opacity: 0.9 }}>
                  {feature.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default ViatraFeatures;
