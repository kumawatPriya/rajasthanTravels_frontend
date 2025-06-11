import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Stack, } from '@mui/material';
import { Place, Checklist, LocalOffer, HeadsetMic } from '@mui/icons-material';
import himalaya_img from "../images/himalayas_velly.jpg";
import rishikesh_img from "../images/rishikesh.webp";
import jalMahal_img from "../images/royal_rajasthan.webp"
import InterestPackages from './PackagesbyInterest';
import TrendingDestinationsSlider from './TrendingDestination';
import IndiaAtAGlance from './IndiaAtGlance';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DestinationCards from './Cards';
import { Link } from 'react-router-dom';

const experiences = [
    {
        title: 'Explore the Himalayas',
        description: 'From Shimla to Manali, dive into snow-filled escapes and thrilling adventure.',
        image: himalaya_img,
    },
    {
        title: 'Rishikesh – Yoga Capital of the World',
        description: 'Blend of spirituality and adventure with river rafting, ashrams, and the Ganga Aarti.',
        image: rishikesh_img,
    },
    {
        title: 'Royal Rajasthan',
        description: 'Walk through palaces and deserts in Jaipur, Udaipur and Jaisalmer.',
        image: jalMahal_img,
    },
];

const categories = [
    { label: 'Hill Stations', image: '/images/hill.jpg' },
    { label: 'Beaches', image: '/images/beach.jpg' },
    { label: 'Heritage', image: '/images/heritage.jpg' },
    { label: 'Spiritual', image: '/images/spiritual.jpg' },
];

export default function DestinationPage() {
    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: `url("https://www.trafalgar.com/media/yxtps4mb/website-banner-taj-mahal-462772825.jpg?center=0.2810621166038131%2C0.49999999617765806&format=webp&mode=crop&width=1920&height=450&quality=80")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: {xs: '45vh', md: '75vh' },
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Dark transparent overlay
                        zIndex: 1,
                    }}
                />
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography variant="h3" fontWeight="bold" fontFamily='InterRegular' sx={{ fontSize: { xs: '26px', md: '48px' } }}>
                        Discover India with Viatra
                    </Typography>
                    <Typography variant="h6" mt={2} sx={{ fontSize: { xs: '16px', md: '20px' } }}>
                        Unique destinations. Authentic experiences. Handcrafted for you.
                    </Typography>
                    <Link to='/holidayPackages'>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                mt: { xs: 2, md: 4 },
                                fontSize: { xs: '0.75rem', md: '1rem' },
                                padding: { xs: '6px 16px', md: '10px 22px' },
                                borderRadius: { xs: '6px', md: '8px' },
                            }}
                        >
                            Browse Packages
                        </Button></Link>
                </Box>
            </Box>

            {/* Curated Experiences */}
            <Box px={4} py={8}>
                <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom textAlign='center'
                    fontFamily="Source_serif_pro" >
                    Curated Experiences
                </Typography>

                <Box
                    display="flex"
                    flexDirection={{xs: 'column', md: 'row'}}
                    gap={3}
                    overflow="auto"
                    py={2}
                    sx={{
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none',
                    }}
                >
                    {experiences.map((exp, idx) => (
                        <Box
                            key={idx}
                            minWidth={{xs:"290px",md:"385px"}}
                            height="238px"
                            position="relative"
                            borderRadius={3}
                            overflow="hidden"
                            sx={{
                                flexShrink: 0,
                                cursor: 'pointer',
                                transition: 'transform 0.3s',
                                '&:hover img': { transform: 'scale(1.1)' },
                            }}
                        >
                            <Box
                                component="img"
                                src={exp.image}
                                alt={exp.title}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.4s ease-in-out',
                                }}
                            />
                            <Box
                                position="absolute"
                                top={0}
                                left={0}
                                width="100%"
                                height="100%"
                                bgcolor="rgba(0,0,0,0.4)"
                                display="flex"
                                flexDirection="column"
                                justifyContent="flex-end"
                                p={2}
                            >
                                <Typography variant="h6" color="#fff" fontWeight={600}>
                                    {exp.title}
                                </Typography>
                                <Typography variant="body2" color="#eee">
                                    {exp.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Destination Categories */}

            <TrendingDestinationsSlider />
            <InterestPackages />
            <DestinationCards />
            <IndiaAtAGlance />
            {/* Final CTA */}
            <Box textAlign="center" py={8} px={{xs: 2, md:0}} bgcolor="#18a5b2" color="white">
                <Typography variant="h4" fontWeight={700}>
                    Your Indian Getaway Awaits
                </Typography>
                <Typography variant="body1" mt={2}>
                    Book your personalized package now with Viatra and travel hassle-free.
                </Typography>
                <Button variant="contained" size="large" sx={{ mt: 3, bgcolor: 'white', color: '#18a5b2' }}>
                    Start Planning
                </Button>
            </Box>
        </Box>
    );
}
