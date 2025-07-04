import { Box, Button, ButtonGroup, Card, CardContent, Grid, IconButton, Skeleton, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Config } from '../Utils/Config';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [wishlist, setWishlist] = useState([]);
    const navigate = useNavigate();
    const { userId } = useSelector((state) => state.auth);
    console.log(userId, 'userid')
    const getCards = async () => {
        try {
            const response = await fetch(`${Config?.Get_travel_packages}`);
            const getres = await response.json();
            setCardsData(getres?.data);
            console.log(getres, 'cardsData');
        }
        catch (error) {
            console.log(error, 'Error in fetching API response.')
        }
        finally {
            setLoading(false)
        }
    };

    const handleWishlistItem = (id) => {
        setWishlist((pre) => pre.includes(id) ? pre.filter((itemId) => itemId !== id) : [...pre, id])
    }

    useEffect(() => {
        getCards();
    }, [userId]);

     const handleViewDetails = (id)=>{
        navigate(`/packageDetails/${id}`)
   }
    return (
        <>
            <Box textAlign="center" my={4}>
                <Typography variant="h4" fontWeight={700} color="#18a5b2" gutterBottom>
                    Discover Incredible Holiday Packages
                </Typography>
                <Typography variant="subtitle1" lineHeight='20px' fontSize='15px' color="text.secondary" maxWidth="700px" mx="auto">
                    Carefully curated tour experiences from around India — perfect for every kind of traveler. Whether you're chasing mountains, beaches, or heritage trails, Viatra brings it all together for you.
                </Typography>
            </Box>
            <Grid container spacing={4} justifyContent="center" my={5}>

                {loading ? [1, 2, 3].map((s) => (
                    <Grid item xs={12} sm={6} md={4} key={s}>
                        <SkeletonCard />
                    </Grid>
                )) :
                    (cardsData?.length > 0 ? cardsData?.map((data, index) => {
                        return (
                            <>
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    key={index}
                                    justifyContent="center">
                                    <motion.div

                                        // initial="hidden"
                                        // whileInView="show"
                                        whileHover="hover"

                                    // viewport={{ once: true }}
                                    >
                                        <Card sx={{
                                            position: "relative", width: "340px", borderRadius: "8px", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)", overflow: "hidden",
                                            transition: "transform 0.3s ease",
                                            // "&:hover": {transform: "translateY(-5px)",}
                                        }}>
                                            <IconButton onClick={() => handleWishlistItem(data._id)}
                                                sx={{
                                                    fontSize: 20, backgroundColor: "#dedcdc78", position: "absolute", top: "5px", right: "5px", zIndex: 2,
                                                    ":focus-visible": {
                                                        backgroundColor: 'none'
                                                    }
                                                }}>
                                                {wishlist.includes(data._id) ? <FaHeart color='red' /> : <FaRegHeart color="white" />}
                                            </IconButton>
                                            <Box sx={{ height: 200, overflow: "hidden" }}>
                                                <motion.img
                                                    variants={{
                                                        rest: { scale: 1 },
                                                        hover: { scale: 1.1 },
                                                    }}
                                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                                    src={data.image}
                                                    alt={data.title}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </Box>
                                            <CardContent sx={{ p: 2 }}>
                                                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                                                    <Typography fontSize="16px" fontWeight={600} color="#3c3c3c">
                                                        {data.title}
                                                    </Typography>
                                                    <Box
                                                        component="span"
                                                        sx={{
                                                            backgroundColor: '#e0f7fa',
                                                            color: '#007c91',
                                                            px: 1.1,
                                                            py: 0.3,
                                                            borderRadius: '16px',
                                                            fontSize: '11px',
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        {data.tagline || "Adventure"} {/* optional field from backend */}
                                                    </Box>
                                                </Stack>

                                                <Typography variant="subtitle2" color="#5E6282" mb={1} noWrap>
                                                    {data.subtitle}
                                                </Typography>

                                                <Typography variant="body2" color="#5E6282" mb={1}>
                                                    Trip Days – {data.duration}
                                                </Typography>

                                                <Typography
                                                    fontSize="14px"
                                                    fontFamily="system-ui"
                                                    noWrap
                                                    fontWeight={600}
                                                    color="#414141"
                                                    mb={1}
                                                >
                                                    {data.destination}
                                                </Typography>

                                                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                                    <Typography variant="body2" fontWeight={500} color="#ffb400">
                                                        ⭐ {data.rating || "4.5"} {/* Add a rating field from backend */}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        ({data.reviews || "120 reviews"})
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="end" spacing={0.5}>
                                                    <Typography variant="body1" fontSize="14px" color="#e20303" fontWeight={600}>
                                                        Rs{data.price}
                                                    </Typography>
                                                    <Typography fontSize="13px" color="grey">
                                                        per person
                                                    </Typography>
                                                </Stack>
                                            </CardContent>
                                            <Stack alignItems='center' mb={4}>
                                                <ButtonGroup
                                                    disableElevation
                                                    variant="contained"
                                                    sx={{
                                                        borderRadius: "999px",
                                                        overflow: "hidden",
                                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                                    }}
                                                >
                                                    <Button   onClick={()=>{handleViewDetails(data?.id)}}
                                                        sx={{
                                                            backgroundColor: "#18a5b2",
                                                            color: "#fff",
                                                            fontWeight: 500,
                                                            textTransform: "none",
                                                            px: 3,
                                                            // py: 1,
                                                            "&:hover": {
                                                                backgroundColor: "#15929d",
                                                            },
                                                        }}
                                                    >
                                                        View Details
                                                    </Button>
                                                    <Button
                                                        sx={{
                                                            backgroundColor: "#f58c00",
                                                            color: "#fff",
                                                            fontWeight: 500,
                                                            textTransform: "none",
                                                            px: 5,
                                                            // py:1,
                                                            "&:hover": {
                                                                backgroundColor: "#e17a00",
                                                            },
                                                        }}
                                                    >
                                                        Enquire
                                                    </Button>
                                                </ButtonGroup>
                                            </Stack>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            </>
                        );
                    }) : (<><Typography>No data found</Typography></>))
                }
            </Grid>
        </>
    )
}

const SkeletonCard = () => (
    <Card
        sx={{
            width: 340,
            borderRadius: 2,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        }}
    >
        <Skeleton variant="rectangular" height={200} />
        <CardContent>
            <Skeleton width="60%" height={30} />
            <Skeleton width="90%" />
            <Skeleton width="50%" />
            <Skeleton width="80%" />
        </CardContent>
        <Box sx={{ px: 2, pb: 2 }}>
            <Skeleton variant="rectangular" width="40%" height={36} />
        </Box>
    </Card>
);

export default Cards