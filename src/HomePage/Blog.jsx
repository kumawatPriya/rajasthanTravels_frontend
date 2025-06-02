import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Avatar,Stack,Button} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import shimlaImg from '../images/shimla-1024x768.jpg';
import prem_mandir from '../images/vrindavan.jpg';
import amer_fortImg from '../images/amer_fort.jpg';
import boat_roam from '../images/nivo.jpg';

const blogPosts = [
  {
    id: 'boat-ride',
    title: 'Relaxing Boat Ride Through Nature’s Calm',
    date: '18 May 2025',
    image: boat_roam,
    description:
      'Glide through tranquil waters and explore peaceful scenery for a refreshing escape into nature.',
  },
  {
    id: 'shimla-packing',
    title: 'What to Pack for a Memorable Trip to Shimla',
    date: '18 May 2025',
    image: shimlaImg,
    description:
      'Get ready for the hills with this all-weather packing checklist for more comfort in Shimla.',
  },
  {
    id: 'prem-mandir',
    title: 'Evening at Prem Mandir, Vrindavan',
    date: '18 May 2025',
    image: prem_mandir,
    description:
      'Experience the beauty of lights and devotion at Prem Mandir in the evening hours.',
  },
  {
     id: 'amer-fort',
    title: 'Walk Through the History of Amer Fort',
    date: '18 May 2025',
    image: amer_fortImg,
    description:
      'Take a journey through Jaipur’s historic Amer Fort with tips for every visitor.',
  },
];
const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Blog = () => {
  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: '#f9f9f9' }}>
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
        <Typography variant="subtitle2" color="primary" align="center" sx={{ fontWeight: 600 }}>
          Our Blog
        </Typography>
      </motion.div>

      {/* Animated Title & Subtitle */}
      <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
        <Typography variant="h4" fontSize="26px" align="center" sx={{ fontWeight: 600, mt: 1, mb: 1 }} >
          Travel Tips & Advice
        </Typography>

        <Typography variant="body1" align="center" sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto', mb: 6, fontSize: '14px' }}>
          Discover India’s most beautiful destinations and practical travel tips to elevate your next journey.
        </Typography>
      </motion.div>


      <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} >
        <Grid container spacing={4} justifyContent="center">
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div variants={cardVariants}>
                <Card
                  sx={{
                    width: '275px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={post.image}
                    alt={post.title}
                    sx={{
                      objectFit: 'cover',
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Stack direction="row" spacing={2} alignItems="center" mb={1}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar sx={{ width: 24, height: 24 }}>
                          <PersonIcon fontSize="small" />
                        </Avatar>
                        <Typography variant="caption">Viatra Team</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CalendarTodayIcon fontSize="small" color="action" />
                        <Typography variant="caption">{post.date}</Typography>
                      </Stack>
                    </Stack>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {post.description}
                    </Typography>
                    <Button
                      variant="text" component='a'
                      endIcon={<ArrowForwardIcon />} href={`/blog/${post.id}`} 
                      sx={{ color: 'primary.main', fontWeight: 500 }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Blog;
