import React, { useState } from 'react';
import Slider from 'react-slick';
import {
    Box,
    Typography,
    Avatar,
    Card,
    CardContent,
    Rating,
    useTheme,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { motion } from 'framer-motion';

import slide1 from '../images/vrindavan.jpg';
import slide2 from '../images/download.jpg';
import slide3 from '../images/mysoreIcon-removebg-preview.png';
import mountainImg from "../images/landscape-alpine-mountains.jpg";

const testimonials = [
    {
        name: 'John Smith',
        role: 'Solo Traveler',
        rating: 4,
        text: 'Viatra made my solo travel experience memorable! From booking to support, everything was seamless. I felt safe throughout my journey.',
        avatar: slide1,
    },
    {
        name: 'Jane Smith',
        role: 'Blogger',
        rating: 4.5,
        text: 'Loved every bit of the journey. The services were top-notch! I got to explore hidden gems. Viatra’s team made the entire journey feel effortless.',
        avatar: slide2,
    },
    {
        name: 'Paula Tana',
        role: 'Traveler',
        rating: 5,
        text: 'Highly recommend Viatra! Everything was amazing — from the accommodations to local experiences. It felt like a custom-made trip.',
        avatar: slide3,
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    centerPadding: '20px',
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box
            sx={{
                position: 'relative',
                py: 8,
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${mountainImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: '#333',
            }}
        >
            {/* Title */}
            <Box sx={{ textAlign: 'center', mb: 8, position: 'relative' }}>
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Typography variant="h4" fontWeight="bold" sx={{ position: 'relative', zIndex: 2, fontSize:{xs:'22px',md:'33px'} }}>
                        What Our Customers Say
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.2 }}
                    transition={{ delay: 0.1, duration: 0.3, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            position: 'absolute',
                            top: '0px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            fontWeight: 'bold',
                            fontSize: { xs: '2.5rem', md: '6rem' },
                            letterSpacing: 5,
                            textTransform: 'uppercase',
                            userSelect: 'none',
                            zIndex: 1,
                        }}
                    >
                        Testimonials
                    </Typography>
                </motion.div>
            </Box>

            {/* Slider */}
            <motion.div
                variants={containerVariants}
                // initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <Box sx={{ maxWidth: '1150px', mx: 'auto', px: 2 }}>
                    <Slider {...settings} className="custom-slider">
                        {testimonials.map((t, i) => (
                            <motion.div
                                variants={itemVariants}
                                initial="hidden"
                                animate="show"
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <Box px={2}>
                                    <Card
                                        sx={{
                                            background: 'rgba(255, 255, 255, 0.7)',
                                            backdropFilter: 'blur(6px)',
                                            borderRadius: 4,
                                            p: 3,
                                            boxShadow: 3,
                                            color: '#000',
                                            minHeight: 270,
                                        }}
                                    >
                                        <CardContent>
                                            <FormatQuoteIcon fontSize="large" sx={{ opacity: 0.3, fontSize: 40 }} />
                                            <Typography
                                                variant="body1"
                                                sx={{ fontStyle: 'italic', mb: 3 }}
                                            >
                                                {t.text}
                                            </Typography>
                                            <Box display="flex" alignItems="center" gap={2}>
                                                <Avatar src={t.avatar} alt={t.name} />
                                                <Box textAlign="left">
                                                    <Typography fontWeight="bold">{t.name}</Typography>
                                                    <Rating
                                                        value={t.rating}
                                                        precision={0.5}
                                                        readOnly
                                                        size="small"
                                                    />
                                                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                                        {t.role}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </motion.div>
                        ))}
                    </Slider>
                </Box>
            </motion.div>
        </Box>
    );
};

export default Testimonials;
