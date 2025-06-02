import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Button,
    Stack,
} from '@mui/material';
import { Place, Checklist, LocalOffer, HeadsetMic } from '@mui/icons-material';
import himalaya_img from "../images/himalayas_velly.jpg";
import rishikesh_img from "../images/rishikesh.webp";
import jalMahal_img from "../images/royal_rajasthan.webp"
import InterestPackages from './PackagesbyInterest';
import TrendingDestinationsSlider from './TrendingDestination';

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

const moreDestinations = [
    { title: 'Ziro Valley, Arunachal Pradesh', image: '/images/ziro.jpg', description: 'A peaceful highland known for its green fields, Apatani tribal culture, and music festival.' },
    { title: 'Coorg, Karnataka', image: '/images/coorg.jpg', description: 'Lush coffee estates, misty hills, and serene waterfalls in the Western Ghats.' },
    { title: 'Kaziranga National Park, Assam', image: '/images/kaziranga.jpg', description: 'UNESCO World Heritage site known for one-horned rhinos and wildlife safaris.' },
    { title: 'Andaman Islands', image: '/images/andaman.jpg', description: 'Tropical paradise with crystal-clear waters.' },
    { title: 'Meghalaya', image: '/images/meghalaya.jpg', description: 'Living root bridges and untouched nature.' },
    { title: 'Ranthambore, Rajasthan', image: '/images/ranthambore.jpg', description: 'Spot tigers and explore royal forts.' },
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
                    height: '75vh',
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
                    <Typography variant="h3" fontWeight="bold" fontFamily='InterRegular'>
                        Discover India with Viatra
                    </Typography>
                    <Typography variant="h6" mt={2}>
                        Unique destinations. Authentic experiences. Handcrafted for you.
                    </Typography>
                    <Button variant="contained" color="primary" size="large" sx={{ mt: 4 }}>
                        Browse Packages
                    </Button>
                </Box>
            </Box>

            {/* Curated Experiences */}
            <Box px={4} py={8}>
                <Typography variant="h5" fontWeight={700} gutterBottom fontFamily='InterMediumItalic'>
                    Curated Experiences
                </Typography>
                <Grid container spacing={4} mt={2}>
                    {experiences.map((exp, idx) => (
                        <Grid item xs={12} md={4} key={idx}>
                            <Card sx={{ transition: '0.3s', '&:hover': { transform: 'scale(1.02)' }, width: '375px' }}>
                                <CardMedia component="img" height="220" image={exp.image} />
                                <CardContent>
                                    <Typography variant="h6" fontWeight={600}>
                                        {exp.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {exp.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box px={4} py={8}>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                    Explore More Destinations
                </Typography>
                <Grid container spacing={4} mt={2}>
                    {moreDestinations.map((dest, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={idx}>
                            <Card sx={{ transition: '0.3s', '&:hover': { transform: 'scale(1.02)' } }}>
                                <CardMedia component="img" height="200" image={dest.image} />
                                <CardContent>
                                    <Typography variant="h6" fontWeight={600}>
                                        {dest.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {dest.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* Destination Categories */}
          

            <TrendingDestinationsSlider/>
       <InterestPackages/>

        


            {/* Final CTA */}
            <Box textAlign="center" py={8} bgcolor="#18a5b2" color="white">
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
