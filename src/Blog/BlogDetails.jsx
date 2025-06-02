// src/pages/BlogDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, CardMedia, Avatar, Stack, Button} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import shimlaImg from '../images/shimla-1024x768.jpg';
import prem_mandir from '../images/vrindavan.jpg';
import amer_fortImg from '../images/amer_fort.jpg';
import boat_roam from '../images/nivo.jpg';
import { Navbar } from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';
import BlogPage from './BlogList';
import img2 from '../images/Udaipur_13.jpg';
import img3 from '../images/trivandrum.jpg';
import img4 from '../images/goa_portugese_colonies.webp';
import img5 from '../images/729541740Darjeeling_Himalayan_Railway.jpg';
import img6 from '../images/Kutch.webp';
import img7 from '../images//hampi.jpeg';
import img8 from '../images/meghalaya.jpg';
import img9 from '../images/MysoreDussehra.jpg';
import img10 from '../images/spiti.jpeg';
import img11 from '../images/rajasthani_culture.jpg';
import img12 from '../images/gangaAarti.jpg';

const blogPosts = [
  {
    id: 'udaipur-romance',
    title: 'Udaipur: The City of Lakes and Love',
    description: 'A romantic getaway filled with palaces, lakes, and dreamy sunsets.',
    image: img2,
    date: '18 May 2025',
    content: `Udaipur’s charm lies in its romantic lakes, palatial hotels, and sunset boat rides. Take a walk by Lake Pichola, visit the City Palace, and enjoy the traditional Rajasthani culture.`,
  },
  {
    id: 'kerala-backwaters',
    title: 'Exploring the Backwaters of Kerala',
    description: 'Sail through lush, palm-fringed waterways in God’s Own Country.',
    image: img3,
    date: '15 May 2025',
    content: `Kerala’s backwaters are a web of canals, lakes, and rivers. Rent a houseboat in Alleppey, enjoy fresh seafood, and relax in the gentle lap of nature.`,
  },
  {
    id: 'goa-vibes',
    title: 'Goa Beyond Beaches',
    description: 'Discover hidden spice farms, Portuguese history, and art villages.',
    image: img4,
    date: '13 May 2025',
    content: `While beaches are iconic, Goa has a deeper cultural layer—explore spice plantations, old Portuguese churches, and creative art villages like Anjuna.`,
  },
  {
    id: 'boat-ride',
    title: 'Relaxing Boat Ride Through Nature’s Calm',
    date: '18 May 2025',
    image: boat_roam,
    description: 'Glide through waters and explore peaceful scenery for a refreshing escape into nature.',
    content: `Enjoy a peaceful boat ride that reconnects you with nature. Paddle through quiet waters surrounded by lush landscapes and listen to the sounds of birds and gentle waves.`,
  },
  {
    id: 'shimla-packing',
    title: 'What to Pack for a Trip to Shimla',
    date: '18 May 2025',
    image: shimlaImg,
    description: 'Get ready for the hills with this all-weather packing checklist for more comfort in Shimla.',
    content: `From woolen sweaters to rainproof jackets, packing right for Shimla can make your trip incredibly comfortable. Don’t forget your sunscreen, water bottle, and camera.`,
  },
  {
    id: 'darjeeling-sunrise',
    title: 'Catch the First Light at Tiger Hill',
    description: 'An early morning worth the climb, with views of Mt. Kanchenjunga.',
    image: img5,
    date: '10 May 2025',
    content: `Tiger Hill offers breathtaking views of the Himalayan sunrise. Arrive early to witness golden rays illuminating the snow-capped peaks, especially Mount Kanchenjunga.`,
  },
  {
    id: 'amer-fort',
    title: 'Walk Through the History of Amer Fort',
    date: '18 May 2025',
    image: amer_fortImg,
    description: 'Take a journey through Jaipur’s historic Amer Fort with tips for every visitor.',
    content: `Built in the 16th century, Amer Fort showcases Rajasthani architecture with majestic halls and scenic views. Explore Sheesh Mahal, Diwan-e-Khas, and other gems of this UNESCO site.`,
  },
  {
    id: 'rann-utsav',
    title: 'Rann Utsav: A Festival of White',
    description: 'Experience Gujarat’s cultural celebration in the white desert.',
    image: img6,
    date: '8 May 2025',
    content: `Held in the white desert of Kutch, Rann Utsav features folk music, dance, crafts, and camel rides under moonlit skies. It’s a celebration of Gujarat’s vibrant culture.`,
  },
  {
    id: 'prem-mandir',
    title: 'Evening at Prem Mandir, Vrindavan',
    date: '18 May 2025',
    image: prem_mandir,
    description: 'Experience the beauty of lights and devotion at Prem Mandir in the evening hours.',
    content: `As the sun sets, Prem Mandir glows with spiritual ambiance. The musical fountains, colorful lights, and devotional chants offer a mesmerizing experience you shouldn’t miss.`,
  },
  {
    id: 'hampi-ruins',
    title: 'Walking Through the Ruins of Hampi',
    description: 'A historic wonderland with boulders, temples, and stories untold.',
    image: img7,
    date: '5 May 2025',
    content: `Hampi, a UNESCO World Heritage Site, is known for its giant boulders, ancient temples, and the Tungabhadra River. It feels like walking through a mythical storybook.`,
  },
  {
    id: 'meghalaya-living-bridges',
    title: 'Living Root Bridges of Meghalaya',
    description: 'Explore nature’s engineering marvel in northeast India.',
    image: img8,
    date: '2 May 2025',
    content: `These bridges, formed by training tree roots across rivers, are living examples of sustainable architecture. Trek through the forests of Cherrapunji to witness them.`,
  },
  {
    id: 'mysore-dussehra',
    title: 'Royalty & Rituals of Mysore Dussehra',
    description: 'Step into royal history during this vibrant 10-day festival.',
    image: img9,
    date: '28 April 2025',
    content: `Mysore Dussehra is a blend of heritage and spectacle. Attend the royal procession, enjoy illuminated palaces, and witness age-old traditions that define Karnataka’s culture.`,
  },
  {
    id: 'varanasi-ghats',
    title: 'Evening Aarti at the Ghats of Varanasi',
    description: 'A sacred performance that touches the soul on the Ganges.',
    image: img12,
    date: '25 April 2025',
    content: `The Ganga Aarti at Dashashwamedh Ghat is a spiritual experience filled with chants, fire rituals, and devotion. It’s a sight and sound you won’t forget.`,
  },
  {
    id: 'spiti-calm',
    title: 'The Quiet Mystique of Spiti Valley',
    description: 'Less-traveled, stark, and soul-filling landscapes await.',
    image: img10,
    date: '22 April 2025',
    content: `Spiti is remote, raw, and magical. Surrounded by snow-capped peaks and ancient monasteries, it’s perfect for travelers seeking silence and beauty.`,
  },
  {
    id: 'rajasthan-colors',
    title: 'Painted Villages of Rajasthan',
    description: 'Discover Shekhawati’s fresco-filled havelis.',
    image: img11,
    date: '20 April 2025',
    content: `The Shekhawati region of Rajasthan is dotted with villages where walls and homes are painted with intricate frescoes. A walk here feels like strolling through an open-air museum.`,
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Typography variant="h6" align="center" mt={4}>Blog post not found.</Typography>;
  }

  return (
    <Box>
        <div className="navbar-main"><Navbar /></div>
         <Container sx={{ py: 6 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        Back to Blog
      </Button>

      <CardMedia
        component="img"
        image={post.image}
        alt={post.title}
        sx={{ borderRadius: 2, height: 360, mb: 3 }}
      />

      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
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

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {post.title}
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ fontSize: '16px', lineHeight: 1.8 }}>
        {post.content}
      </Typography>
    </Container>
    <div><BlogPage/></div>
     <div><Footer /></div>
    </Box>
   
  );
};

export default BlogDetail;
