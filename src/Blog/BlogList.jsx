import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Stack, Button, Avatar, Link} from '@mui/material';
import {  useLocation, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img1 from '../images/Shanti-Stupa-Leh-Ladakh.jpg';
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
import img13 from "../images/vrindavan_two.jpg"
import img14 from "../images/shimla-1024x768.jpg"
import img15 from "../images/pexels-axp-photography-19149585.jpg"
import img16 from "../images/istockphoto-154894958-612x612.jpg"
import img17 from "../images/Inde.jpg"
import img19 from "../images/haveli.jpg"
import img20 from "../images/Rich-Heritage-of-Varanasi.jpg"
import img21 from "../images/rs1.jpg"
import image18 from "../images/kuZBUyrpHA.webp"
import { Navbar } from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';
import shimlaImg from '../images/shimla-1024x768.jpg';
import prem_mandir from '../images/vrindavan.jpg';
import amer_fortImg from '../images/amer_fort.jpg';
import boat_roam from '../images/nivo.jpg';

const blogData = {
    featured: {
        id: 'ladakh-ride',
        title: 'Ladakh Adventure: Exploring Shanti Stupa',
        description: 'Discover the serene Shanti Stupa in Leh, ride through high-altitude landscapes, and experience thrilling adventure biking.',
        image: img1,
        date: '20 May 2025',
    },
    recent: [
        {
            id: 'udaipur-romance',
            title: 'Udaipur: The City of Lakes and Love',
            description: 'A romantic getaway filled with palaces, lakes, and dreamy sunsets.',
            image: img2,
            date: '18 May 2025',
        },
        {
            id: 'kerala-backwaters',
            title: 'Exploring the Backwaters of Kerala',
            description: 'Sail through lush, palm-fringed waterways in God’s Own Country.',
            image: img3,
            date: '15 May 2025',
        },
        {
            id: 'goa-vibes',
            title: 'Goa Beyond Beaches',
            description: 'Discover hidden spice farms, Portuguese history, and art villages.',
            image: img4,
            date: '13 May 2025',
        },
        {
            id: 'boat-ride',
            title: 'Relaxing Boat Ride Through Nature’s Calm',
            date: '18 May 2025',
            image: boat_roam,
            description:
                'Glide through waters and explore peaceful scenery for a refreshing escape into nature.',
        },
        {
            id: 'shimla-packing',
            title: 'What to Pack for a Trip to Shimla',
            date: '18 May 2025',
            image: shimlaImg,
            description:
                'Get ready for the hills with this all-weather packing checklist for more comfort in Shimla.',
        },


        {
            id: 'darjeeling-sunrise',
            title: 'Catch the First Light at Tiger Hill',
            date: '10 May 2025',
            image: img5,
            description: 'An early morning worth the climb, with views of Mt. Kanchenjunga.',
        },
        {
            id: 'amer-fort',
            title: 'Walk Through the History of Amer Fort',
            date: '18 May 2025',
            image: amer_fortImg,
            description:
                'Take a journey through Jaipur’s historic Amer Fort with tips for every visitor.',
        },
        {
            id: 'rann-utsav',
            title: 'Rann Utsav: A Festival of White',
            description: 'Experience Gujarat’s cultural celebration in the white desert.',
            image: img6,
            date: '8 May 2025',
        },
      
        {
            id: 'hampi-ruins',
            title: 'Walking Through the Ruins of Hampi',
            description: 'A historic wonderland with boulders, temples, and stories untold.',
            image: img7,
            date: '5 May 2025',
        },
    ],
    culture: [
        {
            id: 'meghalaya-living-bridges',
            title: 'Living Root Bridges of Meghalaya',
            description: 'Explore nature’s engineering marvel in northeast India.',
            image: img8,
            date: '2 May 2025',
        },
        {
            id: 'mysore-dussehra',
            title: 'Royalty & Rituals of Mysore Dussehra',
            description: 'Step into royal history during this vibrant 10-day festival.',
            image: img9,
            date: '28 April 2025',
        },
        {
            id: 'varanasi-ghats',
            title: 'Evening Aarti at the Ghats of Varanasi',
            description: 'A sacred performance that touches the soul on the Ganges.',
            image: img12,
            date: '25 April 2025',
        },
    ],
    hiddenGems: [
        {
            id: 'spiti-calm',
            title: 'The Quiet Mystique of Spiti Valley',
            description: 'Less-traveled, stark, and soul-filling landscapes await.',
            image: img10,
            date: '22 April 2025',
        },
        {
            id: 'rajasthan-colors',
            title: 'Painted Villages of Rajasthan',
            description: 'Discover Shekhawati’s fresco-filled havelis.',
            image: img11,
            date: '20 April 2025',
        },
    ],
};

const BlogPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleReadMore = (id)=>{
          navigate(`/blog/${id}`);
          window.scrollTo(0,0)
    }

    return (
        <>
            <Box 
            // sx={{ backgroundColor: '#f9f9f9' }}
            >
                {
                    location.pathname === '/blog' &&
                    <Box
                    sx={{
                        py: 10,
                        height: '350px',
                        backgroundImage: `url(${image18})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                        textAlign: 'center',
                        color: '#fff',
                    }}>
                    <Container>
                        <Typography variant="h3" sx={{ fontWeight: 700 }}>
                            Viatra Travel Blog
                        </Typography>
                        <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>
                            Unique stories from every corner of India.
                        </Typography>
                    </Container>
                </Box>
                }
                
                {/* Featured Article */}
               {location.pathname === '/blog' && <Container sx={{ py: 6 }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, fontFamily: 'InterMediumItalic', fontSize: '22px', color: '#3d3d3d' }}>
                        Featured Article
                    </Typography>
                    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, borderRadius: 3 }}>
                        <CardMedia component="img" sx={{ width: { md: '50%' }, height: 300 }} image={blogData.featured.image} />
                        <CardContent>
                            <Typography variant="caption" color="text.secondary">{blogData.featured.date}</Typography>
                            <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>
                                {blogData.featured.title}
                            </Typography>
                            <Typography variant="body2" sx={{ my: 2 }}>{blogData.featured.description}</Typography>
                            <Button component={Link}  href={`/blog/${blogData.featured.id}`} endIcon={<ArrowForwardIcon />}>
                                Read More
                            </Button>
                        </CardContent>
                    </Card>
                </Container>}

                {/* Recent Travel Stories */}
                <Container sx={{ py: 6 }}>
                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, fontFamily: 'InterMediumItalic', textAlign: 'center', fontSize: '22px', color: '#3d3d3d' }}>
                        Recent Travel Stories
                    </Typography>
                    <Grid container spacing={4} justifyContent='center'>
                        {blogData.recent.map((post) => (
                            <Grid item xs={12} sm={6} md={4} key={post.id} justifyContent='center'>
                                <Card sx={{ borderRadius: 3, width: {base: '300px',sm:'300px', md: '350px'} }}>
                                    <CardMedia component="img" height="180" image={post.image} />
                                    <CardContent>
                                        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                            <Avatar sx={{ width: 24, height: 24 }}>
                                                <PersonIcon fontSize="small" />
                                            </Avatar>
                                            <Typography variant="caption">Viatra Team</Typography>
                                            <CalendarTodayIcon sx={{ fontSize: 16, ml: 2 }} />
                                            <Typography variant="caption">{post.date}</Typography>
                                        </Stack>
                                        <Typography variant="subtitle1" fontWeight={600}>{post.title}</Typography>
                                        <Typography variant="body2" sx={{ mb: 2 }}>{post.description}</Typography>
                                        <Button component={Link} href={`/blog/${post.id}`} onClick={window.scrollTo(0,0)} endIcon={<ArrowForwardIcon />}>
                                            Read More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Culture & Festivals */}
                <Container sx={{ py: 6 }}>
                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, fontFamily: 'InterMediumItalic', textAlign: 'center', fontSize: '22px', color: '#3d3d3d' }}>
                        Culture & Festivals
                    </Typography>
                    <Grid container spacing={4} justifyContent='center'>
                        {blogData.culture.map((post) => (
                            <Grid item xs={12} sm={6} md={4} key={post.id}>
                                <Card sx={{ borderRadius: 3,width: {base: '300px',sm:'300px', md: '360px'} }}>
                                    <CardMedia component="img" height="180" image={post.image} />
                                    <CardContent>
                                        <Typography variant="caption" color="text.secondary">{post.date}</Typography>
                                        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 1 }}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mb: 2 }}>{post.description}</Typography>
                                        <Button component={Link} to={`/blog/${post.id}`} endIcon={<ArrowForwardIcon />}>
                                            Read More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Hidden Gems */}
                <Container sx={{ py: 6 }}>
                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, fontFamily: 'InterMediumItalic', textAlign: 'center', fontSize: '22px', color: '#3d3d3d' }}>
                        Hidden Gems in India
                    </Typography>
                    <Grid container spacing={4} justifyContent='center'>
                        {blogData.hiddenGems.map((post) => (
                            <Grid item xs={12} md={6} key={post.id}>
                                <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, boxShadow: 2 }}>
                                    <CardMedia component="img" image={post.image} sx={{ width: { sm: 180 }, height: 180 }} />
                                    <CardContent>
                                        <Typography variant="caption" color="text.secondary">{post.date}</Typography>
                                        <Typography variant="subtitle1" fontWeight={600}>{post.title}</Typography>
                                        <Typography variant="body2" sx={{ mb: 2 }}>{post.description}</Typography>
                                        <Button component={Link} to={`/blog/${post.id}`} endIcon={<ArrowForwardIcon />}>
                                            Read More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Photo Diary */}
                <Container sx={{ py: 6 }}>
                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, fontFamily: 'InterMediumItalic', textAlign: 'center', fontSize: '22px', color: '#3d3d3d' }}>
                        From Our Photo Diary
                    </Typography>
                    <Grid container spacing={2} justifyContent='center'>
                        {[img13, img14, img15, img16, img21, img8, img10, img20, img17, img6].map((img, i) => (
                            <Grid item xs={6} sm={4} md={2} key={i}>
                                <Box
                                    component="img"
                                    src={img}
                                    sx={{ width: {xs:'140px',sm: '200px', md: '200px'}, height: {xs: 140, sm:160,md: 160}, objectFit: 'cover', borderRadius: 2 }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    )
};

export default BlogPage;
