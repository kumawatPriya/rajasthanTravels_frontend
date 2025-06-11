import React from "react";
import lehimg from '../images/5e3ba02fca7da-Ladakh_Package_Tour.jpg';
import varanasi from "../images/gettyimages-157533612-612x612.jpg";
import goaimg from "../images/keralaplace.jpg"
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Box,
    Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

const cardData = [
    {
        title: "Leh, Ladakh",
        price: "Rs10.5k",
        duration: "6 Days Trip",
        image: `${lehimg}`,
    },
    {
        title: "Jaiselmer, Rajasthan",
        price: "Rs8.4k",
        duration: "8 Days Trip",
        image: `${varanasi}`,
    },
    {
        title: "Kumarakom, Kerala",
        price: "Rs15k",
        duration: "5 Days Trip",
        image: `${goaimg}`,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};

export const TopDestinations = () => {
    return (
        <>
            <Box sx={{ px: 5, py: {xs: 4, md:8}, textAlign: "center", backgroundColor: "#fff" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Typography variant="subtitle1" color="text.secondary">
                        Top Selling
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" gutterBottom fontFamily='InterRegular' fontSize={{xs: '22px', md: '33px'}}>
                        Top Destinations
                    </Typography>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <Grid container spacing={4} justifyContent="center" mt={2}>
                        {cardData.map((card, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} width='320px' sx={{ cursor: 'pointer' }}>
                                <motion.div variants={cardVariants}
                                    custom={index}
                                    initial="hidden"
                                    whileInView="show"
                                    whileHover="hover"
                                    viewport={{ once: true }}>
                                    <Card
                                        sx={{
                                            overflow: "hidden",
                                            // borderRadius: 4,
                                            boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.15)',
                                            transition: "0.3s",
                                            "&:hover": {
                                                boxShadow: 5,
                                            },
                                        }}
                                    >
                                        <Box sx={{ height: 200, overflow: "hidden" }}>
                                            <motion.img
                                                variants={{
                                                    rest: { scale: 1 },
                                                    hover: { scale: 1.1 },
                                                }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                src={card.image}
                                                alt={card.title}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </Box>

                                        <CardContent>
                                            <Typography variant="h6" fontSize='17px' fontFamily='system-ui' fontWeight="600">
                                                {card.title}
                                            </Typography>
                                            <Stack
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="center"
                                                mt={1}
                                            >
                                                <Stack direction="row" alignItems="center" spacing={0.5}>
                                                    <LocationOnIcon fontSize="small" />
                                                    <Typography variant="body2" color="text.secondary">
                                                        {card.duration}
                                                    </Typography>
                                                </Stack>
                                                <Typography variant="body1" fontWeight="bold" fontSize='14px'>
                                                    {card.price}
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Box>
        </>
    );
}
